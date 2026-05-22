import { Clock, Mail, DollarSign, Users } from 'lucide-react';

/**
 * Mockup: Commitments & Currencies log
 * Shows the difference between compliments and real commitments.
 */
const CommitmentsLog = () => {
  const rows = [
    {
      who: 'Maya R.',
      currency: 'Time',
      icon: Clock,
      detail: 'Booked 45-min follow-up for Tuesday',
      strong: true,
    },
    {
      who: 'Devon K.',
      currency: 'Reputation',
      icon: Users,
      detail: 'Intro\'d me to his Head of Ops',
      strong: true,
    },
    {
      who: 'Sam P.',
      currency: 'Money',
      icon: DollarSign,
      detail: 'Paid $50 to skip the line on pilot',
      strong: true,
    },
    {
      who: 'Alex W.',
      currency: 'None',
      icon: Mail,
      detail: '"Send me a link when it\'s live"',
      strong: false,
    },
  ];

  return (
    <div className="rounded-lg border border-slate-700/60 bg-slate-900/70 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
          Example · Commitments log
        </span>
        <span className="text-[10px] text-slate-500 font-mono">Week 2</span>
      </div>

      <div className="space-y-1.5">
        {rows.map((row) => {
          const Icon = row.icon;
          return (
            <div
              key={row.who}
              className={`flex items-center gap-3 rounded-md border px-3 py-2 ${
                row.strong
                  ? 'border-emerald-500/30 bg-emerald-500/5'
                  : 'border-slate-600/40 bg-slate-800/30'
              }`}
            >
              <Icon
                className={`w-4 h-4 flex-shrink-0 ${
                  row.strong ? 'text-emerald-400' : 'text-slate-500'
                }`}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-200 truncate">
                  <span className="font-medium">{row.who}</span>
                  <span className="text-slate-500"> · {row.currency}</span>
                </p>
                <p className="text-[11px] text-slate-400 truncate">{row.detail}</p>
              </div>
              <span
                className={`text-[10px] uppercase tracking-wide font-medium ${
                  row.strong ? 'text-emerald-400' : 'text-slate-500'
                }`}
              >
                {row.strong ? 'Real' : 'Compliment'}
              </span>
            </div>
          );
        })}
      </div>

      <p className="text-[11px] text-slate-500 mt-3 leading-relaxed">
        Rule of thumb: if it doesn't cost the prospect time, reputation, or money — it's not a commitment.
      </p>
    </div>
  );
};

export default CommitmentsLog;
