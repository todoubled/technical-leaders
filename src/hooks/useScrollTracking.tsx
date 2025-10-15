import { useState, useEffect, useCallback } from 'react';

interface ScrollTrackingData {
  scrollProgress: number; // 0 to 1
  scrollDepth: number; // percentage 0-100
  isScrollingUp: boolean;
  hasReachedMidpoint: boolean;
  hasReachedEnd: boolean;
  timeOnPage: number; // seconds
}

export function useScrollTracking() {
  const [scrollData, setScrollData] = useState<ScrollTrackingData>({
    scrollProgress: 0,
    scrollDepth: 0,
    isScrollingUp: false,
    hasReachedMidpoint: false,
    hasReachedEnd: false,
    timeOnPage: 0
  });

  const [lastScrollY, setLastScrollY] = useState(0);
  const [maxScrollDepth, setMaxScrollDepth] = useState(0);

  // Track time on page
  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      setScrollData(prev => ({ ...prev, timeOnPage: elapsed }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Calculate scroll progress
  const calculateScrollProgress = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;

    // Calculate progress (0 to 1)
    const totalScrollableHeight = documentHeight - windowHeight;
    const progress = totalScrollableHeight > 0
      ? scrollTop / totalScrollableHeight
      : 0;

    // Calculate depth as percentage
    const depth = Math.round(progress * 100);

    // Track maximum depth reached
    if (depth > maxScrollDepth) {
      setMaxScrollDepth(depth);
    }

    // Determine scroll direction
    const isScrollingUp = scrollTop < lastScrollY;
    setLastScrollY(scrollTop);

    // Update state
    setScrollData(prev => ({
      ...prev,
      scrollProgress: Math.min(progress, 1),
      scrollDepth: Math.min(depth, 100),
      isScrollingUp,
      hasReachedMidpoint: progress >= 0.5,
      hasReachedEnd: progress >= 0.9
    }));
  }, [lastScrollY, maxScrollDepth]);

  useEffect(() => {
    // Initial calculation
    calculateScrollProgress();

    // Throttled scroll handler
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calculateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculateScrollProgress);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateScrollProgress);
    };
  }, [calculateScrollProgress]);

  return {
    ...scrollData,
    maxScrollDepth // Useful for analytics
  };
}
