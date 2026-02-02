import { useEffect, useState } from "react";
import SEO from "@/components/SEO";
import { HeroHeadlinePlayer } from "@/components/HeroHeadlinePlayer";
import { WhatsAppDemoPlayer } from "@/components/WhatsAppDemoPlayer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { trackClick } from "@/utils/posthog";
import { useTrackScrollDepth } from "@/hooks/use-posthog";
import { Check, X, Download, QrCode, Sun, Lock, UserX, ShieldCheck } from "lucide-react";

const T = () => <span className="text-emerald-400 font-bold">T</span>;

const DMG_URL = "#"; // Replace with .dmg download URL
const WAITLIST_URL = "#"; // Replace with waitlist/email capture URL

type Platform = "mac" | "windows" | "mobile";

const usePlatform = (): Platform => {
  const [platform, setPlatform] = useState<Platform>("mac");
  useEffect(() => {
    const ua = navigator.userAgent;
    if (/iPhone|iPad|iPod|Android/i.test(ua)) {
      setPlatform("mobile");
    } else if (/Win/i.test(ua)) {
      setPlatform("windows");
    } else {
      setPlatform("mac");
    }
  }, []);
  return platform;
};

const handleDownload = () => {
  trackClick("T CTA", { action: "download", location: "landing-page" });
  window.location.href = DMG_URL;
};

const handleWaitlist = () => {
  trackClick("T CTA", { action: "waitlist", location: "landing-page" });
  window.location.href = WAITLIST_URL;
};

const NavCTA = () => {
  const platform = usePlatform();
  if (platform === "mac") {
    return (
      <Button onClick={handleDownload} className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-lg">
        Download <T />
      </Button>
    );
  }
  return (
    <Button onClick={handleWaitlist} className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-lg">
      Join Waitlist
    </Button>
  );
};

const PlatformCTA = () => {
  const platform = usePlatform();

  if (platform === "mac") {
    return (
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <Button
          onClick={handleDownload}
          className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-semibold px-8 py-6 rounded-xl"
        >
          Download <T /> — Free
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 justify-center lg:justify-start">
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <Button
          onClick={handleWaitlist}
          className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-semibold px-8 py-6 rounded-xl"
        >
          {platform === "windows" ? "Join the Waitlist — Windows Coming Soon" : "Join the Waitlist"}
        </Button>
      </div>
      {platform === "mobile" && (
        <p className="text-sm text-gray-500">Download on your Mac later</p>
      )}
    </div>
  );
};

const AISOSLanding = () => {
  useTrackScrollDepth("T Landing");

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100">
      <SEO
        title="T — Your AI Team That Works While You Lead"
        description="You set business goals, T delegates the work to AI agents, and you approve the results. All from your private computer or securely over WhatsApp."
        keywords={["AI team", "AI agents", "OKR", "delegation", "WhatsApp AI", "leadership automation", "T", "agentic workflows"]}
      />

      {/* Navigation - minimal */}
      <nav className="fixed top-0 w-full bg-[#0a0a0f]/90 backdrop-blur-md z-50 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center h-14">
          <a href="/" className="flex items-center">
            <img src="/orange-logo.png" alt="Technical Leaders" className="h-8 w-auto" />
          </a>
          <NavCTA />
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <HeroHeadlinePlayer />
              </div>
              <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
                You set business goals, <T /> delegates the work to AI agents, and you approve the results. All from your private computer or securely over WhatsApp.
              </p>
              <PlatformCTA />
              <p className="text-sm text-gray-500 mt-4">
                Free during beta · Mac only · Your first briefing tomorrow
              </p>
            </div>

            {/* Product Shots */}
            <div className="relative flex justify-center items-end min-h-[420px] sm:min-h-[480px]">
              {/* Dashboard Screenshot - main, behind */}
              <div className="w-full max-w-md lg:max-w-lg rounded-xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
                <img
                  src="/t-dashboard.png"
                  alt="T app dashboard showing goals, key results, and performance metrics"
                  className="w-full h-auto block"
                />
              </div>
              {/* WhatsApp Demo - overlapping bottom-right */}
              <div className="absolute -bottom-6 -right-2 sm:right-0 lg:-right-4 w-[160px] sm:w-[180px] lg:w-[200px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                <WhatsAppDemoPlayer />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free During Beta Banner */}
      <section className="py-12 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center">
            <p className="text-2xl font-bold mb-3"><T /> is free during beta</p>
            <p className="text-gray-400 max-w-xl mx-auto">
              We're building <T /> in public with early users. Install it, connect WhatsApp, and tell us what works. No credit card. No catch.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Sound familiar?</h2>
          <div className="bg-white/[0.03] border border-white/5 rounded-xl p-8 max-w-2xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed">
              You know AI can help, but using it means copying prompts between ChatGPT tabs, managing outputs manually, and starting from scratch every time. There's no system, no quality control, and no way to build on what works.
            </p>
          </div>
        </div>
      </section>

      {/* How T Works */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">How <T /> works</h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "SET GOALS USING A FAMILIAR OKR FRAMEWORK",
                desc: <>Define objectives and measurable key results with deadlines. <T /> tracks progress and signals what's on track, at risk, or behind.</>,
              },
              {
                step: "2",
                title: "HIT \"DELEGATE\" AND WALK AWAY",
                desc: <><T /> breaks your key result into a sequence of tasks, assigns AI agents to each one, and runs them automatically. You don't write prompts or manage tools — <T /> plans the workflow for you.</>,
              },
              {
                step: "3",
                title: "REVIEW AND APPROVE FROM ONE QUEUE",
                desc: <>Every piece of AI output lands in your Work Stream for review. Approve good work (download it as a Word doc), or reject it with a note — <T /> automatically retries with your feedback, up to 3 times.</>,
              },
              {
                step: "4",
                title: "BUILD INSTITUTIONAL KNOWLEDGE OVER TIME",
                desc: <>Upload your SOPs, add training examples, and <T /> turns them into reusable Skills. The more you use it, the better it gets at your specific work.</>,
              },
              {
                step: "5",
                title: "STAY IN THE LOOP FROM ANYWHERE",
                desc: <>Connect WhatsApp to get notified when work is ready for review, approve or reject on the go, and get morning briefings and evening summaries on a schedule you set.</>,
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
            <PlatformCTA />
          </div>
        </div>
      </section>

      {/* Why Leaders Choose T */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Why leaders choose <T /></h2>
          <div className="space-y-6">
            {[
              {
                title: "You stay in control",
                desc: "Nothing ships without your approval. You score outputs 1-10 and see your AI team's performance over time.",
              },
              {
                title: "It fits how you already think",
                desc: "Goals, key results, deadlines, delegation — not chat windows and prompt engineering.",
              },
              {
                title: "Privacy when you need it",
                desc: "Mark sensitive goals as private, or run everything on a local AI model that never leaves your machine.",
              },
              {
                title: "Mark what's yours",
                desc: "Tag key results as AI-delegated or human-owned (HI), so you always know what needs your hands versus your judgment.",
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
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
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
                a: <>Yes. <T /> is completely free during beta. No credit card, no trial that converts, no "freemium" limits. We're building <T /> with early users and want real feedback. When we introduce pricing (likely $97-297/mo), beta users will get generous early-adopter terms.</>,
              },
              {
                q: "Why Mac only?",
                a: <><T /> runs as a native app on your computer (not in the cloud), and we started with Mac because most of our early users are on macOS. Windows support is actively in development. Join the waitlist and we'll notify you the moment it's ready.</>,
              },
              {
                q: "What happens when beta ends?",
                a: "We'll give you plenty of notice before any pricing changes. Beta users who help shape the product will get significant discounts or early-adopter pricing locked in. Your data and setup will carry over seamlessly.",
              },
              {
                q: "Can't I just use ChatGPT for this?",
                a: <>ChatGPT is a blank canvas — you go to it, prompt it, remember to use it. <T /> comes to you with structured briefings, tracks follow-ups, learns your context, and holds you accountable. It's the difference between owning a gym membership and having a personal trainer show up every morning.</>,
              },
              {
                q: "Is my data private?",
                a: <>Completely. <T /> runs on your Mac. Your conversations, priorities, and memories stay in a local folder. We have zero access to your data. AI calls go directly from your machine to OpenAI/Anthropic using your own API key. No middleman.</>,
              },
              {
                q: "Do I need an AI API key?",
                a: <>Yes — <T /> uses your OpenAI or Anthropic API key to power the AI. The setup wizard walks you through getting one (takes 2 minutes). Typical cost is $5-15/month in API usage depending on how much you chat with <T />.</>,
              },
              {
                q: "What if I don't use WhatsApp?",
                a: "WhatsApp has 98% open rates and you already check it daily. That's why we chose it. It takes 30 seconds to set up if you don't have it already. Slack and SMS support are coming.",
              },
              {
                q: "How long before it 'knows' me?",
                a: "Day 1, it knows your name, role, and priorities. By day 7, it understands your patterns. By day 30, it knows your org, your goals, and your working style. It only gets better from there.",
              },
              {
                q: "What are the system requirements?",
                a: "macOS 13 (Ventura) or later, 500MB of disk space, and an internet connection. Works on both Apple Silicon and Intel Macs.",
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

      {/* Windows Waitlist */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">On Windows? We're almost there.</h2>
          <p className="text-gray-400 mb-8">
            <T /> for Windows is in development. Drop your email and we'll let you know the moment it's ready.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              trackClick("T Waitlist", { location: "windows-section" });
              const form = e.target as HTMLFormElement;
              const email = (form.elements.namedItem("email") as HTMLInputElement).value;
              window.location.href = `${WAITLIST_URL}?email=${encodeURIComponent(email)}`;
            }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-emerald-500/50"
            />
            <Button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl"
            >
              Notify Me
            </Button>
          </form>
        </div>
      </section>

      {/* Final CTA - The Bottom Line */}
      <section className="py-24 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4"><T /> turns AI from a tool you use into a team you lead.</h2>
          <p className="text-gray-400 text-lg mb-8">3 minutes to install. A lifetime of leverage.</p>
          <PlatformCTA />
          <p className="text-sm text-gray-500 mt-4">macOS 13+ · 30MB · No account needed</p>
          <p className="text-xs text-gray-600 mt-2">Free during beta. No credit card required.</p>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Technical Leaders. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy</a>
            <a href="mailto:hello@technical-leaders.com" className="hover:text-gray-300 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0a0a0f]/95 backdrop-blur-md border-t border-white/10 p-3 sm:hidden z-50">
        <Button
          onClick={handleWaitlist}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-5 rounded-xl"
        >
          Join the Waitlist
        </Button>
      </div>
    </div>
  );
};

export default AISOSLanding;
