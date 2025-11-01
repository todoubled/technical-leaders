import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import posthogManager, { trackPageView, setSuperProperties } from "./utils/posthog";
import Index from "./pages/Index";
import Call from "./pages/Call";
import Calls from "./pages/Calls";
import CallConfirmed from "./pages/CallConfirmed";
import AITradeSchool from "./pages/AITradeSchool";
import Launch from "./pages/Launch";
import Scale from "./pages/Scale";
import Marketing from "./pages/Marketing";
import CFO from "./pages/CFO";
import Accredited from "./pages/Accredited";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Refer from "./pages/Refer";
import AlternativeToSidebar from "./pages/AlternativeToSidebar";
import AlternativeToMBA from "./pages/AlternativeToMBA";
import RGAWorkshop from "./pages/RGAWorkshop";
import PlaybookConfirmed from "./pages/PlaybookConfirmed";
import ShipAI from "./pages/ShipAI";
import ShipAITrainingProgram from "./pages/ShipAITrainingProgram";
import AiExecutiveStrategy from "./pages/AiExecutiveStrategy";
import AiPlaybookExecutives from "./pages/AiPlaybookExecutives";
import CallTemplates from "./pages/CallTemplates";
import LaunchWithUs from "./pages/LaunchWithUs";
import HowToModelYourOffer from "./pages/HowToModelYourOffer";
import FinanceForFounders from "./pages/FinanceForFounders";
import FinanceForFoundersWorkshop from "./pages/FinanceForFoundersWorkshop";
import FinanceWorkshopConfirmed from "./pages/FinanceWorkshopConfirmed";
import AIForVC from "./pages/AIForVC";
import AIForLeaders from "./pages/AIForLeaders";
import Benchmark from "./pages/Benchmark";
import TenBeforeTen from "./pages/TenBeforeTen";
import GetPlaybook from "./pages/GetPlaybook";
import AiWorkspace from "./pages/AiWorkspace";
import AdvancedClaude from "./pages/AdvancedClaude";
import AIForSuits from "./pages/AIForSuits";
import AiRdSystem from "./pages/AiRdSystem";
import HowItWorks from "./pages/HowItWorks";
import Speak from "./pages/Speak";
import AIProgramSelector from "./pages/AIProgramSelector";
import Fortune100PromptLibrary from "./pages/Fortune100PromptLibrary";
import Fortune100AiWorkspace from "./pages/Fortune100AiWorkspace";
import Library from "./pages/Library";
import Playbook from "./pages/Playbook";
import NotFound from "./pages/NotFound";

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

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PageViewTracker />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/call" element={<Call />} />
          <Route path="/calls" element={<Calls />} />
          <Route path="/call-confirmed" element={<CallConfirmed />} />
          <Route path="/ai-trade-school" element={<AITradeSchool />} />
          <Route path="/launch" element={<Launch />} />
          <Route path="/scale" element={<Scale />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/cfo" element={<CFO />} />
          <Route path="/accredited" element={<Accredited />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/post/:slug" element={<Article />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refer" element={<Refer />} />
          <Route path="/alternative-to-sidebar" element={<AlternativeToSidebar />} />
          <Route path="/alternative-to-mba" element={<AlternativeToMBA />} />
          <Route path="/in-demand" element={<RGAWorkshop />} />
          <Route path="/playbook-confirmed" element={<PlaybookConfirmed />} />
          <Route path="/ship-ai" element={<ShipAI />} />
          <Route path="/ship-ai-training-program" element={<ShipAITrainingProgram />} />
          <Route path="/ai-executive-strategy-program" element={<AiExecutiveStrategy />} />
          <Route path="/ai-playbook-executives" element={<AiPlaybookExecutives />} />
          <Route path="/call-templates" element={<CallTemplates />} />
          <Route path="/launch-with-us" element={<LaunchWithUs />} />
          <Route path="/how-to-model-your-offer" element={<HowToModelYourOffer />} />
          <Route path="/finance-for-founders" element={<FinanceForFounders />} />
          <Route path="/finance-for-founders-workshop" element={<FinanceForFoundersWorkshop />} />
          <Route path="/finance-workshop-confirmed" element={<FinanceWorkshopConfirmed />} />
          <Route path="/ai" element={<AIProgramSelector />} />
          <Route path="/ai-for-vc" element={<AIForVC />} />
          <Route path="/ai-for-leaders" element={<AIForLeaders />} />
          <Route path="/benchmark" element={<Benchmark />} />
          <Route path="/10-before-10" element={<TenBeforeTen />} />
          <Route path="/full-playbook" element={<GetPlaybook />} />
          <Route path="/ai-workspace" element={<AiWorkspace />} />
          <Route path="/ai-workflow" element={<Navigate to="/ai-workspace" replace />} />
          <Route path="/ai-agent-basics" element={<Navigate to="/ai-workspace" replace />} />
          <Route path="/advanced-claude" element={<AdvancedClaude />} />
          <Route path="/ai-for-suits" element={<AIForSuits />} />
          <Route path="/ai-rd-system" element={<AiRdSystem />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/speak" element={<Speak />} />
          <Route path="/fortune-100-prompt-library" element={<Fortune100PromptLibrary />} />
          <Route path="/fortune-100-ai-workspace" element={<Fortune100AiWorkspace />} />
          <Route path="/library" element={<Library />} />
          <Route path="/playbook" element={<Playbook />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
