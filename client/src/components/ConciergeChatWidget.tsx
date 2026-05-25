/**
 * Nayara Resorts — Website Concierge Chat Widget
 * LIGHTWEIGHT SHELL: Only renders the floating button.
 * The heavy chat panel (with Streamdown/shiki/mermaid/katex) loads
 * dynamically ONLY when the user clicks "Concierge".
 */

import { useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { getPalette } from "@/data/propertyPalettes";

/* Heavy chat panel — dynamically imported on first open */
const ConciergeChatPanel = lazy(() => import("./ConciergeChatPanel"));

interface ConciergeChatWidgetProps {
  /** Override button colors to match property palette */
  palette?: { dark: string; pillBg: string };
}

export default function ConciergeChatWidget({ palette }: ConciergeChatWidgetProps = {}) {
  const [loc] = useLocation();
  const slug = loc.split("/")[1] || "";
  const fullPath = loc;
  const costaRicaRoutes = ["curated-excursions", "costa-rica-wellness", "tented-camp/gastronomy", "tented-camp-sustainability"];
  const bocasBlogRoutes = ["/blog/how-we-built-a-hotel-on-an-island"];
  const isBocasBlog = bocasBlogRoutes.some(r => fullPath.startsWith(r));
  const autoPalette = ["tented-camp", "gardens", "springs", "alto-atacama", "bocas-del-toro", "hangaroa"].includes(slug)
    ? getPalette(slug) : isBocasBlog ? getPalette("bocas-del-toro") : null;
  const isCostaRica = costaRicaRoutes.includes(slug);
  const dk = "#FFFFFF";
  const isBrandHome = slug === "";
  const bg = palette?.pillBg ?? (autoPalette ? `${autoPalette.navPillBg}B3` : isCostaRica ? "rgba(134,139,117,0.8)" : isBrandHome ? "rgba(59,43,38,0.8)" : "rgba(59,43,38,0.8)");

  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setHasOpened(true);
  };

  return (
    <>
      {/* ── Floating Chat Button — tiny, no heavy deps ── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={handleOpen}
            className="fixed bottom-4 right-4 z-50 flex items-center gap-1.5 rounded-full backdrop-blur-md shadow-lg px-4 py-2 transition-colors group cursor-pointer border"
            style={{ backgroundColor: bg, borderColor: "rgba(255,255,255,0.1)" }}
            aria-label="Concierge"
          >
            <span
              className="text-xs font-medium tracking-[0.08em] whitespace-nowrap flex items-center justify-center"
              style={{ color: dk, fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Concierge
            </span>

            {/* Pulse indicator for new visitors */}
            {!hasOpened && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#c9b99a] rounded-full animate-pulse" />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Chat Panel — only loaded after first click ── */}
      {hasOpened && (
        <Suspense fallback={
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="fixed bottom-6 right-6 z-50 w-[92vw] sm:w-[420px] md:w-[460px] h-[70vh] max-h-[600px] rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center justify-center"
                style={{ background: "#F2ECE0", border: "1px solid rgba(58, 42, 26, 0.12)" }}
              >
                <div className="flex gap-1.5 items-center">
                  <span className="w-2 h-2 rounded-full bg-[#3B2B26]/30 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 rounded-full bg-[#3B2B26]/30 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 rounded-full bg-[#3B2B26]/30 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        }>
          <ConciergeChatPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </Suspense>
      )}
    </>
  );
}
