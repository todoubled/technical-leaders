import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from "remotion";

const ROLES = [
  "General Manager",
  "Chief of Staff",
  "Marketer",
  "Product Manager",
  "Software Engineer",
  "Sales Rep",
  "Researcher",
  "Niche Consultant",
  "Copywriter",
  "Data Analyst",
  "Ops Manager",
  "Strategist",
  "Recruiter",
  "Customer Success Lead",
  "Content Creator",
  "Finance Lead",
];

// How long each role is displayed (in seconds)
const ROLE_DISPLAY_SECONDS = 1.0;
// Transition duration (in seconds)
const TRANSITION_SECONDS = 0.25;

export const HeroHeadline = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const roleDisplayFrames = Math.round(ROLE_DISPLAY_SECONDS * fps);
  const transitionFrames = Math.round(TRANSITION_SECONDS * fps);
  const cycleDuration = roleDisplayFrames + transitionFrames;

  // Determine which role is active
  const cycleIndex = Math.floor(frame / cycleDuration);
  const roleIndex = cycleIndex % ROLES.length;
  const nextRoleIndex = (roleIndex + 1) % ROLES.length;
  const frameInCycle = frame % cycleDuration;

  // Phase: display (0 to roleDisplayFrames) then transition (roleDisplayFrames to cycleDuration)
  const isTransitioning = frameInCycle >= roleDisplayFrames;
  const transitionFrame = isTransitioning
    ? frameInCycle - roleDisplayFrames
    : 0;

  const transitionProgress = isTransitioning
    ? interpolate(transitionFrame, [0, transitionFrames], [0, 1], {
        extrapolateRight: "clamp",
        easing: Easing.inOut(Easing.cubic),
      })
    : 0;

  // Current role: slide up and fade out during transition
  const currentY = interpolate(transitionProgress, [0, 1], [0, -120]);
  const currentOpacity = interpolate(transitionProgress, [0, 0.6], [1, 0], {
    extrapolateRight: "clamp",
  });

  // Next role: slide up from below and fade in during transition
  const nextY = interpolate(transitionProgress, [0, 1], [120, 0]);
  const nextOpacity = interpolate(transitionProgress, [0.3, 1], [0, 1], {
    extrapolateLeft: "clamp",
  });

  // Entrance animation for the static text
  const entranceSpring = spring({
    frame,
    fps,
    config: { damping: 200 },
  });
  const staticOpacity = entranceSpring;
  const staticY = interpolate(entranceSpring, [0, 1], [100, 0]);

  // Emerald underline width animation on role change
  const underlineSpring = spring({
    frame: isTransitioning ? transitionFrame : roleDisplayFrames,
    fps,
    config: { damping: 15, stiffness: 200 },
  });

  const currentRole = ROLES[roleIndex];
  const nextRole = ROLES[nextRoleIndex];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0a0a0f",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
      }}
    >
      {/* Subtle background glow */}
      <div
        style={{
          position: "absolute",
          width: 1200,
          height: 1200,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
          opacity: staticOpacity,
          transform: `translateY(${staticY}px)`,
        }}
      >
        {/* "Meet T." */}
        <div
          style={{
            fontSize: 180,
            fontWeight: 700,
            color: "#f3f4f6",
            fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
            letterSpacing: "-0.03em",
            lineHeight: 1.2,
            textAlign: "center",
          }}
        >
          Meet T.
        </div>

        {/* "Your [role]" line */}
        <div
          style={{
            position: "relative",
            height: 195,
            clipPath: "inset(0 0)",
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Current role */}
          <div
            style={{
              position: "absolute",
              display: "flex",
              alignItems: "baseline",
              justifyContent: "center",
              gap: 50,
              transform: `translateY(${currentY}px)`,
              opacity: currentOpacity,
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                fontSize: 155,
                fontWeight: 700,
                color: "#f3f4f6",
                fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
                letterSpacing: "-0.03em",
              }}
            >
              Your
            </span>
            <span
              style={{
                fontSize: 155,
                fontWeight: 700,
                color: "#f97316",
                fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
                letterSpacing: "-0.03em",
              }}
            >
              {currentRole}
            </span>
          </div>

          {/* Next role (only visible during transition) */}
          {isTransitioning && (
            <div
              style={{
                position: "absolute",
                display: "flex",
                alignItems: "baseline",
                justifyContent: "center",
                gap: 50,
                transform: `translateY(${nextY}px)`,
                opacity: nextOpacity,
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  fontSize: 155,
                  fontWeight: 700,
                  color: "#f3f4f6",
                  fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
                  letterSpacing: "-0.03em",
                }}
              >
                Your
              </span>
              <span
                style={{
                  fontSize: 155,
                  fontWeight: 700,
                  color: "#f97316",
                  fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
                  letterSpacing: "-0.03em",
                }}
              >
                {nextRole}
              </span>
            </div>
          )}
        </div>

        {/* Emerald underline */}
        <div
          style={{
            width: 500,
            height: 6,
            background:
              "linear-gradient(90deg, transparent, #f97316, transparent)",
            opacity: 0.6,
            marginTop: 20,
            transform: `scaleX(${underlineSpring})`,
          }}
        />

        {/* "on WhatsApp." */}
        <div
          style={{
            fontSize: 180,
            fontWeight: 700,
            color: "#f3f4f6",
            fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
            letterSpacing: "-0.03em",
            lineHeight: 1.2,
            textAlign: "center",
            marginTop: 40,
          }}
        >
          on WhatsApp.
        </div>
      </div>
    </AbsoluteFill>
  );
};
