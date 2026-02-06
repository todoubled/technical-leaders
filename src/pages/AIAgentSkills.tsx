import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import ContentFooter from "@/components/footers/ContentFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Rocket, Target, Users, Sparkles, ChevronRight, Copy, Check, FolderOpen, Zap, Settings, FileText, Calendar } from "lucide-react";
import SEO from "@/components/SEO";
import { trackEvent } from "@/utils/posthog";

const getNextWednesday = () => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  // Wednesday is day 3
  let daysUntilWednesday = (3 - dayOfWeek + 7) % 7;
  // If today is Wednesday, show next Wednesday
  if (daysUntilWednesday === 0) {
    daysUntilWednesday = 7;
  }
  const nextWednesday = new Date(now);
  nextWednesday.setDate(now.getDate() + daysUntilWednesday);
  return nextWednesday;
};

const formatEventDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};

const AIAgentSkills = () => {
  const [copied, setCopied] = useState(false);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const nextSessionDate = getNextWednesday();
  const formattedDate = formatEventDate(nextSessionDate);

  useEffect(() => {
    if (!formContainerRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://techleaders.kit.com/8273fe48f8/index.js';
    script.async = true;
    script.setAttribute('data-uid', '8273fe48f8');
    formContainerRef.current.appendChild(script);

    return () => {
      if (formContainerRef.current) {
        formContainerRef.current.innerHTML = '';
      }
    };
  }, []);

  const heroContent = {
    badge: "Beyond Basic Prompting",
    headline: "Agent Skills",
    subheadline: "Build AI agents that actually work. No code required.",
    description: "Learn how to create modular AI capabilities that extend Claude's functionality—turning repetitive tasks into automated workflows"
  };

  const skillBenefits = [
    {
      icon: FolderOpen,
      title: "Modular by Design",
      description: "Skills are organized folders of instructions, scripts, and resources. Claude loads them only when relevant—keeping context clean and responses focused"
    },
    {
      icon: Zap,
      title: "Model-Invoked Automation",
      description: "Unlike slash commands, Skills activate automatically. Claude decides when to use them based on your request—no manual triggers needed"
    },
    {
      icon: Settings,
      title: "Progressive Disclosure",
      description: "Like a well-organized manual, Skills let Claude load information only as needed. Bundle unlimited context without overwhelming the model"
    },
    {
      icon: FileText,
      title: "Pre-Built & Custom",
      description: "Start with ready-made Skills for PowerPoint, Excel, Word, and PDF—then create your own custom Skills for any workflow"
    }
  ];

  const workshopTopics = [
    "How Agent Skills differ from prompts, projects, and MCP servers",
    "Creating your first Skill from scratch (no coding required)",
    "Using the skill-creator to auto-generate Skills",
    "Personal Skills vs Project Skills—when to use each",
    "Real-world use cases: document generation, data analysis, reporting"
  ];

  const zoomRegistrationUrl = "https://us06web.zoom.us/meeting/register/yvD8bVRcSem9wRQkjO0cpQ#/registration";

  const handleCTA = (ctaName: string, location: string) => {
    trackEvent('AI Agent Skills CTA Clicked', {
      cta: ctaName,
      location: location
    });
    window.open(zoomRegistrationUrl, '_blank');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText('https://technical-leaders.com/ai-agent-skills');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Agent Skills Workshop | Technical Leaders"
        description="Learn how to build modular AI agents with Claude's Agent Skills. Create automated workflows without code. Free weekly workshop with live demos."
        keywords={["AI agent skills", "Claude Skills", "AI automation", "Claude Code", "AI workflows", "no-code AI", "AI productivity", "agent development"]}
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
                AI Agent Skills
              </span>
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Workshop
              </span>
            </div>
          </h1>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-primary/20 text-foreground px-5 py-3 rounded-full text-base sm:text-lg font-medium mb-6">
            <Calendar className="h-5 w-5 text-primary" />
            <span>Next Session: {formattedDate} at 11am CST</span>
          </div>

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
                title="AI Agent Skills Workshop"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div ref={formContainerRef} className="max-w-md mx-auto"></div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="mx-auto max-w-4xl">
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-primary/20 p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold mb-1 text-background">Know someone ready to level up with AI?</h3>
                <p className="text-sm text-muted-foreground">Share this workshop with them</p>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg flex-1 sm:flex-none">
                  <span className="text-sm font-mono text-muted-foreground">technical-leaders.com/ai-agent-skills</span>
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

      {/* What Are Agent Skills Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              The Future of AI Automation
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What Are Agent Skills?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Agent Skills are modular capabilities that extend Claude's functionality. Think of them as specialized instruction sets that Claude can load on-demand to perform complex tasks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillBenefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="h-4 w-4" />
              Workshop Curriculum
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What You'll Learn
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Walk away with working Agent Skills and the knowledge to build more
            </p>
          </div>

          <Card className="p-8">
            <ul className="space-y-4">
              {workshopTopics.map((topic, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="p-1 bg-primary/10 rounded-full mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-lg">{topic}</span>
                </li>
              ))}
            </ul>
          </Card>

          <div className="mt-8 text-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => formContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            >
              Reserve Your Seat
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="h-4 w-4" />
              Is This For You?
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Perfect For
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Technical Leaders</h3>
              <p className="text-muted-foreground">
                Want to automate repetitive workflows and empower your team with AI-powered tools
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Founders & Operators</h3>
              <p className="text-muted-foreground">
                Looking to move faster with smaller teams by building AI-first systems
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Enthusiasts</h3>
              <p className="text-muted-foreground">
                Ready to go beyond ChatGPT and learn the cutting-edge of practical AI automation
              </p>
            </Card>
          </div>
        </div>
      </section>

      <ContentFooter
        headline="Join the Free Agent Skills Workshop"
        description="No coding experience required. Learn how to build AI agents that automate your most tedious tasks—then use them immediately."
        primaryCTA={{
          text: "Save My Spot",
          onClick: () => formContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }),
          description: ""
        }}
        benefits={[
          "Build your first Agent Skill live",
          "No code required",
          "Interactive Q&A—ask anything",
          "Works with Claude Pro, Max, Team & Enterprise"
        ]}
        socialProof="Join leaders from venture-backed teams learning to automate with AI"
        trackingContext="AI Agent Skills"
      />
    </div>
  );
};

export default AIAgentSkills;
