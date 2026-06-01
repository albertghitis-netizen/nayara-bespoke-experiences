/*
 * BOCAS DEL TORO — OCEAN HABITAT RESTORATION
 * Editorial landing page: the crisis, the response, the science, the invitation.
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
      <TheNumbers />
      <TheCrisis />
      <TheResponse />
      <VideoBreak />
      <HowItWorks />
      <WhatMakesItDifferent />
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
            "linear-gradient(to bottom, rgba(11,79,94,0.15) 0%, rgba(11,79,94,0.5) 50%, rgba(11,79,94,0.9) 100%)",
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
          Bocas del Toro, Panama
        </motion.p>

        <TextReveal as="h1" delay={0.45}>
          <span
            className="text-white text-4xl md:text-6xl lg:text-[5.5rem] leading-[1.02] tracking-wide"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Building a City Beneath the Sea
          </span>
        </TextReveal>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: EASE_CINEMATIC }}
          className="mt-6 text-lg md:text-xl leading-relaxed max-w-2xl"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400, color: "rgba(255,255,255,0.82)" }}
        >
          First you lay the foundations. Then the residents arrive: fish, crustaceans, invertebrates. Life fills the city because the city is worth living in. And then the permanent residents settle. Coral. They cannot leave. They are the city itself.
        </motion.p>
      </div>
    </section>
  );
}

/* ── THE NUMBERS ─────────────────────────────────────────── */
function TheNumbers() {
  const stats = [
    { value: "500+", label: "Coral Fragments Outplanted" },
    { value: "3", label: "Active Restoration Sites" },
    { value: "12", label: "Ongoing Research Projects" },
    { value: "80%", label: "Caribbean Reef Decline (50 yrs)" },
  ];

  return (
    <section style={{ backgroundColor: PALETTE.ocean }}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <AnimateOnScroll key={i} variants={fadeUp} delay={i * 0.06}>
            <div className="flex flex-col items-center justify-center text-center py-12 px-6 border-r border-white/5 last:border-r-0">
              <span
                className="text-3xl md:text-4xl mb-2"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.accent }}
              >
                {s.value}
              </span>
              <span
                className="text-[11px] uppercase tracking-[0.1em] leading-[1.5]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "rgba(255,255,255,0.55)" }}
              >
                {s.label}
              </span>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}

/* ── THE CRISIS ──────────────────────────────────────────── */
function TheCrisis() {
  return (
    <section className="py-24 md:py-36 px-8 md:px-16 lg:px-24" style={{ backgroundColor: PALETTE.sand }}>
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_360px] gap-16 items-start">
        {/* Text */}
        <div>
          <AnimateOnScroll variants={fadeUp}>
            <p
              className="uppercase tracking-[0.28em] text-[11px] mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
            >
              The Context
            </p>
            <h2
              className="text-3xl md:text-5xl mb-10 leading-[1.08]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.muted }}
            >
              The Reefs Are Dying
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.08}>
            <p
              className="text-[17px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              In 2024, NOAA declared the fourth global mass coral bleaching event. The most widespread in recorded history. Every ocean basin, simultaneously.
            </p>
            <p
              className="text-[17px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              When water temperatures rise even slightly above normal for too long, corals expel the symbiotic algae that provide 90% of their energy. They turn white. If temperatures do not return to normal quickly, they starve.
            </p>
            <p
              className="text-[17px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              The Caribbean has lost <strong>80% of its reef cover in fifty years</strong>. Six species are now listed as threatened under the U.S. Endangered Species Act. Staghorn and Elkhorn coral, once the dominant reef-builders across the entire region, are functionally gone from most sites.
            </p>
            <p
              className="text-[17px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Coral reefs cover less than 1% of the ocean floor. They support 25% of all marine species and the livelihoods of more than a billion people.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Infographic */}
        <AnimateOnScroll variants={fadeUp} delay={0.12}>
          <div className="sticky top-24">
            <img
              src="/manus-storage/coral-crisis-infographic_4232d5fa.png"
              alt="The Global Coral Crisis: share of reefs experiencing bleaching-level heat stress by event (1998: 20%, 2010: 35%, 2014-2017: 56%, 2023-present: 54%). Source: NOAA Coral Reef Watch 2024."
              className="w-full h-auto rounded-sm"
              loading="lazy"
            />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ── THE RESPONSE ────────────────────────────────────────── */
function TheResponse() {
  return (
    <section className="grid md:grid-cols-2" style={{ minHeight: "560px" }}>
      {/* Image */}
      <div className="overflow-hidden" style={{ minHeight: "400px" }}>
        <img
          src={`${CDN}/bocas-aerial-villas-mangroves_9d5e94f5.jpg`}
          alt="Aerial view of Nayara Bocas del Toro overwater villas surrounded by mangroves"
          className="w-full h-full object-cover"
          loading="lazy"
          style={{ minHeight: "400px", objectPosition: "center 40%" }}
        />
      </div>
      {/* Text */}
      <div
        className="flex flex-col justify-center px-10 md:px-16 py-16"
        style={{ backgroundColor: PALETTE.light }}
      >
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="uppercase tracking-[0.28em] text-[11px] mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
          >
            The Partnership
          </p>
          <h2
            className="text-2xl md:text-3xl mb-6 leading-[1.15]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.muted }}
          >
            Caribbean Coral Restoration
          </h2>
          <p
            className="text-[16px] leading-[1.85] mb-5"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            In 2022, Nayara Bocas del Toro partnered with the <strong>Caribbean Coral Restoration Center</strong>, a 501(c)(3) nonprofit on Isla Solarte. Their approach is fundamentally different: they do not work with whatever degraded reef remains. They build entirely new habitat from the ground up.
          </p>
          <p
            className="text-[16px] leading-[1.85] mb-5"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            The center was founded by <strong>Doug Marcy</strong>, who first dove near West Palm Beach in 1972 and decades later watched entire reef systems in Bocas collapse within months. He built the center from scratch, combining structural engineering, marine chemistry, and habitat geometry.
          </p>
          <blockquote
            className="mt-6 pl-5 border-l-2 text-lg md:text-xl leading-[1.5] italic"
            style={{
              borderColor: PALETTE.accent,
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              color: PALETTE.muted,
            }}
          >
            "The ocean still remembers how to heal. Our responsibility is to give it that chance."
          </blockquote>
          <p
            className="mt-3 text-[12px] tracking-[0.08em] uppercase"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.teal }}
          >
            Doug Marcy, Founder
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ── VIDEO BREAK ─────────────────────────────────────────── */
function VideoBreak() {
  return (
    <section className="relative overflow-hidden" style={{ height: "60vh" }}>
      <video
        src="/manus-storage/Edits_Bocas_horizontal_20260319_134622_e1a263ba.mov"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full h-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(11,79,94,0.5) 100%)" }}
      />
    </section>
  );
}

/* ── HOW IT WORKS ────────────────────────────────────────── */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Find the Survivors",
      body: "Teams search the archipelago for coral that has already survived bleaching. Natural resilience. Genetic advantage.",
    },
    {
      n: "02",
      title: "Clone and Grow",
      body: "Resilient fragments are cloned in the land-water nursery on Isla Solarte. Protected during their most vulnerable phase.",
    },
    {
      n: "03",
      title: "Build the Foundation",
      body: "Artificial reef structures are constructed on land from environmentally safe materials. Purpose-designed for coral attachment and fish habitat.",
    },
    {
      n: "04",
      title: "Install and Outplant",
      body: "Structures go in at three active sites in the bay. Nursery-grown coral is outplanted onto stable, clean surfaces.",
    },
    {
      n: "05",
      title: "Monitor",
      body: "Every site is tracked for coral growth, fish colonization, and ecosystem health. Twelve research projects running simultaneously.",
    },
    {
      n: "06",
      title: "Scale",
      body: "Twenty-five community partners. Schools, fishing cooperatives, neighboring hotels. The goal: reef restoration across the entire archipelago.",
    },
  ];

  return (
    <section style={{ backgroundColor: PALETTE.ocean }}>
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-28">
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="uppercase tracking-[0.28em] text-[11px] mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
          >
            The Process
          </p>
          <h2
            className="text-3xl md:text-4xl mb-16 text-white leading-[1.1]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Six Steps to a Living Reef
          </h2>
        </AnimateOnScroll>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
        >
          {steps.map((step, i) => (
            <AnimateOnScroll key={i} variants={fadeUp} delay={i * 0.06}>
              <div className="p-8 md:p-10 h-full" style={{ backgroundColor: PALETTE.ocean }}>
                <span
                  className="text-[11px] uppercase tracking-[0.2em] mb-3 block"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
                >
                  {step.n}
                </span>
                <h3
                  className="text-xl mb-3 text-white"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[15px] leading-[1.8]"
                  style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.6)" }}
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

/* ── WHAT MAKES IT DIFFERENT ─────────────────────────────── */
function WhatMakesItDifferent() {
  return (
    <section className="py-24 md:py-36 px-8 md:px-16 lg:px-24" style={{ backgroundColor: PALETTE.sand }}>
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="uppercase tracking-[0.28em] text-[11px] mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
          >
            The Difference
          </p>
          <h2
            className="text-3xl md:text-4xl mb-16 leading-[1.1]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.muted }}
          >
            Two Things No One Else Is Doing
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-16">
          <AnimateOnScroll variants={fadeUp} delay={0.05}>
            <div>
              <span
                className="text-5xl mb-4 block"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.divider }}
              >
                I
              </span>
              <h3
                className="text-2xl mb-4"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.muted }}
              >
                They Build the Reef First
              </h3>
              <p
                className="text-[16px] leading-[1.9]"
                style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
              >
                Most programs transplant coral onto whatever broken substrate exists. Caribbean Coral Restoration constructs purpose-built artificial reef structures on land, then installs them. The foundation is always stable, clean, and optimized. That is why they can operate three sites simultaneously.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.1}>
            <div>
              <span
                className="text-5xl mb-4 block"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.divider }}
              >
                II
              </span>
              <h3
                className="text-2xl mb-4"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.muted }}
              >
                They Select for the Future
              </h3>
              <p
                className="text-[16px] leading-[1.9]"
                style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
              >
                Every coral fragment in this program has already survived a bleaching event. Natural resilience. Genetic advantage. By cloning these individuals, they are selecting for the traits that give coral the best chance in a warming ocean. Restoration designed for the climate we have, not the one we wish we had.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

/* ── GUEST EXPERIENCE ────────────────────────────────────── */
function GuestExperience() {
  return (
    <section className="grid md:grid-cols-2" style={{ minHeight: "520px" }}>
      {/* Text */}
      <div
        className="flex flex-col justify-center px-10 md:px-16 py-16 order-2 md:order-1"
        style={{ backgroundColor: PALETTE.light }}
      >
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="uppercase tracking-[0.28em] text-[11px] mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
          >
            Your Role
          </p>
          <h2
            className="text-2xl md:text-3xl mb-6 leading-[1.15]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.muted }}
          >
            Dive In. Literally.
          </h2>
          <p
            className="text-[16px] leading-[1.85] mb-5"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            Guests at Nayara Bocas del Toro can participate directly. Led by our team and Caribbean Coral Restoration's marine biologists, you go beneath the surface to the active restoration sites. You see the structures, the coral in various stages of growth, and the marine life that has already returned.
          </p>
          <p
            className="text-[16px] leading-[1.85] mb-5"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            Some sessions include outplanting coral fragments onto the structures yourself. A rare opportunity to contribute something real and lasting to a place you chose to visit.
          </p>
          <p
            className="text-[16px] leading-[1.85]"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
          >
            No prior diving experience required for snorkeling sessions. Certified divers can join deeper reef monitoring dives. Small groups only. Arrange through the concierge.
          </p>
        </AnimateOnScroll>
      </div>
      {/* Image */}
      <div className="overflow-hidden order-1 md:order-2" style={{ minHeight: "380px" }}>
        <img
          src={`${CDN}/bocas-resort-aerial-sunset_d536b07d.jpg`}
          alt="Aerial sunset view of Nayara Bocas del Toro"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          style={{ minHeight: "380px" }}
        />
      </div>
    </section>
  );
}

/* ── CLOSING CTA ─────────────────────────────────────────── */
function ClosingCTA() {
  return (
    <section className="relative overflow-hidden" style={{ height: "70vh" }}>
      <img
        src={`${CDN}/bocas-aerial-full-resort_d27193e4.jpg`}
        alt="Aerial view of Nayara Bocas del Toro"
        className="w-full h-full object-cover object-center"
        loading="lazy"
      />
      <div
        className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center"
        style={{ background: "rgba(11,79,94,0.7)" }}
      >
        <AnimateOnScroll variants={fadeUp}>
          <h2
            className="text-3xl md:text-5xl text-white mb-5 max-w-2xl mx-auto leading-[1.08]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Join the Effort
          </h2>
          <p
            className="text-[16px] md:text-[18px] leading-relaxed max-w-lg mx-auto mb-10"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.8)" }}
          >
            Every guest has the opportunity to contribute to the ocean's recovery.
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
                border: "1px solid rgba(255,255,255,0.4)",
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
