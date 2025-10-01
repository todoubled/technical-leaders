import Navigation from "@/components/Navigation";
import SalesFooter from "@/components/footers/SalesFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, Zap, TrendingUp, Users, Award, Target, FileText, Calendar, ArrowRight, Star, PlayCircle, Shield, AlertTriangle, DollarSign, Rocket, Brain, Lock, GraduationCap, Briefcase, Clock, Calculator } from "lucide-react";
import { useState } from "react";
import VideoModal from "@/components/VideoModal";
import SEO from "@/components/SEO";

const AlternativeToMBA = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoUrl = "https://youtu.be/VKetl72iSlk";

  const comparisonPoints = [
    {
      feature: "Time Investment",
      mba: "2 years full-time or 3-4 years part-time",
      techLeaders: "90 days to see results, 6 months to ROI",
      winner: "techLeaders"
    },
    {
      feature: "Total Cost",
      mba: "$100,000 - $200,000+ tuition (plus lost income)",
      techLeaders: "$2,950 one-time investment",
      winner: "techLeaders"
    },
    {
      feature: "Income Impact",
      mba: "Average $20-40K salary increase",
      techLeaders: "$25K+ opportunity guarantee within 6 months",
      winner: "techLeaders"
    },
    {
      feature: "Real-World Application",
      mba: "Theory-heavy, case studies from decades ago",
      techLeaders: "Current playbooks from active tech executives",
      winner: "techLeaders"
    },
    {
      feature: "Network Quality",
      mba: "Mixed industries, varying experience levels",
      techLeaders: "300+ senior tech leaders actively hiring/partnering",
      winner: "techLeaders"
    },
    {
      feature: "Career Flexibility",
      mba: "Traditional corporate ladder focus",
      techLeaders: "Multiple paths: CTO, VP, fractional, board seats",
      winner: "techLeaders"
    },
    {
      feature: "Opportunity Cost",
      mba: "2-4 years out of workforce or reduced capacity",
      techLeaders: "Keep your job while building new opportunities",
      winner: "techLeaders"
    },
    {
      feature: "ROI Timeline",
      mba: "5-10 years to break even",
      techLeaders: "3-6 months to positive ROI",
      winner: "techLeaders"
    }
  ];

  const mbaProblems = [
    {
      problem: "Crushing debt that takes years to repay",
      solution: "One-time $2,950 investment with guaranteed returns in 6 months"
    },
    {
      problem: "Generic business theory with no tech focus",
      solution: "Tech-specific strategies from leaders who've done it"
    },
    {
      problem: "Career pause while competitors advance",
      solution: "Build your executive brand while keeping your current role"
    },
    {
      problem: "Outdated curriculum taught by academics",
      solution: "Real-time insights from active CTOs and VPs of Engineering"
    }
  ];

  const memberWins = [
    {
      name: "J.L.",
      role: "Engineering Manager → VP of Engineering",
      location: "Texas",
      result: "$75K salary increase + equity",
      quote: "Better than my MBA friends' outcomes at 1/50th the cost. I kept my job and got promoted while they're still in school."
    },
    {
      name: "S.K.",
      role: "Senior Engineer → Fractional CTO",
      location: "California",
      result: "$300K+ annual revenue, 3-day week",
      quote: "MBA teaches you to work for others. Tech Leaders taught me to build my own thing."
    },
    {
      name: "R.T.",
      role: "Tech Lead → Advisory Board Member",
      location: "New York",
      result: "3 board seats at $50K each",
      quote: "My MBA colleagues are still paying loans. I'm collecting board fees."
    }
  ];

  const roiCalculation = {
    mba: {
      tuition: -150000,
      lostIncome: -400000, // 2 years at $200K
      salaryIncrease: 30000,
      breakEven: 18 // years
    },
    techLeaders: {
      investment: -2950,
      keptIncome: 0, // no lost income
      opportunityValue: 25000,
      breakEven: 0.5 // 6 months
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Tech Leaders vs MBA - Why Smart Engineers Skip the MBA"
        description="Compare Tech Leaders to an MBA. Get guaranteed $25K+ opportunities in 6 months vs 2 years of debt. Real tech leadership skills at 1/50th the cost."
        keywords={['mba alternative', 'tech leaders vs mba', 'engineering leadership without mba', 'skip mba', 'mba for engineers', 'technical mba alternative']}
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
              <GraduationCap className="w-4 h-4" />
              <span>MBA Alternative for Tech Leaders</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Skip the MBA. Build Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mt-2">
                Tech Executive Career Instead
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed">
              While your peers spend <span className="font-semibold">$200K and 2 years</span> on an MBA,
              you could land your first <span className="font-semibold">$25K+ opportunity in 90 days</span> with
              Tech Leaders—at 1/50th the cost.
            </p>

            <div className="flex items-center justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>$25K+ Opportunity Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <Clock className="w-4 h-4" />
                <span>Keep your job while you level up</span>
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
                See Why Engineers Choose Us
              </Button>
            </div>

            <div className="flex items-center justify-center gap-4 mt-4 text-sm">
              <div className="flex items-center gap-1 text-red-600 dark:text-red-400 font-semibold">
                <AlertTriangle className="w-4 h-4" />
                <span>Next cohort starts Monday</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Calculator className="w-16 h-16 mx-auto mb-6 text-red-600 dark:text-red-400" />
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              The MBA Math Doesn't Add Up
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's look at the real numbers that business schools don't want you to see
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-red-500/20">
              <h3 className="text-2xl font-bold mb-6 text-red-600 dark:text-red-400">Traditional MBA Path</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Tuition & Fees</span>
                  <span className="font-bold text-red-600">-$150,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Lost Income (2 years)</span>
                  <span className="font-bold text-red-600">-$400,000</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total Cost</span>
                    <span className="font-bold text-2xl text-red-600">-$550,000</span>
                  </div>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mt-6">
                  <p className="text-sm text-muted-foreground">Average salary increase: $30K/year</p>
                  <p className="font-bold text-red-600 dark:text-red-400">Break-even: 18+ years</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-green-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-bl-full"></div>
              <h3 className="text-2xl font-bold mb-6 text-green-600 dark:text-green-400">Tech Leaders Path</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Program Investment</span>
                  <span className="font-bold text-red-600">-$2,950</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Lost Income</span>
                  <span className="font-bold text-green-600">$0</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total Cost</span>
                    <span className="font-bold text-2xl text-red-600">-$2,950</span>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mt-6">
                  <p className="text-sm text-muted-foreground">Guaranteed opportunity: $25K+</p>
                  <p className="font-bold text-green-600 dark:text-green-400">Break-even: 3-6 months</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Card className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
              <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
              <div className="text-left">
                <p className="font-bold text-foreground">186x Better ROI</p>
                <p className="text-sm text-muted-foreground">Tech Leaders pays for itself while MBAs drown in debt</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Direct Comparison Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              MBA vs Tech Leaders: Head-to-Head
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Why top engineers are skipping the MBA and joining Tech Leaders instead
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Feature</th>
                  <th className="text-center py-4 px-4">
                    <div className="inline-flex items-center gap-2">
                      <span className="font-semibold text-muted-foreground">Traditional MBA</span>
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
                      <div className={`inline-flex items-start gap-2 ${point.winner === 'mba' ? 'text-green-600' : 'text-muted-foreground'}`}>
                        {point.winner === 'mba' ? <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" /> : <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-500/50" />}
                        <span className="text-sm text-left">{point.mba}</span>
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
        </div>
      </section>

      {/* Problems with MBA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Why MBAs Fail Technical Leaders
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {mbaProblems.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                      <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-red-600 dark:text-red-400 mb-2">MBA Problem: {item.problem}</h3>
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
              Engineers Who Skipped the MBA Are Winning
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from tech leaders who invested in skills, not debt
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {memberWins.map((win, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="mb-4">
                    <h3 className="font-bold text-lg text-foreground">{win.name}</h3>
                    <p className="text-sm text-muted-foreground">{win.role}</p>
                    <p className="text-sm text-muted-foreground">{win.location}</p>
                  </div>
                  <p className="text-green-600 dark:text-green-400 font-bold mb-3">
                    {win.result}
                  </p>
                  <p className="text-sm text-muted-foreground italic">"{win.quote}"</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            What MBAs Don't Teach (But We Do)
          </h2>

          <div className="space-y-6">
            <Card className="p-6 border-2 border-green-500/20 bg-gradient-to-r from-green-500/5 to-emerald-500/5">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-green-600 dark:text-green-400" />
                <h3 className="text-xl font-bold text-foreground">Real Tech Executive Skills</h3>
              </div>
              <p className="text-muted-foreground">
                Not generic case studies—actual strategies from CTOs and VPs who've built $100M+ engineering orgs.
                Learn what really works in tech leadership, not what worked for GE in 1985.
              </p>
            </Card>

            <Card className="p-6 border-2 border-blue-500/20 bg-gradient-to-r from-blue-500/5 to-purple-500/5">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold text-foreground">90 Days of Executive Positioning</h3>
              </div>
              <p className="text-muted-foreground">
                While MBA students write papers, we write your LinkedIn posts, articles, and emails that
                position you as the go-to tech executive. Done for you while you focus on your day job.
              </p>
            </Card>

            <Card className="p-6 border-2 border-purple-500/20 bg-gradient-to-r from-purple-500/5 to-pink-500/5">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h3 className="text-xl font-bold text-foreground">Multiple Revenue Streams</h3>
              </div>
              <p className="text-muted-foreground">
                MBAs teach you to climb one ladder. We show you how to build multiple:
                promotions, fractional roles, advisory positions, and consulting—all at once.
              </p>
            </Card>

            <Card className="p-6 border-2 border-yellow-500/20 bg-gradient-to-r from-yellow-500/5 to-orange-500/5">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                <h3 className="text-xl font-bold text-foreground">$25K+ Opportunity Guarantee</h3>
              </div>
              <p className="text-muted-foreground">
                MBAs guarantee nothing but debt. We guarantee you'll land at least one opportunity
                worth $25K+ within 6 months, or we work with you until you do.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* MBA Debt Reality Check */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <DollarSign className="w-16 h-16 mx-auto mb-6 text-red-600 dark:text-red-400" />
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            The MBA Debt Trap
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            <p>
              <span className="font-bold text-foreground">Average MBA debt:</span> $66,000 - $200,000+
            </p>
            <p>
              <span className="font-bold text-foreground">Monthly loan payment:</span> $800 - $2,400 for 10+ years
            </p>
            <p>
              <span className="font-bold text-foreground">Total interest paid:</span> $50,000 - $150,000
            </p>
          </div>
          <Card className="inline-block p-6 bg-white/50 dark:bg-gray-900/50">
            <p className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
              Tech Leaders: $2,950 Once
            </p>
            <p className="text-muted-foreground">
              Same career advancement, zero debt, immediate results
            </p>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Your Choice: 2 Years of Debt or 90 Days to Results?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join 300+ engineers who chose skills over degrees
          </p>

          <Card className="p-8 mb-8 bg-gradient-to-br from-card to-blue-500/5">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-left space-y-3">
                <h3 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  With an MBA You Get:
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <XCircle className="w-5 h-5 text-red-500/50" />
                  <span>$100-200K in student debt</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <XCircle className="w-5 h-5 text-red-500/50" />
                  <span>2-4 years away from tech</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <XCircle className="w-5 h-5 text-red-500/50" />
                  <span>Generic business theory</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <XCircle className="w-5 h-5 text-red-500/50" />
                  <span>Hope it pays off someday</span>
                </div>
              </div>
              <div className="text-left space-y-3">
                <h3 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  With Tech Leaders You Get:
                </h3>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">$2,950 total investment</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">Keep earning while learning</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">Tech-specific strategies</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">$25K+ guaranteed in 6 months</span>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg px-12 py-6 w-full md:w-auto mb-4"
              onClick={() => window.location.href = "https://buy.stripe.com/dRmeVd26Z2of5vI2wYaMU0A"}
            >
              Skip the MBA, Join Tech Leaders - $2,950
            </Button>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                🛡️ Protected by our $25K+ Opportunity Guarantee
              </p>
              <p className="text-sm text-muted-foreground">
                💳 Payment plans available (unlike MBA loans, these are interest-free)
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
              onClick={() => window.location.href = "/how-it-works"}
              className="text-blue-600 hover:underline"
            >
              see how it works
            </button>
          </p>
        </div>
      </section>

      <SalesFooter
        headline="Your Choice: 2 Years of Debt or 90 Days to Results?"
        subheadline="Join 300+ engineers who chose skills over degrees"
        primaryCTA={{
          text: "Skip the MBA, Join Tech Leaders - $2,950",
          url: "https://buy.stripe.com/dRmeVd26Z2of5vI2wYaMU0A",
          price: "$2,950"
        }}
        urgency={{
          text: "Next cohort starts Monday",
          icon: "alert"
        }}
        socialProof="186x Better ROI than MBA"
        guarantee={{
          text: "$25K+ Opportunity Guarantee",
          description: "Same career advancement as MBA, zero debt, immediate results - or we work with you until you succeed."
        }}
        secondaryCTA={{
          text: "See how it works",
          url: "/how-it-works"
        }}
        stats={[
          { number: "$2,950", label: "Total investment" },
          { number: "3-6 mo", label: "Break-even time" },
          { number: "$0", label: "Student debt" }
        ]}
        trackingContext="Alternative to MBA"
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={videoUrl}
      />
    </div>
  );
};

export default AlternativeToMBA;