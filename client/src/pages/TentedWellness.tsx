/**
 * BRAND WELLNESS — Nature-Based Wellness by Colors: Brown, Black, Green, Blue
 * 6-hotel filter with Springs as default
 * Based on: https://blog.nayararesorts.com/nature-based-wellness-at-nayara-resorts-how-deserts-rainforests-oceans-and-night-skies-shape-human-health
 */

import { useState, useRef, useMemo, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import NativeVideo from "@/components/NativeVideo";
import BrandNavigation from "@/components/BrandNavigation";
import HotelFilterBar3 from "@/components/HotelFilterBar3";
import { properties, type Treatment } from "@/data/properties";
import { getPalette, type PropertyPalette } from "@/data/propertyPalettes";
import { useIsMobile } from "@/hooks/useMobile";

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

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const WELLNESS_CDN = {
  heroImage: `${CDN}/Termaleschildren_5bfef28b.webp`,
  heroVideo: "/manus-storage/brand-wellness-hero-audio_152b2c3c.mp4",
};

interface WellnessEcosystem {
  id: string;
  color: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  science: string[];
}

const wellnessEcosystems: WellnessEcosystem[] = [
  {
    id: "brown",
    color: "Brown",
    title: "Atacama Desert by Day",
    subtitle: "Nayara Alto Atacama",
    description: "Across the deserts of the world, true oases are rare. Nayara Alto Atacama sits within the fertile Catarpe Valley at the edge of Chile's Atacama Desert. By day the desert setting feels stripped back to its elements — brown earth, open space, and quiet give the nervous system a low-input environment to recover from the chronic overload of dense urban life.",
    image: `${CDN}/IMG_6253_ffc4f157.PNG`,
    science: [
      "Attention Restoration Theory: environments with low sensory clutter help restore fatigued attention",
      "Bright light during the day supports melatonin timing, sleep quality, and mood regulation",
      "High altitude deserts with intense sunlight and very dark skies support clarity and reset",
    ],
  },
  {
    id: "black",
    color: "Black",
    title: "Dark-Sky Wellness",
    subtitle: "Nayara Alto Atacama",
    description: "When the sun drops behind the ridge, the desert trades brown for black. Artificial light stays intentionally low. Once your eyes adapt, the sky takes over as the main feature. These black skies form a full 24-hour environment for clarity, sleep support, and emotional reset, built from light, dark, and the absence of urban noise.",
    image: `${CDN}/atacama-stargazing_placeholder.jpg`,
    science: [
      "Melatonin rises when light fades, supporting metabolic regulation and tissue repair",
      "Strong contrast between bright days and genuinely dark nights supports circadian timing",
      "Experience of awe under a clear night sky modifies mood, stress, and prosocial behavior",
    ],
  },
  {
    id: "green",
    color: "Green",
    title: "Rainforest Wellness",
    subtitle: "Costa Rica: Gardens, Springs, Tented Camp",
    description: "Walk out of your villa in Arenal and you are in the color green — layers of leaves, moss, epiphytes, and a canopy that filters light. Air feels thicker. You hear water before you see it. The rainforest directly calms the nervous system, triggering the parasympathetic \u201Crest and repair\u201D state through natural soundscapes, humidity, and layered greenery. The air itself is different: oxygen-rich and filled with phytoncides, natural plant compounds linked to improved mood, reduced inflammation, and enhanced immune response. Your body starts changing before you realize it.",
    image: `${CDN}/costa-rica-spa-springs_89d85927.mp4`,
    science: [
      "Dense rainforest environments stimulate the parasympathetic nervous system, reducing cortisol and slowing breathing",
      "Phytoncides (airborne plant compounds) enhance immune function, reduce inflammation, and improve cognitive clarity",
      "Forest walks show lower cortisol, heart rate, and blood pressure compared with urban walks",
      "Natural soundscapes and absence of urban noise allow the brain to exit chronic fight-or-flight",
    ],
  },
  {
    id: "blue",
    color: "Blue",
    title: "Blue-Green Wellness",
    subtitle: "Nayara Bocas del Toro",
    description: "Rainforest meets reef and green meets blue. Water below your overwater villa shifts from pale turquoise over the reef to deep navy where the sea falls away. The ocean shifts your chemistry: swimming in salt water increases circulation and stimulates the release of endorphins, dopamine, and serotonin. Cold-to-warm ocean exposure improves vagus nerve tone\u2014key for emotional regulation and resilience. With no roads, no traffic noise, and minimal artificial stimulation, the brain exits constant alert mode. This isn\u2019t escape. It\u2019s recalibration.",
    image: `${CDN}/bocas-aerial-villas-boardwalk_94eb4b4f.jpg`,
    science: [
      "Blue-space exposure links with higher life satisfaction and lower psychological distress",
      "Salt water immersion stimulates endorphins, dopamine, and serotonin release",
      "Cold-to-warm water exposure improves vagus nerve tone for emotional regulation",
      "Absence of urban stimulation allows the brain to exit chronic fight-or-flight",
    ],
  },
];

export default function BrandWellness() {
  const [activeHotel, setActiveHotel] = useState("springs");
  const palette = {
    ...getPalette("tented-camp"),
    primary: "#3B2B26",
    secondary: "#3B2B26",
    gradientStart: "#F7F5F0",
    gradientEnd: "#F7F5F0",
  };

  /* Aggregate all treatments from all properties */
  const allTreatments = useMemo(() => {
    const result: Array<Treatment & { propertyId: string; propertyName: string }> = [];
    for (const p of properties) {
      for (const t of p.treatments) {
        result.push({ ...t, propertyId: p.id, propertyName: p.shortName });
      }
    }
    return result;
  }, []);

  const filtered = activeHotel ? allTreatments.filter((t) => t.propertyId === activeHotel) : allTreatments;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F7F5F0" }}>
      <BrandNavigation pageType="brand" hideCenterLabel />
      <HeroSection />
      <IntroSection palette={palette} />
      <EcosystemsSection palette={palette} />
      <BlogLinkSection palette={palette} />

      <Footer bgColor="#3B2B26" textColor="#FFFFFF" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Full-screen video
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();
  const mobileHeroImage = "/manus-storage/brand-wellness-mobile-hero_064bd82b.jpg";
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {isMobile ? (
          <img src={mobileHeroImage} alt="Nature-Based Wellness" className="w-full h-full object-cover" />
        ) : (
          <video
            ref={videoRef}
            src={WELLNESS_CDN.heroVideo}
            className="w-full h-full object-cover"
            autoPlay
            loop
            playsInline
            muted
            controls={false}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />
      </div>

      {/* Sound pill — espresso, identical to brand homepage */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        aria-label={isMuted ? "Unmute" : "Mute"}
        className="fixed z-50 hidden md:flex items-center justify-center rounded-full backdrop-blur-md shadow-sm border cursor-pointer hover:opacity-90 transition-all duration-300 h-9 px-4"
        style={{
          top: "10px",
          left: "56px",
          backgroundColor: "rgba(59,43,38,0.8)",
          borderColor: "rgba(255,255,255,0.1)",
        }}
      >
        {isMuted ? (
          <svg className="w-3.5 h-3.5 mr-1.5" style={{ color: "#F7F5F0" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-3.72a.75.75 0 011.28.53v14.88a.75.75 0 01-1.28.53L6.75 14.25H3.75a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h3z" />
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5 mr-1.5" style={{ color: "#F7F5F0" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-3.72a.75.75 0 011.28.53v14.88a.75.75 0 01-1.28.53L6.75 15.75H3.75a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75h3z" />
          </svg>
        )}
        <span className="text-xs tracking-[0.08em]" style={{ color: "#F7F5F0", fontFamily: "var(--font-body)", fontWeight: 500 }}>
          {isMuted ? "Sound" : "Mute"}
        </span>
      </button>

      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-xl md:text-3xl lg:text-4xl tracking-wide text-center"
          style={{ ...heading, fontWeight: 400 }}
        >
          Nature-Based Wellness
        </motion.h1>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   INTRO — Pillar description
   ═══════════════════════════════════════════════════════════════ */
function IntroSection({ palette }: { palette: PropertyPalette }) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: palette.gradientStart }}>
      <div className="max-w-[900px] mx-auto">
        <FadeIn>
          <p className="text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600, color: palette.primary }}>The Nayara Philosophy</p>
          <h2 className="mb-8" style={{ ...heading, fontSize: "clamp(24px, 3.5vw, 38px)", lineHeight: 1.15, color: palette.secondary }}>
            Four Colors, Four Workloads for the Nervous System
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-[15px] leading-[1.8]" style={{ ...body, color: palette.secondary }}>
              Brown, green, blue, and black describe four different environments across our portfolio. Deserts strip the visual field to light, rock, and distance. Rainforests overwhelm it with biodiversity, humidity, and sound. Oceans offer rhythm, horizon, and immersion. Dark skies change what the brain does with scale and time.
            </p>
            <p className="text-[15px] leading-[1.8]" style={{ ...body, color: palette.secondary }}>
              Treating "nature" as a single ingredient flattens what the research shows: the body reads each ecosystem differently. Nature-based wellness at Nayara is painted in brown, black, green, and blue — each offering distinct restoration for mind, body, and spirit.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ECOSYSTEMS — Four color sections
   ═══════════════════════════════════════════════════════════════ */
function EcosystemsSection({ palette }: { palette: PropertyPalette }) {
  return (
    <section className="pb-16 md:pb-24" style={{ backgroundColor: palette.gradientStart }}>
      {wellnessEcosystems.map((eco, idx) => (
        <EcosystemRow key={eco.id} ecosystem={eco} reversed={idx % 2 !== 0} index={idx} palette={palette} />
      ))}
    </section>
  );
}

function EcosystemRow({ ecosystem, reversed, index, palette }: { ecosystem: WellnessEcosystem; reversed: boolean; index: number; palette: PropertyPalette }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className={`px-6 md:px-10 ${index === 0 ? "" : "mt-16 md:mt-24"}`}>
      <div className="max-w-[1400px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className={reversed ? "md:order-2" : "md:order-1"}>
            <div className="aspect-[4/5] overflow-hidden">
              {ecosystem.id === "green" ? (
                <video src={ecosystem.image} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              ) : (
                <img src={ecosystem.image} alt={ecosystem.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
              )}
            </div>
          </div>
          <div className={reversed ? "md:order-1" : "md:order-2"}>
            <p className="text-[10px] tracking-[0.3em] mb-3" style={{ ...body, fontWeight: 600, color: palette.primary }}>{ecosystem.color} · {ecosystem.subtitle}</p>
            <h3 className="text-2xl md:text-3xl leading-[1.15] mb-6" style={{ ...heading, color: palette.secondary }}>{ecosystem.title}</h3>
            <p className="text-[15px] leading-relaxed mb-8" style={{ ...body, color: palette.secondary }}>{ecosystem.description}</p>
            <div className="space-y-3">
              {ecosystem.science.map((s) => (
                <p key={s} className="text-sm flex items-start gap-3" style={{ ...body, color: palette.secondary }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ backgroundColor: palette.primary }} />
                  <span>{s}</span>
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BLOG LINK — CTA to read full article
   ═══════════════════════════════════════════════════════════════ */
function BlogLinkSection({ palette }: { palette: PropertyPalette }) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: palette.gradientStart }}>
      <div className="max-w-[900px] mx-auto">
        <FadeIn>
          <div className="text-center">
            <p className="text-[15px] leading-relaxed mb-8" style={{ ...body, color: palette.secondary }}>
              Explore the full research, science, and philosophy behind nature-based wellness at Nayara Resorts in our comprehensive blog article.
            </p>
            <a
              href="https://blog.nayararesorts.com/nature-based-wellness-at-nayara-resorts-how-deserts-rainforests-oceans-and-night-skies-shape-human-health"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full border transition-all duration-300 hover:shadow-lg"
              style={{ borderColor: palette.primary, color: palette.secondary }}
            >
              <span style={{ ...body, fontWeight: 500 }}>Read the Full Article</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TREATMENTS — Spa menu for selected property
   ═══════════════════════════════════════════════════════════════ */
function TreatmentsSection({ treatments, palette }: { treatments: Array<Treatment & { propertyId: string; propertyName: string }>; palette: PropertyPalette }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(treatments.map((t) => t.category));
    return Array.from(cats).sort();
  }, [treatments]);

  const filtered = activeCategory ? treatments.filter((t) => t.category === activeCategory) : treatments;

  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: palette.gradientStart }}>
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <p className="text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600, color: palette.primary }}>Wellness Treatments</p>
          <h2 className="text-2xl md:text-3xl leading-[1.15] mb-12" style={{ ...heading, color: palette.secondary }}>
            Curated Spa & Wellness Menu
          </h2>

          {/* Category tabs */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-12">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${activeCategory === null ? "border-2" : "border border-opacity-30"}`}
                style={{
                  borderColor: palette.primary,
                  color: palette.secondary,
                  backgroundColor: activeCategory === null ? `${palette.primary}15` : "transparent",
                }}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${activeCategory === cat ? "border-2" : "border border-opacity-30"}`}
                  style={{
                    borderColor: palette.primary,
                    color: palette.secondary,
                    backgroundColor: activeCategory === cat ? `${palette.primary}15` : "transparent",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Treatment cards */}
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-12">
                <p className="text-[#3B2B26]/40" style={heading}>No treatments available</p>
              </motion.div>
            ) : (
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filtered.map((t, i) => (
                  <motion.div
                    key={`${t.propertyId}-${t.id}`}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
                    className="p-6 rounded-lg border"
                    style={{ borderColor: `${palette.primary}33`, backgroundColor: `${palette.primary}08` }}
                  >
                    <h4 className="text-lg mb-2" style={{ ...heading, color: palette.secondary }}>
                      {t.name}
                    </h4>
                    {t.localName && (
                      <p className="text-sm mb-3" style={{ ...body, color: palette.primary, fontStyle: "italic" }}>
                        {t.localName}
                      </p>
                    )}
                    <p className="text-sm mb-4" style={{ ...body, color: palette.secondary }}>
                      {t.description}
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <span style={{ ...body, color: palette.primary }}>{t.duration}</span>
                      <span style={{ ...body, fontWeight: 600, color: palette.secondary }}>{t.price}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </FadeIn>
      </div>
    </section>
  );
}
