/**
 * HOW WE BUILT A HOTEL ON AN ISLAND
 * The definitive Bocas del Toro sustainability/operations story
 * Covers: environmental studies, off-grid construction, solar, rainwater,
 * stilt architecture, mangrove preservation, IBUKU treehouses
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { EnhancedArticleSchema } from "@/components/SEOSchemaEnhanced";
import BrandNavigation from "@/components/BrandNavigation";
import BlogAuthorReadTime from "@/components/BlogAuthorReadTime";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const PALETTE = {
  ocean: "#0B4F5E",
  teal: "#1B7A8F",
  accent: "#4DB8D0",
  sand: "#F5F1ED",
  light: "#FFFFFF",
  text: "#0A3A45",
  muted: "#3D5A63",
};

export default function BocasOperationsBlog() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen" style={{ backgroundColor: PALETTE.light }}>
      <EnhancedArticleSchema
        image={`${CDN}/bocas-aerial-island_34b68171.jpg`}
        headline="How Nayara Built an Off Grid Resort on a Private Island in Panama"
        description="The story of building Nayara Bocas del Toro entirely off-grid on a private island in Panama. No roads, no grid, no municipal water. Five environmental studies and a commitment to leave the ecosystem better than we found it."
        author={{ name: "Dan Behm", expertise: ["Luxury Travel", "Sustainable Tourism", "Off-Grid Architecture"] }}
        datePublished="2025-05-15"
        url="https://nayararesorts.manus.space/blog/how-we-built-a-hotel-on-an-island"
      />
      <BrandNavigation pageType="brand" hideCenterLabel navPalette={{ dark: "#FFFFFF", pillBg: "#1E3A8AB3", pillHover: "#1E3A8AE6" }} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
          poster={`${CDN}/bocas-aerial-island_34b68171.jpg`}
        >
          <source src="/manus-storage/bocas-hero-v2_a0ea8700.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(11,79,94,0.3) 0%, rgba(11,79,94,0.7) 100%)" }}
        />
        <div className="absolute inset-0 flex flex-col justify-end items-center pb-8 md:pb-12 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-center max-w-4xl"
          >
            <p
              className="text-[11px] tracking-[0.3em] mb-6 uppercase"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
            >
              Beyond Sustainability
            </p>
            <h1
              className="text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.1] mb-6 text-white"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontVariantLigatures: "none" }}
            >
              How Nayara Built an <span className="whitespace-nowrap">Off‑Grid</span> Resort<br className="hidden md:inline" /> on a Private Island in Panama
            </h1>
            <p
              className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.85)" }}
            >
              No roads. No grid. No municipal water. Five environmental studies and a commitment to leave the ecosystem better than we found it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── AUTHOR TAB ── */}
      <BlogAuthorReadTime
        author="Dan Behm"
        authorRole="Nayara Resorts"
        date="May 15, 2025"
        wordCount={1600}
      />

      {/* ── THE QUESTION ─────────────────────────────────────────── */}
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
              The Challenge
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.ocean }}
            >
              How to Build a Resort Without Destroying the Ecosystem
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Bocas del Toro is a protected archipelago on Panama's Caribbean coast. Its mangrove forests, coral reefs, and seagrass beds form one of the most biodiverse marine ecosystems in the Western Hemisphere. When we decided to build here, the question was never whether we could. It was whether we could do it without harming what made the place worth building in the first place.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              The answer required us to rethink everything. There would be no connection to a mainland power grid. No municipal water supply. No roads leading to the site. No dredging, no clearing, no compromise with the native mangroves and coral reefs below.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              We would build a world-class resort on a private island, entirely off-grid, and the island would be healthier for it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FIVE ENVIRONMENTAL STUDIES ────────────────────────────── */}
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
              Before a Single Nail
            </p>
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.ocean }}
            >
              Five Environmental Studies Before Construction in Bocas del Toro
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] max-w-3xl"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Before construction began, we commissioned five independent environmental impact assessments. These were not formalities. They were the foundation of every design decision that followed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Marine Ecosystem Survey",
                body: "A comprehensive mapping of coral coverage, seagrass distribution, and marine species in the surrounding waters. This determined where structures could be placed without disrupting existing reef systems.",
              },
              {
                title: "Mangrove Root Network Analysis",
                body: "Detailed study of the mangrove root systems across the island's perimeter. Every stilt placement was designed to avoid root zones. Boat channels were mapped to prevent prop wash damage.",
              },
              {
                title: "Hydrological Assessment",
                body: "Analysis of tidal flows, storm surge patterns, and freshwater lens dynamics. This informed the elevation of structures and the design of the rainwater harvesting system.",
              },
              {
                title: "Terrestrial Biodiversity Inventory",
                body: "Cataloging of all plant and animal species on the island. Construction zones were selected to minimize habitat displacement, and native vegetation was preserved in place wherever possible.",
              },
              {
                title: "Waste and Water Systems Engineering",
                body: "A complete off-grid infrastructure plan: solar capacity modeling, rainwater collection volumes, UV purification specifications, and wastewater treatment designed to produce zero discharge into surrounding waters.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="p-8"
                style={{ backgroundColor: PALETTE.light, borderTop: `3px solid ${PALETTE.teal}` }}
              >
                <h3
                  className="text-lg mb-3"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.ocean }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[14px] leading-[1.8]"
                  style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
                >
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STILT CONSTRUCTION ────────────────────────────────────── */}
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
              Architecture
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.ocean }}
            >
              Overwater Villas Built on Stilts to Protect Mangroves and Coral
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              The entire resort sits on stilts above the water and forest floor. This was not an aesthetic choice. It was an ecological one. By elevating every structure, we preserved the mangrove root networks below, maintained natural water flow patterns, and avoided disturbing the sediment that feeds the surrounding reef system.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              There was no dredging. No land clearing. No concrete foundations poured into the seabed. Each stilt was placed according to the mangrove root network analysis, ensuring that the island's circulatory system remained intact.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Construction materials were selected to eliminate chemical leaching into the surrounding water column. The goal was a resort that, from below the waterline, would be invisible to the ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── AERIAL IMAGE BREAK ───────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: "60vh" }}>
        <img
          src={`${CDN}/bocas-aerial-villas-mangroves_9d5e94f5.jpg`}
          alt="Aerial view of overwater villas surrounded by preserved mangroves"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(11,79,94,0.6) 100%)" }}
        />
        <div className="absolute bottom-10 left-8 md:left-16 right-8 md:right-16">
          <p
            className="text-[13px] leading-[1.6] max-w-xl"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.9)" }}
          >
            Every villa elevated above the water. Every mangrove root system preserved beneath.
          </p>
        </div>
      </section>

      {/* ── OFF-GRID POWER ────────────────────────────────────────── */}
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
              Solar Power and Rainwater Harvesting at Nayara Bocas del Toro
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
                body: "All freshwater at the resort is collected from rainfall, stored in dedicated cisterns, and purified through a multi-stage UV treatment system. The result is drinking-quality water produced entirely on-site, with zero draw on the island's limited freshwater resources. The system was designed to exceed WHO standards for potable water. Total capacity: 100,000 gallons.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 md:p-10"
                style={{ backgroundColor: PALETTE.light, borderLeft: `3px solid ${PALETTE.teal}` }}
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
              Living Systems
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.ocean }}
            >
              How Nayara Preserved Native Mangroves During Construction
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Mangroves are the connective tissue of this ecosystem. Their root networks filter sediment and agricultural runoff before it reaches the reef. They provide nursery habitat for juvenile fish. They stabilize shorelines against storm surge. And they sequester carbon at rates up to four times higher than terrestrial forests.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              At Nayara Bocas del Toro, mangrove preservation is not a separate initiative. It is embedded in daily operations. Boat routes are designed to avoid prop wash in sensitive root zones. Exterior lighting is managed to prevent disruption to nocturnal species that depend on mangrove canopy. Construction materials were selected to eliminate leaching into the surrounding water column.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Guest access to mangrove zones is guided and limited. Kayak routes follow designated channels. Snorkeling excursions to mangrove-reef transition zones are led by trained naturalists who understand the sensitivity of these areas. The goal is not to keep guests away from nature, but to ensure that every encounter leaves the system stronger than it was found.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── THE TREEHOUSES ────────────────────────────────────────── */}
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
              Design Philosophy
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.ocean }}
            >
              IBUKU Treehouses: 50 Feet Above the Rainforest
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              The treehouses at Nayara Bocas del Toro were designed by IBUKU, the Bali-based studio led by Elora Hardy. They are architectural statements that embody the same principle as the rest of the resort: build up, not out. Touch the ground as lightly as possible.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Built from locally harvested bamboo and hardwoods sourced from the depths of the Panama Canal, the treehouses rise fifty feet above the forest floor. From this vantage point, guests look out over the surrounding forest, mangroves, and open ocean. The structures fuse Balinese craftsmanship with Panamanian materials in a way that feels both ancient and entirely new.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              The bamboo is not decorative. It is structural. These are load-bearing organic forms that demonstrate what is possible when architecture works with natural materials rather than against them. No steel frame. No concrete core. Just engineered bamboo, tropical hardwood, and the Caribbean wind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── TREEHOUSE STILL IMAGE BREAK ────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: "60vh" }}>
        <img
          src="/manus-storage/bocas-ibuku-treehouses-lastframe_3e0ff35a.jpg"
          alt="IBUKU treehouses at Nayara Bocas del Toro, 50 feet above the rainforest"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(11,79,94,0.6) 100%)" }}
        />
        <div className="absolute bottom-10 left-8 md:left-16 right-8 md:right-16">
          <p
            className="text-[13px] leading-[1.6] max-w-xl"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.9)" }}
          >
            IBUKU treehouses designed by Elora Hardy. Bamboo and Panama Canal hardwood. Fifty feet up.
          </p>
        </div>
      </section>

      {/* ── ONE SYSTEM ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.ocean }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className="uppercase tracking-[0.3em] text-[11px] mb-6"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
            >
              The Principle
            </p>
            <h2
              className="text-3xl md:text-5xl mb-8 text-white"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              One Integrated Ecosystem, Protected
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.8)" }}
            >
              The mangroves filter the water. The clean water feeds the seagrass. The seagrass shelters juvenile fish. The fish populate the reef. The reef protects the shoreline. The shoreline anchors the mangroves. It is one system. You cannot protect part of it. You protect all of it, or you protect none of it. That is how we built this hotel. That is how we operate it. That is how we intend to leave it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT CAME NEXT ────────────────────────────────────────── */}
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
              After Construction
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.ocean }}
            >
              Why Sustainable Construction Was Just the Beginning
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Once the resort was operational, the work shifted from construction to restoration. In 2022, we partnered with the Caribbean Coral Restoration Center to begin actively rebuilding the marine ecosystem in our bay. Ten artificial reef structures have been installed. Genetically resilient coral fragments are being outplanted. Marine life has already begun returning.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              The resort earned Green Globe certification, meeting 380 specific sustainability indicators across environmental management, social responsibility, cultural heritage, and economic viability. It is not a label. It is an annual audit.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              The long-term goal is ambitious: to scale ocean habitat restoration across the entire Bocas del Toro archipelago, establishing a model that other hotels, communities, and governments in the region can replicate. What begins at our bay is meant to spread.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── EXPLORE MORE ── */}
      <section style={{ backgroundColor: "#E8E2D8" }}>
        <div className="max-w-5xl mx-auto px-8 md:px-16 pt-16 pb-16">
          <p className="uppercase tracking-[0.3em] text-[11px] mb-4 text-center" style={{ fontWeight: 600, color: "#8B6914" }}>Continue Reading</p>
          <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#3B2B26" }}>
            Explore More
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { slug: "/blog/green-globe-certification", title: "Green Globe Certification at Nayara", pillar: "Sustainability", image: "/manus-storage/hotsprings-card-tented-plunge_5d997c52.jpg" },
              { slug: "/blog/bocas-conde-nast", title: "#1 Resort in Central America — Condé Nast Traveler 2025", pillar: "Press", image: "/manus-storage/bocas-aerial-cover_46f0bbf4.jpg" },
              { slug: "/blog/reforestation-wildlife", title: "Reforestation and Wildlife Corridors", pillar: "Sustainability", image: "/manus-storage/reforestation-wildlife-cover_d766bbf9.jpg" },
            ].map((article) => (
              <Link key={article.slug} href={article.slug}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden mb-4 rounded-lg">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontWeight: 600, color: "#8B6914" }}>{article.pillar}</p>
                  <h3 className="text-lg transition-opacity duration-300 group-hover:opacity-70" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#3B2B26" }}>{article.title}</h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer bgColor="#1E3A8A" textColor="#FFFFFF" propertyName="Bocas del Toro" />
    </div>
  );
}
