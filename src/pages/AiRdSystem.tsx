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
      tutorial_type: 'AI R&D',
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
      deliverables: ["Market Research Report", "Go-to-Market Strategies", "ICP Documentation", "Pain Point Analysis"]
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
      deliverables: []
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
        title="AI R&D System Tutorial"
        description="Master the 6-step AI R&D framework. Learn systematic AI product development from market research to revenue launch using behavioral science and AI tools."
        keywords={['AI R&D system', 'AI R&D framework', 'product development', 'AI workflow', 'behavioral design', 'Claude Code tutorial']}
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
            <span>Part of the Ship AI Program</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            The AI R&D System™
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold text-muted-foreground mb-6">
            From Research to Reality
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
            Master AI tools and workflows with AI-Driven Product Development to go from research to reality and ship a revenue-generating AI product or service.
          </p>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            This comprehensive tutorial teaches a systematic 6-step approach that validates demand, builds prototypes, and launches successfully using behavioral science and AI tools.
          </p>
        </div>
      </section>

      {/* Prerequisites & Setup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Setup
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to get started with the AI R&D framework
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Development Environment Setup */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 justify-center">
                <GitBranch className="w-6 h-6 text-blue-600" />
                Development Environment Setup
              </h3>

              <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-700">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <GitBranch className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold">Clone the Agents Repository</h4>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Before beginning this tutorial, you must clone the technical leaders agents repository which contains essential AI agent templates and frameworks used throughout the tutorial:
                  </p>

                  <div className="bg-gray-900 dark:bg-black rounded-lg p-4 overflow-x-auto">
                    <div className="text-green-400 text-xs mb-2"># Navigate to your claude directory</div>
                    <div className="text-white font-mono text-sm mb-2">cd ~/.claude</div>
                    <div className="text-green-400 text-xs mb-2"># Clone the agents repository using SSH (recommended)</div>
                    <div className="text-white font-mono text-sm mb-2">git clone git@github.com:technical-leaders/agents.git</div>
                    <div className="text-green-400 text-xs mb-2"># Navigate into the cloned repository</div>
                    <div className="text-white font-mono text-sm mb-2">cd agents</div>
                    <div className="text-green-400 text-xs mb-2"># Verify the agents have been installed</div>
                    <div className="text-white font-mono text-sm">ls -la</div>
                  </div>

                  <div className="mt-6">
                    <h5 className="font-bold text-gray-900 dark:text-white mb-3">What's in the Agents Repository:</h5>
                    <div className="grid grid-cols-1 gap-2">
                      {[
                        'Pre-built AI agent configurations for market research',
                        'Customer interview templates and analysis frameworks',
                        'Product requirement document (PRD) generators',
                        'User experience (UX) story creation tools',
                        'Go-to-market strategy templates',
                        'Integration examples for popular AI development tools'
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                    <h5 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4" />
                      Important Notes:
                    </h5>
                    <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                      <li>• Ensure you have SSH keys set up with GitHub for seamless access</li>
                      <li>• If you encounter permission issues, verify your GitHub access to the technical-leaders organization</li>
                      <li>• The agents repository will be referenced throughout Steps 1-6 of this tutorial</li>
                      <li>• Keep the repository updated by running <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded text-xs">git pull origin main</code> periodically</li>
                    </ul>
                  </div>
                </div>
              </Card>
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
              <span>AI R&D Framework</span>
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

                          {/* Claude Command for Step 1 */}
                          {step.number === 1 && (
                            <div className="bg-gray-900 dark:bg-black rounded-lg p-4 overflow-x-auto">
                              <div className="text-green-400 text-xs mb-2"># Claude Command for Market Research</div>
                              <div className="text-white font-mono text-sm">
                                Use sea-of-demand to write a new document called market-research.md about my PRODUCT_OR_SERVICE for ICP_IDENTITY with PROBLEMS_OR_RISKS
                              </div>
                            </div>
                          )}

                          {/* Claude Command for Step 2 */}
                          {step.number === 2 && (
                            <div className="bg-gray-900 dark:bg-black rounded-lg p-4 overflow-x-auto">
                              <div className="text-green-400 text-xs mb-2"># Claude Command for Waitlist Validation</div>
                              <div className="text-white font-mono text-sm">
                                Use waitlist-builder to read market-research.md and icp-interviews.md to validate bet
                              </div>
                            </div>
                          )}

                          {/* Claude Command for Step 3 */}
                          {step.number === 3 && (
                            <div className="bg-gray-900 dark:bg-black rounded-lg p-4 overflow-x-auto">
                              <div className="text-green-400 text-xs mb-2"># Claude Command for Wedge Roadmap</div>
                              <div className="text-white font-mono text-sm">
                                Use product-researcher to create a Wedge Roadmap
                              </div>
                            </div>
                          )}

                          {/* Claude Command for Step 4 */}
                          {step.number === 4 && (
                            <div className="bg-gray-900 dark:bg-black rounded-lg p-4 overflow-x-auto">
                              <div className="text-green-400 text-xs mb-2"># Claude Command for PRD Creation</div>
                              <div className="text-white font-mono text-sm">
                                Use user-researcher to create a PRD
                              </div>
                            </div>
                          )}

                          {/* Claude Command for Step 5 */}
                          {step.number === 5 && (
                            <div className="bg-gray-900 dark:bg-black rounded-lg p-4 overflow-x-auto">
                              <div className="text-green-400 text-xs mb-2"># Claude Command for Iteration Loop</div>
                              <div className="text-white font-mono text-sm">
                                Use ux-story-creator to create user stories from your PRD
                              </div>
                            </div>
                          )}

                          {/* Iteration Loop Steps for Step 5 */}
                          {step.number === 5 && (
                            <div>
                              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                                <Settings className="w-5 h-5 text-red-600" />
                                The Iteration Loop Process
                              </h4>
                              <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg">
                                <p className="text-sm text-blue-800 dark:text-blue-300 font-medium">
                                  Use this to integrate your prototypes into your fully functioning software.
                                </p>
                              </div>
                              <div className="space-y-3">
                                {[
                                  {
                                    title: "Prototype",
                                    description: "Feed each story from market-research-ux.md into v0 to prototype"
                                  },
                                  {
                                    title: "Feedback", 
                                    description: "Show your prototyped features to your ICP waitlist and implement changes to consider their feedback"
                                  },
                                  {
                                    title: "Integrate",
                                    description: "Give your final v0 prototype file to Claude Code and ask to integrate it into your product"
                                  }
                                ].map((step, idx) => (
                                  <div key={idx} className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                    <div className="w-8 h-8 bg-red-100 dark:bg-red-800/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-sm font-bold text-red-600 dark:text-red-300">{idx + 1}</span>
                                    </div>
                                    <div>
                                      <h5 className="font-bold text-gray-900 dark:text-white mb-1">{step.title}</h5>
                                      <span className="text-sm text-gray-700 dark:text-gray-300">{step.description}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Claude Command for Step 6 */}
                          {step.number === 6 && (
                            <div className="bg-gray-900 dark:bg-black rounded-lg p-4 overflow-x-auto">
                              <div className="text-green-400 text-xs mb-2"># Claude Command for Go-to-Market Launch</div>
                              <div className="text-white font-mono text-sm">
                                Use launch-strategist to create revenue generating activities
                              </div>
                            </div>
                          )}

                          {/* Go-to-Market Launch Steps for Step 6 */}
                          {step.number === 6 && (
                            <div>
                              <div className="mb-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-700 rounded-lg">
                                <p className="text-sm text-indigo-800 dark:text-indigo-300 font-medium">
                                  Your next steps after you have a functioning product from The Iteration Loop™:
                                </p>
                              </div>

                              <div className="space-y-6">
                                {/* Deploy to Production */}
                                <div>
                                  <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                                    <Rocket className="w-5 h-5 text-indigo-600" />
                                    Deploy to Production
                                  </h4>
                                  <div className="space-y-3">
                                    {[
                                      "Create Vercel and Github accounts",
                                      "Add New Github Project to Vercel",
                                      "Github Basics to Push to Production (GH Desktop)",
                                      "Set up custom domain on Vercel",
                                      "git push origin main 🎉"
                                    ].map((step, idx) => (
                                      <div key={idx} className="flex items-start gap-3 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                                        <div className="w-6 h-6 bg-indigo-100 dark:bg-indigo-800/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-300">{idx + 1}</span>
                                        </div>
                                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{step}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Launch Kit */}
                                <div>
                                  <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                                    <BarChart className="w-5 h-5 text-green-600" />
                                    Launch Kit™
                                  </h4>
                                  <div className="mb-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg">
                                    <p className="text-sm text-green-800 dark:text-green-300 font-medium">
                                      Run your Revenue Generating Activities (RGAs) to effectively spread the word, capture attention, and convert interested users into paying customers.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Follow-up Steps for Step 2 */}
                          {step.number === 2 && (
                            <div>
                              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                                <Target className="w-5 h-5 text-purple-600" />
                                Promote Waitlist to ICP
                              </h4>
                              <div className="mb-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                                <p className="text-sm text-yellow-800 dark:text-yellow-300 font-medium">
                                  If you can't get signups for a future product, it's unlikely you'll get signups for a full product after wasting time and money to make it real
                                </p>
                              </div>
                              <div className="space-y-3">
                                <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                  <div className="w-6 h-6 bg-purple-100 dark:bg-purple-800/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-xs font-bold text-purple-600 dark:text-purple-300">🎯</span>
                                  </div>
                                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Get 10 signups for early access to your product</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Key Deliverables - only show if there are deliverables */}
                          {step.deliverables && step.deliverables.length > 0 && (
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
                          )}

                          {/* Step-by-Step Process for Step 1 */}
                          {step.number === 1 && (
                            <div>
                              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                                <Target className="w-5 h-5 text-blue-600" />
                                The Inverted Dream 100 ICP List™️
                              </h4>
                              <div className="space-y-3">
                                {[
                                  "Find 10 online communities where your ICP gathers",
                                  "Spend 1 week observing without promoting",
                                  "Document the top 5 pain points mentioned",
                                  "Validate which ones you can solve best",
                                  "Build a list of 100 dream customers and invert the order to \"practice\" on lower risk ICP",
                                  "Conduct in-depth interviews (see The Mom Test) with your Ideal Customer Profile (ICP) to confirm their pain points. Save the transcripts in a file called icp-interviews.md."
                                ].map((step, idx) => (
                                  <div key={idx} className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-800/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-xs font-bold text-blue-600 dark:text-blue-300">{idx + 1}</span>
                                    </div>
                                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{step}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
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

      <Footer />
    </div>
  );
};

export default AiRdSystem;