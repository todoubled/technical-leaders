import { Player } from "@remotion/player";
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

const ROLE_DISPLAY_SECONDS = 1.0;
const TRANSITION_SECONDS = 0.25;
const FPS = 30;
const DURATION_FRAMES = ROLES.length * Math.round((ROLE_DISPLAY_SECONDS + TRANSITION_SECONDS) * FPS);

const HeroHeadlineComp = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const roleDisplayFrames = Math.round(ROLE_DISPLAY_SECONDS * fps);
  const transitionFrames = Math.round(TRANSITION_SECONDS * fps);
  const cycleDuration = roleDisplayFrames + transitionFrames;

  const cycleIndex = Math.floor(frame / cycleDuration);
  const roleIndex = cycleIndex % ROLES.length;
  const nextRoleIndex = (roleIndex + 1) % ROLES.length;
  const frameInCycle = frame % cycleDuration;

  const isTransitioning = frameInCycle >= roleDisplayFrames;
  const transitionFrame = isTransitioning ? frameInCycle - roleDisplayFrames : 0;

  const transitionProgress = isTransitioning
    ? interpolate(transitionFrame, [0, transitionFrames], [0, 1], {
        extrapolateRight: "clamp",
        easing: Easing.inOut(Easing.cubic),
      })
    : 0;

  const currentY = interpolate(transitionProgress, [0, 1], [0, -120]);
  const currentOpacity = interpolate(transitionProgress, [0, 0.6], [1, 0], {
    extrapolateRight: "clamp",
  });
  const nextY = interpolate(transitionProgress, [0, 1], [120, 0]);
  const nextOpacity = interpolate(transitionProgress, [0.3, 1], [0, 1], {
    extrapolateLeft: "clamp",
  });

  const entranceSpring = spring({ frame, fps, config: { damping: 200 } });
  const staticOpacity = entranceSpring;
  const staticY = interpolate(entranceSpring, [0, 1], [100, 0]);

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
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
      }}
    >
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
              width: "100%",
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
                width: "100%",
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

        <div
          style={{
            width: 500,
            height: 6,
            background: "linear-gradient(90deg, transparent, #f97316, transparent)",
            opacity: 0.6,
            marginTop: 20,
            transform: `scaleX(${underlineSpring})`,
          }}
        />

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

export const HeroHeadlinePlayer = () => {
  return (
    <Player
      component={HeroHeadlineComp}
      compositionWidth={2400}
      compositionHeight={700}
      durationInFrames={DURATION_FRAMES}
      fps={FPS}
      loop
      autoPlay
      controls={false}
      style={{
        width: "100%",
        background: "transparent",
      }}
    />
  );
};
