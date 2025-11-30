import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Zap, Target, Users, Shield, BookOpen, Wrench, Calendar, MessageCircle, Rocket, FileText, Lightbulb, ClipboardCheck, UserCheck, Settings, LayoutTemplate, Repeat, HeartHandshake, Library, Brain, XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import SEO from "@/components/SEO";
import { trackConversion } from "@/utils/posthog";
import { useTrackScrollDepth } from "@/hooks/use-posthog";
import { generateCourseStructuredData, generateFAQStructuredData } from "@/utils/seo-helpers";

const AIFirstProgram = () => {
  // Track scroll depth for engagement
  useTrackScrollDepth('AI First Program Page');
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  useEffect(() => {
    // Page view tracking is handled centrally in App.tsx
  }, []);

  const phases = [
    {
      number: 1,
      title: "AI Confidence & Control",
      duration: "Weeks 1-4",
      description: "We get everyone on the same page. Clear rules. Safe workflows. No guesswork. Your team shifts from \"unsure\" to \"I know exactly what I'm doing.\""
    },
    {
      number: 2,
      title: "Team AI-Proficiency Upgrade",
      duration: "Weeks 4-6",
      description: "Hands-on sessions, practice reps, and role-specific playbooks so every department is producing strong AI outputs. No more dabbling. You see real skill lift."
    },
    {
      number: 3,
      title: "2x Output Acceleration",
      duration: "Days 30-60",
      description: "We take real work from your org and rebuild the workflows for speed and accuracy. This is where output doubles and quality rises without adding headcount."
    }
  ];

  const whatYouGet = [
    {
      icon: Shield,
      title: "AI Policy & Safety Framework",
      description: "So everyone knows what's safe, what's risky, and how to avoid mistakes that cause legal or compliance trouble."
    },
    {
      icon: LayoutTemplate,
      title: "Role-Specific AI Playbooks",
      description: "So each department has prompts and workflows they can use right away instead of guessing."
    },
    {
      icon: Calendar,
      title: "Weekly Hands-On Labs",
      description: "So your team gets real practice and confidence through guided work, not another passive training they forget tomorrow."
    },
    {
      icon: Settings,
      title: "Workflow Redesign Sessions",
      description: "So your current processes get rebuilt for speed and accuracy without breaking compliance or approvals."
    },
    {
      icon: HeartHandshake,
      title: "Leader Coaching & Change Support",
      description: "So adoption sticks and your managers know how to guide the shift without friction."
    },
    {
      icon: Library,
      title: "Prompt Library + Saved Workflows",
      description: "So nobody starts from scratch and your people can ship strong work fast."
    }
  ];

  const bonuses = [
    {
      icon: Rocket,
      title: "Kickoff Momentum Session",
      description: "A private leadership session to align goals and get fast buy-in."
    },
    {
      icon: Wrench,
      title: "The AI-Workspace Setup Guide",
      description: "A simple, safe way to configure tools and data flow so nothing leaks and no one's guessing."
    },
    {
      icon: Repeat,
      title: "The Feedback Loop Toolkit",
      description: "A clean process for reviewing and improving outputs so quality climbs each week."
    },
    {
      icon: FileText,
      title: "Department-Ready Prompt Packs",
      description: "Prebuilt prompt bundles for HR, Ops, Finance, Sales and Compliance so you get early wins in week one."
    }
  ];

  const idealFor = [
    "You're leading a mid-sized company in a regulated space.",
    "You have cross-functional teams that need clear workflows.",
    "You want faster output without adding people.",
    "You're willing to show up, practice, and report progress.",
    "You hate jargon and prefer tools that work."
  ];

  // FAQ data for structured markup
  const faqData = [
    {
      question: "How long is the program?",
      answer: "AI-First runs for 6 weeks, with output acceleration continuing through day 60. Phase 1 covers weeks 1-4, Phase 2 covers weeks 4-6, and Phase 3 extends through days 30-60."
    },
    {
      question: "What if I don't love it?",
      answer: "Love it or leave it after the first session with a full refund, no questions asked."
    },
    {
      question: "How much does it cost?",
      answer: "Your investment is $50k per 30-person cohort ($25k deposit + $25k balance when the cohort kicks off)."
    },
    {
      question: "Who is this for?",
      answer: "This is perfect for mid-sized companies in regulated spaces with cross-functional teams that need clear workflows and want faster output without adding headcount."
    }
  ];

  // Generate structured data
  const courseStructuredData = generateCourseStructuredData(
    "AI-First - Private Cohort Training for Teams",
    "6-week program to upskill your entire team to AI-proficiency so they produce AI-assisted work twice as fast within 60 days.",
    "$50000"
  );

  const faqStructuredData = generateFAQStructuredData(faqData);

  // Combine structured data
  const combinedStructuredData = [courseStructuredData, faqStructuredData];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI-First - Private Cohort Training for Teams"
        description="Upskill your entire team to AI-proficiency within 6 weeks so they produce AI-assisted work twice as fast within 60 days. Private cohort for 30 leaders and operators."
        keywords={['AI training', 'AI proficiency', 'team AI training', 'AI-first', 'AI adoption', 'enterprise AI', 'AI workflows', 'corporate AI training']}
        structuredData={combinedStructuredData}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <img
            src="/launch-bg.png"
            alt="AI-First background"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-700 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Users className="w-4 h-4" />
              <span>Private Cohort (30 leaders and operators)</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              AI-First Training for Teams
            </h1>

            <p className="text-2xl sm:text-3xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              We're holding dates for 2 company cohorts this month.
            </p>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Here's what it's like in our hands-on AI program:
            </p>


            <div className="w-full max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/LyY-glR6P_8"
                title="AI-First Program Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Goal Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            The goal is simple:
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            Upskill your entire team to AI-proficiency within 6 weeks so they produce AI-assisted work twice as fast within 60 days.
          </p>
        </div>
      </section>

      {/* How It Works - Phases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
            The model is straightforward:
          </h2>
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 p-8 bg-gradient-to-br from-orange-500/20 to-red-600/20 relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white">
                        <span className="text-3xl font-bold">{phase.number}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-foreground">Phase {phase.number}: {phase.title}</h3>
                      <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">{phase.duration}</p>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8 flex items-center">
                    <p className="text-lg text-muted-foreground leading-relaxed">{phase.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Here's how it works.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {whatYouGet.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Curriculum & Support Section */}
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

      {/* Bonus Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            You'll also get a few bonuses that make everything easier and quicker.
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {bonuses.map((bonus, index) => {
              const IconComponent = bonus.icon;
              return (
                <Card key={index} className="p-6 bg-gradient-to-br from-orange-500/5 to-red-600/5 border-orange-200 dark:border-orange-900 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2 text-lg">{bonus.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{bonus.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 text-green-600 dark:text-green-400" />
          <h2 className="text-3xl font-bold mb-4 text-background">
            And you're covered by a simple guarantee:
          </h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            Love it or leave it after the first session with a full refund, no questions asked.
          </p>
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-6 py-3 rounded-full font-semibold">
            <Shield className="w-5 h-5" />
            <span>First-session money-back guarantee</span>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Your investment:
          </h2>

          <Card className="p-8 text-center max-w-xl mx-auto">
            <p className="text-5xl font-bold text-foreground mb-4">$50k</p>
            <p className="text-lg text-muted-foreground mb-6">per 30-person cohort</p>
            <p className="text-muted-foreground">
              $25k deposit + $25k balance when the cohort kicks off
            </p>
          </Card>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            This is perfect for you if:
          </h2>

          <Card className="p-8">
            <div className="space-y-4">
              {idealFor.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-500/10 to-red-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Here's what to do next.
          </h2>

          <div className="mb-12 text-left max-w-2xl mx-auto">
            <div className="mb-6">
              <p className="text-lg text-foreground font-semibold mb-2">Step 1.</p>
              <p className="text-muted-foreground">Book a call to hold a cohort date.</p>
            </div>

            <div className="mb-6">
              <p className="text-lg text-foreground font-semibold mb-2">Step 2.</p>
              <p className="text-muted-foreground">We'll review your goals to confirm fit and walk through the logistics.</p>
            </div>

            <div className="mb-6">
              <p className="text-lg text-foreground font-semibold mb-2">Step 3.</p>
              <p className="text-muted-foreground">Your team gets immediate access and we schedule the first session.</p>
            </div>
          </div>

          <Button
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-6 text-lg"
            onClick={() => {
              trackConversion('AI First Contact Clicked', {
                location: 'next_steps_section',
                price: 50000,
                plan: 'cohort'
              });
              window.location.href = "https://calendly.com/tech-leaders/ai-strategy";
            }}
          >
            Book a Call to Hold Your Date
          </Button>

          <Card className="p-6 bg-gradient-to-br from-orange-500/5 to-red-600/5 border-orange-200 dark:border-orange-900 mt-12">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">P.S.</strong> As soon as you hold your date, I'll send you the AI-First Starter Pack so your team can start getting quick wins before the first session.
            </p>
          </Card>
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
    </div>
  );
};

export default AIFirstProgram;
