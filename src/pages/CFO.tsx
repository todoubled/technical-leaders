import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Shield, TrendingUp, Users } from "lucide-react";

const CFO = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="CFO Services for Tech Companies | Technical Leaders"
        description="Fractional CFO services designed for tech founders and leaders. Get expert financial strategy, planning, and execution to scale your business with confidence."
        keywords={['fractional cfo', 'cfo services', 'tech cfo', 'startup cfo', 'financial strategy', 'financial planning', 'tech finance', 'startup finance']}
      />
      <Navigation />
      <CFOIntro />
      <MeetYourCFO />
      <CompanyLogos />
      <CFOFeatures />
      <CFOHero />
      <WorkshopCTA />
      <Footer />
    </div>
  );
};

// CFO Intro Hero Section
const CFOIntro = () => {
  return (
    <section className="pt-32 pb-6 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/ai-in-ar.png"
          alt="CFO background"
          className="w-full h-full object-cover object-top opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background/80"></div>
      </div>
      <div className="container mx-auto relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
          Fractional CFO Services
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
          Get the <b>strategic financial leadership</b> you need to make confident decisions and <b>scale with clarity</b>.
        </p>
      </div>
    </section>
  );
};

// CFO-specific Hero Component with Pricing
const CFOHero = () => {
  const plans = [
    {
      name: "Essentials",
      price: "$500",
      period: "/month",
      description: "Perfect for clients with 100 or fewer transactions per month and under $10K monthly revenue",
      features: [
        "Monthly reconciliations",
        "Financial statements",
        "Continuous bookkeeping"
      ],
      popular: false,
      badge: "Get Started",
      gradient: "from-emerald-500 to-teal-600",
      badgeColor: "bg-emerald-500",
      idealFor: "Small businesses with basic accounting needs",
      results: "Clean books and monthly statements",
      link: "https://calendly.com/bill-technical-leaders/30min"
    },
    {
      name: "Strategic",
      price: "$800",
      period: "/month",
      description: "Perfect for clients with 100-250 transactions per month and $10K-$50K monthly revenue",
      features: [
        "Everything in Essentials",
        "Payroll processing",
        "AP processing",
        "Monthly one hour financial strategy session"
      ],
      popular: true,
      gradient: "from-blue-500 to-purple-600",
      badgeColor: "bg-primary",
      idealFor: "Growing businesses needing strategic guidance",
      results: "Strategic financial oversight & operational support",
      link: "https://calendly.com/bill-technical-leaders/30min"
    },
    {
      name: "CFO Suite",
      price: "Custom Packages",
      period: "",
      badge: "Most Comprehensive",
      description: "Perfect for clients looking for CFO but don't have size yet to justify a full time, expensive hire",
      features: [
        "Everything in Strategic",
        "Budget & forecasting",
        "Cash planning",
        "Special analyses",
        "Capital raising support"
      ],
      popular: false,
      gradient: "from-orange-500 to-red-600",
      badgeColor: "bg-orange-500",
      idealFor: "Companies needing fractional CFO leadership",
      results: "Fractional CFO to oversee all finance, accounting and capital raising functions, strategic planning",
      link: "https://calendly.com/bill-technical-leaders/30min"
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Choose Your Level of Support
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Each tier provides the financial expertise and systems to help you grow sustainably. We bring clarity to your numbers so you can focus on building your business.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group bg-card rounded-lg p-6 border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular
                  ? 'border-primary shadow-xl scale-105 bg-gradient-to-br from-card to-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {/* Gradient accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${plan.gradient} rounded-t-lg`} />

              {/* Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-xl border-2 border-white">
                    Most Popular
                  </span>
                </div>
              )}

              {plan.badge && !plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className={`${plan.badgeColor} text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg`}>
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center pt-4">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{plan.description}</p>

                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>

                <div className="bg-secondary/50 rounded-lg p-2 mb-3">
                  <div className="text-xs font-semibold text-primary">Ideal For:</div>
                  <div className="text-xs text-muted-foreground">{plan.idealFor}</div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-2 mb-4">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-400">Expected Results:</div>
                  <div className="text-xs text-green-600 dark:text-green-300">{plan.results}</div>
                </div>

                <ul className="space-y-2 mb-6 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => { window.location.href = plan.link }}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.gradient} hover:shadow-lg hover:scale-105 text-white`
                      : `border border-primary/20 hover:border-primary bg-gradient-to-r ${plan.gradient} hover:shadow-lg text-white`
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Strategy Call CTA below pricing */}
        <div className="text-center mt-12">
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Not Sure Which Tier Is Right for You?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Book a strategy call and we'll recommend the perfect financial support level for your stage and objectives.
            </p>
            <button
              onClick={() => { window.location.href = "https://calendly.com/bill-technical-leaders/30min" }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-xl hover:scale-105 text-lg"
            >
              Book Your Free Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Company Logos Section Component
const CompanyLogos = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-gray-600 mb-8">
          Trusted by Tech Leaders at
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          <img src="/netflix.png" alt="Netflix" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          <img src="/nike.png" alt="Nike" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          <img src="/cashapp.svg" alt="Cash App" className="h-20 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          <img src="/redhat.webp" alt="Red Hat" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          <img src="/calendly.webp" alt="Calendly" className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          <img src="/gitlab.png" alt="GitLab" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </section>
  );
};

// Meet Your CFO Section Component
const MeetYourCFO = () => {
  return (
    <section className="pt-6 pb-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Card className="p-8 hover:shadow-lg transition-all duration-300">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <img
                src="/bill-zutter.jpg"
                alt="Bill Zutter"
                className="w-full max-w-[250px] mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl font-bold mb-4">Bill Zutter, CPA</h3>
              <p className="text-muted-foreground leading-relaxed">
                Bill Zutter has spent the last 15+ years in finance and accounting roles in the commercial real estate industry.
                He is a licensed CPA and has experience as a services provider, asset owner and investor. His background spans
                from hands-on accounting and financial planning to executive-level financial leadership, focusing on translating
                numbers into strategy and results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                He currently works as a Finance Director leading a team of professionals at the world's largest commercial
                real estate services company.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  <Shield className="h-4 w-4" />
                  Licensed CPA
                </div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  <TrendingUp className="h-4 w-4" />
                  15+ Years Experience
                </div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  <Users className="h-4 w-4" />
                  Finance Director
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

// CFO-specific Features Component
const CFOFeatures = () => {
  const features = [
    {
      title: "Strategic Financial Planning",
      description: "Build a clear financial roadmap that aligns with your business goals and growth trajectory.",
      icon: "📊"
    },
    {
      title: "Cash Flow Mastery",
      description: "Never worry about running out of runway. Get visibility and control over your cash position.",
      icon: "💰"
    },
    {
      title: "Fundraising Ready",
      description: "Prepare your financials for investor scrutiny with models and reporting that instill confidence.",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Why Choose Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Fractional CFO Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We understand that tech founders need more than just bookkeeping. Our CFO services provide strategic financial leadership that helps you make smarter decisions and scale with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Workshop CTA Section Component
const WorkshopCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-card rounded-xl p-8 md:p-12 border-2 border-primary/20 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-bold mb-4">
                🎁 Free Training
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Master Your Business Finances
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Before investing in CFO services, understand the fundamentals. Watch our free 90-minute Finance for Founders workshop.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Learn accounting fundamentals & financial statements</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Master cash flow forecasting techniques</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Get downloadable templates & workbooks</span>
                </div>
              </div>

              <button
                onClick={() => { window.location.href = "/finance-for-founders-workshop" }}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-xl hover:scale-105"
              >
                Watch Free Workshop
              </button>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl border-2 border-border">
                <img
                  src="/bill-zutter.jpg"
                  alt="Finance for Founders Workshop"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="font-semibold text-sm mb-1">Taught by Bill Zutter, CPA</p>
                    <p className="text-xs opacity-90">15+ years finance & accounting experience</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  ⭐⭐⭐⭐⭐ 4.9/5 from 500+ founders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CFO;
