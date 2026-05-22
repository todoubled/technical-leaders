import { CheckCircle2, AlertTriangle, MessageSquare } from 'lucide-react';

/**
 * Mockup: Mom Test Interview Notes
 * Shows what good vs. bad customer interview signal looks like.
 * Three anonymized quotes — one specific past behavior (green),
 * one compliment trap (red), one generic opinion (gray).
 */
const MomTestInterviewNotes = () => {
  return (
    <div className="rounded-lg border border-slate-700/60 bg-slate-900/70 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <MessageSquare className="w-3.5 h-3.5" />
          <span className="font-mono uppercase tracking-wider">Example · Interview notes</span>
        </div>
        <span className="text-[10px] text-slate-500 font-mono">3 prospects</span>
      </div>

      <div className="space-y-2.5">
        <div className="rounded-md border border-emerald-500/30 bg-emerald-500/5 p-3">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm text-slate-200 italic leading-snug">
                "Last Tuesday I spent 4 hours rebuilding the same chart in three tools. I ended up doing it in Excel."
              </p>
              <p className="text-[11px] text-emerald-400 mt-1.5 font-medium">
                Good signal — specific, past, observable behavior
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-md border border-rose-500/30 bg-rose-500/5 p-3">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm text-slate-200 italic leading-snug">
                "I love this idea — you should totally build it!"
              </p>
              <p className="text-[11px] text-rose-400 mt-1.5 font-medium">
                Compliment trap — feels good, teaches nothing
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-md border border-slate-600/40 bg-slate-800/40 p-3">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm text-slate-300 italic leading-snug">
                "Yeah, I'd probably pay $50/month for something like that."
              </p>
              <p className="text-[11px] text-slate-500 mt-1.5 font-medium">
                Hypothetical — future intentions are not data
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MomTestInterviewNotes;
