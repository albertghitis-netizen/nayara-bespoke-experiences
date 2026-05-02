/**
 * COSTA RICA HUB — Destination-level page with 6 pillars
 * 
 * Shows:
 * - Hero video (Arenal sunset)
 * - "Costa Rica" title
 * - Six pillar cards:
 *   1. Pura Vida (hub)
 *   2. Curated Excursions
 *   3. Nurtured by Nature
 *   4. Forest to Table
 *   5. Family Adventure
 *   6. Rainforest Romance
 * - Footer
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import BrandNavigation from "@/components/BrandNavigation";
import BlobVideo from "@/components/BlobVideo";
import Footer from "@/components/Footer";
import { useIsMobile } from "@/hooks/useMobile";
import { ArrowRight } from "lucide-react";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;
const bodyMedium = { fontFamily: "var(--font-body)", fontWeight: 500 } as const;

const CDN = {
  heroDesktop: "/manus-storage/costa-rica-hero-arenal-sunset-audio_571086c8.mp4",
  heroMobile: "/manus-storage/costa-rica-hero-arenal-sunset-audio_571086c8.mp4",
  hangingBridges: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hanging-bridges-photo_a49dba00.jpeg",
  hotSprings: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hot-springs-hero_a60a0e92.jpg",
  yoga: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/yoga-photo_3b789b60.jpg",
  frogTour: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/frog-tour-hero_dc75898f.jpg",
  familyPool: "/manus-storage/family-11_4cb70bfe.jpeg",
  rainforestRomance: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hanging-bridges-photo_a49dba00.jpeg",
};

const C = {
  bone: "#F7F5F0",           // Bone (primary background)
  warmLinen: "#EDEEE2",       // Warm olive tint
  sageMist: "#EDF2E8",        // Subtle green
  olive: "#868B75",           // Olive Tree (primary)
  secondary: "#525642",       // Dark Olive
  accent: "#9A9086",          // Taupe/Gravel
  clover: "#286241",          // Legacy
  deepForest: "#3D5040",      // Legacy
  white: "#FFFFFF",
};

const PILLARS = [
  {
    title: "Pura Vida",
    subtitle: "The philosophy, the experience, the way of life in Costa Rica.",
    route: "/pura-vida",
    image: CDN.hangingBridges,
  },
  {
    title: "Curated Excursions",
    subtitle: "Volcano, canopy, canyon, river — the living landscape of Arenal.",
    route: "/curated-excursions",
    image: CDN.hangingBridges,
  },
  {
    title: "Nurtured by Nature",
    subtitle: "Hot springs, rainforest spa, and the science of green exposure.",
    route: "/wellness",
    image: CDN.hotSprings,
  },
  {
    title: "Forest to Table",
    subtitle: "Farm to rainforest table — cacao, coffee, and Michelin-recognized dining.",
    route: "/gastronomy",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/journal-cover-gastronomy-fire_a510d2d4.webp",
  },
  {
    title: "Family Adventure",
    subtitle: "The rainforest as living classroom — sloths, wildlife corridors, and wonder at every age.",
    route: "/family-expeditions",
    image: CDN.familyPool,
  },
  {
    title: "Rainforest Romance",
    subtitle: "Private springs, candlelit dinners, and intimate moments in the canopy.",
    route: "/rainforest-romance",
    image: CDN.rainforestRomance,
  },
];

export default function CostaRica() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BrandNavigation pageType="content" />
      <HeroSection />
      <PillarsSection />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Arenal sunset video with "Costa Rica" title
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <BlobVideo
          src={isMobile ? CDN.heroMobile : CDN.heroDesktop}
          className="w-full h-full object-cover"
          hasAudio={true}
          pillBg={C.deepForest}
          pillColor="white"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-12 md:pb-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-4xl md:text-5xl lg:text-6xl tracking-wide text-center leading-[1.1]"
          style={heading}
        >
          Costa Rica
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-4 text-white/70 text-sm md:text-base tracking-[0.1em] uppercase text-center"
          style={body}
        >
          Arenal Volcano · Three Resorts
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PILLARS — Six pillar cards
   ═══════════════════════════════════════════════════════════════ */
function PillarsSection() {
  return (
    <section className="py-20 md:py-32 px-6" style={{ backgroundColor: C.warmLinen }}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl tracking-wide text-center mb-16"
          style={{ ...heading, color: C.olive }}
        >
          Six Ways to Experience Costa Rica
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <Link href={pillar.route}>
                <div className="group cursor-pointer overflow-hidden rounded-lg">
                  {/* Image */}
                  <div className="relative h-64 md:h-72 overflow-hidden rounded-lg mb-6">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      className="text-xl md:text-2xl tracking-wide mb-3 group-hover:text-[#286241] transition-colors"
                      style={{ ...heading, color: C.olive }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      className="text-base leading-relaxed mb-4"
                      style={{ ...body, color: C.olive }}
                    >
                      {pillar.subtitle}
                    </p>
                    <div className="flex items-center gap-2" style={{ color: C.clover }}>
                      <span className="text-sm tracking-[0.08em] uppercase" style={bodyMedium}>
                        Explore
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
