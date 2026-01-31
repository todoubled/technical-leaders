import { useCurrentFrame, useVideoConfig, interpolate, Easing, Img, staticFile } from "remotion";
import { BEAT_INTERVAL } from "../MarketingReel";

export const SolutionScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const easeOut = Easing.out(Easing.cubic);

  // Headline animation
  const headlineOpacity = interpolate(frame, [0, BEAT_INTERVAL], [0, 1], {
    extrapolateRight: "clamp",
    easing: easeOut,
  });
  const headlineScale = interpolate(frame, [0, BEAT_INTERVAL], [0.95, 1], {
    extrapolateRight: "clamp",
    easing: easeOut,
  });

  // Subheadline animation
  const subOpacity = interpolate(frame, [BEAT_INTERVAL, BEAT_INTERVAL * 2], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: easeOut,
  });

  // Logo reveal
  const logoOpacity = interpolate(frame, [BEAT_INTERVAL * 2.5, BEAT_INTERVAL * 3.5], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const logoY = interpolate(frame, [BEAT_INTERVAL * 2.5, BEAT_INTERVAL * 3.5], [20, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: easeOut,
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
        background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle gradient orbs */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Main headline */}
      <div
        style={{
          opacity: headlineOpacity,
          transform: `scale(${headlineScale})`,
          textAlign: "center",
          marginBottom: 32,
        }}
      >
        <div
          style={{
            fontSize: 42,
            fontWeight: 300,
            color: "#1e293b",
            marginBottom: 12,
            fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
            letterSpacing: "-0.01em",
          }}
        >
          Look Like a
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #a855f7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          Marketing Genius
        </div>
      </div>

      {/* Subheadline */}
      <div
        style={{
          opacity: subOpacity,
          fontSize: 36,
          fontWeight: 400,
          color: "#64748b",
          textAlign: "center",
          fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
          marginBottom: 60,
        }}
      >
        Without the effort
      </div>

      {/* Logo */}
      <div
        style={{
          opacity: logoOpacity,
          transform: `translateY(${logoY}px)`,
          position: "absolute",
          bottom: 120,
        }}
      >
        <Img
          src={staticFile("transparent-bg-logo.png")}
          style={{
            width: 200,
            height: "auto",
            filter: "brightness(0.9)",
          }}
        />
      </div>
    </div>
  );
};
