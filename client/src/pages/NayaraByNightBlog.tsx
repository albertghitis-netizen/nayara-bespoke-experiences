/**
 * NAYARA BY NIGHT: OF MOON AND STARS
 * Author: Albert Ghitis | Sep 3, 2025
 * Verbatim content from the original blog.
 * Format: Standardized template (v2)
 * - BrandNavigation (espresso pills)
 * - 21:9 hero
 * - Title block + pillar tag + H1
 * - BlogAuthorReadTime (Albert Ghitis)
 * - Key Findings
 * - Alternating cream/stone sections (no two same in a row)
 * - One espresso dark pull quote
 * - Sources & Further Reading
 * - Explore More (3 related articles with images)
 * - Footer (espresso)
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import BlogAuthorReadTime from "@/components/BlogAuthorReadTime";

const PALETTE = {
  espresso: "#3B2B26",
  cream: "#F7F5F0",
  stone: "#E8E2D8",
  accent: "#8B6914",
  text: "#2C2016",
  muted: "#5A4A3A",
};

const contentEntrance = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.8, 0.25, 1] as [number, number, number, number] },
  }),
};

/* Hero image */
const HERO_IMAGE = "/manus-storage/moai-milky-way-night_73a94f15.jpg";

/* Related articles for Explore More */
const RELATED_ARTICLES = [
  {
    slug: "/blog/birdwatching",
    title: "Birdwatching in the Arenal Volcano Region",
    pillar: "Experiences",
    image: "/manus-storage/birdwatching-card-aracari-square_616da216.jpg",
  },
  {
    slug: "/blog/edge-habitability",
    title: "The Atacama Desert at the Edge of Habitability",
    pillar: "Experiences",
    image: "/manus-storage/edge-habitability-cover_1b054538.jpg",
  },
  {
    slug: "/blog/rooted-in-community",
    title: "Rooted in Community: People First",
    pillar: "Sustainability",
    image: "/manus-storage/rooted-community-cover_dcdbfae8.jpg",
  },
];

export default function NayaraByNightBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Nayara by Night: Of Moon and Stars",
    description: "Discover the magic of darkness and celestial wonders: stargazing, bioluminescence, and the transformative power of the night sky at Nayara.",
    author: { "@type": "Person", name: "Albert Ghitis" },
    publisher: { "@type": "Organization", name: "Nayara Resorts" },
    datePublished: "2025-09-03",
    dateModified: "2025-09-03",
    image: HERO_IMAGE,
    articleSection: "Experiences",
    keywords: "stargazing, bioluminescence, night sky, Atacama, Rapa Nui, Bocas del Toro, Costa Rica, nocturnal wildlife",
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.cream, color: PALETTE.text, fontFamily: "var(--font-body)" }}>
      {/* ── BRAND NAVIGATION ── */}
      <BrandNavigation pageType="brand" hideCenterLabel />

      {/* SEO HEAD */}
      <Helmet>
        <title>Nayara by Night: Of Moon and Stars | Nayara Resorts</title>
        <meta name="description" content="Discover the magic of darkness and celestial wonders: stargazing, bioluminescence, and the transformative power of the night sky at Nayara." />
        <meta property="og:title" content="Nayara by Night: Of Moon and Stars" />
        <meta property="og:description" content="Stargazing in the Atacama, bioluminescence in Bocas del Toro, and the rainforest after dark." />
        <meta property="og:image" content={HERO_IMAGE} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      {/* ── HERO (ultra-wide, 21:9) ── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "21/9", minHeight: "400px", maxHeight: "70vh" }}
      >
        <img
          src={HERO_IMAGE}
          alt="Moai statues under the Milky Way on Easter Island"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
      </section>

      {/* ── TITLE BLOCK ── */}
      <motion.section
        style={{ backgroundColor: PALETTE.cream }}
        variants={contentEntrance}
        initial="hidden"
        animate="visible"
        custom={0.1}
      >
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-8">
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span className="text-[11px] font-medium tracking-[0.35em]" style={{ color: PALETTE.espresso }}>
              EXPERIENCES
            </span>
            <span className="text-[10px] tracking-[0.2em] border px-2 py-0.5 rounded-full" style={{ color: `${PALETTE.muted}99`, borderColor: PALETTE.stone }}>
              Stargazing
            </span>
            <span className="text-[10px] tracking-[0.2em] border px-2 py-0.5 rounded-full" style={{ color: `${PALETTE.muted}99`, borderColor: PALETTE.stone }}>
              Nocturnal
            </span>
            <span className="text-[10px] tracking-[0.2em] border px-2 py-0.5 rounded-full" style={{ color: `${PALETTE.muted}99`, borderColor: PALETTE.stone }}>
              All Properties
            </span>
          </div>

          <h1
            className="text-3xl md:text-[40px] lg:text-[46px] leading-[1.15] mb-5"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
          >
            Nayara by Night: Of Moon and Stars
          </h1>
        </div>
      </motion.section>

      {/* ── AUTHOR / READING TIME BAND ── */}
      <BlogAuthorReadTime
        author="Albert Ghitis"
        authorRole="Editorial"
        date="September 3, 2025"
        wordCount={1800}
      />

      {/* ── KEY FINDINGS ── */}
      <motion.section
        style={{ backgroundColor: PALETTE.stone }}
        variants={contentEntrance}
        initial="hidden"
        animate="visible"
        custom={0.25}
      >
        <div className="max-w-3xl mx-auto px-8 md:px-16 py-12">
          <div className="border rounded-lg p-6 md:p-8" style={{ borderColor: `${PALETTE.muted}33`, backgroundColor: PALETTE.cream }}>
            <p className="text-lg mb-5" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
              Key Findings
            </p>
            <ul className="space-y-4">
              {[
                "The Atacama Desert offers the clearest night skies on Earth, with near-total absence of light pollution, making it the world's premier stargazing destination.",
                "Ancient Polynesian navigators used the Moon and stars as tools of survival, memorizing dozens of star paths to sail thousands of miles across the Pacific.",
                "Bioluminescence in Bocas del Toro thrives under specific lunar conditions, with the Moon acting as both conductor and companion to the spectacle.",
                "Costa Rica's rainforest transforms after dark into a living mosaic of sound and motion, with nocturnal species emerging under moonlight.",
                "Across all Nayara properties, nightfall is not an ending but a new beginning, revealing beauty that lives beyond the visible.",
              ].map((finding, i) => (
                <li key={i} className="text-[15px] leading-[1.9] pl-5 border-l-2" style={{ color: PALETTE.muted, borderColor: PALETTE.espresso }}>
                  {finding}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 1: INTRO (cream) ── */}
      <motion.section
        style={{ backgroundColor: PALETTE.cream }}
        variants={contentEntrance}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        custom={0.1}
      >
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>
              On July 20, 1969, Neil Armstrong took one small step and mankind was forever changed. For a moment, the world paused to look up in awe. International Moon Day commemorates that extraordinary leap into the unknown, celebrating our timeless fascination with the sky above and inviting us to reflect on our enduring connection to the cosmos.
            </p>
            <p>
              But the Moon is more than a symbol. It is essential to our very survival. Its gravitational pull creates the tides, mixing land and sea in the rhythm that gave rise to life. It slowed Earth's rotation, giving us the 24-hour day. And it acts as a cosmic shield, protecting us from asteroids that might have otherwise ended our story before it began.
            </p>
            <p>
              The Moon has also shaped the way we understand ourselves. For millennia, it has been central to astrology, marking cycles of emotion, transformation, and balance. Whether or not one believes in signs and houses, the Moon's rhythm has long been woven into how cultures interpret human experience and cosmic harmony.
            </p>
            <p>
              At Nayara Resorts, that sense of wonder becomes manifest. Whether you're stargazing in the clear skies of the Atacama Desert, walking under the Moon in Costa Rica's rainforest where the wildlife comes alive after dark, or paddling through glowing bioluminescence in Bocas del Toro, nightfall isn't an ending. It's a new beginning.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 2: A NEW OBSERVATORY IN THE DESERT (stone) ── */}
      <motion.section
        style={{ backgroundColor: PALETTE.stone }}
        variants={contentEntrance}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        custom={0.1}
      >
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            A New Observatory in the Desert
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>
              The Atacama Desert isn't just one of the best places on Earth to observe the night sky. It's the very best. With its high altitude, dry air, and near-total absence of light pollution, it offers unmatched clarity. That's why NASA, the European Southern Observatory, and other space agencies have built major observatories here, drawn by skies so clear you can see galaxies with the naked eye.
            </p>
            <p>
              At Nayara Alto Atacama, guests already enjoy stargazing experiences unlike anywhere else, but now, the expanded observation platform will take it even further. Designed to enhance visibility and comfort, it offers a deeper immersion into this otherworldly setting. Under the expert guidance of our on-staff specialized astronomy guides, guests trace the craters of the Moon, view Saturn's rings through a telescope, and glimpse distant galaxies glowing with ancient light.
            </p>
            <p>
              Beyond the observatory, moonlit desert walks provide a different kind of immersion, one of silence and raw connection. The Milky Way stretches overhead, and the desert breathes with an ancient rhythm. In Andean cosmology, the Moon, known as Killa, is a feminine force representing balance and renewal. To walk beneath her light in the Atacama is to experience both wonder and grounding energy.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 3: NAVIGATING BY MOON AND MEMORY (cream) ── */}
      <motion.section
        style={{ backgroundColor: PALETTE.cream }}
        variants={contentEntrance}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        custom={0.1}
      >
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Navigating by Moon and Memory
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>
              For the ancient Polynesian voyagers who settled Rapa Nui, the Moon and stars were not symbols of romance or wonder. They were tools of survival and discovery. Navigators sailed thousands of miles across the Pacific using a sophisticated system of wayfinding passed down through generations, not written down, but memorized and recited.
            </p>
            <p>
              Stars acted as a celestial compass. Navigators memorized dozens of star paths, knowing which stars rose and set on the horizon at specific latitudes. By keeping a particular star on the horizon off the bow of the canoe, they could hold a consistent direction through the night. As the night progressed and stars shifted, they switched to the next star in the sequence.
            </p>
            <p>
              The Moon served as a timekeeper and secondary guide. Its phases helped estimate travel duration and plan launches around tides and weather patterns. In some cases, navigators used the Moon's position in the sky relative to stars or the horizon to confirm their orientation, especially when the stars were obscured.
            </p>
            <p>
              At Nayara Hangaroa, guests can explore this legacy through evening walks among the Moai, the island's iconic stone statues. As the sky darkens, their shadows lengthen across volcanic earth, inviting quiet contemplation. Cultural talks deepen the experience, exploring how celestial navigation and lunar cycles shaped migration, mythology, and daily life.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── ESPRESSO DARK — Pull Quote ── */}
      <motion.section
        style={{ backgroundColor: PALETTE.espresso }}
        variants={contentEntrance}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        custom={0.1}
      >
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-16 pb-16">
          <blockquote className="text-center">
            <p
              className="text-xl md:text-2xl italic leading-relaxed"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "white" }}
            >
              "The Moon and stars do more than cast light. They create space for stillness, awaken wonder, and reveal beauty that lives beyond the visible, shaped by nature and layered with meaning."
            </p>
          </blockquote>
        </div>
      </motion.section>

      {/* ── SECTION 4: STARS BELOW THE SURFACE (stone) ── */}
      <motion.section
        style={{ backgroundColor: PALETTE.stone }}
        variants={contentEntrance}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        custom={0.1}
      >
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Stars Below the Surface: Bioluminescence in Bocas
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>
              In Bocas del Toro, Panama, the Moon shares its stage with something even more otherworldly: bioluminescence. On select nights, the ocean itself seems to shimmer with stardust. Tiny marine organisms, disturbed by paddles or footsteps, emit a neon-blue glow, like constellations rippling just beneath the surface.
            </p>
            <p>
              At Nayara Bocas del Toro, guests can kayak or swim through these luminous waters, guided by soft moonlight and the gentle pulse of the tide. The experience feels like entering a dream: quiet, magical, and alive. Local guides share stories of Caribbean folklore, where glowing bays were thought to be enchanted or blessed by ancestral spirits.
            </p>
            <p>
              And just as the Moon's gravity pulls the tides, shaping the rhythms of coastal life, it also orchestrates the spectacle itself. Bioluminescence thrives under the right lunar conditions. Full moons bring brilliance, while darker skies make the glow more pronounced. In Bocas, the Moon is both conductor and companion, helping to create a perfect harmony between sky and sea.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 5: THE RAINFOREST AFTER DARK (cream) ── */}
      <motion.section
        style={{ backgroundColor: PALETTE.cream }}
        variants={contentEntrance}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        custom={0.1}
      >
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            The Rainforest After Dark
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>
              In Costa Rica, nightfall unveils the rainforest's secret life. At Nayara Tented Camp, the sun sets and the forest awakens. Crickets sing, mist rises, fireflies blink. And under the glow of the Moon, nature shifts into a slower, more intimate rhythm.
            </p>
            <p>
              Our signature Frog Tour offers guests a guided encounter with this nocturnal world. Red-eyed tree frogs, glass frogs, and other elusive creatures emerge under the moonlight. Each step reveals the intricacy of the forest after dark, a living, breathing mosaic of sound and motion.
            </p>
            <p>
              For Costa Rica's Indigenous communities, such as the Bribri and Cabecar peoples, the Moon governs planting cycles, healing rituals, and spiritual balance. At Nayara, rainforest experiences are rooted in that same respect for lunar wisdom. Night is not simply the end of the day; it is a time of harmony and renewal.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 6: WHAT THE MOON REVEALS (stone) ── */}
      <motion.section
        style={{ backgroundColor: PALETTE.stone }}
        variants={contentEntrance}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        custom={0.1}
      >
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            What the Moon Reveals
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>
              Across Nayara, the Moon and stars do more than cast light. They create space for stillness, awaken wonder, and reveal beauty that lives beyond the visible, shaped by nature and layered with meaning. In the Atacama, they open a window to the cosmos. In Rapa Nui, they carry echoes of the past. In Costa Rica, they guide us into the quiet rhythm of the forest. And in Bocas del Toro, they dance across glowing waters, where bioluminescence pulses with every paddle and movement under the night sky.
            </p>
            <p>
              The Moon is calling.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── SOURCES & FURTHER READING (cream) ── */}
      <section style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <p className="uppercase tracking-[0.3em] text-[11px] mb-4 text-center" style={{ fontWeight: 600, color: PALETTE.accent }}>
            References
          </p>
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Sources & Further Reading
          </h2>
          <ul className="space-y-3">
            {[
              { label: "European Southern Observatory (ESO) — Atacama Desert Observatories", href: "https://www.eso.org" },
              { label: "NASA — International Moon Day", href: "https://www.nasa.gov" },
              { label: "Polynesian Voyaging Society — Traditional Navigation", href: "https://www.hokulea.com" },
              { label: "Nayara Alto Atacama — Stargazing Experiences", href: "https://nayaraaltoatacama.com" },
              { label: "Nayara Bocas del Toro — Bioluminescence Experiences", href: "https://nayarabocasdeltoro.com" },
            ].map((src) => (
              <li key={src.label} className="text-[14px] leading-[1.7]" style={{ color: PALETTE.muted }}>
                <a href={src.href} target="_blank" rel="noopener noreferrer" className="underline transition-opacity hover:opacity-70" style={{ color: PALETTE.espresso }}>
                  {src.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SHARE THIS POST ── */}
      <section style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12 text-center">
          <p
            className="uppercase tracking-[0.3em] text-[11px] mb-6"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
          >
            Share This Post
          </p>
          <div className="flex items-center justify-center gap-6">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Share on Facebook"
            >
              <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill={PALETTE.espresso} style={{ opacity: 0.6 }} viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(document.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Share on X"
            >
              <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill={PALETTE.espresso} style={{ opacity: 0.6 }} viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Share on LinkedIn"
            >
              <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill={PALETTE.espresso} style={{ opacity: 0.6 }} viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent(document.title)}&body=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              className="group"
              aria-label="Share via Email"
            >
              <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill="none" stroke={PALETTE.espresso} style={{ opacity: 0.6 }} strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
            </a>
            <button
              onClick={() => { if (typeof navigator !== 'undefined' && navigator.clipboard) { navigator.clipboard.writeText(window.location.href); } }}
              className="group"
              aria-label="Copy link"
            >
              <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill="none" stroke={PALETTE.espresso} style={{ opacity: 0.6 }} strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.813a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364L5.25 8.25"/></svg>
            </button>
          </div>
        </div>
      </section>



      {/* ── EXPLORE MORE (3 related articles) ── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ backgroundColor: PALETTE.stone }}>
        <div className="max-w-5xl mx-auto px-8 md:px-16 pt-16 pb-16">
          <p className="uppercase tracking-[0.3em] text-[11px] mb-4 text-center" style={{ fontWeight: 600, color: PALETTE.accent }}>
            Continue Reading
          </p>
          <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Explore More
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RELATED_ARTICLES.map((article) => (
              <Link key={article.slug} href={article.slug}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden mb-4 rounded-lg">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontWeight: 600, color: PALETTE.accent }}>
                    {article.pillar}
                  </p>
                  <h3 className="text-lg" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
                    {article.title}
                  </h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── BRAND ESPRESSO FOOTER ── */}
      <Footer textColor="#FFFFFF" />
    </div>
  );
}
