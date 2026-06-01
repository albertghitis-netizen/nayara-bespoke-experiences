/*
 * BOCAS DEL TORO — OCEAN HABITAT RESTORATION
 * Definitive editorial page: the global crisis, the science, the partnership,
 * the program, and how guests participate.
 * Partner: Caribbean Coral Restoration Center (loveforthesea.com)
 * Real photos only. No AI-generated imagery.
 */

import { motion } from "framer-motion";

import {
  AnimateOnScroll,
  TextReveal,
  fadeUp,
  EASE_CINEMATIC,
} from "@/components/motion";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const PALETTE = {
  ocean: "#1E3A8A",      // Bocas royal blue (primary/nav/footer)
  teal: "#006D75",       // Bocas deep aqua (secondary accents)
  accent: "#4DC9D1",     // Bocas light aqua (highlights)
  light: "#E2F0F0",      // Bocas aqua tint (backgrounds)
  sand: "#F7F5F0",       // Bone (light section bg)
  white: "#FFFFFF",
  text: "#0D0704",        // Super dark brown on light
  muted: "#1A0A00",      // Pure dark brown for body text on light backgrounds
  divider: "#B8D4E8",
  faint: "rgba(30,58,138,0.07)",
};

/* ── STATS ─────────────────────────────────────────────────── */
const STATS = [
  { number: "500+", label: "Coral Fragments\nOutplanted" },
  { number: "3", label: "Active\nRestoration Sites" },
  { number: "25", label: "Community\nPartners" },
  { number: "12", label: "Research\nProjects" },
  { number: "1,000+", label: "Volunteer Hours\nper Month" },
  { number: "80%", label: "Caribbean Habitat\nDecline in 50 Years" },
];

/* ── RESTORATION STEPS ─────────────────────────────────────── */
const STEPS = [
  {
    n: "01",
    title: "Survey & Select",
    body: "Teams scour the Bocas del Toro archipelago for coral specimens that have already survived bleaching events, individuals demonstrating natural resilience to elevated water temperatures.",
  },
  {
    n: "02",
    title: "Clone & Cultivate",
    body: "Resilient fragments are cloned and grown in the land-water nursery on Isla Solarte, protected during their most vulnerable growth phase before they are ready to be outplanted.",
  },
  {
    n: "03",
    title: "Build the Foundation",
    body: "Artificial reef structures are constructed on land from environmentally friendly materials, designed to mimic natural reef architecture and provide immediate habitat for fish and invertebrates.",
  },
  {
    n: "04",
    title: "Install & Outplant",
    body: "Structures are installed at the three active restoration sites in the bay. Nursery-grown coral is then outplanted onto the structures, giving each fragment a stable, clean base to grow from.",
  },
  {
    n: "05",
    title: "Monitor & Research",
    body: "Each site is actively monitored for coral growth, fish colonization, and ecosystem health. Twelve ongoing research projects study resilience, bleaching response, and long-term recovery.",
  },
  {
    n: "06",
    title: "Expand & Educate",
    body: "The program engages 25 local community partners, including schools, fishing cooperatives, and neighboring hotels, with the long-term goal of scaling reef restoration across the entire archipelago.",
  },
];

export default function OceanHabitatRestoration() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.sand }}>
      <Hero />
      <StatsBar />
      <TheGlobalCrisis />
      <BocasContext />
      <ThePartnership />
      <TheFounder />
      <RestorationProcess />
      <ImageBreak />
      <WhatMakesItUnique />
      <GuestExperience />
      <ClosingCTA />
    </div>
  );
}

/* ── HERO ─────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "90vh" }}>
      <video
        src="/manus-storage/Underwater1_e83986a7.MP4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(11,79,94,0.2) 0%, rgba(11,79,94,0.55) 55%, rgba(11,79,94,0.88) 100%)",
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-20 md:pb-28" style={{ minHeight: "90vh" }}>
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
            Ocean Habitat Restoration
          </span>
        </TextReveal>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: EASE_CINEMATIC }}
          className="mt-6 text-lg md:text-xl leading-relaxed max-w-2xl"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400, color: "rgba(255,255,255,0.82)" }}
        >
          Imagine building a city from nothing. First you lay the foundations: the structures, the streets, the architecture. Then the mobile residents arrive. Fish dart through the corridors, crustaceans claim the crevices, invertebrates colonize every surface. Life fills the city because the city is worth living in. And then, finally, the permanent residents settle. Coral, which once attached cannot leave. They are not visitors. They are the city itself. In partnership with Caribbean Coral Restoration, Nayara Bocas del Toro is building that city, restoring one of the Caribbean's most threatened ocean habitats from the foundation up.
        </motion.p>
      </div>
    </section>
  );
}

/* ── STATS BAR ────────────────────────────────────────────── */
function StatsBar() {
  return (
    <section style={{ backgroundColor: PALETTE.ocean }}>
      <div className="max-w-7xl mx-auto grid grid-cols-3 md:grid-cols-6 gap-px" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
        {STATS.map((s, i) => (
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
        Sources: Caribbean Coral Restoration Center (loveforthesea.com) · NOAA Coral Reef Watch 2024
      </p>
    </section>
  );
}

/* ── THE GLOBAL CRISIS ────────────────────────────────────── */
function TheGlobalCrisis() {
  return (
    <section className="py-20 md:py-32 px-8 md:px-16 lg:px-24" style={{ backgroundColor: PALETTE.sand }}>
      <div className="max-w-3xl">
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="uppercase tracking-[0.28em] text-[11px] mb-5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
          >
            The Global Context
          </p>
          <h2
            className="text-3xl md:text-5xl mb-10 leading-[1.1]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#1A0A00" }}
          >
            The Fourth Mass Bleaching Event
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <p
            className="text-[17px] md:text-[19px] leading-[1.9] mb-7"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            In 2024, NOAA declared the world's fourth global mass coral bleaching event on record, the most widespread in history, affecting reefs across the Atlantic, Pacific, and Indian Oceans simultaneously. The trigger: sea surface temperatures rising to levels coral cannot survive.
          </p>
          <p
            className="text-[17px] md:text-[19px] leading-[1.9] mb-7"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            Coral bleaching occurs when water temperatures rise even slightly above normal for an extended period. Corals expel the symbiotic algae (zooxanthellae) that live in their tissues and provide up to 90% of their energy through photosynthesis. Without them, the coral turns white and, if temperatures don't return to normal quickly, starves to death. What was once a rare event now occurs with increasing frequency and severity.
          </p>
          <p
            className="text-[17px] md:text-[19px] leading-[1.9] mb-7"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            The Caribbean has been among the hardest hit. Caribbean reefs have declined by approximately <strong>80% over the last fifty years</strong>, a collapse driven by bleaching, ocean acidification, agricultural runoff, coastal development, and overfishing. Six Caribbean coral species are now listed as threatened under the U.S. Endangered Species Act, including Staghorn coral (<em>Acropora cervicornis</em>) and Elkhorn coral (<em>Acropora palmata</em>), once the dominant reef-building species across the entire region.
          </p>
          <p
            className="text-[17px] md:text-[19px] leading-[1.9]"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            Over 50% of the world's coral reefs have been lost since the 1950s. Scientists estimate that without significant intervention, the majority of the world's remaining reefs could be functionally extinct within decades. Coral reefs cover less than 1% of the ocean floor but support an estimated 25% of all marine species and the livelihoods of more than a billion people.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.15}>
          <div className="mt-12 max-w-2xl mx-auto">
            <img
              src="/manus-storage/coral-bleaching-infographic_427e7440.png"
              alt="The Extent of Global Coral Bleaching Events: share of coral reefs worldwide that experienced heat stress causing bleaching, by declared event (1998-present). Source: State of the Oceans 2024 via Statista."
              className="w-full h-auto rounded"
              loading="lazy"
            />
            <p className="text-[12px] mt-3 text-center" style={{ fontFamily: "var(--font-body)", color: PALETTE.muted, opacity: 0.7 }}>
              Source: State of the Oceans 2024 via Statista
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ── BOCAS CONTEXT ────────────────────────────────────────── */
function BocasContext() {
  return (
    <section className="grid md:grid-cols-2" style={{ minHeight: "520px" }}>
      {/* Image left */}
      <div className="overflow-hidden" style={{ minHeight: "380px" }}>
        <img
          src={`${CDN}/bocas-aerial-villas-mangroves_9d5e94f5.jpg`}
          alt="Aerial view of Nayara Bocas del Toro overwater villas surrounded by mangroves and turquoise water"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          style={{ minHeight: "380px", transition: "transform 700ms ease-in-out" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
        />
      </div>
      {/* Text right */}
      <div
        className="flex flex-col justify-center px-10 md:px-16 py-16"
        style={{ backgroundColor: PALETTE.light }}
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
            An Ocean Habitat Worth Fighting For
          </h2>
          <p
            className="text-[15px] md:text-[16px] leading-[1.85] mb-5"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            The Bocas del Toro archipelago is home to some of the most biodiverse coral reef ecosystems remaining in the Caribbean. Its waters shelter parrotfish, angelfish, nurse sharks, hawksbill sea turtles, and hundreds of invertebrate species that depend on healthy reef structure for shelter and food.
          </p>
          <p
            className="text-[15px] md:text-[16px] leading-[1.85] mb-5"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            But monitoring data from 2023–2024 shows increasing dead coral and bleaching trends across the archipelago. The same forces driving global reef collapse are at work here, and the window for intervention is narrowing.
          </p>
          <p
            className="text-[15px] md:text-[16px] leading-[1.85]"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            Nayara Bocas del Toro was built on stilts, after five independent environmental studies, to avoid disturbing the reef and mangroves below. That same commitment to the bay is what drives our partnership with Caribbean Coral Restoration.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ── THE PARTNERSHIP ──────────────────────────────────────── */
function ThePartnership() {
  return (
    <section className="py-20 md:py-32 px-8 md:px-16 lg:px-24" style={{ backgroundColor: PALETTE.sand }}>
      <div className="max-w-3xl">
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="uppercase tracking-[0.28em] text-[11px] mb-5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
          >
            The Partnership
          </p>
          <h2
            className="text-3xl md:text-5xl mb-10 leading-[1.1]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#1A0A00" }}
          >
            Caribbean Coral Restoration
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <p
            className="text-[17px] md:text-[19px] leading-[1.9] mb-7"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            In 2022, Nayara Bocas del Toro partnered with the <strong>Caribbean Coral Restoration Center</strong>, a 501(c)(3) nonprofit based on Isla Solarte in Bocas del Toro. Their mission is to be cultivators and guardians of flourishing ocean ecosystems. Their approach is fundamentally different from most restoration programs in the Caribbean.
          </p>
          <p
            className="text-[17px] md:text-[19px] leading-[1.9] mb-7"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            Most coral restoration programs work with whatever degraded reef structure already exists, transplanting coral fragments directly onto broken, bleached, or algae-covered substrate. Caribbean Coral Restoration takes a different approach: they <strong>build their own artificial reef structures from scratch</strong>, constructed on land and then installed at restoration sites before any coral is outplanted. The foundation is always stable, clean, and purpose-designed for coral attachment and fish habitat.
          </p>
          <p
            className="text-[17px] md:text-[19px] leading-[1.9] mb-7"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            The coral they grow isn't randomly selected either. Their team scours the Bocas archipelago specifically for specimens that have already survived bleaching events, individuals demonstrating natural resilience to extreme water temperatures. These are cloned, grown in a land-water nursery on Isla Solarte, and outplanted onto the artificial structures. It is a form of assisted evolution: selecting for the genetic traits that give coral the best chance in a warming ocean.
          </p>
          <p
            className="text-[17px] md:text-[19px] leading-[1.9]"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            The program takes a holistic view of reef health, not just planting coral, but rebuilding fish habitat, managing the surrounding ecosystem, and creating the conditions in which a reef can sustain itself. Three active restoration sites are currently operating in the bay, with 500+ coral fragments successfully restored and 12 ongoing research projects tracking long-term outcomes.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.15}>
          <blockquote
            className="mt-12 pl-6 border-l-2 text-xl md:text-2xl leading-[1.5] italic"
            style={{
              borderColor: PALETTE.accent,
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              color: "#1A0A00",
            }}
          >
            "Our main goal is to set an example and help other local hotels start ocean habitat restoration programs of their own."
          </blockquote>
          <p
            className="mt-4 text-[13px] tracking-[0.08em] uppercase"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            Nayara Bocas del Toro
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ── THE FOUNDER ──────────────────────────────────────────── */
function TheFounder() {
  return (
    <section className="grid md:grid-cols-2" style={{ minHeight: "520px" }}>
      {/* Text left */}
      <div
        className="flex flex-col justify-center px-10 md:px-16 py-16"
        style={{ backgroundColor: PALETTE.light }}
      >
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="uppercase tracking-[0.28em] text-[11px] mb-5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
          >
            The Founder
          </p>
          <h2
            className="text-2xl md:text-3xl mb-6 leading-[1.2]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#1A0A00" }}
          >
            Doug Marcy
          </h2>
          <p
            className="text-[15px] md:text-[16px] leading-[1.85] mb-5"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            Doug Marcy was born on a ranch in the Nebraska Sandhills, about as far from the ocean as you can get and still remain in North America. He learned to dive in swimming pools and murky settlement basins along Interstate 80 during engineering college. His first ocean dive, near West Palm Beach in 1972, changed everything. "My wife and I simply sat on the seafloor and watched," he recalls. "Around us was an explosion of movement, color, and life unlike anything I had ever imagined."
          </p>
          <p
            className="text-[15px] md:text-[16px] leading-[1.85] mb-5"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            Decades later, among the islands of the Bocas del Toro Archipelago, Marcy rediscovered that same sense of wonder, and then watched it disappear. Entire reef systems collapsed within months. Familiar dive sites became ghost landscapes. What began as exploration became an obsession with understanding why, and then a commitment to doing something about it.
          </p>
          <p
            className="text-[15px] md:text-[16px] leading-[1.85] mb-5"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            That commitment became the Caribbean Coral Restoration Center, a 501(c)(3) nonprofit focused not just on planting coral, but on rebuilding entire marine ecosystems from the ground up. Marcy and his team immersed themselves in structural engineering, marine chemistry, material science, and habitat geometry to design artificial reef systems that restore biomass, biodiversity, and ecological balance.
          </p>
          <p
            className="text-[15px] md:text-[16px] leading-[1.85]"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            In areas once nearly devoid of life, new habitat zones transformed into thriving underwater communities within just a few years. Zooplankton swarms returned. Schools of fish established residence. Predators followed prey back into the system. Then came the coral, resilient specimens carefully positioned to encourage future spawning and genetic exchange. Over time, new juvenile corals began appearing naturally, without human intervention. The reef was beginning to heal itself.
          </p>
        </AnimateOnScroll>
      </div>
      {/* Pull quote right */}
      <div
        className="flex flex-col justify-center px-10 md:px-16 py-16"
        style={{ backgroundColor: PALETTE.ocean }}
      >
        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <blockquote
            className="text-2xl md:text-3xl leading-[1.4] italic mb-8"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.white }}
          >
            "The ocean still remembers how to heal. Our responsibility is to give it that chance."
          </blockquote>
          <div
            className="w-16 h-px mb-6"
            style={{ backgroundColor: PALETTE.accent }}
          />
          <p
            className="text-[13px] tracking-[0.12em] uppercase mb-2"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
          >
            Doug Marcy
          </p>
          <p
            className="text-[14px] leading-[1.7]"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.65)" }}
          >
            Founder, Caribbean Coral Restoration Center. Ocean advocate, applied scientist, and dedicated steward of marine ecosystems through restoration, education, and long-term habitat recovery in the Bocas del Toro Archipelago.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ── RESTORATION PROCESS ──────────────────────────────────── */
function RestorationProcess() {
  return (
    <section style={{ backgroundColor: PALETTE.ocean }}>
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-28">
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="uppercase tracking-[0.28em] text-[11px] mb-5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
          >
            How It Works
          </p>
          <h2
            className="text-3xl md:text-4xl mb-16 text-white"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            The Habitat Restoration Process
          </h2>
        </AnimateOnScroll>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
        >
          {STEPS.map((step, i) => (
            <AnimateOnScroll key={i} variants={fadeUp} delay={i * 0.07}>
              <div className="p-8 md:p-10 h-full" style={{ backgroundColor: PALETTE.ocean }}>
                <span
                  className="text-[11px] uppercase tracking-[0.2em] mb-4 block"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
                >
                  Step {step.n}
                </span>
                <h3
                  className="text-xl mb-4 text-white"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[15px] leading-[1.85]"
                  style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.65)" }}
                >
                  {step.body}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── VIDEO BREAK ──────────────────────────────────────────── */
function ImageBreak() {
  return (
    <section className="relative overflow-hidden" style={{ height: "65vh" }}>
      <video
        src="/manus-storage/Edits_Bocas_horizontal_20260319_134622_e1a263ba.mov"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full h-full object-cover object-center"
        style={{ transition: "transform 700ms ease-in-out" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(11,79,94,0.6) 100%)" }}
      />
    </section>
  );
}

/* ── WHAT MAKES IT UNIQUE ─────────────────────────────────── */
function WhatMakesItUnique() {
  return (
    <section className="py-20 md:py-32 px-8 md:px-16 lg:px-24" style={{ backgroundColor: PALETTE.light }}>
      <div className="max-w-6xl">
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="uppercase tracking-[0.28em] text-[11px] mb-5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
          >
            What Sets This Apart
          </p>
          <h2
            className="text-3xl md:text-4xl mb-16 leading-[1.1]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#1A0A00" }}
          >
            Two Things That Truly Differentiate This Program
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {[
            {
              num: "I",
              title: "Artificial Reef Architecture",
              body: "Most coral restoration programs work with whatever degraded reef structure already exists. Caribbean Coral Restoration builds their own: purpose-designed artificial reef structures installed at restoration sites before any coral is outplanted. This means the foundation is always stable, clean, and optimized for coral attachment and fish habitat. It is a fundamentally different approach, and it is why the program has been able to operate three active sites simultaneously in the bay.",
            },
            {
              num: "II",
              title: "Climate-Resilient Genetics",
              body: "The coral fragments used in this program are not randomly selected. They are chosen specifically because they have already survived bleaching events, specimens that demonstrate natural resilience to elevated water temperatures. By cloning and propagating these individuals, the program is selecting for the genetic traits that give coral the best chance in a warming ocean. It is restoration designed for the climate reality we are already living in, not the one we wish we had.",
            },
          ].map((item, i) => (
            <AnimateOnScroll key={i} variants={fadeUp} delay={i * 0.1}>
              <div>
                <span
                  className="text-4xl md:text-5xl mb-4 block"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.divider }}
                >
                  {item.num}
                </span>
                <h3
                  className="text-2xl mb-5"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#1A0A00" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[16px] leading-[1.9]"
                  style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
                >
                  {item.body}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── GUEST EXPERIENCE ─────────────────────────────────────── */
function GuestExperience() {
  return (
    <section className="grid md:grid-cols-2" style={{ minHeight: "520px" }}>
      {/* Text left */}
      <div
        className="flex flex-col justify-center px-10 md:px-16 py-16 order-2 md:order-1"
        style={{ backgroundColor: PALETTE.sand }}
      >
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="uppercase tracking-[0.28em] text-[11px] mb-5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
          >
            Your Role
          </p>
          <h2
            className="text-2xl md:text-3xl mb-6 leading-[1.2]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#1A0A00" }}
          >
            What Guests Experience
          </h2>
          <p
            className="text-[15px] md:text-[16px] leading-[1.85] mb-5"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            Guests at Nayara Bocas del Toro can participate directly in the restoration program. Led by our team and Caribbean Coral Restoration's marine biologists, the experience takes you beneath the surface of the bay to the active restoration sites, where you will see the artificial reef structures, coral fragments in various stages of growth, and the marine life that has already returned.
          </p>
          <p
            className="text-[15px] md:text-[16px] leading-[1.85] mb-5"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            Participants learn to identify coral species, understand the science of bleaching and resilience, and in some sessions assist with outplanting coral fragments onto the structures. It is a rare opportunity to contribute something real and lasting to a place you have chosen to visit.
          </p>
          <p
            className="text-[15px] md:text-[16px] leading-[1.85]"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            No prior diving experience is required for snorkeling sessions. For certified divers, deeper reef monitoring dives are available. Both are intimate, small groups only, to minimize impact on the restoration sites. Arrange through the resort concierge.
          </p>
        </AnimateOnScroll>
      </div>
      {/* Image right */}
      <div className="overflow-hidden order-1 md:order-2" style={{ minHeight: "380px" }}>
        <img
          src={`${CDN}/bocas-resort-aerial-sunset_d536b07d.jpg`}
          alt="Aerial sunset view of Nayara Bocas del Toro resort on the water"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          style={{ minHeight: "380px", transition: "transform 700ms ease-in-out" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
        />
      </div>
    </section>
  );
}


/* ── CLOSING CTA ──────────────────────────────────────────── */
function ClosingCTA() {
  return (
    <section className="relative overflow-hidden" style={{ height: "70vh" }}>
      <img
        src={`${CDN}/bocas-aerial-full-resort_d27193e4.jpg`}
        alt="Aerial view of Nayara Bocas del Toro full resort on the private island"
        className="w-full h-full object-cover object-center"
        loading="lazy"
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
            Join the Restoration Effort
          </h2>
          <p
            className="text-[16px] md:text-[18px] leading-relaxed max-w-xl mx-auto mb-10"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.82)" }}
          >
            Every guest at Nayara Bocas del Toro has the opportunity to contribute to the ocean habitat's recovery. Arrange your restoration experience through our concierge.
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
              Caribbean Coral Restoration ↗
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
