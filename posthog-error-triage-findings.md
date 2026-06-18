# PostHog Error Triage — technical-leaders.com findings

**Repo:** technical-leaders.com (Vite 5 + React 18 + TypeScript + shadcn, deployed on Vercel)
**PostHog project:** 127536 (error stream shared with the `longhand` desktop app)
**Date:** 2026-05-31
**Branch:** `fix-errors` (changes left uncommitted for review)

---

## TL;DR for a non-technical stakeholder

- The "X is not defined" runtime errors attributed to this website are **not bugs in the current code**. The current source is correct and builds cleanly. They happen when a returning visitor's browser runs an **old, cached copy of the site after we ship a new version** — the old page asks for JavaScript files that no longer exist, so it breaks.
- We fixed the root cause by telling Vercel to **always re-check the main page** for returning visitors (while still caching the heavy, versioned assets forever). We also added an automatic **one-time page refresh** if a stale file load ever fails, so a visitor self-heals instead of seeing a broken page.
- The **#1 line on the error board** ("Object Not Found … MethodName:update", 413 occurrences) is **not our code** — it's injected by Microsoft Outlook/Office link-rewriting in some users' browsers. We now filter that, plus two other well-known browser-noise messages, so the board shows real problems. We did **not** weaken real error reporting.

---

## Headline finding: the error board mixes two different apps

PostHog project **127536 streams errors from two unrelated products**:

1. **`longhand`** — a Tauri + Svelte + Rust desktop app (a *separate* repository, explicitly out of scope here).
2. **technical-leaders.com** — this React marketing site.

The source triage (`PostHog_Error_Triage.xlsx`) clustered them together. Its headline **P1 cluster — "Build: undefined variable (ReferenceError), 17 issues, one fix clears many" — is actually 9 technical-leaders.com issues + 8 longhand issues that cannot share a root cause.** A Svelte/Rust app and a React app do not share symbols, chunk names, or a build pipeline. The site's half (`useRef`, `WhereTokensGetWasted`, `formContainerRef`, `Coins`, and the `deps.chunk-T2SWDQEL` / `deps.chunk-QCHXOAYK` chunks) is what this report addresses; the longhand half (`formatTimestamp`, `isFeatureEnabled`, `academyEnabled`, `visible`, `justOpenedTimer`, `answerParagraphs`, `showCatalogSourceBadge`, `Button` in `SectionNotesKanban`, etc.) was deliberately left untouched.

> Verified against the workbook: the `is not defined` shared strings are `WhereTokensGetWasted`, `Coins`, and `formContainerRef` — each appearing under both an `src.pages.*` stack and the `deps.chunk-T2SWDQEL` chunk. The recurrence of one chunk hash across multiple symbols is itself a stale-bundle fingerprint.

---

## Root-cause verdict: stale/corrupted bundle, NOT a live source bug

**Verdict: stale bundle.** Evidence that settled it:

| Check | Result |
| --- | --- |
| `npm run build` (incl. `generate-sitemap`) | **Succeeds, exit 0**, 2676 modules transformed, no missing-symbol / undefined errors. |
| `WhereTokensGetWasted` (A) | **Defined** at `src/pages/Tokens.tsx:351` (hoisted `function`), **used** at `:69`, routed at `src/App.tsx:207`. A same-file hoisted function literally cannot be "not defined" from valid source. |
| `formContainerRef` (C) | **Valid `useRef`** at `src/pages/AIAgentSkills.tsx:35` and `src/pages/LKOfficeHours.tsx:34` (8 references each). |
| `useRef` import (D) | **Valid React named import** — `import { useState, useEffect, useRef } from "react";` in both files above. |
| `Coins` (B) | **Absent** from `src/pages/Tokens.tsx`; `git log -S "Coins" -- src/pages/Tokens.tsx` returns **nothing** → it was never in any committed build (came from an ephemeral Lovable/preview deploy). |
| `npm ls react react-dom` | **Single copy:** every entry is `react@18.3.1` / `react-dom@18.3.1` (all "deduped"). Rules out duplicate-React as the cause of "Cannot read properties of null (reading 'useRef')". |
| Asset hashing | Vite emits content-hashed filenames (`dist/assets/index-<hash>.js`). Fresh deploys get new hashes. |

**Why this produces the observed errors:** Before this fix, `vercel.json` had **no cache-control headers**, so Vercel's defaults could let a returning visitor load an **old `index.html`** that references hashed chunk filenames which no longer exist on the CDN (a new deploy replaced them with new hashes). The old page then fails to load/execute the expected module, surfacing as:

- `WhereTokensGetWasted is not defined` / `formContainerRef is not defined` — the new chunk that defined them never loaded, or an old chunk executed against a changed runtime.
- `Cannot read properties of null (reading 'useRef')` — React's internal dispatcher is `null` inside a chunk that loaded out of sync with the React runtime (classic stale/torn-bundle symptom; **not** duplicate React, which we ruled out).

All "last seen" timestamps (6–13 days ago) line up with deploy events, consistent with returning tabs, not new regressions.

---

## Per-issue disposition (A–G)

| ID | Error (true source: this repo) | HEAD status | Root-cause verdict | Disposition |
| --- | --- | --- | --- | --- |
| **A** | `WhereTokensGetWasted is not defined` (`src.pages.Tokens`) | Defined `Tokens.tsx:351`, used `:69`, route `App.tsx:207` | Stale bundle | **Not-reproducible-closed** at HEAD; **hardened** by cache headers + preloadError reload |
| **B** | `Coins is not defined` (`src.pages.Tokens` / `deps.chunk-T2SWDQEL`) | Absent + no git history | Ephemeral preview/Lovable deploy; never committed | **Not-reproducible-closed**; did **not** re-add the unused `Coins` import |
| **C** | `formContainerRef is not defined` (`deps.chunk-T2SWDQEL`) | Valid `useRef` in 2 pages | Stale bundle | **Not-reproducible-closed**; **hardened** by cache headers + preloadError reload |
| **D** | `Cannot read properties of null (reading 'useRef')` (`deps.chunk-QCHXOAYK` / `deps.chunk-T2SWDQEL`) | Single React copy; valid imports | Stale/torn bundle (null React dispatcher) — not duplicate React | **Not-reproducible-closed**; **hardened** by cache headers + preloadError reload |
| **E** | `Non-Error promise rejection: Object Not Found Matching Id:N, MethodName:update, ParamCount:4` (P0, 413 occ / 53 users) | n/a — not app code | Injected MS Outlook/Office SafeLinks / page-rewrite script | **Filtered** (exact noise signature) |
| **F** | `ResizeObserver loop completed with undelivered notifications.` | n/a — benign | Browser warning from Radix/shadcn layout measurement | **Filtered** (exact string) |
| **G** | `Script error.` | n/a — opaque | Cross-origin third-party embeds (Calendly/ConvertKit/LinkedIn) with no detail | **Filtered** (exact string) |

> **A–D are real reliability signals and are never filtered.** If they recur *after* this deploy ships with corrected cache headers, that would indicate a different defect and should be investigated fresh.

---

## Changes made (3 files; all uncommitted)

### 1. `vercel.json` — cache-control headers (the durable fix)
Added a `headers` block:

- `/(.*)` → `Cache-Control: public, max-age=0, must-revalidate` — every HTML / SPA-route response is revalidated, so returning visitors always get the **current** `index.html`.
- `/assets/(.*)` → `Cache-Control: public, max-age=31536000, immutable` — content-hashed JS/CSS cached forever (safe: a new deploy emits new filenames).

**Ordering matters and is deliberate.** Per Vercel routing rules, header "modify" actions from *all* matching rules apply *in array order*, and a later `Set Cache-Control` replaces an earlier one. The catch-all `/(.*)` is listed **first** and the `/assets/(.*)` rule **last**, so for asset paths the `immutable` value executes last and wins; for every other path only the catch-all matches and they get `must-revalidate`. Confirmed that **all** hashed Vite output lives under `dist/assets/` (only the bundle JS/CSS); all other top-level `dist/` files are non-hashed static `public/` assets that correctly revalidate.

> Note: a `comment` key was intentionally **not** added to the JSON — Vercel's `vercel.json` schema only permits `source`, `headers`, `has`, `missing` on a header entry and rejects unknown keys, which would fail the deploy. Rationale lives here in the report instead.

### 2. `src/main.tsx` — guarded `vite:preloadError` recovery (belt-and-suspenders)
Added a `window.addEventListener('vite:preloadError', ...)` handler that performs a **single** `location.reload()`, guarded by a `sessionStorage` flag (`vite-preload-error-reloaded`) so it **cannot infinite-loop**. A code comment explains why: a redeploy can invalidate the chunk a stale tab is about to import; reloading once fetches the fresh `index.html` + current chunks. This is a safety net layered on top of the cache-header fix.

### 3. `index.html` — conservative `before_send` noise filter in `posthog.init(...)`
Added a `before_send: function (event) { ... }` to the PostHog init config (this site uses the CDN snippet, not the `posthog-js` npm package, so the hook must live here). It:

- Acts **only** on `$exception` events; reads the message from `properties['$exception_list'][0].value` (fallback `properties['$exception_message']`).
- Returns `null` (drops) **only** for the three exact noise signatures: (E) `Object Not Found Matching Id:` + `MethodName:update`; (F) the exact `ResizeObserver loop completed with undelivered notifications.` string; (G) bare `Script error.`.
- Returns the event **unchanged** for everything else — all real exceptions, pageviews, and custom events pass through.

PostHog `before_send` API verified: `(event) => event | null`; returning `null`/falsey drops the event, returning the event keeps it (per PostHog JS docs / redact-properties tutorial).

---

## Verification (actual results)

- `npm run build` → **exit 0**. Clean build; emits content-hashed `dist/assets/index-<hash>.{js,css}`. (`generate-sitemap` fetched 509 live articles successfully; the sitemap files it rewrote with today's date were reverted to keep the review diff focused on the fix.)
- `npm run lint` → **exit 1**, but **identical to the pre-edit baseline: 50 problems (36 errors, 14 warnings)**, all pre-existing and unrelated (`@typescript-eslint/no-explicit-any`, `no-require-imports`, `react-refresh/only-export-components`, `react-hooks/exhaustive-deps`). `src/main.tsx` introduced **zero** new lint issues.
- `npm ls react react-dom` → single `react@18.3.1` / `react-dom@18.3.1` (all deduped).
- Grep: `WhereTokensGetWasted` defined (`Tokens.tsx:351`); `formContainerRef` defined (8 refs each in `AIAgentSkills.tsx` / `LKOfficeHours.tsx`); `Coins` absent from `Tokens.tsx` (0 matches).
- `before_send` logic unit-tested in Node across 10 scenarios (E/F/G dropped; real TypeError, real ReferenceError, pageview, custom event, near-miss `MethodName:delete`, and a real ReferenceError that merely *mentions* "ResizeObserver" all kept; `$exception_message` fallback dropped) — **10/10 passed**.
- Built `index.html` contains `before_send`; built bundle contains the `vite:preloadError` handler + sessionStorage guard; extracted inline PostHog script passes `node --check`.

---

## Alternative: filter server-side in PostHog instead of (or alongside) the client hook

If you'd rather not ship the client `before_send` (or want a second layer), PostHog supports server-side suppression so noise is dropped at ingestion without a code deploy:

- **Error tracking → Suppression rules / Autocapture exception filters:** add rules to drop `$exception` events whose `$exception_list` message matches each signature:
  - `Object Not Found Matching Id` **and** `MethodName:update`
  - `ResizeObserver loop completed with undelivered notifications.`
  - `Script error.`
- **Ingestion / transformation filters** (project settings) can drop events pre-storage by the same message match.
- **Trade-offs:** server-side rules apply to **both** apps sharing project 127536 (fine for these browser-noise signatures, which are not app-specific) and can be changed without a redeploy; the client hook saves the network call and event quota by dropping before send. Using both is reasonable. Longer term, consider **splitting longhand and the website into separate PostHog projects** so their error boards stop contaminating each other.

---

## Intentionally NOT done (and why)

- **No edits to `Tokens.tsx` / `AIAgentSkills.tsx` / `LKOfficeHours.tsx`** — HEAD is clean; speculative edits would add risk with no benefit.
- **Did not re-add the `Coins` import** — it is unused; re-adding it to match an old stack trace would reintroduce dead code.
- **Did not touch the `longhand` repo** or any Tauri/Svelte/Rust issue — explicitly out of scope.
- **Did not broaden the error filter** — only the three named signatures are dropped; A–D and all other exceptions remain fully captured.
- **Did not commit, push, branch, or open a PR** — left as an uncommitted working-tree diff on `fix-errors` for human review.
- **Reverted `public/sitemap.xml` / `public/sitemap-index.xml`** — those were date/data churn from running `npm run build` during verification, not part of the fix.
- **Did not add `manualChunks` / code-splitting** — out of scope; the existing "chunk > 500 kB" message is a pre-existing benign warning, not an error.
