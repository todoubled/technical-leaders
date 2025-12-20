import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroAlternative from "@/components/HeroAlternative";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Brain,
  Award,
  Sparkles
} from "lucide-react";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import { trackClick, trackEvent } from "@/utils/posthog";
import { useTrackScrollDepth } from "@/hooks/use-posthog";

const Index = () => {
  useTrackScrollDepth('Home');

  // Load testimonial.to embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://testimonial.to/js/iframeResizer.min.js';
    script.async = true;
    script.onload = () => {
      if ((window as any).iFrameResize) {
        (window as any).iFrameResize(
          { log: false, checkOrigin: false },
          '#testimonialto-948cd5e8-1b47-43b4-8da1-a15b4bbdfb8e'
        );
      }
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Skills Operating System | Technical Leaders"
        description="Stop choosing between slow proven systems and broken AI automation. The AI Skills Operating System delivers reliable AI execution with a 90-day transformation."
        keywords={['AI SOS', 'AI Skills Operating System', 'AI transformation', 'reliable AI execution', 'skill specs', 'AI automation', 'tech leadership']}
      />
      <Navigation />

      {/* Hero Section */}
      <HeroAlternative />

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              <span>SUCCESS STORIES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Real Results from
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600"> Real Leaders</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what tech leaders are saying.
            </p>
          </div>

          {/* Testimonial.to Embed */}
          <div>
            <iframe
              id='testimonialto-948cd5e8-1b47-43b4-8da1-a15b4bbdfb8e'
              src="https://embed-v2.testimonial.to/carousel/all/tech-leaders-mastermind-program?id=948cd5e8-1b47-43b4-8da1-a15b4bbdfb8e"
              frameBorder="0"
              scrolling="no"
              width="100%"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Free Workshop CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/30 dark:via-indigo-950/30 dark:to-purple-950/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.02] dark:bg-grid-white/[0.02] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>FREE WEEKLY WORKSHOP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-background mb-6">
            Go Beyond ChatGPT with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> AI Workflows</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Learn the exact AI workflows we use with venture-backed teams to build MVPs in days, not months. Live demos, Q&A, and actionable takeaways.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:scale-105"
              onClick={() => {
                trackClick('Home - Free Workshop CTA', {
                  location: 'free_workshop_section',
                  destination: '/ai-workflows'
                });
                window.location.href = '/ai-workflows';
              }}
            >
              <Brain className="w-5 h-5 mr-2" />
              Join Free Workshop
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            New session every week
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
