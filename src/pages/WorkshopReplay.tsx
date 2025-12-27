import Navigation from "@/components/Navigation";
import ContentFooter from "@/components/footers/ContentFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Users, Sparkles, Brain, Rocket, Clock, Gift, FileText, Video, Zap, FolderOpen, Settings, Download } from "lucide-react";
import SEO from "@/components/SEO";
import { trackEvent } from "@/utils/posthog";

const WorkshopReplay = () => {
  // Replace with your actual YouTube video ID
  const youtubeVideoId = "JA_tWS1LJqs";

  // Replace with your actual download URLs
  const downloadLinks = {
    skillsGuide: "#",
    templatePack: "#"
  };

  const heroContent = {
    badge: "Free Workshop Recording",
    headline: "AI Agent Skills Workshop",
    subheadline: "Build AI agents that actually work. No code required.",
    description: "Watch the Complete Workshop + Download Bonus Resources"
  };

  const keyBenefits = [
    {
      icon: Video,
      title: "Full Workshop Recording",
      description: "Complete masterclass covering Agent Skills from basics to advanced implementation"
    },
    {
      icon: FileText,
      title: "Bonus Templates & Resources",
      description: "Pre-built Skills and templates to get started immediately"
    },
    {
      icon: FolderOpen,
      title: "Real-World Examples",
      description: "Live demos and use cases from the session you can apply right away"
    },
    {
      icon: Clock,
      title: "Lifetime Access",
      description: "Watch anytime, anywhere. Revisit the content whenever you need it"
    }
  ];

  const workshopHighlights = [
    {
      icon: Brain,
      title: "Understanding Agent Skills",
      description: "Learn what makes Skills different from other AI approaches",
      timestamp: "Part 1",
      features: [
        "How Agent Skills differ from prompts, projects, and MCP servers",
        "Why Skills are the future of AI automation",
        "The anatomy of a well-designed Skill"
      ]
    },
    {
      icon: FolderOpen,
      title: "Building Your First Skill",
      description: "Hands-on creation of working Agent Skills",
      timestamp: "Part 2",
      features: [
        "Creating your first Skill from scratch (no coding required)",
        "Using the skill-creator to auto-generate Skills",
        "Personal Skills vs Project Skills—when to use each"
      ]
    },
    {
      icon: Rocket,
      title: "Advanced Implementation",
      description: "Real-world applications and best practices",
      timestamp: "Part 3",
      features: [
        "Document generation, data analysis, and reporting use cases",
        "Pre-built Skills for PowerPoint, Excel, Word, and PDF",
        "Creating custom Skills for any workflow"
      ]
    }
  ];

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

  const bonusResources = [
    {
      icon: FileText,
      title: "Agent Skills Guide",
      description: "Complete reference guide covering everything from the workshop—skill structure, best practices, and implementation patterns.",
      downloadUrl: downloadLinks.skillsGuide,
      buttonText: "Get the Guide"
    },
    {
      icon: FolderOpen,
      title: "Skill Template Pack",
      description: "Ready-to-use Skill templates for common workflows including document generation, data analysis, and reporting.",
      downloadUrl: downloadLinks.templatePack,
      buttonText: "Get the Templates"
    }
  ];

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
        </div>
      </section>

      {/* What Are Agent Skills Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
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

      {/* Bonus Resources Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Gift className="h-4 w-4" />
              Free Bonus Resources
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Download Workshop Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to start building Agent Skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {bonusResources.map((resource, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                    <resource.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                  <p className="text-muted-foreground mb-6">{resource.description}</p>
                  <Button
                    size="lg"
                    className="w-full"
                    onClick={() => {
                      trackEvent('Resource Downloaded', {
                        resource: resource.title,
                        location: 'bonus_section'
                      });
                      window.open(resource.downloadUrl, '_blank');
                    }}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    {resource.buttonText}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Content Breakdown */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Workshop Content Breakdown
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master AI Agent Skills with this comprehensive breakdown
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workshopHighlights.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="inline-flex items-center gap-2 bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium mb-3">
                  <Clock className="h-3 w-3" />
                  {item.timestamp}
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
                <Zap className="h-8 w-8 text-primary" />
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

      {/* Live Workshop CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-orange-500" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Want to Join the Live Workshop?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            We run the AI Agent Skills workshop every week with live Q&A and hands-on demos.
          </p>

          <Card className="p-8 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Join the Next Live Session
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6 text-left max-w-xl mx-auto">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-gray-800 dark:text-gray-200 font-semibold">Build your first Skill live</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-gray-800 dark:text-gray-200 font-semibold">No code required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-gray-800 dark:text-gray-200 font-semibold">Interactive Q&A</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-gray-800 dark:text-gray-200 font-semibold">Works with Claude Pro, Max, Team & Enterprise</span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-12 py-6"
              onClick={() => {
                trackEvent('Join Live Workshop CTA', {
                  location: 'bottom_section'
                });
                window.location.href = "/ai-agent-skills";
              }}
            >
              Register for Live Workshop
            </Button>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 font-semibold">
              FREE on Tuesdays at 11am CST
            </p>
          </Card>

          <p className="text-gray-700 dark:text-gray-300 mt-8">
            Questions? Email{" "}
            <a href="mailto:todd@technical-leaders.com" className="text-orange-600 hover:underline">
              todd@technical-leaders.com
            </a>
          </p>
        </div>
      </section>

      <ContentFooter
        headline="Ready to Master AI Agent Skills?"
        description="You've seen what's possible. Now join us live and build your first Agent Skill with hands-on guidance."
        primaryCTA={{
          text: "Join the Live Workshop",
          url: "/ai-agent-skills",
          description: "FREE on Tuesdays at 11am CST"
        }}
        benefits={[
          "Build your first Agent Skill live",
          "No coding experience required",
          "Interactive Q&A—ask anything",
          "Works with Claude Pro, Max, Team & Enterprise"
        ]}
        socialProof="Join leaders from venture-backed teams learning to automate with AI"
        testimonial={{
          quote: "The Agent Skills workshop completely changed how I use Claude. I went from basic prompts to building automated workflows that save hours every week.",
          author: "Workshop Participant",
          role: "Technical Leader"
        }}
        secondaryCTA={{
          text: "Explore more free resources",
          url: "/10-before-10"
        }}
        trackingContext="Workshop Replay"
      />
    </div>
  );
};

export default WorkshopReplay;
