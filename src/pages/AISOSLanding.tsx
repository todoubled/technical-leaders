import { useEffect, useState } from "react";
import SEO from "@/components/SEO";
import { HeroHeadlinePlayer } from "@/components/HeroHeadlinePlayer";
import { WhatsAppDemoPlayer } from "@/components/WhatsAppDemoPlayer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { trackClick } from "@/utils/posthog";
import { useTrackScrollDepth } from "@/hooks/use-posthog";
import { Check, X, Download, QrCode, Sun, Lock, UserX, ShieldCheck } from "lucide-react";

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
        Download T
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
          Download T — Free
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
        title="T — Your AI Chief of Staff on WhatsApp (Free)"
        description="T is an agentic general manager and chief of staff that works for you. Give it your goals, connect your tools, and T does the work for you to approve. All on WhatsApp. Free during beta."
        keywords={["AI general manager", "AI chief of staff", "AI agent", "WhatsApp AI", "leadership automation", "T", "agentic workflows"]}
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
                Give T your goals and as much — or as little — context as you want. Connect your tools and systems, and T does the work for you to approve. All on WhatsApp. All running on your Mac.
              </p>
              <PlatformCTA />
              <p className="text-sm text-gray-500 mt-4">
                Free during beta · Mac only · Your first briefing tomorrow
              </p>
            </div>

            {/* WhatsApp Demo */}
            <div className="flex justify-center">
              <WhatsAppDemoPlayer />
            </div>
          </div>
        </div>
      </section>

      {/* Free During Beta Banner */}
      <section className="py-12 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center">
            <p className="text-2xl font-bold mb-3">T is free during beta</p>
            <p className="text-gray-400 max-w-xl mx-auto">
              We're building T in public with early users. Install it, connect WhatsApp, and tell us what works. No credit card. No catch.
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Sound familiar?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: "😰", text: "I start every day reacting to my inbox instead of driving my priorities" },
              { emoji: "🕳️", text: "Follow-ups fall through the cracks. I lost a deal last month because I forgot to reply." },
              { emoji: "🌀", text: "I know I should plan strategically, but there's never time. I'm always in the weeds." },
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
                <span className="text-3xl mb-4 block">{item.emoji}</span>
                <p className="text-gray-300 italic">"{item.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">A teammate that does the work</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            T is not another AI chatbot. It's an agentic general manager and chief of staff that automates your workflows — on WhatsApp.
          </p>
          <div className="space-y-6">
            {[
              { emoji: "☀️", title: "MORNING BRIEFING", desc: "Your calendar, priorities, and follow-ups — every morning at your time." },
              { emoji: "🌙", title: "EVENING REVIEW", desc: "Capture wins, flag carry-overs, set up tomorrow in 2 minutes." },
              { emoji: "📬", title: "FOLLOW-UP TRACKER", desc: "Never drop the ball. T surfaces what needs attention." },
              { emoji: "📊", title: "WEEKLY STRATEGIC REVIEW", desc: "Zoom out from tactics to strategy. Guided conversation every Sunday." },
              { emoji: "🧠", title: "MEMORY THAT LEARNS YOU", desc: "Gets smarter every day. After 30 days, it knows your org, your goals, your patterns." },
            ].map((f, i) => (
              <div key={i} className="flex items-start gap-4 bg-white/[0.02] border border-white/5 rounded-xl p-5">
                <span className="text-2xl flex-shrink-0">{f.emoji}</span>
                <div>
                  <h3 className="font-semibold text-sm tracking-wide text-emerald-400 mb-1">{f.title}</h3>
                  <p className="text-gray-400">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Up and running in 3 minutes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Download className="w-8 h-8 text-emerald-400" />, step: "1", title: "Download T", desc: "One file. Drag to Applications. Done." },
              { icon: <QrCode className="w-8 h-8 text-emerald-400" />, step: "2", title: "Connect WhatsApp", desc: "Scan a QR code inside the app." },
              { icon: <Sun className="w-8 h-8 text-emerald-400" />, step: "3", title: "Wake up to your first briefing", desc: "Tomorrow morning, your AI Chief of Staff shows up." },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                  {s.icon}
                </div>
                <p className="text-xs text-emerald-400 font-semibold mb-1">STEP {s.step}</p>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <PlatformCTA />
          </div>
        </div>
      </section>

      {/* Install Guide */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Install in 60 seconds</h2>
          <div className="space-y-8">
            {[
              { step: "1", title: "DOWNLOAD", desc: "Click \"Download T\" above (~30MB — smaller than a podcast episode)." },
              { step: "2", title: "INSTALL", desc: "Open the .dmg and drag T to your Applications folder." },
              { step: "3", title: "OPEN & SET UP", desc: "Open T. Enter your name, role, and priorities." },
              { step: "4", title: "CONNECT WHATSAPP", desc: "Scan the QR code with your phone. That's it." },
              { step: "5", title: "DONE", desc: "T lives in your menu bar. Your first morning briefing arrives tomorrow." },
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
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">This isn't ChatGPT with a calendar</h2>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 pr-4 text-gray-400 font-medium"></th>
                  <th className="py-3 px-4 text-gray-400 font-medium text-center">ChatGPT</th>
                  <th className="py-3 pl-4 text-emerald-400 font-semibold text-center">T</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "Proactive briefings",
                  "Structured cadences",
                  "Learns your context",
                  "Follow-up tracking",
                  "WhatsApp delivery",
                  "Accountability",
                  "Runs on your Mac",
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="py-3 pr-4 text-gray-300">{row}</td>
                    <td className="py-3 px-4 text-center"><X className="w-4 h-4 text-gray-600 mx-auto" /></td>
                    <td className="py-3 pl-4 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                  </tr>
                ))}
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-gray-300">Price</td>
                  <td className="py-3 px-4 text-center text-gray-400">$20/mo</td>
                  <td className="py-3 pl-4 text-center text-emerald-400 font-semibold">Free (beta)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-500 mt-8 italic">
            "ChatGPT answers questions. T does the work."
          </p>
        </div>
      </section>

      {/* Privacy & Trust */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Your data stays on your Mac</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            T runs entirely on your computer. No cloud. No accounts. No data collection.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Lock className="w-8 h-8 text-emerald-400" />, title: "LOCAL-FIRST", desc: "Everything — your conversations, memories, priorities — lives in a folder on your Mac. We never see it." },
              { icon: <UserX className="w-8 h-8 text-emerald-400" />, title: "NO ACCOUNTS", desc: "No signup. No login. No email required to use T. Just download and go." },
              { icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />, title: "YOUR AI KEY", desc: "T uses your own AI provider key (OpenAI or Anthropic). Your conversations go directly to them — not through us." },
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/5 rounded-xl p-6 text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-semibold text-sm tracking-wide text-emerald-400 mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">What leaders are saying</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "I've tried Notion, Todoist, and three different AI tools. T is the first thing that actually stuck — because it comes to me, I don't go to it.", author: "VP of Engineering", company: "SaaS company" },
              { quote: "The morning briefing alone changed my mornings. I haven't missed a follow-up in 3 weeks.", author: "Founder & CEO", company: "12-person agency" },
              { quote: "It's like having a chief of staff for free. I keep waiting for the catch.", author: "Director of Operations", company: "Consulting firm" },
            ].map((t, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
                <p className="text-gray-300 italic mb-4">"{t.quote}"</p>
                <p className="text-sm text-gray-500">— {t.author}, {t.company}</p>
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
                a: "Yes. T is completely free during beta. No credit card, no trial that converts, no \"freemium\" limits. We're building T with early users and want real feedback. When we introduce pricing (likely $97-297/mo), beta users will get generous early-adopter terms.",
              },
              {
                q: "Why Mac only?",
                a: "T runs as a native app on your computer (not in the cloud), and we started with Mac because most of our early users are on macOS. Windows support is actively in development. Join the waitlist and we'll notify you the moment it's ready.",
              },
              {
                q: "What happens when beta ends?",
                a: "We'll give you plenty of notice before any pricing changes. Beta users who help shape the product will get significant discounts or early-adopter pricing locked in. Your data and setup will carry over seamlessly.",
              },
              {
                q: "Can't I just use ChatGPT for this?",
                a: "ChatGPT is a blank canvas — you go to it, prompt it, remember to use it. T comes to you with structured briefings, tracks follow-ups, learns your context, and holds you accountable. It's the difference between owning a gym membership and having a personal trainer show up every morning.",
              },
              {
                q: "Is my data private?",
                a: "Completely. T runs on your Mac. Your conversations, priorities, and memories stay in a local folder. We have zero access to your data. AI calls go directly from your machine to OpenAI/Anthropic using your own API key. No middleman.",
              },
              {
                q: "Do I need an AI API key?",
                a: "Yes — T uses your OpenAI or Anthropic API key to power the AI. The setup wizard walks you through getting one (takes 2 minutes). Typical cost is $5-15/month in API usage depending on how much you chat with T.",
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
            T for Windows is in development. Drop your email and we'll let you know the moment it's ready.
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

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Your first briefing is tomorrow morning</h2>
          <p className="text-gray-400 text-lg mb-8">3 minutes to install. A lifetime of clarity.</p>
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
