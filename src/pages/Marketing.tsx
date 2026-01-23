import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import MarketingPricing from "@/components/MarketingPricing";

const Marketing = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Done-for-You Founder-Led Marketing Services | Technical Leaders"
        description="Skip the trial and error. Get proven founder-led marketing systems that position you as the go-to solution in your industry. 3 tiers of done-for-you services for senior leaders, consultants, and business owners."
        keywords={['done for you marketing', 'founder led marketing', 'personal branding', 'thought leadership', 'content marketing', 'executive branding', 'CTO marketing', 'VP marketing']}
      />
      <Navigation />
      <MarketingHero />
      <MarketingFeatures />
      <ProcessSection />
      <TestimonialSection />
      <PricingSection />
      <MarketingCTA />
      <Footer />
    </div>
  );
};

// Marketing-specific Hero Component
const MarketingHero = () => {
  return (
    <section id="pillars" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/ai-in-ar.png"
          alt="Marketing background"
          className="w-full h-full object-cover object-top opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
      </div>
      <div className="container mx-auto relative z-10 px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in max-w-5xl mx-auto">
            Look Like a Marketing Genius Without the Effort
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            The done-for-you marketing solution for busy consultants and founders.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => { window.location.href = "https://calendly.com/amelia-pm/strategy-session" }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 text-lg"
            >
              Book a Strategy Session →
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('process');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="border-2 border-foreground/20 hover:border-primary text-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-200 text-lg hover:bg-secondary/50"
            >
              See How It Works
            </button>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 mt-8 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 leading-normal">
            Put Your Marketing on Autopilot
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            A comprehensive system that covers everything you need to grow your business.
          </p>
        </div>

        {/* Three Pillars Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 text-center">
            <h3 className="font-bold text-foreground mb-4" style={{fontSize: '1.125rem'}}>Audience Building</h3>
            <p className="text-muted-foreground leading-relaxed">
              We identify your ideal customers and help you connect with them intentionally.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 text-center">
            <h3 className="font-bold text-foreground mb-4" style={{fontSize: '1.125rem'}}>Content Creation</h3>
            <p className="text-muted-foreground leading-relaxed">
              We write thoughtful, expert LinkedIn posts and newsletters that actually get engagement.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 text-center">
            <h3 className="font-bold text-foreground mb-4" style={{fontSize: '1.125rem'}}>Personal Brand</h3>
            <p className="text-muted-foreground leading-relaxed">
              We build a high-leverage personal brand that earns trust and attracts the right opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Marketing-specific Features Component
const MarketingFeatures = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background" data-section="features">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="block text-foreground">Forget Forced Messages.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Generate Real Interest.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Spam messages damage reputations. Your content should turn into natural conversations.
          </p>
        </div>

        <ul className="space-y-4 mb-16 max-w-4xl mx-auto list-disc pl-6">
          <li className="text-sm">
            <span className="font-bold text-foreground">We write content that sparks interest:</span>{" "}
            <span className="text-muted-foreground">designed to trigger responses like "How did you do this?", "Can you help?", or "Open to chat?"</span>
          </li>

          <li className="text-sm">
            <span className="font-bold text-foreground">We leverage engagement to start conversations:</span>{" "}
            <span className="text-muted-foreground">when someone engages with your content, we follow up to move things forward.</span>
          </li>

          <li className="text-sm">
            <span className="font-bold text-foreground">We use "value-first" outreach only:</span>{" "}
            <span className="text-muted-foreground">messages that offer genuine insight, instead of generic templates that scream automation.</span>
          </li>
        </ul>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-card rounded-xl p-4 border border-border">
            <img src="/251ebb97-d829-4ca2-99f3-33cec73bc4b5 (1).png" alt="LinkedIn conversation example 1" className="w-full rounded-lg" />
          </div>
          <div className="bg-card rounded-xl p-4 border border-border">
            <img src="/Untitled design - 2026-01-22T114142.497.png" alt="LinkedIn conversation example 2" className="w-full rounded-lg" />
          </div>
          <div className="bg-card rounded-xl p-4 border border-border">
            <img src="/Untitled design - 2026-01-22T114302.561.png" alt="LinkedIn conversation example 3" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Process Section Component
const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Define What Matters",
      description: "You will receive free tools and coaching to help you define your target audience, clarify your offer, and translate your experience into messaging that resonates."
    },
    {
      number: "02",
      title: "Collect Genuine Insights",
      description: "Once a month, you share ideas, priorities, or themes. We turn them into thoughtful content that reflects what you actually care about and are working on."
    },
    {
      number: "03",
      title: "Publish and Optimize",
      description: "We post on your behalf, track engagement, and continuously refine the strategy so your marketing improves over time without extra effort from you."
    }
  ];

  return (
    <section id="process" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Our Process is Built For Busy Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            If you feel like you don't have time to market yourself, you are in the right place. We leverage your insight where it counts and take care of the rest.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-card/50 backdrop-blur-sm rounded-xl p-8 pt-12 border border-border/50 relative">
              <div className="text-4xl font-bold text-muted-foreground/30 absolute top-2 right-6" style={{textShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
                Step {index + 1}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 relative z-10">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonial Section Component
const TestimonialSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          {/* Gradient accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-primary to-purple-600 rounded-t-2xl"></div>

          <div className="mb-4">
            <svg className="w-12 h-12 text-primary/40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
            </svg>
          </div>

          <blockquote className="text-lg text-foreground leading-relaxed mb-6 italic">
            "Your system handles everything from content creation to engagement. My time spent on marketing dropped by 90%, so I'm only focused on responding to new leads and highest-leverage thinking now."
          </blockquote>

          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-primary to-transparent"></div>
            <div>
              <div className="text-base font-bold text-foreground">Nick</div>
              <div className="text-sm text-muted-foreground">Co-founder and Fractional CTO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Pricing Section Component
const PricingSection = () => {
  const plans = [
    {
      name: "Audience Engine",
      price: "$850",
      period: "/month",
      forWho: "Business leaders who want steady audience growth.",
      outcome: "Build a targeted audience and surface hand-raisers every week.",
      features: [
        "ICP refinement, list building, and profile optimisation",
        "Connection workflow (up to 500 verified invites/month)",
        "Engagement tracking, light DM support, and a weekly summary"
      ],
      popular: false,
      link: "https://buy.stripe.com/6oEeYG62xetR304eVg"
    },
    {
      name: "Brand System",
      price: "$1,500",
      period: "/month",
      forWho: "Founders and consultants who need consistent, on-brand content.",
      outcome: "Publish LinkedIn content in your voice that starts sales-ready conversations.",
      features: [
        "Brand voice workshop + monthly content calendar",
        "12 LinkedIn posts published per month in your unique voice",
        "Scheduling, comment monitoring, and a weekly performance report"
      ],
      popular: true,
      link: "https://buy.stripe.com/7sY7sLdPH1kbgamgnOaMU0D"
    },
    {
      name: "Conversion Pipeline",
      price: "$2,000",
      period: "/month",
      forWho: "Operators ready to build owned audience growth and search visibility.",
      outcome: "Convert attention into subscribers, search traffic, and booked calls.",
      features: [
        "Weekly newsletter to deepen engagement with your existing audience",
        "One SEO blog per week with on-page optimisation for search visibility",
        "Cross-channel distribution strategy to extend reach and support booked calls"
      ],
      popular: false,
      link: "https://calendly.com/tech-leaders/strategy-session"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
            Pick Your Perfect Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer 3 levels of service depending on your needs and focus.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border-2 transition-all duration-300 ${
                plan.popular
                  ? 'border-primary bg-card/80 shadow-2xl'
                  : 'border-border/50 bg-card/50 hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="mb-3">
                  <span className="font-bold text-foreground">For: </span>
                  <span className="text-muted-foreground">{plan.forWho}</span>
                </div>
                <div>
                  <span className="font-bold text-foreground">Outcome: </span>
                  <span className="text-muted-foreground">{plan.outcome}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => { window.location.href = plan.link }}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                    : 'border-2 border-foreground/20 hover:border-primary text-foreground hover:bg-secondary/50'
                }`}
              >
                Get Started →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Team Section Component
const MarketingTeam = () => {
  const team = [
    {
      name: "Todd Larsen",
      role: "Co-Founder & CEO",
      description: "As a former Global Platform Engineer at Groupon, Founding Engineer at Digit, and current CEO of Technical Leaders, Todd has 15+ years of experience building and scaling products in startup mode and at-scale.",
      image: "https://cdn.prod.website-files.com/64a434b6a610d6a7db0f40aa/64a97ef0410ff2068560b25d_todd.png"
    },
    {
      name: "Stephen Bates",
      role: "Co-Founder & Head Coach",
      description: "Stephen brings a practical and pragmatic approach to leadership coaching and corporate training, with over 25 years of experience transforming technical teams and their leaders.",
      image: "https://cdn.prod.website-files.com/64a434b6a610d6a7db0f40aa/64a97ef1944d79396cb11126_stephen.png"
    },
    {
      name: "Amelia Leigner",
      role: "CMO",
      description: "Amelia is a product and marketing executive with nearly a decade of experience helping early-stage startups and AI-driven companies launch and scale.",
      image: "/amelia-leigner.png"
    },
    {
      name: "John Chapman",
      role: "Head of Operations",
      description: "Based in the UK, John combines a 15+ yearcareer in IT with a genuine curiosity about people and a values-led approach to helping our Tech Leaders grow with clarity and confidence.",
      image: "/john-chapman.jpeg"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Meet Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Marketing Team
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Work directly with experienced operators who've built, scaled, and marketed successful tech companies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-border"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
              <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const MarketingCTA = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          Not Sure Which Tier Is Right For You?
        </h2>
        <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
          Book a strategy call and we'll recommend the perfect marketing investment level for your objectives.
        </p>
        <button
          onClick={() => { window.location.href = "https://calendly.com/amelia-pm/strategy-session" }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105"
        >
          Book Your Free Strategy Call
        </button>
      </div>
    </section>
  );
};

export default Marketing;