import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star, Clock, Shield, TrendingUp, Database } from "lucide-react";
import { trackClick } from "@/utils/posthog";

const HeroAlternative = () => {
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
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-8 animate-fade-in">
            <span>The AI Skills Operating System</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-bold leading-tight mb-6 animate-fade-in">
            <span className="block text-xl sm:text-2xl text-foreground/70 font-medium mb-3">It wasn't the AI tools.</span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">It Was The</span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 mt-2">Operating System</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in">
            Stop choosing between slow "proven systems" and broken AI automation.
            Get reliable AI execution with a <span className="font-semibold text-foreground">90-day transformation</span>.
          </p>

          {/* Benefit Grid */}
          <div className="grid grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto text-left">
            <div className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-sm font-semibold text-foreground block">90-Day Transformation</span>
                <span className="text-xs text-foreground/60">Not 18-24 months</span>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <Shield className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-sm font-semibold text-foreground block">Reliable AI Execution</span>
                <span className="text-xs text-foreground/60">Not 70% failure rate</span>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <TrendingUp className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-sm font-semibold text-foreground block">Compounding Leverage</span>
                <span className="text-xs text-foreground/60">Not linear headcount</span>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <Database className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-sm font-semibold text-foreground block">Skills as Assets</span>
                <span className="text-xs text-foreground/60">Not tribal knowledge</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:scale-105 mb-8"
            onClick={() => {
              trackClick('Hero - Learn AI SOS', {
                location: 'hero_main',
                destination: '/ai-sos'
              });
              window.location.href = '/ai-sos';
            }}
          >
            See How It Works
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-10">
            <div className="flex items-center gap-1">
              <Check className="w-4 h-4 text-green-500" />
              <span>3x output with same team</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="w-4 h-4 text-green-500" />
              <span>Human oversight built-in</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="w-4 h-4 text-green-500" />
              <span>Start with one skill</span>
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
                Join <span className="text-foreground font-semibold">6500+</span> tech leaders
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
              <img src="/vercel-logo.svg" alt="Vercel" className="h-8 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/LaunchDarkly-Logo.png" alt="LaunchDarkly" className="h-10 max-w-[120px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/fivetran-logo-blue-rgb.jpg" alt="Fivetran" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/gitlab.png" alt="GitLab" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/calendly.webp" alt="Calendly" className="h-8 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Amazon_logo.svg" alt="Amazon" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/nike.png" alt="Nike" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/netflix.png" alt="Netflix" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/dell.svg" alt="Dell" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Salesforce.com_logo.png" alt="Salesforce" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/redhat.webp" alt="Red Hat" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Peloton-logo.jpg" alt="Peloton" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/stryker-logo.svg" alt="Stryker" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/worldline-logo.avif" alt="Worldline" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/jb-hunt.png" alt="JB Hunt" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/LegitScript_Logo.png" alt="LegitScript" className="h-10 max-w-[110px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/cashapp.svg" alt="Cash App" className="h-16 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-10 px-5 shrink-0">
              <img src="/vercel-logo.svg" alt="Vercel" className="h-8 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/LaunchDarkly-Logo.png" alt="LaunchDarkly" className="h-10 max-w-[120px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/fivetran-logo-blue-rgb.jpg" alt="Fivetran" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/gitlab.png" alt="GitLab" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/calendly.webp" alt="Calendly" className="h-8 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Amazon_logo.svg" alt="Amazon" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/nike.png" alt="Nike" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/netflix.png" alt="Netflix" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/dell.svg" alt="Dell" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Salesforce.com_logo.png" alt="Salesforce" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/redhat.webp" alt="Red Hat" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Peloton-logo.jpg" alt="Peloton" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/stryker-logo.svg" alt="Stryker" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/worldline-logo.avif" alt="Worldline" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/jb-hunt.png" alt="JB Hunt" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/LegitScript_Logo.png" alt="LegitScript" className="h-10 max-w-[110px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/cashapp.svg" alt="Cash App" className="h-16 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-foreground/50 mt-4">and many other startups, SMBs, and non-profits</p>
      </div>
    </section>
  );
};

export default HeroAlternative;
