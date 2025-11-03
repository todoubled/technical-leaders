import Navigation from "@/components/Navigation";
import SalesFooter from "@/components/footers/SalesFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Zap, Target, Users, Award, Star, Shield, MessageCircle, Calendar } from "lucide-react";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import { trackConversion, trackClick } from "@/utils/posthog";
import { useTrackScrollDepth } from "@/hooks/use-posthog";
import { generateCourseStructuredData, generateFAQStructuredData } from "@/utils/seo-helpers";

const December = () => {
  // Track scroll depth for engagement
  useTrackScrollDepth('December Page');

  useEffect(() => {
    // Page view tracking is handled centrally in App.tsx
  }, []);

  const phases = [
    {
      number: 1,
      title: "Clarify",
      duration: "Weeks 1–4",
      description: "We'll nail exactly what you're selling and how it's priced, who it's for, and how to talk about it without feeling \"salesy,\" so you can sell with confidence and integrity from day one."
    },
    {
      number: 2,
      title: "Prove",
      duration: "Weeks 5–10",
      description: "You'll land your first clients and stack up to $10K+ in revenue, so you've got hard proof your offer works and people are happy to pay you well for it."
    },
    {
      number: 3,
      title: "Scale",
      duration: "Weeks 11–12+",
      description: "Once you've proven your offer, you can either turn it into steady side income or hand off your marketing to our Tech Leaders Media team so you can focus on client delivery and revenue growth."
    }
  ];

  const howItWorks = [
    {
      icon: Target,
      title: "1:1 Strategy Call",
      description: "so you know exactly what to focus on first and start with a plan that fits your goals."
    },
    {
      icon: Users,
      title: "Weekly Group Sessions",
      description: "so you stay accountable, get unstuck fast, and keep momentum all the way to $10K+."
    },
    {
      icon: CheckCircle2,
      title: "Offer Frameworks & Playbooks",
      description: "so you can define your ideal client, package your expertise, price it right, and sell it with confidence."
    },
    {
      icon: Star,
      title: "Client-Attracting Templates",
      description: "so you can publish content that converts without wasting hours second-guessing yourself."
    },
    {
      icon: MessageCircle,
      title: "Private Founder Community",
      description: "so you can share wins, get real-time feedback, and connect with peers building the same path of independence."
    }
  ];

  const bonuses = [
    {
      title: "The Profile Optimizer",
      description: "so you instantly stand out to the right clients and attract opportunities from day one."
    },
    {
      title: "\"First $10K+\" Content Pack",
      description: "so you can plug in proven posts, emails, and messages that turn conversations into clients."
    },
    {
      title: "1:1 Offer Coaching Session with Todd",
      description: "so you can refine your positioning and pricing with expert eyes before going live."
    }
  ];

  const quickFacts = [
    "9 seats available",
    "December applications close November 21st",
    "Live group + 1:1 support",
    "2-week guarantee",
    "Flexible pay plans"
  ];

  const idealFor = [
    "You want to validate your expertise as an independent offer (and maybe go full-time later)",
    "You can carve out at least 3 hours a week to launch this properly",
    "You're friendly, coachable, and open to testing fast",
    "Bonus points if you're already creating content but not yet seeing the traction you deserve"
  ];

  // FAQ data for structured markup
  const faqData = [
    {
      question: "How long is the program?",
      answer: "The Launch Kit program runs for 12+ weeks, divided into three phases: Clarify (weeks 1-4), Prove (weeks 5-10), and Scale (weeks 11-12+). You'll have ongoing support throughout your journey to $10K+/month."
    },
    {
      question: "What if I don't like the program?",
      answer: "Try the program for two weeks. If it's not what you expected, we'll refund you in full. No forms, no fuss, and no hard feelings."
    },
    {
      question: "How much does it cost?",
      answer: "You can join for $2950 upfront (best value), or spread it out with 2 payments of $1600 or 4 monthly payments of $850."
    },
    {
      question: "Is this only for tech leaders?",
      answer: "Yes, this program is specifically designed for tech leaders and domain experts who've led teams or built products inside tech or tech-enabled companies and are ready to build something of their own."
    }
  ];

  // Generate structured data
  const courseStructuredData = generateCourseStructuredData(
    "Tech Leaders Launch Kit - Build Your Independent Business",
    "12-week program to help tech leaders validate their expertise and hit $10K+/month selling their knowledge, without feeling salesy or needing a big audience.",
    "$2950"
  );

  const faqStructuredData = generateFAQStructuredData(faqData);

  // Combine structured data
  const combinedStructuredData = [courseStructuredData, faqStructuredData];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Launch Kit - Turn Your Tech Expertise Into $10K/Month"
        description="Prove your offer works and hit $10K+/month by selling your expertise. Join 9 tech leaders in our December cohort. 2-week guarantee, flexible payment plans."
        keywords={['tech leadership', 'independent consulting', 'side hustle', 'tech entrepreneurship', 'consulting business', 'expertise monetization']}
        structuredData={combinedStructuredData}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <img
            src="/launch-bg.png"
            alt="Launch Kit background"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-700 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              <span>Tech Leaders Launch Kit</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              You've spent years building a valuable track record leading teams and shipping products at companies.
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Now it's time to make your own ideas pay you directly as a side hustle or replace your primary income with an independent business.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-orange-500 mb-2">9</div>
              <p className="text-lg text-muted-foreground">Spots available</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-orange-500 mb-2">$10K+</div>
              <p className="text-lg text-muted-foreground">Monthly goal</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-orange-500 mb-2">12+</div>
              <p className="text-lg text-muted-foreground">Weeks of support</p>
            </Card>
          </div>
        </div>
      </section>

      {/* The Model Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            The model's simple:
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Three clear phases to take you from idea to proven $10K+/month offer
          </p>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 p-8 bg-gradient-to-br from-orange-500/20 to-red-600/20 relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white">
                        <span className="text-3xl font-bold">{phase.number}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-foreground">Phase {phase.number}: {phase.title}</h3>
                      <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">{phase.duration}</p>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8 flex items-center">
                    <p className="text-lg text-muted-foreground leading-relaxed">{phase.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Here's how it works:
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Everything you need to build and prove your offer
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {howItWorks.map((item, index) => {
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
        </div>
      </section>

      {/* Fast-Start Bonuses */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Fast-start bonuses:
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Hit the ground running with these exclusive resources
          </p>

          <div className="space-y-4 mb-8">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{bonus.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{bonus.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 text-green-600 dark:text-green-400" />
          <h2 className="text-3xl font-bold mb-4 text-background">
            Love it or leave it guarantee.
          </h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            Try the program for two weeks. If it's not what you expected, we'll refund you in full.
            No forms, no fuss, and no hard feelings.
          </p>
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-6 py-3 rounded-full font-semibold">
            <Shield className="w-5 h-5" />
            <span>14-day money-back guarantee</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            QuickFacts
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {quickFacts.map((fact, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" />
                </div>
                <p className="text-sm font-semibold text-foreground">{fact}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Who it's for:
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            This is for tech leaders and domain experts who've led teams or built products inside tech or tech-enabled companies — and are now ready to build something of their own.
          </p>

          <Card className="p-8">
            <p className="text-foreground font-semibold mb-6">You'll fit right in if:</p>
            <div className="space-y-4">
              {idealFor.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-500/10 to-red-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Here's what to do next:
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the December cohort and prove your offer works by hitting $10K+/month
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 hover:shadow-xl transition-all relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  BEST VALUE
                </span>
              </div>
              <div className="text-center pt-2">
                <p className="text-sm font-semibold text-muted-foreground mb-2">One Payment</p>
                <p className="text-4xl font-bold text-foreground mb-4">$2,950</p>
                <p className="text-sm text-muted-foreground mb-6">Pay upfront and save</p>
                <Button
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
                  onClick={() => {
                    trackConversion('Launch Kit Purchase Clicked', {
                      location: 'next_steps_section',
                      price: 2950,
                      plan: 'one_payment'
                    });
                    window.location.href = "https://buy.stripe.com/dRmeVd26Z2of5vI2wYaMU0A";
                  }}
                >
                  Get Started
                </Button>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all">
              <div className="text-center">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Two Payments</p>
                <p className="text-4xl font-bold text-foreground mb-4">$1,600</p>
                <p className="text-sm text-muted-foreground mb-6">Spread over 2 months</p>
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => {
                    trackConversion('Launch Kit Purchase Clicked', {
                      location: 'next_steps_section',
                      price: 3200,
                      plan: 'two_payments'
                    });
                    window.location.href = "https://buy.stripe.com/14AdR9cLD7Iz9LYefGaMU0H";
                  }}
                >
                  Get Started
                </Button>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all">
              <div className="text-center">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Four Payments</p>
                <p className="text-4xl font-bold text-foreground mb-4">$850</p>
                <p className="text-sm text-muted-foreground mb-6">Spread over 4 months</p>
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => {
                    trackConversion('Launch Kit Purchase Clicked', {
                      location: 'next_steps_section',
                      price: 3400,
                      plan: 'four_payments'
                    });
                    window.location.href = "https://buy.stripe.com/7sYbJ126Z9QH0bo9ZqaMU0I";
                  }}
                >
                  Get Started
                </Button>
              </div>
            </Card>
          </div>

          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Try the program for two weeks. If it's not what you expected, we'll refund you in full. No forms, no fuss, and no hard feelings.
          </p>

          <p className="text-sm text-muted-foreground">
            P.S. As soon as you join, we'll send you The Profile Optimizer so you can start generating leads before our first session.
          </p>
        </div>
      </section>
    </div>
  );
};

export default December;
