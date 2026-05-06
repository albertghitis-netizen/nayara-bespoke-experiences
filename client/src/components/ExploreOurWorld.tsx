/*
 * The World of Nayara , Simple heading section
 * DISABLED: This section has been removed from the /arenal page
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

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-16 md:pt-20 lg:pt-24 pb-10"
    >
      {/* This section is now empty - "The World of Nayara" heading has been removed */}
    </section>
  );
}
