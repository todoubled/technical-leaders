import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { trackEvent, trackClick } from "@/utils/posthog";

const LONGHAND_URL = "https://www.getlonghand.com";

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
            A weekly session for leaders to share what's working with AI, get answers to real questions, and see what's new.
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
          <ul className="space-y-8 sm:space-y-10">
            <li className="text-white text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight drop-shadow">
              The one thing I could use some help with…
            </li>
            <li className="text-white text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight drop-shadow">
              My specific question is…
            </li>
            <li className="text-white text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight drop-shadow">
              How can I…
            </li>
          </ul>
        </div>
      </section>

      {/* Slide 5 — Try This: Longhand */}
      <section className="min-h-screen flex items-center px-6 py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex items-baseline gap-6 mb-12 sm:mb-16">
            <span className="text-3xl sm:text-4xl font-bold text-white/40 tabular-nums">03</span>
            <h2 className="text-white/80 text-3xl sm:text-4xl font-semibold tracking-tight">Try This</h2>
          </div>
          <p className="text-white text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight drop-shadow-lg">
            Organize & schedule your skills
          </p>
          <p className="mt-8 text-white/90 text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight leading-snug max-w-3xl drop-shadow">
            With Longhand, package your repeatable AI workflows into skills, organize them in one place, and schedule them to run on autopilot, so the work happens whether you're at your desk or not.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-5">
            <a
              href={LONGHAND_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick("Longhand CTA", { action: "visit-site", location: "office-hours-try-this" })}
              className="inline-flex items-center gap-2 bg-longhand-accent hover:bg-longhand-accent-hover text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors drop-shadow-lg"
            >
              Try it at getlonghand.com
              <ArrowRight className="w-5 h-5" />
            </a>
            <span className="text-white/70 text-base sm:text-lg drop-shadow">
              Free to use. Mac &amp; Windows. No account required.
            </span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OfficeHours;
