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
        iss: "longhand",
      });
    }
  }

  const downloadSection = isWebPurchase
    ? `
    <a href="https://longhand.com/download" class="download-btn">Download Longhand</a>
    <p class="hint">Download the app, then go to Upgrade &rarr; enter the code above.</p>
  `
    : `
    <p class="hint">This code expires in 1 hour. Open Longhand and go to Upgrade &rarr; enter the code above.</p>
  `;

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Longhand — Activation</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Source+Sans+3:wght@400;600&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Source Sans 3', -apple-system, system-ui, sans-serif; background: #FAF8F5; color: #2C2520; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; }
    .card { background: #fff; border: 1px solid #E8E2DB; border-radius: 16px; padding: 40px; max-width: 400px; text-align: center; }
    h1 { font-family: 'Lora', serif; font-size: 24px; margin-bottom: 8px; color: #2C2520; }
    p { color: #8C8279; font-size: 14px; line-height: 1.6; }
    .code { font-family: monospace; font-size: 32px; font-weight: 700; letter-spacing: 6px; color: #C8550A; background: #FEF3EC; padding: 16px 24px; border-radius: 12px; margin: 24px 0; display: inline-block; }
    .download-btn { display: inline-block; margin-top: 16px; padding: 12px 24px; background: #C8550A; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; transition: background 0.2s; }
    .download-btn:hover { background: #A84709; }
    .hint { font-size: 12px; color: #8C8279; margin-top: 16px; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Welcome to Longhand!</h1>
    <p>Copy this activation code and paste it in the Longhand app:</p>
    <div class="code">${code}</div>
    ${downloadSection}
  </div>
  ${deepLinkToken ? `<script>setTimeout(() => { window.location.href = 'longhand://activate?token=${encodeURIComponent(deepLinkToken)}'; }, 1000);</script>` : ""}
</body>
</html>`;

  res.setHeader("Content-Type", "text/html");
  res.send(html);
}
