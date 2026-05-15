/**
 * THE NAYARA STORY — Core Thesis Blog
 * Albert Ghitis content: Time is the highest currency.
 * Three pillars: Experiences Rooted in Place, Beyond Sustainability, Nature-Based Wellness
 * Brand metaphors: Sloths (Costa Rica/Panama) + Moai (Easter Island)
 * Links to: Nayara by Night, Wellness by Colors, Experiential Travel 2026
 * Includes FAQs at bottom
 * Design: Warm earth tones, editorial, the definitive Nayara brand page
 * Real photos only. No AI-generated imagery. No em dashes.
 */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import { EnhancedArticleSchema, FAQPageSchema } from "@/components/SEOSchemaEnhanced";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const PALETTE = {
  espresso: "#3B2B26",
  warm: "#5A4A3A",
  cream: "#F7F5F0",
  stone: "#E8E2D8",
  accent: "#8B6914",
  text: "#2C2016",
  muted: "#5A4A3A",
  white: "#FFFFFF",
};

/* ── PILLAR DATA ───────────────────────────────────────────── */
const PILLARS = [
  {
    number: "01",
    title: "Experiences Rooted in Place",
    description: "Immersive encounters shaped by the rhythms of nature, unique to each setting. From stargazing in the Atacama to navigating by stars on Rapa Nui, from bioluminescent bays in Panama to nocturnal rainforest walks in Costa Rica.",
    link: "/blog/nayara-by-night",
    linkLabel: "Read: Nayara by Night",
    image: `${CDN}/nbn-atacama-dusk_9201508f.webp`,
  },
  {
    number: "02",
    title: "Beyond Sustainability",
    description: "The question is not how to avoid harm, but how to leave each ecosystem stronger than we found it. Solar grids on Easter Island, reforestation corridors in Costa Rica, coral restoration in Panama, and the highest sustainability certification in Chile.",
    link: "/blog/caribbean-coral-reef",
    linkLabel: "Read: Ocean Habitat Restoration",
    image: `${CDN}/bocas-aerial-villas-mangroves_9d5e94f5.jpg`,
  },
  {
    number: "03",
    title: "Nature-Based Wellness",
    description: "Wellness at Nayara flows directly from the environments that surround us. Mineral-rich hot springs heated deep underground, overwater spa rituals with the ocean stretching below, treehouse treatments suspended above the canopy.",
    link: "/blog/wellness-by-colors",
    linkLabel: "Read: Wellness by Colors",
    image: `${CDN}/hot-springs-hero_a60a0e92.jpg`,
  },
];

/* ── FAQ DATA ──────────────────────────────────────────────── */
const FAQS = [
  {
    question: "What defines luxury at Nayara?",
    answer: "Luxury at Nayara is rooted in nature, space, and a sense of place rather than excess. Each resort reflects local ecosystems, cultural values, and a quieter form of high-end hospitality.",
  },
  {
    question: "How does Nayara bring nature into each guest experience?",
    answer: "Every property is built within its environment. Rainforest paths, desert plateaus, and coastal mangroves shape how guests move, rest, and connect with the natural world.",
  },
  {
    question: "What role does purpose play in Nayara's approach to hospitality?",
    answer: "Purpose guides daily operations. Regeneration, cultural preservation, and community partnership define how decisions are made across Nayara Resorts.",
  },
  {
    question: "How do Nayara properties express this philosophy?",
    answer: "Each resort expresses luxury through its own landscape. Nayara Springs and Nayara Tented Camp reflect the rainforest, Nayara Bocas del Toro embodies the meeting of sea and forest, and Nayara Alto Atacama and Nayara Hangaroa honor the desert and volcanic origins of their surroundings.",
  },
  {
    question: "How is Nayara redefining luxury for the future?",
    answer: "Nayara focuses on impact, not extravagance. Future luxury is measured through cultural connection, ecological restoration, and the feeling of belonging to a place.",
  },
  {
    question: "What can travelers expect across all Nayara destinations?",
    answer: "A calm rhythm, meaningful encounters with nature, regional food traditions, and hospitality shaped by the communities who call these landscapes home.",
  },
];

/* ── RELATED ARTICLES ──────────────────────────────────────── */
const RELATED = [
  {
    title: "Nayara by Night: Of Moon and Stars",
    url: "/blog/nayara-by-night",
    image: `${CDN}/nbn-moai-milkyway_0588cd10.webp`,
    tag: "Experiences",
  },
  {
    title: "Wellness by Colors",
    url: "/blog/wellness-by-colors",
    image: `${CDN}/hot-springs-hero_a60a0e92.jpg`,
    tag: "Wellness",
  },
  {
    title: "Experiential Travel 2026",
    url: "/blog/experiential-travel-nayara-2026",
    image: `${CDN}/prop-atacama_704b4f26.jpg`,
    tag: "Travel",
  },
];

export default function NayaraStoryBlog() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.cream }}>
      <EnhancedArticleSchema
        image={`${CDN}/prop-tented_0fd865a2.jpg`}
        headline="Luxury Resorts Rooted in Nature: The Nayara Story"
        description="Time is the highest currency. At Nayara, luxury is not speed, excess, or opulence. It is belonging fully to place and spending our most precious resource meaningfully."
        author={{ name: "Albert Ghitis", expertise: ["Luxury Hospitality", "Sustainable Tourism", "Regenerative Travel"] }}
        datePublished="2025-09-03"
        url="https://nayararesorts.manus.space/blog/nayara-story"
      />
      <FAQPageSchema
        url="https://nayararesorts.manus.space/blog/nayara-story"
        faqs={FAQS}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={`${CDN}/prop-tented_0fd865a2.jpg`}
          alt="Nayara Tented Camp nestled in the Costa Rican rainforest canopy"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(59,43,38,0.25) 0%, rgba(59,43,38,0.45) 50%, rgba(59,43,38,0.8) 100%)",
          }}
        />

        {/* Back button */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-8 left-8 z-20 flex items-center gap-2 transition-colors duration-300"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "12px",
            letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.75)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          BACK
        </button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 h-full flex flex-col justify-end items-start px-8 md:px-16 lg:px-24 pb-16 md:pb-24 max-w-5xl"
        >
          <p
            className="mb-4 uppercase tracking-[0.3em] text-[11px]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: "rgba(255,255,255,0.7)" }}
          >
            The Nayara Philosophy · Albert Ghitis
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 text-white"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Luxury Resorts
            <br />
            Rooted in Nature
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed max-w-2xl"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400, color: "rgba(255,255,255,0.85)" }}
          >
            Time is the highest currency. It is finite. It cannot be bought, extended, or replaced.
            The best way to spend it is immersed in place, where nature and culture are inseparable.
          </p>
        </motion.div>
      </section>

      {/* ── OPENING THESIS ───────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className="uppercase tracking-[0.3em] text-[11px] mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
            >
              The Thesis
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              Time Is the Highest Currency at Nayara Resorts
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Time is the highest currency. It is finite. It cannot be bought, extended, or replaced.
              Once lost, it never returns. Unlike material things or traditional markers of status,
              time is shared equally by all. The best way to spend it is immersed in place, where
              nature and culture are inseparable. What Nayara offers is a true immersive nature
              experience, without ever compromising comfort, the traditional definition of luxury.
              But luxury has changed, and our family of resorts across Costa Rica, Panama, and Chile
              are at the forefront.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Whether you are Elon Musk chasing Mars, or a Costa Rican farmer chasing the perfect
              coffee bean, you still have the same twenty-four hours a day. How you spend them is
              what makes life, and travel, meaningful.
            </p>
            <p
              className="text-[20px] md:text-[22px] leading-[1.7] italic"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              And sometimes time moves slowly... very slowly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SLOTHS + MOAI (BRAND METAPHORS) ──────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.stone }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className="uppercase tracking-[0.3em] text-[11px] mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
            >
              Our Ambassadors
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              Why Luxury at Nayara Begins with Nature and Sloths
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Enter the sloth, the inevitable protagonist of our story and of Costa Rica's ascent as
              a global travel destination. Biblically branded a deadly sin, this remarkable animal
              has staged one of the greatest PR comebacks in history. They have been reborn as
              rainforest royalty and, oddly enough, a kind of modern influencer. They have starred in
              movies, inspired yoga poses, and even earned their own hashtag holiday.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              But beyond the memes lies something deeper. It turns out sloths are not lazy at all.
              They are the ultimate rainforest strategists. At Nayara Tented Camp, our reforestation
              program created natural corridors where they and other wildlife returned to thrive. As
              a keystone indicator, the sloth thrives only in a healthy rainforest. Its very presence
              proves reforestation has worked.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              You might not expect them on a Caribbean island, but Nayara Bocas del Toro is home to
              a mangrove-dwelling variety of its own. This Machiavelli of the mangroves proves that
              strategy, not speed, wins in nature's game.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              And in Chile, where no sloth has ever lived, the wisdom takes another form. If sloths
              move slow, our ambassador does not move at all. At Nayara Hangaroa, it is the iconic
              Moai, stone giants that have stood as silent guardians of culture and belonging for
              centuries. They outlasted empires and remind us that permanence is power.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CONNECTING STATEMENT ─────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6 md:px-12" style={{ backgroundColor: PALETTE.espresso }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl leading-[1.5]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.white }}
          >
            Together, sloths and Moai teach us that true luxury is not speed, excess, or opulence.
            It is belonging fully to place and spending our most precious resource, time,
            meaningfully.
          </motion.blockquote>
        </div>
      </section>

      {/* ── THREE PILLARS ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p
              className="uppercase tracking-[0.3em] text-[11px] mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
            >
              The Pillars
            </p>
            <h2
              className="text-3xl md:text-4xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              The Principles That Define Nayara Resorts
            </h2>
          </motion.div>

          <div className="flex flex-col gap-16 md:gap-20">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  i % 2 === 1 ? "md:direction-rtl" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="overflow-hidden" style={{ height: "400px" }}>
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      style={{ transition: "transform 700ms ease-in-out" }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")
                      }
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <span
                    className="text-[11px] uppercase tracking-[0.2em] mb-3 block"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
                  >
                    Pillar {pillar.number}
                  </span>
                  <h3
                    className="text-2xl md:text-3xl mb-4"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="text-[15px] md:text-[16px] leading-[1.85] mb-6"
                    style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
                  >
                    {pillar.description}
                  </p>
                  <Link
                    href={pillar.link}
                    className="inline-block text-[12px] uppercase tracking-[0.15em] pb-1 transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      color: PALETTE.espresso,
                      borderBottom: `1px solid ${PALETTE.espresso}`,
                    }}
                  >
                    {pillar.linkLabel} →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILLAR 1 DETAIL: EXPERIENCES ROOTED IN PLACE ─────────── */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.stone }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className="uppercase tracking-[0.3em] text-[11px] mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
            >
              Pillar One
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              Night Sky Experiences Rooted in Place at Nayara
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              In the summer of 1969, one small step for man changed the history of mankind. Yet long
              before Apollo 11, about four billion years before, the Moon had already been shaping
              our story, pulling the strings behind the curtain with its gravity. By slowing Earth's
              spin, forming tides, and shielding us from debris, it made life possible.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              On Earth, the Atacama Desert is the closest thing we have to another planet. Its barren
              valleys and salt flats make it so Mars-like that NASA trains astronauts there for future
              missions to the red planet. By day, it is barren. By night, the quality of its
              stargazing is unrivaled. Dry air, high altitude, and zero light pollution make the
              heavens blaze with impossible clarity.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              At our own observatory, guests can trace Saturn's rings and other celestial wonders
              with the help of our expert astronomical guides. From sloth-gazing to stargazing, that
              same Moon connects every corner of Nayara. On Rapa Nui, it once guided voyagers across
              the Pacific. In Panama, it glimmers above bioluminescent bays. In Costa Rica, it
              lights the rainforest, where frogs and other nocturnal inhabitants emerge on guided
              night walks with our on-staff naturalists.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              These are immersive experiences rooted in place, shaped by the rhythms of nature,
              unique to each setting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── IMAGE BREAK: MOAI ────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: "60vh" }}>
        <img
          src={`${CDN}/hangaroa-moai-horses-sunset_8152e72d.jpg`}
          alt="Moai statues silhouetted against sunset on Easter Island with horses in foreground"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, transparent 50%, rgba(59,43,38,0.7) 100%)",
          }}
        />
      </section>

      {/* ── PILLAR 2 DETAIL: BEYOND SUSTAINABILITY ───────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className="uppercase tracking-[0.3em] text-[11px] mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
            >
              Pillar Two
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              How Nayara Goes Beyond Sustainability to Regeneration
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              If the Moon governs reflection, the Sun commands action. And on October 2 of 2024, the
              island of Rapa Nui became one of the best vantage points for a total solar eclipse: a
              phenomenon that is only possible because of a cosmic coincidence. The Sun is 400 times
              larger than the Moon, but also exactly 400 times farther away.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              At Nayara Hangaroa, the opportunity was literal. Our recently completed solar panel
              project harnessed the same power that lit the eclipse. Nayara Alto Atacama led the way
              two years earlier, transforming relentless desert light into clean energy, earning us
              an S-certification, Chile's highest standard for sustainability, in the process.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              The story was different in Costa Rica, a nation that was green before green started
              trending. Here, solar panels were not needed because the national grid already ran on
              clean energy: hydro, geothermal, and wind. Instead, we turned to the land itself,
              replanting thousands of native trees on former barren cattle pasture. Cecropias grew,
              sloths returned, wildlife corridors were created, and with them, balance restored. This
              was just one of myriad factors that led to our Arenal resorts achieving coveted Green
              Globe status and full carbon neutrality.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Far away, on Easter Island, the story was more complex. One of the most remote
              inhabited islands on Earth, adrift in the Pacific 2,000 miles from the nearest
              continent, it is a place where culture, mystery, and landscape merge into something
              singular. And nothing could be more singular than the Moai. Nearly a thousand of these
              stone giants, some weighing more than 80 tons, were constructed without metal tools,
              wheels, or beasts of burden, and then somehow moved dozens of miles across the island.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              These ancient Moai builders went on to suffer centuries of colonization, disease, and
              near-extinction. Yet the culture persisted and today it is being reclaimed. At Nayara
              Hangaroa, we are proud to be part of that story, and we are even prouder to be
              partially owned by a local Rapa Nui family, the Hito, whose leadership continues to
              shape the island.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Like the Moai themselves, cultural preservation is about endurance. Protecting
              traditions is as vital as planting trees or building solar grids. It is what makes
              travel regenerative, ensuring communities and ecosystems alike are left stronger than
              we found them. At Nayara, we believe sustainability is not an endpoint but a beginning.
              The question is not just how to avoid harm, but how to leave each ecosystem stronger
              than we found it. This is the meaning of beyond sustainability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PILLAR 3 DETAIL: NATURE-BASED WELLNESS ───────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.stone }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className="uppercase tracking-[0.3em] text-[11px] mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
            >
              Pillar Three
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              Nature as the Foundation of Wellness at Nayara
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              If community anchors us, wellness restores us. At Nayara, wellness is not a list of
              treatments on a spa menu. It flows directly from the environments that surround us. It
              is holistic by design, caring for body, mind, and spirit in equal measure.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              A Caribbean archipelago of mangroves, reefs, and rainforest, Bocas del Toro is a place
              where the pace slows the moment your boat arrives. There are no roads, no cars, no
              background hum of modern life. Only the sound of waves brushing the shore of the
              private island we call home. Here spa rituals happen on your overwater villa deck with
              the ocean stretching out below, or high in our new treehouse spa suspended 50 feet
              above the canopy, where wellness is elevated quite literally.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              In Costa Rica, the rainforest and its most commanding resident, the Arenal Volcano,
              write the rituals. Mineral-rich hot springs heated deep underground soothe body and
              mind, while treatments use rainforest ingredients like volcanic mud and cacao. Open-air
              pavilions host sound healing and guided-yoga classes that flow with the rhythm of the
              forest unfurling below.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Science echoes what these landscapes have long taught. Time in nature measurably lowers
              cortisol, eases blood pressure, strengthens immunity, and improves sleep. Even twenty
              minutes outdoors can reset the body's stress response, while natural soundscapes like
              birdsong, wind, and water lift mood and sharpen focus.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CLOSING STATEMENT ────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              Experience Nayara for Yourself
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Taken together, these pillars and the icons that embody them define a new vision of
              luxury. Nature is not an accessory to our hotels. It is the foundation, partner, and
              constant presence. The sloth teaches us that life is not about speed. The Moai teach us
              endurance and cultural belonging.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Together, they remind us that true luxury is not found in excess, but in the deliberate
              choice to spend time meaningfully and in connection with place, people, and nature.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Witness the clearest skies on Earth, soak in your villa's private hot-springs plunge
              pool, enjoy a massage from your overwater villa's floating deck, and finally check off
              "see the Moai" from your bucket list.
            </p>
            <p
              className="text-[20px] md:text-[22px] leading-[1.7] italic mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              Sloths may move slowly and Moai not at all, but the time to start living fully does
              not wait.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.espresso }}
            >
              And the adventure of a lifetime begins the moment you decide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── EXPLORE THE PILLAR SERIES ────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.stone }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p
              className="uppercase tracking-[0.3em] text-[11px] mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
            >
              Continue Reading
            </p>
            <h2
              className="text-3xl md:text-4xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              Explore the Full Pillar Series
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {RELATED.map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={article.url} className="block group">
                  <div className="overflow-hidden mb-4" style={{ height: "240px" }}>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <span
                    className="text-[10px] uppercase tracking-[0.2em] mb-2 block"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
                  >
                    {article.tag}
                  </span>
                  <h3
                    className="text-lg"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
                  >
                    {article.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ──────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p
              className="uppercase tracking-[0.3em] text-[11px] mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
            >
              Questions
            </p>
            <h2
              className="text-3xl md:text-4xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="flex flex-col">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="border-b"
                style={{ borderColor: "rgba(59,43,38,0.12)" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left"
                >
                  <span
                    className="text-[16px] md:text-[17px] pr-8"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.espresso }}
                  >
                    {faq.question}
                  </span>
                  <motion.svg
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: PALETTE.muted }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </motion.svg>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === i ? "auto" : 0,
                    opacity: openFaq === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p
                    className="pb-6 text-[15px] leading-[1.8]"
                    style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
                  >
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer bgColor={PALETTE.espresso} textColor={PALETTE.white} />
    </div>
  );
}
