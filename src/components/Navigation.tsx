
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
              <DropdownMenu>
                <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors flex items-center">
                  Programs <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={() => {
                    trackClick('Nav Dropdown - Launch Kit', {
                      location: 'nav_dropdown',
                      destination: '/launch-with-us'
                    });
                    window.location.href = "/launch-with-us";
                  }}>
                    Launch Kit
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => {
                    trackClick('Nav Dropdown - Ship AI', {
                      location: 'nav_dropdown',
                      destination: '/ship-ai'
                    });
                    window.location.href = "/ship-ai";
                  }}>
                    Ship AI
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => {
                    trackClick('Nav Dropdown - AI for Execs/Founders', {
                      location: 'nav_dropdown',
                      destination: '/ai-for-leaders'
                    });
                    window.location.href = "/ai-for-leaders";
                  }}>
                    AI for Execs/Founders
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <a href="/articles" className="text-foreground hover:text-primary transition-colors">Articles</a>
              
              <div className="playbook-nav-item">
                <a href="https://techleaders.kit.com/playbook?utm_source=technical-leaders" target="_blank" className="text-foreground hover:text-primary transition-colors">Get the Playbook</a>
                <a className="book-container" href="https://techleaders.kit.com/playbook?utm_source=technical-leaders" target="_blank" rel="noreferrer noopener">
                  <div className="book">
                    <img alt="" src="https://www.technical-leaders.com/playbook-cover.png" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" onClick={() => {
              trackClick('Nav - Sign In', {
                location: 'nav_main',
                destination: 'https://skool.com/tech-leaders'
              });
              window.location.href = "https://skool.com/tech-leaders";
            }}>Sign In</Button>
            <Button onClick={() => {
              trackClick('Nav - Apply to Join', {
                location: 'nav_main',
                destination: '/call'
              });
              window.location.href = "/call";
            }}>Apply to Join</Button>
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
              <div className="font-medium mb-2">Programs</div>
              <div className="ml-4 space-y-1">
                <a href="/launch-with-us" className="block py-1 text-sm text-muted-foreground hover:text-primary">Launch Kit</a>
                <a href="/ship-ai" className="block py-1 text-sm text-muted-foreground hover:text-primary">Ship AI</a>
                <a href="/ai-for-leaders" className="block py-1 text-sm text-muted-foreground hover:text-primary">AI for Execs/Founders</a>
              </div>
            </div>
            <a href="/articles" className="block px-3 py-2 text-foreground hover:text-primary">Articles</a>
            <a href="https://techleaders.kit.com/playbook?utm_source=technical-leaders" target="_blank" className="block px-3 py-2 text-foreground hover:text-primary">Get the Playbook</a>
            <div className="px-3 py-2 space-y-2">
              <Button variant="ghost" className="w-full" onClick={() => {
                trackClick('Nav Mobile - Sign In', {
                  location: 'nav_mobile',
                  destination: 'https://skool.com/tech-leaders'
                });
                window.location.href = "https://skool.com/tech-leaders";
              }}>Sign In</Button>
              <Button className="w-full" onClick={() => {
                trackClick('Nav Mobile - Apply to Join', {
                  location: 'nav_mobile',
                  destination: '/call'
                });
                window.location.href = "/call";
              }}>Apply to Join</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
