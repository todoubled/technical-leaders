import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { trackClick } from "@/utils/posthog";
import { useTrackScrollDepth } from "@/hooks/use-posthog";
import { Check, X, CreditCard, QrCode, Sun } from "lucide-react";

const STRIPE_LINKS = {
  leader: "#", // Replace with Stripe checkout link
  executive: "#", // Replace with Stripe checkout link
  strategic: "#", // Replace with Stripe checkout link
};

const handleCTA = (plan: string = "leader") => {
  trackClick("T CTA", { plan, location: "landing-page" });
  window.location.href = STRIPE_LINKS[plan as keyof typeof STRIPE_LINKS] || STRIPE_LINKS.leader;
};

const AISOSLanding = () => {
  useTrackScrollDepth("T Landing");

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100">
      <SEO
        title="Meet T — Your GM and Chief of Staff on WhatsApp"
        description="T is an agentic general manager and chief of staff that works for you. Goes wide or deep on any topic. Automates complete workflows safely and simply. On WhatsApp. $97/mo."
        keywords={["AI general manager", "AI chief of staff", "AI agent", "WhatsApp AI", "leadership automation", "T", "agentic workflows"]}
      />

      {/* Navigation - minimal */}
      <nav className="fixed top-0 w-full bg-[#0a0a0f]/90 backdrop-blur-md z-50 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center h-14">
          <a href="/" className="flex items-center">
            <img src="/orange-logo.png" alt="Technical Leaders" className="h-8 w-auto" />
          </a>
          <Button
            onClick={() => handleCTA("leader")}
            className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-lg"
          >
            Meet T
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                Meet T. Your GM and Chief of Staff,{" "}
                <span className="text-emerald-400">on WhatsApp.</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
                T goes wide or deep on any topic. Automates your workflows. Does the work so you can make the calls.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={() => handleCTA("leader")}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-semibold px-8 py-6 rounded-xl"
                >
                  Get Started — $97/mo
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Cancel anytime. First briefing tomorrow morning.
              </p>
            </div>

            {/* WhatsApp Mockup */}
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <div className="bg-[#111b21] rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/10 border border-white/5">
                  {/* WhatsApp header */}
                  <div className="bg-[#1f2c34] px-4 py-3 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold">T</div>
                    <div>
                      <p className="text-white text-sm font-medium">T</p>
                      <p className="text-gray-400 text-xs">online</p>
                    </div>
                  </div>
                  {/* Chat bubbles */}
                  <div className="p-4 space-y-3 bg-[#0b141a]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}>
                    <div className="max-w-[85%]">
                      <div className="bg-[#005c4b] rounded-lg rounded-tl-none px-3 py-2 text-sm leading-relaxed">
                        <p>☀️ Good morning, Sarah. Friday, Jan 31.</p>
                        <p className="mt-3 font-medium">📅 YOUR DAY</p>
                        <p>• 9:00 — Team standup</p>
                        <p>• 11:00 — Client call (Acme Corp)</p>
                        <p>• 2:30 — Board prep with CFO</p>
                        <p className="mt-3 font-medium">🎯 TOP 3 PRIORITIES</p>
                        <p>1. Close the Acme proposal</p>
                        <p>2. Review Q1 hiring plan</p>
                        <p>3. Follow up with investor (day 5)</p>
                        <p className="mt-3 font-medium">📬 2 FOLLOW-UPS DUE</p>
                        <p>• Sarah Chen — proposal (5 days, no reply)</p>
                        <p>• Mike Torres — intro request (3 days)</p>
                        <p className="mt-3">💡 You've had back-to-back meetings 4 of 5 days. When is deep work happening this week?</p>
                        <p className="mt-3">How's your energy today? (1-10)</p>
                        <p className="text-[10px] text-gray-400 text-right mt-1">6:00 AM ✓✓</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            T is not another AI chatbot. It's an agentic general manager and chief of staff that goes wide or deep on any topic, automating complete workflows safely and simply — on WhatsApp.
          </p>
          <div className="space-y-6">
            {[
              { emoji: "☀️", title: "MORNING BRIEFING", desc: "Your calendar, priorities, and follow-ups — every morning at your time." },
              { emoji: "🌙", title: "EVENING REVIEW", desc: "Capture wins, flag carry-overs, set up tomorrow in 2 minutes." },
              { emoji: "📬", title: "FOLLOW-UP TRACKER", desc: "Never drop the ball. AI scans your email and surfaces what needs attention." },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Up and running in 5 minutes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <CreditCard className="w-8 h-8 text-emerald-400" />, step: "1", title: "Subscribe", desc: "Choose your plan. Apple Pay, Google Pay, or card." },
              { icon: <QrCode className="w-8 h-8 text-emerald-400" />, step: "2", title: "Connect WhatsApp", desc: "Scan a QR code. That's it." },
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
                  <td className="py-3 pl-4 text-center text-emerald-400 font-semibold">$97/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-500 mt-8 italic">
            "ChatGPT answers questions. T does the work."
          </p>
        </div>
      </section>

      {/* Value Anchor */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Less than coffee. More than coaching.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: "☕", title: "DAILY COFFEE", price: "$5-7/day ($150-210/mo)", desc: "Temporary energy boost" },
              { emoji: "🧑‍💼", title: "EXECUTIVE COACH", price: "$500-2,000/mo", desc: "2-4 sessions per month. No daily touchpoint." },
              { emoji: "🤖", title: "T", price: "$97-297/mo ($3.23/day)", desc: "Every single morning. Learns your context daily.", highlight: true },
            ].map((c, i) => (
              <div key={i} className={`rounded-xl p-6 border ${c.highlight ? "bg-emerald-500/10 border-emerald-500/30" : "bg-white/[0.03] border-white/5"}`}>
                <span className="text-3xl mb-3 block">{c.emoji}</span>
                <h3 className="font-semibold text-sm tracking-wide text-gray-300 mb-2">{c.title}</h3>
                <p className={`text-lg font-bold mb-2 ${c.highlight ? "text-emerald-400" : "text-white"}`}>{c.price}</p>
                <p className="text-gray-400 text-sm">{c.desc}</p>
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
              { quote: "The morning briefing alone is worth $97. I haven't missed a follow-up in 3 weeks.", author: "Founder & CEO", company: "12-person agency" },
              { quote: "It's like having a chief of staff who costs less than my Spotify family plan.", author: "Director of Operations", company: "Consulting firm" },
            ].map((t, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
                <p className="text-gray-300 italic mb-4">"{t.quote}"</p>
                <p className="text-sm text-gray-500">— {t.author}, {t.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Choose your plan</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Leader",
                price: "$97",
                popular: false,
                features: ["☀️ Morning briefing", "🌙 Evening review", "📬 Follow-up tracking", "🧠 Memory that learns you"],
                plan: "leader",
              },
              {
                name: "Executive",
                price: "$197",
                popular: true,
                features: ["Everything in Leader, plus:", "📊 Weekly strategic review", "📈 KPI tracking", "📰 AI news briefing"],
                plan: "executive",
              },
              {
                name: "Strategic",
                price: "$297",
                popular: false,
                features: ["Everything in Executive, plus:", "📅 Monthly deep dive", "🎯 Quarterly OKR planning", "⚡ Priority support"],
                plan: "strategic",
              },
            ].map((p, i) => (
              <div
                key={i}
                className={`rounded-xl p-6 border flex flex-col ${
                  p.popular
                    ? "bg-emerald-500/10 border-emerald-500/30 relative"
                    : "bg-white/[0.03] border-white/5"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="font-bold text-lg mb-1">{p.name}</h3>
                <p className="text-3xl font-bold mb-1">
                  {p.price}<span className="text-base font-normal text-gray-400">/mo</span>
                </p>
                <ul className="space-y-2 mt-4 mb-6 flex-1">
                  {p.features.map((f, j) => (
                    <li key={j} className="text-sm text-gray-300">{f}</li>
                  ))}
                </ul>
                <Button
                  onClick={() => handleCTA(p.plan)}
                  className={`w-full font-semibold py-5 rounded-xl ${
                    p.popular
                      ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                      : "bg-white/10 hover:bg-white/15 text-white"
                  }`}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Annual billing: 2 months free. All plans include 7-day money-back guarantee. Cancel anytime.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Questions</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {[
              {
                q: "Can't I just use ChatGPT for this?",
                a: "ChatGPT is a blank canvas — you have to go to it, prompt it, and remember to use it. T comes to you with structured briefings, tracks your follow-ups, learns your context, and holds you accountable. It's the difference between owning a gym membership and having a personal trainer show up at your door every morning.",
              },
              {
                q: "Is my data private?",
                a: "Yes. Your conversations, priorities, and business data are never shared with other users or used to train AI models. Each user has an isolated, encrypted workspace.",
              },
              {
                q: "What if I don't use WhatsApp?",
                a: "WhatsApp works on any smartphone and takes 30 seconds to set up. We chose it because it has the highest open rates of any messaging platform (98%) and you already check it daily. Slack and SMS support coming soon.",
              },
              {
                q: "How long before it 'knows' me?",
                a: "T starts learning from your first conversation. By day 7, it knows your priorities and patterns. By day 30, it understands your org, your goals, and your working style. It only gets better from there.",
              },
              {
                q: "What if I need to pause or cancel?",
                a: "Cancel anytime from your billing portal — no calls, no guilt. If you pause, we keep your data for 90 days so you can pick up right where you left off.",
              },
              {
                q: "Is this just for CEOs?",
                a: "No. T is built for any senior leader — CEOs, VPs, directors, founders, fractional execs, GMs. If you're responsible for strategy and execution, this is for you.",
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Your first briefing is tomorrow morning</h2>
          <p className="text-gray-400 text-lg mb-8">5 minutes to set up. A lifetime of clarity.</p>
          <Button
            onClick={() => handleCTA("leader")}
            className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-semibold px-8 py-6 rounded-xl"
          >
            Meet T — $97/mo
          </Button>
          <p className="text-sm text-gray-500 mt-4">7-day money-back guarantee. Cancel anytime.</p>
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
          onClick={() => handleCTA("leader")}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-5 rounded-xl"
        >
          Meet T — $97/mo
        </Button>
      </div>
    </div>
  );
};

export default AISOSLanding;
