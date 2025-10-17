import Navigation from "@/components/Navigation";
import ContentFooter from "@/components/footers/ContentFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, Target, MessageSquare, ArrowRight, Zap, Star, Users, TrendingUp, Lightbulb, BookOpen, Rocket, AlertTriangle, DollarSign, FileText, Send, Calendar, Award } from "lucide-react";
import SEO from "@/components/SEO";
import { trackClick, trackEvent } from "@/utils/posthog";
import { useTrackScrollDepth } from "@/hooks/use-posthog";
import { useEffect } from "react";

const GetPlaybook = () => {
  useTrackScrollDepth('Get Playbook Page');

  useEffect(() => {
    trackEvent('Get Playbook Page View', {
      has_strategy: true,
      has_cta: true
    });
  }, []);

  const testimonials = [
    {
      name: "P.O.",
      role: "DevOps Lead",
      location: "Poland",
      avatar: "PO",
      content: "I didn't even use all of tools that you provide guys, so far all is exceeding my expectations. Basically thats the first mastermind group that gives a real value that I know! Stress levels overall in my life almost went to 0, in all cases, private, work etc"
    },
    {
      name: "C.F.",
      role: "Fractional CTO",
      location: "Ireland",
      avatar: "CF",
      content: "For this client, it's a fractional gig that will replace all my income, which means I can go and do this fractional thing for three days a week and then have two days to apply all the other learnings. Massive, massive win."
    },
    {
      name: "K.D.",
      role: "Director of Customer Success",
      location: "Colorado",
      avatar: "KD",
      content: "Applying my new approach learned through Tech Leaders, has led to a new job offer and a promotion"
    },
    {
      name: "Tech Leader",
      role: "Senior Leadership",
      location: "",
      avatar: "TL",
      content: "The 'win seeds' I've been planting the last ~1-2 months have started blooming at work! My squad was recognized by senior leadership across two orgs for the work we've been doing."
    },
    {
      name: "M.W.",
      role: "CTO",
      location: "Poland",
      avatar: "MW",
      content: "I feel I'm a strong IC and have quite good managing skills, but I felt lacking in strategy tools. I wanted to increase my leverage by doing a higher level of work."
    },
    {
      name: "F.C.",
      role: "Fractional CTO",
      location: "Ann Arbor",
      avatar: "FC",
      content: "It is harder than I thought, specifically talking about yourself as a product or service offering is not something I really ever had to do working in a large corporation for the majority of the last three decades."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="The Productize & Monetize Your Expertise Playbook"
        description="Transform your technical expertise into scalable, high-value offerings that generate leverage, income, and impact. Complete step-by-step guide for tech leaders."
        keywords={['technical leadership', 'consulting playbook', 'value-based pricing', 'tech consulting', 'productize expertise']}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/launch-bg.png"
            alt="Playbook background"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full text-sm font-bold mb-6">
            <BookOpen className="w-4 h-4" />
            <span>The Complete Playbook</span>
          </div>

          <div className="max-w-3xl mx-auto mb-8 text-left bg-background/50 backdrop-blur border border-white/10 rounded-lg p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  Hi, my name is <span className="font-semibold text-white">Todd Larsen</span> - Co-founder of Tech Leaders.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  Tech Leaders is an international community and mastermind that helps you optimize your income, impact and influence with leadership and entrepreneurship.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  I've spent 5 years testing different ways to monetize my technical expertise:
                </p>
                <ul className="list-disc list-inside text-base text-muted-foreground space-y-2 mb-4 ml-4">
                  <li>Freelance Hourly Consulting</li>
                  <li>Micro-SaaS Products</li>
                  <li>Info-Products (courses, etc.)</li>
                  <li>Fractional CTO/advisory services on retainer</li>
                </ul>
                <p className="text-base text-muted-foreground leading-relaxed">
                  After all this experimentation and work with 30+ different companies around the world from start-ups to scale-ups, my co-foudner Stephen Bates and I built:
                </p>
              </div>
              <div className="md:w-64 flex-shrink-0">
                <img
                  src="/li-todd.jpg"
                  alt="Todd Larsen"
                  className="w-full h-auto rounded-lg object-contain border-2 border-primary/20"
                />
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            The Productize & Monetize
            <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mt-2">
            Your Expertise Playbook
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
            Package your expertise into <span className="font-bold text-white">scalable, high-value offerings</span> that generate leverage, income, and impact
          </p>

          <div className="bg-background/50 backdrop-blur border border-white/10 rounded-lg p-6 max-w-2xl mx-auto mb-8 shadow-xl">
            <h3 className="text-lg font-bold mb-4 text-white">What You'll Learn:</h3>
            <div className="grid md:grid-cols-2 gap-3 text-left text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Define your ideal client profile and problem niche with precision</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Build a repeatable client acquisition system that doesn't rely on referrals</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Package your expertise into high-value offers using value-based pricing</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Create consistent content and outreach systems that generate leads</span>
              </div>
              <div className="flex items-start gap-2 md:col-span-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Transition safely from employment to independent consulting</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-white">Prerequisites:</span> Track record of technical results + willingness to market yourself
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-8 py-6"
              onClick={() => {
                trackClick('Get Started - Playbook Hero', {
                  location: 'hero_section'
                });
                window.location.href = "/how-it-works";
              }}
            >
              Get Our Help
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6"
              onClick={() => {
                trackClick('10 Before 10 - Playbook Hero', {
                  location: 'hero_section'
                });
                window.location.href = "/10-before-10";
              }}
            >
              Quick Start: 10 Before 10
            </Button>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Your Complete Roadmap</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-4 hover:shadow-lg transition-all cursor-pointer" onClick={() => document.getElementById('phase-0')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Phase 0: Foundation</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Mindset & Prerequisites</p>
                </div>
              </div>
            </Card>
            <Card className="p-4 hover:shadow-lg transition-all cursor-pointer" onClick={() => document.getElementById('step-1')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Step 1: ICP & Niche</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Define Your Market</p>
                </div>
              </div>
            </Card>
            <Card className="p-4 hover:shadow-lg transition-all cursor-pointer" onClick={() => document.getElementById('step-2')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Step 2: Marketing</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Messaging & Outreach</p>
                </div>
              </div>
            </Card>
            <Card className="p-4 hover:shadow-lg transition-all cursor-pointer" onClick={() => document.getElementById('step-3')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                  <Star className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Step 3: Your Offer</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Pricing & Packaging</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Phase 0: Foundation & Mindset */}
      <section id="phase-0" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-6 py-3 rounded-full font-bold mb-6">
              <Lightbulb className="w-5 h-5" />
              <span>Phase 0</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-foreground">Foundation & Mindset Transformation</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Before diving into tactics, establish the right foundation and mindset. This phase is crucial - skip it at your peril.
            </p>
          </div>

          {/* Step 1: Leverage Audit */}
          <Card className="mb-8 p-8 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Define Your Core Goals</h3>
                <p className="text-gray-600 dark:text-gray-400">Exercise: The Leverage Audit</p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-6">Take 30 minutes to answer these questions in writing:</p>

            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4">1. Current State Analysis</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                    <span className="text-gray-700 dark:text-gray-300">How many hours did you work last month? _______</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                    <span className="text-gray-700 dark:text-gray-300">What was your total income? $_______</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                    <span className="text-gray-700 dark:text-gray-300">Income per hour worked: $_______</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                    <span className="text-gray-700 dark:text-gray-300">Can you take a 2-week vacation without losing income? Yes/No</span>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4">2. Desired Future State</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">→</span>
                    <span className="text-gray-700 dark:text-gray-300">Target monthly income: $_______</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">→</span>
                    <span className="text-gray-700 dark:text-gray-300">Maximum hours willing to work: _______</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">→</span>
                    <span className="text-gray-700 dark:text-gray-300">Number of income streams desired: _______</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4">3. Gap Analysis</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 dark:text-orange-400 font-bold">→</span>
                    <span className="text-gray-700 dark:text-gray-300">What's preventing you from achieving the desired state?</span>
                  </div>
                  <div className="ml-4 space-y-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">List your top 3 barriers:</p>
                    <div className="flex items-start gap-2">
                      <span className="text-orange-600 dark:text-orange-400">1.</span>
                      <span className="text-gray-700 dark:text-gray-300">_______________________</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-orange-600 dark:text-orange-400">2.</span>
                      <span className="text-gray-700 dark:text-gray-300">_______________________</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-orange-600 dark:text-orange-400">3.</span>
                      <span className="text-gray-700 dark:text-gray-300">_______________________</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
                <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-300">
                  Pro Tip: If your income is directly tied to hours worked, you have a leverage problem, not an income problem.
                </p>
              </div>
            </div>
          </Card>

          {/* Step 2: Mindset Shifts */}
          <Card className="mb-8 p-8 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Mindset Shifts Required</h3>
                <p className="text-gray-600 dark:text-gray-400">From Employee to Entrepreneur Thinking</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 px-4 font-bold text-gray-900 dark:text-white">Old Mindset ❌</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-900 dark:text-white">New Mindset ✅</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-900 dark:text-white">Action Step</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">"I sell my time"</td>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">"I sell outcomes"</td>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">List 3 outcomes you've delivered, not activities</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">"I hate self-promotion"</td>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">"I help people by making my expertise findable"</td>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">Reframe marketing as education</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">"I need to be an expert at everything"</td>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">"I solve specific, valuable problems"</td>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">Choose ONE problem to focus on initially</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">"Referrals will sustain me"</td>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">"I control my pipeline"</td>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">Commit to daily outreach (even 15 min/day)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800 mt-6">
              <p className="text-sm font-semibold text-red-800 dark:text-red-300">
                Warning: The biggest failure point is trying to help everyone with everything. This leads to commodity pricing and referral dependence.
              </p>
            </div>
          </Card>

          {/* Step 3: Prerequisites */}
          <Card className="mb-8 p-8 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Validate Your Prerequisites</h3>
                <p className="text-gray-600 dark:text-gray-400">Checklist: Are You Ready?</p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-6">Before proceeding, ensure you have:</p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Track Record Documentation</p>
                  <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400">→</span>
                      <span>At least 3 quantifiable results from your career</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400">→</span>
                      <span>Specific metrics (revenue generated, costs saved, time reduced)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400">→</span>
                      <span>Named technologies/frameworks mastered</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Willingness Indicators</p>
                  <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400">→</span>
                      <span>Committed to posting content 2x/week minimum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400">→</span>
                      <span>Ready to reach out to strangers daily</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400">→</span>
                      <span>Prepared to discuss money and value openly</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Solution Mindset</p>
                  <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400">→</span>
                      <span>Can articulate problems you solve, not just skills you have</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400">→</span>
                      <span>Think in terms of client outcomes, not your inputs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3">Exercise: The Results Inventory</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Create a spreadsheet with these columns:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">1.</span>
                  <span className="text-gray-700 dark:text-gray-300">Company/Project</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">2.</span>
                  <span className="text-gray-700 dark:text-gray-300">Challenge Faced</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">3.</span>
                  <span className="text-gray-700 dark:text-gray-300">Your Solution</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">4.</span>
                  <span className="text-gray-700 dark:text-gray-300">Quantified Result</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">5.</span>
                  <span className="text-gray-700 dark:text-gray-300">Technologies Used</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">6.</span>
                  <span className="text-gray-700 dark:text-gray-300">Timeline</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-3 font-semibold">Fill in at least 5 rows. This becomes your "evidence file" for later.</p>
            </div>
          </Card>

          {/* Step 4: Transition Strategy */}
          <Card className="mb-8 p-8 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Design Your Transition Strategy</h3>
                <p className="text-gray-600 dark:text-gray-400">Template: The Parallel Stream Blueprint</p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-6">If you're currently employed, use this safe transition approach:</p>

            <div className="space-y-4 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Phase 1: Foundation (Months 1-2)</h4>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Build initial offer and messaging</li>
                  <li>• Start content creation habit</li>
                  <li>• <span className="font-semibold">Goal:</span> First paying client</li>
                  <li>• <span className="font-semibold">Time investment:</span> 5-10 hrs/week</li>
                  <li>• <span className="font-semibold text-blue-600 dark:text-blue-400">Keep day job</span></li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border-l-4 border-purple-500">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Phase 2: Validation (Months 3-6)</h4>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Scale to 3-5 clients</li>
                  <li>• Refine offer based on feedback</li>
                  <li>• <span className="font-semibold">Goal:</span> $5K/month side income</li>
                  <li>• <span className="font-semibold">Time investment:</span> 10-15 hrs/week</li>
                  <li>• <span className="font-semibold text-purple-600 dark:text-purple-400">Keep day job</span></li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border-l-4 border-green-500">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Phase 3: Growth (Months 7-12)</h4>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Systemize delivery</li>
                  <li>• Raise prices based on value</li>
                  <li>• <span className="font-semibold">Goal:</span> Match 50% of W2 income</li>
                  <li>• <span className="font-semibold">Time investment:</span> 15-20 hrs/week</li>
                  <li>• <span className="font-semibold text-green-600 dark:text-green-400">Keep day job</span></li>
                </ul>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 border-l-4 border-orange-500">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Phase 4: Transition (Months 13-18)</h4>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Build 6-month cash reserve</li>
                  <li>• Secure 3-month pipeline</li>
                  <li>• <span className="font-semibold">Goal:</span> 2x W2 income potential</li>
                  <li>• <span className="font-semibold text-orange-600 dark:text-orange-400">Make transition decision</span></li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3">💰 Financial Safety Checklist:</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">6 months living expenses saved</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">Side income = 50% of current salary</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">3+ months of committed client work</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">Health insurance solution identified</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Divider CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg opacity-90 mb-6">See how we help you build your consulting practice step by step</p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => window.location.href = "/how-it-works"}
          >
            See How It Works
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Step 1: Define Your ICP & Niche */}
      <section id="step-1" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-6 py-3 rounded-full font-bold mb-6">
              <Target className="w-5 h-5" />
              <span>Step 1</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Define Your Ideal Client & Problem Niche</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              This is where most technical leaders fail - they try to be everything to everyone. Let's fix that.
            </p>
          </div>

          {/* Part A: ICP */}
          <Card className="mb-8 p-8 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Create Your Ideal Client Profile (ICP)</h3>
                <p className="text-gray-600 dark:text-gray-400">Template: The ICP Deep Dive</p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-6">Don't just list demographics. We need to understand their psychology.</p>

            <div className="space-y-6">
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4">Demographics (The Basics)</h4>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="font-semibold min-w-32">Industry:</span>
                    <span>[Be specific - "B2B SaaS" not "technology"]</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-semibold min-w-32">Company Stage:</span>
                    <span>[Seed/Series A/B/C/Growth/Enterprise]</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-semibold min-w-32">Company Size:</span>
                    <span>[Revenue or employee count]</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-semibold min-w-32">Geography:</span>
                    <span>[Remote/Local/Specific regions]</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-semibold min-w-32">Title/Role:</span>
                    <span>[Who actually signs the check?]</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4">Psychographics (The Gold)</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Their Current Situation:</h5>
                    <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300 ml-4">
                      <div>• Waking up at night worried about: ___________</div>
                      <div>• Biggest bottleneck to growth: ___________</div>
                      <div>• Failed solutions they've tried: ___________</div>
                      <div>• Internal pressure from: [Board/CEO/Team/Customers]</div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Their Desired Outcome:</h5>
                    <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300 ml-4">
                      <div>• Definition of success: ___________</div>
                      <div>• Timeline pressure: ___________</div>
                      <div>• Career implications of success/failure: ___________</div>
                      <div>• How they measure progress: ___________</div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Their Decision Triggers:</h5>
                    <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300 ml-4">
                      <div>• What makes this urgent NOW: ___________</div>
                      <div>• Budget already allocated for: ___________</div>
                      <div>• Competing priorities: ___________</div>
                      <div>• Decision-making process: ___________</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">Exercise: The Client Interview</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Reach out to 3 people who fit your initial ICP hypothesis. Ask:</p>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 font-bold min-w-6">1.</span>
                    <span>"What's your biggest challenge with [your area of expertise] right now?"</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 font-bold min-w-6">2.</span>
                    <span>"What have you tried that didn't work?"</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 font-bold min-w-6">3.</span>
                    <span>"If you could wave a magic wand, what would the solution look like?"</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 font-bold min-w-6">4.</span>
                    <span>"What's this costing you currently (time/money/opportunity)?"</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 font-bold min-w-6">5.</span>
                    <span>"When do you need this solved by?"</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
                <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-300">
                  Pro Tip: The best ICPs come from analyzing your best past clients/projects. Who did you love working with AND got amazing results for?
                </p>
              </div>
            </div>
          </Card>

          {/* Part B: Problem Niche */}
          <Card className="mb-8 p-8 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                B
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Find Your Problem Niche</h3>
                <p className="text-gray-600 dark:text-gray-400">Framework: The Horizontal Niche Matrix</p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-6">Instead of limiting yourself to one industry, focus on one problem across industries:</p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 px-4 font-bold text-gray-900 dark:text-white">Problem Focus</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-900 dark:text-white">Example Industries</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-900 dark:text-white">Your Expertise Angle</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">"Scale technical teams from 10 to 50"</td>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">SaaS, Fintech, Healthtech</td>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">Engineering leadership, hiring, culture</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">"Modernize legacy systems"</td>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">Banking, Insurance, Retail</td>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">Cloud migration, microservices, DevOps</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">"Launch MVP in 90 days"</td>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">Startups across verticals</td>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">Rapid prototyping, lean development</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">"Reduce AWS costs by 40%"</td>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">Any cloud-heavy company</td>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">Cloud optimization, FinOps</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800 mb-6">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3">Your Problem Niche Statement Template:</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 italic">
                "I help [ICP description] achieve [specific outcome] by solving [specific problem] using [your unique approach], typically within [timeframe]."
              </p>
              <div className="bg-white dark:bg-gray-900 rounded p-4">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Example:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  "I help Series A B2B SaaS CTOs scale their engineering teams from 10 to 50 developers by implementing proven hiring, onboarding, and culture systems, typically within 6 months."
                </p>
              </div>
            </div>
          </Card>

          {/* Part C: Now Buyer System */}
          <Card className="mb-8 p-8 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg">
                C
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">The "Now Buyer" Identification System</h3>
                <p className="text-gray-600 dark:text-gray-400">Only ~3% of your market is ready to buy RIGHT NOW. Here's how to find them</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 border border-red-200 dark:border-red-800">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">Urgent Signals (Buy within 30 days):</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Just raised funding</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">New executive hired</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Regulatory deadline approaching</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Major incident/failure occurred</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Competitor launched threatening feature</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">Medium Signals (Buy within 90 days):</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Posted job for someone with your expertise</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Attending conferences in your domain</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Publishing content about your problem area</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Asking for recommendations in communities</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">Daily Action: The Signal Scanner Routine</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Spend 15 minutes daily:</p>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold min-w-6">1.</span>
                    <span>Check funding announcements in your ICP's industry</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold min-w-6">2.</span>
                    <span>Monitor job boards for relevant positions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold min-w-6">3.</span>
                    <span>Search LinkedIn for "[your problem area] + challenge/help/struggling"</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold min-w-6">4.</span>
                    <span>Review relevant Slack/Discord communities</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold min-w-6">5.</span>
                    <span>Set Google Alerts for key terms</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Divider CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg opacity-90 mb-6">See how we help you build your consulting practice step by step</p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => window.location.href = "/how-it-works"}
          >
            See How It Works
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Step 2: Messaging & Marketing */}
      <section id="step-2" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-6 py-3 rounded-full font-bold mb-6">
              <MessageSquare className="w-5 h-5" />
              <span>Step 2</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-foreground">Align Your Messaging & Marketing System</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Now we package your expertise and get it in front of the right people.
            </p>
          </div>

          {/* Part A: Mine Your Expertise */}
          <Card className="mb-8 p-8 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Mine Your Expertise</h3>
                <p className="text-gray-600 dark:text-gray-400">Exercise: The Gold Mining Session</p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-6">Block 2 hours. You're going to extract EVERYTHING valuable from your career.</p>

            <div className="space-y-6">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4">Step 1: The Achievement Excavation</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">For each role/project, document:</p>

                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-green-300 dark:border-green-700">
                  <p className="font-bold text-gray-900 dark:text-white mb-3">[Company Name] - [Your Role] - [Dates]</p>

                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-2">The Situation</p>
                      <div className="ml-4 space-y-1 text-gray-700 dark:text-gray-300">
                        <div>• Company context: [Stage, size, industry]</div>
                        <div>• Challenge they faced: [Be specific]</div>
                        <div>• Why it mattered: [Business impact if unsolved]</div>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-2">Your Actions</p>
                      <div className="ml-4 space-y-1 text-gray-700 dark:text-gray-300">
                        <div>• Strategy developed: [Your approach]</div>
                        <div>• Team involved: [Size, composition]</div>
                        <div>• Technologies used: [List all]</div>
                        <div>• Timeline: [How long it took]</div>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-2">The Results</p>
                      <div className="ml-4 space-y-1 text-gray-700 dark:text-gray-300">
                        <div>• Quantified outcome: [Numbers, percentages]</div>
                        <div>• Qualitative wins: [Culture, morale, etc.]</div>
                        <div>• Long-term impact: [What happened after]</div>
                        <div>• Recognition received: [Awards, promotions, testimonials]</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4">Step 2: The Value Extraction</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">From your excavation, identify:</p>

                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">1.</span>
                    <span><span className="font-semibold">Biggest Revenue Impact:</span> Which project generated/saved the most money?</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">2.</span>
                    <span><span className="font-semibold">Fastest Result:</span> Which problem did you solve quickest?</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">3.</span>
                    <span><span className="font-semibold">Most Innovative:</span> Which solution was most creative/unique?</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">4.</span>
                    <span><span className="font-semibold">Highest Leverage:</span> Which required least effort for maximum impact?</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">5.</span>
                    <span><span className="font-semibold">Most Replicable:</span> Which could you do again easily?</span>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-white dark:bg-gray-900 rounded">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    Your "Power Three": Select your top 3 achievements that best demonstrate value to your ICP.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Part B: Market Messenger MVP System */}
          <Card className="mb-8 p-8 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                B
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">The Market Messenger MVP System</h3>
                <p className="text-gray-600 dark:text-gray-400">Three components to attract clients</p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Component 1: Profile Optimization */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Component 1: Profile Optimization</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Transform your LinkedIn profile into a client-attracting machine:</p>

                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                    <h5 className="font-bold text-gray-900 dark:text-white mb-3">LinkedIn Headline Formula</h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 italic">[Specific Outcome] for [ICP] | [Credibility Marker] | [Unique Angle]</p>

                    <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <p className="font-semibold">Examples:</p>
                      <div className="ml-4 space-y-1">
                        <div>• "I Help Series A CTOs Scale Engineering Teams 5x | Former Netflix/Uber | 50+ Teams Transformed"</div>
                        <div>• "Cloud Cost Optimization for High-Growth SaaS | AWS Certified | Saved Clients $50M+"</div>
                        <div>• "90-Day MVPs for Non-Technical Founders | 3x Unicorn Builder | 100% Launch Success Rate"</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                    <h5 className="font-bold text-gray-900 dark:text-white mb-3">About Section Template</h5>

                    <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                      <div>
                        <p className="font-semibold mb-1">[Hook - The Problem]</p>
                        <p className="ml-4 italic">Every [ICP] struggles with [specific problem].</p>
                      </div>

                      <div>
                        <p className="font-semibold mb-1">[Agitation - The Cost]</p>
                        <p className="ml-4 italic">This leads to [negative consequence 1], [consequence 2], and ultimately [worst case scenario].</p>
                      </div>

                      <div>
                        <p className="font-semibold mb-1">[Your Solution]</p>
                        <p className="ml-4 italic">I've spent [X years] solving this exact problem, delivering results like:</p>
                        <div className="ml-4 mt-1">
                          <div>• [Specific result 1 with metrics]</div>
                          <div>• [Specific result 2 with metrics]</div>
                          <div>• [Specific result 3 with metrics]</div>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold mb-1">[Your Unique Approach]</p>
                        <p className="ml-4 italic">My [methodology name] approach focuses on [key differentiator], not [what others do wrong].</p>
                      </div>

                      <div>
                        <p className="font-semibold mb-1">[Social Proof]</p>
                        <p className="ml-4 italic">[Client name/title] said: "[Powerful testimonial]"</p>
                      </div>

                      <div>
                        <p className="font-semibold mb-1">[Call to Action]</p>
                        <p className="ml-4 italic">→ Ready to [desired outcome]? Message me "SCALE" and let's discuss your situation.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Component 2: Content Creation System */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Component 2: Content Creation System</h4>

                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800 mb-4">
                  <h5 className="font-bold text-gray-900 dark:text-white mb-3">The 2-2-2 Content Formula:</h5>
                  <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <div>• 2 posts per week minimum</div>
                    <div>• 2 content types (educational + engaging)</div>
                    <div>• 2 minutes max to consume</div>
                  </div>
                </div>

                <div className="overflow-x-auto mb-4">
                  <p className="text-sm font-bold text-gray-900 dark:text-white mb-3">Weekly Content Calendar Template:</p>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 px-3 font-bold text-gray-900 dark:text-white">Day</th>
                        <th className="text-left py-2 px-3 font-bold text-gray-900 dark:text-white">Content Type</th>
                        <th className="text-left py-2 px-3 font-bold text-gray-900 dark:text-white">Topic</th>
                        <th className="text-left py-2 px-3 font-bold text-gray-900 dark:text-white">Format</th>
                        <th className="text-left py-2 px-3 font-bold text-gray-900 dark:text-white">CTA</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-3 text-gray-700 dark:text-gray-300">Tuesday</td>
                        <td className="py-3 px-3 text-gray-700 dark:text-gray-300">Educational</td>
                        <td className="py-3 px-3 text-gray-700 dark:text-gray-300">Problem/Solution</td>
                        <td className="py-3 px-3 text-gray-700 dark:text-gray-300">Text + Image</td>
                        <td className="py-3 px-3 text-gray-700 dark:text-gray-300">"DM for guide"</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 text-gray-700 dark:text-gray-300">Thursday</td>
                        <td className="py-3 px-3 text-gray-700 dark:text-gray-300">Engaging</td>
                        <td className="py-3 px-3 text-gray-700 dark:text-gray-300">Industry news/win</td>
                        <td className="py-3 px-3 text-gray-700 dark:text-gray-300">Video/Carousel</td>
                        <td className="py-3 px-3 text-gray-700 dark:text-gray-300">"What's your experience?"</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                    <h6 className="font-bold text-gray-900 dark:text-white mb-2">Educational Posts:</h6>
                    <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <div>1. "5 mistakes I see [ICP] make with [problem area]"</div>
                      <div>2. "The $[X] lesson I learned about [topic]"</div>
                      <div>3. "How [client type] achieved [result] in [timeframe]"</div>
                      <div>4. "The hidden cost of [common problem]"</div>
                      <div>5. "[Contrarian take] about [industry assumption]"</div>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                    <h6 className="font-bold text-gray-900 dark:text-white mb-2">Engaging Posts:</h6>
                    <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <div>1. Memes about [industry pain point]</div>
                      <div>2. Polls: "What's your biggest [area] challenge?"</div>
                      <div>3. Behind-the-scenes of your process</div>
                      <div>4. Client win celebrations</div>
                      <div>5. Industry news with your hot take</div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800 mt-4">
                  <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-300">
                    Pro Tip: Short-form video (30-60 seconds) gets 3-5x more reach. Even simple talking-head videos work.
                  </p>
                </div>
              </div>

              {/* Component 3: Daily Outreach Machine */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Component 3: Daily Outreach Machine</h4>

                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 border border-orange-200 dark:border-orange-800 mb-4">
                  <h5 className="font-bold text-gray-900 dark:text-white mb-3">The 30-Minute Outreach Sprint:</h5>

                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-2">Prep (5 min)</p>
                      <div className="ml-4 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                          <span>Open LinkedIn/email/platform</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                          <span>Review yesterday's responses</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                          <span>Check "Now Buyer" signals</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-2">New Outreach (15 min)</p>
                      <div className="ml-4 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                          <span>Send 5 connection requests with note</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                          <span>Send 3 InMails to high-value targets</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                          <span>Comment meaningfully on 5 ICP posts</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-2">Follow-up (10 min)</p>
                      <div className="ml-4 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                          <span>Respond to new messages</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                          <span>Follow up on pending conversations</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                          <span>Book calls directly in calendar</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                    <h6 className="font-bold text-gray-900 dark:text-white mb-2">Connection Request Template</h6>
                    <div className="bg-white dark:bg-gray-800 rounded p-3 text-sm text-gray-700 dark:text-gray-300 font-mono leading-relaxed">
                      Hi [Name],<br/><br/>
                      Noticed you're [specific observation about their role/company/content].<br/><br/>
                      I help [similar companies] with [specific problem you solve].<br/><br/>
                      Worth connecting to share insights on [relevant topic]?<br/><br/>
                      [Your name]
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                    <h6 className="font-bold text-gray-900 dark:text-white mb-3">Follow-Up Sequence</h6>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">Message 2 (3 days later):</p>
                        <div className="bg-white dark:bg-gray-800 rounded p-3 text-gray-700 dark:text-gray-300 font-mono">
                          "Hi [Name], saw your post about [topic]. Have you considered [insight related to your solution]?"
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">Message 3 (1 week later):</p>
                        <div className="bg-white dark:bg-gray-800 rounded p-3 text-gray-700 dark:text-gray-300 font-mono">
                          "[Name], quick question - what's your biggest challenge with [problem area] right now?"
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">Message 4 (2 weeks later):</p>
                        <div className="bg-white dark:bg-gray-800 rounded p-3 text-gray-700 dark:text-gray-300 font-mono">
                          "Sharing a resource that's helped [similar company] with [problem]. [Link to valuable content]. Hope it helps!"
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800 mt-4">
                  <p className="text-sm font-semibold text-blue-800 dark:text-blue-300">
                    Automation Tip: After proving the system works, hire a VA for $5-10/hour to handle outreach. You just handle responses.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Divider CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg opacity-90 mb-6">See how we help you build your consulting practice step by step</p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => window.location.href = "/how-it-works"}
          >
            See How It Works
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Step 3: Package Your Offer */}
      <section id="step-3" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-6 py-3 rounded-full font-bold mb-6">
              <Star className="w-5 h-5" />
              <span>Step 3</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Refine & Package Your Offer</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              This is where you turn expertise into money using value-based pricing.
            </p>
          </div>

          {/* Part A: Value-Based Pricing */}
          <Card className="mb-8 p-8 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Master Value-Based Pricing</h3>
                <p className="text-gray-600 dark:text-gray-400">The Value Calculation Framework</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4">Value-Based Pricing Worksheet</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Step 1: Quantify Client Value</h5>

                    <div className="mb-3">
                      <p className="font-semibold text-gray-900 dark:text-white mb-2">Direct Revenue Impact:</p>
                      <div className="ml-4 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <div>• New revenue generated: $________</div>
                        <div>• Revenue protected: $________</div>
                        <div>• Cost savings: $________</div>
                        <div>• Time saved (hours × hourly value): $________</div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <p className="font-semibold text-gray-900 dark:text-white mb-2">Indirect Value:</p>
                      <div className="ml-4 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <div>• Risk mitigation value: $________</div>
                        <div>• Opportunity cost avoided: $________</div>
                        <div>• Competitive advantage worth: $________</div>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-900 rounded p-3">
                      <p className="font-bold text-lg text-gray-900 dark:text-white">Total Value Created: $________</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Step 2: Apply Pricing Formula</h5>
                    <div className="ml-4 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <div>• Total Value: $________</div>
                      <div>• Your Fee (10% rule): $________</div>
                      <div>• Minimum Acceptable: $________ (your floor)</div>
                      <div>• Stretch Goal: $________ (15-20% if premium positioning)</div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Step 3: Structure the Engagement</h5>
                    <div className="ml-4 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                        <span>Fixed project fee</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                        <span>Monthly retainer</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                        <span>Success fee component</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                        <span>Hybrid model</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                <h5 className="font-bold text-gray-900 dark:text-white mb-3">Example Calculation:</h5>
                <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <div>• Client Problem: "Can't hire senior engineers"</div>
                  <div>• Cost of problem: $30K/month in lost productivity</div>
                  <div>• Your solution: Implement hiring system in 90 days</div>
                  <div>• Value over 12 months: $360,000</div>
                  <div className="font-bold text-blue-600 dark:text-blue-400">• Your fee: $36,000 (10%) or $12K/month for 3 months</div>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
                <p className="text-sm font-semibold text-red-800 dark:text-red-300">
                  Warning: Never base pricing on your old salary. A $150K salary ÷ 2080 hours = $72/hour mindset will keep you broke.
                </p>
              </div>
            </div>
          </Card>

          {/* Part B: Offer Model Canvas */}
          <Card className="mb-8 p-8 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                B
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">The Offer Model Canvas</h3>
                <p className="text-gray-600 dark:text-gray-400">Build Your Signature Offer</p>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800 mb-6">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">[Your Offer Name] Canvas</h4>

              <div className="space-y-6">
                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    OUTCOME (Start Here!)
                  </h5>

                  <div className="ml-7 space-y-3">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-2">Quantitative Metrics:</p>
                      <div className="ml-4 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <div>• Metric 1: [e.g., "50% reduction in deployment time"]</div>
                        <div>• Metric 2: [e.g., "3x improvement in team velocity"]</div>
                        <div>• Metric 3: [e.g., "$2M in prevented downtime"]</div>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-2">Qualitative Outcomes:</p>
                      <div className="ml-4 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <div>• Feeling: [e.g., "Confidence in system stability"]</div>
                        <div>• Capability: [e.g., "Team can ship without you"]</div>
                        <div>• Recognition: [e.g., "Viewed as innovative leader"]</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white mb-3">PILLARS (Your Philosophy)</h5>
                  <div className="ml-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <div>
                      <span className="font-semibold">1. [Pillar 1 Name]:</span> [Brief description]
                      <div className="ml-4 text-xs italic">- Why it matters: [Connection to outcome]</div>
                    </div>
                    <div>
                      <span className="font-semibold">2. [Pillar 2 Name]:</span> [Brief description]
                      <div className="ml-4 text-xs italic">- Why it matters: [Connection to outcome]</div>
                    </div>
                    <div>
                      <span className="font-semibold">3. [Pillar 3 Name]:</span> [Brief description]
                      <div className="ml-4 text-xs italic">- Why it matters: [Connection to outcome]</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white mb-3">PROBLEMS (What You Solve)</h5>
                  <div className="ml-4 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <div><span className="font-semibold">1. [Problem 1]:</span> [Description + cost of not solving]</div>
                    <div><span className="font-semibold">2. [Problem 2]:</span> [Description + cost of not solving]</div>
                    <div><span className="font-semibold">3. [Problem 3]:</span> [Description + cost of not solving]</div>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white mb-3">SOLUTIONS (How You Solve)</h5>
                  <div className="ml-4 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <div><span className="font-semibold">1. [Solution to Problem 1]:</span> [Your unique approach]</div>
                    <div><span className="font-semibold">2. [Solution to Problem 2]:</span> [Your unique approach]</div>
                    <div><span className="font-semibold">3. [Solution to Problem 3]:</span> [Your unique approach]</div>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white mb-3">THE HOW (Only Share When Asked)</h5>
                  <div className="ml-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <div>
                      <p className="font-semibold">Phase 1: Discovery (Week 1-2)</p>
                      <div className="ml-4">
                        <div>- [Specific deliverable]</div>
                        <div>- [Specific deliverable]</div>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">Phase 2: Implementation (Week 3-8)</p>
                      <div className="ml-4">
                        <div>- [Specific deliverable]</div>
                        <div>- [Specific deliverable]</div>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">Phase 3: Optimization (Week 9-12)</p>
                      <div className="ml-4">
                        <div>- [Specific deliverable]</div>
                        <div>- [Specific deliverable]</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <p className="font-bold text-gray-900 dark:text-white mb-3">Package Options Template:</p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2 px-3 font-bold text-gray-900 dark:text-white">Package</th>
                    <th className="text-left py-2 px-3 font-bold text-gray-900 dark:text-white">Scope</th>
                    <th className="text-left py-2 px-3 font-bold text-gray-900 dark:text-white">Duration</th>
                    <th className="text-left py-2 px-3 font-bold text-gray-900 dark:text-white">Investment</th>
                    <th className="text-left py-2 px-3 font-bold text-gray-900 dark:text-white">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-3 font-bold text-gray-900 dark:text-white">Diagnostic</td>
                    <td className="py-3 px-3 text-gray-700 dark:text-gray-300">Problem assessment + roadmap</td>
                    <td className="py-3 px-3 text-gray-700 dark:text-gray-300">1 week</td>
                    <td className="py-3 px-3 text-gray-700 dark:text-gray-300">$5K</td>
                    <td className="py-3 px-3 text-gray-700 dark:text-gray-300">Clarity on path forward</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-3 font-bold text-gray-900 dark:text-white">Implementation</td>
                    <td className="py-3 px-3 text-gray-700 dark:text-gray-300">Full solution deployment</td>
                    <td className="py-3 px-3 text-gray-700 dark:text-gray-300">12 weeks</td>
                    <td className="py-3 px-3 text-gray-700 dark:text-gray-300">$36K</td>
                    <td className="py-3 px-3 text-gray-700 dark:text-gray-300">Ready to transform</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-gray-900 dark:text-white">Partnership</td>
                    <td className="py-3 px-3 text-gray-700 dark:text-gray-300">Ongoing optimization</td>
                    <td className="py-3 px-3 text-gray-700 dark:text-gray-300">6 months</td>
                    <td className="py-3 px-3 text-gray-700 dark:text-gray-300">$8K/month</td>
                    <td className="py-3 px-3 text-gray-700 dark:text-gray-300">Continuous improvement</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          {/* Part C: Validation Test */}
          <Card className="mb-8 p-8 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-lg">
                C
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">The Offer Validation Test</h3>
                <p className="text-gray-600 dark:text-gray-400">Before going to market, validate your offer</p>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800 mb-6">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3">The 5-Conversation Validation:</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">Reach out to 5 potential clients with this script:</p>

              <div className="bg-white dark:bg-gray-900 rounded p-4 text-sm text-gray-700 dark:text-gray-300 font-mono leading-relaxed mb-4">
                "Hi [Name], I'm developing a new approach to help [ICP] achieve [outcome].<br/><br/>
                It involves [brief description of solution] over [timeframe].<br/><br/>
                The investment would be around $[price].<br/><br/>
                Two questions:<br/>
                1. How valuable would [outcome] be to your business?<br/>
                2. What would need to be true for this to be a no-brainer investment?"
              </div>

              <div>
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Success Metrics:</p>
                <div className="ml-4 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <div>• 2+ say "very valuable" = proceed</div>
                  <div>• 3+ give same objection = address in offer</div>
                  <div>• 0 interested = revise outcome focus</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Quick Start CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Zap className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Want Results THIS WEEK?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Try the "10 Before 10" Challenge - get your first lead before you finish the full playbook
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6"
            onClick={() => {
              trackClick('10 Before 10 - Playbook Quick Start', {
                location: 'quick_start_cta'
              });
              window.location.href = "/10-before-10";
            }}
          >
            Try 10 Before 10 Challenge
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* 30-Day Roadmap */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Your 30-Day Implementation Roadmap
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Follow this week-by-week plan to launch your consulting business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                week: "Week 1",
                title: "Foundation",
                tasks: [
                  "Complete ICP definition",
                  "Document top 5 career achievements",
                  "Optimize LinkedIn profile",
                  "Create first piece of content"
                ]
              },
              {
                week: "Week 2",
                title: "Activation",
                tasks: [
                  "Publish 2 pieces of content",
                  'Do "10 before 10" challenge',
                  "Book first discovery call",
                  "Create case study PDF"
                ]
              },
              {
                week: "Week 3",
                title: "Refinement",
                tasks: [
                  "Complete offer canvas",
                  "Run pricing calculation",
                  "Create 3 package options",
                  "Continue daily outreach"
                ]
              },
              {
                week: "Week 4",
                title: "Scale",
                tasks: [
                  "Close first paid client",
                  "Systematize outreach process",
                  "Build content calendar",
                  "Plan transition timeline"
                ]
              }
            ].map((week, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase">{week.week}</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">{week.title}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {week.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Pitfalls */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Common Pitfalls & How to Avoid Them
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Learn from the mistakes others make so you don't have to
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Analysis Paralysis",
                symptom: "Spending weeks 'perfecting' your ICP",
                solution: "Set a 48-hour deadline. Ship version 1.0 and iterate.",
                icon: Clock
              },
              {
                title: "Sporadic Outreach",
                symptom: "'I'll do outreach when I have time'",
                solution: "Schedule it. 8:30-9:00 AM daily. Non-negotiable.",
                icon: MessageSquare
              },
              {
                title: "Feature-Focused Selling",
                symptom: "Talking about your process, not outcomes",
                solution: "Lead with results. Process comes after interest.",
                icon: Target
              },
              {
                title: "Underpricing",
                symptom: "Basing prices on time or old salary",
                solution: "Calculate value created. Take your percentage.",
                icon: TrendingUp
              },
              {
                title: "Weak Follow-Up",
                symptom: "One message then giving up",
                solution: "5-touch minimum over 2 weeks. Different angles.",
                icon: Send
              }
            ].map((pitfall, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-red-100 dark:bg-red-900/30">
                    <pitfall.icon className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{pitfall.title}</h3>
                    <p className="text-sm text-red-600 dark:text-red-400 font-medium mb-3">
                      Symptom: {pitfall.symptom}
                    </p>
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                      <p className="text-sm font-semibold text-green-800 dark:text-green-300">
                        ✓ Solution: {pitfall.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources & Tools */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Resources & Tools
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to implement this playbook
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white dark:bg-gray-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-orange-500" />
                Essential Tools
              </h3>
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-semibold">LinkedIn Sales Navigator</p>
                  <p className="text-xs text-gray-500">For prospecting ($80/month)</p>
                </div>
                <div>
                  <p className="font-semibold">Calendly</p>
                  <p className="text-xs text-gray-500">For booking calls (Free tier works)</p>
                </div>
                <div>
                  <p className="font-semibold">Loom</p>
                  <p className="text-xs text-gray-500">For video outreach ($10/month)</p>
                </div>
                <div>
                  <p className="font-semibold">Canva</p>
                  <p className="text-xs text-gray-500">For simple graphics (Free tier)</p>
                </div>
                <div>
                  <p className="font-semibold">Streak CRM</p>
                  <p className="text-xs text-gray-500">For Gmail pipeline tracking (Free tier)</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white dark:bg-gray-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-purple-500" />
                Templates & Scripts
              </h3>
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>ICP Worksheet (Google Sheets)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>Outreach Templates (Google Docs)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>Pricing Calculator (Excel/Sheets)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>Case Study Template (Canva)</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white dark:bg-gray-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-blue-500" />
                Continued Learning
              </h3>
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-semibold">Join Communities</p>
                  <p className="text-xs text-gray-500">[Your industry] + "consultants" on LinkedIn</p>
                </div>
                <div>
                  <p className="font-semibold">Book: "Value-Based Fees"</p>
                  <p className="text-xs text-gray-500">by Alan Weiss</p>
                </div>
                <div>
                  <p className="font-semibold">Course: "Expert Secrets"</p>
                  <p className="text-xs text-gray-500">by Russell Brunson</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Next Steps & Your Success Path
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Immediate Actions",
                subtitle: "(Today)",
                tasks: [
                  "Complete the Leverage Audit",
                  "Define your ICP first draft",
                  "List your top 3 achievements"
                ]
              },
              {
                title: "This Week",
                subtitle: "",
                tasks: [
                  "Optimize your LinkedIn profile",
                  "Publish your first post",
                  'Do the "10 before 10" challenge'
                ]
              },
              {
                title: "This Month",
                subtitle: "",
                tasks: [
                  "Build your complete offer",
                  "Close your first client",
                  "Establish daily habits"
                ]
              },
              {
                title: "This Quarter",
                subtitle: "",
                tasks: [
                  "Reach $10K/month in side income",
                  "Build 50+ prospect pipeline",
                  "Create signature framework"
                ]
              }
            ].map((step, index) => (
              <Card key={index} className="p-6 bg-white dark:bg-gray-800">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                  {step.subtitle && <p className="text-sm text-gray-500 dark:text-gray-400">{step.subtitle}</p>}
                </div>
                <ul className="space-y-2">
                  {step.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-white dark:bg-gray-800 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Final Words: Your Transformation Awaits
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Remember: You already have valuable expertise. The market needs what you know. This playbook is simply the bridge between your knowledge and their needs.
              </p>
              <p>
                Every successful consultant started exactly where you are now. The only difference? They took the first step.
              </p>
              <p>
                Your expertise deserves leverage. Your impact deserves scale. Your value deserves proper compensation.
              </p>
              <p className="text-xl font-bold text-center text-gray-900 dark:text-white pt-4">
                The question isn't whether you can do this. It's whether you'll start today.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <ContentFooter
        headline="Ready to Productize Your Expertise?"
        description="Get the complete playbook, weekly coaching, templates, and join a community of leaders transforming their expertise into scalable income."
        primaryCTA={{
          text: "Join Launch Kit",
          url: "/how-it-works",
          description: "Get Everything You Need to Succeed"
        }}
        benefits={[
          "Complete Playbook Access",
          "Weekly Coaching Calls",
          "Templates & Scripts",
          "Private Community"
        ]}
        socialProof="Join 300+ tech leaders already using this system"
        testimonials={testimonials}
        secondaryCTA={{
          text: "Set This System Up Faster",
          url: "/how-it-works"
        }}
        trackingContext="Get Playbook"
      />
    </div>
  );
};

export default GetPlaybook;
