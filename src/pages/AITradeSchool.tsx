import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Sparkles, TrendingUp, Clock, Users, Award, Zap, AlertCircle } from "lucide-react";
import { useState } from "react";
import VideoModal from "@/components/VideoModal";

const AITradeSchool = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoUrl = "https://www.youtube.com/watch?v=TYCqWRjIm4s"; // Replace with actual video

  const benefits = [
    {
      icon: TrendingUp,
      title: "10x Your Output",
      description: "Learn to leverage AI tools to deliver better work in half the time"
    },
    {
      icon: Sparkles,
      title: "Avoid AI Slop",
      description: "Master techniques to create authentic, high-quality content that doesn't feel AI-generated"
    },
    {
      icon: Award,
      title: "Stand Out",
      description: "Position yourself as the AI-savvy leader in your organization"
    }
  ];

  const curriculum = [
    {
      week: "Weeks 1-3",
      title: "AI Foundations & Prompt Engineering",
      topics: ["ChatGPT/Claude mastery", "Advanced prompting techniques", "AI workflow optimization"]
    },
    {
      week: "Weeks 4-6",
      title: "Content Creation & Automation",
      topics: ["AI writing that doesn't suck", "Image & video generation", "Workflow automation tools"]
    },
    {
      week: "Weeks 7-9",
      title: "Technical AI Applications",
      topics: ["Code generation & review", "Data analysis with AI", "Custom GPT development"]
    },
    {
      week: "Weeks 10-12",
      title: "Launch Your AI Project",
      topics: ["Real-world implementation", "Demo day preparation", "Scaling AI initiatives"]
    }
  ];

  const testimonials = [
    {
      quote: "I went from spending 8 hours on reports to 2 hours. The techniques Todd taught me saved my sanity and got me promoted.",
      author: "Sarah Chen",
      title: "Senior Product Manager, Stripe"
    },
    {
      quote: "Finally, AI training that's actually practical. No fluff, just real tools and workflows I use every day.",
      author: "Marcus Johnson",
      title: "Engineering Lead, Microsoft"
    },
    {
      quote: "The Demo Day forced me to actually build something. Now I'm known as the 'AI guy' at my company.",
      author: "Emily Rodriguez",
      title: "VP of Marketing, Series B Startup"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-500/10 to-teal-600/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>12-Week Cohort Starting Soon</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Master AI Tools Without
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600 mt-2">
                Becoming a Robot
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Join 500+ tech leaders who learned to leverage AI to 10x their output while maintaining authenticity. 
              Stop producing "AI slop" and start creating work that gets you promoted.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-lg px-8 py-6"
                onClick={() => window.location.href = "/call"}
              >
                Reserve Your Spot - $1000
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => setIsVideoModalOpen(true)}
              >
                Watch Demo Day Highlights
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              Only 25 spots per cohort • Next cohort starts January 20th
            </p>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="bg-orange-500/10 border-y border-orange-500/20 py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-3 text-center">
          <AlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0" />
          <p className="text-foreground font-medium">
            <strong>Early Bird Special:</strong> Save $200 when you enroll by January 10th
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Why Tech Leaders Choose AI Trade School
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            12 Weeks to AI Mastery
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Practical, hands-on training that you can apply immediately
          </p>
          
          <div className="space-y-6">
            {curriculum.map((module, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-lg px-3 py-1 text-sm font-semibold">
                    {module.week}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{module.title}</h3>
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span className="text-muted-foreground">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Join 500+ Tech Leaders Who Transformed Their Careers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-card to-emerald-500/5">
                <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Everything You Need to Succeed
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Zap, title: "12 Live Weekly Sessions", desc: "Interactive workshops every Tuesday at 6pm PT" },
              { icon: Users, title: "Private Community Access", desc: "Connect with your cohort and 500+ alumni" },
              { icon: Award, title: "Demo Day Presentation", desc: "Show off your AI project to the community" },
              { icon: Clock, title: "Lifetime Access", desc: "Recordings, resources, and community forever" }
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Common Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "I'm not technical. Is this for me?",
                a: "Absolutely! 60% of our students are non-technical. We start with the basics and make sure everyone succeeds."
              },
              {
                q: "What if I can't make a live session?",
                a: "All sessions are recorded and available within 24 hours. Plus, you get lifetime access to all materials."
              },
              {
                q: "Is there a money-back guarantee?",
                a: "Yes! If you're not satisfied after the first two weeks, we'll refund your investment, no questions asked."
              },
              {
                q: "How much time should I dedicate?",
                a: "Plan for 2-3 hours per week: 90-minute live session + 30-60 minutes of practice."
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-500/10 to-teal-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to 10x Your Output with AI?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the next cohort and transform how you work in just 12 weeks
          </p>
          
          <div className="bg-card p-8 rounded-lg shadow-lg mb-8">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <p className="text-3xl font-bold text-foreground">$1000</p>
                <p className="text-muted-foreground">One-time investment</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">25</p>
                <p className="text-muted-foreground">Spots available</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">Jan 20</p>
                <p className="text-muted-foreground">Next cohort starts</p>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-lg px-12 py-6 w-full md:w-auto"
              onClick={() => window.location.href = "/call"}
            >
              Reserve Your Spot Now
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              💳 Payment plans available • 🔒 14-day money-back guarantee
            </p>
          </div>
          
          <p className="text-muted-foreground">
            Questions? Email us at{" "}
            <a href="mailto:support@technical-leaders.com" className="text-emerald-600 hover:underline">
              support@technical-leaders.com
            </a>
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

export default AITradeSchool;