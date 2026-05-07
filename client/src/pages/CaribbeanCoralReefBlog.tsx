/**
 * CARIBBEAN CORAL REEF RESTORATION
 * Full editorial page about Nayara Bocas del Toro's coral restoration program
 * Partner: Caribbean Coral Restoration Center (loveforthesea.com)
 * Design: Deep ocean teal — editorial, immersive, data-driven
 * Real photos only. No AI-generated imagery.
 */
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import Footer from "@/components/Footer";
import { EnhancedArticleSchema } from "@/components/SEOSchemaEnhanced";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const PALETTE = {
  ocean: "#0B4F5E",
  teal: "#0E6B7E",
  accent: "#3DAFC7",
  light: "#E8F6FA",
  sand: "#F5F0E8",
  text: "#0A3340",
  muted: "#2C6070",
  divider: "#B8DDE8",
  white: "#FFFFFF",
};

const STATS = [
  {
    number: "500+",
    label: "Coral Fragments Restored",
    sub: "Contributing to reef regeneration and marine biodiversity",
  },
  {
    number: "3",
    label: "Active Restoration Sites",
    sub: "Monitored for growth, research, and conservation",
  },
  {
    number: "25",
    label: "Community Partners",
    sub: "Local organizations, schools, and community groups",
  },
  {
    number: "12",
    label: "Research Projects",
    sub: "Studying coral resilience and ecosystem health",
  },
  {
    number: "1,000+",
    label: "Volunteer Hours / Month",
    sub: "Dedicated by our team and community supporters",
  },
  {
    number: "80%",
    label: "Caribbean Reef Decline",
    sub: "Lost over the last 50 years — the crisis that drives our work",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Survey & Select",
    body: "Our team scours the Bocas del Toro archipelago for coral specimens already demonstrating resilience to elevated water temperatures — survivors of past bleaching events.",
  },
  {
    step: "02",
    title: "Clone & Cultivate",
    body: "Resilient coral fragments are cloned and grown in Caribbean Coral Restoration's land-water nursery on Isla Solarte, where they can be monitored and protected during their most vulnerable growth phase.",
  },
  {
    step: "03",
    title: "Build the Foundation",
    body: "Artificial reef structures are constructed on land — environmentally friendly frameworks designed to mimic natural reef architecture and provide immediate habitat for fish and invertebrates.",
  },
  {
    step: "04",
    title: "Install & Outplant",
    body: "Structures are installed at the three active restoration sites in the bay. Nursery-grown coral is then outplanted onto the structures, giving each fragment the stable base it needs to thrive.",
  },
  {
    step: "05",
    title: "Monitor & Research",
    body: "Each site is actively monitored for coral growth, fish colonization, and ecosystem health. Twelve ongoing research projects study coral resilience, bleaching response, and long-term recovery rates.",
  },
  {
    step: "06",
    title: "Expand & Educate",
    body: "The program engages 25 local community partners — schools, fishing cooperatives, and neighboring hotels — with the long-term goal of scaling reef restoration across the entire archipelago.",
  },
];

export default function CaribbeanCoralReefBlog() {
  const [, navigate] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.sand }}>
      <EnhancedArticleSchema
        image={`${CDN}/bocas-aerial-villas-turquoise_858d4570.jpg`}
        headline="Coral Reef Restoration at Nayara Bocas del Toro | Caribbean Coral Restoration"
        description="Nayara Bocas del Toro partners with Caribbean Coral Restoration to rebuild the reefs of the Bocas del Toro archipelago — through artificial reef structures, genetically resilient coral, and guest-led conservation."
        author={{ name: "Nayara Resorts", expertise: ["Sustainable Tourism", "Ocean Conservation"] }}
        datePublished="2024-06-01"
        url="https://nayararesorts.manus.space/blog/caribbean-coral-reef"
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={`${CDN}/bocas-aerial-villas-turquoise_858d4570.jpg`}
          alt="Aerial view of Nayara Bocas del Toro overwater villas above turquoise Caribbean waters"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(11,79,94,0.35) 0%, rgba(11,79,94,0.6) 60%, rgba(11,79,94,0.85) 100%)",
          }}
        />

        {/* Back button */}
        <button
          onClick={() => navigate(-1 as any)}
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
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
          >
            Ocean Conservation · Bocas del Toro, Panama
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 text-white"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Restoring the Reefs
            <br />
            of Bocas del Toro
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed max-w-2xl"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400, color: "rgba(255,255,255,0.85)" }}
          >
            In partnership with Caribbean Coral Restoration, Nayara Bocas del Toro is rebuilding one
            of the Caribbean's most threatened ecosystems — one coral fragment at a time.
          </p>
        </motion.div>
      </section>

      {/* ── BY THE NUMBERS ───────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.ocean }}>
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center uppercase tracking-[0.3em] text-[11px] mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
          >
            The Program at a Glance
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-center text-white mb-16"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Restoration by the Numbers
          </motion.h2>

          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-px"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="p-8 md:p-10 flex flex-col"
                style={{ backgroundColor: PALETTE.ocean }}
              >
                <span
                  className="text-4xl md:text-5xl mb-2"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.accent }}
                >
                  {stat.number}
                </span>
                <span
                  className="text-[13px] uppercase tracking-[0.12em] mb-2 text-white"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                >
                  {stat.label}
                </span>
                <span
                  className="text-[13px] leading-[1.6]"
                  style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.6)" }}
                >
                  {stat.sub}
                </span>
              </motion.div>
            ))}
          </div>

          <p
            className="text-center text-[12px] mt-6"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.4)" }}
          >
            Sources: Caribbean Coral Restoration Center (loveforthesea.com) · NOAA Coral Reef Watch
            2024
          </p>
        </div>
      </section>

      {/* ── WHY NOW ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.sand }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className="uppercase tracking-[0.3em] text-[11px] mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
            >
              The Crisis
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.ocean }}
            >
              Why Now — and Why Here
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              In 2024, NOAA declared the world's fourth global mass coral bleaching event on record.
              Caribbean reefs have declined by approximately 80% over the last fifty years. Six
              Caribbean coral species — including Staghorn and Elkhorn coral — are now listed as
              threatened under the U.S. Endangered Species Act.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Bocas del Toro sits at the heart of this crisis. The archipelago's reefs — once among
              the most biodiverse in the Caribbean — have suffered from rising sea surface
              temperatures, agricultural runoff, and decades of unmanaged tourism. The question was
              never whether to act, but how to act meaningfully.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              When we built Nayara Bocas del Toro — entirely off-grid, on stilts, after five
              independent environmental studies — we made a commitment to the bay we call home. Our
              coral restoration program with Caribbean Coral Restoration is the most direct expression
              of that commitment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SPLIT IMAGE + QUOTE ──────────────────────────────────── */}
      <section className="grid md:grid-cols-2" style={{ minHeight: "500px" }}>
        <div className="overflow-hidden" style={{ minHeight: "400px" }}>
          <img
            src="/manus-storage/Paddleboard1_cf66a34d.jpeg"
            alt="Woman paddleboarding on the turquoise waters of Bocas del Toro with overwater bungalows in the background"
            className="w-full h-full object-cover object-center"
            loading="lazy"
            style={{ minHeight: "400px", transition: "transform 700ms ease-in-out" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
          />
        </div>
        <div
          className="flex flex-col justify-center px-10 md:px-16 py-16"
          style={{ backgroundColor: PALETTE.teal }}
        >
          <p
            className="text-[11px] uppercase tracking-[0.3em] mb-6"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
          >
            Our Commitment
          </p>
          <blockquote
            className="text-2xl md:text-3xl leading-[1.4] text-white mb-8"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            "Our main goal is to set an example — and help other local hotels start coral reef
            restoration programs of their own."
          </blockquote>
          <p
            className="text-[14px] leading-[1.7]"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.75)" }}
          >
            — Nayara Bocas del Toro
          </p>
        </div>
      </section>

      {/* ── THE PARTNERSHIP ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.light }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className="uppercase tracking-[0.3em] text-[11px] mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
            >
              The Partnership
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.ocean }}
            >
              Caribbean Coral Restoration
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              In 2022, we partnered with the{" "}
              <strong>Caribbean Coral Restoration Center</strong> — a locally-based nonprofit
              stationed on Isla Solarte in Bocas del Toro. Their mission: to be cultivators and
              guardians of flourishing ocean ecosystems. Their approach is unlike most restoration
              programs in the Caribbean.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Rather than simply transplanting coral fragments onto existing degraded reef, Caribbean
              Coral Restoration builds their own{" "}
              <strong>artificial reef structures</strong> — constructed on land, installed at
              restoration sites, and then seeded with coral grown in their land-water nursery on Isla
              Solarte. This creates a stable, purpose-built foundation for reef recovery that doesn't
              depend on the health of what's already there.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              The coral they grow isn't randomly selected. Their team scours the Bocas archipelago for
              specimens already demonstrating resilience to extreme water temperatures — corals that
              have survived bleaching events. These are cloned, grown in the nursery, and outplanted
              onto the artificial structures. It's a form of assisted evolution: selecting for the
              traits that give coral the best chance in a warming ocean.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── RESTORATION PROCESS ──────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.sand }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p
              className="uppercase tracking-[0.3em] text-[11px] mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
            >
              How It Works
            </p>
            <h2
              className="text-3xl md:text-4xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.ocean }}
            >
              The Restoration Process
            </h2>
          </motion.div>

          <div
            className="grid md:grid-cols-2 gap-px"
            style={{ backgroundColor: PALETTE.divider }}
          >
            {STEPS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="p-8 md:p-10"
                style={{ backgroundColor: PALETTE.sand }}
              >
                <span
                  className="text-[11px] uppercase tracking-[0.2em] mb-3 block"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
                >
                  Step {item.step}
                </span>
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.ocean }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[15px] leading-[1.8]"
                  style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
                >
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AERIAL IMAGE BREAK ───────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: "60vh" }}>
        <img
          src={`${CDN}/bocas-aerial-villas-mangroves_9d5e94f5.jpg`}
          alt="Aerial view of Nayara Bocas del Toro overwater villas surrounded by mangroves and turquoise water"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          style={{ transition: "transform 700ms ease-in-out" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, transparent 40%, rgba(11,79,94,0.7) 100%)",
          }}
        />
        <div className="absolute bottom-10 left-8 md:left-16 right-8 md:right-16">
          <p
            className="text-[13px] leading-[1.6] max-w-xl"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.85)" }}
          >
            Nayara Bocas del Toro was built entirely off-grid on a private island — on stilts,
            preserving the native mangroves and coral reefs below.
          </p>
        </div>
      </section>

      {/* ── GUEST EXPERIENCE ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.light }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className="uppercase tracking-[0.3em] text-[11px] mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
            >
              Your Role
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.ocean }}
            >
              What Guests Experience
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Guests at Nayara Bocas del Toro can participate directly in the restoration program. Led
              by our team and Caribbean Coral Restoration's marine biologists, the experience takes you
              beneath the surface of the bay to the active restoration sites — where you'll see the
              artificial reef structures, the coral fragments in various stages of growth, and the
              marine life that has already returned.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Participants learn to identify coral species, understand the science of bleaching and
              resilience, and — in some sessions — assist with outplanting coral fragments onto the
              structures. It's a rare opportunity to contribute something real and lasting to a place
              you've chosen to visit.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              The program is available to all guests and can be arranged through the resort's
              concierge. No prior diving experience is required for snorkeling sessions. For certified
              divers, deeper reef monitoring dives are available. Both experiences are intimate — small
              groups only — to minimize impact on the restoration sites.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT MAKES IT UNIQUE ─────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.ocean }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p
              className="uppercase tracking-[0.3em] text-[11px] mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
            >
              What Sets This Apart
            </p>
            <h2
              className="text-3xl md:text-4xl text-white"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Two Things That Truly Differentiate This Program
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Artificial Reef Architecture",
                body: "Most coral restoration programs work with whatever degraded reef structure already exists. Caribbean Coral Restoration builds their own — purpose-designed artificial reef structures installed at restoration sites before any coral is outplanted. This means the foundation is always stable, clean, and optimized for coral attachment and fish habitat. It's a fundamentally different approach, and it's why the program has been able to operate three active sites simultaneously.",
              },
              {
                title: "Climate-Resilient Genetics",
                body: "The coral fragments used in this program aren't random. They're selected specifically because they have already survived bleaching events — specimens that demonstrate natural resilience to elevated water temperatures. By cloning and propagating these individuals, the program is essentially selecting for the genetic traits that give coral the best chance in a warming ocean. It's restoration designed for the climate reality we're already living in, not the one we wish we had.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 md:p-10"
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <h3
                  className="text-xl mb-4 text-white"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[15px] leading-[1.85]"
                  style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.72)" }}
                >
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITY & EDUCATION ────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.sand }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className="uppercase tracking-[0.3em] text-[11px] mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.teal }}
            >
              Beyond the Resort
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.ocean }}
            >
              Community &amp; Education
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              The program's 25 community partners include local schools, fishing cooperatives, and
              neighboring businesses across the Bocas del Toro archipelago. Caribbean Coral
              Restoration runs education and training programs that teach reef ecology, restoration
              techniques, and marine conservation to local students and community members — building
              the knowledge base that will sustain this work long after any single partnership ends.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              For local fishing communities, healthy reefs aren't an abstraction — they're the
              foundation of livelihoods. As marine life returns to the restoration sites, the
              ecological and economic case for reef protection becomes tangible. The program is
              designed to make reef stewardship a shared value across the archipelago, not just a
              resort amenity.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              The long-term goal is ambitious: to scale reef restoration across the entire Bocas del
              Toro archipelago, establishing a model that other hotels, communities, and governments
              in the region can replicate. What begins at our bay is meant to spread.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CLOSING IMAGE + CTA ──────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: "70vh" }}>
        <img
          src={`${CDN}/bocas-resort-aerial-sunset_d536b07d.jpg`}
          alt="Aerial sunset view of Nayara Bocas del Toro resort on the water"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          style={{ background: "rgba(11,79,94,0.65)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p
              className="uppercase tracking-[0.3em] text-[11px] mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
            >
              Experience It
            </p>
            <h2
              className="text-3xl md:text-5xl text-white mb-6 max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Join the Restoration
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-relaxed max-w-xl mx-auto mb-10"
              style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.85)" }}
            >
              Every guest at Nayara Bocas del Toro has the opportunity to contribute to the reef's
              recovery. Arrange your coral restoration experience through our concierge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/bocas-del-toro"
                className="inline-block px-8 py-4 text-[12px] uppercase tracking-[0.12em] transition-all duration-300"
                style={{
                  backgroundColor: PALETTE.accent,
                  color: PALETTE.ocean,
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)")
                }
              >
                Explore Bocas del Toro
              </a>
              <a
                href="https://loveforthesea.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 text-[12px] uppercase tracking-[0.12em] transition-all duration-300"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  border: "1px solid rgba(255,255,255,0.5)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)")
                }
              >
                Caribbean Coral Restoration ↗
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer bgColor="#0B4F5E" textColor="#FFFFFF" />
    </div>
  );
}
