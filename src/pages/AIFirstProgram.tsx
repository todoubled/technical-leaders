import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, BookOpen, Brain, XCircle, Play } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import SEO from "@/components/SEO";
import { trackConversion, trackClick } from "@/utils/posthog";
import { useTrackScrollDepth } from "@/hooks/use-posthog";
import { generateCourseStructuredData, generateFAQStructuredData } from "@/utils/seo-helpers";

const AIFirstProgram = () => {
  // Track scroll depth for engagement
  useTrackScrollDepth('AI First Program Page');
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [trainingVideoModalOpen, setTrainingVideoModalOpen] = useState(false);
  const [selectedTrainingVideo, setSelectedTrainingVideo] = useState<{ title: string; youtubeId: string; description: string } | null>(null);
  const [isPlaybookModalOpen, setIsPlaybookModalOpen] = useState(false);

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
      page: 'ai-first-program'
    });
  };

  useEffect(() => {
    // Page view tracking is handled centrally in App.tsx
  }, []);

  // FAQ data for structured markup
  const faqData = [
    {
      question: "How long is the program?",
      answer: "AI-First runs for 6 weeks, with output acceleration continuing through day 60. Phase 1 covers weeks 1-4, Phase 2 covers weeks 4-6, and Phase 3 extends through days 30-60."
    },
    {
      question: "What if I don't love it?",
      answer: "Love it or leave it after the first session with a full refund, no questions asked."
    },
    {
      question: "How much does it cost?",
      answer: "Your investment is $50k per 30-person cohort ($25k deposit + $25k balance when the cohort kicks off)."
    },
    {
      question: "Who is this for?",
      answer: "This is perfect for mid-sized companies in regulated spaces with cross-functional teams that need clear workflows and want faster output without adding headcount."
    }
  ];

  // Generate structured data
  const courseStructuredData = generateCourseStructuredData(
    "AI-First - Private Cohort Training for Teams",
    "6-week program to upskill your entire team to AI-proficiency so they produce AI-assisted work twice as fast within 60 days.",
    "$50000"
  );

  const faqStructuredData = generateFAQStructuredData(faqData);

  // Combine structured data
  const combinedStructuredData = [courseStructuredData, faqStructuredData];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI-First - Private Cohort Training for Teams"
        description="Upskill your entire team to AI-proficiency within 6 weeks so they produce AI-assisted work twice as fast within 60 days. Private cohort for 30 leaders and operators."
        keywords={['AI training', 'AI proficiency', 'team AI training', 'AI-first', 'AI adoption', 'enterprise AI', 'AI workflows', 'corporate AI training']}
        structuredData={combinedStructuredData}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <img
            src="/launch-bg.png"
            alt="AI-First background"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2.5 rounded-full text-sm font-bold mb-6 shadow-lg shadow-orange-500/40 border border-orange-400/50">
                <Users className="w-4 h-4 fill-current" />
                <span>Private, Customized 30-person Cohorts</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                AI-First Training
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 mt-2">
                  for Teams
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-muted-foreground mb-4 leading-relaxed">
                We're holding dates for 2 organizational cohorts this month who are looking to become AI-First.
              </p>

              <p className="text-lg font-semibold text-foreground mb-2">
                The goal is simple:
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Upskill your entire organization cross-functionally to AI-First competency within 6 weeks so they do better work faster without risking compliance or intellectual property leaks.
              </p>

              <Button
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-8 py-6"
                onClick={() => {
                  trackConversion('AI First Hero CTA Clicked', {
                    location: 'hero_section',
                    price: 50000,
                    plan: 'cohort'
                  });
                  window.location.href = "https://calendly.com/tech-leaders/ai-strategy";
                }}
              >
                Book a Call to Hold Your Date
              </Button>
            </div>

            {/* Right Video */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="w-full max-w-lg aspect-video rounded-xl overflow-hidden shadow-2xl shadow-orange-500/20">
                <iframe
                  src="https://www.youtube.com/embed/LyY-glR6P_8"
                  title="AI-First Program Testimonial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Challenges Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Senior Leaders and Organizations Today Face Key AI Challenges
            </h2>
            <p className="text-lg text-muted-foreground">
              These mistakes are why most AI initiatives fail
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

      {/* Company Logos */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500 mb-8">
            Training Leaders From Companies Like
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <img src="/netflix.png" alt="Netflix" className="h-10 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="/nike.png" alt="Nike" className="h-10 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="/cashapp.svg" alt="Cash App" className="h-16 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="/redhat.webp" alt="Red Hat" className="h-10 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="/calendly.webp" alt="Calendly" className="h-6 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="/gitlab.png" alt="GitLab" className="h-10 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-10">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Learn the 3 Pillars of AI-First Transformation</h3>
              <p className="text-lg text-gray-700 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium">
                3 focused training sessions that move you from failed initiatives to sustained adoption
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {/* AI Fundamentals Pillar */}
              <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 border-2 border-orange-200 dark:border-orange-800 hover:shadow-lg transition-all hover:-translate-y-1">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">AI Fundamentals for Leaders and SMEs</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                  Demystifying AI for compliance and risk assessment leaders. Identifying high-ROI opportunities specific to your organization's mission.
                </p>
                <ol className="space-y-3 text-left list-decimal list-inside">
                  <li className="text-sm text-gray-700 dark:text-gray-300">AI-first thinking for non-technical people to understand real capabilities vs. hype</li>
                  <li className="text-sm text-gray-700 dark:text-gray-300">Identifying high-ROI opportunities in your organization</li>
                  <li className="text-sm text-gray-700 dark:text-gray-300">Your AI evaluation framework</li>
                  <li className="text-sm text-gray-700 dark:text-gray-300">Proof-of-Concept Definition</li>
                  <li className="text-sm text-gray-700 dark:text-gray-300">Security and governance considerations</li>
                </ol>
                <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
                  <p className="text-sm"><span className="font-bold text-orange-800 dark:text-orange-200">Key Output:</span> <span className="text-gray-700 dark:text-gray-300">Each participant leaves with ideas for an AI use case to pilot</span></p>
                </div>
              </div>

              {/* No/Low-Code Pillar */}
              <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 border-2 border-orange-200 dark:border-orange-800 hover:shadow-lg transition-all hover:-translate-y-1">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">No/Low-Code Agentic AI Tools & Workflows</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                  Create automated compliance workflows using no-code platforms. Build AI-powered risk assessment tools your team can use immediately.
                </p>
                <ol className="space-y-3 text-left list-decimal list-inside">
                  <li className="text-sm text-gray-700 dark:text-gray-300">Setting up executive AI assistants and agents</li>
                  <li className="text-sm text-gray-700 dark:text-gray-300">Building insight and decision support systems</li>
                  <li className="text-sm text-gray-700 dark:text-gray-300">No-code AI platforms ("vibe coding")</li>
                  <li className="text-sm text-gray-700 dark:text-gray-300">Advanced Prompt and Context Engineering</li>
                  <li className="text-sm text-gray-700 dark:text-gray-300">Automating workflows for planning, analysis, and general productivity</li>
                </ol>
                <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
                  <p className="text-sm"><span className="font-bold text-orange-800 dark:text-orange-200">Key Output:</span> <span className="text-gray-700 dark:text-gray-300">Each participant has a plan to build one working AI tool/workflow</span></p>
                </div>
              </div>

              {/* AI Adoption Pillar */}
              <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 border-2 border-orange-200 dark:border-orange-800 hover:shadow-lg transition-all hover:-translate-y-1">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">AI Adoption and Change Management</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                  Address unique challenges of AI in compliance organizations. Build trust while maintaining security and accuracy standards.
                </p>
                <ol className="space-y-3 text-left list-decimal list-inside">
                  <li className="text-sm text-gray-700 dark:text-gray-300">Understanding employee AI anxiety and "AI shame"</li>
                  <li className="text-sm text-gray-700 dark:text-gray-300">ADKAR framework for organization-wide AI adoption</li>
                  <li className="text-sm text-gray-700 dark:text-gray-300">Building psychological safety for AI experimentation</li>
                  <li className="text-sm text-gray-700 dark:text-gray-300">Communication strategies that build trust vs. fear</li>
                  <li className="text-sm text-gray-700 dark:text-gray-300">Managing resistance at every level</li>
                </ol>
                <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
                  <p className="text-sm"><span className="font-bold text-orange-800 dark:text-orange-200">Key Output:</span> <span className="text-gray-700 dark:text-gray-300">Each participant has a WIP project and change management plan</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Overviews Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Sample Our AI-First Training
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Preview some of our core AI concepts below. These are summarized lessons from our live weekly training program, condensed to show you the depth and practicality of what you'll learn.
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
                    <div className="w-20 h-20 rounded-full bg-orange-500 group-hover:bg-orange-600 group-hover:scale-110 transition-all flex items-center justify-center shadow-xl">
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

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-6 text-lg"
              onClick={() => {
                setIsPlaybookModalOpen(true);
                trackClick('AI-1ST Playbook Modal Opened', {
                  location: 'sample_training_section',
                  page: 'ai-first-program'
                });
              }}
            >
              <BookOpen className="w-5 h-5 mr-2" />
              See the AI-1ST Playbook Overview
            </Button>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Your investment:
          </h2>

          <Card className="p-8 text-center max-w-xl mx-auto">
            <p className="text-5xl font-bold text-foreground mb-4">$50k</p>
            <p className="text-lg text-muted-foreground mb-6">per 30-person cohort</p>
            <p className="text-muted-foreground">
              $25k deposit + $25k balance when the cohort kicks off
            </p>
          </Card>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-500/10 to-red-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Here's what to do next.
          </h2>

          <div className="mb-12 text-left max-w-2xl mx-auto">
            <div className="mb-6">
              <p className="text-lg text-foreground font-semibold mb-2">Step 1.</p>
              <p className="text-muted-foreground">Book a call to hold a cohort date.</p>
            </div>

            <div className="mb-6">
              <p className="text-lg text-foreground font-semibold mb-2">Step 2.</p>
              <p className="text-muted-foreground">We'll review your goals to confirm fit and walk through the logistics.</p>
            </div>

            <div className="mb-6">
              <p className="text-lg text-foreground font-semibold mb-2">Step 3.</p>
              <p className="text-muted-foreground">Your team gets immediate access and we schedule the first session.</p>
            </div>
          </div>

          <Button
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-6 text-lg"
            onClick={() => {
              trackConversion('AI First Contact Clicked', {
                location: 'next_steps_section',
                price: 50000,
                plan: 'cohort'
              });
              window.location.href = "https://calendly.com/tech-leaders/ai-strategy";
            }}
          >
            Book a Call to Hold Your Date
          </Button>

          <Card className="p-6 bg-gradient-to-br from-orange-500/5 to-red-600/5 border-orange-200 dark:border-orange-900 mt-12">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">P.S.</strong> As soon as you hold your date, I'll send you the AI-First Starter Pack so your team can start getting quick wins before the first session.
            </p>
          </Card>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
        <DialogContent className="max-w-7xl p-2 bg-white dark:bg-gray-900">
          <img
            src="/ai-first-playbook.png"
            alt="The AI-1st Playbook - A framework focusing on Literacy, Leverage, and Leadership to avoid Fear, Uncertainty, Doubt, Hype and Shiny Objects that lead to Failed AI Adoption"
            className="w-full h-auto"
          />
        </DialogContent>
      </Dialog>

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

      {/* AI-1ST Playbook Modal */}
      <Dialog open={isPlaybookModalOpen} onOpenChange={setIsPlaybookModalOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
              <Brain className="w-4 h-4" />
              <span>The AI-1ST PLAYBOOK</span>
            </div>
            <DialogTitle className="text-3xl font-bold">Our Curriculum & Support</DialogTitle>
            <DialogDescription className="text-lg">
              The AI-1st Playbook helps you avoid the common pitfalls of AI adoption and transform into an AI-First individual and organization
            </DialogDescription>
          </DialogHeader>

          <div className="grid lg:grid-cols-2 gap-8 items-start mt-6">
            <div className="space-y-6">
              <img
                src="/ai-first-playbook.png"
                alt="The AI-1st Playbook - A framework focusing on Literacy, Leverage, and Leadership to avoid Fear, Uncertainty, Doubt, Hype and Shiny Objects that lead to Failed AI Adoption"
                className="w-full h-auto rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => {
                  setIsPlaybookModalOpen(false);
                  setIsImageModalOpen(true);
                }}
              />

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Comprehensive Support</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full text-xs font-semibold text-blue-700 dark:text-blue-300 whitespace-nowrap mt-0.5">
                      Curriculum
                    </div>
                    <p className="text-sm text-muted-foreground">12 modules based on the AI-1st Playbook</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full text-xs font-semibold text-purple-700 dark:text-purple-300 whitespace-nowrap mt-0.5">
                      Community
                    </div>
                    <p className="text-sm text-muted-foreground">24/7 community support</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-full text-xs font-semibold text-orange-700 dark:text-orange-300 whitespace-nowrap mt-0.5">
                      Group Coaching
                    </div>
                    <p className="text-sm text-muted-foreground">Weekly group coaching calls to get you unblocked</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full text-xs font-semibold text-green-700 dark:text-green-300 whitespace-nowrap mt-0.5">
                      Office Hours
                    </div>
                    <p className="text-sm text-muted-foreground">Weekly Office Hours to keep you up to speed</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-pink-100 dark:bg-pink-900/30 px-3 py-1 rounded-full text-xs font-semibold text-pink-700 dark:text-pink-300 whitespace-nowrap mt-0.5">
                      Workshops & Hackathons
                    </div>
                    <p className="text-sm text-muted-foreground">Ad Hoc Workshops and Hackathons to implement and build</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">The Core Problems</h3>
                <p className="text-muted-foreground mb-3 text-sm">
                  Most AI adoption efforts fail because individuals and organizations get caught up in:
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Fear</p>
                      <p className="text-sm text-muted-foreground">About job security and career paths</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Uncertainty</p>
                      <p className="text-sm text-muted-foreground">About how to become AI-First</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Doubt</p>
                      <p className="text-sm text-muted-foreground">About which tools are best for the job</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Hype & Shiny Objects</p>
                      <p className="text-sm text-muted-foreground">Distractions that don't make an impact</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">The Solution: Three Pillars</h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                    <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-1">Literacy</h4>
                    <p className="text-muted-foreground text-sm">
                      Get up-to-speed and on the same page with AI Fundamentals and Practical AI skills to think AI-First and confidently speak a shared language
                    </p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                    <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-1">Leverage</h4>
                    <p className="text-muted-foreground text-sm">
                      Hands-on skills to lead by example with The AI Workspace, Agent Prompt Library, and AI Workflow to get consistent outputs across every function
                    </p>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                    <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-1">Leadership</h4>
                    <p className="text-muted-foreground text-sm">
                      Become AI-1st with the help of The AI/HI Org Chart, Feedback Loop, and AI Strategy Builder to incrementally redefine roles and improve KPIs over time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AIFirstProgram;
