import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { CheckCircle2, FolderOpen, Terminal, Sparkles, Copy, BookOpen, Lightbulb, ArrowRight, Bot, Briefcase, Target, FileText, Settings, Play, Check, MonitorDown } from "lucide-react";
import SEO from "@/components/SEO";
import { trackEvent } from "@/utils/posthog";
import { useTrackScrollDepth } from "@/hooks/use-posthog";
import { useEffect, useState } from "react";

const STORAGE_KEY = 'ai-coworker-completed-steps';

const AICoworker = () => {
  useTrackScrollDepth('AI Coworker Page');
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(() => {
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

  const [copiedPrompt, setCopiedPrompt] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...completedSteps]));
  }, [completedSteps]);

  useEffect(() => {
    trackEvent('AI Coworker Page View', {
      has_checklist: true,
      has_tutorial: true
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

  const copyPromptToClipboard = () => {
    const prompt = `Create me a markdown-based system in this directory (Launch Kit) where I can regularly run you Claude, that lets me be the best world-class MY_ROLE possible (like ELITE_EXAMPLES_OF_ROLES). I'm planning to use you as my personal executive assistant and MY_ROLE expert. Document everything in a series of folders as you see fit`;
    navigator.clipboard.writeText(prompt);
    setCopiedPrompt(true);
    trackEvent('AI Coworker Prompt Copied');
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const setupSteps = [
    {
      id: "create-workspace",
      title: "Create Your Workspace Folder",
      description: "Make a new folder on your desktop called 'Workspace' - this will be your AI command center",
      icon: FolderOpen,
      color: "from-blue-500 to-blue-600",
      details: [
        "Right-click on your desktop",
        "Select 'New Folder' (or Cmd+Shift+N on Mac)",
        "Name it 'Workspace'"
      ]
    },
    {
      id: "download-claude",
      title: "Download Claude Desktop App",
      description: "Get the Claude desktop application if you haven't already",
      icon: MonitorDown,
      color: "from-orange-500 to-orange-600",
      link: "https://claude.ai/download",
      linkText: "Download Claude Desktop"
    },
    {
      id: "open-claude-code",
      title: "Open Claude Code in the Desktop App",
      description: "Launch Claude Code from within the Claude desktop application",
      icon: Terminal,
      color: "from-purple-500 to-purple-600",
      details: [
        "Open the Claude desktop app",
        "Click on 'Claude Code' in the sidebar or menu",
        "Navigate to your Workspace folder"
      ]
    },
    {
      id: "customize-prompt",
      title: "Customize Your Role",
      description: "Before running the prompt, decide on YOUR role and elite examples to model",
      icon: Target,
      color: "from-cyan-500 to-cyan-600",
      customContent: "role-examples"
    },
    {
      id: "run-prompt",
      title: "Run the Launch Kit Prompt",
      description: "Execute this prompt in Claude Code to create your personalized AI coworker system",
      icon: Play,
      color: "from-green-500 to-green-600",
      customContent: "main-prompt"
    },
    {
      id: "explore-system",
      title: "Explore Your New System",
      description: "Review the folders and files Claude created for your personalized workflow",
      icon: FileText,
      color: "from-indigo-500 to-indigo-600",
      details: [
        "Browse through the folder structure Claude generated",
        "Read the documentation files to understand each component",
        "Note the workflow templates designed for your role"
      ]
    },
    {
      id: "configure-preferences",
      title: "Configure Your Preferences",
      description: "Customize the system by adding your specific context and preferences",
      icon: Settings,
      color: "from-pink-500 to-pink-600",
      details: [
        "Add your specific goals and KPIs",
        "Include relevant background information",
        "Set up your recurring tasks and schedules"
      ]
    },
    {
      id: "start-using",
      title: "Start Using Your AI Coworker",
      description: "Begin your daily workflow with Claude as your executive assistant",
      icon: Sparkles,
      color: "from-amber-500 to-amber-600",
      details: [
        "Open Claude Code in your Workspace folder",
        "Reference your Launch Kit documentation",
        "Ask Claude to help with tasks specific to your role"
      ]
    }
  ];

  const roleExamples = [
    { role: "Product Manager", elites: "Shreyas Doshi, Marty Cagan, Lenny Rachitsky" },
    { role: "Engineering Manager", elites: "Will Larson, Camille Fournier, Charity Majors" },
    { role: "Startup Founder", elites: "Paul Graham, Naval Ravikant, Sam Altman" },
    { role: "Marketing Leader", elites: "Seth Godin, April Dunford, Dave Gerhardt" },
    { role: "Sales Executive", elites: "Jill Konrath, Aaron Ross, Chris Voss" },
    { role: "Executive Coach", elites: "Marshall Goldsmith, Jerry Colonna, Julie Zhuo" },
    { role: "Consultant", elites: "Alan Weiss, David C. Baker, Blair Enns" },
    { role: "Technical Writer", elites: "Stripe Docs Team, Twilio Docs, Apple HIG" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Coworker - Set Up Claude as Your Personal Executive Assistant"
        description="Learn how to set up Claude Code as your AI coworker and personal executive assistant. A step-by-step tutorial to create your personalized AI workflow system."
        keywords={['AI coworker', 'Claude Code', 'AI assistant', 'executive assistant', 'AI workflow', 'productivity']}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/launch-bg.png"
            alt="AI Coworker background"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full text-sm font-bold mb-6">
            <Bot className="w-4 h-4" />
            <span>AI Coworker Tutorial</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Set Up Claude as Your
            <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mt-2">
              Personal AI Coworker
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
            Create a <span className="font-bold text-white">markdown-based command system</span> that turns Claude into your personal executive assistant and role-specific expert.
          </p>

          <p className="text-2xl font-semibold mb-8 max-w-2xl mx-auto">
            Set it up once. Have an AI coworker who knows exactly how to help you excel.
          </p>

          <div className="bg-background/50 backdrop-blur border border-white/10 rounded-lg p-6 max-w-2xl mx-auto mb-8 shadow-xl">
            <p className="text-lg font-bold mb-2">
              Follow the tutorial below
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
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600">
                {completedSteps.size} / {setupSteps.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-purple-500 to-blue-600 h-3 rounded-full transition-all duration-500"
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
            <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-6 py-3 rounded-full font-bold mb-6 shadow-md">
              <BookOpen className="w-5 h-5" />
              <span>Step-by-Step Tutorial</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Setup Checklist
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Follow these steps to create your personalized AI coworker system with Claude Code.
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

                    {/* Link */}
                    {step.link && (
                      <div className="mt-3">
                        <a
                          href={step.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                        >
                          <MonitorDown className="w-4 h-4" />
                          {step.linkText}
                        </a>
                      </div>
                    )}

                    {/* Details list */}
                    {step.details && (
                      <div className="mt-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                              <span className="text-purple-500 font-bold mt-0.5">-</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Role Examples */}
                    {step.customContent === "role-examples" && (
                      <div className="mt-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-4 border border-cyan-200 dark:border-cyan-700">
                        <p className="text-sm font-bold text-cyan-800 dark:text-cyan-300 mb-3">
                          <Lightbulb className="w-4 h-4 inline mr-1" />
                          Replace MY_ROLE and ELITE_EXAMPLES_OF_ROLES with your specifics:
                        </p>
                        <div className="grid md:grid-cols-2 gap-2">
                          {roleExamples.map((example, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-800 rounded p-2 text-xs border border-cyan-200 dark:border-cyan-700">
                              <span className="font-bold text-cyan-700 dark:text-cyan-400">{example.role}</span>
                              <span className="text-gray-500 dark:text-gray-400"> → </span>
                              <span className="text-gray-600 dark:text-gray-300">{example.elites}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Main Prompt */}
                    {step.customContent === "main-prompt" && (
                      <div className="mt-4 bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-700">
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-sm font-bold text-green-800 dark:text-green-300">
                            <Terminal className="w-4 h-4 inline mr-1" />
                            The Prompt:
                          </p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              copyPromptToClipboard();
                            }}
                            className="inline-flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded text-xs font-semibold transition-colors"
                          >
                            {copiedPrompt ? (
                              <>
                                <Check className="w-3 h-3" />
                                Copied!
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                Copy Prompt
                              </>
                            )}
                          </button>
                        </div>
                        <code className="block bg-white dark:bg-gray-800 rounded p-4 text-sm font-mono text-gray-800 dark:text-gray-200 border border-green-200 dark:border-green-700 whitespace-pre-wrap leading-relaxed">
{`Create me a markdown-based system in this directory (Launch Kit) where I can regularly run you Claude, that lets me be the best world-class MY_ROLE possible (like ELITE_EXAMPLES_OF_ROLES). I'm planning to use you as my personal executive assistant and MY_ROLE expert. Document everything in a series of folders as you see fit`}
                        </code>
                        <div className="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200 dark:border-yellow-700">
                          <p className="text-xs text-yellow-800 dark:text-yellow-300">
                            <strong>Remember:</strong> Replace <code className="bg-yellow-100 dark:bg-yellow-800/50 px-1 rounded">MY_ROLE</code> with your actual role and <code className="bg-yellow-100 dark:bg-yellow-800/50 px-1 rounded">ELITE_EXAMPLES_OF_ROLES</code> with people you admire in that role.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-600/5"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-6 py-3 rounded-full font-bold mb-6 shadow-md">
              <Sparkles className="w-5 h-5" />
              <span>What You'll Get</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Your AI Coworker Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Once set up, Claude becomes your personalized assistant who understands your role, goals, and working style.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-300 font-bold mb-2">Role-Specific Expertise</p>
              <p className="text-sm text-gray-500">Claude learns the best practices and frameworks from elite performers in your field</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-300 font-bold mb-2">Organized Workflow System</p>
              <p className="text-sm text-gray-500">A markdown-based system you can run anytime to get expert assistance</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-300 font-bold mb-2">Personalized Context</p>
              <p className="text-sm text-gray-500">Your Launch Kit grows with you, storing context that makes Claude more helpful over time</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-2xl font-bold text-white mb-4">
              Ready to have an AI coworker who truly understands your role?
            </p>
            <p className="text-gray-400 mb-6">
              Scroll up and complete the tutorial to get started.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              Start the Tutorial
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICoworker;
