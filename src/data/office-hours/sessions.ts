/**
 * Office Hours session manifest.
 *
 * Every weekly office-hours recording is cut into two halves:
 *  - `freeHalf`  — published openly, shareable in sales emails as a lead magnet.
 *  - `gatedHalf` — the second half, unlocked (along with the full library) after
 *                  a free email signup (see OfficeHoursAccessGate).
 *
 * Per the split decision, each half is its own YouTube asset (two IDs per
 * session), not one asset with a start offset. Gated halves should be UNLISTED
 * YouTube videos — the gate is a lead-capture funnel, not DRM, so a guessable
 * unlisted URL is an accepted trade-off (matches the WorkshopAccessGate threat
 * model).
 *
 * This is a static module imported at build time, so each session's free-half
 * page prerenders with its own Open Graph tags and the library renders without a
 * network round-trip.
 *
 * NOTE: the YouTube IDs below are seed/placeholder values so the UI renders.
 * Swap them for the real per-session upload IDs.
 */

export interface OfficeHoursVideo {
  /** YouTube video ID (the part after `watch?v=`). */
  youtubeId: string;
  /** Optional human-readable length, e.g. "22 min". */
  duration?: string;
}

export interface OfficeHoursSession {
  /** Stable slug used in the URL and analytics. Never reorder or reuse. */
  id: string;
  title: string;
  /** ISO date (YYYY-MM-DD) the session was recorded. */
  date: string;
  description: string;
  /** Ungated first half — public and shareable. */
  freeHalf: OfficeHoursVideo;
  /** Gated second half — behind the signup gate. */
  gatedHalf: OfficeHoursVideo;
  topics?: string[];
}

// Newest sessions can be added at the top; helpers below sort by date so array
// order is not load-bearing.
export const officeHoursSessions: OfficeHoursSession[] = [
  {
    id: "2026-06-24-ai-office-hours",
    title: "AI Office Hours — June 24, 2026",
    date: "2026-06-24",
    description:
      "The live AI office-hours session: members share what they built this week, then dig into practical AI workflows, skills, and tooling. Recording from the real session — the free half is open; the second half is members-only.",
    // Real recording (Airtable Recording Link). A single upload backs both
    // halves; the searchable index splits it at the midpoint for the gate.
    freeHalf: { youtubeId: "OsQqiuOKrzs", duration: "73 min" },
    gatedHalf: { youtubeId: "OsQqiuOKrzs", duration: "73 min" },
    topics: ["Office hours", "AI workflows", "Skills"],
  },
  {
    id: "2026-06-25-systems-of-documents",
    title: "Replace custom software with a system of documents",
    date: "2026-06-25",
    description:
      "Turn complicated internal tools into a simple, personal system of documents you can run with Claude — no code to maintain. The free half covers the what and why; the gated half is the live build.",
    freeHalf: { youtubeId: "x1r9mmJgMkQ", duration: "24 min" },
    gatedHalf: { youtubeId: "oHg5SJYRHA0", duration: "31 min" },
    topics: ["Claude Code", "Artifacts over apps", "Internal tooling"],
  },
  {
    id: "2026-06-18-agentic-research",
    title: "Building an agentic investor-discovery system",
    date: "2026-06-18",
    description:
      "Design a system of skills that researches, enriches, and scores best-fit investors from a company profile. The free half is the walkthrough; the gated half goes deep on the scoring engine.",
    freeHalf: { youtubeId: "M7lc1UVf-VE", duration: "19 min" },
    gatedHalf: { youtubeId: "aqz-KE-bpKQ", duration: "27 min" },
    topics: ["Agents", "Research", "Scoring models"],
  },
  {
    id: "2026-06-11-open-qa",
    title: "Open Q&A: shipping AI workflows that stick",
    date: "2026-06-11",
    description:
      "Real questions from Builders on getting AI workflows adopted across a team. The free half answers the top three; the gated half is the full unedited Q&A.",
    freeHalf: { youtubeId: "9bZkp7q19f0", duration: "21 min" },
    gatedHalf: { youtubeId: "e-ORhEE9VVg", duration: "34 min" },
    topics: ["Adoption", "Q&A", "Workflows"],
  },
];

/** Look up a single session by its slug. */
export function getOfficeHoursSession(
  id: string | undefined,
): OfficeHoursSession | undefined {
  if (!id) return undefined;
  return officeHoursSessions.find((s) => s.id === id);
}

/** All sessions, newest recording first. */
export function getOfficeHoursSessionsNewestFirst(): OfficeHoursSession[] {
  return [...officeHoursSessions].sort((a, b) => b.date.localeCompare(a.date));
}

/** Build the public YouTube watch URL for a video (used by VideoModal). */
export function youtubeWatchUrl(video: OfficeHoursVideo): string {
  return `https://www.youtube.com/watch?v=${video.youtubeId}`;
}
