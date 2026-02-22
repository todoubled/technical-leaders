import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  handleCors,
  json,
  errorResponse,
  kv,
  signJwt,
  generateCode,
  generateLicenseKey,
  LicenseRecord,
} from "./_lib";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (handleCors(req, res)) return;
  if (req.method !== "POST") return errorResponse(res, "Method not allowed", 405);

  try {
    const { code, machine_id } = req.body;
    if (!code || !machine_id) return errorResponse(res, "Missing code or machine_id");

    const db = kv();

    // Look up the bulk purchase by activation code
    const bulkData = await db.get<{
      license_key: string;
      quantity: number;
      tier: string;
    }>(`activation:${code.trim().toUpperCase()}`);

    if (!bulkData) {
      return errorResponse(res, "Invalid or expired bulk activation code", 404);
    }

    const parentRecord = await db.get<LicenseRecord>(`license:${bulkData.license_key}`);
    if (!parentRecord) return errorResponse(res, "License not found", 404);

    const quantity = bulkData.quantity || 1;
    const tier = bulkData.tier || parentRecord.tier;
    const purchaseId = `bulk_${Date.now().toString(36)}_${code.trim().toUpperCase()}`;

    // Generate individual license keys for each seat
    const keys = [];
    for (let i = 0; i < quantity; i++) {
      const individualCode = generateCode();
      const individualKey = generateLicenseKey();

      // Create a license record for each seat
      const seatRecord: LicenseRecord = {
        stripe_customer_id: parentRecord.stripe_customer_id,
        stripe_subscription_id: parentRecord.stripe_subscription_id,
        tier,
        status: "active",
        machine_id: "",
        email: parentRecord.email,
      };

      await db.set(`license:${individualKey}`, seatRecord);
      await db.set(`activation:${individualCode}`, { license_key: individualKey }, { ex: 7 * 24 * 3600 });

      keys.push({
        code: individualCode,
        license_key: individualKey,
        tier,
        activated: false,
      });
    }

    // Store the bulk purchase record
    await db.set(`bulk:${purchaseId}`, {
      parent_license_key: bulkData.license_key,
      keys,
      created_at: new Date().toISOString(),
    });

    // Delete the original bulk activation code
    await db.del(`activation:${code.trim().toUpperCase()}`);

    json(res, { keys, purchase_id: purchaseId });
  } catch (err: any) {
    console.error("Bulk activate error:", err);
    errorResponse(res, err.message || "Internal error", 500);
  }
}
