import { type LucideIcon } from 'lucide-react';

export interface CostLeverCardProps {
  index: number;
  title: string;
  oneLiner: string;
  savings: string;
  whenToUse: string;
  icon: LucideIcon;
}

export function CostLeverCard({
  index,
  title,
  oneLiner,
  savings,
  whenToUse,
  icon: Icon,
}: CostLeverCardProps) {
  return (
    <article className="relative rounded-xl border border-longhand-border bg-white p-5 shadow-sm hover:shadow-md transition-shadow break-inside-avoid">
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-10 h-10 rounded-lg bg-longhand-accent-light text-longhand-accent flex items-center justify-center">
          <Icon className="w-5 h-5" aria-hidden />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-xs font-medium text-longhand-muted tabular-nums">
              {String(index).padStart(2, '0')}
            </span>
            <h4 className="font-serif text-lg text-longhand-ink leading-tight">{title}</h4>
          </div>
          <p className="text-sm text-longhand-ink/85 leading-relaxed">{oneLiner}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center rounded-full bg-longhand-success/15 text-longhand-success border border-longhand-success/30 px-2.5 py-0.5 font-medium">
              {savings}
            </span>
            <span className="text-longhand-muted">When: {whenToUse}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
