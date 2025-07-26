import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import AlternativeToMBA from "./pages/AlternativeToMBA";
import TLAIWorkflow from "./pages/TLAIWorkflow";
import RGAWorkshop from "./pages/RGAWorkshop";
import PlaybookConfirmed from "./pages/PlaybookConfirmed";
import ShipAI from "./pages/ShipAI";
import AiExecutiveStrategy from "./pages/AiExecutiveStrategy";
import AiPlaybookExecutives from "./pages/AiPlaybookExecutives";
import CallTemplates from "./pages/CallTemplates";
import LaunchWithUs from "./pages/LaunchWithUs";
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
          <Route path="/alternative-to-mba" element={<AlternativeToMBA />} />
          <Route path="/tl-ai-workflow" element={<TLAIWorkflow />} />
          <Route path="/workshop" element={<Navigate to="/tl-ai-workflow" replace />} />
          <Route path="/in-demand" element={<RGAWorkshop />} />
          <Route path="/playbook-confirmed" element={<PlaybookConfirmed />} />
          <Route path="/ship-ai" element={<ShipAI />} />
          <Route path="/ai-executive-strategy-program" element={<AiExecutiveStrategy />} />
          <Route path="/ai-playbook-executives" element={<AiPlaybookExecutives />} />
          <Route path="/call-templates" element={<CallTemplates />} />
          <Route path="/launch-with-us" element={<LaunchWithUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
