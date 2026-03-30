/*
 * Award-Winning Properties — Enhanced Animation Showcase
 * DESKTOP: H2 + body text left, big vertical Tented Camp right. Wide Atacama below full width.
 * MOBILE: H2 → full-width vertical Tented Camp only (immersive) → body text → CTA.
 *
 * ANIMATIONS:
 * - Parallax on images via scroll-linked transforms
 * - Ken Burns slow zoom on images
 * - Staggered text reveals (word-by-word heading)
 * - Counter animation on brand stats
 * - Horizontal line draw effect
 */

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

/* ── Media assets ── */
const PHOTO_ATACAMA_WIDE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-lodge-wide_9a96fbee.jpeg";

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

/* Individual stat card — hooks are safe at component top level */
function StatCard({ stat, index, isInView }: { stat: typeof stats[number]; index: number; isInView: boolean }) {
  const count = useCounter(stat.end, 2000, isInView);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
    >
      <span
        className="text-[#3a2a1a] text-4xl md:text-5xl lg:text-6xl block mb-2"
        style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
      >
        {count}{stat.suffix}
      </span>
      <span
        className="text-[#3a2a1a]/40 text-[10px] md:text-xs tracking-[0.2em] uppercase"
        style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
      >
        {stat.label}
      </span>
    </motion.div>
  );
}

function BrandStats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-12 md:py-16 border-y border-[#3a2a1a]/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {stats.map((stat, i) => (
        <StatCard key={stat.label} stat={stat} index={i} isInView={isInView} />
      ))}
    </motion.div>
  );
}

export default function AwardWinningProperties() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const mediaY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const atacamaY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  /* Word-by-word heading */
  const headingWords = "A Family of Award-Winning Properties Designed Around Destination".split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">

        {/* ════════════════════════════════════════════
            DESKTOP — editorial two-column + wide photo
           ════════════════════════════════════════════ */}
        <div className="hidden md:block">
          {/* Two columns: text left + vertical photo right */}
          <div className="grid grid-cols-12 gap-8 lg:gap-12">
            {/* LEFT — H2 (word-by-word) + body text + CTA */}
            <div className="col-span-6 flex flex-col justify-center">
              <h2
                className="text-[#3a2a1a] text-3xl lg:text-4xl xl:text-[2.8rem] leading-[1.15] mb-8 flex flex-wrap gap-x-[0.25em]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                {headingWords.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1 + i * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </h2>

              {/* Body text with line-by-line reveal */}
              <motion.p
                className="text-[#5a4a3a]/80 text-sm lg:text-[15px] leading-[1.8] mb-10 max-w-lg"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                Our resorts belong to the land. In Costa Rica, lush rainforest and mineral hot springs
                greet you at the foot of Arenal Volcano. In Chile's Atacama, the world's driest desert
                becomes a place of stillness and discovery. On Easter Island, silent giants stand guard
                and Rapa Nui culture is ever-present. On a private island on Panama's Caribbean coast,
                overwater villas rise above the reef. Six properties. Three countries. All designed to
                bring guests back to nature and leave every ecosystem stronger than we found it.
              </motion.p>

              {/* CTA with animated underline */}
              <motion.a
                href="#"
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  import("sonner").then(({ toast }) => toast("The Nayara Story — Coming Soon"));
                }}
                className="inline-flex items-center gap-2 text-[#3a2a1a] text-sm tracking-[0.05em] pb-1 hover:gap-3 transition-all duration-300 group w-fit relative"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                The Nayara Story
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                {/* Animated underline */}
                <motion.span
                  className="absolute bottom-0 left-0 h-px bg-[#3a2a1a]/30"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.a>
            </div>

            {/* RIGHT — Big vertical Tented Camp photo with parallax + Ken Burns */}
            <motion.div
              className="col-span-6"
              style={{ y: mediaY }}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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
                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* Below: full-width horizontal Atacama photo with parallax + Ken Burns */}
          <motion.div
            className="mt-8 aspect-[21/9] overflow-hidden relative"
            style={{ y: atacamaY }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src={PHOTO_ATACAMA_WIDE}
              alt="Nayara Alto Atacama — desert lodge against red rock mountains"
              className="w-full h-full object-cover"
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 10, ease: "linear" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* ════════════════════════════════════════════
            MOBILE — vertical photo only, immersive
           ════════════════════════════════════════════ */}
        <div className="md:hidden">
          {/* H2 — word-by-word on mobile too */}
          <motion.div
            className="mb-6"
          >
            <h2
              className="text-[#3a2a1a] text-3xl leading-[1.1] flex flex-wrap gap-x-[0.2em]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              {headingWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.05 + i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h2>
          </motion.div>

          {/* Vertical Tented Camp — full-width, tall, immersive with Ken Burns */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8 -mx-6"
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

          {/* Body text + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p
              className="text-[#5a4a3a]/80 text-sm leading-[1.8] mb-6"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Our resorts belong to the land. In Costa Rica, lush rainforest and mineral hot springs
              greet you at the foot of Arenal Volcano. In Chile's Atacama, the world's driest desert
              becomes a place of stillness and discovery. On Easter Island, silent giants stand guard
              and Rapa Nui culture is ever-present. On a private island on Panama's Caribbean coast,
              overwater villas rise above the reef. Six properties. Three countries. All designed to
              bring guests back to nature and leave every ecosystem stronger than we found it.
            </p>

            <a
              href="#"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                import("sonner").then(({ toast }) => toast("The Nayara Story — Coming Soon"));
              }}
              className="inline-flex items-center gap-2 text-[#3a2a1a] text-sm tracking-[0.05em] border-b border-[#3a2a1a]/30 pb-1"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              The Nayara Story
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* ════════════════════════════════════════════
            BRAND STATS — Counter animations
           ════════════════════════════════════════════ */}
        <div className="mt-16 md:mt-24">
          <BrandStats />
        </div>
      </div>
    </section>
  );
}
