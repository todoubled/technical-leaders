import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Zap, TrendingUp, Users, Award, Target, FileText, Calendar, ArrowRight, Star } from "lucide-react";
import { useState } from "react";
import VideoModal from "@/components/VideoModal";

const Launch = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoUrl = "https://www.youtube.com/watch?v=TYCqWRjIm4s"; // Replace with actual video

  const transformations = [
    {
      before: "Spending 40+ hours/week grinding at work",
      after: "Working 30 hours/week with 2x the impact"
    },
    {
      before: "Unknown outside your company",
      after: "Recognized industry expert with inbound opportunities"
    },
    {
      before: "$200k salary feeling stuck",
      after: "$350k+ total comp with multiple income streams"
    },
    {
      before: "Hoping for promotion every year",
      after: "Choosing between multiple executive offers"
    }
  ];

  const modules = [
    {
      icon: Target,
      title: "Marketing System (ICP)",
      week: "Weeks 1-2",
      description: "Define your Ideal Customer Profile and position yourself as their perfect solution",
      outcomes: [
        "Crystal clear on who you serve",
        "Magnetic positioning statement",
        "Profile optimized for your ICP"
      ]
    },
    {
      icon: FileText,
      title: "Sales Playbook (Scalable Offer)",
      week: "Weeks 3-4",
      description: "Package your expertise into high-value offers that practically sell themselves",
      outcomes: [
        "$10k+ offer framework",
        "Sales scripts that convert",
        "Objection handling mastery"
      ]
    },
    {
      icon: Zap,
      title: "Revenue Generating Activities",
      week: "Weeks 5-12",
      description: "Execute daily actions that directly lead to new opportunities and income",
      outcomes: [
        "3 months of content written for you",
        "Weekly accountability check-ins",
        "Real results in real time"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "I went from unknown engineer to CTO in 18 months. The positioning work alone was worth 10x the investment.",
      author: "David Park",
      title: "CTO at Series A Startup",
      income: "Went from $180k → $400k total comp",
      stars: 5
    },
    {
      quote: "The ghostwritten content saved me 20 hours/week and landed me 3 board advisor positions.",
      author: "Maria Santos",
      title: "VP Engineering at Fortune 500",
      income: "Added $150k in advisory income",
      stars: 5
    },
    {
      quote: "I finally stopped underselling myself. Now companies compete to hire me.",
      author: "James Wilson",
      title: "Principal Engineer turned Consultant",
      income: "$500k+ consulting revenue in year 1",
      stars: 5
    }
  ];

  const bonuses = [
    {
      title: "AI Automation Templates",
      value: "$497",
      description: "Save 10+ hours/week with our proven AI workflows"
    },
    {
      title: "Premium Positioning Audit",
      value: "$997",
      description: "1-on-1 session to nail your unique positioning"
    },
    {
      title: "Lifetime Alumni Access",
      value: "Priceless",
      description: "Connect with 200+ successful tech leaders forever"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500/10 to-purple-600/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              <span>The Most Popular Program for Tech Leaders</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Get Ideal Opportunities
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mt-2">
                Even If You Hate Selling Yourself
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              The complete system that's helped 200+ tech leaders go from overlooked to overbooked 
              with premium opportunities – without the cringe of self-promotion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg px-8 py-6"
                onClick={() => window.location.href = "/call"}
              >
                Start Your Transformation - $2950
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => setIsVideoModalOpen(true)}
              >
                Watch Success Stories
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              🔥 5 spots left this quarter • 💳 Payment plans available
            </p>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Where You Are Now → Where You'll Be in 90 Days
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {transformations.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-1">
                  <Card className="p-4 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
                    <p className="text-sm font-medium text-red-700 dark:text-red-400">Before</p>
                    <p className="text-foreground">{item.before}</p>
                  </Card>
                </div>
                <ArrowRight className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                <div className="flex-1">
                  <Card className="p-4 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                    <p className="text-sm font-medium text-green-700 dark:text-green-400">After</p>
                    <p className="text-foreground">{item.after}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The System Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            The 3-Part System That Changes Everything
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Stop hoping for opportunities. Start creating them.
          </p>
          
          <div className="space-y-8">
            {modules.map((module, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white">
                    <module.icon className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{module.title}</h3>
                    <p className="text-blue-100">{module.week}</p>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <p className="text-lg text-foreground mb-4">{module.description}</p>
                    <div className="space-y-2">
                      {module.outcomes.map((outcome, outcomeIndex) => (
                        <div key={outcomeIndex} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-muted-foreground">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            200+ Tech Leaders Have Transformed Their Careers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  <p className="text-sm font-semibold text-green-600 dark:text-green-400 mt-2">
                    {testimonial.income}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Everything You Get With Launch Kit
          </h2>
          
          <Card className="p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Core Program ($2950 Value)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "12 weeks of intensive training",
                "Weekly live workshops (recorded)",
                "Done-for-you content (3 months)",
                "Personal positioning blueprint",
                "Sales playbook & scripts",
                "Private community access",
                "Direct access to Todd",
                "Lifetime alumni network"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-foreground">Plus These Exclusive Bonuses:</h3>
            <div className="space-y-4">
              {bonuses.map((bonus, index) => (
                <Card key={index} className="p-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground">{bonus.title}</h4>
                    <p className="text-sm text-muted-foreground">{bonus.description}</p>
                  </div>
                  <span className="text-lg font-bold text-green-600 dark:text-green-400">
                    {bonus.value}
                  </span>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-2xl font-bold text-foreground mb-2">
              Total Value: <span className="line-through text-muted-foreground">$4,444</span>
            </p>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              Your Investment: $2,950
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Save $1,494 when you join today
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-16 h-16 mx-auto mb-6 text-green-600 dark:text-green-400" />
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            The "Premium Opportunity" Guarantee
          </h2>
          <p className="text-lg text-foreground mb-6 max-w-2xl mx-auto">
            If you complete the program and don't receive at least one premium opportunity 
            (promotion, new role, consulting gig, or speaking engagement) within 6 months, 
            we'll work with you for free until you do.
          </p>
          <p className="text-muted-foreground">
            That's how confident we are in this system. Zero risk, all reward.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Questions? We've Got Answers
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "I'm introverted and hate self-promotion. Will this work for me?",
                a: "Absolutely. Our system is designed for technical people who hate traditional networking. We focus on demonstrating expertise, not bragging."
              },
              {
                q: "How much time do I need to invest?",
                a: "Plan for 3-5 hours per week: 90-minute workshop + 2-3 hours implementing. The ghostwritten content saves you 10+ hours/week."
              },
              {
                q: "What if I'm already senior level?",
                a: "Perfect. This program helps senior leaders break through to executive and board-level opportunities. Many students are already Directors/VPs."
              },
              {
                q: "Is there a payment plan?",
                a: "Yes! We offer 3-month and 6-month payment plans. You can also use your learning budget or get employer sponsorship."
              },
              {
                q: "What makes this different from other programs?",
                a: "We do the heavy lifting for you. While others teach theory, we give you done-for-you content, templates, and scripts. You just execute."
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

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Stop Waiting for Opportunities to Find You
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join 200+ tech leaders who took control of their careers and income
          </p>
          
          <Card className="p-8 mb-8 bg-gradient-to-br from-card to-blue-500/5">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <p className="text-3xl font-bold text-foreground">$2,950</p>
                <p className="text-muted-foreground">One-time investment</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">90 Days</p>
                <p className="text-muted-foreground">To transformation</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">5 Spots</p>
                <p className="text-muted-foreground">Left this quarter</p>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg px-12 py-6 w-full md:w-auto mb-4"
              onClick={() => window.location.href = "/call"}
            >
              Yes! I Want Premium Opportunities
            </Button>
            
            <p className="text-sm text-muted-foreground">
              🛡️ Protected by our Premium Opportunity Guarantee
            </p>
          </Card>
          
          <p className="text-muted-foreground">
            Still have questions? Email{" "}
            <a href="mailto:support@technical-leaders.com" className="text-blue-600 hover:underline">
              support@technical-leaders.com
            </a>
            {" "}or{" "}
            <button 
              onClick={() => window.location.href = "/call"}
              className="text-blue-600 hover:underline"
            >
              book a call
            </button>
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

export default Launch;