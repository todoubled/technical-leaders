// Shared path constant for the office-hours ingestion + index-build scripts.
//
// The per-session transcript artifacts (written by transcribe-office-hours.mjs,
// read by build-office-hours-index.mjs) are now self-describing — each carries
// its own title/date/youtubeId straight from Airtable — so the scripts no longer
// need to parse the 001 TypeScript session manifest. This module just centralizes
// where those artifacts live.

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const TRANSCRIPTS_DIR = path.join(
  __dirname,
  '..',
  '..',
  'src',
  'data',
  'office-hours',
  'transcripts',
);
