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
  Users,
  GraduationCap,
  ShieldCheck,
  Quote,
  Clock,
  Lock,
  BadgeCheck,
} from "lucide-react";
import SEO from "@/components/SEO";
import { trackEvent } from "@/utils/posthog";

const STRIPE_BUY_LINK = "https://buy.stripe.com/4gM14nh1T1kb3nA4F6aMU0O";

/**
 * Variant B — "Authority & social-proof led / risk-reversal".
 *
 * Same offer as the canonical /claude-workshop page (same $100 price, same
 * $1,779 value stack, same Stripe link, same 30-day guarantee, same Todd 1:1
 * bonus, same curriculum / bonuses / FAQ copy). The ONLY thing that differs is
 * the conversion strategy: lead with credibility and proof, then desire, then
 * make the buy feel risk-free.
 *
 * SEO: this is a marketing variant of an existing canonical page. The shared
 * SEO component does not expose a `noindex` prop, so we point the canonical at
 * `/claude-workshop` to avoid competing with the original in search.
 */
const ClaudeWorkshopB = () => {
  useEffect(() => {
    trackEvent("Claude Workshop B Page Viewed", { variant: "claude-workshop-b" });
  }, []);

  const handleCTA = (location: string) => {
    trackEvent("Claude Workshop B CTA Clicked", {
      location,
      variant: "claude-workshop-b",
    });
    window.open(STRIPE_BUY_LINK, "_blank");
  };

  const handleFAQOpen = (question: string) => {
    trackEvent("Claude Workshop B FAQ Expanded", {
      question,
      variant: "claude-workshop-b",
    });
  };

  // Why Todd is qualified to teach this. Qualitative, defensible framing only —
  // no invented metrics or named customers.
  const credibilityPoints = [
    {
      icon: Wrench,
      title: "He builds these for real businesses",
      description:
        "Todd isn't teaching theory. He designs and ships Claude agent workflows for actual business tasks, then teaches the exact same build process he uses himself.",
    },
    {
      icon: Users,
      title: "He teaches non-coders, not engineers",
      description:
        "The whole method is built for business operators and leaders who don't write code. If you can describe a process clearly, you can follow along.",
    },
    {
      icon: Target,
      title: "He focuses on one working outcome",
      description:
        "No theory dump. The session is structured so you finish with one real workflow running, not a folder full of notes you never use.",
    },
  ];

  // From the live session — illustrative attendee actions reused from the
  // canonical page.
  // TODO: replace with real, attributed buyer testimonials from the first
  // 10-20 purchasers once collected. These are illustrative session moments,
  // NOT verified customer quotes — do not present them as testimonials with
  // invented names, results, or metrics.
  const sessionMoments = [
    {
      icon: Rocket,
      title: "A working agent, shipped live",
      quote:
        "Joe built and installed a working Claude agent skill before the session ended.",
      attribution: "From the live workshop",
    },
    {
      icon: Lightbulb,
      title: "Feedback shaping the build",
      quote:
        "Alice's feedback was incorporated into the prioritization framework on the spot.",
      attribution: "From the live workshop",
    },
    {
      icon: MessageSquare,
      title: "Real questions, answered live",
      quote:
        "Attendees asked about workflows, privacy, model selection, and platform integration. Every question was answered live and is included in the recording.",
      attribution: "From the live Q&A",
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

  // $497 + $297 + $197 + $97 + $147 + $47 (stack) + $497 (marquee) = $1,779.
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
        title="The Claude Agent Workshop | Trusted by Business Leaders Building Their First AI Agent"
        description="Join the business leaders learning to build a working Claude AI agent workflow without code. Taught by Todd, with a 1:1 audit included and a 30-day money-back guarantee. Instant access for $100."
        keywords={[
          "Claude workshop recording",
          "Claude agent workshop",
          "AI agent for business leaders",
          "Claude AI",
          "AI workflow",
          "no-code AI",
          "business automation",
          "Claude agent",
          "AI for business",
        ]}
        // Point the canonical at the original page so this variant does not
        // compete with it in search (SEO has no `noindex` prop).
        url="https://technical-leaders.com/claude-workshop"
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

      {/* Hero — authority + social-proof framing */}
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
            <BadgeCheck className="h-4 w-4" />
            Taught by Todd · 1:1 audit included · 30-day guarantee
          </div>

          <h1 className="font-bold tracking-tight mb-6">
            <div className="text-3xl sm:text-4xl lg:text-5xl mb-2">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Join the business leaders building
              </span>
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                their first working AI agent
              </span>
            </div>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            The Claude Agent Workshop is a proven, no-code build session for non-coder operators. Follow Todd through a real build and finish with one workflow running inside your business.
          </p>

          {/* Trust row directly under the headline */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 bg-card/70 backdrop-blur border border-border px-4 py-2 rounded-full text-sm font-medium">
              <ShieldCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
              30-day money-back guarantee
            </span>
            <span className="inline-flex items-center gap-2 bg-card/70 backdrop-blur border border-border px-4 py-2 rounded-full text-sm font-medium">
              <Star className="h-4 w-4 text-orange-500" />
              Includes a private 1:1 with Todd
            </span>
            <span className="inline-flex items-center gap-2 bg-card/70 backdrop-blur border border-border px-4 py-2 rounded-full text-sm font-medium">
              <Lock className="h-4 w-4 text-primary" />
              Secure Stripe checkout
            </span>
          </div>

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

      {/* Instructor Credibility Block */}
      <section className="pt-16 pb-20 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <GraduationCap className="h-4 w-4" />
              Who's Teaching This
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why learn this from Todd
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The reason most "AI for business" content falls flat is that it's taught by people who don't actually build for real businesses. This is the opposite.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {credibilityPoints.map((point) => (
              <Card
                key={point.title}
                className="p-6 hover:shadow-lg transition-all duration-300 bg-card/80 backdrop-blur"
              >
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <point.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* From the Live Session — proof placed high */}
      <section className="pt-16 pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="h-4 w-4" aria-hidden="true" />
              From the Live Session
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What actually happened in the room
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real builds, real feedback, real Q&amp;A. All of it lives in the recording you get.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {sessionMoments.map((moment) => (
              <Card
                key={moment.title}
                className="relative p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <moment.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{moment.title}</h3>
                <p className="text-muted-foreground leading-relaxed italic">
                  "{moment.quote}"
                </p>
                <p className="mt-4 text-sm font-semibold text-primary">
                  {moment.attribution}
                </p>
              </Card>
            ))}
          </div>

          {/* These are illustrative moments from the live session, flagged so the
              page never presents them as verified, attributed customer reviews. */}
          <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
            These are real moments from the live session, shared to show how the build goes. Verified buyer reviews will be added here as purchasers share them.
          </p>
        </div>
      </section>

      {/* Outcomes / Solution — desire after proof */}
      <section className="pt-12 pb-20 bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What you'll walk away with
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-muted-foreground">
              You don't need to write code to make this useful. You need a clear job to automate, a simple workflow, and the right structure inside Claude.
            </p>
            <p className="text-foreground font-semibold text-xl">
              By the end of the workshop, you'll have at least one custom Claude AI agent workflow built for work that actually matters.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Pick a real, high-value task from your day-to-day work.",
                "Map the steps and build the logic, guided by Todd.",
                "Use proven templates instead of starting from a blank page.",
                "Finish with one working agent, then tighten it in your 1:1.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
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

      {/* Strong Risk-Reversal Section */}
      <section className="pt-16 pb-20 bg-gradient-to-br from-blue-500/10 to-primary/5 border-y border-blue-500/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ShieldCheck className="h-4 w-4" />
              The Risk Is On Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              You either build a working agent, or you don't pay
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here's exactly what happens if it turns out not to be for you. No fine print, no hoops.
            </p>
          </div>

          <Card className="p-8 bg-card/90 backdrop-blur border-2 border-blue-500/30 shadow-xl mb-8">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-primary rounded-xl shrink-0">
                <ShieldCheck className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">
                  Your 30-day money-back guarantee
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Watch the full workshop. Use the templates. Sit down and try the build with Todd. If you don't have at least one working Claude agent inside 30 days, email Todd and you get a full refund. You keep what you learned either way.
                </p>
                <p className="text-foreground font-semibold">
                  That means the only way this costs you anything is if it actually works.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: MessageSquare,
                title: "Step 1 — Email Todd",
                description:
                  "Within 30 days of buying, send one email saying it wasn't for you. No questionnaire, no call required.",
              },
              {
                icon: Clock,
                title: "Step 2 — Get refunded",
                description:
                  "Your $100 is returned in full through the same Stripe checkout you paid with.",
              },
              {
                icon: Gift,
                title: "Step 3 — Keep the value",
                description:
                  "Anything you learned or built in the meantime is yours. The downside is genuinely zero.",
              },
            ].map((step) => (
              <Card key={step.title} className="p-6 bg-card/80 backdrop-blur">
                <div className="p-3 bg-blue-500/10 rounded-lg w-fit mb-4">
                  <step.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Stack — framing after the risk is removed */}
      <section className="pt-12 pb-20 bg-gradient-to-br from-primary/10 to-primary/5 border-b border-primary/20">
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
                $100{" "}
                <span className="text-lg font-normal text-muted-foreground">
                  USD
                </span>
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

      {/* Final CTA Section */}
      <section className="pt-16 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-lg leading-relaxed text-center">
            <p className="text-xl font-semibold text-foreground">
              Credible teacher. Real proof. Zero downside.
            </p>
            <p className="text-muted-foreground">
              You've seen who's teaching it, what happened in the room, and exactly what happens if it's not for you. There's nothing left to risk.
            </p>
            <p className="text-foreground font-semibold">
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
        trackingContext="Claude Workshop B"
      />
    </div>
  );
};

export default ClaudeWorkshopB;
