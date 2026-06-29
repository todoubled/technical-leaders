/**
 * POST /api/stripe/workshop-verify-email
 *
 * Stateless email-confirmation gate for /claude-workshop-replay.
 *
 * Stripe is the only source of truth — no persistence layer, no JWT minting,
 * no webhook coupling. The visitor submits the email they used at Stripe
 * checkout, and this endpoint queries Stripe live to confirm that email bought
 * the workshop replay product.
 *
 * Lookup strategy (the workshop is sold through a Stripe Payment Link, so the
 * purchase is not guaranteed to be attached to a saved Customer):
 *  1. PRIMARY — match the email on the actual purchase. We page through
 *     completed Checkout Sessions (scoped to the workshop Payment Link when we
 *     can resolve it, to bound the scan) and compare the normalized
 *     `customer_details.email` against the submitted email. This resolves
 *     guest / Payment Link buyers whose email lives only on the session, with
 *     no linked Customer, and is case/whitespace-insensitive on both sides.
 *  2. SECONDARY — the customer-based path: find Customer records for the email
 *     (case-insensitive via customers/search, with the list filter as a
 *     fallback) and check their completed sessions and active subscriptions.
 *     This still covers subscription bundles and any purchase that did create a
 *     Customer.
 * Access is granted if either path finds the workshop product.
 *
 * Design notes:
 *  - Returns { access: true } or { access: false } directly. We deliberately
 *    do NOT return identical responses for valid/invalid emails; the user
 *    needs to know whether their entry worked. The enumeration risk is an
 *    accepted trade-off for UX simplicity (see prompt 089).
 *  - Fails closed on Stripe errors (500 + { access: false }).
 *  - No emails or customer data are logged.
 *  - Product ID is read from WORKSHOP_REPLAY_PRODUCT_ID with a literal
 *    fallback so a future product swap doesn't require code changes. The
 *    Payment Link can be pinned with WORKSHOP_REPLAY_PAYMENT_LINK_ID; if unset
 *    we resolve it from its public URL once per request.
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";
// NOTE: the .js extension is required. package.json sets "type": "module", so
// Vercel compiles this handler to an ES module and Node's ESM loader will not
// resolve an extensionless relative import at runtime. Omitting it makes the
// whole function crash on load with ERR_MODULE_NOT_FOUND (a 500 on every
// request), which the gate surfaces as "We couldn't find a purchase for that
// email" for buyers who actually purchased.
import { handleCors, json, errorResponse, stripeGet } from "./_lib.js";

const FALLBACK_PRODUCT_ID = "prod_UEOF7uxtQvH8MB";
// Public URL of the workshop Stripe Payment Link (see src/pages/ClaudeWorkshop
// .tsx). Used to resolve the Payment Link id so the session scan can be scoped
// to this product instead of every session in the account.
const PAYMENT_LINK_URL = "https://buy.stripe.com/4gM14nh1T1kb3nA4F6aMU0O";
// Safety cap on paginated scans so a runaway loop can never hang the function.
const MAX_PAGES = 50;

interface StripeListResponse<T> {
  data: T[];
  has_more?: boolean;
  // customers/search uses cursor-style pagination via next_page.
  next_page?: string | null;
}

interface StripeCustomer {
  id: string;
  email?: string | null;
}

interface StripeLineItem {
  price?: {
    product?: string | { id: string };
  };
}

interface StripeCheckoutSession {
  id: string;
  status?: string;
  customer_email?: string | null;
  customer_details?: { email?: string | null } | null;
  line_items?: StripeListResponse<StripeLineItem>;
}

interface StripeSubscriptionItem {
  price?: {
    product?: string | { id: string };
  };
}

interface StripeSubscription {
  items: StripeListResponse<StripeSubscriptionItem>;
}

interface StripePaymentLink {
  id: string;
  url?: string;
}

function productIdOf(value: string | { id: string } | undefined): string | null {
  if (!value) return null;
  return typeof value === "string" ? value : value.id;
}

function normalizeEmail(value: string | null | undefined): string {
  return (value ?? "").trim().toLowerCase();
}

function sessionMatchesProduct(
  session: StripeCheckoutSession,
  productId: string,
): boolean {
  if (session.status !== "complete") return false;
  for (const item of session.line_items?.data ?? []) {
    if (productIdOf(item.price?.product) === productId) return true;
  }
  return false;
}

// Resolve the workshop Payment Link id from its public URL. Returns null if it
// can't be found (or the key lacks the scope) — callers then fall back to an
// unscoped session scan rather than failing.
async function resolveWorkshopPaymentLinkId(): Promise<string | null> {
  const pinned = process.env.WORKSHOP_REPLAY_PAYMENT_LINK_ID;
  if (pinned) return pinned;

  let startingAfter = "";
  for (let page = 0; page < MAX_PAGES; page++) {
    const res = (await stripeGet(
      `/payment_links?limit=100${
        startingAfter ? `&starting_after=${startingAfter}` : ""
      }`,
    )) as StripeListResponse<StripePaymentLink>;
    for (const link of res?.data ?? []) {
      if (link.url === PAYMENT_LINK_URL) return link.id;
    }
    if (!res?.has_more) break;
    const data = res.data ?? [];
    startingAfter = data.length ? data[data.length - 1].id : "";
    if (!startingAfter) break;
  }
  return null;
}

// PRIMARY path: page through completed Checkout Sessions and match the buyer
// on customer_details.email. Handles guest / Payment Link checkouts that never
// produced a Customer record, plus email case/whitespace differences.
async function purchaseFoundBySessionEmail(
  email: string,
  productId: string,
): Promise<boolean> {
  const paymentLinkId = await resolveWorkshopPaymentLinkId();
  const scope = paymentLinkId
    ? `payment_link=${encodeURIComponent(paymentLinkId)}&`
    : "";

  let startingAfter = "";
  for (let page = 0; page < MAX_PAGES; page++) {
    const res = (await stripeGet(
      `/checkout/sessions?${scope}limit=100${
        startingAfter ? `&starting_after=${startingAfter}` : ""
      }&expand[]=data.line_items`,
    )) as StripeListResponse<StripeCheckoutSession>;

    const sessions = res?.data ?? [];
    for (const session of sessions) {
      const sessionEmail = normalizeEmail(
        session.customer_details?.email ?? session.customer_email,
      );
      if (sessionEmail !== email) continue;
      if (sessionMatchesProduct(session, productId)) return true;
    }

    if (!res?.has_more) break;
    startingAfter = sessions.length ? sessions[sessions.length - 1].id : "";
    if (!startingAfter) break;
  }
  return false;
}

// Collect Customer ids for the email. customers/search is case-insensitive and
// is the primary source; the exact-match list filter is a fallback (and covers
// keys without search access). Both are paginated.
async function findCustomerIds(email: string): Promise<string[]> {
  const ids = new Set<string>();

  try {
    let nextPage = "";
    for (let page = 0; page < MAX_PAGES; page++) {
      const res = (await stripeGet(
        `/customers/search?query=${encodeURIComponent(
          `email:'${email}'`,
        )}&limit=100${nextPage ? `&page=${encodeURIComponent(nextPage)}` : ""}`,
      )) as StripeListResponse<StripeCustomer>;
      for (const customer of res?.data ?? []) {
        if (customer.id && normalizeEmail(customer.email) === email) {
          ids.add(customer.id);
        }
      }
      if (res?.has_more && res.next_page) nextPage = res.next_page;
      else break;
    }
  } catch {
    // search may be unavailable (e.g. a restricted key without that scope);
    // the list-filter fallback below still resolves exact matches.
  }

  let startingAfter = "";
  for (let page = 0; page < MAX_PAGES; page++) {
    const res = (await stripeGet(
      `/customers?email=${encodeURIComponent(email)}&limit=100${
        startingAfter ? `&starting_after=${startingAfter}` : ""
      }`,
    )) as StripeListResponse<StripeCustomer>;
    for (const customer of res?.data ?? []) {
      if (customer.id) ids.add(customer.id);
    }
    if (!res?.has_more) break;
    const data = res.data ?? [];
    startingAfter = data.length ? data[data.length - 1].id : "";
    if (!startingAfter) break;
  }

  return [...ids];
}

// SECONDARY path: a known Customer purchased the product, via a completed
// checkout session or an active subscription (in case the replay is bundled).
async function customerHasWorkshopAccess(
  customerId: string,
  productId: string,
): Promise<boolean> {
  // One-time purchases (checkout sessions). The line_items array is not
  // returned by default — we have to expand it. We avoid expanding
  // price.product because the un-expanded product field is the bare
  // product ID string, which is all we need to compare.
  let startingAfter = "";
  for (let page = 0; page < MAX_PAGES; page++) {
    const sessions = (await stripeGet(
      `/checkout/sessions?customer=${encodeURIComponent(
        customerId,
      )}&limit=100${
        startingAfter ? `&starting_after=${startingAfter}` : ""
      }&expand[]=data.line_items`,
    )) as StripeListResponse<StripeCheckoutSession>;

    const data = sessions?.data ?? [];
    for (const session of data) {
      if (sessionMatchesProduct(session, productId)) return true;
    }
    if (!sessions?.has_more) break;
    startingAfter = data.length ? data[data.length - 1].id : "";
    if (!startingAfter) break;
  }

  // Active subscriptions (in case the workshop replay is ever bundled).
  const subs = (await stripeGet(
    `/subscriptions?customer=${encodeURIComponent(
      customerId,
    )}&status=active&limit=100`,
  )) as StripeListResponse<StripeSubscription>;

  for (const sub of subs?.data ?? []) {
    for (const item of sub.items?.data ?? []) {
      if (productIdOf(item.price?.product) === productId) return true;
    }
  }

  return false;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (handleCors(req, res)) return;
  if (req.method !== "POST") {
    return errorResponse(res, "Method not allowed", 405);
  }

  try {
    const rawEmail = (req.body?.email ?? "") as unknown;
    if (typeof rawEmail !== "string" || !rawEmail.includes("@")) {
      return errorResponse(res, "Invalid email", 400);
    }

    const email = normalizeEmail(rawEmail);
    if (!email || !email.includes("@")) {
      return errorResponse(res, "Invalid email", 400);
    }

    const productId =
      process.env.WORKSHOP_REPLAY_PRODUCT_ID || FALLBACK_PRODUCT_ID;

    // PRIMARY: match the purchase by the email on the checkout session itself.
    // This is what unlocks Payment Link / guest buyers with no linked Customer.
    if (await purchaseFoundBySessionEmail(email, productId)) {
      return json(res, { access: true });
    }

    // SECONDARY: fall back to the customer-based lookup (subscriptions + any
    // sessions that did attach to a Customer).
    for (const customerId of await findCustomerIds(email)) {
      if (await customerHasWorkshopAccess(customerId, productId)) {
        return json(res, { access: true });
      }
    }

    return json(res, { access: false });
  } catch (err) {
    console.error("Workshop verify-email error:", err);
    // Fail closed: deny access if Stripe is unreachable or returns an error.
    return json(res, { access: false }, 500);
  }
}
