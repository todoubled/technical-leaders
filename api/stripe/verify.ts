import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  handleCors,
  json,
  errorResponse,
  kv,
  signJwt,
  stripeGet,
  getTierFromPriceId,
  LicenseRecord,
} from "./_lib";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (handleCors(req, res)) return;
  if (req.method !== "POST") return errorResponse(res, "Method not allowed", 405);

  try {
    const { license_key, machine_id } = req.body;
    if (!license_key || !machine_id) {
      return errorResponse(res, "Missing license_key or machine_id");
    }

    const db = kv();
    const record = await db.get<LicenseRecord>(`license:${license_key}`);
    if (!record) return errorResponse(res, "License not found", 404);

    if (record.machine_id !== machine_id) {
      return errorResponse(res, "Machine mismatch", 403);
    }

    if (record.status === "cancelled") {
      return errorResponse(res, "Subscription cancelled", 403);
    }

    // Verify subscription is still active with Stripe
    try {
      const subscription = await stripeGet(
        `/subscriptions/${record.stripe_subscription_id}`
      );
      if (
        subscription.status !== "active" &&
        subscription.status !== "trialing"
      ) {
        record.status = subscription.status;
        record.tier = "free";
        await db.set(`license:${license_key}`, record);
        return errorResponse(res, "Subscription no longer active", 403);
      }

      const priceId = subscription.items.data[0]?.price?.id || "";
      record.tier = getTierFromPriceId(priceId);
      record.status = "active";
      await db.set(`license:${license_key}`, record);
    } catch {
      // If Stripe is unreachable, still issue JWT based on stored record
    }

    const now = Math.floor(Date.now() / 1000);
    const jwt = await signJwt({
      sub: license_key,
      tier: record.tier,
      mid: machine_id,
      iat: now,
      exp: now + 30 * 24 * 60 * 60,
      iss: "t-app",
    });

    json(res, { jwt });
  } catch (err: any) {
    console.error("Verify error:", err);
    errorResponse(res, err.message || "Internal error", 500);
  }
}
