import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Users, Brain, ArrowRight, Code2, Target, Zap, TrendingUp, Clock, Award } from "lucide-react";
import { useState } from "react";
import SEO from "@/components/SEO";
import { trackClick } from "@/utils/posthog";

const AIProgramSelector = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleRoleSelection = (role: string) => {
    setSelectedRole(role);
    const targetSection = document.getElementById('programs');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Training Programs - Technical Leaders"
        description="Choose the right AI training program for your role. Executive training for leaders or hands-on membership for builders."
        keywords={['AI training', 'AI for executives', 'AI for engineers', 'AI programs', 'AI education']}
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
              <span>FIND YOUR PERFECT AI PROGRAM</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Which AI Program
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mt-2">
                Is Right For You?
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Whether you're building AI tools or leading AI transformation, we have the perfect program to accelerate your goals.
            </p>

            {/* Quick Role Selector */}
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg font-semibold text-foreground mb-6">I am a...</p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card
                  className={`p-8 cursor-pointer transition-all hover:shadow-xl hover:scale-105 ${
                    selectedRole === 'builder' ? 'ring-2 ring-purple-500 shadow-xl' : ''
                  }`}
                  onClick={() => handleRoleSelection('builder')}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                    <Code2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Builder / Maker</h3>
                  <p className="text-muted-foreground mb-4">
                    Engineer, Product Manager, Designer, or Technical Professional
                  </p>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-500" />
                      <span>Want hands-on AI skills</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-500" />
                      <span>Stay current with latest tools</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-500" />
                      <span>Build AI-powered products</span>
                    </div>
                  </div>
                </Card>

                <Card
                  className={`p-8 cursor-pointer transition-all hover:shadow-xl hover:scale-105 ${
                    selectedRole === 'leader' ? 'ring-2 ring-blue-500 shadow-xl' : ''
                  }`}
                  onClick={() => handleRoleSelection('leader')}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Leader / Executive</h3>
                  <p className="text-muted-foreground mb-4">
                    C-Suite, VP, Director, or Senior Manager
                  </p>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                      <span>Drive AI strategy & adoption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                      <span>Lead organizational transformation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                      <span>Build executive AI literacy</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Ship AI Program */}
            <Card className={`p-8 transition-all ${
              selectedRole === 'builder' ? 'ring-2 ring-purple-500 shadow-2xl scale-105' : 'hover:shadow-xl'
            }`}>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  FOR BUILDERS
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Ship AI</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Weekly AI Training & Office Hours
                </p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-foreground">$100</span>
                  <span className="text-muted-foreground">/month</span>
                  <span className="text-sm text-muted-foreground ml-2">or $1,000/year</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-4">Perfect if you want to:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Master the latest AI tools (Claude, ChatGPT, Cursor, v0)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Get hands-on training with new workflows every week</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Join a community of 300+ builders</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Access expert office hours for your projects</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Stay ahead of the AI curve with weekly updates</span>
                  </div>
                </div>
              </div>

              <div className="mb-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <div className="flex items-start gap-2">
                  <Award className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-purple-900 dark:text-purple-100 mb-1">What You Get</p>
                    <p className="text-sm text-purple-800 dark:text-purple-200">
                      Weekly live training • Expert office hours • AI community • Prompts & templates • All recordings
                    </p>
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
                      destination: '/ship-ai',
                      cta_text: 'Learn More About Ship AI',
                      selected_role: selectedRole
                    });
                    window.location.href = "/ship-ai";
                  }}
                >
                  Learn More About Ship AI
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Cancel anytime • Start learning today
                </p>
              </div>
            </Card>

            {/* AI for Leaders Program */}
            <Card className={`p-8 transition-all ${
              selectedRole === 'leader' ? 'ring-2 ring-blue-500 shadow-2xl scale-105' : 'hover:shadow-xl'
            }`}>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  FOR LEADERS
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-2">AI for Leaders</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Executive AI Training Program
                </p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-foreground">$2,500</span>
                  <span className="text-muted-foreground">individual</span>
                  <span className="text-sm text-muted-foreground ml-2">or custom enterprise</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-4">Perfect if you need to:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Build executive-level AI literacy for strategic decisions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Drive AI adoption across your organization</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Master prompt engineering for enterprise data</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Build AI tools without writing code</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Navigate organizational change management</span>
                  </div>
                </div>
              </div>

              <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-2">
                  <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-blue-900 dark:text-blue-100 mb-1">What You Get</p>
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      3 intensive sessions • Lifetime office hours • Custom AI playbook • Executive toolkit • 90-day support
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white text-lg px-8 py-6"
                  onClick={() => {
                    trackClick('AI Program Selector - AI for Leaders', {
                      location: 'program_comparison',
                      destination: '/ai-for-leaders',
                      cta_text: 'Learn More About AI for Leaders',
                      selected_role: selectedRole
                    });
                    window.location.href = "/ai-for-leaders";
                  }}
                >
                  Learn More About AI for Leaders
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

      {/* Comparison Table Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Quick Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left p-4 font-semibold text-foreground"></th>
                  <th className="text-center p-4 font-semibold text-purple-600">Ship AI</th>
                  <th className="text-center p-4 font-semibold text-blue-600">AI for Leaders</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-4 font-medium text-foreground">Best For</td>
                  <td className="p-4 text-center text-muted-foreground">Engineers, PMs, Designers, Builders</td>
                  <td className="p-4 text-center text-muted-foreground">C-Suite, VPs, Directors, Executives</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground">Format</td>
                  <td className="p-4 text-center text-muted-foreground">Ongoing membership</td>
                  <td className="p-4 text-center text-muted-foreground">3-session program or 1-day workshop</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground">Time Commitment</td>
                  <td className="p-4 text-center text-muted-foreground">~2 hrs/week (flexible)</td>
                  <td className="p-4 text-center text-muted-foreground">6 hours total + office hours</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground">Focus</td>
                  <td className="p-4 text-center text-muted-foreground">Hands-on tools & workflows</td>
                  <td className="p-4 text-center text-muted-foreground">Strategy & organizational adoption</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground">Price</td>
                  <td className="p-4 text-center text-muted-foreground">$100/mo or $1,000/yr</td>
                  <td className="p-4 text-center text-muted-foreground">$2,500 individual / Custom enterprise</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground">Community</td>
                  <td className="p-4 text-center">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground">Office Hours</td>
                  <td className="p-4 text-center">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Still Not Sure Which Program?
          </h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-3">Can I do both programs?</h3>
              <p className="text-muted-foreground">
                Absolutely! Many executives start with AI for Leaders to build strategic literacy, then join Ship AI to stay current with the latest tools. We offer a bundle discount - contact us for details.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-3">I'm a technical manager - which should I choose?</h3>
              <p className="text-muted-foreground">
                If you're hands-on with your team and want to build alongside them, choose Ship AI. If you're focused on strategy, organizational adoption, and leading from above, choose AI for Leaders.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-3">Can my team join together?</h3>
              <p className="text-muted-foreground">
                Yes! We offer team discounts for Ship AI and custom enterprise programs for AI for Leaders. Email todd@technical-leaders.com to discuss team enrollment.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-3">What if I choose the wrong program?</h3>
              <p className="text-muted-foreground">
                No worries! We offer a 7-day satisfaction guarantee. If the program isn't the right fit, we'll help you switch or provide a full refund.
              </p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Still have questions?
            </p>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                trackClick('AI Program Selector - Contact', {
                  location: 'faq_section',
                  cta_text: 'Email Us'
                });
                window.location.href = "mailto:todd@technical-leaders.com";
              }}
            >
              Email Us: todd@technical-leaders.com
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIProgramSelector;
