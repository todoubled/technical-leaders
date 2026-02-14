import { Redis } from "@upstash/redis";
import * as ed from "@noble/ed25519";
import type { VercelRequest, VercelResponse } from "@vercel/node";

// --- Redis KV ---

let _redis: Redis | null = null;
export function kv(): Redis {
  if (!_redis) {
    _redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL!,
      token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    });
  }
  return _redis;
}

// --- Types ---

export interface LicenseRecord {
  stripe_customer_id: string;
  stripe_subscription_id: string;
  tier: string;
  status: string;
  machine_id: string;
  email: string;
}

// --- Ed25519 JWT ---

// Configure @noble/ed25519 v2 for Node.js crypto
ed.etc.sha512Async = async (message: Uint8Array): Promise<Uint8Array> => {
  const { subtle } = globalThis.crypto;
  const hash = await subtle.digest("SHA-512", message);
  return new Uint8Array(hash);
};

function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
  }
  return bytes;
}

function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function base64urlEncode(data: Uint8Array | string): string {
  const bytes =
    typeof data === "string" ? new TextEncoder().encode(data) : data;
  const binary = Array.from(bytes)
    .map((b) => String.fromCharCode(b))
    .join("");
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export async function signJwt(
  claims: Record<string, unknown>
): Promise<string> {
  const privateKeyHex = process.env.ED25519_PRIVATE_KEY_HEX!;
  const header = { alg: "EdDSA", typ: "JWT" };
  const headerB64 = base64urlEncode(JSON.stringify(header));
  const payloadB64 = base64urlEncode(JSON.stringify(claims));
  const message = new TextEncoder().encode(`${headerB64}.${payloadB64}`);
  const privateKey = hexToBytes(privateKeyHex);
  const signature = await ed.signAsync(message, privateKey);
  const sigB64 = base64urlEncode(new Uint8Array(signature));
  return `${headerB64}.${payloadB64}.${sigB64}`;
}

// --- Stripe Helpers ---

export async function stripeRequest(
  path: string,
  body: Record<string, string>
): Promise<any> {
  const resp = await fetch(`https://api.stripe.com/v1${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(body).toString(),
  });
  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`Stripe API error (${resp.status}): ${text}`);
  }
  return resp.json();
}

export async function stripeGet(path: string): Promise<any> {
  const resp = await fetch(`https://api.stripe.com/v1${path}`, {
    headers: {
      Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
    },
  });
  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`Stripe API error (${resp.status}): ${text}`);
  }
  return resp.json();
}

export async function verifyStripeSignature(
  payload: string,
  header: string,
  secret: string
): Promise<boolean> {
  const parts = header.split(",");
  let timestamp = "";
  const signatures: string[] = [];

  for (const part of parts) {
    const [key, value] = part.split("=");
    if (key === "t") timestamp = value;
    if (key === "v1") signatures.push(value);
  }

  if (!timestamp || signatures.length === 0) return false;

  const now = Math.floor(Date.now() / 1000);
  if (Math.abs(now - parseInt(timestamp)) > 300) return false;

  const signedPayload = `${timestamp}.${payload}`;
  const { subtle } = globalThis.crypto;
  const key = await subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(signedPayload)
  );
  const expectedSig = bytesToHex(new Uint8Array(sig));

  return signatures.some((s) => s === expectedSig);
}

// --- Price → Tier Mapping ---

export function getTierFromPriceId(priceId: string): string {
  if (
    priceId === process.env.STRIPE_PRICE_ACADEMY_MONTHLY ||
    priceId === process.env.STRIPE_PRICE_ACADEMY_ANNUAL
  )
    return "premium";
  if (
    priceId === process.env.STRIPE_PRICE_PRO_MONTHLY ||
    priceId === process.env.STRIPE_PRICE_PRO_ANNUAL
  )
    return "pro";
  return "free";
}

export function getPriceId(plan: string, billing: string): string {
  if (plan === "premium" && billing === "annual")
    return process.env.STRIPE_PRICE_ACADEMY_ANNUAL!;
  if (plan === "premium") return process.env.STRIPE_PRICE_ACADEMY_MONTHLY!;
  if (plan === "pro" && billing === "annual")
    return process.env.STRIPE_PRICE_PRO_ANNUAL!;
  if (plan === "pro") return process.env.STRIPE_PRICE_PRO_MONTHLY!;
  throw new Error(`Unknown plan: ${plan}`);
}

// --- Activation Code ---

export function generateCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = globalThis.crypto.getRandomValues(new Uint8Array(6));
  return Array.from(bytes)
    .map((b) => chars[b % chars.length])
    .join("");
}

export function generateBulkCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = globalThis.crypto.getRandomValues(new Uint8Array(8));
  return Array.from(bytes)
    .map((b) => chars[b % chars.length])
    .join("");
}

export function generatePurchaseId(): string {
  const bytes = globalThis.crypto.getRandomValues(new Uint8Array(12));
  return "pur_" + bytesToHex(bytes);
}

export function generateLicenseKey(): string {
  const bytes = globalThis.crypto.getRandomValues(new Uint8Array(16));
  return bytesToHex(bytes);
}

// --- Bulk Types ---

export interface BulkKeyEntry {
  code: string;
  license_key: string;
}

export interface BulkRecord {
  purchase_id: string;
  tier: string;
  keys: BulkKeyEntry[];
}

// --- CORS + Response Helpers ---

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export function handleCors(req: VercelRequest, res: VercelResponse): boolean {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.status(204).end();
    return true;
  }
  return false;
}

export function json(res: VercelResponse, data: unknown, status = 200) {
  res
    .setHeader("Access-Control-Allow-Origin", "*")
    .status(status)
    .json(data);
}

export function errorResponse(
  res: VercelResponse,
  message: string,
  status = 400
) {
  json(res, { error: message }, status);
}
