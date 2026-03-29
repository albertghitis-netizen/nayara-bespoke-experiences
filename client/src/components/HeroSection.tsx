/*
 * Hero Section — Full-viewport cinematic intro
 * Uses real uploaded video as background
 * Editorial typography with "Bespoke Experiences" title
 */

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const VIDEO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Edits_Atacama_horizontal_1_20260320_142142_8751bdb3.mov";

interface HeroSectionProps {
  onInView: () => void;
}

export default function HeroSection({ onInView }: HeroSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (isInView) onInView();
  }, [isInView, onInView]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/IMG_6253_ffc4f157.PNG"
        >
          <source src={VIDEO_URL} type="video/quicktime" />
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-10 max-w-[1400px] mx-auto">
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/70 text-xs md:text-sm tracking-wide-editorial uppercase mb-4"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          Nayara Alto Atacama &mdash; Atacama Desert, Chile
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-6"
          style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
        >
          Bespoke
          <br />
          Experiences
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/80 text-base md:text-lg max-w-xl leading-relaxed"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          An oasis under the stars in the driest desert on Earth.
          Discover excursions, wellness rituals, and adventures
          crafted around you.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-12 flex items-center gap-3"
        >
          <div className="w-px h-10 bg-white/30 relative overflow-hidden">
            <motion.div
              className="w-full bg-gold-light"
              animate={{ height: ["0%", "100%", "0%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "absolute", top: 0 }}
            />
          </div>
          <span
            className="text-white/50 text-xs tracking-editorial uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </section>
  );
}
