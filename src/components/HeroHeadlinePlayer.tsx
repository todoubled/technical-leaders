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
  "Thought Partner",
  "Researcher",
  "Coach & Mentor",
  "Safe Sandbox",
  "Private Assistant",
  "Team Mate",
];

const ROLE_DISPLAY_SECONDS = 1.0;
const TRANSITION_SECONDS = 0.25;
const FPS = 30;

const ROLE_DISPLAY_FRAMES = Math.round(ROLE_DISPLAY_SECONDS * FPS);
const TRANSITION_FRAMES = Math.round(TRANSITION_SECONDS * FPS);
const CYCLE_DURATION = ROLE_DISPLAY_FRAMES + TRANSITION_FRAMES;
// Total duration = one full pass through all roles, ending with the last role
// fully displayed (no dangling transition). The last transition (back to first)
// happens seamlessly as the Player loops frame 0.
const DURATION_FRAMES = ROLES.length * CYCLE_DURATION;

const HeroHeadlineComp = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const frameInLoop = frame % DURATION_FRAMES;
  const cycleIndex = Math.floor(frameInLoop / CYCLE_DURATION);
  const roleIndex = cycleIndex % ROLES.length;
  const nextRoleIndex = (roleIndex + 1) % ROLES.length;
  const frameInCycle = frameInLoop % CYCLE_DURATION;

  const isTransitioning = frameInCycle >= ROLE_DISPLAY_FRAMES;
  const transitionFrame = isTransitioning ? frameInCycle - ROLE_DISPLAY_FRAMES : 0;

  const transitionProgress = isTransitioning
    ? interpolate(transitionFrame, [0, TRANSITION_FRAMES], [0, 1], {
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

  const underlineSpring = spring({
    frame: isTransitioning ? transitionFrame : ROLE_DISPLAY_FRAMES,
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
        }}
      >
        <div
          style={{
            fontSize: 180,
            fontWeight: 700,
            color: "#111827",
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
            display: "flex",
            alignItems: "baseline",
            justifyContent: "center",
            gap: 40,
          }}
        >
          <span
            style={{
              fontSize: 155,
              fontWeight: 700,
              color: "#111827",
              fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
              letterSpacing: "-0.03em",
              flexShrink: 0,
            }}
          >
            Your AI
          </span>
          <div
            style={{
              position: "relative",
              clipPath: "inset(0 0)",
              width: 1400,
              flexShrink: 0,
            }}
          >
            {/* Invisible span to establish baseline and natural height */}
            <span
              style={{
                fontSize: 155,
                fontWeight: 700,
                fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
                letterSpacing: "-0.03em",
                visibility: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              {currentRole}
            </span>
            <span
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                fontSize: 155,
                fontWeight: 700,
                color: "#f97316",
                fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
                letterSpacing: "-0.03em",
                whiteSpace: "nowrap",
                transform: `translateY(${currentY}px)`,
                opacity: currentOpacity,
              }}
            >
              {currentRole}
            </span>
            {isTransitioning && (
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  fontSize: 155,
                  fontWeight: 700,
                  color: "#f97316",
                  fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
                  letterSpacing: "-0.03em",
                  whiteSpace: "nowrap",
                  transform: `translateY(${nextY}px)`,
                  opacity: nextOpacity,
                }}
              >
                {nextRole}
              </span>
            )}
          </div>
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
            fontSize: 85,
            fontWeight: 700,
            color: "#6b7280",
            fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
            letterSpacing: "-0.03em",
            lineHeight: 1.3,
            textAlign: "center",
            marginTop: 40,
            maxWidth: 1800,
          }}
        >
          Private, easy-to-use AI that works for you.
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
      compositionHeight={1100}
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
