import Navigation from "@/components/Navigation";
import ContentFooter from "@/components/footers/ContentFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Brain, Rocket, Target, TrendingUp, Users, MessageSquare, FileText, Lightbulb, BarChart3, Shield, Sparkles, ChevronRight, Zap } from "lucide-react";
import SEO from "@/components/SEO";
import { trackEvent } from "@/utils/posthog";

const AIWorkflows = () => {
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

  const enterpriseWorkflows = [
    {
      icon: TrendingUp,
      title: "Sales Pipeline Intelligence",
      challenge: "Sales teams spend 60% of time on admin, not selling",
      solution: "AI auto-scores leads, drafts personalized outreach, and surfaces buying signals in real-time",
      outcomes: [
        "40% more time for high-value conversations",
        "2x faster deal velocity",
        "Consistent follow-up across 100% of opportunities"
      ],
      color: "from-blue-500/10 to-blue-600/10 border-blue-500/20"
    },
    {
      icon: MessageSquare,
      title: "Customer Support Automation",
      challenge: "Support teams drowning in repetitive questions and ticket routing",
      solution: "AI instantly categorizes tickets, suggests solutions from knowledge base, and drafts personalized responses",
      outcomes: [
        "70% of tier-1 issues resolved instantly",
        "5-minute average response time",
        "Support agents focus on complex, high-impact issues"
      ],
      color: "from-green-500/10 to-green-600/10 border-green-500/20"
    },
    {
      icon: Lightbulb,
      title: "Product Development Acceleration",
      challenge: "Product teams lose weeks to research, documentation, and decision paralysis",
      solution: "AI synthesizes customer feedback, competitive intel, and usage data into actionable insights",
      outcomes: [
        "Ship features 3x faster",
        "Data-driven decisions in hours, not weeks",
        "Clear roadmap aligned with customer needs"
      ],
      color: "from-purple-500/10 to-purple-600/10 border-purple-500/20"
    },
    {
      icon: FileText,
      title: "Marketing Content Engine",
      challenge: "Marketing teams can't keep up with demand for fresh, relevant content",
      solution: "AI generates first drafts, adapts messaging for different channels, and maintains brand consistency",
      outcomes: [
        "10x content output with same team",
        "Consistent brand voice across all channels",
        "A/B test 5x more variations"
      ],
      color: "from-orange-500/10 to-orange-600/10 border-orange-500/20"
    },
    {
      icon: BarChart3,
      title: "Executive Decision Intelligence",
      challenge: "Leaders make strategic decisions with incomplete or outdated information",
      solution: "AI monitors key metrics, identifies trends, and surfaces decision-critical insights proactively",
      outcomes: [
        "Real-time visibility into business health",
        "Early warning on risks and opportunities",
        "Faster, more confident strategic decisions"
      ],
      color: "from-red-500/10 to-red-600/10 border-red-500/20"
    },
    {
      icon: Brain,
      title: "Knowledge Management System",
      challenge: "Critical expertise trapped in individual heads and scattered documents",
      solution: "AI captures tribal knowledge, surfaces relevant context, and ensures nothing gets lost in handoffs",
      outcomes: [
        "New hires productive in days, not months",
        "Zero knowledge loss when people transition",
        "Instant access to institutional expertise"
      ],
      color: "from-indigo-500/10 to-indigo-600/10 border-indigo-500/20"
    }
  ];

  const keyBenefits = [
    {
      icon: Zap,
      title: "ROI in Weeks, Not Months",
      description: "Start seeing measurable productivity gains within 30 days of implementation"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "All workflows designed with data privacy, compliance, and security best practices built in"
    },
    {
      icon: Users,
      title: "Team-Ready Playbooks",
      description: "Step-by-step guides your team can follow without technical expertise"
    },
    {
      icon: TrendingUp,
      title: "Proven at Scale",
      description: "Workflows tested with Fortune 500 companies and high-growth startups"
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
            FREE Workshop on Tuesdays at 9am PST / 12pm EST
          </p>
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

      {/* Enterprise Workflows Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Rocket className="h-4 w-4" />
              Proven Workflows
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Enterprise-Grade AI Workflows
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real workflows delivering measurable results across every business function
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {enterpriseWorkflows.map((workflow, index) => (
              <Card key={index} className={`p-6 bg-gradient-to-br ${workflow.color} hover:shadow-lg transition-all duration-300`}>
                <div className="p-3 bg-background/80 rounded-lg w-fit mb-4">
                  <workflow.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{workflow.title}</h3>

                <div className="mb-4">
                  <p className="text-sm font-medium text-muted-foreground mb-1">The Challenge:</p>
                  <p className="text-sm italic">{workflow.challenge}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-muted-foreground mb-1">The AI Workflow:</p>
                  <p className="text-sm">{workflow.solution}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Measurable Outcomes:</p>
                  <ul className="space-y-2">
                    {workflow.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm font-medium">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why AI-First Thinking Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for real businesses, not AI enthusiasts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How This Works Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How This Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven framework for implementing AI workflows in your organization
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Identify Your Bottlenecks",
                description: "We help you pinpoint where your team loses the most time, makes the most errors, or faces the biggest knowledge gaps",
                icon: Target
              },
              {
                step: "2",
                title: "Design Your Ideal Workflow",
                description: "Map out how work should flow if time, knowledge, and resources weren't constraints—then architect AI to fill those gaps",
                icon: Lightbulb
              },
              {
                step: "3",
                title: "Implement with Team Playbooks",
                description: "Roll out proven workflows with step-by-step guides that any team member can follow, no technical skills required",
                icon: FileText
              },
              {
                step: "4",
                title: "Measure and Optimize",
                description: "Track real business outcomes, gather feedback, and continuously improve workflows based on what's working",
                icon: BarChart3
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <item.icon className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
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
          description: "Tuesday at 9am PST / 12pm EST"
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
