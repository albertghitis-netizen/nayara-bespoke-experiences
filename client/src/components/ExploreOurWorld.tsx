/*
 * The World of Nayara — Enhanced Animation Showcase
 * Final section before footer on the homepage
 * 
 * ANIMATIONS:
 * - Word-by-word staggered reveal with blur effect
 * - Scroll-linked parallax on heading
 * - Self-drawing horizontal divider
 * - Fade-up subtitle with character reveal
 * - Destination tags with staggered entrance
 */

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const destinations = [
  { name: "Costa Rica", count: "3 properties" },
  { name: "Chile", count: "1 property" },
  { name: "Easter Island", count: "1 property" },
  { name: "Panama", count: "1 property" },
];

export default function ExploreOurWorld() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const headingScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.02]);

  const words = "The World of Nayara".split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-16 md:pt-20 lg:pt-24 pb-10"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Heading with enhanced parallax */}
        <div className="text-center mb-8">
          <motion.h2
            style={{ y: headingY, scale: headingScale }}
            className="text-[#3a2a1a] text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] flex flex-wrap justify-center gap-x-[0.3em]"
            aria-label="The World of Nayara"
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 1.0,
                  delay: 0.15 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  lineHeight: 1.05,
                  display: "inline-block",
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          {/* Self-drawing divider */}
          <motion.div
            className="mx-auto mt-6"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-[#3a2a1a]/30 to-transparent w-full" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-[#3a2a1a]/40 text-sm md:text-base max-w-xl mx-auto mt-6"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Six extraordinary destinations across Latin America, united by a commitment to nature, community, and the art of travel.
          </motion.p>

          {/* Destination tags — staggered entrance */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8">
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 1.1 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-center gap-2 px-4 py-2 border border-[#3a2a1a]/10 rounded-full"
              >
                <span
                  className="text-[#3a2a1a]/70 text-xs tracking-[0.08em]"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  {dest.name}
                </span>
                <span
                  className="text-[#3a2a1a]/30 text-[10px]"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {dest.count}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
