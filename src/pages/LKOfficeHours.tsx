import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import ContentFooter from "@/components/footers/ContentFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Rocket, Target, Users, Sparkles, ChevronRight, Copy, Check, Zap, CheckCircle2, Star, MessageCircle, Calendar } from "lucide-react";
import SEO from "@/components/SEO";
import { trackEvent } from "@/utils/posthog";

const getNextMonday = () => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  // Monday is day 1
  let daysUntilMonday = (1 - dayOfWeek + 7) % 7;
  if (daysUntilMonday === 0) {
    daysUntilMonday = 7;
  }
  const nextMonday = new Date(now);
  nextMonday.setDate(now.getDate() + daysUntilMonday);
  return nextMonday;
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
  const nextSessionDate = getNextMonday();
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
      title: "Sharpen Your Offer",
      description: "Get clear on what you're selling, who it's for, and how to price it—so the right clients say yes faster"
    },
    {
      icon: CheckCircle2,
      title: "Fill Your Pipeline",
      description: "Learn the outreach, content, and positioning strategies that consistently attract high-quality clients—without feeling salesy"
    },
    {
      icon: Zap,
      title: "Grow Your Revenue",
      description: "Stop trading time for money. Build repeatable systems that keep clients coming in so you can focus on delivering great work"
    },
    {
      icon: Star,
      title: "Get Unstuck Live",
      description: "Bring your real challenges—pricing, proposals, positioning, pipeline—and get actionable feedback from consultants who've been there"
    }
  ];

  const whatYouGet = [
    "Live Q&A where you can bring your specific consulting challenges",
    "Proven frameworks for packaging and pricing your expertise",
    "Client acquisition strategies that work across industries",
    "Templates for outreach, proposals, and content that convert",
    "A community of consultants sharing what's working right now"
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
        title="Consulting Office Hours | Get More Clients"
        description="Join our free office hours for consultants who want more clients. Learn proven frameworks to sharpen your offer, attract better clients, and grow your consulting revenue."
        keywords={["consulting", "get more clients", "consulting business", "office hours", "independent consulting", "grow consulting practice", "client acquisition", "consulting revenue"]}
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
            For Independent Consultants
          </div>

          <h1 className="font-bold tracking-tight mb-6">
            <div className="text-2xl sm:text-3xl lg:text-4xl mb-2">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Get More Clients
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
            <span>Next Session: {formattedDate} at 10am CST</span>
          </div>

          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            You're great at what you do. But finding the next client shouldn't feel like starting from scratch every time.
          </p>

          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join a free weekly session where consultants sharpen their offers, fix their pipelines, and learn what's actually working to attract better clients.
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
                <h3 className="text-lg font-semibold mb-1 text-background">Know a consultant who wants more clients?</h3>
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
              Grow Your Practice
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Stop Guessing. Start Growing.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're looking to land your next client or build a steady pipeline, these sessions give you the clarity and tools to make it happen.
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
              What You Get Each Session
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Practical guidance to attract more clients and grow your consulting practice
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
              <h3 className="text-xl font-semibold mb-3">Independent Consultants</h3>
              <p className="text-muted-foreground">
                In any industry who want a more predictable way to attract and close high-quality clients
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fractional Executives</h3>
              <p className="text-muted-foreground">
                Looking to build a pipeline that keeps engagements flowing without constant hustle
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Advisors</h3>
              <p className="text-muted-foreground">
                With deep domain expertise who want to turn what they know into a thriving consulting practice
              </p>
            </Card>
          </div>
        </div>
      </section>

      <ContentFooter
        headline="Join the Free Consulting Office Hours"
        description="Learn what's actually working for consultants who are landing more clients and growing their practices. No pitch, just real talk."
        primaryCTA={{
          text: "Save My Spot",
          onClick: () => formContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }),
          description: ""
        }}
        benefits={[
          "Live Q&A—bring your real challenges",
          "Proven frameworks for getting more clients",
          "Strategies that work across industries",
          "No sales pitch—just value"
        ]}
        socialProof="Join consultants from every industry who are growing their practices"
        trackingContext="LK Office Hours"
      />
    </div>
  );
};

export default LKOfficeHours;
