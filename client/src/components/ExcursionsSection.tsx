/*
 * Excursions Section , Editorial grid of all tours/experiences
 * Data from Tour Book PDF. Blog links cross-referenced.
 * Real photos only. Placeholders clearly marked.
 */

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, Clock, Mountain, Footprints, ExternalLink, MapPin } from "lucide-react";

const VICUNAS_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/IMG_8113_311fa15c.jpeg";
const DESERT_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/IMG_6253_ffc4f157.PNG";

interface Excursion {
  id: string;
  name: string;
  subtitle: string;
  duration: string;
  altitude: string;
  difficulty: string;
  distance?: string;
  acclimatization: string;
  description: string;
  highlights: string[];
  whatToBring?: string;
  image?: string;
  video?: string;
  placeholder?: boolean;
  blogUrl?: string;
  blogTitle?: string;
  category: string;
}

const excursions: Excursion[] = [
  {
    id: "valley-of-the-moon",
    name: "Valley of the Moon",
    subtitle: "Sunset among lunar formations",
    duration: "Half day",
    altitude: "2,550 m",
    difficulty: "Easy",
    distance: "5 km + 17 km drive",
    acclimatization: "None",
    description:
      "Walk through the iconic lunar landscape of the Cordillera de la Sal. Watch the sunset paint the salt formations in shades of gold and crimson as the Licancabur volcano stands sentinel on the horizon.",
    highlights: [
      "Salt caverns and crystalline formations",
      "Sunset over the Licancabur volcano",
      "Otherworldly rock amphitheaters",
    ],
    image: DESERT_IMG,
    blogUrl: "/blog/atacama-mars",
    blogTitle: "Why the Atacama Desert Is Mars on Earth",
    category: "landscape",
  },
  {
    id: "el-tatio-geysers",
    name: "El Tatio Geysers",
    subtitle: "Dawn eruptions at 4,320 meters",
    duration: "Half day (depart 4:30 AM)",
    altitude: "4,320 m",
    difficulty: "Easy–Medium",
    distance: "3 km + 95 km drive",
    acclimatization: "2 days",
    description:
      "Rise before dawn to witness the third-largest geyser field on Earth. At over 4,300 meters, columns of steam erupt against the pre-dawn sky as the sun breaks over the Andes. The thermal pools offer a surreal morning swim at altitude.",
    highlights: [
      "80+ active geysers at sunrise",
      "Natural thermal pool bathing",
      "Andean wildlife: viscachas and vicuñas",
    ],
    placeholder: true,
    category: "adventure",
  },
  {
    id: "stargazing",
    name: "Andean Astronomy",
    subtitle: "The world's clearest skies",
    duration: "Evening (2 hours)",
    altitude: "2,440 m",
    difficulty: "Easy",
    acclimatization: "None",
    description:
      "The Atacama offers the clearest skies on the planet , the same reason ALMA and international observatories chose this desert. From our private on-site observatory, explore the southern constellations, nebulae, and planets through a powerful telescope guided by expert astronomers.",
    highlights: [
      "Private on-site observatory",
      "Eight swivel chairs for comfortable viewing",
      "Atacameño cosmovision storytelling",
    ],
    placeholder: true,
    blogUrl: "/blog/stargazing-atacama",
    blogTitle: "Stargazing in the Atacama: The World's Clearest Skies",
    category: "culture",
  },
  {
    id: "salt-flat-lagoons",
    name: "Atacama Salt Flat & Lagoons",
    subtitle: "Flamingos, salt, and infinite horizons",
    duration: "Half day",
    altitude: "2,300 m",
    difficulty: "Easy",
    distance: "Varies",
    acclimatization: "None",
    description:
      "Explore the vast Salar de Atacama , 3,000 km² of crystallized salt , and the jewel-toned lagoons where three species of flamingos feed in the mineral-rich waters. Chaxa Lagoon offers reflections so perfect the sky and earth merge.",
    highlights: [
      "Chaxa Lagoon flamingo observation",
      "Salar de Atacama salt formations",
      "Toconao village and bell tower",
    ],
    image: VICUNAS_IMG,
    blogUrl: "/blog/atacama-wildlife",
    blogTitle: "Wildlife Conservation in the Atacama Desert",
    category: "landscape",
  },
  {
    id: "rainbow-valley",
    name: "Rainbow Valley",
    subtitle: "Geological time made visible",
    duration: "Full day",
    altitude: "3,250 m",
    difficulty: "Medium",
    distance: "7.5 km + 115 km drive",
    acclimatization: "None",
    description:
      "Named for the multicolored layers of its hills and ravines, each formed by millions of years of mineral deposits. A full-day hike through one of the Atacama's most visually striking landscapes, with lunch included in the field.",
    highlights: [
      "Mineral-painted hillsides in red, green, yellow, and white",
      "Local agriculture and herding traditions",
      "Pukará archaeological viewpoint",
    ],
    placeholder: true,
    category: "adventure",
  },
  {
    id: "miscanti-miniques",
    name: "Miscanti & Miñiques Lagoons",
    subtitle: "High-altitude jewels of the altiplano",
    duration: "Full day",
    altitude: "4,200 m",
    difficulty: "Easy–Medium",
    distance: "Long drive + short walks",
    acclimatization: "1 day",
    description:
      "Journey to the altiplano to discover two of the most pristine high-altitude lagoons in Chile. Framed by volcanic peaks exceeding 5,600 meters, the deep blue waters contrast dramatically with the arid golden grasslands.",
    highlights: [
      "Twin lagoons at 4,200 m altitude",
      "Volcanic backdrop of Miscanti and Miñiques peaks",
      "Socaire village and traditional Atacameño lunch",
    ],
    placeholder: true,
    category: "landscape",
  },
  {
    id: "mountain-biking",
    name: "Mountain Biking",
    subtitle: "Through Devil's Throat and beyond",
    duration: "Half day",
    altitude: "2,500 m",
    difficulty: "Medium–Hard",
    distance: "14 km",
    acclimatization: "None",
    description:
      "Ride through the dramatic terrain of the Cordillera de la Sal on mountain bikes. The route passes through Devil's Throat , a narrow canyon carved by ancient rivers , and offers panoramic views of the salt range and distant volcanoes.",
    highlights: [
      "Devil's Throat canyon passage",
      "Cordillera de la Sal panoramas",
      "Downhill through salt formations",
    ],
    placeholder: true,
    category: "adventure",
  },
  {
    id: "puritama-hot-springs",
    name: "Puritama Hot Springs",
    subtitle: "Thermal waters in a hidden canyon",
    duration: "Half day",
    altitude: "3,500 m",
    difficulty: "Easy",
    acclimatization: "None",
    description:
      "Hidden in a narrow canyon, the Puritama Hot Springs feature eight natural pools with thermal waters between 28°C and 31°C. Rich in calcium, magnesium, sodium, and boron , revitalizing for body and mind.",
    highlights: [
      "Eight natural thermal pools",
      "Mineral-rich healing waters",
      "Canyon setting with native vegetation",
    ],
    placeholder: true,
    category: "wellness",
  },
];

const categories = [
  { id: "all", label: "All Experiences" },
  { id: "landscape", label: "Landscapes" },
  { id: "adventure", label: "Adventure" },
  { id: "culture", label: "Culture & Stars" },
  { id: "wellness", label: "Wellness" },
];

interface ExcursionsSectionProps {
  onInView: () => void;
}

export default function ExcursionsSection({ onInView }: ExcursionsSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    if (isInView) onInView();
  }, [isInView, onInView]);

  const filtered =
    activeCategory === "all"
      ? excursions
      : excursions.filter((e) => e.category === activeCategory);

  return (
    <section
      ref={ref}
      id="excursions"
      className="relative py-24 md:py-32"
    >
      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-terracotta text-xs tracking-wide-editorial mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Excursions & Adventures
          </p>
          <h2
            className="text-volcanic text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            Where the Earth
            <br />
            Tells Its Story
          </h2>
          <p
            className="text-volcanic/60 text-base md:text-lg max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            From pre-dawn geyser eruptions at 4,320 meters to sunset over lunar
            valleys, every excursion is guided by experts who know this landscape
            like home. Choose your program , Dream, Full Experience, or Private
            Guided , and we'll craft the rest.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setExpandedId(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs tracking-editorial transition-all duration-300 border ${
                activeCategory === cat.id
                  ? "bg-volcanic text-desert-cream border-volcanic"
                  : "bg-transparent text-volcanic/50 border-volcanic/20 hover:border-volcanic/40 hover:text-volcanic/80"
              }`}
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Excursion Cards */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((excursion, i) => (
              <ExcursionCard
                key={excursion.id}
                excursion={excursion}
                index={i}
                isExpanded={expandedId === excursion.id}
                onToggle={() =>
                  setExpandedId(
                    expandedId === excursion.id ? null : excursion.id
                  )
                }
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Blog Links Section */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-volcanic/10 pt-10"
        >
          <p
            className="text-volcanic/40 text-xs tracking-wide-editorial mb-6"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            From Our Journal
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Why the Atacama Is Mars on Earth",
                url: "/blog/atacama-mars",
              },
              {
                title: "Wildlife Conservation in the Atacama",
                url: "/blog/atacama-wildlife",
              },
              {
                title: "The Best Stargazing Resort",
                url: "/blog/stargazing-atacama",
              },
              {
                title: "An Oasis in the Desert",
                url: "/blog/atacama-oasis",
              },
              {
                title: "At the Edge of Habitability",
                url: "/blog/edge-habitability",
              },
            ].map((blog) => (
              <a
                key={blog.url}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 py-3 px-4 border border-volcanic/8 hover:border-terracotta/30 hover:bg-terracotta/5 transition-all duration-300"
              >
                <ExternalLink className="w-3.5 h-3.5 text-terracotta/50 group-hover:text-terracotta transition-colors flex-shrink-0" />
                <span
                  className="text-sm text-volcanic/60 group-hover:text-volcanic transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >
                  {blog.title}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* Individual Excursion Card */
function ExcursionCard({
  excursion,
  index,
  isExpanded,
  onToggle,
}: {
  excursion: Excursion;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group border border-volcanic/8 bg-card overflow-hidden hover:border-volcanic/15 transition-all duration-500"
    >
      {/* Media Area */}
      <div className="relative h-56 md:h-64 overflow-hidden">
        {excursion.video ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          >
            <source src={excursion.video} type="video/mp4" />
          </video>
        ) : excursion.image ? (
          <img
            src={excursion.image}
            alt={excursion.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-desert-sand/40 to-desert-sand/20 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-8 h-8 text-volcanic/20 mx-auto mb-2" />
              <span
                className="text-volcanic/30 text-xs tracking-editorial"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Your photo here
              </span>
            </div>
          </div>
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span
            className="px-3 py-1.5 bg-black/30 backdrop-blur-sm text-white/90 text-[10px] tracking-editorial"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            {excursion.category}
          </span>
        </div>

        {/* Blog link badge */}
        {excursion.blogUrl && (
          <a
            href={excursion.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 px-3 py-1.5 bg-terracotta/80 backdrop-blur-sm text-white text-[10px] tracking-editorial hover:bg-terracotta transition-colors flex items-center gap-1.5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-3 h-3" />
            Journal
          </a>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3
          className="text-volcanic text-xl md:text-2xl mb-1"
          style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
        >
          {excursion.name}
        </h3>
        <p
          className="text-terracotta/80 text-sm mb-4 italic"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {excursion.subtitle}
        </p>

        {/* Quick Stats */}
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-volcanic/30" />
            <span
              className="text-xs text-volcanic/50"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {excursion.duration}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Mountain className="w-3.5 h-3.5 text-volcanic/30" />
            <span
              className="text-xs text-volcanic/50"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {excursion.altitude}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Footprints className="w-3.5 h-3.5 text-volcanic/30" />
            <span
              className="text-xs text-volcanic/50"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {excursion.difficulty}
            </span>
          </div>
        </div>

        <p
          className="text-volcanic/60 text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          {excursion.description}
        </p>

        {/* Expand/Collapse */}
        <button
          onClick={onToggle}
          className="mt-4 flex items-center gap-2 text-terracotta/70 hover:text-terracotta transition-colors"
        >
          <span
            className="text-xs tracking-editorial"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            {isExpanded ? "Less detail" : "More detail"}
          </span>
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-5 mt-5 border-t border-volcanic/8">
                <p
                  className="text-volcanic/40 text-xs tracking-editorial mb-3"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  Highlights
                </p>
                <ul className="space-y-2">
                  {excursion.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-volcanic/60"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                    >
                      <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {excursion.distance && (
                  <div className="mt-4 flex items-center gap-4 text-xs text-volcanic/40">
                    <span style={{ fontFamily: "var(--font-body)" }}>
                      Distance: {excursion.distance}
                    </span>
                    <span style={{ fontFamily: "var(--font-body)" }}>
                      Acclimatization: {excursion.acclimatization}
                    </span>
                  </div>
                )}

                {excursion.blogUrl && (
                  <a
                    href={excursion.blogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-terracotta text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "12px", letterSpacing: "0.08em" }}
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                    Explore more in our Journal
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
