import type { VercelRequest, VercelResponse } from "@vercel/node";
import { kv, signJwt, LicenseRecord } from "./_lib";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const sessionId = req.query.session_id as string;
  if (!sessionId) {
    res.status(400).send("Missing session_id");
    return;
  }

  const db = kv();
  const sessionData = await db.get<{
    license_key: string;
    activation_code?: string;
  }>(`session:${sessionId}`);

  const code = sessionData?.activation_code || "PENDING";
  const licenseKey = sessionData?.license_key || "";

  let deepLinkToken = "";
  let isWebPurchase = true;
  if (licenseKey) {
    const record = await db.get<LicenseRecord>(`license:${licenseKey}`);
    if (record && record.machine_id) {
      isWebPurchase = false;
      const now = Math.floor(Date.now() / 1000);
      deepLinkToken = await signJwt({
        sub: licenseKey,
        tier: record.tier,
        mid: record.machine_id,
        iat: now,
        exp: now + 30 * 24 * 60 * 60,
        iss: "t-app",
      });
    }
  }

  const downloadSection = isWebPurchase
    ? `
    <a href="https://technical-leaders.com/t-download" style="display: inline-block; margin-top: 16px; padding: 12px 24px; background: #ea580c; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">Download T</a>
    <p class="hint">Download the app, then go to Upgrade &rarr; enter the code above.</p>
  `
    : `
    <p class="hint">This code expires in 1 hour. Open T and go to Upgrade &rarr; enter the code above.</p>
  `;

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>T - Activation</title>
  <style>
    body { font-family: -apple-system, system-ui, sans-serif; background: #0a0a0a; color: #e5e5e5; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; }
    .card { background: #171717; border: 1px solid #333; border-radius: 16px; padding: 40px; max-width: 400px; text-align: center; }
    h1 { font-size: 24px; margin-bottom: 8px; }
    p { color: #888; font-size: 14px; line-height: 1.6; }
    .code { font-family: monospace; font-size: 32px; font-weight: 700; letter-spacing: 6px; color: #ea580c; background: rgba(234, 88, 12, 0.1); padding: 16px 24px; border-radius: 12px; margin: 24px 0; display: inline-block; }
    .hint { font-size: 12px; color: #666; margin-top: 16px; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Welcome to T Premium!</h1>
    <p>Copy this activation code and paste it in the T app:</p>
    <div class="code">${code}</div>
    ${downloadSection}
  </div>
  ${deepLinkToken ? `<script>setTimeout(() => { window.location.href = 't-app://activate?token=${encodeURIComponent(deepLinkToken)}'; }, 1000);</script>` : ""}
</body>
</html>`;

  res.setHeader("Content-Type", "text/html");
  res.send(html);
}
