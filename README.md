# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/27d19ac4-23b0-40c3-b3f1-1f333c59a4e3

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/27d19ac4-23b0-40c3-b3f1-1f333c59a4e3) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Blog articles (snapshot + prerender)

Blog articles (`/articles` and `/post/:slug`) are served from a committed snapshot,
not fetched from the SEObot API at runtime. The snapshot lives in
`src/data/articles/`:

- `index.json` — lightweight summaries for the grid.
- `posts/<slug>.json` — one full article (with HTML body) per slug.

The running app reads only this snapshot (`src/lib/articles.ts`). The build does
not call SEObot and needs no API key.

To refresh article content:

```sh
# Requires VITE_SEOBOT_API_KEY in .env. Re-fetches every article and rewrites
# the snapshot files; commit whatever changes.
npm run fetch-articles
```

`npm run build` then prerenders each article route to static HTML
(`scripts/prerender.mjs`) so `/post/:slug` and `/articles` are served as fully
rendered pages with correct per-article title, meta, and JSON-LD. The fetch
script is the only consumer of the SEObot API and is never run by the build.

Note: featured images still point at the remote SEObot/CDN URLs. Localizing them
into the repo is possible future work and is intentionally not done here.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/27d19ac4-23b0-40c3-b3f1-1f333c59a4e3) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
