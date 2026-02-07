import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  handleCors,
  json,
  errorResponse,
  kv,
  stripeRequest,
  LicenseRecord,
} from "./_lib";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (handleCors(req, res)) return;
  if (req.method !== "POST") return errorResponse(res, "Method not allowed", 405);

  try {
    const { license_key } = req.body;
    if (!license_key) return errorResponse(res, "Missing license_key");

    const db = kv();
    const record = await db.get<LicenseRecord>(`license:${license_key}`);
    if (!record) return errorResponse(res, "License not found", 404);

    const session = await stripeRequest("/billing_portal/sessions", {
      customer: record.stripe_customer_id,
    });

    json(res, { url: session.url });
  } catch (err: any) {
    console.error("Portal error:", err);
    errorResponse(res, err.message || "Internal error", 500);
  }
}
