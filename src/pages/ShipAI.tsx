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
      icon: Calendar,
      title: "Weekly Live Training & Office Hours",
      description: "Every week, learn the newest AI tools and workflows with hands-on training. Plus get personalized help with your AI projects, career questions, and technical challenges."
    },
    {
      icon: Code2,
      title: "Latest AI Tools & Workflows",
      description: "Stay current with Claude, ChatGPT, Cursor, v0, and emerging tools. Access our library of prompts, workflows, code templates, and best practices. Updated weekly with new content."
    },
    {
      icon: Lightbulb,
      title: "24/7 AI Community of 300+",
      description: "Connect with engineers, product managers, designers, marketers, and business leaders all applying AI. Share wins, get feedback, and learn from peers across all business functions."
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
    "Ship AI Membership - Weekly AI Training & Office Hours",
    "Stay ahead of AI with weekly live training sessions, expert office hours, and hands-on workflows for the latest AI tools. Perfect for software engineers and technical leaders."
  );

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Ship AI Membership - Weekly AI Training & Office Hours"
        description="Master the latest AI tools and workflows with weekly live training sessions, expert office hours, and a community of builders. Monthly ($120) or Annual ($1000) membership."
        keywords={['AI training', 'AI office hours', 'AI tools', 'AI workflows', 'ChatGPT training', 'Claude AI', 'AI membership', 'learn AI tools']}
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
              <span>New Tools & Workflows Added Weekly</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Master the Latest AI Tools & Workflows
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 mt-2">
                With Weekly Live Training & Office Hours
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Join software engineers and technical leaders who stay ahead of AI through weekly hands-on training, expert office hours, and a community of builders.
            </p>

            <div className="flex justify-center items-center mb-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white text-lg px-8 py-6"
                onClick={() => {
                  trackClick('Ship AI - Hero CTA', {
                    location: 'hero_section',
                    destination: '#membership',
                    cta_text: 'Join Membership'
                  });
                  window.location.href = "#membership";
                }}
              >
                Join Membership
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Get access to weekly trainings, office hours, and the latest AI workflows
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            What's Included in Your Membership
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

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
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
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Stay current with the latest AI tools & workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Get hands-on training with Claude, ChatGPT, Cursor & v0</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Apply AI to your work immediately with real examples</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Connect with 300+ engineers, PMs, designers & business leaders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Get personalized help during weekly office hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Access prompts, templates & workflows updated weekly</span>
                </li>
              </ul>
            </Card>
            <Card className="p-6 border-purple-500/20 bg-purple-500/5">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-500" />
                You Need
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">→</span>
                  <span>Weekly training to keep up with AI's rapid pace</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">→</span>
                  <span>Expert guidance for your specific AI challenges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">→</span>
                  <span>A community of peers applying AI across all functions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">→</span>
                  <span>Production-ready workflows, not just theory</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">→</span>
                  <span>Access to recordings & resources whenever you need them</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">→</span>
                  <span>Ongoing learning as new AI tools emerge each week</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section id="membership" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-500/10 to-pink-600/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Choose Your Membership Plan
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Get unlimited access to weekly trainings, office hours, and the latest AI tools & workflows
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Monthly Plan */}
            <Card className="p-8 shadow-lg hover:shadow-xl transition-all relative">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Monthly</h3>
                <div className="mb-4">
                  <p className="text-5xl font-bold text-foreground mb-2">$100</p>
                  <p className="text-lg text-muted-foreground">per month</p>
                </div>
              </div>

              <div className="space-y-4 mb-8 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Weekly live training & office hours</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Latest AI tools & workflows (updated weekly)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">24/7 community of 300+ builders</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">All recordings, prompts & templates</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Cancel anytime</span>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white text-lg px-8 py-6 w-full shadow-lg hover:shadow-xl transition-all"
                onClick={() => {
                  trackClick('Ship AI - Monthly Membership', {
                    location: 'membership_section',
                    destination: 'https://buy.stripe.com/9B6dR926Zd2TcYab3uaMU0F',
                    cta_text: 'Start Monthly Membership',
                    price: '$100'
                  });
                  window.location.href = "https://buy.stripe.com/9B6dR926Zd2TcYab3uaMU0F";
                }}
              >
                Start Monthly Membership
              </Button>
            </Card>

            {/* Annual Plan */}
            <Card className="p-8 shadow-lg hover:shadow-xl transition-all relative border-2 border-purple-500">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  BEST VALUE - Save $200
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Annual</h3>
                <div className="mb-4">
                  <p className="text-5xl font-bold text-foreground mb-2">$1,000</p>
                  <p className="text-lg text-muted-foreground">per year</p>
                  <p className="text-sm text-purple-600 font-semibold mt-2">
                    Save $200 - just $83/month
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground font-semibold">Everything in Monthly, plus:</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Save $200 per year</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Priority support in office hours</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Early access to new content</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Lock in your rate forever</span>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white text-lg px-8 py-6 w-full shadow-lg hover:shadow-xl transition-all"
                onClick={() => {
                  trackClick('Ship AI - Annual Membership', {
                    location: 'membership_section',
                    destination: 'https://buy.stripe.com/5kQ6oHbHze6X3nAb3uaMU0G',
                    cta_text: 'Start Annual Membership',
                    price: '$1000'
                  });
                  window.location.href = "https://buy.stripe.com/5kQ6oHbHze6X3nAb3uaMU0G";
                }}
              >
                Start Annual Membership
              </Button>
            </Card>
          </div>

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
