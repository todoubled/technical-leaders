import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  json,
  errorResponse,
  kv,
  getTierFromPriceId,
  generateCode,
  stripeGet,
  verifyStripeSignature,
  LicenseRecord,
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

        if (!licenseKey) break;

        const subscription = await stripeGet(`/subscriptions/${subscriptionId}`);
        const priceId = subscription.items.data[0]?.price?.id || "";
        const tier = getTierFromPriceId(priceId);

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
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object;
        const licenseKey = subscription.metadata?.license_key;
        if (!licenseKey) break;

        const stored = await db.get<LicenseRecord>(`license:${licenseKey}`);
        if (!stored) break;

        const priceId = subscription.items.data[0]?.price?.id || "";
        stored.tier = getTierFromPriceId(priceId);
        stored.status = subscription.status === "active" ? "active" : subscription.status;

        await db.set(`license:${licenseKey}`, stored);
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object;
        const licenseKey = subscription.metadata?.license_key;
        if (!licenseKey) break;

        const stored = await db.get<LicenseRecord>(`license:${licenseKey}`);
        if (!stored) break;

        stored.status = "cancelled";
        stored.tier = "free";
        await db.set(`license:${licenseKey}`, stored);
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object;
        const subscriptionId = invoice.subscription;
        if (!subscriptionId) break;

        const subscription = await stripeGet(`/subscriptions/${subscriptionId}`);
        const licenseKey = subscription.metadata?.license_key;
        if (!licenseKey) break;

        const stored = await db.get<LicenseRecord>(`license:${licenseKey}`);
        if (!stored) break;

        stored.status = "payment_failed";
        await db.set(`license:${licenseKey}`, stored);
        break;
      }
    }

    json(res, { received: true });
  } catch (err: any) {
    console.error("Webhook error:", err);
    errorResponse(res, err.message || "Internal error", 500);
  }
}
