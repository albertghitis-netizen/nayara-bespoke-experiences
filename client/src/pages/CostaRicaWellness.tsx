/*
 * COSTA RICA SPA & WELLNESS — Sukha Spa focused page
 * Non-spa content (hot springs, yoga, nature) now lives on the Experiences page.
 * This page: philosophy, facilities, signature treatments, couples, treatment menu.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import { properties, type Property, type Treatment } from "@/data/properties";
import { getPalette, type PropertyPalette } from "@/data/propertyPalettes";
import {
  AnimateOnScroll,
  StaggerOnScroll,
  fadeUp,
  staggerContainer,
} from "@/components/motion";
import { useIsMobile } from "@/hooks/useMobile";

const maxW = "max-w-[1200px] mx-auto";

const DATA_PROPERTY_MAP: Record<string, string> = {
  "tented-camp": "tented-camp",
  gardens: "tented-camp",
  springs: "tented-camp",
  "alto-atacama": "alto-atacama",
  "bocas-del-toro": "bocas-del-toro",
  hangaroa: "hangaroa",
};

interface Props {
  propertySlug: string;
}

export default function CostaRicaWellness({ propertySlug }: Props) {
  const CR_SLUGS = new Set(["tented-camp", "gardens", "springs"]);
  const paletteSlug = propertySlug === "springs" ? "springs" : CR_SLUGS.has(propertySlug) ? "tented-camp" : propertySlug;
  const palette = getPalette(paletteSlug);
  const dataSlug = DATA_PROPERTY_MAP[propertySlug] || propertySlug;
  const property = properties.find((p: Property) => p.id === dataSlug)!;
  const propertyDisplay = properties.find((p: Property) => p.id === propertySlug);
  const propertyName = propertyDisplay?.name || "Nayara";

  return (
    <div className="min-h-screen" style={{ backgroundColor: palette.gradientStart }}>
      <BrandNavigation pageType="property" backLink={{ label: propertyName, href: `/${propertySlug}` }} />
      <SpaHero />
      <SpaIntro palette={palette} />
      {CR_SLUGS.has(propertySlug) && <SukhaSpaSectionEditorial palette={palette} />}
      {CR_SLUGS.has(propertySlug) && <SignatureTreatments palette={palette} />}
      {CR_SLUGS.has(propertySlug) && <CouplesExperiences palette={palette} />}
      {CR_SLUGS.has(propertySlug) && <SpaFacilities palette={palette} />}
      <TreatmentMenu property={property} palette={palette} />
      {CR_SLUGS.has(propertySlug) && <NatureWellnessTeaser palette={palette} propertySlug={propertySlug} />}
      <Footer pageType="property" bgColor={palette.footerBg} textColor="#FFFFFF" propertyName={propertySlug === "gardens" ? "Gardens" : propertySlug === "tented-camp" ? "Tented Camp" : propertySlug === "springs" ? "Springs" : propertySlug === "bocas-del-toro" ? "Bocas del Toro" : undefined} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Full-bleed image with responsive desktop/mobile
   ═══════════════════════════════════════════════════════════════ */
function SpaHero() {
  const isMobile = useIsMobile();

  return (
    <section className="relative w-full overflow-hidden">
      {/* Desktop hero */}
      <img
        src="/manus-storage/DJI_0479-Treatmentpavilionhorizontal-NayaraTentedCamp-SukhaSpa-byBriceFerreStudiocopy_38b4783f.webp"
        alt="Sukha Spa treatment pavilion nestled in the rainforest"
        className="hidden md:block w-full h-auto object-cover"
        style={{ maxHeight: "75vh" }}
      />
      {/* Mobile hero */}
      <img
        src="/manus-storage/DJI_0466-Treatmentpavilionverticalwithmodel-NayaraTentedCamp-SukhaSpa-byBriceFerreStudiocopy_c3b741db.webp"
        alt="Sukha Spa treatment pavilion"
        className="block md:hidden w-full h-auto object-cover"
        style={{ maxHeight: "85vh" }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 pointer-events-none" />
      {/* Title overlay */}
      <div className="absolute inset-0 flex flex-col justify-end items-center pb-12 md:pb-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-3xl md:text-5xl lg:text-6xl tracking-wide text-center"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Sukha Spa
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-white/70 text-[12px] md:text-[13px] tracking-[0.2em] uppercase mt-4"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          Where the Rainforest Heals
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SPA INTRO — Philosophy statement
   ═══════════════════════════════════════════════════════════════ */
function SpaIntro({ palette }: { palette: PropertyPalette }) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: "#E6DFD5" }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <div className="max-w-[780px]">
            <p
              className="text-[11px] tracking-[0.2em] uppercase mb-6"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: palette.accent }}
            >
              The Spa Philosophy
            </p>
            <p
              className="text-[17px] md:text-[19px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: palette.secondary }}
            >
              Sukha is a Sanskrit word meaning "ease" or "bliss" — the state that arises when nothing is forced. At Sukha Spa, we believe that healing is not something imposed upon the body but something the body already knows how to do, given the right conditions.
            </p>
            <p
              className="text-[15px] md:text-[16px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: palette.secondary }}
            >
              Set within the canopy of the Arenal rainforest, each treatment pavilion is a world unto itself — open to the sounds of the forest, the warmth of volcanic earth below, and the stillness that only deep seclusion can provide. Here, the spa is not separate from nature. It is nature, refined into ritual.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SUKHA SPA EDITORIAL — The full story with imagery
   ═══════════════════════════════════════════════════════════════ */
function SukhaSpaSectionEditorial({ palette }: { palette: PropertyPalette }) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: palette.gradientStart }}>
      <div className={maxW}>
        {/* Section header */}
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: palette.accent }}
          >
            The Treatment Pavilions
          </p>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl tracking-wide mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: palette.secondary }}
          >
            A Sanctuary Within a Sanctuary
          </h2>
          <div className="w-16 h-px mb-12" style={{ backgroundColor: palette.accent }} />
        </AnimateOnScroll>

        {/* Two-column: Image + Text */}
        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 mb-16">
            <div className="overflow-hidden rounded-lg" style={{ aspectRatio: "4/3" }}>
              <img
                loading="lazy"
                src="/manus-storage/4O1A0991-NayaraTentedCamp-Treatmentpavilion2SukhaSpa-byBriceFerreStudiocopy_d64fea93.jpg"
                alt="Sukha Spa treatment pavilion with bamboo ceiling and rainforest views"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p
                className="text-[15px] md:text-[16px] leading-[1.9] mb-6"
                style={{ fontFamily: "var(--font-body)", color: palette.secondary }}
              >
                Each treatment pavilion at Sukha Spa is a circular, open-air structure elevated above the forest floor. The thatched roofs are hand-woven from local palm, the floors are laid in rich tropical hardwood, and the walls simply do not exist — replaced instead by the living green of the rainforest canopy that surrounds you on every side.
              </p>
              <p
                className="text-[15px] md:text-[16px] leading-[1.9]"
                style={{ fontFamily: "var(--font-body)", color: palette.secondary }}
              >
                This is not a spa that happens to be in nature. It is a spa that could not exist anywhere else. The architecture was designed so that every treatment unfolds within the sights, sounds, and scents of the living forest — howler monkeys overhead, the distant murmur of volcanic streams below, and the particular quality of light that only filters through a triple-canopy rainforest.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Full-width image: Treatment beds with jacuzzi */}
        <AnimateOnScroll variants={fadeUp} delay={0.15}>
          <div className="mb-16 overflow-hidden rounded-lg" style={{ aspectRatio: "16/9" }}>
            <img
              loading="lazy"
              src="/manus-storage/4O1A1015-NayaraTentedCamp-TreatmentpavilionSukhaSpa-byBriceFerreStudiocopy_01021477.jpg"
              alt="Couples treatment room with private jacuzzi overlooking the rainforest"
              className="w-full h-full object-cover"
            />
          </div>
        </AnimateOnScroll>

        {/* Text block: The Private Jacuzzi */}
        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <div className="grid md:grid-cols-2 gap-8 md:gap-14">
            <div className="flex flex-col justify-center">
              <h3
                className="text-xl md:text-2xl tracking-wide mb-4"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: palette.secondary }}
              >
                Private Hydrotherapy
              </h3>
              <p
                className="text-[15px] md:text-[16px] leading-[1.9] mb-6"
                style={{ fontFamily: "var(--font-body)", color: palette.secondary }}
              >
                Every treatment pavilion includes its own private plunge pool or jacuzzi, fed by the same geothermally heated water that flows beneath the Arenal volcano. Before or after your treatment, you are invited to soak in mineral-rich warmth while the forest breathes around you — a hydrotherapy ritual that has been practiced in this region for centuries.
              </p>
              <p
                className="text-[15px] md:text-[16px] leading-[1.9]"
                style={{ fontFamily: "var(--font-body)", color: palette.secondary }}
              >
                The combination of volcanic heat, mineral absorption, and complete privacy creates something that no urban spa can replicate: a return to the elemental relationship between the human body and the earth itself.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg" style={{ aspectRatio: "4/3" }}>
              <img
                loading="lazy"
                src="/manus-storage/4O1A1006-NayaraTentedCamp-TreatmentpaviilionjacuzziSukhaSpa-byBriceFerreStudiocopy_ab762114.jpg"
                alt="Private jacuzzi in treatment pavilion surrounded by rainforest"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SIGNATURE TREATMENTS — Body rituals, sound healing, herbal
   ═══════════════════════════════════════════════════════════════ */
function SignatureTreatments({ palette }: { palette: PropertyPalette }) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: "#F5F3F0" }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: palette.accent }}
          >
            Signature Experiences
          </p>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl tracking-wide mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: palette.secondary }}
          >
            Rituals of the Rainforest
          </h2>
          <div className="w-16 h-px mb-12" style={{ backgroundColor: palette.accent }} />
        </AnimateOnScroll>

        {/* Full-width herbal compress image */}
        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <div className="mb-12 overflow-hidden rounded-lg" style={{ aspectRatio: "21/9" }}>
            <img
              loading="lazy"
              src="/manus-storage/wellness-1-horinzontal-1_43777dc8.jpg"
              alt="Traditional herbal compress treatment with warm poultices"
              className="w-full h-full object-cover"
            />
          </div>
        </AnimateOnScroll>

        {/* Three-column grid: Sound Healing, Body Rituals, Massage */}
        <AnimateOnScroll variants={fadeUp} delay={0.15}>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {/* Sound Healing */}
            <div>
              <div className="overflow-hidden rounded-lg mb-6" style={{ aspectRatio: "3/4" }}>
                <img
                  loading="lazy"
                  src="/manus-storage/4O1A1569-Spa-NayaraTentedCampwithLivLawbyBriceFerreStudio-VancouverPortraitAdventureandAthletePhotographer_9ffffb98.webp"
                  alt="Sound healing with Tibetan singing bowls"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3
                className="text-lg mb-2"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: palette.secondary }}
              >
                Sound Healing
              </h3>
              <p
                className="text-[13px] leading-[1.8]"
                style={{ fontFamily: "var(--font-body)", color: palette.secondary }}
              >
                Tibetan singing bowls and crystal resonance guide the body into deep parasympathetic rest. The vibrations travel through tissue and bone, releasing tension that hands alone cannot reach — a practice rooted in 2,500 years of Himalayan tradition, now offered within the acoustic chamber of the rainforest canopy.
              </p>
            </div>

            {/* Body Rituals */}
            <div>
              <div className="overflow-hidden rounded-lg mb-6" style={{ aspectRatio: "3/4" }}>
                <img
                  loading="lazy"
                  src="/manus-storage/4O1A1183-Spa-NayaraTentedCampwithLivLawbyBriceFerreStudio-VancouverPortraitAdventureandAthletePhotographer_6da896aa.webp"
                  alt="Volcanic clay body wrap treatment"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3
                className="text-lg mb-2"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: palette.secondary }}
              >
                Volcanic Body Rituals
              </h3>
              <p
                className="text-[13px] leading-[1.8]"
                style={{ fontFamily: "var(--font-body)", color: palette.secondary }}
              >
                Drawing on the mineral wealth of the Arenal volcanic soil, our body rituals use locally sourced clay, thermal mud, and botanical infusions to detoxify, nourish, and restore. Each wrap and scrub is designed to work with the body's own systems — encouraging circulation, lymphatic flow, and deep cellular renewal.
              </p>
            </div>

            {/* Deep Tissue Massage */}
            <div>
              <div className="overflow-hidden rounded-lg mb-6" style={{ aspectRatio: "3/4" }}>
                <img
                  loading="lazy"
                  src="/manus-storage/wellness04-9x16_f71c6bff.png"
                  alt="Volcanic mud self-application ritual"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3
                className="text-lg mb-2"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: palette.secondary }}
              >
                Earth & Clay
              </h3>
              <p
                className="text-[13px] leading-[1.8]"
                style={{ fontFamily: "var(--font-body)", color: palette.secondary }}
              >
                Some of our most transformative rituals invite you to participate in your own healing. The volcanic clay ceremony is one such offering — a guided self-application of mineral-rich earth, followed by a soak in thermal waters. It is both ancient and immediate, connecting you to the land beneath your feet in the most literal way possible.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   COUPLES EXPERIENCES — Shared spa journeys
   ═══════════════════════════════════════════════════════════════ */
function CouplesExperiences({ palette }: { palette: PropertyPalette }) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: palette.gradientStart }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: palette.accent }}
          >
            Shared Journeys
          </p>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl tracking-wide mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: palette.secondary }}
          >
            Couples Experiences
          </h2>
          <div className="w-16 h-px mb-12" style={{ backgroundColor: palette.accent }} />
        </AnimateOnScroll>

        {/* Full-width couples massage */}
        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <div className="mb-12 overflow-hidden rounded-lg" style={{ aspectRatio: "16/9" }}>
            <img
              loading="lazy"
              src="/manus-storage/1Couplesexperiences_207b529d.jpg"
              alt="Couples massage in private treatment pavilion"
              className="w-full h-full object-cover"
            />
          </div>
        </AnimateOnScroll>

        {/* Two-column: Text + Walking image */}
        <AnimateOnScroll variants={fadeUp} delay={0.15}>
          <div className="grid md:grid-cols-2 gap-8 md:gap-14">
            <div className="flex flex-col justify-center">
              <p
                className="text-[15px] md:text-[16px] leading-[1.9] mb-6"
                style={{ fontFamily: "var(--font-body)", color: palette.secondary }}
              >
                The most meaningful spa experiences are often the ones shared. At Sukha Spa, every treatment pavilion is designed for two — side-by-side tables, a shared jacuzzi, and a private canopy that belongs only to you. Whether celebrating an anniversary, a honeymoon, or simply the pleasure of being together in a beautiful place, the couples experience transforms a treatment into a memory.
              </p>
              <p
                className="text-[15px] md:text-[16px] leading-[1.9]"
                style={{ fontFamily: "var(--font-body)", color: palette.secondary }}
              >
                The journey begins on the forest path — a winding walk through the canopy that serves as a transition from the world of schedules and screens into the world of stillness. By the time you arrive at your pavilion, the forest has already begun its work.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg" style={{ aspectRatio: "4/3" }}>
              <img
                loading="lazy"
                src="/manus-storage/3Walkingthespa_9753728e.jpg"
                alt="Couple walking the forest path to the spa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SPA FACILITIES — Relaxation rooms and spaces
   ═══════════════════════════════════════════════════════════════ */
function SpaFacilities({ palette }: { palette: PropertyPalette }) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: "#F5F3F0" }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: palette.accent }}
          >
            Before & After
          </p>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl tracking-wide mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: palette.secondary }}
          >
            The Relaxation Pavilion
          </h2>
          <div className="w-16 h-px mb-12" style={{ backgroundColor: palette.accent }} />
        </AnimateOnScroll>

        {/* Two relaxation room images side by side */}
        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
            <div className="overflow-hidden rounded-lg" style={{ aspectRatio: "4/3" }}>
              <img
                loading="lazy"
                src="/manus-storage/4O1A0862-NayaraTentedCamp-Relaxationroom3SukhaSpa-byBriceFerreStudiocopy_a0e2ac80.jpg"
                alt="Relaxation room with woven loungers overlooking the rainforest"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg" style={{ aspectRatio: "4/3" }}>
              <img
                loading="lazy"
                src="/manus-storage/4O1A0880-NayaraTentedCamp-RelaxationRoomSukhaSpa-byBriceFerreStudiocopy_4f9b2074.jpg"
                alt="Relaxation room detail with tropical foliage"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </AnimateOnScroll>

        {/* Description */}
        <AnimateOnScroll variants={fadeUp} delay={0.15}>
          <div className="max-w-[780px]">
            <p
              className="text-[15px] md:text-[16px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: palette.secondary }}
            >
              The relaxation pavilion is where time dissolves. Woven loungers sit beneath a bamboo-lattice roof, open on all sides to the forest. There is no music, no television, no agenda — only the sound of birds, the rustle of leaves, and the particular quality of stillness that comes from being held within something ancient and alive.
            </p>
            <p
              className="text-[15px] md:text-[16px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: palette.secondary }}
            >
              Guests are invited to arrive early and linger long after their treatment. Herbal teas, infused waters, and light bites are offered throughout the day. The intention is simple: to extend the feeling of ease beyond the treatment room and into the hours that follow.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Massage image — full width */}
        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <div className="mt-12 overflow-hidden rounded-lg" style={{ aspectRatio: "21/9" }}>
            <img
              loading="lazy"
              src="/manus-storage/4O1A4347-NayaraAltoAtacama-Spa-byBriceFerreStudio_b420729c.webp"
              alt="Deep tissue massage by candlelight"
              className="w-full h-full object-cover"
            />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TREATMENT MENU — Category-filtered treatment cards
   ═══════════════════════════════════════════════════════════════ */
function TreatmentMenu({ property, palette }: { property: Property; palette: PropertyPalette }) {
  const categories = property.spaCategories.filter((c: { id: string; label: string }) => c.id !== "all");
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || "massage");
  const filtered = property.treatments.filter((t: Treatment) => t.category === activeCategory);

  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: palette.gradientStart }}>
      <div className={maxW}>
        {/* Section header */}
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: palette.accent }}
          >
            Spa Menu
          </p>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl tracking-wide mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: palette.secondary }}
          >
            Treatments & Rituals
          </h2>
          <div className="w-16 h-px mb-12" style={{ backgroundColor: palette.accent }} />
        </AnimateOnScroll>

        {/* Category buttons */}
        {categories.length > 0 && (
          <AnimateOnScroll variants={fadeUp}>
            <div className="flex flex-wrap gap-2 mb-10 md:mb-14">
              {categories.map((cat: { id: string; label: string }) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="px-5 py-2.5 rounded-full text-[11px] tracking-[0.1em] transition-all duration-500"
                  style={{
                    fontFamily: "var(--font-body)",
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
          </AnimateOnScroll>
        )}

        {/* Treatment cards grid */}
        <StaggerOnScroll variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((treatment: Treatment) => (
            <motion.div
              key={treatment.id}
              variants={fadeUp}
              className="p-6 md:p-8 transition-all duration-500 hover:translate-y-[-2px]"
              style={{
                backgroundColor: "rgba(255,255,255,0.4)",
                backdropFilter: "blur(8px)",
                borderRadius: "12px",
                borderBottom: `2px solid ${palette.primary}`,
              }}
            >
              <h3
                className="text-[17px] mb-2"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: palette.secondary }}
              >
                {treatment.name}
              </h3>
              <p
                className="text-[11px] tracking-[0.1em] mb-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: palette.accent }}
              >
                {treatment.duration}
                {treatment.price ? ` · ${treatment.price}` : ""}
              </p>
              <p
                className="text-[13px] leading-[1.7]"
                style={{ fontFamily: "var(--font-body)", color: palette.secondary }}
              >
                {treatment.description}
              </p>
            </motion.div>
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NATURE WELLNESS TEASER — Brief mention + link to experiences
   ═══════════════════════════════════════════════════════════════ */
function NatureWellnessTeaser({ palette, propertySlug }: { palette: PropertyPalette; propertySlug: string }) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: "#E6DFD5" }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <div className="max-w-[800px] mx-auto text-center">
            <p
              className="text-[11px] tracking-[0.2em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: palette.accent }}
            >
              Beyond the Spa
            </p>
            <h2
              className="text-2xl md:text-3xl tracking-wide mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: palette.secondary }}
            >
              Hot Springs, Yoga & Nature
            </h2>
            <p
              className="text-[15px] leading-[1.9] mb-8"
              style={{ fontFamily: "var(--font-body)", color: palette.secondary }}
            >
              Wellness at Nayara extends far beyond the treatment room. Private volcanic hot springs plunge pools, daily yoga in the rainforest canopy, Las Termas thermal experience, and guided nature immersions are all part of the on-site offering — available to every guest, every day.
            </p>
            <Link
              href={`/${propertySlug}/experiences`}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: "12px",
                letterSpacing: "0.08em",
                color: "#fff",
                backgroundColor: palette.primary,
              }}
            >
              Explore On-Site Nature & Wellness
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
