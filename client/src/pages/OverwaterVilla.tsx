/*
 * OVERWATER VILLA — Room Detail Shell
 * Property: Nayara Bocas del Toro
 * Palette: Ocean teal (#008E97) on light blue (#EAF4FF)
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";

const P = {
  bg: "#EAF4FF",
  text: "#1A0F0A",
  primary: "#008E97",
  bone: "#F7F5F0",
  white: "#FFFFFF",
};
const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

export default function OverwaterVilla() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: P.bg }}>
      <BrandNavigation pageType="property" hideCenterLabel />

      {/* Hero placeholder */}
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden" style={{ backgroundColor: "#005F66" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center"
          >
            <p
              className="text-white/50 text-[10px] md:text-[11px] tracking-[0.4em] uppercase mb-3"
              style={{ ...body, fontWeight: 500 }}
            >
              Nayara Bocas del Toro
            </p>
            <h1
              className="text-white text-3xl md:text-5xl lg:text-6xl tracking-wide"
              style={display}
            >
              Overwater Villa
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Coming soon content */}
      <section className="py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-[10px] tracking-[0.35em] uppercase mb-4"
            style={{ ...body, fontWeight: 500, color: P.primary }}
          >
            Coming Soon
          </p>
          <h2
            className="text-2xl md:text-3xl mb-6"
            style={{ ...display, color: P.text }}
          >
            Caribbean Living, Reimagined
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed mb-10"
            style={{ ...body, color: P.text + "99" }}
          >
            Perched above the crystalline waters of Bocas del Toro, the Overwater Villa offers a seamless connection between luxury and the Caribbean Sea. Glass floors, private decks, and direct ocean access define this extraordinary retreat. Full details arriving soon.
          </p>
          <Link
            href="/bocas-del-toro"
            className="inline-block px-8 py-3 rounded-full text-[11px] tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-80"
            style={{ ...body, fontWeight: 500, backgroundColor: P.primary, color: P.white }}
          >
            Back to Bocas del Toro
          </Link>
        </div>
      </section>

      <Footer textColor="#FFFFFF" />
    </div>
  );
}
