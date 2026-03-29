/*
 * NAYARA TENTED CAMP — Visual Mockup
 * Full-screen scrolling sections matching Canva design
 * NO FUNCTIONALITY — visual proof of concept only
 *
 * Section layout:
 * 1. Full-screen hero (video placeholder) — Volcano landscape
 * 2. Split — "Lifted above the Canopy" text + property photo
 * 3. Full-screen (video placeholder) — Infinity pool lifestyle
 * 4. Split — "Explore Our Tents" + tent interior
 * 5. Full-screen — Overhead poolside cabanas
 * 6. Split — "Light Footprint. Lasting Impact." sustainability
 * 7. Full-screen (video placeholder) — Waterfall + "Curated Experiences"
 * 8. Split — Wellness (hot springs + spa)
 * 9. Full-screen — "Heightened Treetop Dining"
 */

import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 30 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

export default function TentedCampMockup() {
  return (
    <div className="bg-[#f7f5f0]">
      {/* ─── 1. HERO — Full-screen volcano landscape (video) ─── */}
      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50" />
        {/* Play icon hint */}
        <div className="absolute top-6 right-6 z-10 bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center">
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-white ml-0.5" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16 max-w-[1400px] mx-auto">
          <motion.div {...fadeIn}>
            <p
              className="text-white/60 text-xs tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Nayara Tented Camp
            </p>
            <h1
              className="text-white text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight max-w-3xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              Luxury Tented Camp Immersed in the Costa Rica Rainforest
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. SPLIT — Lifted above the Canopy ─── */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Text */}
        <div className="bg-[#f2efe8] flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 md:py-0 relative">
          {/* Subtle botanical pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=30)",
            backgroundSize: "300px",
          }} />
          <motion.div {...fadeIn} className="relative z-10">
            <p
              className="text-emerald-800/40 text-xs tracking-[0.35em] uppercase mb-6"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Arenal Volcano, Costa Rica
            </p>
            <h2
              className="text-emerald-950 text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              Lifted above the Canopy, Overlooking Arenal Volcano
            </h2>
            <p
              className="text-stone-500 text-base leading-relaxed mb-8 max-w-md"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              High above the Arenal Rainforest with sweeping views of Arenal Volcano, 
              Tented Camp blends regenerative design with warm hospitality. Luxury tents 
              open to nature invite you to reconnect with wonder, one another, and the 
              rhythm of the wild. Soak in a private plunge pool fed by natural hot springs 
              and savor the flavors of the land.
            </p>
            <div className="flex gap-6">
              <span
                className="text-emerald-800 text-sm tracking-[0.1em] uppercase border-b border-emerald-800 pb-1 cursor-pointer"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Reserve
              </span>
              <span
                className="text-stone-400 text-sm tracking-[0.1em] uppercase border-b border-stone-300 pb-1 cursor-pointer"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Explore More
              </span>
            </div>
          </motion.div>
        </div>
        {/* Image */}
        <div
          className="min-h-[50vh] md:min-h-screen bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&q=80)",
          }}
        />
      </section>

      {/* ─── 3. FULL-SCREEN — Infinity pool (video) ─── */}
      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-black/10" />
        {/* Play icon */}
        <div className="absolute top-6 right-6 z-10 bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center">
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-white ml-0.5" />
        </div>
      </section>

      {/* ─── 4. SPLIT — Explore Our Tents ─── */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Text */}
        <div className="bg-[#f2efe8] flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 md:py-0 order-2 md:order-1">
          <motion.div {...fadeIn}>
            <p
              className="text-emerald-800/40 text-xs tracking-[0.35em] uppercase mb-6"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Explore Our Tents
            </p>
            <h2
              className="text-emerald-950 text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              Nayara Tent
            </h2>
            <p
              className="text-stone-500 text-base leading-relaxed mb-8 max-w-md"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Open wide to the canopy, with views through the trees and air that moves 
              gently through. Spring-fed plunge pools, open-air showers, and spacious 
              interiors offer a quiet sense of comfort, privacy, and ease.
            </p>
            <div className="flex gap-6">
              <span
                className="text-emerald-800 text-sm tracking-[0.1em] uppercase border-b border-emerald-800 pb-1 cursor-pointer"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Reserve
              </span>
              <span
                className="text-stone-400 text-sm tracking-[0.1em] uppercase border-b border-stone-300 pb-1 cursor-pointer"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Explore More
              </span>
            </div>
          </motion.div>
        </div>
        {/* Image */}
        <div
          className="min-h-[50vh] md:min-h-screen bg-cover bg-center order-1 md:order-2"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80)",
          }}
        />
      </section>

      {/* ─── 5. FULL-SCREEN — Overhead poolside cabanas ─── */}
      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-black/5" />
      </section>

      {/* ─── 6. SPLIT — Light Footprint. Lasting Impact. ─── */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Text + small image */}
        <div className="bg-[#f2efe8] flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 md:py-0">
          <motion.div {...fadeIn}>
            <h2
              className="text-emerald-950 text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              Light Footprint.
              <br />
              Lasting Impact.
            </h2>
            <p
              className="text-stone-500 text-base leading-relaxed mb-8 max-w-md"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Through reforestation, community partnerships, and net-positive policies, 
              Nayara Tented Camp has become a model for regenerative luxury tourism in 
              Costa Rica. Native forest now flourishes where cattle once grazed, and 
              crystal-clear natural springs flow across the land. Our stilted tents rest 
              lightly above it all, crafted from locally sourced materials.
            </p>
            <span
              className="text-emerald-800 text-sm tracking-[0.1em] uppercase border-b border-emerald-800 pb-1 cursor-pointer"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Discover Our Impact
            </span>
          </motion.div>
        </div>
        {/* Image */}
        <div
          className="min-h-[50vh] md:min-h-screen bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80)",
          }}
        />
      </section>

      {/* ─── 7. FULL-SCREEN — Waterfall + Experiences (video) ─── */}
      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1494472155656-f34e81b17ddc?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />
        {/* Play icon */}
        <div className="absolute top-6 right-6 z-10 bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center">
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-white ml-0.5" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16 max-w-[1400px] mx-auto">
          <motion.div {...fadeIn}>
            <h2
              className="text-white text-3xl md:text-5xl lg:text-6xl leading-[1] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              Curated Experiences & Adventure
            </h2>
            <p
              className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Led by expert local guides, each personalized journey invites you to encounter 
              the rainforest through adventure, wildlife, and moments of wonder. Discover the 
              traditions, landscapes, and rhythms that define Arenal.
            </p>
            <span
              className="text-white text-sm tracking-[0.1em] uppercase border-b border-white/60 pb-1 cursor-pointer"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Discover Experiences
            </span>
          </motion.div>
        </div>
      </section>

      {/* ─── 8. SPLIT — Wellness ─── */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Images side */}
        <div className="grid grid-cols-2 min-h-[50vh] md:min-h-screen">
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80)",
            }}
          />
          <div
            className="bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80)",
            }}
          >
            {/* Play icon on spa video */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/30 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-white ml-1" />
              </div>
            </div>
          </div>
        </div>
        {/* Text */}
        <div className="bg-[#f2efe8] flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 md:py-0">
          <motion.div {...fadeIn}>
            <p
              className="text-emerald-800/40 text-xs tracking-[0.35em] uppercase mb-6"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Wellness & Spa
            </p>
            <h2
              className="text-emerald-950 text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              Rooted in Nature, Restored by Water
            </h2>
            <p
              className="text-stone-500 text-base leading-relaxed mb-8 max-w-md"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Natural hot springs, volcanic mineral pools, and rainforest spa rituals. 
              Every treatment draws from the land — volcanic clay, tropical botanicals, 
              and the healing warmth of geothermal waters.
            </p>
            <span
              className="text-emerald-800 text-sm tracking-[0.1em] uppercase border-b border-emerald-800 pb-1 cursor-pointer"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Discover Wellness
            </span>
          </motion.div>
        </div>
      </section>

      {/* ─── 9. FULL-SCREEN — Heightened Treetop Dining ─── */}
      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16 max-w-[1400px] mx-auto">
          <motion.div {...fadeIn}>
            <p
              className="text-white/60 text-xs tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Table & Vine
            </p>
            <h2
              className="text-white text-3xl md:text-5xl lg:text-6xl leading-[1] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              Heightened Treetop Dining
            </h2>
            <p
              className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              From Mediterranean flavors at Ayla to expertly stirred martinis at Henry's Bar, 
              dining at Nayara Tented Camp is globally inspired, locally sourced, and served 
              with soul — from garden to table.
            </p>
            <span
              className="text-white text-sm tracking-[0.1em] uppercase border-b border-white/60 pb-1 cursor-pointer"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Discover More
            </span>
          </motion.div>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="bg-emerald-950 py-12 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-white/30 text-xs tracking-[0.35em] uppercase"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Nayara Tented Camp
          </p>
          <p
            className="text-white/20 text-xs"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Visual Mockup — Proof of Concept
          </p>
        </div>
      </footer>
    </div>
  );
}
