/**
 * EXPLORE ARENAL — Off-property excursions page
 * Standalone page for all off-property Costa Rica experiences
 * Accessible from Explore More buttons on off-property cards
 */

import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearch } from "wouter";
import BrandNavigation from "@/components/BrandNavigation";
import { exploreArenalExperiences } from "@/data/properties";
import { useIsMobile } from "@/hooks/useMobile";
import BlobVideo from "@/components/BlobVideo";
import Footer from "@/components/Footer";

/* ── Shared style tokens ─────────────────────────────────────── */
const heading = { fontFamily: "var(--font-display)", fontWeight: 500 } as const;
const headingLight = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;
const bodyLight = { fontFamily: "var(--font-body)", fontWeight: 300 } as const;
const bodyMedium = { fontFamily: "var(--font-body)", fontWeight: 500 } as const;

/* ── Reusable fade-in wrapper ────────────────────────────────── */
function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE ROOT
   ═══════════════════════════════════════════════════════════════ */
export default function ExploreArenal() {
  const searchString = useSearch();
  const backLink = useMemo(() => {
    const params = new URLSearchParams(searchString);
    const from = params.get("from");
    if (from === "tented-camp") return { label: "Nayara Tented Camp", href: "/tented-camp" };
    if (from === "springs") return { label: "Nayara Springs", href: "/springs" };
    if (from === "gardens") return { label: "Nayara Gardens", href: "/gardens" };
    if (from === "curated-excursions") return { label: "Curated Excursions", href: "/curated-excursions" };
    return undefined;
  }, [searchString]);

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BrandNavigation pageType="content" backLink={backLink} />
      <HeroSection />
      <ExcursionsGrid />
      <Footer bgColor="#868B75" textColor="#FFFFFF" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();

  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#525642] to-[#3a3d2e]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />

      {/* Title anchored to bottom */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-2xl md:text-4xl lg:text-5xl leading-[0.95] tracking-wide text-center"
          style={headingLight}
        >
          Explore Arenal
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-white/60 text-sm md:text-base mt-4 tracking-wide text-center"
          style={body}
        >
          Beyond Our Grounds
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EXCURSIONS GRID
   ═══════════════════════════════════════════════════════════════ */
function ExcursionsGrid() {
  return (
    <section className="relative py-24 md:py-32">
      {/* Section Header */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 mb-16">
        <FadeIn>
          <p
            className="text-[#868B75] text-[10px] md:text-[11px] tracking-[0.35em] uppercase mb-4"
            style={bodyMedium}
          >
            Off-Property Experiences
          </p>
          <p
            className="text-[#525642]/65 text-base md:text-[17px] leading-relaxed max-w-2xl"
            style={body}
          >
            Venture beyond the gates of Nayara to discover the extraordinary natural wonders of the Arenal region — from volcanic hot springs and hanging bridges to river adventures and local community encounters.
          </p>
        </FadeIn>
      </div>

      {/* Excursion Cards */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exploreArenalExperiences.map((ex, i) => (
              <motion.div
                key={ex.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
                className="group bg-white/50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Media */}
                {ex.image ? (
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={ex.image} alt={ex.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" decoding="async" loading="lazy" />
                  </div>
                ) : ex.videoDesktop ? (
                  <div className="aspect-[4/3] overflow-hidden">
                    <video
                      src={ex.videoDesktop}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] overflow-hidden bg-[#EDEEE2] flex items-center justify-center">
                    <span className="text-[#868B75]/40 text-xs tracking-[0.2em]" style={bodyMedium}>Photo coming soon</span>
                  </div>
                )}
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#525642]/30 text-[9px] tracking-[0.2em] uppercase" style={{ ...body, fontWeight: 600 }}>
                      {ex.category}
                    </span>
                  </div>
                  <h3 className="text-[#525642] text-[17px] mb-2" style={{ ...heading, fontWeight: 500 }}>
                    {ex.name}
                  </h3>
                  <p className="text-[#525642]/55 text-[13px] leading-relaxed mb-4 line-clamp-3" style={body}>
                    {ex.description}
                  </p>
                  <div className="flex items-center gap-4 text-[11px] text-[#525642]/35" style={{ ...body, fontWeight: 500 }}>
                    <span>{ex.duration}</span>
                    <span className="text-[#525642]/15">·</span>
                    <span className="capitalize">{ex.difficulty}</span>
                    {ex.price && (
                      <>
                        <span className="text-[#525642]/15">·</span>
                        <span>{ex.price}</span>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
