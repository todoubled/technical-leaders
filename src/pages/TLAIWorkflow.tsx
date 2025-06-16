import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Star, Users, Sparkles, Brain, Rocket, MessageSquare, Bot, Calendar, Clock, Gift, FileText, Video, Phone } from "lucide-react";
import SEO from "@/components/SEO";
import { useState, useEffect } from "react";
import VideoModal from "@/components/VideoModal";

const TLAIWorkflow = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoUrl = "https://www.youtube.com/watch?v=YOUR_VIDEO_ID"; // Replace with actual video URL

  useEffect(() => {
    // Simple approach: inject script into the form container
    const formContainer = document.getElementById('kit-form-container');
    if (formContainer && !formContainer.querySelector('script')) {
      const script = document.createElement('script');
      script.async = true;
      script.setAttribute('data-uid', '48377e1fda');
      script.src = 'https://techleaders.kit.com/48377e1fda/index.js';
      formContainer.appendChild(script);
    }
  }, []);


  // Hero content - Replace with content from Notion
  const heroContent = {
    badge: "Free Workshop",
    headline: "The Tech Leader AI Workflow™ How to Easily Overdeliver Without ChatGPT",
    subheadline: "How I DOUBLED My Delivery in HALF the Time with a Simple, No-ChatGPT (or Cursor/Windsurf) AI Workflow",
    cta: "Register for the Free Workshop",
    ctaSecondary: "Watch Demo"
  };

  // Key benefits - Replace with content from Notion
  const keyBenefits = [
    {
      icon: Rocket,
      title: "AI Workflow",
      description: "A step-by-step framework to build your streamlined AI workflow and 10x your productivity"
    },
    {
      icon: Brain,
      title: "Prompting Guide",
      description: "Example prompts you can use instantly"
    },
    {
      icon: Users,
      title: "Live Demo",
      description: "Showing exactly how it works—no vague theory, just real tools and tactics"
    },
    {
      icon: Sparkles,
      title: "No Vague Theory",
      description: "Master cutting-edge AI tools before your competition"
    }
  ];


  // What's included - Replace with content from Notion
  const included = [
    {
      icon: Brain,
      title: "Core Strategy & Framework",
      description: "Master the fundamentals that drive real results",
      features: [
        "The No-ChatGPT Productivity Hack – How to beat deadlines without the usual AI tools",
        "My 3-Step Framework for Designing Your Own AI Workflow – Simple, scalable, and actionable",
        "The Time Multiplier Blueprint – Double your output in half the time"
      ]
    },
    {
      icon: Bot,
      title: "Practical Implementation",
      description: "Get hands-on with tools and techniques that work immediately",
      features: [
        "Real Example Prompts You Can Plug and Play – Skip the trial and error",
        "Live Demo – Watch the system in action so you can apply it immediately",
        "The Secret to Slashing Your Workload While Beating Deadlines"
      ]
    },
    {
      icon: Rocket,
      title: "Avoiding Common Pitfalls",
      description: "Learn what NOT to do and future-proof your approach",
      features: [
        "How to Eliminate the AI Overwhelm and Focus on What Works",
        "The \"Tool Trap\" to Avoid – Stop wasting hours testing tools and get a system that sticks",
        "How to Future-Proof Your Work in an AI-First World"
      ]
    }
  ];



  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="TL AI Workflow - Transform Your Tech Leadership with AI | Technical Leaders"
        description="Join the waitlist for the revolutionary AI-powered workflow system that helps technical leaders 10x their impact through intelligent automation."
        keywords={["AI workflow", "technical leadership", "AI automation", "engineering productivity", "tech leadership AI"]}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/ai-in-ar.png"
            alt="AI background"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            {heroContent.badge}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              {heroContent.headline}
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {heroContent.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <div id="kit-form-container" className="w-full max-w-md mx-auto"></div>
          </div>

          {/* Logistics Section - Integrated into Hero */}
          <Card className="p-8 bg-background/50 backdrop-blur border border-white/10 shadow-xl max-w-3xl mx-auto">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Workshop Details</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-3">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Format</h3>
                  <p className="text-muted-foreground">This is a LIVE, hands-on workshop</p>
                </div>
                <div className="space-y-2">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-3">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Date & Time</h3>
                  <p className="text-muted-foreground">June 25th at 11am CST</p>
                </div>
                <div className="space-y-2">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Investment</h3>
                  <p className="text-2xl font-bold text-primary">FREE</p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-primary/20">
                <p className="text-sm text-muted-foreground italic">
                  Spots are limited. Grab yours now and get the exact AI workflow that will double your output beyond the ChatGPT basics.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why This 90-Minute Workshop Will Help You Redesign Your Workflows
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Without Using ChatGPT, Cursor, or Windsurf
            </p>
          </div>

          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Most freelancers, consultants, and agency owners are stuck. They’re juggling client work, scrambling to meet deadlines, and losing sleep over keeping up with the rapid pace of AI innovation. Everyone’s talking about ChatGPT, Cursor, and Windsurf, but no one’s showing a clear, simple path that actually delivers results.
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The good news? There’s a better way—one that doubles your productivity, slashes wasted hours, and puts you firmly back in control of your business.
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In this workshop, you’ll get:
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyBenefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Here's What We'll Cover
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive system designed for immediate implementation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {included.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Gift className="h-4 w-4" />
              Exclusive Workshop Bonuses
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Plus, You'll Get These 4 FREE Bonuses
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to implement what you learn immediately
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Bonus #1: Workflow Map Template</h3>
                  <p className="text-muted-foreground">Instantly plan your AI workflow with this plug-and-play map.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Bonus #2: Prompt Swipe File</h3>
                  <p className="text-muted-foreground">15 proven example prompts you can copy and deploy today.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Video className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Bonus #3: Workshop Recording</h3>
                  <p className="text-muted-foreground">Lifetime access to the full session to rewatch anytime.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Bonus #4: Post-Workshop Quickstart Call</h3>
                  <p className="text-muted-foreground">A 20-minute 1:1 strategy session to personalize your new workflow and boost your results.</p>
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
            Ready to 10x Your Productivity?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Spots are limited. Grab yours now and get the exact AI workflow that will double your output beyond the ChatGPT basics.
          </p>
          <Button
            size="lg"
            className="text-lg px-8"
            onClick={() => {
              document.getElementById('kit-form-container')?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });
            }}
          >
            <Rocket className="mr-2 h-5 w-5" />
            Register Now
          </Button>
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

export default TLAIWorkflow;