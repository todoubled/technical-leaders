import { CheckCircle2 } from 'lucide-react';

/**
 * Mockup: First Dollar
 * Stylized payment receipt card showing the first dollar charged.
 */
const FirstDollar = () => {
  return (
    <div className="rounded-lg border border-emerald-500/30 bg-gradient-to-br from-slate-900/90 to-emerald-950/30 p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs uppercase tracking-wider text-emerald-300 font-mono">
          Example · Receipt
        </span>
        <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">
          Card · succeeded
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-baseline justify-between">
          <span className="text-[11px] uppercase tracking-wide text-slate-500">Amount</span>
          <span className="text-3xl font-bold text-emerald-300 tabular-nums">$1.00</span>
        </div>

        <div className="border-t border-slate-700/60 pt-3 space-y-1.5 text-[12px]">
          <div className="flex justify-between text-slate-300">
            <span className="text-slate-500">Customer</span>
            <span>maya@acme.co</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span className="text-slate-500">Description</span>
            <span>Pilot — Week 1 access</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span className="text-slate-500">Date</span>
            <span>Today · 2:14pm</span>
          </div>
        </div>

        <div className="border-t border-slate-700/60 pt-3 flex items-center gap-2 text-emerald-300 text-sm">
          <CheckCircle2 className="w-4 h-4" />
          <span>First paying customer</span>
        </div>
      </div>

      <p className="text-[11px] text-slate-500 mt-4 leading-relaxed">
        $1 that clears tells you more than $10,000 of LOIs that don't.
      </p>
    </div>
  );
};

export default FirstDollar;
