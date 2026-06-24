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
  ArrowRight,
  CheckCircle2,
  Clock,
  Shield,
  Star,
  Target,
  Wrench,
  Play,
  Rocket,
  FileText,
  Mail,
  Calendar,
  Search,
  ClipboardList,
} from "lucide-react";
import SEO from "@/components/SEO";
import { trackEvent } from "@/utils/posthog";

const STRIPE_BUY_LINK = "https://buy.stripe.com/4gM14nh1T1kb3nA4F6aMU0O";

const ClaudeWorkshopA = () => {
  useEffect(() => {
    trackEvent("Claude Workshop A Page Viewed", { variant: "claude-workshop-a" });
  }, []);

  const handleCTA = (location: string) => {
    trackEvent("Claude Workshop A CTA Clicked", {
      location,
      variant: "claude-workshop-a",
    });
    window.open(STRIPE_BUY_LINK, "_blank");
  };

  const handleFAQOpen = (question: string) => {
    trackEvent("Claude Workshop A FAQ Expanded", {
      question,
      variant: "claude-workshop-a",
    });
  };

  // Concrete "what you'll have built by Friday" outcomes — tangible, not topics.
  const builtByFriday = [
    {
      icon: Search,
      title: "A research agent that does the digging",
      description:
        "Hand it a topic, a company, or a question. It comes back with a clean, structured brief instead of a wall of text you have to re-read.",
    },
    {
      icon: FileText,
      title: "A drafting agent that writes in your voice",
      description:
        "Turn rough notes into a finished first draft — emails, summaries, proposals — built on a workflow you can run again tomorrow.",
    },
    {
      icon: ClipboardList,
      title: "A repeatable workflow your team can reuse",
      description:
        "Not a one-off prompt. A documented agent with inputs, steps, and outputs you can hand off and trust to run the same way every time.",
    },
  ];

  // 3-step path to the outcome.
  const steps = [
    {
      step: 1,
      icon: Target,
      title: "Pick one real task",
      description:
        "Choose the task that's quietly eating your week. Todd helps you spot the one with the highest payoff for your first build.",
    },
    {
      step: 2,
      icon: Wrench,
      title: "Build it with Todd, no code",
      description:
        "Follow the 90-minute build along, screen-to-screen. Map the steps, drop in a starter template, wire up the logic in plain language.",
    },
    {
      step: 3,
      icon: Rocket,
      title: "Ship it and book your 1:1",
      description:
        "Run your agent on real work before you close the tab. Then book a private audit with Todd to tighten it and decide what to build next.",
    },
  ];

  // Curriculum reframed as results, not topics.
  const outcomes = [
    {
      icon: CheckCircle2,
      title: "You'll know exactly which task to automate first",
      description:
        "No more guessing. You'll pick the use case that clears the biggest bottleneck instead of building something no one uses.",
    },
    {
      icon: CheckCircle2,
      title: "You'll turn a messy task into a clean workflow",
      description:
        "The no-code build formula that breaks any business task into inputs, instructions, steps, and outputs Claude can run.",
    },
    {
      icon: CheckCircle2,
      title: "You'll stop writing longer prompts",
      description:
        "Design workflows that think in sequence instead of re-prompting all day — and get outputs you don't have to fix afterward.",
    },
    {
      icon: CheckCircle2,
      title: "You'll have templates you can steal",
      description:
        "Plug-and-play starter frameworks and worked examples so you're never building your next agent from a blank page.",
    },
    {
      icon: CheckCircle2,
      title: "You'll dodge the 5 mistakes that break most agents",
      description:
        "Skip the overcomplicated builds and messy outputs that make people give up on AI workflows.",
    },
    {
      icon: CheckCircle2,
      title: "You'll walk away with one working agent",
      description:
        "By the end, you'll have at least one custom Claude workflow running on a real task inside your business.",
    },
  ];

  const faqs = [
    {
      q: "Do I need to know how to code?",
      a: "No. The whole point is to build a working Claude agent without writing code. If you can write a clear set of instructions, you have what you need.",
    },
    {
      q: "How long until I actually have something built?",
      a: "The build session is about 90 minutes, and you build along with it. Most people have their first working agent the same day they sit down with the recording.",
    },
    {
      q: "What software do I need?",
      a: "A Claude account is enough to follow along. Free or paid plans both work for the core build. No extra software is required to ship your first agent.",
    },
    {
      q: "Will this work for a service business?",
      a: "Yes. The examples cover research, content, summaries, planning, and internal ops, which apply to service businesses as much as product ones. The build formula is the same either way.",
    },
    {
      q: "What's the 1:1 with Todd?",
      a: "After you build, you book a private session. Bring your first agent, get a direct review of what to tighten, cut, or build next. It's the part that turns a single agent into a system.",
    },
    {
      q: "What if I don't build a working agent?",
      a: "You're covered by a 30-day money-back guarantee. Watch the workshop, try the build, use the templates. If you don't have a working agent inside 30 days, email Todd for a full refund.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Build a Working Claude Agent This Week — No Code | Technical Leaders"
        description="Sit down for one afternoon and walk away with a working Claude AI agent running on a real task in your business. No code. Includes a 1:1 audit with Todd. $100."
        keywords={[
          "build Claude agent",
          "no-code AI agent",
          "Claude AI workflow",
          "AI agent for business",
          "Claude workshop",
          "AI automation no code",
        ]}
        // SEO: this is an A/B variant of /claude-workshop. The SEO component hardcodes
        // robots="index, follow" (no noindex prop), so we point the canonical at the
        // primary page to avoid competing with it for the same intent.
        url="https://technical-leaders.com/claude-workshop"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "The Claude Agent Workshop",
          "description":
            "Build a working Claude AI agent workflow without code in a single afternoon. Includes the workshop recording, the complete Claude Masterclass, starter templates, and a 1:1 strategy session with Todd.",
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

      {/* Hero: sharp promise + dominant CTA + proof strip */}
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
            <Play className="h-4 w-4" />
            Build-along workshop + 1:1 with Todd
          </div>

          <h1 className="font-bold tracking-tight mb-6 text-4xl sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Build a working Claude agent this week. No code.
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Sit down for one afternoon. Walk away with a real AI agent running on a real task in your business — built with you, step by step.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg sm:text-xl font-bold px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            onClick={() => handleCTA("hero")}
          >
            Build my first agent — $100
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-sm text-muted-foreground mt-4">
            Instant access · Includes 1:1 audit with Todd · 30-day money-back
          </p>

          {/* Proof strip */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm font-medium text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              Working agent in ~90 minutes
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Zero code required
            </span>
            <span className="inline-flex items-center gap-2">
              <Star className="h-4 w-4 text-primary" />
              1:1 audit with Todd included
            </span>
          </div>
        </div>
      </section>

      {/* What you'll have built by Friday — concrete outcome showcase */}
      <section className="pt-16 pb-20 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Rocket className="h-4 w-4" />
              By the end of the week
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Here's what you'll have actually built
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Not theory. Not a certificate. Real agents doing real work the day you sit down.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {builtByFriday.map((item) => (
              <Card
                key={item.title}
                className="p-6 hover:shadow-lg transition-all duration-300 bg-card/80 backdrop-blur"
              >
                <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg w-fit mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg sm:text-xl font-bold px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
              onClick={() => handleCTA("after_outcomes")}
            >
              Build my first agent — $100
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* How you get there — 3 steps */}
      <section className="pt-16 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle2 className="h-4 w-4" />
              How you get there
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Three steps from buy to working agent
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {steps.map((item) => (
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

      {/* Curriculum as outcomes */}
      <section className="pt-16 pb-20 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What you'll walk away able to do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every part of the workshop maps to a result you can use, not a topic you have to remember.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {outcomes.map((item) => (
              <Card
                key={item.title}
                className="p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
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
        </div>
      </section>

      {/* Compact social-proof + guarantee bar */}
      <section className="pt-16 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="p-8 bg-gradient-to-br from-card to-primary/5 border-2 border-primary/20 shadow-xl">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="p-3 bg-primary/10 rounded-lg mb-3">
                  <Play className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Built live, on screen</h3>
                <p className="text-sm text-muted-foreground">
                  In the recorded session, an attendee shipped a working Claude agent before the room wrapped.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-3 bg-primary/10 rounded-lg mb-3">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Personal 1:1 with Todd</h3>
                <p className="text-sm text-muted-foreground">
                  Bring your build, get a direct audit and a clear next step. You can't get this anywhere else.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-3 bg-primary/10 rounded-lg mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">30-day money-back</h3>
                <p className="text-sm text-muted-foreground">
                  No working agent inside 30 days? Email Todd and get a full refund. Simple as that.
                </p>
              </div>
            </div>

            <div className="text-center mt-10 pt-8 border-t border-border">
              <p className="text-lg text-muted-foreground mb-1">
                Everything — recording, Masterclass, templates, and your 1:1
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                <span className="line-through decoration-red-500/60 decoration-2">$1,779 value</span>
              </p>
              <p className="text-5xl font-bold text-primary mb-6">
                $100 <span className="text-base font-normal text-muted-foreground">USD, one time</span>
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg sm:text-xl font-bold px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                onClick={() => handleCTA("guarantee_bar")}
              >
                Build my first agent — $100
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Brief FAQ */}
      <section className="pt-8 pb-20 bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Quick answers
            </h2>
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

      {/* How delivery works — short, removes friction */}
      <section className="pt-8 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-4 text-center text-sm text-muted-foreground">
            <div className="flex flex-col items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <span>Buy and get instant access by email</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Play className="h-5 w-5 text-primary" />
              <span>Build along with the recording today</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>Book your 1:1 audit when you're ready</span>
            </div>
          </div>
        </div>
      </section>

      <SalesFooter
        headline="Build your first working Claude agent this week"
        subheadline="The build-along workshop, the templates, and a 1:1 with Todd. Instant access for $100."
        primaryCTA={{
          text: "Build my first agent — $100",
          url: STRIPE_BUY_LINK,
        }}
        guarantee={{
          text: "30-Day Money-Back",
          description:
            "Watch the workshop, use the templates, try the build. If you don't have a working agent inside 30 days, email Todd and get a full refund.",
        }}
        socialProof="Includes a 1:1 audit with Todd"
        trackingContext="Claude Workshop A"
      />
    </div>
  );
};

export default ClaudeWorkshopA;
