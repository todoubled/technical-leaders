
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
                  <DropdownMenuItem onClick={() => window.location.href = "/ai-trade-school"}>
                    AI Trade School
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => window.location.href = "/launch"}>
                    Launch Kit
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => window.location.href = "/scale"}>
                    Scale Program
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <a href="/articles" className="text-foreground hover:text-primary transition-colors">Articles</a>
              <a href="https://techleaders.kit.com/playbook" target="_blank" className="text-foreground hover:text-primary transition-colors">Get the Playbook</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" onClick={() => { window.location.href = "https://skool.com/tech-leaders" }}>Sign In</Button>
            <Button onClick={() => { window.location.href = "/call" }}>Book Intro Call</Button>
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
            <a href="/#how-it-works" className="block px-3 py-2 text-foreground hover:text-primary">How It Works</a>
            <div className="px-3 py-2 text-foreground">
              <div className="font-medium mb-2">Programs</div>
              <div className="ml-4 space-y-1">
                <a href="/ai-trade-school" className="block py-1 text-sm text-muted-foreground hover:text-primary">AI Trade School</a>
                <a href="/launch" className="block py-1 text-sm text-muted-foreground hover:text-primary">Launch Kit</a>
                <a href="/scale" className="block py-1 text-sm text-muted-foreground hover:text-primary">Scale Program</a>
              </div>
            </div>
            <a href="/articles" className="block px-3 py-2 text-foreground hover:text-primary">Articles</a>
            <a href="https://techleaders.kit.com/playbook" target="_blank" className="block px-3 py-2 text-foreground hover:text-primary">Get the Playbook</a>
            <div className="px-3 py-2 space-y-2">
              <Button variant="ghost" className="w-full" onClick={() => { window.location.href = "https://skool.com/tech-leaders" }}>Sign In</Button>
              <Button className="w-full" onClick={() => { window.location.href = "/call" }}>Book Intro Call</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
