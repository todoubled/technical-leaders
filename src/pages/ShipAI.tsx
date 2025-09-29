import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Rocket, Users, Calendar, Lightbulb, Target, Zap, Gift, Clock, Code2, TrendingUp, Award, Github, ExternalLink, ArrowRight, AlertCircle, DollarSign, Briefcase } from "lucide-react";
import SEO from "@/components/SEO";
import { generateCourseStructuredData } from "@/utils/seo-helpers";
import { trackClick } from "@/utils/posthog";

const ShipAI = () => {
  const shippedProjects = [
    {
      name: "AI Resume Optimizer",
      description: "ATS-beating resume analysis tool",
      metrics: "2.4K users • Featured on PH",
      stack: ["OpenAI", "React", "Vercel"],
      builder: "Alex C., Software Engineer",
      image: "/ai-in-ar.png"
    },
    {
      name: "CodeReview AI",
      description: "Automated code review assistant",
      metrics: "$3K MRR • 200+ subscribers",
      stack: ["Claude", "Python", "FastAPI"],
      builder: "Jordan T., IC @ Shopify",
      image: "/ai-in-ar.png"
    },
    {
      name: "DocSearch Pro",
      description: "Semantic search for internal docs",
      metrics: "Used by 50+ person team",
      stack: ["Pinecone", "LangChain", "Next.js"],
      builder: "Sarah K., Staff Engineer",
      image: "/ai-in-ar.png"
    },
    {
      name: "Interview Prep AI",
      description: "Personalized coding interview trainer",
      metrics: "1.8K users • #3 on PH",
      stack: ["OpenAI", "Supabase", "Tailwind"],
      builder: "Mike R., Senior Developer",
      image: "/ai-in-ar.png"
    },
    {
      name: "Sales Email Generator",
      description: "B2B personalized outreach tool",
      metrics: "$5K MRR • 400+ customers",
      stack: ["Anthropic", "Node.js", "Stripe"],
      builder: "Emily D., Product Engineer",
      image: "/ai-in-ar.png"
    },
    {
      name: "Bug Tracker AI",
      description: "Auto-categorize GitHub issues",
      metrics: "Open source • 800+ stars",
      stack: ["OpenAI", "GitHub API", "Python"],
      builder: "Chris P., Full Stack Dev",
      image: "/ai-in-ar.png"
    }
  ];

  const careerOutcomes = [
    {
      outcome: "Promoted to Senior Engineer",
      details: [
        "Shipped 3 AI tools internally",
        "Led AI initiative for team",
        "$40K raise"
      ],
      name: "John D.",
      role: "Software Engineer @ Stripe"
    },
    {
      outcome: "Launched AI SaaS, $8K MRR",
      details: [
        "Built in program, shipped Week 8",
        "400+ paying customers",
        "Left full-time job"
      ],
      name: "Sarah K.",
      role: "Former IC @ Google"
    },
    {
      outcome: "Landed ML Engineer Role",
      details: [
        "Portfolio of 3 AI projects",
        "5 job offers in 6 weeks",
        "$180K → $245K comp"
      ],
      name: "Mike R.",
      role: "Software Engineer"
    }
  ];

  const whatYouGet = [
    {
      icon: Code2,
      title: "Three Production-Ready Projects",
      description: "Not tutorials—real products you'll ship to real users. Each with code, docs, and demo."
    },
    {
      icon: Users,
      title: "Builder Community (24/7 Discord)",
      description: "50+ active builders shipping together. Code reviews, job referrals, pair programming sessions."
    },
    {
      icon: Calendar,
      title: "Weekly Live Build Sessions",
      description: "Screen share actual code. Debug together in real-time. Ship by end of each session."
    },
    {
      icon: DollarSign,
      title: "Monetization Playbook",
      description: "How to price your AI product. Landing pages, Stripe integration, ProductHunt launch strategy."
    },
    {
      icon: Rocket,
      title: "Public Launch Support",
      description: "ProductHunt coordination, Twitter/LinkedIn templates, press outreach, community upvote squad."
    },
    {
      icon: Award,
      title: "Portfolio That Gets You Hired",
      description: "Real shipped projects with users and metrics. GitHub repos. Live demos that beat resumes."
    }
  ];

  const techStack = {
    apis: ["OpenAI", "Anthropic", "Replicate"],
    frameworks: ["LangChain", "LlamaIndex"],
    vectorDBs: ["Pinecone", "Weaviate", "Chroma"],
    deployment: ["Vercel", "Railway", "Fly.io"],
    frontend: ["React/Next.js", "Vue", "Svelte"],
    backend: ["Python", "Node.js", "FastAPI"]
  };

  const projectTypes = [
    {
      category: "AI Chat Widgets",
      examples: [
        "Customer support chatbot",
        "Internal docs search assistant",
        "Sales qualification bot"
      ]
    },
    {
      category: "AI Search/Research Tools",
      examples: [
        "Semantic search for [industry]",
        "Research assistant for [use case]",
        "Competitive intelligence tool"
      ]
    },
    {
      category: "AI Content Generators",
      examples: [
        "Industry-specific copywriter",
        "Technical documentation generator",
        "SEO content assistant"
      ]
    },
    {
      category: "AI Creative Tools",
      examples: [
        "Image generation tools",
        "Video editing assistants",
        "Design system generators"
      ]
    }
  ];

  const timeline = [
    {
      weeks: "Week 1-2",
      project: "AI Chat Interface",
      ship: "On your domain",
      learn: "OpenAI API, prompting, UI patterns"
    },
    {
      weeks: "Week 3-4",
      project: "RAG Application",
      ship: "With real data",
      learn: "Vector DBs, embeddings, retrieval"
    },
    {
      weeks: "Week 5-6",
      project: "AI Agent System",
      ship: "Automated workflow",
      learn: "LangChain, orchestration, tools"
    },
    {
      weeks: "Week 7-8",
      project: "Monetized AI Tool",
      ship: "With Stripe payments",
      learn: "Pricing, GTM, user acquisition"
    },
    {
      weeks: "Week 9-12",
      project: "Your Custom Product",
      ship: "Public launch on PH",
      learn: "Marketing, scaling, community"
    }
  ];

  const testimonials = [
    {
      quote: "I went from tutorial hell to shipping 3 AI products in 12 weeks. One hit 5K users. I got promoted to Senior. The portfolio was key.",
      author: "Alex Chen",
      title: "Software Engineer → Senior Software Engineer @ Airbnb",
      link: "github.com/alexchen"
    },
    {
      quote: "Built an AI tool for designers, launched on ProductHunt, got 500 customers. Now I'm making $4K/month on the side while working full-time.",
      author: "Jordan Taylor",
      title: "IC @ Shopify → Founder, DesignAI.tools",
      link: "designai.tools"
    },
    {
      quote: "The program rewired how I think about AI. Shipped my first production AI feature at work, then built two side projects. Both generating revenue now.",
      author: "Amelia Leigner",
      title: "Head of Product, Seek Invest",
      link: null
    }
  ];

  const faqs = [
    {
      q: "Can I do this while working full-time?",
      a: "Yes. Most participants work full-time. Live sessions are evenings (PST). All recorded. Expect 6-8 hours/week commitment."
    },
    {
      q: "What if I'm not a senior engineer?",
      a: "Perfect. Our best outcomes come from ICs eager to level up. We teach the AI-specific parts. You bring basic coding skills."
    },
    {
      q: "Will I own the IP to my projects?",
      a: "100% yes. Your code, your product, your IP. Launch commercially, add to portfolio, open source—your choice."
    },
    {
      q: "Can I build something I want to monetize?",
      a: "Absolutely. We encourage it. We'll help with pricing, payments (Stripe), and launch strategy."
    },
    {
      q: "What if I don't finish in 12 weeks?",
      a: "Lifetime access to community + materials. 6-month extension for live sessions if you need it. We want you to ship, not rush."
    },
    {
      q: "Is this for ML engineers or regular developers?",
      a: "Both. You don't need ML background. If you can code and deploy a web app, you're ready. We teach the AI parts."
    },
    {
      q: "What programming languages?",
      a: "Most use Python or JavaScript. We provide examples in both. If you prefer something else and can adapt, that works too."
    }
  ];

  const courseStructuredData = generateCourseStructuredData(
    "Ship AI With Us - 12-Week AI Project Sprint for Builders",
    "Build, ship, and launch 3 production AI projects in 12 weeks. Perfect for software engineers and ICs who want to level up their AI skills by shipping real products."
  );

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Ship AI With Us - 12-Week AI Project Sprint for Builders & ICs"
        description="Build and ship 3 production AI projects in 12 weeks. Join software engineers and ICs shipping real AI products that get them promoted, hired, and generating side income."
        keywords={['ship AI projects', 'AI development', 'build AI products', 'software engineer AI', 'AI portfolio projects', 'learn AI by building']}
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
            <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-700 dark:text-red-400 px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
              <Clock className="w-4 h-4" />
              <span>Next Cohort: December 2nd • 15 Spots Left</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Stop Learning AI in Theory.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 mt-2">
                Start Shipping AI in Production.
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Join 47 software engineers and ICs who shipped real AI projects—and got promoted, launched startups, or 2x'd their consulting rates in 12 weeks.
            </p>

            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                "AI Transformed How I Work - Watch My 2-Minute Story"
              </h2>
              <p className="text-lg text-muted-foreground">
                Why this hands-on program delivers more practical results than Oxford or MIT's academic courses
              </p>
            </div>

            <div className="w-full max-w-3xl mx-auto mb-3">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                  src="https://www.youtube.com/embed/LyY-glR6P_8"
                  title="Pamela Johnston - AI Executive Training Testimonial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="text-center mb-8">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold">Pamela Johnston</span> • Senior Business Analyst
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white text-lg px-8 py-6"
                onClick={() => {
                  trackClick('Ship AI - Hero CTA', {
                    location: 'hero_section',
                    destination: '#apply',
                    cta_text: 'Reserve Your Spot in December Cohort'
                  });
                  window.location.href = "#apply";
                }}
              >
                Reserve Your Spot in December Cohort
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-500 text-purple-600 hover:bg-purple-500/10 text-lg px-8 py-6"
                onClick={() => {
                  trackClick('Ship AI - Free Workshop CTA', {
                    location: 'hero_section',
                    destination: 'https://calendly.com/tech-leaders/ship-ai-workshop',
                    cta_text: 'Join Free Workshop First'
                  });
                  window.location.href = "https://calendly.com/tech-leaders/ship-ai-workshop";
                }}
              >
                Join Free Workshop First
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              90-minute live workshop: Build & ship your first AI feature
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Projects Our Builders Shipped
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Real products. Real users. Real outcomes. Your project could be here in 12 weeks.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shippedProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-600/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code2 className="w-16 h-16 text-purple-500/40" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{project.name}</h3>
                  <p className="text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-purple-600">
                    <TrendingUp className="w-4 h-4" />
                    {project.metrics}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.stack.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-secondary px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{project.builder}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-muted-foreground mb-4">
              💡 Your shipped project could be featured here
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Real Career Outcomes
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            What happened after they shipped
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {careerOutcomes.map((outcome, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{outcome.outcome}</h3>
                <ul className="space-y-2 mb-4">
                  {outcome.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{outcome.name}</p>
                  <p className="text-sm text-muted-foreground">{outcome.role}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-lg">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-foreground">94%</p>
                <p className="text-sm text-muted-foreground">Shipped 2+ projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">$32K</p>
                <p className="text-sm text-muted-foreground">Average raise</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">71%</p>
                <p className="text-sm text-muted-foreground">Launched publicly</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">12</p>
                <p className="text-sm text-muted-foreground">Now making side income</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Everything You Need to Ship
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Your 12-Week Shipping Timeline
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Concrete milestones. Real deliverables. Portfolio-worthy projects.
          </p>

          <div className="space-y-6">
            {timeline.map((phase, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-lg px-4 py-2 text-sm font-bold whitespace-nowrap">
                    {phase.weeks}
                  </div>
                  <div className="flex-1">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">BUILD</p>
                        <p className="font-semibold text-foreground">{phase.project}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">SHIP</p>
                        <p className="font-semibold text-foreground">{phase.ship}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">LEARN</p>
                        <p className="font-semibold text-foreground">{phase.learn}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Technical Stack & Prerequisites
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">What We'll Use</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">APIs</p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.apis.map((tech, index) => (
                      <span key={index} className="bg-purple-500/10 text-purple-700 dark:text-purple-400 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Frameworks</p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.frameworks.map((tech, index) => (
                      <span key={index} className="bg-purple-500/10 text-purple-700 dark:text-purple-400 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Vector DBs</p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.vectorDBs.map((tech, index) => (
                      <span key={index} className="bg-purple-500/10 text-purple-700 dark:text-purple-400 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Deployment</p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.deployment.map((tech, index) => (
                      <span key={index} className="bg-purple-500/10 text-purple-700 dark:text-purple-400 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Prerequisites</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Basic programming in any language</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Can deploy a web app (we'll help)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">No ML/AI experience needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">We teach the AI-specific parts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Comfortable learning by doing</span>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-blue-500/10 rounded-lg">
                <p className="text-sm text-foreground font-semibold mb-2">💡 Not sure if you're ready?</p>
                <p className="text-sm text-muted-foreground">Join our free workshop to see if this is right for you.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Frequently Shipped Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projectTypes.map((type, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-purple-500" />
                  {type.category}
                </h3>
                <ul className="space-y-2">
                  {type.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">→</span>
                      <span className="text-muted-foreground text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            This Is For You If...
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-green-500/20 bg-green-500/5">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                You Are
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>A software engineer, product person, or technical IC</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Tired of tutorials, ready to ship real projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Want portfolio pieces that get you promoted/hired</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Looking to build AI skills by actually building</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Comfortable with code (any language—we'll teach AI)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Want accountability and a community of builders</span>
                </li>
              </ul>
            </Card>
            <Card className="p-6 border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                You're Facing
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>AI hype but no real projects to show</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Stuck at IC level with no clear path up</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Tried tutorials but never shipped anything complete</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Unsure how to monetize AI skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>No time/motivation to build solo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Impostor syndrome about AI/ML capabilities</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            What Builders Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-card to-purple-500/5">
                <p className="text-foreground mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground mb-2">{testimonial.title}</p>
                  {testimonial.link && (
                    <a
                      href={`https://${testimonial.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-purple-600 hover:underline flex items-center gap-1"
                    >
                      <ExternalLink className="w-3 h-3" />
                      {testimonial.link}
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-500/10 to-pink-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Ship Your First AI Product?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the December cohort • 15 spots left
          </p>

          <Card className="p-8 shadow-lg mb-8">
            <div className="mb-8">
              <div className="mb-6">
                <p className="text-5xl font-bold text-foreground mb-2">$1,000</p>
                <p className="text-lg text-muted-foreground mb-4">One-time investment (or 3 × $350)</p>
              </div>

              <div className="bg-secondary/50 p-6 rounded-lg mb-6">
                <p className="text-sm font-semibold text-foreground mb-3">COMPARE TO:</p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">❌ Bootcamp: $15,000</span>
                    <span className="text-xs text-muted-foreground">(same outcome?)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">❌ ML Master's: $80,000</span>
                    <span className="text-xs text-muted-foreground">(still no shipped projects?)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">❌ Staying stuck at IC: Lost promotion</span>
                    <span className="text-xs text-muted-foreground">= $30K+</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <span className="text-foreground font-semibold">✅ This program: $1,000</span>
                    <span className="text-xs text-green-600">→ Ship 3 projects + portfolio + community</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/10 p-4 rounded-lg mb-6">
                <p className="text-sm font-semibold text-foreground mb-2">ALUMNI REPORTED:</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-bold text-foreground">📈 $32,000</p>
                    <p className="text-muted-foreground">Average raise</p>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">💼 94%</p>
                    <p className="text-muted-foreground">Shipped 2+ projects</p>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">🎯 71%</p>
                    <p className="text-muted-foreground">Launched publicly</p>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">💰 12 builders</p>
                    <p className="text-muted-foreground">Now make side income</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white text-lg px-12 py-6 w-full shadow-lg hover:shadow-xl transition-all"
                onClick={() => {
                  trackClick('Ship AI - Final CTA', {
                    location: 'final_cta_section',
                    destination: 'https://buy.stripe.com/fZe6sa3Up2L9bwAcNl',
                    cta_text: 'Reserve Your Spot Now',
                    price: '$1000'
                  });
                  window.location.href = "https://buy.stripe.com/fZe6sa3Up2L9bwAcNl";
                }}
              >
                Reserve Your Spot Now - December 2nd Cohort
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-500 text-purple-600 hover:bg-purple-500/10 text-lg px-8 py-6 w-full"
                onClick={() => {
                  trackClick('Ship AI - Free Workshop Alternative', {
                    location: 'final_cta_section',
                    destination: 'https://calendly.com/tech-leaders/ship-ai-workshop',
                    cta_text: 'Try Free Workshop First'
                  });
                  window.location.href = "https://calendly.com/tech-leaders/ship-ai-workshop";
                }}
              >
                Try Free Workshop First (90 Minutes)
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              💳 Secure checkout • 🔒 SSL encrypted • 💯 Lifetime community access
            </p>

            <p className="text-sm text-muted-foreground mt-6">
              <strong>P.S.</strong> As soon as you enroll, you'll get immediate access to our pre-work materials,
              Discord community, and AI tools starter pack—so you can start building before Day 1.
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
