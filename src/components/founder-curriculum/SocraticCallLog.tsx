import { Search } from 'lucide-react';

/**
 * Mockup: Socratic discovery call log
 * 3 rows showing question → surface answer → real motive.
 */
const SocraticCallLog = () => {
  const rows = [
    {
      q: 'What pushed you to evaluate this now?',
      surface: '"Our current vendor is fine, just exploring."',
      real: 'Renewal in 60 days. CFO told her to find 30% savings.',
    },
    {
      q: 'Walk me through last time this broke for you.',
      surface: '"We have some workarounds."',
      real: 'Lost a major customer 6 wks ago. Board is watching.',
    },
    {
      q: 'If we did nothing, what happens in Q4?',
      surface: '"We\'d figure it out."',
      real: "It's her promotion. Misses Q4 = misses VP track.",
    },
  ];

  return (
    <div className="rounded-lg border border-sky-500/30 bg-slate-900/70 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-xs text-sky-300">
          <Search className="w-3.5 h-3.5" />
          <span className="font-mono uppercase tracking-wider">Example · Discovery call</span>
        </div>
        <span className="text-[10px] text-slate-500 font-mono">Stage: Explore</span>
      </div>

      <div className="grid grid-cols-12 gap-2 text-[11px] uppercase tracking-wide text-slate-500 mb-1.5 font-medium">
        <div className="col-span-4">Question asked</div>
        <div className="col-span-4">Surface answer</div>
        <div className="col-span-4">Real motive</div>
      </div>

      <div className="space-y-1.5">
        {rows.map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-12 gap-2 rounded-md border border-slate-700/40 bg-slate-800/30 px-2.5 py-2"
          >
            <div className="col-span-4 text-[11px] text-slate-300 leading-snug">{row.q}</div>
            <div className="col-span-4 text-[11px] text-slate-500 italic leading-snug">
              {row.surface}
            </div>
            <div className="col-span-4 text-[11px] text-emerald-300 leading-snug">{row.real}</div>
          </div>
        ))}
      </div>

      <p className="text-[11px] text-slate-500 mt-3 leading-relaxed">
        You sell to the real motive — not the surface answer.
      </p>
    </div>
  );
};

export default SocraticCallLog;
