import SEO from "@/components/SEO";
import { trackClick } from "@/utils/posthog";
import { ArrowRight } from "lucide-react";

const LONGHAND_URL = "https://www.getlonghand.com";

const AISOSLanding = () => {
  return (
    <div className="min-h-screen bg-longhand-paper text-longhand-ink flex flex-col">
      <SEO
        title="Longhand — The practiced way to master AI."
        description="Longhand is a desktop app that teaches you AI by having you do real work with it. Private, local-first, works with any LLM."
        keywords={["AI literacy", "learn AI", "AI fluency", "AI certification", "Longhand", "local AI", "private AI"]}
      />

      {/* Navigation */}
      <nav className="w-full bg-longhand-paper/90 backdrop-blur-md border-b border-longhand-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center h-14">
          <a href="/" className="flex items-center">
            <img src="/longhand-logo.png" alt="Longhand" className="h-8 w-auto" />
          </a>
          <a
            href={LONGHAND_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClick("Longhand CTA", { action: "visit-site", location: "nav" })}
            className="bg-longhand-accent hover:bg-longhand-accent-hover text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Visit Longhand
          </a>
        </div>
      </nav>

      {/* Hero — vertically centered */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-longhand-ink mb-6 tracking-tight">
            All your AI
            <br />
            in one private place.
          </h1>
          <p className="text-lg sm:text-xl text-longhand-ink/70 mb-10 max-w-lg mx-auto">
            Longhand is a desktop app that learns what you like and explains while it works for you. Private, local-first, works with any LLM.
          </p>
          <a
            href={LONGHAND_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClick("Longhand CTA", { action: "visit-site", location: "hero" })}
            className="inline-flex items-center gap-2 bg-longhand-accent hover:bg-longhand-accent-hover text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Get Started at Longhand
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-sm text-longhand-muted mt-6">Free to use. Mac &amp; Windows. No account required.</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 border-t border-longhand-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-longhand-muted">
          <p>&copy; {new Date().getFullYear()} Longhand. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-longhand-ink transition-colors">Privacy</a>
            <a href="mailto:hello@technical-leaders.com" className="hover:text-longhand-ink transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AISOSLanding;
