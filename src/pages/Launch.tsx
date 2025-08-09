import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Zap, TrendingUp, Users, Award, Target, FileText, Calendar, ArrowRight, Star, PlayCircle, Shield, AlertTriangle } from "lucide-react";
import { useState } from "react";
import VideoModal from "@/components/VideoModal";
import SEO from "@/components/SEO";

const Launch = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoUrl = "https://youtu.be/VKetl72iSlk";

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

  const testimonials = [
    {
      quote: "I didn't even use all of tools that you provide guys, so far all is exceeding my expectations. Basically thats the first mastermind group that gives a real value that I know! Stress levels overall in my life almost went to 0, in all cases, private, work etc",
      author: "P.O.",
      title: "DevOps Lead, Poland",
      income: "Stress levels went to 0",
      stars: 5
    },
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
      quote: "The 'win seeds' I've been planting the last ~1-2 months have started blooming at work! My squad was recognized by senior leadership across two orgs for the work we've been doing.",
      author: "Tech Leader",
      title: "Senior Leadership",
      income: "Recognition across 2 orgs",
      stars: 5
    },
    {
      quote: "I feel I'm a strong IC and have quite good managing skills, but I felt lacking in strategy tools. I wanted to increase my leverage by doing a higher level of work.",
      author: "M.W.",
      title: "CTO, Poland",
      income: "Leveled up strategic impact",
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

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Launch Program - From Senior Engineer to Tech Executive"
        description="6-week intensive program for senior engineers ready to become CTOs, VPs, and technical executives. Build authority, expand income, and lead at scale."
        keywords={['tech leadership program', 'engineer to CTO', 'technical executive training', 'leadership coaching', 'career advancement']}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500/10 to-purple-600/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/launch-bg.png"
            alt="Launch background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              <span>Launch Kit</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Get Ideal Opportunities
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mt-2">
                Even If You Hate Selling Yourself
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed">
              The complete system to go from overlooked to overbooked with premium opportunities&nbsp;
              <i>without</i> the cringe of self-promotion.
            </p>

            <div className="flex items-center justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Trusted by 150+ tech leaders since 2022</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg px-8 py-6"
                onClick={() => window.location.href = "https://buy.stripe.com/dRmeVd26Z2of5vI2wYaMU0A"}
              >
                Get Launch Kit - $2950
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 group"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                What is Tech Leaders?
              </Button>
            </div>

            <div className="flex items-center justify-center gap-4 mt-4 text-sm">
              <div className="flex items-center gap-1 text-red-600 dark:text-red-400 font-semibold">
                <AlertTriangle className="w-4 h-4" />
                <span>Only 3 spots left</span>
              </div>
              <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                <Shield className="w-4 h-4" />
                <span>Payment plans available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative -mt-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Our mastermind delivers life-changing outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-card/80 transition-all duration-300 border border-border/50">
              <div className="mb-3">
                <Award className="w-10 h-10 mx-auto text-yellow-500/80" />
              </div>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-1">
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
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-1">
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
                <Users className="w-10 h-10 mx-auto text-purple-500/80" />
              </div>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-1">
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
                    <div className="flex items-center justify-center px-2 bg-gradient-to-b from-blue-500/20 to-purple-500/20">
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
              <span>Average member sees results in 30-45 days</span>
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
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 to-purple-700/50"></div>
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

      {/* Social Proof Section */}
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

      {/* What's Included Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
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

      {/* Guarantee Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-16 h-16 mx-auto mb-6 text-green-600 dark:text-green-400" />
          <h2 className="text-3xl font-bold mb-4 text-background">
            The "$25K+ Opportunity" Guarantee
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            If you complete the program and don't receive at least one opportunity worth $25K+
            (promotion, new role, consulting gig, or board position) within 6 months,
            we'll work with you for free until you do.
          </p>
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-6 py-3 rounded-full font-semibold">
            <Shield className="w-5 h-5" />
            <span>Zero risk, guaranteed results</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How long before I can expect a result?",
                a: "We expect you to achieve a significant breakthrough within 6 months, but most members see opportunities start flowing in 30-45 days. Our entire system is designed around rapid, measurable progress with support at every step."
              },
              {
                q: "What kind of revenue increase can I expect in the first 90 days?",
                a: "Results vary based on your offer pricing and goals. Some members land six-figure executive roles or board positions, while others secure $5K+ monthly retainers or consulting contracts. The key is we help you price your expertise at market rate - often 2-3x what you thought possible."
              },
              {
                q: "Does everyone who joins the program succeed?",
                a: "Success requires commitment - we're not a magic solution. However, our guarantee ensures we'll work with you as long as it takes to find your ideal opportunities and land your first high-value clients. The more effort you invest, the more support and results you'll receive."
              },
              {
                q: "Will the LinkedIn strategy actually grow my network significantly?",
                a: "LinkedIn limits you to 500 connection requests monthly, but as your content gains momentum, you'll receive increasing inbound requests. More importantly, we focus on quality connections within your ideal client profile rather than random networking - leading to better opportunities faster."
              },
              {
                q: "Can this program help me secure board positions?",
                a: "Absolutely. We can target board directors and founders as your ideal clients, then craft a 'board advisory' offer that positions you perfectly for board opportunities. We'll workshop the exact positioning and approach that works for your expertise."
              },
              {
                q: "How much time do I need to commit?",
                a: "Just 2-3 hours per week of async self-study and live coaching sessions. All mastermind sessions are recorded, so if you miss one live, you can catch up when convenient. Most members find this fits easily into their schedule while delivering life-changing results."
              },
              {
                q: "What if I'm not sure about my goals yet?",
                a: "Perfect! That's exactly why you need this program. 80% of our members discover bigger, better goals once they realize their true market value. Our first priority is helping you get crystal clear on your path to maximum impact and income."
              },
              {
                q: "What if I have a problem with Imposter Syndrome?",
                a: "You're not alone - 70% of tech professionals struggle with this, and 40% let it seriously damage their results. Overcoming imposter syndrome and building unshakeable confidence is one of our specialties. You'll join a community where your expertise is recognized and valued."
              },
              {
                q: "What if I'm already at a senior level?",
                a: "Perfect. This program is specifically designed for senior professionals ready to break through to executive-level opportunities. Many of our most successful members are already Directors, VPs, and senior leaders who want to accelerate to the next level."
              },
              {
                q: "Do I have to attend the weekly live sessions to succeed?",
                a: "While sessions are recorded for flexibility, members who attend live consistently get the biggest results fastest. Sessions run Monday, Tuesday, and Wednesday at 10am CST to accommodate global schedules. The live interaction and community support are game-changers."
              },
              {
                q: "Is there real camaraderie and community?",
                a: "Absolutely. Our live sessions create genuine connections where you get support from both our team and fellow members. We have everyone from senior engineers to CTOs, and the collaborative spirit means everyone helps everyone succeed."
              },
              {
                q: "Is there a payment plan available?",
                a: "Yes! We offer flexible payment options including 3-month and 6-month plans. You can also use your professional development budget or request employer sponsorship - we provide all the documentation you need."
              },
              {
                q: "Can I see inside the membership portal before joining?",
                a: "Yes! We have a complete portal walkthrough that shows you exactly what you'll get access to. You'll see the training modules, tools, templates, and community features that drive results for our members."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Stop Waiting for Opportunities to Find You
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join 150+ tech leaders who took control of their careers and income
          </p>

          <Card className="p-8 mb-8 bg-gradient-to-br from-card to-blue-500/5">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <p className="text-3xl font-bold text-foreground">$2,950</p>
                <p className="text-muted-foreground">One-time investment</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">90 Days</p>
                <p className="text-muted-foreground">To transformation</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-red-600 dark:text-red-400">3 Spots</p>
                <p className="text-muted-foreground">Left this week</p>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg px-12 py-6 w-full md:w-auto mb-4"
              onClick={() => window.location.href = "https://buy.stripe.com/dRmeVd26Z2of5vI2wYaMU0A"}
            >
              Get Launch Kit Now
            </Button>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                🛡️ Protected by our $25K+ Opportunity Guarantee
              </p>
            </div>
          </Card>

          <p className="text-muted-foreground">
            Still have questions? Email{" "}
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

export default Launch;