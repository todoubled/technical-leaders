import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Star, Users, Sparkles, Brain, Rocket, MessageSquare, Bot, Calendar, Clock, Gift, FileText, Video, Phone, Target, Shield, Zap, TrendingUp, DollarSign, BarChart3, Calculator } from "lucide-react";
import SEO from "@/components/SEO";
import { useState, useEffect } from "react";

const FinanceForFounders = () => {

  const heroContent = {
    badge: "LIVE Workshop",
    headline: "Finance for Founders™ Workshop",
    subheadline: "Master the financial fundamentals that drive business growth",
    description: "From Accounting Basics to Cash Flow Mastery in One Practical Session",
    cta: "Secure My Spot for $50"
  };

  const keyBenefits = [
    {
      icon: BarChart3,
      title: "Financial Statements Decoded",
      description: "Understand Balance Sheets, P&L, and Cash Flow statements like a CFO"
    },
    {
      icon: TrendingUp,
      title: "Cash Flow Forecasting",
      description: "Predict and manage the lifeblood of your business with confidence"
    },
    {
      icon: Calculator,
      title: "Accounting Fundamentals",
      description: "Learn the equation that underpins all business finance"
    },
    {
      icon: DollarSign,
      title: "Strategic Financial Insights",
      description: "Make data-driven decisions that investors and stakeholders trust"
    }
  ];

  const workshopTopics = [
    {
      icon: Brain,
      title: "Accounting Foundations",
      description: "Why accounting matters and how it drives strategic insights",
      features: [
        "The Accounting Equation – Assets = Liabilities + Equity explained",
        "Making sense of chaos – How accounting tells your business story",
        "Compliance & Trust – Meeting legal requirements and stakeholder expectations"
      ]
    },
    {
      icon: FileText,
      title: "Financial Statements Mastery",
      description: "Read and understand the three critical financial documents",
      features: [
        "Balance Sheet – Snapshot of your company's financial health",
        "Income Statement (P&L) – Your business profitability story",
        "Cash Flow Statement – How money flows in and out (Profits ≠ Cash!)"
      ]
    },
    {
      icon: TrendingUp,
      title: "Cash Flow Forecasting",
      description: "Master the #1 factor in business survival and growth",
      features: [
        "Income Forecasting – Project revenues from clients",
        "Expense Management – Control what you can control",
        "Large Items Planning – Manage loans, capital projects, and major expenses"
      ]
    }
  ];

  const bonuses = [
    {
      icon: Calculator,
      title: "Bonus #1: Cash vs Accrual Accounting Guide",
      description: "Understand both methods and when to use each for maximum accuracy and cash management."
    },
    {
      icon: FileText,
      title: "Bonus #2: Cash Flow Forecast Template",
      description: "Plug-and-play spreadsheet to start forecasting your business cash flow immediately."
    },
    {
      icon: Video,
      title: "Bonus #3: Workshop Recording (Lifetime Access)",
      description: "Can't join live? Want to revisit? You'll get the full replay to rewatch any time."
    },
    {
      icon: BarChart3,
      title: "Bonus #4: Interactive Demo Files",
      description: "Real-world examples and templates from the live demonstration to apply immediately."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Finance for Founders™ Workshop | Technical Leaders"
        description="Master the financial fundamentals that drive business growth. From accounting basics to cash flow mastery in one practical session."
        keywords={["financial literacy", "cash flow forecasting", "accounting for founders", "financial statements", "business finance"]}
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
                  <p className="text-muted-foreground">LIVE, hands-on workshop with interactive demo</p>
                </div>
                <div className="space-y-2">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-3">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Date & Time</h3>
                  <p className="text-muted-foreground">TBD<br/>90 Minutes</p>
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
                  Includes lifetime recording access. Can't join live? No problem.
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
              Why Financial Literacy Matters for Founders
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>You're building something amazing.</p>
              <p className="font-semibold">But do you understand the numbers behind it?</p>
              <p>Too many founders treat accounting as a "necessary evil" – something to hand off to someone else.</p>
              <p className="text-2xl font-bold text-foreground">Here's the truth:</p>
              <p>Cash flow problems kill more businesses than bad products ever will.</p>
              <p className="text-xl font-semibold text-foreground mt-6">The good news?</p>
              <p className="text-2xl font-bold text-primary">Financial mastery isn't that complicated.</p>
              <p>You just need someone to explain it in plain English, with real examples that actually matter to your business.</p>
              <p className="text-xl font-semibold text-foreground mt-6">In this workshop, I'll demystify the financial fundamentals every founder needs to know.</p>
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
              Everything you need to understand and manage your business finances
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
            <h3 className="text-lg font-semibold mb-4">Plus These Critical Insights:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">Why Cash Flow is the #1 reason organizations fail (and how to avoid it)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">How to speak the language of investors and stakeholders</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">When to use Cash vs Accrual accounting (and why both matter)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">How to determine if you can replace your "9-5" income</span>
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
            Ready to Master Your Business Finances?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Stop flying blind. Get the financial clarity every successful founder needs.
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

export default FinanceForFounders;