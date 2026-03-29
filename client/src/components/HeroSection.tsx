/*
 * Hero Section — Full-viewport cinematic intro
 * Uses real uploaded video as background
 * Desktop: horizontal video | Mobile: vertical video
 * Just "Bespoke Experiences" at the bottom — clean and minimal
 */

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useIsMobile } from "@/hooks/useMobile";
import BlobVideo from "@/components/BlobVideo";

const VIDEO_DESKTOP =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-hero-new_42efa04c.mp4";
const VIDEO_MOBILE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-hero-vertical-new_1e1453e7.mp4";
const POSTER =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/IMG_6253_ffc4f157.PNG";

interface HeroSectionProps {
  onInView: () => void;
}

export default function HeroSection({ onInView }: HeroSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isInView) onInView();
  }, [isInView, onInView]);

  const videoSrc = isMobile ? VIDEO_MOBILE : VIDEO_DESKTOP;

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <BlobVideo
          src={videoSrc}
          className="w-full h-full object-cover"
          poster={POSTER}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
      </div>

      {/* Content — just Bespoke Experiences at the bottom */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-8 md:pb-12 px-6 md:px-10 max-w-[1400px] mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight"
          style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
        >
          Bespoke
          <br />
          Experiences
        </motion.h1>
      </div>
    </section>
  );
}
