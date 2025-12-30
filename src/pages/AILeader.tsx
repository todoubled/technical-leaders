import Navigation from "@/components/Navigation";
import SalesFooter from "@/components/footers/SalesFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Sparkles, TrendingUp, Clock, Users, Award, Zap, AlertCircle, DollarSign, Shield, Target, Brain, Briefcase, BarChart3, Rocket, ArrowRight, XCircle, Play, Star, GraduationCap, Network, Lightbulb } from "lucide-react";
import { useState, useEffect } from "react";
import SEO from "@/components/SEO";
import { generateCourseStructuredData, generateFAQStructuredData } from "@/utils/seo-helpers";
import { trackClick } from "@/utils/posthog";
import { useTrackScrollDepth } from "@/hooks/use-posthog";

const AILeader = () => {
  useTrackScrollDepth('AI Leader Page');

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const pillars = [
    {
      icon: Brain,
      title: "AI Fluency",
      subtitle: "Master the Language of AI",
      description: "Understand AI capabilities, limitations, and applications without needing to code. Speak confidently about AI with your technical teams and stakeholders.",
      outcomes: [
        "Evaluate AI tools and vendors with confidence",
        "Communicate AI strategy to boards and investors",
        "Identify high-impact AI opportunities in your business"
      ]
    },
    {
      icon: Target,
      title: "Strategic Implementation",
      subtitle: "From Vision to Execution",
      description: "Learn proven frameworks for successfully deploying AI initiatives. Navigate the common pitfalls that cause 87% of AI projects to fail.",
      outcomes: [
        "Build business cases that get funded",
        "Manage AI projects without technical background",
        "Measure and communicate AI ROI effectively"
      ]
    },
    {
      icon: Users,
      title: "Change Leadership",
      subtitle: "Transform Your Organization",
      description: "Lead your teams through AI transformation with proven change management frameworks designed specifically for AI adoption.",
      outcomes: [
        "Overcome AI resistance and fear in your organization",
        "Build AI champions across departments",
        "Create sustainable AI culture and practices"
      ]
    }
  ];

  const programPhases = [
    {
      week: "Week 1-2",
      title: "AI Foundation & Assessment",
      description: "Deep dive into AI fundamentals and assess your organization's AI readiness. Identify your highest-impact opportunity.",
      deliverable: "Personal AI Opportunity Map"
    },
    {
      week: "Week 3-4",
      title: "Strategic Planning & Business Case",
      description: "Build compelling business cases for AI initiatives. Learn to evaluate vendors, set realistic timelines, and secure buy-in.",
      deliverable: "Board-Ready AI Business Case"
    },
    {
      week: "Week 5-6",
      title: "Implementation Leadership",
      description: "Master the art of leading AI projects without coding. Learn governance frameworks and cross-functional collaboration.",
      deliverable: "AI Implementation Playbook"
    },
    {
      week: "Week 7-8",
      title: "Change Management & Adoption",
      description: "Drive organization-wide AI adoption. Build change management strategies that stick and create lasting cultural transformation.",
      deliverable: "AI Adoption Roadmap"
    }
  ];

  const testimonials = [
    {
      quote: "This program transformed how I think about AI. I went from feeling left behind to leading our company's AI strategy. The frameworks are practical and the community is invaluable.",
      author: "Chief Marketing Officer",
      company: "Fortune 500 Consumer Brand",
      result: "Led $2M AI initiative in 6 months"
    },
    {
      quote: "As a non-technical executive, I was skeptical. But this program gave me the vocabulary and frameworks to confidently lead AI discussions with my engineering teams.",
      author: "VP of Operations",
      company: "Healthcare Technology Company",
      result: "Reduced operational costs by 34% with AI"
    },
    {
      quote: "The change management frameworks alone were worth the investment. We avoided the typical AI adoption resistance and got our teams excited about the transformation.",
      author: "Chief People Officer",
      company: "Global Financial Services Firm",
      result: "Achieved 89% employee AI adoption rate"
    }
  ];

  const faqData = [
    {
      question: "Do I need technical skills or coding experience?",
      answer: "Absolutely not. This program is specifically designed for non-technical leaders. We focus on strategic thinking, business acumen, and leadership skills—not coding or data science."
    },
    {
      question: "How is this different from other AI courses?",
      answer: "Most AI courses teach you to use tools like ChatGPT. This program teaches you to lead AI transformation at the organizational level. You'll leave with frameworks, playbooks, and a strategic mindset—not just tool proficiency."
    },
    {
      question: "What's the time commitment?",
      answer: "Expect 4-6 hours per week over 8 weeks. This includes live sessions, peer collaboration, and implementation work. The program is designed for busy executives with demanding schedules."
    },
    {
      question: "Will this help me if my company already has an AI team?",
      answer: "Yes. In fact, it's even more valuable. You'll learn to effectively collaborate with technical teams, ask the right questions, and ensure AI initiatives align with business objectives."
    },
    {
      question: "What if I'm not sure AI is right for my organization?",
      answer: "Part of the program includes a rigorous assessment framework. You'll leave knowing exactly where AI can (and can't) add value—and how to prioritize opportunities."
    },
    {
      question: "Is there ongoing support after the program?",
      answer: "Yes. Graduates join our exclusive AI Leaders Network with quarterly masterclasses, private community access, and ongoing peer support from fellow AI-First leaders."
    }
  ];

  const courseStructuredData = generateCourseStructuredData(
    "AI-First Leadership Program - Transform Into an AI Champion",
    "8-week intensive program for non-technical executives and leaders to master AI strategy, implementation, and organizational transformation. No coding required."
  );

  const faqStructuredData = generateFAQStructuredData(faqData);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI-First Leadership Program | Become an AI Champion Without Coding"
        description="Transform from AI-curious to AI champion in 8 weeks. Intensive leadership program for non-technical executives to master AI strategy, drive adoption, and lead transformation."
        keywords={['AI leadership', 'executive AI training', 'AI for executives', 'AI strategy', 'AI transformation', 'non-technical AI', 'AI adoption', 'AI change management']}
        structuredData={[courseStructuredData, faqStructuredData]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-32 pb-24">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span>AI-FIRST LEADERSHIP PROGRAM</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="block">Become the</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                AI Leader
              </span>
              <span className="block">Your Organization Needs</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
              The intensive 8-week program that transforms non-technical executives into confident AI strategists and change leaders.
            </p>

            <p className="text-lg text-purple-300 mb-10 font-medium">
              No coding required. Just strategic leadership.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-10 py-7 shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all"
                onClick={() => {
                  trackClick('AI Leader - Hero CTA', {
                    location: 'hero_section',
                    destination: '/ai-leader-apply',
                    cta_text: 'Apply to Join'
                  });
                  window.location.href = "https://calendly.com/tech-leaders/ai-strategy";
                }}
              >
                Apply to Join
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 text-lg px-10 py-7"
                onClick={() => {
                  document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">8</div>
                <div className="text-sm text-gray-400">Weeks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-gray-400">Non-Technical</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">87%</div>
                <div className="text-sm text-gray-400">Lead AI Initiatives</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              The Leadership Gap in AI Transformation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              While 91% of executives say AI is a priority, only 13% have successfully deployed AI at scale. The gap isn't technical—it's leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-red-500/20 bg-red-500/5 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                <XCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">87% of AI Projects Fail</h3>
              <p className="text-muted-foreground leading-relaxed">
                Not because of technology limitations, but because of poor leadership alignment, unclear strategy, and resistance to change.
              </p>
            </Card>

            <Card className="p-8 border-amber-500/20 bg-amber-500/5 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center">
                <AlertCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">The Vocabulary Gap</h3>
              <p className="text-muted-foreground leading-relaxed">
                Leaders struggle to communicate with technical teams, evaluate AI opportunities, and make informed decisions about AI investments.
              </p>
            </Card>

            <Card className="p-8 border-purple-500/20 bg-purple-500/5 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Competitors Are Moving Fast</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every quarter without AI leadership is market share lost. The window for first-mover advantage is closing rapidly.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution - The Three Pillars */}
      <section id="program" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <GraduationCap className="w-4 h-4" />
              <span>THE PROGRAM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Three Pillars of AI Leadership
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive framework designed specifically for non-technical leaders who need to drive AI transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-purple-500/20">
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg">
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">{pillar.title}</h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">{pillar.subtitle}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">{pillar.description}</p>
                <div className="space-y-3">
                  {pillar.outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{outcome}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Your 8-Week Transformation Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each phase builds on the last, giving you practical deliverables you can use immediately.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />

            <div className="space-y-12">
              {programPhases.map((phase, index) => (
                <div key={index} className={`relative flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 items-center justify-center shadow-lg z-10">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>

                  <div className="lg:w-1/2" />

                  <Card className={`lg:w-1/2 p-8 hover:shadow-xl transition-all ${index % 2 === 1 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                    <div className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold mb-4">
                      {phase.week}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{phase.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{phase.description}</p>
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-medium">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Deliverable: {phase.deliverable}</span>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Lead AI Transformation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Live Cohort Sessions", desc: "Weekly 90-minute sessions with expert facilitators and peer leaders" },
              { icon: Brain, title: "AI Strategy Playbooks", desc: "Battle-tested frameworks used by Fortune 500 companies" },
              { icon: Network, title: "AI Leaders Network", desc: "Exclusive community of AI-First executives for ongoing support" },
              { icon: Target, title: "1:1 Strategy Coaching", desc: "Personal coaching sessions to apply learnings to your organization" },
              { icon: Briefcase, title: "Case Study Library", desc: "Real-world examples across industries with detailed analysis" },
              { icon: Award, title: "AI Leader Certification", desc: "Credential that demonstrates your AI leadership capabilities" }
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Leaders Who Made the Leap
            </h2>
            <p className="text-xl text-gray-300">
              Join executives who transformed their organizations with AI leadership
            </p>
          </div>

          <div className="relative">
            <Card className="p-10 bg-white/10 backdrop-blur-sm border-white/20">
              <div className="text-center">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-xl sm:text-2xl text-white mb-8 leading-relaxed font-light italic">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>
                <div className="mb-4">
                  <p className="text-lg font-semibold text-white">{testimonials[activeTestimonial].author}</p>
                  <p className="text-purple-300">{testimonials[activeTestimonial].company}</p>
                </div>
                <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  {testimonials[activeTestimonial].result}
                </div>
              </div>
            </Card>

            {/* Testimonial dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial
                      ? 'bg-purple-400 w-6'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-10">
            Leaders From These Organizations Have Joined
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <img src="/gitlab.png" alt="GitLab" className="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
            <img src="/calendly.webp" alt="Calendly" className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
            <img src="/nike.png" alt="Nike" className="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
            <img src="/redhat.webp" alt="Red Hat" className="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
            <img src="/netflix.png" alt="Netflix" className="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
            <img src="/cashapp.svg" alt="Cash App" className="h-16 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Is This Program Right for You?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-green-500/20 bg-green-500/5">
              <h3 className="text-xl font-bold mb-6 text-foreground flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                This IS For You If...
              </h3>
              <ul className="space-y-4">
                {[
                  "You're a C-suite executive, VP, or senior leader",
                  "You need to lead AI initiatives but lack technical background",
                  "Your organization is falling behind on AI adoption",
                  "You want to speak confidently about AI with technical teams",
                  "You're ready to invest in your leadership capabilities",
                  "You believe AI will transform your industry"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 border-red-500/20 bg-red-500/5">
              <h3 className="text-xl font-bold mb-6 text-foreground flex items-center gap-3">
                <XCircle className="w-6 h-6 text-red-500" />
                This is NOT For You If...
              </h3>
              <ul className="space-y-4">
                {[
                  "You're looking to learn coding or data science",
                  "You want quick tips without deep commitment",
                  "Your organization isn't serious about AI",
                  "You're not in a leadership or decision-making role",
                  "You expect AI to be a magic solution without effort",
                  "You're not willing to challenge your assumptions"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Your Investment in AI Leadership
            </h2>
            <p className="text-xl text-muted-foreground">
              A fraction of the cost of a failed AI initiative
            </p>
          </div>

          <Card className="p-10 border-2 border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-blue-500/5">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Sparkles className="w-4 h-4" />
                <span>LIMITED ENROLLMENT</span>
              </div>
              <div className="text-5xl font-bold text-foreground mb-2">$7,500</div>
              <p className="text-muted-foreground">or 3 payments of $2,750</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="font-bold text-foreground mb-4">What's Included:</h4>
                <ul className="space-y-3">
                  {[
                    "8 weeks of live cohort sessions",
                    "AI Strategy Playbook & Templates",
                    "1:1 coaching sessions",
                    "AI Leaders Network membership",
                    "Case study library access",
                    "AI Leader Certification"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-4">Bonuses:</h4>
                <ul className="space-y-3">
                  {[
                    "Quarterly AI Leaders Masterclass",
                    "Private Slack community access",
                    "AI vendor evaluation framework",
                    "Board presentation templates",
                    "Lifetime playbook updates"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <Sparkles className="w-5 h-5 text-purple-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-10 py-7 shadow-xl"
                onClick={() => {
                  trackClick('AI Leader - Investment CTA', {
                    location: 'investment_section',
                    destination: 'calendly',
                    cta_text: 'Apply Now'
                  });
                  window.location.href = "https://calendly.com/tech-leaders/ai-strategy";
                }}
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Applications reviewed within 48 hours. Only 15 spots per cohort.
            </p>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Your Faculty</h2>
            <p className="text-xl text-muted-foreground">
              Learn from leaders who've driven AI transformation at scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-6 mb-6">
                  <img
                    src="https://cdn.prod.website-files.com/64a434b6a610d6a7db0f40aa/64a97ef0410ff2068560b25d_todd.png"
                    alt="Todd Larsen"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Todd Larsen</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">CEO, Technical Leaders</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Former Global Platform Engineer at Groupon, Founding Engineer at Digit. 15+ years building and scaling AI-first products.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-6 mb-6">
                  <img
                    src="https://cdn.prod.website-files.com/64a434b6a610d6a7db0f40aa/64a97ef1944d79396cb11126_stephen.png"
                    alt="Stephen Bates"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Stephen Bates</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">Co-Founder, Technical Leaders</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  25+ years transforming technical teams and their leaders. Specializes in helping executives navigate AI transformation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Become the AI Leader
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mt-2">
              Your Organization Needs?
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join the next cohort of AI-First leaders. Limited to 15 executives to ensure personalized attention and peer collaboration.
          </p>

          <Button
            size="lg"
            className="bg-white text-purple-900 hover:bg-gray-100 text-lg px-12 py-7 shadow-2xl"
            onClick={() => {
              trackClick('AI Leader - Final CTA', {
                location: 'final_cta_section',
                destination: 'calendly',
                cta_text: 'Apply to Join the Next Cohort'
              });
              window.location.href = "https://calendly.com/tech-leaders/ai-strategy";
            }}
          >
            Apply to Join the Next Cohort
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <p className="text-gray-400 mt-6">
            Questions? Email us at{" "}
            <a href="mailto:todd@technical-leaders.com" className="text-purple-400 hover:underline">
              todd@technical-leaders.com
            </a>
          </p>
        </div>
      </section>

      <SalesFooter
        headline="Transform Into an AI-First Leader in 8 Weeks"
        subheadline="No coding required. Just strategic leadership."
        primaryCTA={{
          text: "Apply Now",
          url: "https://calendly.com/tech-leaders/ai-strategy"
        }}
        socialProof="Join executives from Netflix, Nike, GitLab, and more"
        guarantee={{
          text: "Limited Enrollment",
          description: "Only 15 spots per cohort to ensure personalized attention and meaningful peer connections."
        }}
        trackingContext="AI Leader"
      />
    </div>
  );
};

export default AILeader;
