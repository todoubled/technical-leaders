import { useCurrentFrame, useVideoConfig, interpolate, Easing, Img, staticFile } from "remotion";
import { BEAT_INTERVAL } from "../MarketingReel";

export const CTAScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const easeOut = Easing.out(Easing.cubic);

  // Main content animation
  const mainOpacity = interpolate(frame, [0, BEAT_INTERVAL], [0, 1], {
    extrapolateRight: "clamp",
    easing: easeOut,
  });
  const mainScale = interpolate(frame, [0, BEAT_INTERVAL], [0.95, 1], {
    extrapolateRight: "clamp",
    easing: easeOut,
  });

  // Button animation
  const buttonOpacity = interpolate(frame, [BEAT_INTERVAL, BEAT_INTERVAL * 1.8], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const buttonY = interpolate(frame, [BEAT_INTERVAL, BEAT_INTERVAL * 1.8], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: easeOut,
  });

  // Pulsing button effect
  const pulseScale = interpolate(
    frame % (BEAT_INTERVAL * 1.5),
    [0, BEAT_INTERVAL * 0.75, BEAT_INTERVAL * 1.5],
    [1, 1.03, 1],
    { extrapolateRight: "clamp" }
  );

  // Arrow bounce on beat
  const arrowBounce = interpolate(
    frame % BEAT_INTERVAL,
    [0, BEAT_INTERVAL / 2, BEAT_INTERVAL],
    [0, 8, 0],
    { extrapolateRight: "clamp" }
  );

  // Website URL fade in
  const urlOpacity = interpolate(frame, [BEAT_INTERVAL * 2.5, BEAT_INTERVAL * 3.2], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Logo animation
  const logoOpacity = interpolate(frame, [BEAT_INTERVAL * 2, BEAT_INTERVAL * 2.8], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
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
        background: "linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background gradient circles */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.06) 0%, transparent 70%)",
          bottom: "10%",
          right: "-10%",
        }}
      />

      {/* Main CTA content */}
      <div
        style={{
          opacity: mainOpacity,
          transform: `scale(${mainScale})`,
          textAlign: "center",
          marginBottom: 48,
        }}
      >
        <div
          style={{
            fontSize: 36,
            fontWeight: 400,
            color: "#64748b",
            marginBottom: 16,
            fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
          }}
        >
          Ready to grow?
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #a855f7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1.2,
            fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          Book a Free Strategy Call
        </div>
      </div>

      {/* CTA Button */}
      <div
        style={{
          opacity: buttonOpacity,
          transform: `translateY(${buttonY}px) scale(${pulseScale})`,
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
            borderRadius: 20,
            padding: "24px 52px",
            boxShadow: "0 12px 40px rgba(59, 130, 246, 0.25), 0 4px 12px rgba(139, 92, 246, 0.15)",
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <span
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: "#fff",
              fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
            }}
          >
            Link in Bio
          </span>
          <span
            style={{
              fontSize: 28,
              color: "#fff",
              transform: `translateX(${arrowBounce}px)`,
            }}
          >
            →
          </span>
        </div>
      </div>

      {/* Logo and URL */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div
          style={{
            opacity: logoOpacity,
          }}
        >
          <Img
            src={staticFile("transparent-bg-logo.png")}
            style={{
              width: 160,
              height: "auto",
              filter: "brightness(0.85)",
            }}
          />
        </div>
        <div
          style={{
            opacity: urlOpacity,
            fontSize: 22,
            fontWeight: 500,
            color: "#64748b",
            fontFamily: "'Inter', system-ui, sans-serif",
            letterSpacing: "0.05em",
          }}
        >
          technical-leaders.com/marketing
        </div>
      </div>
    </div>
  );
};
