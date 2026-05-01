/**
 * FAMILY ADVENTURE — Pura Vida Sub-page
 * Editorial page celebrating family experiences in Costa Rica's rainforest
 * Hero → Intro → Within Our Grounds → Rainforest Adventures → Family Dining → Your Private Retreat → Property Links → Footer
 * All 12 family photos integrated throughout
 */

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import { useIsMobile } from "@/hooks/useMobile";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;
const bodyMedium = { fontFamily: "var(--font-body)", fontWeight: 500 } as const;

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

/* CDN URLs for all 18 family photos (12 original + 6 new lifestyle) */
const FAMILY_CDN = {
  family01: "/manus-storage/family-01_e9948091.jpeg", // Mom & toddler in infinity pool
  family02: "/manus-storage/family-02_3a69b830.jpeg", // Family on boardwalk
  family03: "/manus-storage/family-03_b660affc.jpeg", // Girl in hammock
  family04: "/manus-storage/family-04_5c3acb9e.jpeg", // Kids on daybed under tent
  family05: "/manus-storage/family-05_e332d3ec.jpeg", // Kids on golf cart
  family06: "/manus-storage/family-06_2f82f791.jpeg", // Kids in yellow jackets on hanging bridge
  family07: "/manus-storage/family-07_f0147c04.jpeg", // Kids at sunset dining
  family08: "/manus-storage/family-08_ff4cf5e1.jpeg", // Kids on garden path
  family09: "/manus-storage/family-09_666f1de3.jpeg", // Kids at poolside breakfast
  family10: "/manus-storage/family-10_1f8a4a08.jpeg", // Dad throwing daughter in pool
  family11: "/manus-storage/family-11_4cb70bfe.jpeg", // Family in infinity pool
  family12: "/manus-storage/family-12_583766fc.jpeg", // Girl eating watermelon
  // New lifestyle images (batch 1)
  lifestyle01: "/manus-storage/C7EB2DFF-6668-48E6-899D-3067BC8714D3_4532f8cb.jpeg", // Family bonding moment
  lifestyle02: "/manus-storage/1A05A53A-8844-4BE1-BEFF-68EB927D17EE_cd4d895b.jpeg", // Rainforest exploration
  lifestyle03: "/manus-storage/0942721F-9688-4D31-BC00-088986813147_f28eaea7.jpeg", // Nature connection
  lifestyle04: "/manus-storage/FB7E9511-08F3-408E-A526-4F8502B2BFEF_37862b6d.JPG", // Adventure moment
  lifestyle05: "/manus-storage/9E3CE1EB-2513-4CFC-9A30-8BDF108560F2_f00b13a1.jpeg", // Family together
  lifestyle06: "/manus-storage/19D87A5E-26A9-411A-808D-D5F063AEABAB_503a9e04.jpeg", // Sunset experience
  // New lifestyle images (batch 2)
  lifestyle07: "/manus-storage/2A490607-CB1C-40D1-9B00-545785B6DF46_bff954ff.jpeg", // Family at salt flats
  lifestyle08: "/manus-storage/F150C1D3-7F2A-436E-A063-A16BAD15B4EC_570d5284.jpeg", // Family in desert landscape
  lifestyle09: "/manus-storage/8E541EBC-C963-4A2E-B4D0-F17329128862_db843ae2.jpeg", // Family at rock formation
  lifestyle10: "/manus-storage/AEE3A43C-D335-4894-B155-7FFC674164A5_c13d5544.jpeg", // Family at Rapa Nui moai
  lifestyle11: "/manus-storage/DCEC7B37-9C64-4606-AFD1-4E72E53B5A79_2fe5beba.jpeg", // Family hiking in desert
  // Family adventure videos
  video01: "/manus-storage/FFA71E3F-2FC4-4F44-911C-B5F89132C534_609aded7.MP4", // Family adventure video 1
  video02: "/manus-storage/F9D35949-EA6E-4F8A-9546-BC33C8E74D55_aa913437.MP4", // Family adventure video 2
  video03: "/manus-storage/17B4FC71-6562-475F-A780-48284A75B8D6_7c241ab1.MP4", // Family adventure video 3
};

const C = {
  bg: "#f7f5f0",
  espresso: "#3a2a1a",
  secondary: "#5a4a3a",
  accent: "#b08d57",
  muted: "#8a7a6a",
  olive: "#6B7B5E",
};

export default function FamilyExpeditions() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: C.bg }}>
      <BrandNavigation pageType="content" />
      <HeroSection />
      <IntroSection />
      <WithinOurGroundsSection />
      <RainforestAdventuresSection />
      <FamilyDiningSection />
      <YourPrivateRetreatSection />
      <PropertyLinksSection />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Family on hanging bridge (photo 06)
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      {/* Hero image */}
      <img src={FAMILY_CDN.family06} alt="Family Adventure" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />

      {/* Back to Pura Vida */}
      <div className="absolute top-24 left-0 right-0 z-20 flex justify-center">
        <Link
          href="/costa-rica"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 text-white/80" />
          <span className="text-white/80 text-[11px] tracking-[0.2em] uppercase" style={body}>
            Pura Vida
          </span>
        </Link>
      </div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center pb-12 md:pb-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-3xl md:text-5xl lg:text-6xl tracking-wide text-center leading-[1.1]"
          style={heading}
        >
          Family Adventure
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-4 text-white/60 text-sm md:text-base tracking-[0.1em] uppercase text-center"
          style={body}
        >
          Where wonder meets the wild
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   INTRO — "Where Every Day Is an Expedition"
   ═══════════════════════════════════════════════════════════════ */
function IntroSection() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-wide mb-8 text-center" style={{ ...heading, color: C.espresso }}>
            Where Every Day Is an Expedition
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-base md:text-lg leading-relaxed mb-6" style={{ ...body, color: C.secondary }}>
            The rainforest is the greatest classroom on Earth. It teaches patience, wonder, and respect for the living world. At Nayara, we believe families thrive when they explore together — not as tourists checking boxes, but as adventurers discovering something true about themselves and the natural world.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-base md:text-lg leading-relaxed mb-6" style={{ ...body, color: C.secondary }}>
            Every moment in Costa Rica's rainforest is a lesson. Your children will learn the calls of howler monkeys before they learn the names of the animals making them. They'll understand why a sloth moves slowly, why poison dart frogs are brilliant colors, why the forest never sleeps. They'll discover that adventure isn't about conquering nature — it's about understanding it, respecting it, and becoming part of it.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-base md:text-lg leading-relaxed" style={{ ...body, color: C.secondary }}>
            We've designed every experience at Nayara with families in mind. From guided nature walks to volcano treks, from private dining under the stars to quiet moments in a hammock watching the canopy, every expedition is built for wonder at any age. This is where childhood memories become lifelong passions.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   WITHIN OUR GROUNDS — On-property family experiences
   Photos: 02 (boardwalk), 05 (golf cart), 08 (nature discovery)
   ═══════════════════════════════════════════════════════════════ */
function WithinOurGroundsSection() {
  return (
    <section className="py-16 md:py-24 px-6" style={{ backgroundColor: C.bg }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h3 className="text-xl md:text-2xl tracking-wide mb-12 text-center" style={{ ...heading, color: C.espresso }}>
            Within Our Grounds
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Garden Exploration */}
          <FadeIn delay={0.1}>
            <div className="flex flex-col">
              <img src={FAMILY_CDN.family02} alt="Garden Boardwalk" className="w-full h-64 md:h-72 object-cover rounded-lg mb-6" />
              <h4 className="text-lg mb-3" style={{ ...bodyMedium, color: C.espresso }}>
                Garden Exploration
              </h4>
              <p className="text-sm leading-relaxed" style={{ ...body, color: C.muted }}>
                Wooden boardwalks wind through lily ponds and tropical gardens. Children spot toucans, poison dart frogs, and learn how the rainforest ecosystem connects every living thing. Our naturalists guide families through the canopy at their own pace.
              </p>
            </div>
          </FadeIn>

          {/* Getting Around */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col">
              <img src={FAMILY_CDN.family05} alt="Golf Cart Adventure" className="w-full h-64 md:h-72 object-cover rounded-lg mb-6" />
              <h4 className="text-lg mb-3" style={{ ...bodyMedium, color: C.espresso }}>
                Getting Around
              </h4>
              <p className="text-sm leading-relaxed" style={{ ...body, color: C.muted }}>
                Golf carts become expedition vehicles. Kids love the freedom of riding through lush paths, discovering hidden corners of the property. Every turn reveals something new — a bird's nest, a waterfall, a view of Arenal Volcano through the trees.
              </p>
            </div>
          </FadeIn>

          {/* Nature Discovery */}
          <FadeIn delay={0.3}>
            <div className="flex flex-col">
              <img src={FAMILY_CDN.family08} alt="Nature Discovery" className="w-full h-64 md:h-72 object-cover rounded-lg mb-6" />
              <h4 className="text-lg mb-3" style={{ ...bodyMedium, color: C.espresso }}>
                Nature Discovery
              </h4>
              <p className="text-sm leading-relaxed" style={{ ...body, color: C.muted }}>
                Guided nature walks with expert naturalists turn every path into a classroom. Children learn to identify plants, understand animal behavior, and develop a deep respect for the rainforest. Golden light, curious minds, and the sound of the forest — pure magic.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   RAINFOREST ADVENTURES — Off-property experiences
   Photo: 06 (hanging bridge) + link to Curated Excursions
   ═══════════════════════════════════════════════════════════════ */
function RainforestAdventuresSection() {
  return (
    <section className="py-16 md:py-24 px-6" style={{ backgroundColor: "#3a2a1a" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <FadeIn>
            <img src={FAMILY_CDN.family06} alt="Hanging Bridges" className="w-full h-96 object-cover rounded-lg" />
          </FadeIn>

          {/* Content */}
          <FadeIn delay={0.1}>
            <div>
              <h3 className="text-2xl md:text-3xl tracking-wide mb-6" style={{ ...heading, color: "white" }}>
                Rainforest Adventures
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{ ...body, color: "rgba(255,255,255,0.85)" }}>
                Beyond the resort, the rainforest opens up. Hanging bridges suspended in the canopy offer perspectives few people ever experience. Zip lines, waterfall hikes, night safaris — every adventure is guided by experts who know the forest intimately and understand how to make it safe and magical for families.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ ...body, color: "rgba(255,255,255,0.85)" }}>
                Your children will remember these moments forever. The rush of crossing a hanging bridge. The sound of howler monkeys echoing through the canopy. The discovery of a poison dart frog no bigger than a fingernail. The feeling of being truly alive in nature.
              </p>
              <Link
                href="/curated-excursions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border hover:bg-white hover:text-[#3a2a1a] transition-all duration-300"
                style={{ ...bodyMedium, color: "white", borderColor: "white" }}
              >
                Explore Curated Excursions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FAMILY DINING — Meals as experiences
   Photos: 07 (sunset dining), 09 (poolside breakfast), 12 (watermelon)
   ═══════════════════════════════════════════════════════════════ */
function FamilyDiningSection() {
  return (
    <section className="py-16 md:py-24 px-6" style={{ backgroundColor: C.bg }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h3 className="text-xl md:text-2xl tracking-wide mb-12 text-center" style={{ ...heading, color: C.espresso }}>
            Family Dining
          </h3>
        </FadeIn>

        <p className="text-base leading-relaxed mb-12 text-center max-w-3xl mx-auto" style={{ ...body, color: C.secondary }}>
          Meals at Nayara aren't just fuel — they're adventures. Fresh tropical fruits your children have never tasted. Local dishes prepared with ingredients from the region. Dining experiences that celebrate Costa Rican culture and the bounty of the rainforest.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sunset Dining */}
          <FadeIn delay={0.1}>
            <div className="flex flex-col">
              <img src={FAMILY_CDN.family07} alt="Sunset Dining" className="w-full h-64 md:h-72 object-cover rounded-lg mb-6" />
              <h4 className="text-lg mb-3" style={{ ...bodyMedium, color: C.espresso }}>
                Sunset Dining
              </h4>
              <p className="text-sm leading-relaxed" style={{ ...body, color: C.muted }}>
                Dinner under the stars in a tented pavilion. The sky turns gold and pink. Fireflies begin to glow. Your family shares a meal while the rainforest transitions from day to night. These are the moments children never forget.
              </p>
            </div>
          </FadeIn>

          {/* Poolside Breakfast */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col">
              <img src={FAMILY_CDN.family09} alt="Poolside Breakfast" className="w-full h-64 md:h-72 object-cover rounded-lg mb-6" />
              <h4 className="text-lg mb-3" style={{ ...bodyMedium, color: C.espresso }}>
                Poolside Breakfast
              </h4>
              <p className="text-sm leading-relaxed" style={{ ...body, color: C.muted }}>
                Wake to the sounds of the rainforest. Fresh tropical fruits, local pastries, and coffee while the jungle comes alive around you. Children splash in the pool. Parents relax. The day unfolds without rush or agenda.
              </p>
            </div>
          </FadeIn>

          {/* Fresh Flavors */}
          <FadeIn delay={0.3}>
            <div className="flex flex-col">
              <img src={FAMILY_CDN.family12} alt="Fresh Watermelon" className="w-full h-64 md:h-72 object-cover rounded-lg mb-6" />
              <h4 className="text-lg mb-3" style={{ ...bodyMedium, color: C.espresso }}>
                Fresh Flavors
              </h4>
              <p className="text-sm leading-relaxed" style={{ ...body, color: C.muted }}>
                Watermelon so fresh it was picked this morning. Papaya, mango, passion fruit — flavors your children have never experienced. Costa Rican cuisine celebrates the land. Every meal is a taste of place.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   YOUR PRIVATE RETREAT — Accommodations and relaxation
   Photos: 01 (infinity pool), 03 (hammock), 04 (daybed), 10 (pool play), 11 (family pool)
   ═══════════════════════════════════════════════════════════════ */
function YourPrivateRetreatSection() {
  return (
    <section className="py-16 md:py-24 px-6" style={{ backgroundColor: C.bg }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h3 className="text-xl md:text-2xl tracking-wide mb-12 text-center" style={{ ...heading, color: C.espresso }}>
            Your Private Retreat
          </h3>
        </FadeIn>

        <p className="text-base leading-relaxed mb-12 text-center max-w-3xl mx-auto" style={{ ...body, color: C.secondary }}>
          Adventure requires rest. Between expeditions, your family retreats to a private sanctuary designed for comfort and connection. Villas with infinity pools overlooking the rainforest. Hammocks for afternoon naps. Space to be together without distractions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Infinity Pool */}
          <FadeIn delay={0.1}>
            <img src={FAMILY_CDN.family01} alt="Infinity Pool" className="w-full h-64 object-cover rounded-lg" />
          </FadeIn>

          {/* Hammock Retreat */}
          <FadeIn delay={0.2}>
            <img src={FAMILY_CDN.family03} alt="Hammock Retreat" className="w-full h-64 object-cover rounded-lg" />
          </FadeIn>

          {/* Tented Comfort */}
          <FadeIn delay={0.3}>
            <img src={FAMILY_CDN.family04} alt="Tented Comfort" className="w-full h-64 object-cover rounded-lg" />
          </FadeIn>

          {/* Pool Play */}
          <FadeIn delay={0.4}>
            <img src={FAMILY_CDN.family10} alt="Pool Play" className="w-full h-64 object-cover rounded-lg" />
          </FadeIn>

          {/* Family Pool */}
          <FadeIn delay={0.5}>
            <img src={FAMILY_CDN.family11} alt="Family Pool" className="w-full h-64 object-cover rounded-lg" />
          </FadeIn>

          {/* Lifestyle - Family Bonding */}
          <FadeIn delay={0.6}>
            <img src={FAMILY_CDN.lifestyle01} alt="Family Bonding" className="w-full h-64 object-cover rounded-lg" />
          </FadeIn>

          {/* Lifestyle - Rainforest Exploration */}
          <FadeIn delay={0.7}>
            <img src={FAMILY_CDN.lifestyle02} alt="Rainforest Exploration" className="w-full h-64 object-cover rounded-lg" />
          </FadeIn>

          {/* Lifestyle - Nature Connection */}
          <FadeIn delay={0.8}>
            <img src={FAMILY_CDN.lifestyle03} alt="Nature Connection" className="w-full h-64 object-cover rounded-lg" />
          </FadeIn>

          {/* Lifestyle - Adventure Moment */}
          <FadeIn delay={0.9}>
            <img src={FAMILY_CDN.lifestyle04} alt="Adventure Moment" className="w-full h-64 object-cover rounded-lg" />
          </FadeIn>

          {/* Lifestyle - Family Together */}
          <FadeIn delay={1.0}>
            <img src={FAMILY_CDN.lifestyle05} alt="Family Together" className="w-full h-64 object-cover rounded-lg" />
          </FadeIn>

          {/* Lifestyle - Sunset Experience */}
          <FadeIn delay={1.1}>
            <img src={FAMILY_CDN.lifestyle06} alt="Sunset Experience" className="w-full h-64 object-cover rounded-lg" />
          </FadeIn>

          {/* Lifestyle - Family at Salt Flats */}
          <FadeIn delay={1.2}>
            <img src={FAMILY_CDN.lifestyle07} alt="Family at Salt Flats" className="w-full h-64 object-cover rounded-lg" />
          </FadeIn>

          {/* Lifestyle - Family in Desert Landscape */}
          <FadeIn delay={1.3}>
            <img src={FAMILY_CDN.lifestyle08} alt="Family in Desert Landscape" className="w-full h-64 object-cover rounded-lg" />
          </FadeIn>

          {/* Lifestyle - Family at Rock Formation */}
          <FadeIn delay={1.4}>
            <img src={FAMILY_CDN.lifestyle09} alt="Family at Rock Formation" className="w-full h-64 object-cover rounded-lg" />
          </FadeIn>

          {/* Lifestyle - Family at Rapa Nui Moai */}
          <FadeIn delay={1.5}>
            <img src={FAMILY_CDN.lifestyle10} alt="Family at Rapa Nui Moai" className="w-full h-64 object-cover rounded-lg" />
          </FadeIn>

          {/* Lifestyle - Family Hiking in Desert */}
          <FadeIn delay={1.6}>
            <img src={FAMILY_CDN.lifestyle11} alt="Family Hiking in Desert" className="w-full h-64 object-cover rounded-lg" />
          </FadeIn>
        </div>

        <FadeIn delay={0.7} className="mt-12">
          <div className="max-w-3xl mx-auto">
            <p className="text-base leading-relaxed mb-6" style={{ ...body, color: C.secondary }}>
              Each villa is designed for families. Multiple bedrooms. Private plunge pools. Open-air showers surrounded by nature. Terraces where you can watch the sunset together. These aren't hotel rooms — they're homes in the rainforest.
            </p>
            <p className="text-base leading-relaxed" style={{ ...body, color: C.secondary }}>
              After a day of adventure, your family gathers on the terrace. Children are tired, happy, full of stories. The rainforest hums around you. The stars emerge. You realize that this is what you came for — not just the activities, but the connection. The time together. The feeling of being truly present with the people you love most.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROPERTY LINKS — Cross-link to Costa Rica properties
   ═══════════════════════════════════════════════════════════════ */
function PropertyLinksSection() {
  const properties = [
    { name: "Nayara Gardens", desc: "Family-Friendly Rainforest Adventure", route: "/gardens" },
    { name: "Nayara Tented Camp", desc: "Luxury Tented Camp in the Rainforest", route: "/tented-camp" },
    { name: "Nayara Springs", desc: "Private Hot Springs Villas", route: "/springs" },
  ];

  return (
    <section className="py-16 md:py-24 px-6" style={{ backgroundColor: "#f0ebe5" }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h3 className="text-xl md:text-2xl tracking-wide mb-12 text-center" style={{ ...heading, color: C.espresso }}>
            Explore Our Costa Rica Properties
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((prop, i) => (
            <FadeIn key={prop.name} delay={i * 0.1}>
              <Link href={prop.route} className="block p-6 rounded-lg border border-[#3a2a1a]/10 hover:border-[#3a2a1a]/30 hover:bg-white/50 transition-all duration-300">
                <h4 className="text-lg mb-2" style={{ ...bodyMedium, color: C.espresso }}>
                  {prop.name}
                </h4>
                <p className="text-sm" style={{ ...body, color: C.muted }}>
                  {prop.desc}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
