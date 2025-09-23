import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, Target, MessageSquare, ArrowRight, Zap, Star, Users } from "lucide-react";
import SEO from "@/components/SEO";
import { trackClick, trackEvent } from "@/utils/posthog";
import { useTrackScrollDepth } from "@/hooks/use-posthog";
import { useEffect, useState } from "react";

const TenBeforeTen = () => {
  useTrackScrollDepth('10 Before 10 Page');
  const [showCaseStudyForm, setShowCaseStudyForm] = useState(false);
  
  useEffect(() => {
    trackEvent('10 Before 10 Page View', {
      has_strategy: true,
      has_cta: true
    });
  }, []);

  useEffect(() => {
    if (showCaseStudyForm) {
      const script = document.createElement('script');
      script.src = 'https://techleaders.kit.com/89c53071d2/index.js';
      script.async = true;
      script.setAttribute('data-uid', '89c53071d2');
      document.getElementById('case-study-form-container')?.appendChild(script);
    }
  }, [showCaseStudyForm]);

  const steps = [
    {
      number: 1,
      title: "Create Case Study",
      subtitle: "From recent success",
      description: "Transform your recent wins into compelling proof that attracts ideal clients",
      details: "Turn your experience into a powerful asset. Document how you solved a real problem and got measurable results.",
      cta: "Get The Case Study Builder™️ here",
      icon: Star,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: 2,
      title: "Find ICP",
      subtitle: "Identify your ideal prospects",
      description: "Use AI and Sales Navigator to find exactly who needs your expertise",
      details: 'Leverage AI to instantly identify and target your perfect prospects with surgical precision.',
      icon: Target,
      color: "from-purple-500 to-purple-600"
    },
    {
      number: 3,
      title: "Daily Outreach System",
      subtitle: "25 connections + 10 messages",
      description: "Systematic approach to building your pipeline every single day",
      details: "Execute your morning outreach routine with precision and consistency to build a predictable pipeline.",
      icon: MessageSquare,
      color: "from-green-500 to-green-600"
    }
  ];

  const results = [
    { metric: "25", label: "Connection requests", sublabel: "Sent daily" },
    { metric: "10+", label: "Messages sent", sublabel: "To new connections" },
    { metric: "2-5", label: "Qualified leads", sublabel: "Per week" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="10 Before 10 - Get Your Next Client Fast"
        description="The 3-step Do-or-Die strategy to shoot 10 shots before 10am and land your first consulting client. Proven system used by 300+ tech leaders."
        keywords={['10 before 10', 'consulting clients', 'outreach strategy', 'case study marketing', 'tech consulting']}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/launch-bg.png"
            alt="10 Before 10 background"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full text-sm font-bold mb-6">
            <Clock className="w-4 h-4" />
            <span>The 10 Before 10 Playbook</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Get Your Next Client
            <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mt-2">
              Before 10am Every Day
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
            The <span className="font-bold text-white">Do-or-Die</span> 3-step process to shoot 10 shots before 10am and validate consulting as a viable path.
          </p>
          
          <p className="text-2xl font-semibold mb-8 max-w-2xl mx-auto">
            This is exactly how our members land their first client in days, not months.
          </p>

          <div className="max-w-3xl mx-auto mb-8">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.youtube.com/embed/B4hpEyvui4A"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <div className="bg-background/50 backdrop-blur border border-white/10 rounded-lg p-6 max-w-2xl mx-auto mb-8 shadow-xl">
            <p className="text-lg font-bold mb-2">
              ⚡ Use the playbook below to get your first lead
            </p>
            <p className="text-base text-muted-foreground">
              Then we'll help you close them and get many more when you get Launch Kit
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-8 py-6"
              onClick={() => {
                trackClick('See How We Help - 10 Before 10', {
                  location: 'hero_section'
                });
                window.location.href = "/how-it-works";
              }}
            >
              See How We Help
            </Button>
          </div>
        </div>
      </section>

      {/* Expected Results */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 -mt-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mb-2">
                  {result.metric}
                </p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  {result.label}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {result.sublabel}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-6 py-3 rounded-full font-bold mb-6 shadow-md">
              <Target className="w-5 h-5" />
              <span>The System That Works</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              The 3-Step Playbook
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stop waiting for opportunities. Create them systematically every morning with this proven process.
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connecting line for non-last items */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-full w-0.5 h-12 bg-gradient-to-b from-orange-300 to-transparent dark:from-orange-600 transform -translate-x-1/2 z-10"></div>
                )}
                
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                  <div className="flex flex-col lg:flex-row">
                    {/* Left side - Step info */}
                    <div className="lg:w-2/5 p-10 text-white relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: index === 0 ? 'url(/ai-in-ar.png)' : index === 1 ? 'url(/launch-bg.png)' : 'url(/scale-bg.png)',
                        }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color.replace('from-', 'from-').replace('to-', 'to-')}/80`}></div>
                      </div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                      <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-10 -translate-x-10"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                            <span className="text-4xl font-bold">{step.number}</span>
                          </div>
                          <div className="p-3 rounded-xl bg-white/15 backdrop-blur-sm">
                            <step.icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-bold mb-3">{step.title}</h3>
                        <p className="text-xl opacity-90 font-medium">{step.subtitle}</p>
                      </div>
                    </div>
                    
                    {/* Right side - Details */}
                    <div className="lg:w-3/5 p-10">
                      <div className="max-w-2xl">
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                          {step.description}
                        </h4>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                          {step.details}
                        </p>
                        
                        {step.number === 1 && (
                          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                            <div className="space-y-6">
                              {/* Header */}
                              <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                                  <Star className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                  <p className="font-bold text-gray-900 dark:text-white text-xl">
                                    Your Case Study Creation System
                                  </p>
                                  <p className="text-gray-600 dark:text-gray-400">
                                    Turn your wins into powerful client magnets
                                  </p>
                                </div>
                              </div>

                              {/* Three-step process */}
                              <div className="grid md:grid-cols-3 gap-4">
                                {/* Step 1 */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
                                  <div className="flex items-center gap-2 mb-3">
                                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center font-bold text-blue-600 dark:text-blue-400 text-sm">
                                      1
                                    </div>
                                    <span className="font-bold text-gray-900 dark:text-white text-sm">Pick Your Win</span>
                                  </div>
                                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Think of a recent client success</p>
                                  <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                                    → What problem did you solve?
                                  </div>
                                </div>

                                {/* Step 2 */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-cyan-200 dark:border-cyan-700">
                                  <div className="flex items-center gap-2 mb-3">
                                    <div className="w-6 h-6 bg-cyan-100 dark:bg-cyan-900 rounded-full flex items-center justify-center font-bold text-cyan-600 dark:text-cyan-400 text-sm">
                                      2
                                    </div>
                                    <span className="font-bold text-gray-900 dark:text-white text-sm">Use AI Builder</span>
                                  </div>
                                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Let AI structure your story</p>
                                  <div className="text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                                    → Get professional format
                                  </div>
                                </div>

                                {/* Step 3 */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-green-200 dark:border-green-700">
                                  <div className="flex items-center gap-2 mb-3">
                                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center font-bold text-green-600 dark:text-green-400 text-sm">
                                      3
                                    </div>
                                    <span className="font-bold text-gray-900 dark:text-white text-sm">Share & Convert</span>
                                  </div>
                                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Use in your outreach messages</p>
                                  <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                                    → Instant credibility
                                  </div>
                                </div>
                              </div>

                              {/* CTA Button */}
                              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                                {!showCaseStudyForm ? (
                                  <>
                                    <div className="flex items-center justify-between mb-3">
                                      <p className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                                        Free Case Study Builder
                                      </p>
                                      <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full font-semibold">
                                        AI-Powered
                                      </span>
                                    </div>
                                    <Button
                                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg"
                                      onClick={() => {
                                        trackClick('Case Study Builder - Step 1', {
                                          location: '3_step_process',
                                          destination: 'form_embed'
                                        });
                                        setShowCaseStudyForm(true);
                                      }}
                                    >
                                      Get The Case Study Builder
                                    </Button>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 italic">
                                      💡 Pro tip: Focus on measurable results (time saved, money made, problems solved)
                                    </p>
                                  </>
                                ) : (
                                  <div 
                                    className="animate-fade-in"
                                    style={{
                                      animation: 'fadeIn 0.5s ease-in-out'
                                    }}
                                  >
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-center">
                                      Sign Up To Get The Case Study Builder
                                    </h3>
                                    <div id="case-study-form-container" />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {step.number === 2 && (
                          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
                            <div className="space-y-6">
                              {/* Header */}
                              <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg">
                                  <Target className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                  <p className="font-bold text-gray-900 dark:text-white text-xl">
                                    The AI-Powered ICP System
                                  </p>
                                  <p className="text-gray-600 dark:text-gray-400">
                                    Find 100 perfect prospects in 15 minutes
                                  </p>
                                </div>
                              </div>

                              {/* Three-step process */}
                              <div className="grid md:grid-cols-3 gap-4">
                                {/* Step 1 */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
                                  <div className="flex items-center gap-2 mb-3">
                                    <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center font-bold text-purple-600 dark:text-purple-400 text-sm">
                                      1
                                    </div>
                                    <span className="font-bold text-gray-900 dark:text-white text-sm">Find Ideal Profile</span>
                                  </div>
                                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Go to LinkedIn and find one perfect client profile</p>
                                  <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                                    → Copy their LinkedIn URL
                                  </div>
                                </div>

                                {/* Step 2 */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-indigo-200 dark:border-indigo-700">
                                  <div className="flex items-center gap-2 mb-3">
                                    <div className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center font-bold text-indigo-600 dark:text-indigo-400 text-sm">
                                      2
                                    </div>
                                    <span className="font-bold text-gray-900 dark:text-white text-sm">Use AI Formula</span>
                                  </div>
                                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Tell ChatGPT to clone this profile</p>
                                  <div className="bg-gray-50 dark:bg-gray-900 rounded p-2 text-xs font-mono text-gray-800 dark:text-gray-200">
                                    "twin this profile: [URL]"
                                  </div>
                                </div>

                                {/* Step 3 */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-green-200 dark:border-green-700">
                                  <div className="flex items-center gap-2 mb-3">
                                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center font-bold text-green-600 dark:text-green-400 text-sm">
                                      3
                                    </div>
                                    <span className="font-bold text-gray-900 dark:text-white text-sm">Build Your List</span>
                                  </div>
                                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Ask for Sales Navigator filters</p>
                                  <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                                    → Target: 100 prospects
                                  </div>
                                </div>
                              </div>

                              {/* Exact prompt */}
                              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-3">
                                  <p className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                                    Exact ChatGPT Prompt
                                  </p>
                                  <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full font-semibold">
                                    Copy & Paste
                                  </span>
                                </div>
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 font-mono text-sm leading-relaxed">
                                  <p className="text-gray-800 dark:text-gray-200">
                                    "Twin this profile: <span className="text-purple-600 dark:text-purple-400 font-bold">[PASTE_LINKEDIN_URL]</span><br/><br/>
                                    Give me Sales Navigator filters to find similar profiles. I want to build a list of 100 prospects to connect with."
                                  </p>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 italic">
                                  💡 Pro tip: Choose someone who recently got promoted or started a new role - they're more likely to need help
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {step.number === 3 && (
                          <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                            <div className="space-y-6">
                              {/* Daily Actions Header */}
                              <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg">
                                  <Zap className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                  <p className="font-bold text-gray-900 dark:text-white text-xl">
                                    Your Daily Outreach System
                                  </p>
                                  <p className="text-gray-600 dark:text-gray-400">
                                    Two simple actions that compound into pipeline growth
                                  </p>
                                </div>
                              </div>

                              {/* Two-column layout for actions */}
                              <div className="grid md:grid-cols-2 gap-4">
                                {/* Action 1: Connections */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-2 border-blue-200 dark:border-blue-700">
                                  <div className="flex items-center gap-2 mb-3">
                                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center font-bold text-blue-600 dark:text-blue-400">
                                      1
                                    </div>
                                    <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    <span className="font-bold text-gray-900 dark:text-white">25 Connections</span>
                                  </div>
                                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start gap-2">
                                      <span className="text-blue-500 font-bold">→</span>
                                      <span>Open Sales Navigator</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-blue-500 font-bold">→</span>
                                      <span>Use filters from Step 2</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-blue-500 font-bold">→</span>
                                      <span>Send 25 requests with notes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-blue-500 font-bold">→</span>
                                      <span>Track: 30%+ accept rate</span>
                                    </li>
                                  </ul>
                                </div>

                                {/* Action 2: Messages */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-2 border-green-200 dark:border-green-700">
                                  <div className="flex items-center gap-2 mb-3">
                                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center font-bold text-green-600 dark:text-green-400">
                                      2
                                    </div>
                                    <MessageSquare className="w-5 h-5 text-green-600 dark:text-green-400" />
                                    <span className="font-bold text-gray-900 dark:text-white">10+ Messages</span>
                                  </div>
                                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start gap-2">
                                      <span className="text-green-500 font-bold">→</span>
                                      <span>Check accepted connections</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-green-500 font-bold">→</span>
                                      <span>Copy script below</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-green-500 font-bold">→</span>
                                      <span>Personalize [brackets]</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-green-500 font-bold">→</span>
                                      <span>Send 10+ before 10am</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              {/* The Script */}
                              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-3">
                                  <p className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                                    The Proven Message Script
                                  </p>
                                  <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded-full font-semibold">
                                    Copy & Personalize
                                  </span>
                                </div>
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 font-mono text-sm leading-relaxed">
                                  <p className="text-gray-800 dark:text-gray-200">
                                    "Hey <span className="text-green-600 dark:text-green-400 font-bold">[Name]</span>, I worked with <span className="text-green-600 dark:text-green-400 font-bold">[Client]</span> who you might be familiar with. They were dealing with <span className="text-green-600 dark:text-green-400 font-bold">[problem]</span> and I/we helped them get <span className="text-green-600 dark:text-green-400 font-bold">[result]</span>. Wrote up a quick case study walking through exactly how we did it. Would it be helpful if I sent over the link?"
                                  </p>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 italic">
                                  💡 Pro tip: Reference a mutual connection or shared interest for 2x response rates
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 bg-white dark:bg-gray-800 px-8 py-4 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
              <Clock className="w-6 h-6 text-orange-500" />
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                Daily commitment: 25 connections + 10 messages = Your pipeline grows every day
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Why The 10 Before 10 Strategy Works
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Consistency Beats Perfection</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Taking 10 imperfect actions daily beats waiting for the perfect opportunity
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Proof-Based Outreach</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Leading with case studies shows you can deliver results, not just promises
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Targeted &gt; Mass</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    10 personalized messages to ideal clients beats 100 generic spray-and-pray attempts
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Morning Momentum</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Starting before 10am means you've already won before most people start their day
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-600/5"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-white">
            The Numbers That Matter
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <p className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-4">
                25
              </p>
              <p className="text-xl text-gray-300 font-bold">Connection Requests Sent Daily</p>
            </div>
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <p className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-4">
                10+
              </p>
              <p className="text-xl text-gray-300 font-bold">Messages to New Connections Daily</p>
            </div>
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <p className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-4">
                2-5
              </p>
              <p className="text-xl text-gray-300 font-bold">Qualified Leads Per Week</p>
            </div>
          </div>
          
          {/* Additional trust elements */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">No cold calling required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">Works in any industry</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">Takes just 30 minutes daily</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <Zap className="w-16 h-16 mx-auto mb-6 text-orange-500" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Get Your First Lead?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Start with 10 Before 10. Then let us help you close them and scale with Launch Kit.
          </p>

          <Card className="p-8 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Get Everything You Need to Succeed
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6 text-left max-w-xl mx-auto">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-gray-800 dark:text-gray-200 font-semibold">The Case Study Builder™️</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-gray-800 dark:text-gray-200 font-semibold">ICP Targeting System</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-gray-800 dark:text-gray-200 font-semibold">Proven Outreach Scripts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-gray-800 dark:text-gray-200 font-semibold">Weekly Coaching Calls</span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-12 py-6"
              onClick={() => {
                trackClick('See How We Help - 10 Before 10 CTA', {
                  location: 'bottom_section'
                });
                window.location.href = "/how-it-works";
              }}
            >
              See How We Help
            </Button>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 font-semibold">
              Join 300+ tech leaders already using this system
            </p>
          </Card>

          <p className="text-gray-700 dark:text-gray-300 mt-8">
            Questions? Email{" "}
            <a href="mailto:todd@technical-leaders.com" className="text-orange-600 hover:underline">
              todd@technical-leaders.com
            </a>
            {" "}or{" "}
            <button
              onClick={() => {
                trackClick('Book Call - 10 Before 10', {
                  location: 'bottom_section'
                });
                window.location.href = "/call";
              }}
              className="text-orange-600 hover:underline"
            >
              book a call
            </button>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TenBeforeTen;