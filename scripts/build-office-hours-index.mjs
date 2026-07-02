// Build the searchable office-hours index.
//
// Reads every per-session transcript in src/data/office-hours/transcripts/, joins
// each timecoded segment to its session (title, date, and the correct YouTube id
// for that half), and writes a single query-ready JSON artifact to
//   public/office-hours-search-index.json
// which Vite copies into dist/ and the client fetches at runtime.
//
// Usage: node scripts/build-office-hours-index.mjs   (also runs in `npm run build`)
//
// The record shape is deliberately backend-agnostic — { sessionId, title, date,
// half, youtubeId, start, text } — so today's keyword search can be swapped for
// embeddings/vector search later without reshaping the stored data. Output is
// deterministic (sorted, stable) so re-running with no transcript changes produces
// no diff.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  loadOfficeHoursSessions,
  TRANSCRIPTS_DIR,
} from './lib/office-hours-sessions.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUT_PATH = path.join(
  __dirname,
  '..',
  'public',
  'office-hours-search-index.json',
);

const INDEX_VERSION = 1;

const run = () => {
  const sessions = loadOfficeHoursSessions();
  const sessionById = new Map(sessions.map((s) => [s.id, s]));

  let transcriptFiles = [];
  try {
    transcriptFiles = fs
      .readdirSync(TRANSCRIPTS_DIR)
      .filter((f) => f.endsWith('.json'))
      .sort();
  } catch {
    console.warn('⚠️  No transcripts directory found — writing an empty index.');
  }

  const records = [];
  let skippedSegments = 0;

  for (const file of transcriptFiles) {
    const transcript = JSON.parse(
      fs.readFileSync(path.join(TRANSCRIPTS_DIR, file), 'utf-8'),
    );
    const session = sessionById.get(transcript.sessionId);
    if (!session) {
      console.warn(
        `   ⚠️  ${file}: sessionId "${transcript.sessionId}" not in manifest, skipping.`,
      );
      continue;
    }

    for (const seg of transcript.segments || []) {
      const half = seg.half === 'gated' ? 'gated' : 'free';
      const text = (seg.text || '').trim();
      if (!text) {
        skippedSegments++;
        continue;
      }
      records.push({
        sessionId: session.id,
        title: session.title,
        date: session.date,
        half,
        youtubeId: session.halves[half].youtubeId,
        start: Math.max(0, Math.round(seg.start ?? 0)),
        text,
      });
    }
  }

  // Deterministic order: session date (newest first), then half, then timecode.
  records.sort((a, b) => {
    if (a.date !== b.date) return b.date.localeCompare(a.date);
    if (a.sessionId !== b.sessionId) return a.sessionId.localeCompare(b.sessionId);
    if (a.half !== b.half) return a.half.localeCompare(b.half);
    return a.start - b.start;
  });

  const index = {
    version: INDEX_VERSION,
    // "keyword" today; a later upgrade to embeddings can bump this without
    // changing the record shape above.
    strategy: 'keyword',
    generatedAt: new Date().toISOString(),
    records,
  };

  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });

  // Stable write ignoring only the timestamp, so an unchanged corpus doesn't churn.
  const stripTs = (json) => json.replace(/"generatedAt":\s*"[^"]*"/, '"generatedAt":""');
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
    `🔎 Office-hours search index: ${records.length} segment records from ${transcriptFiles.length} transcript(s)` +
      `${skippedSegments ? `, ${skippedSegments} empty segment(s) skipped` : ''}.`,
  );
  console.log(
    `   ${changed ? 'Wrote' : 'Unchanged'}: public/office-hours-search-index.json`,
  );
};

run();
