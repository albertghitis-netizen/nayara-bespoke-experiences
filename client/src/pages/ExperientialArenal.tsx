/**
 * CURATED EXCURSIONS , Pura Vida Sub-page
 * Design: Editorial magazine , bone/espresso brand palette
 * Typography: Playfair Display (display) + DM Sans (body)
 *
 * Structure:
 *   1. Hero video (desktop/mobile)
 *   2. Property Intro , "Three Resorts. One Rainforest."
 *   3. On-Property Nature & Wellness Experiences (dark espresso bg)
 *   4. Explore Arenal , Off-property excursions (bone bg)
 *   5. Footer
 *
 * Wellness & Culinary removed , those have their own Pura Vida sub-pages.
 */

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useSearch } from "wouter";
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
  exploreNayaraExperiences,
  type Excursion,
} from "@/data/properties";
import { PURA_VIDA_PILLARS } from "@/data/navigation";
import { useIsMobile } from "@/hooks/useMobile";
import BlobVideo from "@/components/BlobVideo";
import Footer from "@/components/Footer";

/* ── Shared style tokens ─────────────────────────────────────── */
const heading = { fontFamily: "var(--font-display)", fontWeight: 500 } as const;
const headingLight = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;
const bodyLight = { fontFamily: "var(--font-body)", fontWeight: 300 } as const;
const bodyMedium = { fontFamily: "var(--font-body)", fontWeight: 500 } as const;

const CDN = {
  heroDesktop: "/manus-storage/journal-desktop-hero_6c6166c1.mp4",
  heroMobile: "/manus-storage/journal-mobile-hero-cropped_b20d2a0a.mp4",
};

/* ── Category configs ────────────────────────────────────────── */
// Off-property: adventure, nature, community


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
  const searchString = useSearch();
  const backLink = useMemo(() => {
    const params = new URLSearchParams(searchString);
    const from = params.get("from");
    if (from === "tented-camp") return { label: "Nayara Tented Camp", href: "/tented-camp" };
    if (from === "springs") return { label: "Nayara Springs", href: "/springs" };
    if (from === "gardens") return { label: "Nayara Gardens", href: "/gardens" };
    return undefined;
  }, [searchString]);

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BrandNavigation pageType="content" backLink={backLink} />
      <ArenalHero />
      <PropertyIntro />
      <WithinOurGroundsSection />
      <OffSiteCTA />
      <Footer bgColor="#868B75"  textColor="#FFFFFF" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO SECTION , Full-screen video
   ═══════════════════════════════════════════════════════════════ */
function ArenalHero() {
  const isMobile = useIsMobile();
  const heroVideo = isMobile ? CDN.heroMobile : CDN.heroDesktop;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <BlobVideo
          src={heroVideo}
          className="w-full h-full object-cover"
          hasAudio={false}
          pillBg="rgba(58,42,26,0.7)"
          pillColor="#f7f5f0"
        />
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
          Three Resorts. One Rainforest.
        </motion.h1>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PILLAR DROPDOWN , Category selector below hero
   ═══════════════════════════════════════════════════════════════ */
function PillarDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.0 }}
      className="relative mt-6"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 hover:bg-white/25 transition-all duration-300"
      >
        <span
          className="text-white text-[11px] tracking-[0.2em] uppercase"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          Explore Pillars
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-3.5 h-3.5 text-white/70" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full mt-2 left-1/2 -translate-x-1/2 min-w-[200px] bg-[#3a2a1a]/90 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden shadow-2xl z-50"
          >
            {PURA_VIDA_PILLARS.map((pillar, i) => (
              <Link
                key={pillar.label}
                href={pillar.route}
                onClick={() => setOpen(false)}
                className="block px-5 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-colors text-[12px] tracking-[0.1em]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                {pillar.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROPERTY INTRO , "Three Resorts. One Rainforest."
   Experiential hospitality narrative: experiences are the reason
   to visit, not an add-on.
   ═══════════════════════════════════════════════════════════════ */
function PropertyIntro() {
  return (
    <section
      className="relative py-16 md:py-28 overflow-hidden"
      style={{ backgroundColor: "#EDEEE2" }}
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
        {/* Philosophy: One Interconnected Destination */}
        <FadeIn className="max-w-3xl">
          <p
            className="text-[#868B75] text-[10px] md:text-[11px] tracking-[0.35em] uppercase mb-4"
            style={bodyMedium}
          >
            The Philosophy
          </p>
          <p
            className="text-[#525642] text-xl md:text-2xl lg:text-[26px] leading-snug mb-6"
            style={headingLight}
          >
            One Interconnected Destination
          </p>
          <p
            className="text-[#525642]/65 text-base md:text-[17px] leading-relaxed mb-6"
            style={body}
          >
            Imagine a vacation where you get the intimacy and privacy of your own secluded hotel, but with access to the amenities and experiences of three world-class properties. That is exactly what awaits at Nayara Gardens, Nayara Springs, and Nayara Tented Camp in Costa Rica's Arenal region.
          </p>
          <p
            className="text-[#525642]/65 text-base md:text-[17px] leading-relaxed"
            style={body}
          >
            While each property maintains its own distinct character and peaceful sanctuary, guests enjoy seamless access to a shared ecosystem of wellness and adventure that transforms a stay into an unforgettable journey through one magical rainforest. Whether you are seeking wellness rejuvenation or nature immersion, everything you need exists within reach.
          </p>
        </FadeIn>

        {/* Stats row */}
        <FadeIn className="mt-16" delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "3", label: "Properties, One Ecosystem" },
              { value: "1,400", label: "Acres of Rainforest Reserve" },
              { value: "900+", label: "Bird Species in Costa Rica" },
              { value: "2", label: "Yoga Disciplines Daily" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-6"
                style={{
                  backgroundColor: "rgba(255,255,255,0.4)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "12px",
                  borderBottom: "2px solid #868B75",
                }}
              >
                <p
                  className="text-3xl md:text-4xl mb-2"
                  style={{ ...headingLight, color: "#868B75" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-[11px] tracking-[0.1em]"
                  style={{ ...bodyMedium, color: "#525642" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   WITHIN OUR GROUNDS , On-property nature experiences
   Dark espresso background for contrast
   ═══════════════════════════════════════════════════════════════ */
function WithinOurGroundsSection() {

  // Filter nature and wellness on-property experiences, exclude Rio Celeste (moved to Explore Arenal)
  const onPropertyNature = exploreNayaraExperiences.filter(
    (e) => (e.category === "nature" || e.category === "wellness") && e.id !== "celeste-river"
  );
  // Top row: nature (sloth, botanical, bird) — Bottom row: wellness (hatha, vinyasa, hot springs)
  const natureOrder = ["finding-tony-the-sloth", "botanical-hike", "birdwatching"];
  const wellnessOrder = ["vinyasa-yoga", "breathwork-meditation", "hatha-yoga"];
  const topRow = natureOrder.map(id => onPropertyNature.find(e => e.id === id)!).filter(Boolean);
  const bottomRow = wellnessOrder.map(id => onPropertyNature.find(e => e.id === id)!).filter(Boolean);

  return (
    <section
      id="within-our-grounds"
      className="relative py-24 md:py-32"
      style={{ backgroundColor: "#3a3d2e" }}
    >
      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-16">
        <FadeIn>
          <h2
            className="text-[#f7f5f0] text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-3"
            style={heading}
          >
            Within Our Grounds
          </h2>
          <p
            className="text-[#f7f5f0]/40 text-lg md:text-xl tracking-wide"
            style={bodyLight}
          >
            On-Property Nature & Wellness Experiences
          </p>
          <p
            className="text-[#f7f5f0]/50 text-sm md:text-base leading-relaxed mt-6 max-w-2xl"
            style={body}
          >
            Before venturing beyond the gates, discover the living rainforest
            that surrounds the three Nayara properties. Over 380 acres of
            primary and secondary forest, home to sloths, toucans, and over 500
            bird species , all accessible from your villa.
          </p>
        </FadeIn>
      </div>

      {/* Experience Cards — Top Row (3 cards) */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 md:items-stretch">
          {topRow.map((excursion, i) => (
            <FadeIn key={excursion.id} delay={i * 0.1} className="flex">
              <div
                className="group border border-[#f7f5f0]/8 hover:border-[#f7f5f0]/20 transition-all duration-500 flex flex-col w-full"
              >
                {/* Media , image preferred over vertical video */}
                <div className="relative overflow-hidden h-72 md:h-80 shrink-0">
                  {excursion.image ? (
                    <img
                      src={excursion.image}
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
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#3a2a1a]/40 to-[#2a1f14]/60">
                      <MapPin className="w-8 h-8 text-[#f7f5f0]/15" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content — always visible, flex column to align schedule */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3
                    className="text-[#f7f5f0] text-xl md:text-2xl mb-2"
                    style={heading}
                  >
                    {excursion.name}
                  </h3>
                  <p
                    className="text-[#f7f5f0]/40 text-sm italic mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {excursion.subtitle}
                  </p>

                  {/* Description area — flex-grow pushes schedule to bottom */}
                  <div className="flex-grow">
                    <p
                      className="text-[#f7f5f0]/50 text-sm leading-relaxed mb-4"
                      style={bodyLight}
                    >
                      {excursion.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs text-[#f7f5f0]/30" style={body}>
                      <span>{excursion.duration}</span>
                      <span>{excursion.difficulty}</span>
                      {excursion.suggestedTime && (
                        <span>{excursion.suggestedTime}</span>
                      )}
                    </div>
                  </div>
                  {excursion.weeklySchedule && excursion.weeklySchedule.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-[#f7f5f0]/10">
                      <span className="text-[#f7f5f0]/50 text-xs tracking-[0.15em] uppercase block mb-2" style={bodyMedium}>Weekly Schedule</span>
                      <div className="flex flex-wrap gap-2">
                        {excursion.weeklySchedule.map((slot, idx) => (
                          <span key={idx} className="text-[#f7f5f0]/70 text-xs bg-[#f7f5f0]/8 px-3 py-1.5 rounded-sm" style={body}>{slot}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  <a
                    href="/tented-camp/experiences"
                    className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full border border-[#f7f5f0]/30 text-[#f7f5f0] text-[11px] tracking-[0.12em] uppercase transition-all duration-500 ease-out hover:scale-[1.05] hover:bg-[#556B2F] hover:border-[#556B2F] w-fit"
                    style={bodyMedium}
                  >
                    Explore
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom Row (2 cards centered) */}
        {bottomRow.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-6 md:mt-8 md:items-stretch">
            {bottomRow.map((excursion, i) => (
              <FadeIn key={excursion.id} delay={(i + 3) * 0.1} className="flex">
                <div
                  className="group border border-[#f7f5f0]/8 hover:border-[#f7f5f0]/20 transition-all duration-500 flex flex-col w-full"
                >
                  {/* Media */}
                  <div className="relative overflow-hidden h-72 md:h-80 shrink-0">
                    {excursion.image ? (
                      <img
                        src={excursion.image}
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
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#3a2a1a]/40 to-[#2a1f14]/60">
                        <MapPin className="w-8 h-8 text-[#f7f5f0]/15" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Content — always visible, flex column to align schedule */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3
                      className="text-[#f7f5f0] text-xl md:text-2xl mb-2"
                      style={heading}
                    >
                      {excursion.name}
                    </h3>
                    <p
                      className="text-[#f7f5f0]/40 text-sm italic mb-3"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {excursion.subtitle}
                    </p>

                    {/* Description area — flex-grow pushes schedule to bottom */}
                    <div className="flex-grow">
                      <p
                        className="text-[#f7f5f0]/50 text-sm leading-relaxed mb-4"
                        style={bodyLight}
                      >
                        {excursion.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-xs text-[#f7f5f0]/30" style={body}>
                        <span>{excursion.duration}</span>
                        <span>{excursion.difficulty}</span>
                        {excursion.suggestedTime && (
                          <span>{excursion.suggestedTime}</span>
                        )}
                      </div>
                    </div>
                    {excursion.weeklySchedule && excursion.weeklySchedule.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-[#f7f5f0]/10">
                        <span className="text-[#f7f5f0]/50 text-xs tracking-[0.15em] uppercase block mb-2" style={bodyMedium}>Weekly Schedule</span>
                        <div className="flex flex-wrap gap-2">
                          {excursion.weeklySchedule.map((slot, idx) => (
                            <span key={idx} className="text-[#f7f5f0]/70 text-xs bg-[#f7f5f0]/8 px-3 py-1.5 rounded-sm" style={body}>{slot}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    <a
                      href="/tented-camp/experiences"
                      className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full border border-[#f7f5f0]/30 text-[#f7f5f0] text-[11px] tracking-[0.12em] uppercase transition-all duration-500 ease-out hover:scale-[1.05] hover:bg-[#556B2F] hover:border-[#556B2F] w-fit"
                      style={bodyMedium}
                    >
                      Explore
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EXPLORE ARENAL , Off-property excursions
   Bone/cream background
   ═══════════════════════════════════════════════════════════════ */
function ExploreArenalSection() {
  return (
    <section id="explore-arenal" className="relative py-24 md:py-32">
      {/* Section Header */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 mb-16">
        <FadeIn>
          <h2
            className="text-[#525642] text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-3"
            style={heading}
          >
            Explore Arenal
          </h2>
          <p
            className="text-[#868B75] text-lg md:text-xl tracking-wide"
            style={bodyLight}
          >
            Beyond Our Grounds
          </p>
        </FadeIn>
      </div>

      {/* Excursion Cards , exact brand experiences format */}
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
                {/* Media , image preferred over horizontal video */}
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
              : "border border-[#525642]/8 hover:border-[#525642]/15"
          }`}
          onClick={onToggle}
        >
          {/* Photo / Video thumbnail — image preferred */}
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
                      /* Mobile: show card image as still instead of video */
                      <div className="aspect-[3/4] overflow-hidden">
                        {cardImageSrc ? (
                          <img
          loading="lazy"
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
          loading="lazy"
                          src={cardImageSrc}
                          alt={`${excursion.name} , landscape`}
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
          loading="lazy"
                          src={excursion.detailSquarePhoto}
                          alt={`${excursion.name} , detail`}
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
                                : "text-[#525642]/25"
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
                        isDark ? "text-[#f7f5f0]" : "text-[#525642]"
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
          loading="lazy"
                          src={excursion.detailVerticalPhoto}
                          alt={`${excursion.name} , vertical`}
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
                        isDark ? "text-[#f7f5f0]" : "text-[#525642]"
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
                        isDark ? "text-[#f7f5f0]" : "text-[#525642]"
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
                        isDark ? "text-[#f7f5f0]" : "text-[#525642]"
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
                        : "bg-[#868B75] hover:bg-[#525642] text-white"
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

/* ═══════════════════════════════════════════════════════════════
   OFF-SITE CTA — Links to /explore-arenal
   ═══════════════════════════════════════════════════════════════ */
function OffSiteCTA() {
  return (
    <section className="relative py-20 md:py-28 bg-[#EDEEE2]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center">
        <FadeIn>
          <p
            className="text-[#868B75] text-[10px] md:text-[11px] tracking-[0.35em] uppercase mb-4"
            style={bodyMedium}
          >
            Beyond Our Grounds
          </p>
          <h2
            className="text-[#525642] text-2xl md:text-3xl lg:text-4xl mb-6"
            style={headingLight}
          >
            Discover the Arenal Region
          </h2>
          <p
            className="text-[#525642]/65 text-base md:text-[17px] leading-relaxed max-w-2xl mx-auto mb-10"
            style={body}
          >
            From volcanic hot springs and hanging bridges to river adventures and local community encounters — explore the extraordinary natural wonders that surround Nayara.
          </p>
          <a
            href="/explore-arenal?from=curated-excursions"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#556B2F] text-white text-[12px] tracking-[0.2em] uppercase rounded-full transition-all duration-500 ease-out hover:scale-[1.05] hover:shadow-lg"
            style={bodyMedium}
          >
            Explore Our Off-Site Activities
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
