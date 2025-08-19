import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Terminal, GitBranch, MessageSquare, ArrowRight, Zap, Star, Users, Code, Bot, Monitor, Search, Target, Brain, Rocket, Clock, FileText, Video, TestTube, BarChart, Lightbulb, Settings } from "lucide-react";
import SEO from "@/components/SEO";
import { trackClick, trackEvent } from "@/utils/posthog";
import { useTrackScrollDepth } from "@/hooks/use-posthog";
import { useEffect } from "react";

const AiRdSystem = () => {
  useTrackScrollDepth('AI R&D System Page');
  
  useEffect(() => {
    trackEvent('AI R&D System Page View', {
      tutorial_type: 'Ship AI Program',
      has_6_steps: true
    });
  }, []);

  const steps = [
    {
      number: 1,
      title: "The Sea of Demand™",
      subtitle: "Validate demand, find competitive market positioning",
      description: "Use conversational community-based marketing to identify genuine market demand",
      details: "Complete market research, customer interviews, and ICP validation using AI tools and behavioral science.",
      icon: Search,
      color: "from-blue-500 to-blue-600",
      deliverables: ["Market Research Report", "10-15 Customer Interviews", "ICP Documentation", "Pain Point Analysis"]
    },
    {
      number: 2,
      title: "The Validated Bet™",
      subtitle: "Launch your first asset to validate market interest",
      description: "Create high-converting landing pages and get 10+ early access signups before building",
      details: "Build waitlist landing pages using proven patterns, set up development environment, and validate through real signups.",
      icon: Target,
      color: "from-purple-500 to-purple-600",
      deliverables: ["Landing Page", "Email Capture System", "10+ Waitlist Signups", "Development Environment"]
    },
    {
      number: 3,
      title: "The Wedge Roadmap™",
      subtitle: "Define features prioritized by impact and monetization",
      description: "Use Jobs-to-be-Done framework to identify your competitive wedge feature",
      details: "Create comprehensive Product Requirements Document with strategic feature prioritization.",
      icon: Brain,
      color: "from-green-500 to-green-600",
      deliverables: ["Jobs-to-be-Done Analysis", "Wedge Feature Selection", "Product Requirements Document", "Go-to-Market Strategy"]
    },
    {
      number: 4,
      title: "The Fogg Prototype™",
      subtitle: "Create functional prototypes using behavioral science",
      description: "Apply BJ Fogg Behavior Model (B = M × A × P) to design user experiences that drive action",
      details: "Design wireframes, map user journeys, and validate prototypes with real customers.",
      icon: TestTube,
      color: "from-orange-500 to-orange-600",
      deliverables: ["User Experience Flows", "Wireframes", "Prototype Testing", "Customer Validation"]
    },
    {
      number: 5,
      title: "The Iteration Loop™",
      subtitle: "Transform prototypes into working software",
      description: "Build functional products through systematic iteration and integration with AI tools",
      details: "Use Claude Code and rapid prototyping to create working software with customer feedback.",
      icon: Settings,
      color: "from-red-500 to-red-600",
      deliverables: ["UX Story Creation", "v0 Prototypes", "Customer Feedback Integration", "Working Software"]
    },
    {
      number: 6,
      title: "The Go-To-Market Launch™",
      subtitle: "Execute strategic launch with sustainable growth",
      description: "Convert your validated product into revenue-generating business",
      details: "Implement marketing strategies, optimize conversion funnels, and establish growth measurement frameworks.",
      icon: Rocket,
      color: "from-indigo-500 to-indigo-600",
      deliverables: ["Launch Strategy", "Marketing Materials", "Customer Acquisition Channels", "Revenue Optimization"]
    }
  ];

  const results = [
    { metric: "4-8 weeks", label: "Timeline to launch", sublabel: "Revenue-generating product" },
    { metric: "6-step", label: "Systematic framework", sublabel: "Proven methodology" },
    { metric: "AI-first", label: "Development approach", sublabel: "Claude Code integration" }
  ];

  const toolkit = [
    {
      name: "Market Research",
      description: "Community-based validation",
      tools: ["Claude.ai", "Customer interviews", "Pain point analysis"]
    },
    {
      name: "Rapid Prototyping", 
      description: "AI-powered development",
      tools: ["v0.dev", "Bolt.new", "Cursor IDE"]
    },
    {
      name: "Behavioral Design",
      description: "User experience optimization",
      tools: ["BJ Fogg Model", "Jobs-to-be-Done", "Wireframing"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI R&D System - Ship AI Program Tutorial"
        description="Master the 6-step Ship AI Program framework. Learn systematic AI product development from market research to revenue launch using behavioral science and AI tools."
        keywords={['AI R&D system', 'Ship AI Program', 'product development', 'AI workflow', 'behavioral design', 'Claude Code tutorial']}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/launch-bg.png"
            alt="AI R&D System background"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full text-sm font-bold mb-6">
            <Rocket className="w-4 h-4" />
            <span>Ship AI Program Tutorial</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            The AI R&D System™
            <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mt-2">
              Ship AI Program
            </span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl font-semibold text-muted-foreground mb-6">
            From Research to Reality in 4-8 Weeks
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
            Master AI tools and workflows with AI-Driven Product Development to go from research to reality and ship a revenue-generating AI product or service.
          </p>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            This comprehensive tutorial teaches a systematic 6-step approach that validates demand, builds prototypes, and launches successfully using behavioral science and AI tools.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
            {results.map((result, index) => (
              <div key={index} className="text-center p-4 bg-background/50 backdrop-blur border border-white/10 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">{result.metric}</div>
                <div className="text-sm font-medium text-foreground">{result.label}</div>
                <div className="text-xs text-muted-foreground">{result.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Development Toolkit */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-600/5"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-white">
            Your AI R&D Toolkit
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {toolkit.map((tool, index) => (
              <div key={index} className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-4 text-center flex items-center justify-center">
                  {index === 0 && <Search className="w-12 h-12 text-blue-400" />}
                  {index === 1 && <Code className="w-12 h-12 text-purple-400" />}
                  {index === 2 && <Brain className="w-12 h-12 text-green-400" />}
                </div>
                <p className="text-xl font-bold text-white mb-2">{tool.name}</p>
                <p className="text-gray-300 text-sm mb-3">{tool.description}</p>
                <div className="space-y-1">
                  {tool.tools.map((toolName, idx) => (
                    <div key={idx} className="font-mono text-xs text-gray-400">
                      {toolName}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional benefits */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">Behavioral science-based</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">AI-first methodology</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">Proven 6-step framework</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Framework Works */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Why This Framework Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The Ship AI Program follows proven principles that most product development ignores
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-red-600">❌ Traditional Approach</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Lengthy market research with expensive consultants</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Building features without customer validation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Hoping customers will adopt the product</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">90% failure rate for new products</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-green-600">✅ Ship AI Program</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground font-medium">Validate demand before building anything</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground font-medium">Use community-driven research methods</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground font-medium">Iterate development with continuous feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground font-medium">Leverage AI tools throughout the process</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Process */}
      <section id="ship-ai-steps-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-6 py-3 rounded-full font-bold mb-6 shadow-md">
              <Rocket className="w-5 h-5" />
              <span>Ship AI Program Framework</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              The Complete 6-Step Tutorial System
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Master systematic AI product development from market research to revenue launch using proven behavioral science principles.
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connecting line for non-last items */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-full w-0.5 h-12 bg-gradient-to-b from-orange-300 to-transparent dark:from-orange-600 transform -translate-x-1/2 z-10"></div>
                )}
                
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                  <div className="flex flex-col lg:flex-row">
                    {/* Left side - Step info */}
                    <div className="lg:w-2/5 p-10 text-white relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: index < 2 ? 'url(/ai-in-ar.png)' : index < 4 ? 'url(/launch-bg.png)' : 'url(/scale-bg.png)',
                        }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color}/80`}></div>
                      </div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                      <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-10 -translate-x-10"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                            <span className="text-4xl font-bold">{step.number}</span>
                          </div>
                          <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                            <step.icon className="w-8 h-8" />
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-3xl font-bold mb-2 leading-tight">{step.title}</h3>
                            <p className="text-white/90 text-lg font-medium">{step.subtitle}</p>
                          </div>
                          <p className="text-white/80 text-base leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right side - Details */}
                    <div className="lg:w-3/5 p-10 bg-white dark:bg-gray-800">
                      <div className="h-full flex flex-col justify-between">
                        <div className="space-y-6">
                          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{step.details}</p>
                          
                          <div>
                            <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                              <FileText className="w-5 h-5 text-orange-600" />
                              Key Deliverables
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {step.deliverables.map((deliverable, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{deliverable}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorial Benefits */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <h3 className="text-2xl font-bold mb-4">What You'll Have After Completing This Tutorial</h3>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-bold mb-2">Validated Product Concept</h4>
                  <p className="text-sm text-muted-foreground">With proven market demand and clear positioning</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Monitor className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-bold mb-2">Functional Prototype</h4>
                  <p className="text-sm text-muted-foreground">Tested with real customers and ready to scale</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BarChart className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-bold mb-2">Go-to-Market Strategy</h4>
                  <p className="text-sm text-muted-foreground">Complete launch plan with growth metrics</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Ship Your AI Product?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start the comprehensive 6-step tutorial that systematically takes you from market research to revenue launch using behavioral science and AI tools.
          </p>
          <Button
            size="lg"
            className="text-lg px-8"
            onClick={() => {
              trackClick('Start AI R&D System Tutorial', {
                tutorial_type: 'Ship AI Program',
                location: 'final_cta'
              });
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Rocket className="mr-2 h-5 w-5" />
            Start the Tutorial
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiRdSystem;