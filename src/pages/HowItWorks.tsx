import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import SEO from "@/components/SEO";
import { trackEvent } from "@/utils/posthog";

const HowItWorks = () => {
  const youtubeVideoId = "8aVvZ9NwiN8";

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="How It Works | Technical Leaders"
        description="Discover how Technical Leaders helps founders and executives launch and scale their businesses with proven strategies and systems."
        keywords={["how it works", "technical leaders process", "founder resources", "business scaling"]}
      />

      <Navigation />

      {/* Hero Section with Video */}
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
            <Play className="h-4 w-4" />
            Watch How It Works
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              How It Works
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            See exactly how we help technical founders launch and scale their businesses with proven systems and strategies
          </p>

          {/* YouTube Video Embed */}
          <div className="w-full max-w-5xl mx-auto mb-12">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                title="How Technical Leaders Works"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-12 py-6"
            onClick={() => {
              trackEvent('Get Started - How It Works CTA', {
                location: 'hero_section'
              });
              window.location.href = "/launch-with-us";
            }}
          >
            Get Started with Launch Kit
          </Button>

          <p className="text-sm text-muted-foreground mt-4 font-semibold">
            Join 300+ founders already scaling their businesses
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;