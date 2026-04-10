/*
 * NAYARA — New Horizons
 * Three upcoming properties: Manuel Antonio (2027), Berkshires (2028), Tented Moon Camp (2050)
 */

import { motion } from "framer-motion";
import BrandNavigation from "@/components/BrandNavigation";
import BlobVideo from "@/components/BlobVideo";
import Footer from "@/components/Footer";

const MOON_CAMP_VIDEO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-moon-camp-hero-audio_22efe3b5.mp4";

const MANUEL_ANTONIO_HERO_VIDEO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/manuel-antonio-hero-audio_3b237f2e.mp4";

const MANUEL_ANTONIO_HERO_IMAGE =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663090891297/fKQkYAfREnMHGEIl.jpeg";

const BERKSHIRES_HERO =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663090891297/gaazxwKaXtxznRaZ.jpeg";

/* Shared text styles */
const storyLabel =
  "text-[10px] tracking-[0.5em] uppercase mb-8 text-center";
const storyH2 =
  "text-2xl md:text-3xl leading-[1.2] text-center mb-10";
const storyP =
  "text-sm md:text-base leading-[2]";

function StoryParagraph({
  children,
  delay = 0.15,
  color = "rgba(255,255,255,0.5)",
}: {
  children: React.ReactNode;
  delay?: number;
  color?: string;
}) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={storyP}
      style={{
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        color,
      }}
    >
      {children}
    </motion.p>
  );
}

export default function NewProjects() {
  return (
    <div className="min-h-screen bg-[#0a0a10]">
      <BrandNavigation pageType="brand" />

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — MANUEL ANTONIO (Opening 2027)
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <BlobVideo
            src={MANUEL_ANTONIO_HERO_VIDEO}
            poster={MANUEL_ANTONIO_HERO_IMAGE}
            className="w-full h-full object-cover"
            hasAudio
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end items-center pb-12 md:pb-20 px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/30 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Opening 2027
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-2xl md:text-4xl lg:text-5xl leading-[1.05] tracking-wide text-center"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Luxury Rooted in Rainforest &amp; Reef
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-white/35 text-xs md:text-sm tracking-[0.12em] uppercase mt-4 text-center"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            Nayara Manuel Antonio &middot; Costa Rica
          </motion.p>
        </div>
      </section>

      {/* Manuel Antonio Story */}
      <section className="py-20 md:py-32 px-6 md:px-10" style={{ backgroundColor: "#0d1a14" }}>
        <div className="max-w-[720px] mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={storyLabel}
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "rgba(255,255,255,0.25)" }}
          >
            Why Manuel Antonio
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={storyH2}
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "rgba(255,255,255,0.85)" }}
          >
            Where the jungle tumbles into the Pacific and every tide pool is a world unto itself.
          </motion.h2>

          <div className="flex flex-col gap-7">
            <StoryParagraph delay={0.15}>
              Nayara was born in Costa Rica. The brand's first three properties — Gardens, Springs, and Tented Camp — were carved into the rainforest at the foot of Arenal Volcano, where hot springs rise through volcanic rock and toucans announce the morning. Costa Rica is not just where Nayara started. It is who Nayara is.
            </StoryParagraph>

            <StoryParagraph delay={0.2}>
              Manuel Antonio was inevitable. It is the place where Costa Rica's two greatest forces collide: the dense, howler-monkey-loud Pacific rainforest and the warm, reef-rich coastline that stretches from Playa Espadilla to the hidden coves of the national park. No other destination in the country offers this — jungle and ocean in the same breath, biodiversity so concentrated that a single morning walk can yield sloths, capuchins, scarlet macaws, and humpback whales breaching offshore.
            </StoryParagraph>

            <StoryParagraph delay={0.25}>
              For Nayara, this is the natural expansion of the Costa Rican story. Arenal gave guests the volcano, the hot springs, the cloud forest. Manuel Antonio gives them the coast — the tidal rhythms, the salt air, the sunsets that turn the Pacific into liquid copper. Together, they complete the picture. A guest can now experience Costa Rica from canopy to coastline, all within the Nayara world.
            </StoryParagraph>

            <StoryParagraph delay={0.3}>
              The property will sit above the treeline with uninterrupted views of the Pacific, designed so that every villa feels suspended between jungle and ocean. Expect the same Nayara philosophy — architecture that disappears into the landscape, cuisine rooted in the surrounding ecosystem, and experiences that are impossible to replicate anywhere else on Earth. Opening Winter 2027.
            </StoryParagraph>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-[80px] mx-auto h-px bg-white/10" />

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — BERKSHIRES (Opening 2028)
          Nayara's North American debut — the big move
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={BERKSHIRES_HERO}
            alt="The Berkshires — autumn foliage reflected in a still lake"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end items-center pb-12 md:pb-20 px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/30 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Opening 2028
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-2xl md:text-4xl lg:text-5xl leading-[1.05] tracking-wide text-center"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Nayara Comes to America
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-white/35 text-xs md:text-sm tracking-[0.12em] uppercase mt-4 text-center"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            Nayara Berkshires &middot; Massachusetts, USA
          </motion.p>
        </div>
      </section>

      {/* Berkshires Story — The Big Move */}
      <section className="py-20 md:py-32 px-6 md:px-10" style={{ backgroundColor: "#12100d" }}>
        <div className="max-w-[720px] mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={storyLabel}
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "rgba(255,255,255,0.25)" }}
          >
            The North American Debut
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={storyH2}
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "rgba(255,255,255,0.85)" }}
          >
            For years, the question was not if Nayara would come to the United States. It was where.
          </motion.h2>

          <div className="flex flex-col gap-7">
            <StoryParagraph delay={0.15}>
              Nayara has spent two decades proving something that most luxury hotel brands get wrong: that the most extraordinary hospitality does not compete with nature — it surrenders to it. In Costa Rica, Chile, Easter Island, and Panama, Nayara built properties that feel like they grew out of the ground. The rainforest, the desert, the volcanic rock, the reef — these are not backdrops. They are the point.
            </StoryParagraph>

            <StoryParagraph delay={0.2}>
              Bringing that philosophy to the United States was always the plan. But it had to be the right place. Not a beach town. Not a city. Not a resort corridor where luxury means marble lobbies and valet parking. It had to be a landscape with the same raw, soul-level beauty that defines every Nayara destination — a place where nature is not an amenity but a way of life.
            </StoryParagraph>

            <StoryParagraph delay={0.25}>
              The Berkshires is that place. Two hours from New York and Boston, yet a world apart. Rolling hills that blaze crimson and gold every autumn. Forests so dense and quiet they feel ancient. Lakes that mirror the sky so perfectly you cannot tell where water ends and air begins. In winter, the landscape goes white and still. In summer, the meadows hum. It is one of the most beautiful regions in North America, and it has been hiding in plain sight.
            </StoryParagraph>

            <StoryParagraph delay={0.3}>
              What makes the Berkshires perfect for Nayara is not just the landscape — it is the culture. This is a region shaped by artists, writers, and thinkers. Tanglewood, Jacob's Pillow, the Clark Art Institute, Norman Rockwell's studio, Edith Wharton's estate. The Berkshires has always attracted people who seek beauty and depth over spectacle. That is Nayara's guest. That has always been Nayara's guest.
            </StoryParagraph>

            <StoryParagraph delay={0.35}>
              The property will be set deep in the forest, on a private lake, designed to feel like it has been there for a hundred years. Stone, timber, glass. Villas that open to the woods. A spa built around natural springs. Farm-to-table dining sourced from the surrounding farms that have fed this valley for generations. No golf course. No convention center. No compromise.
            </StoryParagraph>

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
                "We looked at dozens of locations across North America. The Berkshires was the only one where we walked the land and felt what we feel in Arenal, in Atacama, on Easter Island. That thing where the landscape is so beautiful it makes you quiet. That is where Nayara belongs."
              </p>
              <p
                className="mt-3 text-xs tracking-[0.15em] uppercase"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.25)",
                }}
              >
                Leo Ghitis, Co-Founder &amp; CEO
              </p>
            </motion.blockquote>

            <StoryParagraph delay={0.2}>
              This is not Nayara adapting to America. This is Nayara doing what it has always done — finding the most extraordinary landscape and building something worthy of it. The Berkshires is not a market expansion. It is a homecoming for a philosophy that has always belonged here. Opening 2028.
            </StoryParagraph>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-[80px] mx-auto h-px bg-white/10" />

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — TENTED MOON CAMP (Opening 2050)
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <BlobVideo
            src={MOON_CAMP_VIDEO}
            className="w-full h-full object-cover"
            hasAudio
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end items-center pb-12 md:pb-20 px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/30 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Opening 2050
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-2xl md:text-4xl lg:text-5xl leading-[1.05] tracking-wide text-center"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            A Luxury Tented Camp Perched on the Moon
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-white/35 text-xs md:text-sm tracking-[0.12em] uppercase mt-4 text-center max-w-[600px]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            By the legendary moon hospitality pioneering team of Ayla and Paloma
          </motion.p>
        </div>
      </section>

      {/* Moon Camp Story */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="max-w-[720px] mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={storyLabel}
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "rgba(255,255,255,0.25)" }}
          >
            The Story
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={storyH2}
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "rgba(255,255,255,0.85)" }}
          >
            It started, as most great ideas do, with Ayla and Paloma looking up.
          </motion.h2>

          <div className="flex flex-col gap-7">
            <StoryParagraph delay={0.15}>
              Nayara has always been about place. About finding the most extraordinary
              landscapes on Earth and building something that belongs there. The
              rainforests of Costa Rica. The Atacama Desert under a canopy of stars.
              Easter Island, where stone giants watch the Pacific. A private Caribbean
              island where the water is so clear it barely exists.
            </StoryParagraph>

            <StoryParagraph delay={0.2}>
              So when Ayla turned to Paloma one evening and said, "What if we just
              kept going?" — it was not a joke. It was the logical conclusion. If
              Nayara's philosophy is to root luxury in the most awe-inspiring
              landscapes that exist, then the Moon is not a leap. It is the next step.
            </StoryParagraph>

            <StoryParagraph delay={0.25}>
              Paloma immediately saw it. The silence. The landscape. The Earthrise
              over a crater rim at dawn. No other hotel brand had the audacity or the
              taste to do it right. But Nayara did. Because Ayla and Paloma have never
              been interested in what is conventional. They are interested in what is
              true. And the truth is: the Moon is the most extraordinary landscape
              there is.
            </StoryParagraph>

            <StoryParagraph delay={0.3}>
              The concept was entirely theirs. Not a board decision. Not a consultant's
              recommendation. Ayla sketched the first tented structure on a napkin.
              Paloma worked out the operations — because someone has to figure out
              housekeeping in one-sixth gravity. Together, they designed a property
              that does what every Nayara property does: disappear into its
              surroundings while making you feel more alive than you have ever felt.
            </StoryParagraph>

            <StoryParagraph delay={0.35}>
              Henry, the CFO, ran the numbers. The numbers were, by any reasonable
              standard, insane. He approved them anyway. Lev, the CMO, said the
              tagline writes itself. Lyla, Director of Special Projects (Baby
              Department), contributed a drawing of the Moon that was deemed
              "strategically important."
            </StoryParagraph>

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

            <StoryParagraph delay={0.2}>
              The Nayara Tented Moon Camp will feature everything guests have come
              to expect from the brand: locally sourced materials (lunar regolith,
              mostly), zero-gravity spa treatments, Earthrise dining with a
              tasting menu that redefines "farm to table" (the farm is 384,400
              kilometers away), and the kind of silence that makes you hear your
              own heartbeat for the first time.
            </StoryParagraph>

            <StoryParagraph delay={0.25}>
              Opening 2050. Because some things are worth waiting for.
            </StoryParagraph>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-[80px] mx-auto h-px bg-white/10" />

      {/* ── Bottom CTA ── */}
      <section className="py-16 md:py-20 px-6 md:px-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs md:text-sm leading-[1.8] max-w-[500px] mx-auto mb-6"
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            color: "rgba(255,255,255,0.3)",
          }}
        >
          Three new destinations. Three landscapes that demanded a Nayara.
          In the meantime, explore our current collection.
        </motion.p>
        <a
          href="/"
          className="inline-block px-8 py-3 border text-[11px] font-medium tracking-[0.25em] uppercase no-underline hover:bg-white hover:text-[#0a0a10] transition-colors rounded-full"
          style={{
            borderColor: "rgba(255,255,255,0.2)",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          Explore Our Resorts
        </a>
      </section>

      <Footer pageType="brand" />
    </div>
  );
}
