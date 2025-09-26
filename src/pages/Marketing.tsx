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
      <CompanyLogos />
      <MarketingFeatures />
      <MarketingTeam />
      <MarketingCTA />
      <Footer />
    </div>
  );
};

// Marketing-specific Hero Component with Pricing
const MarketingHero = () => {
  const plans = [
    {
      name: "The Lead Connector™",
      price: "$850",
      period: "/month",
      description: "Perfect for learning how to get your first customers without being a marketer",
      features: [
        "Go-to-Market Strategy",
        "Funnel optimization",
        "3 months of high-quality content",
        "Engagement strategy to convert leads"
      ],
      popular: false,
      badge: "Get Started",
      gradient: "from-emerald-500 to-teal-600",
      badgeColor: "bg-emerald-500",
      idealFor: "Growing audience and getting leads for outreach",
      results: "Automated 500+ new ICP connections/followers",
      link: "https://buy.stripe.com/dRmeVd26Z2of5vI2wYaMU0A"
    },
    {
      name: "The Content Creator™",
      price: "$1500",
      period: "/month",
      description: "For busy founders and leaders growing their audience and business",
      features: [
        "Everything in The Lead Connector™",
        "Content calendar planning",
        "Basic analytics & reporting",
        "Weekly guidance & tracking",
        "Private 1-on-1 coaching"
      ],
      popular: true,
      gradient: "from-blue-500 to-purple-600",
      badgeColor: "bg-primary",
      idealFor: "Converting inbound leads with content marketing",
      results: "Automated Inbound/Outbound Lead Conversion",
      link: "https://buy.stripe.com/6oEeYG62xetR304eVg"
    },
    {
      name: "The Multi-Channel Scaler™",
      price: "Custom Packages",
      period: "",
      badge: "Most Effective",
      description: "Complete multi-channel thought leadership dominance for industry leaders and serial entrepreneurs",
      features: [
        "Everything in The Lead Connector™",
        "Evertying in The Content Creator™",
        "Daily content across all channels",
        "Channel-specific growth strategies",
        "Media kit development"
      ],
      popular: false,
      gradient: "from-orange-500 to-red-600",
      badgeColor: "bg-orange-500",
      idealFor: "Omni-present marketing and brand building",
      results: "Performance-based goals TBD",
      link: "https://buy.stripe.com/7sY7sLdPH1kbgamgnOaMU0D"
    }
  ];

  return (
    <section id="pricing" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/ai-in-ar.png"
          alt="Marketing background"
          className="w-full h-full object-cover object-top opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Done-for-You
            <span className="text-primary block mt-2">Distribution & Marketing</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in">
            Skip the trial and error. Use our <b>proven marketing systems</b> that position you as the <b>go-to solution</b> in your industry.
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 mt-8">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Pick Your Plan
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Each tier is designed to systematically build your authority and generate qualified opportunities. We handle everything so you can focus on what you do best.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group bg-card rounded-lg p-6 border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular
                  ? 'border-primary shadow-xl scale-105 bg-gradient-to-br from-card to-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {/* Gradient accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${plan.gradient} rounded-t-lg`} />

              {/* Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-xl border-2 border-white">
                    Most Popular
                  </span>
                </div>
              )}

              {plan.badge && !plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className={`${plan.badgeColor} text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg`}>
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center pt-4">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{plan.description}</p>

                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>

                <div className="bg-secondary/50 rounded-lg p-2 mb-3">
                  <div className="text-xs font-semibold text-primary">Ideal For:</div>
                  <div className="text-xs text-muted-foreground">{plan.idealFor}</div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-2 mb-4">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-400">Expected Results:</div>
                  <div className="text-xs text-green-600 dark:text-green-300">{plan.results}</div>
                </div>

                <ul className="space-y-2 mb-6 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => { window.location.href = plan.link }}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.gradient} hover:shadow-lg hover:scale-105 text-white`
                      : `border border-primary/20 hover:border-primary bg-gradient-to-r ${plan.gradient} hover:shadow-lg text-white`
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Strategy Call CTA below pricing */}
        <div className="text-center mt-12">
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Not Sure Which Tier Is Right for You?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Book a strategy call and we'll recommend the perfect marketing investment level for your objectives.
            </p>
            <button
              onClick={() => { window.location.href = "https://calendly.com/tech-leaders/strategy-session" }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-xl hover:scale-105 text-lg"
            >
              Book Your Free Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Company Logos Section Component
const CompanyLogos = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-gray-600 mb-8">
          Trusted by Tech Leaders at
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          <img src="/netflix.png" alt="Netflix" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          <img src="/nike.png" alt="Nike" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          <img src="/cashapp.svg" alt="Cash App" className="h-20 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          <img src="/redhat.webp" alt="Red Hat" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          <img src="/calendly.webp" alt="Calendly" className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          <img src="/gitlab.png" alt="GitLab" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </section>
  );
};

// Marketing-specific Features Component
const MarketingFeatures = () => {
  const features = [
    {
      title: "Strategic Positioning",
      description: "We position you as the definitive solution in your niche, not just another option.",
      icon: "🎯"
    },
    {
      title: "Content That Converts",
      description: "Social media posts that actually generate qualified leads and opportunities.",
      icon: "✍️"
    },
    {
      title: "Sustainable Systems",
      description: "Marketing that works for you 24/7, not just when you're actively posting.",
      icon: "⚙️"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Why Choose Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Marketing Approach
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We understand that great technical leaders hate self-promotion but need market visibility. Our approach feels authentic and builds long-term authority.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="bg-card rounded-xl p-12 border-2 border-primary/20 max-w-4xl mx-auto shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Stop Being the Best-Kept Secret in Your Industry?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join hundreds of technical leaders who've transformed their market presence with our done-for-you marketing systems. Your expertise deserves the recognition.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('pricing');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg px-10 py-4 rounded-lg font-semibold transition-all duration-200 group shadow-lg hover:shadow-2xl hover:scale-105"
            >
              View Investment Options
              <span className="ml-2 group-hover:translate-y--1 transition-transform inline-block">↑</span>
            </button>
            <p className="text-sm text-muted-foreground mt-6">
              30-day money-back guarantee • No long-term contracts • Start seeing results in 90 days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketing;