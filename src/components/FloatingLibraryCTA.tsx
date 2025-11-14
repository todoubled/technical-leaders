import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, BookOpen } from 'lucide-react';
import { trackClick } from '@/utils/posthog';

export default function FloatingLibraryCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show CTA after user has scrolled down a bit (to avoid immediate popup)
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      setIsVisible(scrolled && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    trackClick('Floating Library CTA - Dismiss', { location: window.location.pathname });
  };

  const handleClick = () => {
    trackClick('Floating Library CTA - Click', { location: window.location.pathname });
    window.location.href = '/library';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-lg shadow-2xl p-4 max-w-xs relative group hover:scale-105 transition-transform">
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 bg-white text-gray-700 rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-start gap-3">
          <div className="bg-white/20 rounded-lg p-2 flex-shrink-0">
            <BookOpen className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-sm mb-1">
              Build AI Workflows in Minutes
            </h3>
            <p className="text-xs text-white/90 mb-3">
              Agentic prompts you can copy, paste & edit in 60 seconds
            </p>
            <Button
              onClick={handleClick}
              size="sm"
              className="w-full bg-white text-orange-600 hover:bg-gray-100 font-semibold"
            >
              Get Free Library
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
