import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Target, Zap, Award, BarChart3 } from "lucide-react";
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
      <section className="pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-500/10 to-red-600/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/ai-in-ar.png"
            alt="AI background"
            className="w-full h-full object-cover object-top opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="max-w-7xl mx-auto py-16 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-600 dark:text-orange-400 text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              Free Launch Strategy Session
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Ready to <span className="text-orange-500">Productize Your Expertise?</span>
            </h1>
          </div>

          {/* Video + Value Prop Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left Column - Video */}
            <div>
              <div className="relative rounded-lg overflow-hidden shadow-2xl" style={{ aspectRatio: '16/9' }}>
                <iframe
                  src="https://www.loom.com/embed/d11f37db02b44730acadb5c166c0a77a"
                  frameBorder="0"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                />
              </div>
            </div>

            {/* Right Column - Value Prop */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Here's What Usually Stops People (And How We Fix It)</h3>

              <p className="text-lg text-muted-foreground leading-relaxed">
                The biggest barrier isn't your skills or knowledge. You've already proven you can learn anything.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">It's whether you'll let yourself do it.</span>
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                      <span className="text-red-600 dark:text-red-400 text-xl">⚠️</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">The 3 Ways This Shows Up:</h4>
                    <ul className="text-muted-foreground space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span><span className="font-semibold text-foreground">Under-pricing</span> — Not charging what you're really worth because you've never had to set your own price before</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span><span className="font-semibold text-foreground">Under-promoting</span> — Feeling uncomfortable "selling yourself" so you stay invisible to the people who need you most</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span><span className="font-semibold text-foreground">Under-niching</span> — Playing too small, not going for the right level of clients because "who am I to do that?"</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Strategy Session + Calendar Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mt-16">
            {/* Left Column - Strategy Session Benefits */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">In Your Strategy Session, We'll Show You:</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-orange-500 flex-shrink-0 mt-1" />
                      <span><span className="font-semibold text-foreground">Where to find clients</span> who need exactly what you offer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BarChart3 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-1" />
                      <span><span className="font-semibold text-foreground">What to sell and how to package it</span> into a $10K+ scalable offer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-orange-500 flex-shrink-0 mt-1" />
                      <span><span className="font-semibold text-foreground">What to say and how to sell it</span> without feeling "salesy" or uncomfortable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-orange-500 flex-shrink-0 mt-1" />
                      <span><span className="font-semibold text-foreground">What mental blocks are holding you back</span> and exactly how to fix them</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-base text-muted-foreground italic">
                  "If you learned everything you've learned so far, you can learn this. It's just different."
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  — Stephen Bates, Co-Founder & Behavioral Specialist
                </p>
              </div>

              {/* Testimonials */}
              <div className="space-y-4 pt-6">
                <h4 className="font-semibold text-lg text-foreground mb-4">What Our Members Say:</h4>

                <Card className="p-4 hover:shadow-lg transition-shadow">
                  <p className="text-foreground mb-3 italic text-sm leading-relaxed">
                    "For this client, it's a fractional gig that will replace all my income, which means I can go and do this fractional thing for three days a week and then have two days to apply all the other learnings. Massive, massive win."
                  </p>
                  <div className="border-t pt-3">
                    <p className="font-semibold text-foreground text-sm">C.F.</p>
                    <p className="text-xs text-muted-foreground">Fractional CTO, Ireland</p>
                    <p className="text-xs font-semibold text-green-600 dark:text-green-400 mt-1">
                      Replaced full income with 3-day week
                    </p>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-lg transition-shadow">
                  <p className="text-foreground mb-3 italic text-sm leading-relaxed">
                    "Applying my new approach learned through Tech Leaders, has led to a new job offer and a promotion"
                  </p>
                  <div className="border-t pt-3">
                    <p className="font-semibold text-foreground text-sm">K.D.</p>
                    <p className="text-xs text-muted-foreground">Director of Client Success, Colorado</p>
                    <p className="text-xs font-semibold text-green-600 dark:text-green-400 mt-1">
                      New job offer + promotion
                    </p>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-lg transition-shadow">
                  <p className="text-foreground mb-3 italic text-sm leading-relaxed">
                    "It is harder than I thought, specifically talking about yourself as a product or service offering is not something I really ever had to do working in a large corporation for the majority of the last three decades."
                  </p>
                  <div className="border-t pt-3">
                    <p className="font-semibold text-foreground text-sm">F.C.</p>
                    <p className="text-xs text-muted-foreground">Fractional CTO, Ann Arbor</p>
                    <p className="text-xs font-semibold text-green-600 dark:text-green-400 mt-1">
                      Transitioned from corporate to fractional
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Right Column - Calendly */}
            <div className="lg:sticky lg:top-24">
              <Card className="p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Book Your Launch Strategy Session
                </h2>
                <p className="text-muted-foreground mb-6">
                  Select a time that works for you to speak with our team.
                </p>

                {/* Calendly Widget */}
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/d/cw2z-crw-rq2/tech-leaders-intro-call?hide_event_type_details=1&hide_gdpr_banner=1"
                  style={{ minWidth: "320px", height: "650px" }}
                />
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>

                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>100% Free Strategy Session</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Get your custom launch plan in 45 minutes</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

        </div>
      </section>

      {/* Social Proof - Company Logos */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">
            Trusted by Tech Leaders at
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <img src="/redhat.webp" alt="Red Hat" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/cashapp.svg" alt="Cash App" className="h-20 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/gitlab.png" alt="GitLab" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/netflix.png" alt="Netflix" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/calendly.webp" alt="Calendly" className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/nike.png" alt="Nike" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Calls;
