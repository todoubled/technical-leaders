import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Call from "./pages/Call";
import CallConfirmed from "./pages/CallConfirmed";
import AITradeSchool from "./pages/AITradeSchool";
import Launch from "./pages/Launch";
import Scale from "./pages/Scale";
import Accredited from "./pages/Accredited";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
