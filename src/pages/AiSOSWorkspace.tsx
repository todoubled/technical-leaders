import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import ContentFooter from "@/components/footers/ContentFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Brain,
  Rocket,
  Target,
  Users,
  Sparkles,
  ChevronRight,
  ChevronDown,
  Download,
  Monitor,
  Settings,
  Shield,
  Link2,
  Zap,
  FolderPlus,
  Database,
  FileText,
  Play,
  RefreshCw,
  Check,
  CheckCircle2,
  Clock,
  BookOpen,
  Copy,
  ExternalLink
} from "lucide-react";
import SEO from "@/components/SEO";
import { trackEvent } from "@/utils/posthog";

interface StepProps {
  stepNumber: number;
  title: string;
  description: string;
  isCompleted: boolean;
  isActive: boolean;
  onToggleComplete: () => void;
  children: React.ReactNode;
}

const TutorialStep = ({ stepNumber, title, description, isCompleted, isActive, onToggleComplete, children }: StepProps) => {
  const [isExpanded, setIsExpanded] = useState(isActive);

  useEffect(() => {
    if (isActive) setIsExpanded(true);
  }, [isActive]);

  return (
    <div className={`border rounded-lg transition-all duration-300 ${isCompleted ? 'border-green-500/50 bg-green-500/5' : isActive ? 'border-primary/50 bg-primary/5' : 'border-border'}`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-4">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg ${isCompleted ? 'bg-green-500 text-white' : isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
            {isCompleted ? <Check className="h-5 w-5" /> : stepNumber}
          </div>
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 border-t border-border/50">
          <div className="pt-6">
            {children}
          </div>
          <div className="mt-6 pt-4 border-t border-border/50 flex justify-between items-center">
            <button
              onClick={onToggleComplete}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isCompleted ? 'bg-green-500/10 text-green-600 hover:bg-green-500/20' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}
            >
              <CheckCircle2 className="h-5 w-5" />
              {isCompleted ? 'Completed!' : 'Mark as Complete'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const CodeBlock = ({ children, language = "markdown" }: { children: string; language?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm font-mono">
        <code>{children}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded bg-gray-700 hover:bg-gray-600 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  );
};

const ComparisonTable = ({ headers, rows }: { headers: string[]; rows: (string | React.ReactNode)[][] }) => (
  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-muted/50">
          {headers.map((header, i) => (
            <th key={i} className="border border-border px-4 py-2 text-left font-semibold">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="hover:bg-muted/30">
            {row.map((cell, j) => (
              <td key={j} className="border border-border px-4 py-2">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Checkpoint = ({ children }: { children: string }) => (
  <div className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
    <div>
      <span className="font-semibold text-green-600">Checkpoint:</span>
      <span className="text-muted-foreground ml-2">{children}</span>
    </div>
  </div>
);

const AiSOSWorkspace = () => {
  const [completedSteps, setCompletedSteps] = useState<number[]>(() => {
    const saved = localStorage.getItem('ai-sos-workspace-progress');
    return saved ? JSON.parse(saved) : [];
  });
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    localStorage.setItem('ai-sos-workspace-progress', JSON.stringify(completedSteps));
  }, [completedSteps]);

  useEffect(() => {
    trackEvent('AI SOS Workspace View', { context: 'tutorial_page' });
  }, []);

  const toggleStepComplete = (stepNumber: number) => {
    setCompletedSteps(prev => {
      if (prev.includes(stepNumber)) {
        return prev.filter(s => s !== stepNumber);
      } else {
        trackEvent('AI SOS Tutorial Step Completed', { step: stepNumber });
        const newCompleted = [...prev, stepNumber];
        // Auto-advance to next step
        if (stepNumber < 12) {
          setActiveStep(stepNumber + 1);
        }
        return newCompleted;
      }
    });
  };

  const progressPercent = Math.round((completedSteps.length / 12) * 100);

  const learningOutcomes = [
    "Set up Claude Desktop with optimal settings for agent workflows",
    "Install and configure skill libraries for specialized AI assistance",
    "Create project-based workflows with custom instructions",
    "Connect external tools via MCP (Model Context Protocol)",
    "Build, iterate, and improve your own skills using scorecards"
  ];

  const keyConcepts = [
    { term: "Skills", definition: "Modular expertise you plug into Claude" },
    { term: "Projects", definition: "Containers for workflow-specific context" },
    { term: "MCP Connections", definition: "How Claude accesses external tools" },
    { term: "Workflow Instructions", definition: "The step-by-step process Claude follows" },
    { term: "Scorecards", definition: "How you measure and improve over time" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI SOS Workspace Setup Tutorial | Technical Leaders"
        description="Complete guide to setting up Claude Desktop for AI agent workflows. Learn to install skills, configure MCP connections, and build automated workflows."
        keywords={["AI SOS", "Claude Desktop", "AI agent workflows", "MCP", "skill libraries", "AI automation", "Claude projects", "AI workspace setup"]}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-16">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4" />
            Step-by-Step Tutorial
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              AI SOS Workspace
            </span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground">
              Setup Tutorial
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Build a fully configured Claude agent workspace with custom skills, connected tools, and repeatable workflows you can adapt to any business process (without getting technical).
          </p>

          {/* Time Estimate */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-lg">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-sm"><strong>Initial Setup:</strong> 20-30 minutes</span>
            </div>
            <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-lg">
              <Rocket className="h-4 w-4 text-primary" />
              <span className="text-sm"><strong>First Workflow:</strong> 15-20 minutes</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Your Progress</span>
              <span className="font-semibold text-primary">{progressPercent}% Complete</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">{completedSteps.length} of 12 steps completed</p>
          </div>

          <Button
            size="lg"
            className="text-lg px-8 py-6"
            onClick={() => {
              document.getElementById('tutorial-steps')?.scrollIntoView({ behavior: 'smooth' });
              trackEvent('AI SOS Tutorial Started', { progress: progressPercent });
            }}
          >
            {completedSteps.length > 0 ? 'Continue Tutorial' : 'Start Tutorial'}
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Prerequisites & Learning Outcomes */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Prerequisites */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-amber-500/10 rounded-lg">
                  <Target className="h-6 w-6 text-amber-500" />
                </div>
                <h2 className="text-xl font-bold">Prerequisites</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>A Claude Pro or Team account (required for Projects and extended features)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Basic familiarity with Claude's interface</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Administrator access on your computer (for Claude Desktop installation)</span>
                </li>
              </ul>
            </Card>

            {/* Learning Outcomes */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold">What You'll Learn</h2>
              </div>
              <ul className="space-y-3">
                {learningOutcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Tutorial Steps */}
      <section id="tutorial-steps" className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tutorial Steps</h2>
            <p className="text-xl text-muted-foreground">Follow each step to build your AI workspace</p>
          </div>

          <div className="space-y-4">
            {/* Step 1: Download Skill Library */}
            <TutorialStep
              stepNumber={1}
              title="Download the Skill Library"
              description="Get pre-built instruction sets that give Claude specialized capabilities"
              isCompleted={completedSteps.includes(1)}
              isActive={activeStep === 1}
              onToggleComplete={() => toggleStepComplete(1)}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <Brain className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-blue-600">What This Step Does:</span>
                    <p className="text-muted-foreground mt-1">Skills are pre-built instruction sets that give Claude specialized capabilities—think of them as "expertise modules" you plug in to handle specific tasks like sales coaching, market analysis, or content creation.</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Action Steps:</h4>
                  <ol className="space-y-4 list-decimal list-inside">
                    <li className="pl-2">
                      <strong>Navigate to the AI SOS Skill Library</strong>
                      <ul className="mt-2 ml-6 space-y-1 text-muted-foreground list-disc">
                        <li>Go to the shared skill repository (provided in your AI SOS workspace or community)</li>
                        <li>Look for the <code className="bg-muted px-1.5 py-0.5 rounded text-sm">/skills</code> folder containing <code className="bg-muted px-1.5 py-0.5 rounded text-sm">.md</code> files</li>
                      </ul>
                    </li>
                    <li className="pl-2">
                      <strong>Download the skill files</strong>
                      <ul className="mt-2 ml-6 space-y-1 text-muted-foreground list-disc">
                        <li>Download individual skills you need, OR</li>
                        <li>Download the entire library as a ZIP file</li>
                        <li>Extract to a memorable location (e.g., <code className="bg-muted px-1.5 py-0.5 rounded text-sm">Documents/claude-skills/</code>)</li>
                      </ul>
                    </li>
                    <li className="pl-2">
                      <strong>Review what you've downloaded</strong>
                      <ul className="mt-2 ml-6 space-y-1 text-muted-foreground list-disc">
                        <li>Each skill is a Markdown file (<code className="bg-muted px-1.5 py-0.5 rounded text-sm">.md</code>) with structured instructions</li>
                        <li>Open one in a text editor to see its format</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Example Skill Structure:</h4>
                  <CodeBlock>{`---
name: dm-coach
description: Real-time DM sales coaching using Trust Physics...
---

[Detailed instructions for Claude follow...]`}</CodeBlock>
                </div>

                <Checkpoint>You should have a folder on your computer containing one or more .md skill files.</Checkpoint>
              </div>
            </TutorialStep>

            {/* Step 2: Download Claude Desktop */}
            <TutorialStep
              stepNumber={2}
              title="Log Into Claude (Download Desktop)"
              description="Install Claude Desktop for enhanced capabilities"
              isCompleted={completedSteps.includes(2)}
              isActive={activeStep === 2}
              onToggleComplete={() => toggleStepComplete(2)}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <Monitor className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-blue-600">What This Step Does:</span>
                    <p className="text-muted-foreground mt-1">Claude Desktop provides enhanced capabilities compared to the web interface, including MCP connections, file system access, and persistent project configurations.</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Action Steps:</h4>
                  <ol className="space-y-4 list-decimal list-inside">
                    <li className="pl-2">
                      <strong>Download Claude Desktop</strong>
                      <ul className="mt-2 ml-6 space-y-1 text-muted-foreground list-disc">
                        <li>
                          Visit{" "}
                          <a href="https://claude.ai/download" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                            claude.ai/download <ExternalLink className="h-3 w-3" />
                          </a>
                        </li>
                        <li>Select your operating system (macOS or Windows)</li>
                        <li>Run the installer</li>
                      </ul>
                    </li>
                    <li className="pl-2">
                      <strong>Sign in with your account</strong>
                      <ul className="mt-2 ml-6 space-y-1 text-muted-foreground list-disc">
                        <li>Launch Claude Desktop</li>
                        <li>Sign in using your existing Claude credentials</li>
                        <li>Verify your subscription tier shows Pro or Team</li>
                      </ul>
                    </li>
                    <li className="pl-2">
                      <strong>Familiarize yourself with the interface</strong>
                      <ul className="mt-2 ml-6 space-y-1 text-muted-foreground list-disc">
                        <li>Note the sidebar for conversations and Projects</li>
                        <li>Locate the Settings gear icon (bottom left on macOS)</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Why Desktop Matters:</h4>
                  <ComparisonTable
                    headers={["Feature", "Web", "Desktop"]}
                    rows={[
                      ["Basic chat", <Check className="h-4 w-4 text-green-500" />, <Check className="h-4 w-4 text-green-500" />],
                      ["Projects", <Check className="h-4 w-4 text-green-500" />, <Check className="h-4 w-4 text-green-500" />],
                      ["MCP Connections", <span className="text-red-500">-</span>, <Check className="h-4 w-4 text-green-500" />],
                      ["Local file access", "Limited", "Full"],
                      ["Skill installation", "Manual", "Integrated"]
                    ]}
                  />
                </div>

                <Checkpoint>Claude Desktop is installed and you're signed into your account.</Checkpoint>
              </div>
            </TutorialStep>

            {/* Step 3: Atomic Thought Mode */}
            <TutorialStep
              stepNumber={3}
              title="Turn On Atomic Thought Mode"
              description="Enable improved reasoning for more reliable outputs"
              isCompleted={completedSteps.includes(3)}
              isActive={activeStep === 3}
              onToggleComplete={() => toggleStepComplete(3)}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <Brain className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-blue-600">What This Step Does:</span>
                    <p className="text-muted-foreground mt-1">Atomic Thought mode changes how Claude reasons through problems—decomposing them into independent logical units rather than linear chains. This produces more reliable, verifiable outputs.</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Action Steps:</h4>
                  <ol className="space-y-4 list-decimal list-inside">
                    <li className="pl-2">
                      <strong>Open Claude Settings</strong>
                      <ul className="mt-2 ml-6 space-y-1 text-muted-foreground list-disc">
                        <li>Click the gear icon in Claude Desktop, OR</li>
                        <li>Go to claude.ai → Settings (profile menu)</li>
                      </ul>
                    </li>
                    <li className="pl-2">
                      <strong>Enable Extended Thinking / Atomic Reasoning</strong>
                      <ul className="mt-2 ml-6 space-y-1 text-muted-foreground list-disc">
                        <li>Add this instruction to your User Preferences:</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <CodeBlock>{`Instead of Chain of Thought: "Solve this step by step" approach,
use the Atom of Thought approach like this:

Decompose this problem into atomic reasoning units.
For each atom:
1. State the logical component
2. Validate independence
3. Verify correctness
Then synthesize atoms into final answer.`}</CodeBlock>

                <div>
                  <h4 className="font-semibold mb-3">Why This Matters:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="p-4 border-red-500/30 bg-red-500/5">
                      <h5 className="font-semibold text-red-600 mb-2">Chain of Thought (traditional)</h5>
                      <p className="text-sm text-muted-foreground">Step 1 → Step 2 → Step 3 → Answer</p>
                      <p className="text-xs text-red-500 mt-2">(Error in Step 1 cascades through everything)</p>
                    </Card>
                    <Card className="p-4 border-green-500/30 bg-green-500/5">
                      <h5 className="font-semibold text-green-600 mb-2">Atom of Thought (improved)</h5>
                      <p className="text-sm text-muted-foreground">Atom A + Atom B + Atom C → Synthesis → Answer</p>
                      <p className="text-xs text-green-500 mt-2">(Errors isolated to individual atoms)</p>
                    </Card>
                  </div>
                </div>

                <Checkpoint>Your User Preferences include the Atomic Thought instruction.</Checkpoint>
              </div>
            </TutorialStep>

            {/* Step 4: Privacy Settings */}
            <TutorialStep
              stepNumber={4}
              title="Configure Privacy Settings"
              description="Balance functionality with data protection"
              isCompleted={completedSteps.includes(4)}
              isActive={activeStep === 4}
              onToggleComplete={() => toggleStepComplete(4)}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <Shield className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-blue-600">What This Step Does:</span>
                    <p className="text-muted-foreground mt-1">Privacy settings control what data Claude can access and how your conversations are stored. For business workflows, you'll want to balance functionality with data protection.</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Action Steps:</h4>
                  <ol className="space-y-4 list-decimal list-inside">
                    <li className="pl-2"><strong>Access Privacy Settings:</strong> Settings → Privacy & Security</li>
                    <li className="pl-2"><strong>Review and configure:</strong></li>
                  </ol>
                </div>

                <ComparisonTable
                  headers={["Setting", "Recommended", "Why"]}
                  rows={[
                    ["Conversation History", "On", "Enables memory and context"],
                    ["Training on Conversations", "Your preference", "Off for sensitive business data"],
                    ["Memory", "On", "Claude learns your preferences"],
                    ["Search Past Chats", "On", "Required for workflow continuity"]
                  ]}
                />

                <div className="flex items-start gap-3 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                  <Target className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-amber-600">Important Note:</span>
                    <p className="text-muted-foreground mt-1">If working with client data or sensitive information, consider using Projects (data stays within project boundaries), disabling training on conversations, and reviewing your organization's data handling policies.</p>
                  </div>
                </div>

                <Checkpoint>Privacy settings are configured for your use case.</Checkpoint>
              </div>
            </TutorialStep>

            {/* Step 5: Enable MCP */}
            <TutorialStep
              stepNumber={5}
              title="Enable Connections (MCP)"
              description="Connect Claude to external tools and services"
              isCompleted={completedSteps.includes(5)}
              isActive={activeStep === 5}
              onToggleComplete={() => toggleStepComplete(5)}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <Link2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-blue-600">What This Step Does:</span>
                    <p className="text-muted-foreground mt-1">MCP (Model Context Protocol) connections allow Claude to interact with external tools—calendars, email, databases, and custom services. This is what transforms Claude from a chatbot into an agent.</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Action Steps:</h4>
                  <ol className="space-y-4 list-decimal list-inside">
                    <li className="pl-2"><strong>Open Connections Settings:</strong> Settings → Connections (or "Integrations" / "MCP")</li>
                    <li className="pl-2">
                      <strong>Review available connections:</strong>
                      <ul className="mt-2 ml-6 space-y-1 text-muted-foreground list-disc">
                        <li><strong>Built-in:</strong> Google Drive, Gmail, Calendar, Slack</li>
                        <li><strong>Third-party:</strong> Linear, Stripe, PostHog, Airtable</li>
                        <li><strong>Custom:</strong> Your own MCP servers</li>
                      </ul>
                    </li>
                    <li className="pl-2">
                      <strong>Enable the connections you need:</strong>
                      <ul className="mt-2 ml-6 space-y-1 text-muted-foreground list-disc">
                        <li>Click "Connect" next to each service</li>
                        <li>Complete the OAuth authorization flow</li>
                        <li>Verify the connection shows as "Active"</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Common Workflow Connections:</h4>
                  <ComparisonTable
                    headers={["Workflow Type", "Recommended Connections"]}
                    rows={[
                      ["Sales/CRM", "Gmail, Calendar, Stripe"],
                      ["Project Management", "Linear, Airtable"],
                      ["Analytics", "PostHog, Google Drive"],
                      ["Content Creation", "Google Drive, Canva"]
                    ]}
                  />
                </div>

                <Checkpoint>At least one external connection is active and working.</Checkpoint>
              </div>
            </TutorialStep>

            {/* Step 6: Turn On Skills */}
            <TutorialStep
              stepNumber={6}
              title="Turn On Skills (Feature Toggle)"
              description="Enable the Skills feature in Claude's settings"
              isCompleted={completedSteps.includes(6)}
              isActive={activeStep === 6}
              onToggleComplete={() => toggleStepComplete(6)}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <Zap className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-blue-600">What This Step Does:</span>
                    <p className="text-muted-foreground mt-1">Skills are a feature that must be enabled in Claude's settings before you can install and use them.</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Action Steps:</h4>
                  <ol className="space-y-4 list-decimal list-inside">
                    <li className="pl-2"><strong>Navigate to Feature Settings:</strong> Settings → Features (or "Labs" / "Beta Features")</li>
                    <li className="pl-2">
                      <strong>Enable relevant features:</strong>
                      <ul className="mt-2 ml-6 space-y-1 text-muted-foreground list-disc">
                        <li><strong>Artifacts:</strong> For generated files and visualizations</li>
                        <li><strong>Computer Use / Code Execution:</strong> For running code</li>
                        <li><strong>File Creation:</strong> For generating documents</li>
                        <li><strong>Extended Thinking:</strong> For complex reasoning</li>
                      </ul>
                    </li>
                    <li className="pl-2"><strong>Verify skills capability:</strong> Look for "Skills" or "Custom Instructions" in Project settings</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">What Each Feature Enables:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Artifacts:</strong> Claude can create downloadable files, interactive components</li>
                    <li><strong>Code Execution:</strong> Claude can run Python, generate charts, process data</li>
                    <li><strong>File Creation:</strong> Claude can produce .docx, .xlsx, .pptx, .pdf files</li>
                  </ul>
                </div>

                <Checkpoint>Core features are enabled and visible in your interface.</Checkpoint>
              </div>
            </TutorialStep>

            {/* Step 7: Install Skills */}
            <TutorialStep
              stepNumber={7}
              title="Install Skills"
              description="Add specialized capabilities to your Claude workspace"
              isCompleted={completedSteps.includes(7)}
              isActive={activeStep === 7}
              onToggleComplete={() => toggleStepComplete(7)}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <Download className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-blue-600">What This Step Does:</span>
                    <p className="text-muted-foreground mt-1">Now you'll add your downloaded skills to Claude, making specialized capabilities available in your workflows.</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Action Steps:</h4>
                  <ol className="space-y-4 list-decimal list-inside">
                    <li className="pl-2"><strong>Open your skill files:</strong> Navigate to where you downloaded the skills (Step 1)</li>
                    <li className="pl-2">
                      <strong>Method A: Add to User Preferences (Global)</strong>
                      <ul className="mt-2 ml-6 space-y-1 text-muted-foreground list-disc">
                        <li>Settings → User Preferences</li>
                        <li>Paste the core skill instructions</li>
                        <li>These will apply to ALL conversations</li>
                      </ul>
                    </li>
                    <li className="pl-2">
                      <strong>Method B: Add to Project (Recommended)</strong>
                      <ul className="mt-2 ml-6 space-y-1 text-muted-foreground list-disc">
                        <li>Create or open a Project (see Step 8)</li>
                        <li>Go to Project Settings → Custom Instructions</li>
                        <li>Upload or paste skill files</li>
                        <li>Skills only apply within that project</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Example Installation:</h4>
                  <CodeBlock>{`Project: Sales Coaching Workflow
├── Project Instructions (base context)
├── Skills/
│   ├── dm-coach.md
│   ├── email-writer.md
│   └── content-creator.md
└── Knowledge Base/
    └── (your reference documents)`}</CodeBlock>
                </div>

                <Checkpoint>At least one skill is installed and accessible to Claude.</Checkpoint>
              </div>
            </TutorialStep>

            {/* Step 8: Create Project */}
            <TutorialStep
              stepNumber={8}
              title="Create a New Project"
              description="Set up a container for your workflow"
              isCompleted={completedSteps.includes(8)}
              isActive={activeStep === 8}
              onToggleComplete={() => toggleStepComplete(8)}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <FolderPlus className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-blue-600">What This Step Does:</span>
                    <p className="text-muted-foreground mt-1">Projects are containers that bundle together instructions, knowledge, and context for specific workflows. Each project maintains its own memory and configuration.</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Action Steps:</h4>
                  <ol className="space-y-4 list-decimal list-inside">
                    <li className="pl-2">
                      <strong>Create the project:</strong>
                      <ul className="mt-2 ml-6 space-y-1 text-muted-foreground list-disc">
                        <li>Click "Projects" in the sidebar</li>
                        <li>Click "New Project"</li>
                        <li>Name it descriptively (e.g., "AcreHedge Weekly Reports")</li>
                      </ul>
                    </li>
                    <li className="pl-2"><strong>Add a project description:</strong> Explain what this workflow accomplishes</li>
                    <li className="pl-2"><strong>Add knowledge base documents</strong> (optional): Upload reference PDFs, docs, or data files</li>
                    <li className="pl-2"><strong>Configure project instructions:</strong> This is where your skills and workflow logic go</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Project Structure Example:</h4>
                  <CodeBlock>{`Project: Weekly Commodity Report
├── Description: "Generates AcreHedge's weekly commodity and
│                 risk management report for US row crop farmers"
├── Instructions:
│   └── [Paste from acrehedge-weekly-report skill]
├── Knowledge:
│   ├── previous-reports/
│   ├── market-data-sources.md
│   └── brand-guidelines.pdf
└── Conversations: (created as you work)`}</CodeBlock>
                </div>

                <Checkpoint>A new project exists with a name and description.</Checkpoint>
              </div>
            </TutorialStep>

            {/* Step 9: Add Workflow Sources */}
            <TutorialStep
              stepNumber={9}
              title="Add Workflow Sources/MCP"
              description="Connect your project to data sources and tools"
              isCompleted={completedSteps.includes(9)}
              isActive={activeStep === 9}
              onToggleComplete={() => toggleStepComplete(9)}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <Database className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-blue-600">What This Step Does:</span>
                    <p className="text-muted-foreground mt-1">Now you'll connect your project to the specific data sources and tools this workflow needs.</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Action Steps:</h4>
                  <ol className="space-y-4 list-decimal list-inside">
                    <li className="pl-2"><strong>Identify required data sources:</strong> What external data does this workflow need? What actions should Claude be able to take?</li>
                    <li className="pl-2"><strong>Map sources to connections:</strong></li>
                  </ol>
                </div>

                <ComparisonTable
                  headers={["Workflow Need", "MCP Connection"]}
                  rows={[
                    ["Pull calendar events", "Google Calendar"],
                    ["Send/read emails", "Gmail"],
                    ["Access documents", "Google Drive"],
                    ["Query analytics", "PostHog"],
                    ["Manage tasks", "Linear"],
                    ["Process payments", "Stripe"],
                    ["Store data", "Airtable"]
                  ]}
                />

                <div>
                  <h4 className="font-semibold mb-3">Add source references to project instructions:</h4>
                  <CodeBlock>{`## Data Sources for This Workflow

- **Market Data**: Use web search for current commodity prices
- **Previous Reports**: Check Google Drive for historical reports
- **Client List**: Reference Airtable base "AcreHedge Clients"
- **Analytics**: Pull engagement data from PostHog`}</CodeBlock>
                </div>

                <div className="mt-4">
                  <p className="text-muted-foreground"><strong>Test each connection:</strong> In a project conversation, ask Claude to access each source and verify data flows correctly.</p>
                </div>

                <Checkpoint>Project instructions reference all needed data sources, and connections are verified.</Checkpoint>
              </div>
            </TutorialStep>

            {/* Step 10: Add Workflow Instructions */}
            <TutorialStep
              stepNumber={10}
              title="Add Workflow Instructions"
              description="Define the step-by-step process for your agent"
              isCompleted={completedSteps.includes(10)}
              isActive={activeStep === 10}
              onToggleComplete={() => toggleStepComplete(10)}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <FileText className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-blue-600">What This Step Does:</span>
                    <p className="text-muted-foreground mt-1">This is the core of your agent workflow—the detailed instructions that tell Claude exactly how to execute the process.</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Instruction Framework:</h4>
                  <CodeBlock>{`# [Workflow Name]

## Purpose
[What this workflow accomplishes in 1-2 sentences]

## Trigger
[When/how this workflow should be activated]

## Process Steps

### Step 1: [Name]
- Action: [What Claude should do]
- Source: [Where to get data]
- Output: [What to produce]

### Step 2: [Name]
...

## Output Format
[Describe the expected deliverable]

## Quality Checks
[How to verify the output is correct]

## Error Handling
[What to do if something goes wrong]`}</CodeBlock>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Complete Example:</h4>
                  <CodeBlock>{`# Weekly Commodity Report Workflow

## Purpose
Generate AcreHedge's Weekly Commodity & Risk Management Report
for U.S. row crop farmers.

## Trigger
User says: "Generate weekly report" or "Create this week's AcreHedge report"

## Process Steps

### Step 1: Gather Market Data
- Action: Search web for current prices
- Sources: CME Group, USDA, EIA
- Data needed: Corn, soybeans, wheat, rice, crude oil, diesel, fertilizer

### Step 2: Analyze Trends
- Compare to previous week
- Identify significant movements (>2%)
- Note any market-moving news

### Step 3: Generate Report
- Follow AcreHedge brand template
- Include price tables, trend analysis, actionable insights
- Output as downloadable DOCX

### Step 4: Create Distribution Email
- Summarize key points
- Include report as attachment
- Draft for review before sending

## Quality Checks
- Verify all prices are current (within 24 hours)
- Confirm math is correct on percentage changes
- Ensure tone matches brand guidelines`}</CodeBlock>
                </div>

                <Checkpoint>Your project has detailed workflow instructions that Claude can follow.</Checkpoint>
              </div>
            </TutorialStep>

            {/* Step 11: Prompt the Workflow */}
            <TutorialStep
              stepNumber={11}
              title="Prompt the Workflow"
              description="Execute your workflow and see it in action"
              isCompleted={completedSteps.includes(11)}
              isActive={activeStep === 11}
              onToggleComplete={() => toggleStepComplete(11)}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <Play className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-blue-600">What This Step Does:</span>
                    <p className="text-muted-foreground mt-1">Now you'll execute your workflow and see it in action.</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Action Steps:</h4>
                  <ol className="space-y-4 list-decimal list-inside">
                    <li className="pl-2"><strong>Start a new conversation in your project:</strong> Click into your project, start a new chat</li>
                    <li className="pl-2">
                      <strong>Use your trigger phrase:</strong>
                      <ul className="mt-2 ml-6 space-y-1 text-muted-foreground list-disc">
                        <li>"Generate this week's AcreHedge report"</li>
                        <li>"Run the weekly commodity workflow"</li>
                        <li>Or whatever trigger you defined</li>
                      </ul>
                    </li>
                    <li className="pl-2"><strong>Observe Claude's execution:</strong> Watch how it interprets instructions, accesses sources, review output quality</li>
                    <li className="pl-2"><strong>Provide feedback in real-time:</strong> If something's off, correct it immediately</li>
                    <li className="pl-2"><strong>Save successful outputs:</strong> Download good outputs and add them to your knowledge base as examples</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Prompting Best Practices:</h4>
                  <ComparisonTable
                    headers={["Instead of...", "Try..."]}
                    rows={[
                      ["\"Make a report\"", "\"Generate this week's report following the workflow\""],
                      ["\"Fix it\"", "\"The soybean price is wrong—it should be $12.45\""],
                      ["\"Do better\"", "\"Add more analysis on the corn/soybean spread\""]
                    ]}
                  />
                </div>

                <Checkpoint>You've executed the workflow at least once and have output to review.</Checkpoint>
              </div>
            </TutorialStep>

            {/* Step 12: Iterate and Create New Skills */}
            <TutorialStep
              stepNumber={12}
              title="Iterate and Create New Skills"
              description="Refine your workflow and build custom skills"
              isCompleted={completedSteps.includes(12)}
              isActive={activeStep === 12}
              onToggleComplete={() => toggleStepComplete(12)}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <RefreshCw className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-blue-600">What This Step Does:</span>
                    <p className="text-muted-foreground mt-1">Continuous improvement is the key to powerful AI workflows. You'll refine based on results and create new skills to handle gaps.</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">1. Create a Scorecard:</h4>
                  <ComparisonTable
                    headers={["Metric", "Target", "Actual", "Notes"]}
                    rows={[
                      ["Accuracy", "100%", "95%", "Missed one price"],
                      ["Completeness", "All sections", "All sections", <Check className="h-4 w-4 text-green-500" />],
                      ["Time to complete", "< 10 min", "8 min", <Check className="h-4 w-4 text-green-500" />],
                      ["Formatting", "Match template", "Minor issues", "Header font"],
                      ["Actionability", "3+ insights", "4 insights", <Check className="h-4 w-4 text-green-500" />]
                    ]}
                  />
                </div>

                <div>
                  <h4 className="font-semibold mb-3">2. Identify improvement opportunities:</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
                    <li>What did Claude get wrong?</li>
                    <li>What did you have to correct manually?</li>
                    <li>What's missing from the output?</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">3. Update workflow instructions:</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
                    <li>Add clarifications where Claude struggled</li>
                    <li>Include examples of correct output</li>
                    <li>Add error handling for edge cases</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">4. Create new skills for repeated needs:</h4>
                  <p className="text-muted-foreground mb-3">If you find yourself giving the same correction multiple times, create a skill:</p>
                  <CodeBlock>{`---
name: price-verification
description: Verifies commodity prices against multiple sources
---

When gathering commodity prices:
1. Check at least 2 sources
2. Use the most recent available
3. Note the timestamp
4. Flag any discrepancies > 1%`}</CodeBlock>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">New Skill Template:</h4>
                  <CodeBlock>{`---
name: [skill-name]
description: [One-line description for when to use this skill]
---

# [Skill Name]

## When to Use
[Trigger conditions or phrases]

## Process
[Step-by-step instructions]

## Output Format
[Expected deliverable format]

## Quality Criteria
[How to verify correctness]

## Examples
[Good output examples]`}</CodeBlock>
                </div>

                <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg">
                  <h4 className="font-semibold mb-2">The Improvement Cycle:</h4>
                  <p className="text-center text-muted-foreground font-mono">
                    Execute → Score → Identify Gaps → Update Instructions → Execute Again ↻
                  </p>
                </div>

                <Checkpoint>You have a scorecard, at least one identified improvement, and understand how to create new skills.</Checkpoint>
              </div>
            </TutorialStep>
          </div>
        </div>
      </section>

      {/* Key Concepts Summary */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Summary
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Key Concepts</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {keyConcepts.map((concept, i) => (
              <Card key={i} className="p-4">
                <h3 className="font-semibold text-primary mb-1">{concept.term}</h3>
                <p className="text-sm text-muted-foreground">{concept.definition}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Next Steps</h2>
            <p className="text-xl text-muted-foreground">Keep building on your foundation</p>
          </div>

          <Card className="p-8">
            <ul className="space-y-4">
              {[
                "Build 3 workflows for your most common tasks",
                "Create 1 custom skill based on your first workflow's gaps",
                "Share your skills with your team or AI SOS community",
                "Review weekly using scorecards to drive improvements"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="p-1 bg-primary/10 rounded-full mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Troubleshooting</h2>
            <p className="text-xl text-muted-foreground">Common issues and solutions</p>
          </div>

          <ComparisonTable
            headers={["Problem", "Solution"]}
            rows={[
              ["Claude ignores instructions", "Make instructions more specific and explicit"],
              ["MCP connection fails", "Re-authorize the connection in Settings"],
              ["Output quality varies", "Add examples of good output to project knowledge"],
              ["Workflow takes too long", "Break into smaller, focused workflows"],
              ["Skills conflict", "Use project-specific skills instead of global"]
            ]}
          />
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Additional Resources</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <a href="https://docs.anthropic.com" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Claude Documentation</h3>
                    <p className="text-sm text-muted-foreground">Official guides and API reference</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto" />
                </div>
              </Card>
            </a>
            <a href="https://docs.anthropic.com/en/docs/mcp" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Link2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">MCP Setup Guide</h3>
                    <p className="text-sm text-muted-foreground">Model Context Protocol documentation</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto" />
                </div>
              </Card>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiSOSWorkspace;
