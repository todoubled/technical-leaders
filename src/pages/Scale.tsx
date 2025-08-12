import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Target, TrendingUp, Phone, Calendar, CheckCircle, Shield, ArrowRight, Star, Clock, DollarSign, Rocket, Award, Zap } from "lucide-react";
import { useState } from "react";
import VideoModal from "@/components/VideoModal";
import SEO from "@/components/SEO";
import { generateCourseStructuredData, generateFAQStructuredData } from "@/utils/seo-helpers";

const Scale = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoUrl = "https://youtu.be/VKetl72iSlk"; // Replace with actual video

  const outcomes = [
    {
      icon: DollarSign,
      title: "$10K-50K/Month",
      description: "Premium fractional engagements without the full-time commitment"
    },
    {
      icon: Clock,
      title: "Work 20-40% Less",
      description: "Higher impact, better compensation, more flexibility"
    },
    {
      icon: TrendingUp,
      title: "3-5 Clients Max",
      description: "Quality over quantity approach to maximize your value"
    }
  ];

  const services = [
    {
      title: "Fractional Positioning Strategy",
      description: "We'll craft your unique value proposition and premium positioning to command $15K-50K/month engagements",
      frequency: "Initial deep dive + monthly refinement",
      value: "$5,000 value"
    },
    {
      title: "Client Acquisition System",
      description: "Done-for-you outreach, warm introductions, and proposal templates that convert at 40%+",
      frequency: "2-4 qualified intros per month",
      value: "$8,000 value"
    },
    {
      title: "Premium Pricing Framework",
      description: "Stop undercharging. We'll show you exactly how to price and negotiate 3-5x higher rates",
      frequency: "Pricing strategy + negotiation support",
      value: "$3,000 value"
    },
    {
      title: "Thought Leadership Content",
      description: "Weekly LinkedIn posts, case studies, and articles that position you as the go-to expert",
      frequency: "4 pieces per week, done for you",
      value: "$4,000 value"
    },
    {
      title: "1-on-1 Advisory Coaching",
      description: "Direct access to Todd for deal strategy, client challenges, and growth planning",
      frequency: "Weekly 60-minute sessions",
      value: "$6,000 value"
    }
  ];

  const caseStudies = [
    {
      name: "P.O.",
      before: "DevOps Lead, Poland",
      after: "Stress levels went to 0",
      result: "Transformed work-life balance",
      quote: "I didn't even use all of tools that you provide guys, so far all is exceeding my expectations. Basically thats the first mastermind group that gives a real value that I know! Stress levels overall in my life almost went to 0, in all cases, private, work etc",
      image: "PO",
      timeline: "DevOps Lead → Stress-free success"
    },
    {
      name: "C.F.",
      before: "Fractional CTO, Ireland",
      after: "Replaced full income with 3-day week",
      result: "Full income, 60% of the time",
      quote: "For this client, it's a fractional gig that will replace all my income, which means I can go and do this fractional thing for three days a week and then have two days to apply all the other learnings. Massive, massive win.",
      image: "CF",
      timeline: "Full-time → 3-day fractional"
    },
    {
      name: "K.D.",
      before: "Director of Customer Success, Colorado",
      after: "New job offer + promotion",
      result: "Multiple opportunities unlocked",
      quote: "Applying my new approach learned through Tech Leaders, has led to a new job offer and a promotion",
      image: "KD",
      timeline: "Director → Multiple offers"
    }
  ];

  const comparison = [
    { feature: "Client Acquisition", basic: "Figure it out yourself", scale: "✅ Done-for-you system" },
    { feature: "Pricing Strategy", basic: "Guess and hope", scale: "✅ Proven $15K+ framework" },
    { feature: "Proposal Templates", basic: "Start from scratch", scale: "✅ 40%+ close rate templates" },
    { feature: "Warm Introductions", basic: "Cold outreach only", scale: "✅ 2-4 qualified leads/month" },
    { feature: "Contract Negotiation", basic: "Wing it", scale: "✅ Expert guidance" },
    { feature: "Thought Leadership", basic: "Post when you can", scale: "✅ Done-for-you content" },
    { feature: "Results Timeline", basic: "12+ months", scale: "✅ 90 days to first client" }
  ];

  // FAQ data for structured markup
  const faqData = [
    {
      question: "I just finished Launch Kit. Am I ready for Scale?",
      answer: "If you're consistently getting opportunities and have landed at least one $10K+ engagement, you're perfect for Scale. We'll help you upgrade from projects to recurring fractional roles."
    },
    {
      question: "How is Scale different from Launch?",
      answer: "Launch builds your foundation (ICP, offer, pipeline). Scale transforms that into a premium fractional practice with $15-50K/month recurring engagements and enterprise clients."
    },
    {
      question: "How much can Launch graduates realistically charge?",
      answer: "Launch grads in Scale typically go from $10-15K projects to $20-50K/month retainers. The average is $30K/month across 3 clients within 4-6 months."
    },
    {
      question: "What support do I get in Scale?",
      answer: "Weekly 1-on-1 coaching with Todd, done-for-you content, warm intros to enterprise clients, fractional exec templates, and our private Scale community of 6-figure earners."
    }
  ];

  // Generate structured data
  const courseStructuredData = generateCourseStructuredData(
    "Scale Program - Grow Your Tech Leadership Business",
    "Transform your expertise into a scalable business. For technical leaders ready to build consulting practices, advisory roles, and thought leadership platforms.",
    "$2497"
  );

  const faqStructuredData = generateFAQStructuredData(faqData);

  // Combine structured data
  const combinedStructuredData = [courseStructuredData, faqStructuredData];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Scale Program - Grow Your Tech Leadership Business"
        description="Transform your expertise into a scalable business. For technical leaders ready to build consulting practices, advisory roles, and thought leadership platforms."
        keywords={['tech leadership business', 'consulting for CTOs', 'technical advisory', 'fractional CTO', 'tech thought leadership']}
        structuredData={combinedStructuredData}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-500/10 to-red-600/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/scale-bg.png"
            alt="Scale background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-700 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Rocket className="w-4 h-4" />
              <span>The Next Step After Launch Kit</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              You Launched. You're Getting Opportunities.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mt-2">
                Now Scale to $30K+ Months
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Turn your momentum into a 6-figure business.
              Graduate from individual opportunities to premium recurring engagements
              with Fortune 500s and funded startups.
            </p>

            <div className="mb-8 p-4 bg-blue-500/10 rounded-lg max-w-2xl mx-auto">
              <p className="text-sm font-semibold text-blue-700 dark:text-blue-400">
                <Zap className="w-4 h-4 inline mr-2" />
                <a href="/launch" className="underline">Launch Kit Alumni</a>: Your proven track record makes you perfect for Scale.
                Use code LAUNCH20 for exclusive pricing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-8 py-6"
                onClick={() => window.location.href = "/call"}
              >
                Apply for Scale Program
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6"
                onClick={() => setIsVideoModalOpen(true)}
              >
                See Launch → Scale Success Stories
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              🔴 Only 3 spots left • Open Enrollment
            </p>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-8">
            Built By Tech Leaders, For Tech Leaders At Top Companies Like
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <img
              src="/nike.png"
              alt="Nike"
              className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity object-contain"
            />
            <img
              src="/peleton.webp"
              alt="Peloton"
              className="h-24 w-auto opacity-70 hover:opacity-100 transition-opacity object-contain"
              style={{ maxHeight: '6rem' }}
            />
            <img
              src="/cashapp.svg"
              alt="Cash App"
              className="h-20 w-auto opacity-70 hover:opacity-100 transition-opacity object-contain"
              style={{ maxHeight: '5rem' }}
            />
            <img
              src="/redhat.webp"
              alt="Red Hat"
              className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity object-contain"
            />
            <img
              src="/calendly.webp"
              alt="Calendly"
              className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity object-contain"
            />
            <img
              src="/gitlab.png"
              alt="GitLab"
              className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity object-contain"
            />
          </div>
        </div>
      </section>

      {/* Launch to Scale Journey Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-500/5 to-orange-500/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Your Journey From Launch to Scale
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              You've already built the foundation. Now multiply your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 border-2 border-blue-500/20 hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Launch Kit Success</h3>
              <p className="text-muted-foreground text-sm mb-3">You completed Launch and now have:</p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Clear ICP & positioning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Proven $10K+ offer</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Steady opportunity flow</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border-2 border-orange-500/20 hover:border-orange-500/50 transition-all">
              <div className="w-12 h-12 mb-4 rounded-full bg-orange-500/20 flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Ready for Scale</h3>
              <p className="text-muted-foreground text-sm mb-3">You're experiencing:</p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">→</span>
                  <span className="text-foreground">Too many small engagements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">→</span>
                  <span className="text-foreground">Hitting income ceiling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">→</span>
                  <span className="text-foreground">Want fractional role</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border-2 border-red-500/20 hover:border-red-500/50 transition-all">
              <div className="w-12 h-12 mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Scale Transformation</h3>
              <p className="text-muted-foreground text-sm mb-3">In 90 days you'll have:</p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">$15-50K/mo engagements</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">3-5 premium clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">True location freedom</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="text-center">
            <Card className="inline-flex items-center gap-4 p-4 bg-gradient-to-r from-blue-500/10 to-orange-500/10">
              <Rocket className="w-6 h-6 text-orange-600" />
              <p className="font-semibold text-foreground">
                87% of Launch graduates who join Scale hit $30K/month within 4 months
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-3xl font-bold">93%</p>
              <p className="text-orange-100">Land first client in 90 days</p>
            </div>
            <div>
              <p className="text-3xl font-bold">$30K</p>
              <p className="text-orange-100">Average monthly revenue</p>
            </div>
            <div>
              <p className="text-3xl font-bold">3.2x</p>
              <p className="text-orange-100">Increase in hourly rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold">32hrs</p>
              <p className="text-orange-100">Average work week</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Your Fractional Executive Future
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <outcome.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{outcome.title}</h3>
                <p className="text-muted-foreground">{outcome.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Your Fractional Success System
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Everything you need to build a 6-figure fractional practice
          </p>

          <div className="space-y-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground mb-2">{service.description}</p>
                    <p className="text-sm text-orange-600 dark:text-orange-400 font-medium">{service.frequency}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-8">
                    <p className="text-2xl font-bold text-foreground">{service.value}</p>
                    <p className="text-sm text-muted-foreground">value</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-8 p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-orange-200 dark:border-orange-800">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground mb-2">
                Total Value: <span className="line-through text-muted-foreground">$26,000</span>
              </p>
              <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                Your Investment: $2,497/month
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Less than 10% of your first fractional engagement
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Launch Graduates Who Scaled to 6-Figures
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            See how they leveraged their Launch momentum to build fractional practices
          </p>
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-orange-500 to-red-600 p-8 text-white">
                    <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center text-3xl font-bold">
                      {study.image}
                    </div>
                    <h3 className="text-xl font-bold text-center mb-2">{study.name}</h3>
                    <p className="text-sm text-orange-100 text-center">{study.timeline}</p>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground">After Launch Kit:</p>
                      <p className="font-semibold text-foreground">{study.before}</p>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground">After Scale Program:</p>
                      <p className="font-semibold text-green-600 dark:text-green-400">{study.after}</p>
                    </div>
                    <p className="text-2xl font-bold text-foreground mb-4">{study.result}</p>
                    <p className="text-muted-foreground italic">"{study.quote}"</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Why Leaders Choose Our System
          </h2>
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-semibold text-foreground">What You Need</th>
                    <th className="text-center p-4 font-semibold text-muted-foreground">DIY Approach</th>
                    <th className="text-center p-4 font-semibold text-orange-600 dark:text-orange-400">Our System</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className="border-b hover:bg-secondary/50">
                      <td className="p-4 text-foreground">{row.feature}</td>
                      <td className="text-center p-4 text-muted-foreground">{row.basic}</td>
                      <td className="text-center p-4 text-foreground font-semibold">{row.scale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* ROI Guarantee Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 text-green-600 dark:text-green-400" />
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            The "First Client in 90 Days" Guarantee
          </h2>
          <p className="text-lg text-foreground mb-6 max-w-2xl mx-auto">
            If you don't land your first $10K+ fractional engagement within 90 days
            of starting the program, we'll work with you for free until you do.
            Plus, our 30-day money-back guarantee means you can try risk-free.
          </p>
          <p className="text-muted-foreground">
            93% of our clients land their first engagement within 60 days. We're that confident in our system.
          </p>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Is Scale Your Next Step?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">
                Perfect Fit If You:
              </h3>
              <ul className="space-y-3">
                {[
                  "Completed Launch Kit successfully",
                  "Getting steady opportunities",
                  "Want recurring $15K+ engagements",
                  "Ready to work with enterprise clients",
                  "Can invest 5-10 hrs/week to scale",
                  "Want true location & time freedom"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
              <h3 className="text-xl font-semibold mb-4 text-orange-700 dark:text-orange-400">
                Start with Launch If You:
              </h3>
              <ul className="space-y-3">
                {[
                  "Haven't defined your ICP yet",
                  "Don't have a proven offer",
                  "Need to build initial momentum",
                  "Want to test consulting first",
                  "Haven't landed first clients",
                  "New to thought leadership"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="w-full mt-4 border-orange-300 hover:bg-orange-50"
                onClick={() => window.location.href = "/launch"}
              >
                Start with Launch Kit →
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Common Questions About Going Fractional
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "I just finished Launch Kit. Am I ready for Scale?",
                a: "If you're consistently getting opportunities and have landed at least one $10K+ engagement, you're perfect for Scale. We'll help you upgrade from projects to recurring fractional roles."
              },
              {
                q: "How is Scale different from Launch?",
                a: "Launch builds your foundation (ICP, offer, pipeline). Scale transforms that into a premium fractional practice with $15-50K/month recurring engagements and enterprise clients."
              },
              {
                q: "What if I haven't done Launch Kit yet?",
                a: "We recommend starting with Launch Kit first. It gives you the proven foundation that Scale builds upon. You can upgrade to Scale after completing Launch."
              },
              {
                q: "How much can Launch graduates realistically charge?",
                a: "Launch grads in Scale typically go from $10-15K projects to $20-50K/month retainers. The average is $30K/month across 3 clients within 4-6 months."
              },
              {
                q: "Do I get credit for completing Launch?",
                a: "Yes! Launch graduates get 20% off Scale, plus priority access when spots open. Your Launch success fast-tracks your Scale results."
              },
              {
                q: "What support do I get in Scale?",
                a: "Weekly 1-on-1 coaching with Todd, done-for-you content, warm intros to enterprise clients, fractional exec templates, and our private Scale community of 6-figure earners."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-500/10 to-red-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-flex items-center gap-2 bg-blue-500/10 text-blue-700 dark:text-blue-400 px-6 py-3 rounded-full font-semibold">
            <Award className="w-5 h-5" />
            <span>Exclusive Program for Launch Kit Graduates</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Your Launch Success Qualifies You for Scale
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            You've proven you can land opportunities. Now let's 10x your impact and income
            with premium fractional engagements.
          </p>

          <Card className="p-8 mb-8 bg-gradient-to-br from-card to-orange-500/5">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <p className="text-3xl font-bold text-foreground">87%</p>
                <p className="text-muted-foreground">Launch grads hit $30K/mo</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">4</p>
                <p className="text-muted-foreground">Months to full practice</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">20%</p>
                <p className="text-muted-foreground">Launch alumni discount</p>
              </div>
            </div>

            <div className="space-y-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-12 py-6 w-full md:w-auto"
                onClick={() => window.location.href = "/call"}
              >
                Apply for Scale Program
              </Button>

              <p className="text-sm text-muted-foreground">
                📞 30-min strategy call to discuss your Launch results • 💸 Special Launch graduate pricing
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 max-w-2xl mx-auto mb-8">
            <h3 className="font-semibold text-foreground mb-2">Not a Launch Graduate Yet?</h3>
            <p className="text-muted-foreground mb-4">
              Start with Launch Kit to build your foundation, then upgrade to Scale when you're ready for fractional executive roles.
            </p>
            <Button
              variant="outline"
              className="border-blue-300 hover:bg-blue-50"
              onClick={() => window.location.href = "/launch"}
            >
              Start with Launch Kit ($2,950) →
            </Button>
          </Card>

          <div className="space-y-4">
            <p className="text-muted-foreground">
              Questions about your readiness? Email{" "}
              <a href="mailto:todd@technical-leaders.com" className="text-orange-600 hover:underline">
                todd@technical-leaders.com
              </a>
              {" "}with "Scale Application" in the subject
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span>Rated 4.9/5 by 68 Launch → Scale graduates</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={videoUrl}
      />
    </div>
  );
};

export default Scale;