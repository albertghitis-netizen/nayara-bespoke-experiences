/**
 * NAYARA EXPERIENCES , Brand-Level Pillar Page
 * Shows all excursions across all 6 properties
 * One-axis filter: property selector
 * Hero → Intro → Property Filter → Excursion Cards → CTA → Footer
 */

import { useState, useRef, useMemo, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useIsMobile } from "@/hooks/useMobile";
import NativeVideo from "@/components/NativeVideo";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import HotelFilterBar3 from "@/components/HotelFilterBar3";
import { properties, type Excursion } from "@/data/properties";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

/* ─── CDN Assets ─── */
const CDN = {
  heroVertical: "/manus-storage/experiences-mobile-hero_3641d7ed.mp4",
  heroHorizontal: "/manus-storage/experiences-pillar-hero_157374e5.mp4",
};

export default function Experiences() {
  const [activeHotel, setActiveHotel] = useState("gardens");

  /* Aggregate all excursions with property metadata */
  const allExcursions = useMemo(() => {
    const result: Array<Excursion & { propertyId: string; propertyName: string; propertyRoute: string }> = [];
    for (const p of properties) {
      const route = `/${p.id === "alto-atacama" ? "alto-atacama" : p.id === "bocas-del-toro" ? "bocas-del-toro" : p.id === "tented-camp" ? "tented-camp" : p.id}`;
      for (const ex of p.excursions) {
        if (!ex.placeholder) {
          result.push({ ...ex, propertyId: p.id, propertyName: p.shortName, propertyRoute: route });
        }
      }
    }
    return result;
  }, []);

  const filtered = activeHotel ? allExcursions.filter((e) => e.propertyId === activeHotel) : allExcursions;

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BrandNavigation pageType="brand" hideCenterLabel />
      <HeroSection />
      <IntroSection />
      <HotelFilterBar3 activeHotel={activeHotel} onHotelChange={setActiveHotel} label="Explore by Hotel" />
      <ExcursionGrid excursions={filtered} />
      <CTASection />
      <Footer textColor="#FFFFFF" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO , Full-screen video with audio + sound pill
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        {isMobile ? (
          <NativeVideo src={CDN.heroVertical} className="w-full h-full object-cover" />
        ) : (
          <video
            ref={videoRef}
            src={CDN.heroHorizontal}
            className="w-full h-full object-cover"
            autoPlay
            loop
            playsInline
            preload="metadata"
            muted
            controls={false}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />
      </div>

      {/* Sound pill , espresso, identical to brand homepage */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        aria-label={isMuted ? "Unmute" : "Mute"}
        className="fixed z-50 hidden md:flex lg:flex items-center justify-center rounded-full backdrop-blur-md shadow-sm border cursor-pointer hover:opacity-90 transition-all duration-300 h-9 w-9"
        style={{
          top: "8px",
          left: "56px",
          backgroundColor: "rgba(59,43,38,0.8)",
          borderColor: "rgba(255,255,255,0.1)",
        }}
      >
        {isMuted && (
          <>
            <span className="absolute -inset-1 rounded-full border-2 animate-ping" style={{ borderColor: "rgba(247,245,240,0.37)" }} />
            <span className="absolute -inset-2 rounded-full border animate-ping" style={{ borderColor: "rgba(247,245,240,0.19)", animationDelay: "0.3s" }} />
          </>
        )}
        <svg
          className="w-4.5 h-4.5 transition-colors"
          style={{ color: "#F7F5F0" }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={isMuted
              ? "M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-3.72a.75.75 0 011.28.53v14.88a.75.75 0 01-1.28.53L6.75 14.25H3.75a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h3z"
              : "M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-3.72a.75.75 0 011.28.53v14.88a.75.75 0 01-1.28.53L6.75 15.75H3.75a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75h3z"
            }
          />
        </svg>
      </button>

      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6">
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="text-white text-xl md:text-3xl lg:text-4xl tracking-wide text-center" style={heading}>
          Experiences Rooted in Place
        </motion.h1>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   INTRO , Pillar description
   ═══════════════════════════════════════════════════════════════ */
function IntroSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-[900px] mx-auto">
        <FadeIn>
          <p className="text-[#3B2B26]/35 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>The Nayara Experience</p>
          <h2 className="text-[#4B4A4A] mb-8" style={{ ...heading, fontSize: "clamp(24px, 3.5vw, 38px)", lineHeight: 1.15 }}>
            Every Destination Tells a Different Story
          </h2>
          <p className="text-[#4B4A4A]/70 text-[15px] leading-[1.8]" style={body}>
            From stargazing in the world's driest desert to snorkeling Caribbean reefs, from hiking volcanic craters on Easter Island to zip-lining through Costa Rica's cloud forest, every Nayara experience is designed by the land it inhabits. Our excursions are led by local guides, grounded in cultural heritage, and calibrated to the rhythms of each ecosystem.
          </p>
          <Link href="/blog/experiential-travel-nayara-2026" className="inline-block mt-6 text-[#3B2B26]/50 text-[13px] tracking-[0.05em] border-b border-[#3B2B26]/20 pb-0.5 hover:text-[#3B2B26]/80 hover:border-[#3B2B26]/40 transition-colors" style={body}>
            Read: Experiential Travel at Nayara 2026 →
          </Link>
          <p className="hidden">
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EXCURSION GRID , Cards for all filtered excursions
   ═══════════════════════════════════════════════════════════════ */
function ExcursionGrid({ excursions }: { excursions: Array<Excursion & { propertyId: string; propertyName: string; propertyRoute: string }> }) {
  return (
    <section className="px-6 md:px-10 pb-16 md:pb-24">
      <div className="max-w-[1200px] mx-auto">
        <AnimatePresence mode="popLayout">
          {excursions.length === 0 ? (
            <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-20">
              <p className="text-[#3B2B26]/40 text-lg" style={heading}>No experiences match the selected filter</p>
            </motion.div>
          ) : (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {excursions.map((ex, i) => (
                <motion.div
                  key={`${ex.propertyId}-${ex.id}`}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
                  className="group bg-white/50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Media , video clip if available, otherwise image */}
                  {(ex.verticalVideo || ex.videoDesktop) ? (
                    <div className="aspect-[4/3] overflow-hidden">
                      <video
                        src={ex.verticalVideo || ex.videoDesktop}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : ex.image ? (
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={ex.image} alt={ex.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" decoding="async" loading="lazy" />
                    </div>
                  ) : null}
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[#3B2B26]/30 text-[9px] tracking-[0.2em]" style={{ ...body, fontWeight: 600 }}>
                        {ex.propertyName}
                      </span>
                      <span className="text-[#3B2B26]/15">·</span>
                      <span className="text-[#3B2B26]/30 text-[9px] tracking-[0.15em]" style={{ ...body, fontWeight: 500 }}>
                        {ex.category}
                      </span>
                    </div>
                    <h3 className="text-[#3B2B26] text-[17px] mb-2" style={{ ...heading, fontWeight: 500 }}>
                      {ex.name}
                    </h3>
                    <p className="text-[#4B4A4A]/55 text-[13px] leading-relaxed mb-4 line-clamp-3" style={body}>
                      {ex.description}
                    </p>
                    <div className="flex items-center gap-4 text-[11px] text-[#3B2B26]/35" style={{ ...body, fontWeight: 500 }}>
                      <span>{ex.duration}</span>
                      <span className="text-[#3B2B26]/15">·</span>
                      <span className="capitalize">{ex.difficulty}</span>
                      {ex.price && (
                        <>
                          <span className="text-[#3B2B26]/15">·</span>
                          <span>{ex.price}</span>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CTA , Explore properties
   ═══════════════════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-[#3B2B26]">
      <div className="max-w-[800px] mx-auto text-center">
        <FadeIn>
          <h2 className="text-white/80 mb-4" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            Ready to Explore?
          </h2>
          <p className="text-white/40 text-[14px] leading-relaxed mb-8" style={body}>
            Each property offers its own collection of excursions, guided by local experts and shaped by the landscape.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {properties.map((p) => {
              const route = `/${p.id === "alto-atacama" ? "alto-atacama" : p.id === "bocas-del-toro" ? "bocas-del-toro" : p.id === "tented-camp" ? "tented-camp" : p.id}`;
              return (
                <Link key={p.id} href={route} className="px-5 py-2.5 border border-white/15 rounded-full text-white/60 text-[12px] tracking-[0.08em] hover:border-white/40 hover:text-white/90 hover:bg-white/5 transition-all" style={{ ...body, fontWeight: 500 }}>
                  {p.shortName}
                </Link>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
