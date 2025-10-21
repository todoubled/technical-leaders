import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Rocket, Users, Calendar, Lightbulb, Target, Zap, Gift, Clock, Code2, TrendingUp, Award, Github, ExternalLink, ArrowRight, AlertCircle, DollarSign, Briefcase, Quote } from "lucide-react";
import SEO from "@/components/SEO";
import { generateCourseStructuredData } from "@/utils/seo-helpers";
import { trackClick } from "@/utils/posthog";

const AIBootcamp = () => {
  // Calculate the first Tuesday of the next month
  const getNextCohortDate = () => {
    const today = new Date();
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);

    // Find the first Tuesday (day 2 in JavaScript, where Sunday is 0)
    const dayOfWeek = nextMonth.getDay();
    const daysUntilTuesday = dayOfWeek <= 2 ? 2 - dayOfWeek : 9 - dayOfWeek;

    const firstTuesday = new Date(nextMonth);
    firstTuesday.setDate(nextMonth.getDate() + daysUntilTuesday);

    // Format as "Month Day, Year"
    return firstTuesday.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const bootcampOutcomes = [
    {
      outcome: "Launched Revenue-Generating AI Product",
      details: [
        "Validated demand with 50+ signups",
        "Shipped functional product in 3 weeks",
        "First paying customers in week 4"
      ],
      name: "Sarah M.",
      role: "Product Manager @ Tech Startup"
    },
    {
      outcome: "From Idea to $2K MRR",
      details: [
        "Built AI tool solving real pain point",
        "Used systematic validation framework",
        "25 paying customers by month 2"
      ],
      name: "John D.",
      role: "Marketing Director → Founder"
    },
    {
      outcome: "Shipped AI SaaS as Side Project",
      details: [
        "Validated before building",
        "Launched on ProductHunt - #4 Product",
        "Growing waitlist of 200+"
      ],
      name: "Mike R.",
      role: "Software Engineer"
    }
  ];

  const whatYouGet = [
    {
      icon: Calendar,
      title: "3 Live Sessions (2 Hours Each)",
      description: "Intensive hands-on training covering the complete AI R&D System™ - from market validation to revenue-generating product launch."
    },
    {
      icon: Code2,
      title: "The 6-Step AI R&D Framework",
      description: "Master the systematic approach: Sea of Demand, Validated Bet, Wedge Roadmap, Fogg Prototype, Iteration Loop, and Go-To-Market Launch."
    },
    {
      icon: Lightbulb,
      title: "Lifetime Community + AI Agents",
      description: "Access to 300+ builders, weekly AI updates, and custom Claude agents for each step of the framework (market research, PRD generation, UX design, launch strategy)."
    }
  ];

  const weeklyBreakdown = [
    {
      week: "Week 1",
      title: "Validate Your Idea (Steps 1-2)",
      topics: [
        "The Sea of Demand™: Find market validation in online communities",
        "The Validated Bet™: Build landing page & get 10+ signups",
        "Use AI agents to conduct customer research",
        "Prove demand before you build anything"
      ],
      project: "Get 10+ early access signups",
      duration: "2 hours live + homework",
      deliverables: ["market-research.md", "Landing page", "10+ signups"]
    },
    {
      week: "Week 2",
      title: "Design & Prototype (Steps 3-4)",
      topics: [
        "The Wedge Roadmap™: Prioritize features by impact",
        "The Fogg Prototype™: Apply behavioral science to UX",
        "Use AI to generate PRDs and user stories",
        "Validate prototypes with real customers"
      ],
      project: "Create validated prototype",
      duration: "2 hours live + homework",
      deliverables: ["roadmap-prd.md", "ux.md", "v0 prototypes"]
    },
    {
      week: "Week 3",
      title: "Build & Launch (Steps 5-6)",
      topics: [
        "The Iteration Loop™: Turn prototypes into working software",
        "The Go-To-Market Launch™: Revenue-generating activities",
        "Deploy to production with Vercel",
        "Launch strategy & first customers"
      ],
      project: "Ship revenue-ready product",
      duration: "2 hours live + homework",
      deliverables: ["Live product", "Launch plan"]
    }
  ];

  const frameworkSteps = [
    {
      step: "Steps 1-2: Validation",
      name: "Sea of Demand + Validated Bet",
      description: "Find real demand in online communities and validate with 10+ early access signups before building",
      tools: ["Claude agents", "Customer interviews", "v0.dev"],
      outcome: "Proof of demand"
    },
    {
      step: "Steps 3-4: Design",
      name: "Wedge Roadmap + Fogg Prototype",
      description: "Use Jobs-to-be-Done framework and BJ Fogg Behavior Model to design features that drive action",
      tools: ["AI PRD generation", "Behavioral science", "v0 prototypes"],
      outcome: "Validated UX design"
    },
    {
      step: "Steps 5-6: Ship",
      name: "Iteration Loop + GTM Launch",
      description: "Transform prototypes into working software and execute strategic launch for first revenue",
      tools: ["Claude Code", "Vercel", "Launch strategies"],
      outcome: "Live, revenue-ready product"
    }
  ];

  const perfectFor = {
    youWant: [
      "Launch a revenue-generating AI product in 3 weeks",
      "Validate demand BEFORE wasting time building",
      "Learn systematic product development with AI",
      "Build something people actually want to pay for",
      "Master behavioral science + AI tools together",
      "Join a community of 300+ builders shipping products"
    ],
    youNeed: [
      "Proven 6-step framework from idea to revenue",
      "AI agents that automate research, PRDs, and UX",
      "Validation-first approach (signups before building)",
      "Accountability to ship in 3 weeks",
      "Expert guidance on each step",
      "Lifetime access to community and weekly updates"
    ]
  };

  const faqs = [
    {
      q: "Do I need coding experience?",
      a: "Basic familiarity with web technologies helps. We use AI tools (Claude Code, v0.dev, Bolt.new) to accelerate development. The focus is on systematic product development - validation, design, and launch strategy - not just coding."
    },
    {
      q: "What is the AI R&D System™?",
      a: "It's a proven 6-step framework: (1) Sea of Demand - find market validation, (2) Validated Bet - get signups before building, (3) Wedge Roadmap - prioritize features, (4) Fogg Prototype - apply behavioral science to UX, (5) Iteration Loop - build with AI, (6) GTM Launch - generate revenue."
    },
    {
      q: "Can I do this while working full-time?",
      a: "Yes! Sessions are 2 hours each week, plus 3-4 hours of homework. Total commitment is 6 hours per week for 3 weeks. The framework is designed for efficiency - validate before you build, use AI to accelerate everything."
    },
    {
      q: "What if I don't have a product idea yet?",
      a: "Perfect! Week 1 teaches you The Sea of Demand™ - how to find genuine market needs in online communities. You'll identify validated opportunities before choosing what to build."
    },
    {
      q: "What AI agents do I get access to?",
      a: "You get custom Claude agents for each step: sea-of-demand (market research), validated-bet (landing pages), wedge-roadmap (feature prioritization), user-researcher (PRD & UX), and launch-strategist (GTM). These are the same agents we use for our own products."
    },
    {
      q: "Will I actually launch a revenue-ready product?",
      a: "Yes, if you follow the system. Week 1: get 10+ signups. Week 2: create validated prototypes. Week 3: ship to production and execute launch. You'll have a live product and launch plan by the end."
    },
    {
      q: "What happens after the 3 weeks?",
      a: "Lifetime access to: the community (300+ builders), all AI agents, weekly AI updates, future bootcamp recordings, and ongoing support as you grow your product."
    }
  ];

  const testimonials = [
    {
      quote: "After spending thousands on top-name university programs that were all theory and no practice, I finally found Tech Leaders' AI Trade School. It's the only program that actually walks you through building your own AI product, step-by-step, with real tools and support.",
      author: null,
      title: "Hands-On and Practical",
      link: null
    },
    {
      quote: "The course structure is logical and practical — it starts with market validation and carries you all the way through product development and go-to-market. Every step includes tools you can actually use.",
      author: null,
      title: "All-in-One Journey",
      link: null
    },
    {
      quote: "Todd and Stephen genuinely care about your progress. They're not just instructors — they're partners in your success. When I got stuck, they were always there with real solutions.",
      author: null,
      title: "Top-Tier Mentorship",
      link: null
    },
    {
      quote: "The atmosphere is inviting and safe — even for non-technical students. No one is judged for asking questions, and the instructors respond with patience and kindness every time. My fear that someone would steal my idea was gone immediately.",
      author: null,
      title: "Safe, Supportive, and Accessible",
      link: null
    }
  ];

  const headlineQuotes = [
    "Exactly the hands-on training I needed to create my AI product. You've covered it all from A to Z!",
    "Finally, a course that actually teaches you how to build an AI product — not just talk about it.",
    "AI Trade School provides access to real tools at every step — from concept to prototype to final product and marketing plan. Mic drop!"
  ];

  const courseStructuredData = generateCourseStructuredData(
    "AI Bootcamp - Launch Your Revenue-Generating AI Product in 3 Weeks",
    "Master the 6-step AI R&D System™: from market validation to revenue launch. Learn to validate demand, design with behavioral science, and ship products using AI tools. Includes custom Claude agents for each step."
  );

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Bootcamp - Launch Revenue-Generating AI Product in 3 Weeks"
        description="Master the AI R&D System™: validate demand, design with behavioral science, and launch AI products. Get 10+ signups before building, use custom Claude agents, join 300+ builders. Next cohort starts soon!"
        keywords={['AI bootcamp', 'AI R&D System', 'product validation', 'AI product launch', 'behavioral science', 'Claude agents', 'startup bootcamp', 'launch AI product', 'revenue generation']}
        structuredData={courseStructuredData}
      />
      <Navigation />

      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-purple-500/5 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/ai-in-ar.png"
            alt="AI background"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-700 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Zap className="w-4 h-4" />
              <span>New Cohort Every Month- Limited Spots</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Launch Your AI Product
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 mt-2">
                From Idea to Revenue in 3 Weeks
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Master the AI R&D System™: validate demand before building, design with behavioral science, and launch systematically. The proven framework used by 300+ founders to ship revenue-generating products.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5 text-purple-500" />
                <span className="font-semibold">3 Weeks • 6-Step System</span>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Rocket className="w-5 h-5 text-purple-500" />
                <span className="font-semibold">Validate → Build → Launch</span>
              </div>
            </div>

            <div className="flex justify-center items-center mb-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white text-lg px-8 py-6"
                onClick={() => {
                  trackClick('AI Bootcamp - Hero CTA', {
                    location: 'hero_section',
                    destination: '#enroll',
                    cta_text: 'Enroll in Next Bootcamp'
                  });
                  window.location.href = "#enroll";
                }}
              >
                Save My Spot
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              $1,000 • Includes AI agents + lifetime community
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            What You Get in 3 Weeks
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatYouGet.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Your 3-Week Journey
          </h2>
          <div className="space-y-6">
            {weeklyBreakdown.map((week, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-purple-500">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{week.week}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-foreground mb-2">{week.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{week.duration}</p>
                    <ul className="space-y-2 mb-4">
                      {week.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-700 dark:text-purple-400 px-3 py-1 rounded-full text-sm font-semibold">
                      <Rocket className="w-4 h-4" />
                      <span>{week.project}</span>
                    </div>
                    {week.deliverables && week.deliverables.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <h4 className="text-sm font-semibold text-foreground mb-2">Deliverables:</h4>
                        <ul className="space-y-1">
                          {week.deliverables.map((deliverable, dIndex) => (
                            <li key={dIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            The 6-Step AI R&D Framework
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            A systematic approach to building products people actually want to pay for
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {frameworkSteps.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <p className="text-xs font-bold text-purple-600 dark:text-purple-400 mb-2">{item.step}</p>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">Tools:</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool, toolIndex) => (
                      <span key={toolIndex} className="text-xs bg-purple-500/10 text-purple-700 dark:text-purple-400 px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                    ✓ {item.outcome}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Perfect For You If...
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-green-500/20 bg-green-500/5">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                You Want To
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                {perfectFor.youWant.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-6 border-purple-500/20 bg-purple-500/5">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-500" />
                You Need
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                {perfectFor.youNeed.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Real Results from Past Cohorts
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            See what participants built and achieved in just 3 weeks
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {bootcampOutcomes.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.outcome}</h3>
                  <ul className="space-y-2">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground text-sm">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-background dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              <span>SUCCESS STORIES</span>
            </div>
            <h2 className="text-4xl font-bold text-background mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real feedback from people who've completed the program
            </p>
          </div>

          {/* Featured Headline Quotes */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {headlineQuotes.map((quote, index) => (
              <Card key={index} className={`p-6 ${
                index === 0 ? 'bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-blue-200 dark:border-blue-800' :
                index === 1 ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-200 dark:border-purple-800' :
                'bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border-indigo-200 dark:border-indigo-800'
              }`}>
                <Quote className={`w-8 h-8 mb-4 ${
                  index === 0 ? 'text-blue-500' :
                  index === 1 ? 'text-purple-500' :
                  'text-indigo-500'
                }`} />
                <p className="text-lg font-semibold text-foreground">
                  "{quote}"
                </p>
              </Card>
            ))}
          </div>

          {/* Detailed Testimonials */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    index === 0 ? 'bg-gradient-to-br from-blue-600 to-indigo-700' :
                    index === 1 ? 'bg-gradient-to-br from-purple-500 to-pink-600' :
                    index === 2 ? 'bg-gradient-to-br from-indigo-600 to-blue-700' :
                    'bg-gradient-to-br from-pink-500 to-purple-600'
                  }`}>
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{testimonial.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Comparative Soundbite */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <Quote className="w-12 h-12 mx-auto mb-6 opacity-75" />
            <blockquote className="text-2xl md:text-3xl font-bold mb-6">
              "Oxford gave me background. MIT gave me theory. Tech Leaders gave me results."
            </blockquote>
            <div className="flex flex-wrap justify-center gap-8 text-sm opacity-90">
              <p className="italic">"I went from academic overload to actionable progress — in weeks."</p>
              <p className="hidden md:block">•</p>
              <p className="italic">"No fluff, no overwhelm — just clarity and execution."</p>
            </div>
          </div>
        </div>
      </section>

      <section id="enroll" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-500/10 to-pink-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Enroll in the Next Ship AI Bootcamp
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Master the AI R&D System™ and launch your revenue-generating product in 3 weeks
          </p>

          <Card className="p-8 shadow-lg hover:shadow-xl transition-all max-w-2xl mx-auto">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-700 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-bold mb-4">
                <Calendar className="w-4 h-4" />
                <span>Next Cohort Starts Soon</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Ship AI Bootcamp</h3>
              <div className="mb-4">
                <p className="text-5xl font-bold text-foreground mb-2">$1,000</p>
                <p className="text-lg text-muted-foreground">One-time payment</p>
              </div>
            </div>

            <div className="space-y-4 mb-8 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">The complete 6-step AI R&D System™ framework</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Custom Claude agents for each step (market research, PRD, UX, launch)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">3 live sessions (2 hours each) covering validation → design → launch</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Validation-first approach: get 10+ signups before building</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Lifetime access to community of 300+ product builders</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">All recordings, templates, and weekly AI updates (ongoing)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Small cohorts (max 30) for personalized guidance</span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white text-lg px-8 py-6 w-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => {
                trackClick('AI Bootcamp - Enrollment CTA', {
                  location: 'enrollment_section',
                  destination: 'https://buy.stripe.com/fZe6sa3Up2L9bwAcNl',
                  cta_text: 'Secure Your Spot - $1,000',
                  price: '$1000'
                });
                window.location.href = "https://buy.stripe.com/fZe6sa3Up2L9bwAcNl";
              }}
            >
              Secure Your Spot - $1,000
            </Button>

            <p className="text-sm text-muted-foreground mt-4">
              Next cohort starts {getNextCohortDate()}
            </p>
          </Card>

          <p className="text-muted-foreground mt-8">
            Questions? Email me at{" "}
            <a href="mailto:todd@technical-leaders.com" className="text-purple-600 hover:underline">
              todd@technical-leaders.com
            </a>
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-foreground mb-2 flex items-start gap-2">
                  <span className="text-purple-500">Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-muted-foreground ml-6">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIBootcamp;
