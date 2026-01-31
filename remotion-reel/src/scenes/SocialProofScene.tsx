import { useCurrentFrame, useVideoConfig, interpolate, Easing, Img, staticFile } from "remotion";
import { BEAT_INTERVAL } from "../MarketingReel";

export const SocialProofScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const easeOut = Easing.out(Easing.cubic);

  // Card entrance animation
  const cardOpacity = interpolate(frame, [0, BEAT_INTERVAL], [0, 1], {
    extrapolateRight: "clamp",
    easing: easeOut,
  });
  const cardScale = interpolate(frame, [0, BEAT_INTERVAL], [0.95, 1], {
    extrapolateRight: "clamp",
    easing: easeOut,
  });

  // Quote reveal
  const quoteOpacity = interpolate(frame, [BEAT_INTERVAL * 0.8, BEAT_INTERVAL * 1.5], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: easeOut,
  });

  // Stats animation
  const statsOpacity = interpolate(frame, [BEAT_INTERVAL * 2, BEAT_INTERVAL * 2.8], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const statsY = interpolate(frame, [BEAT_INTERVAL * 2, BEAT_INTERVAL * 2.8], [20, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: easeOut,
  });

  // Number counter animation
  const counterValue = Math.round(
    interpolate(frame, [BEAT_INTERVAL * 2, BEAT_INTERVAL * 3.5], [0, 90], {
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    })
  );

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px 50px",
        background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 60%)",
          bottom: "-20%",
          left: "-20%",
        }}
      />

      {/* Testimonial card */}
      <div
        style={{
          opacity: cardOpacity,
          transform: `scale(${cardScale})`,
          background: "#ffffff",
          borderRadius: 28,
          padding: "48px 44px",
          boxShadow: "0 8px 40px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.02)",
          border: "1px solid rgba(0, 0, 0, 0.04)",
          maxWidth: 900,
          width: "100%",
        }}
      >
        {/* Quote mark */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: "rgba(59, 130, 246, 0.15)",
            lineHeight: 0.5,
            marginBottom: 16,
            fontFamily: "Georgia, serif",
          }}
        >
          "
        </div>

        {/* Quote text */}
        <div
          style={{
            opacity: quoteOpacity,
            fontSize: 32,
            fontWeight: 400,
            color: "#334155",
            lineHeight: 1.5,
            marginBottom: 36,
            fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
          }}
        >
          My time on marketing dropped by{" "}
          <span
            style={{
              fontWeight: 700,
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {counterValue}%
          </span>
        </div>

        {/* Author */}
        <div
          style={{
            opacity: statsOpacity,
            transform: `translateY(${statsY}px)`,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 4,
              height: 40,
              background: "linear-gradient(180deg, #3b82f6 0%, #8b5cf6 100%)",
              borderRadius: 2,
            }}
          />
          <div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: "#1e293b",
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
            >
              Nick
            </div>
            <div
              style={{
                fontSize: 18,
                fontWeight: 400,
                color: "#64748b",
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
            >
              Fractional CTO
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
