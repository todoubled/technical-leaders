// Office-hours ingestion pipeline (REAL data from Airtable + Google Drive).
//
// Pulls the AI Office Hours "Interactions" from Airtable, exports each session's
// Google-Doc transcript to plain text, segments it by the coarse 5-minute markers
// Google Meet writes into the transcript, SCRUBS it for privacy, and writes a
// per-session artifact to
//   src/data/office-hours/transcripts/<session-id>.json
// which the index builder (scripts/build-office-hours-index.mjs) turns into the
// searchable index shipped to the client.
//
// Usage:
//   node scripts/transcribe-office-hours.mjs            # all eligible sessions
//   node scripts/transcribe-office-hours.mjs --force    # re-fetch even if present
//   OFFICE_HOURS_SINCE=2026-06-01 node scripts/transcribe-office-hours.mjs
//
// Data source (all values verified against the live base):
//   Airtable base  appISrtODYeSTN5Lb / table Interactions (tblwx2c2iTgTEz5YT)
//   AI Office Hours filter: FIND('AI Office Hours', ARRAYJOIN({Related Product}))
//   Fields: Name, Meeting Start Date & Time, Full Transcript (Google Doc URL),
//           Recording Link (youtu.be short URL).
//   Transcript export: GET drive/v3/files/<docId>/export?mimeType=text/plain
//
// Credentials: reads Airtable/Drive over plain HTTPS. In the Claude build
// environment these hosts are proxy-injected so NO key is needed. At Vercel (or
// any real network) set AIRTABLE_API_KEY and a Google service-account token
// (see .env.example). If the API calls fail (no creds / offline), the script
// DEGRADES GRACEFULLY: it logs a clear warning and leaves the committed, already
// scrubbed transcript artifacts in place so `npm run build` still succeeds off
// the committed data — it never fails the build and never partially overwrites
// good data.

import fs from 'fs';
import path from 'path';
import { TRANSCRIPTS_DIR } from './lib/office-hours-sessions.mjs';

// Node's global fetch (undici) ignores HTTPS_PROXY. In sandboxed/CI networks
// that only allow egress through an HTTPS proxy, route fetch through it; with no
// proxy configured (e.g. Vercel builds) this is a no-op and fetch goes direct.
const PROXY_URL = process.env.HTTPS_PROXY || process.env.https_proxy;
if (PROXY_URL) {
  try {
    const { setGlobalDispatcher, ProxyAgent } = await import('undici');
    setGlobalDispatcher(new ProxyAgent(PROXY_URL));
  } catch {
    /* undici unavailable — fall back to direct fetch */
  }
}

// ---------------------------------------------------------------------------
// PRIVACY (default ON). Office-hours sessions are small-group member calls, so
// the transcript names real, non-consenting participants. Before anything is
// stored or shipped to the client we:
//   1. DROP the "Attendees" roster header entirely, and
//   2. STRIP the leading "Speaker Name:" label off every turn,
// so search snippets are about the TOPIC discussed, never about who said it. The
// scrubbed text is what we match against and display; the raw transcript is never
// committed. Flip only if every participant has consented to on-the-record use.
const SCRUB_PARTICIPANT_NAMES = true;

// ---------------------------------------------------------------------------
// Airtable / Drive config.
const AIRTABLE_BASE = 'appISrtODYeSTN5Lb';
const AIRTABLE_TABLE = 'tblwx2c2iTgTEz5YT'; // Interactions
const AI_OFFICE_HOURS_FILTER =
  "FIND('AI Office Hours', ARRAYJOIN({Related Product}))";

// Default lower bound. The published YouTube library goes back to 2026-02-04, so
// we ingest everything from Feb onward; override with OFFICE_HOURS_SINCE=YYYY-MM-DD
// (set it to a later date to ingest only recent sessions).
const DEFAULT_SINCE = '2026-02-01';

// ---------------------------------------------------------------------------
// Lightweight .env reader (mirrors fetch-articles.mjs) — optional here.
const loadEnvValue = (key) => {
  if (process.env[key]) return process.env[key].trim();
  try {
    const envPath = path.join(TRANSCRIPTS_DIR, '..', '..', '..', '..', '.env');
    const content = fs.readFileSync(envPath, 'utf-8');
    const match = content.match(new RegExp(`^${key}=(.+)$`, 'm'));
    return match ? match[1].trim() : null;
  } catch {
    return null;
  }
};

const AIRTABLE_API_KEY = loadEnvValue('AIRTABLE_API_KEY');
const GOOGLE_ACCESS_TOKEN = loadEnvValue('GOOGLE_DRIVE_ACCESS_TOKEN');
const SINCE = loadEnvValue('OFFICE_HOURS_SINCE') || DEFAULT_SINCE;

const args = process.argv.slice(2);
const force = args.includes('--force');

// ---------------------------------------------------------------------------
// Helpers.

const airtableHeaders = () =>
  AIRTABLE_API_KEY ? { Authorization: `Bearer ${AIRTABLE_API_KEY}` } : {};

const driveHeaders = () =>
  GOOGLE_ACCESS_TOKEN ? { Authorization: `Bearer ${GOOGLE_ACCESS_TOKEN}` } : {};

/** Pull every AI Office Hours interaction (handles Airtable pagination). */
async function fetchInteractions() {
  const records = [];
  let offset;
  do {
    const params = new URLSearchParams({
      filterByFormula: AI_OFFICE_HOURS_FILTER,
      pageSize: '100',
    });
    if (offset) params.set('offset', offset);
    const url = `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}?${params}`;
    const resp = await fetch(url, { headers: airtableHeaders() });
    if (!resp.ok) {
      throw new Error(`Airtable ${resp.status} ${resp.statusText}`);
    }
    const data = await resp.json();
    records.push(...(data.records || []));
    offset = data.offset;
  } while (offset);
  return records;
}

/** youtu.be/<id> or youtube.com/watch?v=<id> → id (null if none). */
const extractYouTubeId = (url) => {
  if (!url) return null;
  const m = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([A-Za-z0-9_-]{6,})/,
  );
  return m ? m[1] : null;
};

/** docs.google.com/document/d/<DOC_ID>/edit → DOC_ID (null if none). */
const extractDocId = (url) => {
  if (!url) return null;
  const m = url.match(/document\/d\/([A-Za-z0-9_-]+)/);
  return m ? m[1] : null;
};

/** Export a Google Doc to plain text via the Drive v3 export endpoint. */
async function exportTranscriptText(docId) {
  const url = `https://www.googleapis.com/drive/v3/files/${docId}/export?mimeType=text/plain`;
  const resp = await fetch(url, { headers: driveHeaders() });
  if (!resp.ok) {
    throw new Error(`Drive export ${resp.status} for doc ${docId}`);
  }
  return resp.text();
}

/** "HH:MM:SS" or "MM:SS" → seconds. */
const hmsToSeconds = (hms) => hms.split(':').map(Number).reduce((acc, n) => acc * 60 + n, 0);

const MARKER_RE = /^\s*(\d{1,2}:\d{2}:\d{2})\s*$/;
const ENDED_RE = /Meeting ended after\s+(\d{1,2}:\d{2}:\d{2})/;
const SPEAKER_RE = /^([^:]{1,60}):\s*(.*)$/;

/**
 * Parse a Google Meet transcript into ~5-minute segments.
 *
 * Format: a header (title line, `Attendees` + roster, `Transcript`), then
 * `Speaker Name: utterance` turns interleaved with standalone 5-minute marker
 * lines (`00:05:00`, `00:10:00`, …) and a final `Meeting ended after HH:MM:SS`.
 * There are NO per-line timestamps, so each turn inherits the most-recent marker
 * offset (text before the first marker → 0). Turns sharing a marker are joined
 * into one segment so every result deep-links to the ~5-min block it's in.
 *
 * @returns {{ segments: {startSeconds:number,text:string}[], durationSeconds:number }}
 */
function parseTranscript(rawText) {
  const lines = rawText.replace(/﻿/g, '').split(/\r?\n/);

  // Locate where the actual turns begin, and drop ALL preamble before it — this
  // removes the roster (privacy step 1) plus, in the richer Gemini "Notes" export,
  // the invitee list, AI summary, decisions, and action-item bullets (which also
  // name participants). Two known export shapes both end their header with a
  // transcript heading right before the turns:
  //   - Google Meet:   a standalone `Transcript` line, then `Speaker: …` turns.
  //   - Gemini Notes:  a `… - Transcript` heading, then a `00:00:00` marker.
  // The LAST such heading in the doc is the transcript's start.
  const isTranscriptHeading = (l) =>
    l === 'Transcript' || /(?:^|[\s—-])Transcript$/.test(l);
  let bodyStart = 0;
  for (let i = 0; i < lines.length; i++) {
    if (isTranscriptHeading(lines[i].trim())) bodyStart = i + 1;
  }

  const byMarker = new Map(); // startSeconds -> [turn text, ...]
  let currentSeconds = 0;
  let durationSeconds = 0;

  const push = (seconds, text) => {
    if (!byMarker.has(seconds)) byMarker.set(seconds, []);
    byMarker.get(seconds).push(text);
  };

  for (let i = bodyStart; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const marker = line.match(MARKER_RE);
    if (marker) {
      currentSeconds = hmsToSeconds(marker[1]);
      continue;
    }

    const ended = line.match(ENDED_RE);
    if (ended) {
      durationSeconds = hmsToSeconds(ended[1]);
      continue;
    }

    // Skip auto-generated footer/boilerplate lines (Meet + Gemini Notes).
    if (
      /computer generated and might contain errors/i.test(line) ||
      /review Gemini's notes|provide feedback about using Gemini/i.test(line)
    ) {
      continue;
    }

    // A turn: strip the leading "Speaker Name:" label (privacy step 2).
    let text = line;
    if (SCRUB_PARTICIPANT_NAMES) {
      const turn = line.match(SPEAKER_RE);
      if (turn) text = turn[2].trim();
    }
    if (text) push(currentSeconds, text);
  }

  const segments = [...byMarker.keys()]
    .sort((a, b) => a - b)
    .map((seconds) => ({
      startSeconds: seconds,
      text: byMarker.get(seconds).join(' ').replace(/\s+/g, ' ').trim(),
    }))
    .filter((s) => s.text.length > 0);

  if (!durationSeconds && segments.length) {
    durationSeconds = segments[segments.length - 1].startSeconds;
  }

  return { segments, durationSeconds };
}

/** Build a stable slug id from the session date, e.g. 2026-06-24-ai-office-hours. */
const deriveSessionId = (isoDate) => `${isoDate}-ai-office-hours`;

/** Friendly, participant-free display title, e.g. "AI Office Hours — June 24, 2026". */
const deriveTitle = (isoDate) => {
  const pretty = new Date(`${isoDate}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
  return `AI Office Hours — ${pretty}`;
};

// Stable JSON write that skips no-op writes (matches the repo's other scripts).
const writeJsonStable = (filePath, data) => {
  const json = JSON.stringify(data, null, 2) + '\n';
  let existing = null;
  try {
    existing = fs.readFileSync(filePath, 'utf-8');
  } catch {
    /* new file */
  }
  if (existing !== json) {
    fs.writeFileSync(filePath, json, 'utf8');
    return true;
  }
  return false;
};

// ---------------------------------------------------------------------------

async function run() {
  fs.mkdirSync(TRANSCRIPTS_DIR, { recursive: true });
  console.log(
    `🎙️  Office-hours ingestion — since ${SINCE}, Airtable key: ${AIRTABLE_API_KEY ? 'present' : 'absent (proxy)'}${force ? ', --force' : ''}\n`,
  );

  let interactions;
  try {
    interactions = await fetchInteractions();
  } catch (err) {
    // GRACEFUL DEGRADATION: keep the committed scrubbed artifacts, don't fail.
    console.warn(
      `⚠️  Could not reach Airtable (${err.message}). ` +
        `Falling back to the committed scrubbed transcripts — no changes made.`,
    );
    return;
  }

  // Filter by cutoff + presence of a published recording and a transcript doc.
  const eligible = interactions
    .map((r) => ({
      id: r.id,
      name: r.fields?.['Name'] || '',
      startedAt: r.fields?.['Meeting Start Date & Time'] || '',
      transcriptUrl: r.fields?.['Full Transcript'] || '',
      recordingUrl: r.fields?.['Recording Link'] || '',
    }))
    .filter((r) => r.startedAt && r.startedAt.slice(0, 10) >= SINCE)
    .filter((r) => {
      if (!extractYouTubeId(r.recordingUrl)) {
        console.log(`   ⏭️  ${r.name}: no Recording Link (YouTube) — skipping.`);
        return false;
      }
      if (!extractDocId(r.transcriptUrl)) {
        console.log(`   ⏭️  ${r.name}: no Full Transcript doc — skipping.`);
        return false;
      }
      return true;
    })
    .sort((a, b) => b.startedAt.localeCompare(a.startedAt));

  console.log(`   Found ${eligible.length} eligible AI Office Hours session(s).\n`);

  let written = 0;
  let unchanged = 0;
  let failed = 0;

  for (const rec of eligible) {
    const isoDate = rec.startedAt.slice(0, 10);
    const sessionId = deriveSessionId(isoDate);
    const outPath = path.join(TRANSCRIPTS_DIR, `${sessionId}.json`);

    if (fs.existsSync(outPath) && !force) {
      console.log(`   ⏭️  ${sessionId}: artifact exists, skipping (use --force).`);
      unchanged++;
      continue;
    }

    try {
      const docId = extractDocId(rec.transcriptUrl);
      const youtubeId = extractYouTubeId(rec.recordingUrl);
      const raw = await exportTranscriptText(docId);
      const { segments, durationSeconds } = parseTranscript(raw);

      if (segments.length === 0) {
        console.log(`   ⚠️  ${sessionId}: transcript parsed to 0 segments — skipping.`);
        failed++;
        continue;
      }

      const artifact = {
        sessionId,
        recordId: rec.id,
        title: deriveTitle(isoDate),
        date: isoDate,
        youtubeId,
        durationSeconds,
        source: 'airtable',
        scrubbed: SCRUB_PARTICIPANT_NAMES,
        generatedAt: new Date().toISOString(),
        segments,
      };

      if (writeJsonStable(outPath, artifact)) {
        console.log(
          `   ✅ ${sessionId}: ${segments.length} segments, ${durationSeconds}s.`,
        );
        written++;
      } else {
        console.log(`   ✔️  ${sessionId}: unchanged.`);
        unchanged++;
      }
    } catch (err) {
      console.warn(`   ⚠️  ${sessionId}: ${err.message} — leaving any existing artifact.`);
      failed++;
    }
  }

  console.log(
    `\n📊 Done. Written: ${written}, unchanged/skipped: ${unchanged}, failed: ${failed}.`,
  );
  console.log(`   Location: src/data/office-hours/transcripts/`);
}

run().catch((err) => {
  // Never fail the build for an ingestion problem — the committed artifacts stand.
  console.warn(`⚠️  Ingestion did not complete cleanly: ${err.message}`);
});
