/**
 * NAYARA BY NIGHT: OF MOON AND STARS
 * By Albert Ghitis — Sep 3, 2025
 * Editorial blog about nocturnal experiences across all Nayara properties
 * Sections: Atacama Observatory, Rapa Nui Navigation, Bocas Bioluminescence, Costa Rica Rainforest
 */

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { EnhancedArticleSchema } from "@/components/SEOSchemaEnhanced";
import BrandNavigation from "@/components/BrandNavigation";
import BlobVideo from "@/components/BlobVideo";
import { useIsMobile } from "@/hooks/useMobile";

const NIGHT = {
  bg: "#0A0E1A",
  card: "#111827",
  accent: "#FFD700",
  text: "#E0DDD5",
  muted: "#9CA3AF",
};

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const IMG = {
  heroVideo: `${CDN}/nbn-hero-night_104e129b.mp4`,
  heroVertical: `${CDN}/nbn-hero-vertical-new_efde71a9.mp4`,
  heroStill: `${CDN}/night-sky_hero.jpg`,
  atacamaCactus: `${CDN}/nbn-cactus-milkyway_a7dc0b5c.webp`,
  atacamaArch: `${CDN}/nbn-rock-arch-milkyway_729bcc81.webp`,
  atacamaCrater: `${CDN}/nbn-crater-milkyway_00741a91.webp`,
  moaiMilkyway: `${CDN}/nbn-moai-milkyway_0588cd10.webp`,
  moaiSilhouette: `${CDN}/nbn-moai-sunset-silhouette_692f6a23.webp`,
  ranoKau: `${CDN}/nbn-rano-kau-milkyway_dd16a9d7.webp`,
  bioluminescence: "/manus-storage/bocas-bynight-bioluminescence_628c75d7.jpg",
  frogTour: "/manus-storage/night-frog-tour-clip_564600db.mp4",
  frogTourVertical: "/manus-storage/night-frog-tour-vertical_596427d2.mp4",
};

/* ─── Fade-in wrapper ─── */
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Section image with caption ─── */
function SectionImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <Reveal className="my-12 md:my-16">
      <div className="relative overflow-hidden" style={{ borderRadius: "2px" }}>
        <img
          src={src}
          alt={alt}
          className="w-full object-cover"
          style={{ maxHeight: "520px" }}
          loading="lazy"
        />
      </div>
      {caption && (
        <p
          className="mt-3 text-[12px] tracking-[0.08em] uppercase text-center"
          style={{ fontFamily: "var(--font-body)", color: NIGHT.muted }}
        >
          {caption}
        </p>
      )}
    </Reveal>
  );
}

/* ─── Full-width image pair ─── */
function ImagePair({ left, right }: { left: { src: string; alt: string; caption?: string }; right: { src: string; alt: string; caption?: string } }) {
  return (
    <Reveal className="my-12 md:my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img src={left.src} alt={left.alt} className="w-full object-cover" style={{ height: "360px", borderRadius: "2px" }} loading="lazy" />
          {left.caption && (
            <p className="mt-2 text-[11px] tracking-[0.08em] uppercase text-center" style={{ fontFamily: "var(--font-body)", color: NIGHT.muted }}>{left.caption}</p>
          )}
        </div>
        <div>
          <img src={right.src} alt={right.alt} className="w-full object-cover" style={{ height: "360px", borderRadius: "2px" }} loading="lazy" />
          {right.caption && (
            <p className="mt-2 text-[11px] tracking-[0.08em] uppercase text-center" style={{ fontFamily: "var(--font-body)", color: NIGHT.muted }}>{right.caption}</p>
          )}
        </div>
      </div>
    </Reveal>
  );
}

/* ─── Divider ─── */
function Divider() {
  return <div className="my-14 md:my-20 mx-auto w-16" />;
}

export default function NayaraByNightBlog() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen" style={{ backgroundColor: NIGHT.bg }}>
      <EnhancedArticleSchema
        image={IMG.heroStill}
        headline="Nayara by Night: Stargazing, Bioluminescence, and the Rainforest After Dark"
        description="From the Atacama's observatory to Bocas del Toro's bioluminescent bays, the night reveals a different world at Nayara Resorts."
        author={{ name: "Albert Ghitis", expertise: ["Luxury Travel", "Sustainable Tourism", "Hospitality"] }}
        datePublished="2025-09-03"
        url="https://nayararesorts.manus.space/blog/nayara-by-night"
      />
      <BrandNavigation pageType="brand" hideCenterLabel />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative h-screen w-full overflow-hidden flex items-end justify-center pb-16 md:pb-24">
        <div className="absolute inset-0">
          <BlobVideo
            src={isMobile ? IMG.heroVertical : IMG.heroVideo}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] via-[#0A0E1A]/40 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center px-6 md:px-12 max-w-4xl"
        >
          <p
            className="text-[10px] md:text-[11px] tracking-[0.35em] mb-5 uppercase"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: NIGHT.accent }}
          >
            Albert Ghitis &nbsp;·&nbsp; September 2025
          </p>
          <h1
            className="text-3xl md:text-5xl lg:text-6xl leading-[1.05] mb-5"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "white" }}
          >
            Nayara by Night:<br />Stargazing, Bioluminescence, and the Rainforest After Dark
          </h1>
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400, color: "rgba(255,255,255,0.75)" }}
          >
            Stargazing, bioluminescence, and the transformative power of the night sky
          </p>
        </motion.div>
      </section>

      {/* ═══════════ ARTICLE BODY ═══════════ */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">

          {/* ── INTRODUCTION ── */}
          <Reveal>
            <p
              className="text-[15px] md:text-[17px] leading-[1.95] mb-6"
              style={{ fontFamily: "var(--font-body)", color: NIGHT.text }}
            >
              On July 20, 1969, Neil Armstrong took one small step — and mankind was forever changed. For a moment, the world paused to look up in awe. International Moon Day commemorates that extraordinary leap into the unknown, celebrating our timeless fascination with the sky above and inviting us to reflect on our enduring connection to the cosmos.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.95] mb-6"
              style={{ fontFamily: "var(--font-body)", color: NIGHT.text }}
            >
              But the Moon is more than a symbol — it is essential to our very survival. Its gravitational pull creates the tides, mixing land and sea in the rhythm that gave rise to life. It slowed Earth's rotation, giving us the 24-hour day. And it acts as a cosmic shield, protecting us from asteroids that might have otherwise ended our story before it began.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.95] mb-6"
              style={{ fontFamily: "var(--font-body)", color: NIGHT.text }}
            >
              The Moon has also shaped the way we understand ourselves. For millennia, it has been central to astrology — marking cycles of emotion, transformation, and balance. Whether or not one believes in signs and houses, the Moon's rhythm has long been woven into how cultures interpret human experience and cosmic harmony.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.95]"
              style={{ fontFamily: "var(--font-body)", color: NIGHT.text }}
            >
              At Nayara Resorts, that sense of wonder becomes manifest. Whether you're stargazing in the clear skies of the Atacama Desert, walking under the Moon in Costa Rica's rainforest — where the wildlife comes alive after dark — or paddling through glowing bioluminescence in Bocas del Toro, nightfall isn't an ending — it's a new beginning.
            </p>
          </Reveal>

          <Divider />

          {/* ── SECTION 1: ATACAMA OBSERVATORY ── */}
          <Reveal>
            <p
              className="text-[10px] tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: NIGHT.accent }}
            >
              Nayara Alto Atacama
            </p>
            <h2
              className="text-2xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "white" }}
            >
              Stargazing at Nayara Alto Atacama: A New Observatory in the Atacama Desert
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.95] mb-6"
              style={{ fontFamily: "var(--font-body)", color: NIGHT.text }}
            >
              The Atacama Desert isn't just one of the best places on Earth to observe the night sky — it's the very best. With its high altitude, dry air, and near-total absence of light pollution, it offers unmatched clarity. That's why NASA, the European Southern Observatory, and other space agencies have built major observatories here, drawn by skies so clear you can see galaxies with the naked eye.
            </p>
          </Reveal>

          <SectionImage src={IMG.atacamaCactus} alt="Milky Way over cactus in the Atacama Desert" caption="The Milky Way rises over the Atacama — the world's clearest skies" />

          <Reveal>
            <p
              className="text-[15px] md:text-[17px] leading-[1.95] mb-6"
              style={{ fontFamily: "var(--font-body)", color: NIGHT.text }}
            >
              At Nayara Alto Atacama, guests already enjoy stargazing experiences unlike anywhere else — but now, the expanded observation platform will take it even further. Designed to enhance visibility and comfort, it offers a deeper immersion into this otherworldly setting. Under the expert guidance of our on-staff specialized astronomy guides, guests trace the craters of the Moon, view Saturn's rings through a telescope, and glimpse distant galaxies glowing with ancient light.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.95]"
              style={{ fontFamily: "var(--font-body)", color: NIGHT.text }}
            >
              Beyond the observatory, moonlit desert walks provide a different kind of immersion, one of silence and raw connection. The Milky Way stretches overhead, and the desert breathes with an ancient rhythm. In Andean cosmology, the Moon — known as <em>Killa</em> — is a feminine force representing balance and renewal. To walk beneath her light in the Atacama is to experience both wonder and grounding energy.
            </p>
          </Reveal>

          <ImagePair
            left={{ src: IMG.atacamaArch, alt: "Rock arch under the Milky Way", caption: "Rock formations frame the southern sky" }}
            right={{ src: IMG.atacamaCrater, alt: "Crater under the Milky Way in Atacama", caption: "Volcanic craters beneath the cosmos" }}
          />

          <Divider />

          {/* ── SECTION 2: RAPA NUI NAVIGATION ── */}
          <Reveal>
            <p
              className="text-[10px] tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: NIGHT.accent }}
            >
              Nayara Hangaroa
            </p>
            <h2
              className="text-2xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "white" }}
            >
              Navigating by Moon and Memory on Easter Island
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.95] mb-6"
              style={{ fontFamily: "var(--font-body)", color: NIGHT.text }}
            >
              For the ancient Polynesian voyagers who settled Rapa Nui, the Moon and stars were not symbols of romance or wonder — they were tools of survival and discovery. Navigators sailed thousands of miles across the Pacific using a sophisticated system of wayfinding passed down through generations — not written down, but memorized and recited.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.95] mb-6"
              style={{ fontFamily: "var(--font-body)", color: NIGHT.text }}
            >
              Stars acted as a celestial compass. Navigators memorized dozens of star paths — knowing which stars rose and set on the horizon at specific latitudes. By keeping a particular star on the horizon off the bow of the canoe, they could hold a consistent direction through the night. As the night progressed and stars shifted, they switched to the next star in the sequence.
            </p>
          </Reveal>

          <SectionImage src={IMG.moaiMilkyway} alt="Moai statues under the Milky Way on Easter Island" caption="The Moai stand sentinel beneath the southern constellations" />

          <Reveal>
            <p
              className="text-[15px] md:text-[17px] leading-[1.95] mb-6"
              style={{ fontFamily: "var(--font-body)", color: NIGHT.text }}
            >
              The Moon served as a timekeeper and secondary guide. Its phases helped estimate travel duration and plan launches around tides and weather patterns. In some cases, navigators used the Moon's position in the sky relative to stars or the horizon to confirm their orientation — especially when the stars were obscured.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.95]"
              style={{ fontFamily: "var(--font-body)", color: NIGHT.text }}
            >
              At Nayara Hangaroa, guests can explore this legacy through evening walks among the Moai, the island's iconic stone statues. As the sky darkens, their shadows lengthen across volcanic earth, inviting quiet contemplation. Cultural talks deepen the experience, exploring how celestial navigation and lunar cycles shaped migration, mythology, and daily life.
            </p>
          </Reveal>

          <ImagePair
            left={{ src: IMG.moaiSilhouette, alt: "Moai silhouette at sunset", caption: "Moai shadows lengthen at dusk" }}
            right={{ src: IMG.ranoKau, alt: "Rano Kau crater under the Milky Way", caption: "Rano Kau crater beneath the stars" }}
          />

          <Divider />

          {/* ── SECTION 3: BOCAS BIOLUMINESCENCE ── */}
          <Reveal>
            <p
              className="text-[10px] tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: NIGHT.accent }}
            >
              Nayara Bocas del Toro
            </p>
            <h2
              className="text-2xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "white" }}
            >
              Bioluminescence in Bocas del Toro: Stars Below the Surface
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.95] mb-6"
              style={{ fontFamily: "var(--font-body)", color: NIGHT.text }}
            >
              In Bocas del Toro, Panama, the Moon shares its stage with something even more otherworldly: bioluminescence. On select nights, the ocean itself seems to shimmer with stardust. Tiny marine organisms, disturbed by paddles or footsteps, emit a neon-blue glow — like constellations rippling just beneath the surface.
            </p>
          </Reveal>

          <SectionImage src={IMG.bioluminescence} alt="Bioluminescent waters in Bocas del Toro" caption="Bioluminescent waters glow beneath the Caribbean night" />

          <Reveal>
            <p
              className="text-[15px] md:text-[17px] leading-[1.95] mb-6"
              style={{ fontFamily: "var(--font-body)", color: NIGHT.text }}
            >
              At Nayara Bocas del Toro, guests can kayak or swim through these luminous waters, guided by soft moonlight and the gentle pulse of the tide. The experience feels like entering a dream: quiet, magical, and alive. Local guides share stories of Caribbean folklore, where glowing bays were thought to be enchanted or blessed by ancestral spirits.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.95]"
              style={{ fontFamily: "var(--font-body)", color: NIGHT.text }}
            >
              And just as the Moon's gravity pulls the tides, shaping the rhythms of coastal life, it also orchestrates the spectacle itself — bioluminescence thrives under the right lunar conditions. Full moons bring brilliance, while darker skies make the glow more pronounced. In Bocas, the Moon is both conductor and companion, helping to create a perfect harmony between sky and sea.
            </p>
          </Reveal>

          <Divider />

          {/* ── SECTION 4: COSTA RICA RAINFOREST ── */}
          <Reveal>
            <p
              className="text-[10px] tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: NIGHT.accent }}
            >
              Nayara Tented Camp
            </p>
            <h2
              className="text-2xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "white" }}
            >
              The Arenal Rainforest After Dark at Nayara
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.95] mb-6"
              style={{ fontFamily: "var(--font-body)", color: NIGHT.text }}
            >
              In Costa Rica, nightfall unveils the rainforest's secret life. At Nayara Tented Camp, the sun sets and the forest awakens. Crickets sing, mist rises, fireflies blink. And under the glow of the Moon, nature shifts into a slower, more intimate rhythm.
            </p>
          </Reveal>

          {/* Frog tour video */}
          <Reveal className="my-12 md:my-16">
            <div className="relative overflow-hidden" style={{ borderRadius: "2px", maxHeight: "480px" }}>
              <BlobVideo
                src={IMG.frogTour}
                className="w-full object-cover max-h-[480px]"
              />
            </div>
            <p
              className="mt-3 text-[12px] tracking-[0.08em] uppercase text-center"
              style={{ fontFamily: "var(--font-body)", color: NIGHT.muted }}
            >
              The signature Frog Tour — nocturnal encounters in the Arenal rainforest
            </p>
          </Reveal>

          <Reveal>
            <p
              className="text-[15px] md:text-[17px] leading-[1.95] mb-6"
              style={{ fontFamily: "var(--font-body)", color: NIGHT.text }}
            >
              Our signature Frog Tour offers guests a guided encounter with this nocturnal world. Red-eyed tree frogs, glass frogs, and other elusive creatures emerge under the moonlight. Each step reveals the intricacy of the forest after dark — a living, breathing mosaic of sound and motion.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.95]"
              style={{ fontFamily: "var(--font-body)", color: NIGHT.text }}
            >
              For Costa Rica's Indigenous communities, such as the Bribri and Cabécar peoples, the Moon governs planting cycles, healing rituals, and spiritual balance. At Nayara, rainforest experiences are rooted in that same respect for lunar wisdom. Night is not simply the end of the day; it is a time of harmony and renewal.
            </p>
          </Reveal>

          <Divider />

          {/* ── CLOSING ── */}
          <Reveal>
            <h2
              className="text-2xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "white" }}
            >
              What the Night Sky Reveals Across Nayara Destinations
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.95] mb-6"
              style={{ fontFamily: "var(--font-body)", color: NIGHT.text }}
            >
              Across Nayara, the Moon and stars do more than cast light. They create space for stillness, awaken wonder, and reveal beauty that lives beyond the visible, shaped by nature and layered with meaning. In the Atacama, they open a window to the cosmos. In Rapa Nui, they carry echoes of the past. In Costa Rica, they guide us into the quiet rhythm of the forest. And in Bocas del Toro, they dance across glowing waters, where bioluminescence pulses with every paddle and movement under the night sky.
            </p>
          </Reveal>

          {/* Cross-link to Stargazing Atacama */}
          <Reveal className="mt-12">
            <a
              href="/blog/stargazing-atacama"
              className="inline-block text-sm tracking-[0.12em] uppercase border-b border-[#FFD700]/40 pb-1 hover:border-[#FFD700] transition-colors"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: NIGHT.accent }}
            >
              Continue reading: Why Nayara Alto Atacama Is the Best Stargazing Resort
            </a>
          </Reveal>

          {/* Cross-link to Sunlit Sustainability (the Sun counterpart) */}
          <Reveal className="mt-4">
            <a
              href="/blog/sunlit-sustainability"
              className="inline-block text-sm tracking-[0.12em] uppercase border-b border-[#FFD700]/40 pb-1 hover:border-[#FFD700] transition-colors"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: NIGHT.accent }}
            >
              Continue reading: Sunlit Sustainability: Nature-Powered
            </a>
          </Reveal>

          {/* Moon is calling CTA */}
          <Reveal className="mt-16 mb-8">
            <p
              className="text-center text-xl md:text-2xl italic"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: NIGHT.accent }}
            >
              The Moon is calling.
            </p>
          </Reveal>

        </div>
      </section>
      {/* ── EXPLORE MORE ── */}
      <section style={{ backgroundColor: "#E8E2D8" }}>
        <div className="max-w-5xl mx-auto px-8 md:px-16 pt-16 pb-16">
          <p className="uppercase tracking-[0.3em] text-[11px] mb-4 text-center" style={{ fontWeight: 600, color: "#8B6914" }}>Continue Reading</p>
          <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#3B2B26" }}>
            Explore More
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
        { slug: "/blog/stargazing-atacama", title: "Stargazing in the Atacama Desert", pillar: "Experiences" },
        { slug: "/blog/hot-springs", title: "The Science of Hot Springs", pillar: "Wellness" },
        { slug: "/blog/nayara-story", title: "The Nayara Story", pillar: "Brand" },
            ].map((article) => (
              <a key={article.slug} href={article.slug} className="group cursor-pointer">
                <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontWeight: 600, color: "#8B6914" }}>{article.pillar}</p>
                <h3 className="text-lg group-hover:opacity-70 transition-opacity" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#3B2B26" }}>{article.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer textColor="#FFFFFF" />
    </div>
  );
}
