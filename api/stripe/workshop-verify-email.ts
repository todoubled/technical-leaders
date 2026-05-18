/**
 * POST /api/stripe/workshop-verify-email
 *
 * Stateless email-confirmation gate for /claude-workshop-replay.
 *
 * Stripe is the only source of truth — no persistence layer, no JWT minting,
 * no webhook coupling. The visitor submits the email they used at Stripe
 * checkout, and this endpoint queries Stripe live to confirm that email maps
 * to a customer who purchased the workshop replay product.
 *
 * Design notes:
 *  - Returns { access: true } or { access: false } directly. We deliberately
 *    do NOT return identical responses for valid/invalid emails; the user
 *    needs to know whether their entry worked. The enumeration risk is an
 *    accepted trade-off for UX simplicity (see prompt 089).
 *  - Fails closed on Stripe errors (500 + { access: false }).
 *  - No emails or customer data are logged.
 *  - Product ID is read from WORKSHOP_REPLAY_PRODUCT_ID with a literal
 *    fallback so a future product swap doesn't require code changes.
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";
import { handleCors, json, errorResponse, stripeGet } from "./_lib";

const FALLBACK_PRODUCT_ID = "prod_UEOF7uxtQvH8MB";

interface StripeListResponse<T> {
  data: T[];
  has_more?: boolean;
}

interface StripeCustomer {
  id: string;
}

interface StripeLineItem {
  price?: {
    product?: string | { id: string };
  };
}

interface StripeCheckoutSession {
  status?: string;
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

function productIdOf(value: string | { id: string } | undefined): string | null {
  if (!value) return null;
  return typeof value === "string" ? value : value.id;
}

async function customerHasWorkshopAccess(
  customerId: string,
  productId: string,
): Promise<boolean> {
  // One-time purchases (checkout sessions). The line_items array is not
  // returned by default — we have to expand it. We avoid expanding
  // price.product because the un-expanded product field is the bare
  // product ID string, which is all we need to compare.
  const sessions = await stripeGet(
    `/checkout/sessions?customer=${encodeURIComponent(
      customerId,
    )}&limit=100&expand[]=data.line_items`,
  );

  for (const session of (sessions?.data ?? []) as StripeCheckoutSession[]) {
    if (session.status !== "complete") continue;
    for (const item of session.line_items?.data ?? []) {
      if (productIdOf(item.price?.product) === productId) return true;
    }
  }

  // Active subscriptions (in case the workshop replay is ever bundled).
  const subs = await stripeGet(
    `/subscriptions?customer=${encodeURIComponent(
      customerId,
    )}&status=active&limit=100`,
  );

  for (const sub of (subs?.data ?? []) as StripeSubscription[]) {
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

    const email = rawEmail.trim().toLowerCase();
    if (!email || !email.includes("@")) {
      return errorResponse(res, "Invalid email", 400);
    }

    const productId =
      process.env.WORKSHOP_REPLAY_PRODUCT_ID || FALLBACK_PRODUCT_ID;

    const customers = await stripeGet(
      `/customers?email=${encodeURIComponent(email)}&limit=10`,
    );
    const customerList = (customers?.data ?? []) as StripeCustomer[];

    if (customerList.length === 0) {
      return json(res, { access: false });
    }

    for (const customer of customerList) {
      if (!customer?.id) continue;
      if (await customerHasWorkshopAccess(customer.id, productId)) {
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
