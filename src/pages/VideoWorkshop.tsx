import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Star, Users, Sparkles, Brain, Rocket, MessageSquare, Bot, Calendar, Clock, Gift, FileText, Video, Phone, Target, Shield, Zap, TrendingUp, DollarSign, BarChart3, Calculator, Palette, Lightbulb, Heart } from "lucide-react";
import SEO from "@/components/SEO";
import { useState, useEffect } from "react";
import { trackEvent, identify, trackConversion } from "@/utils/posthog";
import { useEmailCapture } from "@/hooks/use-posthog";

const VideoWorkshop = () => {
  const { captureEmail } = useEmailCapture();

  useEffect(() => {
    // Page view tracking is handled centrally in App.tsx
    // Additional page-specific event tracking can be added here if needed

    // Inject ConvertKit form script
    const formContainer = document.getElementById('video-form-container');
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
              workshop_name: 'Video Workshop',
              source: 'convertkit_form',
              location: 'hero_section'
            });

            // Redirect to confirmation page
            setTimeout(() => {
              window.location.href = '/video-workshop-confirmed'; // TODO: Create confirmation page
            }, 1000); // Small delay to ensure tracking completes
          }
        });
      };
    }
  }, []);

  // ========================================
  // Hero Section
  // 1) Headline
  // 2) Subheadline
  // 3) Transformational Statement
  // 4) Form (ConvertKit form container - see JSX below)
  // ========================================
  const heroContent = {
    headline: "Creating Viral Video Content 101",
    subheadline: "Turn your expertise into video content that attracts the right clients.",
    transformationalStatement: "From scattered ideas and recording anxiety to a clear system you can use immediately."
  };

  // ========================================
  // Workshop Details Section
  // ========================================
  const workshopDetails = {
    format: {
      icon: MessageSquare,
      title: "Format",
      description: "LIVE, hands-on workshop with interactive exercises"
    },
    dateTime: {
      icon: Calendar,
      title: "Date & Time",
      description: "February 9th, 2026",
      time: "10:00 AM CST",
      duration: "60 Minutes"
    },
    investment: {
      icon: Clock,
      title: "Investment",
      price: "FREE"
    },
    note: "Can't join live? No problem! All registrants receive the recording."
  };

  // ========================================
  // Why This Matters Section
  // Includes: Section title, narrative paragraphs, and key benefits grid
  // ========================================
  const whyThisMatters = {
    sectionTitle: "Video Content Feels Intimidating. But It Doesn't Have To.",
    narrative: [
      "You see other founders building audiences and generating leads with video content.",
      "But when you sit down to record, everything feels harder than it should.",
      "You're overthinking the setup. Writing scripts you'll never use. Spending hours editing for one decent clip.",
      "Here's the truth:",
      "The problem isn't your ideas or your speaking ability. It's your system.",
      "Most video advice assumes you have unlimited time and a production background. You don't.",
      "The good news?",
      "You don't need perfect lighting or professional editing. You need a simple framework that works.",
      "This workshop gives you that framework."
    ]
  };

  const keyBenefits = [
    {
      icon: Target,
      title: "Skip the Guesswork",
      description: "Get proven frameworks for structuring content that works for technical topics."
    },
    {
      icon: Zap,
      title: "Create Content Faster",
      description: "Learn the system that generates usable clips without endless recording sessions."
    },
    {
      icon: Shield,
      title: "No Fancy Gear Needed",
      description: "Your phone or laptop camera is enough. Production value matters less than you think."
    },
    {
      icon: MessageSquare,
      title: "Start Real Conversations",
      description: "Create content that sparks genuine interest, not just passive scrolling."
    }
  ];

  // ========================================
  // What We'll Cover Section
  // ========================================
  const whatWellCover = {
    sectionTitle: "What We'll Cover in This Workshop",
    subtitle: "Three frameworks you can use immediately to start creating video content."
  };

  const workshopTopics = [
    {
      icon: Video,
      title: "Hook + Body + Close Formula",
      description: "",
      features: [
        "Master the anatomy of talking-head videos that actually retain attention",
        "Learn the four hook patterns that make people stop scrolling",
        "Understand why full scripts kill your delivery (and what to do instead)"
      ]
    },
    {
      icon: Lightbulb,
      title: "Your Differentiation Document",
      description: "",
      features: [
        "Build your core message and story bank in real-time during the workshop",
        "Extract the moments and beliefs that make your content impossible to copy",
        "Make boring stories interesting by going deeper into emotion and tension"
      ]
    },
    {
      icon: Users,
      title: "The Collaborative Recording System",
      description: "",
      features: [
        "Set up one-on-one recording sessions that generate 10 usable clips in 30 minutes",
        "Structure questions that naturally create strong hooks and clean takes",
        "Skip long-form content that takes hours to edit and mine for moments"
      ]
    }
  ];

  // ========================================
  // Instructor Section
  // ========================================
  const instructor = {
    name: "Tiger Joseph",
    image: "/tiger.jpeg",
    bio: [
      "Tiger started a video production business straight out of high school. Over 8 years, he created 2,000+ videos for founders, generated 20M+ LinkedIn impressions in a single year, and filmed documentaries that took him behind the scenes with world leaders.",
      "Now he's bringing those production and storytelling skills directly to consultants and founders. His approach is simple: you're already a 1 of 1 authority. You just need to package your expertise properly and share it with the market. Tiger specializes in helping technical leaders turn their existing conversations into educational video content that generates qualified leads."
    ],
    tags: [
      { icon: Video, label: "2,000+ Videos Created" },
      { icon: TrendingUp, label: "20M+ LinkedIn Impressions" },
      { icon: Rocket, label: "Video Content Strategy" }
    ]
  };

  // ========================================
  // Upsell CTA Section
  // ========================================
  const upsellCTA = {
    headline: "Ready for the Next Step?",
    subheadline: "Creating great videos is just the beginning. See how we help technical leaders implement a full-service marketing system with minimal effort.",
    buttonText: "See How It Works",
    buttonLink: "/marketing",
    socialProof: "Join 300+ technical leaders who've launched successful consulting practices"
  };

  // ========================================
  // Final CTA Section
  // ========================================
  const finalCTA = {
    headline: "Stop Procrastinating. Start Creating.",
    subheadline: "The only thing standing between you and a working video system is one hour.",
    buttonText: "Register for FREE Workshop"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Creating Viral Video Content 101 | Technical Leaders"
        description="Turn your expertise into video content that attracts the right clients. From scattered ideas and recording anxiety to a clear system you can use immediately."
        keywords={["video content", "viral video", "video marketing", "content creation", "video strategy"]}
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

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              {heroContent.headline}
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            {heroContent.subheadline}
          </p>

          <p className="text-2xl font-semibold mb-8 max-w-2xl mx-auto">
            {heroContent.transformationalStatement}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <div id="video-form-container" className="w-full max-w-md mx-auto">
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
                    <workshopDetails.format.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{workshopDetails.format.title}</h3>
                  <p className="text-muted-foreground">{workshopDetails.format.description}</p>
                </div>
                <div className="space-y-2">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-3">
                    <workshopDetails.dateTime.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{workshopDetails.dateTime.title}</h3>
                  <p className="text-muted-foreground">
                    {workshopDetails.dateTime.description}<br/>
                    {workshopDetails.dateTime.time}<br/>
                    {workshopDetails.dateTime.duration}
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-3">
                    <workshopDetails.investment.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{workshopDetails.investment.title}</h3>
                  <p className="text-2xl font-bold text-primary">{workshopDetails.investment.price}</p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-primary/20">
                <p className="text-sm text-muted-foreground italic">
                  {workshopDetails.note}
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
              {whyThisMatters.sectionTitle}
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              {whyThisMatters.narrative.map((paragraph, index) => {
                // Apply special styling to specific paragraphs
                if (paragraph === "Here's the truth:") {
                  return <p key={index} className="text-2xl font-bold text-foreground">{paragraph}</p>;
                } else if (paragraph === "The good news?") {
                  return <p key={index} className="text-xl font-semibold text-foreground mt-6">{paragraph}</p>;
                } else if (paragraph === "But when you sit down to record, everything feels harder than it should.") {
                  return <p key={index} className="font-semibold">{paragraph}</p>;
                } else if (paragraph === "You don't need perfect lighting or professional editing. You need a simple framework that works.") {
                  return <p key={index} className="text-2xl font-bold text-primary">{paragraph}</p>;
                } else if (paragraph === "This workshop gives you that framework.") {
                  return <p key={index} className="text-xl font-semibold text-foreground mt-6">{paragraph}</p>;
                } else {
                  return <p key={index}>{paragraph}</p>;
                }
              })}
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

      {/* What We'll Cover Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {whatWellCover.sectionTitle}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {whatWellCover.subtitle}
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
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full max-w-[250px] mx-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-2xl font-bold mb-4">{instructor.name}</h3>
                {instructor.bio.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                <div className="flex flex-wrap gap-3 pt-4">
                  {instructor.tags.map((tag, index) => (
                    <div key={index} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                      <tag.icon className="h-4 w-4" />
                      {tag.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Upsell CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            {upsellCTA.headline}
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            {upsellCTA.subheadline}
          </p>
          <div className="flex justify-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-8 py-6"
              onClick={() => {
                trackEvent('Upsell CTA Clicked - Video Workshop', {
                  location: 'upsell_cta_section'
                });
                window.location.href = upsellCTA.buttonLink
              }}
            >
              {upsellCTA.buttonText}
            </Button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
            {upsellCTA.socialProof}
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {finalCTA.headline}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {finalCTA.subheadline}
          </p>
          <Button
            size="lg"
            className="text-lg px-8"
            onClick={() => {
              // Track CTA click
              trackEvent('Final CTA Clicked - Video Workshop', {
                location: 'final_cta_section'
              });

              // Smooth scroll to the form at the top
              const formContainer = document.getElementById('video-form-container');
              if (formContainer) {
                formContainer.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center'
                });
              }
            }}
          >
            <Rocket className="mr-2 h-5 w-5" />
            {finalCTA.buttonText}
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VideoWorkshop;
