/**
 * EXPERIENTIAL ARENAL — Nature & Adventure
 * Design: Editorial magazine — bone/espresso brand palette
 * Typography: Playfair Display (display) + DM Sans (body)
 *
 * Structure:
 *   1. Hero video (desktop/mobile)
 *   2. Property Intro — "Three Resorts. One Rainforest."
 *   3. On-Property Nature Experiences (dark espresso bg)
 *   4. Explore Arenal — Off-property excursions (bone bg)
 *   5. Footer
 *
 * Wellness & Culinary removed — those have their own experiential pages.
 */

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrandNavigation from "@/components/BrandNavigation";
import {
  ChevronDown,
  MapPin,
  MessageCircle,
  X,
} from "lucide-react";
import { toast } from "sonner";
import {
  exploreArenalExperiences,
  type Excursion,
} from "@/data/properties";
import { useIsMobile } from "@/hooks/useMobile";
import NativeVideo from "@/components/NativeVideo";
import Footer from "@/components/Footer";

/* ── Shared style tokens ─────────────────────────────────────── */
const heading = { fontFamily: "var(--font-display)", fontWeight: 500 } as const;
const headingLight = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;
const bodyLight = { fontFamily: "var(--font-body)", fontWeight: 300 } as const;
const bodyMedium = { fontFamily: "var(--font-body)", fontWeight: 500 } as const;

const CDN = {
  heroDesktop:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/compressed-arenal-desktop_05c5168c.mp4",
  heroMobile:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/volcano-arenal-vertical_8f4b62b0.mp4",
};

/* ── Category configs ────────────────────────────────────────── */
// Off-property: adventure, nature, community
const arenalCategories = [
  { id: "adventure", label: "Adventure" },
  { id: "nature", label: "Nature & Exploration" },
  { id: "community", label: "Community" },
];

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
export default function ExperientialArenal() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BrandNavigation pageType="content" />
      <ArenalHero />
      <PropertyIntro />
      <ExploreArenalSection />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO SECTION — Full-screen video
   ═══════════════════════════════════════════════════════════════ */
function ArenalHero() {
  const isMobile = useIsMobile();
  const heroVideo = isMobile ? CDN.heroMobile : CDN.heroDesktop;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <NativeVideo src={heroVideo} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Title anchored to bottom */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-2xl md:text-4xl lg:text-5xl leading-[0.95] tracking-wide text-center"
          style={headingLight}
        >
          Nature &amp; Adventure
        </motion.h1>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROPERTY INTRO — "Three Resorts. One Rainforest."
   ═══════════════════════════════════════════════════════════════ */
function PropertyIntro() {
  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: "#f0ebe0" }}
    >
      {/* Subtle botanical texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/botanical-texture-embossed-hig62x94aNi7TNioLbvtkE.webp)`,
          backgroundSize: "900px 900px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
        }}
      />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        <FadeIn className="max-w-xl">
          <h2
            className="text-[#3a2a1a] text-4xl md:text-5xl lg:text-6xl mb-5"
            style={headingLight}
          >
            Three Resorts. One Rainforest.
          </h2>
          <p
            className="text-[#5a4a3a]/70 text-base md:text-[17px] leading-relaxed"
            style={body}
          >
            Across Nayara Gardens, Nayara Springs, and Nayara Tented Camp, the
            rainforest becomes a shared landscape of experiences. Guests move
            freely between the three, opening access to a broader range of
            guided nature tours, curated adventure, and immersive wildlife
            encounters.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EXPLORE ARENAL — Off-property excursions
   Bone/cream background
   ═══════════════════════════════════════════════════════════════ */
function ExploreArenalSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("adventure");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = exploreArenalExperiences.filter((e) =>
    activeCategory === "community"
      ? ["culture", "culinary", "wellness", "community"].includes(e.category)
      : e.category === activeCategory
  );

  return (
    <section ref={ref} id="explore-arenal" className="relative py-24 md:py-32">
      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-16">
        <FadeIn>
          <h2
            className="text-[#3a2a1a] text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-3"
            style={heading}
          >
            Explore Arenal
          </h2>
          <p
            className="text-[#5a4a3a]/50 text-lg md:text-xl tracking-wide"
            style={bodyLight}
          >
            Beyond Our Grounds
          </p>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay={0.2} className="mt-10 flex flex-wrap gap-3">
          {arenalCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setExpandedId(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs tracking-[0.2em] transition-all duration-300 border ${
                activeCategory === cat.id
                  ? "bg-[#3a2a1a] text-white border-[#3a2a1a]"
                  : "bg-transparent text-[#3a2a1a]/40 border-[#3a2a1a]/15 hover:border-[#3a2a1a]/30 hover:text-[#3a2a1a]/70"
              }`}
              style={bodyMedium}
            >
              {cat.label}
            </button>
          ))}
        </FadeIn>
      </div>

      {/* Excursion Cards */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((excursion, i) => (
              <FeaturedExcursionCard
                key={excursion.id}
                excursion={excursion}
                index={i}
                isExpanded={expandedId === excursion.id}
                onToggle={() =>
                  setExpandedId(
                    expandedId === excursion.id ? null : excursion.id
                  )
                }
                variant="light"
              />
            ))}
          </AnimatePresence>
        </div>
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
  variant = "light",
}: {
  excursion: Excursion;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  variant: "light" | "dark";
}) {
  const isDark = variant === "dark";
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
          className={`group cursor-pointer overflow-hidden ${
            isDark
              ? "border border-[#f7f5f0]/8 hover:border-[#f7f5f0]/15"
              : "border border-[#3a2a1a]/8 hover:border-[#3a2a1a]/15"
          }`}
          onClick={onToggle}
        >
          {/* Photo thumbnail */}
          <div className="relative overflow-hidden h-64 md:h-80">
            {cardImageSrc ? (
              <img
                src={cardImageSrc}
                alt={excursion.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <div
                className={`w-full h-full flex items-center justify-center ${
                  isDark
                    ? "bg-gradient-to-br from-[#3a2a1a]/40 to-[#2a1f14]/60"
                    : "bg-gradient-to-br from-[#f0ebe0]/60 to-[#f7f5f0]/30"
                }`}
              >
                <div className="text-center">
                  <MapPin
                    className={`w-8 h-8 mx-auto mb-2 ${
                      isDark ? "text-[#f7f5f0]/15" : "text-[#3a2a1a]/15"
                    }`}
                  />
                  <span
                    className={`text-xs tracking-[0.2em] ${
                      isDark ? "text-[#f7f5f0]/25" : "text-[#3a2a1a]/25"
                    }`}
                    style={body}
                  >
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
            <div
              className={`${isDark ? "bg-[#1a1a1a]" : "bg-[#f7f5f0]"}`}
            >
              {/* Close button */}
              <div className="flex justify-end p-4 pb-0">
                <button
                  onClick={onToggle}
                  className={`p-2 transition-colors ${
                    isDark
                      ? "text-[#f7f5f0]/40 hover:text-[#f7f5f0]"
                      : "text-[#3a2a1a]/40 hover:text-[#3a2a1a]"
                  }`}
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
                          className="w-full h-full object-cover"
                        >
                          <source
                            src={excursion.verticalVideo}
                            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                          />
                        </video>
                      </div>
                    ) : excursion.verticalVideo && isMobile ? (
                      /* Mobile: show card image as still instead of video */
                      <div className="aspect-[3/4] overflow-hidden">
                        {cardImageSrc ? (
                          <img
                            src={cardImageSrc}
                            alt={`${excursion.name}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div
                            className={`w-full h-full flex items-center justify-center ${
                              isDark ? "bg-[#3a2a1a]/30" : "bg-[#f0ebe0]/40"
                            }`}
                          >
                            <span
                              className={`text-xs tracking-[0.2em] ${
                                isDark
                                  ? "text-[#f7f5f0]/20"
                                  : "text-[#3a2a1a]/20"
                              }`}
                              style={body}
                            >
                              Photo coming soon
                            </span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div
                        className={`aspect-[3/4] flex items-center justify-center ${
                          isDark ? "bg-[#3a2a1a]/30" : "bg-[#f0ebe0]/40"
                        }`}
                      >
                        <span
                          className={`text-xs tracking-[0.2em] ${
                            isDark
                              ? "text-[#f7f5f0]/20"
                              : "text-[#3a2a1a]/20"
                          }`}
                          style={body}
                        >
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
                          src={cardImageSrc}
                          alt={`${excursion.name} — landscape`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div
                          className={`w-full h-full flex items-center justify-center ${
                            isDark ? "bg-[#3a2a1a]/30" : "bg-[#f0ebe0]/40"
                          }`}
                        >
                          <span
                            className={`text-xs tracking-[0.2em] ${
                              isDark
                                ? "text-[#f7f5f0]/20"
                                : "text-[#3a2a1a]/20"
                            }`}
                            style={body}
                          >
                            Photo coming soon
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Bottom-right: Square photo */}
                    <div className="aspect-square overflow-hidden">
                      {excursion.detailSquarePhoto ? (
                        <img
                          src={excursion.detailSquarePhoto}
                          alt={`${excursion.name} — detail`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div
                          className={`w-full h-full flex items-center justify-center ${
                            isDark ? "bg-[#3a2a1a]/20" : "bg-[#f0ebe0]/30"
                          }`}
                        >
                          <span
                            className={`text-xs tracking-[0.2em] ${
                              isDark
                                ? "text-[#f7f5f0]/15"
                                : "text-[#3a2a1a]/15"
                            }`}
                            style={body}
                          >
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
                      className={`text-[10px] tracking-[0.35em] mb-3 ${
                        isDark ? "text-[#f7f5f0]/35" : "text-[#5a4a3a]/35"
                      }`}
                      style={bodyMedium}
                    >
                      Private Expedition
                    </p>
                    <h3
                      className={`text-2xl md:text-3xl mb-4 ${
                        isDark ? "text-[#f7f5f0]" : "text-[#3a2a1a]"
                      }`}
                      style={heading}
                    >
                      {excursion.name}
                    </h3>
                    <p
                      className={`text-sm md:text-base leading-relaxed mb-6 ${
                        isDark ? "text-[#f7f5f0]/50" : "text-[#7a7a7a]"
                      }`}
                      style={bodyLight}
                    >
                      {excursion.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {excursion.highlights.map((h, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2.5 text-sm ${
                            isDark ? "text-[#f7f5f0]/40" : "text-[#7a7a7a]"
                          }`}
                          style={bodyLight}
                        >
                          <span
                            className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${
                              isDark
                                ? "bg-[#f7f5f0]/25"
                                : "bg-[#3a2a1a]/25"
                            }`}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* What to bring */}
                    {excursion.whatToBring && (
                      <p
                        className={`text-xs italic mb-6 ${
                          isDark ? "text-[#f7f5f0]/30" : "text-[#999]"
                        }`}
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
                          src={excursion.detailVerticalPhoto}
                          alt={`${excursion.name} — vertical`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div
                        className={`aspect-[3/4] flex items-center justify-center ${
                          isDark ? "bg-[#3a2a1a]/15" : "bg-[#f0ebe0]/20"
                        }`}
                      >
                        <span
                          className={`text-xs tracking-[0.2em] ${
                            isDark
                              ? "text-[#f7f5f0]/12"
                              : "text-[#3a2a1a]/12"
                          }`}
                          style={body}
                        >
                          Photo coming soon
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Details Bar */}
                <div
                  className={`mt-8 pt-6 border-t grid grid-cols-2 md:grid-cols-4 gap-6 ${
                    isDark
                      ? "border-[#f7f5f0]/8"
                      : "border-[#3a2a1a]/8"
                  }`}
                >
                  <div>
                    <p
                      className={`text-[10px] tracking-[0.3em] mb-1 ${
                        isDark ? "text-[#f7f5f0]/30" : "text-[#999]"
                      }`}
                      style={bodyMedium}
                    >
                      Difficulty
                    </p>
                    <p
                      className={`text-sm font-medium ${
                        isDark ? "text-[#f7f5f0]" : "text-[#3a2a1a]"
                      }`}
                      style={body}
                    >
                      {excursion.difficulty}
                    </p>
                  </div>
                  <div>
                    <p
                      className={`text-[10px] tracking-[0.3em] mb-1 ${
                        isDark ? "text-[#f7f5f0]/30" : "text-[#999]"
                      }`}
                      style={bodyMedium}
                    >
                      Duration
                    </p>
                    <p
                      className={`text-sm font-medium ${
                        isDark ? "text-[#f7f5f0]" : "text-[#3a2a1a]"
                      }`}
                      style={body}
                    >
                      {excursion.duration}
                    </p>
                    {excursion.distance && (
                      <p
                        className={`text-xs mt-0.5 ${
                          isDark ? "text-[#f7f5f0]/30" : "text-[#999]"
                        }`}
                        style={bodyLight}
                      >
                        {excursion.distance}
                      </p>
                    )}
                  </div>
                  <div>
                    <p
                      className={`text-[10px] tracking-[0.3em] mb-1 ${
                        isDark ? "text-[#f7f5f0]/30" : "text-[#999]"
                      }`}
                      style={bodyMedium}
                    >
                      Ages
                    </p>
                    <p
                      className={`text-sm font-medium ${
                        isDark ? "text-[#f7f5f0]" : "text-[#3a2a1a]"
                      }`}
                      style={body}
                    >
                      All ages
                    </p>
                  </div>
                  {excursion.suggestedTime && (
                    <div>
                      <p
                        className={`text-[10px] tracking-[0.3em] mb-1 ${
                          isDark ? "text-[#f7f5f0]/30" : "text-[#999]"
                        }`}
                        style={bodyMedium}
                      >
                        Departures
                      </p>
                      <p
                        className={`text-sm font-medium ${
                          isDark ? "text-[#f7f5f0]" : "text-[#3a2a1a]"
                        }`}
                        style={body}
                      >
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
                    className={`w-full md:w-auto flex items-center justify-center gap-2.5 py-3.5 px-8 transition-all duration-300 ${
                      isDark
                        ? "bg-[#f7f5f0] hover:bg-white text-[#3a2a1a]"
                        : "bg-[#3a2a1a] hover:bg-[#5a4a3a] text-white"
                    }`}
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
