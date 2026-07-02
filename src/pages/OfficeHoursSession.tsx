import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight, Calendar, PlayCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import OfficeHoursAccessGate from "@/components/OfficeHoursAccessGate";
import { trackEvent } from "@/utils/posthog";
import { getOfficeHoursSession } from "@/data/office-hours/sessions";

// Inline YouTube embed for the ungated first half — plays instantly from a cold
// sales-email click (no modal, no gate, no localStorage read before it renders).
const InlineVideo = ({ youtubeId, title }: { youtubeId: string; title: string }) => (
  <div className="w-full max-w-4xl mx-auto">
    <div className="relative pb-[56.25%] h-0">
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  </div>
);

// The session slug is the last path segment. Deriving it from the location
// (rather than a route param) lets each session register as its OWN static
// `page()` route in routes.tsx, so it prerenders with per-session OG tags and
// unfurls correctly when a sales rep pastes the URL.
const OfficeHoursSession = () => {
  const { pathname } = useLocation();
  const sessionId = pathname.replace(/\/+$/, "").split("/").pop();
  const session = getOfficeHoursSession(sessionId);

  useEffect(() => {
    if (session) {
      trackEvent("Office Hours Free Half Viewed", { session_id: session.id });
    }
  }, [session]);

  if (!session) {
    return (
      <div className="min-h-screen bg-background">
        <SEO title="Office Hours | Technical Leaders" />
        <Navigation />
        <section className="pt-32 pb-20 px-4 text-center max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Session not found</h1>
          <p className="text-muted-foreground mb-8">
            This office-hours session isn&apos;t available. Browse the full
            library instead.
          </p>
          <Button onClick={() => (window.location.href = "/office-hours/library")}>
            Go to the library
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </section>
        <Footer />
      </div>
    );
  }

  const formattedDate = new Date(session.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${session.title} | AI Office Hours`}
        description={session.description}
        keywords={["AI office hours", "Technical Leaders", ...(session.topics ?? [])]}
        type="article"
        publishedTime={session.date}
      />

      <Navigation />

      {/* Hero + free half — no gate in front of any of this. */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-16">
        <div className="absolute inset-0 z-0">
          <img
            src="/ai-in-ar.png"
            alt="AI background"
            className="w-full h-full object-cover object-top opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calendar className="h-4 w-4" />
            AI Office Hours &middot; {formattedDate}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {session.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            {session.description}
          </p>

          <InlineVideo
            youtubeId={session.freeHalf.youtubeId}
            title={`${session.title} — free half`}
          />

          {/* Above-the-fold CTA to unlock the rest + the library. */}
          <div className="mt-8">
            <Button
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => {
                trackEvent("Office Hours Unlock CTA Clicked", {
                  session_id: session.id,
                });
                document
                  .getElementById("office-hours-gate")
                  ?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch the second half + full library (free)
            </Button>
          </div>
        </div>
      </section>

      {/* Gated second half + path to the library. */}
      <section id="office-hours-gate" className="bg-background pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <OfficeHoursAccessGate source={session.id}>
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                The second half
              </h2>
              <InlineVideo
                youtubeId={session.gatedHalf.youtubeId}
                title={`${session.title} — second half`}
              />
              <div className="mt-10">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6"
                  onClick={() => {
                    trackEvent("Office Hours Library CTA Clicked", {
                      session_id: session.id,
                      location: "session_page",
                    });
                    window.location.href = "/office-hours/library";
                  }}
                >
                  Browse the full office-hours library
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </OfficeHoursAccessGate>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OfficeHoursSession;
