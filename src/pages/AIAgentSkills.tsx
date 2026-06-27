import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import ContentFooter from "@/components/footers/ContentFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Rocket, Target, Users, ChevronRight, Copy, Check, Calendar, Video, MessageSquare, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import { trackEvent } from "@/utils/posthog";

const getNextWednesday = () => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  // Wednesday is day 3
  let daysUntilWednesday = (3 - dayOfWeek + 7) % 7;
  // If today is Wednesday, show next Wednesday
  if (daysUntilWednesday === 0) {
    daysUntilWednesday = 7;
  }
  const nextWednesday = new Date(now);
  nextWednesday.setDate(now.getDate() + daysUntilWednesday);
  return nextWednesday;
};

const formatEventDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};

const AIAgentSkills = () => {
  const [copied, setCopied] = useState(false);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const nextSessionDate = getNextWednesday();
  const formattedDate = formatEventDate(nextSessionDate);

  useEffect(() => {
    if (!formContainerRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://techleaders.kit.com/8273fe48f8/index.js';
    script.async = true;
    script.setAttribute('data-uid', '8273fe48f8');
    formContainerRef.current.appendChild(script);

    return () => {
      if (formContainerRef.current) {
        formContainerRef.current.innerHTML = '';
      }
    };
  }, []);

  // What a weekly session includes, written for a first-time free guest.
  // Mirrors the value framing on /ai-office-hours without the membership pitch.
  const sessionParts = [
    {
      icon: Video,
      title: "Live training on the latest AI tools",
      description: "Each week covers something current and useful with Claude, Claude Code, and the tools teams are actually using. This week is Agent Skills: how to build AI capabilities you can reuse."
    },
    {
      icon: MessageSquare,
      title: "Hands-on office hours and Q&A",
      description: "Bring your own work. Ask questions live, get unstuck, and watch real problems get solved on screen. You can build your first Skill during the session."
    },
    {
      icon: Users,
      title: "A community of 300+ builders",
      description: "Engineers, founders, product and ops people all applying AI to real work. Guests get a look at how the group shares wins and helps each other between sessions."
    }
  ];

  // What this week's session covers and what you leave with.
  const sessionTakeaways = [
    "How Agent Skills differ from prompts, projects, and MCP servers",
    "Building your first Skill from scratch, no coding required",
    "Using the skill-creator to generate Skills for you",
    "When to use personal Skills versus project Skills",
    "Real uses: document generation, data analysis, and reporting"
  ];

  const zoomRegistrationUrl = "https://us06web.zoom.us/meeting/register/yvD8bVRcSem9wRQkjO0cpQ#/registration";

  const handleCTA = (ctaName: string, location: string) => {
    trackEvent('AI Agent Skills CTA Clicked', {
      cta: ctaName,
      location: location
    });
    window.open(zoomRegistrationUrl, '_blank');
  };

  const scrollToForm = () => {
    formContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  // Soft, secondary path to the paid membership. Tracked separately from the
  // free-registration CTAs so it can be measured on its own.
  const handleMembershipClick = (location: string) => {
    trackEvent('AI Agent Skills Membership Clicked', {
      cta: 'office-hours-membership',
      location: location
    });
    window.location.href = '/ai-office-hours';
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText('https://technical-leaders.com/join');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Free Guest Pass: Weekly AI Office Hours | Technical Leaders"
        description="Join one of our weekly live office hours sessions as a free guest, no membership required. This week: build your first Claude Agent Skill, live. Wednesdays at 11am CST."
        keywords={["AI office hours", "free AI workshop", "live AI training", "Claude Agent Skills", "Claude Code", "AI for technical leaders", "weekly AI session", "AI workflows"]}
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
            <Rocket className="h-4 w-4" />
            This week, live and free
          </div>

          <h1 className="font-bold tracking-tight mb-6">
            <div className="text-2xl sm:text-3xl lg:text-4xl mb-2">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Build a working
              </span>
            </div>
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-2">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                AI Agent Skill
              </span>
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                in one hour
              </span>
            </div>
          </h1>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-primary/20 text-foreground px-5 py-3 rounded-full text-base sm:text-lg font-medium mb-6">
            <Calendar className="h-5 w-5 text-primary" />
            <span>Next Session: {formattedDate} at 11am CST</span>
          </div>

          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Drop in on our weekly AI office hours as a free guest. No membership required.
          </p>

          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Bring a task you want to automate and leave with a skill that does it.
          </p>

          <div className="mb-8 max-w-2xl mx-auto">
            <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden shadow-xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/JA_tWS1LJqs"
                title="AI Office Hours: Agent Skills"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <p className="text-base font-medium text-foreground mb-3">
            Save my free seat for {formattedDate}
          </p>
          <div ref={formContainerRef} className="max-w-md mx-auto"></div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="mx-auto max-w-4xl">
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-primary/20 p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold mb-1 text-background">Know someone who'd get value from this session?</h3>
                <p className="text-sm text-muted-foreground">Send them the guest pass</p>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg flex-1 sm:flex-none">
                  <span className="text-sm font-mono text-muted-foreground">technical-leaders.com/join</span>
                </div>
                <Button
                  onClick={handleCopyLink}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="sm"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy link
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What a session looks like — the align section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calendar className="h-4 w-4" />
              What happens every week
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What a session looks like
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These office hours run every Wednesday. The format stays the same each week. Only the topic changes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sessionParts.map((part, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <part.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{part.title}</h3>
                <p className="text-muted-foreground">{part.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6"
              onClick={scrollToForm}
            >
              Register as a free guest
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Free to attend. No membership needed.
            </p>
          </div>
        </div>
      </section>

      {/* What you'll walk away with */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="h-4 w-4" />
              This week's topic
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What you'll walk away with
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              You leave with a working Agent Skill and a clear way to build more.
            </p>
          </div>

          <Card className="p-8">
            <ul className="space-y-4">
              {sessionTakeaways.map((topic, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="p-1 bg-primary/10 rounded-full mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-lg">{topic}</span>
                </li>
              ))}
            </ul>
          </Card>

          <div className="mt-8 text-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => handleCTA('Save my guest spot', 'takeaways_section')}
            >
              Save my guest spot
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Opens the Zoom registration for this week's session.
            </p>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="h-4 w-4" />
              Who shows up
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Who this session is for
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Technical leaders</h3>
              <p className="text-muted-foreground">
                Engineering and product leads who want to automate real work and bring AI to their teams.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Founders and operators</h3>
              <p className="text-muted-foreground">
                People running lean teams who want to move faster with AI-first workflows.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Anyone past the basics</h3>
              <p className="text-muted-foreground">
                If you already use Claude or ChatGPT and want to go further than prompting, you'll keep up fine.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Soft membership next-step */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Card className="p-8 sm:p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Want this every week?
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              The free pass gets you into this week's session. Members get the live session every week, the full library of prompts and workflows, and the community of 300+ between sessions.
            </p>
            <p className="text-base text-muted-foreground mb-8">
              No pressure. Come this week first, then decide.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 py-6"
              onClick={() => handleMembershipClick('membership_section')}
            >
              See what membership includes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>
      </section>

      <ContentFooter
        headline="Save your free guest spot"
        description="Join this week's live office hours session as a guest. Build your first Agent Skill, ask questions, and see how the weekly sessions run. No membership needed."
        primaryCTA={{
          text: "Register as a free guest",
          onClick: scrollToForm,
          description: ""
        }}
        benefits={[
          "Build your first Agent Skill live",
          "No code required",
          "Bring your work to the Q&A",
          "Free to attend, no membership needed"
        ]}
        socialProof="Sit in with technical leaders, founders, and operators applying AI to real work"
        trackingContext="AI Agent Skills"
      />
    </div>
  );
};

export default AIAgentSkills;
