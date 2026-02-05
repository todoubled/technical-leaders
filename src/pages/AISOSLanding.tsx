import { useEffect, useRef } from "react";
import SEO from "@/components/SEO";
import { HeroHeadlinePlayer } from "@/components/HeroHeadlinePlayer";
import { WhatsAppDemoPlayer } from "@/components/WhatsAppDemoPlayer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { trackClick } from "@/utils/posthog";
import { useTrackScrollDepth } from "@/hooks/use-posthog";
import { Check, Shield, Zap, Target, Brain, Heart, TreePine, GraduationCap } from "lucide-react";

const T = () => <span className="text-emerald-400 font-bold">T</span>;

const KIT_FORM_ID = "329f9e77f7";

const KitForm = ({ className = "" }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || containerRef.current.querySelector("script")) return;
    const script = document.createElement("script");
    script.async = true;
    script.dataset.uid = KIT_FORM_ID;
    script.src = `https://techleaders.kit.com/${KIT_FORM_ID}/index.js`;
    containerRef.current.appendChild(script);
  }, []);

  return <div ref={containerRef} className={className} />;
};

const NavCTA = () => (
  <Button
    onClick={() => {
      trackClick("T CTA", { action: "scroll-to-form", location: "nav" });
      document.getElementById("get-started")?.scrollIntoView({ behavior: "smooth" });
    }}
    className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-lg"
  >
    Get Started Free
  </Button>
);

const AISOSLanding = () => {
  useTrackScrollDepth("T Landing");

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100">
      <SEO
        title="T — Set Goals. Delegate to AI. Approve Results."
        description="T is a free desktop app that turns your business goals into AI-delegated work you review and approve. Runs privately on your computer. No prompts. No tabs. Just results."
        keywords={["AI delegation", "AI agents", "OKR", "AI productivity", "WhatsApp AI", "leadership automation", "T app", "agentic workflows", "AI for leaders"]}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0a0a0f]/90 backdrop-blur-md z-50 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center h-14">
          <a href="/" className="flex items-center">
            <img src="/orange-logo.png" alt="Technical Leaders" className="h-8 w-auto" />
          </a>
          <NavCTA />
        </div>
      </nav>

      {/* Hero */}
      <section id="get-started" className="pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <HeroHeadlinePlayer />
              </div>
              <p className="text-lg sm:text-xl text-gray-400 mb-4 max-w-lg mx-auto lg:mx-0">
                Set business goals. <T /> delegates the work to AI agents. You review and approve the results.
              </p>
              <p className="text-base text-gray-500 mb-8 max-w-lg mx-auto lg:mx-0">
                All from your desktop or over WhatsApp. No prompts. No copy-pasting. No starting from scratch.
              </p>
              <KitForm className="max-w-lg mx-auto lg:mx-0" />
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 mt-4 justify-center lg:justify-start">
                <span>Free during beta</span>
                <span className="hidden sm:inline">·</span>
                <span>Mac + Windows</span>
                <span className="hidden sm:inline">·</span>
                <span>No account needed</span>
              </div>
            </div>

            {/* Product Shots */}
            <div className="relative flex justify-center items-end min-h-[420px] sm:min-h-[480px]">
              <div className="w-full max-w-md lg:max-w-lg rounded-xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
                <img
                  src="/t-dashboard.png"
                  alt="T app dashboard showing goals, key results, and performance metrics"
                  className="w-full h-auto block"
                />
              </div>
              <div className="absolute -bottom-6 -right-2 sm:right-0 lg:-right-4 w-[160px] sm:w-[180px] lg:w-[200px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                <WhatsAppDemoPlayer />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Runs locally on your computer</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span>Works with your own API keys</span>
          </div>
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4 text-emerald-400" />
            <span>Optional offline AI mode</span>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">You're doing AI work your AI should be doing</h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">If any of this sounds familiar, you're not alone.</p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "Copying outputs between ChatGPT tabs and docs",
              "Rewriting the same prompts every week",
              "No system for reviewing what AI produces",
              "Starting from scratch every time you switch context",
              "Wondering if AI actually saved you time today",
              "No way to build on what worked last month",
            ].map((pain, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/[0.03] border border-white/5 rounded-lg p-4">
                <span className="text-red-400/70 text-lg leading-none mt-0.5">-</span>
                <p className="text-gray-400 text-sm">{pain}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-300 mt-10 text-lg font-medium">
            <T /> replaces all of that with one loop: <span className="text-emerald-400">set goals → delegate → review → improve</span>
          </p>
        </div>
      </section>

      {/* How T Works */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">How it works</h2>
          <p className="text-gray-500 text-center mb-12">From goal to done in four moves.</p>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "SET GOALS WITH OKRS",
                desc: <>Define objectives, key results, and deadlines. <T /> tracks what's on track, at risk, or behind — just like you would with a real team.</>,
                icon: <Target className="w-4 h-4" />,
              },
              {
                step: "2",
                title: "HIT DELEGATE",
                desc: <><T /> breaks your key result into tasks, picks the right AI skills for each one, and runs them. You don't write prompts — <T /> plans the workflow.</>,
                icon: <Zap className="w-4 h-4" />,
              },
              {
                step: "3",
                title: "REVIEW FROM ONE QUEUE",
                desc: <>Every output lands in your Work Stream. Approve it (and download as a Word doc), or reject with a note — <T /> retries with your feedback automatically.</>,
                icon: <Check className="w-4 h-4" />,
              },
              {
                step: "4",
                title: "GET SMARTER OVER TIME",
                desc: <>Upload SOPs. Add training examples. Build reusable Skills. The more you use <T />, the better it gets at your specific work — it compounds.</>,
                icon: <Brain className="w-4 h-4" />,
              },
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-emerald-400 font-bold text-sm">{s.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm tracking-wide text-emerald-400 mb-1">{s.title}</h3>
                  <p className="text-gray-400">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <KitForm />
          </div>
        </div>
      </section>

      {/* Impact Report Section */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
                <Heart className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-medium">AI that gives back</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">See exactly where your subscription makes a difference</h2>
              <p className="text-gray-400 mb-6">
                20% of every <T /> subscription goes directly to environmental offsets, AI reskilling grants, and mental health support for workers affected by AI. Your monthly Impact Report shows you exactly where every dollar went.
              </p>
              <ul className="space-y-3">
                {[
                  { icon: <TreePine className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />, text: "2.4 tons of CO₂ offset per month via Gold Standard credits" },
                  { icon: <GraduationCap className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />, text: "AI reskilling grants funded through TechBridge" },
                  { icon: <Heart className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />, text: "Therapy and wellness sessions for AI-affected workers" },
                  { icon: <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />, text: "Quarterly independent audits — full transparency" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {item.icon}
                    <span className="text-gray-300 text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-[320px] bg-white/[0.03] border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black/40">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Heart className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">Monthly Impact Receipt</span>
                </div>
                <div className="border-t border-dashed border-white/10 pt-4 space-y-3">
                  {[
                    { label: "Environmental Offset", amount: "$3.00", detail: "Gold Standard" },
                    { label: "Workforce Development", amount: "$4.00", detail: "TechBridge" },
                    { label: "Mental Fitness", amount: "$3.00", detail: "Wellness fund" },
                  ].map((line, i) => (
                    <div key={i} className="flex justify-between items-start">
                      <div>
                        <p className="text-gray-200 text-sm font-medium">{line.label}</p>
                        <p className="text-gray-500 text-xs">{line.detail}</p>
                      </div>
                      <span className="text-emerald-400 text-sm font-semibold">{line.amount}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-dashed border-white/10 mt-4 pt-4 flex justify-between items-center">
                  <span className="text-gray-300 text-sm font-semibold">Your impact this month</span>
                  <span className="text-emerald-400 font-bold">$10.00</span>
                </div>
                <p className="text-gray-600 text-xs mt-3 text-center">20% of your $50/mo subscription</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Private by default</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Your data never leaves your machine</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            <T /> runs entirely on your computer. Your goals, conversations, and work history stay in a local folder. We have zero access to your data.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              {
                title: "Local-first",
                desc: "Everything runs on your computer. No cloud sync. No server.",
              },
              {
                title: "Your API keys",
                desc: "AI calls go directly from your machine to OpenAI or Anthropic. No middleman.",
              },
              {
                title: "Offline mode",
                desc: "Switch to a local AI model (Ollama) and run 100% offline. Nothing leaves your device.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/5 rounded-xl p-5 text-left">
                <h3 className="font-semibold text-gray-200 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Leaders Choose T */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Built for how leaders actually work</h2>
          <div className="space-y-4">
            {[
              {
                title: "Nothing ships without your approval",
                desc: "You review every output before it goes anywhere. Score work 1-10. Track your AI team's quality over time.",
              },
              {
                title: "Goals and deadlines, not chat windows",
                desc: "OKRs, key results, delegation, progress tracking — the system you already know, powered by AI agents.",
              },
              {
                title: "Mark what's AI and what's yours",
                desc: "Tag key results as AI-delegated or human-owned, so you always know what needs your hands versus your judgment.",
              },
              {
                title: "Connect your tools",
                desc: "Plug in MCP servers, APIs, and databases. T uses them as tools inside workflows — no coding required.",
              },
              {
                title: "It compounds",
                desc: "Every SOP you upload, every skill you train, every workflow you approve makes the next one faster and better.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white/[0.02] border border-white/5 rounded-xl p-5">
                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-200 mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <KitForm />
          </div>
        </div>
      </section>

      {/* Free During Beta Banner */}
      <section className="py-12 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center">
            <p className="text-2xl font-bold mb-3"><T /> is free during beta</p>
            <p className="text-gray-400 max-w-xl mx-auto mb-6">
              We're building in public with early users. Sign up, set a goal, and see your first AI-generated output in under 5 minutes. No credit card. No catch.
            </p>
            <KitForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Questions</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {[
              {
                q: "Is it really free?",
                a: <>Yes. <T /> is free during beta with no limits. No credit card, no trial that converts. When we introduce pricing, beta users get early-adopter terms locked in.</>,
              },
              {
                q: "What platforms do you support?",
                a: <><T /> runs natively on Mac and Windows. It's a desktop app that runs locally on your computer — not in the cloud.</>,
              },
              {
                q: "Can't I just use ChatGPT?",
                a: <>ChatGPT is a blank canvas you go to. <T /> comes to you with structured work, tracks follow-ups, learns your context, and holds your AI team accountable. It's the difference between a gym membership and a trainer who shows up every morning.</>,
              },
              {
                q: "Is my data private?",
                a: <><T /> runs on your computer. Your data stays in a local folder. AI calls go directly from your machine to your provider using your own API key. We have zero access. You can also run fully offline with a local AI model.</>,
              },
              {
                q: "Do I need an API key?",
                a: <>Yes — <T /> uses your OpenAI or Anthropic key. Setup takes 2 minutes. Typical cost: $5-15/month in API usage.</>,
              },
              {
                q: "What if I don't use WhatsApp?",
                a: <>WhatsApp is optional. The desktop app works great on its own. But WhatsApp gives you 98% open rates and lets you approve work from your phone. Slack and SMS coming soon.</>,
              },
              {
                q: "How fast does it learn?",
                a: <>Day 1: your name, role, and priorities. Day 7: your patterns and preferences. Day 30: your org, goals, and working style. It only compounds from there.</>,
              },
              {
                q: "What are the requirements?",
                a: "Mac: macOS 13+, Apple Silicon or Intel. Windows: Windows 10+. Both: 500MB disk space, internet connection.",
              },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-white/5 rounded-xl px-4 bg-white/[0.02]">
                <AccordionTrigger className="text-left text-gray-200 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stop managing AI. Start leading it.</h2>
          <p className="text-gray-400 text-lg mb-8">Set your first goal. See results before lunch.</p>
          <KitForm />
          <p className="text-sm text-gray-500 mt-4">Mac + Windows · No account needed</p>
          <p className="text-xs text-gray-600 mt-2">Free during beta. No credit card required.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Technical Leaders. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy</a>
            <a href="mailto:hello@technical-leaders.com" className="hover:text-gray-300 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AISOSLanding;
