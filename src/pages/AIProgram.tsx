import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Zap, Target, Users, Shield, BookOpen, Wrench, Calendar, MessageCircle, Clock, FileText, Lightbulb, ClipboardCheck, UserCheck } from "lucide-react";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import { trackConversion } from "@/utils/posthog";
import { useTrackScrollDepth } from "@/hooks/use-posthog";
import { generateCourseStructuredData, generateFAQStructuredData } from "@/utils/seo-helpers";

const AIProgram = () => {
  // Track scroll depth for engagement
  useTrackScrollDepth('AI Program Page');

  useEffect(() => {
    // Page view tracking is handled centrally in App.tsx
  }, []);

  const phases = [
    {
      number: 1,
      title: "Time Back & AI Foundations",
      duration: "First Few Days",
      description: "We'll run an AI Workflow Audit to find the hours you're losing each week. Then we'll rebuild your core workflows using AI so you get 5-10 hours back fast. It's the momentum boost that pays for the program before we hit the bigger project."
    },
    {
      number: 2,
      title: "Ship Your First AI Project",
      duration: "First Few Weeks",
      description: "Next, you'll build a simple, high-leverage AI tool for your role, team, or customers. It might be a decision helper, a summariser, a content engine, a workflow bot... whatever gives you the most leverage and usage. You'll walk away with something real that makes you look like the person who \"gets AI\" (with a viable path to monetize it)."
    },
    {
      number: 3,
      title: "AI-First Leadership & Adoption",
      duration: "Ongoing",
      description: "Once you've got the skills and the first project done, we'll shift the focus to adoption and repeatable systems. You'll stay up to speed with AI, lead with clarity instead of hype, and your team/customers will actually use the tools you bring them."
    }
  ];

  const whatYouGet = [
    {
      icon: BookOpen,
      title: "AI-First Training",
      description: "so you stay current on what matters instead of drowning in hype."
    },
    {
      icon: Calendar,
      title: "Weekly Office Hours + Implementation Sessions",
      description: "so you deliver your project instead of getting stuck and stay current on AI best practices."
    },
    {
      icon: FileText,
      title: "Done-for-You AI Skills & Prompts",
      description: "so you get results fast without reinventing anything."
    },
    {
      icon: Users,
      title: "Private Skool Community",
      description: "so you get support and answers between calls."
    }
  ];

  const aiFirstModules = [
    {
      title: "The AI Project Planner™",
      description: "HOW to scope AI projects that ROI on time without blowing budgets"
    },
    {
      title: "The AI Workspace™",
      description: "HOW to arrange your tools and data without leaking IP"
    },
    {
      title: "The Agent Prompt Library™",
      description: "HOW to get great AI outputs consistently across every function without fragmentation"
    },
    {
      title: "AI Fundamentals™",
      description: "HOW to think AI-First and confidently speak a shared language"
    },
    {
      title: "The AI Workflow™",
      description: "HOW to create better deliverables faster without manual work"
    },
    {
      title: "The AI Strategy Builder™",
      description: "HOW to right-size business strategy for AI without wasting resources"
    }
  ];

  // FAQ data for structured markup
  const faqData = [
    {
      question: "How long is the program?",
      answer: "Ship AI runs for 6 weeks. You'll get time back in the first 30 days, then ship your first AI tool in weeks 4-6, with ongoing support for adoption and leadership."
    },
    {
      question: "What if I don't love it?",
      answer: "Try it for 14 days. If you're not getting value, I'll refund you. No questions asked."
    },
    {
      question: "How much does it cost?",
      answer: "Your investment is $2,500 as a single payment or 6 weekly payments of $500."
    },
    {
      question: "Is this only for technical people?",
      answer: "No! This program is specifically designed for non-technical leaders. No code. No overwhelm. No more guessing which shiny tool actually matters."
    }
  ];

  // Generate structured data
  const courseStructuredData = generateCourseStructuredData(
    "Ship AI - Build Your First AI Tool in 6 Weeks",
    "6-week program for non-technical leaders to add 5-10 hours back into your week and ship your first AI-powered tool. No code. No overwhelm.",
    "$2500"
  );

  const faqStructuredData = generateFAQStructuredData(faqData);

  // Combine structured data
  const combinedStructuredData = [courseStructuredData, faqStructuredData];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Ship AI - Build Your First AI Tool in 6 Weeks"
        description="12 spots open. Add 5-10 hours back into your week and ship your first AI-powered tool in six weeks. No code. No overwhelm."
        keywords={['AI tools', 'AI productivity', 'AI for leaders', 'ship AI', 'AI adoption', 'business AI', 'AI automation', 'non-technical AI']}
        structuredData={combinedStructuredData}
      />

      {/* Top Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-semibold">
          <Zap className="w-4 h-4 fill-current" />
          <span>12 spots open this month</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-16 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <img
            src="/launch-bg.png"
            alt="Ship AI background"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Ship Your AI Project
                <span className="block text-foreground mt-2">
                  in 6 Weeks.
                </span>
              </h1>

              <Button
                className="bg-blue-800 hover:bg-blue-900 text-white text-lg px-8 py-6"
                onClick={() => {
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Started
              </Button>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center lg:justify-end">
              <img
                src="/ship-ai-sketch.jpeg"
                alt="Ship AI Program"
                className="w-full max-w-3xl rounded-2xl shadow-2xl shadow-orange-500/20"
              />
            </div>
          </div>

          {/* Goal Content */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
              This is for you if you...
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground leading-relaxed">
                  Want help delivering your own AI-first project in the next 30-60 days, without wasting time on trial-and-error or getting too technical
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground leading-relaxed">
                  Want to use the best AI tools and workflows beyond ChatGPT, Cursor, and Replit
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground leading-relaxed">
                  Need to deliver on deadlines faster without getting called out for "AI slop"
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground leading-relaxed">
                  Have a new idea or current project you're focused on delivering to customers or stakeholders
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            What it's like in our hands-on AI program:
          </h2>

          <div className="w-full max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/LyY-glR6P_8"
              title="Ship AI Program"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

        </div>
      </section>

      {/* Company Logos - Scrolling Carousel */}
      <section className="bg-white py-12 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500 mb-10">
            Members Come From
          </p>
        </div>
        <div className="relative">
          {/* Gradient masks for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling container */}
          <div className="flex animate-scroll hover:[animation-play-state:paused]">
            {/* First set of logos */}
            <div className="flex items-center gap-10 px-5 shrink-0">
              <img src="/vercel-logo.svg" alt="Vercel" className="h-8 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/LaunchDarkly-Logo.png" alt="LaunchDarkly" className="h-10 max-w-[120px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/fivetran-logo-blue-rgb.jpg" alt="Fivetran" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/gitlab.png" alt="GitLab" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/calendly.webp" alt="Calendly" className="h-8 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Amazon_logo.svg" alt="Amazon" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/nike.png" alt="Nike" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/netflix.png" alt="Netflix" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/dell.svg" alt="Dell" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Salesforce.com_logo.png" alt="Salesforce" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/redhat.webp" alt="Red Hat" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Peloton-logo.jpg" alt="Peloton" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/stryker-logo.svg" alt="Stryker" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/worldline-logo.avif" alt="Worldline" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/jb-hunt.png" alt="JB Hunt" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/LegitScript_Logo.png" alt="LegitScript" className="h-10 max-w-[110px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/cashapp.svg" alt="Cash App" className="h-16 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-10 px-5 shrink-0">
              <img src="/vercel-logo.svg" alt="Vercel" className="h-8 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/LaunchDarkly-Logo.png" alt="LaunchDarkly" className="h-10 max-w-[120px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/fivetran-logo-blue-rgb.jpg" alt="Fivetran" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/gitlab.png" alt="GitLab" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/calendly.webp" alt="Calendly" className="h-8 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Amazon_logo.svg" alt="Amazon" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/nike.png" alt="Nike" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/netflix.png" alt="Netflix" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/dell.svg" alt="Dell" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Salesforce.com_logo.png" alt="Salesforce" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/redhat.webp" alt="Red Hat" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Peloton-logo.jpg" alt="Peloton" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/stryker-logo.svg" alt="Stryker" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/worldline-logo.avif" alt="Worldline" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/jb-hunt.png" alt="JB Hunt" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/LegitScript_Logo.png" alt="LegitScript" className="h-10 max-w-[110px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/cashapp.svg" alt="Cash App" className="h-16 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-foreground/50 mt-4">and many other startups, SMBs, and non-profits</p>
      </section>

      {/* How It Works - Phases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            How it works:
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Three phases to take you from validated idea to shipping your first AI project
          </p>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 p-8 text-white relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: index === 0 ? 'url(/ai-in-ar.png)' : index === 1 ? 'url(/launch-bg.png)' : 'url(/scale-bg.png)',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/70 to-red-700/70"></div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 mb-4 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-3xl font-bold">{phase.number}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Phase {phase.number}: {phase.title}</h3>
                      <p className="text-sm font-semibold text-orange-200">{phase.duration}</p>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8 flex items-center">
                    <p className="text-lg text-muted-foreground leading-relaxed">{phase.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Here's what you get inside the Ship AI program:
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Everything you need to build and ship AI tools
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {whatYouGet.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              );
            })}
          </div>

          {/* AI-1st Modules */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              The AI-1st Training Modules
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiFirstModules.map((module, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-blue-600">
                  <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">{module.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{module.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="p-10 bg-gray-900 border-gray-800 text-center">
            <div className="inline-flex items-center gap-2 bg-green-900/30 text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              <span>14-day money-back guarantee</span>
            </div>
            <p className="text-5xl sm:text-6xl font-bold text-white mb-3">$2,500</p>
            <p className="text-xl text-gray-300 mb-8">Ship AI Program</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button
                className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-6 text-lg"
                onClick={() => {
                  trackConversion('Ship AI Purchase Clicked', {
                    location: 'next_steps_section',
                    price: 2500,
                    plan: 'single_payment'
                  });
                  window.location.href = "https://buy.stripe.com/00w14n4f70g7aQ2dbCaMU0K";
                }}
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 px-8 py-6 text-lg"
                onClick={() => {
                  trackConversion('Ship AI Strategy Session Clicked', {
                    location: 'next_steps_section'
                  });
                  window.location.href = "https://calendly.com/tech-leaders/ai-strategy";
                }}
              >
                Book a Strategy Session
              </Button>
            </div>

            <div className="flex items-center justify-center text-sm text-gray-400">
              <a
                href="https://buy.stripe.com/6oU7sL8vngf52jw4F6aMU0L"
                className="flex items-center gap-1.5 hover:text-orange-400 transition-colors"
                onClick={() => {
                  trackConversion('Ship AI Purchase Clicked', {
                    location: 'next_steps_section',
                    price: 3000,
                    plan: 'weekly_payments'
                  });
                }}
              >
                <span>💳</span>
                <span className="underline">$500/week payment plan available</span>
              </a>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AIProgram;
