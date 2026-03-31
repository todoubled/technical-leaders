import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import SalesFooter from "@/components/footers/SalesFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, Gift, ArrowRight, Zap, Target, Brain, Rocket, Users, FileText, Video, MessageSquare, Shield, Sparkles, Play, BookOpen, Lightbulb, Repeat, AlertTriangle, BarChart3, Wrench, Award } from "lucide-react";
import SEO from "@/components/SEO";
import { trackEvent } from "@/utils/posthog";

const WORKSHOP_DATE = new Date("2026-04-03T16:00:00Z"); // 12pm ET = 4pm UTC
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

const ClaudeWorkshop = () => {
  const { days, hours, minutes, seconds } = useCountdown(WORKSHOP_DATE);

  const handleCTA = (location: string) => {
    trackEvent("Claude Workshop CTA Clicked", { location });
    window.open(STRIPE_BUY_LINK, "_blank");
  };

  const curriculum = [
    {
      icon: Lightbulb,
      title: "The Shift From Prompting to Workflows",
      description: "Why one-off prompts keep you stuck doing the work yourself, and what changes when Claude starts running a real process",
    },
    {
      icon: Wrench,
      title: "The No-Code Agent Build Formula",
      description: "The simple structure to turn a messy business task into a clean Claude workflow without touching code",
    },
    {
      icon: Target,
      title: "Pick the Right First Use Case",
      description: "How to choose the one task that saves the most time, creates the most leverage, or clears the biggest bottleneck",
    },
    {
      icon: Brain,
      title: "The Anatomy of a Claude Agent",
      description: "The exact parts that make a workflow useful: inputs, instructions, logic, steps, outputs, and handoffs",
    },
    {
      icon: Play,
      title: "Build Your First Agent Live",
      description: "Watch a real workflow come together step by step so you can copy the process into your own business fast",
    },
    {
      icon: Repeat,
      title: "Turn Repeated Work Into a Repeatable System",
      description: "How to take tasks your team keeps doing manually and turn them into a workflow Claude can run the same way every time",
    },
    {
      icon: Zap,
      title: "The Prompt-to-Process Upgrade",
      description: "How to stop writing longer prompts and start designing workflows that think in sequence",
    },
    {
      icon: FileText,
      title: "Templates You Can Steal",
      description: "The starter frameworks and build templates that make your first Claude agent easier to create and easier to trust",
    },
    {
      icon: AlertTriangle,
      title: "Avoid the 5 Mistakes That Break Most AI Workflows",
      description: "Where people overcomplicate agents, create messy outputs, or build something no one actually uses",
    },
    {
      icon: BarChart3,
      title: "Make Claude Produce Outputs You Can Use",
      description: "How to get cleaner drafts, better structure, and more reliable outputs that don't need so much fixing after the fact",
    },
    {
      icon: Rocket,
      title: "Build for Real Business Tasks, Not Demos",
      description: "How to create agents for work that actually matters, like research, content, summaries, planning, decision support, and internal ops",
    },
    {
      icon: Award,
      title: "Leave With One Working Agent",
      description: "By the end of the session, you'll have at least one custom Claude workflow built for a real task inside your business",
    },
  ];

  const bonuses = [
    {
      number: 1,
      title: "Claude Agent Starter Templates",
      description: "Ready-to-use templates so you're not building from a blank page.",
    },
    {
      number: 2,
      title: "Prompt-to-Workflow Cheat Sheet",
      description: "A fast guide that shows you how to turn a one-off prompt into a repeatable workflow.",
    },
    {
      number: 3,
      title: "Agent Build Examples",
      description: "Real examples you can copy, adapt, and use as shortcuts.",
    },
    {
      number: 4,
      title: "Workshop Recording",
      description: "Lifetime access so you can rewatch, rebuild, and tighten your workflow at your own pace.",
    },
    {
      number: 5,
      title: "Live Q&A Replay Notes",
      description: "A clean summary of the best questions, answers, and build decisions from the session.",
    },
    {
      number: 6,
      title: "Agent Audit and Strategy Session",
      description: "Bring your first workflow and get clear direction on what to tighten, what to simplify, and what to build next.",
    },
  ];

  const timeZones = [
    { zone: "Eastern", time: "12:00 PM", day: "Friday, April 3" },
    { zone: "Central", time: "11:00 AM", day: "Friday, April 3" },
    { zone: "Mountain", time: "10:00 AM", day: "Friday, April 3" },
    { zone: "Pacific", time: "9:00 AM", day: "Friday, April 3" },
    { zone: "London", time: "5:00 PM", day: "Friday, April 3" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="The Claude Agent Workshop™ | Build Custom AI Workflows Without Code"
        description="Join a live, hands-on workshop where you'll build a custom Claude AI agent workflow for your business. No coding required. Walk away with a working agent."
        keywords={["Claude workshop", "AI agent", "Claude AI", "AI workflow", "no-code AI", "business automation", "Claude agent", "AI for business"]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Event",
          "name": "The Claude Agent Workshop™",
          "startDate": "2025-04-03T16:00:00Z",
          "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "offers": {
            "@type": "Offer",
            "price": "100",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
          },
          "description": "Build custom Claude AI agent workflows without writing code. Live, hands-on workshop.",
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
                Claude Agent Workshop™
              </span>
            </div>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            How to Stop Prompting and Build Custom Claude AI Agent Workflows Without Writing a Single Line of Code
          </p>

          <p className="text-lg mb-8 max-w-2xl mx-auto">
            In one live session, you'll map a real business task, build the workflow inside Claude, and leave with at least one working agent you can use in your business right away.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg sm:text-xl font-bold px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            onClick={() => handleCTA("hero")}
          >
            Join The Claude Agent Workshop™
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="pt-16 pb-20 bg-secondary/30">
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
      <section className="pt-16 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-muted-foreground">
              The good news is you do not need to write code to make this useful.
            </p>
            <p className="text-foreground font-semibold text-xl">
              You need a clear job to automate, a simple workflow, and the right structure inside Claude.
            </p>
            <p className="text-muted-foreground">That's what we'll do in this workshop.</p>

            <div className="mt-10 space-y-4 text-lg text-muted-foreground">
              <p>You'll pick a real, high-value task from your (or your team's) daily work.</p>
              <p>We'll map the steps.</p>
              <p>Build the logic.</p>
              <p>Use proven templates.</p>
              <p>Work through a live build.</p>
            </div>

            <p className="text-foreground font-semibold text-xl mt-8">
              And before we finish, you'll have at least one custom Claude AI agent workflow built for work that actually matters.
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
            Be ready to build, not just watch.
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
              You'll still get the workshop recording, the bonuses, and the notes so you can build it on your own time.
            </p>
          </Card>

          <div className="mt-10">
            <p className="text-sm text-muted-foreground mb-2">Investment:</p>
            <p className="text-5xl font-bold text-primary">$100 <span className="text-lg font-normal text-muted-foreground">USD</span></p>
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
            <p className="text-xl font-semibold text-foreground">
              This is your chance to go from random prompting to a real working workflow in one session.
            </p>
            <p className="text-muted-foreground">
              If you've been hearing about AI agents, circling the idea, and still haven't built one, this is the room.
            </p>
            <p className="text-muted-foreground">You do not need more theory.</p>
            <p className="text-foreground font-semibold">
              You need one real workflow that saves time and proves this can work in your business.
            </p>
            <p className="text-muted-foreground">
              Join us live on April 3 and build it with us.
            </p>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg sm:text-xl font-bold px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                onClick={() => handleCTA("final_cta")}
              >
                Join The Claude Agent Workshop™
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SalesFooter
        headline="Join The Claude Agent Workshop™"
        subheadline="One live session. One working workflow. No code required."
        primaryCTA={{
          text: "Join The Claude Agent Workshop™ — $100",
          url: STRIPE_BUY_LINK,
        }}
        guarantee={{
          text: "Recording included",
          description: "Can't make it live? You'll get the full recording plus all bonuses.",
        }}
        socialProof="Build your first Claude AI agent workflow"
        trackingContext="Claude Workshop"
      />
    </div>
  );
};

export default ClaudeWorkshop;
