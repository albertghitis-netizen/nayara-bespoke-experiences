/*
 * SPRINGS VILLA — Deeper Room Detail Page (placeholder)
 * Will be built out when content arrives
 * Hero video: springs-villa-hero.mp4
 * Colors: Springs palette (teal/blue-green)
 */
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import BlobVideo from "@/components/BlobVideo";

const P = {
  bg: "#E4EDEB",
  text: "#1A0F0A",
  primary: "#3B6E7B",
  secondary: "#5A6F7B",
  accent: "#86898C",
  bone: "#F0F4F2",
  white: "#FFFFFF",
};
const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)" } as const;

const heroVideo = "/manus-storage/springs-villa-hero_d2119010.mp4";

export default function SpringsVilla() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: P.bg }}>
      <BrandNavigation pageType="property" hideCenterLabel />

      {/* Hero with video */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <BlobVideo
            src={heroVideo}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-16 pb-12 md:pb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-[11px] md:text-xs tracking-[0.3em] uppercase mb-3"
            style={{ ...body, fontWeight: 500 }}
          >
            Nayara Springs
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white text-4xl md:text-6xl lg:text-7xl mb-4"
            style={display}
          >
            Springs Villa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/80 text-base md:text-lg max-w-xl"
            style={body}
          >
            Your private hot springs sanctuary — content coming soon
          </motion.p>
        </div>

        {/* Back to Springs */}
        <div className="absolute top-24 md:top-28 right-6 md:right-16 z-20">
          <a
            href="/springs"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-[1.03]"
            style={{
              ...body,
              fontWeight: 500,
              fontSize: "10px",
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              color: P.white,
              backgroundColor: "rgba(59,110,123,0.5)",
              borderColor: "rgba(255,255,255,0.25)",
            }}
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Nayara Springs
          </a>
        </div>
      </section>

      {/* Placeholder content */}
      <section className="py-20 md:py-32 px-6 md:px-16 max-w-4xl mx-auto text-center">
        <p
          className="text-[11px] tracking-[0.25em] uppercase mb-4"
          style={{ ...body, fontWeight: 500, color: P.primary }}
        >
          Coming Soon
        </p>
        <h2
          className="text-3xl md:text-4xl mb-6"
          style={{ ...display, color: P.text }}
        >
          This page is being crafted
        </h2>
        <p
          className="text-sm md:text-base leading-[1.8]"
          style={{ ...body, color: `${P.text}CC` }}
        >
          The Springs Villa detail page will feature the adults-only private hot springs villas at Nayara Springs — each with a personal thermal pool, indoor-outdoor living, and volcano views. Check back soon.
        </p>
      </section>

      <Footer pageType="property" bgColor={P.primary} />
    </div>
  );
}
