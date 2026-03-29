/*
 * Explore Our World — Botanical texture section
 * Embossed plaster leaf texture with slow growing/reveal animation
 * Sits above the footer as its own section
 */

import { motion } from "framer-motion";

const TEXTURE_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/botanical-texture-embossed-hig62x94aNi7TNioLbvtkE.webp";

export default function ExploreOurWorld() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      {/* Warm cream base */}
      <div className="absolute inset-0 bg-[#f0ebe0]" />

      {/* Botanical texture — grows in from edges */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.15 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Main texture layer */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `url(${TEXTURE_URL})`,
            backgroundSize: "900px 900px",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
          }}
        />

        {/* Larger accent layer — slow drift */}
        <motion.div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url(${TEXTURE_URL})`,
            backgroundSize: "1400px 1400px",
            backgroundRepeat: "repeat",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "30px 15px", "0px 0px"],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Soft vignette edges */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#f0ebe0] via-transparent to-[#f0ebe0] opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f0ebe0] via-transparent to-[#f0ebe0] opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#3a2a1a] text-5xl md:text-7xl lg:text-[5.5rem]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400, lineHeight: 1.05 }}
        >
          Explore Our World
        </motion.h2>
      </div>
    </section>
  );
}
