import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Rocket, Users, Calendar, Lightbulb, Target, Zap, Gift, Clock, TrendingUp, Shield, Star, Award, ArrowRight, FileText, Map, Wrench, LifeBuoy } from "lucide-react";
import SEO from "@/components/SEO";
import { generateCourseStructuredData, generateFAQStructuredData } from "@/utils/seo-helpers";
import { trackClick } from "@/utils/posthog";
import VideoModal from "@/components/VideoModal";
import { useState } from "react";

const LaunchWithUs = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const youtubeVideoId = "8aVvZ9NwiN8";
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
      description: "Define your Ideal Client Profile and position yourself as their perfect solution",
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
      description: "Your personal board of 300+ senior tech leaders who send each other opportunities, make warm intros, and close deals together",
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
      description: "Workshops, tools, and private coaching to get crystal clear on your scalable offer, positioning, and funnel so you can lock in your first client fast",
      features: [
        "Define your niche, offer, and pricing",
        "First 3 months of content written for you",
        "Build more connections with decision-makers",
        "Optimize Your Funnel"
      ]
    },
    {
      title: "Phase 2: Go-to-Market",
      icon: TrendingUp,
      description: "Private coaching, opportunity referrals, and access to our in-house marketing team and systems to scale your expertise into a cash-generating machine",
      features: [
        "Done-for-you marketing systems",
        "Weekly guidance & tracking",
        "Lock in your next client for immediate ROI focus"
      ]
    }
  ];

  const whatYouGet = [
    {
      icon: Map,
      title: "We'll show you what to do",
      description: (
        <div className="text-left space-y-3">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <div><strong className="text-foreground">1:1 Kickoff</strong> and Onboarding Session to get you jump started on your personalized plan</div>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <div><strong className="text-foreground">6-Week Sprints</strong> to diagnose problems, set milestones, and comfortably grow beyond the current constraints</div>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <div><strong className="text-foreground">Weekly Review/Previews</strong> to track progress and iterate towards your 6-week milestone achievements</div>
          </div>
        </div>
      )
    },
    {
      icon: Wrench,
      title: "We'll show you how to do it",
      description: (
        <div className="text-left space-y-3">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <div><strong className="text-foreground">AI Tools</strong> trained on the best ICPs, Offers, and RGAs to design your offer, target your clients, and build your funnel</div>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <div><strong className="text-foreground">Lead Lists</strong> to connect with and get in front of your ideal clients</div>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <div><strong className="text-foreground">Templates</strong>, <strong className="text-foreground">Scripts</strong>, and <strong className="text-foreground">DFY Content</strong> to copy, paste, and convert connections into premium clients</div>
          </div>
        </div>
      )
    },
    {
      icon: LifeBuoy,
      title: "We'll help if you get stuck",
      description: (
        <div className="text-left space-y-3">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <div><strong className="text-foreground">Weekly Workshops</strong> to build out your sales and marketing systems</div>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <div><strong className="text-foreground">24/7 Forum</strong> for connecting with the rest of the mastermind and <strong className="text-foreground">Feedback Forms</strong> for optimizing your assets</div>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <div><strong className="text-foreground">1:1 Coaching</strong> for personalized feedback and strategic advice</div>
          </div>
        </div>
      )
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
      title: "Director of Client Success, Colorado",
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

  const courseStructuredData = generateCourseStructuredData(
    "Launch With Us - Technical Leadership Accelerator Program",
    "6-week intensive program for senior engineers ready to become CTOs, VPs, and technical executives. Build authority, expand income, and lead at scale with personal coaching and done-for-you systems.",
    "$2950"
  );

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Launch With Us - Personal Tech Leadership Accelerator Program"
        description="6-week intensive program for senior engineers ready to become CTOs, VPs, and technical executives. Personal coaching, done-for-you systems, and guaranteed results."
        keywords={['tech leadership accelerator', 'personal coaching program', 'CTO program', 'executive coaching', 'tech career advancement', 'leadership development']}
        structuredData={courseStructuredData}
      />
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

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
              Designed to help <b>technical experts</b>, <b>consultants</b> and <b>freelancers</b> install a <b>sales and marketing system</b> to <b>productize and monetize</b> your expertise and grow <b>beyond referrals</b> and word of mouth
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
              (even if you <b>hate feeling "salesy"</b> or have a <b>tiny audience</b>)
            </p>

            <div className="mb-8">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6"
                onClick={() => {
                  trackClick('Launch With Us - Learn How It Works', {
                    location: 'hero_section',
                    cta_text: 'Learn How It Works'
                  });
                  setIsVideoModalOpen(true);
                }}
              >
                Learn How It Works
              </Button>
            </div>

            <Card className="p-8 shadow-lg mb-8 max-w-2xl mx-auto">
              <div className="mb-8">
                <div className="text-center">
                  <p className="text-5xl font-bold text-foreground mb-2">$2,950</p>
                  <p className="text-xl text-muted-foreground mb-1">Launch Kit Program</p>
                  <p className="text-sm text-orange-600 font-semibold">With our guarantee</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-12 py-6 w-full sm:w-auto"
                  onClick={() => {
                    trackClick('Launch With Us - Hero CTA', {
                      location: 'hero_section',
                      destination: 'https://buy.stripe.com/dRmeVd26Z2of5vI2wYaMU0A',
                      cta_text: 'Get Started',
                      price: '$2950'
                    });
                    window.location.href = "https://buy.stripe.com/dRmeVd26Z2of5vI2wYaMU0A";
                  }}
                >
                  Get Started
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 w-full sm:w-auto"
                  onClick={() => {
                    trackClick('Launch With Us - Hero Strategy Session', {
                      location: 'hero_section',
                      destination: '/benchmark',
                      cta_text: 'Book a Strategy Session'
                    });
                    window.location.href = "/benchmark";
                  }}
                >
                  Book a Strategy Session
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-4 text-center">
                💳 <a href="https://buy.stripe.com/6oEeYG62xetR304eVg" className="underline hover:text-orange-600 transition-colors" onClick={(e) => {
                  e.preventDefault();
                  trackClick('Launch With Us - Payment Plan Link', {
                    location: 'hero_section',
                    destination: 'https://buy.stripe.com/6oEeYG62xetR304eVg',
                    cta_text: '$850/month payment plan available'
                  });
                  window.location.href = "https://buy.stripe.com/6oEeYG62xetR304eVg";
                }}>$850/month payment plan available</a> • 🔒 Hand-selected participants
              </p>
            </Card>

            <p className="text-sm text-muted-foreground mt-6">
              <strong>P.S.</strong> As soon as you decide, we'll get you access to our Revenue Generating
              Playbook — so you can start driving cash before we even officially start.
            </p>
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="py-12 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="bg-white dark:bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">
              Join Senior Leaders From
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
              <img src="/cashapp.svg" alt="Cash App" className="h-20 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/gitlab.png" alt="GitLab" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/redhat.webp" alt="Red Hat" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/nike.png" alt="Nike" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/calendly.webp" alt="Calendly" className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/netflix.png" alt="Netflix" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* The Payoff Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              The Payoff
            </h2>
            <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 font-semibold">
              Why Launch Kit
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-8 border-2 border-orange-500/20 hover:border-orange-500/40 transition-all hover:shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Life-Long Asset</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Building a personal distribution system for sales and marketing like this is a <span className="font-semibold text-foreground">life-long asset</span> that can be used to make money with any product or service
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-orange-500/20 hover:border-orange-500/40 transition-all hover:shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Your Biggest Moat</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Founder-Led Marketing (distribution) is the <span className="font-semibold text-foreground">biggest moat</span> you can build for your business
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-orange-500/20 hover:border-orange-500/40 transition-all hover:shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Easy & Systematic</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Launch Kit makes it easy to get started <span className="font-semibold text-foreground">without spinning your wheels</span> and systematize your growth <span className="font-semibold text-foreground">without burning out</span>
                  </p>
                </div>
              </div>
            </Card>
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
            Two phases to help you launch and get your first client with your new offer
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
            <p className="text-lg text-muted-foreground mt-3">
              Everything you need to identify your best Ideal Client Profile (ICP), price and package your Offer, and reverse-engineer your income goals as you grow
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
              Join 300+ tech leaders who stopped waiting and started winning together
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Everything You Need to Launch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A complete system to transform your expertise into a thriving business
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {whatYouGet.map((item, index) => (
              <Card key={index} className="relative p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-border/50 hover:border-orange-500/30 bg-card/80 backdrop-blur-sm group">
                {/* Step number badge */}
                <div className="absolute -top-4 left-8 bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                  STEP {index + 1}
                </div>
                
                {/* Icon with enhanced styling */}
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                {/* Title with better typography */}
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>
                
                {/* Description with proper spacing and styling */}
                <div className="text-muted-foreground">{item.description}</div>
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

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How quickly can I expect to see revenue from the program?",
                a: "Revenue timing depends on your offer price and target market. Some members close 6-figure enterprise contracts within 60-90 days, while others build steady $5K-$15K monthly retainers within 30-45 days. Our fastest member landed their first client in just 6 days. Your results scale with your commitment and the value of your expertise."
              },
              {
                q: "What's your success guarantee?",
                a: "We guarantee we'll work with you until you achieve ICP/Offer fit and land your first paying client - as long as it takes. The more effort you invest, the harder we'll work alongside you. This isn't a magic bullet, but a proven system backed by our commitment to your success. Most members recoup their investment before they finish paying for the program."
              },
              {
                q: "How long before I can expect a result?",
                a: "We expect you to achieve a significant breakthrough within 6 months, but most members see opportunities start flowing in 30-45 days. Our entire system is designed around rapid, measurable progress with support at every step."
              },
              {
                q: "What if I'm already at a senior level?",
                a: "Perfect. This program is specifically designed for senior professionals ready to break through to executive-level opportunities. Many of our most successful members are already Directors, VPs, and senior leaders who want to accelerate to the next level."
              },
              {
                q: "Will the LinkedIn strategy actually grow my network?",
                a: "LinkedIn caps outbound requests at 500/month, but our proven content strategy attracts quality inbound connections too. Most members see 2-3x network growth in 90 days - but it's about quality over quantity. We help you connect with decision-makers in your ICP, not random connections. The right 100 connections beat 10,000 irrelevant ones."
              },
              {
                q: "Can this help me secure board positions?",
                a: "Absolutely. We can position board directors and founders as your ICP and craft a board advisory offer that showcases your strategic value. Several members have successfully landed board seats by packaging their expertise as high-level strategic advisory services. We'll workshop your specific board positioning together."
              },
              {
                q: "How much time do I need to commit?",
                a: "Just 2-3 hours per week of async self-study and live coaching sessions. All mastermind sessions are recorded, so if you miss one live, you can catch up when convenient. Most members find this fits easily into their schedule while delivering life-changing results."
              },
              {
                q: "Is there real camaraderie and community?",
                a: "Absolutely. Our live sessions create genuine connections where you get support from both our team and fellow members. We have everyone from senior engineers to CTOs, and the collaborative spirit means everyone helps everyone succeed."
              },
              {
                q: "What if I'm not sure about my goals yet?",
                a: "Perfect! That's exactly why you need this program. 80% of our members discover bigger, better goals once they realize their true market value. Our first priority is helping you get crystal clear on your path to maximum impact and income."
              },
              {
                q: "Do I have to attend the weekly live sessions to succeed?",
                a: "While sessions are recorded for flexibility, members who attend live consistently get the biggest results fastest. Sessions run Monday, Tuesday, and Wednesday at 10am CST to accommodate global schedules. The live interaction and community support are game-changers."
              },
              {
                q: "What if I have a problem with Imposter Syndrome?",
                a: "You're not alone - 70% of tech professionals struggle with this, and 40% let it seriously damage their results. Overcoming imposter syndrome and building unshakeable confidence is one of our specialties. You'll join a community where your expertise is recognized and valued."
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
      <section id="apply" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-500/10 to-red-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Productize Your Expertise?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join a small group of experienced pros building scalable businesses
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-8 py-6"
              onClick={() => {
                trackClick('Launch With Us - Final CTA', {
                  location: 'final_cta_section',
                  destination: '#apply',
                  cta_text: 'Reserve Your Spot'
                });
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Reserve Your Spot
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-4">
            Done-for-you marketing • Guaranteed ROI • Proven systems
          </p>
        </div>
      </section>

      <Footer />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={`https://www.youtube.com/watch?v=${youtubeVideoId}`}
      />
    </div>
  );
};

export default LaunchWithUs;