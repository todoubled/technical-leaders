import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Rocket, Users, Calendar, Lightbulb, Target, Zap, Gift, Clock, TrendingUp, Shield, Star, Award, ArrowRight, FileText } from "lucide-react";

const LaunchWithUs = () => {
  const transformations = [
    {
      before: "Feeling unchallenged and stuck in a bad job market with limited options",
      after: "Multiple high-impact opportunities with diversified income streams"
    },
    {
      before: "Virtually unknown online and like the 'best kept secret' at work",
      after: "Influential expert with a growing network that values your expertise"
    },
    {
      before: "Waiting for promotion to unlock the next level in your career",
      after: "Proactively creating your own opportunities and commanding premium rates"
    },
    {
      before: "Working alone without mentorship or proven systems to guide you",
      after: "Part of an international community of tech leaders who support each other"
    }
  ];

  const modules = [
    {
      icon: Target,
      title: "Ideal Client Profile",
      description: "Define your Ideal Customer Profile and position yourself as their perfect solution",
      outcomes: [
        "Crystal clear on who you serve",
        "Magnetic positioning statement",
        "Profile optimized for your ICP"      ]
    },
    {
      icon: FileText,
      title: "Scalable Offer",
      description: "Package your expertise into high-value offers that practically sell themselves",
      outcomes: [
        "$10k+ offer framework",
        "Sales scripts that convert",
        "Objection handling mastery"
      ]
    },
    {
      icon: Zap,
      title: "Revenue Generating Activities",
      description: "Execute daily actions that directly lead to new opportunities and income",
      outcomes: [
        "3 months of content written for you",
        "Weekly accountability check-ins",
        "Playbook of scripts, strategies, and tactics to land ideal opportunities"
      ]
    }
  ];

  const bonuses = [
    {
      title: "Mental Fitness Program",
      value: "$1,200",
      description: "Get access to our signature mental fitness program designed to boost productivity, reduce stress, and maintain peak performance under pressure",
      badge: "Most Popular"
    },
    {
      title: "Lifetime Tech Leaders Network",
      value: "$5,000+",
      description: "Your personal board of 150+ senior tech leaders who send each other opportunities, make warm intros, and close deals together",
      badge: "Most Valuable"
    },
    {
      title: "90 Days of Done-For-You Content",
      value: "$2,550",
      description: "Your personal ghostwriter creates 3 months of LinkedIn posts and articles grow your audience, network, and position you as the go-to expert (while you sleep)",
      badge: "Limited Time"
    },
    {
      title: "Weekly Workshops and Coaching Calls",
      value: "$2,400",
      description: "Get Todd's (and the whole Tech Leaders marketing team) direct feedback on your specific challenges + tear down real opportunities and show you exactly how to land them",
      badge: "Live Sessions"
    },
    {
      title: "The $100K Opportunity Playbook",
      value: "$997",
      description: "Swipe files of exact scripts that landed our members 6-figure raises, board seats, and $25K+ consulting gigs",
      badge: "Guides and Examples"
    }
  ];

  const phases = [
    {
      title: "Phase 1: Foundation",
      icon: Rocket,
      description: "Workshops, tools, and private coaching to get crystal clear on your scalable offer, positioning, and funnel so you can lock in your first customer fast",
      features: [
        "Define your niche, offer, and pricing",
        "First 3 months of content written for you",
        "Lock in your first customer",
        "Immediate ROI focus"
      ]
    },
    {
      title: "Phase 2: Go-to-Market",
      icon: TrendingUp,
      description: "Private coaching, opportunity referrals, and access to our in-house marketing team and systems to scale your expertise into a cash-generating machine",
      features: [
        "6-Week Gameplan™ cycles",
        "Identify & fix constraints",
        "Done-for-you marketing systems",
        "Weekly guidance & tracking"
      ]
    }
  ];

  const whatYouGet = [
    {
      icon: Calendar,
      title: "Weekly Mastermind Calls",
      description: "Personal guidance from Todd and the coaching team every week"
    },
    {
      icon: Users,
      title: "Small Group Community",
      description: "Always one quick post away from getting unstuck"
    },
    {
      icon: Lightbulb,
      title: "Monthly Workshops & Hotseats",
      description: "Freshest strategies and sharpest brains helping you execute"
    },
    {
      icon: Gift,
      title: "Revenue Generating Playbook",
      description: "Start driving cash before we even officially start"
    }
  ];

  const idealFor = [
    "Have 10+ years of deep experience working with EU or US companies",
    "Are willing to share your unique perspectives publicly to attract ideal opportunities",
    "Are friendly, coachable, and open to feedback in a psychologically safe environment"
  ];

  const testimonials = [
    {
      quote: "For this client, it's a fractional gig that will replace all my income, which means I can go and do this fractional thing for three days a week and then have two days to apply all the other learnings. Massive, massive win.",
      author: "C.F.",
      title: "Fractional CTO, Ireland",
      income: "Replaced full income with 3-day week",
      stars: 5
    },
    {
      quote: "Applying my new approach learned through Tech Leaders, has led to a new job offer and a promotion",
      author: "K.D.",
      title: "Director of Customer Success, Colorado",
      income: "New job offer + promotion",
      stars: 5
    },
    {
      quote: "It is harder than I thought, specifically talking about yourself as a product or service offering is not something I really ever had to do working in a large corporation for the majority of the last three decades.",
      author: "F.C.",
      title: "Fractional CTO, Ann Arbor",
      income: "Transitioned from corporate to fractional",
      stars: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-500/10 to-red-600/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/ai-in-ar.png"
            alt="AI background"
            className="w-full h-full object-cover object-top opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-700 dark:text-red-400 px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
              <Clock className="w-4 h-4" />
              <span>LIMITED SPOTS AVAILABLE</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Launch Kit
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mt-2 text-3xl sm:text-4xl lg:text-5xl">
                Turn Your Expertise Into Independent Income
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Designed to help <b>technical experts</b>, <b>consultants</b> and <b>freelancers</b> install a <b>sales and marketing system</b> to <b>productize and monetize</b> your expertise and grow <b>beyond referrals</b> and word of mouth even if you <b>hate feeling "salesy"</b> or have a <b>tiny audience</b>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-8 py-6"
                onClick={() => window.location.href = "#apply"}
              >
                Reserve Your Spot
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              Done-for-you marketing • Guaranteed ROI • Proven systems
            </p>
          </div>
        </div>
      </section>

      {/* Simple Model Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            The Model is Simple
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Two phases. Clear outcomes. Real results.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {phases.map((phase, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                    <phase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{phase.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6 italic">{phase.description}</p>
                <ul className="space-y-3">
                  {phase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Our mastermind coaching program
            </h2>
            <p className="text-lg text-muted-foreground">
              Shows you what to do, how to do it, and helps you along the way if you get stuck
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-card/80 transition-all duration-300 border border-border/50">
              <div className="mb-3">
                <Award className="w-10 h-10 mx-auto text-yellow-500/80" />
              </div>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mb-1">
                6 Days
              </p>
              <p className="text-base font-semibold text-foreground mb-1">
                Fastest First Client
              </p>
              <p className="text-sm text-muted-foreground">
                Record time from joining to landing their first high-value opportunity
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-card/80 transition-all duration-300 border border-border/50">
              <div className="mb-3">
                <TrendingUp className="w-10 h-10 mx-auto text-green-500/80" />
              </div>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mb-1">
                60-90
              </p>
              <p className="text-base font-semibold text-foreground mb-1">
                Days to Success
              </p>
              <p className="text-sm text-muted-foreground">
                Average time for members to secure their next major opportunity
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-card/80 transition-all duration-300 border border-border/50">
              <div className="mb-3">
                <Users className="w-10 h-10 mx-auto text-orange-500/80" />
              </div>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mb-1">
                28%
              </p>
              <p className="text-base font-semibold text-foreground mb-1">
                Join Through Referrals
              </p>
              <p className="text-sm text-muted-foreground">
                Word-of-mouth from successful members drives our growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-200/20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-grid-slate-700/20"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Your 90-Day Transformation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join 150+ tech leaders who stopped waiting and started winning together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {transformations.map((item, index) => (
              <div key={index} className="group">
                <Card className="p-0 overflow-hidden border-2 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl">
                  <div className="grid grid-cols-[1fr,auto,1fr]">
                    <div className="p-6 bg-gradient-to-br from-red-500/10 to-orange-500/10">
                      <p className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider mb-2">Today's Reality</p>
                      <p className="text-foreground font-medium leading-relaxed">{item.before}</p>
                    </div>
                    <div className="flex items-center justify-center px-2 bg-gradient-to-b from-orange-500/20 to-red-500/20">
                      <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400 animate-pulse" />
                    </div>
                    <div className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
                      <p className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-wider mb-2">90 Days Later</p>
                      <p className="text-foreground font-medium leading-relaxed">{item.after}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-700 dark:text-orange-400 px-6 py-3 rounded-full font-semibold">
              <Zap className="w-5 h-5" />
              <span>Start seeing results in 1 week or less</span>
            </div>
          </div>
        </div>
      </section>

      {/* The System Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            The 3-Part System That Changes Everything
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            We'll help you implement the system to go from overlooked to overbooked with premium opportunities.
          </p>

          <div className="space-y-8">
            {modules.map((module, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 p-8 text-white relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: index === 0 ? 'url(/ai-in-ar.png)' : index === 1 ? 'url(/launch-bg.png)' : 'url(/scale-bg.png)',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/50 to-red-700/50"></div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 mb-4 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-3xl font-bold">{index + 1}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{module.title}</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <p className="text-lg text-foreground mb-4">{module.description}</p>
                    <div className="space-y-2">
                      {module.outcomes.map((outcome, outcomeIndex) => (
                        <div key={outcomeIndex} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-muted-foreground">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Everything You Need to Launch
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatYouGet.map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Who This Is For Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2 text-foreground">
            This Is For You
          </h2>
          <h5 className="text-xl font-semibold mb-6 text-foreground text-center">If You...</h5>
          <Card className="p-8">
            <ul className="space-y-4">
              {idealFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 bg-gradient-to-br from-card to-orange-500/5">
            <Zap className="w-12 h-12 mx-auto mb-4 text-orange-500" />
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              It Easily Pays for Itself
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Usually before you even finish paying for it. Turn your years of know-how into
              a cash-generating machine — the kind that frees up your time and makes your old job feel optional.
            </p>
            <div className="flex items-center justify-center gap-2 text-orange-600">
              <Shield className="w-5 h-5" />
              <p className="font-semibold">
                Guarantee: We'll work with you until you've made back your investment
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            What Our Members Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <p className="text-foreground mb-4 italic text-sm leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  <p className="text-sm font-semibold text-green-600 dark:text-green-400 mt-2">
                    {testimonial.income}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Everything You Get Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Everything You Get
          </h2>

          <Card className="p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Launch Kit ($2950 Value)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "The ICP Targeter",
                "The Offer Designer",
                "The Profile Optimizer",
                "The Opportunity Finder",
                "The Pipeline Tracker",
                "The Client Converter",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground">{item}&trade;</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-foreground">Plus These Bonuses:</h3>
            <div className="space-y-4">
              {bonuses.map((bonus, index) => (
                <Card key={index} className="p-4 flex items-center justify-between relative">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-foreground">{bonus.title}</h4>
                      {bonus.badge && (
                        <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                          bonus.badge === "Most Valuable"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                            : bonus.badge === "Most Popular"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                            : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                        }`}>
                          {bonus.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{bonus.description}</p>
                  </div>
                  <span className="text-lg font-bold text-green-600 dark:text-green-400">
                    {bonus.value}
                  </span>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-2xl font-bold text-muted-foreground mb-2">
              Total Value: <span className="line-through text-muted-foreground">$15,097</span>
            </p>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              Your Investment: $2,950
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Save $12,147 when you join today (81% off)
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="apply" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-500/10 to-red-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Productize Your Expertise?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join a small group of experienced pros building scalable businesses
          </p>

          <Card className="p-8 shadow-lg mb-8">
            <div className="mb-8">
              <p className="text-3xl font-bold text-foreground mb-4">Here's the deal:</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-foreground">$2,950</p>
                  <p className="text-lg text-muted-foreground">To launch</p>
                  <p className="text-sm text-orange-600 font-semibold mt-1">With our guarantee</p>
                </div>
                <div className="text-2xl text-muted-foreground">+</div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-foreground">$850/mo</p>
                  <p className="text-lg text-muted-foreground">For 12 months to scale</p>
                  <p className="text-sm text-orange-600 font-semibold mt-1">(optional)</p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-12 py-6 w-full md:w-auto"
              onClick={() => window.location.href = "https://buy.stripe.com/dRmeVd26Z2of5vI2wYaMU0A"}
            >
              Get Started
            </Button>

            <p className="text-sm text-muted-foreground mt-4">
              💳 Payment Plans Available • 🔒 Hand-selected participants
            </p>
          </Card>

          <p className="text-sm text-muted-foreground mt-6">
            <strong>P.S.</strong> As soon as you decide, we'll get you access to our Revenue Generating
            Playbook — so you can start driving cash before we even officially start.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LaunchWithUs;