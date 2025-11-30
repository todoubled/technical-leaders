import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CheckCircle2, Users, Brain, ArrowRight, Code2, Target, Zap, TrendingUp, Clock, Award, XCircle, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import SEO from "@/components/SEO";
import { trackClick } from "@/utils/posthog";

const AIProgramSelector = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Load testimonial.to embed script
  useEffect(() => {
    // Load iframeResizer script
    const script = document.createElement('script');
    script.src = 'https://testimonial.to/js/iframeResizer.min.js';
    script.async = true;
    script.onload = () => {
      // Initialize iframeResizer after script loads
      if ((window as any).iFrameResize) {
        (window as any).iFrameResize(
          { log: false, checkOrigin: false },
          '#testimonialto-948cd5e8-1b47-43b4-8da1-a15b4bbdfb8e'
        );
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleRoleSelection = (role: string) => {
    setSelectedRole(role);
    // Map roles to specific program IDs
    const targetId = role === 'leader' ? 'ship-ai-program' : 'ai-first-program';
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Training Programs - Technical Leaders"
        description="Choose between intensive foundational training or ongoing AI support. Master AI on your timeline with programs designed for your learning style."
        keywords={['AI training', 'AI courses', 'AI programs', 'AI education', 'foundational AI', 'ongoing AI support']}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-blue-500/5 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/ai-in-ar.png"
            alt="AI Programs"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              <span>NO CODING REQUIRED</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Gain AI Literacy, Leverage & Adoption
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mt-2">
                with the Latest Tools and Workflows
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Choose intensive training to build AI competency fast, or ongoing support to stay ahead of the curve. Both paths deliver Literacy, Leverage, and Adoption—without writing a single line of code.
            </p>

            <div className="mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-8 py-6"
                onClick={() => {
                  trackClick('Hero - See How It Works', {
                    location: 'ai_program_selector_hero',
                    destination: '#ai-first-playbook'
                  });
                  const playbookSection = document.getElementById('ai-first-playbook');
                  if (playbookSection) {
                    playbookSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                See How It Works
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Quick Need Selector */}
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg font-semibold text-foreground mb-6">I'm looking for...</p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card
                  className={`p-8 cursor-pointer transition-all hover:shadow-xl hover:scale-105 ${
                    selectedRole === 'leader' ? 'ring-2 ring-purple-500 shadow-xl' : ''
                  }`}
                  onClick={() => handleRoleSelection('leader')}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Support For Myself</h3>
                  <p className="text-muted-foreground mb-4">
                    6-week training program with continuous learning support to stay ahead of AI the latest AI tools and workflows
                  </p>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-500" />
                      <span>Weekly training on latest tools</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-500" />
                      <span>Never fall behind the AI curve</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-500" />
                      <span>Community & expert support</span>
                    </div>
                  </div>
                </Card>

                <Card
                  className={`p-8 cursor-pointer transition-all hover:shadow-xl hover:scale-105 ${
                    selectedRole === 'builder' ? 'ring-2 ring-blue-500 shadow-xl' : ''
                  }`}
                  onClick={() => handleRoleSelection('builder')}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Training For My Org</h3>
                  <p className="text-muted-foreground mb-4">
                    Custom training program to build AI competency fast for your organization
                  </p>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                      <span>Build strategic AI literacy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                      <span>Get a custom AI playbook</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                      <span>Transform in weeks, not months</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="-mx-4 sm:-mx-6 lg:-mx-8">
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

      {/* Our Methodology Section */}
      <section id="ai-first-playbook" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Brain className="w-4 h-4" />
              <span>The AI-1ST PLAYBOOK</span>
            </div>
            <h2 className="text-4xl font-bold text-background mb-4">
              Our Curriculum & Support
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The AI-1st™ Playbook helps you avoid the common pitfalls of AI adoption and transform into an AI-First individual and organization
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <img
                src="/ai-first-playbook.png"
                alt="The AI-1st Playbook - A framework focusing on Literacy, Leverage, and Leadership to avoid Fear, Uncertainty, Doubt, Hype and Shiny Objects that lead to Failed AI Adoption"
                className="w-full h-auto rounded-xl shadow-2xl cursor-pointer hover:shadow-3xl transition-shadow"
                onClick={() => setIsImageModalOpen(true)}
              />

              <div>
                <h3 className="text-2xl font-bold text-background mb-4">Comprehensive Support</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full text-xs font-semibold text-blue-700 dark:text-blue-300 whitespace-nowrap mt-0.5">
                      Curriculum
                    </div>
                    <p className="text-sm text-muted-foreground">12 modules based on the AI-1st Playbook</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full text-xs font-semibold text-purple-700 dark:text-purple-300 whitespace-nowrap mt-0.5">
                      Community
                    </div>
                    <p className="text-sm text-muted-foreground">24/7 community support</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-full text-xs font-semibold text-orange-700 dark:text-orange-300 whitespace-nowrap mt-0.5">
                      Group Coaching
                    </div>
                    <p className="text-sm text-muted-foreground">Weekly group coaching calls to get you unblocked</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full text-xs font-semibold text-green-700 dark:text-green-300 whitespace-nowrap mt-0.5">
                      Office Hours
                    </div>
                    <p className="text-sm text-muted-foreground">Weekly Office Hours to keep you up to speed</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-pink-100 dark:bg-pink-900/30 px-3 py-1 rounded-full text-xs font-semibold text-pink-700 dark:text-pink-300 whitespace-nowrap mt-0.5">
                      Workshops & Hackathons
                    </div>
                    <p className="text-sm text-muted-foreground">Ad Hoc Workshops and Hackathons to implement and build</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-background mb-4">The Core Problems</h3>
                <p className="text-muted-foreground mb-4">
                  Most AI adoption efforts fail because individuals and organizations get caught up in:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-background">Fear</p>
                      <p className="text-sm text-muted-foreground">About job security and career paths</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-background">Uncertainty</p>
                      <p className="text-sm text-muted-foreground">About how to become AI-First</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-background">Doubt</p>
                      <p className="text-sm text-muted-foreground">About which tools are best for the job</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-background">Hype & Shiny Objects</p>
                      <p className="text-sm text-muted-foreground">Distractions that don't make an impact</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-background mb-4">The Solution: Three Pillars</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Literacy</h4>
                    <p className="text-muted-foreground text-sm">
                      Get up-to-speed and on the same page with AI Fundamentals™ and Practical AI™ skills to think AI-First and confidently speak a shared language
                    </p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Leverage</h4>
                    <p className="text-muted-foreground text-sm">
                      Hands-on skills to lead by example with The AI Workspace™, Agent Prompt Library™, and AI Workflow™ to get consistent outputs across every function
                    </p>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Leadership</h4>
                    <p className="text-muted-foreground text-sm">
                      Become AI-1st with the help of The AI/HI Org Chart™, Feedback Loop™, and AI Strategy Builder™ to incrementally redefine roles and improve KPIs over time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            <span>FREE WORKSHOP</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Learn the AI Workflows That Will Transform Your Work
          </h2>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our free workshop and discover the exact AI workflows used by Fortune 100 companies to 10x their productivity. No coding required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <div className="flex items-center gap-2 text-white">
              <CheckCircle2 className="w-5 h-5" />
              <span>Live demonstration</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle2 className="w-5 h-5" />
              <span>Practical workflows</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle2 className="w-5 h-5" />
              <span>Q&A session</span>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
            onClick={() => {
              trackClick('AI Workflows Workshop CTA', {
                location: 'workshop_cta_section',
                destination: 'zoom_registration',
                cta_text: 'Register for Free Workshop'
              });
              window.open('https://us06web.zoom.us/meeting/register/yvD8bVRcSem9wRQkjO0cpQ#/registration', '_blank');
            }}
          >
            Register for Free Workshop
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          <p className="text-white/80 text-sm mt-4">
            Limited seats available • 100% free
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-background dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              <span>SUCCESS STORIES</span>
            </div>
            <h2 className="text-4xl font-bold text-background mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join other leaders who've transformed their AI capabilities
            </p>
          </div>

          {/* Detailed Testimonials */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center flex-shrink-0">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Hands-On and Practical</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    "After spending thousands on top-name university programs that were all theory and no practice, I finally found Tech Leaders' AI Trade School. It's the only program that actually walks you through building your own AI product, step-by-step, with real tools and support."
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Safe, Supportive, and Accessible</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    "The atmosphere is inviting and safe, even for non-technical students. No one is judged for asking questions, and the instructors respond with patience and kindness every time. My fear that someone would steal my idea was gone immediately."
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-blue-700 flex items-center justify-center flex-shrink-0">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Top-Tier Mentorship</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    "Todd and Stephen genuinely care about your progress. They're not just instructors, they're partners in your success. When I got stuck, they were always there with real solutions."
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">All-in-One Journey</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    "The course structure is logical and practical. It starts with market validation and carries you all the way through product development and go-to-market. Every step includes tools you can actually use."
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Testimonial.to Embed */}
          <div className="mt-12">
            <iframe
              id='testimonialto-948cd5e8-1b47-43b4-8da1-a15b4bbdfb8e'
              src="https://embed-v2.testimonial.to/carousel/all/tech-leaders-mastermind-program?id=948cd5e8-1b47-43b4-8da1-a15b4bbdfb8e"
              frameBorder="0"
              scrolling="no"
              width="100%"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Ship AI Program */}
            <Card id="ship-ai-program" className={`p-8 transition-all ${
              selectedRole === 'leader' ? 'ring-2 ring-purple-500 shadow-2xl scale-105' : 'hover:shadow-xl'
            }`}>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  TRAINING & ONGOING SUPPORT
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Ship AI</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  6-Week Training Program and Weekly Office Hours to stay ahead of the curve
                </p>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-4">Perfect if you want to:</h3>
                <div className="space-y-3">
                <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Get a crash course in AI</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Stay current with rapidly evolving AI tools</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Master the latest AI tools (Claude, ChatGPT, Cursor, v0)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Join a community of 300+ AI practitioners</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Get expert support for your specific projects</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white text-lg px-8 py-6"
                  onClick={() => {
                    trackClick('AI Program Selector - Ship AI', {
                      location: 'program_comparison',
                      destination: '/ai-program',
                      cta_text: 'Learn More',
                      selected_role: selectedRole
                    });
                    window.location.href = "/ai-program";
                  }}
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Cancel anytime • Start learning today
                </p>
              </div>
            </Card>

            {/* AI Leadership Program */}
            <Card id="ai-first-program" className={`p-8 transition-all ${
              selectedRole === 'builder' ? 'ring-2 ring-blue-500 shadow-2xl scale-105' : 'hover:shadow-xl'
            }`}>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  CUSTOM TRAINING PROGRAMS
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-2">AI-First</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  <b>Custom training programs for leaders and individual contributors in organizations</b> to get up to speed quickly and learn the AI frameworks to stay ahead
                </p>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-4">Perfect if you need to:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Build AI competency fast with intensive training</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Get a custom AI playbook for your role/organization</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Master prompt engineering for your specific use cases</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Drive AI adoption and organizational change</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Build strategic AI literacy for decision-making</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white text-lg px-8 py-6"
                  onClick={() => {
                    trackClick('AI Program Selector - AI-First', {
                      location: 'program_comparison',
                      destination: '/ai-for-leaders',
                      cta_text: 'Learn More About AI-First',
                      selected_role: selectedRole
                    });
                    window.location.href = "/ai-for-leaders";
                  }}
                >
                  Learn More About AI-First
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Book a strategy session • 100% customized
                </p>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-3">Do I need coding experience?</h3>
              <p className="text-muted-foreground">
                No! Both programs are designed for non-technical professionals. The AI-1st Playbook focuses on Literacy, Leverage, and Leadership—not coding. You'll learn to use AI tools effectively, build workflows, and drive adoption without writing a single line of code.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-3">Which program should I choose?</h3>
              <p className="text-muted-foreground">
                <strong>Choose Ship AI</strong> if you want ongoing support to stay current with the latest AI tools and workflows. Perfect for individuals who prefer continuous learning with weekly office hours and community access.<br/><br/>
                <strong>Choose AI-First</strong> if you need intensive, customized training for your organization with a tailored AI playbook and strategic implementation plan. Ideal for teams and leaders driving organizational AI adoption.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-3">What's included in both programs?</h3>
              <p className="text-muted-foreground">
                Both programs are built on the AI-1st Playbook methodology covering Literacy (fundamentals and practical skills), Leverage (AI workspace, workflows, and prompts), and Leadership (organizational adoption and strategy). You'll get hands-on training with Claude, ChatGPT, Cursor, and other cutting-edge tools.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-3">Can I try before committing?</h3>
              <p className="text-muted-foreground">
                Yes! Join our free workshop to see the AI workflows in action. You'll get a live demonstration, learn practical techniques, and have a chance to ask questions. For AI-First, you can also book a free strategy session to discuss your specific needs.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-3">Can my team or organization participate together?</h3>
              <p className="text-muted-foreground">
                Absolutely! Ship AI offers team discounts for multiple enrollments. AI-First is specifically designed for organizations and can be fully customized for your team's needs, industry, and use cases. Contact todd@technical-leaders.com to discuss team pricing and custom solutions.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-3">What if I want both programs?</h3>
              <p className="text-muted-foreground">
                Many professionals start with Ship AI for foundational training and ongoing support, while their organizations invest in AI-First for team-wide adoption. We offer bundle discounts when combining programs—contact us for details.
              </p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Still have questions?
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white"
              onClick={() => {
                trackClick('AI Program Selector - Strategy Session', {
                  location: 'faq_section',
                  cta_text: 'Book a Strategy Session'
                });
                window.location.href = "https://calendly.com/tech-leaders/ai-strategy";
              }}
            >
              Book a Strategy Session
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
        <DialogContent className="max-w-7xl p-2 bg-white dark:bg-gray-900">
          <img
            src="/ai-first-playbook.png"
            alt="The AI-1st Playbook - A framework focusing on Literacy, Leverage, and Leadership to avoid Fear, Uncertainty, Doubt, Hype and Shiny Objects that lead to Failed AI Adoption"
            className="w-full h-auto"
          />
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default AIProgramSelector;
