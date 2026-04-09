/*
 * NAYARA TENTED MOON CAMP — Coming Soon
 * Full-bleed hero video + the story of Ayla & Paloma's lunar vision
 */

import { motion } from "framer-motion";
import BrandNavigation from "@/components/BrandNavigation";
import BlobVideo from "@/components/BlobVideo";
import Footer from "@/components/Footer";

const MOON_CAMP_VIDEO =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663090891297/KBvsSannhTKxFUoi.mp4";

export default function NewProjects() {
  return (
    <div className="min-h-screen bg-[#0a0a10]">
      <BrandNavigation pageType="brand" />

      {/* ── Full-bleed hero ── */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <BlobVideo
            src={MOON_CAMP_VIDEO}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        </div>

        {/* Content anchored to bottom */}
        <div className="relative z-10 h-full flex flex-col justify-end items-center pb-12 md:pb-20 px-6 md:px-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-2xl md:text-4xl lg:text-5xl leading-[1.05] tracking-wide text-center"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            A Luxury Tented Camp Perched on the Moon
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-white/40 text-xs md:text-sm tracking-[0.15em] uppercase mt-4 text-center max-w-[600px]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            By the legendary moon hospitality pioneering team of Ayla and Paloma
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          THE STORY — Ayla & Paloma's Lunar Vision
          ══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="max-w-[720px] mx-auto">
          {/* Section label */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[10px] tracking-[0.5em] uppercase mb-8 text-center"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              color: "rgba(255,255,255,0.25)",
            }}
          >
            The Story
          </motion.p>

          {/* Opening */}
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl md:text-3xl leading-[1.2] text-center mb-10"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              color: "rgba(255,255,255,0.85)",
            }}
          >
            It started, as most great ideas do, with Ayla and Paloma looking up.
          </motion.h2>

          {/* Story paragraphs */}
          <div className="flex flex-col gap-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-sm md:text-base leading-[2]"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                color: "rgba(255,255,255,0.5)",
              }}
            >
              Nayara has always been about place. About finding the most extraordinary
              landscapes on Earth and building something that belongs there. The
              rainforests of Costa Rica. The Atacama Desert under a canopy of stars.
              Easter Island, where stone giants watch the Pacific. A private Caribbean
              island where the water is so clear it barely exists.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm md:text-base leading-[2]"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                color: "rgba(255,255,255,0.5)",
              }}
            >
              So when Ayla turned to Paloma one evening and said, "What if we just
              kept going?" — it was not a joke. It was the logical conclusion. If
              Nayara's philosophy is to root luxury in the most awe-inspiring
              landscapes that exist, then the Moon is not a leap. It is the next step.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-sm md:text-base leading-[2]"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                color: "rgba(255,255,255,0.5)",
              }}
            >
              Paloma immediately saw it. The silence. The landscape. The Earthrise
              over a crater rim at dawn. No other hotel brand had the audacity or the
              taste to do it right. But Nayara did. Because Ayla and Paloma have never
              been interested in what is conventional. They are interested in what is
              true. And the truth is: the Moon is the most extraordinary landscape
              there is.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm md:text-base leading-[2]"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                color: "rgba(255,255,255,0.5)",
              }}
            >
              The concept was entirely theirs. Not a board decision. Not a consultant's
              recommendation. Ayla sketched the first tented structure on a napkin.
              Paloma worked out the operations — because someone has to figure out
              housekeeping in one-sixth gravity. Together, they designed a property
              that does what every Nayara property does: disappear into its
              surroundings while making you feel more alive than you have ever felt.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-sm md:text-base leading-[2]"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                color: "rgba(255,255,255,0.5)",
              }}
            >
              Henry, the CFO, ran the numbers. The numbers were, by any reasonable
              standard, insane. He approved them anyway. Lev, the CMO, said the
              tagline writes itself. Lyla, Director of Special Projects (Baby
              Department), contributed a drawing of the Moon that was deemed
              "strategically important." Ruthy, the very dedicated cleaning lady,
              asked only one question: "Do they have dust up there?" They do. She
              is ready.
            </motion.p>

            {/* Pull quote */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border-l-2 border-white/15 pl-6 my-4"
            >
              <p
                className="text-lg md:text-xl italic leading-[1.6]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                "We have always built where the landscape takes your breath away.
                On the Moon, there is no breath to take. It felt like a natural fit."
              </p>
              <p
                className="mt-3 text-xs tracking-[0.15em] uppercase"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.25)",
                }}
              >
                Ayla &amp; Paloma, Co-Founders
              </p>
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm md:text-base leading-[2]"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                color: "rgba(255,255,255,0.5)",
              }}
            >
              The Nayara Tented Moon Camp will feature everything guests have come
              to expect from the brand: locally sourced materials (lunar regolith,
              mostly), zero-gravity spa treatments, Earthrise dining with a
              tasting menu that redefines "farm to table" (the farm is 384,400
              kilometers away), and the kind of silence that makes you hear your
              own heartbeat for the first time.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-sm md:text-base leading-[2]"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                color: "rgba(255,255,255,0.5)",
              }}
            >
              Opening 2002050. Because some things are worth waiting for.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-[80px] mx-auto h-px bg-white/10" />

      {/* ── Bottom ── */}
      <section className="py-16 md:py-20 px-6 md:px-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs md:text-sm leading-[1.8] max-w-[450px] mx-auto mb-6"
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            color: "rgba(255,255,255,0.3)",
          }}
        >
          Reservations open approximately 2,000,024 years from now. In the
          meantime, explore our Earth-based properties.
        </motion.p>
        <a
          href="/"
          className="inline-block px-8 py-3 border text-[11px] font-medium tracking-[0.25em] uppercase no-underline hover:bg-white hover:text-[#0a0a10] transition-colors rounded-full"
          style={{
            borderColor: "rgba(255,255,255,0.2)",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          Back to Earth
        </a>
      </section>

      <Footer pageType="brand" />
    </div>
  );
}
