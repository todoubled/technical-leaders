import { staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { Audio } from "@remotion/media";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";

import { HookScene } from "./scenes/HookScene";
import { SolutionScene } from "./scenes/SolutionScene";
import { PillarsScene } from "./scenes/PillarsScene";
import { SocialProofScene } from "./scenes/SocialProofScene";
import { CTAScene } from "./scenes/CTAScene";

// Set to true once you add lofi-beat.mp3 to the public folder
const ENABLE_AUDIO = false;

// Beat markers in frames (30fps) - sync animations to these
// Lo-fi typically 85-95 BPM, ~21 frames per beat
export const BEAT_INTERVAL = 21;
export const BEATS = [0, 21, 42, 63, 84, 105, 126, 147, 168, 189, 210, 231, 252, 273, 294, 315, 336, 357, 378, 399, 420, 441];

export const MarketingReel = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#fafafa",
        position: "relative",
      }}
    >
      {/* Lo-fi hip hop background music */}
      {ENABLE_AUDIO && (
        <Audio
          src={staticFile("lofi-beat.mp3")}
          volume={0.35}
        />
      )}

      <TransitionSeries>
        {/* Scene 1: Hook (0-3s / 90 frames) */}
        <TransitionSeries.Sequence durationInFrames={90}>
          <HookScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 12 })}
        />

        {/* Scene 2: Solution headline (3-6s / 90 frames) */}
        <TransitionSeries.Sequence durationInFrames={90}>
          <SolutionScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: 12 })}
        />

        {/* Scene 3: Three pillars (6-9s / 90 frames) */}
        <TransitionSeries.Sequence durationInFrames={90}>
          <PillarsScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 12 })}
        />

        {/* Scene 4: Social proof (9-12s / 90 frames) */}
        <TransitionSeries.Sequence durationInFrames={90}>
          <SocialProofScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={linearTiming({ durationInFrames: 12 })}
        />

        {/* Scene 5: CTA (12-15s / 90 frames) */}
        <TransitionSeries.Sequence durationInFrames={90}>
          <CTAScene />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </div>
  );
};
