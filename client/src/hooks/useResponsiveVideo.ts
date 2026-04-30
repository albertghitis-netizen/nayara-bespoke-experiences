import { useState, useEffect } from "react";

/**
 * useResponsiveVideo — Returns loop setting based on screen size
 * Desktop (md+): loop = true
 * Mobile: loop = false (ends on last frame)
 */
export function useResponsiveVideo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return {
    isMobile,
    shouldLoop: !isMobile, // Desktop loops, mobile doesn't
  };
}
