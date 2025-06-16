import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Call from "./pages/Call";
import CallConfirmed from "./pages/CallConfirmed";
import AITradeSchool from "./pages/AITradeSchool";
import Launch from "./pages/Launch";
import Scale from "./pages/Scale";
import Accredited from "./pages/Accredited";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Refer from "./pages/Refer";
import AlternativeToSidebar from "./pages/AlternativeToSidebar";
import TLAIWorkflow from "./pages/TLAIWorkflow";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/call" element={<Call />} />
          <Route path="/call-confirmed" element={<CallConfirmed />} />
          <Route path="/ai-trade-school" element={<AITradeSchool />} />
          <Route path="/launch" element={<Launch />} />
          <Route path="/scale" element={<Scale />} />
          <Route path="/accredited" element={<Accredited />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/post/:slug" element={<Article />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refer" element={<Refer />} />
          <Route path="/alternative-to-sidebar" element={<AlternativeToSidebar />} />
          <Route path="/tl-ai-workflow" element={<TLAIWorkflow />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
