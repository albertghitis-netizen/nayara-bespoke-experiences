/*
 * NURTURED BY NATURE WELLNESS — Costa Rica Wellness Page
 * Philosophy: Nature IS the Wellness
 * Flow: Private Plunge Pools → Las Termas → Yoga → Sukha Spa → Spa Menu
 * Aesthetic: Tented Camp palette (Olive, Gravel, Bone, Light Green)
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

const IMG = {
  privatePlungePools: "/manus-storage/springs-3_25b5c741.jpg",
  briceFerreVideo: "/manus-storage/tented-wellness-horizontal-new_b58a7ffd.mp4",
  termasVertical: "/manus-storage/tented-wellness-vertical-new_6c3d5dd4.mp4",
  termasImage: "/manus-storage/termas-87_9d60dc3f.jpg",
  yogaVertical: "/manus-storage/yoga-vertical-2_8f722a36.jpg",
  sukhaSpaBanner: "/manus-storage/gal-new-spa-hut_5f9827dc.jpg",
  sukhaSpaVideo: "/manus-storage/yoga-springs-new_7a20145a.mp4",
  mobileHeroImage: "/manus-storage/brand-wellness-mobile-hero_6c270aaf.jpg",
  heroVideo: "/manus-storage/wellness-hero-new_889fff27.mp4",
};

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

export default function NurturedByNature() {
  const [activeHotel, setActiveHotel] = useState("tented-camp");
  const palette = getPalette("tented-camp");

  return (
    <div className="min-h-screen" style={{ backgroundColor: palette.gradientStart }}>
      <BrandNavigation pageType="brand" hideCenterLabel />
      <HeroSection />
      <IntroSection palette={palette} />
      <PrivatePlungPoolsSection palette={palette} />
      <LasThermasSection palette={palette} />
      <YogaSection palette={palette} />
      <SukhaSpaSection palette={palette} />
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
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {isMobile ? (
          <img src={IMG.mobileHeroImage} alt="Nayara Wellness" className="w-full h-full object-cover" />
        ) : (
          <video src={IMG.heroVideo} autoPlay muted loop playsInline className="w-full h-full object-cover" />
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
            Nature Is the Wellness
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-[15px] leading-[1.8]" style={{ ...body, color: palette.secondary }}>
              Nayara wellness is not a spa menu — it is a philosophy rooted in place. The volcanic hot springs, the rainforest canopy, the geothermal energy beneath the earth — these are not amenities. They are the treatment itself.
            </p>
            <p className="text-[15px] leading-[1.8]" style={{ ...body, color: palette.secondary }}>
              We do not import wellness trends. We listen to the land. Our three Costa Rica properties sit within landscapes that have been healing people for centuries. The nature does the work. We simply create the conditions for you to experience it.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function PrivatePlungPoolsSection({ palette }: { palette: PropertyPalette }) {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10" style={{ backgroundColor: palette.gradientStart }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <FadeIn>
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img src={IMG.privatePlungePools} alt="Private plunge pool at Nayara Springs" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[10px] tracking-[0.3em] mb-3" style={{ ...body, fontWeight: 600, color: palette.primary }}>Private Hot Springs</p>
            <h2 className="text-2xl md:text-3xl leading-[1.15] mb-6" style={{ ...heading, color: palette.secondary }}>
              Volcanic Waters as Healer
            </h2>
            <p className="text-[15px] leading-relaxed mb-6" style={{ ...body, color: palette.secondary }}>
              Every villa at Nayara Springs features a private hot springs plunge pool, fed by natural volcanic aquifers heated deep within the Earth. The mineral-rich waters — naturally heated to 38–42°C — have been used for centuries by indigenous communities for their therapeutic properties.
            </p>
            <p className="text-[15px] leading-relaxed mb-8" style={{ ...body, color: palette.secondary }}>
              The water itself is the medicine. Minerals naturally occurring in volcanic aquifers — silica, magnesium, potassium — work on your nervous system without any human intervention. You are not receiving a treatment in nature. You are bathing in nature's own healing system.
            </p>
            <ul className="space-y-3 mb-8">
              {["Private plunge pool in every villa", "Natural volcanic mineral water", "38–42°C therapeutic temperature", "Adults-only sanctuary"].map((d) => (
                <li key={d} className="text-sm flex items-center gap-3" style={{ ...body, color: palette.secondary }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: palette.primary }} />
                  {d}
                </li>
              ))}
            </ul>
            <a href="/blog/private-hot-springs" className="inline-flex items-center gap-2 text-sm tracking-[0.1em] hover:gap-3 transition-all duration-300" style={{ ...body, fontWeight: 500, color: palette.primary }}>
              Learn the History & Science
              <ArrowRight className="w-4 h-4" />
            </a>
          </FadeIn>
        </div>

        {/* Brice Ferre Video */}
        <div className="mt-16 md:mt-24">
          <FadeIn>
            <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: "16/9" }}>
              <video src={IMG.briceFerreVideo} autoPlay muted loop playsInline className="w-full h-full object-cover" />
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
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <FadeIn>
            <p className="text-[10px] tracking-[0.3em] mb-3" style={{ ...body, fontWeight: 600, color: palette.primary }}>Las Thermas</p>
            <h2 className="text-2xl md:text-3xl leading-[1.15] mb-6" style={{ ...heading, color: palette.secondary }}>
              Where Earth Meets Wellness
            </h2>
            <p className="text-[15px] leading-relaxed mb-6" style={{ ...body, color: palette.secondary }}>
              Las Thermas at Nayara Tented Camp offers something rare: natural hot springs heated by geothermal energy deep beneath the rainforest floor. More than a spa amenity, it is a place to soak in warmth, contemplate the night sky above, and feel the ancient power of the earth beneath you.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ ...body, color: palette.secondary }}>
              The springs are fed by the same volcanic system that powers Arenal — water that has traveled through layers of rock, absorbing minerals along the way. The result is a bathing experience that is not manufactured or chlorinated, but genuinely geological. You are not in a spa. You are in the earth's own healing system.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: "9/16" }}>
                <video src={IMG.termasVertical} autoPlay muted loop playsInline className="w-full h-full object-cover" />
              </div>
              <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: "4/3" }}>
                <img src={IMG.termasImage} alt="Las Thermas geothermal pools" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function YogaSection({ palette }: { palette: PropertyPalette }) {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10" style={{ backgroundColor: palette.gradientStart }}>
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <p className="text-[11px] tracking-[0.2em] mb-4" style={{ ...body, fontWeight: 600, color: palette.primary }}>Wellness Through Movement</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-wide mb-6" style={{ ...heading, color: palette.secondary }}>
            Yoga in the Rainforest Pavilion
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-8">
          <FadeIn>
            <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: "9/16" }}>
              <img src={IMG.yogaVertical} alt="Yoga in the rainforest pavilion" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-[18px] mb-3" style={{ ...heading, fontWeight: 500, color: palette.secondary }}>
                  Vinyasa Yoga
                </h3>
                <p className="text-[14px] leading-[1.8]" style={{ ...body, color: palette.secondary }}>
                  Keeps your body flowing and energized, linking breath to movement in classes that feel alive and present. Morning vinyasa flows face Arenal Volcano. The practice takes on a different dimension when your mat is suspended in the rainforest canopy, surrounded by the sounds of howler monkeys and tropical birds — the forest becomes part of the flow.
                </p>
              </div>
              <div>
                <h3 className="text-[18px] mb-3" style={{ ...heading, fontWeight: 500, color: palette.secondary }}>
                  Relaxation Yoga
                </h3>
                <p className="text-[14px] leading-[1.8]" style={{ ...body, color: palette.secondary }}>
                  Invites you to slow down, reconnect, and find stillness amid the symphony of the rainforest. Evening restorative sessions are accompanied by the chorus of tree frogs and the living breath of the forest. It is less about physical exertion and more about presence — a practice designed for people who have forgotten what it feels like to simply be.
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

function SukhaSpaSection({ palette }: { palette: PropertyPalette }) {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10" style={{ backgroundColor: palette.gradientStart }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Sukha Spa Banner */}
        <FadeIn>
          <div className="relative overflow-hidden rounded-lg mb-12" style={{ aspectRatio: "16/9" }}>
            <img src={IMG.sukhaSpaBanner} alt="Sukha Spa treatment hut" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </FadeIn>

        {/* Sukha Spa Content */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <FadeIn>
            <p className="text-[10px] tracking-[0.3em] mb-3" style={{ ...body, fontWeight: 600, color: palette.primary }}>Sukha Spa</p>
            <h2 className="text-2xl md:text-3xl leading-[1.15] mb-6" style={{ ...heading, color: palette.secondary }}>
              Treatments Rooted in Place
            </h2>
            <p className="text-[15px] leading-relaxed mb-6" style={{ ...body, color: palette.secondary }}>
              Sukha Spa integrates the healing properties of the Arenal landscape into every treatment. Volcanic minerals, rainforest botanicals, geothermal energy — these are not ingredients added to treatments. They are the foundation of what we do.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ ...body, color: palette.secondary }}>
              Every massage, every ritual, every therapy is designed to work with your nervous system using what the earth has already provided. You are not receiving a spa treatment in nature. You are experiencing nature's own healing modalities.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: "9/16" }}>
              <video src={IMG.sukhaSpaVideo} autoPlay muted loop playsInline className="w-full h-full object-cover" />
            </div>
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
