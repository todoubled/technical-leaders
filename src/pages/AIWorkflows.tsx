import { useState } from "react";
import Navigation from "@/components/Navigation";
import ContentFooter from "@/components/footers/ContentFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Brain, Rocket, Target, Users, Sparkles, ChevronRight, Copy, Check } from "lucide-react";
import SEO from "@/components/SEO";
import { trackEvent } from "@/utils/posthog";

const AIWorkflows = () => {
  const [copied, setCopied] = useState(false);

  const heroContent = {
    badge: "Go Beyond ChatGPT",
    headline: "AI Workflows",
    subheadline: "Deliver in days, not months. Keep teams small. Ship more.",
    description: "Learn the exact AI workflows we use with venture-backed teams to write less code by hand and deliver higher quality, closer to spec"
  };

  const aiFirstPrinciples = [
    {
      icon: Brain,
      title: "Work on the Right Problem",
      description: "95% of AI projects fail. We'll show you how to identify which workflows are actually worth automating using the Job to Be Done framework"
    },
    {
      icon: Rocket,
      title: "Good In, Good Out",
      description: "If you can't ask a good question, you won't get good answers. Learn the prompting techniques that separate amateurs from pros"
    },
    {
      icon: Target,
      title: "Define What 'Done' Looks Like",
      description: "Set clear outcome metrics before you start. Know what success looks like so you can measure real ROI, not just AI hype"
    },
    {
      icon: Users,
      title: "AI Is Not Magic",
      description: "It's not a silver bullet. But with the right workflows, you can build proof-of-concept MVPs in days instead of weeks"
    }
  ];

  const zoomRegistrationUrl = "https://us06web.zoom.us/meeting/register/yvD8bVRcSem9wRQkjO0cpQ#/registration";

  const handleCTA = (ctaName: string, location: string) => {
    trackEvent('AI Workflows CTA Clicked', {
      cta: ctaName,
      location: location
    });
    window.open(zoomRegistrationUrl, '_blank');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText('https://technical-leaders.com/ai-workflows');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Workflows Workshop | Technical Leaders"
        description="Go beyond ChatGPT. Learn the AI workflows that let venture-backed teams build MVPs in days, not months. Free weekly workshop with live demos and Q&A."
        keywords={["AI workflows", "AI agents", "Claude Code", "MVP development", "AI automation", "startup AI", "AI productivity"]}
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
            <Rocket className="h-4 w-4" />
            {heroContent.badge}
          </div>

          <h1 className="font-bold tracking-tight mb-6">
            <div className="text-2xl sm:text-3xl lg:text-4xl mb-2">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                The
              </span>
            </div>
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-2">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                AI Workflows
              </span>
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Workshop
              </span>
            </div>
          </h1>

          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            {heroContent.subheadline}
          </p>

          <p className="text-lg mb-8 max-w-2xl mx-auto">
            {heroContent.description}
          </p>

          <div className="mb-8 max-w-2xl mx-auto">
            <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden shadow-xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/JA_tWS1LJqs"
                title="AI Workflows Workshop"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <Button
            size="lg"
            className="text-lg px-8 py-6"
            onClick={() => handleCTA('Join the Workshop - Hero', 'hero_section')}
          >
            Save My Spot
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>

          <p className="text-sm font-semibold mt-4 text-muted-foreground">
            FREE Workshop on Tuesdays at 11am CST
          </p>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="mx-auto max-w-4xl">
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-primary/20 p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold mb-1 text-background">Know someone stuck on ChatGPT?</h3>
                <p className="text-sm text-muted-foreground">Share this workshop with them</p>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg flex-1 sm:flex-none">
                  <span className="text-sm font-mono text-muted-foreground">technical-leaders.com/ai-workflows</span>
                </div>
                <Button
                  onClick={handleCopyLink}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="sm"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy Link
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is AI-First Thinking Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              From a Post-Exit Technical Founder
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              The Principles That Actually Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              ChatGPT is just scratching the surface. Learn how agents and sub-agents are changing the game—and how to use them without writing code.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiFirstPrinciples.map((principle, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <principle.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{principle.title}</h3>
                <p className="text-muted-foreground">{principle.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ContentFooter
        headline="Join the Free AI Workflows Workshop"
        description="No stupid questions. Odds are someone else is wondering the same thing. Come learn the workflows that let small teams ship like big ones."
        primaryCTA={{
          text: "Save My Spot",
          url: zoomRegistrationUrl,
          description: ""
        }}
        benefits={[
          "Live demos of real AI workflows",
          "Deliver in days, not months",
          "Interactive Q&A—ask anything",
          "Works even if you don't code"
        ]}
        socialProof="Join leaders from venture-backed teams learning to ship faster with AI"
        trackingContext="AI Workflows"
      />
    </div>
  );
};

export default AIWorkflows;
