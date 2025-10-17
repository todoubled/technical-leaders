import Navigation from "@/components/Navigation";
import ContentFooter from "@/components/footers/ContentFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, Target, MessageSquare, ArrowRight, Zap, Star, Users, BookOpen, Lightbulb, FileText, TrendingUp } from "lucide-react";
import SEO from "@/components/SEO";
import { trackClick, trackEvent } from "@/utils/posthog";
import { useTrackScrollDepth } from "@/hooks/use-posthog";
import { useEffect } from "react";

const AIAgentLibrary = () => {
  useTrackScrollDepth('AI Agent Library Page');

  useEffect(() => {
    trackEvent('AI Agent Library Page View', {
      has_strategy: true,
      has_cta: true
    });
  }, []);

  const chapters = [
    {
      number: 1,
      title: "What is Prompt Engineering?",
      subtitle: "The Coffee Shop Analogy",
      description: "Learn why prompt engineering is simply giving AI really clear, specific instructions",
      details: "Discover how the right prompt can save you hours of work and turn AI from a toy into a powerful business tool. Just like ordering the perfect coffee, specificity gets you exactly what you want.",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: 2,
      title: "Anatomy of a Great Prompt",
      subtitle: "Breaking Down Real Examples",
      description: "Master the secret ingredients: Context, Task, Format, and Constraints",
      details: "See real examples from our agent library and learn what makes them tick. Understand the four essential ingredients that transform vague requests into powerful instructions.",
      icon: Target,
      color: "from-purple-500 to-purple-600"
    },
    {
      number: 3,
      title: "From Bad to Great",
      subtitle: "Transforming Weak Prompts",
      description: "Learn how to fix common mistakes and level up your prompts instantly",
      details: "Practice improving prompts together with real before-and-after examples. Turn vague requests into specific, actionable instructions that get results.",
      icon: TrendingUp,
      color: "from-green-500 to-green-600"
    },
    {
      number: 4,
      title: "Tutorial Engineer Example",
      subtitle: "Learning from Complex Prompts",
      description: "Steal proven prompt structures you can use for any expert task",
      details: "Break down a sophisticated prompt template that you can adapt for your own needs. See how structure and organization create professional results.",
      icon: FileText,
      color: "from-orange-500 to-orange-600"
    },
    {
      number: 5,
      title: "Anti-AI Writing Rules",
      subtitle: "Making Content Sound Human",
      description: "Make AI writing sound natural and conversational, not robotic",
      details: "Learn the secret to avoiding those telltale AI phrases. Write content that sounds like a real person, not a corporate robot.",
      icon: MessageSquare,
      color: "from-pink-500 to-pink-600"
    },
    {
      number: 6,
      title: "Build Your Own Prompt",
      subtitle: "Step-by-Step Workshop",
      description: "Follow our proven 5-step process to create effective prompts for any task",
      details: "Walk through a complete example from start to finish. By the end, you'll have a reusable template for creating powerful prompts.",
      icon: Lightbulb,
      color: "from-cyan-500 to-cyan-600"
    },
    {
      number: 7,
      title: "Practice Exercises",
      subtitle: "Your Homework",
      description: "Build confidence with hands-on exercises you can complete today",
      details: "Four practical exercises to reinforce what you've learned. Practice role reversal, constraint challenges, format fixes, and building from scratch.",
      icon: CheckCircle2,
      color: "from-red-500 to-red-600"
    },
    {
      number: 8,
      title: "Advanced Tips and Tricks",
      subtitle: "Power User Techniques",
      description: "Master examples, iteration, placeholders, and reverse engineering",
      details: "Level up with advanced techniques like the iteration technique, placeholder patterns, and reverse engineering. These pro tips will set you apart.",
      icon: Star,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      number: 9,
      title: "Common Mistakes to Avoid",
      subtitle: "What Not to Do",
      description: "Learn the 5 biggest mistakes that sabotage your prompts",
      details: "Avoid being too polite, information overload, missing context, vague lengths, and ambiguous terms. These quick fixes instantly improve your results.",
      icon: Zap,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      number: 10,
      title: "Your Prompt Engineering Toolkit",
      subtitle: "Ready-to-Use Templates",
      description: "Get 4 battle-tested templates you can use immediately",
      details: "Access proven templates for expert advisors, content creation, problem solving, and analysis. Just fill in the blanks and get professional results.",
      icon: Users,
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  const learningOutcomes = [
    { metric: "30", label: "Minutes to master", sublabel: "Complete guide" },
    { metric: "10", label: "Chapters", sublabel: "Step-by-step learning" },
    { metric: "4", label: "Ready templates", sublabel: "Instant use" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Agent Library - The Non-Technical Guide to Prompt Engineering"
        description="Master prompt engineering in 30 minutes. Learn how to give AI clear instructions that get amazing results. Includes real examples, templates, and exercises."
        keywords={['prompt engineering', 'AI prompts', 'ChatGPT prompts', 'AI writing', 'prompt templates', 'AI guide']}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/launch-bg.png"
            alt="AI Agent Library background"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full text-sm font-bold mb-6">
            <BookOpen className="w-4 h-4" />
            <span>The Non-Technical Guide</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Teaching AI to Work for You
            <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mt-2">
              Master Prompt Engineering
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
            What prompt engineering actually means (spoiler: it's just <span className="font-bold text-white">giving really good instructions!</span>)
          </p>

          <p className="text-2xl font-semibold mb-8 max-w-2xl mx-auto">
            Learn in 30 minutes what takes others weeks to figure out
          </p>

          <div className="bg-background/50 backdrop-blur border border-white/10 rounded-lg p-6 max-w-3xl mx-auto mb-8 shadow-xl">
            <p className="text-lg font-bold mb-3">
              What You'll Learn:
            </p>
            <div className="grid md:grid-cols-2 gap-3 text-left">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base">Spot good vs bad prompts instantly</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base">The secret recipe for amazing results</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base">Real examples you can steal</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base">Practice exercises to build confidence</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-8 py-6"
              onClick={() => {
                trackClick('Start Learning - AI Agent Library', {
                  location: 'hero_section'
                });
                document.getElementById('chapters')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Learning Now
            </Button>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 -mt-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {learningOutcomes.map((outcome, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mb-2">
                  {outcome.metric}
                </p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  {outcome.label}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {outcome.sublabel}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 10 Chapters */}
      <section id="chapters" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-6 py-3 rounded-full font-bold mb-6 shadow-md">
              <BookOpen className="w-5 h-5" />
              <span>Complete Learning Path</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              10 Chapters to Master Prompt Engineering
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From complete beginner to confident prompt engineer in just 30 minutes
            </p>
          </div>

          <div className="space-y-12">
            {chapters.map((chapter, index) => (
              <div key={index} className="relative">
                {/* Connecting line for non-last items */}
                {index < chapters.length - 1 && (
                  <div className="absolute left-1/2 top-full w-0.5 h-12 bg-gradient-to-b from-orange-300 to-transparent dark:from-orange-600 transform -translate-x-1/2 z-10"></div>
                )}

                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                  <div className="flex flex-col lg:flex-row">
                    {/* Left side - Chapter info */}
                    <div className="lg:w-2/5 p-10 text-white relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: index % 3 === 0 ? 'url(/ai-in-ar.png)' : index % 3 === 1 ? 'url(/launch-bg.png)' : 'url(/scale-bg.png)',
                        }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${chapter.color.replace('from-', 'from-').replace('to-', 'to-')}/80`}></div>
                      </div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                      <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-10 -translate-x-10"></div>

                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                            <span className="text-4xl font-bold">{chapter.number}</span>
                          </div>
                          <div className="p-3 rounded-xl bg-white/15 backdrop-blur-sm">
                            <chapter.icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-bold mb-3">{chapter.title}</h3>
                        <p className="text-xl opacity-90 font-medium">{chapter.subtitle}</p>
                      </div>
                    </div>

                    {/* Right side - Details */}
                    <div className="lg:w-3/5 p-10">
                      <div className="max-w-2xl">
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                          {chapter.description}
                        </h4>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                          {chapter.details}
                        </p>

                        {/* Special content for Chapter 1 */}
                        {chapter.number === 1 && (
                          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                            <div className="space-y-4">
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                                  <Star className="w-6 h-6 text-white" />
                                </div>
                                <p className="font-bold text-gray-900 dark:text-white text-xl">
                                  The Coffee Shop Analogy
                                </p>
                              </div>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-red-200 dark:border-red-700">
                                  <p className="text-sm font-bold text-red-600 dark:text-red-400 mb-2">❌ Vague Order:</p>
                                  <p className="text-sm text-gray-700 dark:text-gray-300">"I want coffee"</p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 italic">You might get anything from black coffee to a frappuccino</p>
                                </div>
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-green-200 dark:border-green-700">
                                  <p className="text-sm font-bold text-green-600 dark:text-green-400 mb-2">✅ Detailed Order:</p>
                                  <p className="text-sm text-gray-700 dark:text-gray-300">"Medium oat milk latte, one pump vanilla, extra hot, ceramic mug"</p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 italic">You get exactly what you want</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Special content for Chapter 6 */}
                        {chapter.number === 6 && (
                          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-cyan-200 dark:border-cyan-800">
                            <div className="space-y-4">
                              <p className="font-bold text-gray-900 dark:text-white text-lg mb-3">
                                The 5-Step Prompt Formula:
                              </p>
                              <div className="space-y-3">
                                {["Define the Role", "Set the Context", "Specify the Task", "Add Constraints", "Request Format"].map((step, i) => (
                                  <div key={i} className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg p-3 border border-cyan-200 dark:border-cyan-700">
                                    <div className="w-8 h-8 bg-cyan-100 dark:bg-cyan-900 rounded-full flex items-center justify-center font-bold text-cyan-600 dark:text-cyan-400 text-sm flex-shrink-0">
                                      {i + 1}
                                    </div>
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">{step}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Special content for Chapter 10 */}
                        {chapter.number === 10 && (
                          <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800">
                            <div className="space-y-4">
                              <p className="font-bold text-gray-900 dark:text-white text-lg mb-3">
                                4 Ready-to-Use Templates:
                              </p>
                              <div className="grid md:grid-cols-2 gap-3">
                                {[
                                  { name: "Expert Advisor", icon: "🎯" },
                                  { name: "Content Creator", icon: "✍️" },
                                  { name: "Problem Solver", icon: "🔧" },
                                  { name: "Analyzer", icon: "📊" }
                                ].map((template, i) => (
                                  <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-emerald-200 dark:border-emerald-700">
                                    <div className="flex items-center gap-2">
                                      <span className="text-2xl">{template.icon}</span>
                                      <span className="text-sm font-bold text-gray-900 dark:text-white">{template.name}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Guide Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Why This Guide Works
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">No Technical Jargon</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Written for real people, not AI researchers. If you can order coffee, you can do this.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Real Examples</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Every concept includes actual prompts you can copy, modify, and use today.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Practice Built In</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Hands-on exercises help you build confidence and muscle memory.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Immediate Results</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Start getting better AI outputs within minutes of reading Chapter 1.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* The Toolkit Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-600/5"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">
            Your Complete Toolkit
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Everything you need to become a confident prompt engineer
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <BookOpen className="w-10 h-10 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">10 Comprehensive Chapters</h3>
              <p className="text-gray-300">From basics to advanced techniques, everything is covered step-by-step</p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <FileText className="w-10 h-10 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">4 Battle-Tested Templates</h3>
              <p className="text-gray-300">Ready-to-use prompt templates for common business tasks</p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Lightbulb className="w-10 h-10 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Real-World Examples</h3>
              <p className="text-gray-300">Actual prompts from our library that you can steal and modify</p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <CheckCircle2 className="w-10 h-10 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Practice Exercises</h3>
              <p className="text-gray-300">Hands-on challenges to build your skills and confidence</p>
            </div>
          </div>

          {/* Additional trust elements */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">No fluff, just actionable advice</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">Beginner-friendly language</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">30-minute read time</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <Zap className="w-16 h-16 mx-auto mb-6 text-orange-500" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Master Prompt Engineering?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Join hundreds of professionals who've transformed how they work with AI
          </p>

          <Card className="p-8 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Get the Complete Guide + Bonus Resources
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8 text-left max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-gray-900 dark:text-gray-100">10-chapter masterclass</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-gray-900 dark:text-gray-100">4 ready-to-use templates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-gray-900 dark:text-gray-100">Real-world examples</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-gray-900 dark:text-gray-100">Practice exercises</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-gray-900 dark:text-gray-100">Expert tips & tricks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-gray-900 dark:text-gray-100">Mistakes to avoid</span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-12 py-6"
              onClick={() => {
                trackClick('Get the Guide - AI Agent Library', {
                  location: 'bottom_cta'
                });
                window.location.href = "/how-it-works";
              }}
            >
              Get Started Now
            </Button>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              Start getting better AI results in the next 30 minutes
            </p>
          </Card>

          <p className="text-gray-700 dark:text-gray-300 mt-8">
            Questions? Email{" "}
            <a href="mailto:todd@technical-leaders.com" className="text-orange-600 hover:underline">
              todd@technical-leaders.com
            </a>
          </p>
        </div>
      </section>

      <ContentFooter
        headline="Ready to Transform How You Work with AI?"
        description="This comprehensive guide gives you everything you need to become a confident prompt engineer in just 30 minutes."
        primaryCTA={{
          text: "Start Learning Now",
          url: "/how-it-works",
          description: "Get Immediate Access"
        }}
        benefits={[
          "10 comprehensive chapters",
          "4 ready-to-use templates",
          "Real-world examples",
          "Practice exercises"
        ]}
        socialProof="Join hundreds of professionals mastering AI"
        testimonial={{
          quote: "This guide completely changed how I use AI. I went from frustrated to confident in one afternoon. The templates alone are worth their weight in gold.",
          author: "Sarah M.",
          role: "Marketing Director"
        }}
        secondaryCTA={{
          text: "See Our Programs",
          url: "/ai"
        }}
        trackingContext="AI Agent Library"
      />
    </div>
  );
};

export default AIAgentLibrary;
