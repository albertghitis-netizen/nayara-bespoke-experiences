/*
 * Hero Section — Full-viewport cinematic intro
 * Uses real uploaded video as background
 * Desktop: horizontal video | Mobile: vertical video
 * Just "Bespoke Experiences" at the bottom — clean and minimal
 */

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useIsMobile } from "@/hooks/useMobile";
import NativeVideo from "@/components/NativeVideo";

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
        <NativeVideo
          src={videoSrc}
          className="w-full h-full object-cover"
          poster={POSTER}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
      </div>

      {/* Content — centered at bottom */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-wide text-center"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Bespoke Experiences
        </motion.h1>
      </div>
    </section>
  );
}
