import { useState } from "react";
import Navigation from "@/components/Navigation";
import ContentFooter from "@/components/footers/ContentFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Rocket, Target, Terminal, Sparkles, ChevronRight, Copy, Check, Code, Zap, MessageSquare } from "lucide-react";
import SEO from "@/components/SEO";
import { trackEvent } from "@/utils/posthog";

const OfficeHoursDemo = () => {
  const [copied, setCopied] = useState(false);

  const heroContent = {
    badge: "Master Claude Code",
    headline: "Claude Code",
    subheadline: "Build faster with AI-powered coding directly in Claude Desktop",
    description: "Learn how to use Claude Code in the desktop app to write, debug, and ship production-ready code without leaving your conversation"
  };

  const claudeCodeFeatures = [
    {
      icon: Terminal,
      title: "Terminal Access Built In",
      description: "Run commands, install packages, and execute scripts directly from Claude. No copy-paste between windows—everything happens in one place"
    },
    {
      icon: Code,
      title: "Read & Write Files Directly",
      description: "Claude can read your existing code, understand your project structure, and write files directly to your filesystem. Real changes, not just suggestions"
    },
    {
      icon: Zap,
      title: "Full Project Context",
      description: "Claude Code understands your entire codebase. Ask questions about your architecture, refactor across multiple files, or debug complex issues with full context"
    },
    {
      icon: MessageSquare,
      title: "Conversational Development",
      description: "Describe what you want in plain English. Claude Code translates your intent into working code, explains decisions, and iterates based on your feedback"
    }
  ];

  const zoomRegistrationUrl = "https://us06web.zoom.us/meeting/register/yvD8bVRcSem9wRQkjO0cpQ#/registration";

  const handleCTA = (ctaName: string, location: string) => {
    trackEvent('Office Hours Demo CTA Clicked', {
      cta: ctaName,
      location: location
    });
    window.open(zoomRegistrationUrl, '_blank');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText('https://technical-leaders.com/office-hours-demo');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Claude Code in Desktop App | Technical Leaders"
        description="Learn how to use Claude Code in the Claude Desktop app. Build, debug, and ship production-ready code with AI-powered development. Free workshop with live demos."
        keywords={["Claude Code", "Claude Desktop", "AI coding", "AI development", "Claude Code tutorial", "AI programming", "Anthropic Claude"]}
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
            <Terminal className="h-4 w-4" />
            {heroContent.badge}
          </div>

          <h1 className="font-bold tracking-tight mb-6">
            <div className="text-2xl sm:text-3xl lg:text-4xl mb-2">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Using
              </span>
            </div>
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-2">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Claude Code
              </span>
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                in the Desktop App
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
                title="Claude Code Demo"
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
                <h3 className="text-lg font-semibold mb-1 text-background">Know a developer who should see this?</h3>
                <p className="text-sm text-muted-foreground">Share this demo with them</p>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg flex-1 sm:flex-none">
                  <span className="text-sm font-mono text-muted-foreground">technical-leaders.com/office-hours-demo</span>
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

      {/* Features Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Beyond Chat—Real Development Power
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What Makes Claude Code Different
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Claude Code isn't just another AI assistant. It's a full development environment that can read your files, run your code, and ship real changes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {claudeCodeFeatures.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ContentFooter
        headline="Join the Free Claude Code Workshop"
        description="See Claude Code in action. Learn how to set it up, when to use it, and how to get the most out of AI-powered development in the desktop app."
        primaryCTA={{
          text: "Save My Spot",
          url: zoomRegistrationUrl,
          description: "FREE on Tuesdays at 11am CST"
        }}
        benefits={[
          "Live demos of Claude Code in action",
          "Setup walkthrough for the desktop app",
          "Real-world coding examples",
          "Interactive Q&A—ask anything"
        ]}
        socialProof="Join developers learning to build faster with Claude Code"
        trackingContext="Office Hours Demo"
      />
    </div>
  );
};

export default OfficeHoursDemo;
