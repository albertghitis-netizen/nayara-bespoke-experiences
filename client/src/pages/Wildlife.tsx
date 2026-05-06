/**
 * WILDLIFE , Curated Excursions Sub-page
 * Wildlife encounters & biodiversity experiences
 * Placeholder page , content to be added later
 */
import { motion } from "framer-motion";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const BRAND_COLORS = {
  bg: "#f7f5f0",
  primary: "#3a2a1a",
  secondary: "#5a4a3a",
  accent: "#b08d57",
  muted: "#8a7a6a",
};

export default function Wildlife() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: BRAND_COLORS.bg }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <HeroSection />
      <ContentPlaceholder />
      <Footer textColor="#FFFFFF" />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      {/* Gradient placeholder for hero video */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-teal-800 to-emerald-950" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

      {/* Back button */}
      <div className="absolute top-6 left-0 right-0 z-20 flex justify-center">
        <a
          href="/curated-excursions"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 text-white/80" />
          <span
            className="text-white/80 text-[11px] tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Curated Excursions
          </span>
        </a>
      </div>

      {/* H1 at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center pb-12 md:pb-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-3xl md:text-5xl lg:text-6xl tracking-wide text-center leading-[1.1]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Wildlife
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-4 text-white/60 text-sm md:text-base tracking-[0.1em] uppercase text-center"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Encounters with the rainforest's extraordinary inhabitants
        </motion.p>
      </div>
    </section>
  );
}

function ContentPlaceholder() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span
            className="text-[11px] tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-body)", color: BRAND_COLORS.accent }}
          >
            Coming Soon
          </span>
          <h2
            className="mt-4 text-2xl md:text-3xl tracking-wide"
            style={{ fontFamily: "var(--font-display)", color: BRAND_COLORS.primary }}
          >
            Content in Development
          </h2>
          <p
            className="mt-6 text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-body)", color: BRAND_COLORS.secondary }}
          >
            From toucans and sloths to poison dart frogs and howler monkeys,
            the Arenal rainforest is home to an extraordinary diversity of wildlife.
            Guided by expert naturalists, every walk reveals a new wonder.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
