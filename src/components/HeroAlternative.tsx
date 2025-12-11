import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
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
          <div className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-pink-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold mb-8 animate-fade-in">
            <span>Check The 60-Second Benchmark</span>
          </div>

          {/* Main Headline */}
          <h2 className="font-bold leading-tight mb-8 animate-fade-in">
            <span className="block text-5xl sm:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">60 SECONDS</span>
            <span className="block text-xl sm:text-2xl text-foreground/70 font-medium mt-3 mb-3">to find out if your AI strategy & positioning is</span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500">LEAVING MONEY ON THE TABLE</span>
            <span className="block text-2xl sm:text-3xl text-foreground font-semibold mt-4">(& exactly how to fix it)</span>
          </h2>

          {/* Bullet Points */}
          <ul className="space-y-4 mb-10 max-w-xl mx-auto text-left">
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-lg text-foreground/90">Know your <span className="font-semibold text-foreground">#1 AI blind spot</span> holding you back</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-lg text-foreground/90">Get your <span className="font-semibold text-foreground">personalized action plan</span> (based on exactly what you do)</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
              <span className="text-lg text-foreground/90"><span className="font-bold text-orange-400">BONUS:</span> Our AI Workflows Cheat Sheet <span className="font-semibold text-foreground">(free download)</span></span>
            </li>
          </ul>

          {/* CTA Button */}
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:scale-105 mb-8"
            onClick={() => {
              (window as any).RM.push(['trigger', 'wdg_occg7qdv']);
              trackClick('Hero Alt - Start Benchmark', {
                location: 'hero_alternative',
                action: 'trigger_rightmessage_widget'
              });
            }}
          >
            Check the Benchmark
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-10">
            <div className="flex items-center gap-1">
              <Check className="w-4 h-4 text-muted-foreground" />
              <span>Takes only 1 minute</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="w-4 h-4 text-muted-foreground" />
              <span>No-BS results</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="w-4 h-4 text-muted-foreground" />
              <span>Immediate insights</span>
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
