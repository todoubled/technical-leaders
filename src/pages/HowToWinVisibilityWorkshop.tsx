import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Star, Users, Sparkles, Brain, Rocket, MessageSquare, Bot, Calendar, Clock, Gift, FileText, Video, Phone, Target, Shield, Zap, TrendingUp, DollarSign, BarChart3, Calculator, Palette, Lightbulb, Heart } from "lucide-react";
import SEO from "@/components/SEO";
import { useState, useEffect } from "react";
import { trackEvent, identify, trackConversion } from "@/utils/posthog";
import { useEmailCapture } from "@/hooks/use-posthog";

const HowToWinVisibilityWorkshop = () => {
  const { captureEmail } = useEmailCapture();

  useEffect(() => {
    // Page view tracking is handled centrally in App.tsx
    // Additional page-specific event tracking can be added here if needed

    // Inject ConvertKit form script
    const formContainer = document.getElementById('visibility-form-container');
    if (formContainer && !formContainer.querySelector('script')) {
      const script = document.createElement('script');
      script.async = true;
      script.setAttribute('data-uid', '95cdfaa1de');
      script.src = 'https://techleaders.kit.com/95cdfaa1de/index.js';
      formContainer.appendChild(script);

      // Listen for ConvertKit form submissions to track in PostHog
      script.onload = () => {
        // Listen for form submission events from ConvertKit
        window.addEventListener('message', (event) => {
          if (event.origin === 'https://techleaders.kit.com' && event.data?.event === 'form_submitted') {
            // Track conversion in PostHog when ConvertKit form is submitted
            trackConversion('Workshop Registration', {
              workshop_name: 'How to Win Visibility & Book More Meetings',
              source: 'convertkit_form',
              location: 'hero_section'
            });

            // Redirect to confirmation page
            setTimeout(() => {
              window.location.href = '/visibility-workshop-confirmed'; // TODO: Create confirmation page
            }, 1000); // Small delay to ensure tracking completes
          }
        });
      };
    }
  }, []);

  const heroContent = {
    headline: "How to Win Visibility & Book More Meetings",
    subheadline: "A practical, hands-on workshop to keep your business top of mind",
    description: "From inconsistent marketing to a simple touchpoint system",
    cta: "Register for FREE"
  };

  const keyBenefits = [
    {
      icon: Target,
      title: "Your 3 Best Visibility Methods",
      description: "Pick the exact channels your ideal clients already use—no more random effort or scattered activity"
    },
    {
      icon: MessageSquare,
      title: "A 7-Touchpoint Plan That Doesn't Feel Spammy",
      description: "Map out repeated exposure that builds trust without overwhelming your prospects"
    },
    {
      icon: Phone,
      title: "One Clear Conversion Path to Meetings",
      description: "Create a simple, repeatable ask that turns visibility into booked conversations"
    },
    {
      icon: Calendar,
      title: "A Weekly Cadence You Can Repeat for 4 Weeks",
      description: "Get a sustainable rhythm that makes consistency easy and measurable"
    }
  ];

  const workshopTopics = [
    {
      icon: Target,
      title: "Pick Your 3 Visibility Methods",
      description: "Stop random effort and focus on what actually works",
      features: [
        "Define your ICP in one sentence: who you help, with what problem, and what outcome",
        "Choose from Public (LinkedIn, podcasts), Direct (DMs, email), or Owned (newsletter, webinars)",
        "Pick the 3 methods your ideal clients actually use weekly—then ignore everything else for 30 days"
      ]
    },
    {
      icon: MessageSquare,
      title: "Map Your 7 Touchpoints",
      description: "Create repeated exposure that builds familiarity without feeling spammy",
      features: [
        "Plan 7 small, helpful touchpoints across your 3 chosen methods",
        "Use at least 2 different methods in your first 3 touchpoints—variety creates memory",
        "Mix content and direct contact to stay helpful and build trust upstream"
      ]
    },
    {
      icon: Phone,
      title: "Design Your One Meeting Path",
      description: "Turn visibility into booked conversations with a simple, repeatable ask",
      features: [
        "Pick one primary way to ask for meetings (DM, email, or newsletter)",
        "Write your \"one ask\" in 2 sentences—make it specific, short, and helpful",
        "Track meetings booked, not likes or engagement—measure what matters"
      ]
    }
  ];

  const bonuses = [
    {
      icon: FileText,
      title: "Bonus #1: 3-7-1 Planning Template",
      description: "A fill-in-the-blank worksheet to map your 3 visibility methods, 7 touchpoints, and 1 meeting ask. Use it during the workshop and keep it as your execution guide."
    },
    {
      icon: Calendar,
      title: "Bonus #2: Weekly Cadence Starter",
      description: "A proven 5-day rhythm you can customize with your chosen methods. Includes leading and outcome metrics to track for 4 weeks, so your visibility becomes consistent and measurable."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="How to Win Visibility & Book More Meetings | Technical Leaders"
        description="A simple, repeatable system to become the first call when urgency hits. 45-minute workshop with the 3-7-1 Framework."
        keywords={["visibility strategy", "book meetings", "B2B sales", "thought leadership", "marketing funnel", "client acquisition"]}
        image="https://technical-leaders.com/ai-in-ar.png"
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
          <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-primary/30 text-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Rocket className="h-4 w-4" />
            2026 Launch Pad Workshop Series
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              {heroContent.headline}
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            {heroContent.subheadline}
          </p>

          <p className="text-2xl font-semibold mb-8 max-w-2xl mx-auto">
            {heroContent.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <div id="visibility-form-container" className="w-full max-w-md mx-auto">
              {/* ConvertKit form will be injected here */}
            </div>
          </div>

          {/* Workshop Details Card */}
          <Card className="p-8 bg-background/50 backdrop-blur border border-white/10 shadow-xl max-w-3xl mx-auto">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Workshop Details</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-3">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Format</h3>
                  <p className="text-muted-foreground">LIVE, hands-on workshop with interactive exercises</p>
                </div>
                <div className="space-y-2">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-3">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Date & Time</h3>
                  <p className="text-muted-foreground">January 12, 2026<br/>10:00 AM CST<br/>60 Minutes</p>
                </div>
                <div className="space-y-2">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Investment</h3>
                  <p className="text-2xl font-bold text-primary">FREE</p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-primary/20">
                <p className="text-sm text-muted-foreground italic">
                  Can't join live? No problem! All registrants receive the recording.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-12 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              The 3 Problems Killing Your Pipeline
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">1) Random Effort</h3>
                <p className="text-muted-foreground mb-4">Trying things here and there. No unified strategy. Nothing works consistently.</p>
                <p className="text-sm italic">Signal: Activity feels busy, not effective</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">2) No Starting Point</h3>
                <p className="text-muted-foreground mb-4">Too many options. Not sure what matters most. Hard to choose where to focus.</p>
                <p className="text-sm italic">Signal: Lots of "shoulds", few repeats</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">3) No Meeting Engine</h3>
                <p className="text-muted-foreground mb-4">Content and outreach do not convert. No reliable path to conversations. Following up feels awkward.</p>
                <p className="text-sm italic">Signal: Visibility rises, meetings do not</p>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-orange-500/10 to-red-600/10 border border-orange-500/20 rounded-lg p-8 mb-8">
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Building a System to Stay Top of Mind</h3>
              <p className="text-xl text-foreground mb-6">
                The average B2B buyer is already 57% through their decision process before they contact a vendor.
              </p>
              <p className="text-xl text-foreground mb-6">
                When your target customer has a need, you should always be the first person they call.
              </p>
              <p className="text-xl font-semibold text-orange-600">
                Being memorable is not luck. It's a small set of touchpoints you repeat on purpose.
              </p>
            </div>

            <div className="space-y-4 text-lg text-muted-foreground">
              <p className="text-2xl font-bold text-foreground">Your job is not to "convince" on the first touch.</p>
              <p className="text-xl text-foreground">Your job is to become familiar, credible, and easy to choose.</p>
            </div>
          </div>

        </div>
      </section>

      {/* What's Included */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get the 3-7-1 Framework
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn this simple system to win awareness and become the first call
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workshopTopics.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Additional Topics */}
          <Card className="mt-8 p-6 bg-muted/50">
            <h3 className="text-lg font-semibold mb-4">You'll Also Learn:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">How to build a simple weekly cadence you can repeat for 4 weeks</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">Leading and outcome metrics to track so you stay consistent</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">The difference between Public, Direct, and Owned visibility methods</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">How to track meetings booked, not likes—measure what actually matters</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Meet Your Instructor Section */}
      <section className="py-12 bg-muted/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meet Your Instructor
            </h2>
          </div>

          <Card className="p-8 hover:shadow-lg transition-all duration-300">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <img
                  src="/brand-instructor.png"
                  alt="Amelia Leigner"
                  className="w-full max-w-[250px] mx-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-2xl font-bold mb-4">Amelia Leigner</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Amelia is a product and marketing executive with nearly a decade of experience helping early-stage
                  startups and AI-driven companies launch and scale. She currently serves as Head of Product, Growth at
                  Bottega8 and as Fractional CMO for Tech Leaders, where she drives AI product adoption and builds
                  scalable growth strategies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  She now partners with founders and executives to build distinctive personal brands that fuel
                  founder-led sales and turn expertise into market authority.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    <Rocket className="h-4 w-4" />
                    Founder-Led Sales
                  </div>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    <TrendingUp className="h-4 w-4" />
                    Fractional CMO
                  </div>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    <Bot className="h-4 w-4" />
                    AI Growth Strategist
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Gift className="h-4 w-4" />
              Workshop Bonuses
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              FREE Bonuses Included
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to implement immediately - at no cost
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <bonus.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{bonus.title}</h3>
                    <p className="text-muted-foreground">{bonus.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      {/* How It Works CTA Section */}
      <section className="py-12 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Ready for the Next Step?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            This workshop is part of our Launch Pad series. See how we help technical leaders build full consulting businesses.
          </p>
          <div className="flex justify-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-8 py-6"
              onClick={() => {
                trackEvent('See How It Works - Visibility Workshop', {
                  location: 'visibility_workshop_cta'
                });
                window.location.href = '/how-it-works'
              }}
            >
              See How It Works
            </Button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
            Join 300+ technical leaders who've launched successful consulting practices
          </p>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Stop Random Effort. Start Booking Meetings.
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get the 3-7-1 Framework in this free workshop and become the first call
          </p>
          <Button
            size="lg"
            className="text-lg px-8"
            onClick={() => {
              // Track CTA click
              trackEvent('Scroll to Form CTA Clicked', {
                location: 'bottom_cta_section'
              });

              // Smooth scroll to the form at the top
              const formContainer = document.getElementById('visibility-form-container');
              if (formContainer) {
                formContainer.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center'
                });
              }
            }}
          >
            <Rocket className="mr-2 h-5 w-5" />
            Register for FREE Workshop
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowToWinVisibilityWorkshop;
