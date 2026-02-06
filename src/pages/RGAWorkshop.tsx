import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Star, Users, Sparkles, Brain, Rocket, MessageSquare, Bot, Calendar, Clock, Gift, FileText, Video, Phone, Target, Shield, Zap } from "lucide-react";
import SEO from "@/components/SEO";
import { useState, useEffect } from "react";

const RGAWorkshop = () => {

  const heroContent = {
    badge: "LIVE Workshop",
    headline: "The Invisible to In-Demand™ Workshop",
    subheadline: "Turn your expertise into daily opportunities without hours on LinkedIn",
    description: "The Lead System Built for Experts Who Hate Selling Themselves",
    cta: "Secure My Spot for $50"
  };

  const keyBenefits = [
    {
      icon: Target,
      title: "Daily Lead Checklist",
      description: "The 10-minute daily action plan that keeps leads rolling in"
    },
    {
      icon: MessageSquare,
      title: "Not-Salesy CTAs",
      description: "Make it easy (and natural) for leads to raise their hand"
    },
    {
      icon: FileText,
      title: "Done-for-You Templates",
      description: "Emails, messages, and follow-ups you can copy, paste, and launch"
    },
    {
      icon: Shield,
      title: "LinkedIn Funnel",
      description: "A simple path from cold stranger → ready-to-buy lead without a single post"
    }
  ];

  const workshopTopics = [
    {
      icon: Zap,
      title: "Core Strategy & Systems",
      description: "Build a lead generation system that works without you",
      features: [
        "Your Daily Lead Checklist – The 10-minute daily action plan",
        "The \"Not-Salesy\" CTA Formula – Natural conversion without the pitch",
        "The Tech Leader LinkedIn Funnel – Cold to sold without posting"
      ]
    },
    {
      icon: Brain,
      title: "Profile & Positioning",
      description: "Make your profile work 24/7 to attract ideal clients",
      features: [
        "The Stealth Profile Upgrade – 3 tweaks that pre-sell your offer",
        "The Credibility Shortcut – Show instant trust without saying a word",
        "The Daily Signal System – Become discoverable to best-fit clients"
      ]
    },
    {
      icon: MessageSquare,
      title: "Conversation & Conversion",
      description: "Turn lurkers and viewers into booked calls",
      features: [
        "The Ghostproof Follow-Up – Stay top-of-mind without being needy",
        "From Lurker to Lead – Convert profile views with one message",
        "The \"Talk Track\" Trigger – Spark conversations that convert"
      ]
    }
  ];

  const bonuses = [
    {
      icon: MessageSquare,
      title: "Bonus #1: High-Trust Message Templates",
      description: "Plug-and-play scripts for sparking conversations that convert, without feeling like a cold pitch."
    },
    {
      icon: Shield,
      title: "Bonus #2: LinkedIn Stealth Audit Checklist",
      description: "Make silent but powerful tweaks to your profile that attract the right leads without saying a word."
    },
    {
      icon: Video,
      title: "Bonus #3: Workshop Recording (Lifetime Access)",
      description: "Can't join live? Want to revisit? You'll get the full replay to rewatch any time."
    },
    {
      icon: Target,
      title: "Bonus #4: The \"Inbound Magnet\" Message Swipe File",
      description: "My top-performing messages to convert lurkers and profile viewers into real leads who are ready to talk."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="The Invisible to In-Demand™ Workshop | Technical Leaders"
        description="Turn your expertise into daily opportunities without hours on LinkedIn. Join the lead system built for experts who hate selling themselves."
        keywords={["LinkedIn lead generation", "technical leadership", "expert positioning", "lead generation system", "LinkedIn for consultants"]}
        image="https://technical-leaders.com/ai-in-ar.png"
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
            <Sparkles className="h-4 w-4" />
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

          <p className="text-2xl font-semibold mb-8 max-w-2xl mx-auto">
            {heroContent.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="text-lg px-8"
              onClick={() => {
                window.location.href = 'https://buy.stripe.com/4gw8Ai76B2L99os6oW';
              }}
            >
              <Rocket className="mr-2 h-5 w-5" />
              {heroContent.cta}
            </Button>
          </div>

          {/* Workshop Details Card */}
          <Card className="p-8 bg-background/50 backdrop-blur border border-white/10 shadow-xl max-w-3xl mx-auto">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Workshop Details</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-3">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Format</h3>
                  <p className="text-muted-foreground">LIVE, hands-on workshop</p>
                </div>
                <div className="space-y-2">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-3">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Date & Time</h3>
                  <p className="text-muted-foreground">Monday, August 4<br/>10:00 AM CST</p>
                </div>
                <div className="space-y-2">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Investment</h3>
                  <p className="text-2xl font-bold text-primary">$50 USD</p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-primary/20">
                <p className="text-sm text-muted-foreground italic">
                  Replay included (yours for life). Can't join live? No problem.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Why This Workshop Matters
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>You're brilliant at what you do.</p>
              <p className="font-semibold">But somehow… your calendar is empty.</p>
              <p>You post occasionally. You comment. You've tried being "consistent."</p>
              <p className="text-2xl font-bold text-foreground">Still? Crickets.</p>
              <p>It's not that your offer is weak. It's that you're running a system built for attention-seekers, not quiet experts.</p>
              <p className="text-xl font-semibold text-foreground mt-6">The good news?</p>
              <p className="text-2xl font-bold text-primary">You don't need to play the game.</p>
              <p>You just need a simple, consistent way to attract the right leads, without posting daily, pitching cold, or burning out.</p>
              <p className="text-xl font-semibold text-foreground mt-6">In this workshop, I'll walk you through the exact system I use to generate daily inbound leads without selling myself.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {keyBenefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Here's What We'll Cover
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build a lead system that runs without you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workshopTopics.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
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

          {/* Additional Topics */}
          <Card className="mt-8 p-6 bg-muted/50">
            <h3 className="text-lg font-semibold mb-4">Plus These Critical Elements:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">What to STOP Doing – The 3 daily habits silently killing your visibility</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">The No-Funnel Lead Magnet Swap – What works better for experts</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Gift className="h-4 w-4" />
              Workshop Bonuses
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              You'll Also Get These Bonuses
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to implement immediately
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <bonus.icon className="h-6 w-6 text-primary" />
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

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Stop Chasing and Start Attracting?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Hate selling yourself? This system does the heavy lifting. Grab your seat now.
          </p>
          <Button
            size="lg"
            className="text-lg px-8"
            onClick={() => {
              window.location.href = 'https://buy.stripe.com/4gw8Ai76B2L99os6oW';
            }}
          >
            <Rocket className="mr-2 h-5 w-5" />
            Secure My Spot for $50
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RGAWorkshop;