import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Sparkles, TrendingUp, Clock, Users, Award, Zap, AlertCircle, DollarSign, Shield, Target, Brain, Code2, Database, Wrench } from "lucide-react";
import { useState } from "react";
import VideoModal from "@/components/VideoModal";
import SEO from "@/components/SEO";
import { generateCourseStructuredData } from "@/utils/seo-helpers";

const AIForLeaders = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoUrl = "https://youtu.be/VKetl72iSlk"; // Replace with actual video

  const benefits = [
    {
      icon: Brain,
      title: "Prompt & Context Engineering",
      description: "Master the art of crafting prompts that deliver executive-quality insights and strategic analysis"
    },
    {
      icon: Database,
      title: "AI Tools for Enterprise Data",
      description: "Transform your company's data into actionable intelligence with cutting-edge AI workflows"
    },
    {
      icon: Wrench,
      title: "Build Without Code",
      description: "Create powerful AI prototypes and tools that solve real business problems - no developers needed"
    }
  ];

  const curriculum = [
    {
      week: "Week 1",
      title: "Executive Prompt Engineering Mastery",
      topics: [
        "Design prompts that produce board-ready analysis and reports",
        "Build context frameworks for complex strategic decisions",
        "Create reusable prompt templates for your leadership team"
      ]
    },
    {
      week: "Week 2",
      title: "Enterprise Data Intelligence",
      topics: [
        "Connect AI to your company's data sources securely",
        "Build automated reporting workflows that save days of work",
        "Transform unstructured data into strategic insights"
      ]
    },
    {
      week: "Week 3",
      title: "No-Code AI Tool Creation",
      topics: [
        "Build custom AI tools for your specific business needs",
        "Create prototypes to test ideas before engineering investment",
        "Deploy internal AI solutions without IT dependencies"
      ]
    },
    {
      week: "Week 4",
      title: "AI Strategy Implementation",
      topics: [
        "Develop your organization's AI playbook",
        "Train your team to leverage AI effectively",
        "Measure and communicate AI ROI to stakeholders"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "This program transformed how our executive team approaches AI. We went from talking about AI to actually using it to drive strategic decisions.",
      author: "Sarah Chen",
      title: "CEO, TechCorp Solutions"
    },
    {
      quote: "I built three AI prototypes that are now full products generating $2M ARR. The no-code approach was a game-changer for testing ideas quickly.",
      author: "Michael Rodriguez",
      title: "Chief Innovation Officer, Global Ventures"
    },
    {
      quote: "The prompt engineering techniques alone saved our team 30 hours per week. We're now making data-driven decisions at 10x the speed.",
      author: "Jennifer Walsh",
      title: "EVP Operations, Fortune 500 Company"
    }
  ];

  const painPoints = [
    {
      stat: "73%",
      label: "of executives struggle",
      description: "To get meaningful AI output"
    },
    {
      stat: "89%",
      label: "of companies lack",
      description: "AI implementation strategy"
    },
    {
      stat: "$4.2M",
      label: "average wasted annually",
      description: "On failed AI initiatives"
    }
  ];

  const courseStructuredData = generateCourseStructuredData(
    "AI Executive Training for Senior Leaders",
    "Master prompt engineering, enterprise AI workflows, and no-code tool building. 4-week program for executives and senior leaders to transform their organizations with AI."
  );

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Executive Training for Senior Leaders - Technical Leaders"
        description="Master prompt engineering, AI workflows for enterprise data, and build tools without code. 4-week executive program for C-suite and senior leaders to transform their organizations with AI."
        keywords={['AI for executives', 'AI for leaders', 'executive AI training', 'prompt engineering', 'enterprise AI', 'no-code AI tools', 'AI strategy']}
        structuredData={courseStructuredData}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/ai-playbook-executives.png"
            alt="AI for Leaders"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/90 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
              <Brain className="w-4 h-4" />
              <span>AI EXECUTIVE TRAINING FOR SENIOR LEADERS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Lead Your Organization's
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mt-2">
                AI Transformation
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Master prompt engineering, harness enterprise data with AI, and build powerful tools without writing code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white text-lg px-8 py-6"
                onClick={() => window.location.href = "https://calendly.com/tech-leaders/sync"}
              >
                Join Executive Cohort - Limited Seats
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              🎯 4-Week Intensive • 💼 C-Suite & Senior Leaders Only
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


      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Transform Your Leadership with AI
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
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
            From AI Skeptic to AI Champion
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            4 weeks of intensive, executive-focused training
          </p>

          <div className="space-y-6">
            {curriculum.map((module, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-lg px-3 py-1 text-sm font-semibold">
                    {module.week}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{module.title}</h3>
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
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



      {/* What You Get Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Executive-Level Support & Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Brain, title: "Executive Prompt Library", desc: "500+ tested prompts for strategic analysis and decision-making" },
              { icon: Database, title: "Enterprise AI Playbook", desc: "Complete framework for implementing AI across your organization" },
              { icon: Users, title: "C-Suite Peer Network", desc: "Connect with other senior leaders transforming their companies" },
              { icon: Clock, title: "1-on-1 Strategy Sessions", desc: "Personal guidance on your specific AI challenges and opportunities" }
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center flex-shrink-0">
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
                <li>• A C-suite executive or senior leader</li>
                <li>• Responsible for digital transformation</li>
                <li>• Managing teams that need AI capabilities</li>
                <li>• Looking to build competitive advantage</li>
                <li>• Ready to lead by example with AI</li>
              </ul>
            </Card>
            <Card className="p-6 border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                You're Facing
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Failed or stalled AI initiatives</li>
                <li>• Unclear ROI from AI investments</li>
                <li>• Data silos preventing insights</li>
                <li>• Long development cycles for AI tools</li>
                <li>• Teams struggling with AI adoption</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Executive Questions Answered
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How is this different from generic AI training?",
                a: "This is specifically designed for senior executives. We focus on strategic implementation, enterprise-scale solutions, and building tools that solve million-dollar problems - not just basic ChatGPT usage."
              },
              {
                q: "What if I'm not technical?",
                a: "Perfect. This program is designed for business leaders, not engineers. Everything is taught in business terms with practical applications you can implement immediately."
              },
              {
                q: "How much time commitment is required?",
                a: "4 hours per week for 4 weeks. Sessions are scheduled for executive calendars with recordings available. Most leaders report saving 20+ hours weekly after week 2."
              },
              {
                q: "Can my leadership team join together?",
                a: "Yes, we offer team enrollment with custom workshops for your specific industry and challenges. Contact us for enterprise pricing."
              },
              {
                q: "Is this confidential?",
                a: "Absolutely. All sessions are under NDA. You can discuss your actual business challenges and get specific solutions without concerns about confidentiality."
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600/10 to-indigo-700/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Your Competitors Are Already Moving.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mt-2">
              Will You Lead or Follow?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Join the exclusive cohort of senior leaders mastering AI to transform their organizations
          </p>

          <div className="bg-card p-8 rounded-lg shadow-lg mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white text-lg px-12 py-6 w-full md:w-auto mb-4"
              onClick={() => window.location.href = "https://calendly.com/tech-leaders/sync"}
            >
              Reserve Your Seat - Executive Cohort
            </Button>

            <p className="text-sm text-muted-foreground">
              🎯 Limited to 12 senior leaders per cohort
            </p>
          </div>

          <p className="text-muted-foreground">
            Questions? Schedule a confidential executive briefing:{" "}
            <a href="mailto:todd@technical-leaders.com" className="text-blue-600 hover:underline">
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

export default AIForLeaders;