import { useCallback, useEffect, useMemo, useState } from 'react';
import { trackEvent } from '@/utils/posthog';
import { phases, totalItems } from '@/data/founderCurriculum';

const STORAGE_KEY = 'first-time-founder-progress-v1';

interface PersistedProgress {
  completedIds: string[];
  startedAt: string;
  completedAt: string | null;
  celebrationDismissed?: boolean;
}

const emptyState = (): PersistedProgress => ({
  completedIds: [],
  startedAt: new Date().toISOString(),
  completedAt: null,
  celebrationDismissed: false,
});

const safeRead = (): PersistedProgress => {
  try {
    if (typeof window === 'undefined') return emptyState();
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyState();
    const parsed = JSON.parse(raw) as PersistedProgress;
    // Defensive defaults for older shapes
    return {
      completedIds: Array.isArray(parsed.completedIds) ? parsed.completedIds : [],
      startedAt: parsed.startedAt || new Date().toISOString(),
      completedAt: parsed.completedAt ?? null,
      celebrationDismissed: !!parsed.celebrationDismissed,
    };
  } catch {
    return emptyState();
  }
};

const safeWrite = (state: PersistedProgress) => {
  try {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Silent failure — private browsing, quota exceeded, etc.
  }
};

/** Lookup of itemId -> phaseId, built once. */
const itemPhaseMap: Record<string, string> = (() => {
  const map: Record<string, string> = {};
  for (const phase of phases) {
    for (const item of phase.items) {
      map[item.id] = phase.id;
    }
  }
  return map;
})();

export interface UseFounderProgress {
  completedIds: Set<string>;
  startedAt: string;
  completedAt: string | null;
  celebrationDismissed: boolean;
  isComplete: boolean;
  justCompleted: boolean;
  percent: number;
  completedCount: number;
  totalCount: number;
  isChecked: (id: string) => boolean;
  toggle: (id: string) => void;
  phaseProgress: (phaseId: string) => { completed: number; total: number };
  dismissCelebration: () => void;
  resetProgress: () => void;
}

export function useFounderProgress(): UseFounderProgress {
  const [state, setState] = useState<PersistedProgress>(emptyState);
  const [hydrated, setHydrated] = useState(false);
  const [justCompleted, setJustCompleted] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    setState(safeRead());
    setHydrated(true);
  }, []);

  // Persist on every state change after hydration
  useEffect(() => {
    if (!hydrated) return;
    safeWrite(state);
  }, [state, hydrated]);

  const completedIds = useMemo(() => new Set(state.completedIds), [state.completedIds]);
  const completedCount = completedIds.size;
  const percent = totalItems === 0 ? 0 : Math.round((completedCount / totalItems) * 100);
  const isComplete = completedCount >= totalItems && totalItems > 0;

  const isChecked = useCallback((id: string) => completedIds.has(id), [completedIds]);

  const toggle = useCallback((id: string) => {
    setState((prev) => {
      const set = new Set(prev.completedIds);
      const wasChecked = set.has(id);
      if (wasChecked) {
        set.delete(id);
      } else {
        set.add(id);
      }
      const nextCompletedIds = Array.from(set);
      const nextCount = nextCompletedIds.length;
      const reachedComplete = nextCount >= totalItems && totalItems > 0;
      const firstCompletion = reachedComplete && !prev.completedAt;

      // Fire tracking events (best-effort; trackEvent guards itself internally)
      try {
        trackEvent('founder_curriculum_item_toggled', {
          itemId: id,
          phase: itemPhaseMap[id] || 'unknown',
          completed: !wasChecked,
        });
        if (firstCompletion) {
          trackEvent('founder_curriculum_completed', {
            total_items: totalItems,
            started_at: prev.startedAt,
          });
        }
      } catch {
        // ignore
      }

      if (firstCompletion) {
        // Defer celebration flag flip to next tick so consumers can subscribe
        setTimeout(() => setJustCompleted(true), 0);
      }

      return {
        completedIds: nextCompletedIds,
        startedAt: prev.startedAt,
        completedAt: firstCompletion ? new Date().toISOString() : prev.completedAt,
        celebrationDismissed: firstCompletion ? false : prev.celebrationDismissed,
      };
    });
  }, []);

  const phaseProgress = useCallback(
    (phaseId: string) => {
      const phase = phases.find((p) => p.id === phaseId);
      if (!phase) return { completed: 0, total: 0 };
      const completed = phase.items.filter((i) => completedIds.has(i.id)).length;
      return { completed, total: phase.items.length };
    },
    [completedIds]
  );

  const dismissCelebration = useCallback(() => {
    setState((prev) => ({ ...prev, celebrationDismissed: true }));
    setJustCompleted(false);
  }, []);

  const resetProgress = useCallback(() => {
    const fresh = emptyState();
    setState(fresh);
    setJustCompleted(false);
    try {
      trackEvent('founder_curriculum_reset', {});
    } catch {
      // ignore
    }
  }, []);

  return {
    completedIds,
    startedAt: state.startedAt,
    completedAt: state.completedAt,
    celebrationDismissed: !!state.celebrationDismissed,
    isComplete,
    justCompleted,
    percent,
    completedCount,
    totalCount: totalItems,
    isChecked,
    toggle,
    phaseProgress,
    dismissCelebration,
    resetProgress,
  };
}
