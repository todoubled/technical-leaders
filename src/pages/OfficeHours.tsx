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
            Google Gemini Showcase
          </p>
        </div>
      </section>

      {/* Slide 6 — Google Gemini Showcase / AI Studio */}
      <section className="min-h-screen flex items-center px-6 py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto w-full">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-4">Google Gemini Showcase</p>
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
            <div className="space-y-8">
              <div className="flex items-baseline gap-6">
                <span className="text-3xl sm:text-4xl font-bold text-white/40 tabular-nums">01</span>
                <h2 className="text-white text-3xl sm:text-5xl font-semibold tracking-tight drop-shadow">AI Studio</h2>
              </div>
              <figure>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-3">Source data</p>
                <img
                  src="/screenshots/office-hours/ai-studio-source.png"
                  alt="USDA Crop Progress report — Corn Planted percentages by state, the source data fed into Gemini AI Studio"
                  onError={(e) => {
                    const fig = e.currentTarget.closest('figure');
                    if (fig) (fig as HTMLElement).style.display = 'none';
                  }}
                  className="w-full h-auto max-h-[35vh] object-contain rounded-lg ring-1 ring-white/10 bg-white"
                />
              </figure>
              <blockquote className="text-white text-xl sm:text-2xl lg:text-3xl font-medium italic leading-snug border-l-4 border-white/50 pl-6 sm:pl-8 drop-shadow">
                "Create an image like this design of a map of the US states (see example image). Overlay the exact data from the latest week from this new report (see screenshot) containing tabular data with the percentage over the state. Then over the USA map, the average of all states"
              </blockquote>
            </div>
            <figure>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-3 text-center">Generated output</p>
              <img
                src="/screenshots/office-hours/ai-studio-output.jpg"
                alt="Generated US map showing the data overlay produced by Gemini AI Studio"
                onError={(e) => {
                  const fig = e.currentTarget.closest('figure');
                  if (fig) (fig as HTMLElement).style.display = 'none';
                }}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg ring-1 ring-white/10"
              />
              <figcaption className="mt-3 text-xs uppercase tracking-[0.2em] text-white/50 text-center">
                Generated by Gemini AI Studio
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Slide 7 — Google Gemini Showcase / NotebookLM */}
      <section className="min-h-screen flex items-center px-6 py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto w-full">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-4">Google Gemini Showcase</p>
          <div className="flex items-baseline gap-6 mb-12 sm:mb-16">
            <span className="text-3xl sm:text-4xl font-bold text-white/40 tabular-nums">02</span>
            <h2 className="text-white text-3xl sm:text-5xl font-semibold tracking-tight drop-shadow">NotebookLM</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-white text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight drop-shadow">
                Upload Sources
              </h3>
              <figure>
                <img
                  src="/screenshots/office-hours/notebooklm-upload.jpg"
                  alt="NotebookLM source upload panel"
                  onError={(e) => {
                    const fig = e.currentTarget.closest('figure');
                    if (fig) (fig as HTMLElement).style.display = 'none';
                  }}
                  className="w-full h-auto max-h-[50vh] object-contain rounded-lg ring-1 ring-white/10"
                />
                <figcaption className="mt-3 text-xs uppercase tracking-[0.2em] text-white/50 text-center">
                  NotebookLM source upload
                </figcaption>
              </figure>
            </div>
            <div className="space-y-6">
              <h3 className="text-white text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight drop-shadow">
                Generate Studio assets (videos, slides, podcast, etc.)
              </h3>
              <figure>
                <img
                  src="/screenshots/office-hours/notebooklm-studio.jpg"
                  alt="NotebookLM Studio asset generation panel"
                  onError={(e) => {
                    const fig = e.currentTarget.closest('figure');
                    if (fig) (fig as HTMLElement).style.display = 'none';
                  }}
                  className="w-full h-auto max-h-[50vh] object-contain rounded-lg ring-1 ring-white/10"
                />
                <figcaption className="mt-3 text-xs uppercase tracking-[0.2em] text-white/50 text-center">
                  NotebookLM Studio
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OfficeHours;
