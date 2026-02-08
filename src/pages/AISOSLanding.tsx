import { useEffect, useRef, useState } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { trackClick } from "@/utils/posthog";
import { useTrackScrollDepth } from "@/hooks/use-posthog";
import { Check, Shield, Zap, Target, Brain, Heart, TreePine, GraduationCap, Download, Award, Star, Building2, Mail, Calendar } from "lucide-react";

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
      trackClick("Longhand CTA", { action: "scroll-to-form", location: "nav" });
      document.getElementById("get-started")?.scrollIntoView({ behavior: "smooth" });
    }}
    className="bg-longhand-accent hover:bg-longhand-accent-hover text-white text-sm font-semibold px-4 py-2 rounded-lg"
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
      name: "Longhand Academy",
      key: "premium",
      monthly: 50,
      annual: 33,
      period: annual ? "billed $400/year" : "billed monthly",
      desc: "Integrated learning system with self-paced AI curriculum and certification.",
      features: [
        "Everything in Free, plus:",
        "Learning mode with guided walkthroughs",
        "Self-paced AI curriculum",
        "AI Operator certification path",
        "Guided skill-building exercises",
        "Progress tracking & analytics",
        "Priority model access",
        "Monthly impact receipt",
      ],
      impact: annual ? "$6.60" : "$10",
      cta: "Join the Waitlist",
    },
    {
      name: "Longhand Pro",
      key: "pro",
      monthly: 125,
      annual: 83,
      period: annual ? "billed $1,000/year" : "billed monthly",
      desc: "For professionals who want advanced tools, live community, and direct support.",
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
    <section id="pricing" className="py-20 px-4 sm:px-6 border-t border-longhand-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-longhand-ink">Simple, transparent pricing</h2>
        <p className="text-longhand-muted text-center mb-8">Start free. Upgrade when you're ready.</p>

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className={`text-sm ${!annual ? "text-longhand-ink" : "text-longhand-muted"}`}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-12 h-6 rounded-full transition-colors ${annual ? "bg-longhand-accent" : "bg-gray-300"}`}
          >
            <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${annual ? "translate-x-6" : "translate-x-0"}`} />
          </button>
          <span className={`text-sm ${annual ? "text-longhand-ink" : "text-longhand-muted"}`}>
            Annual <span className="text-longhand-accent text-xs font-medium">Save 33%</span>
          </span>
        </div>

        {/* Free, Academy, Pro — 3-col grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Longhand Free */}
          <div className="rounded-2xl border border-longhand-accent/40 bg-longhand-accent-light p-6 flex flex-col relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-longhand-accent text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
              Most Popular
            </span>
            <h3 className="font-semibold text-longhand-ink mb-2 font-sans">Longhand Free</h3>
            <div className="mb-1">
              <span className="text-3xl font-bold text-longhand-ink font-sans">$0</span>
            </div>
            <p className="text-xs text-longhand-muted mb-4">free forever</p>
            <p className="text-longhand-ink/70 text-sm mb-6">Bring your own keys, use any LLM.</p>
            <ul className="space-y-2 mb-6 flex-1">
              {[
                "Built-in local AI model",
                "Bring your own LLM API keys",
                "Private, on-device processing",
                "Project & task management with Skill Studio, Workflow Builder, and Feedback Loop",
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-longhand-accent flex-shrink-0 mt-0.5" />
                  <span className="text-longhand-ink/80">{f}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                trackClick("Pricing CTA", { plan: "Longhand Free", cta_text: "Join the Waitlist" });
                document.getElementById("get-started")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-center font-semibold py-3 rounded-lg transition-colors w-full bg-longhand-accent hover:bg-longhand-accent-hover text-white"
            >
              Join the Waitlist
            </button>
          </div>

          {paidPlans.map((plan, i) => (
            <div key={i} className="rounded-2xl border border-longhand-border bg-white p-6 flex flex-col relative">
              <h3 className="font-semibold text-longhand-ink mb-2 font-sans">{plan.name}</h3>
              <div className="mb-1">
                <span className="text-3xl font-bold text-longhand-ink font-sans">
                  ${annual ? plan.annual : plan.monthly}
                </span>
                <span className="text-longhand-muted text-sm">/mo</span>
              </div>
              <p className="text-xs text-longhand-muted mb-4">{plan.period}</p>
              <p className="text-longhand-ink/70 text-sm mb-6">{plan.desc}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-longhand-accent flex-shrink-0 mt-0.5" />
                    <span className="text-longhand-ink/80">{f}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-longhand-accent mb-4 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5" />
                {plan.impact}/mo funds environmental & workforce impact
              </p>
              <button
                onClick={() => {
                  trackClick("Pricing CTA", { plan: plan.name, cta_text: "Join the Waitlist" });
                  document.getElementById("get-started")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-center font-semibold py-3 rounded-lg transition-colors block w-full bg-longhand-accent hover:bg-longhand-accent-hover text-white"
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Enterprise — full width */}
        <div className="rounded-2xl border border-longhand-border bg-white p-6 sm:p-8 mt-6 relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-longhand-accent text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
            White Label
          </span>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-longhand-ink text-lg font-sans">Longhand Enterprise</h3>
            <Building2 className="w-4 h-4 text-longhand-accent" />
          </div>
          <p className="text-longhand-ink/70 text-sm mb-5">White-label Longhand for your clients. We train you and your team how to do it all. Three packaging options — you control pricing, they get your brand.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {enterpriseOffers.map((offer, i) => (
              <div key={i} className="border border-longhand-border/60 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm text-longhand-ink">{offer.name}</span>
                  <span className="text-[10px] font-medium text-longhand-accent bg-longhand-accent-light px-1.5 py-0.5 rounded">{offer.tag}</span>
                </div>
                <p className="text-xs text-longhand-muted mb-1.5">{offer.desc}</p>
                <p className="text-xs font-medium text-longhand-ink/80">{offer.pricing}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="text-xs text-longhand-accent flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5" />
              20% impact contribution carries over to white-label
            </p>
            <a
              href="https://calendar.app.google/ybv193j7WX1L56vr8"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick("Pricing CTA", { plan: "Longhand Enterprise", cta_text: "Book a Call" })}
              className="inline-flex items-center justify-center gap-2 font-semibold py-3 px-8 rounded-lg transition-colors bg-longhand-paper hover:bg-longhand-border/50 text-longhand-ink border border-longhand-border"
            >
              <Calendar className="w-4 h-4" />
              Book a Call
            </a>
          </div>
        </div>
        <p className="text-center text-sm text-longhand-muted mt-8">Non-profit organization pricing available.</p>
      </div>
    </section>
  );
};

const AISOSLanding = () => {
  useTrackScrollDepth("Longhand Landing");

  return (
    <div className="min-h-screen bg-longhand-paper text-longhand-ink">
      <SEO
        title="Longhand — The practiced way to master AI."
        description="Longhand is a desktop app that teaches you AI by having you do real work with it. Create projects, delegate to AI agents, review deliverables. Private, local-first, works with any LLM. 20% of paid subscriptions fund environmental and workforce impact."
        keywords={["AI literacy", "learn AI", "AI fluency", "AI certification", "AI Operator certification", "AI delegation", "AI agents", "AI education", "Longhand", "local AI", "private AI", "agentic workflows"]}
      />

      {/* Navigation — warm, minimal */}
      <nav className="fixed top-0 w-full bg-longhand-paper/90 backdrop-blur-md z-50 border-b border-longhand-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center h-14">
          <a href="/" className="flex items-center">
            <img src="/longhand-logo.png" alt="Longhand" className="h-8 w-auto" />
          </a>
          <NavCTA />
        </div>
      </nav>

      {/* Hero */}
      <section id="get-started" className="pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-longhand-ink mb-2 tracking-tight">
                All your AI in one private place.
              </h1>
              <p className="text-xl sm:text-2xl text-longhand-ink/80 mb-6">
                Longhand teaches while you work.
              </p>
              <p className="text-lg sm:text-xl text-longhand-ink/70 mb-4 max-w-lg mx-auto">
                Describe your project. Longhand breaks it into tasks, builds custom agent skills, runs workflows, and produces deliverables. You review and approve.
              </p>
              <p className="text-base text-longhand-muted mb-8 max-w-lg mx-auto">
                All from your desktop. Works with any LLM and AI tool provider. No prompts. No copy-pasting. No starting from scratch.
              </p>
              <KitForm className="max-w-lg mx-auto" id="hero-kit-form" />
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-longhand-muted mt-4 justify-center">
                <span>Learn by doing real work</span>
                <span className="hidden sm:inline">·</span>
                <span>Works with ChatGPT, Claude, or Gemini</span>
              </div>
            </div>

            {/* Product Shot */}
            <div className="flex justify-center items-center min-h-[420px] sm:min-h-[480px]">
              <div className="w-full max-w-md lg:max-w-lg rounded-xl overflow-hidden shadow-xl shadow-longhand-ink/5 border border-longhand-border">
                <img
                  src="/longhand-screenshot.png"
                  alt="Longhand app dashboard showing projects, tasks, and deliverables"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 px-4 sm:px-6 border-t border-longhand-border">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm text-longhand-muted">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-longhand-accent" />
            <span>Safe, structured AI workflows you control</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-longhand-accent" />
            <span>Bring your own LLM keys</span>
          </div>
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4 text-longhand-accent" />
            <span>Offline private sandbox mode</span>
          </div>
        </div>
      </section>

      {/* How Longhand Works */}
      <section className="py-20 px-4 sm:px-6 border-t border-longhand-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-longhand-ink">How it works</h2>
          <p className="text-longhand-muted text-center mb-12">From project to deliverable in four steps.</p>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "CREATE A PROJECT",
                desc: "Define what you need and set a deadline. Longhand breaks it into tasks and tracks what's on track, at risk, or behind.",
                icon: <Target className="w-4 h-4" />,
              },
              {
                step: "2",
                title: "HIT DELEGATE",
                desc: "Longhand builds a workflow for each task, picks the right skills and tools, and runs them. You don't write prompts — Longhand plans the workflow.",
                icon: <Zap className="w-4 h-4" />,
              },
              {
                step: "3",
                title: "REVIEW FROM ONE QUEUE",
                desc: "Every deliverable — images, documents — lands in your Work Stream. Approve it, or reject with a note. Longhand retries with your feedback automatically.",
                icon: <Check className="w-4 h-4" />,
              },
              {
                step: "4",
                title: "GET BETTER OVER TIME",
                desc: "Upload SOPs. Add training examples. Build reusable skills. The more you use Longhand, the better it gets at your specific work. It compounds.",
                icon: <Brain className="w-4 h-4" />,
              },
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-longhand-accent-light border border-longhand-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-longhand-accent font-bold text-sm">{s.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm tracking-wide text-longhand-accent mb-1 font-sans">{s.title}</h3>
                  <p className="text-longhand-ink/70">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-20 px-4 sm:px-6 border-t border-longhand-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-longhand-accent-light border border-longhand-accent/20 rounded-full px-4 py-1.5 mb-6">
              <Award className="w-4 h-4 text-longhand-accent" />
              <span className="text-longhand-accent text-sm font-medium">AI Operator Certification</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-longhand-ink">Become a Certified AI Operator</h2>
            <p className="text-longhand-ink/70 max-w-2xl mx-auto">
              Learn AI by doing real work. Every feature has guided walkthroughs. Every task teaches a concept. Track your progress toward full certification.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            {[
              { tier: "Beginner", desc: "Core concepts", icon: "1", color: "text-longhand-muted border-longhand-border bg-longhand-paper" },
              { tier: "Explorer", desc: "10+ features used", icon: "2", color: "text-longhand-accent/60 border-longhand-accent/20 bg-longhand-accent-light" },
              { tier: "Operator", desc: "25+ features mastered", icon: "3", color: "text-longhand-accent/80 border-longhand-accent/30 bg-longhand-accent-light" },
              { tier: "Certified", desc: "Full certification", icon: "4", color: "text-longhand-accent border-longhand-accent/40 bg-longhand-accent-light" },
            ].map((t, i) => (
              <div key={i} className={`rounded-xl border p-4 text-center ${t.color}`}>
                <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-sm">{t.icon}</span>
                </div>
                <h3 className="font-semibold text-sm mb-1 font-sans">{t.tier}</h3>
                <p className="text-xs text-longhand-muted">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-longhand-muted">
            <Star className="w-4 h-4 text-longhand-accent" />
            <span>37 trackable features · 4 certification tiers · Included with Academy</span>
          </div>
        </div>
      </section>

      {/* Impact Report Section */}
      <section className="py-20 px-4 sm:px-6 border-t border-longhand-border">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-longhand-accent-light border border-longhand-accent/20 rounded-full px-4 py-1.5 mb-6">
                <Heart className="w-4 h-4 text-longhand-accent" />
                <span className="text-longhand-accent text-sm font-medium">AI that gives back</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-longhand-ink">See exactly where your subscription makes a difference</h2>
              <p className="text-longhand-ink/70 mb-6">
                20% of every Longhand subscription goes directly to environmental offsets, AI reskilling grants, and mental health support for workers affected by AI. Your monthly Impact Report shows you exactly where every dollar went.
              </p>
              <ul className="space-y-3">
                {[
                  { icon: <TreePine className="w-4 h-4 text-longhand-accent flex-shrink-0 mt-0.5" />, text: "2.4 tons of CO\u2082 offset per month via Gold Standard credits" },
                  { icon: <GraduationCap className="w-4 h-4 text-longhand-accent flex-shrink-0 mt-0.5" />, text: "AI reskilling grants funded through TechBridge" },
                  { icon: <Heart className="w-4 h-4 text-longhand-accent flex-shrink-0 mt-0.5" />, text: "Therapy and wellness sessions for AI-affected workers" },
                  { icon: <Check className="w-4 h-4 text-longhand-accent flex-shrink-0 mt-0.5" />, text: "Quarterly independent audits — full transparency" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {item.icon}
                    <span className="text-longhand-ink/80 text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-[320px] bg-white border border-longhand-border rounded-2xl p-6 shadow-lg shadow-longhand-ink/5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-full bg-longhand-accent-light flex items-center justify-center">
                    <Heart className="w-3.5 h-3.5 text-longhand-accent" />
                  </div>
                  <span className="text-xs text-longhand-muted font-medium tracking-wide uppercase">Monthly Impact Receipt</span>
                </div>
                <div className="border-t border-dashed border-longhand-border pt-4 space-y-3">
                  {[
                    { label: "Environmental Offset", amount: "$3.00", detail: "Gold Standard" },
                    { label: "Workforce Development", amount: "$4.00", detail: "TechBridge" },
                    { label: "Mental Fitness", amount: "$3.00", detail: "Wellness fund" },
                  ].map((line, i) => (
                    <div key={i} className="flex justify-between items-start">
                      <div>
                        <p className="text-longhand-ink text-sm font-medium">{line.label}</p>
                        <p className="text-longhand-muted text-xs">{line.detail}</p>
                      </div>
                      <span className="text-longhand-accent text-sm font-semibold">{line.amount}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-dashed border-longhand-border mt-4 pt-4 flex justify-between items-center">
                  <span className="text-longhand-ink text-sm font-semibold">Your impact this month</span>
                  <span className="text-longhand-accent font-bold">$10.00</span>
                </div>
                <p className="text-longhand-muted text-xs mt-3 text-center">20% of your $50/mo subscription</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 px-4 sm:px-6 border-t border-longhand-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-longhand-accent-light border border-longhand-accent/20 rounded-full px-4 py-1.5 mb-6">
            <Shield className="w-4 h-4 text-longhand-accent" />
            <span className="text-longhand-accent text-sm font-medium">Private by default</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-longhand-ink">Your data never leaves your machine</h2>
          <p className="text-longhand-ink/70 mb-10 max-w-2xl mx-auto">
            Longhand runs entirely on your computer. Your projects, conversations, and work history stay in a local folder. We have zero access to your data.
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
              <div key={i} className="bg-white border border-longhand-border rounded-xl p-5 text-left">
                <h3 className="font-semibold text-longhand-ink mb-2 font-sans">{item.title}</h3>
                <p className="text-longhand-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why People Choose Longhand */}
      <section className="py-20 px-4 sm:px-6 border-t border-longhand-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-longhand-ink">Built for how people actually work</h2>
          <div className="space-y-4">
            {[
              {
                title: "Nothing ships without your approval",
                desc: "You review every output before it goes anywhere. Score work 1-10. Track quality over time.",
              },
              {
                title: "Projects and deadlines, not chat windows",
                desc: "Projects, tasks, workflows, progress tracking — a system you already know, with AI agents doing the work.",
              },
              {
                title: "Mark what's AI and what's yours",
                desc: "Tag tasks as AI-delegated or human-owned, so you always know what needs your hands versus your judgment.",
              },
              {
                title: "Connect your tools",
                desc: "Plug in MCP servers, APIs, and databases. Longhand uses them as tools inside workflows — no coding required.",
              },
              {
                title: "It compounds",
                desc: "Every SOP you upload, every skill you train, every workflow you approve makes the next one faster and better.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white border border-longhand-border rounded-xl p-5">
                <Check className="w-5 h-5 text-longhand-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-longhand-ink mb-1 font-sans">{item.title}</h3>
                  <p className="text-longhand-ink/70 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 border-t border-longhand-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-longhand-ink">Questions</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {[
              {
                q: "Is it really free?",
                a: "Yes. Longhand Free gives you full access to local LLMs and your own API keys with complete privacy. No credit card required, no time limit. Academy and Pro tiers unlock certification, analytics, and advanced tools.",
              },
              {
                q: "What platforms do you support?",
                a: "Longhand runs natively on Mac (Apple Silicon & Intel). It's a desktop app that runs locally on your computer — not in the cloud. Windows coming soon.",
              },
              {
                q: "Can't I just use ChatGPT?",
                a: "ChatGPT is a blank canvas you go to. Longhand comes to you with structured work, tracks follow-ups, learns your context, and holds your AI team accountable. It's the difference between a gym membership and a trainer who shows up every morning.",
              },
              {
                q: "Is my data private?",
                a: "Longhand runs on your computer. Your data stays in a local folder. AI calls go directly from your machine to your provider using your own API key. We have zero access. You can also run fully offline with the built-in local AI model.",
              },
              {
                q: "Do I need an API key?",
                a: "You can use Longhand with your own OpenAI, Anthropic, or Google Gemini key — or run fully offline with the built-in local AI model. No API key required to get started.",
              },
              {
                q: "How fast does it learn?",
                a: "Day 1: your name, role, and priorities. Day 7: your patterns and preferences. Day 30: your org, projects, and working style. It only compounds from there.",
              },
              {
                q: "What are the requirements?",
                a: "macOS 13+ (Apple Silicon or Intel). Around 10GB disk space for the app and local AI model. Internet connection optional — offline mode works without one.",
              },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-longhand-border rounded-xl px-4 bg-white">
                <AccordionTrigger className="text-left text-longhand-ink hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-longhand-ink/70">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 border-t border-longhand-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-longhand-ink">Stop managing AI. Start leading it.</h2>
          <p className="text-longhand-ink/70 text-lg mb-8">Your first project is the hardest part. After that, it compounds.</p>
          <div className="flex justify-center mb-4">
            <button
              onClick={() => {
                trackClick("Longhand CTA", { action: "join-waitlist", location: "final-cta" });
                document.getElementById("get-started")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-longhand-accent hover:bg-longhand-accent-hover text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Join the Waitlist
            </button>
          </div>
          <p className="text-sm text-longhand-muted mt-4">Mac · Apple Silicon & Intel · No account needed</p>
          <p className="text-xs text-longhand-muted/70 mt-2">Free forever. No credit card required.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 border-t border-longhand-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-longhand-muted">
          <p>&copy; {new Date().getFullYear()} Longhand. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-longhand-ink transition-colors">Privacy</a>
            <a href="mailto:hello@technical-leaders.com" className="hover:text-longhand-ink transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AISOSLanding;
