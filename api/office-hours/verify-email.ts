/**
 * POST /api/office-hours/verify-email
 *
 * Stateless email-confirmation gate for the office-hours second half + library.
 *
 * Unlike the workshop gate (which checks Stripe for a PAID purchase), access
 * here is granted on a FREE email signup: the source of truth is the Kit.com
 * (ConvertKit) subscriber list. The visitor signs up via the embedded Kit form,
 * then this endpoint confirms — live, against Kit — that the submitted email is
 * an active subscriber. No persistence layer, no JWT, no cookies: the gate is a
 * lead-capture funnel, not DRM (matches the WorkshopAccessGate threat model).
 *
 * Response shape mirrors workshop-verify-email so the client gate contract is
 * identical: { access: boolean }.
 *
 * Design notes:
 *  - Fails CLOSED on any Kit/network error (500 + { access: false }).
 *  - If CONVERTKIT_API_SECRET is unset we cannot verify, so we deny.
 *  - No emails are logged.
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";
// The .js extension is required — package.json sets "type": "module", so Vercel
// compiles this to an ES module and Node's ESM loader will not resolve an
// extensionless relative import at runtime.
import { handleCors, json, errorResponse } from "../stripe/_lib.js";

// ConvertKit v3 subscriber lookup. Returns subscribers matching an email; a
// state of "active" means a confirmed signup.
const KIT_API_BASE = "https://api.convertkit.com/v3";

interface KitSubscriber {
  id: number;
  email_address?: string;
  state?: string;
}

interface KitSubscribersResponse {
  total_subscribers?: number;
  subscribers?: KitSubscriber[];
}

function normalizeEmail(value: string | null | undefined): string {
  return (value ?? "").trim().toLowerCase();
}

// True if the email is an active subscriber on the Kit account.
async function isActiveSubscriber(email: string): Promise<boolean> {
  const secret = process.env.CONVERTKIT_API_SECRET;
  if (!secret) {
    // Without the secret we can't verify; fail closed.
    throw new Error("CONVERTKIT_API_SECRET is not configured");
  }

  const url =
    `${KIT_API_BASE}/subscribers` +
    `?api_secret=${encodeURIComponent(secret)}` +
    `&email_address=${encodeURIComponent(email)}`;

  const resp = await fetch(url);
  if (!resp.ok) {
    throw new Error(`Kit API error (${resp.status})`);
  }

  const data = (await resp.json()) as KitSubscribersResponse;
  const subscribers = data.subscribers ?? [];
  return subscribers.some(
    (s) =>
      normalizeEmail(s.email_address) === email &&
      (s.state ?? "active") === "active",
  );
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (handleCors(req, res)) return;
  if (req.method !== "POST") {
    return errorResponse(res, "Method not allowed", 405);
  }

  try {
    const rawEmail = (req.body?.email ?? "") as unknown;
    if (typeof rawEmail !== "string" || !rawEmail.includes("@")) {
      return errorResponse(res, "Invalid email", 400);
    }

    const email = normalizeEmail(rawEmail);
    if (!email || !email.includes("@")) {
      return errorResponse(res, "Invalid email", 400);
    }

    const access = await isActiveSubscriber(email);
    return json(res, { access });
  } catch (err) {
    console.error("Office hours verify-email error:", err);
    // Fail closed: deny access if Kit is unreachable or misconfigured.
    return json(res, { access: false }, 500);
  }
}
