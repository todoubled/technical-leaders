// Office-hours transcription pipeline.
//
// Produces a per-session transcript with timecoded segments at
//   src/data/office-hours/transcripts/<session-id>.json
// which the index builder (scripts/build-office-hours-index.mjs) turns into the
// searchable index shipped to the client.
//
// Usage:
//   node scripts/transcribe-office-hours.mjs                 # all sessions
//   node scripts/transcribe-office-hours.mjs <session-id>    # one session
//   node scripts/transcribe-office-hours.mjs --force         # re-transcribe
//
// Idempotent: a session that already has a transcript is skipped unless --force.
//
// The transcription PROVIDER is pluggable and reads its key from the environment
// (TRANSCRIBE_PROVIDER + TRANSCRIBE_API_KEY). No key is committed and no paid API
// is called here: without a key the script NO-OPS (it never overwrites the
// committed sample transcripts). Wire a real provider by implementing
// `transcribeWithProvider` below — it must return timecoded segments per half:
//   { free: [{ start, end, text }], gated: [{ start, end, text }] }
// Whisper/whisper.cpp, Deepgram, AssemblyAI, or YouTube auto-captions all fit
// this shape; keep the segment contract stable so the index never has to change.

import fs from 'fs';
import path from 'path';
import {
  loadOfficeHoursSessions,
  TRANSCRIPTS_DIR,
} from './lib/office-hours-sessions.mjs';

// Load a provider key from .env (mirrors fetch-articles.mjs' lightweight reader).
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

const PROVIDER = loadEnvValue('TRANSCRIBE_PROVIDER') || 'youtube';
const API_KEY = loadEnvValue('TRANSCRIBE_API_KEY');

const args = process.argv.slice(2);
const force = args.includes('--force');
const targetId = args.find((a) => !a.startsWith('--'));

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

/**
 * Call the configured transcription provider. Guarded so this repo never invokes
 * a paid API or transcribes real video without an explicit key. Returns null when
 * no provider is configured; the caller then leaves any existing transcript
 * (including the committed samples) untouched.
 *
 * @returns {Promise<{ free: {start:number,end:number,text:string}[], gated: {start:number,end:number,text:string}[] } | null>}
 */
async function transcribeWithProvider(session) {
  if (!API_KEY) return null;

  // Implement the real call here, dispatching on PROVIDER. Each branch must fetch
  // audio/captions for session.halves.free.youtubeId and .gated.youtubeId and
  // return timecoded segments in the shape documented above. Left unimplemented on
  // purpose — Todd supplies the provider + key.
  throw new Error(
    `TRANSCRIBE_API_KEY is set but provider "${PROVIDER}" has no implementation yet. ` +
      `Implement transcribeWithProvider() in scripts/transcribe-office-hours.mjs.`,
  );
}

async function run() {
  fs.mkdirSync(TRANSCRIPTS_DIR, { recursive: true });
  const sessions = loadOfficeHoursSessions();
  const targets = targetId
    ? sessions.filter((s) => s.id === targetId)
    : sessions;

  if (targetId && targets.length === 0) {
    console.error(`❌ No session found with id "${targetId}".`);
    process.exit(1);
  }

  console.log(
    `🎙️  Transcribe office hours — provider: ${PROVIDER}, key: ${API_KEY ? 'present' : 'absent'}${force ? ', --force' : ''}\n`,
  );

  let written = 0;
  let skipped = 0;
  let noop = 0;

  for (const session of targets) {
    const outPath = path.join(TRANSCRIPTS_DIR, `${session.id}.json`);
    const exists = fs.existsSync(outPath);

    if (exists && !force) {
      console.log(`   ⏭️  ${session.id}: transcript exists, skipping (use --force).`);
      skipped++;
      continue;
    }

    const result = await transcribeWithProvider(session);
    if (!result) {
      console.log(
        `   🚧 ${session.id}: no TRANSCRIBE_API_KEY configured — leaving existing transcript as-is.`,
      );
      noop++;
      continue;
    }

    const segments = ['free', 'gated'].flatMap((half) =>
      (result[half] || []).map((seg) => ({
        start: seg.start,
        end: seg.end,
        half,
        text: seg.text,
      })),
    );

    const transcript = {
      sessionId: session.id,
      provider: PROVIDER,
      generatedAt: new Date().toISOString(),
      segments,
    };

    if (writeJsonStable(outPath, transcript)) {
      console.log(`   ✅ ${session.id}: wrote ${segments.length} segments.`);
      written++;
    } else {
      console.log(`   ✔️  ${session.id}: transcript unchanged.`);
    }
  }

  console.log(
    `\n📊 Done. Written: ${written}, skipped: ${skipped}, no-op (no key): ${noop}.`,
  );
  console.log(`   Location: src/data/office-hours/transcripts/`);
}

run().catch((err) => {
  console.error(`❌ Transcription failed: ${err.message}`);
  process.exit(1);
});
