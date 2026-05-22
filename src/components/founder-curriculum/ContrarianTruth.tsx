import { Sparkles } from 'lucide-react';

/**
 * Mockup: Contrarian Truth worksheet card.
 * Visual styled card showing Thiel's prompt and a sample answer.
 */
const ContrarianTruth = () => {
  return (
    <div className="rounded-lg border border-violet-500/30 bg-gradient-to-br from-slate-900/80 to-violet-950/30 p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-4 h-4 text-violet-400" />
        <span className="text-xs uppercase tracking-wider text-violet-300 font-mono">Example · Worksheet</span>
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-[11px] uppercase tracking-wide text-slate-500 mb-1 font-medium">Prompt</p>
          <p className="text-sm text-slate-200 leading-relaxed">
            What important truth do very few people agree with you on?
          </p>
        </div>

        <div className="border-t border-slate-700/60 pt-3">
          <p className="text-[11px] uppercase tracking-wide text-slate-500 mb-1 font-medium">Your answer</p>
          <p className="text-sm text-slate-100 leading-relaxed italic">
            "Most B2B software is bought by people who never have to use it. The buyer and the user are different humans, with different incentives. Most tools optimize for the buyer."
          </p>
        </div>

        <div className="border-t border-slate-700/60 pt-3 grid grid-cols-2 gap-3 text-[11px]">
          <div>
            <p className="text-slate-500 uppercase tracking-wide mb-0.5">Why contrarian?</p>
            <p className="text-slate-300">Most peers chase enterprise budgets</p>
          </div>
          <div>
            <p className="text-slate-500 uppercase tracking-wide mb-0.5">Why true?</p>
            <p className="text-slate-300">15 interviews with daily users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContrarianTruth;
