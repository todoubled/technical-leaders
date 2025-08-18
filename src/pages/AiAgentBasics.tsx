import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Terminal, GitBranch, MessageSquare, ArrowRight, Zap, Star, Users, Code, Bot, Monitor } from "lucide-react";
import SEO from "@/components/SEO";
import { trackClick, trackEvent } from "@/utils/posthog";
import { useTrackScrollDepth } from "@/hooks/use-posthog";
import { useEffect } from "react";

const AiAgentBasics = () => {
  useTrackScrollDepth('AI Agent Basics Page');
  
  useEffect(() => {
    trackEvent('AI Agent Basics Page View', {
      has_strategy: true,
      has_cta: true
    });
  }, []);

  const steps = [
    {
      number: 1,
      title: "Terminal & Communication Hub",
      subtitle: "Master your development interface",
      description: "Build your command-line skills and connect with your AI development team",
      details: "Learn to navigate, create, and manage projects through the terminal - your direct line to the computer.",
      cta: "Master Terminal Commands",
      icon: Terminal,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: 2,
      title: "Git & Project Management",
      subtitle: "Track every change like a pro",
      description: "Use Git to manage your code history and collaborate with AI agents seamlessly",
      details: 'Master version control to work effectively with Claude Code and other AI development tools.',
      icon: GitBranch,
      color: "from-purple-500 to-purple-600"
    },
    {
      number: 3,
      title: "AI Team Collaboration",
      subtitle: "Work with Claude Code daily",
      description: "Integrate AI agents into your development workflow for maximum productivity",
      details: "Learn to delegate, collaborate, and lead a team where AI handles implementation while you focus on strategy.",
      icon: Bot,
      color: "from-green-500 to-green-600"
    }
  ];

  const results = [
    { metric: "15min", label: "Daily practice", sublabel: "Terminal & Git skills" },
    { metric: "10x", label: "Faster development", sublabel: "With AI agents" },
    { metric: "24/7", label: "Available teammate", sublabel: "Claude Code support" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Agent Basics - Build Your Development Team"
        description="Learn terminal, Git, and AI collaboration fundamentals. Transform from coding alone to leading a team where AI agents accelerate your development."
        keywords={['AI development', 'terminal basics', 'git fundamentals', 'Claude Code', 'AI programming team']}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/launch-bg.png"
            alt="AI Agent Basics background"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full text-sm font-bold mb-6">
            <Bot className="w-4 h-4" />
            <span>Build Your AI Development Team</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Terminal, Git, and Your
            <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mt-2">
              AI Development Colleagues
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
            Stop coding alone. Learn the <span className="font-bold text-white">fundamentals</span> to build a modern development team where you lead and AI agents accelerate your work.
          </p>
          
          <p className="text-2xl font-semibold mb-8 max-w-2xl mx-auto">
            Master the basics that transform you from solo coder to team leader.
          </p>

          <div className="bg-background/50 backdrop-blur border border-white/10 rounded-lg p-6 max-w-2xl mx-auto mb-8 shadow-xl">
            <p className="text-lg font-bold mb-2">
              🚀 From commands to collaboration in one guide
            </p>
            <p className="text-base text-muted-foreground">
              The foundation every tech leader needs to work effectively with AI development tools
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-8 py-6"
              onClick={() => {
                trackClick('Start Learning - AI Agent Basics', {
                  location: 'hero_section'
                });
                const element = document.getElementById('fundamentals-section');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Building Your Team
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
      <section id="fundamentals-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-6 py-3 rounded-full font-bold mb-6 shadow-md">
              <Code className="w-5 h-5" />
              <span>Modern Development Fundamentals</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Your Development Team Foundation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Master the core skills that transform you from coding alone to leading a team of AI-powered development colleagues.
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
                                  <Terminal className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                  <p className="font-bold text-gray-900 dark:text-white text-xl">
                                    Your Command Center
                                  </p>
                                  <p className="text-gray-600 dark:text-gray-400">
                                    Direct communication with your development environment
                                  </p>
                                </div>
                              </div>

                              {/* Getting Started */}
                              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-3">🚀 Opening Your Terminal</h4>
                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                  <div>
                                    <p className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Mac Users:</p>
                                    <div className="space-y-1 text-gray-600 dark:text-gray-400">
                                      <p>1. Press <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">Command + Space</code></p>
                                      <p>2. Type "Terminal"</p>
                                      <p>3. Press Enter</p>
                                      <p>You'll see: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded font-mono text-xs">yourname@YourComputer ~ %</code></p>
                                    </div>
                                  </div>
                                  <div>
                                    <p className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">Windows Users:</p>
                                    <div className="space-y-1 text-gray-600 dark:text-gray-400">
                                      <p>1. Press <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">Windows Key</code></p>
                                      <p>2. Type "PowerShell"</p>
                                      <p>3. Right-click → "Run as Administrator"</p>
                                      <p>You'll see: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded font-mono text-xs">C:\Users\YourName></code></p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Essential Commands */}
                              <div className="space-y-4">
                                <h4 className="font-bold text-gray-900 dark:text-white">Essential Navigation Commands</h4>
                                
                                {/* Command 1: pwd */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
                                  <div className="flex items-center gap-3 mb-2">
                                    <code className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded font-mono text-sm font-bold">pwd</code>
                                    <span className="text-gray-900 dark:text-white font-semibold">"Where's our team working?"</span>
                                  </div>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Shows your current location in the file system</p>
                                  <div className="bg-gray-50 dark:bg-gray-900 rounded p-2 text-xs font-mono">
                                    <span className="text-gray-500">Mac:</span> <span className="text-green-600">/Users/yourname</span><br/>
                                    <span className="text-gray-500">Windows:</span> <span className="text-green-600">C:\Users\YourName</span>
                                  </div>
                                </div>

                                {/* Command 2: ls/dir */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-cyan-200 dark:border-cyan-700">
                                  <div className="flex items-center gap-3 mb-2">
                                    <code className="bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-300 px-2 py-1 rounded font-mono text-sm font-bold">ls</code>
                                    <span className="text-gray-500 dark:text-gray-400 text-sm">or</span>
                                    <code className="bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-300 px-2 py-1 rounded font-mono text-sm font-bold">dir</code>
                                    <span className="text-gray-900 dark:text-white font-semibold">"What projects are here?"</span>
                                  </div>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Lists all files and folders in your current location</p>
                                  <div className="bg-gray-50 dark:bg-gray-900 rounded p-2 text-xs">
                                    <p className="text-blue-600 dark:text-blue-400 mb-1">💡 Pro tip: Use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">ls -la</code> on Mac to see hidden files</p>
                                  </div>
                                </div>

                                {/* Command 3: cd */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-green-200 dark:border-green-700">
                                  <div className="flex items-center gap-3 mb-2">
                                    <code className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-2 py-1 rounded font-mono text-sm font-bold">cd</code>
                                    <span className="text-gray-900 dark:text-white font-semibold">"Let's move to a different area"</span>
                                  </div>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Navigate between folders like rooms in an office</p>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-900 rounded p-2">
                                      <code className="font-mono text-xs">cd Documents</code>
                                      <span className="text-gray-600 dark:text-gray-400">Enter the Documents folder</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-900 rounded p-2">
                                      <code className="font-mono text-xs">cd ..</code>
                                      <span className="text-gray-600 dark:text-gray-400">Go back one level</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-900 rounded p-2">
                                      <code className="font-mono text-xs">cd ~</code>
                                      <span className="text-gray-600 dark:text-gray-400">Return to home base</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-900 rounded p-2">
                                      <code className="font-mono text-xs">cd "Q4 Reports"</code>
                                      <span className="text-gray-600 dark:text-gray-400">Use quotes for spaces</span>
                                    </div>
                                  </div>
                                </div>

                                {/* Command 4: mkdir */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
                                  <div className="flex items-center gap-3 mb-2">
                                    <code className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-2 py-1 rounded font-mono text-sm font-bold">mkdir</code>
                                    <span className="text-gray-900 dark:text-white font-semibold">"Create a new project space"</span>
                                  </div>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Creates new folders for organizing your work</p>
                                  <div className="bg-gray-50 dark:bg-gray-900 rounded p-2">
                                    <code className="font-mono text-xs text-purple-600 dark:text-purple-400">mkdir awesome-new-project</code>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">💡 Use hyphens instead of spaces in project names</p>
                                  </div>
                                </div>

                                {/* Command 5: touch/echo */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-orange-200 dark:border-orange-700">
                                  <div className="flex items-center gap-3 mb-2">
                                    <code className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300 px-2 py-1 rounded font-mono text-sm font-bold">touch</code>
                                    <span className="text-gray-500 dark:text-gray-400 text-sm">or</span>
                                    <code className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300 px-2 py-1 rounded font-mono text-sm font-bold">echo</code>
                                    <span className="text-gray-900 dark:text-white font-semibold">"Create project files"</span>
                                  </div>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Creates new files for your projects</p>
                                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                                    <div className="bg-gray-50 dark:bg-gray-900 rounded p-2">
                                      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">Mac:</p>
                                      <code className="font-mono text-xs">touch README.md</code>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-gray-900 rounded p-2">
                                      <p className="text-orange-600 dark:text-orange-400 font-semibold mb-1">Windows:</p>
                                      <code className="font-mono text-xs">echo. > README.md</code>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Hands-on Exercise */}
                              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg p-4 border border-blue-300 dark:border-blue-600">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-3">🎯 Your First Team Exercise</h4>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Practice coordinating your development team:</p>
                                <div className="space-y-2 text-sm">
                                  <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                                    <div>
                                      <p className="font-semibold text-gray-900 dark:text-white">Check your location:</p>
                                      <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-mono text-xs">pwd</code>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                                    <div>
                                      <p className="font-semibold text-gray-900 dark:text-white">Go to home base:</p>
                                      <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-mono text-xs">cd ~</code>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                                    <div>
                                      <p className="font-semibold text-gray-900 dark:text-white">Create project workspace:</p>
                                      <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-mono text-xs">mkdir my-team-project</code>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</div>
                                    <div>
                                      <p className="font-semibold text-gray-900 dark:text-white">Enter the workspace:</p>
                                      <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-mono text-xs">cd my-team-project</code>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">5</div>
                                    <div>
                                      <p className="font-semibold text-gray-900 dark:text-white">Create project file:</p>
                                      <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-mono text-xs">touch README.md</code>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</div>
                                    <div>
                                      <p className="font-semibold text-gray-900 dark:text-white">Verify your work:</p>
                                      <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-mono text-xs">ls</code>
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-3 p-2 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
                                  <p className="text-sm text-green-800 dark:text-green-300 font-semibold">🎉 Congratulations! You just managed your first project workspace like a pro team leader!</p>
                                </div>
                              </div>

                              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                                <p className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-2">
                                  💡 Think of terminal as your team's Slack channel
                                </p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                  Instead of clicking through menus, you give direct instructions through text. It's how professional developers communicate with their machines - and soon it'll feel as natural as sending a text message.
                                </p>
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
                                  <GitBranch className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                  <p className="font-bold text-gray-900 dark:text-white text-xl">
                                    Your Project Management System
                                  </p>
                                  <p className="text-gray-600 dark:text-gray-400">
                                    Track every change and collaborate seamlessly
                                  </p>
                                </div>
                              </div>

                              {/* Git Setup */}
                              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-3">🔧 Setting Up Your Project Manager</h4>
                                <div className="space-y-4">
                                  {/* Installation */}
                                  <div>
                                    <p className="font-semibold text-purple-600 dark:text-purple-400 mb-2">1. Install Git</p>
                                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                                      <div className="bg-gray-50 dark:bg-gray-900 rounded p-3">
                                        <p className="font-semibold mb-2 text-blue-600 dark:text-blue-400">Mac:</p>
                                        <code className="font-mono text-xs block mb-2">git --version</code>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">If not installed, macOS will prompt you to install it</p>
                                      </div>
                                      <div className="bg-gray-50 dark:bg-gray-900 rounded p-3">
                                        <p className="font-semibold mb-2 text-orange-600 dark:text-orange-400">Windows:</p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Download from git-scm.com</p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">Keep all default settings</p>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {/* Configuration */}
                                  <div>
                                    <p className="font-semibold text-purple-600 dark:text-purple-400 mb-2">2. Introduce Yourself to Your Team</p>
                                    <div className="space-y-2">
                                      <div className="bg-gray-50 dark:bg-gray-900 rounded p-2">
                                        <code className="font-mono text-xs">git config --global user.name "Your Name"</code>
                                      </div>
                                      <div className="bg-gray-50 dark:bg-gray-900 rounded p-2">
                                        <code className="font-mono text-xs">git config --global user.email "you@example.com"</code>
                                      </div>
                                      <p className="text-xs text-gray-600 dark:text-gray-400">💡 Every change you make is like signing a document - Git needs to know who's making decisions</p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Git Workflow Areas */}
                              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-indigo-200 dark:border-indigo-700">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-3">📋 Understanding Your Team's Workflow</h4>
                                <div className="grid md:grid-cols-3 gap-4 text-sm">
                                  <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold">1</div>
                                    <p className="font-semibold text-blue-700 dark:text-blue-300">Working Directory</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Draft documents on your desk</p>
                                  </div>
                                  <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
                                    <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold">2</div>
                                    <p className="font-semibold text-yellow-700 dark:text-yellow-300">Staging Area</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Documents ready for review</p>
                                  </div>
                                  <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
                                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold">3</div>
                                    <p className="font-semibold text-green-700 dark:text-green-300">Repository</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Filed and approved documents</p>
                                  </div>
                                </div>
                              </div>

                              {/* Essential Git Commands */}
                              <div className="space-y-4">
                                <h4 className="font-bold text-gray-900 dark:text-white">Essential Team Operations</h4>
                                
                                {/* Import Project */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-green-200 dark:border-green-700">
                                  <div className="flex items-center gap-3 mb-2">
                                    <code className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-2 py-1 rounded font-mono text-sm font-bold">git clone</code>
                                    <span className="text-gray-900 dark:text-white font-semibold">Import a Project</span>
                                  </div>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Get an existing project from GitHub to your local workspace</p>
                                  <div className="bg-gray-50 dark:bg-gray-900 rounded p-2 space-y-1">
                                    <code className="font-mono text-xs block">git clone https://github.com/company/project-name.git</code>
                                    <code className="font-mono text-xs block">cd project-name</code>
                                  </div>
                                </div>

                                {/* Check Status */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
                                  <div className="flex items-center gap-3 mb-2">
                                    <code className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded font-mono text-sm font-bold">git status</code>
                                    <span className="text-gray-900 dark:text-white font-semibold">Check Project Status</span>
                                  </div>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">See what your team has changed</p>
                                  <div className="bg-gray-50 dark:bg-gray-900 rounded p-2 text-xs">
                                    <p><span className="text-red-600">Red items:</span> Changes not yet reviewed</p>
                                    <p><span className="text-green-600">Green items:</span> Changes approved and ready to record</p>
                                    <p><span className="text-gray-600">"Nothing to commit":</span> All work is up to date</p>
                                  </div>
                                </div>

                                {/* Stage Changes */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-yellow-200 dark:border-yellow-700">
                                  <div className="flex items-center gap-3 mb-2">
                                    <code className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300 px-2 py-1 rounded font-mono text-sm font-bold">git add</code>
                                    <span className="text-gray-900 dark:text-white font-semibold">Submit Changes for Review</span>
                                  </div>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Move changes to the review stage</p>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-900 rounded p-2">
                                      <code className="font-mono text-xs">git add filename.js</code>
                                      <span className="text-gray-600 dark:text-gray-400">Review specific file</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-900 rounded p-2">
                                      <code className="font-mono text-xs">git add .</code>
                                      <span className="text-gray-600 dark:text-gray-400">Review all changes</span>
                                    </div>
                                  </div>
                                </div>

                                {/* Commit Changes */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
                                  <div className="flex items-center gap-3 mb-2">
                                    <code className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-2 py-1 rounded font-mono text-sm font-bold">git commit</code>
                                    <span className="text-gray-900 dark:text-white font-semibold">Record Team Decisions</span>
                                  </div>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Save your reviewed changes with a clear description</p>
                                  <div className="bg-gray-50 dark:bg-gray-900 rounded p-2 mb-3">
                                    <code className="font-mono text-xs">git commit -m "Add customer login feature"</code>
                                  </div>
                                  <div className="grid md:grid-cols-2 gap-3 text-xs">
                                    <div>
                                      <p className="font-semibold text-green-600 dark:text-green-400 mb-1">✅ Good project notes:</p>
                                      <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                                        <li>"Fix navigation menu on mobile"</li>
                                        <li>"Add quarterly report generation"</li>
                                        <li>"Update security protocols"</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <p className="font-semibold text-red-600 dark:text-red-400 mb-1">❌ Poor project notes:</p>
                                      <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                                        <li>"Fixed stuff"</li>
                                        <li>"Changes"</li>
                                        <li>"asdf"</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>

                                {/* Push/Pull */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-indigo-200 dark:border-indigo-700">
                                  <div className="flex items-center gap-3 mb-3">
                                    <code className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 px-2 py-1 rounded font-mono text-sm font-bold">git push</code>
                                    <span className="text-gray-500 dark:text-gray-400">&</span>
                                    <code className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 px-2 py-1 rounded font-mono text-sm font-bold">git pull</code>
                                    <span className="text-gray-900 dark:text-white font-semibold">Team Synchronization</span>
                                  </div>
                                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                                    <div className="bg-gray-50 dark:bg-gray-900 rounded p-2">
                                      <p className="font-semibold text-indigo-600 dark:text-indigo-400 mb-1">Share Work:</p>
                                      <code className="font-mono text-xs block mb-1">git push</code>
                                      <p className="text-xs text-gray-600 dark:text-gray-400">Upload your team's work to the cloud</p>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-gray-900 rounded p-2">
                                      <p className="font-semibold text-indigo-600 dark:text-indigo-400 mb-1">Get Updates:</p>
                                      <code className="font-mono text-xs block mb-1">git pull</code>
                                      <p className="text-xs text-gray-600 dark:text-gray-400">Download latest changes from team</p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* GitHub Setup */}
                              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-3">🌐 Setting Up Your Team's Headquarters (GitHub)</h4>
                                <div className="space-y-3 text-sm">
                                  <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                                    <div>
                                      <p className="font-semibold text-gray-900 dark:text-white">Create Account:</p>
                                      <p className="text-gray-600 dark:text-gray-400">Go to github.com and sign up (use same email as Git config)</p>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                                    <div>
                                      <p className="font-semibold text-gray-900 dark:text-white">Security Setup:</p>
                                      <p className="text-gray-600 dark:text-gray-400">Generate Personal Access Token (Settings → Developer settings → Tokens)</p>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                                    <div>
                                      <p className="font-semibold text-gray-900 dark:text-white">Create Repository:</p>
                                      <p className="text-gray-600 dark:text-gray-400">Click "+" → "New repository" → Add README file</p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Complete Workflow Exercise */}
                              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg p-4 border border-purple-300 dark:border-purple-600">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-3">🎯 Your First Project Cycle</h4>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Practice a complete team workflow:</p>
                                <div className="space-y-2 text-sm">
                                  <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                                    <div>
                                      <p className="font-semibold text-gray-900 dark:text-white">Make a change to any file in your project</p>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                                    <div>
                                      <p className="font-semibold text-gray-900 dark:text-white">Check what changed:</p>
                                      <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-mono text-xs">git status</code>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                                    <div>
                                      <p className="font-semibold text-gray-900 dark:text-white">Submit for review:</p>
                                      <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-mono text-xs">git add .</code>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</div>
                                    <div>
                                      <p className="font-semibold text-gray-900 dark:text-white">Record the decision:</p>
                                      <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-mono text-xs">git commit -m "Implement new feature"</code>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">5</div>
                                    <div>
                                      <p className="font-semibold text-gray-900 dark:text-white">Share with team:</p>
                                      <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-mono text-xs">git push</code>
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-3 p-2 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
                                  <p className="text-sm text-green-800 dark:text-green-300 font-semibold">🎉 Congratulations! Your team just completed its first project cycle!</p>
                                </div>
                              </div>

                              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                                <p className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-2">
                                  💡 Git is like having a project manager who never forgets
                                </p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                  It tracks every decision, every change, and can instantly recall any previous version. No more "final_final_v2_ACTUALLY_final.doc" chaos! Your entire development history is preserved and searchable.
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {step.number === 3 && (
                          <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                            <div className="space-y-6">
                              {/* Header */}
                              <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg">
                                  <Bot className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                  <p className="font-bold text-gray-900 dark:text-white text-xl">
                                    Your AI Development Team
                                  </p>
                                  <p className="text-gray-600 dark:text-gray-400">
                                    Lead, delegate, and accelerate with AI colleagues
                                  </p>
                                </div>
                              </div>

                              {/* Hiring Claude Code */}
                              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-green-200 dark:border-green-700">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-3">🤖 Hiring Your AI Developer: Claude Code</h4>
                                <div className="space-y-4">
                                  <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Claude Code is like having a senior developer on your team who's available 24/7, never gets tired, and has experience with virtually every programming language and framework.
                                  </p>
                                  
                                  <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-3">
                                      <h5 className="font-semibold text-green-600 dark:text-green-400">✅ Your AI Colleague Can:</h5>
                                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                        <li>• Write code alongside you</li>
                                        <li>• Explain complex concepts</li>
                                        <li>• Debug issues instantly</li>
                                        <li>• Suggest improvements</li>
                                        <li>• Handle repetitive tasks</li>
                                        <li>• Review your code quality</li>
                                      </ul>
                                    </div>
                                    <div className="space-y-3">
                                      <h5 className="font-semibold text-blue-600 dark:text-blue-400">🎯 Installation Steps:</h5>
                                      <div className="text-sm space-y-2">
                                        <div className="flex items-start gap-3">
                                          <div className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                                          <p className="text-gray-600 dark:text-gray-400">Visit claude.ai/code</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                          <div className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                                          <p className="text-gray-600 dark:text-gray-400">Follow installation for your OS</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                          <div className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</div>
                                          <div>
                                            <p className="text-gray-600 dark:text-gray-400">Verify installation:</p>
                                            <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-mono text-xs">claude --version</code>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* AI Collaboration Workflows */}
                              <div className="space-y-4">
                                <h4 className="font-bold text-gray-900 dark:text-white">AI Collaboration Workflows</h4>
                                
                                {/* Code Review Pattern */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
                                  <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                                      <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <span className="text-gray-900 dark:text-white font-semibold text-lg">Code Review Partnership</span>
                                  </div>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Get instant feedback and improvements on your code</p>
                                  
                                  <div className="bg-gray-50 dark:bg-gray-900 rounded p-3 space-y-2">
                                    <h6 className="font-semibold text-blue-600 dark:text-blue-400 text-sm">Example Commands:</h6>
                                    <div className="space-y-1 text-xs font-mono">
                                      <div className="bg-white dark:bg-gray-800 p-2 rounded border">
                                        <span className="text-green-600">claude</span> <span className="text-gray-600">"Review my recent changes and suggest improvements"</span>
                                      </div>
                                      <div className="bg-white dark:bg-gray-800 p-2 rounded border">
                                        <span className="text-green-600">claude</span> <span className="text-gray-600">"Is this code following best practices?"</span>
                                      </div>
                                      <div className="bg-white dark:bg-gray-800 p-2 rounded border">
                                        <span className="text-green-600">claude</span> <span className="text-gray-600">"Help me optimize this function for performance"</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Pair Programming Pattern */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-green-200 dark:border-green-700">
                                  <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                                      <Code className="w-5 h-5 text-green-600 dark:text-green-400" />
                                    </div>
                                    <span className="text-gray-900 dark:text-white font-semibold text-lg">Pair Programming</span>
                                  </div>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Write code together in real-time collaboration</p>
                                  
                                  <div className="bg-gray-50 dark:bg-gray-900 rounded p-3 space-y-2">
                                    <h6 className="font-semibold text-green-600 dark:text-green-400 text-sm">Collaboration Examples:</h6>
                                    <div className="space-y-1 text-xs font-mono">
                                      <div className="bg-white dark:bg-gray-800 p-2 rounded border">
                                        <span className="text-green-600">claude</span> <span className="text-gray-600">"Help me implement a user authentication system"</span>
                                      </div>
                                      <div className="bg-white dark:bg-gray-800 p-2 rounded border">
                                        <span className="text-green-600">claude</span> <span className="text-gray-600">"Write unit tests for this component"</span>
                                      </div>
                                      <div className="bg-white dark:bg-gray-800 p-2 rounded border">
                                        <span className="text-green-600">claude</span> <span className="text-gray-600">"Refactor this code to be more maintainable"</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Debugging Pattern */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-orange-200 dark:border-orange-700">
                                  <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
                                      <Monitor className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                                    </div>
                                    <span className="text-gray-900 dark:text-white font-semibold text-lg">Debugging Assistant</span>
                                  </div>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Get help understanding and fixing errors</p>
                                  
                                  <div className="bg-gray-50 dark:bg-gray-900 rounded p-3 space-y-2">
                                    <h6 className="font-semibold text-orange-600 dark:text-orange-400 text-sm">Debugging Support:</h6>
                                    <div className="space-y-1 text-xs font-mono">
                                      <div className="bg-white dark:bg-gray-800 p-2 rounded border">
                                        <span className="text-green-600">claude</span> <span className="text-gray-600">"Can you explain what this error means?"</span>
                                      </div>
                                      <div className="bg-white dark:bg-gray-800 p-2 rounded border">
                                        <span className="text-green-600">claude</span> <span className="text-gray-600">"Help me debug this failing test"</span>
                                      </div>
                                      <div className="bg-white dark:bg-gray-800 p-2 rounded border">
                                        <span className="text-green-600">claude</span> <span className="text-gray-600">"Why isn't this function working as expected?"</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Git Integration */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
                                  <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                                      <GitBranch className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <span className="text-gray-900 dark:text-white font-semibold text-lg">Git & Project Management</span>
                                  </div>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">AI assistance with version control and project organization</p>
                                  
                                  <div className="bg-gray-50 dark:bg-gray-900 rounded p-3 space-y-2">
                                    <h6 className="font-semibold text-purple-600 dark:text-purple-400 text-sm">Git Collaboration:</h6>
                                    <div className="space-y-1 text-xs font-mono">
                                      <div className="bg-white dark:bg-gray-800 p-2 rounded border">
                                        <span className="text-green-600">claude</span> <span className="text-gray-600">"What's a good commit message for these changes?"</span>
                                      </div>
                                      <div className="bg-white dark:bg-gray-800 p-2 rounded border">
                                        <span className="text-green-600">claude</span> <span className="text-gray-600">"Help me write a pull request description"</span>
                                      </div>
                                      <div className="bg-white dark:bg-gray-800 p-2 rounded border">
                                        <span className="text-green-600">claude</span> <span className="text-gray-600">"Explain this Git error message"</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Node.js Integration */}
                              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-yellow-200 dark:border-yellow-700">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-3">⚡ Running Projects with Your AI Team</h4>
                                <div className="space-y-4">
                                  <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Node.js is your team's project infrastructure - it allows JavaScript projects to run on your computer. Combined with Claude Code, you can quickly set up and manage any project.
                                  </p>
                                  
                                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                                    <div className="space-y-3">
                                      <h5 className="font-semibold text-yellow-600 dark:text-yellow-400">🔧 Setup Process:</h5>
                                      <div className="space-y-2">
                                        <div className="flex items-start gap-3">
                                          <div className="w-5 h-5 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                                          <p className="text-gray-600 dark:text-gray-400">Download Node.js LTS from nodejs.org</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                          <div className="w-5 h-5 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                                          <p className="text-gray-600 dark:text-gray-400">Run installer, restart terminal</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                          <div className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</div>
                                          <div>
                                            <p className="text-gray-600 dark:text-gray-400">Verify:</p>
                                            <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-mono text-xs">node --version</code>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    
                                    <div className="space-y-3">
                                      <h5 className="font-semibold text-blue-600 dark:text-blue-400">🏃 Common Commands:</h5>
                                      <div className="space-y-2 text-xs">
                                        <div className="bg-gray-50 dark:bg-gray-900 rounded p-2">
                                          <code className="font-mono">npm install</code>
                                          <p className="text-gray-600 dark:text-gray-400 mt-1">Gather project resources</p>
                                        </div>
                                        <div className="bg-gray-50 dark:bg-gray-900 rounded p-2">
                                          <code className="font-mono">npm start</code>
                                          <p className="text-gray-600 dark:text-gray-400 mt-1">Launch project</p>
                                        </div>
                                        <div className="bg-gray-50 dark:bg-gray-900 rounded p-2">
                                          <code className="font-mono">Ctrl+C</code>
                                          <p className="text-gray-600 dark:text-gray-400 mt-1">Stop project</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Team Leadership Exercise */}
                              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30 rounded-lg p-4 border border-green-300 dark:border-green-600">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-3">🎯 Leading Your First AI Development Session</h4>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Practice leading a complete development session with your AI colleague:</p>
                                <div className="space-y-2 text-sm">
                                  <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                                    <div>
                                      <p className="font-semibold text-gray-900 dark:text-white">Start a new project:</p>
                                      <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-mono text-xs">mkdir ai-team-project && cd ai-team-project</code>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                                    <div>
                                      <p className="font-semibold text-gray-900 dark:text-white">Initialize Git:</p>
                                      <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-mono text-xs">git init</code>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                                    <div>
                                      <p className="font-semibold text-gray-900 dark:text-white">Collaborate with Claude:</p>
                                      <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-mono text-xs">claude "Help me create a simple web page"</code>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</div>
                                    <div>
                                      <p className="font-semibold text-gray-900 dark:text-white">Review and commit work:</p>
                                      <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-mono text-xs">git add . && git commit -m "First AI collaboration"</code>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">5</div>
                                    <div>
                                      <p className="font-semibold text-gray-900 dark:text-white">Ask for improvements:</p>
                                      <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-mono text-xs">claude "How can we make this code better?"</code>
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-3 p-2 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
                                  <p className="text-sm text-green-800 dark:text-green-300 font-semibold">🎉 Congratulations! You just led your first AI development team session!</p>
                                </div>
                              </div>

                              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                                <p className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-2">
                                  💡 You're not coding alone anymore - you're leading a team
                                </p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                  Claude Code is like having a senior developer who's available 24/7, never gets tired, and has experience with virtually every programming language. You drive the vision and make strategic decisions, while AI handles implementation details and offers expert guidance. This is the future of development leadership.
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
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-6 py-3 rounded-full font-bold mb-6 shadow-md">
              <Monitor className="w-5 h-5" />
              <span>Troubleshooting Guide</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Common Team Issues & Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              When your development team encounters issues, here's how to get back on track quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Terminal Issues */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Terminal className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Terminal Communication</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold text-red-700 dark:text-red-400 text-sm">❌ "Permission denied"</p>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <p className="font-medium mb-1">Solutions:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Mac: Add <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">sudo</code> before command</li>
                      <li>• Windows: Run terminal as Administrator</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold text-red-700 dark:text-red-400 text-sm">❌ "Command not found"</p>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <p className="font-medium mb-1">Solutions:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Check spelling carefully</li>
                      <li>• Ensure tool is installed</li>
                      <li>• Restart terminal after installations</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold text-red-700 dark:text-red-400 text-sm">❌ "No such file or directory"</p>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <p className="font-medium mb-1">Solutions:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Check location with <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">pwd</code></li>
                      <li>• List files with <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">ls</code></li>
                      <li>• Verify path is correct</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Git Issues */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <GitBranch className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Project Management</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold text-red-700 dark:text-red-400 text-sm">❌ "Fatal: not a git repository"</p>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <p className="font-medium mb-1">Solutions:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Navigate to project folder first</li>
                      <li>• Initialize with <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">git init</code></li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="font-semibold text-yellow-700 dark:text-yellow-400 text-sm">⚠️ "Your branch is ahead by X commits"</p>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <p className="font-medium mb-1">Solutions:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Run <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">git push</code> to sync</li>
                      <li>• Your local work isn't shared yet</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="font-semibold text-orange-700 dark:text-orange-400 text-sm">⚠️ "Merge conflict"</p>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <p className="font-medium mb-1">Solutions:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Open conflicted file</li>
                      <li>• Look for <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code> markers</li>
                      <li>• Choose which changes to keep</li>
                      <li>• Remove markers and commit</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Node.js Issues */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Project Infrastructure</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold text-red-700 dark:text-red-400 text-sm">❌ "npm: command not found"</p>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <p className="font-medium mb-1">Solutions:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Install Node.js from nodejs.org</li>
                      <li>• Restart terminal after installation</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold text-red-700 dark:text-red-400 text-sm">❌ "Module not found"</p>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <p className="font-medium mb-1">Solutions:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Run <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">npm install</code> first</li>
                      <li>• Ensure you're in project root</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="font-semibold text-orange-700 dark:text-orange-400 text-sm">⚠️ "Port already in use"</p>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <p className="font-medium mb-1">Solutions:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Stop other running projects</li>
                      <li>• Use different port</li>
                      <li>• Check for background processes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* AI Collaboration Issues */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Bot className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI Team Collaboration</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold text-red-700 dark:text-red-400 text-sm">❌ "Authentication failed"</p>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <p className="font-medium mb-1">Solutions:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Check security token isn't expired</li>
                      <li>• Generate new token if needed</li>
                      <li>• Use token, not password</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-blue-700 dark:text-blue-400 text-sm">💡 "Claude Code not responding"</p>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <p className="font-medium mb-1">Solutions:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Check internet connection</li>
                      <li>• Verify <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">claude --version</code></li>
                      <li>• Restart terminal session</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-green-700 dark:text-green-400 text-sm">✅ Pro Tips for Better AI Collaboration</p>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <ul className="space-y-1 text-xs">
                      <li>• Be specific in your requests</li>
                      <li>• Ask for explanations when confused</li>
                      <li>• Use Claude Code for code reviews</li>
                      <li>• Ask for help with commit messages</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Reference Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-6 py-3 rounded-full font-bold mb-6 shadow-md">
              <Star className="w-5 h-5" />
              <span>Quick Reference</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Your Development Command Center
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Essential commands for leading your AI development team effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Terminal Commands */}
            <Card className="p-6 bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <Terminal className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-white">Terminal</h3>
              </div>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex justify-between items-center">
                  <code className="text-blue-300">pwd</code>
                  <span className="text-gray-400 text-xs">Where am I?</span>
                </div>
                <div className="flex justify-between items-center">
                  <code className="text-blue-300">ls</code>
                  <span className="text-gray-400 text-xs">What's here?</span>
                </div>
                <div className="flex justify-between items-center">
                  <code className="text-blue-300">cd folder</code>
                  <span className="text-gray-400 text-xs">Move to</span>
                </div>
                <div className="flex justify-between items-center">
                  <code className="text-blue-300">mkdir name</code>
                  <span className="text-gray-400 text-xs">Create folder</span>
                </div>
                <div className="flex justify-between items-center">
                  <code className="text-blue-300">touch file</code>
                  <span className="text-gray-400 text-xs">Create file</span>
                </div>
              </div>
            </Card>

            {/* Git Commands */}
            <Card className="p-6 bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500 rounded-lg">
                  <GitBranch className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-white">Git</h3>
              </div>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex justify-between items-center">
                  <code className="text-purple-300">git status</code>
                  <span className="text-gray-400 text-xs">Check changes</span>
                </div>
                <div className="flex justify-between items-center">
                  <code className="text-purple-300">git add .</code>
                  <span className="text-gray-400 text-xs">Stage all</span>
                </div>
                <div className="flex justify-between items-center">
                  <code className="text-purple-300">git commit</code>
                  <span className="text-gray-400 text-xs">Save changes</span>
                </div>
                <div className="flex justify-between items-center">
                  <code className="text-purple-300">git push</code>
                  <span className="text-gray-400 text-xs">Upload</span>
                </div>
                <div className="flex justify-between items-center">
                  <code className="text-purple-300">git pull</code>
                  <span className="text-gray-400 text-xs">Download</span>
                </div>
              </div>
            </Card>

            {/* Node.js Commands */}
            <Card className="p-6 bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-500 rounded-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-white">Node.js</h3>
              </div>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex justify-between items-center">
                  <code className="text-green-300">npm install</code>
                  <span className="text-gray-400 text-xs">Get resources</span>
                </div>
                <div className="flex justify-between items-center">
                  <code className="text-green-300">npm start</code>
                  <span className="text-gray-400 text-xs">Launch project</span>
                </div>
                <div className="flex justify-between items-center">
                  <code className="text-green-300">npm run dev</code>
                  <span className="text-gray-400 text-xs">Development</span>
                </div>
                <div className="flex justify-between items-center">
                  <code className="text-green-300">Ctrl+C</code>
                  <span className="text-gray-400 text-xs">Stop project</span>
                </div>
                <div className="flex justify-between items-center">
                  <code className="text-green-300">node --version</code>
                  <span className="text-gray-400 text-xs">Check version</span>
                </div>
              </div>
            </Card>

            {/* Claude Code Commands */}
            <Card className="p-6 bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-500 rounded-lg">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-white">Claude Code</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="text-orange-300 font-mono text-xs mb-2">claude "your request"</div>
                <div className="space-y-1 text-xs text-gray-300">
                  <p>• "Review my code"</p>
                  <p>• "Fix this error"</p>
                  <p>• "Explain this concept"</p>
                  <p>• "Write tests for this"</p>
                  <p>• "Optimize performance"</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Essential Workflow */}
          <div className="mt-12 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-8 border border-orange-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">🚀 Essential Daily Workflow</h3>
            <div className="grid md:grid-cols-5 gap-4 text-center">
              <div className="text-white">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                <p className="text-sm font-semibold mb-1">Navigate</p>
                <code className="text-xs text-blue-300">cd project</code>
              </div>
              <div className="text-white">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                <p className="text-sm font-semibold mb-1">Check Status</p>
                <code className="text-xs text-purple-300">git status</code>
              </div>
              <div className="text-white">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                <p className="text-sm font-semibold mb-1">Collaborate</p>
                <code className="text-xs text-orange-300">claude "help"</code>
              </div>
              <div className="text-white">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">4</div>
                <p className="text-sm font-semibold mb-1">Save Work</p>
                <code className="text-xs text-green-300">git commit</code>
              </div>
              <div className="text-white">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">5</div>
                <p className="text-sm font-semibold mb-1">Share</p>
                <code className="text-xs text-indigo-300">git push</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Why These Fundamentals Transform Everything
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">From Solo to Team Leader</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Transform from coding alone to leading a team where AI handles implementation while you focus on strategy and architecture
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">10x Development Speed</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    AI agents handle repetitive tasks, boilerplate code, and research while you drive the vision and make decisions
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Professional Workflows</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Learn the same tools and processes used by senior developers at top tech companies worldwide
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Future-Proof Skills</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Master the fundamentals that remain constant while AI tools evolve - terminal, Git, and team leadership
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-600/5"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-white">
            Your Development Toolkit
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Terminal className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <p className="text-xl font-bold text-white mb-2">Terminal</p>
              <p className="text-gray-300 text-sm">Your communication hub</p>
              <div className="mt-3 font-mono text-xs text-gray-400">
                pwd • ls • cd • mkdir
              </div>
            </div>
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <GitBranch className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <p className="text-xl font-bold text-white mb-2">Git</p>
              <p className="text-gray-300 text-sm">Your project manager</p>
              <div className="mt-3 font-mono text-xs text-gray-400">
                add • commit • push • pull
              </div>
            </div>
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Bot className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <p className="text-xl font-bold text-white mb-2">Claude Code</p>
              <p className="text-gray-300 text-sm">Your AI colleague</p>
              <div className="mt-3 font-mono text-xs text-gray-400">
                24/7 • expert • patient
              </div>
            </div>
          </div>
          
          {/* Additional benefits */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">Works on any platform</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">Industry standard tools</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">Learn once, use everywhere</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <Zap className="w-16 h-16 mx-auto mb-6 text-orange-500" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Build Your Development Team?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Master these fundamentals and accelerate your development with AI-powered workflows.
          </p>

          <Card className="p-8 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Get The Complete Learning System
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6 text-left max-w-xl mx-auto">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-gray-800 dark:text-gray-200 font-semibold">Terminal mastery guide</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-gray-800 dark:text-gray-200 font-semibold">Git workflow system</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-gray-800 dark:text-gray-200 font-semibold">AI collaboration patterns</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-gray-800 dark:text-gray-200 font-semibold">Hands-on practice exercises</span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-12 py-6"
              onClick={() => {
                trackClick('Get Complete Guide - AI Agent Basics', {
                  location: 'bottom_section'
                });
                window.location.href = "/launch-with-us";
              }}
            >
              Get The Complete Guide
            </Button>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 font-semibold">
              Join hundreds of developers building with AI
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
                trackClick('Book Call - AI Agent Basics', {
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

export default AiAgentBasics;