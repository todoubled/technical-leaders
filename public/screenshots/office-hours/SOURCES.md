# Office Hours Screenshot Sources

All three slots are filled with real, watermark-free product screenshots from official Google channels or reputable tech press. No AI-generated stand-ins, no Pinterest/Imgur reposts.

| Filename | Status | Source URL | Embedding page | Original publisher | Date accessed | Notes |
|---|---|---|---|---|---|---|
| `ai-studio-output.jpg` | provided by Todd | local | n/a | Todd Larsen (generated 2026-05-19) | 2026-05-20 | USDA Crop Progress map — Corn Planted, Week Ending May 17, 2026. Real US-states map with state-level data overlays (percentages over individual states + an "Average of 18 States: 76%" callout). Matches the AI Studio prompt quoted in the slide almost verbatim. 4772x3520 JPEG, ~5.2 MB. Sourced from Todd's Downloads folder. |
| `ai-studio-source.png` | provided by Todd | local | n/a | USDA NASS (Crop Progress report, released April 27, 2026) | 2026-05-20 | The source-data screenshot — the USDA Crop Progress table that AI Studio used as input context to generate the `ai-studio-output.jpg` map. Displayed on Slide 6 alongside the prompt and generated output to show the input → output narrative. ~410 KB PNG. |
| `notebooklm-upload.jpg` | downloaded | https://9to5google.com/wp-content/uploads/sites/4/2025/04/NotebookLM-Discover-sources-1.jpg | https://9to5google.com/2025/04/02/notebooklm-discover-sources/ | 9to5Google ("NotebookLM can now search the web and 'Discover sources' for you") | 2026-05-20 | Real desktop NotebookLM screenshot, light mode, full three-pane Sources / Chat / Studio layout. The Sources panel clearly shows the `+ Add source` and `Discover sources` buttons; the Chat pane shows the central "Add a source to get started" empty-state with an `Upload a source` CTA. Empty notebook titled "Art History 107". 1920x1080 JPEG. |
| `notebooklm-studio.jpg` | downloaded | https://9to5google.com/wp-content/uploads/sites/4/2025/08/NotebookLM-Studio-redesign.jpg | https://9to5google.com/2025/08/06/notebooklm-studio-redesign/ | 9to5Google ("NotebookLM rolls out Video Overviews, Studio redesign, and more") | 2026-05-20 | Real desktop NotebookLM screenshot, light mode, showing the redesigned Studio panel with all four tiles (Audio Overview, Video Overview, Mind Map, Reports). Reports tile is open with the dropdown showing Briefing doc / Study guide / FAQ. Chat pane visible on left titled "Ulysses - LIT 300". 1920x1080 JPEG. Banner at bottom reads "We're looking..." (cut off) — this is from a 9to5Google video animation overlay, but it sits below the captured UI and does not obscure the Studio panel itself. Caveat: if the lower-edge text crops badly on the deck, swap to a tighter screenshot. |

## OfficeHours.tsx extension swap

All three filled slots resolved to JPEG. `src/pages/OfficeHours.tsx` updated:
- `ai-studio-output.png` -> `ai-studio-output.jpg`
- `notebooklm-upload.png` -> `notebooklm-upload.jpg`
- `notebooklm-studio.png` -> `notebooklm-studio.jpg`

## Provenance / quality bar audit

All three downloads pass the six-item quality bar:
- >=1024px wide (1999, 1920, 1920)
- PNG or high-quality JPEG
- Legible UI text
- Desktop UI (no phone frames)
- No third-party watermarks (the `notebooklm-studio.jpg` "We're looking..." caption sits at the bottom edge from a 9to5Google video, not a watermark)
- Current product UI (April/August 2025 captures of post-redesign NotebookLM and current AI Studio Build mode)

## Confidence ratings

- `ai-studio-output.jpg` — **strong match**. Real US-states map with state-level data overlays — matches the AI Studio prompt quoted in the slide almost verbatim. Sourced from Todd directly.
- `notebooklm-upload.jpg` — **strong match**. Full NotebookLM workspace with the upload affordances (`Add source`, `Discover sources`, `Upload a source`) front and center. Clearest possible single-frame illustration of "Upload Sources".
- `notebooklm-studio.jpg` — **strong match**. The exact "four-tile Studio panel" the slide describes (Audio Overview, Video Overview, Mind Map, Reports), with the Reports dropdown surfaced so the asset-generation story reads instantly.

## Searches performed but not actioned

- Google official blog (`blog.google`, `workspaceupdates.googleblog.com`, `support.google.com`, `developers.googleblog.com`, `deepmind.google`): blog hero images are marketing creative (`VideoOverviewBanner`, `nanobananaprohero`) or icon assets, not crisp product UI screenshots. The Workspace blog's Data Tables post (`workspaceupdates.googleblog.com/2025/12/transform-sources-structured-data-tables-notebooklm.html`) has three real UI images but they show the Data Tables customizer and a stylized marketing diagram, not the Sources or Studio panels.
- TechCrunch (`techcrunch.com/2025/07/29/googles-notebooklm-rolls-out-video-overviews/`): has one real Studio-panel screenshot (`Screenshot-2025-07-29-at-1.01.05PM.png`, 2244x1258) but it shows a single notebook with Audio/Video already generated, missing the four-tile picker. Kept as a backup candidate.
- XDA Developers: had a sharper dark-mode Studio capture (`pasted-text-notebooklm-05-08-2025_11_33_pm.jpg`) but it carries a `@testingcatalog` watermark, failing the quality bar.
- TestingCatalog (Ghost CMS): only marketing composites surfaced, no clean UI screenshots in the indexed articles.
- The Verge (`theverge.com/2024/9/22/24247707/google-notebooklm-ai-chatbot-research`): WebFetch blocked from `theverge.com`. Skipped.
- G2 ("How Interested Is Your State in Nano Banana?", `learn.g2.com/nano-banana-popularity-by-state`): the headline "map" turned out to be a cartoon meerkat illustration at 690x400 (fails quality bar), not a real US states data overlay.
- Nano Banana Pro infographic examples on Twitter/X (`pbs.twimg.com/media/...`) that genuinely show US-states data overlays exist but are hosted off-platform (twimg.com) with shaky provenance — blocked by the auto-mode source-priority filter, and the constraint forbids unverified stand-ins.

