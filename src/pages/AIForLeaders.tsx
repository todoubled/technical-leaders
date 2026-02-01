import Navigation from "@/components/Navigation";
import SalesFooter from "@/components/footers/SalesFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Sparkles, TrendingUp, Clock, Users, Award, Zap, AlertCircle, DollarSign, Shield, Target, Brain, Code2, Database, Wrench, GitBranch, ArrowRight, XCircle, Play } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import VideoModal from "@/components/VideoModal";
import SEO from "@/components/SEO";
import { generateCourseStructuredData } from "@/utils/seo-helpers";
import { trackClick } from "@/utils/posthog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const AIForLeaders = () => {
  const [searchParams] = useSearchParams();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoUrl = "https://youtu.be/VKetl72iSlk"; // Replace with actual video
  const [trainingVideoModalOpen, setTrainingVideoModalOpen] = useState(false);
  const [selectedTrainingVideo, setSelectedTrainingVideo] = useState<{ title: string; youtubeId: string; description: string } | null>(null);

  const trainingVideos = [
    {
      id: "ai-fundamentals",
      title: "AI-First Fundamentals",
      youtubeId: "zwPwsA5XAgw",
      description: "Learn the core principles of building effective AI workflows",
      thumbnail: `https://img.youtube.com/vi/zwPwsA5XAgw/maxresdefault.jpg`
    },
    {
      id: "ai-training-overview",
      title: "AI Training Overview",
      youtubeId: "J67fraMIIfQ",
      description: "See what you'll learn in our comprehensive AI training program",
      thumbnail: `https://img.youtube.com/vi/J67fraMIIfQ/maxresdefault.jpg`
    }
  ];

  const openTrainingVideoModal = (video: typeof trainingVideos[0]) => {
    setSelectedTrainingVideo(video);
    setTrainingVideoModalOpen(true);
    trackClick('Training Overview Video Opened', {
      video_title: video.title,
      video_id: video.youtubeId,
      location: 'training_overviews_section',
      page: 'ai-for-leaders'
    });
  };

  // Handle deeplink to auto-open video modal
  useEffect(() => {
    const videoParam = searchParams.get('video');
    if (videoParam) {
      const video = trainingVideos.find(v => v.id === videoParam);
      if (video) {
        openTrainingVideoModal(video);
      }
    }
  }, [searchParams]);

  const benefits = [
    {
      icon: Brain,
      title: "Prompt & Context Engineering",
      description: "Master the art of crafting prompts that deliver executive-quality insights and strategic analysis"
    },
    {
      icon: Database,
      title: "AI Tools for Enterprise Data",
      description: "Transform your company's data into actionable intelligence with cutting-edge AI workflows"
    },
    {
      icon: Wrench,
      title: "Build Without Code",
      description: "Create powerful AI prototypes and tools that solve real business problems - no developers needed"
    },
    {
      icon: GitBranch,
      title: "Change Management Excellence",
      description: "Navigate organizational resistance and drive AI adoption with proven change management frameworks tailored for tech teams"
    }
  ];

  const curriculum = [
    {
      week: "Module 1",
      title: "Executive Prompt Engineering Mastery",
      topics: [
        "Design prompts that produce board-ready analysis and reports",
        "Build context frameworks for complex strategic decisions",
        "Create reusable prompt templates for your leadership team"
      ]
    },
    {
      week: "Module 2",
      title: "Enterprise Data Intelligence",
      topics: [
        "Connect AI to your company's data sources securely",
        "Build automated reporting workflows that save days of work",
        "Transform unstructured data into strategic insights"
      ]
    },
    {
      week: "Module 3",
      title: "No-Code AI Tool Creation",
      topics: [
        "Build custom AI tools for your specific business needs",
        "Create prototypes to test ideas before engineering investment",
        "Deploy internal AI solutions without IT dependencies"
      ]
    },
    {
      week: "Module 4",
      title: "AI Strategy Implementation",
      topics: [
        "Develop your organization's AI playbook",
        "Train your team to leverage AI effectively",
        "Measure and communicate AI ROI to stakeholders"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "These AI tools have become integral to my daily work, streamlining processes and freeing up my time for more strategic contributions.",
      author: "Head of Business Analytics",
      title: "Fortune 500 Company"
    },
    {
      quote: "This program enabled me to develop something with no experience of coding, the power this gives me is mind blowing, I can build stuff I could have only dreamt about before.",
      author: "UX Design Director",
      title: "Technology Company"
    },
    {
      quote: "The program rewired how I think about solving day-to-day problems using AI. I walked away with real skills I use every day to work smarter and faster.",
      author: "Head of Product",
      title: "Enterprise Software Company"
    }
  ];


  const courseStructuredData = generateCourseStructuredData(
    "The AI Leader™ Program",
    "8 hours of live intensive AI training built on Anthropic's Agent Skills standard. AI SOS implementation playbook, Skill Spec templates, AI Leader™ certification, and 90-day implementation support."
  );

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="The AI Leader™ Program - Technical Leaders"
        description="8 hours of live intensive AI training built on Anthropic's Agent Skills standard. Get the AI SOS implementation playbook, Skill Spec templates, AI Leader™ certification, and 90-day implementation support. $2,500 per person."
        keywords={['AI for executives', 'AI for leaders', 'executive AI training', 'prompt engineering', 'enterprise AI', 'no-code AI tools', 'AI strategy']}
        structuredData={courseStructuredData}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/ai-in-ar.png"
            alt="AI for Leaders"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
              <Brain className="w-4 h-4" />
              <span>THE AI LEADER™ PROGRAM</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-muted-foreground mb-2">Build Executive-Level</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700">
                AI Literacy
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 leading-normal pb-1">
                Leverage Your Data
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-700">
                Drive Adoption
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              This custom-built program builds executive-level confidence and capability in AI without requiring any technical background. Move from AI observers to AI champions and power users.
            </p>

            <p className="text-lg font-semibold text-foreground mb-6">Investment: $2,500 per person</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => {
                  trackClick('AI For Leaders - Hero Enroll CTA', {
                    location: 'hero_section',
                    destination: 'https://buy.stripe.com/4gMeVdfXPgf5e2ec7yaMU0E',
                    cta_text: 'Enroll Now - $2,500'
                  });
                  window.location.href = "https://buy.stripe.com/4gMeVdfXPgf5e2ec7yaMU0E";
                }}
              >
                Enroll Now — $2,500
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-6"
                onClick={() => {
                  trackClick('AI For Leaders - Hero Strategy CTA', {
                    location: 'hero_section',
                    destination: 'https://calendly.com/tech-leaders/ai-strategy',
                    cta_text: 'Book Strategy Session'
                  });
                  window.location.href = "https://calendly.com/tech-leaders/ai-strategy";
                }}
              >
                Book Strategy Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Challenges Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Managers and Executives Today Face Key AI Challenges
            </h2>
            <p className="text-lg text-muted-foreground">
              These leadership gaps are why most AI initiatives fail
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-orange-500/20 bg-orange-500/5">
              <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Lack of Clarity</h3>
              <p className="text-muted-foreground">
                There is often confusion and uncertainty around the real-world applications of AI, how to implement it effectively, and what the true risks and benefits are. The learning curve can feel endless.
              </p>
            </Card>

            <Card className="p-6 border-red-500/20 bg-red-500/5">
              <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Risk of Falling Behind</h3>
              <p className="text-muted-foreground">
                As competitors increasingly leverage AI, there is a growing risk of being left behind with this rapid pace of innovation. The divide widens every day without a framework of first principles to stay ahead of the curve.
              </p>
            </Card>

            <Card className="p-6 border-yellow-500/20 bg-yellow-500/5">
              <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Opportunity Cost</h3>
              <p className="text-muted-foreground">
                The cost of not investing in AI literacy at the leadership level is significant, as organizations miss out on potential efficiency gains, competitive advantages, new business opportunities, and failed AI initiatives.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Why Now?
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Anthropic published the <strong className="text-foreground">Agent Skills specification as an open standard</strong> in December 2025 — and it was quickly adopted by OpenAI and soon Google.
            </p>
            <p>
              This is the new AI infrastructure, like when websites became essential in the 2000s or mobile in the 2010s.
            </p>
            <p>
              The leaders who master this standard first will define how AI works at their organizations. Everyone else will inherit their decisions or play catch-up.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border-l-4 border-blue-500 mt-8">
              <p className="text-blue-800 dark:text-blue-200 font-semibold text-xl mb-2">
                You can be the person your company turns to when they say "how do we actually make AI work?"
              </p>
              <p className="text-blue-700 dark:text-blue-300">
                Or you can be the one asking that question a year from now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="py-12 bg-white dark:bg-gray-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500 mb-10">
            Members Come From
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex animate-scroll hover:[animation-play-state:paused]">
            <div className="flex items-center gap-10 px-5 shrink-0">
              <img src="/netflix.png" alt="Netflix" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/stryker-logo.svg" alt="Stryker" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Amazon_logo.svg" alt="Amazon" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/calendly.webp" alt="Calendly" className="h-8 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/dell.svg" alt="Dell" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/LaunchDarkly-Logo.png" alt="LaunchDarkly" className="h-10 max-w-[120px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/redhat.webp" alt="Red Hat" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/cashapp.svg" alt="Cash App" className="h-16 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/gitlab.png" alt="GitLab" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Peloton-logo.jpg" alt="Peloton" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/vercel-logo.svg" alt="Vercel" className="h-8 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/nike.png" alt="Nike" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/fivetran-logo-blue-rgb.jpg" alt="Fivetran" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Salesforce.com_logo.png" alt="Salesforce" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/worldline-logo.avif" alt="Worldline" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/jb-hunt.png" alt="JB Hunt" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/LegitScript_Logo.png" alt="LegitScript" className="h-10 max-w-[110px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            </div>
            <div className="flex items-center gap-10 px-5 shrink-0">
              <img src="/netflix.png" alt="Netflix" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/stryker-logo.svg" alt="Stryker" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Amazon_logo.svg" alt="Amazon" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/calendly.webp" alt="Calendly" className="h-8 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/dell.svg" alt="Dell" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/LaunchDarkly-Logo.png" alt="LaunchDarkly" className="h-10 max-w-[120px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/redhat.webp" alt="Red Hat" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/cashapp.svg" alt="Cash App" className="h-16 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/gitlab.png" alt="GitLab" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Peloton-logo.jpg" alt="Peloton" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/vercel-logo.svg" alt="Vercel" className="h-8 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/nike.png" alt="Nike" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/fivetran-logo-blue-rgb.jpg" alt="Fivetran" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/Salesforce.com_logo.png" alt="Salesforce" className="h-12 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/worldline-logo.avif" alt="Worldline" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/jb-hunt.png" alt="JB Hunt" className="h-10 max-w-[100px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/LegitScript_Logo.png" alt="LegitScript" className="h-10 max-w-[110px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            </div>
          </div>
        </div>
      </section>

      {/* Training Overviews Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              See Our Training in Action
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Preview some of our core AI concepts. These are summarized lessons from our live weekly training program, condensed to show you the depth and practicality of what you'll learn.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {trainingVideos.map((video) => (
              <Card
                key={video.youtubeId}
                className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => openTrainingVideoModal(video)}
              >
                <div className="relative aspect-video">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-blue-600 group-hover:bg-blue-700 group-hover:scale-110 transition-all flex items-center justify-center shadow-xl">
                      <Play className="w-10 h-10 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {video.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Enrollment Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              The AI Leader™ Program Is Open
            </h2>
            <p className="text-lg text-muted-foreground">
              8 hours of live intensive training — not recorded courses, real-time and interactive
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-shadow relative border-2 border-blue-200 dark:border-blue-700">
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-sm">
                ENROLL NOW
              </div>
              <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Individual Enrollment</h3>
              <p className="text-3xl font-bold text-foreground mb-4">$2,500 <span className="text-base font-normal text-muted-foreground">per person</span></p>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="text-foreground">8 hours of live intensive training</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="text-foreground">Complete AI SOS implementation playbook</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="text-foreground">Skill Spec templates + examples library</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="text-foreground">AI Leader™ certification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="text-foreground">90-day implementation support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="text-foreground">Lifetime methodology updates</span>
                </li>
              </ul>

              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold shadow-lg"
                onClick={() => {
                  trackClick('AI For Leaders - Individual Training', {
                    location: 'enrollment_section',
                    destination: 'https://buy.stripe.com/4gMeVdfXPgf5e2ec7yaMU0E',
                    cta_text: 'Enroll Now - $2,500',
                    price: '$2500'
                  });
                  window.location.href = "https://buy.stripe.com/4gMeVdfXPgf5e2ec7yaMU0E";
                }}
              >
                Enroll Now — $2,500
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-purple-600 to-pink-700 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Enterprise Teams</h3>
              <p className="text-3xl font-bold text-foreground mb-4">$50,000 <span className="text-base font-normal text-muted-foreground">up to 30 leaders</span></p>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="text-foreground">Everything in individual enrollment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="text-foreground">Customized to your industry and challenges</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="text-foreground">On-site or virtual delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="text-foreground">Executive debrief session</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="text-foreground">Custom AI tools built live for your org</span>
                </li>
              </ul>

              <Button
                size="lg"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-lg"
                onClick={() => {
                  trackClick('AI For Leaders - Organization Training', {
                    location: 'enrollment_section',
                    destination: 'https://calendly.com/tech-leaders/ai-strategy',
                    cta_text: 'Book Discovery Call',
                    price: '$50000'
                  });
                  window.location.href = "https://calendly.com/tech-leaders/ai-strategy";
                }}
              >
                Book Discovery Call
              </Button>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                100% tailored to your organization
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            From AI Curious to AI Champion
          </h2>
          <p className="text-center text-muted-foreground mb-8 text-lg">
            Our training process moves your organization from Education to Adoption
          </p>

          {/* 5-Step Methodology */}
          <div className="mb-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-background">How It Works: 5-Step Methodology</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold text-background mb-2">Education</h4>
                <p className="text-sm text-muted-foreground">Business Opportunities, AI Capabilities, Research Insights, Cutting-Edge Use Cases</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold text-background mb-2">Strategy</h4>
                <p className="text-sm text-muted-foreground">Leverage IP, Market Trends, Define Objectives, Gap Analysis, De-Risk Ethical & Brand Concerns</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold text-background mb-2">Roadmap</h4>
                <p className="text-sm text-muted-foreground">Define Proof-of-Concept, Selection Criteria, Resource Allocation, Milestones and Deadlines</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h4 className="font-semibold text-background mb-2">Iteration</h4>
                <p className="text-sm text-muted-foreground">Feedback Loops, Agile Revisions, Scalability Assessment, Monitor, Measure, Assess Efficacy</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">5</span>
                </div>
                <h4 className="font-semibold text-background mb-2">Adoption</h4>
                <p className="text-sm text-muted-foreground">Change Management, Continuous Improvement, Business Impact, Organizational and Data-Driven Cultural Changes</p>
              </div>
            </div>
          </div>

          {/* AI ROI Framework Visual - Improved Version */}
          <div className="mb-12 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-10">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Master the Three Pillars of AI Transformation</h3>
              <p className="text-lg text-gray-700 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium">
                3 focused training modules that move you from failed initiatives to sustained adoption
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 mb-10">
              {/* Literacy Pillar */}
              <div className="text-center p-8 rounded-2xl bg-white dark:bg-gray-800 border-2 border-green-200 dark:border-green-800 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="mb-6">
                  <div className="inline-block w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-3 tracking-wide">LITERACY</h4>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-6 font-semibold">Module 1: Executive Prompt Engineering Mastery</p>
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 dark:text-green-400 font-bold text-lg mt-0.5">→</span>
                    <div>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">Design prompts that produce board-ready analysis</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 dark:text-green-400 font-bold text-lg mt-0.5">→</span>
                    <div>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">Build context frameworks for strategic decisions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 dark:text-green-400 font-bold text-lg mt-0.5">→</span>
                    <div>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">Create reusable prompt templates for your team</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                  <p className="text-sm font-semibold text-green-800 dark:text-green-200">Key Output: Each participant leaves with ideas for an AI use case to pilot</p>
                </div>
              </div>

              {/* Leverage Pillar */}
              <div className="text-center p-8 rounded-2xl bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="mb-6">
                  <div className="inline-block w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3 tracking-wide">LEVERAGE</h4>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-6 font-semibold">Module 2: Data Intelligence & Tool Creation</p>
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-lg mt-0.5">→</span>
                    <div>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">Connect AI to your company's data sources securely</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-lg mt-0.5">→</span>
                    <div>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">Build automated reporting workflows</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-lg mt-0.5">→</span>
                    <div>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">Create custom AI tools for your business needs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-lg mt-0.5">→</span>
                    <div>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">Deploy internal AI solutions without IT dependencies</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm font-semibold text-blue-800 dark:text-blue-200">Key Output: Each participant has a WIP project and change management plan</p>
                </div>
              </div>

              {/* Adoption Pillar */}
              <div className="text-center p-8 rounded-2xl bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="mb-6">
                  <div className="inline-block w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-3 tracking-wide">ADOPTION</h4>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-6 font-semibold">Module 3: AI Strategy Implementation</p>
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 dark:text-purple-400 font-bold text-lg mt-0.5">→</span>
                    <div>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">Develop your organization's AI playbook</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 dark:text-purple-400 font-bold text-lg mt-0.5">→</span>
                    <div>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">Train your team to leverage AI effectively</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 dark:text-purple-400 font-bold text-lg mt-0.5">→</span>
                    <div>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">Measure and communicate AI ROI to stakeholders</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 dark:text-purple-400 font-bold text-lg mt-0.5">→</span>
                    <div>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">Navigate organizational resistance with proven frameworks</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
                  <p className="text-sm font-semibold text-purple-800 dark:text-purple-200">Key Output: Each participant has a plan to build one working AI tool/workflow</p>
                </div>
              </div>
            </div>

          </div>

          {/* Program Timeline & Implementation Plan */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mt-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-background mb-4">
                Complete Timeline & Implementation Plan
              </h3>
              <p className="text-muted-foreground">
                Designed for executive schedules with maximum impact in minimum time
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-background mb-2">8 Hours Live Training</h4>
                <p className="text-sm text-muted-foreground">3 comprehensive modules, real-time and interactive</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-background mb-2">2-Hour Sessions</h4>
                <p className="text-sm text-muted-foreground">Executive-friendly format with recordings available</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-background mb-2">90-Day Support</h4>
                <p className="text-sm text-muted-foreground">Weekly office hours + async Q&A</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-4">What's Included</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700 dark:text-blue-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>8 hours of live intensive training</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Complete AI SOS implementation playbook</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Skill Spec templates + examples library</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>AI Leader™ certification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>90-day implementation support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Lifetime methodology updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* What You Get Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Here's Everything You Get
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            The AI Leader™ program is open. Investment: $2,500 per person.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Users, title: "8 Hours of Live Intensive Training", desc: "Not recorded courses — real-time, interactive sessions with expert faculty" },
              { icon: Database, title: "Complete AI SOS Implementation Playbook", desc: "The exact methodology built on Anthropic's Agent Skills standard" },
              { icon: Wrench, title: "Skill Spec Templates + Examples Library", desc: "Plug-and-play templates ready for your organization" },
              { icon: Award, title: "AI Leader™ Certification", desc: "For LinkedIn, resume, and credibility — demonstrate your AI leadership expertise" },
              { icon: Clock, title: "90-Day Implementation Support", desc: "Weekly office hours + async Q&A to ensure you succeed after training" },
              { icon: Zap, title: "Lifetime Methodology Updates", desc: "As the standard evolves, you stay current — no additional cost" }
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => {
                trackClick('AI For Leaders - What You Get Enroll CTA', {
                  location: 'what_you_get_section',
                  destination: 'https://buy.stripe.com/4gMeVdfXPgf5e2ec7yaMU0E',
                  cta_text: 'Enroll Now - $2,500'
                });
                window.location.href = "https://buy.stripe.com/4gMeVdfXPgf5e2ec7yaMU0E";
              }}
            >
              Enroll Now — $2,500
            </Button>
          </div>
        </div>
      </section>

      {/* ROI Math Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            The Math
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            The ROI case writes itself.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="p-6 text-center border-green-500/20 bg-green-500/5">
              <DollarSign className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <p className="text-3xl font-bold text-foreground mb-2">$15,600</p>
              <p className="text-muted-foreground text-sm">
                Annual productivity gain from <strong>one</strong> documented skill saving 5 hours/week (at $60/hr)
              </p>
            </Card>
            <Card className="p-6 text-center border-blue-500/20 bg-blue-500/5">
              <TrendingUp className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <p className="text-3xl font-bold text-foreground mb-2">6x ROI</p>
              <p className="text-muted-foreground text-sm">
                You only need <strong>one skill</strong> to hit 6x return on your $2,500 investment in year one
              </p>
            </Card>
            <Card className="p-6 text-center border-purple-500/20 bg-purple-500/5">
              <Target className="w-10 h-10 text-purple-600 mx-auto mb-4" />
              <p className="text-3xl font-bold text-foreground mb-2">40+</p>
              <p className="text-muted-foreground text-sm">
                Average number of skills our clients document in year one
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Anxiety and Change Management Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Overcoming AI Resistance & Building Confidence
            </h2>
            <p className="text-lg text-muted-foreground">
              Address the unique challenges of AI adoption in your organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6 border-amber-500/20 bg-amber-500/5">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-8 h-8 text-amber-600" />
                <h3 className="text-xl font-semibold text-foreground">AI Anxiety & "AI Shame"</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Many employees experience anxiety about AI replacing their jobs or feeling ashamed about not understanding AI technology.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Fear of job displacement</li>
                <li>• Feeling left behind by technology</li>
                <li>• Resistance to learning new tools</li>
                <li>• Imposter syndrome with AI</li>
              </ul>
            </Card>

            <Card className="p-6 border-green-500/20 bg-green-500/5">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-semibold text-foreground">Psychological Safety</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Our program builds psychological safety for AI experimentation using proven change management frameworks.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• ADKAR framework for organization-wide adoption</li>
                <li>• Communication strategies that build trust vs. fear</li>
                <li>• Managing resistance at every level</li>
                <li>• Building AI champions within teams</li>
              </ul>
            </Card>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
              Unique AI Change Management Approach
            </h4>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              Unlike traditional change management, AI adoption requires addressing both technical literacy and emotional resistance. Our program tackles both simultaneously with industry-specific frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Is This For You?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-green-500/20 bg-green-500/5">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Who This Is For
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Senior leaders (VP+, Directors, Founders)</li>
                <li>• Companies with 10–250 employees</li>
                <li>• People ready to implement, not just learn</li>
                <li>• Leaders who want to be THE AI person at their company</li>
              </ul>
            </Card>
            <Card className="p-6 border-red-500/20 bg-red-500/5">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-500" />
                Who This Is NOT For
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Companies under 5 employees</li>
                <li>• Anyone who just wants to "learn about AI"</li>
                <li>• People who won't commit to implementation</li>
                <li>• Those expecting magic without effort</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Executive Faculty Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Partnership Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/50 px-4 py-2 rounded-full text-sm text-muted-foreground">
              <span>In Partnership with</span>
              <a
                href="https://bottega8.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="/bottega8-logo.png"
                  alt="Bottega8 Logo"
                  className="h-6 object-contain"
                />
              </a>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Executive Faculty</h2>
            <p className="text-lg text-muted-foreground">
              Learn from industry leaders with decades of AI/ML and leadership experience
            </p>
          </div>

          <div className="flex flex-col gap-12 max-w-4xl mx-auto">
            {/* Nick Talwar */}
            <Card>
              <CardContent className="p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn.prod.website-files.com/64a434b6a610d6a7db0f40aa/663bd5cdd09b8993855c88cf_1685473230400.jpeg"
                    alt="Nick Talwar"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Nick Talwar</h3>
                  <p className="text-sm text-primary font-medium mb-3">Ex-Microsoft Technical Leader, CTO & Partner at Bottega8, Startup & VC Advisor</p>
                  <p className="text-muted-foreground">
                    Nick is an AI and Machine Learning leader with 14+ years of experience as a product and engineering executive. His foundation in AI comes from studying Neural Networks through a Boeing and DARPA joint research grant, which received an engineering capstone award from his alma mater, Duke University.
                    <br /><br />
                    Starting at Microsoft in Search and Recommendations, he went on to serve as CTO at Bottega, building zero-to-one solutions for leading enterprises like Square and Disney, and NIH-funded, TED-supported SleepSpace. In these leadership roles, Nick helped build and lead the implementation of novel ML and data-driven engineering solutions.
                    <br /><br />
                    He now guides VCs and Boards on AI strategy and implementation for their late-stage portfolio companies. His 5-Step AI Playbook for Executives forms the foundation of this program.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Matt Kirk */}
            <Card>
              <CardContent className="p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn.prod.website-files.com/64a434b6a610d6a7db0f40aa/663bd5b0e4d18693800c1108_1673984243092.jpeg"
                    alt="Matt Kirk"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Matt Kirk</h3>
                  <p className="text-sm text-primary font-medium mb-3">Head of AI at AugmentAI, Head of AI at Zeitworks, O'Reilly author of Thoughtful Machine Learning</p>
                  <p className="text-muted-foreground">
                    Matt is a hands-on engineering leader in AI and Machine Learning. His experience includes leading AI teams at AugmentAI and Zeitworks, founding his own venture (Modulus7), and authoring the acclaimed O'Reilly book Thoughtful Machine Learning.
                    <br /><br />
                    Matt has a 15+ year track record of success in AI and Machine Learning. From building data models and ML systems to leading projects that unlock data potential with AI, he consistently drives business impact as a seasoned engineering executive. As a hands-on software engineer, he keeps abreast with the latest in AI through building at AugmentAI as well as leading and mentoring software engineering teams.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Amelia Leigner */}
            <Card>
              <CardContent className="p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="flex-shrink-0">
                  <img
                    src="/amelia-leigner.png"
                    alt="Amelia Leigner"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Amelia Leigner</h3>
                  <p className="text-sm text-primary font-medium mb-3">Fractional CMO & CPO, Head of Product at Bottega8, Startup Growth Strategist</p>
                  <p className="text-muted-foreground">
                    Amelia is a product and marketing executive with nearly a decade of experience helping early-stage startups and AI-driven companies launch and scale. She currently serves as Head of Product, Growth at Bottega8 and as Fractional CMO for Tech Leaders, where she drives AI product adoption and builds scalable growth strategies.
                    <br /><br />
                    Previously, she was Fractional CPO at SeekInvest, where she shaped product vision and go-to-market strategy for a fintech platform serving financial advisors. She also founded Amazon Amelia LLC, a consulting practice supporting Amazon sellers with marketing and business development.
                    <br /><br />
                    She now partners with founders and executives to align product and marketing, turning growth goals into measurable outcomes through frameworks for founder-led sales, AI-powered growth, and market positioning.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Todd Larsen */}
            <Card>
              <CardContent className="p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn.prod.website-files.com/64a434b6a610d6a7db0f40aa/64a97ef0410ff2068560b25d_todd.png"
                    alt="Todd Larsen"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Todd Larsen</h3>
                  <p className="text-sm text-primary font-medium mb-3">CEO at TechLeaders, CTO at AcreHedge, former Groupon, founding team at Digit.co (sold to OPRT)</p>
                  <p className="text-muted-foreground">
                    As a former Global Platform Engineer at Groupon, Founding Engineer at Digit, and current CEO of Technical Leaders, Todd has 15+ years of experience building and scaling products in startup mode and at-scale.
                    <br /><br />
                    From managing high performance teams to shipping solutions that customers love, Todd focuses on moving fast to create a positive impact on the world with technology. His expertise on change management and building strong technical teams has been instrumental for executives navigating AI transformation.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Stephen Bates */}
            <Card>
              <CardContent className="p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn.prod.website-files.com/64a434b6a610d6a7db0f40aa/64a97ef1944d79396cb11126_stephen.png"
                    alt="Stephen Bates"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Stephen Bates</h3>
                  <p className="text-sm text-primary font-medium mb-3">Co-Founder at Technical Leaders, Executive Coach & Leadership Consultant</p>
                  <p className="text-muted-foreground">
                    Stephen brings a practical and pragmatic approach to leadership coaching and corporate training, with over 25 years of experience transforming technical teams and their leaders.
                    <br /><br />
                    As Co-Founder of Technical Leaders, Stephen specializes in helping executives navigate the intersection of technology and business strategy. His extensive background in corporate training and leadership development enables him to guide C-suite leaders through AI adoption challenges, organizational change management, and the development of high-performing technical teams. His methodology focuses on practical, implementable strategies that deliver immediate business impact.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Executive Questions Answered
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How is this different from generic AI training?",
                a: "This is specifically designed for senior executives. We focus on strategic implementation, enterprise-scale solutions, and building tools that solve million-dollar problems - not just basic ChatGPT usage."
              },
              {
                q: "What if I'm not technical?",
                a: "Perfect. This program is designed for business leaders, not engineers. Everything is taught in business terms with practical applications you can implement immediately."
              },
              {
                q: "How much time commitment is required?",
                a: "8 hours of live intensive training delivered across focused sessions, plus 90 days of weekly office hours and async Q&A. Designed for executive schedules."
              },
              {
                q: "Can my leadership team join together?",
                a: "Yes, we offer team enrollment with custom workshops for your specific industry and challenges. Contact us for enterprise pricing."
              },
              {
                q: "Is this confidential?",
                a: "Absolutely. All sessions are under NDA. You can discuss your actual business challenges and get specific solutions without concerns about confidentiality."
              },
              {
                q: "What if our AI initiatives have failed before?",
                a: "Perfect - that's exactly why this program exists. We'll analyze what went wrong, address the specific leadership gaps that caused the failures, and give you a proven framework to succeed."
              },
              {
                q: "Do you work with our specific industry?",
                a: "Yes. Every program is 100% tailored to your organization's specific industry, challenges, and goals. We don't do generic training - everything is customized to your context."
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600/10 to-indigo-700/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Get Your Personalized AI Implementation Plan
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mt-2">
              In Just 30 Minutes
            </span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8">
            On your strategy call, we'll analyze your specific challenges and design a custom program that delivers ROI in weeks, not months. <strong className="text-foreground">100% confidential and no-obligation.</strong>
          </p>

          <div className="bg-card p-8 rounded-lg shadow-lg mb-8 border-2 border-blue-500/20">
            <div className="mb-6">
              <p className="text-lg font-semibold text-foreground mb-2">Your Free Strategy Call Includes:</p>
              <ul className="text-left inline-block space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>AI readiness assessment for your organization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>3 quick wins you can implement immediately</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Custom program recommendation & timeline</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Analysis of your past AI initiative failures (if any)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Industry-specific use case recommendations</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white text-lg px-12 py-6 shadow-lg hover:shadow-xl transition-all"
                onClick={() => {
                  trackClick('AI For Leaders - Final Enroll CTA', {
                    location: 'final_cta_section',
                    destination: 'https://buy.stripe.com/4gMeVdfXPgf5e2ec7yaMU0E',
                    cta_text: 'Enroll Now - $2,500'
                  });
                  window.location.href = "https://buy.stripe.com/4gMeVdfXPgf5e2ec7yaMU0E";
                }}
              >
                Enroll Now — $2,500
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-12 py-6"
                onClick={() => {
                  trackClick('AI For Leaders - Final Strategy CTA', {
                    location: 'final_cta_section',
                    destination: 'https://calendly.com/tech-leaders/ai-strategy',
                    cta_text: 'Book Strategy Session'
                  });
                  window.location.href = "https://calendly.com/tech-leaders/ai-strategy";
                }}
              >
                Book Strategy Session
              </Button>
            </div>
          </div>

          <p className="text-muted-foreground">
            Questions? Direct line to our founder:{" "}
            <a href="mailto:todd@technical-leaders.com" className="text-blue-600 hover:underline">
              todd@technical-leaders.com
            </a>
          </p>
        </div>
      </section>

      <SalesFooter
        headline="Get Your Personalized AI Implementation Plan In Just 30 Minutes"
        subheadline="100% confidential and no-obligation strategy call"
        primaryCTA={{
          text: "Book Strategy Session",
          url: "https://calendly.com/tech-leaders/ai-strategy"
        }}
        socialProof="Trusted by executives at Netflix, Nike, GitLab, and more"
        guarantee={{
          text: "Free AI Readiness Assessment",
          description: "On your call: AI readiness assessment, 3 quick wins you can implement immediately, custom program recommendation, and analysis of past AI initiative failures."
        }}
        trackingContext="AI For Leaders"
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={videoUrl}
      />

      {/* Training Video Modal */}
      <Dialog open={trainingVideoModalOpen} onOpenChange={setTrainingVideoModalOpen}>
        <DialogContent className="max-w-4xl p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-2xl">{selectedTrainingVideo?.title}</DialogTitle>
            <DialogDescription>{selectedTrainingVideo?.description}</DialogDescription>
          </DialogHeader>
          <div className="aspect-video w-full">
            {selectedTrainingVideo && (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedTrainingVideo.youtubeId}?autoplay=1`}
                title={selectedTrainingVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-b-lg"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AIForLeaders;