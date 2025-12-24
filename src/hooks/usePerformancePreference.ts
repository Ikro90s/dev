import { useState, useEffect } from "react";

export const usePerformancePreference = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handler);

    // Simple heuristic for low performance / device capability
    // (In a real-world app, we might check navigator.deviceMemory or hardwareConcurrency)
    const checkLowPowerHeuristic = () => {
      // If we're on a very old browser or specific mobile patterns
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      
      // If the connection is slow (2g/3g)
      const connection = (navigator as unknown as { connection?: { effectiveType: string } }).connection;
      const isSlowConnection = connection && (connection.effectiveType === '2g' || connection.effectiveType === '3g');

      setIsLowPowerMode(isMobile && isSlowConnection);
    };

    checkLowPowerHeuristic();

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, []);

  return {
    prefersReducedMotion,
    isLowPowerMode,
    // Return a combined "simplify" flag for easy consumption
    simplifyEffects: prefersReducedMotion || isLowPowerMode
  };
};
