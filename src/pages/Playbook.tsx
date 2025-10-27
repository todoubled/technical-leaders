import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, BookOpen, Clock, TrendingUp, Target, ArrowRight, Zap, DollarSign, Users, Rocket } from "lucide-react";
import SEO from "@/components/SEO";
import { trackEvent, trackConversion } from "@/utils/posthog";
import { useTrackScrollDepth } from "@/hooks/use-posthog";
import { useEffect, useState } from "react";

const Playbook = () => {
  useTrackScrollDepth('Playbook Landing Page');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    trackEvent('Playbook Landing Page View', {
      page_type: 'lead_capture',
      offer: 'productize_monetize_playbook'
    });

    // Inject the Kit.com form script for mobile container
    const formContainerMobile = document.getElementById('playbook-form-container-mobile');
    if (formContainerMobile && !formContainerMobile.querySelector('script')) {
      const scriptMobile = document.createElement('script');
      scriptMobile.async = true;
      scriptMobile.setAttribute('data-uid', '4cf20e02b4');
      scriptMobile.src = 'https://techleaders.kit.com/4cf20e02b4/index.js';
      formContainerMobile.appendChild(scriptMobile);
    }

    // Inject the Kit.com form script for desktop container
    const formContainerDesktop = document.getElementById('playbook-form-container-desktop');
    if (formContainerDesktop && !formContainerDesktop.querySelector('script')) {
      const scriptDesktop = document.createElement('script');
      scriptDesktop.async = true;
      scriptDesktop.setAttribute('data-uid', '4cf20e02b4');
      scriptDesktop.src = 'https://techleaders.kit.com/4cf20e02b4/index.js';
      formContainerDesktop.appendChild(scriptDesktop);

      // Listen for form submissions (only need one listener)
      scriptDesktop.onload = () => {
        window.addEventListener('message', (event) => {
          if (event.origin === 'https://techleaders.kit.com' &&
              event.data?.event === 'form_submitted') {
            trackConversion('Playbook Signup', {
              source: 'kit_form',
              location: 'playbook_landing_page'
            });
            setFormSubmitted(true);
          }
        });
      };
    }
  }, []);

  const scrollToForm = () => {
    // Scroll to the visible form (mobile or desktop)
    const formContainerMobile = document.getElementById('playbook-form-container-mobile');
    const formContainerDesktop = document.getElementById('playbook-form-container-desktop');

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
    "How to position yourself to stand out to your ideal clients (without risking your primary income or using your personal network)",
    "How to get paid to advise and lead strategic technical decisions (with a scalable offer so you don't burn out)",
    "Where to find your ideal clients (without cold messaging people like a creep)",
    "First 5 client acquisition case study from 2020",
  ];

  return (
    <div className="min-h-screen bg-background">
      <style>{`
        .book-container {
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 600px;
          margin-bottom: 2rem;
        }

        @keyframes initAnimation {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(-30deg);
          }
        }

        .book {
          width: 200px;
          height: 300px;
          position: relative;
          transform-style: preserve-3d;
          transform: rotateY(-30deg);
          transition: 1s ease;
          animation: 1s ease 0s 1 initAnimation;
        }

        .book-container:hover .book,
        .book-container:focus .book {
          transform: rotateY(0deg);
        }

        .book > :first-child {
          position: absolute;
          top: 0;
          left: 0;
          width: 200px;
          height: 300px;
          transform: translateZ(15px);
          background-color: #01060f;
          border-radius: 0 2px 2px 0;
          box-shadow: 5px 5px 20px #666;
        }

        .book::before {
          position: absolute;
          content: ' ';
          left: 0;
          top: 1px;
          width: 28px;
          height: 298px;
          transform: translateX(184px) rotateY(90deg);
          background: linear-gradient(90deg,
            #fff 0%,
            #f9f9f9 5%,
            #fff 10%,
            #f9f9f9 15%,
            #fff 20%,
            #f9f9f9 25%,
            #fff 30%,
            #f9f9f9 35%,
            #fff 40%,
            #f9f9f9 45%,
            #fff 50%,
            #f9f9f9 55%,
            #fff 60%,
            #f9f9f9 65%,
            #fff 70%,
            #f9f9f9 75%,
            #fff 80%,
            #f9f9f9 85%,
            #fff 90%,
            #f9f9f9 95%,
            #fff 100%
          );
        }

        .book::after {
          position: absolute;
          top: 0;
          left: 0;
          content: ' ';
          width: 200px;
          height: 300px;
          transform: translateZ(-15px);
          background-color: #01060f;
          border-radius: 0 2px 2px 0;
          box-shadow: -10px 0 50px 10px #666;
        }
      `}</style>
      <SEO
        title="Productize & Monetize Your Expertise - Even If You Hate Promoting Yourself"
        description="Diversify and grow your income without burning out. Get 1000+ warm lead examples and proven tactics to find ideal clients - with ZERO ad spend or cold messaging."
        keywords={['technical leadership', 'consulting playbook', 'value-based pricing', 'tech consulting', 'productize expertise', 'independent consulting', 'consulting business', 'side income']}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/ai-in-ar.png"
            alt="AI background"
            className="w-full h-full object-cover object-top opacity-20"
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
                <span>The Complete Playbook</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                <span className="block">Productize &</span>
                <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mt-2">
                  Monetize Your Expertise
                </span>
              </h1>

              <p className="text-2xl font-semibold mb-3 text-foreground/90">
                To Diversify and Grow Your Income (<span className="italic">without</span> burning out)
              </p>

              <p className="text-xl mb-6 text-muted-foreground">
                Even if you hate promoting yourself.
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
                  <p className="text-center font-bold text-lg mb-2">Get The Playbook</p>
                  <p className="text-center text-sm text-muted-foreground mb-4">Plus 1000+ warm lead examples & 26 content hooks</p>
                  <div id="playbook-form-container-mobile"></div>
                </div>
              </div>

              <div className="bg-muted/50 border border-border rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold mb-2">This doc is everything you need to productize and monetize your expertise for extra income on the side</p>
                <p className="text-sm text-muted-foreground">With <span className="font-bold">ZERO ad spend</span>, or sending cold messages</p>
                <p className="text-sm text-muted-foreground">Even if you hate sales and marketing and have a tiny audience</p>
              </div>

              {/* Value Props */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Find Your Niche</p>
                    <p className="text-xs text-muted-foreground">Define your ideal client profile</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Value-Based Pricing</p>
                    <p className="text-xs text-muted-foreground">Stop trading time for money</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Client Acquisition</p>
                    <p className="text-xs text-muted-foreground">Build a repeatable system</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Rocket className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Safe Transition</p>
                    <p className="text-xs text-muted-foreground">Move from W2 to consulting</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form (Desktop) */}
            <div className="hidden lg:block">
              {/* 3D Book Animation */}
              <a className="book-container" target="_blank" rel="noreferrer noopener">
                <div className="book">
                  <img alt="Playbook Cover" src="https://www.technical-leaders.com/playbook-cover.png" />
                </div>
              </a>

              <Card className="p-8 bg-background/80 backdrop-blur border-2 border-primary/20 shadow-2xl">
                <div className="text-center mb-6">
                  <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h2 className="text-2xl font-bold mb-2">Get Instant Access</h2>
                  <p className="text-muted-foreground">Enter your email to get the playbook immediately</p>
                </div>

                <div id="playbook-form-container-desktop"></div>

                {formSubmitted && (
                  <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-green-800 dark:text-green-200 text-center font-semibold">
                      ✓ Success! Check your email for the playbook
                    </p>
                  </div>
                )}

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>1000+ warm lead examples</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>26 content hooks for engagement</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>Proven tactics with real examples</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>Mistakes to avoid as consultant</span>
                    </div>
                  </div>
                </div>

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

      {/* What's Inside Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need to Start Earning on the Side
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Without risking your primary income, burning out, or cold messaging strangers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Define Your Niche</h3>
              <p className="text-muted-foreground mb-4">
                Create your ideal client profile with laser precision. Stop trying to be everything to everyone.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>ICP deep dive template</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Problem niche framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>"Now buyer" identification system</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Marketing System</h3>
              <p className="text-muted-foreground mb-4">
                Build a consistent content and outreach machine that generates qualified leads on autopilot.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>2-2-2 content formula</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>30-minute daily outreach sprint</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Profile optimization templates</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Value-Based Pricing</h3>
              <p className="text-muted-foreground mb-4">
                Stop trading time for money. Learn to price based on value created, not hours worked.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Value calculation framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Package pricing templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Offer validation system</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quick Start Challenge</h3>
              <p className="text-muted-foreground mb-4">
                The "10 Before 10" challenge to get your first results THIS WEEK.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Instant case study template</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Speed prospecting system</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Connection blitz scripts</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">30-Day Roadmap</h3>
              <p className="text-muted-foreground mb-4">
                Week-by-week implementation plan to go from zero to first client in 30 days.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Daily action checklists</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Weekly milestones</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Success metrics tracking</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Safe Transition Strategy</h3>
              <p className="text-muted-foreground mb-4">
                Move from W2 to independent consulting without the risk. Keep your day job while you build.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Parallel stream blueprint</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Financial safety checklist</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Phase-by-phase timeline</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Diversify Your Income Without the Burnout?
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            Get instant access to the complete playbook, 1000+ warm lead examples, and 26 content hooks.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            With ZERO ad spend or cold messaging. Even if you hate sales and marketing.
          </p>
          <Button
            size="lg"
            onClick={scrollToForm}
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-6 text-lg"
          >
            Get Instant Access
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Free • No credit card required • Instant delivery
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Playbook;
