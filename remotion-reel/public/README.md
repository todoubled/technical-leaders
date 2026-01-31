# Remotion Reel Assets

This folder contains static assets for the Instagram Reel video.

## Required Assets

### Logo
- `transparent-bg-logo.png` - Technical Leaders logo (already included)

### Lo-fi Music (Required for Audio)
To enable background music:

1. Download a royalty-free lo-fi hip hop track (~15 seconds minimum)
   - Recommended: [Pixabay Lo-fi Music](https://pixabay.com/music/search/lofi/)
   - Recommended: [Free Music Archive](https://freemusicarchive.org/)
   - Look for tracks around 85-95 BPM for best beat sync

2. Save it as `lofi-beat.mp3` in this folder

3. In `src/MarketingReel.tsx`, change `ENABLE_AUDIO` to `true`:
   ```typescript
   const ENABLE_AUDIO = true;
   ```

## Beat Synchronization

The video animations are synced to ~21 frames per beat (approximately 86 BPM).
This matches typical lo-fi hip hop tempo. If your track has a different BPM,
adjust the `BEAT_INTERVAL` constant in `src/MarketingReel.tsx`.

Common BPM settings:
- 70 BPM: BEAT_INTERVAL = 26
- 80 BPM: BEAT_INTERVAL = 23
- 85 BPM: BEAT_INTERVAL = 21 (default)
- 90 BPM: BEAT_INTERVAL = 20
- 95 BPM: BEAT_INTERVAL = 19

## Existing Assets

- `transparent-bg-logo.png` - Company logo
- `amelia-leigner.png` - Team photo
- `john-chapman.jpeg` - Team photo
- `li-todd.jpg` - Team photo
- `linkedin-convo-*.png` - Social proof screenshots
