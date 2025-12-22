import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Zap, Target, Users, Shield, BookOpen, Wrench, Calendar, MessageCircle, Clock, FileText, Lightbulb, ClipboardCheck, UserCheck } from "lucide-react";
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
      title: "Wins & Workflows",
      duration: "First 7 Days",
      description: "We start with a 1:1 strategy call to map your 30-day quick-win plan. Think of it like AI triage—we'll find your biggest workflow win and deploy your first working AI agent within 7 days. (And that first agent should more than pay for the whole program. Seriously.)"
    },
    {
      number: 2,
      title: "Scale & Systemise",
      duration: "Ongoing",
      bullets: [
        "You'll go through our Focus Finder Diagnostic™ to find the #1 area where AI can make you faster, smarter, or richer.",
        "Every 6 weeks, we build out your next AI system. Rinse and repeat until your whole workflow stack is humming.",
        "You'll get personal coaching every week—so when you hit friction, you're not stuck Googling \"what the hell is a vector database?\"",
        "Monthly live workshops, deep-dive build sessions, and guest experts to keep your AI game sharp.",
        "Your workflows get reviewed, your systems get critiqued, and your blockers get crushed—fast."
      ]
    }
  ];

  const whatYouGet = [
    {
      icon: BookOpen,
      title: "AI-first Agent Skills Playbook",
      description: "Immediate access so you know how to design workflows and agent skills without guessing."
    },
    {
      icon: Calendar,
      title: "Weekly Office Hours",
      description: "to review builds, troubleshoot issues, and keep things moving, so your agent actually ships."
    },
    {
      icon: FileText,
      title: "AI Agent Skill Library",
      description: "Access to a growing library so you can reuse proven skills instead of starting from scratch."
    },
    {
      icon: Wrench,
      title: "Hands-on Build Support",
      description: "from me and the team while you design, test, and verify your agent, so you're not stuck duct-taping tools together alone."
    },
    {
      icon: Users,
      title: "Private Community",
      description: "with async support for questions, examples, and fast feedback, so momentum doesn't die between sessions."
    }
  ];

  // FAQ data for structured markup
  const faqData = [
    {
      question: "How long is the program?",
      answer: "The AI Agent Workflows program runs for 10 weeks. You'll get time back in the first 30 days, then ship your first AI tool in weeks 4-6, with ongoing support for adoption and leadership."
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
    "The AI Agents Workflow Program - Build Your First AI Tool in 6 Weeks",
    "6-week program for non-technical leaders to add 5-10 hours back into your week and ship your first AI-powered tool. No code. No overwhelm.",
    "$2500"
  );

  const faqStructuredData = generateFAQStructuredData(faqData);

  // Combine structured data
  const combinedStructuredData = [courseStructuredData, faqStructuredData];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="The AI Agents Workflow Program - Build Your First AI Tool in 6 Weeks"
        description="12 spots open. Add 5-10 hours back into your week and ship your first AI-powered tool in six weeks. No code. No overwhelm."
        keywords={['AI tools', 'AI productivity', 'AI for leaders', 'ship AI', 'AI adoption', 'business AI', 'AI automation', 'non-technical AI']}
        structuredData={combinedStructuredData}
      />

      {/* Top Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-semibold">
          <Zap className="w-4 h-4 fill-current" />
          <span>12 spots open this month</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-16 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <img
            src="/launch-bg.png"
            alt="Ship AI background"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Ship Real AI Agents
                <span className="block text-foreground mt-2">
                  in 30 Days.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground mb-6">
                Not a demo. Not a toy. Something you, your team, or your customers actually use to save 10+ hours/week.
              </p>

              <Button
                className="bg-blue-800 hover:bg-blue-900 text-white text-lg px-8 py-6"
                onClick={() => {
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Started
              </Button>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center lg:justify-end">
              <img
                src="/AI-before-after.jpeg"
                alt="AI Agent Workflows Program"
                className="w-full max-w-3xl rounded-2xl shadow-2xl shadow-orange-500/20"
              />
            </div>
          </div>

          {/* Goal Content */}
          <div className="max-w-4xl mx-auto mt-16">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              One system for all your unique expertise and process logic in as many simple workflows as you want.
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed">
              The AI Agent Workflows program is for founders, operators, consultants, and non-technical leaders who want to replace manual workflows with real AI agents that work without custom GPTs, complex SaaS tools, or messy "vibe coding".
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed">
              This isn't about learning AI. It's about shipping at least one useful agent that saves time every day, even if you're not a developer.
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
              This is for you if you...
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground leading-relaxed">
                  Want help building and launching custom AI agents in the next 30 days, without wasting time on trial-and-error or getting too technical
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground leading-relaxed">
                  Want to use the best AI tools and techniques beyond custom GPTs, Cursor, and other tools
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground leading-relaxed">
                  Need to integrate AI into your existing workflows without messy "vibe coding" or complex SaaS tools
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground leading-relaxed">
                  Have a new idea or current workflow to replace with AI agents without losing control of the process or leaking data
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Hear what it's like in our program:
          </h2>

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
      </section>

      {/* Company Logos - Scrolling Carousel */}
      <section className="bg-white py-12 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500 mb-10">
            Members Come From
          </p>
        </div>
        <div className="relative">
          {/* Gradient masks for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling container */}
          <div className="flex animate-scroll hover:[animation-play-state:paused]">
            {/* First set of logos */}
            <div className="flex items-center gap-10 px-5 shrink-0">
              <img src="/vercel-logo.svg" alt="Vercel" className="h-8 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/LaunchDarkly-Logo.png" alt="LaunchDarkly" className="h-10 max-w-[120px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/fivetran-logo-blue-rgb.jpg" alt="Fivetran" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/gitlab.png" alt="GitLab" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/calendly.webp" alt="Calendly" className="h-8 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Amazon_logo.svg" alt="Amazon" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/nike.png" alt="Nike" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/netflix.png" alt="Netflix" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/dell.svg" alt="Dell" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Salesforce.com_logo.png" alt="Salesforce" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/redhat.webp" alt="Red Hat" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Peloton-logo.jpg" alt="Peloton" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/stryker-logo.svg" alt="Stryker" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/worldline-logo.avif" alt="Worldline" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/jb-hunt.png" alt="JB Hunt" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/LegitScript_Logo.png" alt="LegitScript" className="h-10 max-w-[110px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/cashapp.svg" alt="Cash App" className="h-16 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-10 px-5 shrink-0">
              <img src="/vercel-logo.svg" alt="Vercel" className="h-8 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/LaunchDarkly-Logo.png" alt="LaunchDarkly" className="h-10 max-w-[120px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/fivetran-logo-blue-rgb.jpg" alt="Fivetran" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/gitlab.png" alt="GitLab" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/calendly.webp" alt="Calendly" className="h-8 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Amazon_logo.svg" alt="Amazon" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/nike.png" alt="Nike" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/netflix.png" alt="Netflix" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/dell.svg" alt="Dell" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Salesforce.com_logo.png" alt="Salesforce" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/redhat.webp" alt="Red Hat" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Peloton-logo.jpg" alt="Peloton" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/stryker-logo.svg" alt="Stryker" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/worldline-logo.avif" alt="Worldline" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/jb-hunt.png" alt="JB Hunt" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/LegitScript_Logo.png" alt="LegitScript" className="h-10 max-w-[110px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/cashapp.svg" alt="Cash App" className="h-16 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-foreground/50 mt-4">and many other startups, SMBs, and non-profits</p>
      </section>

      {/* What You'll Have Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            What you'll have in 30 days
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            The goal? Get you building production-ready AI workflows that drive real business outcomes (in days, not quarters), even if you're not technical.
          </p>
          <p className="text-lg text-foreground leading-relaxed mb-6">
            You'll build and launch custom AI agents that replaces manual workflows you or your team deal with every week like:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="text-lg text-muted-foreground">Marketing and sales GTM</li>
            <li className="text-lg text-muted-foreground">Product or research workflows</li>
            <li className="text-lg text-muted-foreground">Customer support</li>
            <li className="text-lg text-muted-foreground">HR or compliance workflows</li>
            <li className="text-lg text-muted-foreground">Financial or accounting workflows</li>
            <li className="text-lg text-muted-foreground">Legal or regulatory workflows</li>
            <li className="text-lg text-muted-foreground">Other workflows and internals tools you or your team deal with every week</li>
          </ul>
          <p className="text-lg text-foreground leading-relaxed">
            By day 30, your agents are live and being used regularly in your business, saving you time and money every day.
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
            You'll get the full stack: 1:1 Coaching. Templates. Battle-tested playbooks. Hands-on help. No hype or BS.
          </p>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 p-8 text-white relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: index === 0 ? 'url(/ai-in-ar.png)' : index === 1 ? 'url(/launch-bg.png)' : 'url(/scale-bg.png)',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/70 to-red-700/70"></div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 mb-4 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-3xl font-bold">{phase.number}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Phase {phase.number}: {phase.title}</h3>
                      <p className="text-sm font-semibold text-orange-200">{phase.duration}</p>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8 flex items-center">
                    {phase.description ? (
                      <p className="text-lg text-muted-foreground leading-relaxed">{phase.description}</p>
                    ) : phase.bullets ? (
                      <ul className="space-y-3">
                        {phase.bullets.map((bullet: string, i: number) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-orange-500 mt-1">•</span>
                            <span className="text-lg text-muted-foreground">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Here's what you get inside the AI Agent Workflows program:
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Everything you need to build and ship AI agents that save you time and money every week
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
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

          {/* Bonuses */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              Bonuses that speed things up
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h4 className="font-bold text-foreground">Kickoff Agent Design Session</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">We map your workflow, define the agent's role, and lock the first build, so you start with clarity instead of tinkering.</p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h4 className="font-bold text-foreground">Private Enterprise-Grade Agent Examples</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">Real architectures and workflows from serious environments, so you can model what actually works.</p>
              </Card>
            </div>
          </div>

          {/* Good Fit */}
          <div className="mt-16 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              This is a good fit if:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">•</span>
                <span className="text-lg text-muted-foreground">You're leading a team, running a business, or managing ops—and AI is on your radar</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">•</span>
                <span className="text-lg text-muted-foreground">You've got broken or manual workflows slowing you down</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">•</span>
                <span className="text-lg text-muted-foreground">You're done with "AI theory" and want working systems now</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">•</span>
                <span className="text-lg text-muted-foreground">You're friendly, coachable, and action-biased</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">•</span>
                <span className="text-lg text-muted-foreground">And you're not gonna ghost after watching one Loom video and blaming the robots</span>
              </li>
            </ul>
          </div>

          <p className="text-lg text-muted-foreground text-center mt-12">
            The AI Agent Workflows program is open year-round, but spots are limited so we can actively support real builds.
          </p>
        </div>
      </section>

      {/* Next Steps Section */}
      <section id="pricing" className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="p-10 bg-gray-900 border-gray-800 text-center">
            <div className="inline-flex items-center gap-2 bg-green-900/30 text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              <span>14-day money-back guarantee</span>
            </div>
            <p className="text-5xl sm:text-6xl font-bold text-white mb-3">$2,500</p>
            <p className="text-xl text-gray-300 mb-8">AI Agent Workflows Program</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button
                className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-6 text-lg"
                onClick={() => {
                  trackConversion('AI Agent Workflows Program Purchase Clicked', {
                    location: 'next_steps_section',
                    price: 2500,
                    plan: 'single_payment'
                  });
                  window.location.href = "https://buy.stripe.com/00w14n4f70g7aQ2dbCaMU0K";
                }}
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 px-8 py-6 text-lg"
                onClick={() => {
                  trackConversion('AI Agent Workflows Program Strategy Session Clicked', {
                    location: 'next_steps_section'
                  });
                  window.location.href = "https://calendly.com/tech-leaders/ai-strategy";
                }}
              >
                Book a Strategy Session
              </Button>
            </div>

            <div className="flex items-center justify-center text-sm text-gray-400">
              <a
                href="https://buy.stripe.com/6oU7sL8vngf52jw4F6aMU0L"
                className="flex items-center gap-1.5 hover:text-orange-400 transition-colors"
                onClick={() => {
                  trackConversion('AI Agent Workflows Program Purchase Clicked', {
                    location: 'next_steps_section',
                    price: 3000,
                    plan: 'weekly_payments'
                  });
                }}
              >
                <span>💳</span>
                <span className="underline">$500/week payment plan available</span>
              </a>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AIProgram;
