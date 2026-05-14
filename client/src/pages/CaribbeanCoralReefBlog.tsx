/**
 * BOCAS DEL TORO — OCEAN HABITAT RESTORATION
 * Broader sustainability landing page: One System framing (Smithsonian STRI),
 * off-grid construction, solar/rainwater infrastructure, coral restoration,
 * mangrove preservation, Green Globe certification framework.
 * Partner: Caribbean Coral Restoration Center (loveforthesea.com)
 * Design: Deep ocean teal palette, editorial, immersive
 * Real photos only. No AI-generated imagery.
 */
import { useEffect } from "react";
import { motion } from "framer-motion";

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

/* ── STATS ─────────────────────────────────────────────────── */
const STATS = [
  {
    number: "5",
    label: "Environmental Studies",
    sub: "Completed before a single piling was driven",
  },
  {
    number: "100%",
    label: "Solar Powered",
    sub: "Entirely off-grid energy from photovoltaic systems",
  },
  {
    number: "10",
    label: "Artificial Reef Structures",
    sub: "Purpose-built foundations for coral restoration",
  },
  {
    number: "500+",
    label: "Coral Fragments Restored",
    sub: "Genetically resilient specimens selected for warming oceans",
  },
  {
    number: "25",
    label: "Community Partners",
    sub: "Local schools, cooperatives, and neighboring businesses",
  },
  {
    number: "77%",
    label: "Of Travelers",
    sub: "Now seek a sustainability ethos when choosing where to stay",
  },
];

/* ── RESTORATION STEPS ─────────────────────────────────────── */
const STEPS = [
  {
    step: "01",
    title: "Survey and Select",
    body: "Teams scour the Bocas del Toro archipelago for coral specimens already demonstrating resilience to elevated water temperatures. These survivors of past bleaching events carry the genetic traits that give coral the best chance in a warming ocean.",
  },
  {
    step: "02",
    title: "Clone and Cultivate",
    body: "Resilient fragments are cloned and grown in Caribbean Coral Restoration's land-water nursery on Isla Solarte, where they can be monitored and protected during their most vulnerable growth phase.",
  },
  {
    step: "03",
    title: "Build the Foundation",
    body: "Artificial reef structures are constructed on land. These environmentally friendly frameworks mimic natural reef architecture and provide immediate habitat for fish and invertebrates upon installation.",
  },
  {
    step: "04",
    title: "Install and Outplant",
    body: "Structures are installed at active restoration sites in the bay. Nursery-grown coral is then outplanted onto the structures, giving each fragment the stable base it needs to thrive independently of degraded reef below.",
  },
  {
    step: "05",
    title: "Monitor and Research",
    body: "Each site is actively monitored for coral growth, fish colonization, and ecosystem health. Ongoing research projects study coral resilience, bleaching response, and long-term recovery rates across the archipelago.",
  },
  {
    step: "06",
    title: "Expand and Educate",
    body: "The program engages 25 local community partners with the long-term goal of scaling reef restoration across the entire archipelago and setting an example that other local hotels can replicate.",
  },
];

/* ── GREEN GLOBE PILLARS ───────────────────────────────────── */
const GREEN_GLOBE_PILLARS = [
  {
    title: "Sustainable Management",
    body: "Environmental responsibility is built into every operational decision. Carbon-neutral operations, zero single-use plastics, water conservation systems, waste management programs achieving 85% diversion from landfills, and renewable energy integration across all facilities.",
  },
  {
    title: "Social and Economic Performance",
    body: "Luxury should benefit the community, not exploit it. Local hiring, comprehensive health insurance, ongoing training in sustainable tourism practices, and partnerships with local suppliers that support the regional economy.",
  },
  {
    title: "Cultural Heritage Preservation",
    body: "Working with local indigenous communities and cultural organizations to ensure tourism respects and preserves traditions. Local guides share the stories and knowledge of their ancestors. Traditional crafts and artwork are sourced from local artisans.",
  },
  {
    title: "Environmental Stewardship",
    body: "Active habitat restoration, biodiversity monitoring, wildlife corridor creation, and whole-system conservation that treats reef, mangrove, rainforest, and seagrass as the single interconnected organism they are.",
  },
];

export default function CaribbeanCoralReefBlog() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.sand }}>
      <EnhancedArticleSchema
        image={`${CDN}/bocas-aerial-villas-turquoise_858d4570.jpg`}
        headline="Ocean Habitat Restoration at Nayara Bocas del Toro | Beyond Sustainability"
        description="How Nayara Bocas del Toro was built from scratch without harming a single mangrove or coral head, and why reef, mangrove, rainforest, and seagrass function as one interdependent system."
        author={{ name: "Nayara Resorts", expertise: ["Sustainable Tourism", "Ocean Conservation", "Regenerative Travel"] }}
        datePublished="2024-06-01"
        url="https://nayararesorts.manus.space/blog/caribbean-coral-reef"
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={`${CDN}/bocas-aerial-villas-turquoise_858d4570.jpg`}
          alt="Aerial view of Nayara Bocas del Toro overwater villas above turquoise Caribbean waters surrounded by mangroves"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(11,79,94,0.3) 0%, rgba(11,79,94,0.55) 60%, rgba(11,79,94,0.85) 100%)",
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
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
          >
            Beyond Sustainability · Bocas del Toro, Panama
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 text-white"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            One System.
            <br />
            One Commitment.
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed max-w-2xl"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400, color: "rgba(255,255,255,0.85)" }}
          >
            Reef, mangrove, rainforest, and seagrass are not three ecosystems that happen to share a
            coastline. They are a single functioning system. At Nayara Bocas del Toro, every decision
            we make honors that truth.
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
            The Commitment at a Glance
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-center text-white mb-16"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Built to Protect, Not to Extract
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
            Sources: Caribbean Coral Restoration Center · NOAA Coral Reef Watch 2024 · Booking.com
            Sustainable Travel Report 2024
          </p>
        </div>
      </section>

      {/* ── ONE SYSTEM (SMITHSONIAN FRAMING) ─────────────────────── */}
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
              The Science
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.ocean }}
            >
              Bocas del Toro: One System
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              The standard way to describe Bocas del Toro is as a place where reef, mangrove, and
              rainforest meet. That framing is convenient but misleading. These are not three
              ecosystems that happen to share a coastline. They are a single functioning system in
              which each component is structurally dependent on the others.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              The Smithsonian Tropical Research Institute has studied this system since establishing
              its research station here in 1998. What that research makes clear is that the causal
              chains run in every direction: mangrove root systems filter the terrestrial runoff that
              would otherwise smother reef corals. Reef structures shelter juvenile fish that will
              eventually feed the dolphins and sharks patrolling deeper water. Rainforest canopy
              stabilizes soils that, if eroded, would carry sediment into shallow-reef zones and cut
              off the light that coral requires. Seagrass meadows between mangroves and reef provide
              the feeding grounds on which sea turtles depend.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Conservation strategies that treat any one of these components in isolation are not
              conservation strategies. They are delay. At Nayara Bocas del Toro, we operate with a
              whole-system awareness that shapes decisions about where boats travel, how lighting is
              managed, what materials enter the water, and when and how guests access sensitive zones.
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
            "Our main goal is to set an example and help other local hotels start restoration
            programs of their own."
          </blockquote>
          <p
            className="text-[14px] leading-[1.7]"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.75)" }}
          >
            — Nayara Bocas del Toro
          </p>
        </div>
      </section>

      {/* ── BUILDING FROM SCRATCH ────────────────────────────────── */}
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
              Built from Scratch
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.ocean }}
            >
              $100,000 Before a Single Guest Arrived
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Before a single piling was driven into the seabed, Nayara Bocas del Toro commissioned
              five independent environmental impact studies. The cost exceeded $100,000. The purpose
              was not regulatory compliance. It was understanding: what lives here, how it connects,
              and what constraints must govern every construction decision that follows.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              The resort was built completely off-grid on stilts above the water, without harming a
              single native mangrove or coral head. There are no roads. There is no connection to
              municipal infrastructure. Every system that sustains the resort was designed and built
              from zero: private power, private water, private wastewater treatment.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              This was not the cheapest way to build a hotel. It was the only way to build one here
              without becoming part of the problem. The archipelago's reefs have declined by
              approximately 80% over the last fifty years. Adding another source of runoff, light
              pollution, or habitat disruption was never an option.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── INFRASTRUCTURE: SOLAR + RAINWATER ────────────────────── */}
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
              Off-Grid Infrastructure
            </p>
            <h2
              className="text-3xl md:text-4xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.ocean }}
            >
              Powered by Sun. Sustained by Rain.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "100% Solar Energy",
                body: "The entire resort runs on photovoltaic solar panels. There is no diesel generator as backup. There is no connection to a mainland grid. Every watt of energy that powers the guest experience, the kitchens, the spa, and the water treatment systems comes from the Caribbean sun. This was a deliberate engineering choice, not a marketing one.",
              },
              {
                title: "Rainwater Harvesting with UV Purification",
                body: "All freshwater at the resort is collected from rainfall, stored in dedicated cisterns, and purified through a multi-stage UV treatment system. The result is drinking-quality water produced entirely on-site, with zero draw on the island's limited freshwater resources. The system was designed to exceed WHO standards for potable water.",
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
                  backgroundColor: PALETTE.light,
                  borderLeft: `3px solid ${PALETTE.teal}`,
                }}
              >
                <h3
                  className="text-xl mb-4"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.ocean }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[15px] leading-[1.85]"
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
            Built entirely off-grid on a private island, on stilts, preserving the native mangroves
            and coral reefs below. No roads. No municipal connection. One system, protected.
          </p>
        </div>
      </section>

      {/* ── CORAL RESTORATION PARTNERSHIP ─────────────────────────── */}
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
              <strong>Caribbean Coral Restoration Center</strong>, a locally-based nonprofit
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
              <strong>artificial reef structures</strong>. These are constructed on land, installed at
              restoration sites, and then seeded with coral grown in their land-water nursery on Isla
              Solarte. This creates a stable, purpose-built foundation for reef recovery that does not
              depend on the health of what is already there.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              The coral they grow is not randomly selected. Their team scours the Bocas archipelago for
              specimens already demonstrating resilience to extreme water temperatures. These are
              corals that have survived bleaching events. They are cloned, grown in the nursery, and
              outplanted onto the artificial structures. It is a form of assisted evolution: selecting
              for the traits that give coral the best chance in a warming ocean.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Today, ten artificial reef structures are active in the waters surrounding the resort.
              Marine life has already begun returning: juvenile fish colonize the structures within
              weeks of installation, and the genetically resilient coral fragments show measurably
              higher survival rates than wild populations on degraded reef nearby.
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

      {/* ── MANGROVE PRESERVATION ────────────────────────────────── */}
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
              Whole-System Awareness
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.ocean }}
            >
              Mangrove Preservation
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Mangroves are the connective tissue of this system. Their root networks filter sediment
              and agricultural runoff before it reaches the reef. They provide nursery habitat for
              juvenile fish. They stabilize shorelines against storm surge. And they sequester carbon
              at rates up to four times higher than terrestrial forests.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              At Nayara Bocas del Toro, mangrove preservation is not a separate initiative. It is
              embedded in daily operations. Boat routes are designed to avoid prop wash in sensitive
              root zones. Exterior lighting is managed to prevent disruption to nocturnal species that
              depend on mangrove canopy. Construction materials were selected to eliminate leaching
              into the surrounding water column.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Guest access to mangrove zones is guided and limited. Kayak routes follow designated
              channels. Snorkeling excursions to mangrove-reef transition zones are led by trained
              naturalists who understand the sensitivity of these areas. The goal is not to keep
              guests away from nature, but to ensure that every encounter leaves the system stronger
              than it was found.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── GREEN GLOBE CERTIFICATION ────────────────────────────── */}
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
              Certification
            </p>
            <h2
              className="text-3xl md:text-4xl text-white mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Green Globe Certified
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] max-w-3xl"
              style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.8)" }}
            >
              Green Globe is the world's leading certification program for sustainable tourism,
              recognized by the Global Sustainable Tourism Council and operating in over 80 countries.
              Certification requires comprehensive audits against 380 specific indicators across four
              pillars, with annual re-assessment and continuous improvement. It is not a label you can
              buy. It is a rigorous, independent verification.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {GREEN_GLOBE_PILLARS.map((item, i) => (
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

      {/* ── GUEST EXPERIENCE ─────────────────────────────────────── */}
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
              beneath the surface of the bay to the active restoration sites, where you will see the
              artificial reef structures, the coral fragments in various stages of growth, and the
              marine life that has already returned.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Participants learn to identify coral species, understand the science of bleaching and
              resilience, and in some sessions assist with outplanting coral fragments onto the
              structures. It is a rare opportunity to contribute something real and lasting to a place
              you have chosen to visit.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              The program is available to all guests and can be arranged through the resort concierge.
              No prior diving experience is required for snorkeling sessions. For certified divers,
              deeper reef monitoring dives are available. Both experiences are intimate, with small
              groups only, to minimize impact on the restoration sites.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── COMMUNITY AND EDUCATION ──────────────────────────────── */}
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
              Beyond the Resort
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.ocean }}
            >
              Community and Education
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              The program's 25 community partners include local schools, fishing cooperatives, and
              neighboring businesses across the Bocas del Toro archipelago. Caribbean Coral
              Restoration runs education and training programs that teach reef ecology, restoration
              techniques, and marine conservation to local students and community members, building
              the knowledge base that will sustain this work long after any single partnership ends.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              For local fishing communities, healthy reefs are not an abstraction. They are the
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
              Every guest at Nayara Bocas del Toro has the opportunity to contribute to the
              system's recovery. Arrange your coral restoration experience through our concierge.
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
