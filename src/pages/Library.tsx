import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, BookOpen, Star, Users, Zap, Clock, TrendingUp, Target, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import { trackEvent, trackConversion } from "@/utils/posthog";
import { useTrackScrollDepth } from "@/hooks/use-posthog";
import { useEffect, useState } from "react";

const Library = () => {
  useTrackScrollDepth('Library Landing Page');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    trackEvent('Library Landing Page View', {
      page_type: 'lead_capture',
      offer: 'fortune_100_prompt_library'
    });

    // Inject the Kit.com form script for mobile container
    const formContainerMobile = document.getElementById('library-form-container-mobile');
    if (formContainerMobile && !formContainerMobile.querySelector('script')) {
      const scriptMobile = document.createElement('script');
      scriptMobile.async = true;
      scriptMobile.setAttribute('data-uid', 'fb2b5743bc');
      scriptMobile.src = 'https://techleaders.kit.com/fb2b5743bc/index.js';
      formContainerMobile.appendChild(scriptMobile);
    }

    // Inject the Kit.com form script for desktop container
    const formContainerDesktop = document.getElementById('library-form-container-desktop');
    if (formContainerDesktop && !formContainerDesktop.querySelector('script')) {
      const scriptDesktop = document.createElement('script');
      scriptDesktop.async = true;
      scriptDesktop.setAttribute('data-uid', 'fb2b5743bc');
      scriptDesktop.src = 'https://techleaders.kit.com/fb2b5743bc/index.js';
      formContainerDesktop.appendChild(scriptDesktop);

      // Listen for form submissions (only need one listener)
      scriptDesktop.onload = () => {
        window.addEventListener('message', (event) => {
          if (event.origin === 'https://techleaders.kit.com' &&
              event.data?.event === 'form_submitted') {
            trackConversion('Fortune 100 Library Signup', {
              source: 'kit_form',
              location: 'library_landing_page'
            });
            setFormSubmitted(true);
          }
        });
      };
    }
  }, []);

  const scrollToForm = () => {
    // Scroll to the visible form (mobile or desktop)
    const formContainerMobile = document.getElementById('library-form-container-mobile');
    const formContainerDesktop = document.getElementById('library-form-container-desktop');

    // Check which one is visible and scroll to it
    if (window.innerWidth >= 1024) {
      // Desktop
      formContainerDesktop?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      // Mobile
      formContainerMobile?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const benefits = [
    "Turn AI from a toy into a powerful business tool",
    "Save hours by getting it right the first time",
    "Steal proven templates you can use immediately",
    "Learn what takes others weeks in just 30 minutes",
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Get The Fortune 100 Prompt Library - Master AI in 30 Minutes"
        description="Learn prompt engineering in 30 minutes. Get real examples, templates, and exercises from Fortune 100 companies. Turn AI into a powerful business tool."
        keywords={['prompt engineering', 'AI prompts', 'ChatGPT guide', 'prompt templates', 'AI training', 'fortune 100 prompts', 'AI productivity']}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/launch-bg.png"
            alt="Fortune 100 Prompt Library"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full text-sm font-bold mb-6">
                <BookOpen className="w-4 h-4" />
                <span>The Fortune 100 Prompt Library™</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="block">Get AI to</span>
                <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mt-2">
                  Work for You
                </span>
              </h1>

              <p className="text-2xl font-semibold mb-6 text-foreground/90">
                Master prompt engineering in 30 minutes—what takes others weeks to figure out
              </p>

              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="lg:hidden mb-8">
                <div className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border border-primary/20 rounded-xl p-6">
                  <p className="text-center font-bold text-lg mb-4">Enter your email to get instant access 👇</p>
                  <div id="library-form-container-mobile"></div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5" />
                <span className="text-sm">Copy and paste • Instant access • Hundreds of hours of work saved</span>
              </div>
            </div>

            {/* Right Column - Form (Desktop) */}
            <div className="hidden lg:block">
              <Card className="p-8 bg-background/80 backdrop-blur border-2 border-primary/20 shadow-2xl">
                <div className="text-center mb-6">
                  <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h2 className="text-2xl font-bold mb-2">Get Instant Access</h2>
                  <p className="text-muted-foreground">Enter your email to get the guide immediately</p>
                </div>

                <div id="library-form-container-desktop"></div>

                {formSubmitted && (
                  <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-green-800 dark:text-green-200 text-center font-semibold">
                      ✓ Success! Check your email for the guide
                    </p>
                  </div>
                )}

                <div className="mt-6 pt-6 border-t border-border text-center">
                  <p className="text-xs text-muted-foreground">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Library;
