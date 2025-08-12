import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Brain, TrendingUp, Users, Calendar, Lightbulb, DollarSign, ChartBar, Clock, Briefcase } from "lucide-react";
import SEO from "@/components/SEO";
import { generateCourseStructuredData } from "@/utils/seo-helpers";

const AIForSuits = () => {
  const phases = [
    {
      title: "Phase 1: Exploration",
      icon: Brain,
      description: "Learn to speak AI fluently and prototype ideas without writing code",
      features: [
        "Test business ideas without engineers",
        "Create working prototypes yourself",
        "Validate concepts with real customers",
        "Build confidence with AI tools"
      ]
    },
    {
      title: "Phase 2: Implementation",
      icon: TrendingUp,
      description: "Turn your best ideas into revenue-generating solutions",
      features: [
        "Transform prototypes into business value",
        "Automate repetitive business processes",
        "Generate leads and drive sales with AI",
        "Present compelling AI strategies to stakeholders"
      ]
    }
  ];

  const whatYouGet = [
    {
      icon: Calendar,
      title: "Weekly Executive Sessions",
      description: "Strategic discussions with fellow leaders"
    },
    {
      icon: Users,
      title: "Executive Peer Network",
      description: "Connect with other non-technical innovators"
    },
    {
      icon: Lightbulb,
      title: "Business-First Training",
      description: "Zero code required, 100% business focused"
    },
    {
      icon: Briefcase,
      title: "Ready-to-Use Templates",
      description: "Sales scripts, workflows, and AI prompts"
    }
  ];

  const idealFor = [
    "You're in Sales, BD, or Executive leadership (no technical background needed)",
    "Want to test ideas before committing engineering resources",
    "Need to understand AI capabilities to make strategic decisions",
    "Ready to lead AI transformation without waiting for IT"
  ];

  const businessOutcomes = [
    {
      icon: DollarSign,
      title: "Revenue Impact",
      description: "Generate leads, automate sales processes, and identify new opportunities"
    },
    {
      icon: ChartBar,
      title: "Strategic Advantage",
      description: "Make informed AI decisions and pitch winning strategies to boards"
    },
    {
      icon: Clock,
      title: "Speed to Market",
      description: "Test and validate ideas in days, not months of development cycles"
    }
  ];

  const courseStructuredData = generateCourseStructuredData(
    "AI for Suits - Executive AI Strategy Program",
    "Learn to leverage AI for business growth without writing code. Perfect for sales, BD, and executive leaders who want to innovate without technical expertise."
  );

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI for Suits - Executive AI Strategy Without the Tech"
        description="Master AI for business growth without coding. Perfect for sales, BD, and executive leaders ready to innovate without waiting for engineering resources."
        keywords={['AI for executives', 'AI for sales', 'business AI strategy', 'non-technical AI', 'executive AI training', 'AI for business development']}
        structuredData={courseStructuredData}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-600/5"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Briefcase className="w-4 h-4" />
              <span>NO CODING REQUIRED</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              AI for Suits
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 mt-2">
                Lead AI Innovation Without the Tech
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Stop waiting for engineering. Learn to prototype, validate, and implement AI solutions yourself. 
              Built specifically for non-technical leaders who want results, not code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-lg px-8 py-6"
                onClick={() => window.location.href = "#apply"}
              >
                Start Leading with AI
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              Executive cohort • Business-focused • Zero coding
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              The Executive AI Dilemma
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              You see AI opportunities everywhere, but you're stuck waiting for engineering resources. 
              Meanwhile, your competitors are moving fast.
            </p>
            <p className="text-lg text-foreground font-semibold">
              What if you could test and validate AI ideas yourself—in hours, not months?
            </p>
          </Card>
        </div>
      </section>

      {/* Business Outcomes Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Real Business Impact, Not Tech Demos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {businessOutcomes.map((outcome, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <outcome.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{outcome.title}</h3>
                <p className="text-muted-foreground">{outcome.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            From Idea to Implementation
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            12 weeks to AI fluency—no tech degree required
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {phases.map((phase, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                    <phase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{phase.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6 italic">{phase.description}</p>
                <ul className="space-y-3">
                  {phase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
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
            Built for Business Leaders
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatYouGet.map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            What You'll Build (Without Writing Code)
          </h2>
          <div className="grid gap-4">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-foreground">Sales Automation</h3>
              <p className="text-muted-foreground">
                Create AI assistants that qualify leads, draft proposals, and analyze customer conversations
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-foreground">Market Intelligence</h3>
              <p className="text-muted-foreground">
                Build systems that monitor competitors, track trends, and generate strategic insights
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-foreground">Process Optimization</h3>
              <p className="text-muted-foreground">
                Automate reporting, streamline workflows, and eliminate repetitive tasks across teams
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-foreground">Customer Experience</h3>
              <p className="text-muted-foreground">
                Design AI-powered support, personalized communications, and feedback analysis systems
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Perfect For You If...
          </h2>
          <Card className="p-8">
            <ul className="space-y-4">
              {idealFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
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
          <Card className="p-8 bg-gradient-to-br from-card to-blue-500/5">
            <DollarSign className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              The Business Case is Clear
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              One successful AI implementation can save your team 20+ hours per week. 
              Most executives report identifying $100K+ in efficiency gains within the first month.
            </p>
            <p className="text-foreground font-semibold">
              Stop talking about AI. Start delivering AI results.
            </p>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Leaders Who Made the Leap
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-gradient-to-br from-card to-blue-500/5">
              <p className="text-foreground mb-4 italic">"I went from AI skeptic to AI evangelist. Now I can prototype ideas myself and actually understand what's possible before bringing in developers."</p>
              <div>
                <p className="font-semibold text-foreground">Sarah Chen</p>
                <p className="text-sm text-muted-foreground">VP Sales, Enterprise SaaS</p>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-card to-blue-500/5">
              <p className="text-foreground mb-4 italic">"Finally, AI training that speaks my language. No jargon, just practical tools I use daily to close deals faster and automate follow-ups."</p>
              <div>
                <p className="font-semibold text-foreground">Marcus Williams</p>
                <p className="text-sm text-muted-foreground">Head of Business Development</p>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-card to-blue-500/5">
              <p className="text-foreground mb-4 italic">"This program gave me the confidence to lead our AI strategy. I can now evaluate vendors, guide our roadmap, and even build proof-of-concepts."</p>
              <div>
                <p className="font-semibold text-foreground">Jennifer Park</p>
                <p className="text-sm text-muted-foreground">Chief Revenue Officer</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="apply" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500/10 to-indigo-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Lead the AI Revolution?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join forward-thinking executives who are done waiting for IT
          </p>

          <Card className="p-8 shadow-lg mb-8">
            <div className="mb-8">
              <p className="text-5xl font-bold text-foreground mb-2">$1,500</p>
              <p className="text-lg text-muted-foreground">Investment in your AI leadership</p>
              <p className="text-sm text-muted-foreground mt-2">
                (Most companies see ROI within 30 days)
              </p>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-lg px-12 py-6 w-full md:w-auto"
              onClick={() => window.location.href = "https://buy.stripe.com/fZe6sa3Up2L9bwAcNl"}
            >
              Secure Your Executive Seat
            </Button>

            <p className="text-sm text-muted-foreground mt-4">
              💳 Corporate cards welcome • 🔒 SSL encrypted
            </p>

            <p className="text-sm text-muted-foreground mt-6">
              <strong>Immediate Access:</strong> Get our Executive AI Playbook and 
              Sales Automation Templates the moment you join.
            </p>
          </Card>

          <p className="text-muted-foreground">
            Questions? Let's talk:{" "}
            <a href="mailto:todd@technical-leaders.com" className="text-blue-600 hover:underline">
              todd@technical-leaders.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIForSuits;