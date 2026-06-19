import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { trackPageView } from "./utils/posthog";
import { appRoutes, NotFoundRoute } from "./routes";

const queryClient = new QueryClient();

// Component to track page views
const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    trackPageView();

    // Note: UTM parameters are already captured in index.html posthog initialization
    // We don't need to set them again here to avoid duplication
  }, [location]);

  return null;
};

// Providers + route table, WITHOUT a router. Shared by the client entry (wrapped
// in BrowserRouter, below) and the SSG prerender entry (wrapped in StaticRouter in
// src/entry-server.tsx), so both render the exact same tree.
//
// The <Route> list is derived from the single route source in src/routes.tsx, so
// the client, the prerender, and the sitemap all agree on what each path renders.
export const AppRoutes = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <PageViewTracker />
      <Routes>
        {appRoutes.map((route) => {
          if (route.kind === 'redirect') {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<Navigate to={route.to} replace />}
              />
            );
          }
          const { Component } = route;
          return <Route key={route.path} path={route.path} element={<Component />} />;
        })}
        {/* ADD ALL CUSTOM ROUTES IN src/routes.tsx, ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFoundRoute />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

// Client app: HelmetProvider + BrowserRouter around the shared route table.
const App = () => (
  <HelmetProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
