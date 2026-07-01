import { useEffect } from "react";
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

      {/* Slide 5 — Try This: Replace software with a personal system of documents */}
      <section className="min-h-screen flex items-center px-6 py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex items-baseline gap-6 mb-12 sm:mb-16">
            <span className="text-3xl sm:text-4xl font-bold text-white/40 tabular-nums">03</span>
            <h2 className="text-white/80 text-3xl sm:text-4xl font-semibold tracking-tight">Try This</h2>
          </div>
          <p className="text-white text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] drop-shadow-lg max-w-4xl">
            Replace custom software with a system of documents.
          </p>

          <div className="mt-14 sm:mt-20 space-y-12 sm:space-y-16">
            {/* WHAT */}
            <div className="grid gap-3 sm:grid-cols-[7rem_1fr] sm:gap-10">
              <span className="text-sm font-semibold uppercase tracking-widest text-longhand-accent sm:pt-2">
                What
              </span>
              <ul className="space-y-3 text-white text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight leading-snug drop-shadow">
                <li>Convert complicated software into a simple, personal system of documents.</li>
                <li>Use artifacts, not apps.</li>
              </ul>
            </div>

            {/* WHY */}
            <div className="grid gap-3 sm:grid-cols-[7rem_1fr] sm:gap-10">
              <span className="text-sm font-semibold uppercase tracking-widest text-longhand-accent sm:pt-2">
                Why
              </span>
              <p className="text-white text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight leading-snug drop-shadow">
                You don't want to maintain custom software or write code.
              </p>
            </div>

            {/* HOW */}
            <div className="grid gap-3 sm:grid-cols-[7rem_1fr] sm:gap-10">
              <span className="text-sm font-semibold uppercase tracking-widest text-longhand-accent sm:pt-2">
                How
              </span>
              <div className="space-y-6">
                <p className="text-white text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight leading-snug drop-shadow">
                  Connect Claude Code to your codebase if possible — otherwise ask for exports of the logic and data sources.
                </p>
                <figure className="rounded-xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm">
                  <figcaption className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-wide text-longhand-accent">
                    Example prompt
                  </figcaption>
                  <blockquote className="text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed">
                    &ldquo;How might we create a system of skills that captures a company
                    profile (Pre-Money Valuation, Current Founder Ownership, Funding Sources,
                    Cash On Hand, Monthly Burn, Monthly Inflows, Pending Awards) and does
                    thorough research (based on the sea-of-demand skill) for investor
                    discovery, evidence enrichment, and signal monitors (SEC EDGAR, news, FDA,
                    etc.) to find the best-fit potential investors for the company based on the
                    attached scoring model. Store your research in markdown files, improve the
                    scoring engine over time, and store all research and scoring rationale in a
                    spreadsheet so we can audit it. Final output should be a PDF investor brief
                    for the company.&rdquo;
                  </blockquote>
                </figure>
              </div>
            </div>

            {/* NOW */}
            <div className="grid gap-3 sm:grid-cols-[7rem_1fr] sm:gap-10">
              <span className="text-sm font-semibold uppercase tracking-widest text-longhand-accent sm:pt-2">
                Now
              </span>
              <div className="space-y-6">
                <p className="text-white text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight leading-snug drop-shadow">
                  Operate and deliver for your clients — or sell them the skills to DIY.
                </p>
                <div className="rounded-xl border border-white/10 bg-white/5 p-6 sm:p-7 backdrop-blur-sm">
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-white/50">
                    New problem
                  </p>
                  <p className="mt-2 text-white text-lg sm:text-xl font-medium tracking-tight leading-snug">
                    Claude becomes a single point of failure.
                  </p>
                  <p className="mt-6 text-xs sm:text-sm font-semibold uppercase tracking-wide text-longhand-accent">
                    Solution
                  </p>
                  <p className="mt-2 text-white text-lg sm:text-xl font-medium tracking-tight leading-snug">
                    Run your skills in Longhand for multi-provider AI support with zero downtime.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <a
              href="https://www.getlonghand.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("AI Office Hours Longhand CTA Clicked")}
              className="inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 text-lg sm:text-xl font-semibold text-black transition-colors hover:bg-white/90"
            >
              Run your skills in Longhand
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OfficeHours;
