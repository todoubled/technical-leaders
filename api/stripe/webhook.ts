import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  json,
  errorResponse,
  kv,
  getTierFromPriceId,
  generateCode,
  generateBulkCode,
  generatePurchaseId,
  generateLicenseKey,
  stripeGet,
  stripeRequest,
  verifyStripeSignature,
  LicenseRecord,
  BulkRecord,
} from "./_lib";

// Disable body parsing so we get the raw body for signature verification
export const config = {
  api: { bodyParser: false },
};

async function getRawBody(req: VercelRequest): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (chunk: Buffer) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf-8")));
    req.on("error", reject);
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return errorResponse(res, "Method not allowed", 405);

  try {
    const body = await getRawBody(req);
    const signature = (req.headers["stripe-signature"] as string) || "";

    const verified = await verifyStripeSignature(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
    if (!verified) return errorResponse(res, "Invalid signature", 401);

    const event = JSON.parse(body);
    const db = kv();

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        const licenseKey = session.metadata?.license_key;
        const machineId = session.metadata?.machine_id;
        const customerId = session.customer;
        const subscriptionId = session.subscription;
        const email = session.customer_details?.email || "";
        const quantity = parseInt(session.metadata?.quantity || "1") || 1;

        if (!licenseKey) break;

        const subscription = await stripeGet(`/subscriptions/${subscriptionId}`);
        const priceId = subscription.items.data[0]?.price?.id || "";
        const tier = getTierFromPriceId(priceId);

        if (quantity > 1) {
          // --- Bulk purchase ---
          const purchaseId = generatePurchaseId();
          const bulkCode = generateBulkCode();
          const keys: { code: string; license_key: string }[] = [];

          const pipe = db.pipeline();

          for (let i = 0; i < quantity; i++) {
            const key = generateLicenseKey();
            const code = generateCode();
            keys.push({ code, license_key: key });

            const record: LicenseRecord = {
              stripe_customer_id: customerId,
              stripe_subscription_id: subscriptionId,
              tier,
              status: "active",
              machine_id: "",
              email,
            };

            pipe.set(`license:${key}`, record);
            pipe.set(`activation:${code}`, { license_key: key });
          }

          const bulkRecord: BulkRecord = { purchase_id: purchaseId, tier, keys };
          pipe.set(`bulk:${bulkCode}`, bulkRecord);
          pipe.set(`customer:${customerId}`, { license_key: keys[0].license_key, bulk_code: bulkCode });
          pipe.set(
            `session:${session.id}`,
            { license_key: keys[0].license_key, bulk_code: bulkCode, quantity, is_bulk: true },
            { ex: 3600 }
          );

          await pipe.exec();

          // Store bulk_code on subscription metadata for lifecycle events
          await stripeRequest(`/subscriptions/${subscriptionId}`, {
            "metadata[bulk_code]": bulkCode,
          });
        } else {
          // --- Single purchase (existing flow) ---
          const record: LicenseRecord = {
            stripe_customer_id: customerId,
            stripe_subscription_id: subscriptionId,
            tier,
            status: "active",
            machine_id: machineId || "",
            email,
          };

          await db.set(`license:${licenseKey}`, record);
          await db.set(`customer:${customerId}`, { license_key: licenseKey });

          const code = generateCode();
          await db.set(`activation:${code}`, { license_key: licenseKey }, { ex: 3600 });
          await db.set(
            `session:${session.id}`,
            { license_key: licenseKey, activation_code: code },
            { ex: 3600 }
          );
        }
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object;
        const bulkCode = subscription.metadata?.bulk_code;
        const priceId = subscription.items.data[0]?.price?.id || "";
        const newTier = getTierFromPriceId(priceId);
        const newStatus = subscription.status === "active" ? "active" : subscription.status;

        if (bulkCode) {
          const bulk = await db.get<BulkRecord>(`bulk:${bulkCode}`);
          if (bulk) {
            const pipe = db.pipeline();
            for (const entry of bulk.keys) {
              pipe.get<LicenseRecord>(`license:${entry.license_key}`);
            }
            const results = await pipe.exec<(LicenseRecord | null)[]>();
            const updatePipe = db.pipeline();
            for (let i = 0; i < bulk.keys.length; i++) {
              const stored = results[i];
              if (!stored) continue;
              stored.tier = newTier;
              stored.status = newStatus;
              updatePipe.set(`license:${bulk.keys[i].license_key}`, stored);
            }
            await updatePipe.exec();
          }
        } else {
          const licenseKey = subscription.metadata?.license_key;
          if (!licenseKey) break;
          const stored = await db.get<LicenseRecord>(`license:${licenseKey}`);
          if (!stored) break;
          stored.tier = newTier;
          stored.status = newStatus;
          await db.set(`license:${licenseKey}`, stored);
        }
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object;
        const bulkCode = subscription.metadata?.bulk_code;

        if (bulkCode) {
          const bulk = await db.get<BulkRecord>(`bulk:${bulkCode}`);
          if (bulk) {
            const pipe = db.pipeline();
            for (const entry of bulk.keys) {
              pipe.get<LicenseRecord>(`license:${entry.license_key}`);
            }
            const results = await pipe.exec<(LicenseRecord | null)[]>();
            const updatePipe = db.pipeline();
            for (let i = 0; i < bulk.keys.length; i++) {
              const stored = results[i];
              if (!stored) continue;
              stored.status = "cancelled";
              stored.tier = "free";
              updatePipe.set(`license:${bulk.keys[i].license_key}`, stored);
            }
            await updatePipe.exec();
          }
        } else {
          const licenseKey = subscription.metadata?.license_key;
          if (!licenseKey) break;
          const stored = await db.get<LicenseRecord>(`license:${licenseKey}`);
          if (!stored) break;
          stored.status = "cancelled";
          stored.tier = "free";
          await db.set(`license:${licenseKey}`, stored);
        }
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object;
        const subscriptionId = invoice.subscription;
        if (!subscriptionId) break;

        const subscription = await stripeGet(`/subscriptions/${subscriptionId}`);
        const bulkCode = subscription.metadata?.bulk_code;

        if (bulkCode) {
          const bulk = await db.get<BulkRecord>(`bulk:${bulkCode}`);
          if (bulk) {
            const pipe = db.pipeline();
            for (const entry of bulk.keys) {
              pipe.get<LicenseRecord>(`license:${entry.license_key}`);
            }
            const results = await pipe.exec<(LicenseRecord | null)[]>();
            const updatePipe = db.pipeline();
            for (let i = 0; i < bulk.keys.length; i++) {
              const stored = results[i];
              if (!stored) continue;
              stored.status = "payment_failed";
              updatePipe.set(`license:${bulk.keys[i].license_key}`, stored);
            }
            await updatePipe.exec();
          }
        } else {
          const licenseKey = subscription.metadata?.license_key;
          if (!licenseKey) break;
          const stored = await db.get<LicenseRecord>(`license:${licenseKey}`);
          if (!stored) break;
          stored.status = "payment_failed";
          await db.set(`license:${licenseKey}`, stored);
        }
        break;
      }
    }

    json(res, { received: true });
  } catch (err: any) {
    console.error("Webhook error:", err);
    errorResponse(res, err.message || "Internal error", 500);
  }
}
