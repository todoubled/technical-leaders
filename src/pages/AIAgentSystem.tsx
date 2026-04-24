import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import SalesFooter from "@/components/footers/SalesFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gift, ArrowRight, Zap, Target, Brain, Rocket, Users, FileText, Workflow, Repeat, AlertTriangle, GitBranch, Wrench, Award, BookOpen, Link2, Calendar, Sparkles, PenTool } from "lucide-react";
import SEO from "@/components/SEO";
import { trackEvent } from "@/utils/posthog";

const WORKSHOP_DATE = new Date("2026-05-01T16:00:00Z"); // 11am CT = 4pm UTC
const STRIPE_BUY_LINK = "https://buy.stripe.com/4gM14nh1T1kb3nA4F6aMU0O";

const useCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
};

const AIAgentSystem = () => {
  const { days, hours, minutes, seconds } = useCountdown(WORKSHOP_DATE);

  const handleCTA = (location: string) => {
    trackEvent("AI Agent System CTA Clicked", { location });
    window.open(STRIPE_BUY_LINK, "_blank");
  };

  const curriculum = [
    {
      icon: Workflow,
      title: "Stop building isolated prompts",
      description: "How to move from scattered prompts to agents that fit into your real workflow",
    },
    {
      icon: Brain,
      title: "Choose the right model for the job",
      description: "How to pick the right model for the task instead of forcing everything through one tool",
    },
    {
      icon: Wrench,
      title: "The no-code agent structure",
      description: "The simple agent structure that makes an agent actually useful in daily work",
    },
    {
      icon: Calendar,
      title: "Agents for the work you already do",
      description: "How to build agents that support project management, email, calendar, writing, research, and follow-up",
    },
    {
      icon: Repeat,
      title: "Turn repeated tasks into agents",
      description: "The easiest way to turn repeated tasks into agents without rebuilding your whole stack",
    },
    {
      icon: Link2,
      title: "Plug into the tools you already use",
      description: "How to make your agents work with the tools and systems you already use",
    },
    {
      icon: Target,
      title: "Prompt vs. agent",
      description: "The difference between a clever prompt and an agent that can handle a real job",
    },
    {
      icon: FileText,
      title: "Cleaner outputs you can actually use",
      description: "How to build cleaner outputs so your agents produce work you can actually use",
    },
    {
      icon: AlertTriangle,
      title: "Avoid the common agent mistakes",
      description: "The common mistakes that make agents feel clunky, slow, or unreliable",
    },
    {
      icon: PenTool,
      title: "Agents for writing, research, and planning",
      description: "How to build agents for writing, research, summaries, and planning without adding more chaos to your day",
    },
    {
      icon: GitBranch,
      title: "Manual, assisted, or agent?",
      description: "The practical framework for deciding what should stay manual, what should be assisted, and what should become an agent",
    },
    {
      icon: Award,
      title: "Leave with working agents",
      description: "How to leave with practical agents built for the work already sitting on your plate",
    },
  ];

  const bonuses = [
    {
      number: 1,
      title: "Claude Agent Starter Templates",
      description: "Ready-to-use templates so you're not building from scratch.",
    },
    {
      number: 2,
      title: "Prompt-to-Workflow Cheat Sheet",
      description: "A fast guide to turn one-off prompts into repeatable agent workflows.",
    },
    {
      number: 3,
      title: "Agent Build Examples",
      description: "Real examples you can copy, adapt, and use as shortcuts.",
    },
    {
      number: 4,
      title: "Workshop Recording",
      description: "Lifetime access so you can rewatch, rebuild, and tighten your system anytime.",
    },
    {
      number: 5,
      title: "Agent Audit and Strategy Session",
      description: "Bring your first agent system and get feedback on what to tighten, simplify, or build next.",
    },
    {
      number: 6,
      title: "Free Longhand Access",
      description: "Early access to Longhand, the no-code tool for running AI workflows on your real work. Any model, any tool, free forever — so the agents you build in the workshop have somewhere to live.",
    },
  ];

  const timeZones = [
    { zone: "Eastern", time: "12:00 PM", day: "Friday, May 1" },
    { zone: "Central", time: "11:00 AM", day: "Friday, May 1" },
    { zone: "Mountain", time: "10:00 AM", day: "Friday, May 1" },
    { zone: "Pacific", time: "9:00 AM", day: "Friday, May 1" },
    { zone: "London", time: "5:00 PM", day: "Friday, May 1" },
  ];

  const workAreas = [
    "Project management",
    "Calendar",
    "Email",
    "Social media",
    "Writing",
    "Research",
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="The AI Agent System™ | Build No-Code AI Agents That Work With Any Model"
        description="Join a live, hands-on workshop where you'll build practical no-code AI agents that work with any model, any tool, and the systems you already use."
        keywords={["AI agents", "AI agent workshop", "no-code AI", "AI workflow", "AI automation", "personal AI system", "AI for business"]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Event",
          "name": "The AI Agent System™",
          "startDate": "2026-05-01T16:00:00Z",
          "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "offers": {
            "@type": "Offer",
            "price": "100",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
          },
          "description": "Build practical no-code AI agents that work with any model, any tool, and the systems you already use. Live, hands-on workshop.",
          "organizer": {
            "@type": "Organization",
            "name": "Technical Leaders",
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
          {/* Countdown */}
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Workshop starts in...</p>
          <div className="flex justify-center gap-3 sm:gap-4 mb-8">
            {[
              { label: "Days", value: days },
              { label: "Hours", value: hours },
              { label: "Min", value: minutes },
              { label: "Sec", value: seconds },
            ].map((unit) => (
              <div key={unit.label} className="flex flex-col items-center">
                <div className="bg-primary/10 border border-primary/20 rounded-lg w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-bold text-primary">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground mt-1">{unit.label}</span>
              </div>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            LIVE Workshop
          </div>

          <h1 className="font-bold tracking-tight mb-6">
            <div className="text-2xl sm:text-3xl lg:text-4xl mb-2">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                The
              </span>
            </div>
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-2">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                AI Agent System™
              </span>
            </div>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            How to Build AI Agents That Work With Any Model, Any Tool, and the Systems You Already Use
          </p>

          <p className="text-lg mb-8 max-w-2xl mx-auto">
            In this live workshop, you'll build practical no-code agents that plug into the tools you already use for project management, calendar, email, social media, writing, research, and daily work.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg sm:text-xl font-bold px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            onClick={() => handleCTA("hero")}
          >
            Join The AI Agent System™
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="pt-16 pb-10 sm:pb-20 bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            AI is helping... but your workflow is still a mess
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>Right now, most people are using AI in disconnected little bursts.</p>
            <p>A prompt here.</p>
            <p>A rewrite there.</p>
            <p>A summary in one tab.</p>
            <p>A draft in another.</p>
            <div className="space-y-2">
              <p>Then back to your inbox.</p>
              <p>Back to your calendar.</p>
              <p>Back to your project manager.</p>
              <p>Back to your notes.</p>
              <p>Back to the work.</p>
            </div>
            <p>So even when AI helps, you still end up being the glue holding everything together.</p>
            <p className="text-foreground font-semibold text-xl">
              That's the problem.
            </p>
            <p>Not that the models are bad.</p>
            <p>Not that the tools are useless.</p>
            <p>
              It's that most people are still using AI as a scattered add-on instead of building agents that work with the systems they already use.
            </p>
            <p>And once they hear "AI agents," things start sounding complicated fast.</p>
            <div className="space-y-2">
              <p>Too technical.</p>
              <p>Too many tools.</p>
              <p>Too much setup.</p>
              <p>Too much risk of building something clever that doesn't actually help in real life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="pt-10 sm:pt-16 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-muted-foreground">
              The good news is you don't need code, a giant tech stack, or a complicated automation project.
            </p>
            <p className="text-foreground font-semibold text-xl">
              You need a simple system.
            </p>
            <p className="text-muted-foreground">
              In The AI Agent System™, I'll show you how to build practical no-code agents that work with any model, any tool, and the systems you already use.
            </p>
            <p className="text-muted-foreground">
              We'll take the work already sitting on your plate and turn it into agents that support your real workflow.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-8">
              {workAreas.map((area) => (
                <Card key={area} className="px-4 py-3 text-center bg-secondary/50">
                  <p className="font-medium">{area}</p>
                </Card>
              ))}
            </div>

            <div className="mt-10 space-y-4 text-lg text-muted-foreground">
              <p>First, we'll map the work.</p>
              <p>Next, we'll choose the right structure.</p>
              <p>Then we'll build practical agents that fit into the way you already operate.</p>
            </div>

            <p className="text-foreground font-semibold text-xl mt-8">
              Before we wrap up, you'll have working agents you can actually use.
            </p>
          </div>
        </div>
      </section>

      {/* Live Workshop Banner */}
      <section className="pt-12 pb-16 bg-gradient-to-br from-primary/10 to-primary/5 border-y border-primary/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="h-4 w-4" />
            Hands-On Session
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            This is a LIVE, hands-on workshop
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            This is a workshop, not a fluffy masterclass. Be ready to build.
          </p>

          <p className="text-lg font-medium mb-8">Here's when it's happening:</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {timeZones.map((tz) => (
              <Card key={tz.zone} className="p-4 text-center">
                <p className="text-sm text-muted-foreground font-medium mb-1">{tz.zone}</p>
                <p className="text-2xl font-bold text-primary">{tz.time}</p>
                <p className="text-sm text-muted-foreground">{tz.day}</p>
              </Card>
            ))}
          </div>

          <Card className="mt-8 p-6 max-w-xl mx-auto bg-secondary/50">
            <p className="text-lg font-semibold mb-2">Can't make it live?</p>
            <p className="text-muted-foreground">
              No problem. You'll still get the recording, bonuses, and notes so you can build at your own pace.
            </p>
          </Card>

          <div className="mt-10">
            <p className="text-sm text-muted-foreground mb-2">Investment:</p>
            <p className="text-5xl font-bold text-primary">$100 <span className="text-lg font-normal text-muted-foreground">USD</span></p>
          </div>

          <div className="mt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg sm:text-xl font-bold px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
              onClick={() => handleCTA("price")}
            >
              Join The AI Agent System™
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
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
              Here's What We'll Cover
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {curriculum.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
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
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="pt-16 pb-20 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Gift className="h-4 w-4" />
              Included Bonuses
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              When you register, you'll also get these bonuses
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {bonuses.map((bonus) => (
              <Card key={bonus.number} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center shrink-0 font-bold">
                    {bonus.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{bonus.title}</h3>
                    <p className="text-muted-foreground">{bonus.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="pt-16 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-lg leading-relaxed text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Stop using AI in disconnected pieces
            </h2>
            <p className="text-muted-foreground">
              This is your chance to build agents that actually fit the way you already work.
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p>No code.</p>
              <p>No complicated setup.</p>
              <p>No need to rip out your existing tools and start over.</p>
            </div>
            <p className="text-foreground font-semibold">
              Just practical no-code agents that work with the models, tools, and systems you already use.
            </p>
            <p className="text-muted-foreground">
              Join The AI Agent System™ and build something useful in one live session.
            </p>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg sm:text-xl font-bold px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                onClick={() => handleCTA("final_cta")}
              >
                Join The AI Agent System™
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SalesFooter
        headline="Join The AI Agent System™"
        subheadline="One live session. Working agents. No code required."
        primaryCTA={{
          text: "Join The AI Agent System™ — $100",
          url: STRIPE_BUY_LINK,
        }}
        guarantee={{
          text: "Recording included",
          description: "Can't make it live? You'll get the full recording plus all bonuses.",
        }}
        socialProof="Build practical no-code AI agents that work with the tools you already use"
        trackingContext="AI Agent System"
      />
    </div>
  );
};

export default AIAgentSystem;
