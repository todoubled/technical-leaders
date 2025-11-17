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
    badge: "AI-First Thinking™",
    headline: "AI Workflows",
    subheadline: "Transform how your organization works with proven AI workflows",
    description: "Learn enterprise-grade AI workflows that deliver measurable results without getting technical"
  };

  const aiFirstPrinciples = [
    {
      icon: Brain,
      title: "Think AI-First",
      description: "Start with the outcome you want, then identify where AI can accelerate or enhance the path to get there"
    },
    {
      icon: Rocket,
      title: "Start with Workflows, Not Tools",
      description: "Design your ideal process first, then layer in AI to eliminate bottlenecks and amplify human expertise"
    },
    {
      icon: Target,
      title: "Measure What Matters",
      description: "Focus on business outcomes—time saved, revenue generated, quality improved—not AI features"
    },
    {
      icon: Users,
      title: "Human-AI Collaboration",
      description: "AI handles repetitive tasks and analysis. Humans provide judgment, creativity, and strategic direction"
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
        description="Learn proven enterprise-grade AI workflows that deliver measurable results. Transform your organization with AI-First Thinking without getting technical."
        keywords={["AI workflows", "enterprise AI", "AI-first thinking", "AI automation", "business AI strategy", "AI productivity"]}
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
            <Brain className="h-4 w-4" />
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

          <p className="text-lg mb-12 max-w-2xl mx-auto">
            {heroContent.description}
          </p>

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
                <h3 className="text-lg font-semibold mb-1 text-background">Share this with a friend or colleague</h3>
                <p className="text-sm text-muted-foreground">Help others discover AI-First Thinking</p>
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
              A New Way of Working
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What is AI-First Thinking?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              It's not about using AI tools. It's about redesigning how work gets done—with AI as a core collaborator, not an add-on.
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
        headline="Join the Free AI-First Thinking Workshop"
        description="Learn how to transform your organization with enterprise-grade AI workflows without getting technical."
        primaryCTA={{
          text: "Register for Free Workshop",
          url: zoomRegistrationUrl,
          description: "Tuesday at 11am CST"
        }}
        benefits={[
          "Enterprise-Grade Workflows",
          "Real-World Case Studies",
          "Team Implementation Strategies",
          "Q&A with Industry Experts"
        ]}
        socialProof="Join leaders and senior ICs learning AI-First Thinking"
        trackingContext="AI Workflows"
      />
    </div>
  );
};

export default AIWorkflows;
