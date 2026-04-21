import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Video, Download, FileText, ChevronRight } from "lucide-react";
import SEO from "@/components/SEO";
import { trackEvent } from "@/utils/posthog";

const ClaudeWorkshopReplay = () => {
  // TODO: Replace with the real YouTube video ID once the recording is uploaded.
  const youtubeVideoId = "YOUR_VIDEO_ID";
  // TODO: Drop the real assets into /public with these filenames (or update the paths).
  const slidesPdfUrl = "/claude-workshop-slides.pdf";
  const templatesUrl = "/claude-workshop-templates.pdf";

  const heroContent = {
    badge: "Workshop Recording",
    headline: "The Claude Agent Workshop™",
    subheadline: "Build custom Claude AI agent workflows without writing a single line of code.",
    description: "Watch the Complete Workshop + Download Slides and Templates"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="The Claude Agent Workshop™ Recording | Technical Leaders"
        description="Watch the complete Claude Agent Workshop recording and download the slides and agent templates. Build custom Claude AI agent workflows without writing code."
        keywords={["Claude workshop replay", "Claude agent workshop", "Claude AI", "AI agent templates", "Claude workflow", "no-code AI", "Claude Code recording"]}
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
                title="The Claude Agent Workshop Recording"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => {
                trackEvent('Download Slides Clicked', {
                  location: 'claude_workshop_replay_hero'
                });
                window.open(slidesPdfUrl, '_blank');
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download PDF Slides
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6"
              onClick={() => {
                trackEvent('Download Templates Clicked', {
                  location: 'claude_workshop_replay_hero'
                });
                window.open(templatesUrl, '_blank');
              }}
            >
              <FileText className="mr-2 h-5 w-5" />
              Download Agent Templates
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-background mb-16 leading-tight">
            You Came for the Workshop,<br />
            But You're Staying for What's Next
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="/ai-program-product-shot.jpg"
                alt="AI Agent Workflows Program"
                className="w-full max-w-md rounded-2xl shadow-xl"
              />
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground font-medium">
                You built your first Claude agent. Now build the system.
              </p>

              <p className="text-lg text-muted-foreground">
                If the workshop made you go, <em>"I need more of this"</em>, you're not alone.
              </p>

              <p className="text-lg text-muted-foreground">
                We've opened the doors to the AI Agent Workflows Program, and we've stashed a few seats for the quick movers (you know who you are).
              </p>

              <p className="text-lg text-muted-foreground">
                No hype, no figuring it out on your own. Just smarter AI strategies that actually work. If you're ready to ship real Claude agents and ditch the AI chaos, this is your shot.
              </p>

              <p className="text-lg text-muted-foreground">
                Click below to check it out, and maybe (if we're a good fit) we'll be working together soon. Let's do this.
              </p>

              <div className="pt-4">
                <Button
                  size="lg"
                  className="bg-sky-500 hover:bg-sky-600 text-white text-lg px-8 py-6"
                  onClick={() => {
                    trackEvent('AI Program CTA Clicked', {
                      location: 'claude_workshop_replay_bottom'
                    });
                    window.location.href = "/ai-program";
                  }}
                >
                  Get the Details on the AI Program
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClaudeWorkshopReplay;
