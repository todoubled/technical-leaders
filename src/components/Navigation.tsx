
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

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
              <a href="/#how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</a>
              <a href="/#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="/#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
              <a href="/#pricing" className="text-foreground hover:text-primary transition-colors">Get Started</a>
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
            <a href="#how-it-works" className="block px-3 py-2 text-foreground hover:text-primary">How It Works</a>
            <a href="#about" className="block px-3 py-2 text-foreground hover:text-primary">About</a>
            <a href="#testimonials" className="block px-3 py-2 text-foreground hover:text-primary">Testimonials</a>
            <a href="#pricing" className="block px-3 py-2 text-foreground hover:text-primary">Pricing</a>
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
