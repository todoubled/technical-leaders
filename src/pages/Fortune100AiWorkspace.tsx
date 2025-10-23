import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, Target, MessageSquare, ArrowRight, Zap, Star, Users, BookOpen, Lightbulb, FileText, TrendingUp, Sparkles, Cpu, Lock, Settings } from "lucide-react";
import SEO from "@/components/SEO";
import { trackClick, trackEvent } from "@/utils/posthog";
import { useTrackScrollDepth } from "@/hooks/use-posthog";
import { useEffect } from "react";

const Fortune100AiWorkspace = () => {
  useTrackScrollDepth('Fortune 100 AI Workspace Page');

  useEffect(() => {
    trackEvent('Fortune 100 AI Workspace Page View', {
      has_strategy: true,
      has_cta: true
    });
  }, []);

  const sections = [
    {
      number: 1,
      title: "What You're Building",
      subtitle: "Your AI-Powered Productivity Revolution",
      description: "Two AI assistants working together: Creative Partner + Execution Assistant",
      details: "Imagine having NotebookLM as your strategic thinking companion and Claude with MCPs as your execution powerhouse. Save 10+ hours per week, make better decisions with full business context, and automate workflows across all your tools.",
      icon: Sparkles,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: 2,
      title: "Before You Begin",
      subtitle: "What You'll Need",
      description: "15 minutes to gather accounts, credentials, and access",
      details: "You'll need your work Google account for NotebookLM, admin access to company tools (or IT help), and about 30-45 minutes for complete setup. Have login credentials ready and a sample project in mind to test.",
      icon: BookOpen,
      color: "from-purple-500 to-purple-600"
    },
    {
      number: 3,
      title: "Setting Up NotebookLM",
      subtitle: "Your AI Brainstorming Partner",
      description: "5-minute setup for divergent thinking and creative exploration",
      details: "Access notebooklm.google.com, sign in with your Google account, create your first notebook, and add 3-5 key documents. NotebookLM becomes your research assistant who has read everything and can help you explore ideas and find connections.",
      icon: Lightbulb,
      color: "from-green-500 to-green-600"
    },
    {
      number: 4,
      title: "Setting Up Claude Code",
      subtitle: "Your AI Execution Assistant",
      description: "Choose between Claude Desktop (easier) or Claude Code (more powerful)",
      details: "Option A: Download Claude Desktop for simple 10-minute setup. Option B: Install Claude Code with Tailscale for full capabilities in 20 minutes. Claude becomes your skilled assistant who actually does work in your business tools.",
      icon: Cpu,
      color: "from-orange-500 to-orange-600"
    },
    {
      number: 5,
      title: "Connecting Business Tools",
      subtitle: "Making Claude Your Universal Assistant",
      description: "Connect PostHog, Linear, Airtable, Google Docs, and Slack via MCPs",
      details: "Set up Model Context Protocol bridges that let Claude work directly in your tools. Get API keys from each platform and connect them to Claude. Test each integration to ensure Claude can read and write to your systems.",
      icon: Settings,
      color: "from-pink-500 to-pink-600"
    },
    {
      number: 6,
      title: "Using Your AI Workspace",
      subtitle: "The Power of Two Modes",
      description: "Master the strategy room (NotebookLM) and the war room (Claude)",
      details: "Morning: Upload meeting notes to NotebookLM for strategic insights. Midday: Use Claude to create Linear tasks and update Airtable. Afternoon: Pull analytics from PostHog and generate reports in Google Docs. Learn power commands for both tools.",
      icon: Target,
      color: "from-cyan-500 to-cyan-600"
    },
    {
      number: 7,
      title: "Real-World Use Cases",
      subtitle: "See It In Action",
      description: "QBR prep, product launches, customer intelligence, and competitive analysis",
      details: "Cut QBR preparation from 2-3 days to 2 hours. Coordinate product launches across teams seamlessly. Build a daily customer intelligence system. Transform competitive research into actionable battle cards.",
      icon: Star,
      color: "from-red-500 to-red-600"
    },
    {
      number: 8,
      title: "Advanced Tips & Tricks",
      subtitle: "Maximizing Your Capabilities",
      description: "Specialized notebooks, custom workflows, and batch operations",
      details: "Create topic-specific notebooks for market intelligence and customer insights. Build custom workflows that pull from all tools automatically. Use Claude's memory for your preferences. Master batch operations to save even more time.",
      icon: TrendingUp,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      number: 9,
      title: "Security & Best Practices",
      subtitle: "Enterprise-Grade Protection",
      description: "API key management, data sensitivity, and access control",
      details: "Never share API keys via email. Rotate keys every 90 days. Review data uploads carefully. Use Claude enterprise version for sensitive data. Limit MCP permissions to necessary functions. Regular audits of connected tools.",
      icon: Lock,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      number: 10,
      title: "Measuring Success",
      subtitle: "Track Your ROI",
      description: "Week 1 goals, Month 1 metrics, and ROI calculation",
      details: "Track hours saved, insights generated, reports automated, and team adoption. Simple formula: 10 hours/week saved at $100/hour = $52,000/year per person. Monitor error rates and speed to decision improvements.",
      icon: Users,
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Fortune 100 AI Workspace - Complete Setup Guide"
        description="Set up the same AI workspace used by Fortune 100 companies. Combine NotebookLM for creative thinking with Claude Code for execution. Complete tutorial with step-by-step instructions."
        keywords={['AI workspace', 'NotebookLM', 'Claude Code', 'MCP', 'AI tools', 'productivity', 'Fortune 100', 'AI setup', 'business automation']}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/launch-bg.png"
            alt="Fortune 100 AI Workspace background"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full text-sm font-bold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>The Fortune 100 AI Workspace™</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mt-2">
              Your AI-Powered Productivity Revolution
            </span>
          </h1>

          <p className="text-2xl font-semibold mb-8 max-w-2xl mx-auto">
            Set up the same AI workspace being used by Fortune 100 companies to transform how they work
          </p>

          <div className="bg-background/50 backdrop-blur border border-white/10 rounded-lg p-6 max-w-3xl mx-auto mb-8 shadow-xl">
            <p className="text-lg font-bold mb-3">
              What You'll Get:
            </p>
            <div className="grid md:grid-cols-2 gap-3 text-left">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base">Save 10+ hours per week on routine tasks</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base">AI that understands all your business context</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base">Automated workflows across all your tools</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base">Step-by-step setup in 30-45 minutes</span>
              </div>
            </div>
          </div>

          <p className="text-xl font-semibold text-foreground mb-6">
            Complete setup guide with real-world examples
          </p>

          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-8 py-6"
              onClick={() => {
                trackClick('Learn More - Fortune 100 AI Workspace', {
                  location: 'hero_section'
                });
                window.location.href = "/ai";
              }}
            >
              Get Started with AI Training
            </Button>
          </div>
        </div>
      </section>

      {/* 10 Sections */}
      <section id="sections" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              The Fortune 100 AI Workspace™ Setup
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From setup to mastery: Your complete guide to building a powerful AI workspace
            </p>
          </div>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="relative">
                {/* Connecting line for non-last items */}
                {index < sections.length - 1 && (
                  <div className="absolute left-1/2 top-full w-0.5 h-12 bg-gradient-to-b from-orange-300 to-transparent dark:from-orange-600 transform -translate-x-1/2 z-10"></div>
                )}

                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                  <div className="flex flex-col lg:flex-row">
                    {/* Left side - Section info */}
                    <div className="lg:w-2/5 p-10 text-white relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: index % 3 === 0 ? 'url(/ai-in-ar.png)' : index % 3 === 1 ? 'url(/launch-bg.png)' : 'url(/scale-bg.png)',
                        }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${section.color.replace('from-', 'from-').replace('to-', 'to-')}/80`}></div>
                      </div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                      <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-10 -translate-x-10"></div>

                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                            <span className="text-4xl font-bold">{section.number}</span>
                          </div>
                          <div className="p-3 rounded-xl bg-white/15 backdrop-blur-sm">
                            <section.icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-bold mb-3">{section.title}</h3>
                        <p className="text-xl opacity-90 font-medium">{section.subtitle}</p>
                      </div>
                    </div>

                    {/* Right side - Details */}
                    <div className="lg:w-3/5 p-10">
                      <div className="max-w-2xl">
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                          {section.description}
                        </h4>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                          {section.details}
                        </p>

                        {/* Special content for Section 1 - What You're Building */}
                        {section.number === 1 && (
                          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                            <div className="space-y-4">
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                                  <Sparkles className="w-6 h-6 text-white" />
                                </div>
                                <p className="font-bold text-gray-900 dark:text-white text-xl">
                                  Two AI Assistants Working for You
                                </p>
                              </div>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
                                  <p className="text-sm font-bold text-purple-600 dark:text-purple-400 mb-2">🧠 Creative Partner</p>
                                  <p className="text-sm text-gray-700 dark:text-gray-300 font-semibold">NotebookLM</p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Brainstorm, explore ideas, find connections</p>
                                </div>
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-green-200 dark:border-green-700">
                                  <p className="text-sm font-bold text-green-600 dark:text-green-400 mb-2">⚡ Execution Assistant</p>
                                  <p className="text-sm text-gray-700 dark:text-gray-300 font-semibold">Claude with MCPs</p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Automate tasks, create reports, manage projects</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Special content for Section 5 - Business Tools */}
                        {section.number === 5 && (
                          <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-xl p-6 border border-pink-200 dark:border-pink-800">
                            <div className="space-y-4">
                              <p className="font-bold text-gray-900 dark:text-white text-lg mb-3">
                                Essential Tools to Connect:
                              </p>
                              <div className="grid md:grid-cols-2 gap-3">
                                {[
                                  { name: "PostHog", icon: "📊", desc: "Analytics & metrics" },
                                  { name: "Linear", icon: "📋", desc: "Project management" },
                                  { name: "Airtable", icon: "📁", desc: "Database & records" },
                                  { name: "Google Docs", icon: "📝", desc: "Documentation" },
                                  { name: "Slack", icon: "💬", desc: "Team communication" }
                                ].slice(0, 4).map((tool, i) => (
                                  <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-pink-200 dark:border-pink-700">
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className="text-xl">{tool.icon}</span>
                                      <span className="text-sm font-bold text-gray-900 dark:text-white">{tool.name}</span>
                                    </div>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">{tool.desc}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Special content for Section 7 - Use Cases */}
                        {section.number === 7 && (
                          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
                            <div className="space-y-4">
                              <p className="font-bold text-gray-900 dark:text-white text-lg mb-3">
                                Proven Use Cases:
                              </p>
                              <div className="space-y-3">
                                {[
                                  "QBR prep: 2 days → 2 hours",
                                  "Product launch coordination",
                                  "Customer intelligence system",
                                  "Competitive analysis automation"
                                ].map((useCase, i) => (
                                  <div key={i} className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg p-3 border border-red-200 dark:border-red-700">
                                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">{useCase}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Special content for Section 10 - ROI */}
                        {section.number === 10 && (
                          <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800">
                            <div className="space-y-4">
                              <p className="font-bold text-gray-900 dark:text-white text-lg mb-3">
                                Simple ROI Formula:
                              </p>
                              <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border-2 border-emerald-300 dark:border-emerald-700">
                                <div className="text-center">
                                  <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                                    $52,000/year
                                  </p>
                                  <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Per person (10 hrs/week × $100/hr)
                                  </p>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-3 mt-4">
                                <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg border border-emerald-200 dark:border-emerald-700">
                                  <p className="text-2xl font-bold text-gray-900 dark:text-white">⏱️</p>
                                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Hours saved</p>
                                </div>
                                <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg border border-emerald-200 dark:border-emerald-700">
                                  <p className="text-2xl font-bold text-gray-900 dark:text-white">📈</p>
                                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Quality improved</p>
                                </div>
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

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-12 py-6 shadow-xl"
              onClick={() => {
                trackClick('Download Full Guide - Fortune 100 AI Workspace', {
                  location: 'sections_bottom'
                });
                // Download the markdown file
                const link = document.createElement('a');
                link.href = '/f100-ai-workspace.md';
                link.download = 'fortune-100-ai-workspace-guide.md';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download Complete Setup Guide
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <Zap className="w-16 h-16 mx-auto mb-6 text-orange-500" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Transform How You Work?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Join Fortune 100 companies using AI to save time and drive results
          </p>

          <Card className="p-8 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Get Expert Training & Support
            </h3>
            <div className="space-y-6 mb-8">
              {/* AI-First Program */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">AI-First Training Program</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">Build AI competency fast with intensive training</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span className="text-sm text-gray-900 dark:text-gray-100">Custom AI workspace setup for your role</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span className="text-sm text-gray-900 dark:text-gray-100">Master automation across all your tools</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span className="text-sm text-gray-900 dark:text-gray-100">Drive AI adoption in your organization</span>
                  </div>
                </div>
              </div>

              {/* Ship AI Program */}
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Ship AI Ongoing Support</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">Stay ahead with weekly training and community</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0" />
                    <span className="text-sm text-gray-900 dark:text-gray-100">Weekly hands-on training with new workflows</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0" />
                    <span className="text-sm text-gray-900 dark:text-gray-100">Community of 300+ AI practitioners</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0" />
                    <span className="text-sm text-gray-900 dark:text-gray-100">Expert support for workspace optimization</span>
                  </div>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-12 py-6"
              onClick={() => {
                trackClick('Explore Training - Fortune 100 AI Workspace', {
                  location: 'bottom_cta'
                });
                window.location.href = "/ai";
              }}
            >
              Explore Training Programs
            </Button>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              Get personalized training to maximize your AI workspace
            </p>
          </Card>

          <p className="text-gray-700 dark:text-gray-300 mt-8">
            Questions? Email{" "}
            <a href="mailto:todd@technical-leaders.com" className="text-orange-600 hover:underline">
              todd@technical-leaders.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Fortune100AiWorkspace;
