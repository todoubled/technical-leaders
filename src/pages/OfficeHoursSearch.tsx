import { useEffect, useMemo, useRef, useState } from "react";
import { Calendar, Clock, Lock, Play, Search } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import VideoModal from "@/components/VideoModal";
import OfficeHoursAccessGate from "@/components/OfficeHoursAccessGate";
import { trackEvent } from "@/utils/posthog";
import { youtubeWatchUrl } from "@/data/office-hours/sessions";
import {
  formatTimecode,
  loadOfficeHoursSearchIndex,
  searchOfficeHours,
  type OfficeHoursSearchRecord,
  type OfficeHoursSearchResult,
} from "@/lib/office-hours-search";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

// Gated results open inside 001's access gate: locked visitors see the signup
// funnel; unlocked ones get the clip at the matched timecode. Reuses the gate
// component rather than reimplementing access checks.
const GatedResultDialog = ({
  result,
  onClose,
}: {
  result: OfficeHoursSearchResult | null;
  onClose: () => void;
}) => (
  <Dialog open={result !== null} onOpenChange={(open) => !open && onClose()}>
    <DialogContent className="max-w-2xl">
      {result && (
        <OfficeHoursAccessGate source={`search:${result.sessionId}`}>
          <div className="relative pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-md"
              src={`https://www.youtube.com/embed/${result.youtubeId}?autoplay=1&start=${Math.floor(result.startSeconds)}`}
              title={result.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </OfficeHoursAccessGate>
      )}
    </DialogContent>
  </Dialog>
);

const OfficeHoursSearch = () => {
  const [records, setRecords] = useState<OfficeHoursSearchRecord[]>([]);
  const [query, setQuery] = useState("");
  const [freeResult, setFreeResult] = useState<OfficeHoursSearchResult | null>(null);
  const [gatedResult, setGatedResult] = useState<OfficeHoursSearchResult | null>(null);
  const lastTrackedQuery = useRef<string>("");

  // Load the static index once, client-side (SSR/prerender safe).
  useEffect(() => {
    let cancelled = false;
    loadOfficeHoursSearchIndex().then((data) => {
      if (!cancelled) setRecords(data);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const results = useMemo(
    () => searchOfficeHours(query, records),
    [query, records],
  );

  // Fire the search analytics event once the query settles (debounced), so we
  // don't emit an event per keystroke.
  useEffect(() => {
    const trimmed = query.trim();
    if (!trimmed) {
      lastTrackedQuery.current = "";
      return;
    }
    const timer = setTimeout(() => {
      if (lastTrackedQuery.current === trimmed) return;
      lastTrackedQuery.current = trimmed;
      trackEvent("Office Hours Search", {
        query: trimmed,
        result_count: results.length,
      });
    }, 500);
    return () => clearTimeout(timer);
  }, [query, results.length]);

  const openResult = (result: OfficeHoursSearchResult) => {
    trackEvent("Office Hours Search Result Clicked", {
      session_id: result.sessionId,
      start_seconds: result.startSeconds,
      query: query.trim(),
    });
    if (result.half === "gated") {
      setGatedResult(result);
    } else {
      setFreeResult(result);
    }
  };

  const hasQuery = query.trim().length > 0;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Search AI Office Hours | Technical Leaders"
        description="Search every AI office-hours recording by topic and jump straight to the moment it's discussed."
        keywords={["AI office hours", "search", "office hours library", "Technical Leaders"]}
      />
      <Navigation />

      <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Search the office-hours library
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Type a topic — like <span className="font-medium">build skills</span> — and
            jump straight to the moment it&apos;s discussed.
          </p>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search topics, questions, keywords…"
              className="h-14 pl-12 text-base"
              aria-label="Search office hours"
            />
          </div>
        </div>
      </section>

      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {hasQuery && results.length === 0 && (
            <p className="text-center text-muted-foreground py-16">
              No office-hours moments match &ldquo;{query.trim()}&rdquo; yet. Try a
              broader topic.
            </p>
          )}

          <ul className="space-y-4">
            {results.map((result) => (
              <li key={result.sessionId}>
                <Card
                  role="button"
                  tabIndex={0}
                  onClick={() => openResult(result)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openResult(result);
                    }
                  }}
                  className="p-5 cursor-pointer transition-colors hover:border-primary/40 hover:bg-muted/40"
                >
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(result.date)}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {formatTimecode(result.startSeconds)}
                    </span>
                    {result.half === "gated" ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary px-2 py-0.5">
                        <Lock className="h-3 w-3" />
                        Members
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5">
                        <Play className="h-3 w-3" />
                        Free
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{result.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    &ldquo;{result.snippet}&rdquo;
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />

      {/* Free clips play directly at the matched timecode. */}
      <VideoModal
        isOpen={freeResult !== null}
        onClose={() => setFreeResult(null)}
        videoUrl={freeResult ? youtubeWatchUrl({ youtubeId: freeResult.youtubeId }) : ""}
        startSeconds={freeResult?.startSeconds ?? 0}
      />

      {/* Gated clips route through the 001 signup gate. */}
      <GatedResultDialog result={gatedResult} onClose={() => setGatedResult(null)} />
    </div>
  );
};

export default OfficeHoursSearch;
