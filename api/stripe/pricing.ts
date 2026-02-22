import type { VercelRequest, VercelResponse } from "@vercel/node";
import { handleCors, json, errorResponse, stripeGet } from "./_lib";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (handleCors(req, res)) return;
  if (req.method !== "GET") return errorResponse(res, "Method not allowed", 405);

  try {
    const priceIds = [
      { plan: "academy", env: "STRIPE_PRICE_ACADEMY_MONTHLY", billing: "monthly" },
      { plan: "academy", env: "STRIPE_PRICE_ACADEMY_ANNUAL", billing: "annual" },
      { plan: "pro", env: "STRIPE_PRICE_PRO_MONTHLY", billing: "monthly" },
      { plan: "pro", env: "STRIPE_PRICE_PRO_ANNUAL", billing: "annual" },
    ];

    const prices: Record<string, { monthly: number; annual_monthly: number; annual_total: number }> = {};

    for (const { plan, env, billing } of priceIds) {
      const id = process.env[env];
      if (!id) continue;

      const price = await stripeGet(`/prices/${id}`);
      const amount = (price.unit_amount || 0) / 100;

      if (!prices[plan]) {
        prices[plan] = { monthly: 0, annual_monthly: 0, annual_total: 0 };
      }

      if (billing === "monthly") {
        prices[plan].monthly = amount;
      } else {
        prices[plan].annual_total = amount * 12;
        prices[plan].annual_monthly = amount;
      }
    }

    const plans = Object.entries(prices).map(([plan, data]) => ({
      plan,
      ...data,
    }));

    json(res, { plans });
  } catch (err: any) {
    console.error("Pricing error:", err);
    errorResponse(res, err.message || "Internal error", 500);
  }
}
