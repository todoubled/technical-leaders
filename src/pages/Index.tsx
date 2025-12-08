import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  ArrowRight,
  Rocket,
  Brain,
  Users,
  Target,
  CheckCircle2,
  Zap,
  Quote,
  TrendingUp,
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
          '#testimonialto-4015461f-4d26-4406-ab94-ebf871fd0b2c'
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

  const offerings = [
    {
      icon: Brain,
      title: "AI Training Programs",
      description: "Master AI tools and workflows without writing code. Get hands-on training with Claude, ChatGPT, Cursor, and more.",
      cta: "Explore AI Training",
      href: "/ai",
      gradient: "from-blue-600 to-indigo-700"
    },
    {
      icon: Rocket,
      title: "Launch Your Consulting Business",
      description: "Turn your expertise into $10K+/month. Proven frameworks to validate, launch, and scale your independent business.",
      cta: "Start Your Launch",
      href: "/how-it-works",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const stats = [
    { value: "300+", label: "People Trained" },
    { value: "200+", label: "Organizations Influenced" },
    { value: "5", label: "Continents Represented" },
  ];

  const testimonials = [
    {
      name: "P.O.",
      role: "DevOps Lead",
      company: "Fortune 500",
      avatar: "PO",
      content: "The first mastermind group that gives real value. Stress levels in my life almost went to zero."
    },
    {
      name: "C.F.",
      role: "Fractional CTO",
      company: "Independent",
      avatar: "CF",
      content: "This fractional gig will replace all my income. Massive, massive win."
    },
    {
      name: "K.D.",
      role: "Director",
      company: "Tech Company",
      avatar: "KD",
      content: "Applying my new approach has led to a new job offer and a promotion."
    }
  ];

  const benefits = [
    "Hands-on training with the latest AI tools",
    "Proven frameworks to monetize your expertise",
    "Weekly coaching and community support",
    "Workshops and marketing services"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Technical Leaders - AI Training & Business Launch Programs"
        description="Join 300+ tech leaders mastering AI and building independent businesses. Get the tools, playbooks, and coaching to transform your career in 2026."
        keywords={['AI training', 'tech leadership', 'consulting business', 'career transformation', 'AI tools', 'fractional CTO', 'tech entrepreneurship']}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/ai-in-ar.png"
            alt="AI Technology Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] z-0" />

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span>TRAINING, COACHING, & MASTERMIND PROGRAMS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in">
             Think AI-First.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mt-2">
                Diversify Your Income.
              </span>
              <span className="block text-foreground/90 mt-2">
                Be A Tech Leader.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed animate-fade-in">
              Join <span className="text-foreground font-semibold">300+ people around the world</span> who've transformed their careers and organizations with our training and coaching programs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:scale-105"
                onClick={() => {
                  trackClick('Hero - AI Training', {
                    location: 'hero',
                    destination: '/ai'
                  });
                  window.location.href = '/ai';
                }}
              >
                <Brain className="w-5 h-5 mr-2" />
                AI Training Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all hover:scale-105"
                onClick={() => {
                  trackClick('Hero - Launch Business', {
                    location: 'hero',
                    destination: '/how-it-works'
                  });
                  window.location.href = '/how-it-works';
                }}
              >
                <Rocket className="w-5 h-5 mr-2" />
                Launch Your Consulting Business
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Quick Benefits */}
            <div className="grid sm:grid-cols-2 gap-3 animate-fade-in">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <section className="bg-white dark:bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500 mb-10">
            Trusted by Tech Leaders at
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <img src="/netflix.png" alt="Netflix" className="h-12 w-auto grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all" />
            <img src="/nike.png" alt="Nike" className="h-12 w-auto grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all" />
            <img src="/cashapp.svg" alt="Cash App" className="h-20 w-auto grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all" />
            <img src="/redhat.webp" alt="Red Hat" className="h-12 w-auto grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all" />
            <img src="/calendly.webp" alt="Calendly" className="h-8 w-auto grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all" />
            <img src="/gitlab.png" alt="GitLab" className="h-12 w-auto grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
                  {stat.value}
                </div>
                <p className="text-lg text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Paths Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Target className="w-4 h-4" />
              <span>CHOOSE YOUR PATH</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Two Ways to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Transform</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you want to be AI-first or build your own coaching/consulting/advising/training business, we have a proven path for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {offerings.map((offering, index) => {
              const IconComponent = offering.icon;
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                  onClick={() => {
                    trackClick(`Two Paths - ${offering.title}`, {
                      location: 'two_paths_section',
                      destination: offering.href
                    });
                    window.location.href = offering.href;
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${offering.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <CardContent className="p-10 relative z-10">
                    <div className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${offering.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">{offering.title}</h3>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {offering.description}
                    </p>
                    <Button
                      size="lg"
                      className={`bg-gradient-to-r ${offering.gradient} hover:opacity-90 text-white text-lg px-8 py-6 shadow-lg group-hover:shadow-xl transition-all`}
                    >
                      {offering.cta}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

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

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative bg-card border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <CardContent className="p-8">
                  <div className="absolute top-4 right-4 opacity-10">
                    <Quote className="h-12 w-12 text-primary" />
                  </div>

                  <p className="text-foreground mb-8 leading-relaxed text-lg italic relative z-10">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center pt-4 border-t border-border">
                    <Avatar className="h-14 w-14 mr-4 ring-2 ring-primary/20">
                      <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/40 text-primary font-semibold text-lg">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-foreground text-lg">{testimonial.name}</div>
                      <div className="text-muted-foreground text-sm font-medium">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonial.to Embed */}
          <div className="mt-12">
            <iframe
              id='testimonialto-4015461f-4d26-4406-ab94-ebf871fd0b2c'
              src="https://embed-v2.testimonial.to/w/tech-leaders-mastermind-program?id=4015461f-4d26-4406-ab94-ebf871fd0b2c"
              frameBorder="0"
              scrolling="no"
              width="100%"
              height="800px"
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

      {/* Final CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Zap className="w-4 h-4" />
            <span>START YOUR TRANSFORMATION TODAY</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Take Control of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Your Career?</span>
          </h2>

          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of tech leaders who've already made the leap. Whether you want to master AI or build your own business, we'll show you exactly how.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-10 py-7 bg-white text-slate-900 hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all hover:scale-105 font-semibold"
              onClick={() => {
                trackClick('Final CTA - AI Programs', {
                  location: 'final_cta',
                  destination: '/ai'
                });
                window.location.href = '/ai';
              }}
            >
              <Brain className="w-5 h-5 mr-2" />
              Explore AI Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all hover:scale-105"
              onClick={() => {
                trackClick('Final CTA - Launch Business', {
                  location: 'final_cta',
                  destination: '/how-it-works'
                });
                window.location.href = '/how-it-works';
              }}
            >
              <Rocket className="w-5 h-5 mr-2" />
              Launch Your Consulting Business
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <p className="text-gray-400 text-sm mt-8">
            No commitment required • Start learning today
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
