/*
 * The World of Nayara — Simple heading section
 * Final section before footer on the homepage
 */

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
        {/* Heading with parallax */}
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
        </div>
      </div>
    </section>
  );
}
