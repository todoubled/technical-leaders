import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Zap, Target, Users, Shield, BookOpen, Wrench, Calendar, MessageCircle, Clock, Rocket, FileText, Lightbulb, ClipboardCheck, UserCheck } from "lucide-react";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import { trackConversion } from "@/utils/posthog";
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
      title: "Time Back & AI Foundations",
      duration: "First 30 days",
      description: "We'll run an AI Workflow Audit to find the hours you're losing each week. Then we'll rebuild your core workflows using AI so you get 5-10 hours back fast. It's the momentum boost that pays for the program before we hit the bigger project."
    },
    {
      number: 2,
      title: "Ship Your First AI Tool",
      duration: "Weeks 4-6",
      description: "Next, you'll build a simple, high-leverage AI tool for your role or team. It might be a decision helper, a summariser, a content engine, a workflow bot... whatever gives you the most leverage. You'll walk out with something real that makes you look like the person who \"gets it.\""
    },
    {
      number: 3,
      title: "AI-First Leadership & Adoption",
      duration: "Ongoing",
      description: "Once you've got the skills and the tool, we'll shift the focus to adoption, confidence, and repeatable systems. You'll lead with clarity instead of hype, and your team will actually use the tools you bring them."
    }
  ];

  const whatYouGet = [
    {
      icon: BookOpen,
      title: "6-Module Course",
      description: "so you stay current on what matters instead of drowning in hype."
    },
    {
      icon: Target,
      title: "Weekly Gameplan",
      description: "so you always know your next move and stay focused."
    },
    {
      icon: Calendar,
      title: "Weekly Office Hours + Implementation Sessions",
      description: "so you actually ship instead of getting stuck."
    },
    {
      icon: ClipboardCheck,
      title: "AI Workflow Audit",
      description: "so you instantly spot where to save 5-10 hours a week."
    },
    {
      icon: Wrench,
      title: "Tool Selection Matrix",
      description: "so you stop chasing shiny objects and choose the right stack."
    },
    {
      icon: FileText,
      title: "Done-for-You AI Skills & Prompts",
      description: "so you get results fast without reinventing anything."
    },
    {
      icon: Users,
      title: "Private Skool Community",
      description: "so you get support and answers between calls."
    },
    {
      icon: UserCheck,
      title: "Accountability Check-ins",
      description: "so you stay consistent and ship on time."
    }
  ];

  const idealFor = [
    "Non-technical leaders who want to use AI properly, not just talk about it.",
    "You're tired of hype, tired of fiddling with tools that don't stick, and you want clear skills you can use now.",
    "You've got work to deliver,decisions to make, maybe a team to lead, and no time to waste.",
    "And you're not a diva. An open mind for learning with a beginner's mindset helps."
  ];

  // FAQ data for structured markup
  const faqData = [
    {
      question: "How long is the program?",
      answer: "Ship AI runs for 6 weeks. You'll get time back in the first 30 days, then ship your first AI tool in weeks 4-6, with ongoing support for adoption and leadership."
    },
    {
      question: "What if I don't love it?",
      answer: "Try it for 14 days. If you're not getting value, I'll refund you. No questions asked."
    },
    {
      question: "How much does it cost?",
      answer: "Your investment is $2,500 as a single payment or 6 weekly payments of $500."
    },
    {
      question: "Is this only for technical people?",
      answer: "No! This program is specifically designed for non-technical leaders. No code. No overwhelm. No more guessing which shiny tool actually matters."
    }
  ];

  // Generate structured data
  const courseStructuredData = generateCourseStructuredData(
    "Ship AI - Build Your First AI Tool in 6 Weeks",
    "6-week program for non-technical leaders to add 5-10 hours back into your week and ship your first AI-powered tool. No code. No overwhelm.",
    "$2500"
  );

  const faqStructuredData = generateFAQStructuredData(faqData);

  // Combine structured data
  const combinedStructuredData = [courseStructuredData, faqStructuredData];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Ship AI - Build Your First AI Tool in 6 Weeks"
        description="12 spots open. Add 5-10 hours back into your week and ship your first AI-powered tool in six weeks. No code. No overwhelm."
        keywords={['AI tools', 'AI productivity', 'AI for leaders', 'ship AI', 'AI adoption', 'business AI', 'AI automation', 'non-technical AI']}
        structuredData={combinedStructuredData}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <img
            src="/launch-bg.png"
            alt="Ship AI background"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-700 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              <span>12 spots open this month</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Ship AI
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 mt-2">
                In 6 Weeks.
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Here's what it's like in our hands-on AI program:
            </p>

            <div className="w-full max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/LyY-glR6P_8"
                title="Ship AI Program"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Goal Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
          Here's what we're doing with this next Ship AI cohort...
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mb-8">
            The goal is simple:
            </p>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Add 5-10 hours back into your week and help you ship your first AI-powered tool in six weeks.
          </p>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            No code. No overwhelm. No more guessing which shiny tool actually matters.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm bringing together a small group of non-technical leaders who want to think AI-first, act AI-first, and lead AI-first... without pretending to be developers.
          </p>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            We'll build the skills, the workflows, and the confidence to use AI in real work, not in theory.
          </p>
        </div>
      </section>

      {/* How It Works - Phases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            How it works:
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Three phases to take you from overwhelmed to shipping AI tools
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

      {/* What You Get Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Here's what you get inside the Ship AI program:
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Everything you need to build and ship AI tools
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {whatYouGet.map((item, index) => {
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

      {/* Bonus Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            And because I want you moving from day one...
          </h2>

          <Card className="p-8 bg-gradient-to-br from-orange-500/5 to-red-600/5 border-orange-200 dark:border-orange-900">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2 text-xl">Bonus 1:1 Onboarding Call</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We'll map the fastest path to your first win and set up your workflow targets.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 text-green-600 dark:text-green-400" />
          <h2 className="text-3xl font-bold mb-4 text-background">
            Your safety net:
          </h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            Try it for 14 days. If you're not getting value, I'll refund you. No questions asked.
          </p>
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-6 py-3 rounded-full font-semibold">
            <Shield className="w-5 h-5" />
            <span>14-day money-back guarantee</span>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Who this is for:
          </h2>

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
            What to do next:
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Two ways to join:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-12">
            <Card className="p-6 hover:shadow-xl transition-all relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  BEST VALUE
                </span>
              </div>
              <div className="text-center pt-2">
                <p className="text-sm font-semibold text-muted-foreground mb-2">One-off Payment</p>
                <p className="text-4xl font-bold text-foreground mb-4">$2,500</p>
                <p className="text-sm text-muted-foreground mb-6">Single payment</p>
                <Button
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
                  onClick={() => {
                    trackConversion('Ship AI Purchase Clicked', {
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
                <p className="text-sm font-semibold text-muted-foreground mb-2">6 Weekly Payments</p>
                <p className="text-4xl font-bold text-foreground mb-4">$500</p>
                <p className="text-sm text-muted-foreground mb-6">Per week for 6 weeks</p>
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => {
                    trackConversion('Ship AI Purchase Clicked', {
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

          <div className="mb-8 text-center">
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
        </div>
      </section>
    </div>
  );
};

export default AIProgram;
