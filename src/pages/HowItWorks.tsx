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

      {/* Value Stacking Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Here's What You Get with Launch Kit
          </h2>

          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Proven Client Acquisition System</h3>
                <p className="text-muted-foreground">Get your first paying client in 30 days using our battle-tested outreach templates and conversion strategies</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Done-For-You Templates & Scripts</h3>
                <p className="text-muted-foreground">Skip months of trial and error with our proven case study templates, outreach scripts, and proposal frameworks</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Weekly Group Coaching Calls</h3>
                <p className="text-muted-foreground">Get direct access to successful founders who've built 6-figure consulting businesses</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Private Community of 300+ Technical Leaders</h3>
                <p className="text-muted-foreground">Network with CTOs, VPs, and technical founders who are building consulting practices alongside you</p>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="bg-primary/10 rounded-lg p-6 mb-12 text-center">
            <p className="text-lg font-semibold">
              🔥 12 technical leaders joined this week
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Next cohort starts Monday (Limited spots available)
            </p>
          </div>

          {/* Multiple CTA Options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-8 py-6"
              onClick={() => {
                trackEvent('Get Launch Kit Now - How It Works CTA', {
                  location: 'value_section'
                });
                window.location.href = "/launch-with-us";
              }}
            >
              Get Launch Kit Now
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
              onClick={() => {
                trackEvent('Book a Call - How It Works CTA', {
                  location: 'value_section'
                });
                window.location.href = "/calls";
              }}
            >
              Book a Strategy Call First
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Not ready yet? <a href="/10-before-10" className="text-primary underline" onClick={() => trackEvent('10 Before 10 Link - How It Works', { location: 'value_section' })}>Get our free 10 Before 10 playbook</a>
          </p>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Launch Your Consulting Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join 300+ technical leaders who've successfully transitioned to consulting
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-12 py-6"
            onClick={() => {
              trackEvent('Final CTA - How It Works', {
                location: 'bottom_section'
              });
              window.location.href = "/launch-with-us";
            }}
          >
            Start Your Journey Today
          </Button>

          <div className="mt-8 flex justify-center gap-8 text-sm text-muted-foreground">
            <div>✓ 30-day money-back guarantee</div>
            <div>✓ Proven system</div>
            <div>✓ 300+ success stories</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;