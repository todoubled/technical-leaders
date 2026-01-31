import { Composition } from "remotion";
import { MarketingReel } from "./MarketingReel";
import { HeroHeadline } from "./HeroHeadline";
import { WhatsAppDemo } from "./WhatsAppDemo";

export const RemotionRoot = () => {
  // T messages: 50 frames, Sarah messages: 63 frames
  // 17 T messages × 50 + 11 Sarah messages × 63 = 850 + 693 = 1543
  const whatsAppDuration = 1600;

  return (
    <>
      {/* Instagram Reels: 1080x1920 (9:16 aspect ratio), 30fps */}
      <Composition
        id="MarketingReel"
        component={MarketingReel}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
      />
      {/* Hero headline cycling animation — 16 roles × 1.25s each = 20s */}
      <Composition
        id="HeroHeadline"
        component={HeroHeadline}
        durationInFrames={600}
        fps={30}
        width={2400}
        height={700}
      />
      {/* WhatsApp day-in-the-life demo — CEO conversation with T */}
      <Composition
        id="WhatsAppDemo"
        component={WhatsAppDemo}
        durationInFrames={whatsAppDuration}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
