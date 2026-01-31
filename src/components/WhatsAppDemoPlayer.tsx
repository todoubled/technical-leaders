import { Player } from "@remotion/player";
import { WhatsAppDemo } from "../../remotion-reel/src/WhatsAppDemo";

export const WhatsAppDemoPlayer = () => {
  return (
    <Player
      component={WhatsAppDemo}
      compositionWidth={1080}
      compositionHeight={1920}
      durationInFrames={1600}
      fps={30}
      loop
      autoPlay
      controls={false}
      style={{
        width: "100%",
        maxWidth: 400,
        maxHeight: 500,
        borderRadius: 24,
        overflow: "hidden",
      }}
    />
  );
};
