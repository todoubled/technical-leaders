import { useMemo, useState } from 'react';
import { ArrowDown, ArrowUp, ArrowUpDown, Star } from 'lucide-react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

import {
  formatTokens,
  formatUSD,
  MODEL_PRICING,
  PROVIDER_LABEL,
  type ModelPricing,
} from '@/lib/token-calculator';

type SortKey = 'label' | 'provider' | 'inputPerM' | 'outputPerM' | 'cachedInputPerM' | 'contextWindow';
type SortDir = 'asc' | 'desc';

const RECOMMENDED_IDS = new Set(['sonnet-4-6', 'haiku-4-5', 'gemini-2-5-flash']);

const PROVIDER_DOT: Record<string, string> = {
  anthropic: 'bg-longhand-accent',
  openai: 'bg-longhand-ink',
  google: 'bg-longhand-success',
};

export function ModelComparisonTable() {
  const [sortKey, setSortKey] = useState<SortKey>('inputPerM');
  const [sortDir, setSortDir] = useState<SortDir>('asc');

  const sorted = useMemo(() => {
    const rows = [...MODEL_PRICING];
    rows.sort((a, b) => {
      const av = a[sortKey] as number | string | null;
      const bv = b[sortKey] as number | string | null;
      if (av == null && bv == null) return 0;
      if (av == null) return 1;
      if (bv == null) return -1;
      if (typeof av === 'number' && typeof bv === 'number') {
        return sortDir === 'asc' ? av - bv : bv - av;
      }
      return sortDir === 'asc'
        ? String(av).localeCompare(String(bv))
        : String(bv).localeCompare(String(av));
    });
    return rows;
  }, [sortKey, sortDir]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  };

  const SortHeader = ({ k, label, align = 'left' }: { k: SortKey; label: string; align?: 'left' | 'right' }) => {
    const Icon =
      sortKey !== k ? ArrowUpDown : sortDir === 'asc' ? ArrowUp : ArrowDown;
    return (
      <button
        type="button"
        onClick={() => toggleSort(k)}
        className={`inline-flex items-center gap-1 text-xs uppercase tracking-wider font-medium text-longhand-muted hover:text-longhand-ink transition-colors ${
          align === 'right' ? 'justify-end w-full' : ''
        }`}
        aria-label={`Sort by ${label}`}
      >
        {label}
        <Icon className="w-3 h-3" aria-hidden />
      </button>
    );
  };

  return (
    <div>
      {/* Desktop table */}
      <div className="hidden md:block rounded-xl border border-longhand-border bg-white overflow-hidden shadow-sm">
        <Table>
          <TableHeader className="bg-longhand-accent-light/60">
            <TableRow className="border-longhand-border hover:bg-transparent">
              <TableHead className="text-left">
                <SortHeader k="label" label="Model" />
              </TableHead>
              <TableHead className="text-left">
                <SortHeader k="provider" label="Provider" />
              </TableHead>
              <TableHead className="text-right tabular-nums">
                <SortHeader k="inputPerM" label="$/M input" align="right" />
              </TableHead>
              <TableHead className="text-right tabular-nums">
                <SortHeader k="outputPerM" label="$/M output" align="right" />
              </TableHead>
              <TableHead className="text-right tabular-nums">
                <SortHeader k="cachedInputPerM" label="Cached input" align="right" />
              </TableHead>
              <TableHead className="text-right tabular-nums">Batch</TableHead>
              <TableHead className="text-right tabular-nums">
                <SortHeader k="contextWindow" label="Context" align="right" />
              </TableHead>
              <TableHead className="text-left">Best for</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sorted.map((m) => (
              <TableRow
                key={m.id}
                className="border-longhand-border hover:bg-longhand-accent-light/30 transition-colors"
              >
                <TableCell className="text-longhand-ink font-medium">
                  <div className="flex items-center gap-2">
                    {RECOMMENDED_IDS.has(m.id) && (
                      <Star
                        className="w-3.5 h-3.5 text-longhand-accent fill-longhand-accent"
                        aria-label="Recommended starting point"
                      />
                    )}
                    {m.label}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="inline-flex items-center gap-1.5 text-longhand-muted text-sm">
                    <span
                      className={`w-2 h-2 rounded-full ${PROVIDER_DOT[m.provider]}`}
                      aria-hidden
                    />
                    {PROVIDER_LABEL[m.provider]}
                  </div>
                </TableCell>
                <TableCell className="text-right tabular-nums text-longhand-ink">
                  {formatUSD(m.inputPerM, { precise: true })}
                </TableCell>
                <TableCell className="text-right tabular-nums text-longhand-ink">
                  {formatUSD(m.outputPerM, { precise: true })}
                </TableCell>
                <TableCell className="text-right tabular-nums text-longhand-muted">
                  {m.cachedInputPerM != null ? formatUSD(m.cachedInputPerM, { precise: true }) : '—'}
                </TableCell>
                <TableCell className="text-right tabular-nums text-longhand-muted">
                  {m.batchDiscount != null ? `${Math.round((1 - m.batchDiscount) * 100)}% off` : '—'}
                </TableCell>
                <TableCell className="text-right tabular-nums text-longhand-muted">
                  {formatTokens(m.contextWindow)}
                </TableCell>
                <TableCell className="text-longhand-muted text-sm max-w-[14rem]">{m.bestFor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-3">
        {sorted.map((m) => (
          <MobileCard key={m.id} model={m} recommended={RECOMMENDED_IDS.has(m.id)} />
        ))}
      </div>

      <p className="mt-4 flex items-center gap-2 text-xs text-longhand-muted">
        <Star className="w-3.5 h-3.5 text-longhand-accent fill-longhand-accent" aria-hidden />
        Solid default starting points if you don't want to think hard. Escalate to a flagship only when these can't do the job.
      </p>
    </div>
  );
}

function MobileCard({ model, recommended }: { model: ModelPricing; recommended: boolean }) {
  return (
    <div className="rounded-xl border border-longhand-border bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="flex items-center gap-1.5">
            {recommended && (
              <Star className="w-3.5 h-3.5 text-longhand-accent fill-longhand-accent" aria-hidden />
            )}
            <h4 className="font-medium text-longhand-ink">{model.label}</h4>
          </div>
          <div className="mt-1 inline-flex items-center gap-1.5 text-xs text-longhand-muted">
            <span className={`w-2 h-2 rounded-full ${PROVIDER_DOT[model.provider]}`} aria-hidden />
            {PROVIDER_LABEL[model.provider]}
          </div>
        </div>
        <Badge variant="outline" className="border-longhand-border text-longhand-muted">
          {formatTokens(model.contextWindow)} ctx
        </Badge>
      </div>
      <p className="text-xs text-longhand-muted mt-2">{model.bestFor}</p>
      <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
        <Pair label="Input / M" value={formatUSD(model.inputPerM, { precise: true })} />
        <Pair label="Output / M" value={formatUSD(model.outputPerM, { precise: true })} />
        <Pair
          label="Cached"
          value={
            model.cachedInputPerM != null ? formatUSD(model.cachedInputPerM, { precise: true }) : '—'
          }
        />
        <Pair
          label="Batch"
          value={
            model.batchDiscount != null ? `${Math.round((1 - model.batchDiscount) * 100)}% off` : '—'
          }
        />
      </div>
    </div>
  );
}

function Pair({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-md bg-longhand-accent-light/40 px-2.5 py-1.5">
      <span className="text-longhand-muted">{label}</span>
      <span className="text-longhand-ink tabular-nums font-medium">{value}</span>
    </div>
  );
}
