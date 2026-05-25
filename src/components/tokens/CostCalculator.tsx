import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Calculator, Info, RotateCcw, Sparkles } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

import {
  compareAcrossModels,
  compute,
  formatTokens,
  formatUSD,
  getModelById,
  getPresetById,
  MODEL_PRICING,
  PROVIDER_LABEL,
  USE_CASE_PRESETS,
  type CalculatorInputs,
} from '@/lib/token-calculator';

// ── URL state helpers ──────────────────────────────────────────────────────

const URL_KEYS = {
  preset: 'p',
  model: 'm',
  input: 'in',
  output: 'out',
  rpd: 'rpd',
  users: 'u',
  cache: 'c',
  cacheShare: 'cs',
  batch: 'b',
} as const;

interface State {
  presetId: string;
  inputs: CalculatorInputs;
}

const DEFAULT_PRESET_ID = 'support';

function defaultState(): State {
  const preset = getPresetById(DEFAULT_PRESET_ID);
  return {
    presetId: preset.id,
    inputs: {
      modelId: preset.modelId,
      inputTokens: preset.inputTokens,
      outputTokens: preset.outputTokens,
      requestsPerDay: preset.requestsPerDay,
      users: preset.users,
      cachingEnabled: preset.cachingEnabled,
      cachedShare: preset.cachedShare,
      batchEnabled: preset.batchEnabled,
    },
  };
}

function parseInt32(s: string | null, fallback: number): number {
  if (s == null) return fallback;
  const n = parseInt(s, 10);
  return Number.isFinite(n) ? n : fallback;
}

function parseFloat32(s: string | null, fallback: number): number {
  if (s == null) return fallback;
  const n = parseFloat(s);
  return Number.isFinite(n) ? n : fallback;
}

function parseBool(s: string | null, fallback: boolean): boolean {
  if (s == null) return fallback;
  return s === '1' || s === 'true';
}

function stateFromSearch(sp: URLSearchParams): State {
  const base = defaultState();
  const presetParam = sp.get(URL_KEYS.preset);
  const preset = presetParam ? getPresetById(presetParam) : getPresetById(base.presetId);
  return {
    presetId: preset.id,
    inputs: {
      modelId: getModelById(sp.get(URL_KEYS.model) ?? preset.modelId).id,
      inputTokens: parseInt32(sp.get(URL_KEYS.input), preset.inputTokens),
      outputTokens: parseInt32(sp.get(URL_KEYS.output), preset.outputTokens),
      requestsPerDay: parseInt32(sp.get(URL_KEYS.rpd), preset.requestsPerDay),
      users: parseInt32(sp.get(URL_KEYS.users), preset.users),
      cachingEnabled: parseBool(sp.get(URL_KEYS.cache), preset.cachingEnabled),
      cachedShare: parseFloat32(sp.get(URL_KEYS.cacheShare), preset.cachedShare),
      batchEnabled: parseBool(sp.get(URL_KEYS.batch), preset.batchEnabled),
    },
  };
}

function stateToSearch(state: State, existing: URLSearchParams): URLSearchParams {
  const sp = new URLSearchParams(existing);
  sp.set(URL_KEYS.preset, state.presetId);
  sp.set(URL_KEYS.model, state.inputs.modelId);
  sp.set(URL_KEYS.input, String(state.inputs.inputTokens));
  sp.set(URL_KEYS.output, String(state.inputs.outputTokens));
  sp.set(URL_KEYS.rpd, String(state.inputs.requestsPerDay));
  sp.set(URL_KEYS.users, String(state.inputs.users));
  sp.set(URL_KEYS.cache, state.inputs.cachingEnabled ? '1' : '0');
  sp.set(URL_KEYS.cacheShare, state.inputs.cachedShare.toFixed(2));
  sp.set(URL_KEYS.batch, state.inputs.batchEnabled ? '1' : '0');
  return sp;
}

// ── Provider colors (for the comparison bar chart) ────────────────────────

const PROVIDER_COLORS: Record<string, string> = {
  anthropic: '#C8550A', // longhand accent
  openai: '#2C2520', // ink
  google: '#6B8F71', // success
};

// ── Component ──────────────────────────────────────────────────────────────

interface CostCalculatorProps {
  className?: string;
}

export function CostCalculator({ className }: CostCalculatorProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState<State>(() => stateFromSearch(searchParams));
  const initRef = useRef(true);

  // Write to URL (debounced) when state changes.
  useEffect(() => {
    // Skip the very first write to avoid clobbering existing history on mount.
    if (initRef.current) {
      initRef.current = false;
      // Still ensure URL has full state once on mount for shareability.
      const next = stateToSearch(state, searchParams);
      if (next.toString() !== searchParams.toString()) {
        setSearchParams(next, { replace: true });
      }
      return;
    }
    const handle = window.setTimeout(() => {
      const next = stateToSearch(state, searchParams);
      if (next.toString() !== searchParams.toString()) {
        setSearchParams(next, { replace: true });
      }
    }, 200);
    return () => window.clearTimeout(handle);
    // We intentionally only depend on state — searchParams is a setter trigger.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const result = useMemo(() => compute(state.inputs), [state.inputs]);
  const comparison = useMemo(() => compareAcrossModels(state.inputs), [state.inputs]);

  // ── handlers ────────────────────────────────────────────────────────────

  const update = (patch: Partial<CalculatorInputs>) =>
    setState((s) => ({ ...s, inputs: { ...s.inputs, ...patch } }));

  const setPreset = (id: string) => {
    const preset = getPresetById(id);
    setState({
      presetId: preset.id,
      inputs: {
        modelId: preset.modelId,
        inputTokens: preset.inputTokens,
        outputTokens: preset.outputTokens,
        requestsPerDay: preset.requestsPerDay,
        users: preset.users,
        cachingEnabled: preset.cachingEnabled,
        cachedShare: preset.cachedShare,
        batchEnabled: preset.batchEnabled,
      },
    });
  };

  const reset = () => setState(defaultState());

  const preset = getPresetById(state.presetId);
  const supportsCaching = result.model.cachedInputPerM != null;
  const supportsBatch = result.model.batchDiscount != null;

  // Highlight the cheapest in the chart
  const cheapestId = comparison.reduce(
    (acc, m) => (m.monthlyCost < acc.monthlyCost ? m : acc),
    comparison[0],
  ).modelId;

  return (
    <Card
      id="calculator"
      className={`bg-longhand-paper text-longhand-ink border-longhand-border shadow-sm rounded-xl overflow-hidden ${className ?? ''}`}
    >
      <div className="border-b border-longhand-border bg-gradient-to-r from-longhand-accent-light to-transparent px-5 sm:px-8 py-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-longhand-accent text-white flex items-center justify-center shrink-0">
            <Calculator className="w-5 h-5" aria-hidden />
          </div>
          <div>
            <h3 className="font-serif text-xl text-longhand-ink leading-tight">Interactive Cost Calculator</h3>
            <p className="text-sm text-longhand-muted">Tune inputs. See your bill change in real time.</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={reset}
          className="text-longhand-muted hover:text-longhand-ink no-print"
        >
          <RotateCcw className="w-4 h-4 mr-1.5" aria-hidden /> Reset
        </Button>
      </div>

      <div className="grid lg:grid-cols-5 gap-0">
        {/* Inputs */}
        <div className="lg:col-span-3 p-5 sm:p-8 space-y-7 no-print">
          {/* Preset */}
          <div className="space-y-2">
            <Label htmlFor="preset" className="text-longhand-ink font-medium">
              Use case
            </Label>
            <Select value={state.presetId} onValueChange={setPreset}>
              <SelectTrigger
                id="preset"
                className="bg-white border-longhand-border text-longhand-ink h-11"
              >
                <SelectValue placeholder="Pick a preset" />
              </SelectTrigger>
              <SelectContent>
                {USE_CASE_PRESETS.map((p) => (
                  <SelectItem key={p.id} value={p.id}>
                    {p.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-longhand-muted italic">{preset.blurb}</p>
          </div>

          {/* Model */}
          <div className="space-y-2">
            <Label htmlFor="model" className="text-longhand-ink font-medium">
              Model
            </Label>
            <Select
              value={state.inputs.modelId}
              onValueChange={(v) => update({ modelId: v })}
            >
              <SelectTrigger
                id="model"
                className="bg-white border-longhand-border text-longhand-ink h-11"
              >
                <SelectValue placeholder="Pick a model" />
              </SelectTrigger>
              <SelectContent>
                {(['anthropic', 'openai', 'google'] as const).map((prov) => (
                  <SelectGroup key={prov}>
                    <SelectLabel>{PROVIDER_LABEL[prov]}</SelectLabel>
                    {MODEL_PRICING.filter((m) => m.provider === prov).map((m) => (
                      <SelectItem key={m.id} value={m.id}>
                        {m.label}{' '}
                        <span className="text-longhand-muted text-xs">
                          ({formatUSD(m.inputPerM, { precise: true })}/M in)
                        </span>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Tokens per request */}
          <div className="grid sm:grid-cols-2 gap-5">
            <SliderInput
              label="Avg input tokens / request"
              hint={`~${Math.round(state.inputs.inputTokens * 0.75)} words`}
              min={100}
              max={100000}
              step={100}
              value={state.inputs.inputTokens}
              onChange={(v) => update({ inputTokens: v })}
            />
            <SliderInput
              label="Avg output tokens / request"
              hint={`~${Math.round(state.inputs.outputTokens * 0.75)} words`}
              min={100}
              max={10000}
              step={50}
              value={state.inputs.outputTokens}
              onChange={(v) => update({ outputTokens: v })}
            />
          </div>

          {/* Volume */}
          <div className="grid sm:grid-cols-2 gap-5">
            <SliderInput
              label="Requests / day"
              min={1}
              max={10000}
              step={10}
              value={state.inputs.requestsPerDay}
              onChange={(v) => update({ requestsPerDay: v })}
            />
            <SliderInput
              label="Users"
              hint="For per-seat cost"
              min={1}
              max={10000}
              step={1}
              value={state.inputs.users}
              onChange={(v) => update({ users: v })}
            />
          </div>

          {/* Toggles */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="rounded-lg border border-longhand-border bg-white p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <Label htmlFor="caching" className="text-longhand-ink font-medium block">
                    Prompt caching
                  </Label>
                  <p className="text-xs text-longhand-muted mt-0.5">
                    Reuse the same long context across requests.
                  </p>
                </div>
                <Switch
                  id="caching"
                  checked={state.inputs.cachingEnabled}
                  disabled={!supportsCaching}
                  onCheckedChange={(v) => update({ cachingEnabled: v })}
                />
              </div>
              {state.inputs.cachingEnabled && supportsCaching && (
                <div className="mt-3 pt-3 border-t border-longhand-border/60">
                  <div className="flex items-center justify-between text-xs text-longhand-muted mb-1.5">
                    <span>% of input that hits the cache</span>
                    <span className="font-medium text-longhand-ink tabular-nums">
                      {Math.round(state.inputs.cachedShare * 100)}%
                    </span>
                  </div>
                  <Slider
                    aria-label="Cached share"
                    min={0}
                    max={100}
                    step={5}
                    value={[Math.round(state.inputs.cachedShare * 100)]}
                    onValueChange={(v) => update({ cachedShare: (v[0] ?? 0) / 100 })}
                  />
                </div>
              )}
              {!supportsCaching && (
                <p className="text-xs text-longhand-muted mt-2 italic">
                  Not supported by this model.
                </p>
              )}
            </div>

            <div className="rounded-lg border border-longhand-border bg-white p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <Label htmlFor="batch" className="text-longhand-ink font-medium block">
                    Batch API
                  </Label>
                  <p className="text-xs text-longhand-muted mt-0.5">
                    Overnight / async workloads. 50% off.
                  </p>
                </div>
                <Switch
                  id="batch"
                  checked={state.inputs.batchEnabled}
                  disabled={!supportsBatch}
                  onCheckedChange={(v) => update({ batchEnabled: v })}
                />
              </div>
              {!supportsBatch && (
                <p className="text-xs text-longhand-muted mt-2 italic">
                  Not supported by this model.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Output panel */}
        <div className="lg:col-span-2 bg-longhand-ink text-longhand-paper p-5 sm:p-8 flex flex-col gap-5">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-longhand-paper/70">
            <Sparkles className="w-3.5 h-3.5" aria-hidden /> Your bill
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-longhand-paper/60">
              Monthly cost
            </p>
            <p className="font-serif text-4xl sm:text-5xl tabular-nums leading-tight mt-1">
              {formatUSD(result.monthlyCost)}
            </p>
            <p className="text-xs text-longhand-paper/60 mt-1">
              {formatUSD(result.annualCost, { compact: true })} / yr ·{' '}
              {formatUSD(result.dailyCost)} / day
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Stat label="Per request" value={formatUSD(result.perRequestCost, { precise: true })} />
            <Stat
              label="Per user / mo"
              value={formatUSD(result.perUserMonthlyCost, { precise: true })}
            />
          </div>

          <div className="border-t border-longhand-paper/15 pt-4">
            <p className="text-xs uppercase tracking-wider text-longhand-paper/60 mb-2">
              Same workload, every model
            </p>
            <div className="h-44">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={comparison.map((c) => ({
                    name: c.label.replace('Claude ', '').replace('Gemini 2.5 ', 'Gem '),
                    cost: Number(c.monthlyCost.toFixed(2)),
                    provider: c.provider,
                    id: c.modelId,
                  }))}
                  layout="vertical"
                  margin={{ top: 0, right: 12, bottom: 0, left: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(250,248,245,0.12)" horizontal={false} />
                  <XAxis
                    type="number"
                    tick={{ fill: 'rgba(250,248,245,0.7)', fontSize: 10 }}
                    tickFormatter={(v) => formatUSD(v, { compact: true })}
                  />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={80}
                    tick={{ fill: 'rgba(250,248,245,0.85)', fontSize: 10 }}
                    interval={0}
                  />
                  <Tooltip
                    cursor={{ fill: 'rgba(250,248,245,0.06)' }}
                    contentStyle={{
                      background: '#2C2520',
                      border: '1px solid rgba(250,248,245,0.2)',
                      color: '#FAF8F5',
                      fontSize: 12,
                      borderRadius: 6,
                    }}
                    formatter={(v: number) => [formatUSD(v), 'Monthly cost']}
                    labelStyle={{ color: '#FAF8F5' }}
                  />
                  <Bar dataKey="cost" radius={[0, 4, 4, 0]}>
                    {comparison.map((c) => (
                      <Cell
                        key={c.modelId}
                        fill={
                          c.modelId === state.inputs.modelId
                            ? '#C8550A'
                            : c.modelId === cheapestId
                              ? '#6B8F71'
                              : PROVIDER_COLORS[c.provider] ?? 'rgba(250,248,245,0.4)'
                        }
                        opacity={c.modelId === state.inputs.modelId ? 1 : 0.85}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center gap-3 mt-2 text-[10px] text-longhand-paper/60">
              <LegendDot color="#C8550A" label="Selected" />
              <LegendDot color="#6B8F71" label="Cheapest" />
            </div>
          </div>
        </div>
      </div>

      {/* How we computed this */}
      <details className="border-t border-longhand-border bg-longhand-accent-light/40 px-5 sm:px-8 py-3 text-sm text-longhand-ink no-print">
        <summary className="cursor-pointer font-medium flex items-center gap-1.5">
          <Info className="w-4 h-4" aria-hidden />
          How we computed this
        </summary>
        <div className="mt-3 space-y-1.5 text-longhand-muted leading-relaxed">
          <p>
            <span className="text-longhand-ink font-medium">Per request:</span>{' '}
            (input tokens × input price) + (output tokens × output price) +
            cached portion priced at the cache-read rate.
          </p>
          <p>
            <span className="text-longhand-ink font-medium">Today:</span>{' '}
            {formatTokens(state.inputs.inputTokens)} in @{' '}
            {formatUSD(result.model.inputPerM, { precise: true })}/M +{' '}
            {formatTokens(state.inputs.outputTokens)} out @{' '}
            {formatUSD(result.model.outputPerM, { precise: true })}/M ={' '}
            {formatUSD(result.perRequestCost, { precise: true })}/req.
          </p>
          <p>
            <span className="text-longhand-ink font-medium">Monthly:</span> per-request ×{' '}
            {state.inputs.requestsPerDay.toLocaleString()} req/day × 30 days.
          </p>
          {result.breakdown.cachingApplied && (
            <p className="text-longhand-success">
              Cache discount applied to {Math.round(state.inputs.cachedShare * 100)}% of input
              tokens.
            </p>
          )}
          {result.breakdown.batchApplied && (
            <p className="text-longhand-success">Batch API discount (50%) applied.</p>
          )}
        </div>
      </details>
    </Card>
  );
}

// ── Subcomponents ──────────────────────────────────────────────────────────

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-longhand-paper/5 border border-longhand-paper/10 p-3">
      <p className="text-[10px] uppercase tracking-wider text-longhand-paper/60">{label}</p>
      <p className="font-serif text-lg tabular-nums mt-0.5">{value}</p>
    </div>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1">
      <span className="w-2 h-2 rounded-sm" style={{ background: color }} aria-hidden />
      {label}
    </span>
  );
}

interface SliderInputProps {
  label: string;
  hint?: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (n: number) => void;
}

function SliderInput({ label, hint, min, max, step, value, onChange }: SliderInputProps) {
  const id = label.replace(/\s+/g, '-').toLowerCase();
  const clamp = (n: number) => Math.min(max, Math.max(min, n));
  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between gap-2">
        <Label htmlFor={id} className="text-longhand-ink font-medium">
          {label}
        </Label>
        {hint && <span className="text-xs text-longhand-muted">{hint}</span>}
      </div>
      <div className="flex items-center gap-3">
        <Slider
          aria-label={label}
          min={min}
          max={max}
          step={step}
          value={[value]}
          onValueChange={(v) => onChange(clamp(v[0] ?? min))}
          className="flex-1"
        />
        <Input
          id={id}
          type="number"
          inputMode="numeric"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => {
            const n = parseInt(e.target.value, 10);
            if (Number.isFinite(n)) onChange(clamp(n));
          }}
          className="w-24 h-9 bg-white border-longhand-border text-longhand-ink tabular-nums text-right"
        />
      </div>
    </div>
  );
}
