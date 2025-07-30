import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, Zap, TrendingUp, Users, Award, Target, FileText, Calendar, ArrowRight, Star, PlayCircle, Shield, AlertTriangle, DollarSign, Rocket, Brain, Lock } from "lucide-react";
import { useState } from "react";
import VideoModal from "@/components/VideoModal";
import SEO from "@/components/SEO";

const AlternativeToSidebar = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoUrl = "https://youtu.be/VKetl72iSlk";

  const comparisonPoints = [
    {
      feature: "Focus",
      sidebar: "Generic peer circles for any executive",
      techLeaders: "Laser-focused on tech leaders ready to monetize expertise",
      winner: "techLeaders"
    },
    {
      feature: "Results Timeline",
      sidebar: "Long-term networking with unclear ROI",
      techLeaders: "30-45 days to first premium opportunity",
      winner: "techLeaders"
    },
    {
      feature: "Income Impact",
      sidebar: "Career growth through connections",
      techLeaders: "$25K+ opportunity guarantee within 6 months",
      winner: "techLeaders"
    },
    {
      feature: "Content",
      sidebar: "General leadership discussions",
      techLeaders: "90 days of done-for-you content positioning you as an expert",
      winner: "techLeaders"
    },
    {
      feature: "Community Size",
      sidebar: "1000+ members (diluted attention)",
      techLeaders: "150+ curated tech leaders (high-touch support)",
      winner: "techLeaders"
    },
    {
      feature: "Pricing",
      sidebar: "Ongoing subscription (accumulates over time)",
      techLeaders: "One-time $2,950 investment with lifetime network access",
      winner: "techLeaders"
    },
    {
      feature: "Support Model",
      sidebar: "Peer-only discussions",
      techLeaders: "Weekly coaching with Todd + peer mastermind",
      winner: "techLeaders"
    },
    {
      feature: "Tools & Systems",
      sidebar: "Networking platform only",
      techLeaders: "Complete business-building toolkit + templates",
      winner: "techLeaders"
    }
  ];

  const sidebarProblems = [
    {
      problem: "Too broad and unfocused",
      solution: "Tech Leaders is exclusively for senior engineers ready to become CTOs, VPs, and fractional executives"
    },
    {
      problem: "No clear path to ROI",
      solution: "Our system delivers measurable results: promotion, new role, consulting gigs, or board positions"
    },
    {
      problem: "Just another networking group",
      solution: "We provide done-for-you content, proven playbooks, and weekly implementation support"
    },
    {
      problem: "Passive community engagement",
      solution: "Active opportunity sharing with members sending each other 6-figure deals weekly"
    }
  ];

  const memberWins = [
    {
      name: "C.F.",
      role: "Fractional CTO",
      location: "Ireland",
      result: "Replaced full income with 3-day week",
      quote: "For this client, it's a fractional gig that will replace all my income, which means I can go and do this fractional thing for three days a week."
    },
    {
      name: "K.D.",
      role: "Director of Customer Success",
      location: "Colorado",
      result: "New job offer + promotion",
      quote: "Applying my new approach learned through Tech Leaders, has led to a new job offer and a promotion"
    },
    {
      name: "M.W.",
      role: "CTO",
      location: "Poland",
      result: "Leveled up strategic impact",
      quote: "I wanted to increase my leverage by doing a higher level of work. Tech Leaders delivered exactly that."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Tech Leaders vs Sidebar - Why Tech Leaders Delivers Better ROI"
        description="Compare Tech Leaders to Sidebar. Get guaranteed $25K+ opportunities in 6 months vs generic networking. One-time investment vs ongoing subscription."
        keywords={['sidebar alternative', 'tech leaders vs sidebar', 'executive coaching comparison', 'leadership program comparison', 'sidebar competitor']}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500/10 to-purple-600/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              <span>Sidebar Alternative</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Why Tech Leaders Choose Us Over
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mt-2">
                Sidebar's Generic Networking
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed">
              While Sidebar offers peer circles for any executive, Tech Leaders delivers
              <span className="font-semibold"> guaranteed $25K+ opportunities</span> specifically for senior engineers
              ready to monetize their expertise.
            </p>

            <div className="flex items-center justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>$25K+ Opportunity Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <DollarSign className="w-4 h-4" />
                <span>One-time investment (not subscription)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg px-8 py-6"
                onClick={() => window.location.href = "https://buy.stripe.com/dRmeVd26Z2of5vI2wYaMU0A"}
              >
                Join Tech Leaders - $2,950
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 group"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                See the Difference
              </Button>
            </div>

            <div className="flex items-center justify-center gap-4 mt-4 text-sm">
              <div className="flex items-center gap-1 text-red-600 dark:text-red-400 font-semibold">
                <AlertTriangle className="w-4 h-4" />
                <span>Only 3 spots left this week</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Comparison Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Side-by-Side Comparison
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See why tech leaders are switching from Sidebar's generic networking to our results-driven system
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Feature</th>
                  <th className="text-center py-4 px-4">
                    <div className="inline-flex items-center gap-2">
                      <span className="font-semibold text-muted-foreground">Sidebar</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="inline-flex items-center gap-2">
                      <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Tech Leaders</span>
                      <Star className="w-5 h-5 text-yellow-500" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonPoints.map((point, index) => (
                  <tr key={index} className="border-b hover:bg-secondary/30 transition-colors">
                    <td className="py-4 px-4 font-medium text-foreground">{point.feature}</td>
                    <td className="py-4 px-4 text-center">
                      <div className={`inline-flex items-start gap-2 ${point.winner === 'sidebar' ? 'text-green-600' : 'text-muted-foreground'}`}>
                        {point.winner === 'sidebar' ? <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" /> : <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-500/50" />}
                        <span className="text-sm text-left">{point.sidebar}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className={`inline-flex items-start gap-2 ${point.winner === 'techLeaders' ? 'text-green-600 dark:text-green-400' : 'text-muted-foreground'}`}>
                        {point.winner === 'techLeaders' ? <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" /> : <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-500/50" />}
                        <span className="text-sm font-semibold text-left">{point.techLeaders}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Card className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
              <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
              <div className="text-left">
                <p className="font-bold text-foreground">The Verdict is Clear</p>
                <p className="text-sm text-muted-foreground">Tech Leaders delivers measurable ROI while Sidebar offers... networking</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Problems with Sidebar Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            The Problems with Sidebar (And How We Solve Them)
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {sidebarProblems.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                      <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-red-600 dark:text-red-400 mb-2">Sidebar: {item.problem}</h3>
                    <div className="flex items-start gap-2 mt-4">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-foreground"><span className="font-semibold">Tech Leaders:</span> {item.solution}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real Results Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Real Results vs. Vague Promises
            </h2>
            <p className="text-xl text-muted-foreground">
              While Sidebar talks about "career growth," our members land real opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {memberWins.map((win, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="mb-4">
                    <h3 className="font-bold text-lg text-foreground">{win.name}</h3>
                    <p className="text-sm text-muted-foreground">{win.role}, {win.location}</p>
                  </div>
                  <p className="text-green-600 dark:text-green-400 font-bold mb-3">
                    {win.result}
                  </p>
                  <p className="text-sm text-muted-foreground italic">"{win.quote}"</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              The Math is Simple
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-6">
              <div>
                <p className="text-3xl font-bold text-red-600 dark:text-red-400">$300+/mo</p>
                <p className="text-sm text-muted-foreground">Sidebar subscription forever</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-2xl">vs</span>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">$2,950 once</p>
                <p className="text-sm text-muted-foreground">Tech Leaders + lifetime access</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Plus our <span className="font-bold text-foreground">$25K+ Opportunity Guarantee</span> makes this a no-brainer
            </p>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Everything Sidebar Doesn't Give You
          </h2>

          <div className="space-y-6">
            <Card className="p-6 border-2 border-green-500/20 bg-gradient-to-r from-green-500/5 to-emerald-500/5">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-green-600 dark:text-green-400" />
                <h3 className="text-xl font-bold text-foreground">90 Days of Done-For-You Content ($2,550 Value)</h3>
              </div>
              <p className="text-muted-foreground">
                While Sidebar members struggle to find time for networking, we give you 3 months of LinkedIn posts,
                articles, and emails that position you as the go-to expert—written by our team while you focus on your day job.
              </p>
            </Card>

            <Card className="p-6 border-2 border-blue-500/20 bg-gradient-to-r from-blue-500/5 to-purple-500/5">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold text-foreground">Proven Playbooks & Templates ($1,997 Value)</h3>
              </div>
              <p className="text-muted-foreground">
                Exact scripts that landed our members 6-figure raises, board seats, and $25K+ consulting gigs.
                Not theory—actual templates you can use tomorrow.
              </p>
            </Card>

            <Card className="p-6 border-2 border-purple-500/20 bg-gradient-to-r from-purple-500/5 to-pink-500/5">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h3 className="text-xl font-bold text-foreground">Weekly Implementation Calls ($2,400 Value)</h3>
              </div>
              <p className="text-muted-foreground">
                Get Todd's direct feedback on your specific challenges. Watch him tear down real opportunities
                and show you exactly how to land them. (Sidebar offers peer discussions only.)
              </p>
            </Card>

            <Card className="p-6 border-2 border-yellow-500/20 bg-gradient-to-r from-yellow-500/5 to-orange-500/5">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                <h3 className="text-xl font-bold text-foreground">$25K+ Opportunity Guarantee</h3>
              </div>
              <p className="text-muted-foreground">
                If you don't land at least one opportunity worth $25K+ within 6 months, we work with you
                for free until you do. Sidebar offers... hope?
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-red-600 dark:text-red-400" />
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Why Tech Leaders Are Leaving Sidebar
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            <p>
              <span className="font-bold text-foreground">Time:</span> Another year of networking won't change your income
            </p>
            <p>
              <span className="font-bold text-foreground">Money:</span> $300+/month adds up fast with no guaranteed ROI
            </p>
            <p>
              <span className="font-bold text-foreground">Results:</span> Generic advice doesn't work for technical leaders
            </p>
          </div>
          <Card className="inline-block p-6 bg-white/50 dark:bg-gray-900/50">
            <p className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">
              Only 3 Spots Left This Week
            </p>
            <p className="text-muted-foreground">
              We limit enrollment to maintain quality and personal attention
            </p>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Stop Networking. Start Earning.
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join 150+ tech leaders who chose results over relationships
          </p>

          <Card className="p-8 mb-8 bg-gradient-to-br from-card to-blue-500/5">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-left space-y-3">
                <h3 className="font-bold text-lg text-foreground mb-4">With Sidebar You Get:</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <XCircle className="w-5 h-5 text-red-500/50" />
                  <span>Generic peer circles</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <XCircle className="w-5 h-5 text-red-500/50" />
                  <span>Ongoing monthly fees</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <XCircle className="w-5 h-5 text-red-500/50" />
                  <span>No clear ROI timeline</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <XCircle className="w-5 h-5 text-red-500/50" />
                  <span>Figure it out yourself</span>
                </div>
              </div>
              <div className="text-left space-y-3">
                <h3 className="font-bold text-lg text-foreground mb-4">With Tech Leaders You Get:</h3>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">Tech-specific expertise</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">One-time investment</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">$25K+ in 6 months</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">Done-for-you system</span>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg px-12 py-6 w-full md:w-auto mb-4"
              onClick={() => window.location.href = "https://buy.stripe.com/dRmeVd26Z2of5vI2wYaMU0A"}
            >
              Switch to Tech Leaders - $2,950
            </Button>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                🛡️ Protected by our $25K+ Opportunity Guarantee
              </p>
              <p className="text-sm text-muted-foreground">
                💳 Payment plans available
              </p>
            </div>
          </Card>

          <p className="text-muted-foreground">
            Questions? Email{" "}
            <a href="mailto:todd@technical-leaders.com" className="text-blue-600 hover:underline">
              todd@technical-leaders.com
            </a>
            {" "}or{" "}
            <button
              onClick={() => window.location.href = "/call"}
              className="text-blue-600 hover:underline"
            >
              book a call
            </button>
          </p>
        </div>
      </section>

      <Footer />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={videoUrl}
      />
    </div>
  );
};

export default AlternativeToSidebar;