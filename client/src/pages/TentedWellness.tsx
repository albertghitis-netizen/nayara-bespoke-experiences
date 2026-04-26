/**
 * EXPERIENTIAL WELLNESS — Costa Rica Wellness Page
 * Based on brand Wellness page, stripped to Costa Rica only
 * Hero → Intro → Wellness Pillars → Yoga → Las Thermas → Nayara Difference → Spa Treatments → Springs Feature → Property Links → Footer
 */

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";
import NativeVideo from "@/components/NativeVideo";
import BrandNavigation from "@/components/BrandNavigation";
import { properties, type Treatment } from "@/data/properties";
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
  heroVideo: `${CDN}/wellness-nature-color_fae0ea2e.mp4`,
};

const IMG = {
  termasPool: "/manus-storage/termas-pool_027028a5.jpg",
  tentedExterior: `${CDN}/tented-camp-exterior_c9d0e1f2.jpg`,
  springsPool: `${CDN}/springs-plunge-pool_e5f6a7b8.jpg`,
};

/* ─── Wellness Pillars (Costa Rica only) ─── */
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
    subtitle: "Nayara Springs \u00b7 Costa Rica",
    description: "Every villa at Nayara Springs features a private hot springs plunge pool, fed by natural volcanic aquifers heated deep within the Earth. The mineral-rich waters \u2014 naturally heated to 38\u201342\u00b0C \u2014 have been used for centuries by indigenous communities for their therapeutic properties.",
    image: IMG.springsPool,
    details: ["Private plunge pool in every villa", "Natural volcanic mineral water", "38\u201342\u00b0C therapeutic temperature", "Adults-only sanctuary"],
  },
  {
    id: "yoga-pavilion",
    title: "Rainforest Yoga Pavilion",
    subtitle: "Nayara Tented Camp \u00b7 Costa Rica",
    description: "A dedicated open-air yoga pavilion suspended in the rainforest canopy, where the soundtrack is howler monkeys and tropical birdsong. Morning vinyasa flows face Arenal Volcano; evening restorative sessions are accompanied by the chorus of tree frogs.",
    image: IMG.tentedExterior,
    details: ["Dedicated yoga pavilion", "Daily morning and evening classes", "Private instruction available", "Volcano-facing practice space"],
  },
];

/* ─── Spa category tabs ─── */
const spaCategories = [
  { id: "massage", label: "Massage" },
  { id: "body", label: "Body Treatments" },
  { id: "facial", label: "Facials" },
  { id: "couples", label: "Couples" },
  { id: "wellness", label: "Wellness Therapies" },
];

/* ─── Costa Rica treatments (shared across all 3 properties) ─── */
const tentedCamp = properties.find((p) => p.id === "tented-camp")!;
const crTreatments = tentedCamp.treatments;

/* ─── Property wellness links (Costa Rica only) ─── */
const propertyWellnessLinks = [
  { name: "Nayara Gardens", focus: "Rainforest spa and volcanic mineral treatments", route: "/gardens" },
  { name: "Nayara Springs", focus: "Private hot springs and adults-only wellness", route: "/springs" },
  { name: "Nayara Tented Camp", focus: "Rainforest yoga pavilion and nature immersion", route: "/tented-camp" },
];

export default function TentedWellness() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BrandNavigation pageType="brand" hideCenterLabel />
      <HeroSection />
      <IntroSection />
      <WellnessPillarsSection />
      <YogaSection />
      <LasThermasSection />
      <NayaraDifferenceSection />
      <SpaSection />
      <SpringsFeature />
      <PropertyLinksSection />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Video with "Nurtured by Nature"
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();
  const mobileHeroImage = "/manus-storage/brand-wellness-mobile-hero_064bd82b.jpg";
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {isMobile ? (
          <img src={mobileHeroImage} alt="Nayara Wellness" className="w-full h-full object-cover" />
        ) : (
          <NativeVideo src={WELLNESS_CDN.heroVideo} className="w-full h-full object-cover" />
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

/* ═══════════════════════════════════════════════════════════════
   INTRO — Nature as Healer (Costa Rica focused)
   ═══════════════════════════════════════════════════════════════ */
function IntroSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-[900px] mx-auto">
        <FadeIn>
          <p className="text-[#3B2B26]/35 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>The Nayara Philosophy</p>
          <h2 className="text-[#4B4A4A] mb-8" style={{ ...heading, fontSize: "clamp(24px, 3.5vw, 38px)", lineHeight: 1.15 }}>
            Nature as Healer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-[#4B4A4A]/70 text-[15px] leading-[1.8]" style={body}>
              Nayara wellness is not a spa menu &mdash; it is a philosophy. Each of our three Costa Rica properties sits within a landscape that has been healing people for centuries: volcanic hot springs that indigenous communities have used for millennia, and rainforest canopies that naturally regulate the nervous system.
            </p>
            <p className="text-[#4B4A4A]/70 text-[15px] leading-[1.8]" style={body}>
              We do not import wellness trends. We listen to the land. Our treatments, practices, and spaces are designed around the unique healing properties of the Arenal rainforest &mdash; volcanic minerals, tropical botanicals, geothermal springs, and the living rhythm of the forest. The landscape does the work; we simply create the conditions.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   WELLNESS PILLARS — Hot Springs + Yoga Pavilion
   ═══════════════════════════════════════════════════════════════ */
function WellnessPillarsSection() {
  return (
    <section className="pb-16 md:pb-24">
      {wellnessPillars.map((pillar, idx) => (
        <WellnessPillarRow key={pillar.id} pillar={pillar} reversed={idx % 2 !== 0} index={idx} />
      ))}
    </section>
  );
}

function WellnessPillarRow({ pillar, reversed, index }: { pillar: WellnessPillar; reversed: boolean; index: number }) {
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
            <p className="text-[#3B2B26]/35 text-[10px] tracking-[0.3em] mb-3" style={{ ...body, fontWeight: 600 }}>{pillar.subtitle}</p>
            <h3 className="text-[#3B2B26] text-2xl md:text-3xl leading-[1.15] mb-6" style={heading}>{pillar.title}</h3>
            <p className="text-[#4B4A4A]/65 text-[15px] leading-relaxed mb-8" style={body}>{pillar.description}</p>
            <ul className="space-y-3">
              {pillar.details.map((d) => (
                <li key={d} className="text-[#4B4A4A]/50 text-sm flex items-center gap-3" style={body}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B2B26]/20 flex-shrink-0" />
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

/* ═══════════════════════════════════════════════════════════════
   YOGA — Wellness Through Movement
   ═══════════════════════════════════════════════════════════════ */
function YogaSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-white/30">
      <div className="max-w-[900px] mx-auto">
        <FadeIn>
          <p className="text-[#3B2B26]/35 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>Wellness Through Movement</p>
          <h2 className="text-[#4B4A4A] mb-10" style={{ ...heading, fontSize: "clamp(24px, 3.5vw, 38px)", lineHeight: 1.15 }}>
            Yoga in the Arenal Rainforest
          </h2>
        </FadeIn>

        <div className="space-y-10">
          <FadeIn delay={0.1}>
            <div>
              <h3 className="text-[#3B2B26] text-xl md:text-2xl leading-[1.2] mb-4" style={heading}>Vinyasa Yoga</h3>
              <p className="text-[#4B4A4A]/65 text-[15px] leading-[1.8]" style={body}>
                Keeps your body flowing and energized, linking breath to movement in classes that feel alive and present. The practice takes on a different dimension when your mat is surrounded by the sounds of howler monkeys and tropical birds &mdash; the forest becomes part of the flow.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div>
              <h3 className="text-[#3B2B26] text-xl md:text-2xl leading-[1.2] mb-4" style={heading}>Mindfulness Yoga</h3>
              <p className="text-[#4B4A4A]/65 text-[15px] leading-[1.8]" style={body}>
                Invites you to slow down, reconnect, and find stillness amid the symphony of the rainforest. It is less about physical exertion and more about presence &mdash; a practice designed for people who have forgotten what it feels like to simply be.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-[#4B4A4A]/50 text-[14px] leading-[1.7] border-l-2 border-[#3B2B26]/10 pl-5" style={body}>
              Both are offered across the properties, so you can practice wherever you feel called &mdash; at the edge of a volcanic valley, beside a hot spring, or on a platform overlooking the forest canopy.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   LAS THERMAS — Natural Hot Springs
   ═══════════════════════════════════════════════════════════════ */
function LasThermasSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-[#3B2B26]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Content */}
          <FadeIn>
            <div>
              <p className="text-white/25 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>Las Thermas</p>
              <h2 className="text-white/85 mb-6" style={{ ...heading, fontSize: "clamp(24px, 3.5vw, 38px)", lineHeight: 1.15 }}>
                Where Earth Meets Wellness
              </h2>
              <div className="space-y-5">
                <p className="text-white/50 text-[15px] leading-[1.8]" style={body}>
                  Las Thermas at Nayara Tented Camp offers something rare: natural hot springs heated by geothermal energy deep beneath the rainforest floor. More than a spa amenity, it is a place to soak in warmth, contemplate the night sky above, and feel the ancient power of the earth beneath you.
                </p>
                <p className="text-white/50 text-[15px] leading-[1.8]" style={body}>
                  The springs are fed by the same volcanic system that powers Arenal &mdash; water that has traveled through layers of rock, absorbing minerals along the way. The result is a bathing experience that is not manufactured or chlorinated, but genuinely geological.
                </p>
              </div>
              <Link
                href="/journal"
                className="inline-flex items-center gap-2 text-white/50 text-[13px] tracking-[0.08em] hover:text-white/80 hover:gap-3 transition-all duration-300 mt-8 border-b border-white/15 pb-1"
                style={{ ...body, fontWeight: 500 }}
              >
                Read: The History &amp; Science of Hot-Springs Plunge Pools
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>

          {/* Image */}
          <FadeIn delay={0.15}>
            <div className="aspect-[4/5] overflow-hidden">
              <img src={IMG.termasPool} alt="Las Thermas hot springs" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   THE NAYARA DIFFERENCE — Three Properties, One Seamless Experience
   ═══════════════════════════════════════════════════════════════ */
function NayaraDifferenceSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-[900px] mx-auto">
        <FadeIn>
          <p className="text-[#3B2B26]/35 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>The Nayara Difference</p>
          <h2 className="text-[#4B4A4A] mb-8" style={{ ...heading, fontSize: "clamp(24px, 3.5vw, 38px)", lineHeight: 1.15 }}>
            Three Properties, One Seamless Experience
          </h2>
          <div className="space-y-6">
            <p className="text-[#4B4A4A]/70 text-[15px] leading-[1.8]" style={body}>
              A morning might begin with Vinyasa yoga at Nayara Springs, followed by a botanical hike through the Tented Camp reserve, an afternoon soak at Las Thermas, and a sunset Mindfulness session overlooking the volcano. No transfers, no logistics, no friction &mdash; just a day that flows as naturally as the forest around you.
            </p>
            <p className="text-[#4B4A4A]/70 text-[15px] leading-[1.8]" style={body}>
              Every hike, every yoga class, every soak reinforces a single philosophy: that a great vacation feeds not just the body, but the mind and soul. Whether you are celebrating a special occasion, seeking rejuvenation, or simply craving an escape into nature without sacrificing comfort, the three Nayara properties offer something increasingly rare &mdash; the chance to experience Costa Rica as it should be experienced.
            </p>
          </div>
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-[#3B2B26]/50 text-[13px] tracking-[0.08em] hover:text-[#3B2B26] hover:gap-3 transition-all duration-300 mt-8 border-b border-[#3B2B26]/15 pb-1"
            style={{ ...body, fontWeight: 500 }}
          >
            Read: Three Hotels, One Rainforest, Infinite Experiences
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SPA TREATMENTS — Category tabs, no property filter
   ═══════════════════════════════════════════════════════════════ */
function SpaSection() {
  const [activeCategory, setActiveCategory] = useState("massage");
  const filtered = crTreatments.filter((t: Treatment) => t.category === activeCategory);

  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-white/30">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <p className="text-[#3B2B26]/35 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>Nayara Spa</p>
          <h2 className="text-[#4B4A4A] mb-3" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            Treatments Shaped by Place
          </h2>
          <p className="text-[#4B4A4A]/50 text-[14px] mb-10 max-w-[600px]" style={body}>
            Our treatments draw from Costa Rica's rich natural pharmacy &mdash; volcanic mud, organic coffee, tropical cacao, and rainforest botanicals. Available across all three properties.
          </p>
        </FadeIn>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {spaCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 text-xs tracking-[0.1em] rounded-full border transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-[#3B2B26] text-white border-[#3B2B26]"
                  : "bg-transparent text-[#5a4a3a]/60 border-[#3B2B26]/15 hover:border-[#3B2B26]/40 hover:text-[#3B2B26]"
              }`}
              style={{ ...body, fontWeight: 500 }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Treatment cards */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-[#3B2B26]/40 text-lg" style={heading}>No treatments in this category</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((t: Treatment, i: number) => (
              <FadeIn key={t.id} delay={Math.min(i * 0.05, 0.3)}>
                <div className="bg-white/60 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-[#3B2B26] text-[16px] mb-1" style={{ ...heading, fontWeight: 500 }}>{t.name}</h3>
                  {t.localName && <p className="text-[#3B2B26]/30 text-[12px] italic mb-2" style={body}>{t.localName}</p>}
                  <p className="text-[#4B4A4A]/55 text-[13px] leading-relaxed mb-3 line-clamp-2" style={body}>{t.description}</p>
                  <div className="flex items-center gap-3 text-[11px] text-[#3B2B26]/35" style={{ ...body, fontWeight: 500 }}>
                    <span>{t.duration}</span>
                    <span className="text-[#3B2B26]/15">&middot;</span>
                    <span>{t.price}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}

        <FadeIn delay={0.2}>
          <p className="text-[#4B4A4A]/35 text-[12px] mt-8 text-center" style={body}>
            Contact the Nayara Spa at ext. 215 or Springs Spa at ext. 223. Taxes not included.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SPRINGS FEATURE — Wellness flagship highlight
   ═══════════════════════════════════════════════════════════════ */
function SpringsFeature() {
  return (
    <section className="py-16 md:py-24 bg-[#3B2B26] px-6 md:px-10">
      <div className="max-w-[800px] mx-auto text-center">
        <FadeIn>
          <p className="text-white/25 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>The Wellness Flagship</p>
          <h2 className="text-white/80 mb-6" style={{ ...heading, fontSize: "clamp(26px, 3.5vw, 42px)", lineHeight: 1.15 }}>
            Nayara Springs
          </h2>
          <p className="text-white/40 text-[15px] leading-relaxed mb-8" style={body}>
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

/* ═══════════════════════════════════════════════════════════════
   PROPERTY LINKS — Three Costa Rica properties
   ═══════════════════════════════════════════════════════════════ */
function PropertyLinksSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <FadeIn>
          <p className="text-[#3B2B26]/35 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>Explore Our Properties</p>
          <h2 className="text-[#4B4A4A] mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            Find Your Healing Landscape
          </h2>
        </FadeIn>
        <div className="space-y-0">
          {propertyWellnessLinks.map((prop) => (
            <Link key={prop.name} href={prop.route} className="group flex items-center justify-between py-5 border-b border-[#3B2B26]/10 hover:border-[#3B2B26]/30 transition-colors">
              <div>
                <h3 className="text-[#3B2B26] text-lg md:text-xl group-hover:text-[#5a4a3a] transition-colors" style={heading}>{prop.name}</h3>
                <p className="text-[#4B4A4A]/40 text-[13px] mt-1" style={body}>{prop.focus}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#3B2B26]/20 group-hover:text-[#3B2B26]/50 group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
