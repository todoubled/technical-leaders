import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    {
      name: "s2p-elevate-ai-guide-rewrite",
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url === "/s2p-elevate-ai-guide") {
            req.url = "/s2p-elevate-ai-guide.html";
          }
          next();
        });
      },
    },
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssr: {
    // Bundle these into the SSR build (instead of leaving them external) so their
    // CommonJS/ESM interop is handled by Vite. Without this, Node's ESM loader
    // fails on named imports like `import { Helmet } from "react-helmet-async"`
    // during the prerender (scripts/prerender.mjs).
    noExternal: ["react-helmet-async", "react-router-dom", "react-router"],
  },
}));
