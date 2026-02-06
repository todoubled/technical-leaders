import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Download, Terminal, Copy, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import SEO from "@/components/SEO";
import { trackClick, trackEvent } from "@/utils/posthog";
import { useTrackScrollDepth } from "@/hooks/use-posthog";

const Fortune100PromptLibrary = () => {
  useTrackScrollDepth('Fortune 100 Prompt Library Page');
  const [activeInstallTab, setActiveInstallTab] = useState<'claude' | 'chatgpt' | 'gemini'>('claude');

  useEffect(() => {
    trackEvent('Fortune 100 Prompt Library Page View', {
      has_strategy: true,
      has_cta: true
    });

    // Load LinkedIn badge script
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://platform.linkedin.com/badges/js/profile.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Fortune 100 Prompt Library - The Non-Technical Guide to Prompt Engineering"
        description="Master prompt engineering in 30 minutes. Learn how to give AI clear instructions that get amazing results. Includes real examples, templates, and exercises."
        keywords={['prompt engineering', 'AI prompts', 'ChatGPT prompts', 'AI writing', 'prompt templates', 'AI guide', 'fortune 100 prompts']}
        image="https://technical-leaders.com/ai-in-ar.png"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/ai-in-ar.png"
            alt="Fortune 100 Prompt Library"
            className="w-full h-full object-cover object-top opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          {/* Top Section - Subheadline */}
          <div className="text-center mb-12">
            <p className="text-xl sm:text-2xl lg:text-3xl mb-2 text-white">
              Advanced AI Prompts To Automate Your Work In Minutes
            </p>
            <p className="text-lg sm:text-xl text-white/80">
              Without developer resources (even if you're non-technical)
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Column - Dramatic Title */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight text-white">
                <span className="block text-white/80">The</span>
                <span className="block">Fortune 100</span>
                <span className="block">AI Prompt</span>
                <span className="block">Library<sup className="text-3xl sm:text-4xl">™</sup></span>
              </h1>

              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                Copy, Paste & Edit
              </p>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-8">
                Prompts in 60 seconds
              </p>

              {/* CTA Button */}
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-8 py-6"
                onClick={() => {
                  trackClick('Get Library - Fortune 100 Prompt Library', {
                    location: 'hero_section'
                  });
                  window.open('https://drive.google.com/drive/u/1/folders/1Qfutu_vNGqhh19UAZf9j08I5CPq3zp3b', '_blank');
                }}
              >
                Get the AI Prompts
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Right Column - Hi, my name is section */}
            <div className="lg:col-span-7 bg-background/50 backdrop-blur border border-white/10 rounded-lg p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    Hi, we're <span className="font-semibold text-white">Todd Larsen</span> and <span className="font-semibold text-white">Nick Talwar</span> from Tech Leaders.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    We help non-technical leaders build real AI competency, not just talk about it.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    We've trained hundreds of professionals to:
                  </p>
                  <ul className="list-disc list-inside text-base text-muted-foreground space-y-2 mb-4 ml-4">
                    <li>Get 5-10 hours back each week with AI workflows</li>
                    <li>Ship their first AI-powered tool</li>
                    <li>Lead AI adoption without the hype</li>
                    <li>Stop chasing shiny objects and use what works</li>
                  </ul>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    This library is a small sample of the prompts and workflows we give you in our full AI Agent Workflows Program.
                  </p>
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10"
                    onClick={() => {
                      trackClick('See Program - Fortune 100 Prompt Library', {
                        location: 'hero_intro_section'
                      });
                      window.location.href = "/ai-program";
                    }}
                  >
                    See How It Works
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className="md:w-64 flex-shrink-0 flex flex-col gap-4">
                  <div
                    className="badge-base LI-profile-badge"
                    data-locale="en_US"
                    data-size="medium"
                    data-theme="light"
                    data-type="VERTICAL"
                    data-vanity="remotebranch"
                    data-version="v1"
                  >
                    <a
                      className="badge-base__link LI-simple-link"
                      href="https://www.linkedin.com/in/remotebranch?trk=profile-badge"
                    >
                      Todd Larsen
                    </a>
                  </div>
                  <div
                    className="badge-base LI-profile-badge"
                    data-locale="en_US"
                    data-size="medium"
                    data-theme="light"
                    data-type="VERTICAL"
                    data-vanity="nicktalwar"
                    data-version="v1"
                  >
                    <a
                      className="badge-base__link LI-simple-link"
                      href="https://www.linkedin.com/in/nicktalwar?trk=profile-badge"
                    >
                      Nick Talwar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Instructions Section */}
      <section id="how-to-use" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Download className="w-4 h-4" />
              After You Download
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How to Use These AI Prompts
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose your preferred AI tool and follow the simple steps below
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveInstallTab('claude')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeInstallTab === 'claude'
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <Terminal className="w-5 h-5" />
              Claude Skills
            </button>
            <button
              onClick={() => setActiveInstallTab('chatgpt')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeInstallTab === 'chatgpt'
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <Sparkles className="w-5 h-5" />
              ChatGPT
            </button>
            <button
              onClick={() => setActiveInstallTab('gemini')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeInstallTab === 'gemini'
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <Sparkles className="w-5 h-5" />
              Gemini
            </button>
          </div>

          {/* Claude Skills Instructions */}
          {activeInstallTab === 'claude' && (
            <Card className="p-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-800 border-2 border-orange-200 dark:border-orange-900">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl">
                  <Terminal className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Install as Claude Skills</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">These prompts can be installed as reusable Agent Skills in Claude Code or Claude Desktop</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Download & Extract the Zip</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Click the download link, then double-click the zip to extract the .md files.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Create the Commands Folder</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Open Terminal and run: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs">mkdir -p ~/.claude/commands</code></p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Copy the Skill Files</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Move the .md files to the commands folder, or run: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs">cp ~/Downloads/*.md ~/.claude/commands/</code></p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Use Your Skills</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">In Claude Code, type <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs">/</code> followed by the skill name (filename without .md) to activate it.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white dark:bg-gray-900 rounded-lg border border-orange-200 dark:border-orange-800">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-bold text-orange-600 dark:text-orange-400">Pro Tip:</span> For Claude Desktop, paste the skill content into your project's "Custom Instructions" or "Project Knowledge" section instead.
                </p>
              </div>
            </Card>
          )}

          {/* ChatGPT Instructions */}
          {activeInstallTab === 'chatgpt' && (
            <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 border-2 border-green-200 dark:border-green-900">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
                  <Copy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Copy & Paste into ChatGPT</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">ChatGPT doesn't support Agent Skills, so prompts must be copy+pasted</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Download & Extract the Zip</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Download from Google Drive, then double-click to extract the .md files.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Open a Skill File</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Double-click any .md file to open it in TextEdit (Mac) or Notepad (Windows).</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Copy the Content</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Press Cmd+A (Mac) or Ctrl+A (Windows) to select all, then Cmd+C or Ctrl+C to copy.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Use in ChatGPT</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Option A:</strong> Profile icon → "Customize ChatGPT" → paste into response instructions.</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1"><strong>Option B:</strong> Paste as your first message in any new conversation.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white dark:bg-gray-900 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-bold text-green-600 dark:text-green-400">Pro Tip:</span> For longer skills, you may need to condense the content to fit ChatGPT's Custom Instructions character limit. Focus on the core instructions.
                </p>
              </div>
            </Card>
          )}

          {/* Gemini Instructions */}
          {activeInstallTab === 'gemini' && (
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 border-2 border-blue-200 dark:border-blue-900">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                  <Copy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Copy & Paste into Gemini</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Gemini doesn't support Agent Skills, so prompts must be copy+pasted</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Download & Extract the Zip</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Download from Google Drive, then double-click to extract the .md files.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Open a Skill File</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Double-click any .md file to open it in a text editor.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Copy the Content</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Select all text (Cmd+A or Ctrl+A) and copy it (Cmd+C or Ctrl+C).</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Use in Gemini</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Option A:</strong> Click "Gem manager" in sidebar → "New Gem" → paste into instructions.</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1"><strong>Option B:</strong> Start a new chat and paste the skill as your first message.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white dark:bg-gray-900 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-bold text-blue-600 dark:text-blue-400">Pro Tip:</span> When pasting into chat, add "Please follow these instructions for our conversation:" before the skill content for best results.
                </p>
              </div>
            </Card>
          )}

          {/* Quick Tips */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
              <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">File Types</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">All skills are .md (Markdown) files - plain text, safe to open</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
              <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Customization</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Edit the skill files to match your industry, role, or preferences</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
              <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Combine Skills</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Copy content from multiple files to create custom workflows</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop CTA Section */}
      <section className="bg-gradient-to-r from-orange-500/10 to-red-500/10 py-12 border-y border-orange-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-semibold text-orange-600 dark:text-orange-400 mb-2">
            Want to learn how to turn these prompts and your own into AI agent workflows?
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Join Our Free AI Workflows Workshop
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            See these prompts in action and learn how to build AI workflows that save you 5-10 hours per week (even if you're non-technical).
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-8 py-6"
            onClick={() => {
              trackClick('Register for Workshop - Fortune 100 Library', {
                location: 'below_hero_cta'
              });
              window.location.href = "/ai-workflows";
            }}
          >
            Register for the Workshop
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Fortune100PromptLibrary;
