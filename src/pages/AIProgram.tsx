import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Zap, Target, Users, Award, Star, Shield, BookOpen, Wrench, Library, Laptop, CalendarDays, FileText, Lightbulb } from "lucide-react";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import { trackConversion, trackClick } from "@/utils/posthog";
import { useTrackScrollDepth } from "@/hooks/use-posthog";
import { generateCourseStructuredData, generateFAQStructuredData } from "@/utils/seo-helpers";

const AIProgram = () => {
  // Track scroll depth for engagement
  useTrackScrollDepth('AI Program Page');

  useEffect(() => {
    // Page view tracking is handled centrally in App.tsx
  }, []);

  const phases = [
    {
      number: 1,
      title: "Literacy and Leverage with Tools & Workflows",
      duration: "First 2 weeks",
      description: "We'll identify where you're losing time and plug in ready-to-go AI workflows and agents so you free up your first 5 hours, fast."
    },
    {
      number: 2,
      title: "Adoption & Efficiency",
      duration: "Ongoing",
      description: "Then we'll roll those wins out to your team so everyone's working smarter, hitting targets early, and freeing capacity for growth."
    }
  ];

  const howItWorks = [
    {
      icon: Target,
      title: "The AI-First Framework",
      description: "so you know exactly where AI fits in your business and what to automate first."
    },
    {
      icon: Wrench,
      title: "The AI Workflow Builder",
      description: "so you can design and deploy repeatable processes without being technical."
    },
    {
      icon: Library,
      title: "The Fortune 100 AI Agent Prompt Library",
      description: "for marketing, ops, product, and strategy — so you skip setup time and get instant leverage."
    },
    {
      icon: Laptop,
      title: "The AI Workspace",
      description: "so your whole team can work and collaborate in one place and actually use AI day-to-day."
    },
    {
      icon: CalendarDays,
      title: "Weekly Office Hours",
      description: "so you get hands-on help implementing instead of stalling, wasting time with trial-and-error, or getting distracted by shiny objects."
    }
  ];

  const bonuses = [
    {
      icon: FileText,
      title: "Pre-Built Workflow Templates and Agentic Prompts",
      description: "to get instant results before week one's done."
    },
    {
      icon: Lightbulb,
      title: "AI Leadership Playbook",
      description: "to help you lead an AI-ready team that follows your example."
    }
  ];

  const idealFor = [
    "You lead a team and want to set the AI standard, not play catch-up.",
    "You have big goals that require more leverage without hiring or working more hours.",
    "You're open-minded, coachable, and action-oriented.",
    "You want clarity and hands-on help, not theory.",
    "You're willing to experiment and share wins with the group."
  ];

  // FAQ data for structured markup
  const faqData = [
    {
      question: "How long is the program?",
      answer: "The AI-First Tools and Workflows™ Program runs with weekly training sessions every Wednesday. You'll see results within 30 days, with ongoing support and new sessions to keep you ahead."
    },
    {
      question: "What if I don't love it?",
      answer: "Try the program for 2 weeks. If you don't love it within 2 weeks, leave with no hard feelings."
    },
    {
      question: "How much does it cost?",
      answer: "Your investment is $2,500 as a single payment or 6 weekly payments of $500."
    },
    {
      question: "Is this only for technical people?",
      answer: "No! This program is specifically designed for non-technical leaders. You don't need to become 'a tech person' to get real AI ROI."
    }
  ];

  // Generate structured data
  const courseStructuredData = generateCourseStructuredData(
    "The AI-First Tools and Workflows™ Program",
    "Build AI-first workflows that add 5+ hours of free time within 30 days. AI Playbooks and Copy+Paste Workflows with new Training Sessions every Wednesday.",
    "$2500"
  );

  const faqStructuredData = generateFAQStructuredData(faqData);

  // Combine structured data
  const combinedStructuredData = [courseStructuredData, faqStructuredData];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="The AI-First Tools and Workflows™ Program - Add 5+ Hours of Free Time in 30 Days"
        description="Limited to 12 leaders. Build AI-first workflows that deliver actual ROI with Literacy, Leverage, and Adoption. New training sessions every Wednesday."
        keywords={['AI workflows', 'AI productivity', 'AI for leaders', 'AI tools', 'AI adoption', 'business AI', 'AI automation']}
        structuredData={combinedStructuredData}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <img
            src="/launch-bg.png"
            alt="AI Program background"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-700 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              <span>November Intake: limited to 12 people</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              The AI-First Tools and Workflows™ Program
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              AI Playbooks and Copy+Paste Workflows with new Training Sessions every Wednesday
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 leading-tight">
            Here's what we're doing with a small group of non-technical folks before the holidays:
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            We're helping you create actual AI ROI with Literacy, Leverage, and Adoption by building AI-first workflows that add 5+ hours of free time within 30 days.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            If you've been feeling like everyone's talking about AI and you're falling behind, this is your chance to get ahead and lead by example, without needing to become "a tech person."
          </p>
        </div>
      </section>

      {/* Goal Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            The goal is simple:
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Go beyond ChatGPT by setting up AI tools and workflows to win back time for yourself, then scale those wins across your team so you can exceed goals ahead of schedule (without AI slop) and finally have room for those new initiatives.
          </p>
        </div>
      </section>

      {/* The Model Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            The model's simple.
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Two clear phases to take you from overwhelmed to AI-empowered
          </p>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 p-8 bg-gradient-to-br from-orange-500/20 to-red-600/20 relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white">
                        <span className="text-3xl font-bold">{phase.number}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-foreground">Phase {phase.number}: {phase.title}</h3>
                      <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">{phase.duration}</p>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8 flex items-center">
                    <p className="text-lg text-muted-foreground leading-relaxed">{phase.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Here's how it works:
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Everything you need to build and deploy AI workflows
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {howItWorks.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fast-Start Bonuses */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            To speed things up, you'll also get:
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Hit the ground running with these exclusive resources
          </p>

          <div className="space-y-4 mb-8">
            {bonuses.map((bonus, index) => {
              const IconComponent = bonus.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">{bonus.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{bonus.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 text-green-600 dark:text-green-400" />
          <h2 className="text-3xl font-bold mb-4 text-background">
            If you don't love it within 2 weeks, leave with no hard feelings.
          </h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            We're confident you'll see results fast. But if it's not for you, just let us know within 2 weeks.
          </p>
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-6 py-3 rounded-full font-semibold">
            <Shield className="w-5 h-5" />
            <span>2-week satisfaction guarantee</span>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-orange-500/5 to-red-600/5">
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed italic">
              "We built these exact workflows in our own startup teams and increased productivity and quality by about 40%."
            </p>
            <p className="text-muted-foreground leading-relaxed">
              And they're the same systems we teach to larger companies with $50 million+ in revenue.
            </p>
          </Card>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            This is perfect for you if:
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            This program is designed for action-oriented leaders ready to lead with AI
          </p>

          <Card className="p-8">
            <div className="space-y-4">
              {idealFor.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-500/10 to-red-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Here's what to do next:
          </h2>

          <div className="grid md:grid-cols-2 gap-6 my-12">
            <Card className="p-6 hover:shadow-xl transition-all relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  BEST VALUE
                </span>
              </div>
              <div className="text-center pt-2">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Single Payment</p>
                <p className="text-4xl font-bold text-foreground mb-4">$2,500</p>
                <p className="text-sm text-muted-foreground mb-6">One-time investment</p>
                <Button
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
                  onClick={() => {
                    trackConversion('AI Program Purchase Clicked', {
                      location: 'next_steps_section',
                      price: 2500,
                      plan: 'single_payment'
                    });
                    window.location.href = "https://buy.stripe.com/00w14n4f70g7aQ2dbCaMU0K";
                  }}
                >
                  Get Started
                </Button>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all">
              <div className="text-center">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Weekly Payments</p>
                <p className="text-4xl font-bold text-foreground mb-4">$500</p>
                <p className="text-sm text-muted-foreground mb-6">6 weekly payments</p>
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => {
                    trackConversion('AI Program Purchase Clicked', {
                      location: 'next_steps_section',
                      price: 3000,
                      plan: 'weekly_payments'
                    });
                    window.location.href = "https://buy.stripe.com/6oU7sL8vngf52jw4F6aMU0L";
                  }}
                >
                  Get Started
                </Button>
              </div>
            </Card>
          </div>

          <div className="mb-8">
            <p className="text-lg text-foreground font-semibold mb-2">Step 1.</p>
            <p className="text-muted-foreground mb-6">Get started by clicking the link above</p>

            <p className="text-lg text-foreground font-semibold mb-2">Step 2.</p>
            <p className="text-muted-foreground mb-6">You'll get instant access to the program and weekly office hours</p>

            <p className="text-lg text-foreground font-semibold mb-2">Step 3.</p>
            <p className="text-muted-foreground mb-6">Start building your first AI workflows to deliver better work, faster</p>
          </div>

          <Card className="p-6 bg-gradient-to-br from-orange-500/5 to-red-600/5 border-orange-200 dark:border-orange-900">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">P.S.</strong> As soon as you join, you'll get access to our Research Agent so you can do weeks of first-party market research in minutes.
            </p>
          </Card>

          <p className="text-sm text-muted-foreground mt-8">
            We're capping this at 12 leaders for November so everyone gets the hands-on support they need.<br />
            Applications are reviewed daily and we'll close as soon as seats are filled.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AIProgram;
