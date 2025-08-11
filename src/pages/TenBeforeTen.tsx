import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, Target, MessageSquare, ArrowRight, Zap, Star, Users } from "lucide-react";
import SEO from "@/components/SEO";
import { trackClick, trackEvent } from "@/utils/posthog";
import { useTrackScrollDepth } from "@/hooks/use-posthog";
import { useEffect } from "react";

const TenBeforeTen = () => {
  useTrackScrollDepth('10 Before 10 Page');
  
  useEffect(() => {
    trackEvent('10 Before 10 Page View', {
      has_strategy: true,
      has_cta: true
    });
  }, []);

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
      details: 'Find your ideal client profile on LinkedIn, then use the "twin this profile" formula with ChatGPT. Paste the LinkedIn URL and ask ChatGPT to generate Sales Navigator filters for similar profiles. Use these filters to build a targeted list of 100 prospects to connect with.',
      icon: Target,
      color: "from-purple-500 to-purple-600"
    },
    {
      number: 3,
      title: "Targeted Outreach",
      subtitle: "Send messages that convert",
      description: "Use our proven script to start conversations that lead to opportunities",
      details: "Send 10 connection requests per day from your list in Step 2. After they accept your connection request, follow up with the proven message template below that leads with value and generates genuine interest.",
      icon: MessageSquare,
      color: "from-green-500 to-green-600"
    }
  ];

  const results = [
    { metric: "10", label: "Shots taken", sublabel: "Every morning" },
    { metric: "1-3", label: "Conversations started", sublabel: "Per day" },
    { metric: "1", label: "Qualified lead", sublabel: "Within 7 days" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="10 Before 10 - Get Your Next Client Fast"
        description="The 3-step Do-or-Die strategy to shoot 10 shots before 10am and land your first consulting client. Proven system used by 150+ tech leaders."
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
                trackClick('Get Launch Kit - 10 Before 10', {
                  location: 'hero_section'
                });
                window.location.href = "/launch-with-us";
              }}
            >
              Get The Full Launch Kit Now
              <ArrowRight className="ml-2 w-5 h-5" />
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
                          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-l-4 border-blue-500 shadow-lg">
                            <div className="flex items-start gap-3 mb-4">
                              <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-lg">
                                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div>
                                <p className="font-bold text-blue-900 dark:text-blue-200 text-lg mb-1">
                                  Get The Case Study Builder™️
                                </p>
                                <p className="text-blue-700 dark:text-blue-300">
                                  Transform your wins into client magnets
                                </p>
                              </div>
                            </div>
                            <Button
                              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg"
                              onClick={() => {
                                trackClick('Case Study Builder - Step 1', {
                                  location: '3_step_process',
                                  destination: 'chatgpt_case_study_builder'
                                });
                                window.open('https://chatgpt.com/g/g-689a4e5129588191a4031c1c4d339a59-the-case-study-builder', '_blank');
                              }}
                            >
                              <Star className="w-4 h-4 mr-2" />
                              Get The Case Study Builder™️
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        )}
                        
                        {step.number === 2 && (
                          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border-l-4 border-purple-500 shadow-lg">
                            <div className="flex items-start gap-3">
                              <div className="p-2 bg-purple-100 dark:bg-purple-800 rounded-lg">
                                <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                              </div>
                              <div>
                                <p className="font-bold text-purple-900 dark:text-purple-200 text-lg mb-2">
                                  The ICP Formula
                                </p>
                                <div className="space-y-1 text-sm">
                                  <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                    <span className="text-purple-700 dark:text-purple-300">Tell ChatGPT "twin this profile: LINK"</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <ArrowRight className="w-3 h-3 text-purple-500" />
                                    <span className="text-purple-700 dark:text-purple-300">Ask for Sales Nav filters</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <ArrowRight className="w-3 h-3 text-purple-500" />
                                    <span className="text-purple-700 dark:text-purple-300">Build list of 100 to connect with</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {step.number === 3 && (
                          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-l-4 border-green-500 shadow-lg">
                            <div className="flex items-start gap-3 mb-4">
                              <div className="p-2 bg-green-100 dark:bg-green-800 rounded-lg">
                                <MessageSquare className="w-5 h-5 text-green-600 dark:text-green-400" />
                              </div>
                              <div>
                                <p className="font-bold text-green-900 dark:text-green-200 text-lg mb-1">
                                  The Proven Script
                                </p>
                                <p className="text-green-700 dark:text-green-300 text-sm">
                                  Copy, paste, and personalize
                                </p>
                              </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-green-200 dark:border-green-800 font-mono text-sm leading-relaxed">
                              <p className="text-gray-800 dark:text-gray-200">
                                "Hey <span className="text-green-600 dark:text-green-400 font-semibold">[Name]</span>, I worked with <span className="text-green-600 dark:text-green-400 font-semibold">[Client]</span> who you might be familiar with. They were dealing with <span className="text-green-600 dark:text-green-400 font-semibold">[problem]</span> and I/we helped them get <span className="text-green-600 dark:text-green-400 font-semibold">[result]</span>. Wrote up a quick case study walking through exactly how we did it. Would it be helpful if I sent over the link?"
                              </p>
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
                Momentum and Consistency matter. Send 10 messages before 10am daily
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
                10
              </p>
              <p className="text-xl text-gray-300 font-bold">Messages Sent Before 10am Every Day</p>
            </div>
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <p className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-4">
                1-3
              </p>
              <p className="text-xl text-gray-300 font-bold">Leads Per Week</p>
            </div>
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <p className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-4">
                6 Days
              </p>
              <p className="text-xl text-gray-300 font-bold">Fastest First Client</p>
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
                trackClick('Get Launch Kit - 10 Before 10 CTA', {
                  location: 'bottom_section'
                });
                window.location.href = "/launch";
              }}
            >
              Get Launch Kit &amp; Start Tomorrow
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 font-semibold">
              Join 150+ tech leaders already using this system
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