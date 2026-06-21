import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import SalesFooter from "@/components/footers/SalesFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle2,
  Gift,
  ArrowRight,
  Zap,
  Target,
  Brain,
  Rocket,
  FileText,
  Video,
  MessageSquare,
  Play,
  BookOpen,
  Lightbulb,
  Repeat,
  AlertTriangle,
  BarChart3,
  Wrench,
  Award,
  Mail,
  Calendar,
  Star,
  Users,
  GraduationCap,
} from "lucide-react";
import SEO from "@/components/SEO";
import { trackEvent } from "@/utils/posthog";

const STRIPE_BUY_LINK = "https://buy.stripe.com/4gM14nh1T1kb3nA4F6aMU0O";

const ClaudeWorkshop = () => {
  useEffect(() => {
    trackEvent("Claude Workshop Page Viewed");
  }, []);

  const handleCTA = (location: string) => {
    trackEvent("Claude Workshop CTA Clicked", { location });
    window.open(STRIPE_BUY_LINK, "_blank");
  };

  const handleFAQOpen = (question: string) => {
    trackEvent("Claude Workshop FAQ Expanded", { question });
  };

  const curriculum = [
    {
      icon: Lightbulb,
      title: "The Shift From Prompting to Workflows",
      description:
        "Why one-off prompts keep you stuck doing the work yourself, and what changes when Claude starts running a real process",
    },
    {
      icon: Wrench,
      title: "The No-Code Agent Build Formula",
      description:
        "The simple structure to turn a messy business task into a clean Claude workflow without touching code",
    },
    {
      icon: Target,
      title: "Pick the Right First Use Case",
      description:
        "How to choose the one task that saves the most time, creates the most room to focus, or clears the biggest bottleneck",
    },
    {
      icon: Brain,
      title: "The Anatomy of a Claude Agent",
      description:
        "The exact parts that make a workflow useful: inputs, instructions, logic, steps, outputs, and handoffs",
    },
    {
      icon: Play,
      title: "Build Your First Agent Along With Todd",
      description:
        "Watch a real workflow come together step by step so you can copy the process into your own business fast",
    },
    {
      icon: Repeat,
      title: "Turn Repeated Work Into a Repeatable System",
      description:
        "How to take tasks your team keeps doing manually and turn them into a workflow Claude can run the same way every time",
    },
    {
      icon: Zap,
      title: "The Prompt-to-Process Upgrade",
      description:
        "How to stop writing longer prompts and start designing workflows that think in sequence",
    },
    {
      icon: FileText,
      title: "Templates You Can Steal",
      description:
        "The starter frameworks and build templates that make your first Claude agent easier to create and easier to trust",
    },
    {
      icon: AlertTriangle,
      title: "Avoid the 5 Mistakes That Break Most AI Workflows",
      description:
        "Where people overcomplicate agents, create messy outputs, or build something no one actually uses",
    },
    {
      icon: BarChart3,
      title: "Make Claude Produce Outputs You Can Use",
      description:
        "How to get cleaner drafts, better structure, and more reliable outputs that don't need so much fixing after the fact",
    },
    {
      icon: Rocket,
      title: "Build for Real Business Tasks, Not Demos",
      description:
        "How to create agents for work that actually matters, like research, content, summaries, planning, decision support, and internal ops",
    },
    {
      icon: Award,
      title: "Walk Away With One Working Agent",
      description:
        "By the end of the workshop, you'll have at least one custom Claude workflow built for a real task inside your business",
    },
  ];

  const valueStack = [
    {
      icon: Video,
      title: "The Full Workshop Recording",
      tag: "Core Product",
      description:
        "About 90 minutes of Todd walking through how to design and build a Claude agent workflow without code. Watch at your own pace. Rewatch any section as you build.",
      value: "$497",
    },
    {
      // Todd: name and value are a default. Adjust "The Complete Claude Masterclass"
      // and "$297" here if you want different wording or a different price.
      icon: GraduationCap,
      title: "The Complete Claude Masterclass",
      tag: "Included Guide",
      description:
        "The full step-by-step Claude guide: setup, prompts, agents, and the workflows that make Claude actually useful day to day. Self-paced and yours to keep. You reach it from the replay page after you confirm your email.",
      value: "$297",
    },
    {
      icon: FileText,
      title: "Claude Agent Starter Templates",
      tag: "Toolkit",
      description:
        "Plug-and-play templates so you're not building from a blank page. Drop your task in, follow the prompts, ship the agent.",
      value: "$197",
    },
    {
      icon: BookOpen,
      title: "Prompt-to-Workflow Cheat Sheet",
      tag: "Toolkit",
      description:
        "A one-page guide that shows you how to turn any one-off prompt into a repeatable workflow you can hand off.",
      value: "$97",
    },
    {
      icon: Lightbulb,
      title: "Agent Build Examples",
      tag: "Toolkit",
      description:
        "Real worked examples you can copy, adapt, and steal as shortcuts for your own build.",
      value: "$147",
    },
    {
      icon: MessageSquare,
      title: "Live Q&A Replay Notes",
      tag: "Reference",
      description:
        "A clean summary of the best questions, answers, and build decisions from the workshop Q&A. Skim it, jump to the parts that match your build.",
      value: "$47",
    },
  ];

  const marqueeBonus = {
    title: "1:1 Agent Audit and Strategy Session With Todd",
    description:
      "After you build, book a private 1:1 with Todd. Bring your first workflow. Get a direct review of what's working, what to tighten, what to cut, and what to build next. This is the part that turns a single agent into a system you can grow.",
    value: "$497",
  };

  // Sum of the marquee bonus ($497) plus every value-stack item
  // ($497 + $297 + $197 + $97 + $147 + $47 = $1,282). Total = $1,779.
  const totalValue = "$1,779";

  const faqs = [
    {
      q: "How long is the workshop recording?",
      a: "About 90 minutes. You can watch it in one sitting or break it up. The recording is yours, so you can rewatch any section while you build.",
    },
    {
      q: "Do I need to know how to code?",
      a: "No. The whole point of the workshop is to build a working Claude agent workflow without writing code. If you can write a clear set of instructions, you have what you need.",
    },
    {
      q: "What software do I need?",
      a: "A Claude account is enough to follow along. Free or paid plans both work for the core build. If you want to wire the workflow into other tools later, the workshop covers what to consider, but no extra software is required to ship your first agent.",
    },
    {
      q: "Will this work if I run a service business, not a product?",
      a: "Yes. The examples cover research, content, summaries, planning, and internal ops, which apply to service businesses as much as product ones. The build formula is the same either way.",
    },
    {
      q: "How long do I have access to the recording and bonuses?",
      a: "You get permanent access. Buy once, watch as many times as you want, download the templates, and come back whenever you want to build another agent.",
    },
    {
      q: "Is the Claude Masterclass included, and where do I find it?",
      a: "Yes, the complete Claude Masterclass is included with your purchase at no extra cost. It's the full step-by-step Claude guide: setup, prompts, agents, and the everyday workflows. After you buy, go to the replay page, confirm the email you used at checkout, and you'll find a button that takes you straight into it. Nothing extra to pay.",
    },
    {
      q: "What happens at the 1:1 Agent Audit with Todd?",
      a: "You bring the first agent you built during the workshop. Todd reviews it live, points out what to tighten or simplify, and helps you decide what to build next. Most people leave the call with a sharper version of their agent and a clear next step.",
    },
    {
      q: "What if I don't build a working agent?",
      a: "You're covered by a 30-day money-back guarantee. Watch the workshop, try the build, use the templates. If you don't have at least one working agent inside 30 days, email Todd and get a full refund.",
    },
    {
      q: "Is there a community?",
      a: "Not bundled with this purchase. The workshop, the bonuses, and the 1:1 are designed to get you to one working agent on your own. If you want ongoing support and a peer group after that, Todd's AI Agent Workflows Program is the next step, and it gets mentioned inside the replay.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="The Claude Agent Workshop Recording | Build Custom AI Workflows Without Code"
        description="Get instant access to the Claude Agent Workshop recording, the complete Claude Masterclass, the agent starter templates, and a 1:1 strategy session with Todd. Build your first working Claude AI agent workflow without writing code. $100."
        keywords={[
          "Claude workshop recording",
          "Claude agent workshop",
          "AI agent",
          "Claude AI",
          "AI workflow",
          "no-code AI",
          "business automation",
          "Claude agent",
          "AI for business",
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "The Claude Agent Workshop Recording",
          "description":
            "Permanent access to the Claude Agent Workshop recording, the complete Claude Masterclass guide, starter templates, cheat sheet, build examples, Q&A notes, and a 1:1 strategy session with Todd. Build a working Claude AI agent workflow without writing code.",
          "brand": {
            "@type": "Brand",
            "name": "Technical Leaders",
          },
          "offers": {
            "@type": "Offer",
            "price": "100",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "https://technical-leaders.com/claude-workshop",
          },
        }}
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
            Workshop Recording + 1:1 With Todd
          </div>

          <h1 className="font-bold tracking-tight mb-6">
            <div className="text-2xl sm:text-3xl lg:text-4xl mb-2">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                The
              </span>
            </div>
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-2">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Claude Agent Workshop
              </span>
            </div>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            Build your first working Claude AI agent workflow this week. No code. No theory dump. One real workflow, running inside your business.
          </p>

          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get instant access to the 90-minute workshop recording, the complete Claude Masterclass, the agent starter templates, and a 1:1 strategy session with Todd to tighten what you build.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg sm:text-xl font-bold px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            onClick={() => handleCTA("hero")}
          >
            Get Instant Access $100
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-sm text-muted-foreground mt-4">
            Instant access · Includes 1:1 audit with Todd · 30-day money-back
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="pt-16 pb-10 sm:pb-20 bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            Most people are still using AI the slow way
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>They open ChatGPT.</p>
            <p>Type a prompt.</p>
            <p>Get a decent answer.</p>
            <p>Then they still have to do the work.</p>
            <p>
              Copy it. Clean it up. Re-prompt it. Paste it somewhere else. Fix the gaps. Do it again tomorrow.
            </p>
            <p>So yes, AI helps.</p>
            <p className="text-foreground font-semibold text-xl">
              But it's not actually taking work off your plate.
            </p>
            <p>
              Then "AI agents" show up and suddenly it sounds like a developer project. Too technical. Too messy. Too much setup. Too much risk of wasting time building something that never gets used.
            </p>
            <p className="text-foreground font-semibold text-xl">
              That's where most people get stuck.
            </p>
            <p>They've outgrown basic prompting.</p>
            <p>But they still haven't built a real workflow.</p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="pt-10 sm:pt-16 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-muted-foreground">
              The good news is you do not need to write code to make this useful.
            </p>
            <p className="text-foreground font-semibold text-xl">
              You need a clear job to automate, a simple workflow, and the right structure inside Claude.
            </p>
            <p className="text-muted-foreground">
              That's what the workshop walks you through.
            </p>

            <div className="mt-10 space-y-4 text-lg text-muted-foreground">
              <p>You'll pick a real, high-value task from your (or your team's) daily work.</p>
              <p>Map the steps.</p>
              <p>Build the logic.</p>
              <p>Use proven templates.</p>
              <p>Follow Todd through a real build, then run yours.</p>
            </div>

            <p className="text-foreground font-semibold text-xl mt-8">
              And before you close the tab, you'll have at least one custom Claude AI agent workflow built for work that actually matters.
            </p>
          </div>
        </div>
      </section>

      {/* What's Inside Value Stack */}
      <section className="pt-12 pb-20 bg-gradient-to-br from-primary/10 to-primary/5 border-y border-primary/20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Gift className="h-4 w-4" />
              Everything You Get for $100
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What's Inside the Workshop Package
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The recording, the complete Claude Masterclass, the toolkit, the notes, and a private 1:1 with Todd to tighten what you build.
            </p>
          </div>

          {/* Marquee 1:1 Audit */}
          <Card className="p-8 mb-8 bg-gradient-to-br from-orange-500/10 via-card to-red-600/10 border-2 border-orange-500/40 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-bl-lg">
              Most Valuable Bonus
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-6 mt-4 sm:mt-0">
              <div className="p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shrink-0">
                <Star className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
                  <h3 className="text-2xl font-bold">{marqueeBonus.title}</h3>
                  <span className="inline-flex items-center gap-1 bg-orange-500/10 text-orange-700 dark:text-orange-300 font-bold px-3 py-1 rounded-full text-sm">
                    Value: {marqueeBonus.value}
                  </span>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {marqueeBonus.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-orange-700 dark:text-orange-300">
                  A 1:1 with the workshop creator is the part of this offer you cannot get anywhere else.
                </p>
              </div>
            </div>
          </Card>

          {/* Recording + Toolkit Stack */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {valueStack.map((item) => (
              <Card
                key={item.title}
                className="p-6 hover:shadow-lg transition-all duration-300 bg-card/80 backdrop-blur"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                        {item.tag}
                      </p>
                      <span className="text-sm font-bold text-primary">
                        {item.value}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Total + CTA */}
          <Card className="p-8 bg-gradient-to-br from-card to-primary/5 border-2 border-primary/20 shadow-xl">
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-2">Total Value</p>
              <p className="text-4xl font-bold mb-1 line-through decoration-red-500/60 decoration-2">
                {totalValue}
              </p>
              <p className="text-lg text-muted-foreground mb-2">Today</p>
              <p className="text-6xl font-bold text-primary mb-6">
                $100 <span className="text-lg font-normal text-muted-foreground">USD</span>
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg sm:text-xl font-bold px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                onClick={() => handleCTA("value_stack")}
              >
                Get Instant Access $100
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Instant access · Includes 1:1 audit with Todd · 30-day money-back
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="pt-16 pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              Workshop Curriculum
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What You'll Learn (and Build) Inside
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {curriculum.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg sm:text-xl font-bold px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
              onClick={() => handleCTA("after_curriculum")}
            >
              Get Instant Access $100
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Instant access · Includes 1:1 audit with Todd · 30-day money-back
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="pt-16 pb-20 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle2 className="h-4 w-4" />
              How It Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              From Click to Working Agent in a Single Afternoon
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                icon: Zap,
                title: "Click Buy",
                description:
                  "Hit the button, pay $100 through Stripe. Standard secure checkout.",
              },
              {
                step: 2,
                icon: Mail,
                title: "Check Your Email",
                description:
                  "You'll get a welcome email with the link to the replay page and your slide downloads.",
              },
              {
                step: 3,
                icon: Video,
                title: "Confirm and Watch",
                description:
                  "On the replay page, enter the email you used at checkout. The video, slides, templates, and the complete Claude Masterclass unlock.",
              },
              {
                step: 4,
                icon: Calendar,
                title: "Build, Then Book",
                description:
                  "Build your first agent during the recording. Then book your 1:1 with Todd from inside the replay page.",
              },
            ].map((item) => (
              <Card
                key={item.step}
                className="p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div className="mx-auto mb-4 p-2 bg-primary/10 rounded-lg w-fit">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses Detail Section (deep dive) */}
      <section className="pt-16 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Gift className="h-4 w-4" />
              The Full Toolkit
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Every Piece You Get to Build With
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The recording is the foundation. The bonuses are what get you to a working agent fast and a better one after the audit.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <Video className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">The Workshop Recording</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The full 90-minute build session. Todd walks through how to pick a real business task, map it to a Claude workflow, and ship a working agent without writing code. Pause it, rewatch it, build along with it.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">The Complete Claude Masterclass</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The full step-by-step Claude guide, included with your purchase. It covers setup, the prompts that work, how to build agents, and the everyday workflows that make Claude useful. Self-paced and yours to keep. You open it from the replay page once you confirm the email you bought with.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Claude Agent Starter Templates</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Plug-and-play templates so you're never staring at a blank screen. Drop your task in, follow the structure, ship the agent. Use them for research, content, planning, summaries, and internal ops.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Prompt-to-Workflow Cheat Sheet</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A one-page reference for turning any one-off prompt into a repeatable workflow. Keep it open while you build. Hand it to your team.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Agent Build Examples</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Worked examples for tasks like content drafting, research, decision support, and customer ops. Copy the structure, adapt the prompts, ship faster.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Live Q&A Replay Notes</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A clean summary of the best questions, answers, and build decisions from the workshop Q&A. Most of the questions you'd ask are already in there.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-orange-500/10 to-red-600/10 border-2 border-orange-500/30">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg shrink-0">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-700 dark:text-orange-300 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                    Most Valuable Bonus
                  </div>
                  <h3 className="text-xl font-semibold mb-2">1:1 Agent Audit and Strategy Session</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A private call with Todd. Bring the agent you built during the workshop. Get a direct review, clear next steps, and a sharper version of what you built. Booked from inside the replay page after you confirm your email.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg sm:text-xl font-bold px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
              onClick={() => handleCTA("after_bonuses")}
            >
              Get Instant Access $100
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Instant access · Includes 1:1 audit with Todd · 30-day money-back
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-16 pb-20 bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Questions Before You Buy
            </h2>
            <p className="text-lg text-muted-foreground">
              Straight answers to the things most people ask.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card border border-border rounded-lg mb-3 px-6 border-b"
              >
                <AccordionTrigger
                  className="text-left text-lg font-semibold hover:no-underline"
                  onClick={() => handleFAQOpen(faq.q)}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* From the Live Session — attendee actions during the live workshop */}
      <section className="pt-16 pb-20 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="h-4 w-4" aria-hidden="true" />
              From the Live Session
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What happened in the room
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real builds, real feedback, real Q&amp;A. All of it lives in the recording you get.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Rocket className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold mb-2">A working agent, shipped live</h3>
              <p className="text-muted-foreground leading-relaxed">
                Joe built and installed a working Claude agent skill before the session ended.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Lightbulb className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Feedback shaping the build</h3>
              <p className="text-muted-foreground leading-relaxed">
                Alice's feedback was incorporated into the prioritization framework on the spot.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <MessageSquare className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Q&amp;A baked into the recording</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sarah, Pamela, John, Jennifer, and Brad asked questions about workflows, privacy, model selection, and platform integration. All answered live and included in the recording.
              </p>
            </Card>
          </div>

          {/* TODO: real buyer testimonials from the first 10-20 purchasers go here when collected. Do not invent. */}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="pt-16 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-lg leading-relaxed text-center">
            <p className="text-xl font-semibold text-foreground">
              This is your shortcut from random prompting to a real working workflow.
            </p>
            <p className="text-muted-foreground">
              If you've been circling AI agents and still haven't built one, this is the package that gets you there.
            </p>
            <p className="text-muted-foreground">You do not need more theory.</p>
            <p className="text-foreground font-semibold">
              You need one real workflow that saves time and proves this works in your business.
            </p>
            <p className="text-muted-foreground">
              Buy once. Watch the recording. Build your first agent. Book the 1:1 with Todd to tighten it.
            </p>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg sm:text-xl font-bold px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                onClick={() => handleCTA("final_cta")}
              >
                Get Instant Access $100
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Instant access · Includes 1:1 audit with Todd · 30-day money-back
              </p>
            </div>
          </div>
        </div>
      </section>

      <SalesFooter
        headline="Build Your First Working Claude Agent This Week"
        subheadline="The workshop recording, the starter templates, and a 1:1 with Todd. Instant access for $100."
        primaryCTA={{
          text: "Get Instant Access $100",
          url: STRIPE_BUY_LINK,
        }}
        guarantee={{
          text: "30-Day Money-Back",
          description:
            "Watch the workshop, use the templates, try the build. If you don't have a working agent inside 30 days, email Todd and get a full refund.",
        }}
        socialProof="Includes a 1:1 audit with Todd"
        trackingContext="Claude Workshop"
      />
    </div>
  );
};

export default ClaudeWorkshop;
