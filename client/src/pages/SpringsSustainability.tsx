/*
 * SPRINGS SUSTAINABILITY — Dedicated sustainability sub-page
 * Springs palette with adults-only eco-luxury focus
 */

import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import {
  AnimateOnScroll,
  TextReveal,
  fadeUp,
} from "@/components/motion";

const PALETTE = {
  primary: "#3D5E4A",
  secondary: "#5A5650",
  accent: "#7A9484",
  gradientStart: "#F7F5F0",
  gradientEnd: "#E8EEEA",
  text: "#3B2B26",
  textSecondary: "#67737C",
  textTertiary: "#9A9086",
  divider: "#E6DFD5",
};

const CDN_BASE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const CDN = {
  heroVideo: `${CDN_BASE}/wildlife-reel_7c30f53f.mp4`,
};

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

const initiatives = [
  {
    title: "Geothermal Energy",
    description:
      "Nayara Springs harnesses the volcanic energy of Arenal to heat all hot spring pools naturally — no fossil fuels required. Our geothermal system reduces energy consumption by over 60% compared to conventional heating, making every soak in your private pool a carbon-conscious luxury.",
  },
  {
    title: "Rainforest Corridor Protection",
    description:
      "The Springs property sits within a protected biological corridor connecting Arenal Volcano National Park to the Caño Negro Wildlife Refuge. We maintain over 15 acres of undisturbed primary rainforest and actively monitor wildlife populations including sloths, toucans, and poison dart frogs.",
  },
  {
    title: "Water Stewardship",
    description:
      "All water at Nayara Springs is sourced from natural volcanic springs and treated through a state-of-the-art filtration system. Greywater is recycled for irrigation, and our zero-runoff policy ensures that nothing from the property enters the surrounding watershed.",
  },
  {
    title: "Sustainable Luxury Design",
    description:
      "Every villa is built with locally sourced hardwoods, natural stone, and traditional Costa Rican construction techniques. Open-air architecture reduces the need for air conditioning, while native plantings eliminate the need for chemical landscaping. Luxury that works with nature, not against it.",
  },
];

export default function SpringsSustainability() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.gradientEnd }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <SustainabilityHero />
      <SustainabilityContent />
      <Footer pageType="property" />
    </div>
  );
}

function SustainabilityHero() {
  return (
    <section className="relative h-[50vh] min-h-[320px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <NativeVideo src={CDN.heroVideo} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 pointer-events-none" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end pb-8 md:pb-12 px-6 md:px-10">
        <TextReveal as="h1" delay={0.2}>
          <span
            className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Volcanic Stewardship
          </span>
        </TextReveal>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white/50 text-[11px] tracking-[0.2em] mt-3"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          Nayara Springs
        </motion.p>
      </div>
    </section>
  );
}

function SustainabilityContent() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.gradientEnd }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[15px] leading-[1.8] max-w-3xl mb-16"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
          >
            At Nayara Springs, sustainability is woven into the volcanic landscape itself. From
            geothermal energy to protected rainforest corridors, every element of the adults-only
            experience is designed to honor the extraordinary ecosystem that makes this place possible.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {initiatives.map((item, i) => (
            <AnimateOnScroll key={item.title} variants={fadeUp} delay={i * 0.1}>
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
                  className="text-[18px] mb-3"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: PALETTE.text }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[14px] leading-[1.7]"
                  style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
                >
                  {item.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll variants={fadeUp}>
          <div className="text-center mt-4">
            <a
              href="/springs"
              className="inline-block text-[11px] tracking-[0.2em] pb-1"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                color: PALETTE.primary,
                borderBottom: `1px solid ${PALETTE.primary}40`,
              }}
            >
              Explore All Sustainability
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
