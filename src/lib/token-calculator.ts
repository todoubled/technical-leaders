/**
 * Token cost calculator for the /tokens executive guide.
 *
 * Pricing is hardcoded here as a single source of truth. To update pricing,
 * edit MODEL_PRICING and bump PRICING_AS_OF below. All math is pure so it
 * is easy to test and reuse.
 *
 * Pricing pulled from provider docs in May 2026:
 *   Claude:  https://platform.claude.com/docs/en/about-claude/pricing
 *   OpenAI:  https://openai.com/api/pricing/
 *   Google:  https://ai.google.dev/pricing
 *
 * All prices are USD per 1,000,000 tokens unless noted.
 */

export const PRICING_AS_OF = 'May 2026';

export type Provider = 'anthropic' | 'openai' | 'google';

export type Tier = 'flagship' | 'workhorse' | 'fast';

export interface ModelPricing {
  /** stable id used in URL params */
  id: string;
  /** short label for UI */
  label: string;
  /** human-readable provider */
  provider: Provider;
  /** marketing tier — used for default-recommendation hints */
  tier: Tier;
  /** $ per million input tokens */
  inputPerM: number;
  /** $ per million output tokens */
  outputPerM: number;
  /**
   * $ per million tokens when reading from prompt cache (cache hits).
   * If null, the model does not support a cache-read discount.
   */
  cachedInputPerM: number | null;
  /**
   * Multiplier on input price for batch discount (e.g. 0.5 = 50% off).
   * If null, the model does not support a batch API discount.
   */
  batchDiscount: number | null;
  /** context window in tokens */
  contextWindow: number;
  /** one-line use-case fit shown in the comparison table */
  bestFor: string;
}

/**
 * MODEL_PRICING — single source of truth.
 * Update here when pricing changes, then bump PRICING_AS_OF.
 */
export const MODEL_PRICING: ModelPricing[] = [
  // ── Anthropic ──────────────────────────────────────────────────────────
  {
    id: 'opus-4-7',
    label: 'Claude Opus 4.7',
    provider: 'anthropic',
    tier: 'flagship',
    inputPerM: 5.0,
    outputPerM: 25.0,
    cachedInputPerM: 0.5, // 0.1× base input
    batchDiscount: 0.5,
    contextWindow: 1_000_000,
    bestFor: 'Hardest reasoning, agentic coding, deep research',
  },
  {
    id: 'sonnet-4-6',
    label: 'Claude Sonnet 4.6',
    provider: 'anthropic',
    tier: 'workhorse',
    inputPerM: 3.0,
    outputPerM: 15.0,
    cachedInputPerM: 0.3,
    batchDiscount: 0.5,
    contextWindow: 1_000_000,
    bestFor: 'Daily driver — production apps, drafting, analysis',
  },
  {
    id: 'haiku-4-5',
    label: 'Claude Haiku 4.5',
    provider: 'anthropic',
    tier: 'fast',
    inputPerM: 1.0,
    outputPerM: 5.0,
    cachedInputPerM: 0.1,
    batchDiscount: 0.5,
    contextWindow: 200_000,
    bestFor: 'High-volume routing, classification, fast chat',
  },

  // ── OpenAI ─────────────────────────────────────────────────────────────
  {
    id: 'gpt-5-5',
    label: 'GPT-5.5',
    provider: 'openai',
    tier: 'flagship',
    inputPerM: 5.0,
    outputPerM: 30.0,
    cachedInputPerM: 0.5,
    batchDiscount: 0.5,
    contextWindow: 1_000_000,
    bestFor: 'Frontier reasoning when accuracy beats cost',
  },
  {
    id: 'gpt-5-4',
    label: 'GPT-5.4',
    provider: 'openai',
    tier: 'workhorse',
    inputPerM: 2.5,
    outputPerM: 15.0,
    cachedInputPerM: 0.25,
    batchDiscount: 0.5,
    contextWindow: 1_000_000,
    bestFor: 'Balanced reasoning, multimodal, broad use',
  },
  {
    id: 'gpt-4o',
    label: 'GPT-4o',
    provider: 'openai',
    tier: 'workhorse',
    inputPerM: 2.5,
    outputPerM: 10.0,
    cachedInputPerM: 1.25,
    batchDiscount: 0.5,
    contextWindow: 128_000,
    bestFor: 'Legacy integrations, voice-first, multimodal',
  },

  // ── Google ─────────────────────────────────────────────────────────────
  {
    id: 'gemini-2-5-pro',
    label: 'Gemini 2.5 Pro',
    provider: 'google',
    tier: 'flagship',
    inputPerM: 1.25, // ≤200k input tier; 2x at >200k
    outputPerM: 10.0,
    cachedInputPerM: 0.125,
    batchDiscount: 0.5,
    contextWindow: 1_000_000,
    bestFor: 'Long-context (1M) work at flagship cost',
  },
  {
    id: 'gemini-2-5-flash',
    label: 'Gemini 2.5 Flash',
    provider: 'google',
    tier: 'workhorse',
    inputPerM: 0.3,
    outputPerM: 2.5,
    cachedInputPerM: 0.03,
    batchDiscount: 0.5,
    contextWindow: 1_000_000,
    bestFor: 'Cheap-but-capable for high-volume workloads',
  },
  {
    id: 'gemini-2-5-flash-lite',
    label: 'Gemini 2.5 Flash-Lite',
    provider: 'google',
    tier: 'fast',
    inputPerM: 0.1,
    outputPerM: 0.4,
    cachedInputPerM: 0.01,
    batchDiscount: 0.5,
    contextWindow: 1_000_000,
    bestFor: 'Bulk classification, embeddings-adjacent tasks',
  },
];

export const DEFAULT_MODEL_ID = 'sonnet-4-6';

export function getModelById(id: string): ModelPricing {
  return MODEL_PRICING.find((m) => m.id === id) ?? MODEL_PRICING.find((m) => m.id === DEFAULT_MODEL_ID)!;
}

// ─── Use-case presets ────────────────────────────────────────────────────

export interface UseCasePreset {
  id: string;
  label: string;
  blurb: string;
  inputTokens: number;
  outputTokens: number;
  requestsPerDay: number;
  users: number;
  modelId: string;
  cachingEnabled: boolean;
  cachedShare: number; // 0-1 fraction of input that hits the cache
  batchEnabled: boolean;
}

export const USE_CASE_PRESETS: UseCasePreset[] = [
  {
    id: 'support',
    label: 'Customer support chatbot',
    blurb: 'Reused system prompt + KB; short user turns, medium answers.',
    inputTokens: 2500,
    outputTokens: 400,
    requestsPerDay: 800,
    users: 1,
    modelId: 'haiku-4-5',
    cachingEnabled: true,
    cachedShare: 0.7,
    batchEnabled: false,
  },
  {
    id: 'code',
    label: 'Code generation / dev assistant',
    blurb: 'Large repo context, generates diffs and reasoning.',
    inputTokens: 12000,
    outputTokens: 1500,
    requestsPerDay: 200,
    users: 25,
    modelId: 'sonnet-4-6',
    cachingEnabled: true,
    cachedShare: 0.6,
    batchEnabled: false,
  },
  {
    id: 'docqa',
    label: 'Document Q&A',
    blurb: 'Long PDFs loaded once, lots of follow-up questions.',
    inputTokens: 30000,
    outputTokens: 600,
    requestsPerDay: 100,
    users: 50,
    modelId: 'sonnet-4-6',
    cachingEnabled: true,
    cachedShare: 0.85,
    batchEnabled: false,
  },
  {
    id: 'draft',
    label: 'Content drafting',
    blurb: 'Brief in, long-form out. Output-heavy.',
    inputTokens: 1500,
    outputTokens: 3500,
    requestsPerDay: 60,
    users: 10,
    modelId: 'sonnet-4-6',
    cachingEnabled: false,
    cachedShare: 0,
    batchEnabled: false,
  },
  {
    id: 'bulk',
    label: 'Bulk processing (overnight)',
    blurb: 'Classify, summarize or transform thousands of records.',
    inputTokens: 4000,
    outputTokens: 300,
    requestsPerDay: 5000,
    users: 1,
    modelId: 'haiku-4-5',
    cachingEnabled: false,
    cachedShare: 0,
    batchEnabled: true,
  },
  {
    id: 'custom',
    label: 'Custom',
    blurb: 'Start from defaults and tweak everything.',
    inputTokens: 2000,
    outputTokens: 500,
    requestsPerDay: 100,
    users: 10,
    modelId: 'sonnet-4-6',
    cachingEnabled: false,
    cachedShare: 0,
    batchEnabled: false,
  },
];

export function getPresetById(id: string): UseCasePreset {
  return USE_CASE_PRESETS.find((p) => p.id === id) ?? USE_CASE_PRESETS[USE_CASE_PRESETS.length - 1];
}

// ─── Cost math ──────────────────────────────────────────────────────────

export interface CalculatorInputs {
  modelId: string;
  inputTokens: number;
  outputTokens: number;
  requestsPerDay: number;
  users: number;
  cachingEnabled: boolean;
  /** 0-1 fraction of input tokens that hit the cache (only used when cachingEnabled) */
  cachedShare: number;
  batchEnabled: boolean;
}

export interface CalculatorResult {
  model: ModelPricing;
  perRequestCost: number;
  dailyCost: number;
  monthlyCost: number;
  annualCost: number;
  perUserMonthlyCost: number;
  /** breakdown for the "how we computed this" footnote */
  breakdown: {
    inputCost: number;
    cachedInputCost: number;
    outputCost: number;
    batchApplied: boolean;
    cachingApplied: boolean;
  };
}

const PER_M = 1_000_000;
const DAYS_PER_MONTH = 30; // simple, predictable
const DAYS_PER_YEAR = 365;

/**
 * Compute cost for a single request based on token counts, model, and toggles.
 * All math in one place so the UI and tests share it.
 */
export function computeRequestCost(
  model: ModelPricing,
  inputTokens: number,
  outputTokens: number,
  cachingEnabled: boolean,
  cachedShare: number,
  batchEnabled: boolean,
): { perRequestCost: number; breakdown: CalculatorResult['breakdown'] } {
  const safeIn = Math.max(0, inputTokens);
  const safeOut = Math.max(0, outputTokens);
  const safeShare = Math.min(1, Math.max(0, cachedShare));

  const supportsCache = model.cachedInputPerM != null;
  const cachingApplied = cachingEnabled && supportsCache && safeShare > 0;

  // Caching reduces effective input price for the cached share.
  // Note: batch and caching can stack on Anthropic; we apply both where supported.
  let inputPrice = model.inputPerM;
  let cachedPrice = supportsCache ? (model.cachedInputPerM as number) : model.inputPerM;
  let outputPrice = model.outputPerM;

  const batchApplied = batchEnabled && model.batchDiscount != null;
  if (batchApplied) {
    const d = model.batchDiscount as number;
    inputPrice *= d;
    cachedPrice *= d;
    outputPrice *= d;
  }

  const cachedTokens = cachingApplied ? safeIn * safeShare : 0;
  const uncachedTokens = safeIn - cachedTokens;

  const uncachedInputCost = (uncachedTokens / PER_M) * inputPrice;
  const cachedInputCost = (cachedTokens / PER_M) * cachedPrice;
  const outputCost = (safeOut / PER_M) * outputPrice;

  const perRequestCost = uncachedInputCost + cachedInputCost + outputCost;

  return {
    perRequestCost,
    breakdown: {
      inputCost: uncachedInputCost,
      cachedInputCost,
      outputCost,
      batchApplied,
      cachingApplied,
    },
  };
}

export function compute(inputs: CalculatorInputs): CalculatorResult {
  const model = getModelById(inputs.modelId);
  const { perRequestCost, breakdown } = computeRequestCost(
    model,
    inputs.inputTokens,
    inputs.outputTokens,
    inputs.cachingEnabled,
    inputs.cachedShare,
    inputs.batchEnabled,
  );

  const requests = Math.max(0, inputs.requestsPerDay);
  const users = Math.max(1, inputs.users);

  // requestsPerDay represents requests across the whole org/system (matches how
  // execs naturally describe workloads). "Per user per month" divides by users
  // for the chargeback view.
  const dailyCost = perRequestCost * requests;
  const monthlyCost = dailyCost * DAYS_PER_MONTH;
  const annualCost = dailyCost * DAYS_PER_YEAR;
  const perUserMonthlyCost = monthlyCost / users;

  return {
    model,
    perRequestCost,
    dailyCost,
    monthlyCost,
    annualCost,
    perUserMonthlyCost,
    breakdown,
  };
}

/**
 * Same workload, every model — drives the comparison chart.
 */
export function compareAcrossModels(inputs: CalculatorInputs): Array<{
  modelId: string;
  label: string;
  provider: Provider;
  monthlyCost: number;
}> {
  return MODEL_PRICING.map((m) => {
    const res = compute({ ...inputs, modelId: m.id });
    return {
      modelId: m.id,
      label: m.label,
      provider: m.provider,
      monthlyCost: res.monthlyCost,
    };
  });
}

// ─── Formatting helpers ──────────────────────────────────────────────────

export function formatUSD(n: number, opts?: { compact?: boolean; precise?: boolean }): string {
  if (!Number.isFinite(n)) return '$0';
  if (opts?.precise) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: n < 1 ? 4 : 2,
      maximumFractionDigits: n < 1 ? 4 : 2,
    }).format(n);
  }
  if (opts?.compact && Math.abs(n) >= 1000) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(n);
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);
}

export function formatTokens(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(n % 1_000 === 0 ? 0 : 1)}K`;
  return `${n}`;
}

export const PROVIDER_LABEL: Record<Provider, string> = {
  anthropic: 'Anthropic',
  openai: 'OpenAI',
  google: 'Google',
};
