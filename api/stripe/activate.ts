import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  handleCors,
  json,
  errorResponse,
  kv,
  signJwt,
  LicenseRecord,
} from "./_lib";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (handleCors(req, res)) return;
  if (req.method !== "POST") return errorResponse(res, "Method not allowed", 405);

  try {
    const { code, machine_id } = req.body;
    if (!code || !machine_id) return errorResponse(res, "Missing code or machine_id");

    const db = kv();
    const activationData = await db.get<{ license_key: string }>(
      `activation:${code}`
    );
    if (!activationData) {
      return errorResponse(res, "Invalid or expired activation code", 404);
    }

    const licenseKey = activationData.license_key;
    const record = await db.get<LicenseRecord>(`license:${licenseKey}`);
    if (!record) return errorResponse(res, "License not found", 404);

    if (record.machine_id && record.machine_id !== machine_id) {
      return errorResponse(res, "License is bound to a different machine", 403);
    }

    record.machine_id = machine_id;
    await db.set(`license:${licenseKey}`, record);
    await db.del(`activation:${code}`);

    const now = Math.floor(Date.now() / 1000);
    const jwt = await signJwt({
      sub: licenseKey,
      tier: record.tier,
      mid: machine_id,
      iat: now,
      exp: now + 30 * 24 * 60 * 60,
      iss: "t-app",
    });

    json(res, { jwt, license_key: licenseKey });
  } catch (err: any) {
    console.error("Activate error:", err);
    errorResponse(res, err.message || "Internal error", 500);
  }
}
