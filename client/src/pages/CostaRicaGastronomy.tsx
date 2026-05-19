/*
 * DEFINITIVE COSTA RICA GASTRONOMY — "Forest to Table"
 * The single gastronomy page for all three Costa Rica properties.
 * Routes: /tented-camp/gastronomy, /gardens/gastronomy, /springs/gastronomy
 * Always renders in Tented Camp palette (dark, immersive).
 * 
 * Sections:
 * Hero → ScrollingHeader → Stats → Philosophy → Restaurant Grid (with images + deep links)
 * → Sweet Moments → Bar Scene → Five Classes → Nayara Difference → Blog Cross-Link → Footer
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link, useLocation } from "wouter";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import PillarCrossLink from "@/components/PillarCrossLink";
import { PROPERTIES } from "@/data/navigation";
import {
  AnimateOnScroll,
  StaggerOnScroll,
  DrawLine,
  fadeUp,
  staggerContainer,
} from "@/components/motion";

/* ── Palette (Tented Camp — always) ── */
const PALETTE = {
  bg: "#2C3A2E",
  bgAlt: "#253228",
  primary: "#868B75",
  accent: "#B8A88A",
  text: "#E6DFD5",
  textMuted: "#E6DFD5",
  footerBg: "#1a2a1c",
};

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

/* ── Hero video ── */
const HERO_VIDEO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gastronomy-hero-audio_0f3604db.mp4";
const HERO_IMAGE = "/manus-storage/tc-gastronomy-hero_d9a6b8ac.jpg";

/* ── Stats ── */
const STATS = [
  { value: "12", label: "Restaurants & Bars" },
  { value: "3", label: "Properties" },
  { value: "5", label: "Culinary Classes" },
  { value: "1", label: "Philosophy" },
];

/* ── Restaurant data with enriched descriptions from blog ── */
interface RestaurantEntry {
  name: string;
  cuisine: string;
  description: string;
  image: string;
  route: string;
  isVideo?: boolean;
}

const GARDENS_RESTAURANTS: RestaurantEntry[] = [
  {
    name: "Nostalgia Wine Bar",
    cuisine: "Wine & Small Plates",
    description: "A curated library of over 200 labels from Old and New World vineyards, presided over by a certified sommelier who leads structured tastings paired with artisanal cheese boards and charcuterie. Candlelit, open-air, overlooking the garden ponds — transforms a simple tasting into an event.",
    image: "/manus-storage/nostalgia-1_2e268294.jpg",
    route: "/gardens/gastronomy/nostalgia",
  },
  {
    name: "La Terrazza",
    cuisine: "Italian",
    description: "Handmade pasta prepared fresh daily. Costa Rican ingredients reinterpret Italian classics: pappardelle with slow-braised local beef, wood-fired pizzas topped with tropical herbs, and tiramisu made with Arenal-region coffee. Open terrace beneath a canopy of tropical trees.",
    image: "/manus-storage/la-terraza-bar-front_ccd17a7a.jpg",
    route: "/gardens/gastronomy/la-terraza",
  },
  {
    name: "Asia Luna",
    cuisine: "Asian Fusion",
    description: "Familiar techniques from across Asia reinterpreted through Central American produce and tradition. Thai curries with local coconut, Japanese-inspired ceviches using Costa Rican fish, wok-fired dishes celebrating volcanic soil's bounty. Open kitchen with seasonal specials from local farms.",
    image: "/manus-storage/asia-luna-3_2b44c4d5.jpg",
    route: "/gardens/gastronomy/asia-luna",
  },
  {
    name: "Layla's Gelato",
    cuisine: "Artisan Gelato",
    description: "Handcrafted flavors that capture the essence of Costa Rica — guanábana, cas, local chocolate from the Caribbean coast, and seasonal inspirations churned fresh daily. Traditional Italian technique with Costa Rican ingredients, made in small batches.",
    image: "/manus-storage/laylas-1_88c3c926.jpg",
    route: "/gardens/gastronomy/lylas-gelato",
  },
];

const SPRINGS_RESTAURANTS: RestaurantEntry[] = [
  {
    name: "Amor Loco",
    cuisine: "Fine Dining",
    description: "Culinary artistry meets impeccable service. The tasting menu changes seasonally — ceviche of corvina cured in passion fruit and habanero, slow-cooked pork belly with tamarind glaze, chocolate dessert using single-origin cacao from Talamanca. Wine pairing curated by the sommelier.",
    image: "/manus-storage/al300-07_456492ee.jpg",
    route: "/springs/gastronomy/amor-loco",
  },
  {
    name: "Mis Amores",
    cuisine: "Italian Bistro",
    description: "Simplicity executed perfectly: house-made focaccia, burrata with heirloom tomatoes, seasonal risottos, grilled meats and seafood. The atmosphere is warm and unhurried — the kind of restaurant where you come for a quick lunch and stay for two hours.",
    image: "/manus-storage/mis-amores-3_58c06b2d.jpg",
    route: "/springs/gastronomy/mis-amores",
  },
  {
    name: "Besame Mucho",
    cuisine: "Latin American",
    description: "Passionate flavors of Latin America brought to life in the rainforest. Bold spices, traditional preparations, and the warmth of a cuisine built on generations of family recipes.",
    image: "/manus-storage/besame-mucho-cover_6fcf6b29.jpg",
    route: "/springs/gastronomy/besame-mucho",
  },
  {
    name: "Mi Cafecito",
    cuisine: "Coffee & Pastries",
    description: "Costa Rican coffee heritage, bean to cup. Beans from the Tarrazú and Dota Valley highlands roasted for your morning cup. The citrus brightness of a light roast, the chocolate depth of a medium — every cup tells the story of volcanic soil and tropical seasons.",
    image: "/manus-storage/mi-cafecito-1_bf532654.jpg",
    route: "/springs/gastronomy/mi-cafecito",
  },
];

const TENTED_RESTAURANTS: RestaurantEntry[] = [
  {
    name: "Ayla",
    cuisine: "Modern Mediterranean",
    description: "The philosophy of cooking with fire reaches its fullest expression. Meats slow-cooked over native hardwoods, vegetables charred for natural sweetness. Lamb kofta with local yogurt tzatziki, grilled octopus with chimichurri, wood-fired flatbreads, mezze platters for sharing. The fire pit becomes a gathering point at night.",
    image: "/manus-storage/ayla-cover-new_9e220bdb.jpg",
    route: "/tented-camp/gastronomy/ayla",
  },
  {
    name: "Henry's Bar",
    cuisine: "Cocktail Bar & Lounge",
    description: "An intimate setting for evening conversation. The cocktail menu is crafted around Costa Rican spirits — guaro, local rum, coffee liqueur — mixed with fresh ingredients that change with the season. Low lighting, the sound of the forest, the warmth of the fire pit nearby.",
    image: "/manus-storage/henrys-bar-cover_981148ec.jpeg",
    route: "/tented-camp/gastronomy/henrys-bar",
  },
  {
    name: "Lapas Pool Bar",
    cuisine: "Poolside Bites & Cocktails",
    description: "Tropical refreshments by the infinity pool. Cocktails built around fresh tropical juices, local rum, and herbs picked from the property's garden. Arenal Volcano as backdrop makes every drink feel like a celebration.",
    image: "/manus-storage/lapas-pool-bar-card_75d3e6ae.mp4",
    route: "/tented-camp/gastronomy/lapas-pool-bar",
    isVideo: true,
  },
];

/* ── Bar data ── */
interface BarEntry {
  name: string;
  property: string;
  description: string;
}

const BARS: BarEntry[] = [
  {
    name: "Lapa's Pool Bar",
    property: "Nayara Springs",
    description: "Tropical and refreshing — cocktails built around fresh tropical juices, local rum, and herbs picked from the property's garden. The infinity pool setting, with Arenal Volcano as backdrop, makes every drink feel like a celebration.",
  },
  {
    name: "Henry's Bar",
    property: "Nayara Tented Camp",
    description: "The cocktail menu is crafted around Costa Rican spirits — guaro, local rum, coffee liqueur — mixed with fresh ingredients that change with the season. The atmosphere — low lighting, the sound of the forest, the warmth of the fire pit — is the kind of place where a well-made cocktail is all you need.",
  },
  {
    name: "Las Thermas Bar",
    property: "Nayara Tented Camp",
    description: "Drinks poolside at the hot springs — imagine sipping a passion fruit mojito while soaking in geothermally heated water beneath the stars. More than a bar, it is a social hub where guests gather to soak, unwind, and connect.",
  },
  {
    name: "Tentacamp Pool Bar",
    property: "Nayara Tented Camp",
    description: "Casual refreshment with views that remind you why you came to Costa Rica in the first place.",
  },
];

/* ── Class data (enriched from blog) ── */
interface ClassEntry {
  name: string;
  description: string;
  media: string;
  type: "video" | "image";
}

const CLASSES: ClassEntry[] = [
  {
    name: "Wine Tasting",
    description: "Five to seven wines at Nostalgia Wine Bar, each paired with a complementary bite. The sommelier explains terroir, vintage, and technique — in service of pleasure, never pedantry. Guests leave understanding not just what they like, but why.",
    media: "/manus-storage/nostalgia-1_2e268294.jpg",
    type: "image",
  },
  {
    name: "Cooking Class",
    description: "At Ayla. Open-fire technique and Costa Rican-Mediterranean fusion. Gallo pinto, ceviche with local fish, and a main course over the grill. Hands-on — you cook, you taste, you adjust, you eat what you made. Families welcome.",
    media: "/manus-storage/cooking-class-clip_a2af26bb.mp4",
    type: "video",
  },
  {
    name: "Coffee Class",
    description: "A two-hour journey from cherry to cup. Roast your own beans, grind them, and brew using three different methods. Learn why altitude, soil, and processing method matter more than brand. Take home a bag of beans you roasted yourself.",
    media: "/manus-storage/coffee-roasting_a59dcb29.webp",
    type: "image",
  },
  {
    name: "Mixology Class",
    description: "Balance sweet, sour, bitter, and spirit. Make three cocktails — one classic, one tropical, one of your own invention. The bartender shares techniques that work in any home kitchen.",
    media: "/manus-storage/mixology-class-v2_f3dc1d6d.mp4",
    type: "video",
  },
  {
    name: "Rum Tasting",
    description: "Five rums, aged from two to twenty-three years, each with a story of terroir and tradition. Learn to nose, taste, and appreciate the difference between industrial and artisanal production. Central America's most storied spirit.",
    media: "/manus-storage/nostalgia-1_2e268294.jpg",
    type: "image",
  },
];

/* ── Utility ── */
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */
interface Props {
  propertySlug?: string;
}

export default function CostaRicaGastronomy({ propertySlug }: Props) {
  const propertyName = PROPERTIES.find(p => p.id === propertySlug)?.name || "Nayara";
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.bg }}>
      <BrandNavigation pageType="property" backLink={{ label: propertyName, href: `/${propertySlug}` }} />
      <HeroSection />
      <ByTheNumbers />
      <PhilosophySection />
      <RestaurantGridSection />
      <SweetMomentsSection />
      <BarSceneSection />
      <ClassesSection />
      <NayaraDifferenceSection />
      <BlogCrossLink />
      <Footer pageType="property" bgColor={PALETTE.footerBg} textColor="#FFFFFF" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Full-bleed image with gradient
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative aspect-[16/9] w-full overflow-hidden">
      <img src={HERO_IMAGE} alt="Honeycomb dessert — Costa Rica gastronomy" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />
      <div className="absolute bottom-8 md:bottom-12 left-0 right-0 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-xl md:text-3xl lg:text-4xl tracking-wide"
          style={heading}
        >
          Forest to Table
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/50 text-[12px] tracking-[0.2em] uppercase mt-3"
          style={{ ...body, fontWeight: 500 }}
        >
          Arenal Volcano National Park, Costa Rica
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BY THE NUMBERS
   ═══════════════════════════════════════════════════════════════ */
function ByTheNumbers() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.bg }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.3em] uppercase mb-10"
            style={{ ...body, fontWeight: 500, color: PALETTE.accent }}
          >
            By the Numbers
          </p>
        </AnimateOnScroll>

        <StaggerOnScroll variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div key={i} variants={fadeUp} className="text-center">
              <p
                className="text-3xl md:text-4xl mb-2"
                style={{ ...heading, color: PALETTE.primary }}
              >
                {stat.value}
              </p>
              <p
                className="text-[12px] tracking-[0.05em]"
                style={{ ...body, color: PALETTE.text }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PHILOSOPHY — "Three Properties, One Culinary Ecosystem"
   ═══════════════════════════════════════════════════════════════ */
function PhilosophySection() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.bg }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <DrawLine color={PALETTE.primary} className="mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <span
                className="text-[10px] tracking-[0.3em] uppercase block mb-4"
                style={{ ...body, fontWeight: 500, color: PALETTE.accent }}
              >
                Farm to Table
              </span>
              <h2
                className="text-2xl md:text-3xl leading-tight"
                style={{ ...heading, color: PALETTE.text }}
              >
                Three Properties,<br />One Culinary Ecosystem
              </h2>
            </div>
            <div className="space-y-5">
              <p
                className="text-[15px] md:text-[16px] leading-[1.9]"
                style={{ ...body, color: PALETTE.text }}
              >
                You are not staying at three different hotels that happen to share some restaurants. You are entering a curated world where every meal, every glass, every class reinforces a single philosophy: that a great vacation feeds not just the body, but the mind and soul.
              </p>
              <p
                className="text-[15px] md:text-[16px] leading-[1.9]"
                style={{ ...body, color: PALETTE.text }}
              >
                From the precision of Amor Loco's tasting menu to the warmth of La Terrazza's handmade pasta, from the inventive cocktails at Henry's Bar to the quiet ritual of Mi Cafecito's morning espresso — each experience is rooted in the volcanic soil, tropical abundance, and creative spirit of Arenal.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   RESTAURANT GRID — Grouped by property, with images + deep links
   ═══════════════════════════════════════════════════════════════ */
function RestaurantGridSection() {
  const [, navigate] = useLocation();
  const propertyGroups = [
    { name: "Nayara Tented Camp", subtitle: "Fire, Earth, and Open Air", restaurants: TENTED_RESTAURANTS },
    { name: "Nayara Springs", subtitle: "Elevated Dining", restaurants: SPRINGS_RESTAURANTS },
    { name: "Nayara Gardens", subtitle: "Where It All Begins", restaurants: GARDENS_RESTAURANTS },
  ];

  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.bgAlt }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <DrawLine color={PALETTE.primary} className="mb-8" />
          <h2
            className="text-2xl md:text-3xl mb-3"
            style={{ ...heading, color: PALETTE.text }}
          >
            Our Restaurants
          </h2>
          <p
            className="text-[15px] leading-[1.9] max-w-[600px] mb-14"
            style={{ ...body, color: PALETTE.text }}
          >
            From fine dining to artisan gelato, each venue tells its own story while sharing the same commitment to quality.
          </p>
        </AnimateOnScroll>

        {propertyGroups.map((group, gi) => (
          <div key={group.name} className="mb-16 last:mb-0">
            <AnimateOnScroll variants={fadeUp}>
              <span
                className="text-[10px] tracking-[0.25em] uppercase block mb-2"
                style={{ ...body, fontWeight: 500, color: PALETTE.accent }}
              >
                {group.name}
              </span>
              <h3
                className="text-xl md:text-2xl mb-8"
                style={{ ...heading, color: PALETTE.text }}
              >
                {group.subtitle}
              </h3>
            </AnimateOnScroll>

            <StaggerOnScroll variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.restaurants.map((r, ri) => (
                <motion.div
                  key={r.name}
                  variants={fadeUp}
                  className="group cursor-pointer overflow-hidden rounded-sm"
                  style={{ backgroundColor: `${PALETTE.primary}10` }}
                  onClick={() => navigate(r.route)}
                >
                  {/* Media */}
                  <div className="aspect-[4/3] overflow-hidden">
                    {r.isVideo ? (
                      <video
                        src={r.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                      />
                    ) : (
                      <img
                        src={r.image}
                        alt={r.name}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                        loading="lazy"
                      />
                    )}
                  </div>
                  {/* Content */}
                  <div className="p-5">
                    <p
                      className="text-[10px] tracking-[0.15em] uppercase mb-2"
                      style={{ ...body, fontWeight: 500, color: PALETTE.accent }}
                    >
                      {r.cuisine}
                    </p>
                    <h4
                      className="text-[17px] mb-2"
                      style={{ ...heading, fontWeight: 500, color: PALETTE.text }}
                    >
                      {r.name}
                    </h4>
                    <p
                      className="text-[13px] leading-[1.75] line-clamp-3"
                      style={{ ...body, color: `${PALETTE.text}99` }}
                    >
                      {r.description}
                    </p>
                    <span
                      className="inline-block mt-3 text-[11px] tracking-[0.08em] border-b pb-0.5 transition-colors group-hover:border-white/40"
                      style={{ ...body, fontWeight: 500, color: PALETTE.accent, borderColor: `${PALETTE.accent}40` }}
                    >
                      Explore →
                    </span>
                  </div>
                </motion.div>
              ))}
            </StaggerOnScroll>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SWEET MOMENTS — Lila's Gelato + Coffee Experience
   ═══════════════════════════════════════════════════════════════ */
function SweetMomentsSection() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.bg }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <DrawLine color={PALETTE.primary} className="mb-8" />
          <h2
            className="text-2xl md:text-3xl mb-6"
            style={{ ...heading, color: PALETTE.text }}
          >
            Beyond the Plate: The Simple Moments
          </h2>
          <div className="max-w-[780px] space-y-5">
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ ...body, color: PALETTE.text }}
            >
              Sometimes the best moments are the simple ones. <strong>Lila's Gelato</strong> at Nayara Gardens offers handcrafted flavors that capture the essence of Costa Rica — tropical fruits like guanábana and cas, local chocolate from the Caribbean coast, and seasonal inspirations churned fresh daily. Traditional Italian technique with Costa Rican ingredients, made in small batches — the result is something you cannot find anywhere else on Earth.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ ...body, color: PALETTE.text }}
            >
              The <strong>Coffee Experience</strong> traces the journey from cherry to cup. Costa Rica's coffee heritage spans over 200 years, and the Arenal region produces some of the country's finest beans. Guests learn to identify flavor notes — the citrus brightness of a light roast, the chocolate depth of a medium, the smoky intensity of a dark. They learn pour-over technique, the importance of water temperature, and why freshness matters more than brand. It is the kind of knowledge that changes your morning ritual forever.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BAR SCENE
   ═══════════════════════════════════════════════════════════════ */
function BarSceneSection() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.bgAlt }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.3em] uppercase mb-3"
            style={{ ...body, fontWeight: 500, color: PALETTE.accent }}
          >
            When the Sun Sets
          </p>
          <h2
            className="text-2xl md:text-3xl mb-10"
            style={{ ...heading, color: PALETTE.text }}
          >
            The Bar Scene
          </h2>
        </AnimateOnScroll>

        <StaggerOnScroll variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BARS.map((bar, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-6 rounded-sm border"
              style={{ borderColor: `${PALETTE.primary}25`, backgroundColor: PALETTE.bg }}
            >
              <h3
                className="text-[18px] mb-1"
                style={{ ...heading, fontWeight: 500, color: PALETTE.text }}
              >
                {bar.name}
              </h3>
              <p
                className="text-[10px] tracking-[0.15em] uppercase mb-3"
                style={{ ...body, fontWeight: 500, color: PALETTE.accent }}
              >
                {bar.property}
              </p>
              <p
                className="text-[14px] leading-[1.8]"
                style={{ ...body, color: PALETTE.text }}
              >
                {bar.description}
              </p>
            </motion.div>
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FIVE CLASSES — Masonry grid with video/image
   ═══════════════════════════════════════════════════════════════ */
function ClassesSection() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.bg }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <DrawLine color={PALETTE.primary} className="mb-8" />
          <h2
            className="text-2xl md:text-3xl mb-3"
            style={{ ...heading, color: PALETTE.text }}
          >
            Five Classes That Go Deeper
          </h2>
          <p
            className="text-[15px] leading-[1.9] max-w-[720px] mb-12"
            style={{ ...body, color: PALETTE.text }}
          >
            Why simply eat when you can learn, create, and carry the experience home? Signature classes allow you to dive deeper into Costa Rican culinary culture. These are not tourist add-ons — they are invitations to understand a culture through its flavors.
          </p>
        </AnimateOnScroll>

        {/* Masonry grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[200px]">
          {CLASSES.map((cls, i) => {
            const isVideo = cls.type === "video";
            return (
              <AnimateOnScroll
                key={i}
                variants={fadeUp}
                className={`group relative overflow-hidden rounded-sm ${isVideo ? "row-span-2" : ""}`}
              >
                {isVideo ? (
                  <video
                    src={cls.media}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <img
                    src={cls.media}
                    alt={cls.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3
                    className="text-white text-lg mb-1"
                    style={{ ...heading }}
                  >
                    {cls.name}
                  </h3>
                  <p
                    className="text-white/60 text-[12px] leading-[1.6] line-clamp-3"
                    style={{ ...body }}
                  >
                    {cls.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   THE NAYARA DIFFERENCE
   ═══════════════════════════════════════════════════════════════ */
function NayaraDifferenceSection() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.bgAlt }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <DrawLine color={PALETTE.primary} className="mb-8" />
          <h2
            className="text-2xl md:text-3xl mb-6"
            style={{ ...heading, color: PALETTE.text }}
          >
            The Nayara Difference
          </h2>
          <div className="max-w-[780px] space-y-5">
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ ...body, color: PALETTE.text }}
            >
              A single day might begin with a coffee class at 7 a.m., move to breakfast at La Terrazza, a cooking class at Ayla before lunch, an afternoon gelato at Lila's, sunset cocktails at Lapa's Pool Bar, and dinner at Amor Loco. No transfers, no logistics, no friction — just a day that flows as naturally as the forest around you, from one extraordinary culinary moment to the next.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ ...body, color: PALETTE.text }}
            >
              Whether you are celebrating a special occasion, seeking a culinary education, or simply craving an escape into nature without sacrificing the pleasures of the table, the three Nayara properties offer something increasingly rare — the chance to experience Costa Rica as it should be experienced, one extraordinary meal at a time.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BLOG CROSS-LINK
   ═══════════════════════════════════════════════════════════════ */
function BlogCrossLink() {
  return (
    <section className="py-12 px-6 md:px-10" style={{ backgroundColor: PALETTE.bg }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <Link
              href="/blog/three-kitchens-one-rainforest"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              style={{
                ...body,
                fontWeight: 500,
                fontSize: "12px",
                letterSpacing: "0.08em",
                color: "#fff",
                backgroundColor: "#3a2a1a",
              }}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              Read: Forest to Table: Three Kitchens, One Rainforest
            </Link>
          </div>
          <div className="mt-8">
            <PillarCrossLink pillar="gastronomy" />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
