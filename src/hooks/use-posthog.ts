import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  identify, 
  trackEvent, 
  trackConversion, 
  trackClick,
  trackFormInteraction,
  UserTraits,
  EventProperties 
} from '@/utils/posthog';

/**
 * Hook to automatically capture and identify users when they submit their email
 */
export const useEmailCapture = () => {
  const captureEmail = useCallback((email: string, additionalTraits?: Partial<UserTraits>) => {
    if (!email) return;

    // Identify the user with their email
    identify({
      email,
      ...additionalTraits,
      captured_at: new Date().toISOString()
    });

    // Track email capture as a conversion
    trackConversion('Email Captured', {
      email,
      source: window.location.pathname,
      ...additionalTraits
    });
  }, []);

  return { captureEmail };
};

/**
 * Hook to track button clicks with proper attribution
 */
export const useTrackClick = () => {
  const location = useLocation();

  const handleTrackClick = useCallback((buttonName: string, properties?: EventProperties) => {
    trackClick(buttonName, {
      page: location.pathname,
      ...properties
    });
  }, [location]);

  return { trackClick: handleTrackClick };
};

/**
 * Hook to track form interactions
 */
export const useFormTracking = (formName: string) => {
  const location = useLocation();
  
  const trackFormStart = useCallback(() => {
    trackFormInteraction(formName, 'start', {
      page: location.pathname
    });
  }, [formName, location]);

  const trackFormSubmit = useCallback((fields: Record<string, unknown>) => {
    trackFormInteraction(formName, 'submit', {
      page: location.pathname,
      ...fields
    });
  }, [formName, location]);

  const trackFormAbandon = useCallback(() => {
    trackFormInteraction(formName, 'abandon', {
      page: location.pathname
    });
  }, [formName, location]);

  return {
    trackFormStart,
    trackFormSubmit,
    trackFormAbandon
  };
};

/**
 * Hook to track conversion events
 */
export const useTrackConversion = () => {
  const location = useLocation();

  const handleTrackConversion = useCallback((
    conversionType: string, 
    properties?: EventProperties
  ) => {
    trackConversion(conversionType, {
      page: location.pathname,
      ...properties
    });
  }, [location]);

  return { trackConversion: handleTrackConversion };
};

/**
 * Hook to track generic events
 */
export const useTrackEvent = () => {
  const location = useLocation();

  const handleTrackEvent = useCallback((
    eventName: string,
    properties?: EventProperties
  ) => {
    trackEvent(eventName, {
      page: location.pathname,
      ...properties
    });
  }, [location]);

  return { trackEvent: handleTrackEvent };
};

/**
 * Hook to automatically track component visibility
 */
export const useTrackVisibility = (componentName: string, properties?: EventProperties) => {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackEvent(`${componentName} Viewed`, {
              page: location.pathname,
              ...properties
            });
            // Only track once
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    // Start observing after a small delay to ensure element is rendered
    const timer = setTimeout(() => {
      const element = document.querySelector(`[data-track-visibility="${componentName}"]`);
      if (element) {
        observer.observe(element);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [componentName, location.pathname, properties]);
};

/**
 * Hook to track scroll depth
 */
export const useTrackScrollDepth = (pageName: string) => {
  const location = useLocation();

  useEffect(() => {
    let maxScrollDepth = 0;
    const scrollDepthThresholds = [25, 50, 75, 90, 100];
    const trackedThresholds = new Set<number>();

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const scrollDepth = Math.round((scrolled / scrollHeight) * 100);

      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;

        scrollDepthThresholds.forEach((threshold) => {
          if (scrollDepth >= threshold && !trackedThresholds.has(threshold)) {
            trackedThresholds.add(threshold);
            trackEvent('Scroll Depth Reached', {
              page: location.pathname,
              page_name: pageName,
              depth: threshold,
              max_depth: maxScrollDepth
            });
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      
      // Track final scroll depth when leaving page
      if (maxScrollDepth > 0) {
        trackEvent('Page Scroll Summary', {
          page: location.pathname,
          page_name: pageName,
          max_depth: maxScrollDepth
        });
      }
    };
  }, [pageName, location.pathname]);
};