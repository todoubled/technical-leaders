import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Briefcase, Users, Target, TrendingUp, Phone, Calendar, CheckCircle, Shield, ArrowRight, Star, Clock, DollarSign } from "lucide-react";
import { useState } from "react";
import VideoModal from "@/components/VideoModal";

const Scale = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoUrl = "https://www.youtube.com/watch?v=TYCqWRjIm4s"; // Replace with actual video

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
      name: "Maria Thompson",
      before: "Full-time CTO at $350K",
      after: "Fractional CTO for 3 companies",
      result: "$480K working 30 hours/week",
      quote: "I'm making 40% more money working 25% fewer hours. The freedom to choose my clients is priceless.",
      image: "MT"
    },
    {
      name: "David Park",
      before: "VP Engineering looking for next role",
      after: "Fractional VP + Technical Advisor",
      result: "$35K/month across 4 engagements",
      quote: "Instead of one employer, I now have a portfolio. Todd's system helped me go from zero to fully booked in 90 days.",
      image: "DP"
    },
    {
      name: "Jennifer Liu",
      before: "Burned out Director at FAANG",
      after: "Executive Advisor & Consultant",
      result: "$300K/year at 50% capacity",
      quote: "I thought I'd have to take a pay cut for flexibility. Todd showed me how to double my hourly rate instead.",
      image: "JL"
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

  return (
    <div className="min-h-screen bg-background">
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
              <Briefcase className="w-4 h-4" />
              <span>The Premium Path to Fractional Executive</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Go From Senior Employee to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mt-2">
                $30K/Month Fractional Leader
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              The done-for-you system that helps senior tech leaders build 6-figure fractional
              practices in 90 days. Work less, earn more, choose your clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-8 py-6"
                onClick={() => window.location.href = "/call"}
              >
                Book Your Strategy Call
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6"
                onClick={() => setIsVideoModalOpen(true)}
              >
                See How Others Did It
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              🔴 Only 3 spots left this quarter • First client in 90 days or your money back
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
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            From Employee to Fractional Executive
          </h2>
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-orange-500 to-red-600 p-8 text-white">
                    <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center text-3xl font-bold">
                      {study.image}
                    </div>
                    <h3 className="text-xl font-bold text-center">{study.name}</h3>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground">Before Scale:</p>
                      <p className="font-semibold text-foreground">{study.before}</p>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground">After Scale:</p>
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
            Is Fractional Right for You?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">
                Perfect Fit If You:
              </h3>
              <ul className="space-y-3">
                {[
                  "Have 10+ years of technical leadership",
                  "Want flexibility and autonomy",
                  "Tired of corporate politics",
                  "Ready to 3-5x your hourly rate",
                  "Want to choose your clients",
                  "Can commit to building a practice"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
              <h3 className="text-xl font-semibold mb-4 text-red-700 dark:text-red-400">
                Not Right If You:
              </h3>
              <ul className="space-y-3">
                {[
                  "Need steady W2 income immediately",
                  "Uncomfortable with sales/marketing",
                  "Want to stay anonymous",
                  "Can't invest in your business",
                  "Expect overnight success",
                  "Not willing to build relationships"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400">✕</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
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
                q: "How do I find fractional clients?",
                a: "We provide warm introductions to 2-4 qualified prospects monthly, plus teach you our proven outreach system that converts at 40%+. No cold calling required."
              },
              {
                q: "What can I realistically charge?",
                a: "Our clients typically charge $15K-50K/month per engagement. We help you price based on value, not hours. Most see a 3x increase in their effective hourly rate."
              },
              {
                q: "How long until I'm fully booked?",
                a: "93% of clients land their first engagement within 90 days. Full practice (3-4 clients) typically happens in months 4-6."
              },
              {
                q: "What if I've never consulted before?",
                a: "Perfect! We provide everything: contracts, proposals, pricing frameworks, and negotiation scripts. Plus weekly coaching to handle any situation."
              },
              {
                q: "Do I need to quit my job first?",
                a: "No! 70% of clients start while employed and transition once they hit $20K/month. We help you navigate the transition smoothly."
              },
              {
                q: "What's included in the investment?",
                a: "Weekly 1-on-1 coaching, done-for-you content creation, warm introductions, all templates/frameworks, and our private Slack community. Everything you need to succeed."
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
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Build Your Fractional Practice?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join 127+ tech leaders who've gone from employee to fractional executive
          </p>

          <Card className="p-8 mb-8 bg-gradient-to-br from-card to-orange-500/5">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <p className="text-3xl font-bold text-foreground">3</p>
                <p className="text-muted-foreground">Spots left this quarter</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">90</p>
                <p className="text-muted-foreground">Days to first client</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">$30K</p>
                <p className="text-muted-foreground">Avg monthly revenue</p>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-12 py-6 w-full md:w-auto mb-4"
              onClick={() => window.location.href = "/call"}
            >
              Start Your Fractional Journey
            </Button>

            <p className="text-sm text-muted-foreground">
              📞 Free 30-minute strategy call • 💸 30-day money-back guarantee
            </p>
          </Card>

          <div className="space-y-4">
            <p className="text-muted-foreground">
              Have questions? Email{" "}
              <a href="mailto:todd@technical-leaders.com" className="text-orange-600 hover:underline">
                todd@technical-leaders.com
              </a>
              {" "}or text (555) 123-4567
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span>Rated 4.9/5 by 127 fractional leaders</span>
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