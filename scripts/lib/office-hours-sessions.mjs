// Shared, dependency-free reader for the office-hours session manifest
// (src/data/office-hours/sessions.ts) used by the transcription and index-build
// scripts.
//
// Node can't import the .ts module directly, and we don't want to duplicate the
// manifest, so we extract the fields the scripts need (id, title, date, and the
// free/gated YouTube ids) straight from the source with a tolerant regex. The
// manifest is a hand-maintained static array with a stable shape, so this stays
// simple; if its shape ever changes materially, this parser is the one place to
// update.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SESSIONS_TS = path.join(
  __dirname,
  '..',
  '..',
  'src',
  'data',
  'office-hours',
  'sessions.ts',
);

// Matches one session object literal, capturing (in order): id, title, date,
// freeHalf.youtubeId, gatedHalf.youtubeId. `freeHalf` always precedes `gatedHalf`
// in the manifest, so positional capture is safe.
const SESSION_RE =
  /id:\s*"([^"]+)"[\s\S]*?title:\s*"((?:[^"\\]|\\.)*)"[\s\S]*?date:\s*"([^"]+)"[\s\S]*?freeHalf:\s*\{\s*youtubeId:\s*"([^"]+)"[\s\S]*?gatedHalf:\s*\{\s*youtubeId:\s*"([^"]+)"/g;

/**
 * Read and parse the office-hours session manifest.
 * @returns {{ id: string, title: string, date: string, halves: { free: { youtubeId: string }, gated: { youtubeId: string } } }[]}
 */
export function loadOfficeHoursSessions() {
  const source = fs.readFileSync(SESSIONS_TS, 'utf-8');
  const sessions = [];
  let match;
  while ((match = SESSION_RE.exec(source)) !== null) {
    const [, id, title, date, freeId, gatedId] = match;
    sessions.push({
      id,
      title: title.replace(/\\"/g, '"'),
      date,
      halves: {
        free: { youtubeId: freeId },
        gated: { youtubeId: gatedId },
      },
    });
  }
  if (sessions.length === 0) {
    throw new Error(
      `No sessions parsed from ${SESSIONS_TS}. Has the manifest shape changed?`,
    );
  }
  return sessions;
}

export const TRANSCRIPTS_DIR = path.join(
  __dirname,
  '..',
  '..',
  'src',
  'data',
  'office-hours',
  'transcripts',
);
