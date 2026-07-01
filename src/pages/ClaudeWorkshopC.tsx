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
  Star,
  GraduationCap,
  Shield,
  TrendingUp,
  Clock,
  XCircle,
  ArrowDown,
} from "lucide-react";
import SEO from "@/components/SEO";
import { trackEvent } from "@/utils/posthog";

const STRIPE_BUY_LINK = "https://buy.stripe.com/4gM14nh1T1kb3nA4F6aMU0O";
const CANONICAL_URL = "https://technical-leaders.com/claude-workshop";

const ClaudeWorkshopC = () => {
  useEffect(() => {
    trackEvent("Claude Workshop C Page Viewed", { variant: "claude-workshop-c" });
  }, []);

  const handleCTA = (location: string) => {
    trackEvent("Claude Workshop C CTA Clicked", {
      location,
      variant: "claude-workshop-c",
    });
    window.open(STRIPE_BUY_LINK, "_blank");
  };

  const handleFAQOpen = (question: string) => {
    trackEvent("Claude Workshop C FAQ Expanded", {
      question,
      variant: "claude-workshop-c",
    });
  };

  // The cost of staying stuck — agitation points.
  const costOfInaction = [
    {
      icon: Clock,
      title: "The hours never come back",
      description:
        "Every week you re-prompt, copy, clean up, and paste the same outputs by hand is a week you spent doing work an agent could have run for you while you slept.",
    },
    {
      icon: TrendingUp,
      title: "The gap keeps widening",
      description:
        "The people in your space who already build workflows aren't twice as fast. They're compounding. Each agent they ship makes the next one easier. You're not standing still, you're falling behind.",
    },
    {
      icon: XCircle,
      title: "Prompting has a ceiling",
      description:
        "Longer prompts and cleverer wording can only take you so far. If the work still lands back on your plate, you never actually bought yourself any leverage.",
    },
    {
      icon: Brain,
      title: "The decision fatigue stays",
      description:
        "Without a repeatable system, every task starts from a blank page again. The mental load of \"how do I get AI to do this\" never goes away.",
    },
  ];

  // The mechanism — how the workshop solves it.
  const mechanism = [
    {
      icon: Target,
      title: "Pick one high-value task",
      description:
        "Not a toy demo. The single task that eats the most time or creates the biggest bottleneck in your business right now.",
    },
    {
      icon: Wrench,
      title: "Map it into a workflow",
      description:
        "The no-code build formula turns a messy manual task into a clean sequence of inputs, instructions, logic, and outputs.",
    },
    {
      icon: Play,
      title: "Build it alongside Todd",
      description:
        "Watch a real agent come together step by step in the recording, then run the exact same process on your own task.",
    },
    {
      icon: Repeat,
      title: "Make it repeatable",
      description:
        "Turn the build into a system Claude runs the same way every time, so the work comes off your plate for good.",
    },
  ];

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

  // The itemized value stack. The marquee 1:1 audit is listed first as the anchor.
  // Sum: $497 + $497 + $297 + $197 + $97 + $147 + $47 = $1,779.
  const valueStack = [
    {
      icon: Star,
      title: "1:1 Agent Audit & Strategy Session With Todd",
      tag: "Marquee Bonus",
      description:
        "A private call with the workshop creator. Bring the first agent you built, get a direct review of what to tighten, cut, and build next. You cannot get this anywhere else.",
      value: "$497",
      valueNumber: 497,
      featured: true,
    },
    {
      icon: Video,
      title: "The Full Workshop Recording",
      tag: "Core Product",
      description:
        "About 90 minutes of Todd designing and building a Claude agent workflow without code. Watch at your own pace, rewatch any section as you build.",
      value: "$497",
      valueNumber: 497,
    },
    {
      icon: GraduationCap,
      title: "The Complete Claude Masterclass",
      tag: "Included Guide",
      description:
        "The full step-by-step Claude guide: setup, prompts, agents, and the workflows that make Claude actually useful day to day. Self-paced and yours to keep.",
      value: "$297",
      valueNumber: 297,
    },
    {
      icon: FileText,
      title: "Claude Agent Starter Templates",
      tag: "Toolkit",
      description:
        "Plug-and-play templates so you're never building from a blank page. Drop your task in, follow the prompts, ship the agent.",
      value: "$197",
      valueNumber: 197,
    },
    {
      icon: Lightbulb,
      title: "Agent Build Examples",
      tag: "Toolkit",
      description:
        "Real worked examples you can copy, adapt, and steal as shortcuts for your own build.",
      value: "$147",
      valueNumber: 147,
    },
    {
      icon: BookOpen,
      title: "Prompt-to-Workflow Cheat Sheet",
      tag: "Toolkit",
      description:
        "A one-page guide that shows you how to turn any one-off prompt into a repeatable workflow you can hand off.",
      value: "$97",
      valueNumber: 97,
    },
    {
      icon: MessageSquare,
      title: "Live Q&A Replay Notes",
      tag: "Reference",
      description:
        "A clean summary of the best questions, answers, and build decisions from the workshop Q&A. Skim it, jump to the parts that match your build.",
      value: "$47",
      valueNumber: 47,
    },
  ];

  const totalValue = "$1,779";

  const faqs = [
    {
      q: "I'm not technical at all. Is this really going to work for me?",
      a: "Yes. The entire point of the workshop is building a working Claude agent workflow without writing a single line of code. If you can write a clear set of instructions, you have everything you need. That's exactly who this is built for.",
    },
    {
      q: "Why is it only $100 if the value is $1,779?",
      a: "The $1,779 is the honest itemized value of each piece if you bought it on its own. The price is $100 because Todd would rather get this into the hands of as many operators as possible than gate it behind a high price. The math is in your favor on purpose.",
    },
    {
      q: "How long is the workshop recording?",
      a: "About 90 minutes. You can watch it in one sitting or break it up. The recording is yours permanently, so you can rewatch any section while you build.",
    },
    {
      q: "What software do I need?",
      a: "A Claude account is enough to follow along. Free or paid plans both work for the core build. No extra software is required to ship your first agent.",
    },
    {
      q: "Will this work for a service business, not a product?",
      a: "Yes. The examples cover research, content, summaries, planning, and internal ops, which apply to service businesses as much as product ones. The build formula is identical either way.",
    },
    {
      q: "How long do I have access?",
      a: "Permanent access. Buy once, watch as many times as you want, download the templates, and come back whenever you want to build another agent.",
    },
    {
      q: "What actually happens at the 1:1 with Todd?",
      a: "You bring the first agent you built during the workshop. Todd reviews it live, points out what to tighten or simplify, and helps you decide what to build next. Most people leave with a sharper agent and a clear next step.",
    },
    {
      q: "What if I watch it and don't build a working agent?",
      a: "You're covered by a 30-day money-back guarantee. Watch the workshop, try the build, use the templates. If you don't have at least one working agent inside 30 days, email Todd and get a full refund. The risk is entirely on us.",
    },
  ];

  const ctaSubline =
    "Instant access · Includes 1:1 audit with Todd · 30-day money-back";

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Stop Prompting, Start Building | The Claude Agent Workshop"
        description="Tired of AI that still leaves the work on your plate? Build your first working Claude agent workflow this week, no code. The full workshop recording, the complete Claude Masterclass, templates, and a 1:1 with Todd. $1,779 value for $100."
        url={CANONICAL_URL}
        keywords={[
          "Claude agent workshop",
          "build AI agent no code",
          "AI workflow for business",
          "Claude AI",
          "no-code AI agent",
          "business automation",
          "AI for non-coders",
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
            "url": CANONICAL_URL,
          },
        }}
      />

      <Navigation />

      {/* ============ HERO — framed on the pain / tension ============ */}
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
          <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 dark:text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="h-4 w-4" />
            If AI still leaves the work on your plate, read this
          </div>

          <h1 className="font-bold tracking-tight mb-6">
            <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 text-foreground">
              You've outgrown prompting.
            </div>
            <div className="text-4xl sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-red-600 bg-clip-text text-transparent">
                But you still haven't built an agent.
              </span>
            </div>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            Everyone around you is shipping AI workflows that run on their own. You're still
            copying, cleaning, and re-prompting by hand. This is the week that changes.
          </p>

          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Build your first working Claude agent, no code, in a single afternoon. Get the
            90-minute workshop recording, the complete Claude Masterclass, the starter
            templates, and a 1:1 strategy session with Todd.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg sm:text-xl font-bold px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            onClick={() => handleCTA("hero")}
          >
            Get Instant Access $100
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-sm text-muted-foreground mt-4">{ctaSubline}</p>
          <p className="text-sm text-muted-foreground mt-2">
            <span className="line-through decoration-red-500/60">{totalValue} value</span>{" "}
            <span className="font-semibold text-foreground">today just $100</span>
          </p>
        </div>
      </section>

      {/* ============ PROBLEM — name the exact frustration ============ */}
      <section className="pt-16 pb-10 sm:pb-16 bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            Here's the trap you're actually stuck in
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>You open the chat.</p>
            <p>Type a prompt.</p>
            <p>Get a decent answer.</p>
            <p className="text-foreground font-semibold text-xl">
              And then you still have to do all the work.
            </p>
            <p>
              Copy it. Clean it up. Re-prompt it. Paste it somewhere else. Fix the gaps. Then
              do the whole thing again tomorrow. And the day after that.
            </p>
            <p>
              So AI is helping, sure. But it isn't taking anything off your plate. You've become
              a very fast copy-paste operator with a clever assistant, not someone with leverage.
            </p>
            <p>
              Then "AI agents" enter the conversation and it suddenly sounds like a developer
              project. Too technical. Too much setup. Too much risk of sinking hours into
              something that never actually gets used.
            </p>
            <p className="text-foreground font-semibold text-xl">
              So you stay where you are: past basic prompting, but nowhere near a real workflow.
            </p>
          </div>
        </div>
      </section>

      {/* ============ AGITATION — the cost of inaction ============ */}
      <section className="pt-12 pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 dark:text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Clock className="h-4 w-4" />
              The cost of staying stuck
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Every week you wait, this gets more expensive
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Not in dollars on a price tag, in the leverage you keep leaving on the table.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {costOfInaction.map((item) => (
              <Card
                key={item.title}
                className="p-6 border-l-4 border-red-500/60 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500/10 rounded-lg shrink-0">
                    <item.icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <p className="text-center text-xl font-semibold text-foreground max-w-2xl mx-auto mt-12">
            The hardest part was never the technology. It's that no one showed you the exact,
            no-code path from "I use AI" to "AI runs this for me."
          </p>
        </div>
      </section>

      {/* ============ SOLUTION / MECHANISM — there's a better way ============ */}
      <section className="pt-16 pb-20 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Lightbulb className="h-4 w-4" />
              There's a better way
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              You don't need to learn to code. You need a workflow.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A clear job to automate, a simple sequence of steps, and the right structure inside
              Claude. That's the whole mechanism, and it's exactly what the workshop walks you
              through.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {mechanism.map((item, index) => (
              <Card
                key={item.title}
                className="p-6 hover:shadow-lg transition-all duration-300 relative"
              >
                <div className="absolute top-4 right-4 text-5xl font-bold text-primary/10">
                  {index + 1}
                </div>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-br from-card to-primary/5 border-2 border-primary/20 text-center">
            <p className="text-xl font-semibold text-foreground mb-2">
              Before you close the tab, you'll have at least one custom Claude agent built for
              work that actually matters.
            </p>
            <p className="text-muted-foreground">
              Not a demo. A real workflow, running inside your business.
            </p>
          </Card>
        </div>
      </section>

      {/* ============ CURRICULUM — what you'll learn and build ============ */}
      <section className="pt-16 pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              Workshop Curriculum
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              The 12 things you'll learn and build inside
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
            <p className="text-sm text-muted-foreground mt-4">{ctaSubline}</p>
          </div>
        </div>
      </section>

      {/* ============ VALUE STACK — itemized $1,779 → $100 ============ */}
      <section className="pt-16 pb-20 bg-gradient-to-br from-primary/10 to-primary/5 border-y border-primary/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Gift className="h-4 w-4" />
              Add It All Up
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Here's everything you get, and what each piece is worth
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Priced honestly, item by item. Then crossed out for one simple reason: Todd would
              rather you build the agent than haggle over the price.
            </p>
          </div>

          {/* Itemized stack rows */}
          <Card className="overflow-hidden border-2 border-primary/20 shadow-xl mb-8">
            <div className="divide-y divide-border">
              {valueStack.map((item) => (
                <div
                  key={item.title}
                  className={`flex items-start gap-4 p-5 sm:p-6 ${
                    item.featured
                      ? "bg-gradient-to-r from-orange-500/10 to-red-600/5"
                      : "bg-card"
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg shrink-0 ${
                      item.featured
                        ? "bg-gradient-to-br from-orange-500 to-red-600"
                        : "bg-primary/10"
                    }`}
                  >
                    <item.icon
                      className={`h-6 w-6 ${
                        item.featured ? "text-white" : "text-primary"
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <p
                        className={`text-xs uppercase tracking-wider font-bold ${
                          item.featured
                            ? "text-orange-600 dark:text-orange-400"
                            : "text-muted-foreground"
                        }`}
                      >
                        {item.tag}
                      </p>
                      <span className="text-base font-bold text-primary whitespace-nowrap">
                        {item.value}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Total + slash + price */}
          <Card className="p-8 bg-gradient-to-br from-card to-primary/5 border-2 border-primary/20 shadow-xl">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <p className="text-lg text-muted-foreground">Total real value</p>
              </div>
              <p className="text-4xl sm:text-5xl font-bold mb-4 line-through decoration-red-500/70 decoration-4">
                {totalValue}
              </p>
              <ArrowDown className="h-8 w-8 text-orange-500 mx-auto mb-4" />
              <p className="text-lg text-muted-foreground mb-1">Everything, today, for</p>
              <p className="text-6xl sm:text-7xl font-bold text-primary mb-2">
                $100{" "}
                <span className="text-lg font-normal text-muted-foreground">USD</span>
              </p>
              <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-6">
                That's a {Math.round(((1779 - 100) / 1779) * 100)}% discount on the stack
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg sm:text-xl font-bold px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                onClick={() => handleCTA("value_stack")}
              >
                Get Instant Access $100
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4">{ctaSubline}</p>
            </div>
          </Card>
        </div>
      </section>

      {/* ============ MARQUEE BONUS DEEP-DIVE ============ */}
      <section className="pt-16 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="p-8 sm:p-10 bg-gradient-to-br from-orange-500/10 via-card to-red-600/10 border-2 border-orange-500/40 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-bl-lg">
              The Part Nobody Else Offers
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-6 mt-4 sm:mt-0">
              <div className="p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shrink-0">
                <Star className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
                  <h3 className="text-2xl font-bold">
                    1:1 Agent Audit & Strategy Session With Todd
                  </h3>
                  <span className="inline-flex items-center gap-1 bg-orange-500/10 text-orange-700 dark:text-orange-300 font-bold px-3 py-1 rounded-full text-sm">
                    Value: $497
                  </span>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Most products hand you a video and wish you luck. This one ends with a real
                  conversation. After you build, you book a private call with Todd. Bring your
                  first workflow. Get a direct review of what's working, what to tighten, what to
                  cut, and what to build next.
                </p>
                <p className="text-sm font-semibold text-orange-700 dark:text-orange-300">
                  This is the part that turns a single agent into a system you can grow, and it's
                  included at no extra cost.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ============ HONEST URGENCY — opportunity cost framing ============ */}
      <section className="pt-12 pb-20 bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="h-4 w-4" />
              Why now, honestly
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              There's no fake countdown here. The real clock is your own.
            </h2>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              We're not going to pretend there are only three seats left or flash a timer that
              resets every time you reload the page. That's insulting, and you'd see through it.
            </p>
            <p>
              The honest urgency is simpler: the cost of waiting is real, and it compounds. Every
              month you keep doing the work by hand is a month of leverage you'll never get back,
              while the people who built their first agent keep pulling further ahead.
            </p>
            <p className="text-foreground font-semibold text-xl">
              A hundred dollars and one afternoon is the smallest bet you'll ever make against
              that gap.
            </p>
            <p>
              And because of the 30-day guarantee below, the only thing you're actually risking is
              the chance to keep doing things the slow way.
            </p>
          </div>

          <div className="text-center mt-10">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg sm:text-xl font-bold px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
              onClick={() => handleCTA("urgency")}
            >
              Get Instant Access $100
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">{ctaSubline}</p>
          </div>
        </div>
      </section>

      {/* ============ GUARANTEE — flip the risk ============ */}
      <section className="pt-16 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Card className="p-8 sm:p-10 bg-gradient-to-br from-blue-500/5 to-card border-2 border-blue-500/30 shadow-xl text-center">
            <div className="mx-auto mb-6 p-4 bg-blue-500/10 rounded-full w-fit">
              <Shield className="h-10 w-10 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Build an agent or get your money back
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Watch the workshop. Use the templates. Try the build. If you don't have at least one
              working Claude agent inside 30 days, email Todd and get a full refund. No forms, no
              hoops.
            </p>
            <p className="text-foreground font-semibold">
              You carry none of the risk. That sits entirely with us, where it belongs.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg sm:text-xl font-bold px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                onClick={() => handleCTA("after_guarantee")}
              >
                Get Instant Access $100
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4">{ctaSubline}</p>
            </div>
          </Card>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="pt-16 pb-20 bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              The questions running through your head right now
            </h2>
            <p className="text-lg text-muted-foreground">
              Straight answers to the things most people ask before they buy.
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

      {/* ============ FINAL CTA ============ */}
      <section className="pt-16 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-lg leading-relaxed text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              You already know which way this goes if nothing changes
            </h2>
            <p className="text-muted-foreground">
              Another month of copying, cleaning, and re-prompting. Another month of watching
              other people ship workflows you keep meaning to build.
            </p>
            <p className="text-foreground font-semibold">
              Or one afternoon, one working agent, and proof that this actually frees up your time.
            </p>
            <p className="text-muted-foreground">
              Buy once. Watch the recording. Build your first agent. Book the 1:1 with Todd to
              tighten it. {totalValue} of value for $100, with a full refund if it doesn't deliver.
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
              <p className="text-sm text-muted-foreground mt-4">{ctaSubline}</p>
            </div>
          </div>
        </div>
      </section>

      <SalesFooter
        headline="Stop Prompting. Start Building."
        subheadline="The workshop recording, the complete Masterclass, the templates, and a 1:1 with Todd. $1,779 of value, yours for $100."
        primaryCTA={{
          text: "Get Instant Access $100",
          url: STRIPE_BUY_LINK,
        }}
        urgency={{
          text: "Every week you wait, the gap widens",
          icon: "clock",
        }}
        guarantee={{
          text: "30-Day Money-Back",
          description:
            "Watch the workshop, use the templates, try the build. If you don't have a working agent inside 30 days, email Todd and get a full refund.",
        }}
        socialProof="Includes a 1:1 audit with Todd"
        trackingContext="Claude Workshop C"
      />
    </div>
  );
};

export default ClaudeWorkshopC;
