// SSG server entry. Built with `vite build --ssr` (see package.json build:ssr) and
// driven by scripts/prerender.mjs to emit static HTML per route.
//
// It renders the SAME route table the client uses (AppRoutes from App.tsx) inside
// a StaticRouter + Helmet context, then returns the body HTML plus the collected
// <head> tags (title, meta, JSON-LD) so the prerender script can inject both into
// the built index.html template.
//
// For /post/:slug, the prerender preloads the article body into the data layer's
// cache (via the re-exported loadArticle) BEFORE calling render, so getArticleSync
// resolves synchronously during renderToString and the full content is server-rendered.

import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import { AppRoutes } from './App';

export interface RenderResult {
  appHtml: string;
  // Concatenated <head> markup: <title>, <meta>, <link rel="canonical">, JSON-LD.
  headTags: string;
  htmlAttributes: string;
  bodyAttributes: string;
}

export async function render(url: string): Promise<RenderResult> {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const appHtml = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>
  );

  const { helmet } = helmetContext;
  const headTags = helmet
    ? [
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ]
        .filter(Boolean)
        .join('\n    ')
    : '';

  return {
    appHtml,
    headTags,
    htmlAttributes: helmet ? helmet.htmlAttributes.toString() : '',
    bodyAttributes: helmet ? helmet.bodyAttributes.toString() : '',
  };
}

// Re-export snapshot helpers so the prerender script can enumerate routes and
// preload each article body before rendering.
export { getAllSlugs, loadArticle } from './lib/articles';

// Re-export the static route list (every real, fixed-path page) so the prerender
// script generates exactly the routes the app actually serves — no second,
// hand-maintained list that can drift from the route table.
export { getStaticRoutePaths } from './routes';
