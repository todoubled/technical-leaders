import { useEffect } from "react";
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
            How did you use AI this week?
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

      {/* Slide 5 — Try This intro */}
      <section className="min-h-screen flex items-center px-6 py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex items-baseline gap-6 mb-12 sm:mb-16">
            <span className="text-3xl sm:text-4xl font-bold text-white/40 tabular-nums">03</span>
            <h2 className="text-white/80 text-3xl sm:text-4xl font-semibold tracking-tight">Try This</h2>
          </div>
          <p className="text-white text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight drop-shadow-lg">
            Data Extraction & Processing Agent
          </p>
        </div>
      </section>

    </div>
  );
};

export default OfficeHours;
