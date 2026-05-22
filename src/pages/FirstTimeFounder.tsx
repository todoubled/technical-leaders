import { useEffect, useMemo, useRef, useState } from 'react';
import {
  BookOpen,
  Check,
  CheckCircle2,
  Compass,
  Hammer,
  Handshake,
  RefreshCw,
  Sparkles,
  X,
  Share2,
  RotateCcw,
  ExternalLink,
} from 'lucide-react';

import SEO from '@/components/SEO';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/hooks/use-toast';
import { trackClick } from '@/utils/posthog';

import {
  phases,
  sourceColors,
  sourceDisplayNames,
  type ChecklistItem,
  type Phase,
} from '@/data/founderCurriculum';
import { useFounderProgress } from '@/hooks/useFounderProgress';
import { mockupComponents, Confetti } from '@/components/founder-curriculum';

const phaseIcons: Record<string, typeof Compass> = {
  'phase-1-idea': Compass,
  'phase-2-product': Hammer,
  'phase-3-customers': Handshake,
  'phase-4-iteration': RefreshCw,
};

const phaseAccent: Record<string, string> = {
  'phase-1-idea': 'from-violet-500/20 to-violet-500/0 border-violet-500/30 text-violet-300',
  'phase-2-product': 'from-emerald-500/20 to-emerald-500/0 border-emerald-500/30 text-emerald-300',
  'phase-3-customers': 'from-sky-500/20 to-sky-500/0 border-sky-500/30 text-sky-300',
  'phase-4-iteration': 'from-amber-500/20 to-amber-500/0 border-amber-500/30 text-amber-300',
};

const formatDate = (iso: string | null) => {
  if (!iso) return null;
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return null;
  }
};

const daysBetween = (startIso: string, endIso: string | null) => {
  try {
    const start = new Date(startIso).getTime();
    const end = endIso ? new Date(endIso).getTime() : Date.now();
    const days = Math.max(1, Math.round((end - start) / (1000 * 60 * 60 * 24)));
    return days;
  } catch {
    return null;
  }
};

const SourceChip = ({ source }: { source: ChecklistItem['source'] }) => {
  const color = sourceColors[source.tag];
  const display = sourceDisplayNames[source.tag];
  const content = (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${color}`}
    >
      <BookOpen className="w-3 h-3" />
      <span className="font-semibold">{display}</span>
      <span className="opacity-70">·</span>
      <span className="font-normal">{source.citation}</span>
      {source.url && <ExternalLink className="w-2.5 h-2.5 opacity-70" />}
    </span>
  );

  if (source.url) {
    return (
      <a
        href={source.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackClick('founder_curriculum_source_link', {
            source: source.tag,
            citation: source.citation,
          })
        }
        className="hover:opacity-80 transition-opacity"
      >
        {content}
      </a>
    );
  }
  return content;
};

const ChecklistItemRow = ({
  item,
  checked,
  onToggle,
}: {
  item: ChecklistItem;
  checked: boolean;
  onToggle: () => void;
}) => {
  const Mockup = item.mockupKey ? mockupComponents[item.mockupKey] : null;
  return (
    <li
      className={`group rounded-xl border transition-all ${
        checked
          ? 'border-emerald-500/30 bg-emerald-500/[0.04]'
          : 'border-slate-700/60 bg-slate-900/40 hover:bg-slate-900/60'
      }`}
    >
      <div className="p-4 md:p-5">
        <div className="flex items-start gap-3 md:gap-4">
          <label
            className="flex items-center justify-center cursor-pointer pt-0.5"
            htmlFor={`item-${item.id}`}
          >
            <span className="inline-flex items-center justify-center w-11 h-11 -m-3 md:-m-2 rounded-full">
              <Checkbox
                id={`item-${item.id}`}
                checked={checked}
                onCheckedChange={onToggle}
                className="w-5 h-5 border-slate-500 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500 data-[state=checked]:text-white"
                aria-label={`Mark as done: ${item.title}`}
              />
            </span>
          </label>

          <div className="flex-1 min-w-0">
            <h3
              className={`text-base md:text-lg font-semibold leading-snug ${
                checked ? 'text-slate-400 line-through decoration-emerald-500/40' : 'text-slate-100'
              }`}
            >
              {item.title}
            </h3>
            <p
              className={`mt-1.5 text-sm leading-relaxed ${
                checked ? 'text-slate-500' : 'text-slate-300'
              }`}
            >
              {item.why}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <SourceChip source={item.source} />
            </div>
          </div>
        </div>

        {Mockup && (
          <div className="mt-4 md:ml-12">
            <Mockup />
          </div>
        )}
      </div>
    </li>
  );
};

const PhaseSection = ({
  phase,
  isChecked,
  toggle,
  phaseProgress,
}: {
  phase: Phase;
  isChecked: (id: string) => boolean;
  toggle: (id: string) => void;
  phaseProgress: (id: string) => { completed: number; total: number };
}) => {
  const Icon = phaseIcons[phase.id] || Compass;
  const accent = phaseAccent[phase.id];
  const { completed, total } = phaseProgress(phase.id);
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100);
  const phaseComplete = completed === total && total > 0;

  return (
    <section id={phase.id} aria-labelledby={`${phase.id}-title`} className="scroll-mt-24">
      <div className={`relative overflow-hidden rounded-2xl border bg-gradient-to-br p-5 md:p-6 ${accent}`}>
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex items-start gap-3">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-900/60 border border-slate-700/60">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-widest font-mono opacity-80">
                Phase {phase.number}
              </p>
              <h2 id={`${phase.id}-title`} className="text-xl md:text-2xl font-bold text-white">
                {phase.title}
              </h2>
            </div>
          </div>
          <div className="text-right min-w-[120px]">
            <p className="text-[11px] uppercase tracking-widest font-mono opacity-80">Progress</p>
            <p className="text-lg font-semibold text-white tabular-nums">
              {completed}/{total} {phaseComplete && <Check className="inline w-4 h-4 ml-1 text-emerald-400" />}
            </p>
          </div>
        </div>
        <p className="mt-3 text-sm md:text-base text-slate-300 leading-relaxed max-w-3xl">
          {phase.summary}
        </p>
        <div className="mt-4 h-1.5 w-full rounded-full bg-slate-800/80 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <ul className="mt-4 space-y-3">
        {phase.items.map((item) => (
          <ChecklistItemRow
            key={item.id}
            item={item}
            checked={isChecked(item.id)}
            onToggle={() => toggle(item.id)}
          />
        ))}
      </ul>
    </section>
  );
};

const StickyProgress = ({
  percent,
  completedCount,
  totalCount,
  currentPhase,
}: {
  percent: number;
  completedCount: number;
  totalCount: number;
  currentPhase: Phase | null;
}) => {
  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[min(92vw,420px)] rounded-2xl border border-slate-700/80 bg-slate-900/95 backdrop-blur shadow-xl"
      role="status"
      aria-live="polite"
    >
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-xs text-slate-400 font-medium">
              {currentPhase ? (
                <>Currently in <span className="text-slate-200">Phase {currentPhase.number} · {currentPhase.title}</span></>
              ) : (
                <>Ready when you are</>
              )}
            </span>
          </div>
          <span className="text-xs font-mono text-slate-300 tabular-nums">
            {completedCount}/{totalCount}
          </span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
};

const CelebrationBanner = ({
  startedAt,
  completedAt,
  totalCount,
  onDismiss,
}: {
  startedAt: string;
  completedAt: string;
  totalCount: number;
  onDismiss: () => void;
}) => {
  const startedLabel = formatDate(startedAt);
  const completedLabel = formatDate(completedAt);
  const days = daysBetween(startedAt, completedAt);

  return (
    <div
      role="status"
      className="relative overflow-hidden rounded-2xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/15 via-slate-900 to-slate-900 p-5 md:p-6 mb-8"
    >
      <button
        type="button"
        onClick={onDismiss}
        aria-label="Dismiss completion banner"
        className="absolute top-3 right-3 text-slate-400 hover:text-slate-200 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="flex items-start gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex-shrink-0">
          <CheckCircle2 className="w-5 h-5 text-emerald-300" />
        </div>
        <div className="flex-1 min-w-0 pr-6">
          <h2 className="text-lg md:text-xl font-bold text-white">
            You've completed the First-Time Founder curriculum.
          </h2>
          <p className="mt-1 text-sm text-slate-300">
            {startedLabel && completedLabel && days ? (
              <>
                Started {startedLabel} · Completed {completedLabel} · {days} day{days === 1 ? '' : 's'} · {totalCount}/{totalCount} items
              </>
            ) : (
              <>{totalCount}/{totalCount} items complete</>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

const ShareableBadge = ({
  startedAt,
  completedAt,
  totalCount,
}: {
  startedAt: string;
  completedAt: string | null;
  totalCount: number;
}) => {
  const days = daysBetween(startedAt, completedAt);
  const startedLabel = formatDate(startedAt);
  const completedLabel = formatDate(completedAt);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = `Just completed the First-Time Founder curriculum — ${totalCount} lessons from The Mom Test, Paul Graham, First Round, Zero to One, and Socratic Selling. https://technical-leaders.com/first-time-founder`;
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        navigator.clipboard.writeText(text);
      }
      setCopied(true);
      toast({ title: 'Copied to clipboard', description: 'Share text is ready to paste.' });
      trackClick('founder_curriculum_share_copy', {});
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({ title: 'Could not copy', description: 'Try selecting the text manually.' });
    }
  };

  return (
    <div className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 md:p-8">
      <div className="flex items-start gap-3 mb-5">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/15 border border-amber-500/40">
          <Sparkles className="w-5 h-5 text-amber-300" />
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold text-white">Your completion badge</h3>
          <p className="text-sm text-slate-400 mt-0.5">
            For your records — or to share with anyone walking the same path.
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-700/60 bg-gradient-to-br from-slate-950 to-slate-900 p-5 md:p-6 mb-5">
        <p className="text-[11px] uppercase tracking-widest text-slate-500 font-mono mb-2">
          First-Time Founder Curriculum
        </p>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-emerald-300 tabular-nums">
              {days ?? '—'}
            </p>
            <p className="text-[11px] text-slate-500 uppercase tracking-wide mt-0.5">days</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-emerald-300 tabular-nums">
              {totalCount}/{totalCount}
            </p>
            <p className="text-[11px] text-slate-500 uppercase tracking-wide mt-0.5">items</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-emerald-300 tabular-nums">5</p>
            <p className="text-[11px] text-slate-500 uppercase tracking-wide mt-0.5">sources</p>
          </div>
        </div>
        <p className="text-center text-xs text-slate-500 mt-4">
          {startedLabel} → {completedLabel}
        </p>
      </div>

      <button
        type="button"
        onClick={handleCopy}
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-5 py-3 transition-colors"
      >
        {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
        {copied ? 'Copied!' : 'Copy share text'}
      </button>

      <p className="text-center text-[11px] text-slate-500 mt-3">
        No funnel. No booking link. Just goodwill — wherever you are on the path.
      </p>
    </div>
  );
};

const KeepGoingFooter = ({
  percent,
  totalCount,
  completedCount,
}: {
  percent: number;
  totalCount: number;
  completedCount: number;
}) => {
  if (percent >= 100) return null;
  return (
    <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 text-center">
      <Sparkles className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
      <h3 className="text-lg font-semibold text-white">
        {completedCount === 0 ? 'Start with one item.' : `${totalCount - completedCount} to go.`}
      </h3>
      <p className="text-sm text-slate-400 mt-2 max-w-md mx-auto">
        Progress saves automatically in your browser. Come back tomorrow, next week, or in three months — your checkmarks will be here.
      </p>
    </div>
  );
};

const FirstTimeFounder = () => {
  const {
    isChecked,
    toggle,
    phaseProgress,
    percent,
    completedCount,
    totalCount,
    startedAt,
    completedAt,
    isComplete,
    justCompleted,
    celebrationDismissed,
    dismissCelebration,
    resetProgress,
  } = useFounderProgress();

  const [showConfetti, setShowConfetti] = useState(false);
  const previousJustCompletedRef = useRef(false);

  // Trigger confetti when the user reaches 100% for the first time in this session.
  useEffect(() => {
    if (justCompleted && !previousJustCompletedRef.current) {
      previousJustCompletedRef.current = true;
      setShowConfetti(true);
    }
  }, [justCompleted]);

  // Determine "current phase" = first phase that still has incomplete items.
  const currentPhase = useMemo<Phase | null>(() => {
    for (const phase of phases) {
      const { completed, total } = phaseProgress(phase.id);
      if (completed < total) return phase;
    }
    return null;
  }, [phaseProgress]);

  const showCelebration = isComplete && !!completedAt && !celebrationDismissed;

  const structuredData = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'First-Time Founder Curriculum',
      description:
        'A 4-phase, self-paced checklist for first-time founders covering idea refinement, product development, first customers, and iteration — distilled from The Mom Test, Paul Graham, First Round Review, Zero to One, and Socratic Selling.',
      provider: {
        '@type': 'Organization',
        name: 'Technical Leaders',
        url: 'https://technical-leaders.com',
      },
    }),
    []
  );

  const handleReset = () => {
    if (typeof window !== 'undefined') {
      const ok = window.confirm(
        'Reset your progress? This clears all checkmarks for this curriculum.'
      );
      if (!ok) return;
    }
    resetProgress();
    setShowConfetti(false);
    previousJustCompletedRef.current = false;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <SEO
        title="First-Time Founder Curriculum"
        description="A free, self-paced checklist for first-time founders. 4 phases, 28 lessons, distilled from The Mom Test, Paul Graham, First Round Review, Zero to One, and Socratic Selling. Your progress saves in your browser."
        keywords={[
          'first time founder',
          'startup checklist',
          'founder curriculum',
          'mom test',
          'paul graham',
          'zero to one',
          'first round review',
          'socratic selling',
          'product market fit',
          'startup guide',
        ]}
        structuredData={structuredData}
      />

      {showConfetti && <Confetti onDone={() => setShowConfetti(false)} />}

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16 pb-32">
        {/* Hero */}
        <header className="mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            Self-paced · Free · No signup
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            The First-Time Founder Curriculum
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-300 leading-relaxed">
            A 4-phase checklist from idea to first paying customers. Every item is a specific move you can do this week, cited from the books and essays that actually teach it.
          </p>
          <p className="mt-3 text-sm text-slate-400">
            Distilled from{' '}
            <span className="text-slate-200 font-medium">The Mom Test</span>,{' '}
            <span className="text-slate-200 font-medium">Paul Graham</span>,{' '}
            <span className="text-slate-200 font-medium">First Round Review</span>,{' '}
            <span className="text-slate-200 font-medium">Zero to One</span>, and{' '}
            <span className="text-slate-200 font-medium">Socratic Selling</span>.
          </p>

          {/* Hero progress */}
          <div className="mt-7 rounded-2xl border border-slate-700/60 bg-slate-900/50 p-5">
            <div className="flex items-baseline justify-between mb-2">
              <p className="text-sm text-slate-300">Your progress</p>
              <p className="text-sm font-mono text-slate-200 tabular-nums">
                <span className="font-semibold">{completedCount}</span>
                <span className="text-slate-500"> / {totalCount}</span>
                <span className="text-slate-500"> · {percent}%</span>
              </p>
            </div>
            <Progress value={percent} className="h-2 bg-slate-800" />
            <p className="mt-3 text-xs text-slate-500">
              Saves to your browser. Comes back when you do.
            </p>
          </div>
        </header>

        {/* Celebration */}
        {showCelebration && completedAt && (
          <CelebrationBanner
            startedAt={startedAt}
            completedAt={completedAt}
            totalCount={totalCount}
            onDismiss={dismissCelebration}
          />
        )}

        {/* Phases */}
        <div className="space-y-12">
          {phases.map((phase) => (
            <PhaseSection
              key={phase.id}
              phase={phase}
              isChecked={isChecked}
              toggle={toggle}
              phaseProgress={phaseProgress}
            />
          ))}
        </div>

        {/* Footer / completion zone */}
        <div className="mt-14 md:mt-16">
          {isComplete && completedAt ? (
            <ShareableBadge
              startedAt={startedAt}
              completedAt={completedAt}
              totalCount={totalCount}
            />
          ) : (
            <KeepGoingFooter
              percent={percent}
              totalCount={totalCount}
              completedCount={completedCount}
            />
          )}
        </div>

        {/* Reset link */}
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            Reset progress
          </button>
        </div>

        {/* Sources footer */}
        <footer className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 leading-relaxed">
          <p>
            <span className="text-slate-400 font-medium">A note on sources.</span> Each item cites a specific chapter, essay, or article. Where a Paul Graham essay or First Round article is cited, the URL is included. Book chapter references are at the chapter level rather than direct quotes. If you find an item that doesn't match a source you've read, the source's idea is the anchor — adapt the phrasing to your situation.
          </p>
        </footer>
      </main>

      <StickyProgress
        percent={percent}
        completedCount={completedCount}
        totalCount={totalCount}
        currentPhase={currentPhase}
      />
    </div>
  );
};

export default FirstTimeFounder;
