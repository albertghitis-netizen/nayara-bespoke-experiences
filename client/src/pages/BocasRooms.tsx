/*
 * BOCAS DEL TORO ROOMS — Dedicated rooms/accommodations sub-page
 * Mirrors Alto Atacama secondary page structure with Caribbean ocean palette
 */

import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import {
  AnimateOnScroll,
  TextReveal,
  MediaReveal,
  fadeUp,
} from "@/components/motion";
import ScrollingPillarHeader from "@/components/ScrollingPillarHeader";

const PALETTE = {
  primary: "#008E97",
  secondary: "#5A6F7B",
  accent: "#7FA9C9",
  gradientStart: "#F7F5F0",
  gradientEnd: "#E2ECEE",
  text: "#3B2B26",
  textSecondary: "#67737C",
  textTertiary: "#9A9086",
  divider: "#E6DFD5",
};

const CDN_BASE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const CDN = {
  heroVideo: `${CDN_BASE}/nbt-horizontal-desktop_0c584342.mp4`,
  landscapeImg: `${CDN_BASE}/80_57ce5c18.jpg`,
};

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

const roomTypes = [
  {
    name: "Overwater Villa",
    description:
      "Perched above the turquoise Caribbean waters on a private island, each overwater villa features floor-to-ceiling glass, a private deck with direct ocean access, and an outdoor shower surrounded by mangroves. Fall asleep to the gentle lapping of waves beneath you.",
    features: ["Direct ocean access", "Private deck", "Outdoor shower", "Glass floor panels"],
  },
  {
    name: "Treehouse Villa",
    description:
      "Elevated among the jungle canopy, our treehouse villas offer a unique perspective of the archipelago. Private plunge pools, wraparound decks, and panoramic views of the Caribbean Sea create an unforgettable treetop sanctuary.",
    features: ["Private plunge pool", "Wraparound deck", "Canopy views", "Caribbean panorama"],
  },
  {
    name: "Garden Villa",
    description:
      "Nestled in lush tropical gardens with direct access to the island's pristine beaches. Each garden villa features a private terrace, outdoor rain shower, and hammock for lazy Caribbean afternoons.",
    features: ["Tropical garden setting", "Beach access", "Private terrace", "Outdoor hammock"],
  },
];

export default function BocasRooms() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.gradientEnd }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <RoomsHero />
      <ScrollingPillarHeader word="OVERWATER VILLAS & TREEHOUSES" color={PALETTE.primary} bgColor={PALETTE.gradientEnd} />
      <RoomsContent />
      <Footer pageType="property" bgColor="#008E97"  textColor="#FFFFFF" />
    </div>
  );
}

function RoomsHero() {
  return (
    <section className="relative aspect-[16/9] w-full overflow-hidden">
      <img src="/manus-storage/bocas-rooms-hero_510c4197.jpg" alt="Aerial view of Nayara Bocas del Toro overwater villas" className="w-full h-full object-cover" />
    </section>
  );
}

function RoomsContent() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.gradientEnd }}>
      <div className={maxW}>
        {/* Intro copy */}
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[15px] leading-[1.8] max-w-3xl mb-16"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
          >
            On a private island in Panama's Caribbean archipelago, each villa is a sanctuary
            where the jungle meets the sea. Overwater, treehouse, or garden — every accommodation
            offers an intimate connection with the turquoise waters and tropical landscapes of
            Bocas del Toro.
          </p>
        </AnimateOnScroll>

        {/* Room type cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {roomTypes.map((room, i) => (
            <AnimateOnScroll key={room.name} variants={fadeUp} delay={i * 0.1}>
              <div
                className="p-6 md:p-8 h-full"
                style={{
                  backgroundColor: "rgba(255,255,255,0.4)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "12px",
                  borderBottom: `2px solid ${PALETTE.divider}`,
                }}
              >
                <h3
                  className="text-[20px] mb-4"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: PALETTE.text }}
                >
                  {room.name}
                </h3>
                <p
                  className="text-[14px] leading-[1.7] mb-6"
                  style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
                >
                  {room.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {room.features.map((f) => (
                    <span
                      key={f}
                      className="text-[10px] tracking-[0.1em] px-3 py-1.5 rounded-full"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 500,
                        color: PALETTE.primary,
                        border: `1px solid ${PALETTE.primary}30`,
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Landscape image */}
        <div className="hidden md:block">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <img
                src={CDN.landscapeImg}
                alt="Aerial view of overwater villas in Bocas del Toro"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </MediaReveal>
        </div>
      </div>
    </section>
  );
}
