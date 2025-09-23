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
        description="Skip the trial and error. Get proven founder-led marketing systems that position you as the go-to expert in your industry. 3 tiers of done-for-you services for senior leaders, consultants, and business owners."
        keywords={['done for you marketing', 'founder led marketing', 'personal branding', 'thought leadership', 'content marketing', 'executive branding', 'CTO marketing', 'VP marketing']}
      />
      <Navigation />
      <MarketingHero />
      <CompanyLogos />
      <MarketingFeatures />
      <MarketingTeam />
      <MarketingPricing />
      <Footer />
    </div>
  );
};

// Marketing-specific Hero Component
const MarketingHero = () => {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/ai-in-ar.png"
          alt="Marketing background"
          className="w-full h-full object-cover object-top opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
      </div>
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Done-for-You
            <span className="text-primary block mt-2">Distribution & Marketing</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Skip the trial and error. Use our <b>proven marketing systems</b> that position you as the <b>go-to expert</b> in your industry.<br /> <br />
            Our clients see <b>3x more inbound opportunities</b>, <b>premium pricing power</b>, and <b>industry recognition</b> within 90 days. Stop being the best-kept secret in your space.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <button
              onClick={() => { window.location.href = "https://calendly.com/tech-leaders/strategy-session" }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg px-8 py-3 rounded-lg font-semibold transition-all duration-200 group shadow-lg hover:shadow-xl"
            >
              Get Your Marketing Strategy Call
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </button>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-card rounded-lg shadow-2xl p-8 border border-border animate-scale-in relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Executive presenting to board"
                className="w-full h-auto rounded-lg"
              />
            </div>
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

export default Marketing;