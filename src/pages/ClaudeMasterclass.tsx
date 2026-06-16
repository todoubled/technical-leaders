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
  Link2
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

type ActionStep = string | { text: string; subSteps: string[] };

interface Step {
  title: string;
  description: string;
  whatThisStepDoes: string;
  actionSteps: ActionStep[];
  table?: { headers: string[]; rows: string[][] };
  codeBlock?: { caption?: string; code: string };
  checkpoint: string;
}

interface Module {
  id: string;
  title: string;
  intro: string;
  steps: Step[];
}

const MODULES: Module[] = [
  {
    id: "module-1",
    title: "Module 1: Claude Chat (Beginner)",
    intro:
      "This is the version most people meet first. It is a website (claude.ai) and a desktop app where you type questions and Claude types back. By the end of this module you can sign in, hold a useful conversation, share files, and keep your work organized.",
    steps: [
      {
        title: "Meet Claude and sign in",
        description: "Create an account and understand free versus Pro.",
        whatThisStepDoes:
          "Claude is an AI assistant made by Anthropic. You talk to it in plain language, the same way you would message a knowledgeable coworker, and it answers. There are two tiers. Free works for everyday questions. Pro is the paid plan that gives you more usage during busy periods, access to the strongest models, and the Projects feature you will use later.",
        actionSteps: [
          "Open a web browser and go to claude.ai.",
          "Click \"Sign up\" and register with an email address or a Google account.",
          "Confirm your email if asked, then sign in.",
          "Look at the plan options. Start on Free. You can upgrade to Pro later from Settings if you find yourself running into limits."
        ],
        table: {
          headers: ["Question", "Free", "Pro"],
          rows: [
            ["Cost", "Nothing", "A monthly fee"],
            ["Usage during busy times", "Lower limits", "Higher limits"],
            ["Access to the strongest models", "Limited", "Full"],
            ["Projects feature", "No", "Yes"]
          ]
        },
        checkpoint:
          "You are signed in and looking at an empty chat box with a cursor ready for your first message."
      },
      {
        title: "Take a tour of the chat screen",
        description: "Learn the three parts of the interface you will use most.",
        whatThisStepDoes:
          "The screen has a few simple parts, and knowing them removes most of the early confusion. The main area is where the conversation happens. The sidebar on the left holds your past conversations so you can return to them. A \"new chat\" button starts a fresh, blank conversation with no earlier context carried over.",
        actionSteps: [
          "Find the large text box. This is where you type. Press Enter to send.",
          "Find the sidebar on the left. Each line there is a past conversation. Click one to reopen it.",
          "Find the \"New chat\" button (usually top left). Click it to start clean.",
          "Start a new chat for each separate topic. It keeps Claude focused and your history readable."
        ],
        checkpoint:
          "You can start a new chat, send a message, and reopen an earlier conversation from the sidebar."
      },
      {
        title: "Write a prompt that gets a good answer",
        description: "Three habits that turn vague replies into useful ones.",
        whatThisStepDoes:
          "A prompt is just the message you send Claude. The quality of the answer follows the quality of the ask. Three things do most of the work: say clearly what you want, give the background Claude cannot see, and show an example of the result you have in mind. Without context, Claude has to guess. With it, the reply lands much closer to what you needed.",
        actionSteps: [
          "State the task plainly. \"Write a thank-you email to a client\" beats \"help with email.\"",
          "Add the context Claude lacks. Who is the client, what are you thanking them for, what tone fits.",
          "Show an example if you have one. Paste an email you liked and say \"match this style.\"",
          "If the first answer misses, say what was off and ask for a revision. The conversation remembers what came before."
        ],
        codeBlock: {
          caption: "Example prompt to copy and adapt",
          code: `Write a short thank-you email to a client named Dana.
Context: Dana referred two new customers to us this month.
Tone: warm but professional, no more than four sentences.
Here is an email whose style I like, please match it:
[paste your example here]`
        },
        checkpoint:
          "You wrote a prompt with a clear ask plus context, and the reply was close enough to edit rather than restart."
      },
      {
        title: "Share files and images, then ask about them",
        description: "Upload a document or photo and have Claude work from it.",
        whatThisStepDoes:
          "You are not limited to typing. You can attach files (a PDF, a spreadsheet, a Word document) and images (a screenshot, a photo of a page) and ask Claude questions about what is inside. This is how you get a summary of a long report, a plain explanation of a contract, or the numbers pulled out of a photographed receipt.",
        actionSteps: [
          "Click the attachment icon (a paperclip or plus) near the text box.",
          "Choose a file or image from your computer.",
          "In the same message, ask your question. For example, \"Summarize the main points of this PDF in five bullets.\"",
          "Ask follow-ups in the same chat. Claude keeps the file in mind for the rest of the conversation."
        ],
        checkpoint:
          "You uploaded one file or image and got an answer that clearly used its actual contents."
      },
      {
        title: "Use Artifacts for documents you can see and edit",
        description: "When Claude builds something, it opens in a panel beside the chat.",
        whatThisStepDoes:
          "An Artifact is a workspace that appears next to the conversation when Claude makes something substantial: a document, a table, a checklist, or a small interactive app. Instead of the result scrolling away in the chat, it sits in its own panel where you can read it, copy it, and ask for changes that update it in place. Think of the chat as the discussion and the Artifact as the thing you are actually producing.",
        actionSteps: [
          "Ask for something concrete, like \"Make a one-page packing checklist for a winter trip.\"",
          "Watch for a panel to open on the right. That is the Artifact.",
          "Request edits in the chat. \"Add a section for ski gear.\" The panel updates.",
          "Use the copy or download button in the panel when you are happy with it."
        ],
        checkpoint:
          "You asked Claude to build something, a side panel opened, and one follow-up request changed what it showed."
      },
      {
        title: "Set up a Project and custom instructions",
        description: "A reusable space that remembers your context and preferences.",
        whatThisStepDoes:
          "A Project (available on Pro) is a folder for related conversations. You can add reference files once and write custom instructions, which are standing notes about who you are and how you like answers. Every chat inside that Project starts already knowing them, so you stop re-explaining yourself. A freelancer might keep a \"Client Work\" Project with their bios, rates, and preferred tone loaded in.",
        actionSteps: [
          "In the sidebar, find Projects and click \"New Project.\" Give it a name.",
          "Add knowledge by uploading a few reference files (a style guide, past examples, key facts).",
          "Write custom instructions. State your role, your audience, and how you want Claude to respond.",
          "Start chats inside the Project. They use the files and instructions automatically."
        ],
        codeBlock: {
          caption: "Example custom instructions to copy and adapt",
          code: `About me: I run a small bakery and write our weekly newsletter.
Audience: local customers, friendly and casual.
How to respond: short paragraphs, no jargon, warm tone.
Always suggest one seasonal item to feature.`
        },
        checkpoint:
          "You have a Project with at least one reference file and custom instructions, and a chat inside it reflects them without being reminded."
      },
      {
        title: "Understand memory and history",
        description: "What Claude remembers between chats, and how to revisit past work.",
        whatThisStepDoes:
          "Two different things are easy to mix up. History is the list of your past conversations in the sidebar, which you can reopen anytime. Memory is a newer ability where Claude can carry helpful details forward across chats so you repeat yourself less. History is always there. Memory you can review and control in settings, which the next step covers.",
        actionSteps: [
          "Scroll the sidebar to see your history. Click any conversation to continue it.",
          "Use the search box (if shown) to find an old chat by a word you remember.",
          "Open Settings and look for a Memory section to see what, if anything, Claude has retained.",
          "Rename or delete old conversations to keep the sidebar tidy."
        ],
        checkpoint:
          "You can tell the difference between your conversation history and Claude's memory, and you found where each one lives."
      },
      {
        title: "Check your privacy settings",
        description: "Decide what is kept, what trains models, and what you share.",
        whatThisStepDoes:
          "You control a few important switches. You can delete conversations from your history. You can choose whether your chats are used to improve Claude's models through a training setting. And it is on you to decide what is safe to paste in. These choices are yours to make, and knowing where they live matters more than any single default.",
        actionSteps: [
          "Open Settings, usually under your name or initials in a corner.",
          "Find the privacy or data controls. Review the training toggle and set it to your preference.",
          "Learn how to delete a single conversation and how to clear history.",
          "Make a personal rule about sensitive data. Avoid pasting passwords, full account numbers, or anything you could not share with a contractor."
        ],
        table: {
          headers: ["Setting", "What it controls", "A safe starting point"],
          rows: [
            ["Conversation history", "Whether past chats are saved", "Keep on so you can return to work"],
            ["Training toggle", "Whether your chats help improve models", "Your choice, off if you handle private material"],
            ["What you paste", "The information you hand Claude", "Skip passwords and full account numbers"]
          ]
        },
        checkpoint:
          "You found your privacy settings, set the training toggle deliberately, and know how to delete a conversation."
      }
    ]
  },
  {
    id: "module-2",
    title: "Module 2: Claude Cowork (Intermediate)",
    intro:
      "Cowork is not a separate product. It is the Claude desktop app set up to do real work: stronger reasoning turned on, safe connections to your tools like Gmail and Calendar, specialized instruction sets called Skills, and Projects that run start-to-finish workflows. This module takes you from a chat assistant to something that completes tasks. Work through the steps in order, since each one builds on the last.",
    steps: [
      {
        title: "Download the Skill Library",
        description: "Get the pre-built instruction sets you will install later.",
        whatThisStepDoes:
          "A Skill is a file of instructions that gives Claude focused expertise for one kind of task, like triaging support tickets or drafting a weekly update. The files end in .md, a plain text format you do not need to understand to use. A Skill Library is a bundle of these ready-made files. Downloading the library now means you have proven starting points instead of writing everything from scratch.",
        actionSteps: [
          "Open the Skill Library link provided with this masterclass.",
          "Download the bundle to a folder you can find again, like Documents or Desktop.",
          "If it arrives zipped, unzip it. You should see several files ending in .md.",
          "Leave them there for now. You will install the ones you want in a later step."
        ],
        checkpoint:
          "You have a folder of .md Skill files saved somewhere you can locate."
      },
      {
        title: "Install Claude Desktop and sign in",
        description: "Move from the website to the desktop app, which unlocks more.",
        whatThisStepDoes:
          "The website is fine for chatting, but the desktop app is where the advanced features live. Only the desktop app can connect to your other tools and run the Skills you just downloaded. Installing it is the gateway to everything else in this module.",
        actionSteps: [
          "Go to claude.ai and find the \"Download\" option for the desktop app, or visit the downloads page directly.",
          "Choose the version for your computer (Mac or Windows) and run the installer.",
          "Open the app and sign in with the same account from Module 1.",
          "Confirm you are on Pro. The workflow features below need it."
        ],
        checkpoint:
          "Claude Desktop is open on your computer and you are signed in."
      },
      {
        title: "Turn on stronger reasoning (Atomic Thought)",
        description: "Tell Claude to break problems into small, checkable pieces.",
        whatThisStepDoes:
          "For multi-step work, you want Claude to slow down and reason carefully rather than rush to an answer. This masterclass calls that \"Atomic Thought.\" The idea is simple: Claude breaks a problem into independent pieces it can check one at a time, which catches mistakes a single fast pass would miss. You turn it on through a setting and by asking for it in your instructions.",
        actionSteps: [
          "Open Settings in the desktop app and look for \"Extended thinking\" or a similar reasoning option. Turn it on.",
          "In prompts for complex tasks, add a line like \"Think through this step by step and check each part before moving on.\"",
          "Save this phrasing in your Project instructions later so you do not retype it.",
          "Use it for planning and analysis. For a quick fact, you do not need it."
        ],
        checkpoint:
          "Extended thinking is enabled, and you have a sentence you can drop into prompts to ask for careful, step-by-step reasoning."
      },
      {
        title: "Configure your privacy settings",
        description: "Set history, training, memory, and past-chat search on purpose.",
        whatThisStepDoes:
          "Before you connect real tools and accounts, decide how your data is handled. The desktop app gives you control over saved history, whether chats train models, what Claude remembers, and whether it can search your past conversations. Setting these deliberately now means you connect Gmail or Drive in the next steps with clear expectations.",
        actionSteps: [
          "Open Settings and find the privacy or data controls.",
          "Go down the recommended table below and set each one.",
          "Decide your training toggle based on how sensitive your work is.",
          "Note that memory and past-chat search are conveniences. Turn them on if the time saved is worth it to you."
        ],
        table: {
          headers: ["Setting", "What it does", "Recommended start"],
          rows: [
            ["Conversation history", "Saves chats so you can reopen them", "On"],
            ["Training toggle", "Lets your chats improve models", "Off if you handle client or private data"],
            ["Memory", "Carries useful details across chats", "On for convenience, off for strict privacy"],
            ["Search past chats", "Lets Claude pull from earlier conversations", "On if you reference past work often"]
          ]
        },
        checkpoint:
          "Each of the four settings reflects a choice you made, not just the default."
      },
      {
        title: "Enable Connections (MCP)",
        description: "The step that turns a chatbot into an agent.",
        whatThisStepDoes:
          "This is the heart of Cowork. A Connection uses something called MCP (Model Context Protocol), which is a safe, standard way for Claude to reach an outside tool such as Gmail, Calendar, Google Drive, Linear, or Stripe. You approve each connection, so Claude only touches what you allow. Once connected, Claude can read and act in those tools instead of only talking about them. That shift, from describing work to doing it, is what makes it an agent.",
        actionSteps: [
          "In the desktop app, open Settings and find Connections (sometimes labeled MCP or Connectors).",
          "Browse the available connections. Pick one you actually use, such as Google Calendar.",
          "Click to connect and follow the sign-in prompt. You are granting access through the tool's own secure login.",
          "Confirm it worked by asking Claude something only the connection can answer, like \"What is on my calendar tomorrow?\""
        ],
        checkpoint:
          "At least one connection is active and Claude correctly answered a question using live data from it."
      },
      {
        title: "Turn on Skills and related features",
        description: "Switch on Artifacts, file creation, code execution, and thinking.",
        whatThisStepDoes:
          "A few capabilities power real workflows, and some live behind toggles. Artifacts give you editable documents beside the chat. File creation lets Claude produce actual files you can save. Code execution lets it run small tasks to compute or transform data. Extended thinking is the careful reasoning from earlier. Turning these on now means your Skills have everything they need.",
        actionSteps: [
          "Open Settings and find the features or capabilities area.",
          "Enable Skills, Artifacts, file creation, and code execution.",
          "Confirm extended thinking is still on from Step 11.",
          "If a feature asks for confirmation the first time it runs, that is the safety model working as intended."
        ],
        checkpoint:
          "Skills, Artifacts, file creation, and code execution are all switched on."
      },
      {
        title: "Install your Skills",
        description: "Add Skills globally or, better, to a single Project.",
        whatThisStepDoes:
          "Now you load the .md Skill files from Step 9. You have two choices. Global means a Skill applies everywhere, across all your chats. Per-Project means it applies only inside one Project. Per-Project is recommended because it keeps each workflow self-contained and predictable, so a support Skill does not bleed into your newsletter writing.",
        actionSteps: [
          "Decide which one or two Skills match the workflow you want to build first.",
          "Find where the app lets you add a Skill (in Settings for global, or inside a Project for per-Project).",
          "Add the .md file there. Prefer adding it to a Project.",
          "Keep it focused. Install only the Skills you will use now. You can add more later."
        ],
        checkpoint:
          "At least one Skill is installed, and you know whether it is global or tied to a specific Project."
      },
      {
        title: "Create a new Project",
        description: "Build the container that holds one workflow's instructions and context.",
        whatThisStepDoes:
          "A Project here works like the one in Module 1, but now it anchors a whole workflow. It bundles the instructions, the reference knowledge, and the connections for one job in one place. Think of it as a dedicated workspace: open it and Claude already knows the task, the background, and which tools it may use.",
        actionSteps: [
          "In the desktop app, create a new Project and name it for the job, like \"Weekly Customer Update.\"",
          "Write a short description of what this Project is for.",
          "Add any reference files the workflow needs, such as a template or past examples.",
          "Confirm the Skill from Step 15 is attached to this Project if you chose per-Project."
        ],
        checkpoint:
          "A named Project exists with a clear purpose, its reference files, and its Skill in place."
      },
      {
        title: "Add your workflow's connections to the Project",
        description: "Map each thing the workflow needs to do to a connection.",
        whatThisStepDoes:
          "A workflow usually touches more than one tool. A weekly update might read your calendar, pull notes from Drive, and send an email through Gmail. This step is where you match each need to a connection so Claude can reach everything in one run. Doing it deliberately keeps the workflow from stalling halfway because a tool was not connected.",
        actionSteps: [
          "List what your workflow must do. For example: read this week's meetings, gather project notes, draft and send a summary.",
          "For each item, name the connection it needs (Calendar, Drive, Gmail).",
          "Make sure each of those connections is enabled from Step 13 and available to this Project.",
          "Write the mapping into your notes so the next step's instructions can reference it."
        ],
        table: {
          headers: ["Workflow need", "Connection it uses"],
          rows: [
            ["Read this week's meetings", "Google Calendar"],
            ["Gather project notes", "Google Drive"],
            ["Send the summary", "Gmail"]
          ]
        },
        checkpoint:
          "Every action your workflow needs is matched to a connection that is live and reachable from the Project."
      },
      {
        title: "Write the workflow instructions",
        description: "A clear framework Claude can follow the same way every time.",
        whatThisStepDoes:
          "Instructions are where you turn a vague wish into a repeatable routine. Good ones cover six things: the purpose, the trigger that starts it, the steps in order, the output format you want, quality checks, and what to do when something goes wrong. Spelling these out means Claude runs the workflow consistently instead of improvising. The skeleton below is a starting template you can copy.",
        actionSteps: [
          "Open your Project's instructions area.",
          "Fill in each section of the framework below for your own workflow.",
          "Be specific about the output. State the format, the length, and the tone.",
          "Add quality checks and an error plan so Claude knows how to verify its own work and when to pause and ask you."
        ],
        codeBlock: {
          caption: "Workflow instruction skeleton to copy and fill in",
          code: `Purpose: What this workflow accomplishes and for whom.

Trigger: When I run this (for example, "when I say 'weekly update'").

Steps:
1. Read this week's meetings from Calendar.
2. Pull related notes from the Drive folder named [folder].
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
- If a tool is unreachable or a folder is empty, stop and tell me what is missing.`
        },
        checkpoint:
          "Your Project holds instructions with all six parts, written for your specific workflow."
      },
      {
        title: "Run the workflow and steer it live",
        description: "Trigger it, watch it work, correct it in the moment, save the good results.",
        whatThisStepDoes:
          "Instructions written, now you run it. You start the workflow, watch Claude move through your steps, and step in if something drifts. This is normal and expected on early runs. You are coaching it toward the result you want, and good outputs are worth saving as examples to make future runs even better.",
        actionSteps: [
          "In the Project, give the trigger phrase from your instructions.",
          "Watch each step. When Claude pauses to show a draft, read it.",
          "Correct in plain language. \"The second bullet is about the wrong meeting, fix it.\"",
          "When the result is right, save it. Keep a copy as a reference example in the Project."
        ],
        checkpoint:
          "The workflow ran end to end, you corrected at least one thing in real time, and you saved a good output."
      },
      {
        title: "Iterate and build new Skills",
        description: "Score each run, improve the weak parts, and turn wins into Skills.",
        whatThisStepDoes:
          "The first run is rarely the best one. A simple scorecard tells you what to fix instead of guessing. You rate the run against a few metrics, compare target to actual, and note what to change. When a workflow consistently works well, you can capture it as a new Skill (a fresh .md file) and reuse it elsewhere. This is the loop that compounds.",
        actionSteps: [
          "After a run, fill in the scorecard below.",
          "Pick the lowest-scoring row and adjust your instructions to address it.",
          "Run again and compare. Repeat until the scores hold steady.",
          "Once it is reliable, save the refined instructions as a new Skill file for reuse."
        ],
        table: {
          headers: ["Metric", "Target", "Actual", "Notes"],
          rows: [
            ["Accuracy of the summary", "All points correct", "", "What to fix"],
            ["Format match", "Matches my template", "", "What to fix"],
            ["Time saved", "Faster than by hand", "", "Worth it or not"],
            ["Edits needed", "Minor only", "", "Where it slipped"]
          ]
        },
        checkpoint:
          "You scored a run, made one improvement that raised a score, and know how to save a working workflow as a Skill."
      }
    ]
  },
  {
    id: "module-3",
    title: "Module 3: Claude Code (Advanced)",
    intro:
      "Claude Code is the version of Claude that runs in your computer's terminal and can create files, edit them, and run tasks for you directly on your machine. It sounds technical, and it can be, but plenty of everyday uses need no programming at all. This module eases you in: what it is, when to use it, and a few real tasks you can try safely.",
    steps: [
      {
        title: "Understand what Claude Code is and when to use it",
        description: "A short comparison of Chat, Cowork, and Code.",
        whatThisStepDoes:
          "All three are Claude, with different reach. Chat is conversation in a browser or app. Cowork is the desktop app connected to your online tools, running workflows. Code goes one level deeper: it works directly with the files and folders on your computer, creating and changing them for you. You reach for Code when the job is about files on your machine rather than a conversation or an online tool.",
        actionSteps: [
          "Read the comparison below to place each one.",
          "Notice the dividing line. If the work lives in your computer's folders, Code fits.",
          "For now, just recognize the cases. You do not have to use Code today.",
          "Keep Chat and Cowork for everything they already handle well."
        ],
        table: {
          headers: ["Version", "Where it runs", "Best for"],
          rows: [
            ["Claude Chat", "Browser or app", "Questions, drafts, learning"],
            ["Claude Cowork", "Desktop app with connections", "Workflows across Gmail, Calendar, Drive"],
            ["Claude Code", "Your computer's terminal", "Creating and editing files and folders on your machine"]
          ]
        },
        checkpoint:
          "You can say in one sentence when Code is the right choice instead of Chat or Cowork."
      },
      {
        title: "Know that basic uses do not require programming",
        description: "Reassurance before you open anything unfamiliar.",
        whatThisStepDoes:
          "The name scares people off, and it should not. You talk to Claude Code in plain English, the same as every other version. You can ask it to tidy a folder, rename files, or draft documents without writing a single line of code. Programmers get more out of it, but the front door is open to everyone.",
        actionSteps: [
          "Drop the assumption that you need to code. You do not, for the tasks here.",
          "Plan to type requests in normal sentences, like \"rename these photos by date.\"",
          "Expect Claude Code to explain what it is doing as it goes.",
          "Keep going. The next steps walk you in slowly."
        ],
        checkpoint:
          "You feel ready to try a tool that takes plain-language requests, even though it looks technical."
      },
      {
        title: "Understand what the terminal is",
        description: "One plain paragraph on the black text window.",
        whatThisStepDoes:
          "The terminal is a simple app already on your computer where you type commands as text instead of clicking buttons. It looks like a plain window with a blinking cursor. It has been around since before mouse-driven screens, and it is still here because typing an instruction is sometimes faster and more exact than clicking through menus. Claude Code lives in this window, but you will mostly type ordinary sentences, not cryptic commands.",
        actionSteps: [
          "On a Mac, open the app called Terminal (search for it with Spotlight). On Windows, open Windows Terminal or PowerShell.",
          "Look at the window. The blinking cursor is waiting for input.",
          "Do not type anything risky yet. You are just getting familiar with how it looks.",
          "Close it again if you like. You now know where it is."
        ],
        checkpoint:
          "You opened the terminal, saw the cursor, and understand it is just a text-based way to give your computer instructions."
      },
      {
        title: "Install Claude Code",
        description: "Use the official installer, or npm if you already have Node.",
        whatThisStepDoes:
          "Installing puts Claude Code on your computer so the terminal can run it. There are two paths. The official installer is the simplest and is built for non-technical users. The other path uses a tool called npm, which comes with Node (a free program developers install to run certain software). If you have never heard of Node, use the official installer and skip the npm line entirely.",
        actionSteps: [
          "Go to the official Claude Code download or setup page from Anthropic.",
          "Follow the installer for your computer. This is the recommended path for most people.",
          "Only if you already have Node, you may instead type this in the terminal: npm install -g @anthropic-ai/claude-code",
          "Wait for it to finish. The installer or the command will tell you when it is done."
        ],
        codeBlock: {
          caption: "Optional, only for people who already have Node installed",
          code: `npm install -g @anthropic-ai/claude-code`
        },
        checkpoint:
          "The installer finished without errors, or the npm command reported a successful install."
      },
      {
        title: "Start it for the first time and sign in",
        description: "Launch Claude Code and connect your account.",
        whatThisStepDoes:
          "With it installed, you start Claude Code from the terminal and sign in with the same Claude account you have used all along. The first run usually opens your browser to log in, then hands you back to the terminal. After this, starting it is a one-word command.",
        actionSteps: [
          "Open the terminal.",
          "Type claude and press Enter.",
          "When it prompts you to sign in, follow the link or steps. Log in with your usual account.",
          "Return to the terminal. You should see a prompt where you can type a request."
        ],
        codeBlock: {
          caption: "The command that starts Claude Code",
          code: `claude`
        },
        checkpoint:
          "Claude Code is running in your terminal, you are signed in, and it is waiting for your first request."
      },
      {
        title: "Try a few real, non-technical tasks",
        description: "Three things a non-programmer can actually do today.",
        whatThisStepDoes:
          "This is where it gets concrete. You can ask Claude Code to build a simple one-page website, tidy and rename a messy folder of files, or draft and revise documents that live in a folder. You describe the goal in plain words and let it do the work, reviewing as you go. Start with a practice folder so nothing important is at stake.",
        actionSteps: [
          "Make a new, empty folder for practicing, then point your terminal at it. If unsure how, ask Claude Code: \"How do I move into my practice folder?\"",
          "Try a website: \"Build a simple one-page website for my dog-walking service with my name, services, and a contact email.\"",
          "Try tidying files: \"This folder has photos with messy names. Rename them by the date each was taken.\" Review the proposed names before approving.",
          "Try documents: \"Draft three short blog post outlines in this folder, then revise the second one to be more casual.\""
        ],
        table: {
          headers: ["Task", "What you type", "What you get"],
          rows: [
            ["One-page website", "\"Build a one-page site for my service\"", "A web page file you can open in a browser"],
            ["Tidy a folder", "\"Rename these files by date\"", "Cleanly named files after you approve"],
            ["Draft documents", "\"Draft and revise outlines in this folder\"", "Document files you can edit further"]
          ]
        },
        checkpoint:
          "You completed at least one of the three tasks in a practice folder and saw the result."
      },
      {
        title: "Learn the safety model",
        description: "It asks before acting, and you review changes before they stick.",
        whatThisStepDoes:
          "This is the part that should put you at ease. Claude Code does not silently change your files. It shows you what it intends to do and asks permission first. You see the proposed changes and approve or decline them. Nothing becomes permanent without your say-so, which means you can experiment without fear of breaking things.",
        actionSteps: [
          "When Claude Code proposes an action, read the summary it shows you.",
          "Approve only what you understand and want. Decline or ask questions otherwise.",
          "Review file changes before accepting them, the same way you would proofread an edit.",
          "Keep important work backed up anyway, as a sensible habit for any tool."
        ],
        checkpoint:
          "You saw Claude Code ask for permission before acting and understand that you approve changes before they take effect."
      },
      {
        title: "Know when to graduate and where to get help",
        description: "Signs you are ready for Code, and where to turn when stuck.",
        whatThisStepDoes:
          "You do not need Claude Code on day one. It earns its place when your work moves onto your own computer in volume: lots of files to organize, documents to generate and revise in batches, or a simple site to stand up. When you hit something confusing, the fastest help is often Claude itself, plus Anthropic's official docs and community.",
        actionSteps: [
          "Watch for the signal: repetitive file work on your machine that Chat and Cowork cannot touch.",
          "Start small with the practice tasks before trusting it on real folders.",
          "When stuck, ask Claude Code to explain what it is doing or to suggest the next step.",
          "Keep Anthropic's official documentation and help channels bookmarked for deeper questions."
        ],
        checkpoint:
          "You can name one situation where you would choose Claude Code, and you know two places to get help."
      }
    ]
  }
];

const flatSteps = MODULES.flatMap((module) => module.steps);
const TOTAL_STEPS = flatSteps.length;

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

    <Checkpoint>{step.checkpoint}</Checkpoint>
  </div>
);

const ClaudeMasterclass = () => {
  const [completedSteps, setCompletedSteps] = useState<number[]>(() => {
    const saved = localStorage.getItem('claude-masterclass-progress');
    return saved ? JSON.parse(saved) : [];
  });
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    localStorage.setItem('claude-masterclass-progress', JSON.stringify(completedSteps));
  }, [completedSteps]);

  useEffect(() => {
    trackEvent('Claude Masterclass View', { context: 'tutorial_page' });
  }, []);

  const toggleStepComplete = (stepNumber: number) => {
    setCompletedSteps(prev => {
      if (prev.includes(stepNumber)) {
        return prev.filter(s => s !== stepNumber);
      } else {
        trackEvent('Claude Masterclass Step Completed', { step: stepNumber });
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
    "Sign in to Claude, hold a productive conversation, and write prompts that get usable answers on the first or second try.",
    "Share files and images with Claude and organize ongoing work using Projects, custom instructions, and memory.",
    "Set up the desktop app with safe connections to tools like Gmail and Calendar so Claude can act, not just advise.",
    "Build, run, and improve a repeatable workflow using Skills, connections, and a simple scorecard.",
    "Use Claude Code in the terminal for real non-technical tasks like a one-page website, folder cleanup, and document drafting.",
    "Decide confidently which version of Claude fits a given task, and protect your data with deliberate privacy settings."
  ];

  const keyConcepts = [
    { term: "Prompt", definition: "The message you send Claude. Clear ask plus context plus an example gets the best result." },
    { term: "Artifact", definition: "A panel beside the chat where Claude builds a document, table, or small app you can edit in place." },
    { term: "Project", definition: "A reusable container that bundles instructions, reference files, and (in Cowork) connections for one kind of work." },
    { term: "Skill", definition: "A plain-text (.md) instruction set that gives Claude focused expertise for a specific task." },
    { term: "Connection (MCP)", definition: "A safe, approved link that lets Claude reach an outside tool like Gmail or Drive, turning chat into action." },
    { term: "Terminal", definition: "A text window already on your computer where you type instructions instead of clicking, and where Claude Code runs." },
    { term: "Safety model", definition: "Claude Code shows what it plans to do and waits for your approval before changing anything." }
  ];

  const nextSteps = [
    "Build one real Cowork workflow for a task you repeat weekly, then refine it with the scorecard until edits are minor.",
    "Create a practice folder and complete all three Claude Code tasks: a one-page site, a folder cleanup, and a document draft.",
    "Review your privacy settings across the website, desktop app, and Claude Code so each reflects a choice you made.",
    "Bookmark Anthropic's official documentation and turn your best workflow instructions into a saved Skill you can reuse."
  ];

  const troubleshooting: [string, string][] = [
    ["Claude's answers are vague or off-target.", "Add context and an example to your prompt, then say what was wrong and ask for a revision."],
    ["A Cowork connection will not answer with live data.", "Reopen Connections, confirm it is signed in and enabled for that Project, then reconnect if needed."],
    ["A workflow stops partway through.", "Check that every tool it needs is connected and any referenced folder is not empty, as your error-handling instructions should report."],
    ["The terminal says \"command not found\" when you type claude.", "The install did not finish or needs a restart. Close the terminal, reopen it, and if it persists, run the official installer again."],
    ["Claude Code changed something you did not want.", "Decline the next prompt, ask it to undo or revise, and going forward review each proposed change before approving."]
  ];

  let stepCounter = 0;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Claude Masterclass: Chat, Cowork, and Code"
        description="A step-by-step Claude masterclass for non-technical people. Learn Claude Chat, the agentic Cowork desktop setup, and Claude Code from the ground up."
        keywords={["Claude masterclass", "Claude Chat", "Claude Cowork", "Claude Code", "Claude for beginners", "Claude tutorial", "AI for non-technical teams", "Claude Desktop", "MCP"]}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-16">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4" />
            Step-by-step masterclass
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Claude Masterclass
            </span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground">
              Chat, Cowork, and Code
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Go from never using Claude to comfortable across three products: everyday chat, an agentic desktop setup that runs real work, and Claude Code in your terminal. No coding background needed.
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
              trackEvent('Claude Masterclass Started', { progress: progressPercent });
            }}
          >
            {completedSteps.length > 0 ? 'Continue Masterclass' : 'Start Masterclass'}
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>

          {/* Video Embed */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-border/50">
              <iframe
                src="https://www.youtube.com/embed/2p0Vc3yKyg8"
                title="Claude Masterclass"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
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
                  <span>A computer with internet access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>A Claude account (free to start; Pro unlocks Projects and the Cowork features in Module 2)</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Masterclass Steps</h2>
            <p className="text-xl text-muted-foreground">Work through three modules at your own pace</p>
          </div>

          <div className="space-y-16">
            {MODULES.map((module) => (
              <div key={module.id}>
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3">{module.title}</h3>
                  <p className="text-muted-foreground">{module.intro}</p>
                </div>

                <div className="space-y-4">
                  {module.steps.map((step) => {
                    stepCounter += 1;
                    const stepNumber = stepCounter;
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
            ))}
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
            <p className="text-xl text-muted-foreground">Common issues and solutions</p>
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

export default ClaudeMasterclass;
