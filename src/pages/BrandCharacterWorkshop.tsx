import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Star, Users, Sparkles, Brain, Rocket, MessageSquare, Bot, Calendar, Clock, Gift, FileText, Video, Phone, Target, Shield, Zap, TrendingUp, DollarSign, BarChart3, Calculator, Palette, Lightbulb, Heart } from "lucide-react";
import SEO from "@/components/SEO";
import { useState, useEffect } from "react";
import { trackEvent, identify, trackConversion } from "@/utils/posthog";
import { useEmailCapture } from "@/hooks/use-posthog";

const BrandCharacterWorkshop = () => {
  const { captureEmail } = useEmailCapture();

  useEffect(() => {
    // Page view tracking is handled centrally in App.tsx
    // Additional page-specific event tracking can be added here if needed

    // Inject ConvertKit form script
    const formContainer = document.getElementById('brand-form-container');
    if (formContainer && !formContainer.querySelector('script')) {
      const script = document.createElement('script');
      script.async = true;
      script.setAttribute('data-uid', 'd6c6cea067');
      script.src = 'https://techleaders.kit.com/d6c6cea067/index.js';
      formContainer.appendChild(script);

      // Listen for ConvertKit form submissions to track in PostHog
      script.onload = () => {
        // Listen for form submission events from ConvertKit
        window.addEventListener('message', (event) => {
          if (event.origin === 'https://techleaders.kit.com' && event.data?.event === 'form_submitted') {
            // Track conversion in PostHog when ConvertKit form is submitted
            trackConversion('Workshop Registration', {
              workshop_name: 'Brand Character Workshop',
              source: 'convertkit_form',
              location: 'hero_section'
            });

            // Redirect to confirmation page
            setTimeout(() => {
              window.location.href = '/brand-workshop-confirmed'; // TODO: Create confirmation page
            }, 1000); // Small delay to ensure tracking completes
          }
        });
      };
    }
  }, []);

  const heroContent = {
    headline: "Build Your Brand Character™ Workshop",
    subheadline: "Design the personal brand that makes you unforgettable",
    description: "From Generic to Magnetic in One Practical Session",
    cta: "Register for FREE"
  };

  const keyBenefits = [
    {
      icon: Sparkles,
      title: "Character Framework",
      description: "Discover the archetype and traits that make your brand memorable"
    },
    {
      icon: MessageSquare,
      title: "Authentic Voice Development",
      description: "Create a consistent voice that resonates with your ideal clients"
    },
    {
      icon: FileText,
      title: "Brand Story Clarity",
      description: "Craft the narrative that connects emotionally with your audience"
    },
    {
      icon: Zap,
      title: "Differentiation Strategy",
      description: "Stand out in a crowded market with a distinct brand character"
    }
  ];

  const workshopTopics = [
    {
      icon: Users,
      title: "Character Foundation",
      description: "Build the core identity that makes you stand out",
      features: [
        "Introduction to Character — Why all personal brands are crafted personas",
        "Character Examples — Learn from Elon, Gary Vee, Marie Forleo, Steve Jobs",
        "Finding Your Traits — Identify 3-5 traits that define your professional persona"
      ]
    },
    {
      icon: Zap,
      title: "Signature Elements",
      description: "Define the unique markers that make you memorable",
      features: [
        "Symbol or Quirk — Choose your unique visual or behavioral signature",
        "Obsession or Passion — Showcase the genuine interests that fuel you",
        "Your Superpower — Position your key skill in an engaging way"
      ]
    },
    {
      icon: MessageSquare,
      title: "Voice & Expression",
      description: "Craft how you communicate and show up consistently",
      features: [
        "Crafting Your Attitude — The consistent energy you project",
        "Creating Your Catchphrase — A memorable tagline that encapsulates you",
        "Blending It Together — Merge inspirations with your authentic self"
      ]
    }
  ];

  const bonuses = [
    {
      icon: FileText,
      title: "Bonus #1: Brand Character Questionnaire",
      description: "A comprehensive self-assessment covering your objectives, target audiences, professional journey, expertise, and personal interests. Complete it to uncover the raw material for your character."
    },
    {
      icon: Bot,
      title: "Bonus #2: AI Character Builder Prompt",
      description: "Paste this prompt into ChatGPT or Claude with your completed questionnaire. It outputs your full Character Worksheet: traits, symbol, superpower, attitude, character inspiration, voice guidelines, bio, tagline, and activation plan."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Build Your Brand Character™ Workshop | Technical Leaders"
        description="Design the personal brand that makes you unforgettable. From generic to magnetic in one practical session."
        keywords={["brand character", "brand personality", "brand voice", "brand archetype", "brand storytelling"]}
        image="https://technical-leaders.com/ai-in-ar.png"
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/ai-in-ar.png"
            alt="AI background"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-primary/30 text-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Rocket className="h-4 w-4" />
            2026 Launch Pad Workshop Series
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              {heroContent.headline}
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            {heroContent.subheadline}
          </p>

          <p className="text-2xl font-semibold mb-8 max-w-2xl mx-auto">
            {heroContent.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <div id="brand-form-container" className="w-full max-w-md mx-auto">
              {/* ConvertKit form will be injected here */}
            </div>
          </div>

          {/* Workshop Details Card */}
          <Card className="p-8 bg-background/50 backdrop-blur border border-white/10 shadow-xl max-w-3xl mx-auto">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Workshop Details</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-3">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Format</h3>
                  <p className="text-muted-foreground">LIVE, hands-on workshop with interactive exercises</p>
                </div>
                <div className="space-y-2">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-3">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Date & Time</h3>
                  <p className="text-muted-foreground">December 1st, 2025<br/>10:00 AM CST<br/>90 Minutes</p>
                </div>
                <div className="space-y-2">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Investment</h3>
                  <p className="text-2xl font-bold text-primary">FREE</p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-primary/20">
                <p className="text-sm text-muted-foreground italic">
                  Can't join live? No problem! All registrants receive the recording.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Why Personal Branding Matters for Technical Leaders
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>You have the expertise. You deliver results.</p>
              <p className="font-semibold">But does your brand reflect who you really are?</p>
              <p>Too many technical leaders default to "professional and corporate" – blending in when they should stand out.</p>
              <p className="text-2xl font-bold text-foreground">Here's the truth:</p>
              <p>People don't buy services. They buy from people they trust and connect with.</p>
              <p className="text-xl font-semibold text-foreground mt-6">The good news?</p>
              <p className="text-2xl font-bold text-primary">Defining your brand character isn't complicated.</p>
              <p>You just need a proven framework to uncover your authentic personality and express it consistently.</p>
              <p className="text-xl font-semibold text-foreground mt-6">In this workshop, I'll walk you through the exact process to define and express your unique brand character.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {keyBenefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Here's What We'll Cover
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to define and express your unique brand character
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workshopTopics.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Additional Topics */}
          <Card className="mt-8 p-6 bg-muted/50">
            <h3 className="text-lg font-semibold mb-4">Plus These Critical Insights:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">How to stand out in a crowded market without being inauthentic</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">Creating brand consistency across all client touchpoints</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">Avoiding common branding mistakes that technical leaders make</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">How to evolve your brand as your business grows</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Meet Your Instructor Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meet Your Instructor
            </h2>
          </div>

          <Card className="p-8 hover:shadow-lg transition-all duration-300">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <img
                  src="/brand-instructor.png"
                  alt="Amelia Leigner"
                  className="w-full max-w-[250px] mx-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-2xl font-bold mb-4">Amelia Leigner</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Amelia is a product and marketing executive with nearly a decade of experience helping early-stage
                  startups and AI-driven companies launch and scale. She currently serves as Head of Product, Growth at
                  Bottega8 and as Fractional CMO for Tech Leaders, where she drives AI product adoption and builds
                  scalable growth strategies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  She now partners with founders and executives to build distinctive personal brands that fuel
                  founder-led sales and turn expertise into market authority.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    <Rocket className="h-4 w-4" />
                    Founder-Led Sales
                  </div>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    <TrendingUp className="h-4 w-4" />
                    Fractional CMO
                  </div>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    <Bot className="h-4 w-4" />
                    AI Growth Strategist
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Gift className="h-4 w-4" />
              Workshop Bonuses
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              FREE Bonuses Included
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to implement immediately - at no cost
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <bonus.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{bonus.title}</h3>
                    <p className="text-muted-foreground">{bonus.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      {/* How It Works CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Ready for the Next Step?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Brand character is just the beginning. See how we help technical leaders build full consulting businesses.
          </p>
          <div className="flex justify-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-8 py-6"
              onClick={() => {
                trackEvent('See How It Works - Brand Workshop', {
                  location: 'brand_workshop_cta'
                });
                window.location.href = '/how-it-works'
              }}
            >
              See How It Works
            </Button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
            Join 300+ technical leaders who've launched successful consulting practices
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Don't Start 2026 Without This
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Stop blending in. Get the brand clarity that attracts your ideal clients.
          </p>
          <Button
            size="lg"
            className="text-lg px-8"
            onClick={() => {
              // Track CTA click
              trackEvent('Scroll to Form CTA Clicked', {
                location: 'bottom_cta_section'
              });

              // Smooth scroll to the form at the top
              const formContainer = document.getElementById('brand-form-container');
              if (formContainer) {
                formContainer.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center'
                });
              }
            }}
          >
            <Rocket className="mr-2 h-5 w-5" />
            Register for FREE Workshop
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrandCharacterWorkshop;
