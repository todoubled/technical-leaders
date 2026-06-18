import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Brain,
  Target,
  Sparkles,
  ChevronRight,
  ChevronDown,
  Check,
  CheckCircle2,
  BookOpen,
  Copy,
  ExternalLink,
  Link2,
  AlertTriangle
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

const CopyLink = ({ id, label = 'Copy link', className = '' }: { id: string; label?: string; className?: string }) => {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    window.history.replaceState(null, '', `#${id}`);
    navigator.clipboard?.writeText(url).then(() => {
      setCopied(true);
      trackEvent('Copilot Cowork Link Copied', { target: id });
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      type="button"
      onClick={copyLink}
      aria-label="Copy link to this step"
      className={`inline-flex flex-shrink-0 items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors ${className}`}
    >
      {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
      {copied ? 'Copied!' : label}
    </button>
  );
};

const TutorialStep = ({ stepNumber, title, description, isCompleted, isActive, onToggleComplete, children }: StepProps) => {
  const [isExpanded, setIsExpanded] = useState(isActive);

  useEffect(() => {
    if (isActive) setIsExpanded(true);
  }, [isActive]);

  return (
    <div id={`step-${stepNumber}`} className={`scroll-mt-24 border rounded-lg transition-all duration-300 ${isCompleted ? 'border-green-500/50 bg-green-500/5' : isActive ? 'border-primary/50 bg-primary/5' : 'border-border'}`}>
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
            <CopyLink id={`step-${stepNumber}`} />
          </div>
        </div>
      )}
    </div>
  );
};

const CodeBlock = ({ children }: { children: string }) => {
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

const VerifyNote = ({ children }: { children: string }) => (
  <div className="flex items-start gap-3 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
    <div>
      <span className="font-semibold text-amber-600">Verify:</span>
      <span className="text-muted-foreground ml-2">{children}</span>
    </div>
  </div>
);

type ActionStep = string | { text: string; subSteps: string[] };

interface Step {
  title: string;
  description: string;
  whatThisStepDoes: string;
  actionSteps: ActionStep[];
  table?: { headers: string[]; rows: string[][] };
  codeBlock?: { caption?: string; code: string };
  links?: { href: string; label: string; eventName?: string }[];
  verify?: string;
  checkpoint: string;
}

const STEPS: Step[] = [
  {
    title: "Confirm your Copilot license and where to sign in",
    description: "Tell apart free Copilot from the paid Microsoft 365 Copilot that reads your work.",
    whatThisStepDoes:
      "There are two products with the Copilot name, and the difference decides everything that follows. Free Copilot at copilot.microsoft.com is a general chatbot. It does not see your email, files, or meetings. Microsoft 365 Copilot is the paid version your company adds on top of your Microsoft 365 subscription, and it can work across your Outlook, Teams, OneDrive, and Office files. Every workflow in this tutorial needs the paid Microsoft 365 Copilot, so the first job is to confirm you have it.",
    actionSteps: [
      "Open a browser and go to m365.cloud.microsoft. Sign in with your work or school account.",
      "Look for Copilot in the app. If you can ask it about your own email or a recent document and it answers from real content, you have the paid license.",
      "If Copilot only chats and cannot see your work, you are likely on the free version. Ask your IT admin whether a Microsoft 365 Copilot license is available to you.",
      "Note that the license is a separate add-on. Having Microsoft 365 alone does not include it."
    ],
    table: {
      headers: ["Question", "Free Copilot", "Microsoft 365 Copilot"],
      rows: [
        ["Where you find it", "copilot.microsoft.com", "m365.cloud.microsoft and Office apps"],
        ["Cost", "Free", "Paid add-on to Microsoft 365"],
        ["Reads your work email and files", "No", "Yes"],
        ["Runs the workflows in this tutorial", "No", "Yes"]
      ]
    },
    links: [
      { href: "https://m365.cloud.microsoft", label: "Open Microsoft 365 Copilot", eventName: "Copilot Cowork Link Sign In" },
      { href: "https://www.microsoft.com/en-us/microsoft-365-copilot/pricing", label: "Compare Copilot plans", eventName: "Copilot Cowork Link Pricing" }
    ],
    checkpoint:
      "You are signed in to Microsoft 365 Copilot and have confirmed it can see your real work content, which means you are on the paid license."
  },
  {
    title: "Install the Microsoft 365 Copilot app",
    description: "Move from the browser to the app so Copilot sits next to your work.",
    whatThisStepDoes:
      "The browser version is fine for trying things, but the desktop and mobile apps put Copilot where you already work. The Microsoft 365 Copilot app runs on Windows, Mac, iPhone, and Android, and it brings your files, chats, and Copilot into one place. Inside Office apps like Word, Excel, and Outlook, Copilot also shows up directly so you can use it without leaving the document.",
    actionSteps: [
      "Open the official download page and pick the version for your device.",
      "Install it the same way you install any other app, then open it.",
      "Sign in with the same work or school account from the previous step.",
      "Notice that Copilot also appears inside Word, Excel, PowerPoint, Outlook, and Teams once your license is active."
    ],
    links: [
      { href: "https://www.microsoft.com/en-us/microsoft-365-copilot/download-copilot-app", label: "Get the Microsoft 365 Copilot app", eventName: "Copilot Cowork Link Download App" }
    ],
    checkpoint:
      "The Microsoft 365 Copilot app is open on your device and signed in to your work account."
  },
  {
    title: "Understand how Copilot reaches your Microsoft 365 data",
    description: "The grounding that makes Copilot act on your real work, not just chat.",
    whatThisStepDoes:
      "With the paid license, Copilot reaches your Microsoft 365 data through something Microsoft calls Microsoft Graph. That means it can already read across your Outlook mail, Teams chats, OneDrive and SharePoint files, and your Word, Excel, and PowerPoint documents, with no setup. It only ever sees what you already have permission to see, so it cannot reach a file or inbox that is not yours.",
    actionSteps: [
      "Open Copilot and ask it something only your work data can answer, like \"Summarize the emails I got this week about the budget.\"",
      "Try a file question, like \"Find the latest version of the onboarding deck in my files and list its main sections.\"",
      "Notice that you did not connect anything. The license grants this access through Microsoft Graph automatically.",
      "Remember the limit: Copilot can only reach content you are already allowed to open."
    ],
    table: {
      headers: ["You want Copilot to use", "Where it reads from"],
      rows: [
        ["Your email", "Outlook"],
        ["Your chats and meetings", "Teams"],
        ["Your documents and spreadsheets", "OneDrive and SharePoint"],
        ["A specific Office file", "Word, Excel, or PowerPoint"]
      ]
    },
    checkpoint:
      "Copilot answered at least one question using your real email or files, and you understand that this access comes with the license rather than a manual connection."
  },
  {
    title: "Reach an outside tool with a connector or agent",
    description: "Go beyond Microsoft 365 to tools like Salesforce or ServiceNow.",
    whatThisStepDoes:
      "Microsoft 365 data is automatic, but a lot of work lives in other tools. Copilot reaches those through connectors and agents. A Copilot connector links an outside source like Salesforce, ServiceNow, or Confluence so Copilot can pull from it. An agent is a focused helper that can use those connections to do a specific job. Setting up a new connector is usually an admin task, so for most people this step is about finding which connections your company has already turned on and using them.",
    actionSteps: [
      "In Copilot, look for agents or connected sources, often shown near the prompt box or in a side panel.",
      "Check which outside tools are already available to you. Common ones are Salesforce, ServiceNow, and Confluence.",
      "If a tool you need is missing, ask your IT admin whether a connector for it can be enabled. New connectors are typically set up by admins.",
      "Try a question against a connection that is already on, like asking an agent about records from your CRM."
    ],
    verify:
      "Which connectors and agents are available depends entirely on what your organization has enabled. Confirm your own tenant's list before following the examples, since names like Salesforce or ServiceNow are illustrations, not guarantees. Microsoft Copilot also supports the Model Context Protocol (MCP) for custom connections, but that is set up by an admin or developer in Copilot Studio, not by an end user.",
    links: [
      { href: "https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/overview-copilot-connector", label: "About Copilot connectors", eventName: "Copilot Cowork Link Connectors" }
    ],
    checkpoint:
      "You found where Copilot lists its agents and connected tools, and you know that adding a new outside connection is usually an admin task."
  },
  {
    title: "Turn on deeper reasoning when a task needs it",
    description: "Use Think Deeper, and the Researcher and Analyst agents, for harder work.",
    whatThisStepDoes:
      "For quick questions, Copilot answers right away. For multi-step thinking, you want it to slow down. Think Deeper is a mode that takes a little longer to reason through a harder problem before answering. For bigger jobs, Microsoft 365 Copilot also includes two specialized helpers: Researcher, which works through complex, multi-source research, and Analyst, which works through data like a data scientist and can show you the steps it took. You reach for these when the task is analysis or planning, not a simple lookup.",
    actionSteps: [
      "In a Copilot chat, look for a Think Deeper option among the conversation modes and turn it on for a complex question.",
      "Give it something that benefits from careful thinking, like \"Compare these three vendor proposals and lay out the trade-offs.\"",
      "For a heavier research or data task, look for the Researcher or Analyst agents in Microsoft 365 Copilot and try one.",
      "Use plain reasoning for quick facts. Save Think Deeper, Researcher, and Analyst for work that has several moving parts."
    ],
    verify:
      "Think Deeper, Researcher, and Analyst are real features, but the exact labels, where they appear, and any monthly usage limits change often and can differ by license. Confirm what your account actually shows before relying on a specific name.",
    checkpoint:
      "You ran one task using Think Deeper or one of the reasoning agents and saw it work through the problem more carefully than a normal reply."
  },
  {
    title: "Set your privacy and data preferences",
    description: "Decide history, memory, and what is safe to share before you go deeper.",
    whatThisStepDoes:
      "Before you build workflows on top of your real data, set your data preferences on purpose. Microsoft's commitment for the paid commercial service is that your prompts and work data are not used to train its underlying models, and that your data stays inside your organization's boundary. On top of that, you control a few switches: whether Copilot keeps a memory of useful details about you, and what stays in your chat history. Knowing where these live matters more than any single default.",
    actionSteps: [
      "Open Copilot's settings, usually under your account or profile.",
      "Find the memory or personalization control and decide whether you want Copilot to remember details across chats. You can turn it off.",
      "Learn how to view and delete your Copilot chat history, and note the option to start a temporary chat that is not saved.",
      "Make a personal rule about sensitive data. Even with strong protections, avoid pasting passwords or anything you could not share with a contractor."
    ],
    table: {
      headers: ["Setting", "What it controls", "A safe starting point"],
      rows: [
        ["Memory and personalization", "Whether Copilot remembers details about you across chats", "Your choice, off for strict privacy"],
        ["Chat history", "Whether past chats are saved and searchable", "Keep on so you can return to work"],
        ["Temporary chat", "A one-off chat that is not saved or personalized", "Use it for sensitive one-offs"],
        ["What you paste", "The information you hand Copilot", "Skip passwords and full account numbers"]
      ]
    },
    verify:
      "Microsoft's no-training commitment and Enterprise Data Protection apply to the paid commercial Microsoft 365 Copilot. Your organization's admin can also tighten or change these controls, so confirm your own settings and any company policy rather than assuming the defaults.",
    links: [
      { href: "https://learn.microsoft.com/en-us/copilot/microsoft-365/enterprise-data-protection", label: "How Copilot protects your data", eventName: "Copilot Cowork Link Privacy" }
    ],
    checkpoint:
      "Memory, history, and your sensitive-data rule each reflect a choice you made, not just the default."
  },
  {
    title: "Save reusable prompts in the Prompt Gallery",
    description: "Capture the instructions you reuse so you stop rewriting them.",
    whatThisStepDoes:
      "A good prompt is worth keeping. The Copilot Prompt Gallery is a built-in catalog of prompts: ready-made ones from Microsoft, plus ones you write and save yourself. Saving a prompt means the next time you need that same task, you open it and run it instead of typing it from memory. You can also share a prompt with your team so everyone runs the workflow the same way. This is the closest Copilot has to a reusable instruction set, and it is the building block for the workflow you will write later.",
    actionSteps: [
      "In Copilot, open the Prompt Gallery, usually from an icon near the prompt box or from the suggested prompts.",
      "Browse the Microsoft-provided prompts to see the format, then write one of your own for a task you repeat.",
      "Save it, often with a bookmark or save icon, so it is there next time.",
      "If your team would benefit, share the prompt so everyone uses the same wording."
    ],
    verify:
      "Microsoft 365 Copilot has no direct match for a downloadable file-based skill library. Saved prompts in the Prompt Gallery are the closest honest analog. The Prompt Gallery is reached from inside Copilot Chat, and the public prompt page has lived at m365.cloud.microsoft/copilot-prompts, but confirm the current entry point in your own app since Microsoft moves it.",
    links: [
      { href: "https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-prompt-gallery", label: "About the Copilot Prompt Gallery", eventName: "Copilot Cowork Link Prompt Gallery" }
    ],
    checkpoint:
      "You saved at least one prompt of your own in the Prompt Gallery and know how to open it again later."
  },
  {
    title: "Build a focused agent without code",
    description: "Turn a repeated task into a helper with its own instructions.",
    whatThisStepDoes:
      "A saved prompt is one instruction. An agent is a step further: a focused helper with its own standing instructions, and optionally its own files and connections, for one kind of job. Microsoft 365 Copilot includes a no-code agent builder where you describe what you want in plain language and it writes the setup for you. There is also an Agent Library of ready-made templates you can start from. You do not need to be technical to make a simple agent this way.",
    actionSteps: [
      "In Microsoft 365 Copilot, look for the option to create an agent, sometimes called the agent builder.",
      "Describe the job in plain English, like \"Help me draft weekly status updates from my meeting notes in a consistent format.\"",
      "Let it generate the agent's name, description, and instructions, then adjust anything that is off.",
      "If you would rather start from a template, browse the Agent Library and customize one that is close to your need."
    ],
    verify:
      "The no-code agent builder, the Agent Library, and what each license tier can build change often. Some agent creation lives in Copilot Studio and may need admin permission. Confirm what your account can actually create before committing to this path.",
    checkpoint:
      "You created one simple agent from a plain-language description, or identified a template in the Agent Library that fits a task you repeat."
  },
  {
    title: "Create a Notebook for one job",
    description: "Build the container that holds one workflow's files, notes, and chat.",
    whatThisStepDoes:
      "A Copilot Notebook is a workspace for a single project. You gather the files, notes, links, and even meeting records that belong to one job into the Notebook, and then you ask Copilot questions grounded in just that set of material. Think of it as a dedicated project folder that Copilot can read and reason over, so its answers stay focused on the work at hand instead of your whole account.",
    actionSteps: [
      "In Microsoft 365 Copilot, find Notebooks and create a new one. Name it for the job, like \"Weekly Customer Update.\"",
      "Add the materials the work needs: a few documents, meeting notes, and any reference links.",
      "Ask Copilot a question inside the Notebook and notice that its answer draws on the items you added.",
      "Keep each Notebook to one job. A separate Notebook per workflow keeps the context clean."
    ],
    verify:
      "Copilot Notebooks needs the Microsoft 365 Copilot license and a OneDrive site, and its features are expanding quickly. Confirm Notebooks is available in your account and behaves as described before building a workflow around it.",
    links: [
      { href: "https://support.microsoft.com/en-us/microsoft-365-copilot/get-started-with-microsoft-365-copilot-notebooks", label: "Get started with Copilot Notebooks", eventName: "Copilot Cowork Link Notebooks" }
    ],
    checkpoint:
      "A named Notebook exists with its reference files and notes inside, and a question asked in it drew on that material."
  },
  {
    title: "Plan which sources your workflow touches",
    description: "Map each thing the workflow needs to do to where Copilot gets it.",
    whatThisStepDoes:
      "A workflow usually pulls from more than one place. A weekly update might read this week's meetings from your calendar, gather notes from your files, and draft an email to send in Outlook. This step is where you list what the workflow must do and match each part to its source, so nothing stalls because a needed item was not in reach. With Microsoft 365 data this is mostly already available, so the real work is making sure the right files and notes are in your Notebook and any outside tool is connected.",
    actionSteps: [
      "List what your workflow must do, in order. For example: read this week's meetings, gather related notes, draft and send a summary.",
      "For each item, name where Copilot gets it: your calendar in Outlook, your files in OneDrive, your draft going out through Outlook.",
      "Make sure the files and notes the workflow needs are in the Notebook you just created.",
      "If a step needs an outside tool, confirm its connector or agent is available to you from the earlier step."
    ],
    table: {
      headers: ["Workflow need", "Where Copilot gets it"],
      rows: [
        ["Read this week's meetings", "Outlook calendar"],
        ["Gather related notes", "OneDrive and your Notebook"],
        ["Send the summary", "Outlook"]
      ]
    },
    checkpoint:
      "Every action your workflow needs is matched to a source, and the files and notes it depends on are in your Notebook."
  },
  {
    title: "Write the workflow instructions",
    description: "A clear framework Copilot can follow the same way every time.",
    whatThisStepDoes:
      "Instructions turn a vague wish into a repeatable routine. Good ones cover six things: the purpose, the trigger that starts it, the steps in order, the output format you want, quality checks, and what to do when something goes wrong. Spelling these out means Copilot runs the workflow consistently instead of improvising. You can paste this into a saved prompt for a quick routine, or into an agent's instructions for something you run often. The skeleton below is a starting template you can copy.",
    actionSteps: [
      "Open the place that will hold the instructions: a saved prompt for a simple routine, or your agent's instructions for a recurring one.",
      "Fill in each section of the framework below for your own workflow.",
      "Be specific about the output. State the format, the length, and the tone.",
      "Add quality checks and an error plan so Copilot knows how to check its own work and when to pause and ask you."
    ],
    codeBlock: {
      caption: "Workflow instruction skeleton to copy and fill in",
      code: `Purpose: What this workflow accomplishes and for whom.

Trigger: When I run this (for example, "when I say 'weekly update'").

Steps:
1. Read this week's meetings from my Outlook calendar.
2. Pull related notes from the files in this Notebook.
3. Draft a summary in the format below.
4. Show me the draft before sending anything.

Output format:
- A subject line.
- Three to five bullet points of progress.
- One short paragraph on next week.

Quality checks:
- Every bullet ties to a real meeting or note.
- No names misspelled.

Error handling:
- If a source is unreachable or a notebook is empty, stop and tell me what is missing.`
    },
    checkpoint:
      "Your prompt or agent holds instructions with all six parts, written for your specific workflow."
  },
  {
    title: "Run the workflow and steer it live",
    description: "Trigger it, watch it work, correct it in the moment, save the good results.",
    whatThisStepDoes:
      "With instructions in place, you run the workflow, watch Copilot move through your steps, and correct anything that drifts. That is expected on early runs. A good output is worth saving as an example so future runs start from a higher bar.",
    actionSteps: [
      "Run the saved prompt or open the agent, then give the trigger from your instructions.",
      "Watch each step. When Copilot shows a draft, read it before letting it go further.",
      "Correct in plain language, like \"The second bullet is about the wrong meeting, fix it.\"",
      "When the result is right, save it. Keep a copy in your Notebook as a reference example."
    ],
    checkpoint:
      "The workflow ran end to end, you corrected at least one thing in real time, and you saved a good output."
  },
  {
    title: "Score each run and improve it",
    description: "Rate the result, fix the weakest part, and lock in what works.",
    whatThisStepDoes:
      "The first run is rarely the best one. A simple scorecard tells you what to fix instead of guessing. You rate the run against a few measures, compare what you wanted to what you got, and note one thing to change. When a workflow reliably works well, save its refined instructions back into your prompt or agent so the improvement carries forward.",
    actionSteps: [
      "After a run, fill in the scorecard below.",
      "Pick the lowest-scoring row and adjust your instructions to address it.",
      "Run again and compare. Repeat until the scores hold steady.",
      "Once it is reliable, save the refined instructions back into your saved prompt or agent so the next run starts there."
    ],
    table: {
      headers: ["Measure", "Target", "Actual", "Notes"],
      rows: [
        ["Accuracy of the summary", "All points correct", "", "What to fix"],
        ["Format match", "Matches my template", "", "What to fix"],
        ["Time saved", "Faster than by hand", "", "Worth it or not"],
        ["Edits needed", "Minor only", "", "Where it slipped"]
      ]
    },
    checkpoint:
      "You scored a run, made one improvement that raised a score, and saved the better version into your prompt or agent."
  }
];

const TOTAL_STEPS = STEPS.length;

const StepBody = ({ step }: { step: Step }) => (
  <div className="space-y-6">
    <div className="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
      <Brain className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
      <div>
        <span className="font-semibold text-blue-600">What this step does:</span>
        <p className="text-muted-foreground mt-1">{step.whatThisStepDoes}</p>
      </div>
    </div>

    <div>
      <h4 className="font-semibold mb-3">Action Steps:</h4>
      <ol className="space-y-4 list-decimal list-inside">
        {step.actionSteps.map((action, i) =>
          typeof action === "string" ? (
            <li key={i} className="pl-2">{action}</li>
          ) : (
            <li key={i} className="pl-2">
              {action.text}
              <ul className="mt-2 ml-6 space-y-1 text-muted-foreground list-disc">
                {action.subSteps.map((sub, j) => (
                  <li key={j}>{sub}</li>
                ))}
              </ul>
            </li>
          )
        )}
      </ol>
    </div>

    {step.table && (
      <ComparisonTable headers={step.table.headers} rows={step.table.rows} />
    )}

    {step.codeBlock && (
      <div>
        {step.codeBlock.caption && (
          <h4 className="font-semibold mb-3">{step.codeBlock.caption}</h4>
        )}
        <CodeBlock>{step.codeBlock.code}</CodeBlock>
      </div>
    )}

    {step.links && (
      <div className="flex flex-wrap gap-3">
        {step.links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => link.eventName && trackEvent(link.eventName)}
            className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground font-semibold px-5 py-3 transition-colors hover:bg-primary/90"
          >
            <ExternalLink className="h-5 w-5" />
            {link.label}
          </a>
        ))}
      </div>
    )}

    {step.verify && <VerifyNote>{step.verify}</VerifyNote>}

    <Checkpoint>{step.checkpoint}</Checkpoint>
  </div>
);

const CopilotCowork = () => {
  const [completedSteps, setCompletedSteps] = useState<number[]>(() => {
    const saved = localStorage.getItem('copilot-cowork-progress');
    return saved ? JSON.parse(saved) : [];
  });
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    localStorage.setItem('copilot-cowork-progress', JSON.stringify(completedSteps));
  }, [completedSteps]);

  useEffect(() => {
    trackEvent('Copilot Cowork View', { context: 'tutorial_page' });
  }, []);

  // Deep links: scroll to a specific step when arriving via a shared link
  // (e.g. /copilot-cowork#step-5) or via back/forward.
  useEffect(() => {
    const scrollToHash = (behavior: ScrollBehavior) => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      // A step is collapsed by default, so expand it before scrolling.
      const stepMatch = id.match(/^step-(\d+)$/);
      if (stepMatch) setActiveStep(Number(stepMatch[1]));
      const el = document.getElementById(id);
      // Defer until after paint so the step sections exist in the DOM.
      if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior }));
    };
    scrollToHash('auto'); // cold load / shared link: jump straight there
    const onHashChange = () => scrollToHash('smooth'); // back/forward
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const toggleStepComplete = (stepNumber: number) => {
    setCompletedSteps(prev => {
      if (prev.includes(stepNumber)) {
        return prev.filter(s => s !== stepNumber);
      } else {
        trackEvent('Copilot Cowork Step Completed', { step: stepNumber });
        const newCompleted = [...prev, stepNumber];
        // Auto-advance to next step
        if (stepNumber < TOTAL_STEPS) {
          setActiveStep(stepNumber + 1);
        }
        return newCompleted;
      }
    });
  };

  const progressPercent = Math.round((completedSteps.length / TOTAL_STEPS) * 100);

  const learningOutcomes = [
    "Tell apart free Copilot from the paid Microsoft 365 Copilot and confirm which one you have.",
    "Set up the Microsoft 365 Copilot app and understand how it reaches your Outlook, Teams, OneDrive, and Office files.",
    "Reach outside tools through connectors and agents, and know which parts need an admin.",
    "Use Think Deeper and the Researcher and Analyst agents for work that has several moving parts.",
    "Save reusable prompts and build a simple no-code agent for tasks you repeat.",
    "Bundle one job's files and notes into a Copilot Notebook and reason over just that material.",
    "Write, run, and improve a repeatable workflow with clear instructions and a simple scorecard.",
    "Set your privacy, memory, and history controls on purpose before working with real data."
  ];

  const keyConcepts = [
    { term: "Microsoft 365 Copilot", definition: "The paid Copilot that works across your Outlook, Teams, OneDrive, and Office files, separate from the free chatbot at copilot.microsoft.com." },
    { term: "Microsoft Graph", definition: "The connection that lets Copilot reach your Microsoft 365 data automatically, limited to what you already have permission to see." },
    { term: "Copilot connector", definition: "A link to an outside source like Salesforce or ServiceNow, usually set up by an admin, so Copilot can pull from it." },
    { term: "Agent", definition: "A focused helper with its own instructions, and optionally its own files and connections, for one kind of job." },
    { term: "Prompt Gallery", definition: "A built-in catalog of prompts you can save, reuse, and share with your team, the closest Copilot has to a reusable instruction set." },
    { term: "Copilot Notebook", definition: "A workspace that bundles one job's files, notes, and links so Copilot answers from just that material." },
    { term: "Think Deeper", definition: "A mode that takes longer to reason through a harder problem before answering." },
    { term: "Researcher and Analyst", definition: "Specialized agents in Microsoft 365 Copilot for complex research and data analysis." },
    { term: "Enterprise Data Protection", definition: "Microsoft's set of commitments that your work data stays in your organization's boundary and is not used to train its models." },
    { term: "Temporary chat", definition: "A one-off Copilot chat that is not saved to your history or used for personalization." }
  ];

  const nextSteps = [
    "Save three prompts you reuse into the Prompt Gallery and share one with your team.",
    "Build one real workflow for a task you repeat weekly, then refine it with the scorecard until edits are minor.",
    "Create a Notebook for an active project and add its files and notes so Copilot can reason over them.",
    "Try Think Deeper, Researcher, or Analyst on a task that has several moving parts and compare it to a normal reply.",
    "Review your memory and history settings so each reflects a choice you made.",
    "Ask your admin which connectors and agents are available to you, and which could be enabled."
  ];

  const troubleshooting: [string, string][] = [
    ["Copilot only chats and cannot see your work.", "You are likely on free Copilot. Confirm with your admin that a Microsoft 365 Copilot license is assigned to you."],
    ["Copilot cannot find a file or email you expected.", "Check that you have permission to open it yourself, since Copilot can only reach content you already have access to."],
    ["An outside tool like your CRM is not available.", "Connectors are usually set up by an admin. Ask whether the connector for that tool can be enabled for you."],
    ["A workflow stops partway through.", "Confirm the files and notes it needs are in the Notebook and any outside connection is on, as your error-handling instructions should report."],
    ["You cannot find Think Deeper, Researcher, or a feature named here.", "Labels and availability change and can differ by license. Check your account's current options or ask your admin."],
    ["You are unsure whether your data is private.", "For the paid commercial service, your data stays in your organization's boundary and is not used to train models. Review your memory and history settings, and any company policy."]
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Microsoft Copilot Cowork: Agentic Workflows for Non-Technical Teams"
        description="A step-by-step tutorial for setting up agentic desktop workflows in Microsoft 365 Copilot. Learn connectors and agents, Copilot Notebooks, the Prompt Gallery, Think Deeper, and privacy controls, with no coding background needed."
        keywords={["Microsoft Copilot", "Microsoft 365 Copilot", "Copilot agents", "Copilot workflows", "Copilot Notebooks", "Copilot Prompt Gallery", "Copilot connectors", "Think Deeper", "agentic AI", "AI for non-technical teams", "Copilot tutorial", "Copilot Studio"]}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-16">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4" />
            Step-by-step tutorial
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Microsoft Copilot Cowork
            </span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground">
              From chat to agentic workflows
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Move past asking Copilot questions and into repeatable, tool-connected work. This tutorial sets up Microsoft 365 Copilot to act across your Outlook, Teams, and Office files, with connectors, agents, Notebooks, and a workflow you can run again. No coding background needed.
          </p>

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
            <p className="text-sm text-muted-foreground mt-2">{completedSteps.length} of {TOTAL_STEPS} steps completed</p>
          </div>

          <Button
            size="lg"
            className="text-lg px-8 py-6"
            onClick={() => {
              document.getElementById('tutorial-steps')?.scrollIntoView({ behavior: 'smooth' });
              trackEvent('Copilot Cowork Started', { progress: progressPercent });
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
          <div className="space-y-8">
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
                  <span>A computer with internet access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span>A work or school account with a Microsoft 365 Copilot license. The free Copilot at copilot.microsoft.com cannot run these workflows. The first step helps you confirm which one you have.</span>
                    <div className="mt-2">
                      <Button asChild variant="outline" size="sm">
                        <a href="https://m365.cloud.microsoft" target="_blank" rel="noopener noreferrer">
                          Open Microsoft 365 Copilot
                          <ExternalLink />
                        </a>
                      </Button>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Access to an IT admin for your organization, since some setup like new connectors is an admin task</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Willingness to follow along hands-on. No coding experience needed.</span>
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
            <p className="text-xl text-muted-foreground">Work through the steps in order, at your own pace</p>
          </div>

          <div className="space-y-4">
            {STEPS.map((step, index) => {
              const stepNumber = index + 1;
              return (
                <TutorialStep
                  key={stepNumber}
                  stepNumber={stepNumber}
                  title={step.title}
                  description={step.description}
                  isCompleted={completedSteps.includes(stepNumber)}
                  isActive={activeStep === stepNumber}
                  onToggleComplete={() => toggleStepComplete(stepNumber)}
                >
                  <StepBody step={step} />
                </TutorialStep>
              );
            })}
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
            <p className="text-xl text-muted-foreground">Put the skills to work on real tasks</p>
          </div>

          <Card className="p-8">
            <ul className="space-y-4">
              {nextSteps.map((item, i) => (
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
            <p className="text-xl text-muted-foreground">What to check when something does not work</p>
          </div>

          <ComparisonTable
            headers={["Problem", "Solution"]}
            rows={troubleshooting}
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
            <a href="https://support.microsoft.com/en-us/microsoft-365-copilot/get-started-with-microsoft-365-copilot-notebooks" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Copilot Notebooks</h3>
                    <p className="text-sm text-muted-foreground">Microsoft's guide to bundling a project's files and notes</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto" />
                </div>
              </Card>
            </a>
            <a href="https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-prompt-gallery" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Copilot Prompt Gallery</h3>
                    <p className="text-sm text-muted-foreground">Save, reuse, and share prompts across your team</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto" />
                </div>
              </Card>
            </a>
            <a href="https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-mcp" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Link2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Connectors and MCP</h3>
                    <p className="text-sm text-muted-foreground">How agents reach outside tools in Copilot Studio</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto" />
                </div>
              </Card>
            </a>
            <a href="https://learn.microsoft.com/en-us/copilot/microsoft-365/enterprise-data-protection" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Data and Privacy</h3>
                    <p className="text-sm text-muted-foreground">How Microsoft 365 Copilot protects your work data</p>
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

export default CopilotCowork;
