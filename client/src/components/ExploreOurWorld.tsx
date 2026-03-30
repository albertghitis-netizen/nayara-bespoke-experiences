/*
 * The World of Nayara — Final section before footer on the homepage
 * Just the heading + a brief brand statement. Footer handles the links.
 */

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ExploreOurWorld() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [10, -10]);

  const words = "The World of Nayara".split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-16 md:pt-20 lg:pt-24 pb-10"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="text-center mb-8">
          <motion.h2
            style={{ y: headingY }}
            className="text-[#3a2a1a] text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] flex flex-wrap justify-center gap-x-[0.3em]"
            aria-label="The World of Nayara"
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 1.0,
                  delay: 0.15 + i * 0.12,
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

          <motion.div
            className="mx-auto mt-6"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 60, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="h-px bg-[#3a2a1a]/20 w-full" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-[#3a2a1a]/40 text-sm md:text-base max-w-xl mx-auto mt-6"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Six extraordinary destinations across Latin America, united by a commitment to nature, community, and the art of travel.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
