import { useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import { BEAT_INTERVAL } from "../MarketingReel";

export const HookScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Smooth easing for elegant feel
  const easeOut = Easing.out(Easing.cubic);

  // Text animations synced to beat (every ~21 frames)
  const line1Opacity = interpolate(frame, [0, BEAT_INTERVAL], [0, 1], {
    extrapolateRight: "clamp",
    easing: easeOut,
  });
  const line1Y = interpolate(frame, [0, BEAT_INTERVAL], [30, 0], {
    extrapolateRight: "clamp",
    easing: easeOut,
  });

  const line2Opacity = interpolate(frame, [BEAT_INTERVAL, BEAT_INTERVAL * 2], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: easeOut,
  });
  const line2Y = interpolate(frame, [BEAT_INTERVAL, BEAT_INTERVAL * 2], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: easeOut,
  });

  // Subtle scale pulse on beat
  const pulseScale = interpolate(
    frame % BEAT_INTERVAL,
    [0, BEAT_INTERVAL / 2, BEAT_INTERVAL],
    [1, 1.02, 1],
    { extrapolateRight: "clamp" }
  );

  // Subtle gradient animation
  const gradientPos = interpolate(frame, [0, 90], [0, 100], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px 60px",
        background: `linear-gradient(135deg,
          #ffffff 0%,
          #f8f9fa ${50 + gradientPos * 0.2}%,
          #f0f4f8 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle accent circle */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)",
          top: "-15%",
          right: "-20%",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.05) 0%, transparent 70%)",
          bottom: "10%",
          left: "-10%",
        }}
      />

      {/* Main text container */}
      <div
        style={{
          transform: `scale(${pulseScale})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
        }}
      >
        {/* Line 1 */}
        <div
          style={{
            opacity: line1Opacity,
            transform: `translateY(${line1Y}px)`,
            fontSize: 48,
            fontWeight: 300,
            color: "#64748b",
            textAlign: "center",
            lineHeight: 1.3,
            fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          Tired of marketing yourself?
        </div>

        {/* Line 2 - Gradient accent */}
        <div
          style={{
            opacity: line2Opacity,
            transform: `translateY(${line2Y}px)`,
            fontSize: 64,
            fontWeight: 700,
            background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
            lineHeight: 1.2,
            fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
            letterSpacing: "-0.03em",
          }}
        >
          We've got you.
        </div>
      </div>

      {/* Minimal decorative line */}
      <div
        style={{
          position: "absolute",
          bottom: 200,
          width: interpolate(frame, [BEAT_INTERVAL * 2, 90], [0, 200], {
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
          }),
          height: 2,
          background: "linear-gradient(90deg, transparent, #3b82f6, transparent)",
          opacity: 0.4,
        }}
      />
    </div>
  );
};
