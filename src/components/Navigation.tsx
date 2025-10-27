
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
              <a href="/how-it-works" className="text-foreground hover:text-primary transition-colors">Productize Yourself</a>
              <a href="/ai" className="text-foreground hover:text-primary transition-colors relative inline-flex items-center">
                AI
                <span className="ml-2 bg-emerald-500 text-white text-xs font-bold px-2 py-0.5 rounded">NEW</span>
              </a>
              <a href="/articles" className="text-foreground hover:text-primary transition-colors">Articles</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="/playbook" className="text-foreground hover:text-primary transition-colors">Get the Playbook</a>
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
            <div className="px-3 py-2 text-foreground">
              <div className="font-medium mb-2">How We Help</div>
              <div className="ml-4 space-y-1">
                <a href="/how-it-works" className="block py-1 text-sm text-muted-foreground hover:text-primary">Productize Yourself</a>
                <a href="/ai" className="block py-1 text-sm text-muted-foreground hover:text-primary">AI</a>
              </div>
            </div>
            <a href="/articles" className="block px-3 py-2 text-foreground hover:text-primary">Articles</a>
            <a href="/playbook" className="block px-3 py-2 text-foreground hover:text-primary">Get the Playbook</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
