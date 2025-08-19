import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Terminal, Image, Zap, FileText, ArrowRight, Star, Users, Code, Bot, Monitor, Settings, Camera, Database, Github, DollarSign, History, RefreshCw } from "lucide-react";
import SEO from "@/components/SEO";
import { trackClick, trackEvent } from "@/utils/posthog";
import { useTrackScrollDepth } from "@/hooks/use-posthog";
import { useEffect } from "react";

const AdvancedClaude = () => {
  useTrackScrollDepth('Advanced Claude Code Pro Tips Page');
  
  useEffect(() => {
    trackEvent('Advanced Claude Code Pro Tips Page View', {
      has_strategy: true,
      has_cta: true
    });
  }, []);

  const steps = [
    {
      number: 1,
      title: "CLI Mastery & Automation",
      subtitle: "Unlock the full power of command-line integration",
      description: "Master advanced CLI techniques including headless mode, chaining, and multi-instance workflows",
      details: "Learn to use Claude Code like a professional CLI tool with command line arguments, pipes, and automation.",
      cta: "Master CLI Techniques",
      icon: Terminal,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: 2,
      title: "Visual Development Workflows",
      subtitle: "Transform mockups into code with images",
      description: "Use screenshots, mockups, and visual feedback loops to accelerate your development process",
      details: 'Master image-based development including automated screenshotting and visual iteration workflows.',
      icon: Camera,
      color: "from-green-500 to-green-600"
    },
    {
      number: 3,
      title: "MCP Server Integration",
      subtitle: "Connect to databases, APIs, and external tools",
      description: "Leverage Model Context Protocol servers for database access, API integrations, and tool connections",
      details: "Set up and use MCP servers to extend Claude Code's capabilities with real-world integrations.",
      icon: Database,
      color: "from-purple-500 to-purple-600"
    },
    {
      number: 4,
      title: "CLAUDE.md Configuration",
      subtitle: "Customize your development environment",
      description: "Create powerful configuration files that enhance every interaction with Claude Code",
      details: "Master global and project-specific configurations, slash commands, and prompt optimization.",
      icon: FileText,
      color: "from-orange-500 to-orange-600"
    },
    {
      number: 5,
      title: "Context & Cost Management",
      subtitle: "Optimize performance and control expenses",
      description: "Learn advanced techniques for managing context windows, memory, and token usage efficiently",
      details: "Master compacting, clearing, and cost optimization strategies for professional Claude Code usage.",
      icon: DollarSign,
      color: "from-red-500 to-red-600"
    }
  ];

  const results = [
    { metric: "5x", label: "Faster iteration", sublabel: "With visual feedback loops" },
    { metric: "10x", label: "More integrations", sublabel: "Via MCP servers" },
    { metric: "50%", label: "Lower costs", sublabel: "With smart context management" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Advanced Claude Code Pro Tips - Master AI Development"
        description="Learn advanced Claude Code techniques from Boris Churnney, creator of Claude Code at Anthropic. Master CLI automation, visual workflows, MCP servers, and cost optimization."
        keywords={['Claude Code', 'AI development', 'CLI automation', 'MCP servers', 'visual development', 'cost optimization', 'Boris Churnney']}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/launch-bg.png"
            alt="Advanced Claude Code Pro Tips background"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full text-sm font-bold mb-6">
            <Zap className="w-4 h-4" />
            <span>Advanced Techniques</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Advanced Claude Code
            <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mt-2">
              Pro Tips
            </span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl font-semibold text-muted-foreground mb-6">
            Master Professional AI Development Workflows
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
            Learn advanced techniques from Boris Churnney, creator of Claude Code at Anthropic. Transform from basic usage to professional mastery.
          </p>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Master CLI automation, visual development workflows, MCP server integrations, advanced configuration, and cost optimization strategies used by AI development professionals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => trackClick('Start Advanced Tutorial', { source: 'hero' })}
            >
              <Zap className="mr-2 h-5 w-5" />
              Start Advanced Tutorial
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 rounded-full font-bold border-2 hover:bg-primary/5 transition-all duration-300"
              onClick={() => trackClick('View Prerequisites', { source: 'hero' })}
            >
              <CheckCircle2 className="mr-2 h-5 w-5" />
              Prerequisites
            </Button>
          </div>

          {/* Results Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {results.map((result, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm border rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">{result.metric}</div>
                <div className="text-sm font-semibold text-foreground mb-1">{result.label}</div>
                <div className="text-xs text-muted-foreground">{result.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Techniques Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-600/5"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-white">
            Professional Techniques
          </h2>
          
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={step.number} className="group">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative">
                      <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-8 mx-auto lg:mx-0`}>
                        <step.icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-4 -left-4 w-8 h-8 bg-white text-gray-900 rounded-full flex items-center justify-center font-bold text-lg">
                        {step.number}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                    <h4 className="text-xl text-orange-300 mb-6">{step.subtitle}</h4>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">{step.description}</p>
                    <p className="text-gray-400 mb-8 leading-relaxed">{step.details}</p>
                    
                    <Button
                      className={`bg-gradient-to-r ${step.color} hover:opacity-90 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105`}
                      onClick={() => trackClick(`Learn ${step.title}`, { step: step.number })}
                    >
                      {step.cta || `Master ${step.title}`}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {step.number === 1 && (
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                        <div className="space-y-6">
                          {/* CLI Commands */}
                          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
                            <h4 className="font-bold text-gray-900 dark:text-white mb-3">⚡ Advanced CLI Usage</h4>
                            <div className="space-y-3">
                              <div className="bg-gray-900 dark:bg-gray-100 rounded p-3">
                                <p className="text-blue-300 dark:text-blue-800 text-sm font-semibold mb-1">Headless Mode:</p>
                                <code className="font-mono text-xs text-blue-300 dark:text-blue-800 font-semibold">claude -p "Build a React component for user profiles"</code>
                              </div>
                              <div className="bg-gray-900 dark:bg-gray-100 rounded p-3">
                                <p className="text-green-300 dark:text-green-800 text-sm font-semibold mb-1">Chain with Other Tools:</p>
                                <code className="font-mono text-xs text-green-300 dark:text-green-800 font-semibold">git diff | claude "Explain these changes"</code>
                              </div>
                              <div className="bg-gray-900 dark:bg-gray-100 rounded p-3">
                                <p className="text-purple-300 dark:text-purple-800 text-sm font-semibold mb-1">Multiple Instances:</p>
                                <code className="font-mono text-xs text-purple-300 dark:text-purple-800 font-semibold">claude --task "Review PR" & claude --task "Update docs"</code>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {step.number === 2 && (
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                        <div className="space-y-6">
                          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-green-200 dark:border-green-700">
                            <h4 className="font-bold text-gray-900 dark:text-white mb-3">📸 Visual Development Flow</h4>
                            <div className="space-y-4">
                              <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                                <div>
                                  <p className="font-semibold text-sm">Screenshot Mockup</p>
                                  <p className="text-xs text-gray-600 dark:text-gray-400">⌘⇧⌃4 → Ctrl+V to paste</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                                <div>
                                  <p className="font-semibold text-sm">Generate Code</p>
                                  <p className="text-xs text-gray-600 dark:text-gray-400">"Build this interface"</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                                <div>
                                  <p className="font-semibold text-sm">Visual Feedback</p>
                                  <p className="text-xs text-gray-600 dark:text-gray-400">Screenshot result → iterate</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {step.number === 3 && (
                      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
                        <div className="space-y-6">
                          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
                            <h4 className="font-bold text-gray-900 dark:text-white mb-3">🔌 Popular MCP Servers</h4>
                            <div className="grid gap-3">
                              <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                <Database className="w-5 h-5 text-purple-600" />
                                <div>
                                  <p className="font-semibold text-sm">Postgres Server</p>
                                  <p className="text-xs text-gray-600 dark:text-gray-400">Direct database access</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                <Github className="w-5 h-5 text-blue-600" />
                                <div>
                                  <p className="font-semibold text-sm">GitHub Server</p>
                                  <p className="text-xs text-gray-600 dark:text-gray-400">Repository management</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                <Monitor className="w-5 h-5 text-green-600" />
                                <div>
                                  <p className="font-semibold text-sm">Puppeteer Server</p>
                                  <p className="text-xs text-gray-600 dark:text-gray-400">Automated screenshots</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {step.number === 4 && (
                      <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
                        <div className="space-y-6">
                          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-orange-200 dark:border-orange-700">
                            <h4 className="font-bold text-gray-900 dark:text-white mb-3">⚙️ Configuration Hierarchy</h4>
                            <div className="space-y-3">
                              <div className="bg-gray-900 dark:bg-gray-100 rounded p-3">
                                <p className="text-orange-300 dark:text-orange-800 text-sm font-semibold mb-1">Global Config:</p>
                                <code className="font-mono text-xs text-orange-300 dark:text-orange-800 font-semibold">~/.claude/CLAUDE.md</code>
                              </div>
                              <div className="bg-gray-900 dark:bg-gray-100 rounded p-3">
                                <p className="text-blue-300 dark:text-blue-800 text-sm font-semibold mb-1">Project Config:</p>
                                <code className="font-mono text-xs text-blue-300 dark:text-blue-800 font-semibold">./CLAUDE.md</code>
                              </div>
                              <div className="bg-gray-900 dark:bg-gray-100 rounded p-3">
                                <p className="text-green-300 dark:text-green-800 text-sm font-semibold mb-1">Initialize:</p>
                                <code className="font-mono text-xs text-green-300 dark:text-green-800 font-semibold">/init</code>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {step.number === 5 && (
                      <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
                        <div className="space-y-6">
                          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-red-200 dark:border-red-700">
                            <h4 className="font-bold text-gray-900 dark:text-white mb-3">💰 Cost Optimization</h4>
                            <div className="space-y-4">
                              <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                <span className="text-sm font-medium">Claude Max Plan</span>
                                <span className="text-lg font-bold text-red-600">$100-200/mo</span>
                              </div>
                              <div className="text-xs text-gray-600 dark:text-gray-400">
                                <p className="mb-2">⚡ Pro Tips:</p>
                                <ul className="space-y-1">
                                  <li>• Watch auto-compact indicator</li>
                                  <li>• Compact at natural breakpoints</li>
                                  <li>• Clear context vs compacting</li>
                                  <li>• Use external memory (issues, scratchpads)</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Tips Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-6 py-3 rounded-full font-bold mb-6 shadow-md">
              <Star className="w-5 h-5" />
              <span>Expert Tips</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Professional Workflow Tips
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced techniques from Boris Churnney and experienced Claude Code users
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                  <Terminal className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">UI & Navigation</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-blue-400 text-sm">⭐ Use Tab Completion</p>
                  <p className="text-sm text-gray-300 mt-1">
                    Press Tab to autocomplete file and directory names. Claude works better when you're specific about paths.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-green-400 text-sm">⚡ Hit Escape Early</p>
                  <p className="text-sm text-gray-300 mt-1">
                    Don't hesitate to interrupt Claude with Escape when it goes off track. Ask it to undo work from the previous turn.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="font-semibold text-purple-400 text-sm">🎯 Be Specific</p>
                  <p className="text-sm text-gray-300 mt-1">
                    The more specific you are about files, directories, and requirements, the better results you'll get.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                  <History className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Version Control Best Practices</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="font-semibold text-orange-400 text-sm">🔄 Commit Frequently</p>
                  <p className="text-sm text-gray-300 mt-1">
                    Ask Claude Code to commit after every major change. It writes excellent commit messages.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold text-red-400 text-sm">⏪ Revert More Often</p>
                  <p className="text-sm text-gray-300 mt-1">
                    When things break, clear conversation history, revert to previous commit, and try again with more specific instructions.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-blue-400 text-sm">🛠️ Install GitHub CLI</p>
                  <p className="text-sm text-gray-300 mt-1">
                    Claude Code uses GitHub CLI for all GitHub interactions. It can file PRs and do code reviews automatically.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Configuration & Slash Commands */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-6 py-3 rounded-full font-bold mb-6 shadow-md">
              <Settings className="w-5 h-5" />
              <span>Configuration Mastery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              CLAUDE.md & Slash Commands
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master configuration files and custom commands for professional workflows
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">CLAUDE.md Configuration</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-900 dark:bg-gray-100 rounded-lg p-4">
                  <p className="font-semibold text-orange-300 dark:text-orange-800 mb-2">Example CLAUDE.md:</p>
                  <pre className="text-xs font-mono text-gray-300 dark:text-gray-700 whitespace-pre-wrap">
{`# Project: React Dashboard

## Tech Stack
- React 18 + TypeScript
- Tailwind CSS
- Vite build tool

## Commands
- Dev: npm run dev
- Build: npm run build
- Test: npm test

## Style Guide
- Use functional components
- Prefer const assertions
- Always type props interfaces`}
                  </pre>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium mb-2">💡 Best Practices:</p>
                  <ul className="space-y-1 text-xs">
                    <li>• Use /init to generate initial configuration</li>
                    <li>• Add instructions with # symbol during coding</li>
                    <li>• Refactor regularly to avoid bloat</li>
                    <li>• Use Anthropic's prompt optimizer</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Slash Commands</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <p className="font-semibold mb-2">Example Commands:</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <code className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded font-mono text-xs">/review</code>
                      <span className="text-muted-foreground">Code review current changes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <code className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded font-mono text-xs">/refactor</code>
                      <span className="text-muted-foreground">Refactor selected code</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <code className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded font-mono text-xs">/test</code>
                      <span className="text-muted-foreground">Generate tests for component</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium mb-2">⚡ Command Features:</p>
                  <ul className="space-y-1 text-xs">
                    <li>• Store in ~/.claude/commands folder</li>
                    <li>• Just prompt templates with variables</li>
                    <li>• Support command line arguments</li>
                    <li>• Can be project-specific</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Troubleshooting Guide */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-6 py-3 rounded-full font-bold mb-6 shadow-md">
              <Monitor className="w-5 h-5" />
              <span>Advanced Troubleshooting</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Professional Problem Solving
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Handle common advanced scenarios and optimize your workflow
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="font-semibold text-orange-700 dark:text-orange-400 text-sm">⚠️ "Context window full"</p>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <p className="font-medium mb-1">Advanced Solutions:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Monitor auto-compact indicator constantly</li>
                      <li>• Compact proactively at 35-40% usage</li>
                      <li>• Clear conversation vs compacting strategically</li>
                      <li>• Use GitHub issues for external memory</li>
                      <li>• Implement scratchpad planning workflow</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="font-semibold text-purple-700 dark:text-purple-400 text-sm">🔧 "MCP server not responding"</p>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <p className="font-medium mb-1">Debugging Steps:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Check MCP server configuration in settings</li>
                      <li>• Verify server endpoints and authentication</li>
                      <li>• Restart Claude Code with fresh MCP connections</li>
                      <li>• Test MCP server independently</li>
                      <li>• Check network connectivity and permissions</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold text-red-700 dark:text-red-400 text-sm">💸 "Unexpected high costs"</p>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <p className="font-medium mb-1">Cost Management:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Enable OpenTelemetry for detailed tracking</li>
                      <li>• Set up DataDog dashboards for team usage</li>
                      <li>• Upgrade to Claude Max bundled plans</li>
                      <li>• Use context management best practices</li>
                      <li>• Monitor token usage per session</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-green-700 dark:text-green-400 text-sm">✅ Advanced Pro Workflow</p>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <ul className="space-y-1 text-xs">
                      <li>• Use visual feedback loops with screenshots</li>
                      <li>• Implement automated testing with MCP servers</li>
                      <li>• Create project-specific slash commands</li>
                      <li>• Set up multiple Claude instances for parallel work</li>
                      <li>• Use headless mode for automation scripts</li>
                      <li>• Integrate with CI/CD pipelines</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdvancedClaude;