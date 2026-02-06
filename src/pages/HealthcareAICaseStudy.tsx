import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, AlertTriangle, Target, Users, Zap, TrendingUp, Clock, ArrowRight, Quote, Building2, Workflow, BookOpen, Headphones, BarChart3, FileText, MessageSquare, Lightbulb, RefreshCw } from "lucide-react";
import SEO from "@/components/SEO";
import { trackClick } from "@/utils/posthog";

const HealthcareAICaseStudy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Healthcare AI Case Study - $75M Health Tech Company | Technical Leaders"
        description="How a $75M health tech company became AI-first in just weeks. Learn how we aligned 30 leaders from executives to analysts with a custom AI adoption program."
        keywords={['healthcare AI', 'AI case study', 'health tech AI', 'AI adoption', 'enterprise AI training', 'AI literacy']}
        image="https://technical-leaders.com/ai-in-ar.png"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-emerald-500/5 pt-32 pb-20">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Building2 className="w-4 h-4" />
              <span>CASE STUDY</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground dark:text-white mb-6">
              How a $75M Health Tech Company Became AI-First
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mt-2">
                in Just Weeks
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              From fragmented understanding to unified AI adoption and lasting transformation.
            </p>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <AlertTriangle className="w-4 h-4" />
              <span>THE CHALLENGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              A Fast-Scaling Company at a Critical Crossroads
            </h2>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-xl text-muted-foreground leading-relaxed">
              A fast-scaling health tech company with <strong className="text-gray-900 dark:text-white">$75M in revenue</strong> needed to rapidly build AI literacy across its entire organization — from the CEO to data analysts.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed mt-4">
              Despite their technical foundations, departments spoke different languages. Executives lacked clarity. Analysts lacked alignment. The risk? <strong className="text-gray-900 dark:text-white">Missed opportunities, internal confusion, and stalled innovation.</strong>
            </p>
          </div>

          <Card className="p-8 bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Symptoms They Faced:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Siloed understanding of AI's capabilities</span>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Slow executive buy-in for change management</span>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Fear and hype replacing clarity and action</span>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">No shared framework or KPIs to guide AI adoption</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 mt-8 bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">The Mission</h3>
                <p className="text-lg text-muted-foreground">
                  Transform <strong className="text-gray-900 dark:text-white">30 key team members</strong> into an AI-literate, aligned, execution-ready cohort, <strong className="text-gray-900 dark:text-white">fast.</strong>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-background dark:to-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              <span>THE SOLUTION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              A Private, Custom-Built AI Adoption Program
            </h2>
            <p className="text-lg text-muted-foreground">
              We delivered a private, custom-built AI adoption program designed for this company's unique needs:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground dark:text-white mb-2">Executive Alignment</h3>
                  <p className="text-muted-foreground">Align managers through ELT on AI fundamentals</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground dark:text-white mb-2">Practical Skills</h3>
                  <p className="text-muted-foreground">Level-set on data configuration, prompting, outputs & validation</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground dark:text-white mb-2">Strategic Integration</h3>
                  <p className="text-muted-foreground">Connect AI strategy to real KPIs and operational workflows</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground dark:text-white mb-2">Leadership Buy-In</h3>
                  <p className="text-muted-foreground">Ensure executive buy-in to lead change confidently</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              The result? <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">One organization. One language. One mission.</span>
            </p>
          </div>
        </div>
      </section>

      {/* What We Delivered Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Workflow className="w-4 h-4" />
              <span>WHAT WE DELIVERED</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Practical AI Implementation Across Every Function
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Beyond training, we delivered hands-on systems and ongoing support to ensure AI became embedded in daily operations.
            </p>
          </div>

          {/* AI Workflows */}
          <Card className="p-8 mb-8 hover:shadow-xl transition-shadow border-l-4 border-l-emerald-500">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <Workflow className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-foreground dark:text-white mb-3">
                  Custom AI Workflows for Every Department
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  We designed and implemented AI workflows tailored to save time and increase quality across all functions of the business.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <BarChart3 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground dark:text-white text-sm">Sales & Marketing</h4>
                      <p className="text-sm text-muted-foreground">Lead scoring, content generation, campaign optimization</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <FileText className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground dark:text-white text-sm">Operations</h4>
                      <p className="text-sm text-muted-foreground">Process automation, documentation, quality assurance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <MessageSquare className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground dark:text-white text-sm">Customer Success</h4>
                      <p className="text-sm text-muted-foreground">Response templates, sentiment analysis, churn prediction</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <Users className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground dark:text-white text-sm">HR & People</h4>
                      <p className="text-sm text-muted-foreground">Recruiting workflows, onboarding, policy Q&A</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground dark:text-white text-sm">Finance</h4>
                      <p className="text-sm text-muted-foreground">Report generation, forecasting, expense analysis</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <Lightbulb className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground dark:text-white text-sm">Product & R&D</h4>
                      <p className="text-sm text-muted-foreground">User research synthesis, feature ideation, competitive analysis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* AI-First Playbook */}
          <Card className="p-8 mb-8 hover:shadow-xl transition-shadow border-l-4 border-l-blue-500">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-foreground dark:text-white mb-3">
                  AI-First Playbook
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  A comprehensive, company-specific playbook that codifies AI best practices, policies, and implementation guidelines for lasting organizational change.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">AI usage policies and governance framework</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Department-specific prompt libraries</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Tool selection and integration guides</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Quality assurance and validation checklists</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">ROI tracking and success metrics</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Security and compliance guidelines</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Ongoing Office Hours */}
          <Card className="p-8 hover:shadow-xl transition-shadow border-l-4 border-l-purple-500">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-foreground dark:text-white mb-3">
                  Ongoing Office Hours Support
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Continuous access to AI experts to stay ahead of the AI curve and the competition. No question too small, no challenge too complex.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <RefreshCw className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground dark:text-white">Weekly Live Sessions</span>
                      <p className="text-sm text-muted-foreground">Real-time answers to implementation questions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground dark:text-white">New Tool Reviews</span>
                      <p className="text-sm text-muted-foreground">Stay current with AI advancements that matter</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground dark:text-white">Workflow Optimization</span>
                      <p className="text-sm text-muted-foreground">Continuous improvement of AI processes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground dark:text-white">Team Enablement</span>
                      <p className="text-sm text-muted-foreground">Onboard new hires and expand AI adoption</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* The Outcomes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="w-4 h-4" />
              <span>THE OUTCOMES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Measurable Results, Fast
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-foreground dark:text-white mb-2">30</h3>
              <p className="text-lg text-muted-foreground">Leaders AI-aligned, from execs to analysts</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-foreground dark:text-white mb-2">3 Weeks</h3>
              <p className="text-lg text-muted-foreground">From fragmented to AI-first</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground dark:text-white mb-2">Faster Collaboration</h3>
              <p className="text-muted-foreground">Smarter decisions and measurable momentum</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground dark:text-white mb-2">Leadership Ready</h3>
              <p className="text-muted-foreground">Equipped to scale AI strategy with clarity and confidence</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            <span>YOUR TURN</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Equip Your Leaders With Real AI Literacy?
          </h2>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you're at $10M or $100M+, if you're not moving fast on AI adoption, you're falling behind. Let's design a private program that makes your team AI-ready, from the boardroom to the data team.
          </p>

          <Button
            size="lg"
            className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
            onClick={() => {
              trackClick('Healthcare Case Study - Book Strategy Call', {
                location: 'cta_section',
                destination: 'calendly'
              });
              window.open('https://calendly.com/tech-leaders/ai-strategy', '_blank');
            }}
          >
            Book a Strategy Call
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthcareAICaseStudy;
