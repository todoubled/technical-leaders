import { useEffect, useState } from "react";
import { Calendar, Play } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import VideoModal from "@/components/VideoModal";
import OfficeHoursAccessGate from "@/components/OfficeHoursAccessGate";
import { trackEvent } from "@/utils/posthog";
import {
  getOfficeHoursSessionsNewestFirst,
  youtubeWatchUrl,
  type OfficeHoursVideo,
} from "@/data/office-hours/sessions";

// The full library, shown once the gate is unlocked. Both halves of every
// session are playable here via the shared VideoModal.
const LibraryGrid = () => {
  const sessions = getOfficeHoursSessionsNewestFirst();
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    trackEvent("Office Hours Library Viewed");
  }, []);

  const openVideo = (
    video: OfficeHoursVideo,
    sessionId: string,
    half: "free" | "gated",
  ) => {
    trackEvent("Office Hours Library Video Played", {
      session_id: sessionId,
      half,
    });
    setActiveVideoUrl(youtubeWatchUrl(video));
  };

  return (
    <>
      <div className="grid gap-8 md:grid-cols-2">
        {sessions.map((session) => (
          <Card key={session.id} className="p-6 flex flex-col">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <Calendar className="h-4 w-4" />
              {new Date(session.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "UTC",
              })}
            </div>
            <h3 className="text-xl font-bold mb-2">{session.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 flex-1">
              {session.description}
            </p>
            {session.topics && session.topics.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {session.topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            )}
            <div className="flex flex-wrap gap-3 mt-auto">
              <Button
                variant="outline"
                onClick={() => openVideo(session.freeHalf, session.id, "free")}
              >
                <Play className="mr-2 h-4 w-4" />
                First half
                {session.freeHalf.duration ? ` · ${session.freeHalf.duration}` : ""}
              </Button>
              <Button
                onClick={() => openVideo(session.gatedHalf, session.id, "gated")}
              >
                <Play className="mr-2 h-4 w-4" />
                Second half
                {session.gatedHalf.duration ? ` · ${session.gatedHalf.duration}` : ""}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <VideoModal
        isOpen={activeVideoUrl !== null}
        onClose={() => setActiveVideoUrl(null)}
        videoUrl={activeVideoUrl ?? ""}
      />
    </>
  );
};

const OfficeHoursLibrary = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Office Hours Library | Technical Leaders"
        description="Every AI office-hours recording — past and future — in one place. Sign up free to watch the full library."
        keywords={["AI office hours", "office hours library", "AI Q&A", "Technical Leaders"]}
      />
      <Navigation />

      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            The Office Hours Library
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every session, both halves — the full archive of what Builders are
            shipping with AI.
          </p>
        </div>
      </section>

      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <OfficeHoursAccessGate source="library">
            <LibraryGrid />
          </OfficeHoursAccessGate>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OfficeHoursLibrary;
