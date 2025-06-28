import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Rocket, Users, Calendar, Lightbulb, Target, Zap, Gift, Clock } from "lucide-react";

const ShipAI = () => {
  const phases = [
    {
      title: "Phase 1: Traction",
      icon: Target,
      description: "Market research and project planning to build a quick proof-of-concept",
      features: [
        "Define your AI project scope",
        "Validate market demand",
        "Build MVP fast",
        "Get early feedback"
      ]
    },
    {
      title: "Phase 2: Momentum",
      icon: Rocket,
      description: "Iterate, expand, and monetize based on real feedback",
      features: [
        "Iterate on feedback from early adopters",
        "Expand project scope based on traction",
        "Dial in monetization/promotion strategy",
        "Scale your impact"
      ]
    }
  ];

  const whatYouGet = [
    {
      icon: Calendar,
      title: "Weekly Live Group Calls",
      description: "Get unblocked and stay accountable every week"
    },
    {
      icon: Users,
      title: "24/7 Community Support",
      description: "Fast feedback, clarity, and encouragement from peers"
    },
    {
      icon: Lightbulb,
      title: "Recorded Trainings & How-To's",
      description: "Step-by-step guidance to build and ship your project"
    },
    {
      icon: Gift,
      title: "Immediate Bonus Access",
      description: "Market Research Report & Go-to-Market Plan included"
    }
  ];

  const idealFor = [
    "You have a work project or product idea in mind (we can help you validate it)",
    "Want to learn together in an AI-optimistic and welcoming environment",
    "Need to stay up to speed on the latest AI tools and techniques",
    "You're cool with my shameless love for whiteboards and very average drawing skills"
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
              Ship AI With Us
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 mt-2">
                Launch AI-First Projects in 12 Weeks
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              We're inviting you to join a tight 12-week sprint with us.
              Build, iterate, and ship real AI projects with expert guidance and peer support.
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
              Small group cohort • Weekly live calls • Ship real projects
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
            Everything You Need to Ship
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

      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Your 12-Week Journey
          </h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-600"></div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                  NOW
                </div>
                <Card className="flex-1 p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Pre-Launch Prep</h3>
                  <p className="text-muted-foreground">
                    14-day onboarding: Map out your goals and get your Phase 1 gameplan ready
                  </p>
                </Card>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                  W1-6
                </div>
                <Card className="flex-1 p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Build & Get Traction</h3>
                  <p className="text-muted-foreground">
                    Weekly live calls to build your proof-of-concept and get early feedback
                  </p>
                </Card>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                  W7-12
                </div>
                <Card className="flex-1 p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Scale & Monetize</h3>
                  <p className="text-muted-foreground">
                    Iterate based on feedback, expand scope, and dial in your monetization/promotion strategy
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
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            This Is For You If...
          </h2>
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
              Ship one successful AI project and the ROI is instant. Most members report
              saving 5-10 hours per week within the first month.
            </p>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="apply" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-500/10 to-pink-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Ship Your AI Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join a small group of ambitious tech leaders building the future
          </p>

          <Card className="p-8 shadow-lg mb-8">
            <div className="mb-8">
              <p className="text-5xl font-bold text-foreground mb-2">$1000</p>
              <p className="text-lg text-muted-foreground">One-time investment</p>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white text-lg px-12 py-6 w-full md:w-auto"
              onClick={() => window.location.href = "https://buy.stripe.com/fZe6sa3Up2L9bwAcNl"}
            >
              Reserve Your Spot Now
            </Button>

            <p className="text-sm text-muted-foreground mt-4">
              💳 Secure checkout • 🔒 SSL encrypted
            </p>

            <p className="text-sm text-muted-foreground mt-6">
              <strong>P.S.</strong> As soon as you decide, you'll get immediate access to a Market Research Report
              and Go-to-Market Plan to help you hit the ground running.
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

export default ShipAI;