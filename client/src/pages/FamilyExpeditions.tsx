/**
 * FAMILY ADVENTURE — Full Multi-Destination Experience Page
 * Editorial page celebrating family experiences across ALL Nayara destinations
 * Hero → Intro → Costa Rica (Within Grounds + Rainforest + Dining) → Atacama → Rapa Nui → Private Retreat → Property Links → Footer
 * No blog link — this IS the family content destination
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import BlobVideo from "@/components/BlobVideo";
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

/* CDN URLs for all family photos and videos */
const FAMILY_CDN = {
  family01: "/manus-storage/family-01_e9948091.jpeg",
  family02: "/manus-storage/family-02_3a69b830.jpeg",
  family03: "/manus-storage/family-03_b660affc.jpeg",
  family04: "/manus-storage/family-04_5c3acb9e.jpeg",
  family05: "/manus-storage/family-05_e332d3ec.jpeg",
  family06: "/manus-storage/family-06_2f82f791.jpeg",
  family07: "/manus-storage/family-07_f0147c04.jpeg",
  family08: "/manus-storage/family-08_ff4cf5e1.jpeg",
  family09: "/manus-storage/family-09_666f1de3.jpeg",
  family10: "/manus-storage/family-10_1f8a4a08.jpeg",
  family11: "/manus-storage/family-11_4cb70bfe.jpeg",
  family12: "/manus-storage/family-12_583766fc.jpeg",
  // Lifestyle images
  lifestyle01: "/manus-storage/C7EB2DFF-6668-48E6-899D-3067BC8714D3_4532f8cb.jpeg",
  lifestyle02: "/manus-storage/1A05A53A-8844-4BE1-BEFF-68EB927D17EE_cd4d895b.jpeg",
  lifestyle03: "/manus-storage/0942721F-9688-4D31-BC00-088986813147_f28eaea7.jpeg",
  lifestyle04: "/manus-storage/FB7E9511-08F3-408E-A526-4F8502B2BFEF_37862b6d.JPG",
  lifestyle05: "/manus-storage/9E3CE1EB-2513-4CFC-9A30-8BDF108560F2_f00b13a1.jpeg",
  lifestyle06: "/manus-storage/19D87A5E-26A9-411A-808D-D5F063AEABAB_503a9e04.jpeg",
  // Atacama + Rapa Nui lifestyle
  lifestyle07: "/manus-storage/2A490607-CB1C-40D1-9B00-545785B6DF46_bff954ff.jpeg",
  lifestyle08: "/manus-storage/F150C1D3-7F2A-436E-A063-A16BAD15B4EC_570d5284.jpeg",
  lifestyle09: "/manus-storage/8E541EBC-C963-4A2E-B4D0-F17329128862_db843ae2.jpeg",
  lifestyle10: "/manus-storage/AEE3A43C-D335-4894-B155-7FFC674164A5_c13d5544.jpeg",
  lifestyle11: "/manus-storage/DCEC7B37-9C64-4606-AFD1-4E72E53B5A79_2fe5beba.jpeg",
  // Blog-specific images
  tentVolcano: "/manus-storage/family-tent-volcano_02f91f57.jpeg",
  hangingBridge: "/manus-storage/family-hanging-bridge_be5ed446.jpeg",
  poolToss: "/manus-storage/family-pool-toss_36807b93.jpeg",
  atacamaBiking: "/manus-storage/family-atacama-biking_da3d4690.jpg",
  rapaNuiMoai: "/manus-storage/family-rapa-nui-moai_0b273e95.jpg",
  // Videos
  video01: "/manus-storage/FFA71E3F-2FC4-4F44-911C-B5F89132C534_609aded7.MP4",
  video02: "/manus-storage/F9D35949-EA6E-4F8A-9546-BC33C8E74D55_aa913437.MP4",
  video03: "/manus-storage/17B4FC71-6562-475F-A780-48284A75B8D6_7c241ab1.MP4",
  rainbowValley: "/manus-storage/rainbow-valley-vertical_dc5dfaab.mp4",
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
      <AtacamaFamilySection />
      <RapaNuiFamilySection />
      <YourPrivateRetreatSection />
      <PropertyLinksSection />
      <Footer textColor="#FFFFFF" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Family tent with volcano view
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();

  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      {isMobile ? (
        <img
          src="/manus-storage/family-mobile-hero-still_3ec98fc3.jpg"
          alt="Family at Nayara Tented Camp"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
      ) : (
        <img src={FAMILY_CDN.tentVolcano} alt="Family tent deck overlooking Arenal Volcano" className="absolute inset-0 w-full h-full object-cover"  decoding="async" loading="lazy" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center pb-12 md:pb-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide text-center leading-[1.1]"
          style={heading}
        >
          The World as a Classroom
        </motion.h1>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   INTRO — Philosophy
   ═══════════════════════════════════════════════════════════════ */
function IntroSection() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-wide mb-8 text-center" style={{ ...heading, color: C.espresso }}>
            Where Every Destination Is a Discovery
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-base md:text-lg leading-relaxed mb-6" style={{ ...body, color: C.secondary }}>
            Most families see a bucket list as a list of dreams. At Nayara, it is a Tuesday. Across three countries and six properties, the world becomes the curriculum. The rainforest teaches biology without a textbook. The desert teaches geology in color. The Moai teach history by standing in front of you, 30 feet tall, carved from volcanic stone by hands that had no metal tools.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-base md:text-lg leading-relaxed mb-6" style={{ ...body, color: C.secondary }}>
            Children do not study these things. They encounter them. And the difference between studying and encountering is the difference between knowing and understanding. This is what family travel looks like when the destination is designed for discovery.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-base md:text-lg leading-relaxed" style={{ ...body, color: C.secondary }}>
            We've designed every experience at Nayara with families in mind. From guided nature walks to volcano treks, from cooking classes to stargazing observatories, from ancient archaeology to coral reef snorkeling — every expedition is built for wonder at any age. This is where childhood memories become lifelong passions.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   WITHIN OUR GROUNDS — Costa Rica on-property experiences
   ═══════════════════════════════════════════════════════════════ */
function WithinOurGroundsSection() {
  return (
    <section className="py-16 md:py-24 px-6" style={{ backgroundColor: C.bg }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-[11px] tracking-[0.3em] uppercase text-center mb-3" style={{ ...bodyMedium, color: C.accent }}>
            Costa Rica
          </p>
          <h3 className="text-xl md:text-2xl tracking-wide mb-12 text-center" style={{ ...heading, color: C.espresso }}>
            Within Our Grounds
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Garden Exploration */}
          <FadeIn delay={0.1}>
            <div className="flex flex-col">
              <img src={FAMILY_CDN.family02} alt="Garden Boardwalk" className="w-full h-64 md:h-72 object-cover rounded-lg mb-6"  decoding="async" loading="lazy" />
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
              <img src={FAMILY_CDN.family05} alt="Golf Cart Adventure" className="w-full h-64 md:h-72 object-cover rounded-lg mb-6"  decoding="async" loading="lazy" />
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
              <img src={FAMILY_CDN.family08} alt="Nature Discovery" className="w-full h-64 md:h-72 object-cover rounded-lg mb-6"  decoding="async" loading="lazy" />
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
   RAINFOREST ADVENTURES — Off-property Costa Rica experiences
   ═══════════════════════════════════════════════════════════════ */
function RainforestAdventuresSection() {
  return (
    <section className="py-16 md:py-24 px-6" style={{ backgroundColor: "#3a2a1a" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <FadeIn>
            <img src={FAMILY_CDN.hangingBridge} alt="Children in yellow raincoats crossing hanging bridges" className="w-full h-96 object-cover rounded-lg"  decoding="async" loading="lazy" />
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
                Your children will remember these moments forever. The rush of crossing a hanging bridge 200 feet above the forest floor. The sound of howler monkeys echoing through the canopy. The discovery of a poison dart frog no bigger than a fingernail. The feeling of being truly alive in nature.
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
   ═══════════════════════════════════════════════════════════════ */
function FamilyDiningSection() {
  return (
    <section className="py-16 md:py-24 px-6" style={{ backgroundColor: C.bg }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h3 className="text-xl md:text-2xl tracking-wide mb-4 text-center" style={{ ...heading, color: C.espresso }}>
            Family Dining
          </h3>
        </FadeIn>

        <p className="text-base leading-relaxed mb-12 text-center max-w-3xl mx-auto" style={{ ...body, color: C.secondary }}>
          Meals at Nayara aren't just fuel — they're adventures. Cooking classes where children build their own tacos. Chocolate experiences from bean to bar. Fresh tropical fruits your children have never tasted. Every meal is a taste of place.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sunset Dining */}
          <FadeIn delay={0.1}>
            <div className="flex flex-col">
              <img src={FAMILY_CDN.family07} alt="Sunset Dining" className="w-full h-64 md:h-72 object-cover rounded-lg mb-6"  decoding="async" loading="lazy" />
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
              <img src={FAMILY_CDN.family09} alt="Poolside Breakfast" className="w-full h-64 md:h-72 object-cover rounded-lg mb-6"  decoding="async" loading="lazy" />
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
              <img src={FAMILY_CDN.family12} alt="Fresh Watermelon" className="w-full h-64 md:h-72 object-cover rounded-lg mb-6"  decoding="async" loading="lazy" />
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
   ATACAMA FAMILY — Desert adventures for families
   ═══════════════════════════════════════════════════════════════ */
function AtacamaFamilySection() {
  return (
    <section className="py-16 md:py-24 px-6" style={{ backgroundColor: "#2a1f15" }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-[11px] tracking-[0.3em] uppercase text-center mb-3" style={{ ...bodyMedium, color: C.accent }}>
            Chile
          </p>
          <h3 className="text-2xl md:text-3xl tracking-wide mb-6 text-center" style={{ ...heading, color: "white" }}>
            The Desert as Classroom
          </h3>
          <p className="text-base leading-relaxed mb-12 text-center max-w-3xl mx-auto" style={{ ...body, color: "rgba(255,255,255,0.8)" }}>
            The Atacama Desert is the driest place on Earth, and one of the most extraordinary classrooms a family could ask for. At Nayara Alto Atacama, the landscape itself becomes the lesson.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Atacama biking image */}
          <FadeIn>
            <img src={FAMILY_CDN.atacamaBiking} alt="Family mountain biking through Atacama canyons" className="w-full h-80 object-cover rounded-lg"  decoding="async" loading="lazy" />
          </FadeIn>

          {/* Content */}
          <FadeIn delay={0.1}>
            <div>
              <h4 className="text-xl mb-4" style={{ ...bodyMedium, color: "white" }}>
                Rainbow Valley & Canyon Biking
              </h4>
              <p className="text-base leading-relaxed mb-4" style={{ ...body, color: "rgba(255,255,255,0.8)" }}>
                Rainbow Valley is a geological canvas of mineral-stained hills in reds, greens, purples, and golds. Children walk through millions of years of Earth's history written in color across the rock face. Iron oxide for red, copper for green, manganese for purple — a chemistry lesson delivered by the landscape itself.
              </p>
              <p className="text-base leading-relaxed" style={{ ...body, color: "rgba(255,255,255,0.8)" }}>
                The Devil's Trek mountain biking trails thread through narrow canyons carved by ancient rivers. Red rock walls rise on either side, the light shifting as the sun moves overhead. Challenging enough for teenagers, accessible enough for younger riders with guides who know every turn.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Atacama lifestyle grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn delay={0.1}>
            <div className="flex flex-col">
              <img src={FAMILY_CDN.lifestyle07} alt="Family at salt flats" className="w-full h-64 object-cover rounded-lg mb-6"  decoding="async" loading="lazy" />
              <h4 className="text-lg mb-3" style={{ ...bodyMedium, color: "white" }}>
                Salt Flat Sunrise
              </h4>
              <p className="text-sm leading-relaxed" style={{ ...body, color: "rgba(255,255,255,0.7)" }}>
                The Salar de Atacama at dawn, when flamingos feed in the shallow brine and the light turns the salt crust gold. Children learn that life thrives even in the most extreme environments.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col">
              <img src={FAMILY_CDN.lifestyle11} alt="Family hiking in desert" className="w-full h-64 object-cover rounded-lg mb-6"  decoding="async" loading="lazy" />
              <h4 className="text-lg mb-3" style={{ ...bodyMedium, color: "white" }}>
                Desert Trekking
              </h4>
              <p className="text-sm leading-relaxed" style={{ ...body, color: "rgba(255,255,255,0.7)" }}>
                Guided hikes through canyons and valleys reveal the desert's hidden life. Ancient petroglyphs, geothermal vents, and rock formations that tell the story of millions of years. The silence teaches something about scale that no classroom can.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col">
              <img src={FAMILY_CDN.lifestyle09} alt="Family at rock formation" className="w-full h-64 object-cover rounded-lg mb-6"  decoding="async" loading="lazy" />
              <h4 className="text-lg mb-3" style={{ ...bodyMedium, color: "white" }}>
                Stargazing
              </h4>
              <p className="text-sm leading-relaxed" style={{ ...body, color: "rgba(255,255,255,0.7)" }}>
                Alto Atacama's on-site observatory puts Saturn's rings within reach. Children who see the Milky Way as a river of light across the entire sky carry that image forever. They learn they are looking backward through time.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   RAPA NUI FAMILY — Easter Island adventures for families
   ═══════════════════════════════════════════════════════════════ */
function RapaNuiFamilySection() {
  return (
    <section className="py-16 md:py-24 px-6" style={{ backgroundColor: C.bg }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-[11px] tracking-[0.3em] uppercase text-center mb-3" style={{ ...bodyMedium, color: C.accent }}>
            Easter Island
          </p>
          <h3 className="text-2xl md:text-3xl tracking-wide mb-6 text-center" style={{ ...heading, color: C.espresso }}>
            The Moai as Open-Air Museum
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <FadeIn>
            <div>
              <p className="text-base leading-relaxed mb-6" style={{ ...body, color: C.secondary }}>
                There are fewer than 1,000 Moai on Earth, and every single one stands on Rapa Nui. At Nayara Hangaroa, families encounter something that exists nowhere else: a civilization's legacy carved in volcanic stone, facing the Pacific.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ ...body, color: C.secondary }}>
                How did an ancient civilization move these giants — some over 30 feet tall, weighing 80 tons — across the island without wheels, without metal tools, without written plans? Children ask this question immediately. Adults never stop asking it.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ ...body, color: C.secondary }}>
                Between the archaeology, families explore on horseback across the island's green hills, snorkel in waters so clear the coral seems painted, and learn the Rapa Nui language from locals who still speak it. This is not a museum visit. It is a living culture.
              </p>
              <Link
                href="/hangaroa"
                className="inline-flex items-center gap-2 text-[13px] tracking-[0.05em] border-b pb-0.5 transition-colors"
                style={{ ...body, color: C.muted, borderColor: `${C.muted}40` }}
              >
                Explore Nayara Hangaroa
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </FadeIn>

          {/* Image */}
          <FadeIn delay={0.1}>
            <img src={FAMILY_CDN.rapaNuiMoai} alt="Family before the Moai statues on Rapa Nui" className="w-full h-96 object-cover rounded-lg"  decoding="async" loading="lazy" />
          </FadeIn>
        </div>

        {/* Additional Rapa Nui image */}
        <FadeIn delay={0.2} className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={FAMILY_CDN.lifestyle10} alt="Family at Moai site" className="w-full h-64 object-cover rounded-lg"  decoding="async" loading="lazy" />
            <div className="flex flex-col justify-center">
              <h4 className="text-lg mb-4" style={{ ...bodyMedium, color: C.espresso }}>
                The Rapa Nui Bucket List
              </h4>
              <ul className="space-y-3">
                <li className="text-sm leading-relaxed" style={{ ...body, color: C.muted }}>
                  <strong style={{ color: C.espresso }}>Ahu Tongariki at Sunrise</strong> — Fifteen Moai silhouetted against the Pacific dawn
                </li>
                <li className="text-sm leading-relaxed" style={{ ...body, color: C.muted }}>
                  <strong style={{ color: C.espresso }}>Rano Raraku Quarry</strong> — Where the Moai were born, unfinished statues still embedded in hillside
                </li>
                <li className="text-sm leading-relaxed" style={{ ...body, color: C.muted }}>
                  <strong style={{ color: C.espresso }}>Horseback Across the Island</strong> — Green hills, volcanic craters, ocean views
                </li>
                <li className="text-sm leading-relaxed" style={{ ...body, color: C.muted }}>
                  <strong style={{ color: C.espresso }}>Snorkeling in Crystal Waters</strong> — Visibility that makes the ocean feel like air
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   YOUR PRIVATE RETREAT — Accommodations and relaxation
   ═══════════════════════════════════════════════════════════════ */
function YourPrivateRetreatSection() {
  return (
    <section className="py-16 md:py-24 px-6" style={{ backgroundColor: "#f0ebe5" }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h3 className="text-xl md:text-2xl tracking-wide mb-12 text-center" style={{ ...heading, color: C.espresso }}>
            Your Private Retreat
          </h3>
        </FadeIn>

        <p className="text-base leading-relaxed mb-12 text-center max-w-3xl mx-auto" style={{ ...body, color: C.secondary }}>
          Adventure requires rest. Between expeditions, your family retreats to a private sanctuary designed for comfort and connection. Villas with infinity pools overlooking the rainforest. Hammocks for afternoon naps. Space to be together without distractions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <FadeIn delay={0.1}>
            <img src={FAMILY_CDN.family01} alt="Infinity Pool" className="w-full h-48 md:h-64 object-cover rounded-lg"  decoding="async" loading="lazy" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <img src={FAMILY_CDN.poolToss} alt="Pool Play" className="w-full h-48 md:h-64 object-cover rounded-lg"  decoding="async" loading="lazy" />
          </FadeIn>
          <FadeIn delay={0.2}>
            <img src={FAMILY_CDN.family03} alt="Hammock Retreat" className="w-full h-48 md:h-64 object-cover rounded-lg"  decoding="async" loading="lazy" />
          </FadeIn>
          <FadeIn delay={0.25}>
            <img src={FAMILY_CDN.family04} alt="Tented Comfort" className="w-full h-48 md:h-64 object-cover rounded-lg"  decoding="async" loading="lazy" />
          </FadeIn>
          <FadeIn delay={0.3}>
            <img src={FAMILY_CDN.family11} alt="Family Pool" className="w-full h-48 md:h-64 object-cover rounded-lg"  decoding="async" loading="lazy" />
          </FadeIn>
          <FadeIn delay={0.35}>
            <img src={FAMILY_CDN.lifestyle01} alt="Family Bonding" className="w-full h-48 md:h-64 object-cover rounded-lg"  decoding="async" loading="lazy" />
          </FadeIn>
        </div>

        <FadeIn delay={0.4} className="mt-12">
          <div className="max-w-3xl mx-auto">
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
   PROPERTY LINKS — All family-friendly properties
   ═══════════════════════════════════════════════════════════════ */
function PropertyLinksSection() {
  const properties = [
    { name: "Nayara Gardens", desc: "Family-Friendly Rainforest Adventure", route: "/gardens" },
    { name: "Nayara Tented Camp", desc: "Luxury Tented Camp in the Rainforest", route: "/tented-camp" },
    { name: "Nayara Alto Atacama", desc: "Desert Stargazing & Canyon Adventures", route: "/alto-atacama" },
    { name: "Nayara Hangaroa", desc: "Easter Island Archaeology & Culture", route: "/hangaroa" },
  ];

  return (
    <section className="py-16 md:py-24 px-6" style={{ backgroundColor: C.bg }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h3 className="text-xl md:text-2xl tracking-wide mb-12 text-center" style={{ ...heading, color: C.espresso }}>
            Explore Our Family Destinations
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((prop, i) => (
            <FadeIn key={prop.name} delay={i * 0.1}>
              <Link href={prop.route} className="block p-6 rounded-lg border border-[#3a2a1a]/10 hover:border-[#3a2a1a]/30 hover:bg-white/50 transition-all duration-300">
                <h4 className="text-base mb-2" style={{ ...bodyMedium, color: C.espresso }}>
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
