import { useEffect, useRef } from 'react';

/**
 * Lightweight CSS-driven confetti burst.
 * - No external npm dependency.
 * - Respects prefers-reduced-motion (renders nothing when set).
 * - Single fire-and-forget render; component cleans itself up after ~3s.
 */
interface ConfettiProps {
  /** Number of confetti pieces. Defaults to 80. */
  count?: number;
  /** Callback when animation completes (so parent can unmount if desired). */
  onDone?: () => void;
}

const palette = [
  '#34d399', // emerald
  '#fbbf24', // amber
  '#f472b6', // pink
  '#60a5fa', // blue
  '#a78bfa', // violet
  '#f87171', // rose
];

const Confetti = ({ count = 80, onDone }: ConfettiProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotionRef = useRef<boolean>(false);

  useEffect(() => {
    // Honor prefers-reduced-motion
    if (typeof window !== 'undefined' && 'matchMedia' in window) {
      try {
        reducedMotionRef.current = window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches;
      } catch {
        reducedMotionRef.current = false;
      }
    }

    const timeout = setTimeout(() => {
      onDone?.();
    }, 3200);
    return () => clearTimeout(timeout);
  }, [onDone]);

  if (reducedMotionRef.current) {
    return null;
  }

  // Pre-compute deterministic random-ish positions for each piece.
  const pieces = Array.from({ length: count }).map((_, i) => {
    const seed = (i + 1) * 9301 + 49297;
    const rand = (n: number) => ((seed * (n + 1)) % 233280) / 233280;
    const left = rand(1) * 100; // 0..100%
    const delay = rand(2) * 0.6; // 0..0.6s stagger
    const duration = 2 + rand(3) * 1.4; // 2..3.4s
    const rotation = rand(4) * 360;
    const size = 6 + Math.floor(rand(5) * 6); // 6..12 px
    const color = palette[i % palette.length];
    const drift = (rand(6) - 0.5) * 80; // -40..40px horizontal drift
    return { left, delay, duration, rotation, size, color, drift, i };
  });

  return (
    <>
      <style>{`
        @keyframes ftf-confetti-fall {
          0% {
            transform: translate3d(0, -20vh, 0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translate3d(var(--ftf-drift, 0px), 110vh, 0) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
      <div
        ref={containerRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
      >
        {pieces.map((p) => (
          <span
            key={p.i}
            style={{
              position: 'absolute',
              top: 0,
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size * 1.6}px`,
              backgroundColor: p.color,
              borderRadius: '2px',
              transform: `rotate(${p.rotation}deg)`,
              animation: `ftf-confetti-fall ${p.duration}s cubic-bezier(0.15, 0.45, 0.5, 1) ${p.delay}s forwards`,
              ['--ftf-drift' as string]: `${p.drift}px`,
              willChange: 'transform, opacity',
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Confetti;
