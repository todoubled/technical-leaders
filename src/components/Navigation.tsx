
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import "./Navigation.css";
import { trackClick } from "@/utils/posthog";

interface NavigationProps {
  hideCTA?: boolean;
  variant?: "dark" | "light";
}

const variantClasses = {
  dark: {
    nav: "bg-background/95 border-border",
    menuButton: "text-foreground hover:text-primary",
    mobileMenu: "bg-background border-border",
  },
  light: {
    nav: "bg-longhand-paper/95 border-longhand-border",
    menuButton: "text-longhand-ink hover:text-longhand-accent",
    mobileMenu: "bg-longhand-paper border-longhand-border",
  },
} as const;

const Navigation = ({ hideCTA = false, variant = "dark" }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const styles = variantClasses[variant];

  return (
    <nav className={`fixed top-0 w-full backdrop-blur-md z-50 border-b ${styles.nav}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/"><img src="/orange-logo.png" alt="Tech Leaders" className="h-10 w-auto" /></a>
          </div>

          {!hideCTA && (
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
          )}

          {!hideCTA && (
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={styles.menuButton}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          )}
        </div>
      </div>

      {!hideCTA && isMenuOpen && (
        <div className={`md:hidden border-b ${styles.mobileMenu}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
