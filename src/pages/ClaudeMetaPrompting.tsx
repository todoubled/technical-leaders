import { useMemo, useState } from 'react';
import {
  Apple,
  CheckCircle2,
  Download,
  FolderOpen,
  Layers,
  ListChecks,
  Monitor,
  Package,
  Save,
  Sparkles,
  Wand2,
} from 'lucide-react';

import Navigation from '@/components/Navigation';
import SEO from '@/components/SEO';
import { trackClick } from '@/utils/posthog';

type OS = 'mac' | 'windows';

interface InstallStep {
  title: string;
  body: string;
}

const macSteps: InstallStep[] = [
  {
    title: 'Download and unzip.',
    body: 'Click the download button above. Find claude-meta-prompting.zip in your Downloads folder, then double-click it. macOS will create a new folder called claude-meta-prompting right next to the zip.',
  },
  {
    title: 'Open the hidden Claude folder.',
    body: 'Open Finder. Press ⌘ + Shift + G (Command + Shift + G). Type ~/.claude and press Return. You’ll see a folder with things like commands and skills inside. If those folders aren’t there yet, that’s fine — you’ll create them by dragging.',
  },
  {
    title: 'Drag the commands into place.',
    body: 'Open the unzipped claude-meta-prompting folder. Open its commands folder. Drag both .md files inside into your ~/.claude/commands folder. If commands doesn’t exist yet inside ~/.claude, just drag the whole commands folder over instead.',
  },
  {
    title: 'Drag the skills into place.',
    body: 'Same idea: open the unzipped skills folder. Drag the create-meta-prompts and create-plans folders into your ~/.claude/skills folder. If the skills folder isn’t there yet, drag the whole skills folder over.',
  },
  {
    title: 'Test it.',
    body: 'Open Claude Code. Type /create-prompt and press space. You should see your new command appear in the menu. If it does, you’re done.',
  },
];

const windowsSteps: InstallStep[] = [
  {
    title: 'Download and unzip.',
    body: 'Click the download button above. Open File Explorer, find claude-meta-prompting.zip in your Downloads folder, right-click it, and choose Extract All… then Extract. You’ll get a new claude-meta-prompting folder.',
  },
  {
    title: 'Open the hidden Claude folder.',
    body: 'In File Explorer’s address bar at the top, type %USERPROFILE%\\.claude and press Enter. The %USERPROFILE% part is shorthand for your user folder — Windows fills it in for you. You’ll land in your Claude config folder.',
  },
  {
    title: 'Copy the commands into place.',
    body: 'In a second File Explorer window, open the unzipped claude-meta-prompting\\commands folder. Select both .md files and drag them into the commands folder inside .claude. If commands doesn’t exist yet, drag the whole commands folder over instead.',
  },
  {
    title: 'Copy the skills into place.',
    body: 'Same idea: drag create-meta-prompts and create-plans from the unzipped skills folder into the skills folder inside .claude. Create the skills folder if it isn’t there.',
  },
  {
    title: 'Test it.',
    body: 'Open Claude Code. Type /create-prompt. If your new command shows up in the menu, you’re done.',
  },
];

const insideItems = [
  {
    icon: Wand2,
    label: '/create-prompt',
    sub: 'A slash command',
    headline: 'A coach that helps you write a great prompt.',
    body: 'Type /create-prompt and answer a few quick questions. Claude writes the carefully-worded prompt for you and saves it for next time, so you don’t have to remember exactly how you phrased it.',
  },
  {
    icon: Save,
    label: '/run-prompt',
    sub: 'A slash command',
    headline: 'Your saved-prompts shelf.',
    body: 'Type /run-prompt to pick a prompt you saved earlier and run it again. No copy-pasting from notes apps, no rewriting from memory — just pick and go.',
  },
  {
    icon: Layers,
    label: 'create-meta-prompts',
    sub: 'A skill',
    headline: 'A recipe for prompts that build other prompts.',
    body: 'When a job needs research, then a plan, then the actual work — in that order — this skill stitches those three steps together for you. Great for repeatable, multi-step jobs you do often.',
  },
  {
    icon: ListChecks,
    label: 'create-plans',
    sub: 'A skill',
    headline: 'Breaks a big job into bite-sized steps Claude can finish.',
    body: 'Hand Claude a fuzzy goal like “migrate our docs to the new site.” It returns a checklist of small, testable tasks you can knock out one at a time instead of getting lost in the middle.',
  },
];

const ClaudeMetaPrompting = () => {
  const [os, setOs] = useState<OS>('mac');

  const structuredData = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Install Claude Code Meta-Prompting Skills',
      description:
        'Install a free starter pack of Claude Code commands and skills. Works on macOS and Windows. No terminal required.',
      totalTime: 'PT5M',
      supply: [
        { '@type': 'HowToSupply', name: 'A computer running macOS or Windows' },
        { '@type': 'HowToSupply', name: 'Claude Code installed and opened at least once' },
      ],
      tool: [
        { '@type': 'HowToTool', name: 'Finder (macOS) or File Explorer (Windows)' },
      ],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Download and unzip the starter pack',
          text: 'Download claude-meta-prompting.zip and double-click it (macOS) or right-click and choose Extract All (Windows) to unzip the folder.',
          url: 'https://technical-leaders.com/claude-meta-prompting#install',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Open the hidden Claude folder',
          text: 'On macOS, press Command + Shift + G in Finder and type ~/.claude. On Windows, type %USERPROFILE%\\.claude in the File Explorer address bar.',
          url: 'https://technical-leaders.com/claude-meta-prompting#install',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Move the commands into place',
          text: 'Drag the two .md files from the unzipped commands folder into the commands folder inside .claude. Create commands if it does not exist yet.',
          url: 'https://technical-leaders.com/claude-meta-prompting#install',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Move the skills into place',
          text: 'Drag the create-meta-prompts and create-plans folders into the skills folder inside .claude. Create skills if it does not exist yet.',
          url: 'https://technical-leaders.com/claude-meta-prompting#install',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Test it',
          text: 'Open Claude Code and type /create-prompt. If the new command appears, the install worked.',
          url: 'https://technical-leaders.com/claude-meta-prompting#install',
        },
      ],
    }),
    []
  );

  const handleDownloadClick = (source: 'hero' | 'footer') => {
    trackClick('claude_meta_prompting_download', { source });
  };

  const handleOsTabClick = (next: OS) => {
    setOs(next);
    trackClick('claude_meta_prompting_os_tab', { os: next });
  };

  const handleSecondaryClick = (target: string) => {
    trackClick('claude_meta_prompting_secondary_click', { target });
  };

  const steps = os === 'mac' ? macSteps : windowsSteps;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <SEO
        title="Install Claude Code Meta-Prompting Skills"
        description="A free starter pack of Claude Code commands and skills that help non-technical founders write better prompts and plan bigger projects. Download and install in ~5 minutes — works on macOS and Windows."
        keywords={[
          'claude code',
          'claude code commands',
          'claude code skills',
          'meta prompting',
          'create-prompt',
          'run-prompt',
          'claude code install',
          'non-technical founder',
        ]}
        structuredData={structuredData}
      />

      <Navigation hideCTA />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-24 md:pt-28 pb-32">
        {/* Hero */}
        <header className="mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            ~5 minute setup
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Turn Claude Code Into a Senior Engineer
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-300 leading-relaxed">
            A free starter pack of prompts and skills you drop into Claude Code. It teaches Claude to write better prompts, plan big projects, and remember the steps so you don’t have to.
          </p>
          <p className="mt-3 text-sm text-slate-400">
            What this is, in one sentence: think of it like installing a couple of extra brain modules for the Claude app you already have.
          </p>
        </header>

        {/* Primary download card */}
        <section
          id="download"
          aria-labelledby="download-title"
          className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 md:p-8 mb-12 md:mb-16"
        >
          <div className="flex items-start gap-3 mb-5">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/15 border border-emerald-500/40 flex-shrink-0">
              <Package className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h2 id="download-title" className="text-xl md:text-2xl font-bold text-white">
                The starter pack
              </h2>
              <p className="text-sm text-slate-400 mt-0.5">
                One small download. Two slash commands, two skills.
              </p>
            </div>
          </div>

          <a
            href="/claude-meta-prompting.zip"
            download="claude-meta-prompting.zip"
            onClick={() => handleDownloadClick('hero')}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-5 py-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <Download className="w-5 h-5" />
            <span>Download the starter pack</span>
            <span className="text-slate-900/70 font-normal hidden sm:inline">· 166 KB · .zip</span>
          </a>
          <p className="text-center text-xs text-slate-500 mt-3 sm:hidden">166 KB · .zip file</p>
          <p className="text-center text-sm text-slate-400 mt-4">
            It’s a tiny zip file (a single bundled folder you can download as one piece). Nothing runs on its own — you just drop the folders in the right place.
          </p>
        </section>

        {/* What's inside */}
        <section aria-labelledby="inside-title" className="mb-12 md:mb-16">
          <h2 id="inside-title" className="text-2xl md:text-3xl font-bold text-white mb-2">
            What’s inside
          </h2>
          <p className="text-slate-400 text-sm md:text-base mb-6">
            Four small files Claude reads on startup. Each one teaches it a new trick.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {insideItems.map(({ icon: Icon, label, sub, headline, body }) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/40 flex-shrink-0">
                    <Icon className="w-4 h-4 text-emerald-300" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-sm text-slate-100 truncate">{label}</p>
                    <p className="text-[11px] uppercase tracking-widest text-slate-500">{sub}</p>
                  </div>
                </div>
                <h3 className="text-base font-semibold text-white leading-snug">
                  {headline}
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How to install */}
        <section id="install" aria-labelledby="install-title" className="mb-12 md:mb-16 scroll-mt-24">
          <h2 id="install-title" className="text-2xl md:text-3xl font-bold text-white mb-2">
            How to install
          </h2>
          <p className="text-slate-400 text-sm md:text-base mb-6">
            Four steps. About five minutes.
          </p>

          {/* Prerequisite callout */}
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] p-4 md:p-5 mb-6">
            <p className="text-sm text-amber-100/90 leading-relaxed">
              <span className="font-semibold text-amber-200">Before you start:</span>{' '}
              open Claude Code at least once. That creates the hidden{' '}
              <span className="font-mono text-amber-100">.claude</span> folder we’re about to put files into. (A hidden folder is one Finder or File Explorer normally tucks out of sight — we’re about to un-hide it.) If you haven’t installed Claude Code yet, do that first.
            </p>
          </div>

          {/* OS toggle */}
          <div
            role="tablist"
            aria-label="Choose your operating system"
            className="inline-flex items-center gap-1 rounded-full border border-slate-700/60 bg-slate-900/60 p-1 mb-6"
          >
            <button
              type="button"
              role="tab"
              aria-selected={os === 'mac'}
              aria-controls="install-steps"
              onClick={() => handleOsTabClick('mac')}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 ${
                os === 'mac'
                  ? 'bg-emerald-500 text-slate-950'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Apple className="w-4 h-4" />
              macOS
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={os === 'windows'}
              aria-controls="install-steps"
              onClick={() => handleOsTabClick('windows')}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 ${
                os === 'windows'
                  ? 'bg-emerald-500 text-slate-950'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Monitor className="w-4 h-4" />
              Windows
            </button>
          </div>

          {/* Steps */}
          <ol id="install-steps" role="tabpanel" className="space-y-3">
            {steps.map((step, index) => (
              <li
                key={`${os}-${index}`}
                className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-5 md:p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-semibold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-semibold text-white leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-slate-300 leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          {/* Where things landed */}
          <div className="mt-6 rounded-2xl border border-slate-700/60 bg-slate-900/40 p-5">
            <div className="flex items-center gap-2 mb-3">
              <FolderOpen className="w-4 h-4 text-slate-400" />
              <p className="text-sm font-semibold text-slate-200">
                Where things end up
              </p>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              When you’re done, the two .md files live inside the{' '}
              <span className="font-mono text-slate-200">commands</span> folder, and the
              two skill folders live inside the{' '}
              <span className="font-mono text-slate-200">skills</span> folder. Claude
              Code reads both folders automatically every time it starts — no extra
              setup, no command to run.
            </p>
          </div>
        </section>

        {/* You did it footer card */}
        <section aria-labelledby="done-title" className="mb-10">
          <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-900 p-6 md:p-8">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <h2 id="done-title" className="text-xl md:text-2xl font-bold text-white">
                  You did it. Now what?
                </h2>
                <p className="text-sm text-slate-400 mt-0.5">
                  One small thing to try right now.
                </p>
              </div>
            </div>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Try typing{' '}
              <span className="font-mono text-emerald-200">/create-prompt how might we implement a feature that does X</span>.
              Claude will ask you questions about how the feature should work and then it
              will generate a contextual prompt following software engineering best
              practices for you.
            </p>

            <a
              href="#download"
              onClick={() => handleSecondaryClick('back_to_download')}
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-slate-600 hover:border-slate-500 hover:bg-slate-800/50 text-slate-200 font-medium px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
              <Download className="w-4 h-4" />
              Back to the download
            </a>
          </div>
        </section>

        {/* Credit footer */}
        <footer className="pt-8 border-t border-slate-800 text-xs text-slate-500 leading-relaxed">
          <p>
            These commands and skills were created and shared by Todd Larsen and the
            Technical Leaders community.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default ClaudeMetaPrompting;
