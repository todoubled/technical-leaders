
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
            <div className="text-2xl font-bold text-primary">Facilitator</div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Pricing</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Resources</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button>Get Started</Button>
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
            <a href="#features" className="block px-3 py-2 text-foreground hover:text-primary">Features</a>
            <a href="#testimonials" className="block px-3 py-2 text-foreground hover:text-primary">Testimonials</a>
            <a href="#pricing" className="block px-3 py-2 text-foreground hover:text-primary">Pricing</a>
            <a href="#" className="block px-3 py-2 text-foreground hover:text-primary">Resources</a>
            <div className="px-3 py-2 space-y-2">
              <Button variant="ghost" className="w-full">Sign In</Button>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
