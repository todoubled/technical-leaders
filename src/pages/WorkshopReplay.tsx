import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Video, Download } from "lucide-react";
import SEO from "@/components/SEO";
import { trackEvent } from "@/utils/posthog";

const WorkshopReplay = () => {
  const youtubeVideoId = "JA_tWS1LJqs";
  const workbookUrl = "https://ai1stplaybook.com/workshop";

  const heroContent = {
    badge: "Free Workshop Recording",
    headline: "AI Agent Skills Workshop",
    subheadline: "Build AI agents that actually work. No code required.",
    description: "Watch the Complete Workshop + Download Bonus Resources"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Agent Skills Workshop Recording | Technical Leaders"
        description="Watch the complete AI Agent Skills workshop recording plus get exclusive bonus resources. Learn to build modular AI agents with lifetime access."
        keywords={["AI agent skills", "Claude Skills", "AI automation workshop", "Claude Code", "AI workflows", "no-code AI", "AI productivity recording"]}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/ai-in-ar.png"
            alt="AI background"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Video className="h-4 w-4" />
            {heroContent.badge}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              {heroContent.headline}
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            {heroContent.subheadline}
          </p>

          <p className="text-2xl font-semibold mb-12 max-w-2xl mx-auto">
            {heroContent.description}
          </p>

          {/* YouTube Video Embed */}
          <div className="w-full max-w-5xl mx-auto">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                title="AI Agent Skills Workshop Recording"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Get the Workbook Button */}
          <div className="mt-8">
            <Button
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => {
                trackEvent('Get the Workbook Clicked', {
                  location: 'hero_section'
                });
                window.open(workbookUrl, '_blank');
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Get the Workbook
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkshopReplay;
