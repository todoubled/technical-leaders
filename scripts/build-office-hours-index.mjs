// Build the searchable office-hours index.
//
// Reads every per-session scrubbed transcript artifact in
// src/data/office-hours/transcripts/ (produced by transcribe-office-hours.mjs
// from the real Airtable + Google-Doc data) and writes a single query-ready JSON
// artifact to
//   public/office-hours-search-index.json
// which Vite copies into dist/ and the client fetches at runtime.
//
// Usage: node scripts/build-office-hours-index.mjs   (also runs in `npm run build`)
//
// Each index entry is one session: { sessionId, title, date, youtubeId,
// durationSeconds, segments: [{ text, startSeconds }] }. The transcript artifacts
// are self-describing (they carry title/date/youtubeId straight from Airtable),
// so the index is decoupled from the 001 session manifest. Output is
// deterministic (sessions sorted newest-first, segments by start) so re-running
// with no artifact changes produces no diff beyond the timestamp.
//
// durationSeconds is carried through so the client can split each real recording
// into a free first half and a members-only second half (see office-hours-search
// gating) — mirroring 001's free/gated model with a single real upload.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { TRANSCRIPTS_DIR } from './lib/office-hours-sessions.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUT_PATH = path.join(
  __dirname,
  '..',
  'public',
  'office-hours-search-index.json',
);

const INDEX_VERSION = 2;

const run = () => {
  let transcriptFiles = [];
  try {
    transcriptFiles = fs
      .readdirSync(TRANSCRIPTS_DIR)
      .filter((f) => f.endsWith('.json'))
      .sort();
  } catch {
    console.warn('⚠️  No transcripts directory found — writing an empty index.');
  }

  const sessions = [];
  let totalSegments = 0;
  let skippedSegments = 0;

  for (const file of transcriptFiles) {
    const artifact = JSON.parse(
      fs.readFileSync(path.join(TRANSCRIPTS_DIR, file), 'utf-8'),
    );
    if (!artifact.sessionId || !artifact.youtubeId) {
      console.warn(`   ⚠️  ${file}: missing sessionId/youtubeId, skipping.`);
      continue;
    }

    const segments = [];
    for (const seg of artifact.segments || []) {
      const text = (seg.text || '').trim();
      if (!text) {
        skippedSegments++;
        continue;
      }
      segments.push({
        text,
        startSeconds: Math.max(0, Math.round(seg.startSeconds ?? 0)),
      });
    }
    segments.sort((a, b) => a.startSeconds - b.startSeconds);
    totalSegments += segments.length;

    sessions.push({
      sessionId: artifact.sessionId,
      title: artifact.title,
      date: artifact.date,
      youtubeId: artifact.youtubeId,
      durationSeconds: Math.max(0, Math.round(artifact.durationSeconds ?? 0)),
      segments,
    });
  }

  // Deterministic order: newest session first, then by id as a stable tiebreak.
  sessions.sort((a, b) => {
    if (a.date !== b.date) return b.date.localeCompare(a.date);
    return a.sessionId.localeCompare(b.sessionId);
  });

  const index = {
    version: INDEX_VERSION,
    // "keyword" today; a later upgrade to embeddings can bump this without
    // changing the entry shape above.
    strategy: 'keyword',
    generatedAt: new Date().toISOString(),
    sessions,
  };

  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });

  // Stable write ignoring only the timestamp, so an unchanged corpus doesn't churn.
  const stripTs = (json) =>
    json.replace(/"generatedAt":\s*"[^"]*"/, '"generatedAt":""');
  const nextJson = JSON.stringify(index, null, 2) + '\n';
  let existing = null;
  try {
    existing = fs.readFileSync(OUT_PATH, 'utf-8');
  } catch {
    /* new file */
  }
  const changed = existing === null || stripTs(existing) !== stripTs(nextJson);
  if (changed) fs.writeFileSync(OUT_PATH, nextJson, 'utf8');

  console.log(
    `🔎 Office-hours search index: ${totalSegments} segment(s) across ${sessions.length} session(s)` +
      `${skippedSegments ? `, ${skippedSegments} empty segment(s) skipped` : ''}.`,
  );
  console.log(
    `   ${changed ? 'Wrote' : 'Unchanged'}: public/office-hours-search-index.json`,
  );
};

run();
