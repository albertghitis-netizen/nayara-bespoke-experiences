/*
 * BOCAS DEL TORO — OCEAN HABITAT RESTORATION
 * The definitive editorial: global crisis, local science, the partnership,
 * and how guests participate in rebuilding a Caribbean reef system.
 * Partner: Caribbean Coral Restoration Center (loveforthesea.com)
 * Real photos/videos only. No AI-generated imagery.
 */

import { useState } from "react";
import { AnimateOnScroll, TextReveal, fadeUp, EASE_CINEMATIC } from "@/components/motion";
import { motion } from "framer-motion";


const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const PALETTE = {
  ocean: "#1E3A8A",
  teal: "#006D75",
  accent: "#4DC9D1",
  light: "#E2F0F0",
  sand: "#F7F5F0",
  white: "#FFFFFF",
  text: "#0D0704",
  muted: "#1A0A00",
  divider: "#B8D4E8",
  faint: "rgba(30,58,138,0.07)",
};

export default function OceanHabitatRestoration() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.sand }}>
      <Hero />
      <OpeningText />
      <StatsBar />
      <WhyBocas />
      <VideoBreak />
      <ThePartnership />
      <TheMethods />
      <DolphinsVideoBreak />
      <WhatNayaraBuilt />
      <TimelineResults />
      <CurrentScale />
      <EcosystemFraming />
      <LongTermVision />
      <FAQ />
      <ClosingCTA />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   HERO — Full-screen progress video (2022-2026) WITH AUDIO
   Only the title overlaid. Mute/unmute pill via BlobVideo.
   ══════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "100vh" }}>
        {/* Horizontal video — desktop */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center hidden md:block"
        src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663090891297/kyvlbtBVWLFdDyvU.mp4"
      />
      {/* Vertical video — mobile */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center block md:hidden"
        src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663090891297/zVKTzSHLwVOYQyLT.mp4"
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(11,79,94,0.15) 0%, rgba(11,79,94,0.5) 60%, rgba(11,79,94,0.85) 100%)",
        }}
      />
      <div className="relative z-10 h-full flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-20 md:pb-28" style={{ minHeight: "100vh" }}>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE_CINEMATIC }}
          className="uppercase tracking-[0.3em] text-[11px] mb-5"
          style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
        >
          Ocean Habitat Restoration · Bocas del Toro, Panama
        </motion.p>
        <TextReveal as="h1" delay={0.45}>
          <span
            className="text-white text-4xl md:text-6xl lg:text-[5.5rem] leading-[1.02] tracking-wide"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Building a City Beneath the Sea
          </span>
        </TextReveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   OPENING TEXT — "What the Reef Remembers"
   Standalone section below hero. Both hero and this are "the stars."
   ══════════════════════════════════════════════════════════════ */
function OpeningText() {
  return (
    <section className="grid md:grid-cols-2 gap-0">
      <div className="py-12 md:py-16 px-8 md:px-16 lg:px-24" style={{ backgroundColor: "#F5F1EB" }}>
        {/* Left column: What the Reef Remembers */}
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="uppercase tracking-[0.28em] text-[11px] mb-5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
          >
            What the Reef Remembers
          </p>
          <h2
            className="text-2xl md:text-4xl mb-6 leading-[1.1]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#1A0A00" }}
          >
            The Foundation of Ocean Life
          </h2>
        </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.1}>
            <p
              className="text-[16px] md:text-[18px] leading-[1.7] mb-5"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Imagine building a city from nothing. First you lay the foundations: the structures, the streets, the architecture. Then the mobile residents arrive. Fish dart through the corridors, crustaceans claim the crevices, invertebrates colonize every surface. Life fills the city because the city is worth living in.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.7] mb-5"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Then, finally, the permanent residents settle. Coral. Once attached, they cannot leave. They are not visitors. They are the city itself.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.7] mb-5"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Water is not a backdrop to life on Earth. It is the system that makes it possible. The ocean is the downstream expression of almost everything humans do on land. What runs off agricultural fields into a lagoon affects the coral growing thirty meters below the surface. What is burned in a city reshapes the temperature of a sea on the other side of the planet.
            </p>
            <p
              className="text-[17px] md:text-[19px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Coral reefs cover less than one percent of the ocean floor. They support at least 25 percent of all marine species, protect coastlines, sustain fisheries, and underpin the livelihoods of approximately 500 million people. They are also the ecosystem most directly and most irreversibly affected by what the ocean is doing right now.
            </p>
          </AnimateOnScroll>
      </div>

      <div className="py-12 md:py-16 px-8 md:px-16 lg:px-24" style={{ backgroundColor: "#E8F4F8" }}>
        {/* Right column: The Global Context */}
          <AnimateOnScroll variants={fadeUp}>
            <p
              className="uppercase tracking-[0.28em] text-[11px] mb-5"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
            >
              The Global Context
            </p>
            <h2
              className="text-2xl md:text-4xl mb-6 leading-[1.1]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#1A0A00" }}
            >
              The Most Devastating Bleaching Event Ever Recorded
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.1}>
            <p
              className="text-[16px] md:text-[18px] leading-[1.7] mb-5"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              In 2025, researchers publishing in <em>Coral Reefs</em> described an era of near-annual bleaching: uninterrupted global coral heat stress from 2018 through 2025, with median heat accumulation roughly 50 percent greater than any previously recorded event. The International Coral Reef Initiative confirmed 84.4 percent of the world's mapped reef area has been exposed to bleaching-level heat stress since 2023. The event remains ongoing.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.7] mb-5"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              The progression tells the story. The 1998 global bleaching event affected 21 percent of reefs. The 2010 event affected 37 percent. The 2014 to 2017 event affected 68 percent. Each was called the worst ever. What is happening now is not a continuation of that trend. It is a different order of magnitude.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.7] mb-5"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              <em>Advances in Atmospheric Sciences</em> confirmed ocean heat content set another record in 2025. The rate of ocean warming has doubled in the most recent two decades. <em>Earth System Dynamics</em> identified 1.2 degrees Celsius as the effective tipping point for warm-water reefs. The planet is at that threshold now.
            </p>
            <p
              className="text-[17px] md:text-[19px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              The Coral Restoration Foundation's 2025 Tipping Point Report was plain about what restoration can and cannot do. It cannot reverse what the ocean is absorbing. It can buy time, preserve genetic diversity, and rebuild the structural conditions that allow recovery when global conditions improve. That is the honest framework. Everything on this page operates inside it.
            </p>
          </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   STATS BAR
   ══════════════════════════════════════════════════════════════ */
function StatsBar() {
  const stats = [
    { number: "100K+", label: "Coral Fragments\nOutplanted" },
    { number: "200+", label: "Artificial Reef\nStructures" },
    { number: "87%", label: "Panama's Coral\nSpecies in Bocas" },
    { number: "84.4%", label: "Global Reefs\nBleaching Since 2023" },
  ];

  return (
    <section style={{ backgroundColor: PALETTE.ocean }}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
        {stats.map((s, i) => (
          <AnimateOnScroll key={i} variants={fadeUp} delay={i * 0.06}>
            <div className="flex flex-col items-center justify-center text-center py-10 px-4" style={{ backgroundColor: PALETTE.ocean }}>
              <span
                className="text-3xl md:text-4xl mb-1"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.accent }}
              >
                {s.number}
              </span>
              <span
                className="text-[11px] uppercase tracking-[0.1em] leading-[1.5] whitespace-pre-line"
                style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: "rgba(255,255,255,0.65)" }}
              >
                {s.label}
              </span>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
      <p
        className="text-center text-[11px] py-3"
        style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.3)", backgroundColor: PALETTE.ocean }}
      >
        Sources: Caribbean Coral Restoration Center · ICRI 2025 · Coral Reefs Journal 2025
      </p>
    </section>
  );
}


/* ══════════════════════════════════════════════════════════════
   WHY BOCAS — 87% of Panama's coral species
   ══════════════════════════════════════════════════════════════ */
function WhyBocas() {
  return (
    <section style={{ backgroundColor: PALETTE.light }}>
      <div
        className="max-w-3xl mx-auto px-8 md:px-16 py-20"
      >
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="uppercase tracking-[0.28em] text-[11px] mb-5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
          >
            Why Bocas del Toro
          </p>
          <h2
            className="text-2xl md:text-3xl mb-6 leading-[1.2]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#1A0A00" }}
          >
            Bocas Holds What the Rest of the Caribbean Is Losing
          </h2>
          <p
            className="text-[15px] md:text-[16px] leading-[1.85] mb-5"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            The Bocas del Toro archipelago contains approximately 87 percent of all reef-building coral species documented in Panama. The Smithsonian Tropical Research Institute, which has maintained a research station here since 1998, describes it as one of the most significant marine research sites in the western hemisphere.
          </p>
          <p
            className="text-[15px] md:text-[16px] leading-[1.85] mb-5"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            The reef is one third of an integrated system. Mangroves filter the terrestrial runoff that would otherwise smother coral. Seagrass meadows cycle nutrients and feed sea turtles. The reef shelters the juvenile fish that sustain the food web above it. Pull one piece out and the others begin to fail.
          </p>
          <p
            className="text-[15px] md:text-[16px] leading-[1.85] mb-5"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            STRI research identified hypoxia from agricultural runoff and untreated sewage as a primary driver of reef diversity loss in Bahia Almirante, alongside heat. Unlike rising ocean temperatures, nutrient runoff is a local problem with local solutions.
          </p>
          <p
            className="text-[15px] md:text-[16px] leading-[1.85]"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            Research in <em>Ecosphere</em> found that Bocas del Toro's mangrove forests function as genuine coral refugia. A 2025 study in <em>Science Advances</em> confirmed that corals from mangrove lagoons retained their heat tolerance after a full year transplanted to standard reef conditions. Since Bocas del Toro lacks deep-water refugia, these mangrove corridors may be the most important survival infrastructure the archipelago has.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   VIDEO BREAK — Bocas horizontal footage
   ══════════════════════════════════════════════════════════════ */
function VideoBreak() {
  return (
    <section className="relative overflow-hidden" style={{ height: "65vh" }}>
      <img
        src="/manus-storage/4578DC86-3131-4831-93DC-86FC2D4C59E1_2153dd3c.jpg"
        alt="Nayara Tented Camp aerial view with mangrove forest and turquoise water"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(11,79,94,0.6) 100%)" }}
      />
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   THE PARTNERSHIP — Caribbean Coral Restoration + Doug Marcy
   ══════════════════════════════════════════════════════════════ */
function ThePartnership() {
  return (
    <section className="py-12 md:py-16 px-8 md:px-16 lg:px-24" style={{ backgroundColor: PALETTE.sand }}>
      <div className="max-w-3xl">
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="uppercase tracking-[0.28em] text-[11px] mb-5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
          >
            The Partnership
          </p>
          <h2
            className="text-2xl md:text-4xl mb-6 leading-[1.1]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#1A0A00" }}
          >
            Caribbean Coral Restoration: From Isla Solarte Outward
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <p
            className="text-[16px] md:text-[18px] leading-[1.7] mb-5"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            Caribbean Coral Restoration Center is a nonprofit based on Isla Solarte in the Bocas del Toro archipelago. Its founder, <strong>Doug Marcy</strong>, is a civil engineer who has lived in Bocas del Toro for more than 16 years. He did not come here to start a restoration organization. He came because of the water. He started the organization because of what was happening to it.
          </p>
          <p
            className="text-[16px] md:text-[18px] leading-[1.7] mb-5"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            Between 2019 and 2022, Caribbean Coral Restoration established six coral nurseries across the archipelago, cultivating seven reef-building species from eight distinct collection sites, and outplanted approximately 100,000 coral fragments to regional reefs. Over 200 artificial reef structures were built and installed on the ocean floor. Five indigenous Ngabe workers were employed to build and install those structures, creating a direct economic link between reef recovery and the communities whose lives depend on the health of this water.
          </p>
          <p
            className="text-[16px] md:text-[18px] leading-[1.7] mb-5"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            Caribbean Coral Restoration also led the effort to achieve Mission Blue's designation of Bocas del Toro as a Hope Spot in December 2019. That designation was driven by a grassroots team of nine women working in the community. It tells you something about how this organization actually operates.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.15}>
          <blockquote
            className="mt-4 pl-6 border-l-2 text-xl md:text-2xl leading-[1.5] italic"
            style={{
              borderColor: PALETTE.accent,
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              color: "#1A0A00",
            }}
          >
            "Every bleaching event tells you something the water has been trying to say for years. The corals that survive are not random. They are the ones this reef is going to rebuild itself around, if we give them the conditions to do it."
          </blockquote>
          <p
            className="mt-4 text-[13px] tracking-[0.08em] uppercase"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            Doug Marcy, Founder
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}


/* ══════════════════════════════════════════════════════════════
   THE METHODS — Four approaches working together
   ══════════════════════════════════════════════════════════════ */
function TheMethods() {
  return (
    <section className="py-12 md:py-16 px-8 md:px-16 lg:px-24" style={{ backgroundColor: PALETTE.light }}>
      <div className="max-w-5xl">
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="uppercase tracking-[0.28em] text-[11px] mb-3"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
          >
            The Science
          </p>
          <h2
            className="text-2xl md:text-4xl mb-10 leading-[1.1]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#1A0A00" }}
          >
            Four Methods Working Together
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {[
            {
              title: "Seed Bank / Mother Specimens",
              body: "Resilient coral specimens are identified and brought into a protected facility. These specimens have already demonstrated an ability to adapt to changing conditions. They are the foundation of all future restoration work.",
            },
            {
              title: "Induced Spawning",
              body: "Technology exists (used by approximately only 60 organizations worldwide) to induce spawning from these mother specimens, generate offspring, and release them strategically into the water at restoration sites.",
            },
            {
              title: "Translocation",
              body: "Coral populations have died off and are now too far apart to reproduce naturally. Translocation brings compatible (but not identical) specimens together within viable range of each other. Specimens must be regionally sourced; even the same species from Costa Rica has adapted to a different environment and cannot be exchanged directly.",
            },
            {
              title: "Habitat Creation",
              body: "Artificial structures are placed in the water column. Even just 2 feet off the sea floor dramatically increases survival rates compared to placing coral directly on the degraded seabed. These structures are built from scientifically selected materials designed for low carbon footprint and maximum longevity.",
            },
          ].map((method, i) => (
            <AnimateOnScroll key={i} variants={fadeUp} delay={i * 0.08}>
              <div
                className="p-6 md:p-8 rounded-lg border"
                style={{
                  backgroundColor: "rgba(255,255,255,0.5)",
                  borderColor: PALETTE.teal,
                  borderWidth: "1px",
                }}
              >
                <h3
                  className="text-lg md:text-xl mb-3"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.teal }}
                >
                  {method.title}
                </h3>
                <p
                  className="text-[15px] leading-[1.7]"
                  style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
                >
                  {method.body}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll variants={fadeUp} delay={0.3}>
          <div className="mt-16 pt-10" style={{ borderTop: `1px solid ${PALETTE.divider}` }}>
            <h3
              className="text-xl md:text-2xl mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#1A0A00" }}
            >
              Why Habitat Over Coral Count
            </h3>
            <p
              className="text-[16px] leading-[1.9] max-w-3xl mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              The story is no longer about how many corals were transplanted. It is about biodiversity and biomass in a given area. The CCRC has developed a structured program to track what happens to each structure over time: film transfers into a database that generates data curves and measurable outcomes. The numbers consistently show increasing biodiversity and biomass as the ecosystems mature.
            </p>
            <p
              className="text-[15px] leading-[1.7] max-w-3xl"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Restoration cannot substitute for emissions reductions. But it can hold the line—maintain genetic diversity, preserve structural complexity, and demonstrate that communities are not passive in the face of decline. The reef surrounding Isla Frangipani is recovering. Slowly. Incompletely. But it is recovering.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   WHAT NAYARA BUILT — The proof of concept
   ══════════════════════════════════════════════════════════════ */
function WhatNayaraBuilt() {
  return (
    <section className="py-12 md:py-16 px-8 md:px-16 lg:px-24" style={{ backgroundColor: PALETTE.sand }}>
      <div className="max-w-3xl">
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="uppercase tracking-[0.28em] text-[11px] mb-5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
          >
            The Work
          </p>
          <h2
            className="text-2xl md:text-4xl mb-6 leading-[1.1]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#1A0A00" }}
          >
            What Nayara Built. And What Comes Next.
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <p
            className="text-[16px] md:text-[18px] leading-[1.7] mb-5"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            When we built <a href="https://www.nayarabocasdeltoro.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2" style={{ color: PALETTE.teal }}>Nayara Bocas del Toro</a> on Isla Frangipani, we ran five environmental studies before a single piling went into the water. The resort runs entirely on solar power. The reef was not backdrop. It was the reason the island was worth building on at all.
          </p>
          <p
            className="text-[16px] md:text-[18px] leading-[1.7] mb-5"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            In 2022, we partnered with Caribbean Coral Restoration to install ten artificial reef structures in the waters surrounding Isla Frangipani. Not somewhere across the archipelago. Here. In the bay below the overwater villas, visible through the glass floor panels. We started in our own backyard because that is the only way to start something you intend to stand behind.
          </p>
          <p
            className="text-[16px] md:text-[18px] leading-[1.7] mb-5"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            The structures were seeded with genetically resilient coral selected from populations that survived the 2020 bleaching event. Within the first year, fish populations had colonized the structures in species and densities we had not seen in the bay before. The water around Isla Frangipani is measurably more alive than it was when we arrived.
          </p>
          <p
            className="text-[17px] md:text-[19px] leading-[1.9]"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            But the ten structures were always a proof of concept, not a final answer. The expansion now underway extends the program outward across the wider archipelago, placing new structures at degraded reef sites across multiple islands, deepening Caribbean Coral Restoration's indigenous Ngabe community partnerships, and scaling the closed-system breeding program built from the hard lessons of 2023.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   TIMELINE & RESULTS
   ══════════════════════════════════════════════════════════════ */
function TimelineResults() {
  return (
    <section style={{ backgroundColor: PALETTE.ocean }}>
      <div className="max-w-5xl mx-auto px-8 md:px-16 py-20 md:py-28">
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="uppercase tracking-[0.28em] text-[11px] mb-5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
          >
            Timeline & Results
          </p>
          <h2
            className="text-3xl md:text-4xl mb-16 text-white"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            What Happens After a Structure Is Placed
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              time: "Immediately",
              text: "Fish move in almost immediately. They can always swim away, so they are the first to explore. Some resident fish have been observed at the same structure for years.",
            },
            {
              time: "Weeks to Months",
              text: "Invertebrates, sponges, and other sea life that attach are more selective. They assess the environment before committing. Then the other corals will grow in 2 to 3 years.",
            },
            {
              time: "Year 1",
              text: "Coral spawning in the Bocas del Toro area occurs once a year, in late August. If structures are placed before the spawn, baby coral may attach in the first cycle.",
            },
            {
              time: "Year 2 to 3",
              text: "Visible coral growth is present. Knobby brain coral and other species are currently attaching to structures. In earlier years this was visible when bleaching events revealed white spots: coral that had secretly attached and then stressed.",
            },
          ].map((item, i) => (
            <AnimateOnScroll key={i} variants={fadeUp} delay={i * 0.08}>
              <div>
                <span
                  className="text-[12px] uppercase tracking-[0.2em] mb-3 block"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
                >
                  {item.time}
                </span>
                <p
                  className="text-[15px] leading-[1.85]"
                  style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.75)" }}
                >
                  {item.text}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll variants={fadeUp} delay={0.3}>
          <p
            className="mt-14 text-[16px] leading-[1.9] max-w-3xl"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.75)" }}
          >
            The surrounding reef zone amplifies results. Older, more established zones create energy that attracts more life, not just within the structure but in the surrounding area.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   CURRENT SCALE — 17 Habitats
   ══════════════════════════════════════════════════════════════ */
function CurrentScale() {
  return (
    <section className="py-12 md:py-16 px-8 md:px-16 lg:px-24" style={{ backgroundColor: PALETTE.sand }}>
      <div className="max-w-4xl">
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="uppercase tracking-[0.28em] text-[11px] mb-5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
          >
            Current Scale
          </p>
          <h2
            className="text-2xl md:text-4xl mb-6 leading-[1.1]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#1A0A00" }}
          >
            17 Habitats and Growing
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <p
            className="text-[17px] md:text-[19px] leading-[1.9] mb-10"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            There are currently 17 habitats in the Nayara Bocas del Toro area, deployed across three phases:
          </p>
        </AnimateOnScroll>

        <div className="space-y-10">
          {[
            {
              phase: "Phase 1",
              title: "Under the Water Villas",
              body: "Structures placed directly beneath the overwater villas. Originally designed to give guests something to see from their rooms. Now recognized as critical awareness infrastructure: guests witness the restoration every day of their stay.",
            },
            {
              phase: "Phase 2",
              title: "The Outer Reef",
              body: "A real reef established just outside the property boundary. Already showing strong results with measurable increases in biodiversity and biomass.",
            },
            {
              phase: "Phase 3",
              title: "Net-Zero Floating Villas",
              body: "Planned for one of the bays, with individual structures between the floating villas. The goal: coral offsets that neutralize carbon emissions from the villas, creating a completely net-zero, net-positive floating villa.",
            },
          ].map((phase, i) => (
            <AnimateOnScroll key={i} variants={fadeUp} delay={i * 0.08}>
              <div className="pl-6" style={{ borderLeft: `2px solid ${PALETTE.accent}` }}>
                <span
                  className="text-[11px] uppercase tracking-[0.2em] mb-2 block"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
                >
                  {phase.phase}
                </span>
                <h3
                  className="text-xl md:text-2xl mb-3"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#1A0A00" }}
                >
                  {phase.title}
                </h3>
                <p
                  className="text-[16px] leading-[1.9]"
                  style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
                >
                  {phase.body}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   ECOSYSTEM FRAMING — Nurse Sharks (side-by-side: text + video)
   ══════════════════════════════════════════════════════════════ */
function EcosystemFraming() {
  return (
    <section style={{ backgroundColor: PALETTE.light }}>
      <div className="grid md:grid-cols-2 items-stretch">
        {/* Text left */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 md:py-28">
          <AnimateOnScroll variants={fadeUp}>
            <p
              className="uppercase tracking-[0.28em] text-[11px] mb-5"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
            >
              Ecosystem Framing
            </p>
            <h2
              className="text-3xl md:text-4xl mb-10 leading-[1.1]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#1A0A00" }}
            >
              When the Sharks Come Back, You Know It Is Working
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.1}>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              This is coral habitat restoration, not coral reef restoration. The distinction matters. Coral reefs are the backbone of the entire ocean ecosystem. Healthy coral enables all other marine life to return.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Nurse sharks and other apex predators have returned to the Nayara restoration sites. This is the most reliable indicator of a healthy, functioning ecosystem. Predators are only present because their prey has returned. Prey returned because the coral came back.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              One habitat even became home to a Caribbean king crab colony, something the founder had never seen before in decades of reef work. First of its kind.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Nurse sharks video right */}
        <div className="overflow-hidden" style={{ minHeight: "520px" }}>
          <video
            src="/manus-storage/nurse-sharks-bocas_1384d3f9.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   LONG-TERM VISION
   ══════════════════════════════════════════════════════════════ */
function LongTermVision() {
  return (
    <section className="py-20 md:py-28 px-8 md:px-16 lg:px-24" style={{ backgroundColor: PALETTE.sand }}>
      <div className="max-w-3xl">
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="uppercase tracking-[0.28em] text-[11px] mb-5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
          >
            Long-Term Vision
          </p>
          <h2
            className="text-2xl md:text-4xl mb-6 leading-[1.1]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#1A0A00" }}
          >
            A Continuous Reef Across the Archipelago
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <p
            className="text-[16px] md:text-[18px] leading-[1.7] mb-5"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            The ultimate goal is to connect and create a continuous reef system throughout the entire Bocas del Toro archipelago. Not isolated patches. A living corridor.
          </p>
          <p
            className="text-[16px] md:text-[18px] leading-[1.7] mb-5"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            Nayara intends to use this as a model for luxury hotels and institutions globally. If a resort can demonstrate that its operations actively restore the ecosystem it sits within, rather than merely minimizing harm, it changes the calculus for the entire industry.
          </p>
          <p
            className="text-[17px] md:text-[19px] leading-[1.9]"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            The floating villa net-zero goal is a near-term milestone that anchors the larger vision. Proof that luxury and restoration are not in tension. They are the same project.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}



function RestorationIsABridge() {
  return (
    <section className="py-20 md:py-28 px-8 md:px-16 lg:px-24" style={{ backgroundColor: PALETTE.sand }}>
      <div className="max-w-3xl">
        <AnimateOnScroll variants={fadeUp}>
          <h2
            className="text-2xl md:text-4xl mb-6 leading-[1.1]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#1A0A00" }}
          >
            Restoration Is a Bridge. Here Is What That Means.
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <p
            className="text-[16px] md:text-[18px] leading-[1.7] mb-5"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            The 2025 Tipping Point Report and a 2025 study in PubMed Central are both clear: restoration cannot substitute for emissions reductions. The temperatures driving bleaching are a function of what the world burns. No nursery program reverses that.
          </p>
          <p
            className="text-[16px] md:text-[18px] leading-[1.7] mb-5"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            What restoration can do is hold the line. Maintain the genetic diversity future reefs will need to rebuild. Preserve the structural complexity that juvenile fish and invertebrates depend on. Demonstrate, in a specific place, that the people closest to these ecosystems are not passive in the face of their decline.
          </p>
          <p
            className="text-[16px] md:text-[18px] leading-[1.7] mb-5"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            The reef surrounding Isla Frangipani is recovering. Slowly. Incompletely. With no guarantee the next thermal event does not undo years of progress in a season. But it is recovering. And the expansion outward across the archipelago is the most honest expression of what we believe our responsibility here looks like.
          </p>
          <p
            className="text-[17px] md:text-[19px] leading-[1.9]"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            The future of coral reefs depends on decisions made at a global scale. It also depends on what happens on a Tuesday morning in the waters around Isla Solarte when no one is watching. Both are true. We are committed to the part we can control.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   FAQ — 7 questions
   ══════════════════════════════════════════════════════════════ */
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    {
      q: "What is coral bleaching and why is it accelerating?",
      a: "When ocean temperatures exceed a coral's thermal threshold, it expels the symbiotic algae that provide its nutrients and color, turning white and beginning to starve. If temperatures drop in time, corals recover. If not, they die. A 2025 paper in Coral Reefs documented the current event as the most severe on record, with heat accumulation 50 percent greater than any previous bleaching event.",
    },
    {
      q: "Why does Bocas del Toro matter specifically for restoration?",
      a: "It contains approximately 87 percent of Panama's reef-building coral species. Smithsonian research identified that a significant portion of reef loss here is driven by hypoxia from nutrient runoff, a local stressor manageable independently of global ocean temperatures. That combination of genetic richness and addressable local variables makes it one of the most viable restoration sites in the Caribbean.",
    },
    {
      q: "What is an artificial reef structure?",
      a: "An engineered form placed on the ocean floor to provide the physical substrate and habitat complexity that degraded reef areas no longer offer. Fish colonize them naturally, creating the ecological conditions that support coral outplanting. Caribbean Coral Restoration's structures cost approximately six thousand dollars each to build and install.",
    },
    {
      q: "What does heat-resistant coral mean in practice?",
      a: "Coral identified as carrying traits that allow survival at temperatures that kill standard reef corals. Research in Nature Communications confirmed these traits are heritable across generations. Caribbean Coral Restoration's program propagates and outplants the genotypes that survived Bocas del Toro's 2020 and 2023 bleaching events.",
    },
    {
      q: "Can guests participate in the restoration program?",
      a: "Yes. Guided snorkel and dive experiences give guests direct access to the reef structures with expert interpretation. The adopt-a-coral program allows guests to fund new reef structures contributing to the archipelago expansion. Contact the resort for details.",
    },
    {
      q: "How does reef restoration connect to the reforestation at Nayara Tented Camp?",
      a: "Ecologically, healthy forests reduce the runoff that carries sediment and nutrients into coastal reef systems, directly protecting downstream water quality. Philosophically, both programs follow the same model: begin locally, demonstrate what works, then expand outward.",
    },
    {
      q: "Is coral restoration enough to save reefs?",
      a: "No. The 2025 Tipping Point Report is clear: restoration cannot substitute for global emissions reductions. What it can do is maintain genetic diversity, preserve structural complexity, and buy time for reef systems to survive long enough to benefit from the climate action that ultimately determines their future.",
    },
  ];

  return (
    <section className="py-20 md:py-28 px-8 md:px-16 lg:px-24" style={{ backgroundColor: PALETTE.light }}>
      <div className="max-w-3xl">
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="uppercase tracking-[0.28em] text-[11px] mb-5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
          >
            Frequently Asked Questions
          </p>
          <h2
            className="text-3xl md:text-4xl mb-12 leading-[1.1]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#1A0A00" }}
          >
            Questions We Get Asked
          </h2>
        </AnimateOnScroll>

        <div className="space-y-0">
          {questions.map((item, i) => (
            <div key={i} style={{ borderBottom: `1px solid ${PALETTE.divider}` }}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left py-6 flex items-start justify-between gap-4 cursor-pointer"
              >
                <span
                  className="text-[16px] md:text-[17px] leading-[1.5]"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "#1A0A00" }}
                >
                  {item.q}
                </span>
                <span
                  className="text-xl flex-shrink-0 mt-0.5 transition-transform duration-300"
                  style={{ color: PALETTE.teal, transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  +
                </span>
              </button>
              {openIndex === i && (
                <div className="pb-6">
                  <p
                    className="text-[15px] leading-[1.85]"
                    style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
                  >
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ══════════════════════════════════════════════════════════════
   CLOSING CTA — Progress video background with CTA overlay
   ══════════════════════════════════════════════════════════════ */
function ClosingCTA() {
  return (
    <section className="relative overflow-hidden" style={{ height: "70vh" }}>
      {/* Video background — permanently muted, no audio controls */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/manus-storage/Underwater1_e83986a7.MP4"
      />
      <div
        className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center"
        style={{ background: "rgba(11,79,94,0.68)" }}
      >
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="uppercase tracking-[0.3em] text-[11px] mb-5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
          >
            Experience It
          </p>
          <h2
            className="text-3xl md:text-5xl text-white mb-6 max-w-2xl mx-auto leading-[1.1]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            We Started in Our Backyard. We Are Not Stopping There.
          </h2>
          <p
            className="text-[16px] md:text-[18px] leading-relaxed max-w-xl mx-auto mb-10"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.82)" }}
          >
            Every guest at Nayara Bocas del Toro has the opportunity to enter the reef, understand the science, and contribute to its recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.nayarabocasdeltoro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-[12px] uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-0.5"
              style={{
                backgroundColor: PALETTE.accent,
                color: PALETTE.ocean,
                fontFamily: "var(--font-body)",
                fontWeight: 700,
              }}
            >
              Explore Bocas del Toro
            </a>
            <a
              href="https://loveforthesea.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-[12px] uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-0.5"
              style={{
                backgroundColor: "transparent",
                color: PALETTE.white,
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                border: "1px solid rgba(255,255,255,0.45)",
              }}
            >
              Caribbean Coral Restoration
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   BOCAS WATER VIDEO + TEXT — Side-by-side layout:
   3:4 vertical video of Bocas del Toro waters on one side,
   editorial text on the other. Placed between EcosystemFraming
   and LongTermVision.
   ══════════════════════════════════════════════════════════════ */
function DolphinsVideoBreak() {
  return (
    <section style={{ backgroundColor: PALETTE.ocean }}>
      <div className="grid md:grid-cols-2 items-stretch">
        {/* Video left */}
        <div className="overflow-hidden" style={{ minHeight: "520px" }}>
          <video
            src="/manus-storage/bocas-water-vertical_5d57165d.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Text right */}
        <div className="flex flex-col justify-center px-10 md:px-16 lg:px-20 py-16 md:py-20">
          <p
            className="uppercase tracking-[0.28em] text-[11px] mb-5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
          >
            The Waters of Bocas
          </p>
          <h3
            className="text-2xl md:text-3xl mb-8 leading-[1.15] text-white"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            A Living System, Not a Postcard
          </h3>
          <p
            className="text-[15px] md:text-[16px] leading-[1.9] mb-6"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.75)" }}
          >
            The waters around Bocas del Toro are not pristine in the way that word usually implies. They are alive. Turbid with plankton. Warm. Nutrient-rich from the mangrove systems that feed them. This is not a weakness—it is the engine.
          </p>
          <p
            className="text-[15px] md:text-[16px] leading-[1.9]"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.75)" }}
          >
            The same conditions that make these waters look green rather than blue are what allow coral to grow faster here than almost anywhere else in the Caribbean. The reef does not need crystal clarity. It needs food, warmth, and structure. Bocas provides all three.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   PLACEHOLDER IMAGE BREAK — Styled placeholder for underwater stills
   User will replace with real photos later
   ══════════════════════════════════════════════════════════════ */
function PlaceholderImageBreak({ label }: { label: string }) {
  return (
    <section className="flex items-center justify-center" style={{ height: "45vh", backgroundColor: "#132f3a" }}>
      <div className="text-center px-8">
        <div
          className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
          style={{ border: `2px dashed ${PALETTE.accent}` }}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke={PALETTE.accent} strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
          </svg>
        </div>
        <p
          className="text-[11px] uppercase tracking-[0.2em] mb-2"
          style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
        >
          Placeholder — Replace with Real Photo
        </p>
        <p
          className="text-[13px] max-w-[300px] mx-auto"
          style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.55)" }}
        >
          {label}
        </p>
      </div>
    </section>
  );
}
