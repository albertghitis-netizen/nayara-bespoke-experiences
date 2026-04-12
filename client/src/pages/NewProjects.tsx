/*
 * NAYARA — New Horizons
 * Three upcoming properties: Manuel Antonio (2027), Berkshires (2028), Tented Moon Camp (2050)
 */

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import BrandNavigation from "@/components/BrandNavigation";
import BlobVideo from "@/components/BlobVideo";
import Footer from "@/components/Footer";

const NARRATION_AUDIO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/moon-camp-narration_60c10fbc.m4a";

/* Chapter timestamps in seconds (from narration recording) */
const CHAPTER_TIMES = [
  { id: "ch1", start: 0, end: 30 },
  { id: "ch2", start: 30, end: 56 },
  { id: "ch3", start: 56, end: 78 },
  { id: "ch4", start: 78, end: 100 },
  { id: "ch5", start: 100, end: 122 },
  { id: "ch6", start: 128, end: 143 },
  { id: "ch7", start: 143, end: 167 },
  { id: "ch8", start: 169, end: 188 },
];

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
  "text-[10px] tracking-[0.5em] mb-8 text-center";
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
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const chapterRefs = useRef<(HTMLElement | null)[]>([]);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(NARRATION_AUDIO);
    audioRef.current.preload = "auto";
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    };
  }, []);

  const scrollToChapter = (index: number) => {
    const el = chapterRefs.current[index];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const startStory = () => {
    if (!audioRef.current) return;
    setIsPlaying(true);
    audioRef.current.currentTime = 0;
    audioRef.current.play();

    // Schedule scrolls based on chapter timestamps
    CHAPTER_TIMES.forEach((ch, i) => {
      setTimeout(() => {
        scrollToChapter(i);
      }, ch.start * 1000);
    });

    // When audio ends
    audioRef.current.onended = () => setIsPlaying(false);
  };

  const stopStory = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  };

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
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/60 pointer-events-none" />
        </div>

        {/* Hero text removed — clean video only */}
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/60 pointer-events-none" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end items-center pb-12 md:pb-20 px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/30 text-[10px] md:text-xs tracking-[0.4em] mb-4"
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
            className="text-white/35 text-xs md:text-sm tracking-[0.12em] mt-4 text-center"
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
                className="mt-3 text-xs tracking-[0.15em]"
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end items-center pb-12 md:pb-20 px-6 md:px-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-2xl md:text-4xl lg:text-5xl leading-[1.05] tracking-wide text-center"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Luxury Tented Camp Immersed in the Rainforest
          </motion.h1>
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
                className="mt-3 text-xs tracking-[0.15em]"
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
          className="inline-block px-8 py-3 border text-[11px] font-medium tracking-[0.25em] no-underline hover:bg-white hover:text-[#0a0a10] transition-colors rounded-full"
          style={{
            borderColor: "rgba(255,255,255,0.2)",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          Explore Our Resorts
        </a>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE FALSE ENDING
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-40 px-6 md:px-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-2xl md:text-4xl lg:text-5xl italic leading-[1.3] max-w-[700px] mx-auto"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          And they lived happily ever after.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 md:mt-24"
        >
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              color: "rgba(255,255,255,0.2)",
            }}
          >
            Oh wait.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 2.5 }}
          className="text-lg md:text-2xl mt-6"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.5)",
          }}
        >
          There's more.
        </motion.p>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE ADVENTURE — Pink palette, alternating vertical video + text
          The real story of Ayla & Paloma's Moon Camp
          ═══════════════════════════════════════════════════════════ */}

      {/* Transition gradient from dark to pink */}
      <div
        className="h-32 md:h-48"
        style={{ background: "linear-gradient(to bottom, #0a0a10, #2A1520)" }}
      />

      {/* Chapter 1 — Leaving Earth */}
      <section
        className="py-16 md:py-24 px-6 md:px-10"
        style={{ backgroundColor: "#2A1520" }}
      >
        <div className="max-w-[1100px] mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-[10px] md:text-xs tracking-[0.5em] mb-6"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "#F2A7C3" }}
          >
            Chapter One
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center text-2xl md:text-4xl mb-16 md:mb-24"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#FFD6E8" }}
          >
            The Girls Leave Earth
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Video left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full md:w-[45%] flex-shrink-0"
            >
              <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-2xl">
                <video
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/moon-camp-giraffe-vertical_3fef42f3.mp4"
                  autoPlay muted loop playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            {/* Text right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full md:w-[55%]"
            >
              <p
                className="text-base md:text-lg leading-[1.8] mb-6"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "#F2C6D8" }}
              >
                Ayla and Paloma are the next generation of Nayara Resorts. And their boldest project yet? A luxury tented camp on the Moon.
              </p>
              <p
                className="text-base md:text-lg leading-[1.8] mb-6"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "#F2C6D8" }}
              >
                But first, they had to get there. So they left Earth, flew through the stars, and somewhere along the way became mermaids. As one does.
              </p>
              <p
                className="text-base md:text-lg leading-[1.8]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "#F2C6D8" }}
              >
                They arrived at the Moon Camp ready to work. Lammie the giraffe came along for the ride.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chapter 2 — Running the Moon Camp */}
      <section
        className="py-16 md:py-24 px-6 md:px-10"
        style={{ backgroundColor: "#321A28" }}
      >
        <div className="max-w-[1100px] mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-[10px] md:text-xs tracking-[0.5em] mb-6"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "#F2A7C3" }}
          >
            Chapter Two
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center text-2xl md:text-4xl mb-16 md:mb-24"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#FFD6E8" }}
          >
            The Mean Alien Guests
          </motion.h2>

          <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
            {/* Video right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full md:w-[45%] flex-shrink-0"
            >
              <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-2xl">
                <video
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/moon-camp-mask_6da882c5.mp4"
                  autoPlay muted loop playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            {/* Text left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full md:w-[55%]"
            >
              <p
                className="text-base md:text-lg leading-[1.8] mb-6"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "#F2C6D8" }}
              >
                The Moon Camp was a hit. Five stars on every intergalactic review site. The problem? The guests.
              </p>
              <p
                className="text-base md:text-lg leading-[1.8] mb-6"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "#F2C6D8" }}
              >
                Aliens from the Crab Nebula complained the infinity pool wasn't infinite enough. Guests from Betelgeuse kept eating the decorative moon rocks. It was all getting really annoying.
              </p>
              <p
                className="text-base md:text-lg leading-[1.8]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "#F2C6D8" }}
              >
                "Honestly," said Ayla, "this is so boring. Let's get out of here."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chapter 3 — The Great Escape */}
      <section
        className="py-16 md:py-24 px-6 md:px-10"
        style={{ backgroundColor: "#3A1E30" }}
      >
        <div className="max-w-[1100px] mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-[10px] md:text-xs tracking-[0.5em] mb-6"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "#F2A7C3" }}
          >
            Chapter Three
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center text-2xl md:text-4xl mb-16 md:mb-24"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#FFD6E8" }}
          >
            Escape on the Giraffe
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Video left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full md:w-[45%] flex-shrink-0"
            >
              <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/moon-camp-galaxy-giraffe-2_3743df9c.webp"
                  alt="Ayla and Paloma escaping on a winged giraffe"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            {/* Text right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full md:w-[55%]"
            >
              <p
                className="text-base md:text-lg leading-[1.8] mb-6"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "#F2C6D8" }}
              >
                So they took Lammie the giraffe and flew away.
              </p>
              <p
                className="text-base md:text-lg leading-[1.8] mb-6"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "#F2C6D8" }}
              >
                Lammie spread her magnificent wings. The girls climbed on, and just like that they were gone.
              </p>
              <p
                className="text-base md:text-lg leading-[1.8]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "#F2C6D8" }}
              >
                The Moon Camp shrank behind them until it was just another dot among the craters. The universe stretched out ahead, full of possibility.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chapter 4 — The Friendly Dinosaur */}
      <section
        className="py-16 md:py-24 px-6 md:px-10"
        style={{ backgroundColor: "#421E38" }}
      >
        <div className="max-w-[1100px] mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-[10px] md:text-xs tracking-[0.5em] mb-6"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "#F2A7C3" }}
          >
            Chapter Four
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center text-2xl md:text-4xl mb-16 md:mb-24"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#FFD6E8" }}
          >
            Mercury & Rex
          </motion.h2>

          <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
            {/* Image right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full md:w-[45%] flex-shrink-0"
            >
              <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/moon-camp-dinosaur-cascade_471be1e5.webp"
                  alt="The friendly rainbow dinosaur Rex"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            {/* Text left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full md:w-[55%]"
            >
              <p
                className="text-base md:text-lg leading-[1.8] mb-6"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "#F2C6D8" }}
              >
                Their first stop was Mercury, where they met a rainbow-colored dinosaur named Rex. They became really good friends.
              </p>
              <p
                className="text-base md:text-lg leading-[1.8] mb-6"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "#F2C6D8" }}
              >
                But Mercury was just too small and way too close to the sun. It was getting really hot.
              </p>
              <p
                className="text-base md:text-lg leading-[1.8]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "#F2C6D8" }}
              >
                So they said goodbye to Rex and kept going.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chapter 5 — Jupiter */}
      <section
        className="py-16 md:py-24 px-6 md:px-10"
        style={{ backgroundColor: "#4A1E40" }}
      >
        <div className="max-w-[1100px] mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-[10px] md:text-xs tracking-[0.5em] mb-6"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "#F2A7C3" }}
          >
            Chapter Five
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center text-2xl md:text-4xl mb-16 md:mb-24"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#FFD6E8" }}
          >
            Jupiter
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Image left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full md:w-[45%] flex-shrink-0"
            >
              <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/moon-camp-dino-orange-moon_56e99999.webp"
                  alt="Approaching Jupiter's great orange storm"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            {/* Text right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full md:w-[55%]"
            >
              <p
                className="text-base md:text-lg leading-[1.8] mb-6"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "#F2C6D8" }}
              >
                Next stop: Jupiter. Paloma's favorite planet.
              </p>
              <p
                className="text-base md:text-lg leading-[1.8] mb-6"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "#F2C6D8" }}
              >
                But even Jupiter turned out to be boring. "I expected more," said Paloma.
              </p>
              <p
                className="text-base md:text-lg leading-[1.8]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "#F2C6D8" }}
              >
                So they left Jupiter and headed deeper into space.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chapter 6 — Andromeda */}
      <section
        className="py-16 md:py-24 px-6 md:px-10"
        style={{ backgroundColor: "#521E48" }}
      >
        <div className="max-w-[1100px] mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-[10px] md:text-xs tracking-[0.5em] mb-6"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "#F2A7C3" }}
          >
            Chapter Six
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center text-2xl md:text-4xl mb-16 md:mb-24"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#FFD6E8" }}
          >
            The Edge of Andromeda
          </motion.h2>

          <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
            {/* Video right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full md:w-[45%] flex-shrink-0"
            >
              <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-2xl">
                <video
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/moon-camp-giraffe-horizontal_0bb75ae2.mp4"
                  autoPlay muted loop playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            {/* Text left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full md:w-[55%]"
            >
              <p
                className="text-base md:text-lg leading-[1.8] mb-6"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "#F2C6D8" }}
              >
                They made it all the way to Andromeda.
              </p>
              <p
                className="text-base md:text-lg leading-[1.8] mb-6"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "#F2C6D8" }}
              >
                The Milky Way and Andromeda were getting closer and closer together. But with Lammie and their winged giraffe, they were basically superheroes.
              </p>
              <p
                className="text-base md:text-lg leading-[1.8]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "#F2C6D8" }}
              >
                So it didn't matter.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chapter 7 — Albert the Black Hole */}
      <section
        className="py-16 md:py-24 px-6 md:px-10"
        style={{ backgroundColor: "#5A1E50" }}
      >
        <div className="max-w-[1100px] mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-[10px] md:text-xs tracking-[0.5em] mb-6"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "#F2A7C3" }}
          >
            The Final Chapter
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center text-2xl md:text-4xl mb-16 md:mb-24"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#FFD6E8" }}
          >
            Albert
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Image left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full md:w-[45%] flex-shrink-0"
            >
              <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/moon-camp-galaxy-giraffe_a71e4f8b.webp"
                  alt="Albert the black hole"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            {/* Text right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full md:w-[55%]"
            >
              <p
                className="text-base md:text-lg leading-[1.8] mb-6"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "#F2C6D8" }}
              >
                And then they met Albert.
              </p>
              <p
                className="text-base md:text-lg leading-[1.8] mb-6"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "#F2C6D8" }}
              >
                At first he traveled with them, right into a black hole. But then, out of nowhere, Albert actually became the black hole.
              </p>
              <p
                className="text-base md:text-lg leading-[1.8] mb-6"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "#F2C6D8" }}
              >
                He was a really friendly black hole though.
              </p>
              <p
                className="text-base md:text-lg leading-[1.8]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "#F2C6D8" }}
              >
                But the whole experience was getting really exhausting.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Real Ending */}
      <section
        className="py-24 md:py-40 px-6 md:px-10 text-center"
        style={{ backgroundColor: "#5A1E50" }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-2xl md:text-4xl lg:text-5xl italic leading-[1.3] max-w-[700px] mx-auto mb-8"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            color: "#FFD6E8",
          }}
        >
          And they all lived happily ever after.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm md:text-base max-w-[500px] mx-auto mb-12"
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            color: "#F2A7C3",
          }}
        >
          Albert on his winged dinosaur. Ayla and Paloma on Lammie the giraffe.
          All the way back to New York City, safe and sound.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="inline-block rounded-xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/moon-camp-nieces_cdd428a3.png"
            alt="The real adventurers"
            className="w-64 md:w-80 h-auto"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-8 text-xs tracking-[0.2em]"
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 500,
            color: "#F2A7C3",
          }}
        >
          For Ayla & Paloma. The bravest explorers in any galaxy. ❤️
        </motion.p>
      </section>

      {/* Pink gradient back to dark for footer */}
      <div
        className="h-20 md:h-32"
        style={{ background: "linear-gradient(to bottom, #5A1E50, #0a0a10)" }}
      />

      <Footer pageType="brand" />
    </div>
  );
}
