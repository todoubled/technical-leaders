import { useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import { BEAT_INTERVAL } from "../MarketingReel";

export const PillarsScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const easeOut = Easing.out(Easing.cubic);

  const pillars = [
    { title: "Audience Building", icon: "01" },
    { title: "Content Creation", icon: "02" },
    { title: "Personal Brand", icon: "03" },
  ];

  const titleOpacity = interpolate(frame, [0, BEAT_INTERVAL * 0.8], [0, 1], {
    extrapolateRight: "clamp",
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
        padding: "80px 50px",
        background: "linear-gradient(135deg, #fafbfc 0%, #f1f5f9 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.04) 0%, transparent 60%)",
          top: "-20%",
          right: "-30%",
        }}
      />

      {/* Title */}
      <div
        style={{
          opacity: titleOpacity,
          fontSize: 38,
          fontWeight: 600,
          color: "#1e293b",
          textAlign: "center",
          marginBottom: 60,
          fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
          letterSpacing: "-0.02em",
        }}
      >
        Done-for-you marketing
      </div>

      {/* Pillars */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          width: "100%",
          maxWidth: 900,
        }}
      >
        {pillars.map((pillar, index) => {
          const startFrame = (index + 0.8) * BEAT_INTERVAL;
          const opacity = interpolate(
            frame,
            [startFrame, startFrame + BEAT_INTERVAL * 0.6],
            [0, 1],
            { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: easeOut }
          );
          const x = interpolate(
            frame,
            [startFrame, startFrame + BEAT_INTERVAL * 0.6],
            [-40, 0],
            { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: easeOut }
          );

          const gradients = [
            "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
            "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
            "linear-gradient(135deg, #a855f7 0%, #9333ea 100%)",
          ];

          return (
            <div
              key={index}
              style={{
                opacity,
                transform: `translateX(${x}px)`,
                display: "flex",
                alignItems: "center",
                gap: 24,
                background: "#ffffff",
                borderRadius: 20,
                padding: "28px 36px",
                boxShadow: "0 4px 24px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
                border: "1px solid rgba(0, 0, 0, 0.04)",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: gradients[index],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  color: "#fff",
                  fontWeight: 700,
                  fontFamily: "'Inter', system-ui, sans-serif",
                }}
              >
                {pillar.icon}
              </div>
              <span
                style={{
                  fontSize: 32,
                  fontWeight: 500,
                  color: "#1e293b",
                  fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
                  letterSpacing: "-0.01em",
                }}
              >
                {pillar.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
