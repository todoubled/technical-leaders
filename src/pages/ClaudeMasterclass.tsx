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
  Download,
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
  examples?: { caption?: string; items: string[] };
  download?: { href: string; label: string; note?: string; eventName?: string };
  links?: { href: string; label: string; eventName?: string }[];
  checkpoint: string;
}

interface Module {
  id: string;
  title: string;
  navLabel: string;
  level: string;
  tagline: string;
  intro: string;
  steps: Step[];
}

const MODULES: Module[] = [
  {
    id: "module-1",
    title: "Module 1: Claude Chat (Beginner)",
    navLabel: "Claude Chat",
    level: "Beginner",
    tagline: "Everyday chat and prompting",
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
        links: [
          { href: "https://claude.ai", label: "Open claude.ai", eventName: "Masterclass Link Claude Chat" }
        ],
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
        title: "Install the Adaptive Reasoning Protocol custom instruction",
        description: "Paste one ready-made instruction that makes Claude pick the right thinking method.",
        whatThisStepDoes:
          "Custom instructions do not have to be about your bio and tone. They can also tell Claude how to think. The Adaptive Reasoning Protocol below is a single instruction you paste once that teaches Claude to size up each request and switch methods automatically: it breaks problems into small, checkable pieces when you ask it to solve or debug, it explains things plainly like a patient teacher when you ask it to learn or understand, and it does both in order when a task needs both. You do not have to remember which mode to ask for; the instruction handles that for you.",
        actionSteps: [
          "Open the custom instructions area, either in a Project (from the previous step) or in your account's settings.",
          "Copy the Adaptive Reasoning Protocol below exactly as written and paste it in.",
          "Save the instruction. Every new chat that uses it will follow the protocol without being reminded.",
          "Test it. Ask Claude to debug something and watch it decompose the problem, then ask it to explain a concept and watch it switch to plain teaching."
        ],
        codeBlock: {
          caption: "Adaptive Reasoning Protocol custom instruction to copy and paste",
          code: `Use the Adaptive Reasoning Protocol:

Assess the request type, then apply the appropriate method:

If solving, analyzing, or debugging → Atom of Thought: Decompose into atomic reasoning units. For each atom:

State the logical component
Validate independence
Verify correctness
Then synthesize atoms into final answer.

If explaining, learning, or teaching → Feynman Loop: Explain as if teaching a curious beginner. For each cycle:

Use a concrete analogy
Flag confusion points
Ask questions that reveal gaps
Then compress into a teachable snapshot.

If both are needed → Chain them: First solve via Atom of Thought, then explain the solution via Feynman Loop.`
        },
        checkpoint:
          "You pasted the Adaptive Reasoning Protocol into your custom instructions, saved it, and saw Claude switch methods on its own across a solving task and an explaining task."
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
    title: "Module 2: Claude for Chrome (Beginner)",
    navLabel: "Claude for Chrome",
    level: "Beginner",
    tagline: "Browser use, with Claude acting on websites",
    intro:
      "Claude for Chrome is a browser extension that lets Claude see the website you have open and take actions on it for you: clicking, typing, and moving between pages while you watch. In plain chat you copy and paste; here Claude works on the live page. Anthropic calls this browser use, and it is a beta feature on paid plans. It sits between everyday chat and the deeper Cowork workflows on purpose, so you get a gentle first taste of Claude taking actions, with you in control the whole way. Because Claude is acting inside your browser, this module gives safety real weight. Work through the steps in order.",
    steps: [
      {
        title: "Understand what Claude for Chrome is and when it helps",
        description: "Browser use lets Claude act on the page in front of you.",
        whatThisStepDoes:
          "Plain Chat is a conversation. You describe a web page or paste text in, and Claude answers in the chat. Claude for Chrome goes a step further: it can see the tab you have open and act on it, clicking buttons, filling fields, and moving between pages the way you would. You reach for it when the work is on a website and copy-paste is tedious, like pulling details off a page into a note or stepping through a form. For a plain question or a draft, regular Chat is still the simpler choice.",
        actionSteps: [
          "Notice the difference. Chat talks about the web. The extension acts on the page you are looking at.",
          "Think of one website task you repeat that involves a lot of clicking or copying.",
          "Keep that task in mind. You will try a safe version of it later in this module.",
          "Reach for plain Chat when you only need an answer or a draft, and for the extension when the work lives on a live page."
        ],
        table: {
          headers: ["You want to", "Reach for"],
          rows: [
            ["Ask a question or draft something", "Plain Claude Chat"],
            ["Summarize the exact page you have open", "Claude for Chrome"],
            ["Pull details off a website into a note", "Claude for Chrome"],
            ["Work with files on your computer", "Claude Code, later in this masterclass"]
          ]
        },
        checkpoint:
          "You can say in one sentence when browser use helps and when plain Chat is the better fit."
      },
      {
        title: "Install the extension and check you can use it",
        description: "Add it from the Chrome Web Store, on a paid plan.",
        whatThisStepDoes:
          "Claude for Chrome is a Chrome extension, so you add it the same way you add any extension, from the Chrome Web Store. Two things to know before you start. It runs in Google Chrome only, not in other browsers or on phones. And it is a beta feature for paid plans (Pro, Max, Team, or Enterprise), so it is not available on the free plan. If you are on Free, you would upgrade first. None of this requires any setup beyond a normal browser extension install.",
        actionSteps: [
          "Confirm you are using Google Chrome on a computer. The extension does not run in other browsers or on mobile.",
          "Confirm you are on a paid Claude plan. Browser use is in beta and not part of the free plan.",
          "Open the Chrome Web Store and search for the Claude extension from Anthropic.",
          "Add it to Chrome and approve the permissions Chrome asks for. Pinning it to the toolbar makes it easy to find."
        ],
        links: [
          { href: "https://chromewebstore.google.com/detail/claude/fcoeoabgfenejglbffodgkkbkcdhcgfn", label: "Get Claude for Chrome", eventName: "Masterclass Link Claude for Chrome" }
        ],
        checkpoint:
          "The Claude extension is installed in Chrome and you can see its icon in the toolbar."
      },
      {
        title: "Sign in and connect your Claude account",
        description: "Open the extension and log in with your usual account.",
        whatThisStepDoes:
          "The extension uses the same Claude account you have used all along. Opening it for the first time walks you through signing in, and after that it stays connected. This is also where you confirm browser use is available to you. If the extension says the feature needs a paid plan, that matches the access limits from the last step rather than anything going wrong.",
        actionSteps: [
          "Click the Claude extension icon in the Chrome toolbar to open it.",
          "Sign in with the same Claude account you use on the website.",
          "Let it finish connecting. A panel for talking to Claude should appear.",
          "If it tells you browser use needs a paid plan, upgrade first, then sign in again."
        ],
        checkpoint:
          "The extension is open, you are signed in, and you can see where you type a request to Claude."
      },
      {
        title: "Grant access one site at a time",
        description: "Claude works on a website only after you allow that site.",
        whatThisStepDoes:
          "This is the control that keeps browser use in your hands. Claude cannot act on a website until you approve that site, and approval is per site. Visiting a page does not hand it over. When you ask Claude to work on a site, it asks for access first, and you decide: allow just this one action, allow that site going forward, or decline. You can review and remove the sites you have approved later in the extension's settings, so access never silently piles up.",
        actionSteps: [
          "Open a safe, ordinary website, like a news article or a public help page.",
          "Ask Claude in the extension to do something with the page, such as summarizing it.",
          "When it asks for access, read the request. Choose to allow this one action, or grant that single site ongoing access, or decline.",
          "Look in the extension settings for the list of approved sites, so you know where to review or remove access later."
        ],
        table: {
          headers: ["When Claude asks for access, you can", "What it means"],
          rows: [
            ["Allow once", "Claude acts a single time on this page, then has to ask again"],
            ["Allow this site", "Claude can keep working on this one site until you remove it"],
            ["Decline", "Claude does not touch the page"]
          ]
        },
        checkpoint:
          "You granted access to one site, saw that it applied to that site only, and know where to review approved sites."
      },
      {
        title: "Learn the safety model for browser use",
        description: "The most important step. Read it before you trust the extension widely.",
        whatThisStepDoes:
          "Browser use is powerful because Claude acts on real pages, and that is exactly why it carries weight. Two risks matter most. First, a web page can hide instructions meant to trick an AI into doing something you did not ask, such as a page or email that quietly says to find and share your private information. This is called prompt injection. Second, Claude is acting inside your logged-in sessions, so on a site where you are signed in it can reach what your browser can reach. The protections are real but not perfect, so you stay the safeguard. Claude asks before acting and pauses for high-risk actions like purchases, you grant access per site, and you review what it proposes. Keep it away from sensitive places, banking, investments, medical and legal accounts, and anything with other people's private information, until you trust it. Anthropic blocks some of those categories outright. You stay in control the whole time.",
        actionSteps: [
          "Treat anything on a web page as something Claude might read, including hidden text. Do not assume a page is harmless just because it looks plain.",
          "Keep browser use away from banking, investing, medical, legal, and work accounts with sensitive data while you are learning.",
          "Watch for the moments Claude asks before acting, and read what it plans before you approve. Decline anything you did not intend.",
          "Write clear, specific requests. A vague ask gives Claude more room to do something you did not want."
        ],
        table: {
          headers: ["Risk", "What it is", "How you stay safe"],
          rows: [
            ["Prompt injection", "Hidden instructions on a page or in an email try to redirect Claude", "Approve per site, review actions, avoid sketchy pages"],
            ["Your logged-in sessions", "On a signed-in site Claude can reach what your browser can", "Keep it off sensitive accounts until you trust it"],
            ["A wrong action", "Claude does something you did not intend", "It asks before acting and pauses for purchases and the like; you review and decline"]
          ]
        },
        checkpoint:
          "You can explain prompt injection in one sentence, you know which sites to avoid for now, and you understand that you approve and review every action."
      },
      {
        title: "Try one safe, low-stakes browser task",
        description: "Summarize the open page or pull a few details into a note.",
        whatThisStepDoes:
          "Now you try it for real on something harmless. Good first tasks read the page and hand you back something useful without changing anything important: a short summary of a long article, or a few key details pulled off a page so you do not have to copy them by hand. Starting low-stakes lets you watch how the extension asks for access and how it works the page, with nothing at risk.",
        actionSteps: [
          "Open a long but ordinary page, like a news article or a public documentation page.",
          "Ask for a summary, such as \"Summarize the main points of this page in five bullets.\" Grant access to that one site when asked.",
          "Try pulling details next, like \"List the dates and names mentioned on this page,\" and watch Claude read the page to answer.",
          "Read the result and confirm it matches what is actually on the page. Decline anything you did not intend."
        ],
        checkpoint:
          "You completed one safe task on a real page, approved access for that site, and got a result drawn from the actual page."
      },
      {
        title: "Set your privacy and data preferences, then look ahead to Cowork",
        description: "Manage approved sites, and see how browser use complements Cowork.",
        whatThisStepDoes:
          "Two things close out the module. First, tidy your settings: the extension keeps the list of sites you have approved, and you can review or remove any of them so access stays only where you want it. Carry over the same habits from earlier modules about what is safe to let Claude see. Second, a look ahead. The next module, Cowork, connects Claude to specific tools like Gmail and Calendar through dedicated connections. Browser use is the complement to that: when a website has no dedicated connection, Claude can still act on it directly through the extension. They are separate tools, and the extension does not power Cowork, but together they widen what Claude can reach for you.",
        actionSteps: [
          "Open the extension settings and review the list of sites you have approved. Remove any you no longer need.",
          "Apply your usual rule about sensitive information. If you would not let a contractor see it, keep the extension away from it.",
          "Note the split for later: Cowork uses dedicated connections for tools like Gmail, while the extension acts on websites that have no such connection.",
          "Keep both in mind. As you move into Cowork next, you will have browser use available for sites the connections do not cover."
        ],
        checkpoint:
          "Your approved-site list reflects choices you made, and you can describe how browser use complements the Cowork connections in the next module."
      }
    ]
  },
  {
    id: "module-3",
    title: "Module 3: Claude Cowork (Intermediate)",
    navLabel: "Claude Cowork",
    level: "Intermediate",
    tagline: "Agentic desktop workflows",
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
        links: [
          { href: "https://drive.google.com/drive/folders/1Qfutu_vNGqhh19UAZf9j08I5CPq3zp3b", label: "Download the Skill Library", eventName: "Masterclass Link Skill Library" }
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
        links: [
          { href: "https://claude.ai/download", label: "Get Claude Desktop", eventName: "Masterclass Link Claude Desktop" }
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
          "Confirm extended thinking is still on from the earlier step where you turned on stronger reasoning.",
          "If a feature asks for confirmation the first time it runs, that is the safety model working as intended."
        ],
        checkpoint:
          "Skills, Artifacts, file creation, and code execution are all switched on."
      },
      {
        title: "Install your Skills",
        description: "Add Skills globally or, better, to a single Project.",
        whatThisStepDoes:
          "Now you load the .md Skill files you downloaded earlier. You have two choices. Global means a Skill applies everywhere, across all your chats. Per-Project means it applies only inside one Project. Per-Project is recommended because it keeps each workflow self-contained and predictable, so a support Skill does not bleed into your newsletter writing.",
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
          "Confirm the Skill you installed a moment ago is attached to this Project if you chose per-Project."
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
          "Make sure each of those connections is among the ones you enabled earlier and available to this Project.",
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
    id: "module-4",
    title: "Module 4: Claude Code (Advanced)",
    navLabel: "Claude Code",
    level: "Advanced",
    tagline: "Claude Code, plus reusable prompts and skills",
    intro:
      "Claude Code is the version of Claude that runs as a desktop app and can create files, edit them, and run tasks for you directly on your machine. It sounds technical, and it can be, but plenty of everyday uses need no programming at all. This module eases you in: what it is, when to use it, a few real tasks you can try safely, and a free starter pack that powers it up with reusable prompts and skills.",
    steps: [
      {
        title: "Understand what Claude Code is and when to use it",
        description: "A short comparison of Chat, Claude for Chrome, Cowork, and Code.",
        whatThisStepDoes:
          "All four are Claude, with different reach. Chat is conversation in a browser or app. Claude for Chrome is a browser extension that acts on the website in front of you. Cowork is the desktop app connected to your online tools, running workflows. Code goes one level deeper: it works directly with the files and folders on your computer, creating and changing them for you. You reach for Code when the job is about files on your machine rather than a conversation, a website, or an online tool.",
        actionSteps: [
          "Read the comparison below to place each one.",
          "Notice the dividing line. If the work lives in your computer's folders, Code fits.",
          "For now, just recognize the cases. You do not have to use Code today.",
          "Keep Chat, Claude for Chrome, and Cowork for everything they already handle well."
        ],
        table: {
          headers: ["Version", "Where it runs", "Best for"],
          rows: [
            ["Claude Chat", "Browser or app", "Questions, drafts, learning"],
            ["Claude for Chrome", "A Chrome extension in your browser", "Acting on the website in front of you for you"],
            ["Claude Cowork", "Desktop app with connections", "Workflows across Gmail, Calendar, Drive"],
            ["Claude Code", "Its own desktop app", "Creating and editing files and folders on your own computer"]
          ]
        },
        checkpoint:
          "You can say in one sentence when Code is the right choice instead of Chat, Claude for Chrome, or Cowork."
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
        title: "Get to know the Claude Code app",
        description: "One plain paragraph on the app window before you do anything.",
        whatThisStepDoes:
          "The Claude Code app is a normal window, the same as any other program on your computer. You open a folder so Claude knows which files you are working with, you type your request in plain language, and Claude works through it while you watch. When it wants to create or change a file, it pauses and asks first. Knowing where those three things live removes most of the early confusion before you type anything real.",
        actionSteps: [
          "Open the Claude Code app and look around the window. There is nothing to break by looking.",
          "Find where you open a folder. This tells Claude which files and folders it is allowed to work with.",
          "Find the box where you type your request, the same way you type a message in any other version of Claude.",
          "Notice where it asks for your approval. That is where you will accept or decline anything it proposes."
        ],
        checkpoint:
          "You opened the app and can point to where you open a folder, where you type a request, and where approvals appear."
      },
      {
        title: "Install the Claude Code app",
        description: "Download and install the Claude Code desktop app.",
        whatThisStepDoes:
          "Claude Code has its own desktop app, separate from the Claude Desktop app you installed in Module 3. That one is for working across your online tools. This one is for working with the files and folders on your computer, so it is a different download for a different job. Installing it is a normal app install, the same as any other program.",
        actionSteps: [
          "Go to the official Claude Code download page from Anthropic.",
          "Choose the version for your computer, Mac or Windows, and download it.",
          "Run the installer and follow the prompts, the same way you would install any other app.",
          "Wait for it to finish. The installer tells you when it is done."
        ],
        links: [
          { href: "https://code.claude.com/docs/en/desktop-quickstart", label: "Get Claude Code", eventName: "Masterclass Link Claude Code" }
        ],
        checkpoint:
          "The Claude Code app finished installing without errors and is ready to open."
      },
      {
        title: "Open it for the first time and sign in",
        description: "Launch the app and connect your account.",
        whatThisStepDoes:
          "With it installed, you open the Claude Code app and sign in with the same Claude account you have used all along. The first time, it usually opens your browser to log in, then hands you back to the app. After this, opening it works like any other program.",
        actionSteps: [
          "Open the Claude Code app.",
          "When it prompts you to sign in, follow the steps. Log in with your usual account.",
          "Return to the app once you are signed in.",
          "You should see a box where you can type a request."
        ],
        checkpoint:
          "The Claude Code app is open, you are signed in, and it is waiting for your first request."
      },
      {
        title: "Try a few real, non-technical tasks",
        description: "Three things a non-programmer can actually do today.",
        whatThisStepDoes:
          "This is where it gets concrete. You can ask Claude Code to build a simple one-page website, tidy and rename a messy folder of files, or draft and revise documents that live in a folder. You describe the goal in plain words and let it do the work, reviewing as you go. Start with a practice folder so nothing important is at stake.",
        actionSteps: [
          "Make a new, empty folder for practicing, then open that folder in the Claude Code app so it works only on those files.",
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
        title: "Meet the meta-prompting starter pack",
        description: "A small free download that adds reusable prompts and skills.",
        whatThisStepDoes:
          "Once Claude Code feels comfortable, you can teach it a few new tricks. The meta-prompting starter pack is a small free download (about 166 KB) that adds two slash commands and two skills to the Claude Code you already have. A slash command is a shortcut you type with a slash in front, like /create-prompt. These help Claude Code write better prompts, save and reuse them, and break a big job into steps. These commands and skills are different from the Cowork Skills in Module 3. The Cowork Skills live inside the Cowork desktop app. These live in a hidden folder on your computer called .claude, and Claude Code loads them every time it starts.",
        actionSteps: [
          "Read the table below so you know what each of the four pieces does.",
          "Notice that two are slash commands you type, and two are skills Claude Code uses on its own when a job calls for them.",
          "You do not need all four at once. /create-prompt is the one most people start with.",
          "When you are ready to add them, the next step walks through the install."
        ],
        table: {
          headers: ["Piece", "Type", "What it does for you"],
          rows: [
            ["/create-prompt", "Slash command", "A coach that helps you write a strong prompt. You answer a few quick questions and Claude writes the well-worded prompt, then saves it so you can reuse it."],
            ["/run-prompt", "Slash command", "Your saved-prompts shelf. Pick a prompt you saved earlier and run it again, with no copy-pasting or rewriting from memory."],
            ["create-meta-prompts", "Skill", "A recipe for prompts that build other prompts. When a job needs research, then a plan, then the work, in that order, it stitches those three steps together. Good for repeatable, multi-step jobs."],
            ["create-plans", "Skill", "Breaks a big, fuzzy goal like \"migrate our docs to the new site\" into small, testable steps Claude can finish one at a time."]
          ]
        },
        checkpoint:
          "You can name the four pieces and explain how these Claude Code commands and skills differ from the Cowork Skills in Module 3."
      },
      {
        title: "Install the starter pack",
        description: "Download it, then drag the files into your hidden .claude folder.",
        whatThisStepDoes:
          "Installing means putting the downloaded files where Claude Code looks for them. It is all drag and drop, with nothing to run. You unzip the download, open a hidden folder called .claude on your computer, and drag the command files and skill folders into place. The one thing to do first: open Claude Code at least once, because that first launch is what creates the .claude folder you are about to drop files into.",
        actionSteps: [
          "Make sure you have opened Claude Code at least once already, so the hidden .claude folder exists.",
          { text: "Download the starter pack and unzip it.", subSteps: [
            "Use the download button below to get claude-meta-prompting.zip.",
            "On Mac, double-click the file to unzip it. On Windows, right-click it and choose Extract All.",
            "You now have a claude-meta-prompting folder with a commands folder and a skills folder inside."
          ] },
          { text: "Open the hidden .claude folder using the row for your computer in the table below.", subSteps: [
            "On Mac, open Finder, press Command + Shift + G, type ~/.claude, and press Return.",
            "On Windows, open File Explorer and type %USERPROFILE%\\.claude in the address bar, then press Enter."
          ] },
          "Drag the two .md files from the unzipped commands folder into the commands folder inside .claude. If there is no commands folder yet, drag the whole commands folder over instead.",
          "Drag the create-meta-prompts and create-plans folders from the unzipped skills folder into the skills folder inside .claude. If there is no skills folder yet, drag the whole skills folder over instead.",
          "Open Claude Code and type /create-prompt. If it appears in the menu, the install worked. The .md files now live in commands, the two skill folders live in skills, and Claude Code reads both folders automatically every time it starts."
        ],
        table: {
          headers: ["Your computer", "How to open the hidden .claude folder"],
          rows: [
            ["Mac", "In Finder, press Command + Shift + G, type ~/.claude, and press Return."],
            ["Windows", "In the File Explorer address bar, type %USERPROFILE%\\.claude and press Enter."]
          ]
        },
        download: {
          href: "/claude-meta-prompting.zip",
          label: "Download the starter pack",
          note: "About 166 KB. A single zip file. Nothing runs on its own; you just drop the folders into place.",
          eventName: "Claude Masterclass Starter Pack Download"
        },
        checkpoint:
          "The command files and skill folders are inside your .claude folder, and typing /create-prompt in Claude Code shows the new command in the menu."
      },
      {
        title: "Run your first prompt",
        description: "Try /create-prompt, then reuse it later with /run-prompt.",
        whatThisStepDoes:
          "Now you use what you installed. You type /create-prompt followed by a plain description of a task, starting with \"how might we.\" Claude asks a few questions about how the task should work, then writes a well-worded prompt for you and saves it. Later, when you want that same prompt again, /run-prompt pulls it off your saved-prompts shelf so you do not rewrite it from memory.",
        actionSteps: [
          "Open Claude Code and type /create-prompt followed by a task, like the example below.",
          "Answer the few questions it asks about how the task should work.",
          "Read the prompt it writes for you. It is saved automatically for next time.",
          "Later, type /run-prompt to pick that saved prompt and run it again."
        ],
        codeBlock: {
          caption: "Example to type in Claude Code",
          code: `/create-prompt how might we write a weekly update from my meeting notes`
        },
        checkpoint:
          "You ran /create-prompt on a real task, got a saved prompt back, and know that /run-prompt brings it back later."
      },
      {
        title: "Level up with workflows and loops",
        description: "Hand Claude Code a bigger, open-ended job and let it run on its own.",
        whatThisStepDoes:
          "Once single prompts feel natural, the next step is a workflow: one plain-language request that sets Claude Code off on a multi-step job, often spinning up several helper agents that work in parallel. A few words unlock the real power. \"Use a workflow\" tells it to plan the steps and split the work. A loop keeps it going on its own: /loop reruns a task on a schedule, and /goal tells it not to stop until a goal is met. \"In a worktree\" lets agents try ideas in separate, throwaway copies of your files so nothing collides. And it can interview you with the AskUserQuestion tool when it needs your judgment. You still approve real changes, so a workflow is ambitious but not reckless. The examples below show the range, from babysitting code to ranking resumes.",
        actionSteps: [
          "Pick one example below that sounds like a job you actually have.",
          "Open the right folder in Claude Code, then paste the example and adjust the details to your situation.",
          "Watch it plan the steps and, where useful, fan out into parallel agents. Answer its questions and approve changes as they come.",
          "For a job that should keep running, start the request with /loop to repeat it on a schedule, or /goal to have it keep working until the goal is met."
        ],
        examples: {
          caption: "Workflow and loop examples to adapt and paste into Claude Code",
          items: [
            `/goal Build report.md comparing the five options in brief.md.

Finish line:
- Every section in brief.md is answered.
- The comparison table has no unexplained blank cells.
- Every factual claim includes a source link and source date.
- Assumptions and unresolved questions are listed separately.

Prove it:
- Print all section headings.
- Print the completed comparison table.
- Print every unresolved question and blocked source.

Show me:
- Recommend one option in three sentences.
- Name the strongest reason not to choose it.

If blocked:
- Mark the cell "Not verified" and explain why. Do not guess.`,
            "/loop babysit all my GitHub PRs. Auto-fix build issues, and when comments come in, use /create-prompt in a worktree agent to fix them.",
            "This test fails maybe 1 in 50 runs. Set up a workflow to reproduce it, form theories, and adversarially test them in worktrees. /goal don't stop until one theory works.",
            "Use a workflow to dig through #incidents in Slack for the past six months and find recurring root causes where nobody has filed a ticket.",
            "Take my business plan and run a workflow where different agents tear it apart from an investor's, a customer's, and a competitor's perspective.",
            "Here's a folder of 80 resumes. Use a workflow to rank them for the backend role and double-check the top ten. Interview me using the AskUserQuestion tool for a rubric.",
            "I need a name for this CLI tool. Use a workflow to brainstorm a bunch of options and run a tournament to pick the top 3.",
            "Use a workflow to rename our User model to Account everywhere.",
            "Go through my blog post draft and, using a workflow, verify every technical claim against the codebase. I don't want to ship anything wrong.",
            "Using a workflow, go through my last 50 sessions and mine them for corrections I keep making, then turn the recurring ones into CLAUDE.md rules."
          ]
        },
        checkpoint:
          "You ran one workflow from a single plain-language request, saw it break the job into steps, and know that /loop and /goal keep a job running on their own."
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

    {step.examples && (
      <div>
        {step.examples.caption && (
          <h4 className="font-semibold mb-3">{step.examples.caption}</h4>
        )}
        <div className="space-y-3">
          {step.examples.items.map((item, i) => (
            <CodeBlock key={i}>{item}</CodeBlock>
          ))}
        </div>
      </div>
    )}

    {step.download && (
      <div>
        <a
          href={step.download.href}
          download
          onClick={() => step.download?.eventName && trackEvent(step.download.eventName)}
          className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground font-semibold px-5 py-3 transition-colors hover:bg-primary/90"
        >
          <Download className="h-5 w-5" />
          {step.download.label}
        </a>
        {step.download.note && (
          <p className="text-sm text-muted-foreground mt-2">{step.download.note}</p>
        )}
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

  let _offset = 0;
  const moduleProgress = MODULES.map((m, i) => {
    const start = _offset + 1;
    const end = _offset + m.steps.length;
    _offset = end;
    const done = completedSteps.filter((n) => n >= start && n <= end).length;
    return { id: m.id, navLabel: m.navLabel, level: m.level, tagline: m.tagline, number: i + 1, total: m.steps.length, done };
  });

  const learningOutcomes = [
    "Sign in to Claude, hold a productive conversation, and write prompts that get usable answers on the first or second try.",
    "Share files and images with Claude and organize ongoing work using Projects, custom instructions, and memory.",
    "Install Claude for Chrome and use browser use safely, letting Claude see the current tab and take actions for you while you approve access site by site.",
    "Set up the desktop app with safe connections to tools like Gmail and Calendar so Claude can act, not just advise.",
    "Build, run, and improve a repeatable workflow using Skills, connections, and a simple scorecard.",
    "Use the Claude Code desktop app for real non-technical tasks like a one-page website, folder cleanup, and document drafting.",
    "Install the free meta-prompting starter pack and use /create-prompt and /run-prompt to write and reuse strong prompts, plus skills that plan big jobs.",
    "Decide confidently which version of Claude fits a given task, and protect your data with deliberate privacy settings."
  ];

  const keyConcepts = [
    { term: "Prompt", definition: "The message you send Claude. Clear ask plus context plus an example gets the best result." },
    { term: "Artifact", definition: "A panel beside the chat where Claude builds a document, table, or small app you can edit in place." },
    { term: "Browser use", definition: "Claude acting in your browser tab on your behalf through the Claude for Chrome extension, with your approval granted per site." },
    { term: "Project", definition: "A reusable container that bundles instructions, reference files, and (in Cowork) connections for one kind of work." },
    { term: "Skill", definition: "A plain-text (.md) instruction set that gives Claude focused expertise for a specific task." },
    { term: "Connection (MCP)", definition: "A safe, approved link that lets Claude reach an outside tool like Gmail or Drive, turning chat into action." },
    { term: "Workspace folder", definition: "The folder you open in the Claude Code app, which sets the files and folders Claude is allowed to work with." },
    { term: "Safety model", definition: "Claude Code shows what it plans to do and waits for your approval before changing anything." },
    { term: "Slash command", definition: "A shortcut you type in Claude Code with a slash in front, like /create-prompt, that runs a saved instruction." },
    { term: "Starter pack", definition: "A small free download of Claude Code commands and skills that load from your .claude folder every time Claude Code starts." }
  ];

  const nextSteps = [
    "Install Claude for Chrome and try one safe browser task, like summarizing the page you have open, granting access to that single site.",
    "Build one real Cowork workflow for a task you repeat weekly, then refine it with the scorecard until edits are minor.",
    "Create a practice folder and complete all three Claude Code tasks: a one-page site, a folder cleanup, and a document draft.",
    "Download the meta-prompting starter pack, install it into your .claude folder, and run /create-prompt on a real task.",
    "Review your privacy settings across the website, desktop app, and Claude Code so each reflects a choice you made.",
    "Bookmark Anthropic's official documentation and turn your best workflow instructions into a saved Skill you can reuse."
  ];

  const troubleshooting: [string, string][] = [
    ["Claude's answers are vague or off-target.", "Add context and an example to your prompt, then say what was wrong and ask for a revision."],
    ["A Cowork connection will not answer with live data.", "Reopen Connections, confirm it is signed in and enabled for that Project, then reconnect if needed."],
    ["Claude for Chrome will not act on a website.", "Open the extension and grant access for that site, since access is per site, and check you are on a paid plan with the extension turned on in Chrome."],
    ["A workflow stops partway through.", "Check that every tool it needs is connected and any referenced folder is not empty, as your error-handling instructions should report."],
    ["The Claude Code app will not open or sign you in.", "Quit and reopen it, and check your internet connection for the sign-in step. If it persists, reinstall it from the official download page."],
    ["Claude Code changed something you did not want.", "Decline the next prompt, ask it to undo or revise, and going forward review each proposed change before approving."]
  ];

  let stepCounter = 0;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Claude Masterclass: Chat, Chrome, Cowork, and Code"
        description="A step-by-step Claude masterclass for non-technical people. Learn Claude Chat, the Claude for Chrome browser extension, the agentic Cowork desktop setup, and the Claude Code desktop app from the ground up."
        keywords={["Claude masterclass", "Claude Chat", "Claude for Chrome", "Claude browser extension", "browser use", "Claude Cowork", "Claude Code", "Claude Code desktop app", "Claude for beginners", "Claude tutorial", "AI for non-technical teams", "Claude Desktop", "MCP", "meta prompting", "create-prompt"]}
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
              Chat, Chrome, Cowork, and Code
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Go from never using Claude to comfortable across four products: everyday chat, the Claude for Chrome browser extension that acts on websites for you, an agentic desktop setup that runs real work, and the Claude Code desktop app. No coding background needed.
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

          {/* Module Jump Cards */}
          <div className="mt-12 max-w-3xl mx-auto text-left">
            <p className="text-sm text-muted-foreground mb-3">Jump to a module</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {moduleProgress.map((m) => {
                const modulePercent = Math.round((m.done / m.total) * 100);
                return (
                  <button
                    key={m.id}
                    type="button"
                    aria-label={`Jump to ${m.navLabel}`}
                    onClick={() => {
                      document.getElementById(m.id)?.scrollIntoView({ behavior: 'smooth' });
                      trackEvent('Claude Masterclass Module Jump', { module: m.id });
                    }}
                    className="block w-full text-left"
                  >
                    <Card className="h-full p-4 transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg bg-primary text-primary-foreground flex-shrink-0">
                          {m.number}
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-semibold leading-tight">{m.navLabel}</h3>
                          <p className="text-xs text-muted-foreground">{m.level}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-3">{m.tagline}</p>
                      <div className="mt-3">
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-500"
                            style={{ width: `${modulePercent}%` }}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">{m.done}/{m.total} steps</p>
                      </div>
                    </Card>
                  </button>
                );
              })}
            </div>
          </div>
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
                    <span>A Claude account (free to start; a paid plan unlocks Projects, the Cowork features in Module 3, and Claude for Chrome in Module 2)</span>
                    <div className="mt-2">
                      <Button asChild variant="outline" size="sm">
                        <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">
                          Create a Claude account
                          <ExternalLink />
                        </a>
                      </Button>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span>Google Chrome installed, for the Claude for Chrome module (Module 2)</span>
                    <div className="mt-2">
                      <Button asChild variant="outline" size="sm">
                        <a href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer">
                          Download Chrome
                          <ExternalLink />
                        </a>
                      </Button>
                    </div>
                  </div>
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
            <p className="text-xl text-muted-foreground">Work through four modules at your own pace</p>
          </div>

          <div className="space-y-16">
            {MODULES.map((module) => (
              <div key={module.id} id={module.id} className="scroll-mt-24">
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
            <a href="/claude-meta-prompting" className="block">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Download className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Meta-Prompting Starter Pack</h3>
                    <p className="text-sm text-muted-foreground">Download and install the Claude Code commands and skills from Module 4</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto" />
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
