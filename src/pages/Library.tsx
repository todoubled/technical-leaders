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
        title="The Fortune 100 AI Skills Library™ - Build AI Workflows in Minutes"
        description="Build AI workflows to go from Objective to Key Result in minutes—without developer resources. Agentic prompts and workflow designs. Copy, paste & edit in 60 seconds."
        keywords={['AI workflows', 'AI prompts', 'fortune 100 prompts', 'agentic prompts', 'AI productivity', 'workflow automation', 'no-code AI']}
        image="https://technical-leaders.com/ai-in-ar.png"
      />
      <Navigation />

      {/* Hero Section with Dramatic Headline */}
      <section className="relative overflow-hidden pt-32 pb-20">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/ai-in-ar.png"
            alt="Fortune 100 Prompt Library"
            className="w-full h-full object-cover object-top opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          {/* Top Section - Subheadline */}
          <div className="text-center mb-12">
            <p className="text-xl sm:text-2xl lg:text-3xl mb-2 text-white">
              How to build AI workflows to go from Objective to Key Result in minutes
            </p>
            <p className="text-lg sm:text-xl text-white/80">
              Without developer resources (even if you're non-technical)
            </p>
          </div>

          {/* Dramatic Title */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-12 leading-tight text-white">
              <span className="block text-white/80">The</span>
              <span className="block">Fortune 100</span>
              <span className="block">AI Skills</span>
              <span className="block">Library<sup className="text-4xl sm:text-5xl">™</sup></span>
            </h1>

            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Copy, Paste & Edit
            </p>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              in 60 seconds
            </p>
          </div>

          {/* Form Section */}
          <div className="max-w-2xl mx-auto">
            {/* Mobile Form */}
            <div className="lg:hidden mb-8">
              <div className="bg-background/90 backdrop-blur border border-primary/20 rounded-xl p-6">
                <p className="text-center font-bold text-lg mb-4">Enter your email to get instant access 👇</p>
                <div id="library-form-container-mobile"></div>
              </div>
            </div>

            {/* Desktop Form */}
            <div className="hidden lg:block">
              <Card className="p-8 bg-background/90 backdrop-blur border-2 border-primary/20 shadow-2xl">
                <div className="text-center mb-6">
                  <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h2 className="text-2xl font-bold mb-2">Get Instant Access</h2>
                  <p className="text-muted-foreground">Enter your email to get the library immediately</p>
                </div>

                <div id="library-form-container-desktop"></div>

                {formSubmitted && (
                  <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-green-800 dark:text-green-200 text-center font-semibold">
                      ✓ Success! Check your email for the library
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

      {/* Description Section */}
      <section className="bg-muted/30 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl sm:text-2xl font-semibold text-foreground/90 mb-2">
            Agentic Prompts and Workflow Designs that save leaders time and money
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground">
            (Copy & Paste for yourself)
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Library;
