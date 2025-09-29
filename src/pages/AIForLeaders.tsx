import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Sparkles, TrendingUp, Clock, Users, Award, Zap, AlertCircle, DollarSign, Shield, Target, Brain, Code2, Database, Wrench, GitBranch } from "lucide-react";
import { useState } from "react";
import VideoModal from "@/components/VideoModal";
import SEO from "@/components/SEO";
import { generateCourseStructuredData } from "@/utils/seo-helpers";
import { trackClick } from "@/utils/posthog";

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
    },
    {
      icon: GitBranch,
      title: "Change Management Excellence",
      description: "Navigate organizational resistance and drive AI adoption with proven change management frameworks tailored for tech teams"
    }
  ];

  const curriculum = [
    {
      week: "Module 1",
      title: "Executive Prompt Engineering Mastery",
      topics: [
        "Design prompts that produce board-ready analysis and reports",
        "Build context frameworks for complex strategic decisions",
        "Create reusable prompt templates for your leadership team"
      ]
    },
    {
      week: "Module 2",
      title: "Enterprise Data Intelligence",
      topics: [
        "Connect AI to your company's data sources securely",
        "Build automated reporting workflows that save days of work",
        "Transform unstructured data into strategic insights"
      ]
    },
    {
      week: "Module 3",
      title: "No-Code AI Tool Creation",
      topics: [
        "Build custom AI tools for your specific business needs",
        "Create prototypes to test ideas before engineering investment",
        "Deploy internal AI solutions without IT dependencies"
      ]
    },
    {
      week: "Module 4",
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
            src="/ai-in-ar.png"
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
              <span>TAILORED AI PROGRAMS • INTENSIVE WORKSHOPS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Lead Your Organization's
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mt-2">
                AI Transformation
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Get a personalized AI roadmap for your organization. Choose from intensive workshops, cohort programs, or 1:1 executive coaching.
            </p>

            {/* Testimonial Headline */}
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                "AI Transformed How I Work - Watch My 2-Minute Story"
              </h2>
              <p className="text-lg text-muted-foreground">
                Why this hands-on program delivers more practical results than Oxford or MIT's academic courses
              </p>
            </div>

            {/* YouTube Video Embed */}
            <div className="w-full max-w-3xl mx-auto mb-3">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                  src="https://www.youtube.com/embed/LyY-glR6P_8"
                  title="Pamela Johnston - AI Executive Training Testimonial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Pamela Johnston Attribution */}
            <div className="text-center mb-8">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold">Pamela Johnston</span> • Senior Business Analyst
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => {
                  trackClick('AI For Leaders - Hero CTA', {
                    location: 'hero_section',
                    destination: 'https://calendly.com/tech-leaders/ai-strategy-session',
                    cta_text: 'Book Strategy Session'
                  });
                  window.location.href = "https://calendly.com/tech-leaders/ai-strategy-session";
                }}
              >
                Book Strategy Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="py-12 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="bg-white dark:bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">
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
        </div>
      </section>

      {/* Tailored Program Options Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Choose Your Perfect Format
            </h2>
            <p className="text-lg text-muted-foreground">
              Every program is customized to your specific industry, challenges, and goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow relative">
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-sm">
                MOST POPULAR
              </div>
              <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">3-Session Training Program</h3>
              <p className="text-muted-foreground mb-4">
                Deep-dive program with peer learning and ongoing support. Maximum transformation impact.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-foreground">Weekly 2-hour sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-foreground">Peer networking & collaboration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-foreground">Lifetime access to Weekly Office Hours</span>
                </li>
              </ul>

              <div className="border-t pt-4 space-y-3">
                <div className="space-y-3">
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-background mb-1">For Individuals</p>
                    <p className="text-xs text-muted-foreground mb-2">Open enrollment</p>
                    <Button
                      size="sm"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                      onClick={() => {
                        trackClick('AI For Leaders - Individual Training', {
                          location: '3-session_program',
                          destination: 'https://buy.stripe.com/4gMeVdfXPgf5e2ec7yaMU0E',
                          cta_text: 'Enroll Now - $2,500',
                          price: '$2500'
                        });
                        window.location.href = "https://buy.stripe.com/4gMeVdfXPgf5e2ec7yaMU0E";
                      }}
                    >
                      Enroll Now - $2,500
                    </Button>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-background mb-1">For Organizations</p>
                    <p className="text-xs text-muted-foreground mb-2">Live customized training for up to 30 seats - $50k</p>
                    <Button
                      size="sm"
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold"
                      onClick={() => {
                        trackClick('AI For Leaders - Organization Training', {
                          location: '3-session_program',
                          destination: 'https://calendly.com/tech-leaders/ai-strategy-session',
                          cta_text: 'Book Discovery Call',
                          price: '$50000'
                        });
                        window.location.href = "https://calendly.com/tech-leaders/ai-strategy-session";
                      }}
                    >
                      Book Discovery Call
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">1-Day Intensive Workshop</h3>
              <p className="text-muted-foreground mb-4">
                Immersive, hands-on training for your leadership team. Walk away with implemented AI solutions.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-foreground">On-site or virtual delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-foreground">10-30 leaders per session</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-foreground">Industry-specific use cases and deliverables</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-foreground">1:1 Implementation Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-foreground">AI Strategy Roadmap & Action Plan</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-foreground">Custom AI Tools Built Live</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-foreground">30-Day Follow-up Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-foreground">Executive AI Toolkit & Templates</span>
                </li>
              </ul>

              <div className="border-t pt-4">
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white"
                  onClick={() => {
                    trackClick('AI For Leaders - Workshop Strategy Session', {
                      location: '1-day_workshop',
                      destination: 'https://calendly.com/tech-leaders/ai-strategy-session',
                      cta_text: 'Book Strategy Session'
                    });
                    window.location.href = "https://calendly.com/tech-leaders/ai-strategy-session";
                  }}
                >
                  Book Strategy Session
                </Button>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  100% tailored to your organization
                </p>
              </div>
            </Card>
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
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Non-Technical AI Workflows for Senior Leaders</h3>
              <p className="text-muted-foreground">Master enterprise AI tools without coding. Build automated workflows that turn complex data into strategic insights, streamline decision-making processes, and create executive dashboards that actually inform strategy.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Build Internal Tools Without Dev Resources</h3>
              <p className="text-muted-foreground">Create powerful AI prototypes and production-ready tools using no-code platforms. Test ideas rapidly, validate with real users, and deploy solutions that solve million-dollar problems—all without waiting for engineering capacity.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                <GitBranch className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">AI Transformation & Change Management</h3>
              <p className="text-muted-foreground">Navigate organizational resistance with proven frameworks. Build AI champions across your org, establish governance that enables innovation, and create a culture where AI adoption accelerates rather than stalls.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            From AI Skeptic to AI Champion
          </h2>
          <p className="text-center text-muted-foreground mb-8 text-lg">
            Our proven AI ROI Framework transforms your organization through 8 interconnected training modules
          </p>

          {/* AI ROI Framework Visual */}
          <div className="mb-12 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-3">The AI ROI Framework™</h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Move from failed initiatives to sustained adoption by mastering the three pillars of AI transformation:
                <span className="font-semibold text-foreground"> Literacy</span> (how to think AI-first),
                <span className="font-semibold text-foreground"> Leverage</span> (how to maximize value), and
                <span className="font-semibold text-foreground"> Adoption</span> (how to drive organizational change).
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Literacy Pillar */}
              <div className="text-center">
                <div className="mb-4">
                  <div className="inline-block p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                    <Brain className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-green-600 dark:text-green-400 mb-2">LITERACY</h4>
                <p className="text-sm text-muted-foreground mb-4">Build foundational understanding</p>
                <div className="space-y-2 text-left">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-foreground">AI Fundamentals™</p>
                    <p className="text-xs text-muted-foreground">How to think AI-first</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-foreground">The Context Creator™</p>
                    <p className="text-xs text-muted-foreground">HOW to input the right data for best output</p>
                  </div>
                </div>
              </div>

              {/* Leverage Pillar */}
              <div className="text-center">
                <div className="mb-4">
                  <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">LEVERAGE</h4>
                <p className="text-sm text-muted-foreground mb-4">Maximize value creation</p>
                <div className="space-y-2 text-left">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-foreground">The AI Project Planner™</p>
                    <p className="text-xs text-muted-foreground">HOW to scope requirements</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-foreground">The AI Toolbox™</p>
                    <p className="text-xs text-muted-foreground">HOW to assemble your tools</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-foreground">The AI Strategy Builder™</p>
                    <p className="text-xs text-muted-foreground">HOW to get the most out of all you have</p>
                  </div>
                </div>
              </div>

              {/* Adoption Pillar */}
              <div className="text-center">
                <div className="mb-4">
                  <div className="inline-block p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                    <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-2">ADOPTION</h4>
                <p className="text-sm text-muted-foreground mb-4">Drive organizational change</p>
                <div className="space-y-2 text-left">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-foreground">The AI Workflow™</p>
                    <p className="text-xs text-muted-foreground">HOW to deliver better work, faster</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-foreground">Ship AI™</p>
                    <p className="text-xs text-muted-foreground">HOW individual contributors can be more productive</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-foreground">The 5-Step AI Exec Playbook™</p>
                    <p className="text-xs text-muted-foreground">HOW to transform your organization</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Without Framework = Failed Initiatives</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">With Framework = AI ROI</span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Powered by <span className="font-semibold">Bottega8™</span> Done-For-You AI Implementation
                </div>
              </div>
            </div>
          </div>

          {/* Original Module Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center mb-6 text-foreground">
              Your 4-Module Implementation Journey
            </h3>
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
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Executive-Level Support & Resources
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Every program includes these premium resources, customized to your industry
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Brain, title: "Your Custom AI Playbook", desc: "Industry-specific prompts and workflows designed for your exact use cases" },
              { icon: Database, title: "Implementation Templates", desc: "Ready-to-deploy frameworks tested in your industry vertical" },
              { icon: Users, title: "Executive Peer Network", desc: "Private community of C-suite leaders sharing wins and strategies" },
              { icon: Clock, title: "90-Day Implementation Support", desc: "Direct access to faculty for troubleshooting and optimization" }
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
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white text-lg px-8 py-6"
              onClick={() => {
                trackClick('AI For Leaders - Resources CTA', {
                  location: 'resources_section',
                  destination: 'https://calendly.com/tech-leaders/ai-strategy-session',
                  cta_text: 'Book Strategy Session'
                });
                window.location.href = "https://calendly.com/tech-leaders/ai-strategy-session";
              }}
            >
              Book Strategy Session
            </Button>
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

      {/* Executive Faculty Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Partnership Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/50 px-4 py-2 rounded-full text-sm text-muted-foreground">
              <span>In Partnership with</span>
              <a
                href="https://bottega8.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="/bottega8-logo.png"
                  alt="Bottega8 Logo"
                  className="h-6 object-contain"
                />
              </a>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Executive Faculty</h2>
            <p className="text-lg text-muted-foreground">
              Learn from industry leaders with decades of AI/ML and leadership experience
            </p>
          </div>

          <div className="flex flex-col gap-12 max-w-4xl mx-auto">
            {/* Nick Talwar */}
            <Card>
              <CardContent className="p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn.prod.website-files.com/64a434b6a610d6a7db0f40aa/663bd5cdd09b8993855c88cf_1685473230400.jpeg"
                    alt="Nick Talwar"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Nick Talwar</h3>
                  <p className="text-sm text-primary font-medium mb-3">Ex-Microsoft Technical Leader, CTO & Partner at Bottega8, Startup & VC Advisor</p>
                  <p className="text-muted-foreground">
                    Nick is an AI and Machine Learning leader with 14+ years of experience as a product and engineering executive. His foundation in AI comes from studying Neural Networks through a Boeing and DARPA joint research grant, which received an engineering capstone award from his alma mater, Duke University.
                    <br /><br />
                    Starting at Microsoft in Search and Recommendations, he went on to serve as CTO at Bottega, building zero-to-one solutions for leading enterprises like Square and Disney, and NIH-funded, TED-supported SleepSpace. In these leadership roles, Nick helped build and lead the implementation of novel ML and data-driven engineering solutions.
                    <br /><br />
                    He now guides VCs and Boards on AI strategy and implementation for their late-stage portfolio companies. His 5-Step AI Playbook for Executives forms the foundation of this program.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Matt Kirk */}
            <Card>
              <CardContent className="p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn.prod.website-files.com/64a434b6a610d6a7db0f40aa/663bd5b0e4d18693800c1108_1673984243092.jpeg"
                    alt="Matt Kirk"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Matt Kirk</h3>
                  <p className="text-sm text-primary font-medium mb-3">Head of AI at AugmentAI, Head of AI at Zeitworks, O'Reilly author of Thoughtful Machine Learning</p>
                  <p className="text-muted-foreground">
                    Matt is a hands-on engineering leader in AI and Machine Learning. His experience includes leading AI teams at AugmentAI and Zeitworks, founding his own venture (Modulus7), and authoring the acclaimed O'Reilly book Thoughtful Machine Learning.
                    <br /><br />
                    Matt has a 15+ year track record of success in AI and Machine Learning. From building data models and ML systems to leading projects that unlock data potential with AI, he consistently drives business impact as a seasoned engineering executive. As a hands-on software engineer, he keeps abreast with the latest in AI through building at AugmentAI as well as leading and mentoring software engineering teams.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Amelia Leigner */}
            <Card>
              <CardContent className="p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="flex-shrink-0">
                  <img
                    src="/amelia-leigner.png"
                    alt="Amelia Leigner"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Amelia Leigner</h3>
                  <p className="text-sm text-primary font-medium mb-3">Fractional CMO & CPO, Head of Product at Bottega8, Startup Growth Strategist</p>
                  <p className="text-muted-foreground">
                    Amelia is a product and marketing executive with nearly a decade of experience helping early-stage startups and AI-driven companies launch and scale. She currently serves as Head of Product, Growth at Bottega8 and as Fractional CMO for Tech Leaders, where she drives AI product adoption and builds scalable growth strategies.
                    <br /><br />
                    Previously, she was Fractional CPO at SeekInvest, where she shaped product vision and go-to-market strategy for a fintech platform serving financial advisors. She also founded Amazon Amelia LLC, a consulting practice supporting Amazon sellers with marketing and business development.
                    <br /><br />
                    She now partners with founders and executives to align product and marketing, turning growth goals into measurable outcomes through frameworks for founder-led sales, AI-powered growth, and market positioning.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Todd Larsen */}
            <Card>
              <CardContent className="p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn.prod.website-files.com/64a434b6a610d6a7db0f40aa/64a97ef0410ff2068560b25d_todd.png"
                    alt="Todd Larsen"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Todd Larsen</h3>
                  <p className="text-sm text-primary font-medium mb-3">CEO at TechLeaders, CTO at AcreHedge, former Groupon, founding team at Digit.co (sold to OPRT)</p>
                  <p className="text-muted-foreground">
                    As a former Global Platform Engineer at Groupon, Founding Engineer at Digit, and current CEO of Technical Leaders, Todd has 15+ years of experience building and scaling products in startup mode and at-scale.
                    <br /><br />
                    From managing high performance teams to shipping solutions that customers love, Todd focuses on moving fast to create a positive impact on the world with technology. His expertise on change management and building strong technical teams has been instrumental for executives navigating AI transformation.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Stephen Bates */}
            <Card>
              <CardContent className="p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn.prod.website-files.com/64a434b6a610d6a7db0f40aa/64a97ef1944d79396cb11126_stephen.png"
                    alt="Stephen Bates"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Stephen Bates</h3>
                  <p className="text-sm text-primary font-medium mb-3">Co-Founder at Technical Leaders, Executive Coach & Leadership Consultant</p>
                  <p className="text-muted-foreground">
                    Stephen brings a practical and pragmatic approach to leadership coaching and corporate training, with over 25 years of experience transforming technical teams and their leaders.
                    <br /><br />
                    As Co-Founder of Technical Leaders, Stephen specializes in helping executives navigate the intersection of technology and business strategy. His extensive background in corporate training and leadership development enables him to guide C-suite leaders through AI adoption challenges, organizational change management, and the development of high-performing technical teams. His methodology focuses on practical, implementable strategies that deliver immediate business impact.
                  </p>
                </div>
              </CardContent>
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
            Get Your Personalized AI Implementation Plan
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mt-2">
              In Just 30 Minutes
            </span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8">
            On your strategy call, we'll analyze your specific challenges and design a custom program that delivers ROI in weeks, not months
          </p>

          <div className="bg-card p-8 rounded-lg shadow-lg mb-8 border-2 border-blue-500/20">
            <div className="mb-6">
              <p className="text-lg font-semibold text-foreground mb-2">Your Free Strategy Call Includes:</p>
              <ul className="text-left inline-block space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>AI readiness assessment for your organization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>3 quick wins you can implement immediately</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Custom program recommendation & timeline</span>
                </li>
              </ul>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white text-lg px-12 py-6 w-full md:w-auto shadow-lg hover:shadow-xl transition-all"
              onClick={() => {
                trackClick('AI For Leaders - Final CTA', {
                  location: 'final_cta_section',
                  destination: 'https://calendly.com/tech-leaders/ai-strategy-session',
                  cta_text: 'Book Strategy Session'
                });
                window.location.href = "https://calendly.com/tech-leaders/ai-strategy-session";
              }}
            >
              Book Strategy Session
            </Button>
          </div>

          <p className="text-muted-foreground">
            Questions? Direct line to our founder:{" "}
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