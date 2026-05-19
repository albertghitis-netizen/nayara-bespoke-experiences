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
import { useEffect } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import BlogAuthorReadTime from "@/components/BlogAuthorReadTime";

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

const HERO_IMAGE = "/manus-storage/arenal-volcano-hero-pool_efca46f1.jpg";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";



const RELATED = [
  {
    title: "Birdwatching in Costa Rica: The Best Birds Near Arenal",
    url: "/blog/birdwatching",
    image: "/manus-storage/birdwatching-card-aracari-square_616da216.jpg",
    tag: "Wildlife",
  },
  {
    title: "Private Villas and Hot-Springs Plunge Pools",
    url: "/blog/hot-springs",
    image: "/manus-storage/hotsprings-card-tented-plunge_5d997c52.jpg",
    tag: "Wellness",
  },
  {
    title: "Nayara by Night: Of Moon and Stars",
    url: "/blog/nayara-by-night",
    image: "/manus-storage/moai-milky-way-night_73a94f15.jpg",
    tag: "Experiences",
  },
];

export default function ArenalTimelessWonderBlog() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.cream }}>
      <Helmet>
        <title>Arenal Volcano, Costa Rica: A Timeless Natural Wonder | Nayara Journal</title>
        <meta name="description" content="The complete history of Arenal Volcano, from its geological origins 7,500 years ago through the catastrophic 1968 eruption to its current dormancy. Discover the force that shaped northern Costa Rica." />
      </Helmet>

      {/* ── BRAND NAVIGATION ── */}
      <BrandNavigation pageType="content" />

      {/* ── HERO ── */}
      <section className="relative w-full" style={{ aspectRatio: "21/9", minHeight: 320 }}>
        <img
          src={HERO_IMAGE}
          alt="Arenal Volcano rising above the Costa Rican rainforest"
          className="absolute inset-0 w-full h-full object-cover object-top"
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
            Arenal Volcano, Costa Rica: A Timeless Natural Wonder
          </motion.h1>
        </div>
      </section>

      {/* ── AUTHOR BAND ── */}
      <BlogAuthorReadTime
        author="Albert Ghitis"
        authorRole="Editorial"
        date="May 12, 2026"
        readingTime={8}
      />

      {/* ── KEY FINDINGS ── */}
      <section className="px-6 md:px-12 lg:px-24 pt-12 pb-8" style={{ backgroundColor: PALETTE.stone }}>
        <div className="max-w-3xl mx-auto">
          <div className="border border-stone-300 p-6 md:p-8">
            <h3
              className="text-[11px] tracking-[0.2em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
            >
              Key Findings
            </h3>
            <ul className="flex flex-col gap-3 text-[15px] leading-[1.8]" style={{ fontFamily: "var(--font-body)", color: PALETTE.text }}>
              <li>• Arenal Volcano is less than 7,500 years old, making it one of the youngest and most studied volcanoes in Central America.</li>
              <li>• The catastrophic 1968 eruption ended over 400 years of dormancy, destroying three villages and claiming 87 lives.</li>
              <li>• From 1968 to 2010, Arenal was continuously active for 42 years, the tenth longest volcanic eruption on Earth since 1750.</li>
              <li>• The volcano’s geothermal energy heats the natural hot springs that have drawn visitors for decades and powers Costa Rica’s largest hydroelectric reservoir.</li>
              <li>• Since entering dormancy in 2010, the rainforest has regenerated across former lava flows, supporting 500+ bird species and half the world’s butterfly species.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="px-6 md:px-12 lg:px-24 pt-12 pb-16" style={{ backgroundColor: PALETTE.cream }}>
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



      {/* ── SOURCES & FURTHER READING ── */}
      <section className="px-6 md:px-12 lg:px-24 py-16" style={{ backgroundColor: PALETTE.stone }}>
        <div className="max-w-3xl mx-auto">
          <h3
            className="text-[11px] tracking-[0.25em] uppercase mb-8 text-center"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.accent }}
          >
            Sources &amp; Further Reading
          </h3>
          <ul className="flex flex-col gap-3 text-[14px] leading-[1.8]" style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}>
            <li>
              <a href="https://volcano.si.edu/volcano.cfm?vn=345033" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                Smithsonian Institution, Global Volcanism Program: Arenal Volcano Profile
              </a>
            </li>
            <li>
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S0377027305003380" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                Soto, G.J. (2006). "Eruptive history of Arenal Volcano, Costa Rica, 7 ka to present." Journal of Volcanology and Geothermal Research.
              </a>
            </li>
            <li>
              <a href="https://link.springer.com/article/10.1007/s00445-022-01585-3" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                Mora, M.M. et al. (2022). "Evolution and dynamics of the open-vent eruption at Arenal volcano." Bulletin of Volcanology.
              </a>
            </li>
            <li>
              <a href="https://www.ovsicori.una.ac.cr/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                OVSICORI, Volcanological and Seismological Observatory of Costa Rica, National University of Costa Rica.
              </a>
            </li>
            <li>
              <a href="https://www.pbs.org/edens/costarica/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                PBS, The Living Edens: Costa Rica, "Breathing Mountain."
              </a>
            </li>
            <li>
              <a href="https://www.arenalobservatorylodge.com/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                Arenal Observatory Lodge, "40 Years of Eruption, The Arenal Volcano."
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* ── SHARE THIS POST ── */}
      <section style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12 text-center">
          <p
            className="uppercase tracking-[0.3em] text-[11px] mb-6"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
          >
            Share This Post
          </p>
          <div className="flex items-center justify-center gap-6">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Share on Facebook"
            >
              <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill={PALETTE.espresso} style={{ opacity: 0.6 }} viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(document.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Share on X"
            >
              <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill={PALETTE.espresso} style={{ opacity: 0.6 }} viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Share on LinkedIn"
            >
              <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill={PALETTE.espresso} style={{ opacity: 0.6 }} viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent(document.title)}&body=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              className="group"
              aria-label="Share via Email"
            >
              <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill="none" stroke={PALETTE.espresso} style={{ opacity: 0.6 }} strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
            </a>
            <button
              onClick={() => { if (typeof navigator !== 'undefined' && navigator.clipboard) { navigator.clipboard.writeText(window.location.href); } }}
              className="group"
              aria-label="Copy link"
            >
              <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill="none" stroke={PALETTE.espresso} style={{ opacity: 0.6 }} strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.813a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364L5.25 8.25"/></svg>
            </button>
          </div>
        </div>
      </section>



      {/* ── EXPLORE MORE ── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="px-6 md:px-12 lg:px-24 py-16" style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-5xl mx-auto">
          <p
            className="text-[10px] tracking-[0.3em] uppercase mb-2 text-center"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.accent }}
          >
            Continue Reading
          </p>
          <h3
            className="text-2xl md:text-3xl tracking-wide mb-10 text-center"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
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
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
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
      </motion.section>

      <Footer />
    </div>
  );
}
