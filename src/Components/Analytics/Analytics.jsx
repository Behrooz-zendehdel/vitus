import React, { useEffect } from "react";

const Analytics = () => {
  useEffect(() => {
    // Google Analytics (GA4) - Replace with your actual GA4 measurement ID
    const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // Replace with your actual GA4 ID
    
    if (typeof window !== "undefined" && GA_MEASUREMENT_ID) {
      // Load Google Analytics
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", GA_MEASUREMENT_ID);

      // Track page views
      const trackPageView = () => {
        gtag("config", GA_MEASUREMENT_ID, {
          page_path: window.location.pathname,
        });
      };

      // Track page views on route changes
      window.addEventListener("popstate", trackPageView);
      
      // Initial page view
      trackPageView();

      return () => {
        window.removeEventListener("popstate", trackPageView);
      };
    }
  }, []);

  // Custom event tracking function
  const trackEvent = (eventName, parameters = {}) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, parameters);
    }
  };

  // Expose trackEvent function globally for use in other components
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.trackEvent = trackEvent;
    }
  }, []);

  return null; // This component doesn't render anything
};

export default Analytics; 