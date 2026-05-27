import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ArrowRight, Check, Star, Sparkles, Lock } from "lucide-react";
import { trackClick, trackConversion } from "@/utils/posthog";
import { useEffect, useState } from "react";

const HeroAlternative = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Track Kit form submissions via postMessage from the embedded iframe.
  // The iframe sidesteps the script-embed's currentScript/portal issues that
  // were preventing the form from rendering inside the Radix Dialog portal.
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin === 'https://techleaders.kit.com' &&
          event.data?.event === 'form_submitted') {
        trackConversion('Fortune 100 Library Signup', {
          source: 'kit_form',
          location: 'hero_modal'
        });
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/ai-in-ar.png"
          alt="AI Technology Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] z-0" />

      <div className="relative z-10 min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <div className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-pink-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold mb-8 animate-fade-in">
            <span>Free Prompt Library</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-bold leading-tight mb-8 animate-fade-in">
            <span className="block text-4xl sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Get the Same AI Prompts</span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 mt-2">Fortune 100 Leaders Use</span>
            <span className="block text-xl sm:text-2xl text-foreground/70 font-medium mt-4">Copy, paste & edit in 60 seconds — no developer required.</span>
          </h1>

          {/* Bullet Points */}
          <ul className="space-y-4 mb-10 max-w-xl mx-auto text-left">
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-lg text-foreground/90">Use <span className="font-semibold text-foreground">Fortune 100 prompts</span> for real business outcomes (not toy examples)</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-lg text-foreground/90">Build <span className="font-semibold text-foreground">agentic AI workflows in minutes</span> — no developer resources required</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
              <span className="text-lg text-foreground/90"><span className="font-bold text-orange-400">BONUS:</span> Free <span className="font-semibold text-foreground">30-minute AI Workflow Audit</span> — we'll map your highest-leverage workflow</span>
            </li>
          </ul>

          {/* CTA Button */}
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:scale-105 mb-8"
            onClick={() => {
              setIsOpen(true);
              trackClick('Hero - Get Library', {
                location: 'hero_main',
                action: 'open_library_modal'
              });
            }}
          >
            Get the Library
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-10">
            <div className="flex items-center gap-1">
              <Check className="w-4 h-4 text-muted-foreground" />
              <span>60-second setup</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="w-4 h-4 text-muted-foreground" />
              <span>Instant download</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="w-4 h-4 text-muted-foreground" />
              <span>No developer needed</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-4">
            {/* Avatar Stack */}
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-background flex items-center justify-center text-white text-xs font-bold">
                JK
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 border-2 border-background flex items-center justify-center text-white text-xs font-bold">
                SM
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 border-2 border-background flex items-center justify-center text-white text-xs font-bold">
                RC
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 border-2 border-background flex items-center justify-center text-white text-xs font-bold">
                TL
              </div>
            </div>

            {/* Stars and Count */}
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm">
                Join <span className="text-foreground font-semibold">10k+</span> tech leaders
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Logos Section - Scrolling Carousel */}
      <div className="relative z-20 bg-white py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500 mb-10">
            Members Come From
          </p>
        </div>
        <div className="relative">
          {/* Gradient masks for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling container */}
          <div className="flex animate-scroll hover:[animation-play-state:paused]">
            {/* First set of logos */}
            <div className="flex items-center gap-10 px-5 shrink-0">
              <img src="/netflix.png" alt="Netflix" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/stryker-logo.svg" alt="Stryker" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Amazon_logo.svg" alt="Amazon" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/calendly.webp" alt="Calendly" className="h-8 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/dell.svg" alt="Dell" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/LaunchDarkly-Logo.png" alt="LaunchDarkly" className="h-10 max-w-[120px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/redhat.webp" alt="Red Hat" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/cashapp.svg" alt="Cash App" className="h-16 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/gitlab.png" alt="GitLab" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Peloton-logo.jpg" alt="Peloton" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/vercel-logo.svg" alt="Vercel" className="h-8 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/nike.png" alt="Nike" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/fivetran-logo-blue-rgb.jpg" alt="Fivetran" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Salesforce.com_logo.png" alt="Salesforce" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/worldline-logo.avif" alt="Worldline" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/LegitScript_Logo.png" alt="LegitScript" className="h-10 max-w-[110px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-10 px-5 shrink-0">
              <img src="/netflix.png" alt="Netflix" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/stryker-logo.svg" alt="Stryker" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Amazon_logo.svg" alt="Amazon" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/calendly.webp" alt="Calendly" className="h-8 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/dell.svg" alt="Dell" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/LaunchDarkly-Logo.png" alt="LaunchDarkly" className="h-10 max-w-[120px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/redhat.webp" alt="Red Hat" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/cashapp.svg" alt="Cash App" className="h-16 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/gitlab.png" alt="GitLab" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Peloton-logo.jpg" alt="Peloton" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/vercel-logo.svg" alt="Vercel" className="h-8 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/nike.png" alt="Nike" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/fivetran-logo-blue-rgb.jpg" alt="Fivetran" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Salesforce.com_logo.png" alt="Salesforce" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/worldline-logo.avif" alt="Worldline" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/LegitScript_Logo.png" alt="LegitScript" className="h-10 max-w-[110px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-background mt-4">and many other startups, SMBs, and non-profits</p>
      </div>

      {/* Library Signup Dialog (Kit form fb2b5743bc — same UID as /library) */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-lg p-0 gap-0 overflow-hidden">
          {/* Gradient header */}
          <DialogHeader className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 px-6 pt-6 pb-5 space-y-0 text-left">
            <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 self-start w-fit">
              <Sparkles className="w-3 h-3" />
              Free — Instant Access
            </div>
            <DialogTitle className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              The Fortune 100 AI Prompt Library™
            </DialogTitle>
            <DialogDescription className="text-white/85 mt-2 text-sm sm:text-base leading-relaxed">
              Copy-paste AI workflows used by leaders at Netflix, Amazon, Salesforce & more.
            </DialogDescription>
          </DialogHeader>

          {/* Value bullets */}
          <ul className="px-6 pt-4 pb-2 space-y-2.5">
            <li className="flex items-start gap-2.5 text-sm">
              <Check className="w-5 h-5 text-green-500 mt-0 shrink-0" />
              <span className="text-foreground/90">Save <strong className="text-foreground">5–10 hours/week</strong> with proven AI workflows</span>
            </li>
            <li className="flex items-start gap-2.5 text-sm">
              <Check className="w-5 h-5 text-green-500 mt-0 shrink-0" />
              <span className="text-foreground/90"><strong className="text-foreground">Real Fortune 100 prompts</strong> — not toy examples</span>
            </li>
            <li className="flex items-start gap-2.5 text-sm">
              <Check className="w-5 h-5 text-green-500 mt-0 shrink-0" />
              <span className="text-foreground/90">Works with <strong className="text-foreground">Claude, ChatGPT & Gemini</strong> — no developer needed</span>
            </li>
          </ul>

          {/* Kit form */}
          <iframe
            src="https://techleaders.kit.com/fb2b5743bc"
            className="w-full h-[260px] border-0"
            title="Fortune 100 AI Skills Library signup"
          />

          {/* Trust footer */}
          <div className="px-6 pb-5 pt-1 flex flex-col sm:flex-row items-center justify-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-orange-500 text-orange-500" />
              ))}
              <span className="ml-1">Join <strong className="text-foreground">10k+</strong> tech leaders</span>
            </div>
            <span className="hidden sm:inline text-muted-foreground/50">•</span>
            <div className="flex items-center gap-1">
              <Lock className="w-3 h-3" />
              <span>No spam. Unsubscribe anytime.</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroAlternative;
