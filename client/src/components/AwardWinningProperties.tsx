/**
 * Award-Winning Properties — Property Images + Brand Stats
 * LAYOUT: Tented Camp photo on top, Atacama ultra-wide full-screen below, then stats
 *
 * Text content (H2, body, CTA) moved to HomeIntroSection in Home.tsx
 */

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

/* ── Media assets ── */
const PHOTO_ATACAMA_WIDE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hero2-arenal-tent_860ab6b2.webp";

const PHOTO_TENTED_CAMP =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-camp-aerial_62a4d47c.jpeg";

/* ── Counter Hook ── */
function useCounter(end: number, duration = 2000, shouldStart = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    const startTime = performance.now();
    let raf: number;
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [shouldStart, end, duration]);

  return value;
}

/* ── Brand Stats ── */
const stats = [
  { end: 7, label: "Michelin Keys", suffix: "" },
  { end: 6, label: "Properties", suffix: "" },
  { end: 3, label: "Countries", suffix: "" },
  { end: 20, label: "Years of Excellence", suffix: "+" },
];

/* Individual stat card */
function StatCard({ stat, index, isInView }: { stat: typeof stats[number]; index: number; isInView: boolean }) {
  const count = useCounter(stat.end, 2000, isInView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      <span
        className="text-[#3a2a1a] text-4xl md:text-5xl lg:text-6xl block mb-2"
        style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
      >
        {count}{stat.suffix}
      </span>
      <span
        className="text-[#5a4a3a]/60 text-[10px] md:text-xs tracking-[0.2em] uppercase"
        style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
      >
        {stat.label}
      </span>
    </motion.div>
  );
}

function BrandStats() {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <div ref={statsRef}>
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-[#3a2a1a]/15 to-transparent mb-12"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} index={i} isInView={isInView} />
        ))}
      </div>
    </div>
  );
}

export default function AwardWinningProperties() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const tentedY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const atacamaY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      {/* ════════════════════════════════════════════
          TOP — Tented Camp photo (right-bleed)
         ════════════════════════════════════════════ */}
      <div className="py-20 md:py-32">
        {/* DESKTOP — Right-bleed: no right padding, image touches right edge */}
        <div className="hidden md:block pl-6 md:pl-10 lg:pl-[calc((100%-1300px)/2+40px)]">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="ml-auto"
            style={{ y: tentedY, marginLeft: 'auto', maxWidth: '55%' }}
          >
            <div className="aspect-[3/4] overflow-hidden relative group">
              <motion.img
                src={PHOTO_TENTED_CAMP}
                alt="Nayara Tented Camp — luxury tent surrounded by rainforest canopy"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 30%" }}
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 8, ease: "linear" }}
                whileHover={{ scale: 1.03 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* MOBILE — Full-width bleed */}
        <div className="md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="aspect-[3/4] overflow-hidden relative">
              <motion.img
                src={PHOTO_TENTED_CAMP}
                alt="Nayara Tented Camp — luxury tent in rainforest"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 30%" }}
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 6, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          ATACAMA — Full-width ultra-wide horizontal
         ════════════════════════════════════════════ */}
      <motion.div
        className="w-full overflow-hidden relative"
        style={{ y: atacamaY }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="aspect-[4/3] md:aspect-[16/9] overflow-hidden relative">
          <motion.img
            src={PHOTO_ATACAMA_WIDE}
            alt="Nayara Tented Camp — aerial view with Arenal Volcano"
            className="w-full h-full object-cover"
            initial={{ scale: 1.06 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 10, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/8 via-transparent to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* ════════════════════════════════════════════
          BRAND STATS — Counter animations
         ════════════════════════════════════════════ */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <BrandStats />
      </div>
    </section>
  );
}
