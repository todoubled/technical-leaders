import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Download, FolderOpen, User, FileText, MessageSquare, RefreshCw, Rocket, Target, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";
import { trackEvent } from "@/utils/posthog";
import { useTrackScrollDepth } from "@/hooks/use-posthog";
import { useEffect, useState } from "react";

const STORAGE_KEY = 'launch-guide-completed-steps';

const LaunchGuide = () => {
  useTrackScrollDepth('Launch Guide Page');
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(() => {
    // Initialize from localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            return new Set(parsed);
          }
        } catch {
          // Invalid JSON, start fresh
        }
      }
    }
    return new Set();
  });

  // Save to localStorage whenever completedSteps changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...completedSteps]));
  }, [completedSteps]);

  useEffect(() => {
    trackEvent('Launch Guide Page View', {
      has_checklist: true,
      has_cta: true
    });
  }, []);

  const toggleStep = (stepId: string) => {
    setCompletedSteps(prev => {
      const newSet = new Set(prev);
      if (newSet.has(stepId)) {
        newSet.delete(stepId);
      } else {
        newSet.add(stepId);
      }
      return newSet;
    });
  };

  const setupSteps = [
    {
      id: "install-skills",
      title: "Download and Install Agent Skills",
      description: "Install these 4 essential skills to power your AI workflow",
      items: ["icp-cloner", "case-study-landing-page", "dm-coach", "rga-playbook"],
      icon: Download,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "gather-deps",
      title: "Gather Dependencies",
      description: "Collect these materials before starting",
      items: [
        "PDF export from LinkedIn profile of favorite/ideal client or boss",
        "PDF export from YOUR LinkedIn profile",
        "Transcript describing track record of wins from 1 or more projects",
        "Create new folder on your computer called 'Launch Kit' to store project files"
      ],
      icon: FolderOpen,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: "case-study",
      title: "[OPTIONAL] Create Case Study",
      description: "Turn your wins into compelling proof that attracts ideal clients",
      optional: true,
      icon: FileText,
      color: "from-green-500 to-green-600"
    },
    {
      id: "claude-project",
      title: "Create New Claude Project",
      description: "Set up your dedicated AI workspace with Launch Kit instructions",
      icon: Sparkles,
      color: "from-orange-500 to-orange-600"
    },
    {
      id: "clone-client",
      title: "Clone Your Ideal Client",
      description: "Start new chat and upload Profile PDF with 'clone this client' command",
      icon: Target,
      color: "from-cyan-500 to-cyan-600"
    },
    {
      id: "save-icp",
      title: "Save ICP Document",
      description: "Download and save the ICP document to your Launch Kit folder",
      icon: Download,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      id: "optimize-profile",
      title: "Optimize Your Profile",
      description: "Start new chat and upload YOUR profile PDF with 'optimize my profile' command",
      icon: User,
      color: "from-pink-500 to-pink-600"
    },
    {
      id: "make-changes",
      title: "Update Your LinkedIn",
      description: "Make the suggested changes to your profile",
      icon: CheckCircle2,
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  const workflowCommands = {
    monthly: {
      label: "Monthly",
      frequency: "First business day of every month",
      commands: [
        { command: "update positioning", description: "Refine your positioning and messaging based on market feedback" }
      ]
    },
    weekly: {
      label: "Weekly",
      frequency: "First business day of every week",
      commands: [
        { command: "find icp", description: "Find and prioritize new connections to reach out to" },
        { command: "create content", description: "Generate engaging content ideas and posts" }
      ]
    },
    daily: {
      label: "Daily",
      frequency: "Every business day",
      commands: [
        { command: "get connections", description: "Review and organize your new LinkedIn connections" },
        { command: "start conversations", description: "Get AI-assisted conversation starters for your connections" }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Launch Guide - Get Started with AI-Powered Outreach"
        description="Step-by-step guide to setting up your AI-powered outreach system. Install agent skills, gather dependencies, and start landing clients."
        keywords={['launch guide', 'AI outreach', 'Claude skills', 'consulting setup', 'ICP cloner']}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/launch-bg.png"
            alt="Launch Guide background"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full text-sm font-bold mb-6">
            <Rocket className="w-4 h-4" />
            <span>Launch Guide</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Set Up Your AI-Powered
            <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mt-2">
              Outreach System
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
            Follow this step-by-step guide to configure your <span className="font-bold text-white">Launch Kit</span> and start connecting with ideal clients using AI.
          </p>

          <p className="text-2xl font-semibold mb-8 max-w-2xl mx-auto">
            Complete the setup once, then run your daily workflow in minutes.
          </p>

          <div className="bg-background/50 backdrop-blur border border-white/10 rounded-lg p-6 max-w-2xl mx-auto mb-8 shadow-xl">
            <p className="text-lg font-bold mb-2">
              Complete the setup checklist below
            </p>
            <p className="text-base text-muted-foreground">
              Check off each step as you complete it to track your progress
            </p>
          </div>
        </div>
      </section>

      {/* Progress Indicator */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 -mt-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Setup Progress</h3>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                {completedSteps.size} / {setupSteps.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-orange-500 to-red-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${(completedSteps.size / setupSteps.length) * 100}%` }}
              ></div>
            </div>
          </Card>
        </div>
      </section>

      {/* Setup Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-6 py-3 rounded-full font-bold mb-6 shadow-md">
              <FolderOpen className="w-5 h-5" />
              <span>One-Time Setup Process</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Setup Checklist
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Complete these steps once to configure your AI-powered outreach system.
            </p>
          </div>

          <div className="space-y-6">
            {setupSteps.map((step, index) => (
              <Card
                key={step.id}
                className={`overflow-hidden transition-all duration-300 border-2 ${
                  completedSteps.has(step.id)
                    ? 'border-green-500 dark:border-green-400 bg-green-50 dark:bg-green-900/20'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
                } hover:shadow-lg cursor-pointer`}
                onClick={() => toggleStep(step.id)}
              >
                <div className="flex items-start p-6">
                  {/* Checkbox */}
                  <div className="flex-shrink-0 mr-4">
                    <div
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        completedSteps.has(step.id)
                          ? 'bg-green-500 border-green-500'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}
                    >
                      {completedSteps.has(step.id) && (
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      )}
                    </div>
                  </div>

                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0 mr-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-bold text-gray-500 dark:text-gray-400">
                        Step {index + 1}
                      </span>
                      {step.optional && (
                        <span className="text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-2 py-0.5 rounded-full font-semibold">
                          Optional
                        </span>
                      )}
                    </div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      completedSteps.has(step.id)
                        ? 'text-green-700 dark:text-green-400 line-through'
                        : 'text-gray-900 dark:text-white'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {step.description}
                    </p>

                    {/* Sub-items */}
                    {step.items && (
                      <div className="mt-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
                        <ul className="space-y-2">
                          {step.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                              <span className="text-orange-500 font-bold mt-0.5">-</span>
                              <span className={step.id === "install-skills" ? "font-mono bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded" : ""}>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Special content for specific steps */}
                    {step.id === "clone-client" && (
                      <div className="mt-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-4 border border-cyan-200 dark:border-cyan-700">
                        <p className="text-sm font-bold text-cyan-800 dark:text-cyan-300 mb-2">Command to use:</p>
                        <code className="block bg-white dark:bg-gray-800 rounded p-3 text-sm font-mono text-gray-800 dark:text-gray-200 border border-cyan-200 dark:border-cyan-700">
                          clone this client
                        </code>
                      </div>
                    )}

                    {step.id === "optimize-profile" && (
                      <div className="mt-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg p-4 border border-pink-200 dark:border-pink-700">
                        <p className="text-sm font-bold text-pink-800 dark:text-pink-300 mb-2">Command to use:</p>
                        <code className="block bg-white dark:bg-gray-800 rounded p-3 text-sm font-mono text-gray-800 dark:text-gray-200 border border-pink-200 dark:border-pink-700">
                          optimize my profile
                        </code>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recurring Workflow */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-600/5"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 px-6 py-3 rounded-full font-bold mb-6 shadow-md">
              <RefreshCw className="w-5 h-5" />
              <span>Recurring Workflow</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Your Ongoing Routine
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              After completing the setup, run these commands on a recurring schedule in your Launch Kit folder.
            </p>
          </div>

          {/* Instruction Box */}
          <Card className="bg-white/5 backdrop-blur-sm border-2 border-white/10 p-8 mb-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Open Claude Cowork Session</h3>
                <p className="text-gray-400">Navigate to your Launch Kit folder and start a new session</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Monthly Commands */}
              <div className="bg-gray-900 rounded-xl p-6 border border-purple-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-bold">
                    {workflowCommands.monthly.label}
                  </span>
                  <span className="text-sm text-gray-400">{workflowCommands.monthly.frequency}</span>
                </div>
                <div className="grid gap-4">
                  {workflowCommands.monthly.commands.map((action, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-purple-500/50 transition-all">
                      <code className="text-xl font-mono text-purple-400 font-bold">{action.command}</code>
                      <p className="text-sm text-gray-400 mt-2">{action.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Commands */}
              <div className="bg-gray-900 rounded-xl p-6 border border-blue-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-bold">
                    {workflowCommands.weekly.label}
                  </span>
                  <span className="text-sm text-gray-400">{workflowCommands.weekly.frequency}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {workflowCommands.weekly.commands.map((action, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-blue-500/50 transition-all">
                      <code className="text-xl font-mono text-blue-400 font-bold">{action.command}</code>
                      <p className="text-sm text-gray-400 mt-2">{action.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Daily Commands */}
              <div className="bg-gray-900 rounded-xl p-6 border border-orange-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm font-bold">
                    {workflowCommands.daily.label}
                  </span>
                  <span className="text-sm text-gray-400">{workflowCommands.daily.frequency}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {workflowCommands.daily.commands.map((action, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-orange-500/50 transition-all">
                      <code className="text-xl font-mono text-orange-400 font-bold">{action.command}</code>
                      <p className="text-sm text-gray-400 mt-2">{action.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Follow this schedule consistently for steady pipeline growth</span>
            </div>
          </Card>

          {/* Pro Tips */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <p className="text-4xl mb-3">25</p>
              <p className="text-gray-300 font-bold">Connections weekly</p>
              <p className="text-sm text-gray-500">from "find icp" command</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <p className="text-4xl mb-3">10+</p>
              <p className="text-gray-300 font-bold">Conversations daily</p>
              <p className="text-sm text-gray-500">from "start conversations" command</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <p className="text-4xl mb-3">3-5</p>
              <p className="text-gray-300 font-bold">Content pieces weekly</p>
              <p className="text-sm text-gray-500">from "create content" command</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LaunchGuide;
