import { Activity } from 'lucide-react';

/**
 * Mockup: Default Alive / Default Dead calculator
 * Small styled "input card" with runway, growth rate, verdict.
 */
const DefaultAliveCalc = () => {
  return (
    <div className="rounded-lg border border-slate-700/60 bg-slate-900/70 p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <Activity className="w-4 h-4 text-amber-400" />
        <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
          Example · Default-alive check
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="rounded-md border border-slate-700/40 bg-slate-800/30 p-2.5">
          <p className="text-[10px] uppercase tracking-wide text-slate-500 mb-1">Monthly revenue</p>
          <p className="text-lg font-semibold text-slate-100 tabular-nums">$8,400</p>
        </div>
        <div className="rounded-md border border-slate-700/40 bg-slate-800/30 p-2.5">
          <p className="text-[10px] uppercase tracking-wide text-slate-500 mb-1">Monthly burn</p>
          <p className="text-lg font-semibold text-slate-100 tabular-nums">$12,000</p>
        </div>
        <div className="rounded-md border border-slate-700/40 bg-slate-800/30 p-2.5">
          <p className="text-[10px] uppercase tracking-wide text-slate-500 mb-1">Cash on hand</p>
          <p className="text-lg font-semibold text-slate-100 tabular-nums">$72,000</p>
        </div>
        <div className="rounded-md border border-slate-700/40 bg-slate-800/30 p-2.5">
          <p className="text-[10px] uppercase tracking-wide text-slate-500 mb-1">Weekly growth</p>
          <p className="text-lg font-semibold text-emerald-300 tabular-nums">6.2%</p>
        </div>
      </div>

      <div className="rounded-md border border-emerald-500/40 bg-emerald-500/10 p-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] uppercase tracking-wide text-emerald-300 font-medium">
            Verdict
          </span>
          <span className="text-xs text-emerald-200 font-mono">Reaches break-even mo. 7</span>
        </div>
        <p className="text-base font-semibold text-emerald-200">Default Alive</p>
        <p className="text-[11px] text-emerald-200/70 mt-0.5">
          At 6.2%/wk, MRR crosses burn before runway ends.
        </p>
      </div>

      <p className="text-[11px] text-slate-500 mt-3 leading-relaxed">
        Most founders avoid this calc. The number is more honest than your gut.
      </p>
    </div>
  );
};

export default DefaultAliveCalc;
