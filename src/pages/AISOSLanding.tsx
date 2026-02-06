import { useEffect, useRef, useState } from "react";
import SEO from "@/components/SEO";
import { HeroHeadlinePlayer } from "@/components/HeroHeadlinePlayer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { trackClick } from "@/utils/posthog";
import { useTrackScrollDepth } from "@/hooks/use-posthog";
import { Check, Shield, Zap, Target, Brain, Heart, TreePine, GraduationCap, Download, Award, Star, Building2, Mail, Calendar } from "lucide-react";

const T = () => <span className="text-emerald-600 font-bold">T</span>;

const DMG_URL = "https://drive.google.com/file/d/18F-BuyYCAzTajAhHi_U1y-WKKbNRl7Qb/view?usp=drive_link";

const KIT_FORM_ID = "329f9e77f7";

const KitForm = ({ className = "", id }: { className?: string; id?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || containerRef.current.querySelector("script")) return;
    const script = document.createElement("script");
    script.async = true;
    script.dataset.uid = KIT_FORM_ID;
    script.src = `https://techleaders.kit.com/${KIT_FORM_ID}/index.js`;
    containerRef.current.appendChild(script);
  }, []);

  return <div id={id} ref={containerRef} className={className} />;
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

const CHECKOUT_API = "https://licensing.t-app.workers.dev/checkout";

const PricingSection = () => {
  const [annual, setAnnual] = useState(false);
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const handleCheckout = async (planKey: string) => {
    setLoadingPlan(planKey);
    trackClick("Pricing CTA", { plan: planKey, billing: annual ? "annual" : "monthly", cta_text: "Get Started" });
    try {
      const res = await fetch(CHECKOUT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planKey, billing: annual ? "annual" : "monthly", machine_id: "", source: "web" }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("Checkout error:", data);
        setLoadingPlan(null);
      }
    } catch (err) {
      console.error("Checkout error:", err);
      setLoadingPlan(null);
    }
  };

  const paidPlans = [
    {
      name: "T Academy",
      key: "premium",
      monthly: 50,
      annual: 33,
      period: annual ? "billed $400/year" : "billed monthly",
      desc: "Integrated learning management system with self-paced AI curriculum and certification.",
      features: [
        "Everything in Free, plus:",
        "Learning mode with guided walkthroughs",
        "Self-paced AI curriculum (LMS)",
        "AI Operator certification path",
        "Guided skill-building exercises",
        "Progress tracking & analytics",
        "Priority model access",
        "Monthly impact receipt",
      ],
      impact: annual ? "$6.60" : "$10",
      cta: "Join the Waitlist",
      badge: "Learn AI",
      badgeColor: "bg-blue-500",
    },
    {
      name: "T Pro",
      key: "pro",
      monthly: 125,
      annual: 83,
      period: annual ? "billed $1,000/year" : "billed monthly",
      desc: "For professionals who want cutting-edge tools, live community, and direct support.",
      features: [
        "Everything in Academy, plus:",
        "Skill Forge — build custom AI skills",
        "Monthly AI release drops",
        "24/7 global community access",
        "Weekly office hours with experts",
        "Advanced workflow automation",
        "Early access to new features",
      ],
      impact: annual ? "$16.60" : "$25",
      cta: "Join the Waitlist",
      badge: "Best Value",
      badgeColor: "bg-purple-500",
    },
  ];

  const enterpriseOffers = [
    {
      name: "Branded License",
      tag: "Turnkey",
      desc: "Your name, logo, and colors on a fully managed app. We build it, deploy it, and push updates.",
      pricing: "$10K setup + $1K/mo",
      bestFor: "Budget, no dev team",
    },
    {
      name: "OEM Partnership",
      tag: "Revenue Share",
      desc: "Zero setup cost. Co-branded or white-labeled with custom skill packs for your vertical.",
      pricing: "$0 setup · 20% rev share · $2.5K/mo floor",
      bestFor: "Large audience",
    },
    {
      name: "Source License",
      tag: "Self-Serve",
      desc: "Full source code access with white-label build guide. Deploy and customize on your own.",
      pricing: "$50K one-time license",
      bestFor: "Dev team, wants ownership",
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">Simple, transparent pricing</h2>
        <p className="text-gray-500 text-center mb-8">Start free. Upgrade when you're ready.</p>

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className={`text-sm ${!annual ? "text-gray-800" : "text-gray-400"}`}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-12 h-6 rounded-full transition-colors ${annual ? "bg-emerald-500" : "bg-gray-300"}`}
          >
            <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${annual ? "translate-x-6" : "translate-x-0"}`} />
          </button>
          <span className={`text-sm ${annual ? "text-gray-800" : "text-gray-400"}`}>
            Annual <span className="text-emerald-600 text-xs font-medium">Save 33%</span>
          </span>
        </div>

        {/* Free, Academy, Pro — 3-col grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* T Free */}
          <div className="rounded-2xl border border-emerald-500/40 bg-emerald-50 p-6 flex flex-col relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
              Most Popular
            </span>
            <h3 className="font-semibold text-gray-800 mb-2">T Free</h3>
            <div className="mb-1">
              <span className="text-3xl font-bold text-gray-900">$0</span>
            </div>
            <p className="text-xs text-gray-500 mb-4">free forever</p>
            <p className="text-gray-600 text-sm mb-6">Bring your own keys, use any LLM.</p>
            <ul className="space-y-2 mb-6 flex-1">
              {[
                "Built-in local AI model",
                "Bring your own LLM API keys",
                "Private, on-device processing",
                "Project & task management with Skill Studio, Workflow Builder, and Feedback Loop",
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{f}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                trackClick("Pricing CTA", { plan: "T Free", cta_text: "Join the Waitlist" });
                document.getElementById("get-started")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-center font-semibold py-3 rounded-lg transition-colors w-full bg-emerald-500 hover:bg-emerald-600 text-white"
            >
              Join the Waitlist
            </button>
          </div>

          {paidPlans.map((plan, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col relative">
              {plan.badge && (
                <span className={`absolute -top-3 left-1/2 -translate-x-1/2 ${plan.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap`}>
                  {plan.badge}
                </span>
              )}
              <h3 className="font-semibold text-gray-800 mb-2">{plan.name}</h3>
              <div className="mb-1">
                <span className="text-3xl font-bold text-gray-900">
                  ${annual ? plan.annual : plan.monthly}
                </span>
                <span className="text-gray-500 text-sm">/mo</span>
              </div>
              <p className="text-xs text-gray-500 mb-4">{plan.period}</p>
              <p className="text-gray-600 text-sm mb-6">{plan.desc}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-emerald-600 mb-4 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5" />
                {plan.impact}/mo funds environmental & workforce impact
              </p>
              <button
                onClick={() => {
                  trackClick("Pricing CTA", { plan: plan.name, cta_text: "Join the Waitlist" });
                  document.getElementById("get-started")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-center font-semibold py-3 rounded-lg transition-colors block w-full bg-emerald-500 hover:bg-emerald-600 text-white"
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* T Enterprise — full width */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 mt-6 relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
            White Label
          </span>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-gray-800 text-lg">T Enterprise</h3>
            <Building2 className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-gray-600 text-sm mb-5">White-label T for your clients. We train you/your team how to do it all. Three packaging options — you control pricing, they get your brand.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {enterpriseOffers.map((offer, i) => (
              <div key={i} className="border border-gray-100 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm text-gray-800">{offer.name}</span>
                  <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">{offer.tag}</span>
                </div>
                <p className="text-xs text-gray-500 mb-1.5">{offer.desc}</p>
                <p className="text-xs font-medium text-gray-700">{offer.pricing}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="text-xs text-emerald-600 flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5" />
              20% impact contribution carries over to white-label
            </p>
            <a
              href="https://calendar.app.google/ybv193j7WX1L56vr8"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick("Pricing CTA", { plan: "T Enterprise", cta_text: "Book a Call" })}
              className="inline-flex items-center justify-center gap-2 font-semibold py-3 px-8 rounded-lg transition-colors bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-200"
            >
              <Calendar className="w-4 h-4" />
              Book a Call
            </a>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-8">Non-profit organization pricing available.</p>
      </div>
    </section>
  );
};

const AISOSLanding = () => {
  useTrackScrollDepth("T Landing");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <SEO
        title="T — Create Projects. Delegate to AI. Approve Deliverables."
        description="T is a free desktop AI assistant that runs privately on your Mac. Create projects, delegate tasks to AI agents, and review deliverables. Includes AI Operator certification, local LLM support, and human-in-the-loop review. 20% of paid subscriptions fund environmental and workforce impact."
        keywords={["local AI", "private AI assistant", "AI certification", "AI for executives", "human-in-the-loop AI", "AI Operator certification", "AI delegation", "AI agents", "AI productivity", "leadership automation", "T app", "agentic workflows"]}
      />

      {/* Navigation — stays dark */}
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
            <div className="text-center">
              <div className="mb-6">
                <HeroHeadlinePlayer />
              </div>
              <p className="text-lg sm:text-xl text-gray-600 mb-4 max-w-lg mx-auto">
                Create a project. <T /> breaks it into tasks, runs workflows, and produces deliverables. You review and approve.
              </p>
              <p className="text-base text-gray-500 mb-8 max-w-lg mx-auto">
                All from your desktop. No prompts. No copy-pasting. No starting from scratch. And no more wondering which AI tool is best for the job.
              </p>
              <KitForm className="max-w-lg mx-auto" id="hero-kit-form" />
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 mt-4 justify-center">
                <span>Free forever</span>
                <span className="hidden sm:inline">·</span>
                <span>Private AI on your computer</span>
                <span className="hidden sm:inline">·</span>
                <span>No account needed</span>
              </div>
            </div>

            {/* Product Shot */}
            <div className="flex justify-center items-center min-h-[420px] sm:min-h-[480px]">
              <div className="w-full max-w-md lg:max-w-lg rounded-xl overflow-hidden shadow-xl shadow-gray-300/50 border border-gray-200">
                <img
                  src="/t-screenshot.png"
                  alt="T app dashboard showing projects, tasks, and deliverables"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 px-4 sm:px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-600" />
            <span>Runs locally on your computer</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-emerald-600" />
            <span>Works with your own LLM API keys</span>
          </div>
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4 text-emerald-600" />
            <span>Optional offline AI mode</span>
          </div>
        </div>
      </section>

      {/* How T Works */}
      <section className="py-20 px-4 sm:px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">How it works</h2>
          <p className="text-gray-500 text-center mb-12">From project to deliverable in four moves.</p>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "CREATE A PROJECT",
                desc: <>Define what you need and set a deadline. <T /> breaks it into tasks and tracks what's on track, at risk, or behind.</>,
                icon: <Target className="w-4 h-4" />,
              },
              {
                step: "2",
                title: "HIT DELEGATE",
                desc: <><T /> builds a workflow for each task, picks the right skills and tools, and runs them. You don't write prompts — <T /> plans the workflow.</>,
                icon: <Zap className="w-4 h-4" />,
              },
              {
                step: "3",
                title: "REVIEW FROM ONE QUEUE",
                desc: <>Every deliverable — images, documents — lands in your Work Stream. Approve it, or reject with a note — <T /> retries with your feedback automatically.</>,
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
                <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-emerald-600 font-bold text-sm">{s.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm tracking-wide text-emerald-600 mb-1">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-20 px-4 sm:px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-6">
              <Award className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-600 text-sm font-medium">AI Operator Certification</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Become a Certified AI Operator</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn AI by doing real work. Every feature has guided walkthroughs. Every task teaches a concept. Track your progress toward full certification.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            {[
              { tier: "Beginner", desc: "Core concepts", icon: "1", color: "text-gray-500 border-gray-300 bg-gray-50" },
              { tier: "Explorer", desc: "10+ features used", icon: "2", color: "text-blue-600 border-blue-200 bg-blue-50" },
              { tier: "Operator", desc: "25+ features mastered", icon: "3", color: "text-purple-600 border-purple-200 bg-purple-50" },
              { tier: "Certified", desc: "Full certification", icon: "4", color: "text-emerald-600 border-emerald-200 bg-emerald-50" },
            ].map((t, i) => (
              <div key={i} className={`rounded-xl border p-4 text-center ${t.color}`}>
                <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-sm">{t.icon}</span>
                </div>
                <h3 className="font-semibold text-sm mb-1">{t.tier}</h3>
                <p className="text-xs text-gray-500">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Star className="w-4 h-4 text-emerald-600" />
            <span>37 trackable features · 4 certification tiers · Included with Premium</span>
          </div>
        </div>
      </section>

      {/* Impact Report Section */}
      <section className="py-20 px-4 sm:px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-6">
                <Heart className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-600 text-sm font-medium">AI that gives back</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">See exactly where your subscription makes a difference</h2>
              <p className="text-gray-600 mb-6">
                20% of every <T /> subscription goes directly to environmental offsets, AI reskilling grants, and mental health support for workers affected by AI. Your monthly Impact Report shows you exactly where every dollar went.
              </p>
              <ul className="space-y-3">
                {[
                  { icon: <TreePine className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />, text: "2.4 tons of CO₂ offset per month via Gold Standard credits" },
                  { icon: <GraduationCap className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />, text: "AI reskilling grants funded through TechBridge" },
                  { icon: <Heart className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />, text: "Therapy and wellness sessions for AI-affected workers" },
                  { icon: <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />, text: "Quarterly independent audits — full transparency" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {item.icon}
                    <span className="text-gray-700 text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-[320px] bg-white border border-gray-200 rounded-2xl p-6 shadow-lg shadow-gray-200/50">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center">
                    <Heart className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">Monthly Impact Receipt</span>
                </div>
                <div className="border-t border-dashed border-gray-200 pt-4 space-y-3">
                  {[
                    { label: "Environmental Offset", amount: "$3.00", detail: "Gold Standard" },
                    { label: "Workforce Development", amount: "$4.00", detail: "TechBridge" },
                    { label: "Mental Fitness", amount: "$3.00", detail: "Wellness fund" },
                  ].map((line, i) => (
                    <div key={i} className="flex justify-between items-start">
                      <div>
                        <p className="text-gray-800 text-sm font-medium">{line.label}</p>
                        <p className="text-gray-500 text-xs">{line.detail}</p>
                      </div>
                      <span className="text-emerald-600 text-sm font-semibold">{line.amount}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-dashed border-gray-200 mt-4 pt-4 flex justify-between items-center">
                  <span className="text-gray-700 text-sm font-semibold">Your impact this month</span>
                  <span className="text-emerald-600 font-bold">$10.00</span>
                </div>
                <p className="text-gray-400 text-xs mt-3 text-center">20% of your $50/mo subscription</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 px-4 sm:px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-6">
            <Shield className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-600 text-sm font-medium">Private by default</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Your data never leaves your machine</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            <T /> runs entirely on your computer. Your projects, conversations, and work history stay in a local folder. We have zero access to your data.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              {
                title: "Local-first",
                desc: "Everything runs on your computer. No cloud sync. No server.",
              },
              {
                title: "Your API keys",
                desc: "AI calls go directly from your machine to OpenAI, Anthropic, or Google Gemini. No middleman.",
              },
              {
                title: "Offline mode",
                desc: "Built-in local AI model — no setup required. Runs 100% offline. Nothing leaves your device.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 text-left">
                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Leaders Choose T */}
      <section className="py-20 px-4 sm:px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Built for how people actually work</h2>
          <div className="space-y-4">
            {[
              {
                title: "Nothing ships without your approval",
                desc: "You review every output before it goes anywhere. Score work 1-10. Track your AI team's quality over time.",
              },
              {
                title: "Projects and deadlines, not chat windows",
                desc: "Projects, tasks, workflows, progress tracking — a system you already know, powered by AI agents.",
              },
              {
                title: "Mark what's AI and what's yours",
                desc: "Tag tasks as AI-delegated or human-owned, so you always know what needs your hands versus your judgment.",
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
              <div key={i} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Questions</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {[
              {
                q: "Is it really free?",
                a: <>Yes. <T /> Free gives you full access to local LLMs and your own API keys with complete privacy. No credit card required, no time limit. Premium and Pro tiers unlock certification, analytics, and advanced tools.</>,
              },
              {
                q: "What platforms do you support?",
                a: <><T /> runs natively on Mac (Apple Silicon & Intel). It's a desktop app that runs locally on your computer — not in the cloud. Windows coming soon.</>,
              },
              {
                q: "Can't I just use ChatGPT?",
                a: <>ChatGPT is a blank canvas you go to. <T /> comes to you with structured work, tracks follow-ups, learns your context, and holds your AI team accountable. It's the difference between a gym membership and a trainer who shows up every morning.</>,
              },
              {
                q: "Is my data private?",
                a: <><T /> runs on your computer. Your data stays in a local folder. AI calls go directly from your machine to your provider using your own API key. We have zero access. You can also run fully offline with the built-in local AI model.</>,
              },
              {
                q: "Do I need an API key?",
                a: <>You can use <T /> with your own OpenAI, Anthropic, or Google Gemini key — or run fully offline with the built-in local AI model. No API key required to get started.</>,
              },
              {
                q: "How fast does it learn?",
                a: <>Day 1: your name, role, and priorities. Day 7: your patterns and preferences. Day 30: your org, projects, and working style. It only compounds from there.</>,
              },
              {
                q: "What are the requirements?",
                a: "macOS 13+ (Apple Silicon or Intel). Around 10GB disk space for the app and local AI model. Internet connection optional — offline mode works without one.",
              },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-gray-200 rounded-xl px-4 bg-white">
                <AccordionTrigger className="text-left text-gray-800 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 border-t border-gray-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stop managing AI. Start leading it.</h2>
          <p className="text-gray-600 text-lg mb-8">Create your first project. See deliverables before lunch.</p>
          <div className="flex justify-center mb-4">
            <button
              onClick={() => {
                trackClick("T CTA", { action: "join-waitlist", location: "final-cta" });
                document.getElementById("get-started")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Join the Waitlist
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">Mac · Apple Silicon & Intel · No account needed</p>
          <p className="text-xs text-gray-400 mt-2">Free forever. No credit card required.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Technical Leaders. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-gray-700 transition-colors">Privacy</a>
            <a href="mailto:hello@technical-leaders.com" className="hover:text-gray-700 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AISOSLanding;
