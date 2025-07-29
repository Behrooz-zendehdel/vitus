import React, { useEffect } from "react";

const Performance = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadResources = () => {
      const criticalImages = [
        "/src/assets/logo.png",
        "/src/assets/Hero/anik-sefid-tala-1.png",
        "/src/assets/Hero/antik-sefid-chrome-2.png",
      ];

      criticalImages.forEach((src) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Lazy load images
    const lazyLoadImages = () => {
      const images = document.querySelectorAll("img[data-src]");
      
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove("lazy");
            observer.unobserve(img);
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));
    };

    // Service Worker registration for caching
    const registerServiceWorker = async () => {
      if ("serviceWorker" in navigator) {
        try {
          const registration = await navigator.serviceWorker.register("/sw.js");
          console.log("Service Worker registered:", registration);
        } catch (error) {
          console.log("Service Worker registration failed:", error);
        }
      }
    };

    // Performance monitoring
    const monitorPerformance = () => {
      if ("performance" in window) {
        window.addEventListener("load", () => {
          setTimeout(() => {
            const perfData = performance.getEntriesByType("navigation")[0];
            if (perfData) {
              console.log("Page Load Time:", perfData.loadEventEnd - perfData.loadEventStart);
              console.log("DOM Content Loaded:", perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart);
            }
          }, 0);
        });
      }
    };

    // Execute performance optimizations
    preloadResources();
    lazyLoadImages();
    registerServiceWorker();
    monitorPerformance();
  }, []);

  return null; // This component doesn't render anything
};

export default Performance; 