import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Crown, Users, Target, Briefcase, Phone, Calendar, Trophy, Shield, ArrowUpRight, Star } from "lucide-react";
import { useState } from "react";
import VideoModal from "@/components/VideoModal";

const Scale = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoUrl = "https://www.youtube.com/watch?v=TYCqWRjIm4s"; // Replace with actual video

  const outcomes = [
    {
      icon: Briefcase,
      title: "C-Suite Ready",
      description: "Position yourself for VP, CTO, or board positions within 12 months"
    },
    {
      icon: Trophy,
      title: "$500K+ Comp",
      description: "Command premium packages with equity, bonuses, and advisory income"
    },
    {
      icon: Users,
      title: "Elite Network",
      description: "Direct access to C-suite executives, board members, and investors"
    }
  ];

  const services = [
    {
      title: "Weekly 1-on-1 Executive Coaching",
      description: "Private sessions with Todd to navigate complex challenges and accelerate your ascent",
      frequency: "Every week",
      value: "$2,000/month"
    },
    {
      title: "Done-For-You Content & PR",
      description: "Professional ghostwriting for LinkedIn, speaking engagements, and media features",
      frequency: "4x per week",
      value: "$3,000/month"
    },
    {
      title: "Strategic Introductions",
      description: "Warm intros to decision-makers, board members, and portfolio companies",
      frequency: "2-4 per month",
      value: "Priceless"
    },
    {
      title: "Board Readiness Preparation",
      description: "Mock interviews, governance training, and board deck development",
      frequency: "Monthly workshops",
      value: "$1,500/month"
    },
    {
      title: "Concierge Support",
      description: "Direct Slack access for real-time guidance on negotiations and opportunities",
      frequency: "24/7 availability",
      value: "$1,000/month"
    }
  ];

  const caseStudies = [
    {
      name: "Michael Chen",
      before: "VP Engineering at Series B Startup",
      after: "CTO at Unicorn (18 months)",
      result: "$750K total comp + 0.5% equity",
      quote: "The strategic intros alone paid for the entire program. Todd connected me with the CEO who eventually hired me as CTO.",
      image: "MC"
    },
    {
      name: "Sarah Williams",
      before: "Director at FAANG",
      after: "Board Member (3 companies)",
      result: "$300K in board comp annually",
      quote: "I never imagined I'd be on boards this quickly. The preparation and positioning were game-changing.",
      image: "SW"
    },
    {
      name: "James Rodriguez",
      before: "Senior Staff Engineer",
      after: "VP Engineering + Advisor",
      result: "$450K salary + $200K advisory",
      quote: "Todd helped me see I was playing too small. Now I'm leading 200+ engineers and advising startups.",
      image: "JR"
    }
  ];

  const comparison = [
    { feature: "Weekly 1-on-1 Coaching", basic: "❌", scale: "✅ Every week" },
    { feature: "Content Ghostwriting", basic: "DIY templates", scale: "✅ Done for you" },
    { feature: "Strategic Introductions", basic: "❌", scale: "✅ 2-4/month" },
    { feature: "Board Prep", basic: "❌", scale: "✅ Full program" },
    { feature: "Response Time", basic: "48 hours", scale: "✅ Same day" },
    { feature: "Network Access", basic: "Community only", scale: "✅ Todd's network" },
    { feature: "Guarantee", basic: "Standard", scale: "✅ 2X ROI guarantee" }
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
              <Crown className="w-4 h-4" />
              <span>For Senior Leaders Ready to Scale</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Your Fast Track to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mt-2">
                C-Suite & Board Positions
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              The white-glove program for accomplished tech leaders who are done playing small. 
              Get the coaching, connections, and positioning to command $500K+ packages.
            </p>
            
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
                Watch Client Success Stories
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              Limited to 10 clients at a time • Application required
            </p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-3xl font-bold">87%</p>
              <p className="text-orange-100">Get promoted within 12 months</p>
            </div>
            <div>
              <p className="text-3xl font-bold">$500K+</p>
              <p className="text-orange-100">Average client compensation</p>
            </div>
            <div>
              <p className="text-3xl font-bold">23</p>
              <p className="text-orange-100">Board appointments secured</p>
            </div>
            <div>
              <p className="text-3xl font-bold">10:1</p>
              <p className="text-orange-100">Average ROI on investment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Where Scale Program Takes You
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
            Your Executive Acceleration Package
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Everything done for you, nothing left to chance
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
                Total Monthly Value: <span className="line-through text-muted-foreground">$7,500+</span>
              </p>
              <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                Your Investment: From $850/month
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Custom pricing based on your goals and timeline
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Real Clients, Real Results
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
            Scale vs. Other Programs
          </h2>
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-semibold text-foreground">Feature</th>
                    <th className="text-center p-4 font-semibold text-muted-foreground">Other Programs</th>
                    <th className="text-center p-4 font-semibold text-orange-600 dark:text-orange-400">Scale Program</th>
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
            The "2X ROI or Your Money Back" Guarantee
          </h2>
          <p className="text-lg text-foreground mb-6 max-w-2xl mx-auto">
            If you don't see at least 2X return on your investment within 12 months 
            (through salary increase, new position, or advisory income), 
            we'll refund 100% of your fees. That's how confident we are.
          </p>
          <p className="text-muted-foreground">
            No other executive coaching program offers this guarantee. We put our money where our mouth is.
          </p>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Is Scale Right for You?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">
                Perfect Fit If You:
              </h3>
              <ul className="space-y-3">
                {[
                  "Are currently Director level or above",
                  "Have 10+ years of experience",
                  "Want C-suite or board positions",
                  "Can invest $850+/month",
                  "Are coachable and action-oriented",
                  "Want everything done for you"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ArrowUpRight className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
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
                  "Are early in your career (<10 years)",
                  "Want a DIY approach",
                  "Aren't ready to invest in growth",
                  "Prefer group programs only",
                  "Are looking for quick fixes",
                  "Can't commit 5+ hours/week"
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
            Common Questions About Scale
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How is this different from executive coaching?",
                a: "Most executive coaches give advice. We do the work. You get weekly 1-on-1s PLUS we handle your content, PR, and introductions. It's coaching + done-for-you execution."
              },
              {
                q: "What's the time commitment?",
                a: "Weekly 60-minute coaching calls + 2-3 hours reviewing/approving content and preparing for introductions. We handle the heavy lifting."
              },
              {
                q: "How quickly will I see results?",
                a: "Most clients see significant opportunities within 90 days. Promotions and board positions typically happen within 6-12 months."
              },
              {
                q: "Is there a contract?",
                a: "We offer month-to-month after an initial 3-month commitment. Most clients stay 12-18 months to maximize results."
              },
              {
                q: "How do you make strategic introductions?",
                a: "Todd has a network of 500+ senior tech leaders. We make warm intros based on mutual benefit and timing. Quality over quantity."
              },
              {
                q: "Can my company pay for this?",
                a: "Yes! 60% of Scale clients get full or partial reimbursement through L&D budgets or executive coaching allowances."
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
            Ready to Accelerate Your Ascent?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join an exclusive group of tech leaders going from senior to C-suite
          </p>
          
          <Card className="p-8 mb-8 bg-gradient-to-br from-card to-orange-500/5">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <p className="text-3xl font-bold text-foreground">10</p>
                <p className="text-muted-foreground">Spots available</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">$850+</p>
                <p className="text-muted-foreground">Monthly investment</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">2X</p>
                <p className="text-muted-foreground">ROI guarantee</p>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-12 py-6 w-full md:w-auto mb-4"
              onClick={() => window.location.href = "/call"}
            >
              Apply for Scale Program
            </Button>
            
            <p className="text-sm text-muted-foreground">
              🎯 Application required • 📞 Includes strategy call with Todd
            </p>
          </Card>
          
          <p className="text-muted-foreground">
            Have questions? Email{" "}
            <a href="mailto:todd@technical-leaders.com" className="text-orange-600 hover:underline">
              todd@technical-leaders.com
            </a>
            {" "}directly
          </p>
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