import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Rocket, Users, Calendar, Lightbulb, Target, Zap, Gift, Clock, Code2, TrendingUp, Award, Github, ExternalLink, ArrowRight, AlertCircle, DollarSign, Briefcase, Quote } from "lucide-react";
import SEO from "@/components/SEO";
import { generateCourseStructuredData } from "@/utils/seo-helpers";
import { trackClick } from "@/utils/posthog";

const ShipAITrainingProgram = () => {
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

  const whatYouGet = [
    {
      icon: Code2,
      title: "Comprehensive Video Coursework",
      description: "6 weeks of structured lessons covering AI fundamentals, prompt engineering, workflow automation, and practical implementation. Learn at your own pace."
    },
    {
      icon: Users,
      title: "Weekly Live Office Hours",
      description: "Join weekly 90-minute live sessions for Q&A, troubleshooting, and implementation support. Get help with your specific use cases and challenges."
    },
    {
      icon: Lightbulb,
      title: "Hands-On Projects & Templates",
      description: "Build real AI workflows with step-by-step projects. Access templates, prompts, and resources you can use immediately in your work."
    }
  ];

  const weeklyBreakdown = [
    {
      week: "Week 1",
      title: "AI Fundamentals & ChatGPT Mastery",
      topics: [
        "Understanding how AI works (LLMs, tokens, context windows)",
        "ChatGPT essentials: models, settings, and best practices",
        "Writing effective prompts: the RISEN framework",
        "Common pitfalls and how to avoid them"
      ],
      project: "Create your first AI-powered workflow",
      duration: "Self-paced coursework + 90-min office hours",
      deliverables: ["Prompt library for your role", "3 working AI workflows"]
    },
    {
      week: "Week 2",
      title: "Claude & Advanced Prompting",
      topics: [
        "Claude's unique capabilities and use cases",
        "Projects, artifacts, and extended thinking",
        "Chain-of-thought prompting and reasoning",
        "When to use Claude vs ChatGPT vs other tools"
      ],
      project: "Build a complex multi-step AI workflow",
      duration: "Self-paced coursework + 90-min office hours",
      deliverables: ["Claude project templates", "Advanced prompt techniques"]
    },
    {
      week: "Week 3",
      title: "AI Workflow Automation",
      topics: [
        "Automating repetitive tasks with AI",
        "Custom GPTs and Claude Projects for your specific needs",
        "Integrating AI into existing tools and processes",
        "Building AI assistants for your team"
      ],
      project: "Create a custom AI assistant",
      duration: "Self-paced coursework + 90-min office hours",
      deliverables: ["Custom GPT or Claude Project", "Automation playbook"]
    },
    {
      week: "Week 4",
      title: "AI for Content & Communication",
      topics: [
        "Writing, editing, and content creation with AI",
        "Email drafting, meeting summaries, and documentation",
        "Maintaining your voice and brand with AI",
        "Quality control and human-in-the-loop workflows"
      ],
      project: "Build a content creation system",
      duration: "Self-paced coursework + 90-min office hours",
      deliverables: ["Content templates", "Communication workflows"]
    },
    {
      week: "Week 5",
      title: "AI for Research & Analysis",
      topics: [
        "Market research and competitive analysis with AI",
        "Data synthesis and report generation",
        "Using AI for strategic planning and decision-making",
        "Fact-checking and validation techniques"
      ],
      project: "Complete a research project with AI",
      duration: "Self-paced coursework + 90-min office hours",
      deliverables: ["Research framework", "Analysis templates"]
    },
    {
      week: "Week 6",
      title: "Implementation & Scale",
      topics: [
        "Rolling out AI to your team or organization",
        "Training others and change management",
        "Measuring ROI and productivity gains",
        "Staying current with rapidly evolving AI tools"
      ],
      project: "Create your AI implementation plan",
      duration: "Self-paced coursework + 90-min office hours",
      deliverables: ["Implementation roadmap", "Training materials"]
    }
  ];

  const frameworkSteps = [
    {
      step: "Phase 1: Foundation",
      name: "Weeks 1-2: AI Fundamentals",
      description: "Build a solid foundation in AI tools, prompt engineering, and best practices. Master ChatGPT and Claude for daily workflows.",
      tools: ["ChatGPT", "Claude", "RISEN framework"],
      outcome: "AI literacy and confidence"
    },
    {
      step: "Phase 2: Application",
      name: "Weeks 3-4: Workflow Automation",
      description: "Apply AI to real work scenarios. Create custom AI assistants, automate tasks, and build content systems.",
      tools: ["Custom GPTs", "Claude Projects", "Templates"],
      outcome: "Working AI systems"
    },
    {
      step: "Phase 3: Mastery",
      name: "Weeks 5-6: Advanced Implementation",
      description: "Master research, analysis, and organizational rollout. Create sustainable AI practices and train others.",
      tools: ["Research frameworks", "Change management", "ROI tracking"],
      outcome: "AI transformation plan"
    }
  ];

  const perfectFor = {
    youWant: [
      "Master AI tools like ChatGPT and Claude",
      "Build practical AI workflows for your work",
      "Learn at your own pace with expert support",
      "Get hands-on help with implementation",
      "Transform how you work with AI",
      "Stay ahead in the rapidly evolving AI landscape"
    ],
    youNeed: [
      "Structured 6-week curriculum with clear outcomes",
      "Live weekly office hours for Q&A and troubleshooting",
      "Templates, prompts, and resources you can use immediately",
      "Hands-on projects that build real skills",
      "Expert guidance tailored to your use cases",
      "Lifetime access to course materials and updates"
    ]
  };

  const faqs = [
    {
      q: "Do I need any technical background?",
      a: "No! This program is designed for professionals with no coding experience. We focus on using AI tools like ChatGPT and Claude as a user, not building AI systems. If you can use a web browser, you can succeed in this program."
    },
    {
      q: "How much time does the program require?",
      a: "Plan for 3-5 hours per week: 1-2 hours for video coursework at your own pace, plus 90 minutes for the weekly live office hours. All sessions are recorded if you can't attend live."
    },
    {
      q: "What if I can't attend the live office hours?",
      a: "All office hours are recorded and available within 24 hours. You can also submit questions ahead of time, and we'll address them during the session. However, attending live is highly recommended for real-time troubleshooting."
    },
    {
      q: "What tools will I learn to use?",
      a: "You'll master ChatGPT (including GPT-4 and custom GPTs), Claude (including Projects and extended thinking), and learn frameworks for prompt engineering. We also cover when to use which tool for different scenarios."
    },
    {
      q: "Is there ongoing support after the 6 weeks?",
      a: "Yes! You get lifetime access to all course materials and updates. For continued weekly office hours and community support, you can optionally join our Ship AI program ($100/month) after completing the training."
    },
    {
      q: "What makes this different from other AI courses?",
      a: "Three things: (1) Live office hours for personalized help with YOUR specific use cases, (2) Practical, hands-on projects you can use immediately, (3) Focus on implementation, not just theory. You'll leave with working AI systems, not just knowledge."
    },
    {
      q: "Can I get a refund if it's not right for me?",
      a: "Yes. If you're not satisfied within the first 7 days, we'll provide a full refund—no questions asked. We want to make sure this program is the right fit for you."
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
      quote: "The course structure is logical and practical. It starts with market validation and carries you all the way through product development and go-to-market. Every step includes tools you can actually use.",
      author: null,
      title: "All-in-One Journey",
      link: null
    },
    {
      quote: "Todd and Stephen genuinely care about your progress. They're not just instructors, they're partners in your success. When I got stuck, they were always there with real solutions.",
      author: null,
      title: "Top-Tier Mentorship",
      link: null
    },
    {
      quote: "The atmosphere is inviting and safe, even for non-technical students. No one is judged for asking questions, and the instructors respond with patience and kindness every time. My fear that someone would steal my idea was gone immediately.",
      author: null,
      title: "Safe, Supportive, and Accessible",
      link: null
    }
  ];

  const headlineQuotes = [
    "Exactly the hands-on training I needed to create my AI product. You've covered it all from A to Z!",
    "Finally, a course that actually teaches you how to build an AI product, not just talk about it.",
    "AI Trade School provides access to real tools at every step, from concept to prototype to final product and marketing plan."
  ];

  const courseStructuredData = generateCourseStructuredData(
    "Ship AI Training Program - 6-Week AI Training",
    "Comprehensive 6-week training program teaching AI workflows, tools, and implementation. Includes structured coursework, live office hours, and hands-on projects. Master AI tools like Claude, ChatGPT, and modern AI workflows."
  );

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Ship AI Training Program - 6-Week AI Training"
        description="6-week comprehensive AI training program with coursework and live office hours. Learn AI workflows, tools, and implementation with hands-on support. Perfect for professionals seeking practical AI skills."
        keywords={['AI training program', 'AI course', 'AI workflows', 'Claude training', 'ChatGPT course', 'AI implementation', 'AI office hours', 'professional AI training', 'Ship AI']}
        image="https://technical-leaders.com/ai-in-ar.png"
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
              <span>6-Week Training Program • Rolling Enrollment</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Master AI Tools & Workflows
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 mt-2">
                In 6 Weeks with Expert Support
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Comprehensive training program combining structured coursework with live office hours for Q&A and implementation help. Learn practical AI workflows used by Fortune 100 companies—no coding required.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5 text-purple-500" />
                <span className="font-semibold">6 Weeks • Self-Paced Coursework</span>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5 text-purple-500" />
                <span className="font-semibold">Weekly Live Office Hours</span>
              </div>
            </div>

            <div className="flex justify-center items-center mb-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white text-lg px-8 py-6"
                onClick={() => {
                  trackClick('Ship AI Training Program - Hero CTA', {
                    location: 'hero_section',
                    destination: '#enroll',
                    cta_text: 'Start Training Today'
                  });
                  window.location.href = "#enroll";
                }}
              >
                Start Training Today
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              $2,500 • Coursework + Live Support + Course Materials
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            What's Included in the Program
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
            Your 6-Week Learning Path
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
            The 3-Phase Learning Framework
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            A structured approach from AI fundamentals to organizational implementation
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
              <p className="italic">"I went from academic overload to actionable progress in weeks."</p>
              <p className="hidden md:block">•</p>
              <p className="italic">"No fluff, no overwhelm, just clarity and execution."</p>
            </div>
          </div>
        </div>
      </section>

      <section id="enroll" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-500/10 to-pink-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Enroll in Ship AI Training Program
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            6-week comprehensive training program with coursework and live office hours
          </p>

          <Card className="p-8 shadow-lg hover:shadow-xl transition-all max-w-2xl mx-auto">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-700 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-bold mb-4">
                <Calendar className="w-4 h-4" />
                <span>Rolling Enrollment • Start Anytime</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Ship AI Training Program</h3>
              <div className="mb-4">
                <p className="text-5xl font-bold text-foreground mb-2">$2,500</p>
                <p className="text-lg text-muted-foreground">One-time payment</p>
              </div>
            </div>

            <div className="space-y-4 mb-8 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">6 weeks of comprehensive video coursework (self-paced)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">6 live 90-minute office hours sessions for Q&A and implementation help</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Hands-on projects: AI workflows, custom assistants, automation systems</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Master ChatGPT, Claude, and advanced AI tools</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Templates, prompts, and resources for immediate implementation</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Lifetime access to all course materials and future updates</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">7-day money-back guarantee—no questions asked</span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white text-lg px-8 py-6 w-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => {
                trackClick('Ship AI Training Program - Enrollment CTA', {
                  location: 'enrollment_section',
                  destination: 'https://buy.stripe.com/00w14n4f70g7aQ2dbCaMU0K',
                  cta_text: 'Enroll Now - $2,500',
                  price: '$2500'
                });
                window.location.href = "https://buy.stripe.com/00w14n4f70g7aQ2dbCaMU0K";
              }}
            >
              Enroll Now - $2,500
            </Button>

            <p className="text-sm text-muted-foreground mt-4">
              Start immediately • Access granted within 24 hours
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

      {/* Optional Ongoing Support Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <TrendingUp className="w-4 h-4" />
            <span>OPTIONAL ADD-ON</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Want Ongoing Support After Your Training?
          </h2>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Continue your AI journey with Ship AI—weekly office hours, community access, and ongoing training to stay ahead of the latest tools and workflows.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Users className="w-8 h-8 text-white mb-3 mx-auto" />
              <h3 className="font-semibold text-white mb-2">Weekly Office Hours</h3>
              <p className="text-white/80 text-sm">Live support every week for your questions and challenges</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Lightbulb className="w-8 h-8 text-white mb-3 mx-auto" />
              <h3 className="font-semibold text-white mb-2">Latest AI Tools</h3>
              <p className="text-white/80 text-sm">Stay current with new tools and workflows as AI evolves</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Award className="w-8 h-8 text-white mb-3 mx-auto" />
              <h3 className="font-semibold text-white mb-2">Community Access</h3>
              <p className="text-white/80 text-sm">Join 300+ practitioners sharing insights and best practices</p>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
            onClick={() => {
              trackClick('Ship AI Training Program - Ship AI CTA', {
                location: 'ongoing_support_section',
                destination: '/ship-ai',
                cta_text: 'Learn About Ship AI'
              });
              window.location.href = "/ship-ai";
            }}
          >
            Learn About Ship AI
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          <p className="text-white/80 text-sm mt-4">
            $100/month • Cancel anytime
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

export default ShipAITrainingProgram;
