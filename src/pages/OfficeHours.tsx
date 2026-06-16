import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { trackEvent } from "@/utils/posthog";

const OfficeHours = () => {
  useEffect(() => {
    trackEvent("AI Office Hours Page Viewed");
  }, []);

  return (
    <div className="relative text-white isolate">
      <SEO
        title="AI Office Hours | Technical Leaders"
        description="Weekly AI office hours. AI Review, Open Q&A, and a fresh &quot;Try This&quot; deep dive — bring your questions and see what's working."
        keywords={["AI office hours", "AI Q&A", "Google Gemini", "NotebookLM", "AI Studio", "Technical Leaders"]}
      />

      <div className="fixed inset-0 -z-10 pointer-events-none">
        <img
          src="/ai-in-ar.png"
          alt="AI background"
          className="w-full h-full object-cover object-top opacity-50"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <Navigation hideCTA />

      {/* Slide 1 — Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-white font-bold tracking-tight text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] drop-shadow-lg">
            AI Office Hours
          </h1>
          <p className="mt-10 text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow">
            A weekly session for Builders to share what's working with AI, get answers to real questions, and see what's new.
          </p>
        </div>
      </section>

      {/* Slide 2 — What we'll cover */}
      <section className="min-h-screen flex items-center px-6 py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-16 sm:mb-24 drop-shadow-lg">
            What we'll cover:
          </h2>

          <div className="space-y-12 sm:space-y-16">
            <div className="flex items-baseline gap-6 sm:gap-10">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white/40 tabular-nums shrink-0">
                01
              </span>
              <h3 className="text-white text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight drop-shadow">
                AI Review
              </h3>
            </div>

            <div className="flex items-baseline gap-6 sm:gap-10">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white/40 tabular-nums shrink-0">
                02
              </span>
              <h3 className="text-white text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight drop-shadow">
                Open Q&A
              </h3>
            </div>

            <div className="flex items-baseline gap-6 sm:gap-10">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white/40 tabular-nums shrink-0">
                03
              </span>
              <h3 className="text-white text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight drop-shadow">
                Try This
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 3 — AI Review */}
      <section className="min-h-screen flex items-center px-6 py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex items-baseline gap-6 mb-12 sm:mb-16">
            <span className="text-3xl sm:text-4xl font-bold text-white/40 tabular-nums">01</span>
            <h2 className="text-white/80 text-3xl sm:text-4xl font-semibold tracking-tight">AI Review</h2>
          </div>
          <p className="text-white text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight drop-shadow-lg">
            What did you build?
          </p>
        </div>
      </section>

      {/* Slide 4 — Open Q&A */}
      <section className="min-h-screen flex items-center px-6 py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex items-baseline gap-6 mb-12 sm:mb-16">
            <span className="text-3xl sm:text-4xl font-bold text-white/40 tabular-nums">02</span>
            <h2 className="text-white/80 text-3xl sm:text-4xl font-semibold tracking-tight">Open Q&A</h2>
          </div>
          <p className="text-white text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight drop-shadow-lg">
            How do I build AI to…
          </p>
        </div>
      </section>

      {/* Slide 5 — Try This: The Claude Masterclass guide */}
      <section className="min-h-screen flex items-center px-6 py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex items-baseline gap-6 mb-12 sm:mb-16">
            <span className="text-3xl sm:text-4xl font-bold text-white/40 tabular-nums">03</span>
            <h2 className="text-white/80 text-3xl sm:text-4xl font-semibold tracking-tight">Try This</h2>
          </div>
          <p className="text-white text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight drop-shadow-lg">
            The Claude Masterclass
          </p>
          <p className="mt-8 text-white/90 text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight leading-snug max-w-3xl drop-shadow">
            A guided, hands-on walkthrough of every version of Claude — from your first chat to running agents on your own machine. Four modules, beginner to advanced, each with action steps, copy-paste prompts, and checkpoints you tick off as you go.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {[
              {
                level: "Beginner",
                title: "Claude Chat",
                blurb: "Everyday chat, prompting, files, and Projects.",
              },
              {
                level: "Beginner",
                title: "Claude for Chrome",
                blurb: "Let Claude see and act on the page in front of you, safely.",
              },
              {
                level: "Intermediate",
                title: "Claude Cowork",
                blurb: "Connect Gmail and Calendar, install Skills, run real workflows.",
              },
              {
                level: "Advanced",
                title: "Claude Code",
                blurb: "Work with files on your machine, plus reusable prompts and skills.",
              },
            ].map(({ level, title, blurb }, i) => (
              <div
                key={title}
                className="rounded-xl border border-white/10 bg-white/5 p-6 sm:p-7 backdrop-blur-sm"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl sm:text-3xl font-bold text-white/40 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wide text-longhand-accent">
                    {level}
                  </span>
                </div>
                <h3 className="mt-3 text-white text-xl sm:text-2xl font-semibold tracking-tight">
                  {title}
                </h3>
                <p className="mt-2 text-white/80 text-base sm:text-lg leading-snug">
                  {blurb}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/claude-masterclass"
              onClick={() => trackEvent("AI Office Hours Masterclass CTA Clicked")}
              className="inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 text-lg sm:text-xl font-semibold text-black transition-colors hover:bg-white/90"
            >
              Open the masterclass guide
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OfficeHours;
