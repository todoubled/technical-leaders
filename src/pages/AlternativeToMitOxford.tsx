import Navigation from "@/components/Navigation";
import SalesFooter from "@/components/footers/SalesFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, Zap, TrendingUp, Users, Award, Target, FileText, Calendar, ArrowRight, Star, PlayCircle, Shield, AlertTriangle, DollarSign, Rocket, Brain, Lock, GraduationCap, Briefcase, Clock, Calculator, BookOpen, Headphones, Quote } from "lucide-react";
import { useState } from "react";
import VideoModal from "@/components/VideoModal";
import SEO from "@/components/SEO";

const AlternativeToMitOxford = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoUrl = "https://youtu.be/VKetl72iSlk";

  const comparisonPoints = [
    {
      feature: "Practical Application",
      academic: "History of AI, theory, and academic tangents",
      techLeaders: "Hands-on workflows you can use immediately",
      winner: "techLeaders"
    },
    {
      feature: "Total Cost",
      academic: "$2,200 - $5,000+ per course",
      techLeaders: "$2,950 for complete program + ongoing support",
      winner: "techLeaders"
    },
    {
      feature: "What You Get",
      academic: "A certificate and theoretical knowledge",
      techLeaders: "Real skills, tools, and guided implementation",
      winner: "techLeaders"
    },
    {
      feature: "Support",
      academic: "Course ends, you're on your own",
      techLeaders: "Ongoing office hours and expert guidance",
      winner: "techLeaders"
    },
    {
      feature: "Curriculum Focus",
      academic: "Types of AI, academic frameworks, case studies",
      techLeaders: "What works today, what to avoid, tried-and-true methods",
      winner: "techLeaders"
    },
    {
      feature: "Time to Results",
      academic: "10+ weeks with no practical takeaways",
      techLeaders: "Apply learnings same day, see results in weeks",
      winner: "techLeaders"
    },
    {
      feature: "Real-World Guidance",
      academic: "Taught by academics, not practitioners",
      techLeaders: "\"We've been down that road. You don't want to do that.\"",
      winner: "techLeaders"
    },
    {
      feature: "Business Impact",
      academic: "Impressive on resume, little on practice",
      techLeaders: "Immediate workflow improvements across your org",
      winner: "techLeaders"
    }
  ];

  const academicProblems = [
    {
      problem: "Courses focus on history and theory, not implementation",
      solution: "Practical AI workflows you can deploy in your business today"
    },
    {
      problem: "Premium prices for prestigious name, not practical value",
      solution: "Invest in outcomes, not certificates that look impressive"
    },
    {
      problem: "Course ends and you're left figuring it out alone",
      solution: "Ongoing office hours to stay ahead of the AI curve"
    },
    {
      problem: "Taught by researchers, not business operators",
      solution: "Learn from practitioners who implement AI daily"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Tech Leaders vs MIT & Oxford AI Courses - Get Practical AI Skills"
        description="Why business leaders are choosing Tech Leaders over academic AI programs. Get practical AI implementation skills, not theory and certificates. Real guidance from practitioners."
        keywords={['MIT AI course alternative', 'Oxford AI alternative', 'practical AI training', 'AI implementation', 'AI for business', 'executive AI training']}
        image="https://technical-leaders.com/ai-in-ar.png"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/ai-in-ar.png"
            alt="AI Technology Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] z-0" />

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <GraduationCap className="w-4 h-4" />
              <span>Alternative to Academic AI Courses</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Skip the Academic AI Course.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mt-2">
                Get Skills You Can Actually Use.
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed">
              MIT and Oxford AI courses promise practical skills but deliver <span className="font-semibold">history lessons and theory</span>.
              Tech Leaders gives you <span className="font-semibold">real workflows, ongoing support, and expert guidance</span> for the same price.
            </p>

            <div className="flex items-center justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Practical Implementation</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <Headphones className="w-4 h-4" />
                <span>Ongoing Expert Support</span>
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
                See Why Leaders Choose Us
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

      {/* Testimonial Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 relative">
            <Quote className="w-12 h-12 text-emerald-500/20 absolute top-6 left-6" />
            <div className="relative z-10">
              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                "I really wish I hadn't spent the money trying to pursue this through more academic means. I took the Oxford course in AI—it was supposed to be implementation for business strategy, and it was so much more of the <span className="font-semibold text-red-600 dark:text-red-400">history of AI</span>... I didn't get one practical thing I could do with it except the certificate.
              </blockquote>
              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                Then I signed up for MIT's program because the name of the course was 'Design and Build AI Products and Services'—you would think that would give me something real and tangible. <span className="font-semibold text-red-600 dark:text-red-400">It just didn't help me at all.</span>
              </blockquote>
              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">This was the course.</span> This is where I found the resources, the support, the information, the tried and true, the 'we've been down that road—you don't want to do that.' This is the course where I learned what I need to know to do what I need to do."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                  P
                </div>
                <div>
                  <p className="font-bold text-foreground">Pamela</p>
                  <p className="text-sm text-muted-foreground">Tech Leaders Member • Former Oxford & MIT AI Course Student</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* The Real Cost Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Calculator className="w-16 h-16 mx-auto mb-6 text-red-600 dark:text-red-400" />
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              What Academic AI Courses Actually Cost You
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              It's not just money—it's time, opportunity, and results you'll never get back
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 border-2 border-red-500/20 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Oxford AI Course</h3>
              <p className="text-3xl font-bold text-foreground mb-2">$2,200</p>
              <p className="text-muted-foreground text-sm">10 weeks • History & theory</p>
              <p className="text-red-600 dark:text-red-400 text-sm font-semibold mt-2">Zero practical takeaways</p>
            </Card>

            <Card className="p-8 border-2 border-red-500/20 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">MIT AI Program</h3>
              <p className="text-3xl font-bold text-foreground mb-2">$2,700</p>
              <p className="text-muted-foreground text-sm">"Design & Build AI Products"</p>
              <p className="text-red-600 dark:text-red-400 text-sm font-semibold mt-2">Types of AI, not how to use them</p>
            </Card>

            <Card className="p-8 border-2 border-green-500/20 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">BEST VALUE</div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">Tech Leaders</h3>
              <p className="text-3xl font-bold text-foreground mb-2">$2,950</p>
              <p className="text-muted-foreground text-sm">Complete program + ongoing support</p>
              <p className="text-green-600 dark:text-green-400 text-sm font-semibold mt-2">Practical skills + expert guidance</p>
            </Card>
          </div>

          <div className="text-center">
            <Card className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
              <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
              <div className="text-left">
                <p className="font-bold text-foreground">Same Investment, Actual Results</p>
                <p className="text-sm text-muted-foreground">Plus ongoing support that academic courses never provide</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Direct Comparison Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Academic AI Courses vs Tech Leaders: Head-to-Head
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Why smart leaders are skipping the certificates and joining Tech Leaders instead
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Feature</th>
                  <th className="text-center py-4 px-4">
                    <div className="inline-flex items-center gap-2">
                      <span className="font-semibold text-muted-foreground">MIT / Oxford Courses</span>
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
                      <div className={`inline-flex items-start gap-2 ${point.winner === 'academic' ? 'text-green-600' : 'text-muted-foreground'}`}>
                        {point.winner === 'academic' ? <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" /> : <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-500/50" />}
                        <span className="text-sm text-left">{point.academic}</span>
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

      {/* Problems with Academic Courses Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Why Academic AI Courses Fail Business Leaders
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {academicProblems.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                      <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-red-600 dark:text-red-400 mb-2">Academic Problem: {item.problem}</h3>
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

      {/* What You Actually Get Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            What Academic Courses Don't Teach (But We Do)
          </h2>

          <div className="space-y-6">
            <Card className="p-6 border-2 border-green-500/20 bg-gradient-to-r from-green-500/5 to-emerald-500/5">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
                <h3 className="text-xl font-bold text-foreground">Practical AI Workflows</h3>
              </div>
              <p className="text-muted-foreground">
                Not "types of AI" or "history of machine learning"—actual workflows you can implement in your business today.
                Sales, marketing, operations, finance—AI solutions for every department.
              </p>
            </Card>

            <Card className="p-6 border-2 border-blue-500/20 bg-gradient-to-r from-blue-500/5 to-purple-500/5">
              <div className="flex items-center gap-3 mb-4">
                <Headphones className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold text-foreground">Ongoing Office Hours Support</h3>
              </div>
              <p className="text-muted-foreground">
                Academic courses end when the syllabus does. With Tech Leaders, you get continuous access to AI experts
                who can answer questions, troubleshoot problems, and help you stay ahead of the curve.
              </p>
            </Card>

            <Card className="p-6 border-2 border-purple-500/20 bg-gradient-to-r from-purple-500/5 to-pink-500/5">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h3 className="text-xl font-bold text-foreground">"We've Been Down That Road"</h3>
              </div>
              <p className="text-muted-foreground">
                Learn from practitioners who've tried what works and what doesn't. Skip the expensive mistakes.
                Get the tried-and-true guidance that only comes from real-world implementation.
              </p>
            </Card>

            <Card className="p-6 border-2 border-yellow-500/20 bg-gradient-to-r from-yellow-500/5 to-orange-500/5">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                <h3 className="text-xl font-bold text-foreground">$25K+ Opportunity Guarantee</h3>
              </div>
              <p className="text-muted-foreground">
                Academic courses guarantee a certificate. We guarantee results. Land at least one opportunity
                worth $25K+ within 6 months, or we work with you until you do.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificate Reality Check */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <GraduationCap className="w-16 h-16 mx-auto mb-6 text-red-600 dark:text-red-400" />
          <h2 className="text-3xl font-bold mb-4 text-background">
            The Certificate Trap
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            <p>
              <span className="font-bold text-background">What certificates get you:</span> A PDF and a LinkedIn badge
            </p>
            <p>
              <span className="font-bold text-background">What they don't get you:</span> Practical skills, ongoing support, or real results
            </p>
            <p>
              <span className="font-bold text-background">The truth:</span> "People think the certificate meant something" — but it didn't help with implementation
            </p>
          </div>
          <Card className="inline-block p-6 bg-white/50 dark:bg-gray-900/50">
            <p className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
              Tech Leaders: Skills Over Certificates
            </p>
            <p className="text-muted-foreground">
              Real workflows, expert guidance, and a community that helps you implement
            </p>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Your Choice: Another Certificate or Real AI Skills?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leaders who chose practical skills over impressive-sounding courses
          </p>

          <Card className="p-8 mb-8 bg-gradient-to-br from-card to-blue-500/5">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-left space-y-3">
                <h3 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  With Academic Courses You Get:
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <XCircle className="w-5 h-5 text-red-500/50" />
                  <span>History of AI and theory</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <XCircle className="w-5 h-5 text-red-500/50" />
                  <span>Certificate with no practical value</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <XCircle className="w-5 h-5 text-red-500/50" />
                  <span>Course ends, support ends</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <XCircle className="w-5 h-5 text-red-500/50" />
                  <span>Figure out implementation alone</span>
                </div>
              </div>
              <div className="text-left space-y-3">
                <h3 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  With Tech Leaders You Get:
                </h3>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">Practical AI workflows for every function</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">Tried-and-true guidance from practitioners</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">Ongoing office hours support</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">$25K+ opportunity guarantee</span>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg px-12 py-6 w-full md:w-auto mb-4"
              onClick={() => window.location.href = "https://buy.stripe.com/dRmeVd26Z2of5vI2wYaMU0A"}
            >
              Skip the Certificate, Join Tech Leaders - $2,950
            </Button>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Protected by our $25K+ Opportunity Guarantee
              </p>
              <p className="text-sm text-muted-foreground">
                Payment plans available
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
        headline="Your Choice: Another Certificate or Real AI Skills?"
        subheadline="Join leaders who chose practical skills over impressive-sounding courses"
        primaryCTA={{
          text: "Skip the Certificate, Join Tech Leaders - $2,950",
          url: "https://buy.stripe.com/dRmeVd26Z2of5vI2wYaMU0A",
          price: "$2,950"
        }}
        urgency={{
          text: "Next cohort starts Monday",
          icon: "alert"
        }}
        socialProof="Practical skills, not just certificates"
        guarantee={{
          text: "$25K+ Opportunity Guarantee",
          description: "Real workflows, ongoing support, and expert guidance - or we work with you until you succeed."
        }}
        secondaryCTA={{
          text: "See how it works",
          url: "/how-it-works"
        }}
        stats={[
          { number: "$2,950", label: "Total investment" },
          { number: "Ongoing", label: "Office hours support" },
          { number: "Real", label: "Practical skills" }
        ]}
        trackingContext="Alternative to MIT Oxford"
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={videoUrl}
      />
    </div>
  );
};

export default AlternativeToMitOxford;
