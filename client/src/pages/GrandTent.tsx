/*
 * GRAND TENT — Room Detail Shell
 * Property: Nayara Tented Camp
 * Palette: Olive 3-tone (#868B75, #525642, #9A9086) on bone #EDEEE2
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";

const P = {
  bg: "#EDEEE2",
  text: "#0D0604",
  primary: "#868B75",
  secondary: "#525642",
  bone: "#F7F5F0",
  white: "#FFFFFF",
};
const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

export default function GrandTent() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: P.bg }}>
      <BrandNavigation pageType="property" hideCenterLabel />

      {/* Hero placeholder */}
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden" style={{ backgroundColor: P.secondary }}>
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
              Nayara Tented Camp
            </p>
            <h1
              className="text-white text-3xl md:text-5xl lg:text-6xl tracking-wide"
              style={display}
            >
              Grand Tent
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
            An Elevated Retreat
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed mb-10"
            style={{ ...body, color: P.text + "99" }}
          >
            The Grand Tent offers an expansive sanctuary beneath soaring canvas ceilings, with multiple living areas, a private plunge pool, and panoramic views of the Arenal Volcano. Full details arriving soon.
          </p>
          <Link
            href="/tented-camp"
            className="inline-block px-8 py-3 rounded-full text-[11px] tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-80"
            style={{ ...body, fontWeight: 500, backgroundColor: P.primary, color: P.white }}
          >
            Back to Tented Camp
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
