/**
 * ARENAL VOLCANO: A TIMELESS NATURAL WONDER
 * History of Arenal Volcano from geological origins to present day
 * Format: Standardized blog template (v2)
 * - Hero image from journal entry
 * - Title block + author + date + reading time
 * - Alternating cream/stone backgrounds, NO divider lines
 * - One espresso dark section
 * - Sources flat list
 * - Explore More (3 related articles)
 * - Brand espresso Footer
 */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const PALETTE = {
  espresso: "#3B2B26",
  cream: "#F7F5F0",
  stone: "#E8E2D8",
  accent: "#8B6914",
  text: "#2C2016",
  muted: "#5A4A3A",
  white: "#FFFFFF",
};

const contentEntrance = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.8, 0.25, 1] as [number, number, number, number] },
  }),
};

const HERO_IMAGE = "/manus-storage/A50DCA72-3FCB-46E5-A703-DFFB62080A51_79a81ca2.jpg";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const FAQS = [
  {
    question: "Is Arenal Volcano still active?",
    answer: "Arenal has been classified as dormant since October 2010, when its last eruption was recorded. Fumaroles and minor geothermal activity continue at the summit, and volcanologists monitor it closely. The volcano is not considered extinct.",
  },
  {
    question: "What happened during the 1968 eruption?",
    answer: "On July 29, 1968, Arenal erupted violently after more than 400 years of dormancy. The eruption buried three villages, killed 87 people, and affected over 232 square kilometers of land. It created three new craters and marked the beginning of a 42 year eruptive period.",
  },
  {
    question: "How old is Arenal Volcano?",
    answer: "Arenal is geologically young, estimated to be less than 7,500 years old. Its earliest known eruptions began roughly 7,000 years ago, breaking through older volcanic tuffs and sedimentary rocks.",
  },
  {
    question: "Can you hike Arenal Volcano?",
    answer: "Visitors can hike designated trails within Arenal Volcano National Park, including paths that cross the 1968 lava flow. The summit itself is closed to hikers due to ongoing volcanic monitoring and safety protocols.",
  },
  {
    question: "What is the connection between Arenal and Nayara Resorts?",
    answer: "Nayara Gardens, Nayara Springs, and Nayara Tented Camp are all located in the Arenal region, built within the rainforest that surrounds the volcano. The hot springs that feed the resort pools are heated by the same geothermal forces that power Arenal.",
  },
];

const RELATED = [
  {
    title: "Birdwatching in Costa Rica: The Best Birds Near Arenal",
    url: "/blog/birdwatching",
    image: "/manus-storage/toucan-hero-ultrawide_9046d457.webp",
    tag: "Wildlife",
  },
  {
    title: "The Healing Power of Hot Springs",
    url: "/blog/hot-springs",
    image: `${CDN}/hot-springs-hero_a60a0e92.jpg`,
    tag: "Wellness",
  },
  {
    title: "Nayara by Night: Of Moon and Stars",
    url: "/blog/nayara-by-night",
    image: `${CDN}/nbn-atacama-dusk_9201508f.webp`,
    tag: "Experiences",
  },
];

export default function ArenalTimelessWonderBlog() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.cream }}>
      <Helmet>
        <title>Arenal, Costa Rica: A Timeless Natural Wonder | Nayara Journal</title>
        <meta name="description" content="The complete history of Arenal Volcano, from its geological origins 7,500 years ago through the catastrophic 1968 eruption to its current dormancy. Discover the force that shaped northern Costa Rica." />
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative w-full" style={{ aspectRatio: "21/9", minHeight: 320 }}>
        <img
          src={HERO_IMAGE}
          alt="Arenal Volcano rising above the Costa Rican rainforest"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </section>

      {/* ── TITLE BLOCK ── */}
      <section className="px-6 md:px-12 lg:px-24 pt-12 pb-10" style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-3xl mx-auto">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentEntrance}
            className="text-[11px] tracking-[0.25em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.accent }}
          >
            Geology &amp; History
          </motion.p>
          <motion.h1
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentEntrance}
            className="text-3xl md:text-4xl lg:text-[2.8rem] leading-[1.1] tracking-wide mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            Arenal, Costa Rica: A Timeless Natural Wonder
          </motion.h1>
          <motion.div
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentEntrance}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px]"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            <span>Nayara Journal</span>
            <span>May 2026</span>
            <span>8 min read</span>
          </motion.div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="px-6 md:px-12 lg:px-24 pb-16" style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-3xl mx-auto">
          <motion.p
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentEntrance}
            className="text-[16px] md:text-[17px] leading-[1.9] mb-8"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.text }}
          >
            Arenal Volcano stands 1,633 meters above the lowlands of northern Costa Rica, a near perfect cone of andesite and memory. For the Maleku people who have lived in its shadow for centuries, the mountain was home to the god of fire. For geologists, it is one of the youngest and most studied volcanoes in Central America, less than 7,500 years old and still warm beneath the surface. For the millions who visit each year, it is simply one of the most beautiful landforms on Earth.
          </motion.p>
          <motion.p
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentEntrance}
            className="text-[16px] md:text-[17px] leading-[1.9] mb-8"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.text }}
          >
            But beauty here was forged in violence. Arenal's story is one of creation and destruction, of landscapes remade overnight and ecosystems that rebuilt themselves from bare rock. It is the story of a mountain that slept for four centuries, woke without warning, and then burned for 42 years straight.
          </motion.p>
        </div>
      </section>

      {/* ── GEOLOGICAL ORIGINS ── */}
      <section className="px-6 md:px-12 lg:px-24 py-16" style={{ backgroundColor: PALETTE.stone }}>
        <div className="max-w-3xl mx-auto">
          <motion.h2
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentEntrance}
            className="text-2xl md:text-3xl leading-[1.1] tracking-wide mb-8"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            Born from the Ring of Fire
          </motion.h2>
          <motion.p
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentEntrance}
            className="text-[16px] md:text-[17px] leading-[1.9] mb-8"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.text }}
          >
            Arenal sits on the Central America Volcanic Arc, a chain of volcanoes formed by the Cocos Plate diving beneath the Caribbean Plate. This subduction zone has produced some of the most active volcanic terrain on the planet. Costa Rica alone has seven active volcanoes, and until 2010, Arenal was the most restless of them all.
          </motion.p>
          <motion.p
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentEntrance}
            className="text-[16px] md:text-[17px] leading-[1.9] mb-8"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.text }}
          >
            The volcano began forming roughly 7,000 years ago, its earliest eruptions breaking through older tuffs and sedimentary rock. Over millennia, alternating layers of lava, ash, and pyroclastic material built the symmetrical cone that defines the Arenal skyline today. Geologists have identified at least eight subplinian eruptions and seven violent strombolian events in its tephra record, each one reshaping the surrounding terrain.
          </motion.p>
          <motion.p
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentEntrance}
            className="text-[16px] md:text-[17px] leading-[1.9]"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.text }}
          >
            Its neighbor, Cerro Chato, is an older stratovolcano from the Pleistocene era. Where Chato has gone quiet and filled its crater with a jade colored lagoon, Arenal remained geologically restless, its magma chamber close to the surface and its conduit open to pressure.
          </motion.p>
        </div>
      </section>

      {/* ── THE 1968 ERUPTION (dark section) ── */}
      <section className="px-6 md:px-12 lg:px-24 py-20" style={{ backgroundColor: PALETTE.espresso }}>
        <div className="max-w-3xl mx-auto">
          <motion.h2
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentEntrance}
            className="text-2xl md:text-3xl leading-[1.1] tracking-wide mb-8"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.white }}
          >
            July 29, 1968: The Day the Mountain Woke
          </motion.h2>
          <motion.p
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentEntrance}
            className="text-[16px] md:text-[17px] leading-[1.9] mb-8"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.85)" }}
          >
            At 7:30 in the morning on a Monday in July, after more than 400 years of silence, Arenal erupted with a force that no one in the region had imagined possible. The mountain had been so quiet for so long that locals considered it extinct. Dense forest covered its flanks. Farmers grazed cattle on its lower slopes. There was no monitoring equipment, no evacuation plan, no warning.
          </motion.p>
          <motion.p
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentEntrance}
            className="text-[16px] md:text-[17px] leading-[1.9] mb-8"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.85)" }}
          >
            The eruption blasted open three new craters on the western flank. Rocks weighing several tons were hurled more than a kilometer at speeds exceeding 600 meters per second. Pyroclastic flows raced down the slopes. Over the following days, more than 15 square kilometers were buried under rock, lava, and ash. Three villages were destroyed: Tabacon, Pueblo Nuevo, and San Luis. Eighty seven people lost their lives. Crops were ruined, livestock killed, and 232 square kilometers of land were affected.
          </motion.p>
          <motion.p
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentEntrance}
            className="text-[16px] md:text-[17px] leading-[1.9]"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.85)" }}
          >
            On the eastern side of the volcano, the town of El Borio was untouched. A popular myth holds that residents renamed it La Fortuna ("The Fortune") in gratitude after the eruption spared them. In truth, the name predates 1968. "La Fortuna" referred to the flat, fertile farmland in the area, a rare gift in a region defined by rough volcanic terrain.
          </motion.p>
        </div>
      </section>

      {/* ── 42 YEARS OF FIRE ── */}
      <section className="px-6 md:px-12 lg:px-24 py-16" style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-3xl mx-auto">
          <motion.h2
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentEntrance}
            className="text-2xl md:text-3xl leading-[1.1] tracking-wide mb-8"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            Forty Two Years of Fire
          </motion.h2>
          <motion.p
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentEntrance}
            className="text-[16px] md:text-[17px] leading-[1.9] mb-8"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.text }}
          >
            The 1968 eruption was not a single event. It was the beginning of a continuous eruptive phase that would last until 2010, making it the tenth longest volcanic eruption on Earth since 1750. For more than four decades, Arenal produced lava flows, gas explosions, and pyroclastic events with varying intensity.
          </motion.p>
          <motion.p
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentEntrance}
            className="text-[16px] md:text-[17px] leading-[1.9] mb-8"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.text }}
          >
            In June 1975, landslides poured down from one of the craters, destroying vegetation along the Tabacon River and depositing massive amounts of material on the riverbed. Four powerful explosions sent ash 26 kilometers across the landscape. By March 1996, the volcano had settled into a pattern of regular lava flows accompanied by intermittent gas eruptions.
          </motion.p>
          <motion.p
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentEntrance}
            className="text-[16px] md:text-[17px] leading-[1.9] mb-8"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.text }}
          >
            On May 5, 1998, a series of large eruptions caused part of the northwest crater wall to collapse. Lava, rocks, and ash poured out in waves. Authorities declared a red alert, closed the road between La Fortuna and Tilaran, and evacuated 450 people, mostly tourists, from nearby hotels. No one was injured.
          </motion.p>
          <motion.p
            custom={0.4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentEntrance}
            className="text-[16px] md:text-[17px] leading-[1.9]"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.text }}
          >
            In October 2010, the eruptions stopped. Fumaroles continued at the summit, but the lava flows ceased. Volcanologists placed Arenal under a Green Alert, its calmest classification. The mountain had entered a new phase of dormancy.
          </motion.p>
        </div>
      </section>

      {/* ── THE LANDSCAPE IT MADE ── */}
      <section className="px-6 md:px-12 lg:px-24 py-16" style={{ backgroundColor: PALETTE.stone }}>
        <div className="max-w-3xl mx-auto">
          <motion.h2
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentEntrance}
            className="text-2xl md:text-3xl leading-[1.1] tracking-wide mb-8"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            The Landscape It Made
          </motion.h2>
          <motion.p
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentEntrance}
            className="text-[16px] md:text-[17px] leading-[1.9] mb-8"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.text }}
          >
            Arenal did not just shape the geology of northern Costa Rica. It shaped everything. The volcano's geothermal energy heats the natural hot springs that have drawn visitors for decades. Its eruptions created the fertile soils that support one of the most biodiverse rainforests in the Western Hemisphere. Lake Arenal, the country's largest reservoir, sits in a basin formed by ancient volcanic activity and now generates a significant portion of Costa Rica's hydroelectric power.
          </motion.p>
          <motion.p
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentEntrance}
            className="text-[16px] md:text-[17px] leading-[1.9] mb-8"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.text }}
          >
            The 1968 lava flows, now cool and covered in pioneer vegetation, have become hiking trails within Arenal Volcano National Park. The forest that was obliterated has returned. Toucans, quetzals, sloths, and howler monkeys inhabit the canopy. The destruction became the foundation for regeneration.
          </motion.p>
          <motion.p
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentEntrance}
            className="text-[16px] md:text-[17px] leading-[1.9]"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.text }}
          >
            It is this landscape that Nayara Resorts calls home. Nayara Gardens, Nayara Springs, and Nayara Tented Camp are built within the rainforest that surrounds the volcano. The hot springs that fill the resort pools are heated by the same geothermal forces that power Arenal. The volcano is not a backdrop. It is the reason everything here exists.
          </motion.p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-6 md:px-12 lg:px-24 py-16" style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-3xl mx-auto">
          <motion.h2
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentEntrance}
            className="text-2xl md:text-3xl leading-[1.1] tracking-wide mb-10"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="flex flex-col gap-0">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                custom={0.05 * i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={contentEntrance}
                className="border-b"
                style={{ borderColor: "rgba(90,74,58,0.15)" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span
                    className="text-[15px] md:text-[16px] pr-4"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.text }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className="text-lg shrink-0 transition-transform duration-300"
                    style={{ color: PALETTE.muted, transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pb-5"
                  >
                    <p
                      className="text-[15px] leading-[1.8]"
                      style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOURCES ── */}
      <section className="px-6 md:px-12 lg:px-24 py-12" style={{ backgroundColor: PALETTE.stone }}>
        <div className="max-w-3xl mx-auto">
          <h3
            className="text-[11px] tracking-[0.2em] uppercase mb-6"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.muted }}
          >
            Sources
          </h3>
          <ul className="flex flex-col gap-2 text-[13px] leading-[1.7]" style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}>
            <li>Smithsonian Institution, Global Volcanism Program: Arenal Volcano Profile</li>
            <li>Soto, G.J. (2006). "Eruptive history of Arenal Volcano, Costa Rica, 7 ka to present." Journal of Volcanology and Geothermal Research.</li>
            <li>Mora, M.M. et al. (2022). "Evolution and dynamics of the open-vent eruption at Arenal volcano." Bulletin of Volcanology.</li>
            <li>OVISCORI, Volcanological and Seismological Observatory of Costa Rica, National University of Costa Rica.</li>
            <li>PBS, The Living Edens: Costa Rica, "Breathing Mountain."</li>
            <li>Arenal Observatory Lodge, "40 Years of Eruption, The Arenal Volcano."</li>
          </ul>
        </div>
      </section>

      {/* ── EXPLORE MORE ── */}
      <section className="px-6 md:px-12 lg:px-24 py-16" style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-5xl mx-auto">
          <h3
            className="text-[11px] tracking-[0.25em] uppercase mb-10 text-center"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.accent }}
          >
            Explore More
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RELATED.map((r) => (
              <Link key={r.url} href={r.url}>
                <div className="cursor-pointer group">
                  <div className="overflow-hidden mb-4" style={{ aspectRatio: "4/3" }}>
                    <img
                      src={r.image}
                      alt={r.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase mb-2"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.accent }}
                  >
                    {r.tag}
                  </p>
                  <h4
                    className="text-[15px] leading-[1.4]"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
                  >
                    {r.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
