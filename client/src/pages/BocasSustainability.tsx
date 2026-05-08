/*
 * BOCAS DEL TORO — CORAL REEF RESTORATION
 * Definitive editorial page: the global crisis, the science, the partnership,
 * the program, and how guests participate.
 * Partner: Caribbean Coral Restoration Center (loveforthesea.com)
 * Real photos only. No AI-generated imagery.
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import BlobVideo from "@/components/BlobVideo";
import BrandNavigation from "@/components/BrandNavigation";
import {
  AnimateOnScroll,
  TextReveal,
  fadeUp,
  EASE_CINEMATIC,
} from "@/components/motion";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";
const STORAGE = "/manus-storage";

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

/* ── STATS ──────────────────────────────────────────── */
const STATS = [
  { number: "500+", label: "Coral Fragments\nRestored" },
  { number: "3", label: "Active\nRestoration Sites" },
  { number: "25", label: "Community\nPartners" },
  { number: "12", label: "Research\nProjects" },
  { number: "1,000+", label: "Volunteer Hours\nper Month" },
  { number: "80%", label: "Caribbean Reef\nDecline in 50 Years" },
];

/* ── RESTORATION STEPS ─────────────────────────────────────── */
const STEPS = [
  {
    n: "01",
    title: "Survey & Select",
    body: "Teams scour the Bocas del Toro archipelago for coral specimens that have already survived bleaching events — individuals demonstrating natural resilience to elevated water temperatures.",
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
    body: "The program engages 25 local community partners — schools, fishing cooperatives, and neighboring hotels — with the long-term goal of scaling reef restoration across the entire archipelago.",
  },
];

export default function BocasSustainability() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.sand }}>
      <BrandNavigation pageType="property" hideCenterLabel />

      <Hero />
      <StatsBar />
      <OceanAlarmAndCrisis />
      <BocasContext />
      <ThePartnership />
      <RestorationProcess />
      <ArtificialReefPhoto />
      <WhatMakesItUnique />
      <GuestExperience />
      <EconomicEmpowerment />
      <CommunityWellness />
      <OurInitiatives />
      <CommunityEducation />
      <ClosingCTA />

      <Footer pageType="property" bgColor={PALETTE.ocean} textColor={PALETTE.white} propertyName="Bocas del Toro" />
    </div>
  );
}

/* ── HERO ─────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden w-full" style={{ aspectRatio: "16/9" }}>
      <img
        src="/manus-storage/destination-8-coral-reef_3a82983f.jpeg"
        alt="Vibrant coral reef ecosystem in Bocas del Toro, Panama"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(11,79,94,0.2) 0%, rgba(11,79,94,0.55) 55%, rgba(11,79,94,0.88) 100%)",
        }}
      />

      <div className="absolute inset-0 flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-12 md:pb-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE_CINEMATIC }}
          className="uppercase tracking-[0.3em] text-[11px] mb-5"
          style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
        >
          Coral Reef Restoration · Bocas del Toro, Panama
        </motion.p>

        <TextReveal as="h1" delay={0.45}>
          <span
            className="text-white text-4xl md:text-6xl lg:text-[5.5rem] leading-[1.02] tracking-wide"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Rebuilding the Reef
          </span>
        </TextReveal>


      </div>
    </section>
  );
}

/* ── OCEAN ALARM + GLOBAL CRISIS (side by side) ──────────── */
function OceanAlarmAndCrisis() {
  return (
    <section style={{ backgroundColor: PALETTE.sand }}>
      <div className="grid md:grid-cols-2 gap-0">
        {/* LEFT — Why the Ocean Is Sounding the Alarm */}
        <div className="px-8 md:px-14 lg:px-20 py-16 md:py-24">
          <AnimateOnScroll variants={fadeUp}>
            <p
              className="uppercase tracking-[0.28em] text-[11px] mb-5"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
            >
              The Global Context
            </p>
            <h2
              className="text-3xl md:text-4xl mb-10 leading-[1.1]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#1A0A00" }}
            >
              Why the Ocean Is Sounding the Alarm
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variants={fadeUp} delay={0.1}>
            <p className="text-[16px] leading-[1.9] mb-6" style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}>
              The planet's environmental systems are under strain, and nowhere is this more visible than in the ocean. Coral reefs are experiencing unprecedented stress due to rising ocean temperatures, acidification, and land-based pollution.
            </p>
            <p className="text-[16px] leading-[1.9] mb-6" style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}>
              In 2024, the U.S. National Oceanic and Atmospheric Administration confirmed the fourth global coral bleaching event on record, driven by prolonged marine heatwaves affecting reefs across the Atlantic, Pacific, and Indian Oceans.
            </p>
            <p className="text-[16px] leading-[1.9] mb-6" style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}>
              According to NOAA Coral Reef Watch, bleaching-level heat stress has affected more than 80 percent of the world's coral reef area, making this the most widespread bleaching event ever documented.
            </p>
            <p className="text-[16px] leading-[1.9] mb-6" style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}>
              The Intergovernmental Panel on Climate Change reports that at 1.5°C of global warming, coral reefs are expected to decline by 70–90 percent, with losses exceeding 99 percent at 2°C.
            </p>
            <p className="text-[16px] leading-[1.9] mb-10" style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}>
              The ocean absorbs over 90 percent of excess heat trapped by greenhouse gases and roughly one-quarter of global CO₂ emissions — buffering climate impacts while becoming warmer and more acidic.
            </p>
            <blockquote
              className="pl-6 border-l-2 text-lg md:text-xl leading-[1.6] italic"
              style={{ borderColor: PALETTE.accent, fontFamily: "var(--font-display)", fontWeight: 400, color: "#1A0A00" }}
            >
              This is the context in which One Ocean exists. Not as an abstract idea, but as a response to a planet whose water systems are sending increasingly clear signals of stress.
            </blockquote>
          </AnimateOnScroll>
        </div>

        {/* RIGHT — The Fourth Mass Bleaching Event */}
        <div className="flex flex-col" style={{ backgroundColor: PALETTE.light }}>
          {/* Large bleaching image */}
          <div className="overflow-hidden" style={{ minHeight: "420px", flex: "0 0 auto" }}>
            <img
              src="/manus-storage/pasted_file_oSevgU_image_7636ecdb.png"
              alt="Bleached white staghorn coral — a stark image of coral bleaching in the Caribbean"
              className="w-full h-full object-cover object-center"
              style={{ minHeight: "420px" }}
              loading="lazy"
            />
          </div>
          <p className="px-8 pt-3 pb-0 text-[11px] tracking-[0.06em] uppercase" style={{ fontFamily: "var(--font-body)", color: "rgba(26,10,0,0.35)" }}>
            Bleached staghorn coral, Caribbean
          </p>
          {/* Bleaching text */}
          <div className="px-8 md:px-14 py-10 md:py-16">
            <AnimateOnScroll variants={fadeUp}>
              <p
                className="uppercase tracking-[0.28em] text-[11px] mb-5"
                style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
              >
                The Crisis
              </p>
              <h2
                className="text-3xl md:text-4xl mb-8 leading-[1.1]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#1A0A00" }}
              >
                The Fourth Mass Bleaching Event
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll variants={fadeUp} delay={0.1}>
              <p className="text-[16px] leading-[1.9] mb-6" style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}>
                In 2024, NOAA declared the world's fourth global mass coral bleaching event on record — the most widespread in history, affecting reefs across the Atlantic, Pacific, and Indian Oceans simultaneously. The trigger: sea surface temperatures rising to levels coral cannot survive.
              </p>
              <p className="text-[16px] leading-[1.9] mb-6" style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}>
                Coral bleaching occurs when water temperatures rise even slightly above normal for an extended period. Corals expel the symbiotic algae — zooxanthellae — that provide up to 90% of their energy. Without them, the coral turns white and, if temperatures don't return to normal quickly, starves to death.
              </p>
              <p className="text-[16px] leading-[1.9] mb-6" style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}>
                The Caribbean has been among the hardest hit. Caribbean reefs have declined by approximately <strong>80% over the last fifty years</strong> — driven by bleaching, ocean acidification, agricultural runoff, coastal development, and overfishing.
              </p>
              <p className="text-[16px] leading-[1.9]" style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}>
                Over 50% of the world's coral reefs have been lost since the 1950s. Coral reefs cover less than 1% of the ocean floor but support an estimated 25% of all marine species — and the livelihoods of more than a billion people.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── STATS BAR ──────────────────────────────────────────── */
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

/* ── BOCAS CONTEXT ────────────────────────────────────────── */
function BocasContext() {
  return (
    <section className="grid md:grid-cols-2" style={{ minHeight: "520px" }}>
      {/* Image left */}
      <div className="overflow-hidden" style={{ minHeight: "380px" }}>
        <img
          src={`${STORAGE}/NayarabocasdelToro-LivLaw-DJI_0278-byBriceFerreStudio_60a188a3.jpg`}
          alt="Aerial view of Bocas del Toro archipelago islands and coral reefs, by Brice Ferre Studio"
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
            A Reef Worth Fighting For
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
            But monitoring data from 2023–2024 shows increasing dead coral and bleaching trends across the archipelago. The same forces driving global reef collapse are at work here — and the window for intervention is narrowing.
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
            In 2022, Nayara Bocas del Toro partnered with the <strong>Caribbean Coral Restoration Center</strong> — a 501(c)(3) nonprofit based on Isla Solarte in Bocas del Toro. Their mission is to be cultivators and guardians of flourishing ocean ecosystems. Their approach is fundamentally different from most restoration programs in the Caribbean.
          </p>
          <p
            className="text-[17px] md:text-[19px] leading-[1.9] mb-7"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            Most coral restoration programs work with whatever degraded reef structure already exists — transplanting coral fragments directly onto broken, bleached, or algae-covered substrate. Caribbean Coral Restoration takes a different approach: they <strong>build their own artificial reef structures from scratch</strong>, constructed on land and then installed at restoration sites before any coral is outplanted. The foundation is always stable, clean, and purpose-designed for coral attachment and fish habitat.
          </p>
          <p
            className="text-[17px] md:text-[19px] leading-[1.9] mb-7"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            The coral they grow isn't randomly selected either. Their team scours the Bocas archipelago specifically for specimens that have already survived bleaching events — individuals demonstrating natural resilience to extreme water temperatures. These are cloned, grown in a land-water nursery on Isla Solarte, and outplanted onto the artificial structures. It is a form of assisted evolution: selecting for the genetic traits that give coral the best chance in a warming ocean.
          </p>
          <p
            className="text-[17px] md:text-[19px] leading-[1.9]"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            The program takes a holistic view of reef health — not just planting coral, but rebuilding fish habitat, managing the surrounding ecosystem, and creating the conditions in which a reef can sustain itself. Three active restoration sites are currently operating in the bay, with 500+ coral fragments successfully restored and 12 ongoing research projects tracking long-term outcomes.
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
            "Our main goal is to set an example — and help other local hotels start coral reef restoration programs of their own."
          </blockquote>
          <p
            className="mt-4 text-[13px] tracking-[0.08em] uppercase"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            — Nayara Bocas del Toro
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
            The Restoration Process
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

/* ── ARTIFICIAL REEF PHOTO ───────────────────────────────── */
function ArtificialReefPhoto() {
  return (
    <section className="grid md:grid-cols-2" style={{ minHeight: "520px" }}>
      {/* Image left */}
      <div className="overflow-hidden" style={{ minHeight: "400px" }}>
        <img
          src={`${STORAGE}/placingartificalreef_0799c415.webp`}
          alt="Divers placing an artificial reef structure on the seafloor in Bocas del Toro"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          style={{ minHeight: "400px", transition: "transform 700ms ease-in-out" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
        />
      </div>
      {/* Text right */}
      <div
        className="flex flex-col justify-center px-10 md:px-16 py-16"
        style={{ backgroundColor: PALETTE.ocean }}
      >
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="uppercase tracking-[0.28em] text-[11px] mb-5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
          >
            Step 04 in Action
          </p>
          <h2
            className="text-2xl md:text-3xl mb-6 leading-[1.2] text-white"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Installing the Foundation
          </h2>
          <p
            className="text-[15px] md:text-[16px] leading-[1.85] mb-5"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.75)" }}
          >
            Caribbean Coral Restoration's divers lower an artificial reef structure into position on the seafloor of Bocas del Toro bay. Each structure is built on land from environmentally friendly materials, designed to mimic natural reef architecture, and installed before any coral is outplanted.
          </p>
          <p
            className="text-[15px] md:text-[16px] leading-[1.85]"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.75)" }}
          >
            The result is a stable, clean foundation that gives each coral fragment the best possible start. Within months of installation, fish and invertebrates begin colonizing the structure — long before the coral itself is fully established.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ── IMAGE BREAK ──────────────────────────────────────────── */
function ImageBreak() {
  return (
    <section className="relative overflow-hidden" style={{ height: "65vh" }}>
      <img
        src="/manus-storage/Paddleboard1_cf66a34d.jpeg"
        alt="Woman paddleboarding on the turquoise waters of Bocas del Toro with overwater bungalows in the background"
        className="w-full h-full object-cover object-center"
        loading="lazy"
        style={{ transition: "transform 700ms ease-in-out" }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
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
              body: "Most coral restoration programs work with whatever degraded reef structure already exists. Caribbean Coral Restoration builds their own — purpose-designed artificial reef structures installed at restoration sites before any coral is outplanted. This means the foundation is always stable, clean, and optimized for coral attachment and fish habitat. It is a fundamentally different approach, and it is why the program has been able to operate three active sites simultaneously in the bay.",
            },
            {
              num: "II",
              title: "Climate-Resilient Genetics",
              body: "The coral fragments used in this program are not randomly selected. They are chosen specifically because they have already survived bleaching events — specimens that demonstrate natural resilience to elevated water temperatures. By cloning and propagating these individuals, the program is selecting for the genetic traits that give coral the best chance in a warming ocean. It is restoration designed for the climate reality we are already living in, not the one we wish we had.",
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
            Guests at Nayara Bocas del Toro can participate directly in the restoration program. Led by our team and Caribbean Coral Restoration's marine biologists, the experience takes you beneath the surface of the bay to the active restoration sites — where you will see the artificial reef structures, coral fragments in various stages of growth, and the marine life that has already returned.
          </p>
          <p
            className="text-[15px] md:text-[16px] leading-[1.85] mb-5"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            Participants learn to identify coral species, understand the science of bleaching and resilience, and — in some sessions — assist with outplanting coral fragments onto the structures. It is a rare opportunity to contribute something real and lasting to a place you have chosen to visit.
          </p>
          <p
            className="text-[15px] md:text-[16px] leading-[1.85]"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            No prior diving experience is required for snorkeling sessions. For certified divers, deeper reef monitoring dives are available. Both are intimate — small groups only — to minimize impact on the restoration sites. Arrange through the resort concierge.
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

/* ── COMMUNITY & EDUCATION ────────────────────────────────── */
function CommunityEducation() {
  return (
    <section className="py-20 md:py-32 px-8 md:px-16 lg:px-24" style={{ backgroundColor: PALETTE.ocean }}>
      <div className="max-w-3xl">
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="uppercase tracking-[0.28em] text-[11px] mb-5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
          >
            Beyond the Resort
          </p>
          <h2
            className="text-3xl md:text-4xl mb-10 leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Community &amp; Education
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <p
            className="text-[17px] md:text-[19px] leading-[1.9] mb-7"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.75)" }}
          >
            The program's 25 community partners include local schools, fishing cooperatives, and neighboring businesses across the Bocas del Toro archipelago. Caribbean Coral Restoration runs education and training programs that teach reef ecology, restoration techniques, and marine conservation to local students and community members — building the knowledge base that will sustain this work long after any single partnership ends.
          </p>
          <p
            className="text-[17px] md:text-[19px] leading-[1.9] mb-7"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.75)" }}
          >
            For local fishing communities, healthy reefs are not an abstraction — they are the foundation of livelihoods. As marine life returns to the restoration sites, the ecological and economic case for reef protection becomes tangible. The program is designed to make reef stewardship a shared value across the archipelago, not just a resort amenity.
          </p>
          <p
            className="text-[17px] md:text-[19px] leading-[1.9]"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.75)" }}
          >
            The long-term ambition is to scale reef restoration across the entire Bocas del Toro archipelago — establishing a model that other hotels, communities, and governments in the region can replicate. What begins at our bay is meant to spread.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ── ECONOMIC EMPOWERMENT ────────────────────────────── */
function EconomicEmpowerment() {
  return (
    <section className="grid md:grid-cols-2" style={{ minHeight: "520px" }}>
      {/* Image left */}
      <div className="overflow-hidden" style={{ minHeight: "420px" }}>
        <img
          src="/manus-storage/pasted_file_whSa3D_image_c5600b60.webp"
          alt="Spotted cleaner shrimp on coral — biodiversity supporting Caribbean economic empowerment and marine conservation"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          style={{ minHeight: "420px" }}
        />
      </div>
      {/* Text right */}
      <div className="flex flex-col justify-center px-10 md:px-16 py-16" style={{ backgroundColor: PALETTE.sand }}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="uppercase tracking-[0.28em] text-[11px] mb-5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
          >
            Community Impact
          </p>
          <h2
            className="text-3xl md:text-4xl mb-8 leading-[1.1]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#1A0A00" }}
          >
            Economic Empowerment
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <p className="text-[16px] leading-[1.9] mb-6" style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}>
            Ocean damage can be reversed, but there's no switch to flip — recovery takes time and willing participation. It requires education and training directed toward a sustainable future.
          </p>
          <p className="text-[16px] leading-[1.9]" style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}>
            Coral restoration and reef reconstruction demand diverse talents. Unskilled interns learn carpentry, metalworking, electrical and plumbing systems, and water flow management. Our goal: provide skills that increase employment and entrepreneurship possibilities. Along with tangible skills, we're instilling awareness of sustainable marine conservation that will transcend into wide-ranging positive impact.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ── COMMUNITY WELLNESS ───────────────────────────────── */
function CommunityWellness() {
  return (
    <section className="grid md:grid-cols-2" style={{ minHeight: "520px" }}>
      {/* Text left */}
      <div className="flex flex-col justify-center px-10 md:px-16 py-16 order-2 md:order-1" style={{ backgroundColor: PALETTE.light }}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="uppercase tracking-[0.28em] text-[11px] mb-5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
          >
            Community Impact
          </p>
          <h2
            className="text-3xl md:text-4xl mb-8 leading-[1.1]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#1A0A00" }}
          >
            Community Wellness
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <p className="text-[16px] leading-[1.9] mb-6" style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}>
            Traditional harvesting methods far exceed the fisheries' ability to maintain stability. Without serious limits and enforceable Marine Protected Areas, there likely won't be sustainable fisheries in this archipelago. Sustainable subsistence harvest is achievable — but it requires cooperation and coordination.
          </p>
          <p className="text-[16px] leading-[1.9]" style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}>
            Small island communities traditionally have little industry. The sea has provided the main protein source for most residents. Unfortunately, overfishing combined with reef loss has depleted fisheries to the brink of collapse. It can be restored through awareness, education, and participation by the people who will benefit most from what we're demonstrating can be achieved.
          </p>
        </AnimateOnScroll>
      </div>
      {/* Image right */}
      <div className="overflow-hidden order-1 md:order-2" style={{ minHeight: "420px" }}>
        <img
          src="/manus-storage/destination-8-coral-reef_3a82983f.jpeg"
          alt="Vibrant coral reef ecosystem supporting community wellness and sustainable fisheries in Bocas del Toro"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          style={{ minHeight: "420px" }}
        />
      </div>
    </section>
  );
}

/* ── OUR INITIATIVES ────────────────────────────────────── */
function OurInitiatives() {
  return (
    <section className="py-20 md:py-32 px-8 md:px-16 lg:px-24" style={{ backgroundColor: PALETTE.sand }}>
      <div className="max-w-6xl">
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="uppercase tracking-[0.28em] text-[11px] mb-5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
          >
            Our Initiatives
          </p>
          <h2
            className="text-3xl md:text-5xl mb-6 leading-[1.1]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#1A0A00" }}
          >
            Where Purpose Meets Action
          </h2>
          <p className="text-[17px] md:text-[19px] leading-[1.9] mb-16 max-w-3xl" style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}>
            Stationed on the island of Solarte in Bocas Del Toro, Panama, we're advancing reef restoration and rebuilding diverse fish habitats through work that extends far beyond our immediate shoreline. The Bocas Archipelago faces interconnected challenges: overfishing, water pollution, climate change, reef collapse, resource exploitation, economically struggling villages, inconsistent infrastructure, and fragmented oversight. These problems demand thoughtful, coordinated action — and that's exactly what we're building.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {/* Initiative 1 */}
          <AnimateOnScroll variants={fadeUp} delay={0.05}>
            <div>
              <p
                className="uppercase tracking-[0.2em] text-[10px] mb-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: 700, color: PALETTE.accent }}
              >
                01
              </p>
              <h3
                className="text-xl md:text-2xl mb-5 leading-[1.2]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#1A0A00" }}
              >
                Coral Restoration &amp; Habitat Recovery
              </h3>
              <p className="text-[15px] leading-[1.85]" style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}>
                Our coral gene bank facility preserves genetic diversity while our artificial reef program creates critical habitat infrastructure. Each structure we install becomes an anchor point for ecosystem recovery, attracting fish populations and rebuilding the underwater architecture that healthy oceans require.
              </p>
              <p className="text-[15px] leading-[1.85] mt-4" style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}>
                We've learned through crisis and adaptation. The bleaching events that devastated our region taught us to innovate — developing adjustable nursery systems, monitoring protocols, and rescue operations that transform challenges into knowledge we can share with practitioners worldwide.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Initiative 2 */}
          <AnimateOnScroll variants={fadeUp} delay={0.1}>
            <div>
              <p
                className="uppercase tracking-[0.2em] text-[10px] mb-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: 700, color: PALETTE.accent }}
              >
                02
              </p>
              <h3
                className="text-xl md:text-2xl mb-5 leading-[1.2]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#1A0A00" }}
              >
                Community Impact &amp; Education
              </h3>
              <p className="text-[15px] leading-[1.85]" style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}>
                We believe the future of our oceans depends on the next generation. Our Community Impact Events inspire youth and families through hands-on workshops, school partnerships, and interactive field experiences. By collaborating with local and national organizations, we foster environmental stewardship and provide opportunities for young people to actively participate in coral restoration and ocean protection.
              </p>
              <p className="text-[15px] leading-[1.85] mt-4" style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}>
                These events cultivate responsibility and hope, ensuring future generations are equipped to continue this vital work.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Initiative 3 */}
          <AnimateOnScroll variants={fadeUp} delay={0.15}>
            <div>
              <p
                className="uppercase tracking-[0.2em] text-[10px] mb-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: 700, color: PALETTE.accent }}
              >
                03
              </p>
              <h3
                className="text-xl md:text-2xl mb-5 leading-[1.2]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#1A0A00" }}
              >
                Scaling Across the Archipelago
              </h3>
              <p className="text-[15px] leading-[1.85]" style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}>
                The long-term ambition is to establish a replicable model that other hotels, communities, and governments across the region can adopt. What begins at our bay is designed to spread — creating a network of reef restoration sites and trained practitioners throughout the Bocas del Toro archipelago and beyond.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
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
            Join the Restoration
          </h2>
          <p
            className="text-[16px] md:text-[18px] leading-relaxed max-w-xl mx-auto mb-10"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.82)" }}
          >
            Every guest at Nayara Bocas del Toro has the opportunity to contribute to the reef's recovery. Arrange your coral restoration experience through our concierge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/bocas-del-toro"
              className="inline-block px-8 py-4 text-[12px] uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-0.5"
              style={{
                backgroundColor: PALETTE.accent,
                color: PALETTE.ocean,
                fontFamily: "var(--font-body)",
                fontWeight: 700,
              }}
            >
              Explore Bocas del Toro
            </Link>
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
