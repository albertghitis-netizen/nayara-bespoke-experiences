/**
 * GREEN GLOBE CERTIFICATION: NAYARA RESORTS
 * Editorial blog — correct format (v2)
 * - BrandNavigation (espresso pills)
 * - 21:9 hero
 * - Title block + pillar tag + H1
 * - BlogAuthorReadTime (Albert Ghitis)
 * - Key Findings
 * - Alternating cream/stone sections (no two same in a row)
 * - One espresso dark pull quote
 * - Sources & Further Reading
 * - Explore More (3 related articles with images)
 * - Footer (espresso)
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
};

const contentEntrance = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.8, 0.25, 1] as [number, number, number, number] },
  }),
};

/* Hero image */
const HERO_IMAGE = "/manus-storage/hotsprings-hero-tented-plunge_8e27e79e.jpg";

/* Related articles for Explore More */
const RELATED_ARTICLES = [
  {
    slug: "/blog/reforestation-wildlife",
    title: "Reforestation and Wildlife Corridors at Nayara Arenal",
    pillar: "Sustainability",
    image: "/manus-storage/reforestation-wildlife-cover_d766bbf9.jpg",
  },
  {
    slug: "/blog/rooted-in-community",
    title: "Rooted in Community: Human Hospitality at Nayara",
    pillar: "Sustainability",
    image: "/manus-storage/rooted-community-cover_dcdbfae8.jpg",
  },
  {
    slug: "/blog/atacama-wildlife",
    title: "Wildlife Conservation in Chile's Atacama Desert and Easter Island",
    pillar: "Sustainability",
    image: "/manus-storage/atacama-wildlife-cover_ebe00ac5.jpg",
  },
];

export default function GreenGlobeBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Green Globe Certification at Nayara Resorts in Costa Rica and Panama",
    description: "How Nayara Tented Camp, Springs, Gardens, and Bocas del Toro each earned Green Globe certification through rigorous sustainability practices.",
    author: { "@type": "Person", name: "Albert Ghitis" },
    publisher: { "@type": "Organization", name: "Nayara Resorts" },
    datePublished: "2024-04-05",
    dateModified: "2025-01-15",
    image: HERO_IMAGE,
    articleSection: "Sustainability",
    keywords: "Green Globe certification, sustainable tourism, Nayara Resorts, eco-certification, Costa Rica sustainability, Bocas del Toro",
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.cream, color: PALETTE.text, fontFamily: "var(--font-body)" }}>
      {/* ── BRAND NAVIGATION ── */}
      <BrandNavigation pageType="brand" hideCenterLabel />

      {/* SEO HEAD */}
      <Helmet>
        <title>Green Globe Certification at Nayara Resorts | Sustainable Luxury</title>
        <meta name="description" content="How Nayara Tented Camp, Springs, Gardens, and Bocas del Toro each earned Green Globe certification through rigorous sustainability practices." />
        <meta property="og:title" content="Green Globe Certification at Nayara Resorts in Costa Rica and Panama" />
        <meta property="og:description" content="Meeting the world's most rigorous standards for sustainable luxury across four properties." />
        <meta property="og:image" content={HERO_IMAGE} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      {/* ── HERO (ultra-wide, 21:9) ── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "21/9", minHeight: "400px", maxHeight: "70vh" }}
      >
        <img
          src={HERO_IMAGE}
          alt="Infinity pool overlooking the Arenal rainforest at Nayara Tented Camp"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
      </section>

      {/* ── TITLE BLOCK ── */}
      <motion.section
        style={{ backgroundColor: PALETTE.cream }}
        variants={contentEntrance}
        initial="hidden"
        animate="visible"
        custom={0.1}
      >
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-8">
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span className="text-[11px] font-medium tracking-[0.35em]" style={{ color: PALETTE.espresso }}>
              SUSTAINABILITY
            </span>
            <span className="text-[10px] tracking-[0.2em] border px-2 py-0.5 rounded-full" style={{ color: `${PALETTE.muted}99`, borderColor: PALETTE.stone }}>
              Costa Rica
            </span>
            <span className="text-[10px] tracking-[0.2em] border px-2 py-0.5 rounded-full" style={{ color: `${PALETTE.muted}99`, borderColor: PALETTE.stone }}>
              Panama
            </span>
          </div>

          <h1
            className="text-3xl md:text-[40px] lg:text-[46px] leading-[1.15] mb-5"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
          >
            Green Globe Certification at Nayara Resorts in Costa Rica and Panama
          </h1>
        </div>
      </motion.section>

      {/* ── AUTHOR / READING TIME BAND ── */}
      <BlogAuthorReadTime
        author="Albert Ghitis"
        authorRole="Editorial"
        date="April 5, 2024"
        wordCount={2800}
      />

      {/* ── KEY FINDINGS (stone) ── */}
      <motion.section
        style={{ backgroundColor: PALETTE.stone }}
        variants={contentEntrance}
        initial="hidden"
        animate="visible"
        custom={0.25}
      >
        <div className="max-w-3xl mx-auto px-8 md:px-16 py-12">
          <div className="border rounded-lg p-6 md:p-8" style={{ borderColor: `${PALETTE.muted}33`, backgroundColor: PALETTE.cream }}>
            <p className="text-lg mb-5" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
              Key Findings
            </p>
            <ul className="space-y-4">
              {[
                "Green Globe is the world's leading certification for sustainable tourism, recognized by the Global Sustainable Tourism Council and operating in over 80 countries.",
                "Four Nayara properties — Tented Camp, Springs, Gardens, and Bocas del Toro — have achieved Green Globe certification through independent audits against 380 specific indicators.",
                "Certification requires annual re-audits and continuous improvement — it is not a one-time achievement.",
                "Nayara Bocas del Toro was built entirely off-grid with five independent environmental impact studies completed before construction began.",
                "The four pillars of certification cover sustainable management, social/economic performance, cultural heritage preservation, and environmental stewardship.",
              ].map((finding, i) => (
                <li key={i} className="text-[15px] leading-[1.9] pl-5 border-l-2" style={{ color: PALETTE.muted, borderColor: PALETTE.espresso }}>
                  {finding}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 1: INTRO (cream) ── */}
      <motion.section
        style={{ backgroundColor: PALETTE.cream }}
        variants={contentEntrance}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        custom={0.1}
      >
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            What Is Green Globe Certification in Sustainable Tourism?
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>
              In a world where "sustainability" has become a marketing buzzword, Green Globe Certification stands apart. It is not a label you can buy. It is not a box you check. It is a rigorous, independent verification that your resort meets the world's most demanding standards for environmental stewardship, community impact, and responsible tourism.
            </p>
            <p>
              Green Globe is the world's leading certification program for sustainable tourism. It is recognized by the Global Sustainable Tourism Council (GSTC) and operates in over 80 countries. To achieve certification, a resort must undergo a comprehensive audit against 380 specific indicators across four pillars: sustainable management, social and economic performance, cultural heritage preservation, and environmental stewardship.
            </p>
            <p>
              This is not a one-time assessment. Green Globe certification requires annual audits and continuous improvement. Every year, we must demonstrate that we are maintaining and improving our sustainability practices. It is a commitment that never ends.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 2: THE FOUR PILLARS (stone) ── */}
      <motion.section
        style={{ backgroundColor: PALETTE.stone }}
        variants={contentEntrance}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        custom={0.1}
      >
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            The Four Pillars of Green Globe Certification
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <h3 className="text-xl md:text-2xl mt-8 mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
              1. Sustainable Management
            </h3>
            <p>
              This pillar ensures that resorts operate with environmental responsibility built into every decision. At Nayara, this means: carbon-neutral operations (certified by Eco Qualis), zero single-use plastics, water conservation systems that reduce consumption by 40%, waste management programs that achieve 85% diversion from landfills, and renewable energy integration across our facilities.
            </p>

            <h3 className="text-xl md:text-2xl mt-8 mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
              2. Social & Economic Performance
            </h3>
            <p>
              Luxury should benefit the community, not exploit it. At Nayara, 85% of our staff comes from La Fortuna. We provide free transportation, comprehensive health insurance, and ongoing training in sustainable tourism practices. Through our partnership with a local bank, we have created a housing community where employees can purchase homes without a down payment, building equity and dignity regardless of their employment status.
            </p>

            <h3 className="text-xl md:text-2xl mt-8 mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
              3. Cultural Heritage Preservation
            </h3>
            <p>
              We are stewards of a region with deep cultural roots. We work with local indigenous communities and cultural organizations to ensure that tourism respects and preserves local traditions. We employ local guides who share the stories and knowledge of their ancestors. We source traditional crafts and artwork from local artisans. Tourism should enrich culture, not erase it.
            </p>

            <h3 className="text-xl md:text-2xl mt-8 mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
              4. Environmental Stewardship
            </h3>
            <p>
              This is where our heart lies. Nayara Tented Camp sits within 30,000 acres of rainforest that is home to half of Costa Rica's bird, mammal, and reptile species. We have planted over 50,000 native trees as part of our reforestation initiative. We have created wildlife corridors that allow jaguars, sloths, and other species to move freely across the landscape. We are not just protecting the forest. We are healing it.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── ESPRESSO DARK — Pull Quote ── */}
      <motion.section
        style={{ backgroundColor: PALETTE.espresso }}
        variants={contentEntrance}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        custom={0.1}
      >
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-16 pb-16">
          <blockquote className="text-center">
            <p
              className="text-xl md:text-2xl italic leading-relaxed"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "white" }}
            >
              "Green Globe Certification is not a finish line. It is a commitment to continuous improvement. Every year, we undergo new audits. Every year, we set new goals. Every year, we ask ourselves: how can we do better?"
            </p>
          </blockquote>
        </div>
      </motion.section>

      {/* ── SECTION 3: THE JOURNEY (cream) ── */}
      <motion.section
        style={{ backgroundColor: PALETTE.cream }}
        variants={contentEntrance}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        custom={0.1}
      >
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            How Nayara Earned Green Globe Certification
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>
              Achieving Green Globe Certification was not a quick process. It required a deep dive into our operations, honest assessment of where we were falling short, and commitment to continuous improvement. We worked closely with Green Globe auditors to evaluate every aspect of our business against 380 specific criteria.
            </p>
            <p>
              Some areas were straightforward. We were already carbon-neutral, already plastic-free, already investing in community housing. But other areas required us to raise our standards even higher. We enhanced our water management systems. We expanded our reforestation efforts. We deepened our partnerships with local communities. We did not just meet the standards. We exceeded them.
            </p>
            <p>
              The result is a resort that operates at the highest level of sustainability — and can prove it through independent verification, annual audits, and measurable results.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 4: BOCAS DEL TORO (stone) ── */}
      <motion.section
        style={{ backgroundColor: PALETTE.stone }}
        variants={contentEntrance}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        custom={0.1}
      >
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Bocas del Toro: Green Globe in a Marine Ecosystem
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>
              Nayara Bocas del Toro was built entirely off-grid on a private island in Panama's Caribbean archipelago. Before a single piling was driven into the seabed, five independent environmental impact studies were commissioned at a cost exceeding $100,000. The purpose was not regulatory compliance. It was understanding: what lives here, how it connects, and what constraints must govern every construction decision.
            </p>
            <p>
              The resort was built on stilts above the water without harming a single native mangrove or coral head. There are no roads and no connection to municipal infrastructure. Every system that sustains the property was designed from zero: solar panels provide close to 100% of the resort's energy, freshwater comes exclusively from collected rainwater purified through ultraviolet filtration, and wastewater is treated on site.
            </p>
            <p>
              Green Globe certification at Bocas reflects the same four pillars applied to a fundamentally different ecosystem. Sustainable management here means zero single-use plastics, carbon-neutral operations, and boat routes designed to avoid prop wash in sensitive mangrove root zones. Social and economic performance means partnerships with local fishing cooperatives and 25 community organizations across the archipelago.
            </p>
            <p>
              Environmental stewardship at Bocas centers on ocean habitat restoration. In partnership with the Caribbean Coral Restoration Center, the resort supports active reef rebuilding with 500+ coral fragments outplanted across three restoration sites, mangrove preservation programs, and seagrass meadow protection. The Bocas del Toro archipelago is one of the most biodiverse marine systems remaining in the Caribbean.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 5: WHAT THIS MEANS FOR GUESTS (cream) ── */}
      <motion.section
        style={{ backgroundColor: PALETTE.cream }}
        variants={contentEntrance}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        custom={0.1}
      >
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            What Green Globe Means for Guests at Nayara
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>
              When you stay at a Green Globe certified Nayara property, you are not just booking a luxury resort. You are supporting a business that is genuinely committed to protecting the rainforest and uplifting the community. Every dollar you spend contributes to reforestation efforts, community housing programs, and conservation initiatives.
            </p>
            <p>
              Our Green Globe Certification is proof of this commitment. It is not a marketing claim. It is an independent verification that we are doing what we say we are doing. It is a promise that your luxury experience is built on a foundation of genuine sustainability.
            </p>
            <p>
              This is what sustainable luxury means. It is not perfection. It is commitment. It is the willingness to be held accountable. It is the belief that business can be a force for good in the world.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── SOURCES & FURTHER READING (stone) ── */}
      <section style={{ backgroundColor: PALETTE.stone }}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <p className="uppercase tracking-[0.3em] text-[11px] mb-4 text-center" style={{ fontWeight: 600, color: PALETTE.accent }}>
            References
          </p>
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Sources & Further Reading
          </h2>
          <ul className="space-y-3">
            {[
              { label: "Green Globe — Official Certification Program", href: "https://www.greenglobe.com" },
              { label: "Global Sustainable Tourism Council (GSTC)", href: "https://www.gstcouncil.org" },
              { label: "Nayara Resorts — Sustainability Commitment", href: "/sustainability" },
              { label: "Caribbean Coral Restoration Center", href: "https://www.caribbeancoralrestoration.com" },
              { label: "Eco Qualis — Carbon Neutral Certification", href: "https://www.ecoqualis.com" },
            ].map((src) => (
              <li key={src.label} className="text-[14px] leading-[1.7]" style={{ color: PALETTE.muted }}>
                <a href={src.href} target="_blank" rel="noopener noreferrer" className="underline transition-opacity hover:opacity-70" style={{ color: PALETTE.espresso }}>
                  {src.label}
                </a>
              </li>
            ))}
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
              href="https://www.instagram.com/nayararesorts/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Follow on Instagram"
            >
              <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill={PALETTE.espresso} style={{ opacity: 0.6 }} viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a
              href="https://www.tiktok.com/@nayararesorts"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Follow on TikTok"
            >
              <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill={PALETTE.espresso} style={{ opacity: 0.6 }} viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.88 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.82.11V9.4a6.33 6.33 0 00-.82-.05A6.34 6.34 0 003.15 15.7a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.42a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.15z"/></svg>
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
              <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill="none" stroke={PALETTE.espresso} style={{ opacity: 0.6 }} strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
            </button>
          </div>
        </div>
      </section>



      {/* ── EXPLORE MORE (3 related articles) ── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-5xl mx-auto px-8 md:px-16 pt-16 pb-16">
          <p className="uppercase tracking-[0.3em] text-[11px] mb-4 text-center" style={{ fontWeight: 600, color: PALETTE.accent }}>
            Continue Reading
          </p>
          <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Explore More
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RELATED_ARTICLES.map((article) => (
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
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontWeight: 600, color: PALETTE.accent }}>
                    {article.pillar}
                  </p>
                  <h3 className="text-lg" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
                    {article.title}
                  </h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── BRAND ESPRESSO FOOTER ── */}
      <Footer textColor="#FFFFFF" />
    </div>
  );
}
