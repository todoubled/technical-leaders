import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroAlternative from "@/components/HeroAlternative";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  Users,
  GraduationCap,
  MessageSquare,
} from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import { trackClick } from "@/utils/posthog";
import { useTrackScrollDepth } from "@/hooks/use-posthog";

const Index = () => {
  useTrackScrollDepth('Home');
  const navigate = useNavigate();

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
        title="Practical AI Training & Adoption | Technical Leaders"
        description="Practical AI training and adoption programs for leaders and their teams. 250+ organizations trained. Book a strategy session to get started."
        keywords={['AI training', 'AI adoption', 'AI for leaders', 'executive AI training', 'AI program', 'tech leadership', 'AI transformation']}
      />
      <Navigation />

      {/* Hero Section */}
      <HeroAlternative />

      {/* Role Cards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Find the right program for you
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We run three programs depending on what you need to do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* For Leaders card */}
            <button
              className="group text-left bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-blue-500/40 transition-all"
              onClick={() => {
                trackClick('Home - Role Card: For Leaders', {
                  location: 'role_cards_section',
                  destination: '/ai-for-leaders'
                });
                navigate('/ai-for-leaders');
              }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center mb-5">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                For Leaders
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                8 hours of live intensive AI training for executives who need to build confidence, drive adoption, and make real decisions about AI at their org.
              </p>
              <span className="inline-flex items-center text-sm font-medium text-blue-500 group-hover:text-blue-400 transition-colors">
                Learn more <ArrowRight className="ml-1.5 w-4 h-4" />
              </span>
            </button>

            {/* For ICs / builders card */}
            <button
              className="group text-left bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-orange-500/40 transition-all"
              onClick={() => {
                trackClick('Home - Role Card: For ICs and Builders', {
                  location: 'role_cards_section',
                  destination: '/ai-program'
                });
                navigate('/ai-program');
              }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-5">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                For ICs, builders &amp; operators
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                Ship your first production AI agent in 30 days. Hands-on coaching and a proven system for founders, operators, and non-technical leaders who want working results fast.
              </p>
              <span className="inline-flex items-center text-sm font-medium text-orange-500 group-hover:text-orange-400 transition-colors">
                Learn more <ArrowRight className="ml-1.5 w-4 h-4" />
              </span>
            </button>

            {/* Office Hours card */}
            <button
              className="group text-left bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-purple-500/40 transition-all"
              onClick={() => {
                trackClick('Home - Role Card: Office Hours', {
                  location: 'role_cards_section',
                  destination: '/ship-ai'
                });
                navigate('/ship-ai');
              }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-5">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Office Hours
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                Weekly live training and community membership. Stay current on the latest AI tools and workflows with hands-on sessions and a community of builders.
              </p>
              <span className="inline-flex items-center text-sm font-medium text-purple-500 group-hover:text-purple-400 transition-colors">
                Learn more <ArrowRight className="ml-1.5 w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <p className="text-4xl font-bold text-foreground mb-1">250+</p>
              <p className="text-sm text-muted-foreground">organizations trained</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-foreground mb-1">[[TRAINED_PROFESSIONALS]]</p>
              <p className="text-sm text-muted-foreground">professionals trained</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-foreground mb-1">5</p>
              <p className="text-sm text-muted-foreground">executive faculty members</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-foreground mb-1">[[COMMUNITY_SIZE]]</p>
              <p className="text-sm text-muted-foreground">community members</p>
            </div>
          </div>

          {/* Faculty callout */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl p-8 mb-20 border border-blue-100 dark:border-blue-900/50">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Taught by executive faculty</h3>
                <p className="text-sm text-muted-foreground">
                  Our programs are led by former Microsoft, Groupon, AugmentAI, and Bottega8 executives with 14+ years of hands-on AI and ML experience. No junior instructors.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              <span>SUCCESS STORIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What participants say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real feedback from leaders and teams who have been through our programs.
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

      {/* Bottom CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Not sure where to start?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a 30-minute strategy session. We will look at where your team is today and tell you which program makes sense.
          </p>
          <Button
            size="lg"
            className="text-lg px-10 py-6 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:scale-105"
            onClick={() => {
              trackClick('Home - Bottom CTA: Book Strategy Session', {
                location: 'bottom_cta_section',
                destination: '/ai-call'
              });
              navigate('/ai-call');
            }}
          >
            Book a Strategy Session
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
