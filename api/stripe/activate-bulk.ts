import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  handleCors,
  json,
  errorResponse,
  kv,
  BulkRecord,
} from "./_lib";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (handleCors(req, res)) return;
  if (req.method !== "POST") return errorResponse(res, "Method not allowed", 405);

  try {
    const { code } = req.body;
    if (!code) return errorResponse(res, "Missing code");

    const db = kv();
    const bulk = await db.get<BulkRecord>(`bulk:${code}`);
    if (!bulk) return errorResponse(res, "Invalid bulk code", 404);

    // Check activation status of each key
    const pipe = db.pipeline();
    for (const entry of bulk.keys) {
      pipe.exists(`activation:${entry.code}`);
    }
    const results = await pipe.exec<number[]>();

    const keys = bulk.keys.map((entry, i) => ({
      code: entry.code,
      license_key: null,
      tier: bulk.tier,
      activated: results[i] === 0, // activation:{code} deleted = already redeemed
    }));

    json(res, { purchase_id: bulk.purchase_id, keys });
  } catch (err: any) {
    console.error("Activate-bulk error:", err);
    errorResponse(res, err.message || "Internal error", 500);
  }
}
