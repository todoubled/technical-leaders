declare global {
  interface Window {
    posthog?: {
      init: (key: string, config: Record<string, unknown>) => void;
      identify: (id: string, properties?: Record<string, unknown>) => void;
      capture: (event: string, properties?: Record<string, unknown>) => void;
      register: (properties: Record<string, unknown>) => void;
      alias: (id: string) => void;
      reset: () => void;
      set_config: (config: Record<string, unknown>) => void;
      has_opted_out_capturing: () => boolean;
      people: {
        set: (properties: Record<string, unknown>) => void;
      };
    };
  }
}

export interface UserTraits {
  email?: string;
  name?: string;
  company?: string;
  role?: string;
  source?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface EventProperties {
  page?: string;
  source?: string;
  value?: number;
  [key: string]: string | number | boolean | undefined | null | Record<string, unknown>;
}

class PostHogManager {
  private isInitialized: boolean = false;
  private pendingIdentification: UserTraits | null = null;
  private lastPageView: string | null = null;
  private pageViewDebounceTimer: NodeJS.Timeout | null = null;
  private recentEvents: Map<string, number> = new Map();
  private eventDedupeWindow: number = 500; // 500ms window for deduplication

  constructor() {
    // Check if PostHog is loaded
    if (typeof window !== 'undefined' && window.posthog) {
      this.isInitialized = true;
      // Enable person profiles to track identified users
      this.enablePersonProfiles();
    }

    // Listen for PostHog to be loaded
    if (typeof window !== 'undefined') {
      const checkPostHog = setInterval(() => {
        if (window.posthog) {
          this.isInitialized = true;
          this.enablePersonProfiles();
          // Process any pending identification
          if (this.pendingIdentification) {
            this.identify(this.pendingIdentification);
            this.pendingIdentification = null;
          }
          clearInterval(checkPostHog);
        }
      }, 100);

      // Stop checking after 10 seconds
      setTimeout(() => clearInterval(checkPostHog), 10000);
    }
  }

  private enablePersonProfiles() {
    if (window.posthog && !window.posthog.has_opted_out_capturing()) {
      // Ensure we're creating person profiles for better attribution
      window.posthog.set_config({
        person_profiles: 'identified_only'
      });
    }
  }

  /**
   * Identify a user with their email and other traits
   * This creates/updates their person profile in PostHog
   */
  identify(traits: UserTraits) {
    if (!traits.email) {
      console.warn('PostHog: Email is required for identification');
      return;
    }

    if (!this.isInitialized) {
      // Store for later processing
      this.pendingIdentification = traits;
      return;
    }

    try {
      // Use email as the distinct ID for consistent tracking
      window.posthog.identify(traits.email, {
        email: traits.email,
        ...traits,
        identified_at: new Date().toISOString()
      });

      // Set person properties that persist
      window.posthog.people.set({
        email: traits.email,
        ...traits,
        last_seen: new Date().toISOString()
      });

      // Track identification event for conversion tracking
      this.trackEvent('User Identified', {
        email: traits.email,
        source: traits.source || 'web',
        has_company: !!traits.company,
        has_role: !!traits.role
      });

    } catch (error) {
      console.error('PostHog identification error:', error);
    }
  }

  /**
   * Track custom events with proper attribution and deduplication
   */
  trackEvent(eventName: string, properties?: EventProperties) {
    if (!this.isInitialized) {
      console.warn('PostHog not initialized, event not tracked:', eventName);
      return;
    }

    // Create event signature for deduplication
    const eventSignature = `${eventName}_${JSON.stringify(properties || {})}`;
    const now = Date.now();
    const lastEventTime = this.recentEvents.get(eventSignature);

    // Check if this exact event was sent recently
    if (lastEventTime && (now - lastEventTime) < this.eventDedupeWindow) {
      console.log(`[PostHog Debug] Skipping duplicate event within ${this.eventDedupeWindow}ms: ${eventName}`);
      return;
    }

    // Store event timestamp for deduplication
    this.recentEvents.set(eventSignature, now);

    // Clean up old entries to prevent memory leak
    if (this.recentEvents.size > 100) {
      const cutoffTime = now - this.eventDedupeWindow;
      for (const [key, timestamp] of this.recentEvents.entries()) {
        if (timestamp < cutoffTime) {
          this.recentEvents.delete(key);
        }
      }
    }

    try {
      const enrichedProperties = {
        ...properties,
        timestamp: new Date().toISOString(),
        page_url: window.location.href,
        page_path: window.location.pathname,
        referrer: document.referrer,
        utm_source: this.getUTMParam('utm_source'),
        utm_medium: this.getUTMParam('utm_medium'),
        utm_campaign: this.getUTMParam('utm_campaign'),
        utm_term: this.getUTMParam('utm_term'),
        utm_content: this.getUTMParam('utm_content')
      };

      // Debug logging to identify duplicate events
      console.log(`[PostHog Debug] Tracking event: ${eventName}`, {
        properties: enrichedProperties,
        stackTrace: new Error().stack
      });

      window.posthog.capture(eventName, enrichedProperties);
    } catch (error) {
      console.error('PostHog event tracking error:', error);
    }
  }

  /**
   * Track conversion events (e.g., form submissions, purchases)
   */
  trackConversion(conversionType: string, properties?: EventProperties) {
    const conversionProperties = {
      ...properties,
      conversion_type: conversionType,
      conversion_value: properties?.value || 0,
      conversion_currency: 'USD'
    };

    this.trackEvent('Conversion', conversionProperties);
    
    // Also track specific conversion event
    this.trackEvent(`Conversion: ${conversionType}`, conversionProperties);
  }

  /**
   * Track page views with proper attribution and deduplication
   */
  trackPageView(pageName?: string) {
    if (!this.isInitialized) return;

    const currentPath = window.location.pathname;
    
    // Debounce rapid page view calls (e.g., from multiple useEffect hooks)
    if (this.pageViewDebounceTimer) {
      clearTimeout(this.pageViewDebounceTimer);
    }

    // Prevent duplicate page views for the same page within 100ms
    if (this.lastPageView === currentPath) {
      console.log(`[PostHog Debug] Skipping duplicate pageview for: ${currentPath}`);
      return;
    }

    this.pageViewDebounceTimer = setTimeout(() => {
      try {
        this.lastPageView = currentPath;
        
        console.log(`[PostHog Debug] Tracking pageview for: ${currentPath}`);
        
        window.posthog.capture('$pageview', {
          page_name: pageName || document.title,
          page_path: window.location.pathname,
          page_url: window.location.href
        });
      } catch (error) {
        console.error('PostHog page view tracking error:', error);
      }
    }, 100); // 100ms debounce
  }

  /**
   * Set super properties that will be included with all events
   */
  setSuperProperties(properties: Record<string, unknown>) {
    if (!this.isInitialized) return;

    try {
      window.posthog.register(properties);
    } catch (error) {
      console.error('PostHog super properties error:', error);
    }
  }

  /**
   * Track form interactions and submissions
   */
  trackFormInteraction(formName: string, action: 'start' | 'abandon' | 'submit', fields?: Record<string, unknown>) {
    const eventName = `Form ${action.charAt(0).toUpperCase() + action.slice(1)}`;
    
    this.trackEvent(eventName, {
      form_name: formName,
      form_action: action,
      ...fields
    });

    // If form is submitted with email, identify the user
    if (action === 'submit' && fields?.email) {
      this.identify({
        email: fields.email,
        ...fields,
        source: formName
      });

      // Track as conversion
      this.trackConversion(formName, {
        email: fields.email,
        ...fields
      });
    }
  }

  /**
   * Track button clicks with attribution
   */
  trackClick(buttonName: string, properties?: EventProperties) {
    this.trackEvent('Button Clicked', {
      button_name: buttonName,
      ...properties
    });
  }

  /**
   * Track Calendly events
   */
  trackCalendlyEvent(eventType: 'viewed' | 'scheduled', eventDetails?: Record<string, unknown>) {
    const properties: EventProperties = {
      calendly_event: eventType,
      ...eventDetails
    };

    this.trackEvent(`Calendly ${eventType.charAt(0).toUpperCase() + eventType.slice(1)}`, properties);

    // If event is scheduled and we have email, identify and track conversion
    if (eventType === 'scheduled' && eventDetails?.invitee?.email) {
      this.identify({
        email: eventDetails.invitee.email,
        name: eventDetails.invitee.name,
        source: 'calendly'
      });

      this.trackConversion('Meeting Scheduled', {
        email: eventDetails.invitee.email,
        meeting_type: eventDetails.event?.event_type_name,
        meeting_time: eventDetails.event?.start_time
      });
    }
  }

  /**
   * Helper to get UTM parameters
   */
  private getUTMParam(param: string): string | null {
    if (typeof window === 'undefined') return null;
    
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  /**
   * Create alias for user (useful for linking anonymous to identified users)
   */
  alias(newId: string) {
    if (!this.isInitialized) return;

    try {
      window.posthog.alias(newId);
    } catch (error) {
      console.error('PostHog alias error:', error);
    }
  }

  /**
   * Reset user (useful for logout)
   */
  reset() {
    if (!this.isInitialized) return;

    try {
      window.posthog.reset();
    } catch (error) {
      console.error('PostHog reset error:', error);
    }
  }

  /**
   * Check if PostHog is ready
   */
  isReady(): boolean {
    return this.isInitialized;
  }
}

// Create singleton instance
const posthogManager = new PostHogManager();

export default posthogManager;

// Export convenience functions
export const {
  identify,
  trackEvent,
  trackConversion,
  trackPageView,
  trackFormInteraction,
  trackClick,
  trackCalendlyEvent,
  setSuperProperties,
  alias,
  reset,
  isReady
} = {
  identify: (traits: UserTraits) => posthogManager.identify(traits),
  trackEvent: (eventName: string, properties?: EventProperties) => posthogManager.trackEvent(eventName, properties),
  trackConversion: (conversionType: string, properties?: EventProperties) => posthogManager.trackConversion(conversionType, properties),
  trackPageView: (pageName?: string) => posthogManager.trackPageView(pageName),
  trackFormInteraction: (formName: string, action: 'start' | 'abandon' | 'submit', fields?: Record<string, unknown>) => posthogManager.trackFormInteraction(formName, action, fields),
  trackClick: (buttonName: string, properties?: EventProperties) => posthogManager.trackClick(buttonName, properties),
  trackCalendlyEvent: (eventType: 'viewed' | 'scheduled', eventDetails?: Record<string, unknown>) => posthogManager.trackCalendlyEvent(eventType, eventDetails),
  setSuperProperties: (properties: Record<string, unknown>) => posthogManager.setSuperProperties(properties),
  alias: (newId: string) => posthogManager.alias(newId),
  reset: () => posthogManager.reset(),
  isReady: () => posthogManager.isReady()
};