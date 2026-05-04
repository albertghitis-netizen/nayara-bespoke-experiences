/**
 * NURTURED BY NATURE WELLNESS — Costa Rica Wellness Page
 * Yoga + Las Thermas + Spa Treatments with Olive Green Palette
 */

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";
import NativeVideo from "@/components/NativeVideo";
import BrandNavigation from "@/components/BrandNavigation";
import HotelFilterBar3 from "@/components/HotelFilterBar3";
import { properties, type Treatment } from "@/data/properties";
import { getPalette, BRAND, type PropertyPalette } from "@/data/propertyPalettes";
import { useIsMobile } from "@/hooks/useMobile";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const WELLNESS_CDN = {
  heroImage: `${CDN}/Termaleschildren_5bfef28b.webp`,
  heroVideo: `/manus-storage/wellness-hero-trimmed_a4aeb1be.mp4`,
};

const IMG = {
  termasPool: "/manus-storage/termas-pool_027028a5.jpg",
  termasCascading: "/manus-storage/termas-cascading-pools_44b4e5a5.jpg",
  gardenPath: "/manus-storage/wellness-garden-path_c2c89643.jpg",
  infinityPool: "/manus-storage/wellness-infinity-pool_7b006d30.jpg",
  tentedExterior: `${CDN}/tented-camp-exterior_c9d0e1f2.jpg`,
  springsPool: `${CDN}/springs-plunge-pool_e5f6a7b8.jpg`,
  termas87: "/manus-storage/termas-87-web_4184b097.jpg",
  springs3: "/manus-storage/springs-3-web_7a814df0.jpg",
  soundHealing: "/manus-storage/sound-healing-web_f473a193.jpg",
  soundTherapyVertical: "/manus-storage/sound-therapy-vertical-web_85b2ac2f.jpg",
  yogaDeck: "/manus-storage/yoga-deck-web_2ea101e0.jpg",
  meditateYoga: "/manus-storage/meditate-yoga-web_963fc0dd.jpg",
  yogaVertical: "/manus-storage/yoga-vertical-2-web_e72f15e5.jpg",
};

interface WellnessPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  details: string[];
}

const wellnessPillars: WellnessPillar[] = [
  {
    id: "hot-springs",
    title: "Volcanic Hot Springs",
    subtitle: "Nayara Springs · Costa Rica",
    description: "Every villa at Nayara Springs features a private hot springs plunge pool, fed by natural volcanic aquifers heated deep within the Earth. The mineral-rich waters — naturally heated to 38–42°C — have been used for centuries by indigenous communities for their therapeutic properties.",
    image: IMG.infinityPool,
    details: ["Private plunge pool in every villa", "Natural volcanic mineral water", "38–42°C therapeutic temperature", "Adults-only sanctuary"],
  },
  {
    id: "yoga-pavilion",
    title: "Rainforest Yoga Pavilion",
    subtitle: "Nayara Tented Camp · Costa Rica",
    description: "A dedicated open-air yoga pavilion suspended in the rainforest canopy, where the soundtrack is howler monkeys and tropical birdsong. Morning vinyasa flows face Arenal Volcano; evening restorative sessions are accompanied by the chorus of tree frogs.",
    image: IMG.termasCascading,
    details: ["Dedicated yoga pavilion", "Daily morning and evening classes", "Private instruction available", "Volcano-facing practice space"],
  },
];

const spaCategories = [
  { id: "massage", label: "Massage" },
  { id: "body", label: "Body Treatments" },
  { id: "facial", label: "Facials" },
  { id: "couples", label: "Couples" },
  { id: "wellness", label: "Wellness Therapies" },
];

const tentedCamp = properties.find((p) => p.id === "tented-camp")!;
const crTreatments = tentedCamp.treatments;

const propertyWellnessLinks = [
  { name: "Nayara Gardens", focus: "Rainforest spa and volcanic mineral treatments", route: "/gardens" },
  { name: "Nayara Springs", focus: "Private hot springs and adults-only wellness", route: "/springs" },
  { name: "Nayara Tented Camp", focus: "Rainforest yoga pavilion and nature immersion", route: "/tented-camp" },
];

export default function TentedWellness() {
  const [activeHotel, setActiveHotel] = useState("tented-camp");
  const palette = getPalette("tented-camp");

  return (
    <div className="min-h-screen" style={{ backgroundColor: palette.gradientStart }}>
      <BrandNavigation pageType="brand" hideCenterLabel />
      <HeroSection />
      <IntroSection palette={palette} />
      <WellnessPillarsSection palette={palette} />
      <YogaSection palette={palette} />
      <LasThermasSection palette={palette} />
      <NayaraDifferenceSection palette={palette} />
      <SoundHealingSection palette={palette} />
      <HotelFilterBar3 activeHotel={activeHotel} onHotelChange={setActiveHotel} />
      <SpaSection palette={palette} />
      <SpringsFeature palette={palette} />
      <PropertyLinksSection palette={palette} />
      <Footer textColor="#FFFFFF" />
    </div>
  );
}

function HeroSection() {
  const isMobile = useIsMobile();
  const mobileHeroImage = "/manus-storage/brand-wellness-mobile-hero_064bd82b.jpg";
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {isMobile ? (
          <img src={mobileHeroImage} alt="Nayara Wellness" className="w-full h-full object-cover" />
        ) : (
          <NativeVideo src={WELLNESS_CDN.heroVideo} className="w-full h-full object-cover" loop />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-xl md:text-3xl lg:text-4xl tracking-wide text-center"
          style={{ ...heading, fontWeight: 400 }}
        >
          Nurtured by Nature
        </motion.h1>
      </div>
    </section>
  );
}

function IntroSection({ palette }: { palette: PropertyPalette }) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: palette.gradientStart }}>
      <div className="max-w-[900px] mx-auto">
        <FadeIn>
          <p className="text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600, color: palette.primary }}>The Nayara Philosophy</p>
          <h2 className="mb-8" style={{ ...heading, fontSize: "clamp(24px, 3.5vw, 38px)", lineHeight: 1.15, color: palette.secondary }}>
            Nature as Healer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-[15px] leading-[1.8]" style={{ ...body, color: palette.secondary }}>
              Nayara wellness is not a spa menu — it is a philosophy. Each of our three Costa Rica properties sits within a landscape that has been healing people for centuries: volcanic hot springs that indigenous communities have used for millennia, and rainforest canopies that naturally regulate the nervous system.
            </p>
            <p className="text-[15px] leading-[1.8]" style={{ ...body, color: palette.secondary }}>
              We do not import wellness trends. We listen to the land. Our treatments, practices, and spaces are designed around the unique healing properties of the Arenal rainforest — volcanic minerals, tropical botanicals, geothermal springs, and the living rhythm of the forest. The landscape does the work; we simply create the conditions.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function WellnessPillarsSection({ palette }: { palette: PropertyPalette }) {
  return (
    <section className="pb-16 md:pb-24" style={{ backgroundColor: palette.gradientStart }}>
      {wellnessPillars.map((pillar, idx) => (
        <WellnessPillarRow key={pillar.id} pillar={pillar} reversed={idx % 2 !== 0} index={idx} palette={palette} />
      ))}
    </section>
  );
}

function WellnessPillarRow({ pillar, reversed, index, palette }: { pillar: WellnessPillar; reversed: boolean; index: number; palette: PropertyPalette }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className={`px-6 md:px-10 ${index === 0 ? "" : "mt-16 md:mt-24"}`}>
      <div className="max-w-[1400px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className={reversed ? "md:order-2" : "md:order-1"}>
            <div className="aspect-[4/5] overflow-hidden">
              <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
          </div>
          <div className={reversed ? "md:order-1" : "md:order-2"}>
            <p className="text-[10px] tracking-[0.3em] mb-3" style={{ ...body, fontWeight: 600, color: palette.primary }}>{pillar.subtitle}</p>
            <h3 className="text-2xl md:text-3xl leading-[1.15] mb-6" style={{ ...heading, color: palette.secondary }}>{pillar.title}</h3>
            <p className="text-[15px] leading-relaxed mb-8" style={{ ...body, color: palette.secondary }}>{pillar.description}</p>
            <ul className="space-y-3">
              {pillar.details.map((d) => (
                <li key={d} className="text-sm flex items-center gap-3" style={{ ...body, color: palette.secondary }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: palette.primary }} />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function YogaSection({ palette }: { palette: PropertyPalette }) {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10" style={{ backgroundColor: palette.gradientStart }}>
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <p className="text-[11px] tracking-[0.2em] mb-4" style={{ ...body, fontWeight: 600, color: palette.primary }}>Wellness Through Movement</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-wide mb-6" style={{ ...heading, color: palette.secondary }}>
            Yoga in the Rainforest
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-8">
          <FadeIn>
            <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: "4/3" }}>
              <img src={IMG.yogaDeck} alt="Yoga in the rainforest" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-[18px] mb-3" style={{ ...heading, fontWeight: 500, color: palette.secondary }}>
                  Vinyasa Yoga
                </h3>
                <p className="text-[14px] leading-[1.8]" style={{ ...body, color: palette.secondary }}>
                  Keeps your body flowing and energized, linking breath to movement in classes that feel alive and present. The practice takes on a different dimension when your mat is surrounded by the sounds of howler monkeys and tropical birds — the forest becomes part of the flow.
                </p>
              </div>
              <div>
                <h3 className="text-[18px] mb-3" style={{ ...heading, fontWeight: 500, color: palette.secondary }}>
                  Mindfulness Yoga
                </h3>
                <p className="text-[14px] leading-[1.8]" style={{ ...body, color: palette.secondary }}>
                  Invites you to slow down, reconnect, and find stillness amid the symphony of the rainforest. It is less about physical exertion and more about presence — a practice designed for people who have forgotten what it feels like to simply be.
                </p>
              </div>
              <div className="p-5 rounded-lg" style={{ backgroundColor: `${palette.primary}10`, borderLeft: `3px solid ${palette.primary}` }}>
                <p className="text-[13px] leading-[1.7]" style={{ ...body, color: palette.secondary }}>
                  Both are offered across the properties, so you can practice wherever you feel called — at the edge of a volcanic valley, beside a hot spring, or on a platform overlooking the forest canopy.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function LasThermasSection({ palette }: { palette: PropertyPalette }) {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10" style={{ backgroundColor: palette.gradientStart }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn>
            <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: "4/3" }}>
              <NativeVideo src={`${CDN}/hot-springs-horizontal_2508b725.mp4`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[11px] tracking-[0.2em] mb-4" style={{ ...body, fontWeight: 600, color: palette.primary }}>
              Las Thermas
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-wide mb-6" style={{ ...heading, color: palette.secondary }}>
              Where Earth Meets Wellness
            </h2>
            <p className="text-[15px] leading-[1.9] mb-6" style={{ ...body, color: palette.secondary }}>
              Las Thermas at Nayara Tented Camp offers something rare: natural hot springs heated by geothermal energy deep beneath the rainforest floor. More than a spa amenity, it is a place to soak in warmth, contemplate the night sky above, and feel the ancient power of the earth beneath you.
            </p>
            <p className="text-[15px] leading-[1.9]" style={{ ...body, color: palette.secondary }}>
              The springs are fed by the same volcanic system that powers Arenal — water that has traveled through layers of rock, absorbing minerals along the way. The result is a bathing experience that is not manufactured or chlorinated, but genuinely geological.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function NayaraDifferenceSection({ palette }: { palette: PropertyPalette }) {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10" style={{ backgroundColor: palette.gradientStart }}>
      <div className="max-w-[800px] mx-auto text-center">
        <FadeIn>
          <p className="text-[11px] tracking-[0.2em] mb-4" style={{ ...body, fontWeight: 600, color: palette.primary }}>
            The Nayara Difference
          </p>
          <h2 className="text-2xl md:text-3xl tracking-wide mb-6" style={{ ...heading, color: palette.secondary }}>
            Three Properties, One Seamless Experience
          </h2>
          <p className="text-[15px] leading-[1.9] mb-8" style={{ ...body, color: palette.secondary }}>
            A morning might begin with Vinyasa yoga at Nayara Springs, followed by a botanical hike through the Tented Camp reserve, an afternoon soak at Las Thermas, and a sunset Mindfulness session overlooking the volcano. No transfers, no logistics, no friction — just a day that flows as naturally as the forest around you.
          </p>
          <p className="text-[15px] leading-[1.9]" style={{ ...body, color: palette.secondary }}>
            Every hike, every yoga class, every soak reinforces a single philosophy: that a great vacation feeds not just the body, but the mind and soul.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function SoundHealingSection({ palette }: { palette: PropertyPalette }) {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10" style={{ backgroundColor: palette.gradientStart }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn>
            <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: "4/3" }}>
              <img src={IMG.soundHealing} alt="Sound healing" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[11px] tracking-[0.2em] mb-4" style={{ ...body, fontWeight: 600, color: palette.primary }}>
              Healing Modalities
            </p>
            <h2 className="text-2xl md:text-3xl tracking-wide mb-6" style={{ ...heading, color: palette.secondary }}>
              Sound Therapy & Botanical Rituals
            </h2>
            <p className="text-[15px] leading-[1.9]" style={{ ...body, color: palette.secondary }}>
              Beyond traditional massage and yoga, Nayara offers sound baths using Himalayan bowls, gong therapy, and botanical rituals featuring rainforest plants and volcanic minerals. Each treatment is designed to work with your nervous system, not against it.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function SpaSection({ palette }: { palette: PropertyPalette }) {
  const [activeCategory, setActiveCategory] = useState("massage");
  const filtered = crTreatments.filter((t: Treatment) => t.category === activeCategory);

  return (
    <section className="py-20 md:py-32 px-6 md:px-10" style={{ backgroundColor: palette.gradientStart }}>
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <p className="text-[11px] tracking-[0.2em] mb-4" style={{ ...body, fontWeight: 600, color: palette.primary }}>
            Spa Treatments
          </p>
          <h2 className="text-2xl md:text-3xl tracking-wide mb-10" style={{ ...heading, color: palette.secondary }}>
            Volcanic Minerals & Rainforest Botanicals
          </h2>
        </FadeIn>

        {spaCategories.length > 0 && (
          <FadeIn>
            <div className="flex flex-wrap gap-2 mb-10 md:mb-14">
              {spaCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="px-5 py-2.5 rounded-full text-[11px] tracking-[0.1em] transition-all duration-500"
                  style={{
                    ...body,
                    fontWeight: 500,
                    backgroundColor: activeCategory === cat.id ? palette.primary : "transparent",
                    color: activeCategory === cat.id ? "#F7F5F0" : palette.secondary,
                    border: `1px solid ${activeCategory === cat.id ? palette.primary : "#E6DFD5"}`,
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </FadeIn>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((treatment: Treatment) => (
            <FadeIn key={treatment.id}>
              <motion.div
                className="p-6 md:p-8 transition-all duration-500 hover:translate-y-[-2px] rounded-lg"
                style={{
                  backgroundColor: "rgba(255,255,255,0.4)",
                  backdropFilter: "blur(8px)",
                  borderBottom: `2px solid ${palette.primary}`,
                }}
                whileHover={{ borderBottomColor: palette.primary }}
              >
                <h3 className="text-[17px] mb-2" style={{ ...heading, fontWeight: 500, color: palette.secondary }}>
                  {treatment.name}
                </h3>
                <p className="text-[11px] tracking-[0.1em] mb-4" style={{ ...body, fontWeight: 500, color: palette.primary }}>
                  {treatment.duration}
                  {treatment.price ? ` · ${treatment.price}` : ""}
                </p>
                <p className="text-[13px] leading-[1.7]" style={{ ...body, color: palette.secondary }}>
                  {treatment.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpringsFeature({ palette }: { palette: PropertyPalette }) {
  return (
    <section className="relative py-20 md:py-32 px-6 md:px-10 overflow-hidden" style={{ backgroundColor: palette.gradientEnd }}>
      <div className="absolute inset-0 opacity-10">
        <img src={IMG.springs3} alt="Springs" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 max-w-[800px] mx-auto">
        <FadeIn>
          <h2 className="text-white/90 mb-6" style={{ ...heading, fontSize: "clamp(26px, 3.5vw, 42px)", lineHeight: 1.15 }}>
            Nayara Springs
          </h2>
          <p className="text-white/70 text-[15px] leading-relaxed mb-8" style={body}>
            Adults-only. Private hot springs in every villa. A dedicated yoga pavilion in the rainforest canopy. Full-service spa with volcanic mineral treatments. Nayara Springs is where the entire Nayara wellness philosophy comes together in one extraordinary property.
          </p>
          <Link href="/springs" className="inline-flex items-center gap-2 text-white/70 text-[13px] tracking-[0.1em] hover:text-white hover:gap-3 transition-all duration-300 border-b border-white/20 pb-1" style={{ ...body, fontWeight: 500 }}>
            Explore Nayara Springs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

function PropertyLinksSection({ palette }: { palette: PropertyPalette }) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: palette.gradientStart }}>
      <div className="max-w-[1100px] mx-auto">
        <FadeIn>
          <p className="text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600, color: palette.primary }}>Explore Our Properties</p>
          <h2 className="mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2, color: palette.secondary }}>
            Find Your Healing Landscape
          </h2>
        </FadeIn>
        <div className="space-y-0">
          {propertyWellnessLinks.map((prop) => (
            <Link key={prop.name} href={prop.route} className="group flex items-center justify-between py-5 transition-colors" style={{ borderBottom: `1px solid ${palette.primary}20` }}>
              <div>
                <h3 className="text-lg md:text-xl group-hover:opacity-80 transition-opacity" style={{ ...heading, color: palette.secondary }}>{prop.name}</h3>
                <p className="text-[13px] mt-1" style={{ ...body, color: palette.secondary }}>{prop.focus}</p>
              </div>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-all" style={{ color: palette.primary }} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
