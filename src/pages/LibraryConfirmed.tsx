import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import { trackCalendlyEvent, trackEvent, trackClick } from "@/utils/posthog";

declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string;
        parentElement: Element | null;
        prefill?: Record<string, unknown>;
        utm?: Record<string, string>;
      }) => void;
    };
  }
}

const LibraryConfirmed = () => {
  useEffect(() => {
    // Track Calendly-specific initialization
    trackEvent('Calendly Widget Initialized', {
      calendly_url: 'ai-strategy',
      source: 'library-confirmed'
    });

    // Check if Calendly is already loaded
    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/tech-leaders/ai-strategy?hide_event_type_details=1&hide_gdpr_banner=1',
        parentElement: document.querySelector('.calendly-inline-widget'),
        prefill: {},
        utm: {}
      });

      // Track when Calendly widget is viewed
      trackCalendlyEvent('viewed', {
        meeting_type: 'ai-strategy',
        source: 'library-confirmed'
      });
    }

    // Listen for Calendly events
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.origin !== 'https://calendly.com') return;

      if (e.data.event && e.data.event.indexOf('calendly.') === 0) {
        const eventName = e.data.event;

        // Track different Calendly events
        if (eventName === 'calendly.event_scheduled') {
          // Extract event details if available
          const eventDetails = e.data.payload || {};

          trackCalendlyEvent('scheduled', {
            invitee: eventDetails.invitee,
            event: eventDetails.event,
            meeting_type: 'ai-strategy',
            source: 'library-confirmed'
          });

          // Navigate to confirmation page
          window.location.href = '/call-confirmed';
        } else if (eventName === 'calendly.page_height') {
          // Widget loaded
          trackEvent('Calendly Widget Loaded', {
            page: 'library-confirmed'
          });
        } else if (eventName === 'calendly.date_and_time_selected') {
          trackEvent('Calendly Date Selected', {
            page: 'library-confirmed'
          });
        }
      }
    };

    window.addEventListener('message', handleCalendlyEvent);

    return () => {
      window.removeEventListener('message', handleCalendlyEvent);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Library Access Confirmed - Technical Leaders"
        description="Your library access is confirmed. Book a free AI strategy call to get personalized guidance on leveraging AI in your organization."
        keywords={['AI strategy call', 'AI implementation', 'AI consulting', 'tech executive coaching', 'AI transformation']}
      />
      <Navigation />

      {/* Success Banner */}
      <section className="bg-green-50 dark:bg-green-900/20 border-b border-green-200 dark:border-green-800 pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center">
            <p className="text-green-800 dark:text-green-200 font-medium">
              <span className="font-bold">Success!</span> But wait, before you check your email inbox for the prompt library... <a href="/fortune-100-prompt-library" className="text-green-700 dark:text-green-300 underline hover:text-green-900 dark:hover:text-green-100">Get instant access here</a>
            </p>
          </div>
        </div>
      </section>

      {/* Company Logos - Scrolling Carousel */}
      <section className="bg-white py-12 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500 mb-10">
            Helping Leaders With AI From Companies Like
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
        <p className="text-center text-sm text-background mt-4">and many other startups, SMBs, and non-profits</p>
      </section>

      {/* Workshop CTA Section */}
      <section className="bg-gradient-to-r from-orange-500/10 to-red-500/10 py-12 border-y border-orange-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-semibold text-orange-600 dark:text-orange-400 mb-2">
            Want to learn how to turn these prompts and your own into AI agent workflows?
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Join Our Free AI Workflows Workshop
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            See these prompts in action and learn how to build AI workflows that save you 5-10 hours per week (even if you're non-technical).
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-8 py-6"
            onClick={() => {
              trackClick('Register for Workshop - Library Confirmed', {
                location: 'workshop_cta_section'
              });
              window.location.href = "/ai-agent-skills";
            }}
          >
            Register for the Workshop
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pt-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Your Next Step
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Book a 30-Minute AI Strategy Call
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Column - Video */}
          <div>
            <Card className="p-8 bg-white dark:bg-gray-800 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Learn How We Help with AI
              </h2>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl mb-6">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/LyY-glR6P_8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Watch this quick overview to understand how we help.
              </p>

              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                On This AI Strategy Call, We'll:
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Assess your current AI usage and identify opportunities
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Uncover your "#1 blocker" preventing better AI results
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Create a 3-step AI Action Plan tailored to your goals
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Calendar */}
          <div>
            <Card className="p-8 bg-white dark:bg-gray-800 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Select a Time That Works for You
              </h3>

              {/* Calendar Widget Placeholder */}
              <div className="rounded-lg p-8 text-center min-h-[400px] flex flex-col items-center justify-center">
                <div className="calendly-inline-widget" data-url="https://calendly.com/tech-leaders/ai-strategy?hide_event_type_details=1&hide_gdpr_banner=1" style={{ minWidth: "320px", height: "700px" }}></div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Can't find a time that works?
                  <a href="mailto:todd@technical-leaders.com" className="text-orange-500 hover:underline ml-1">
                    Email us
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LibraryConfirmed;
