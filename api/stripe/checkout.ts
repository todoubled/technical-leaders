import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  handleCors,
  json,
  errorResponse,
  kv,
  getPriceId,
  generateLicenseKey,
  stripeRequest,
} from "./_lib";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (handleCors(req, res)) return;
  if (req.method !== "POST") return errorResponse(res, "Method not allowed", 405);

  try {
    const { plan, billing, machine_id, source } = req.body;
    if (!plan) return errorResponse(res, "Missing plan");

    const mid = machine_id || "";
    const priceId = getPriceId(plan, billing || "monthly");
    const licenseKey = generateLicenseKey();
    const workerUrl = `https://${req.headers.host}`;

    const quantity = req.body.quantity;
    const qty = quantity && Number(quantity) >= 2 ? Number(quantity) : 1;

    const params: Record<string, string> = {
      mode: "subscription",
      "line_items[0][price]": priceId,
      "line_items[0][quantity]": String(qty),
      allow_promotion_codes: "true",
      success_url: `${workerUrl}/api/stripe/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${workerUrl}/api/stripe/cancelled`,
      "metadata[license_key]": licenseKey,
      "metadata[machine_id]": mid,
      "metadata[source]": source || "app",
      "metadata[quantity]": String(qty),
      "subscription_data[metadata][license_key]": licenseKey,
      "subscription_data[metadata][machine_id]": mid,
    };

    const session = await stripeRequest("/checkout/sessions", params);

    await kv().set(`session:${session.id}`, { license_key: licenseKey }, { ex: 3600 });

    json(res, { url: session.url });
  } catch (err: any) {
    console.error("Checkout error:", err);
    errorResponse(res, err.message || "Internal error", 500);
  }
}
