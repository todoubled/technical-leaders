import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import { trackCalendlyEvent, trackEvent } from "@/utils/posthog";

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

const Calls = () => {
  useEffect(() => {
    // Page view tracking is handled centrally in App.tsx
    // Track Calendly-specific initialization
    trackEvent('Calendly Widget Initialized', {
      calendly_url: 'tech-leaders-intro-call'
    });

    // Check if Calendly is already loaded
    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/d/cw2z-crw-rq2/tech-leaders-intro-call?hide_event_type_details=1&hide_gdpr_banner=1',
        parentElement: document.querySelector('.calendly-inline-widget'),
        prefill: {},
        utm: {}
      });

      // Track when Calendly widget is viewed
      trackCalendlyEvent('viewed', {
        meeting_type: 'tech-leaders-intro-call'
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
            meeting_type: 'tech-leaders-intro-call'
          });

          // Navigate to confirmation page
          window.location.href = '/call-confirmed';
        } else if (eventName === 'calendly.page_height') {
          // Widget loaded
          trackEvent('Calendly Widget Loaded', {
            page: 'calls'
          });
        } else if (eventName === 'calendly.date_and_time_selected') {
          trackEvent('Calendly Date Selected', {
            page: 'calls'
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
        title="Book a Strategy Call - Technical Leaders"
        description="Schedule a free strategy call to discuss how to advance your technical leadership career. Get personalized guidance from experienced CTOs and tech executives."
        keywords={['technical leadership coaching', 'CTO mentorship', 'career strategy call', 'tech executive coaching']}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Book an Intro Call with Stephen Bates
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Column - Video */}
          <div>
            <Card className="p-8 bg-white dark:bg-gray-800 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Learn How Tech Leaders Works
              </h2>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl mb-6">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/VKetl72iSlk?si=xxlfHLSsP6kmVd1Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Watch this 1-minute overview to understand how we help.
              </p>

              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                On This Intro Call, We'll:
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Discuss your current situation and identify opportunities
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Uncover your "#1 blocker" that's limiting your opportunities
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Create a 3-step Action Plan to achieve your goals
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
                <div className="calendly-inline-widget" data-url="https://calendly.com/d/cw2z-crw-rq2/tech-leaders-intro-call?hide_event_type_details=1&hide_gdpr_banner=1" style={{ minWidth: "320px", height: "700px" }}></div>
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
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

      {/* How It Works CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            While You Wait, See How Our Full System Works
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Watch our step-by-step process for launching and scaling consulting businesses using proven systems.
          </p>
          <div className="flex justify-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-8 py-6"
              onClick={() => {
                // Track the click
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'click', {
                    event_category: 'CTA',
                    event_label: 'How It Works - Calls Page',
                    page_location: window.location.href
                  });
                }
                window.location.href = '/how-it-works'
              }}
            >
              See How It Works
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mb-8">
            Join 300+ technical leaders who've successfully launched consulting practices
          </p>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Not Ready for a Call?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Get our free Tech Leadership Playbook and start implementing proven strategies today
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20"
          >
            Get the Playbook
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Calls;