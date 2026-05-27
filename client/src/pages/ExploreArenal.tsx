/**
 * EXPLORE ARENAL — Off-property excursions page
 * Standalone page for all off-property Costa Rica experiences
 * Uses the same expanded editorial card layout as the on-site experiences page
 */

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearch } from "wouter";
import { MapPin, ChevronDown, X, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import BrandNavigation from "@/components/BrandNavigation";
import { exploreArenalExperiences, type Excursion } from "@/data/properties";
import { useIsMobile } from "@/hooks/useMobile";
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
const NAV_PALETTES = {
  "tented-camp": { pillBg: "#868B7599", pillHover: "#868B75E6", dark: "#fff" },
  springs: { pillBg: "#0E6B7E99", pillHover: "#0E6B7EE6", dark: "#fff" },
  gardens: { pillBg: "#28624199", pillHover: "#286241E6", dark: "#fff" },
} as const;

const FOOTER_COLORS = {
  "tented-camp": { bg: "#868B75", name: "Tented Camp" },
  springs: { bg: "#0E6B7E", name: "Springs" },
  gardens: { bg: "#286241", name: "Gardens" },
} as const;

export default function ExploreArenal() {
  const searchString = useSearch();
  const from = useMemo(() => {
    const params = new URLSearchParams(searchString);
    return params.get("from") || "tented-camp";
  }, [searchString]);

  const backLink = useMemo(() => {
    if (from === "tented-camp") return { label: "Nayara Tented Camp", href: "/tented-camp" };
    if (from === "springs") return { label: "Nayara Springs", href: "/springs" };
    if (from === "gardens") return { label: "Nayara Gardens", href: "/gardens" };
    if (from === "curated-excursions") return { label: "In-House Experiences", href: "/curated-excursions" };
    return { label: "Nayara Tented Camp", href: "/tented-camp" };
  }, [from]);

  const navPalette = NAV_PALETTES[from as keyof typeof NAV_PALETTES] || NAV_PALETTES["tented-camp"];
  const footer = FOOTER_COLORS[from as keyof typeof FOOTER_COLORS] || FOOTER_COLORS["tented-camp"];

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BrandNavigation pageType="content" backLink={backLink} navPalette={navPalette} />
      <HeroSection />
      <ExcursionsSection />
      <Footer bgColor={footer.bg} textColor="#FFFFFF" propertyName={footer.name} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <video
          src="/manus-storage/offsite-hero-v2_287bd70b.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />

      {/* Title anchored to bottom */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-2xl md:text-4xl lg:text-5xl leading-[0.95] tracking-wide text-center"
          style={headingLight}
        >
          Rainforest Life
        </motion.h1>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EXCURSIONS SECTION — Expanded editorial cards
   ═══════════════════════════════════════════════════════════════ */
function ExcursionsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="relative py-24 md:py-32">
      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-16">
        <FadeIn>
          <h2
            className="text-[#525642] text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-3"
            style={heading}
          >
            Beyond Our Grounds
          </h2>
          <p
            className="text-[#868B75] text-lg md:text-xl tracking-wide"
            style={bodyLight}
          >
            Off-Property Experiences
          </p>
          <p
            className="text-[#525642]/50 text-sm md:text-base leading-relaxed mt-6 max-w-2xl"
            style={body}
          >
            Venture beyond the gates of Nayara to discover the extraordinary natural wonders
            of the Arenal region — from volcanic hot springs and hanging bridges to river
            adventures and local community encounters.
          </p>
        </FadeIn>
      </div>

      {/* Excursion Cards */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {exploreArenalExperiences.map((excursion, i) => (
              <FeaturedExcursionCard
                key={excursion.id}
                excursion={excursion}
                index={i}
                isExpanded={expandedId === excursion.id}
                onToggle={() => toggleCard(excursion.id)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FEATURED EXCURSION CARD
   Collapsed: landscape photo with title overlay
   Expanded: media grid + description + details + CTA
   ═══════════════════════════════════════════════════════════════ */
function FeaturedExcursionCard({
  excursion,
  index,
  isExpanded,
  onToggle,
}: {
  excursion: Excursion;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const isMobile = useIsMobile();
  const cardImageSrc = excursion.image;

  const categoryLabels: Record<string, string> = {
    nature: "Nature & Exploration",
    adventure: "Adventure",
    community: "Community & Culture",
    culture: "Community & Culture",
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`overflow-hidden transition-all duration-500 ${
        isExpanded ? "md:col-span-2" : ""
      }`}
    >
      {/* ── COLLAPSED CARD ── */}
      {!isExpanded && (
        <div
          className="group cursor-pointer overflow-hidden border border-[#525642]/8 hover:border-[#525642]/15"
          onClick={onToggle}
        >
          {/* Photo / Video thumbnail */}
          <div className="relative overflow-hidden h-64 md:h-80">
            {cardImageSrc ? (
              <img
                src={cardImageSrc}
                alt={excursion.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            ) : excursion.verticalVideo ? (
              <video
                src={excursion.verticalVideo}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            ) : excursion.videoDesktop ? (
              <video
                src={excursion.videoDesktop}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#f0ebe0]/60 to-[#f7f5f0]/30">
                <div className="text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-[#3a2a1a]/15" />
                  <span className="text-xs tracking-[0.2em] text-[#3a2a1a]/25" style={body}>
                    Photo coming soon
                  </span>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

            {/* Title overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p
                className="text-white/60 text-[10px] tracking-[0.3em] mb-2"
                style={bodyMedium}
              >
                {categoryLabels[excursion.category] || excursion.category}
              </p>
              <h3
                className="text-white text-2xl md:text-3xl mb-1"
                style={heading}
              >
                {excursion.name}
              </h3>
              <p
                className="text-white/60 text-sm italic mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {excursion.subtitle}
              </p>
              <span
                className="inline-flex items-center gap-2 text-white/80 hover:text-white text-xs tracking-[0.2em] transition-colors"
                style={bodyMedium}
              >
                Learn More
                <ChevronDown className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ── EXPANDED DETAIL VIEW ── */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="bg-[#f7f5f0]">
              {/* Close button */}
              <div className="flex justify-end p-4 pb-0">
                <button
                  onClick={onToggle}
                  className="p-2 transition-colors text-[#3a2a1a]/40 hover:text-[#3a2a1a]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Media Grid: vertical video left, two photos right */}
              <div className="px-6 md:px-10 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
                  {/* Left: Vertical Video */}
                  <div className="md:col-span-5">
                    {excursion.verticalVideo && !isMobile ? (
                      <div className="aspect-[3/4] overflow-hidden bg-black">
                        <video
                          key={excursion.verticalVideo}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover"
                        >
                          <source
                            src={excursion.verticalVideo}
                            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                          />
                        </video>
                      </div>
                    ) : excursion.verticalVideo && isMobile ? (
                      <div className="aspect-[3/4] overflow-hidden">
                        {cardImageSrc ? (
                          <img
                            loading="lazy"
                            src={cardImageSrc}
                            alt={`${excursion.name}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-[#f0ebe0]/40">
                            <span className="text-xs tracking-[0.2em] text-[#3a2a1a]/20" style={body}>
                              Photo coming soon
                            </span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="aspect-[3/4] flex items-center justify-center bg-[#f0ebe0]/40">
                        <span className="text-xs tracking-[0.2em] text-[#3a2a1a]/20" style={body}>
                          Video coming soon
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Right column: two photos stacked */}
                  <div className="md:col-span-7 flex flex-col gap-4 md:gap-5">
                    {/* Top-right: Horizontal photo */}
                    <div className="aspect-[16/10] overflow-hidden">
                      {cardImageSrc ? (
                        <img
                          loading="lazy"
                          src={cardImageSrc}
                          alt={`${excursion.name} — landscape`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#f0ebe0]/40">
                          <span className="text-xs tracking-[0.2em] text-[#3a2a1a]/20" style={body}>
                            Photo coming soon
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Bottom-right: Square photo */}
                    <div className="aspect-square overflow-hidden">
                      {excursion.detailSquarePhoto ? (
                        <img
                          loading="lazy"
                          src={excursion.detailSquarePhoto}
                          alt={`${excursion.name} — detail`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#f0ebe0]/30">
                          <span className="text-xs tracking-[0.2em] text-[#525642]/25" style={body}>
                            Photo coming soon
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description Block */}
              <div className="px-6 md:px-10 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Left: text content */}
                  <div className="md:col-span-7">
                    <p
                      className="text-[10px] tracking-[0.35em] mb-3 text-[#5a4a3a]/35"
                      style={bodyMedium}
                    >
                      Private Expedition
                    </p>
                    <h3
                      className="text-2xl md:text-3xl mb-4 text-[#525642]"
                      style={heading}
                    >
                      {excursion.name}
                    </h3>
                    <p
                      className="text-sm md:text-base leading-relaxed mb-6 text-[#7a7a7a]"
                      style={bodyLight}
                    >
                      {excursion.description}
                    </p>

                    {/* Highlights */}
                    {excursion.highlights && excursion.highlights.length > 0 && (
                      <ul className="space-y-2 mb-6">
                        {excursion.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-sm text-[#7a7a7a]"
                            style={bodyLight}
                          >
                            <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0 bg-[#3a2a1a]/25" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* What to bring */}
                    {excursion.whatToBring && (
                      <p
                        className="text-xs italic mb-6 text-[#999]"
                        style={bodyLight}
                      >
                        {excursion.whatToBring}
                      </p>
                    )}
                  </div>

                  {/* Right: vertical photo */}
                  <div className="md:col-span-5">
                    {excursion.detailVerticalPhoto ? (
                      <div className="aspect-[3/4] overflow-hidden">
                        <img
                          loading="lazy"
                          src={excursion.detailVerticalPhoto}
                          alt={`${excursion.name} — vertical`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[3/4] flex items-center justify-center bg-[#f0ebe0]/20">
                        <span className="text-xs tracking-[0.2em] text-[#3a2a1a]/12" style={body}>
                          Photo coming soon
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Details Bar */}
                <div className="mt-8 pt-6 border-t border-[#3a2a1a]/8 grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <p className="text-[10px] tracking-[0.3em] mb-1 text-[#999]" style={bodyMedium}>
                      Difficulty
                    </p>
                    <p className="text-sm font-medium text-[#525642]" style={body}>
                      {excursion.difficulty}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] mb-1 text-[#999]" style={bodyMedium}>
                      Duration
                    </p>
                    <p className="text-sm font-medium text-[#525642]" style={body}>
                      {excursion.duration}
                    </p>
                    {excursion.distance && (
                      <p className="text-xs mt-0.5 text-[#999]" style={bodyLight}>
                        {excursion.distance}
                      </p>
                    )}
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] mb-1 text-[#999]" style={bodyMedium}>
                      Ages
                    </p>
                    <p className="text-sm font-medium text-[#525642]" style={body}>
                      All ages
                    </p>
                  </div>
                  {excursion.suggestedTime && (
                    <div>
                      <p className="text-[10px] tracking-[0.3em] mb-1 text-[#999]" style={bodyMedium}>
                        Departures
                      </p>
                      <p className="text-sm font-medium text-[#525642]" style={body}>
                        {excursion.suggestedTime}
                      </p>
                    </div>
                  )}
                </div>

                {/* Speak to Concierge CTA */}
                <div className="mt-8">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toast(
                        "Our concierge team will be in touch to arrange your experience."
                      );
                    }}
                    className="w-full md:w-auto flex items-center justify-center gap-2.5 py-3.5 px-8 transition-all duration-300 bg-[#868B75] hover:bg-[#525642] text-white"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span
                      className="text-xs tracking-[0.2em]"
                      style={bodyMedium}
                    >
                      Speak to Concierge
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
