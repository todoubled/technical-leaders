import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Rocket, Users, Calendar, Lightbulb, Target, Zap, Gift, Clock, TrendingUp, Shield } from "lucide-react";

const LaunchWithUs = () => {
  const phases = [
    {
      title: "Phase 1: Launch",
      icon: Rocket,
      description: "1:1 strategy sessions to get crystal clear on your scalable offer and lock in your first customer fast",
      features: [
        "Define your niche and offer positioning",
        "Lock in your first customer",
        "Immediate ROI focus",
        "Tactical implementation"
      ]
    },
    {
      title: "Phase 2: Scale",
      icon: TrendingUp,
      description: "Strategic diagnostics and proven systems to scale your expertise into a cash-generating machine",
      features: [
        "6-Week Gameplan™ cycles",
        "Identify & fix constraints",
        "Done-for-you systems",
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
    "Are friendly and coachable",
    "And you won't make fun of my bald headed content..."
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-500/10 to-pink-600/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-600/5"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-700 dark:text-red-400 px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
              <Clock className="w-4 h-4" />
              <span>7 SPOTS LEFT</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Launch With Us
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 mt-2">
                Turn Your Expertise Into Income
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Helping technical experts and consultants productize your expertise into a scalable offer that replaces your primary income
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white text-lg px-8 py-6"
                onClick={() => window.location.href = "#apply"}
              >
                Reserve Your Spot
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              Done-for-you marketing • Guaranteed results • Proven systems
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
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                    <phase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{phase.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6 italic">{phase.description}</p>
                <ul className="space-y-3">
                  {phase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
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
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Your 12-Month Journey to Scale
          </h2>
          <div className="relative">
            <div className="absolute left-12 top-12 bottom-12 w-0.5 bg-gradient-to-b from-purple-500 to-pink-600"></div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 rounded-full text-center bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold flex-shrink-0 relative z-10">
                  NOW
                </div>
                <Card className="flex-1 p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Launch</h3>
                  <p className="text-muted-foreground">
                    Get crystal clear on your scalable offer and lock in your first customer fast
                  </p>
                </Card>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-24 h-24 rounded-full text-center bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold flex-shrink-0 relative z-10">
                  6 Weeks
                </div>
                <Card className="flex-1 p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">First 6-Week Gameplan™</h3>
                  <p className="text-muted-foreground">
                    Diagnostic process to identify your biggest constraint and install the right system
                  </p>
                </Card>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-24 h-24 rounded-full text-center bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold flex-shrink-0 relative z-10">
                  12 Months
                </div>
                <Card className="flex-1 p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Scale to Freedom</h3>
                  <p className="text-muted-foreground">
                    Every 6 weeks: regroup, identify next constraint, install proven systems, keep momentum climbing
                  </p>
                </Card>
              </div>
            </div>
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
                  <CheckCircle2 className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
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
          <Card className="p-8 bg-gradient-to-br from-card to-purple-500/5">
            <Zap className="w-12 h-12 mx-auto mb-4 text-purple-500" />
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              It Easily Pays for Itself
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Usually before you even finish paying for it. Turn your years of know-how into
              a cash-generating machine — the kind that frees up your time and makes your old job feel optional.
            </p>
            <div className="flex items-center justify-center gap-2 text-purple-600">
              <Shield className="w-5 h-5" />
              <p className="font-semibold">
                Guarantee: We'll work with you until you've made back your investment
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="apply" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-500/10 to-pink-600/10">
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
                  <p className="text-sm text-purple-600 font-semibold mt-1">With our guarantee</p>
                </div>
                <div className="text-2xl text-muted-foreground">+</div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-foreground">$850/mo</p>
                  <p className="text-lg text-muted-foreground">For 12 months to scale</p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white text-lg px-12 py-6 w-full md:w-auto"
              onClick={() => window.location.href = "mailto:todd@technical-leaders.com?subject=I'm In - Mastermind Coaching Program"}
            >
              DM "I'm In" to Get Started
            </Button>

            <p className="text-sm text-muted-foreground mt-4">
              💳 Small group • 🔒 Hand-selected participants
            </p>

            <div className="mt-8 space-y-2 text-sm text-muted-foreground">
              <p><strong>Step 1:</strong> DM me the words "I'm In"</p>
              <p><strong>Step 2:</strong> We'll get you enrolled</p>
              <p><strong>Step 3:</strong> We'll get you set up in the program and book your Gameplan</p>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              <strong>P.S.</strong> As soon as you decide, we'll get you access to our Revenue Generating
              Playbook — so you can start driving cash before we even officially start.
            </p>
          </Card>

          <p className="text-muted-foreground">
            Questions? Email me at{" "}
            <a href="mailto:todd@technical-leaders.com" className="text-purple-600 hover:underline">
              todd@technical-leaders.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LaunchWithUs;