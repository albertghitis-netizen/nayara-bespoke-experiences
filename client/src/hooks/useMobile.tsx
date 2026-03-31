import * as React from "react";

const MOBILE_BREAKPOINT = 768;

/**
 * Detects if the viewport is mobile-sized.
 * 
 * IMPORTANT: Initializes synchronously from window.matchMedia
 * to avoid the flash-of-desktop-content problem on mobile.
 * The previous version initialized as `undefined` (falsy),
 * which meant mobile users saw desktop content on first render.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    // SSR safety check
    if (typeof window === "undefined") return false;
    return window.innerWidth < MOBILE_BREAKPOINT;
  });

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    // Sync on mount in case initial state was wrong
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}
