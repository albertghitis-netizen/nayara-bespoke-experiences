/*
 * Award-Winning Properties — Two-Media-Slot System
 * DESKTOP: H2 + body text left, big vertical Tented Camp right. Wide Atacama below full width.
 * MOBILE: H2 → full-width vertical Tented Camp only (immersive) → body text → CTA.
 *         Horizontal Atacama is hidden on mobile to avoid squished layout.
 */

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ── Media assets ── */
const PHOTO_ATACAMA_WIDE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-lodge-wide_9a96fbee.jpeg";

const PHOTO_TENTED_CAMP =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-camp-aerial_62a4d47c.jpeg";

export default function AwardWinningProperties() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const mediaY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f7f5f0] py-20 md:py-32 overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">

        {/* ════════════════════════════════════════════
            DESKTOP — editorial two-column + wide photo
           ════════════════════════════════════════════ */}
        <div className="hidden md:block">
          {/* Two columns: text left + vertical photo right */}
          <div className="grid grid-cols-12 gap-8 lg:gap-12">
            {/* LEFT — H2 + body text + CTA */}
            <motion.div
              className="col-span-6 flex flex-col justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2
                className="text-[#3a2a1a] text-3xl lg:text-4xl xl:text-[2.8rem] leading-[1.15] mb-8"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                A Family of Award-Winning
                <br />
                Properties Designed
                <br />
                Around Destination
              </h2>

              <p
                className="text-[#5a4a3a]/80 text-sm lg:text-[15px] leading-[1.8] mb-10 max-w-lg"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                Our resorts belong to the land. In Costa Rica, lush rainforest and mineral hot springs
                greet you at the foot of Arenal Volcano. In Chile's Atacama, the world's driest desert
                becomes a place of stillness and discovery. On Easter Island, silent giants stand guard
                and Rapa Nui culture is ever-present. On a private island on Panama's Caribbean coast,
                overwater villas rise above the reef. Six properties. Three countries. All designed to
                bring guests back to nature and leave every ecosystem stronger than we found it.
              </p>

              <motion.a
                href="#"
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  import("sonner").then(({ toast }) => toast("The Nayara Story — Coming Soon"));
                }}
                className="inline-flex items-center gap-2 text-[#3a2a1a] text-sm tracking-[0.05em] border-b border-[#3a2a1a]/30 pb-1 hover:border-[#3a2a1a]/60 transition-colors group w-fit"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.3 }}
              >
                The Nayara Story
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </motion.a>
            </motion.div>

            {/* RIGHT — Big vertical Tented Camp photo */}
            <motion.div
              className="col-span-6"
              style={{ y: mediaY }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={PHOTO_TENTED_CAMP}
                  alt="Nayara Tented Camp — luxury tent surrounded by rainforest canopy"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-[1.5s]"
                  style={{ objectPosition: "center 30%" }}
                />
              </div>
            </motion.div>
          </div>

          {/* Below: full-width horizontal Atacama photo (DESKTOP ONLY) */}
          <motion.div
            className="mt-8 aspect-[21/9] overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={PHOTO_ATACAMA_WIDE}
              alt="Nayara Alto Atacama — desert lodge against red rock mountains"
              className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-[1.5s]"
            />
          </motion.div>
        </div>

        {/* ════════════════════════════════════════════
            MOBILE — vertical photo only, immersive
           ════════════════════════════════════════════ */}
        <div className="md:hidden">
          {/* H2 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <h2
              className="text-[#3a2a1a] text-3xl leading-[1.1]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              A Family of Award-Winning Properties Designed Around Destination
            </h2>
          </motion.div>

          {/* Vertical Tented Camp — full-width, tall, immersive */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8 -mx-6"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={PHOTO_TENTED_CAMP}
                alt="Nayara Tented Camp — luxury tent in rainforest"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 30%" }}
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
      </div>
    </section>
  );
}
