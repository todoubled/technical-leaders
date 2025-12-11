
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import "./Navigation.css";
import { trackClick } from "@/utils/posthog";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/"><img src="/orange-logo.png" alt="Tech Leaders" className="h-10 w-auto" /></a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/ai-workflows" className="text-foreground hover:text-primary transition-colors flex items-center gap-2">
                Join the AI Workshop
                <span className="bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded">FREE</span>
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={() => {
                trackClick('Fortune 100 AI Prompt Library', { location: 'navigation' });
                window.location.href = '/library';
              }}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold"
            >
              Get the Fortune 100 AI Prompt Library
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/ai-workflows" className="block px-3 py-2 text-foreground hover:text-primary flex items-center">
              AI Workshop
              <span className="ml-2 bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded">FREE</span>
            </a>
            <div className="px-3 py-2">
              <Button
                onClick={() => {
                  trackClick('Fortune 100 AI Prompt Library', { location: 'mobile_navigation' });
                  window.location.href = '/library';
                }}
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold"
              >
                Fortune 100 AI Prompt Library
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
