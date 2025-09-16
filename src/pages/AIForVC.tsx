import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Sparkles, TrendingUp, Clock, Users, Award, Zap, AlertCircle, DollarSign, Shield, Target, Brain } from "lucide-react";
import { useState } from "react";
import VideoModal from "@/components/VideoModal";
import SEO from "@/components/SEO";
import { generateCourseStructuredData } from "@/utils/seo-helpers";
import { trackClick } from "@/utils/posthog";

const AIForVC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoUrl = "https://youtu.be/VKetl72iSlk"; // Replace with actual video

  const benefits = [
    {
      icon: Brain,
      title: "Master Prompt Engineering",
      description: "Write prompts that get perfect results every time - no coding required"
    },
    {
      icon: Zap,
      title: "Build AI Workflows That Work",
      description: "Chain AI tools together to automate 80% of repetitive analysis tasks"
    },
    {
      icon: Target,
      title: "Get Consistent Quality Output",
      description: "Eliminate AI slop with proven templates that deliver professional results"
    }
  ];

  const curriculum = [
    {
      week: "Week 1",
      title: "Master the Art of AI Prompting",
      topics: [
        "Turn vague ideas into crystal-clear AI instructions",
        "Build your personal prompt library for instant results",
        "Learn the 5 prompt patterns that solve 90% of business problems"
      ]
    },
    {
      week: "Week 2",
      title: "Design Workflows That Save Hours Daily",
      topics: [
        "Connect ChatGPT, Claude, and Perplexity into power workflows",
        "Create templates that turn 4-hour tasks into 15-minute reviews",
        "Build repeatable systems for market research and analysis"
      ]
    },
    {
      week: "Week 3",
      title: "Scale Quality Without Adding Headcount",
      topics: [
        "Chain prompts together for complex multi-step analysis",
        "Ensure consistent output quality across your entire team",
        "Create self-improving workflows that get better over time"
      ]
    },
    {
      week: "Week 4",
      title: "Ship Your AI Transformation",
      topics: [
        "Deploy your workflows across the entire organization",
        "Train your team to maintain and improve AI systems",
        "Present measurable ROI from your AI initiatives"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "AI tools have become integral to my daily work, streamlining processes and freeing up significant time for strategic contributions.",
      author: "Joy Mycka",
      title: "Business Analyst, CARDS, Inc."
    },
    {
      quote: "It's enabled me to develop something with no experience of coding, the power this gives me is mind blowing, I can build stuff I could have only dreamt about before.",
      author: "Will Stogdale",
      title: "Owner, Boost Design Agency"
    },
    {
      quote: "The program rewired how I think about solving business problems using AI. I walked away with real skills I use every day to work smarter and faster.",
      author: "Amelia Leigner",
      title: "Head of Product, Seek Invest"
    }
  ];

  const painPoints = [
    {
      stat: "85%",
      label: "of AI projects fail",
      description: "Without proper executive understanding"
    },
    {
      stat: "1%",
      label: "of companies achieve AI maturity",
      description: "Despite massive investments"
    },
    {
      stat: "46%",
      label: "of AI pilots abandoned",
      description: "Due to lack of strategic alignment"
    }
  ];

  const courseStructuredData = generateCourseStructuredData(
    "AI Executive Training for VCs & Private Equity",
    "Master prompt engineering and AI workflows to 10x productivity without coding. 4-week program for venture capitalists and private equity executives."
  );

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Executive Training for VCs & Private Equity - Technical Leaders"
        description="Master prompt engineering and AI workflows without coding. 4-week executive program for venture capitalists and private equity professionals to 10x productivity with AI."
        keywords={['AI for VC', 'AI for private equity', 'executive AI training', 'prompt engineering', 'AI workflows', 'venture capital AI', 'PE AI tools']}
        structuredData={courseStructuredData}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/ai-in-ar.png"
            alt="AI in AR"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/90 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
              <Brain className="w-4 h-4" />
              <span>AI EXECUTIVE TRAINING FOR VCs & PEs</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Learn AI Without
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mt-2">
                Getting Technical
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Master prompt engineering and AI workflows to 10x your productivity without writing a single line of code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-lg px-8 py-6"
                onClick={() => {
                  trackClick('AI For VC - Hero CTA', {
                    location: 'hero_section',
                    destination: 'https://buy.stripe.com/fZe6sa3Up2L9bwAcNl',
                    cta_text: 'Reserve Your Spot - Executive Cohort',
                    target_audience: 'VC_PE'
                  });
                  window.location.href = "https://buy.stripe.com/fZe6sa3Up2L9bwAcNl";
                }}
              >
                Reserve Your Spot - Executive Cohort
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              🗓️ 4-Week Program • 🚀 Next Cohort Starts Soon
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points Banner */}
      <section className="bg-red-500/10 border-y border-red-500/20 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {painPoints.map((point, index) => (
              <div key={index}>
                <p className="text-4xl font-bold text-foreground mb-1">{point.stat}</p>
                <p className="text-lg font-semibold text-foreground mb-1">{point.label}</p>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            The Hidden Cost of Bad AI Prompts
          </h2>
          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-red-500">
              <h3 className="font-semibold text-foreground mb-2">
                "I spend hours tweaking prompts and still get garbage output"
              </h3>
              <p className="text-muted-foreground">- Every executive using ChatGPT</p>
            </Card>
            <Card className="p-6 border-l-4 border-orange-500">
              <h3 className="font-semibold text-foreground mb-2">
                "Our team uses AI but everyone gets different quality results"
              </h3>
              <p className="text-muted-foreground">- Operations Director, PE Fund</p>
            </Card>
            <Card className="p-6 border-l-4 border-yellow-500">
              <h3 className="font-semibold text-foreground mb-2">
                "We have 10 AI tools but no one knows how to connect them effectively"
              </h3>
              <p className="text-muted-foreground">- Managing Partner, VC Fund</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            What You'll Learn to Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            From ChatGPT Novice to AI Power User
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            4 weeks of practical, hands-on training - no technical background required
          </p>

          <div className="space-y-6">
            {curriculum.map((module, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-lg px-3 py-1 text-sm font-semibold">
                    {module.week}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{module.title}</h3>
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0" />
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

      {/* ROI Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-500/5 to-emerald-600/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            The ROI Is Undeniable
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <Shield className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Risk Mitigation</h3>
              <p className="text-muted-foreground mb-4">
                Avoid the 85% AI project failure rate with proven frameworks
              </p>
              <p className="text-2xl font-bold text-green-600">Save $1M+ in failed initiatives</p>
            </Card>
            <Card className="p-6">
              <TrendingUp className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Competitive Edge</h3>
              <p className="text-muted-foreground mb-4">
                Join the 1% achieving mature AI integration
              </p>
              <p className="text-2xl font-bold text-blue-600">3x deal flow capacity</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            What Our Students Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-card to-indigo-500/5">
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
            Executive-Level Support & Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Zap, title: "Prompt Templates Library", desc: "100+ tested prompts for every business scenario" },
              { icon: Users, title: "Live Workflow Building", desc: "Build your AI systems alongside expert instructors" },
              { icon: Award, title: "Custom Workflow Design", desc: "Create workflows specific to your business needs" },
              { icon: Clock, title: "Weekly Office Hours", desc: "Get your specific prompts and workflows debugged" }
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
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

      {/* Who This Is For Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            This Program Is For You If...
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-green-500/20 bg-green-500/5">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                You Are
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• An executive who wants practical AI skills</li>
                <li>• Someone who's tired of generic AI output</li>
                <li>• Ready to build workflows that actually work</li>
                <li>• Looking for consistency across your team</li>
                <li>• Want to save 20+ hours per week</li>
              </ul>
            </Card>
            <Card className="p-6 border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                You're Experiencing
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Inconsistent AI output quality</li>
                <li>• Hours wasted on trial-and-error prompting</li>
                <li>• Team using AI ineffectively</li>
                <li>• No clear workflow or process</li>
                <li>• Feeling overwhelmed by AI options</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Common Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "I can already use ChatGPT. Why do I need this?",
                a: "Using ChatGPT and getting consistent, professional results are completely different skills. We teach you the latter - turning AI from a toy into a productivity multiplier."
              },
              {
                q: "Do I need to know how to code?",
                a: "Absolutely not. Everything we teach is point-and-click or copy-and-paste. If you can write an email, you can master these techniques."
              },
              {
                q: "How quickly will I see results?",
                a: "Most participants save 5+ hours in their first week by applying our prompt templates. By week 4, you'll have workflows running that save 20+ hours weekly."
              },
              {
                q: "What AI tools do we learn?",
                a: "ChatGPT, Claude, Perplexity, and how to connect them into powerful workflows. We focus on tools you can use immediately, not experimental tech."
              },
              {
                q: "Can my team use what I learn?",
                a: "Yes! You'll build shareable prompt libraries and workflows your entire team can use. Many participants become their firm's AI champion."
              },
              {
                q: "What if I can't make the live sessions?",
                a: "All sessions are recorded and available within 24 hours. Plus, you get lifetime access to all materials and updates."
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-500/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Stop Wasting Time on Bad Prompts and Clunky Workflows.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mt-2">
              Start Getting Results.
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Master the tools and workflows that turn AI from a time-sink into a true superpower
          </p>

          <div className="bg-card p-8 rounded-lg shadow-lg mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-lg px-12 py-6 w-full md:w-auto mb-4"
              onClick={() => {
                trackClick('AI For VC - Final CTA', {
                  location: 'final_cta_section',
                  destination: 'https://buy.stripe.com/fZe6sa3Up2L9bwAcNl',
                  cta_text: 'Join Cohort',
                  target_audience: 'VC_PE'
                });
                window.location.href = "https://buy.stripe.com/fZe6sa3Up2L9bwAcNl";
              }}
            >
              Join Cohort
            </Button>

            <p className="text-sm text-muted-foreground">
              📅 Next cohort starts soon
            </p>
          </div>

          <p className="text-muted-foreground">
            Questions? Schedule a confidential consultation:{" "}
            <a href="mailto:todd@technical-leaders.com" className="text-indigo-600 hover:underline">
              todd@technical-leaders.com
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

export default AIForVC;