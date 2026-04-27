/**
 * NURTURED BY NATURE — Pura Vida Sub-page
 * Science-backed wellness + Nayara philosophy + property highlights
 * Copy from brand Instagram content + brand Wellness page
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

const BRAND_COLORS = {
  bg: "#f7f5f0",
  primary: "#3a2a1a",
  secondary: "#5a4a3a",
  accent: "#b08d57",
  muted: "#8a7a6a",
  gold: "#c4973b",
};

const CDN = {
  heroVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/wellness-nature-color_fae0ea2e.mp4",
  heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Termaleschildren_5bfef28b.webp",
  hangaroa: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-pool_1b0d18e8.jpg",
};

/* ─── Fade-in helper ─── */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function NurturedByNature() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: BRAND_COLORS.bg }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <HeroSection />
      <ScienceSection1 />
      <ScienceSection2 />
      <ScienceSection3 />
      <ScienceSection4 />
      <PhilosophySection />
      <WellnessPillars />
      <FlagshipSection />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Full-bleed video with "Nurtured by Nature"
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster={CDN.heroImage}
        >
          <source src={CDN.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />
      </div>

      {/* Back button */}
      <div className="absolute top-24 left-0 right-0 z-20 flex justify-center">
        <a
          href="/curated-excursions"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 text-white/80" />
          <span
            className="text-white/80 text-[11px] tracking-[0.2em] uppercase"
            style={body}
          >
            Curated Excursions
          </span>
        </a>
      </div>

      {/* H1 at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center pb-12 md:pb-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-3xl md:text-5xl lg:text-6xl tracking-wide text-center leading-[1.1]"
          style={heading}
        >
          Nurtured by Nature
        </motion.h1>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SCIENCE SECTION 1 — "Your body starts changing before you realize it."
   ═══════════════════════════════════════════════════════════════ */
function ScienceSection1() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-wide"
            style={{ ...heading, color: BRAND_COLORS.gold }}
          >
            Your body starts changing before you realize it.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p
            className="mt-8 text-base md:text-lg leading-relaxed"
            style={{ ...body, color: BRAND_COLORS.secondary }}
          >
            Heart rate shifts.
            <br />
            Stress hormones drop.
            <br />
            Your brain moves into a different state.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SCIENCE SECTION 2 — "Your system remembers what it feels like to be human."
   ═══════════════════════════════════════════════════════════════ */
function ScienceSection2() {
  return (
    <section className="py-24 md:py-32 px-6" style={{ backgroundColor: "#2a3a2a" }}>
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-wide"
            style={{ ...heading, color: BRAND_COLORS.gold }}
          >
            Your system remembers what it feels like to be human.
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p
            className="mt-8 text-base md:text-lg leading-relaxed text-white/80"
            style={body}
          >
            With no roads, no traffic noise, and minimal artificial stimulation,
            the rainforest allows the brain to exit constant alert mode.
          </p>
        </FadeIn>
        <FadeIn delay={0.25}>
          <div className="mt-10">
            <p
              className="text-sm tracking-[0.15em] uppercase mb-4"
              style={{ ...body, color: BRAND_COLORS.gold }}
            >
              People experience:
            </p>
            <ul className="space-y-2">
              {[
                "Slower internal pacing",
                "Emotional regulation",
                "Nervous system coherence",
                "A sense of presence that lingers long after leaving",
              ].map((item) => (
                <li
                  key={item}
                  className="text-white/70 text-sm md:text-base"
                  style={body}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
        <FadeIn delay={0.35}>
          <p
            className="mt-12 text-lg md:text-xl italic"
            style={{ ...heading, color: BRAND_COLORS.gold }}
          >
            This isn't escape.
            <br />
            It's recalibration.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SCIENCE SECTION 3 — "The rainforest directly calms your nervous system."
   ═══════════════════════════════════════════════════════════════ */
function ScienceSection3() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-wide"
            style={{ ...heading, color: BRAND_COLORS.gold }}
          >
            The rainforest directly calms your nervous system.
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p
            className="mt-8 text-base md:text-lg leading-relaxed"
            style={{ ...body, color: BRAND_COLORS.secondary }}
          >
            Dense rainforest environments stimulate the parasympathetic nervous
            system — the "rest and repair" state.
          </p>
        </FadeIn>
        <FadeIn delay={0.25}>
          <p
            className="mt-6 text-base md:text-lg leading-relaxed"
            style={{ ...body, color: BRAND_COLORS.accent }}
          >
            Research shows that natural soundscapes, humidity, and layered greenery
            reduce cortisol, slow breathing, and bring the body out of chronic
            fight-or-flight.
          </p>
        </FadeIn>
        <FadeIn delay={0.35}>
          <p
            className="mt-10 text-lg md:text-xl"
            style={{ ...body, color: BRAND_COLORS.primary }}
          >
            Your system doesn't just relax.
            <br />
            <strong>It relearns safety.</strong>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SCIENCE SECTION 4 — "Rainforest air feeds your brain differently."
   ═══════════════════════════════════════════════════════════════ */
function ScienceSection4() {
  return (
    <section className="py-24 md:py-32 px-6" style={{ backgroundColor: "#1a2a1a" }}>
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-wide"
            style={{ ...heading, color: BRAND_COLORS.gold }}
          >
            Rainforest air feeds your brain differently.
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p
            className="mt-8 text-base md:text-lg leading-relaxed text-white/80"
            style={body}
          >
            Rainforests produce exceptionally oxygen-rich, moisture-dense air
            filled with natural plant compounds (phytoncides).
          </p>
        </FadeIn>
        <FadeIn delay={0.25}>
          <div className="mt-10">
            <p
              className="text-sm tracking-[0.15em] uppercase mb-4"
              style={{ ...body, color: BRAND_COLORS.gold }}
            >
              These compounds are linked to:
            </p>
            <ul className="space-y-2">
              {[
                "Improved mood",
                "Reduced inflammation",
                "Enhanced immune response",
                "Better cognitive clarity",
              ].map((item) => (
                <li
                  key={item}
                  className="text-white/70 text-sm md:text-base"
                  style={body}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PHILOSOPHY — "Nature as Healer"
   ═══════════════════════════════════════════════════════════════ */
function PhilosophySection() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="text-center mb-6">
            <span
              className="text-[11px] tracking-[0.3em] uppercase"
              style={{ ...body, color: BRAND_COLORS.accent }}
            >
              The Nayara Philosophy
            </span>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="text-2xl md:text-4xl tracking-wide text-center leading-[1.2]"
            style={{ ...heading, color: BRAND_COLORS.primary }}
          >
            Nature as Healer
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p
            className="mt-8 text-base md:text-lg leading-[1.8]"
            style={{ ...body, color: BRAND_COLORS.secondary }}
          >
            Nayara wellness is not a spa menu — it is a philosophy. Every property
            sits within a landscape that has been healing people for centuries:
            volcanic hot springs that indigenous communities have used for millennia,
            desert silence that ancient cultures sought for spiritual clarity,
            rainforest canopies that naturally regulate the nervous system.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p
            className="mt-6 text-base md:text-lg leading-[1.8]"
            style={{ ...body, color: BRAND_COLORS.secondary }}
          >
            We do not import wellness trends. We listen to the land. Our treatments,
            practices, and spaces are designed around the unique healing properties
            of each destination — volcanic minerals, desert acoustics, tropical
            botanicals, Pacific salt air. The landscape does the work; we simply
            create the conditions.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   WELLNESS PILLARS — Hot Springs + Yoga Pavilion
   ═══════════════════════════════════════════════════════════════ */
function WellnessPillars() {
  const pillars = [
    {
      title: "Volcanic Hot Springs",
      subtitle: "Nayara Springs · Costa Rica",
      description:
        "Every villa at Nayara Springs features a private hot springs plunge pool, fed by natural volcanic aquifers heated deep within the Earth. The mineral-rich waters — naturally heated to 38–42°C — have been used for centuries by indigenous communities for their therapeutic properties.",
      details: [
        "Private plunge pool in every villa",
        "Natural volcanic mineral water",
        "38–42°C therapeutic temperature",
        "Adults-only sanctuary",
      ],
    },
    {
      title: "Rainforest Yoga Pavilion",
      subtitle: "Nayara Tented Camp · Costa Rica",
      description:
        "A dedicated open-air yoga pavilion suspended in the rainforest canopy, where the soundtrack is howler monkeys and tropical birdsong. Morning vinyasa flows face Arenal Volcano; evening restorative sessions are accompanied by the chorus of tree frogs.",
      details: [
        "Dedicated yoga pavilion",
        "Daily morning and evening classes",
        "Private instruction available",
        "Volcano-facing practice space",
      ],
    },
  ];

  return (
    <section
      className="py-24 md:py-32 px-6"
      style={{ backgroundColor: "#f0ede6" }}
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span
              className="text-[11px] tracking-[0.3em] uppercase"
              style={{ ...body, color: BRAND_COLORS.accent }}
            >
              Wellness Experiences
            </span>
          </div>
        </FadeIn>

        <div className="space-y-20">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 0.15}>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Image placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-emerald-900/20 via-stone-300/30 to-stone-200 rounded-sm flex items-center justify-center">
                  <span
                    className="text-xs tracking-[0.2em] uppercase"
                    style={{ ...body, color: BRAND_COLORS.muted }}
                  >
                    Image Coming Soon
                  </span>
                </div>

                {/* Content */}
                <div>
                  <span
                    className="text-[11px] tracking-[0.2em] uppercase block mb-3"
                    style={{ ...body, color: BRAND_COLORS.accent }}
                  >
                    {pillar.subtitle}
                  </span>
                  <h3
                    className="text-2xl md:text-3xl tracking-wide leading-[1.2]"
                    style={{ ...heading, color: BRAND_COLORS.primary }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="mt-5 text-sm md:text-base leading-[1.8]"
                    style={{ ...body, color: BRAND_COLORS.secondary }}
                  >
                    {pillar.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {pillar.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-3 text-sm"
                        style={{ ...body, color: BRAND_COLORS.muted }}
                      >
                        <span
                          className="w-1 h-1 rounded-full flex-shrink-0"
                          style={{ backgroundColor: BRAND_COLORS.accent }}
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FLAGSHIP — Nayara Springs callout
   ═══════════════════════════════════════════════════════════════ */
function FlagshipSection() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <span
            className="text-[11px] tracking-[0.3em] uppercase"
            style={{ ...body, color: BRAND_COLORS.accent }}
          >
            The Wellness Flagship
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="mt-4 text-3xl md:text-4xl tracking-wide"
            style={{ ...heading, color: BRAND_COLORS.primary }}
          >
            Nayara Springs
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p
            className="mt-6 text-base md:text-lg leading-[1.8]"
            style={{ ...body, color: BRAND_COLORS.secondary }}
          >
            Adults-only. Private hot springs in every villa. A dedicated yoga
            pavilion in the rainforest canopy. Full-service spa with volcanic
            mineral treatments. Nayara Springs is where the entire Nayara wellness
            philosophy comes together in one extraordinary property.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <a
            href="/springs"
            className="inline-block mt-8 px-8 py-3 border rounded-full text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-[#3a2a1a] hover:text-white"
            style={{
              ...body,
              fontWeight: 500,
              color: BRAND_COLORS.primary,
              borderColor: BRAND_COLORS.primary,
            }}
          >
            Explore Nayara Springs
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
