import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Recover from stale dynamic-chunk loads after a deploy.
// When we ship a new build, Vercel serves a fresh index.html, but a tab that was
// opened before the deploy may still try to import the OLD hashed chunk filenames,
// which no longer exist on the CDN. Vite fires `vite:preloadError` in that case.
// We reload once so the browser fetches the current index.html (and its current
// chunks). A sessionStorage flag guards against an infinite reload loop if the
// reload doesn't actually fix the failure (e.g. a genuinely broken deploy or
// offline network) — we only ever auto-reload a single time per tab session.
window.addEventListener('vite:preloadError', () => {
  if (sessionStorage.getItem('vite-preload-error-reloaded') === '1') return;
  sessionStorage.setItem('vite-preload-error-reloaded', '1');
  window.location.reload();
});

createRoot(document.getElementById("root")!).render(<App />);
