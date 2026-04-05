import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import ContentFooter from "@/components/footers/ContentFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Rocket, Target, Users, Sparkles, ChevronRight, Copy, Check, Zap, CheckCircle2, Star, MessageCircle, Calendar } from "lucide-react";
import SEO from "@/components/SEO";
import { trackEvent } from "@/utils/posthog";

const getNextWednesday = () => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  let daysUntilWednesday = (3 - dayOfWeek + 7) % 7;
  if (daysUntilWednesday === 0) {
    daysUntilWednesday = 7;
  }
  const nextWednesday = new Date(now);
  nextWednesday.setDate(now.getDate() + daysUntilWednesday);
  return nextWednesday;
};

const formatEventDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};

const LKOfficeHours = () => {
  const [copied, setCopied] = useState(false);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const nextSessionDate = getNextWednesday();
  const formattedDate = formatEventDate(nextSessionDate);

  useEffect(() => {
    if (!formContainerRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://techleaders.kit.com/e106e60ec5/index.js';
    script.async = true;
    script.setAttribute('data-uid', 'e106e60ec5');
    formContainerRef.current.appendChild(script);

    return () => {
      if (formContainerRef.current) {
        formContainerRef.current.innerHTML = '';
      }
    };
  }, []);

  const benefits = [
    {
      icon: Target,
      title: "Clarify Your Offer",
      description: "Nail exactly what you're selling, how it's priced, and who it's for—so you can sell with confidence and integrity from day one"
    },
    {
      icon: CheckCircle2,
      title: "Prove It Works",
      description: "Land your first clients and stack up to $10K+ in revenue, giving you hard proof your offer works and people are happy to pay for it"
    },
    {
      icon: Zap,
      title: "Scale With Support",
      description: "Once proven, turn it into steady income or hand off marketing to our team so you can focus on client delivery and revenue growth"
    },
    {
      icon: Star,
      title: "Done-With-You System",
      description: "1:1 strategy calls, weekly group sessions, proven frameworks and templates—everything you need to go from idea to paying clients"
    }
  ];

  const whatYouGet = [
    "1:1 Strategy Call to build a plan that fits your goals",
    "Weekly Group Sessions for accountability and momentum",
    "Offer Frameworks & Playbooks to package and price your expertise",
    "Client-Attracting Templates that convert without second-guessing",
    "Private Founder Community for real-time feedback and peer connection"
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText('https://technical-leaders.com/lk-office-hours');
      setCopied(true);
      trackEvent('LK Office Hours Link Copied', { location: 'share_section' });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Launch Kit Office Hours | Technical Leaders"
        description="Turn your tech expertise into $10K+/month. Join our free office hours to learn how tech leaders are building independent businesses selling their knowledge."
        keywords={["tech leadership", "independent consulting", "office hours", "tech entrepreneurship", "consulting business", "expertise monetization", "side hustle", "launch kit"]}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/launch-bg.png"
            alt="Launch Kit background"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Rocket className="h-4 w-4" />
            Tech Leaders Launch Kit
          </div>

          <h1 className="font-bold tracking-tight mb-6">
            <div className="text-2xl sm:text-3xl lg:text-4xl mb-2">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Turn Your Tech Expertise
              </span>
            </div>
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-2">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Consulting
              </span>
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Office Hours
              </span>
            </div>
          </h1>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-primary/20 text-foreground px-5 py-3 rounded-full text-base sm:text-lg font-medium mb-6">
            <Calendar className="h-5 w-5 text-primary" />
            <span>Next Session: {formattedDate} at 11am CST</span>
          </div>

          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            You've spent years building a valuable track record leading teams and shipping products.
          </p>

          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Now it's time to make your own ideas pay you directly—as a side hustle or a full replacement for your primary income.
          </p>

          <div ref={formContainerRef} className="max-w-md mx-auto"></div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="mx-auto max-w-4xl">
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-primary/20 p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold mb-1 text-background">Know a tech leader ready to go independent?</h3>
                <p className="text-sm text-muted-foreground">Share this office hours with them</p>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg flex-1 sm:flex-none">
                  <span className="text-sm font-mono text-muted-foreground">technical-leaders.com/lk-office-hours</span>
                </div>
                <Button
                  onClick={handleCopyLink}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="sm"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy Link
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Go Independent Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              The Path to Independence
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              From Employee to Independent in 12 Weeks
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three clear phases take you from idea to proven $10K+/month offer—with hands-on support every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="h-4 w-4" />
              What's Included
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need to Launch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Build and prove your offer with expert guidance and a proven system
            </p>
          </div>

          <Card className="p-8">
            <ul className="space-y-4">
              {whatYouGet.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="p-1 bg-primary/10 rounded-full mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <div className="mt-8 text-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => formContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            >
              Join Office Hours
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="h-4 w-4" />
              Is This For You?
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Perfect For
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Technical Leaders</h3>
              <p className="text-muted-foreground">
                Who've led teams or built products and are ready to package that expertise into an independent offer
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Side Hustlers</h3>
              <p className="text-muted-foreground">
                Who can carve out at least 3 hours a week to validate and launch their offer properly
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Content Creators</h3>
              <p className="text-muted-foreground">
                Already creating content but not yet seeing the traction or revenue they deserve from their expertise
              </p>
            </Card>
          </div>
        </div>
      </section>

      <ContentFooter
        headline="Join the Free Launch Kit Office Hours"
        description="Learn how tech leaders are turning their expertise into $10K+/month independent businesses. No pitch, just real talk about what's working."
        primaryCTA={{
          text: "Save My Spot",
          onClick: () => formContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }),
          description: ""
        }}
        benefits={[
          "Live Q&A with fellow tech leaders",
          "Proven frameworks for packaging expertise",
          "Real examples from successful launches",
          "No sales pitch—just value"
        ]}
        socialProof="Join tech leaders building independent businesses on their own terms"
        trackingContext="LK Office Hours"
      />
    </div>
  );
};

export default LKOfficeHours;
