import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import { trackEvent, trackConversion } from "@/utils/posthog";

const Speak = () => {
  useEffect(() => {
    // Track page view
    trackEvent('Speaking Page Viewed', {
      page: '/speak'
    });

    // Inject Kit form script
    const formContainer = document.getElementById('speaking-form-container');
    if (formContainer && !formContainer.querySelector('script')) {
      const script = document.createElement('script');
      script.async = true;
      script.setAttribute('data-uid', '773f4186a5');
      script.src = 'https://techleaders.kit.com/773f4186a5/index.js';
      formContainer.appendChild(script);

      // Listen for Kit form submissions to track in PostHog
      script.onload = () => {
        window.addEventListener('message', (event) => {
          if (event.origin === 'https://techleaders.kit.com' && event.data?.event === 'form_submitted') {
            // Track conversion in PostHog when Kit form is submitted
            trackConversion('Speaking Request Submitted', {
              source: 'kit_form',
              location: 'speaking_page'
            });
          }
        });
      };
    }
  }, []);

  const handleMediaKitDownload = () => {
    trackEvent('Media Kit Downloaded', {
      source: 'speaking_page'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Speaking Request - Todd Larsen | Technical Leaders"
        description="Request Todd Larsen to speak at your event, podcast, or conference. Expert in AI leadership, technical leadership, and building consulting practices."
        keywords={['speaking request', 'tech speaker', 'AI leadership speaker', 'technical leadership', 'CTO speaker', 'tech conference speaker']}
        image="https://technical-leaders.com/todd-media-kit.png"
      />
      <Navigation />

      {/* Hero Section with Stats */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 z-0">
          <img
            src="/todd-media-kit.png"
            alt="Todd Larsen Speaking"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

        {/* Stats Section */}
        <div className="relative z-10 pt-24 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">20K+</div>
                <div className="text-sm text-muted-foreground">Social Media Followers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">5K+</div>
                <div className="text-sm text-muted-foreground">Newsletter Subscribers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Speaking Request For Todd Larsen
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              So you want Todd on your stage (or podcast)?
            </p>
            <div className="max-w-2xl mx-auto">
              <p className="text-base text-muted-foreground mb-4">
                Todd has spoken on dozens of stages, podcasts, workshops, and masterclasses.
              </p>
              <p className="text-base text-muted-foreground">
                He's selective about speaking engagements, prioritizing events with <strong>real momentum</strong> - communities of coaches, tech leaders, or entrepreneurs who are actively building and scaling their businesses.
              </p>
              <p className="text-base text-muted-foreground mt-4 italic">
                If you're just getting started, that's okay! We support emerging entrepreneurs. Fill out the form and show us your momentum.
              </p>
            </div>

            {/* Media Kit Download Button */}
            <div className="mt-8">
              <a
                href="/Todd Larsen - Media Kit 2025.pdf"
                download
                onClick={handleMediaKitDownload}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Media Kit 2025
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="py-12 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="bg-white dark:bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">
              Trusted by Tech Leaders at
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
              <img src="/gitlab.png" alt="GitLab" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/nike.png" alt="Nike" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/redhat.webp" alt="Red Hat" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/calendly.webp" alt="Calendly" className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/cashapp.svg" alt="Cash App" className="h-20 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/netflix.png" alt="Netflix" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-white dark:bg-gray-800 shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6 text-background">
              Submit Your Speaking Request
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Fill out the form below and we'll get back to you within 48 hours.
            </p>

            {/* Kit Form Embed */}
            <div id="speaking-form-container"></div>
          </Card>
        </div>
      </section>

      {/* Speaking Topics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-background">Speaking Topics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-gradient-to-br from-gray-900 to-gray-800 border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-3 text-white">AI Leadership & Strategy</h3>
              <p className="text-base text-gray-300 leading-relaxed">
                Implementing AI strategy and building AI-powered businesses
              </p>
            </Card>
            <Card className="p-8 text-center bg-gradient-to-br from-gray-900 to-gray-800 border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-3 text-white">Technical Leadership</h3>
              <p className="text-base text-gray-300 leading-relaxed">
                Career growth from IC to CTO and executive presence
              </p>
            </Card>
            <Card className="p-8 text-center bg-gradient-to-br from-gray-900 to-gray-800 border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-3 text-white">Consulting & Entrepreneurship</h3>
              <p className="text-base text-gray-300 leading-relaxed">
                Launching and scaling profitable consulting practices
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Appearances Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Past Podcast Appearances</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-gray-800/50 border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
              <h3 className="text-2xl font-bold mb-3 text-white">Hey {'{First Name}'}</h3>
              <p className="text-base text-gray-300 mb-6 leading-relaxed">
                An Insider's Guide to Outbound Sales
              </p>
              <a
                href="https://creators.spotify.com/pod/profile/morgan-williams0/episodes/093-Micro-SaaS-Audience-Marketing-Using-Conversational-Sales-and-Community-Building-to-Launch-a-SaaS-Product-Todd-Larsen-eng69h"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-orange-500 hover:text-orange-400 font-semibold transition-colors"
              >
                Listen Now →
              </a>
            </Card>
            <Card className="p-8 text-center bg-gray-800/50 border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
              <h3 className="text-2xl font-bold mb-3 text-white">Code Story</h3>
              <p className="text-base text-gray-300 mb-6 leading-relaxed">
                Insights from Startup Tech Leaders
              </p>
              <a
                href="https://www.youtube.com/watch?v=WO8uOz9QFpw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-orange-500 hover:text-orange-400 font-semibold transition-colors"
              >
                Listen Now →
              </a>
            </Card>
            <Card className="p-8 text-center bg-gray-800/50 border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
              <h3 className="text-2xl font-bold mb-3 text-white">Growth@Scale</h3>
              <p className="text-base text-gray-300 mb-6 leading-relaxed">
                Scaling Technical Leadership
              </p>
              <a
                href="https://www.mavan.com/strategic-technical-hiring-growth/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-orange-500 hover:text-orange-400 font-semibold transition-colors"
              >
                Listen Now →
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Questions About Speaking?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Contact our media team directly
          </p>
          <a
            href="mailto:amelia@technical-leaders.com?subject=Speaking Inquiry"
            className="text-orange-500 hover:underline text-lg font-semibold"
          >
            amelia@technical-leaders.com
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Speak;
