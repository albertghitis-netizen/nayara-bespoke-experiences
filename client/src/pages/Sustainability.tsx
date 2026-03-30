/**
 * NAYARA SUSTAINABILITY — Full Responsive Page
 * S Certification (Atacama & Hangaroa), Coral Restoration (Bocas), Reforestation (Arenal)
 * Typography: Playfair Display (display) + DM Sans (body)
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import {
  Leaf,
  Waves,
  Users,
  Sun,
  TreePine,
  Award,
  ChevronRight,
  ArrowRight,
  Shield,
} from "lucide-react";
import Footer from "@/components/Footer";

/* ─── Sustainability Pillars ─────────────────────────────── */
interface SustainabilityPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  initiatives: { name: string; property: string; detail: string }[];
}

const pillars: SustainabilityPillar[] = [
  {
    id: "certifications",
    title: "S Certification",
    subtitle: "Internationally Recognized Standards",
    description:
      "Nayara Alto Atacama and Nayara Hangaroa hold the prestigious S Certification for sustainable tourism — a rigorous international standard that evaluates environmental management, socio-cultural responsibility, and economic sustainability. This certification validates our commitment to operating in harmony with the extraordinary ecosystems we inhabit.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-hero-desktop_8c8a5be0.jpg",
    icon: <Shield className="w-6 h-6" />,
    initiatives: [
      {
        name: "S Certification — Alto Atacama",
        property: "Alto Atacama, Chile",
        detail:
          "Comprehensive sustainability certification covering water conservation in the world's driest desert, solar energy integration, and Atacameño community partnerships.",
      },
      {
        name: "S Certification — Hangaroa",
        property: "Nayara Hangaroa, Easter Island",
        detail:
          "Sustainability certification recognizing our commitment to Rapa Nui cultural preservation, waste reduction on a remote island, and marine ecosystem protection.",
      },
    ],
  },
  {
    id: "marine",
    title: "Coral Reef Restoration",
    subtitle: "Caribbean Coral Reef Restoration Partnership",
    description:
      "In Bocas del Toro, we've partnered with Caribbean Coral Reef Restoration to rebuild the reef systems that make this archipelago one of the most biodiverse marine environments on Earth. Guests can participate directly — planting coral fragments in underwater nurseries and monitoring reef health alongside marine biologists.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-aerial_ff3a4ff3.jpg",
    icon: <Waves className="w-6 h-6" />,
    initiatives: [
      {
        name: "Coral Fragment Planting",
        property: "Nayara Bocas del Toro, Panama",
        detail:
          "Guests plant coral fragments in underwater nurseries managed by marine biologists, directly contributing to reef regeneration in the Bocas del Toro archipelago.",
      },
      {
        name: "Marine Monitoring Program",
        property: "Nayara Bocas del Toro, Panama",
        detail:
          "Ongoing reef health monitoring with Caribbean Coral Reef Restoration, tracking coral growth rates, species diversity, and water quality across our protected zones.",
      },
    ],
  },
  {
    id: "reforestation",
    title: "Cloud Forest Reforestation",
    subtitle: "Restoring the Arenal Canopy",
    description:
      "The Arenal cloud forest is one of the most biodiverse ecosystems on the planet. Our reforestation program works with local communities to restore degraded areas, creating wildlife corridors that connect fragmented habitats. Every tree planted supports hundreds of species — from resplendent quetzals to three-toed sloths.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/arenal-volcano-view_a1b2c3d4.jpg",
    icon: <TreePine className="w-6 h-6" />,
    initiatives: [
      {
        name: "Native Species Reforestation",
        property: "Nayara Gardens, Nayara Springs, Nayara Tented Camp",
        detail:
          "Planting native tree species to restore cloud forest canopy, creating wildlife corridors between fragmented habitats around the Arenal Volcano region.",
      },
      {
        name: "Wildlife Corridor Program",
        property: "Costa Rica Properties",
        detail:
          "Connecting isolated forest patches to allow safe passage for wildlife — supporting populations of howler monkeys, toucans, and hundreds of bird species.",
      },
    ],
  },
  {
    id: "community",
    title: "Community & Culture",
    subtitle: "Rooted in the People",
    description:
      "Sustainability at Nayara extends beyond the environment to the communities that have stewarded these landscapes for centuries. From Atacameño heritage programs in Chile to Rapa Nui cultural preservation on Easter Island, from Ngöbe-Buglé partnerships in Panama to local employment in Costa Rica — we invest in the people who make each destination extraordinary.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-grounds_d8ad48a8.jpg",
    icon: <Users className="w-6 h-6" />,
    initiatives: [
      {
        name: "Rapa Nui Cultural Preservation",
        property: "Nayara Hangaroa, Easter Island",
        detail:
          "Supporting archaeological preservation, traditional arts, and the Rapa Nui language through partnerships with local cultural organizations.",
      },
      {
        name: "Atacameño Heritage Programs",
        property: "Alto Atacama, Chile",
        detail:
          "Working with indigenous Atacameño communities to preserve traditional knowledge, support local artisans, and ensure tourism benefits the people of the oasis.",
      },
      {
        name: "Ngöbe-Buglé Community Partnerships",
        property: "Nayara Bocas del Toro, Panama",
        detail:
          "Partnering with indigenous Ngöbe-Buglé communities for cacao workshops, cultural exchanges, and economic development programs.",
      },
    ],
  },
  {
    id: "operations",
    title: "Sustainable Operations",
    subtitle: "Every Detail Matters",
    description:
      "From solar energy in the Atacama to water conservation across all properties, our operational sustainability is built into the fabric of every Nayara hotel. We measure, report, and continuously improve our environmental footprint — because luxury and responsibility are not in conflict.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-pool-sunset_c4a2f7e1.jpg",
    icon: <Sun className="w-6 h-6" />,
    initiatives: [
      {
        name: "Solar Energy Integration",
        property: "Alto Atacama, Chile",
        detail:
          "Leveraging the Atacama's 300+ days of sunshine per year for solar energy generation, significantly reducing our carbon footprint in the world's best solar resource.",
      },
      {
        name: "Water Conservation",
        property: "All Properties",
        detail:
          "Advanced water management systems across all properties — particularly critical in the Atacama, where every drop is precious in Earth's driest non-polar desert.",
      },
      {
        name: "Waste Reduction & Recycling",
        property: "All Properties",
        detail:
          "Comprehensive waste management programs including composting, recycling, and elimination of single-use plastics across all Nayara properties.",
      },
    ],
  },
];

/* ─── Blog articles linked to sustainability ─────────────── */
const sustainabilityArticles = [
  {
    title: "Pura Vida: The S Certification Journey",
    excerpt: "How Alto Atacama and Hangaroa earned international sustainability certification.",
    url: "/journal",
    pillar: "certifications",
  },
  {
    title: "Coral Restoration in Bocas del Toro",
    excerpt: "Our partnership with Caribbean Coral Reef Restoration is rebuilding reef ecosystems.",
    url: "/journal",
    pillar: "marine",
  },
  {
    title: "Sunlit Sustainability in the Atacama",
    excerpt: "Harnessing 300 days of sunshine for solar energy in Earth's driest desert.",
    url: "/journal",
    pillar: "operations",
  },
];

/* ─── Main Component ─────────────────────────────────────── */
export default function Sustainability() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <SustainabilityHeader />
      <HeroSection />
      <IntroSection />
      <PillarSections />
      <JournalCTA />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   HEADER
   ═══════════════════════════════════════════════════════════ */
function SustainabilityHeader() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center justify-between px-6 md:px-10 h-16">
        <a
          href="/"
          className="p-2 rounded-full text-white bg-black/20 backdrop-blur-sm hover:scale-105 transition-all duration-300"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </a>
        <span
          className="text-white/60 text-[11px] tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          Sustainability
        </span>
        <div className="w-9" />
      </div>
    </motion.header>
  );
}

/* ═══════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-panorama_4ba3f49e.jpg"
          alt="Nayara Sustainability"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-16 md:pb-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-2 mb-6"
        >
          <Leaf className="w-4 h-4 text-emerald-400/70" />
          <span
            className="text-emerald-400/70 text-[11px] tracking-[0.4em] uppercase"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Sustainability
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-white text-3xl md:text-5xl lg:text-6xl leading-[0.95] tracking-wide text-center"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Travel That Regenerates
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-white/40 text-sm mt-6 tracking-wider text-center max-w-lg"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          S Certified properties, coral reef restoration, cloud forest
          reforestation, and community partnerships across four countries
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   INTRO
   ═══════════════════════════════════════════════════════════ */
function IntroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-stone-800 text-3xl md:text-4xl leading-[1.15] mb-8"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Our Responsibility
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <p
              className="text-stone-600 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Every Nayara property exists within an extraordinary ecosystem —
              the driest desert on Earth, an active volcanic cloud forest, the
              most remote inhabited island, a Caribbean archipelago of
              unparalleled biodiversity. We don't just operate in these places;
              we are their stewards.
            </p>
            <p
              className="text-stone-600 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Sustainability at Nayara is not a department or a policy — it's a
              practice woven into every decision, from the coral fragments we
              plant in Bocas del Toro to the solar panels that power our desert
              oasis. We believe luxury hospitality and environmental
              responsibility are not in conflict. They are inseparable.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PILLAR SECTIONS — Alternating editorial layouts
   ═══════════════════════════════════════════════════════════ */
function PillarSections() {
  return (
    <section className="pb-24 md:pb-32">
      {pillars.map((pillar, idx) => (
        <PillarRow
          key={pillar.id}
          pillar={pillar}
          reversed={idx % 2 !== 0}
          index={idx}
        />
      ))}
    </section>
  );
}

function PillarRow({
  pillar,
  reversed,
  index,
}: {
  pillar: SustainabilityPillar;
  reversed: boolean;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      className={`px-6 md:px-10 ${index === 0 ? "" : "mt-20 md:mt-32"}`}
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-2 gap-12 md:gap-20 items-start"
        >
          {/* Image */}
          <div className={`${reversed ? "md:order-2" : "md:order-1"}`}>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={pillar.image}
                alt={pillar.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className={`${reversed ? "md:order-1" : "md:order-2"}`}>
            <div className="text-emerald-700 mb-4">{pillar.icon}</div>

            <p
              className="text-stone-400 text-xs tracking-[0.35em] uppercase mb-3"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              {pillar.subtitle}
            </p>

            <h3
              className="text-stone-800 text-2xl md:text-3xl leading-[1.15] mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              {pillar.title}
            </h3>

            <p
              className="text-stone-600 text-base leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              {pillar.description}
            </p>

            {/* Initiatives */}
            <div className="space-y-5">
              {pillar.initiatives.map((init) => (
                <div
                  key={init.name}
                  className="border-l-2 border-emerald-600/30 pl-4"
                >
                  <h4
                    className="text-stone-800 text-sm tracking-[0.05em] mb-1"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 500,
                    }}
                  >
                    {init.name}
                  </h4>
                  <p
                    className="text-stone-400 text-[11px] tracking-[0.1em] uppercase mb-2"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 500,
                    }}
                  >
                    {init.property}
                  </p>
                  <p
                    className="text-stone-500 text-sm leading-relaxed"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 300,
                    }}
                  >
                    {init.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   JOURNAL CTA — Link to related blog articles
   ═══════════════════════════════════════════════════════════ */
function JournalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-stone-900 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-emerald-500/60 text-xs tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            From the Journal
          </p>
          <h2
            className="text-white text-3xl md:text-4xl leading-[1.15] mb-12"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Sustainability Stories
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {sustainabilityArticles.map((article) => (
              <Link
                key={article.title}
                href={article.url}
                className="group"
              >
                <h3
                  className="text-white text-lg mb-3 group-hover:text-stone-300 transition-colors"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                  }}
                >
                  {article.title}
                </h3>
                <p
                  className="text-stone-500 text-sm leading-relaxed mb-4"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 300,
                  }}
                >
                  {article.excerpt}
                </p>
                <span
                  className="inline-flex items-center gap-2 text-white/50 text-xs tracking-[0.1em] uppercase group-hover:text-white group-hover:gap-3 transition-all"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                  }}
                >
                  Read More
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 text-white text-sm tracking-[0.15em] uppercase hover:gap-3 transition-all duration-300 border-b border-white/30 pb-1"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              View All Journal Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
