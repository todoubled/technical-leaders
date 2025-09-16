import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Star, Users, Sparkles, Brain, Rocket, MessageSquare, Bot, Calendar, Clock, Gift, FileText, Video, Phone, Target, Shield, Zap, TrendingUp, DollarSign, BarChart3, Calculator, Play, Download, ExternalLink } from "lucide-react";
import SEO from "@/components/SEO";
import { trackEvent } from "@/utils/posthog";

const FinanceForFoundersWorkshop = () => {
  // Replace with your actual YouTube video ID
  const youtubeVideoId = "k9hbY0NrUlQ";

  // Replace with your actual download URLs
  const downloadLinks = {
    slides: "https://docs.google.com/presentation/d/1oWeBZjbtf-YvCW2ngKPBVreuSvrBLpUA/edit?usp=sharing&ouid=104908260470237657918&rtpof=true&sd=true",
    profitWorkbook: "https://docs.google.com/spreadsheets/d/12eLG5c93kiBcmxSHn2KYVRv4TykNhw20/edit?usp=sharing&ouid=104908260470237657918&rtpof=true&sd=true"
  };

  const heroContent = {
    badge: "Free Workshop Recording",
    headline: "Finance for Founders™ Workshop",
    subheadline: "Master the financial fundamentals that drive business growth",
    description: "Watch the Complete 90-Minute Workshop + Download Bonus Resources"
  };

  const keyBenefits = [
    {
      icon: Video,
      title: "Full Workshop Recording",
      description: "90-minute masterclass covering all financial fundamentals for founders"
    },
    {
      icon: FileText,
      title: "Bonus Templates & Resources",
      description: "Cash flow forecasting templates and interactive demo files"
    },
    {
      icon: BarChart3,
      title: "Real-World Examples",
      description: "Actual business scenarios and case studies from the live session"
    },
    {
      icon: Clock,
      title: "Lifetime Access",
      description: "Watch anytime, anywhere. Revisit the content whenever you need it"
    }
  ];

  const workshopHighlights = [
    {
      icon: Brain,
      title: "Accounting Foundations",
      description: "Master the fundamentals that drive business decisions",
      timestamp: "Minutes 5-25",
      features: [
        "The Accounting Equation – Assets = Liabilities + Equity explained",
        "How accounting tells your business story",
        "Compliance & Trust – Meeting legal requirements"
      ]
    },
    {
      icon: FileText,
      title: "Financial Statements Deep Dive",
      description: "Decode Balance Sheets, P&L, and Cash Flow statements",
      timestamp: "Minutes 25-55",
      features: [
        "Balance Sheet – Your company's financial health snapshot",
        "Income Statement (P&L) – Your profitability story",
        "Cash Flow Statement – Money flow tracking (Profits ≠ Cash!)"
      ]
    },
    {
      icon: TrendingUp,
      title: "Cash Flow Forecasting Mastery",
      description: "The #1 factor in business survival and growth",
      timestamp: "Minutes 55-90",
      features: [
        "Income Forecasting – Project revenues accurately",
        "Expense Management – Control controllable costs",
        "Large Items Planning – Manage major financial decisions"
      ]
    }
  ];

  const bonusResources = [
    {
      icon: FileText,
      title: "Workshop Slides",
      description: "Complete presentation slides from the workshop covering all financial fundamentals, accounting equations, and cash flow strategies.",
      downloadUrl: downloadLinks.slides,
      buttonText: "Get the Slides"
    },
    {
      icon: Calculator,
      title: "Profit Workbook",
      description: "Interactive Excel workbook with cash flow forecast templates, financial statement examples, and practical exercises to implement immediately.",
      downloadUrl: downloadLinks.profitWorkbook,
      buttonText: "Get the Workbook"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Finance for Founders™ Workshop Recording | Technical Leaders"
        description="Watch the complete Finance for Founders workshop recording plus get exclusive bonus resources. Master financial fundamentals with lifetime access."
        keywords={["financial literacy workshop", "cash flow forecasting", "accounting for founders", "financial statements", "business finance recording"]}
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
            <Video className="h-4 w-4" />
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

          <p className="text-2xl font-semibold mb-12 max-w-2xl mx-auto">
            {heroContent.description}
          </p>

          {/* YouTube Video Embed */}
          <div className="w-full max-w-5xl mx-auto">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                title="Finance for Founders Workshop Recording"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Resources Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Gift className="h-4 w-4" />
              Free Bonus Resources
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Download Workshop Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to implement what you learned
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {bonusResources.map((resource, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                    <resource.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                  <p className="text-muted-foreground mb-6">{resource.description}</p>
                  <Button
                    size="lg"
                    className="w-full"
                    onClick={() => {
                      trackEvent('Resource Downloaded', {
                        resource: resource.title,
                        location: 'bonus_section'
                      });
                      window.open(resource.downloadUrl, '_blank');
                    }}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    {resource.buttonText}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Content Breakdown */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Workshop Content Breakdown
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              90 minutes of financial mastery broken down by topic and timestamp
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workshopHighlights.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="inline-flex items-center gap-2 bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium mb-3">
                  <Clock className="h-3 w-3" />
                  {item.timestamp}
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
        </div>
      </section>

      {/* Meet Your Instructor Section */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meet Your Instructor
            </h2>
          </div>

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

      {/* Launch Kit CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="w-16 h-16 mx-auto mb-6 text-orange-500" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Get More Clients?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            You've mastered the finances. Now let's help you launch and scale with Launch Kit.
          </p>

          <Card className="p-8 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Get Everything You Need to Launch & Scale
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6 text-left max-w-xl mx-auto">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-gray-800 dark:text-gray-200 font-semibold">Financial Modeling Tools</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-gray-800 dark:text-gray-200 font-semibold">Revenue Forecasting System</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-gray-800 dark:text-gray-200 font-semibold">Proven Business Templates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-gray-800 dark:text-gray-200 font-semibold">Weekly Strategy Calls</span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-12 py-6"
              onClick={() => {
                trackEvent('Get Launch Kit - Finance Workshop CTA', {
                  location: 'bottom_section'
                });
                window.location.href = "/launch-with-us";
              }}
            >
              Get The Full Launch Kit
            </Button>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 font-semibold">
              Join 300+ founders already scaling their businesses
            </p>
          </Card>

          <p className="text-gray-700 dark:text-gray-300 mt-8">
            Questions? Email{" "}
            <a href="mailto:bill@technical-leaders.com" className="text-orange-600 hover:underline">
              bill@technical-leaders.com
            </a>
            {" "}or{" "}
            <button
              onClick={() => {
                trackEvent('Book Call - Finance Workshop', {
                  location: 'bottom_section'
                });
                window.location.href = "/call";
              }}
              className="text-orange-600 hover:underline"
            >
              book a call
            </button>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FinanceForFoundersWorkshop;