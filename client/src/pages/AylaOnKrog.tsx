/**
 * AYLA ON KROG — Elevated Luxury Apartment Page
 * BeltLine living in Atlanta's Krog District
 * Brand colors: Navy (#1a2744) + Gold (#c8a96e) accent
 * Elevated from the original template-style site
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import {
  MapPin,
  Phone,
  Waves,
  Bike,
  Palette,
  Dumbbell,
  Building2,
  Sun,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

/* ─── CDN Images ─────────────────────────────────────────── */
const images = {
  pool: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/ayla-pool_93d30752.jpg",
  interior:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/ayla-interior_521c901d.jpg",
  clubhouse:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/ayla-clubhouse_2419ba92.jpg",
  lobby:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/ayla-lobby_9ec32fa5.jpg",
  night:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/ayla-night_d6ccb227.jpg",
  poolDeck:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/ayla-pool-deck_eb744355.webp",
  lounge:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/ayla-lounge_d964351c.jpg",
};

/* ─── Amenity Data ───────────────────────────────────────── */
const amenities = [
  {
    icon: <Waves className="w-5 h-5" />,
    title: "Saltwater Pool",
    description:
      "Resort-style saltwater pool with sun loungers and cabana seating, surrounded by curated landscaping.",
  },
  {
    icon: <Sun className="w-5 h-5" />,
    title: "Rooftop Skyline Views",
    description:
      "Panoramic views of the Atlanta skyline from the rooftop terrace — the perfect backdrop for evening gatherings.",
  },
  {
    icon: <Bike className="w-5 h-5" />,
    title: "Self-Serve Bike Shop",
    description:
      "Tune up your ride before hitting the BeltLine. Tools, air pumps, and repair stations at your fingertips.",
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Commissioned Art",
    description:
      "Vibrantly commissioned art installations throughout the community, creating a gallery-like living experience.",
  },
  {
    icon: <Dumbbell className="w-5 h-5" />,
    title: "Fitness Studio",
    description:
      "State-of-the-art fitness center with curated classes — from yoga to HIIT — designed for every level.",
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "Clubhouse & Lounge",
    description:
      "Thoughtfully designed social spaces with billiards, co-working areas, and a resident lounge.",
  },
];

/* ─── Floor Plan Data ────────────────────────────────────── */
const floorPlans = [
  {
    type: "Studio",
    sqft: "450–550",
    price: "From $1,984",
    description: "Efficient luxury with open layouts and premium finishes.",
  },
  {
    type: "One Bedroom",
    sqft: "650–850",
    price: "From $2,295",
    description:
      "Spacious living with dedicated bedroom, walk-in closet, and full kitchen.",
  },
  {
    type: "Two Bedroom",
    sqft: "1,000–1,200",
    price: "From $2,895",
    description:
      "Generous layouts with dual bedrooms, ideal for roommates or a home office.",
  },
];

/* ─── Main Component ─────────────────────────────────────── */
export default function AylaOnKrog() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <AylaHeader />
      <HeroSection />
      <IntroSection />
      <AmenitiesSection />
      <ResidencesSection />
      <NeighborhoodSection />
      <ContactSection />
      <AylaFooter />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   HEADER
   ═══════════════════════════════════════════════════════════ */
function AylaHeader() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center justify-between px-6 md:px-10 h-16">
        <Link
          href="/"
          className="p-2 rounded-full text-white bg-[#1a2744]/40 backdrop-blur-sm hover:bg-[#1a2744]/60 transition-all duration-300"
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
        </Link>

        <span
          className="text-white text-xl tracking-[0.3em] uppercase"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          Ayla
        </span>

        <a
          href="tel:4048004773"
          className="p-2 rounded-full text-white bg-[#1a2744]/40 backdrop-blur-sm hover:bg-[#1a2744]/60 transition-all duration-300"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>
    </motion.header>
  );
}

/* ═══════════════════════════════════════════════════════════
   HERO — Full-width image with overlay text
   ═══════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative h-[80vh] md:h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images.pool}
          alt="Ayla on Krog - Pool and courtyard"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2744]/60 via-[#1a2744]/30 to-[#1a2744]/70" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-16 md:pb-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-2 mb-4"
        >
          <MapPin className="w-3.5 h-3.5 text-[#c8a96e]" />
          <span
            className="text-[#c8a96e] text-[11px] tracking-[0.4em] uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
          >
            Krog District · Atlanta
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
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
          }}
        >
          Steps from the BeltLine.
          <br />
          Miles from Ordinary.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-white/50 text-sm mt-6 tracking-wider text-center max-w-md"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
        >
          Curated studio, one &amp; two bedroom residences in Atlanta's most
          sought-after neighborhood
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-8 flex gap-4"
        >
          <a
            href="https://www.aylaonkrog.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[#c8a96e] text-[#1a2744] text-xs tracking-[0.2em] uppercase hover:bg-[#d4b87e] transition-colors"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
          >
            Schedule a Tour
          </a>
          <a
            href="tel:4048004773"
            className="px-8 py-3 border border-white/30 text-white text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-colors"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
          >
            404.800.4773
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   INTRO — Two-column editorial
   ═══════════════════════════════════════════════════════════ */
function IntroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-2 gap-12 md:gap-20 items-center"
        >
          <div>
            <p
              className="text-[#c8a96e] text-xs tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
            >
              On the BeltLine
            </p>
            <h2
              className="text-[#1a2744] text-3xl md:text-4xl leading-[1.15] mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
              }}
            >
              Art-Inspired Living
            </h2>
            <p
              className="text-stone-600 text-base leading-relaxed mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              Live where culture and entertainment thrive, where the BeltLine is
              your backyard in one of Atlanta's most coveted neighborhoods. Ayla
              on Krog offers art-inspired apartment living with thoughtful
              amenities and home features curated with you in mind.
            </p>
            <p
              className="text-stone-600 text-base leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              From morning walks on the BeltLine to evenings spent at nearby bars
              and eateries, Ayla puts you steps away from it all. It's more than
              just a home — it's a lifestyle rooted in style, convenience, and
              community.
            </p>
          </div>

          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={images.interior}
              alt="Ayla interior"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   AMENITIES — Grid with icons
   ═══════════════════════════════════════════════════════════ */
function AmenitiesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#1a2744] px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-[#c8a96e]/60 text-xs tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
          >
            At Your Service
          </p>
          <h2
            className="text-white text-3xl md:text-4xl leading-[1.15] mb-16"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
            }}
          >
            Amenities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {amenities.map((amenity, idx) => (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="text-[#c8a96e] mb-4">{amenity.icon}</div>
                <h3
                  className="text-white text-lg mb-2"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 400,
                  }}
                >
                  {amenity.title}
                </h3>
                <p
                  className="text-white/40 text-sm leading-relaxed"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  {amenity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image row */}
        <div className="grid md:grid-cols-3 gap-4 mt-16">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={images.clubhouse}
              alt="Clubhouse"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={images.poolDeck}
              alt="Pool deck"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={images.lounge}
              alt="Lounge"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   RESIDENCES — Floor plans
   ═══════════════════════════════════════════════════════════ */
function ResidencesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-[#c8a96e] text-xs tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
          >
            Residences
          </p>
          <h2
            className="text-[#1a2744] text-3xl md:text-4xl leading-[1.15] mb-16"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
            }}
          >
            Find Your Home
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {floorPlans.map((plan, idx) => (
              <motion.div
                key={plan.type}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border border-stone-200 p-8 hover:border-[#c8a96e]/50 transition-colors duration-500"
              >
                <h3
                  className="text-[#1a2744] text-2xl mb-2"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 400,
                  }}
                >
                  {plan.type}
                </h3>
                <p
                  className="text-stone-400 text-xs tracking-[0.15em] uppercase mb-4"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                  }}
                >
                  {plan.sqft} sq ft
                </p>
                <p
                  className="text-stone-600 text-sm leading-relaxed mb-6"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  {plan.description}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="text-[#1a2744] text-lg"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 500,
                    }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-stone-400 text-xs tracking-wider uppercase">
                    /month
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.aylaonkrog.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#1a2744] text-sm tracking-[0.15em] uppercase hover:gap-3 transition-all duration-300 border-b border-[#1a2744]/30 pb-1"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
            >
              View All Floor Plans
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   NEIGHBORHOOD
   ═══════════════════════════════════════════════════════════ */
function NeighborhoodSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const highlights = [
    { name: "Krog Street Market", distance: "Next door", type: "Dining & Shopping" },
    { name: "Atlanta BeltLine", distance: "Steps away", type: "Trail & Parks" },
    { name: "Inman Park", distance: "2 min walk", type: "Historic Neighborhood" },
    { name: "Ponce City Market", distance: "10 min walk", type: "Food Hall & Rooftop" },
    { name: "Old Fourth Ward Park", distance: "5 min walk", type: "Green Space" },
    { name: "Little Five Points", distance: "8 min walk", type: "Arts & Culture" },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 bg-stone-100 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-2 gap-12 md:gap-20"
        >
          <div>
            <p
              className="text-[#c8a96e] text-xs tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
            >
              The Neighborhood
            </p>
            <h2
              className="text-[#1a2744] text-3xl md:text-4xl leading-[1.15] mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
              }}
            >
              Krog District
            </h2>
            <p
              className="text-stone-600 text-base leading-relaxed mb-10"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              Nestled in the heart of Atlanta's vibrant Krog District and
              directly on the BeltLine, you're surrounded by some of the city's
              best dining, shopping, and culture. From Krog Street Market next
              door to Ponce City Market a short walk away — everything Atlanta
              has to offer is at your doorstep.
            </p>

            <div className="space-y-4">
              {highlights.map((h) => (
                <div
                  key={h.name}
                  className="flex items-center justify-between py-3 border-b border-stone-200"
                >
                  <div>
                    <span
                      className="text-[#1a2744] text-sm"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      {h.name}
                    </span>
                    <span className="text-stone-400 text-xs ml-3">
                      {h.type}
                    </span>
                  </div>
                  <span
                    className="text-[#c8a96e] text-xs tracking-wider"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {h.distance}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={images.night}
              alt="Ayla on Krog at night"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   CONTACT CTA
   ═══════════════════════════════════════════════════════════ */
function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#1a2744] px-6 md:px-10">
      <div className="max-w-[800px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-[#c8a96e]/60 text-xs tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
          >
            Begin Your Story
          </p>
          <h2
            className="text-white text-3xl md:text-4xl leading-[1.15] mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
            }}
          >
            Make Ayla Home
          </h2>
          <p
            className="text-white/40 text-base leading-relaxed mb-10 max-w-lg mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            Schedule a self-guided tour and discover why Ayla on Krog is
            Atlanta's most coveted address on the BeltLine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.aylaonkrog.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#c8a96e] text-[#1a2744] text-xs tracking-[0.2em] uppercase hover:bg-[#d4b87e] transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
            >
              Schedule a Tour
            </a>
            <a
              href="tel:4048004773"
              className="px-10 py-4 border border-white/30 text-white text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
            >
              Call 404.800.4773
            </a>
          </div>

          <p
            className="text-white/20 text-xs mt-8 tracking-wider"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
          >
            44 Krog Street NE · Atlanta, GA 30307
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════ */
function AylaFooter() {
  return (
    <footer className="py-8 px-6 md:px-10 bg-[#111b2e]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span
          className="text-white/30 text-[11px] tracking-[0.3em] uppercase"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
        >
          Ayla on Krog · A Nayara Property
        </span>
        <div className="flex items-center gap-6">
          <a
            href="https://www.aylaonkrog.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 text-[11px] tracking-[0.15em] uppercase hover:text-white/60 transition-colors"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
          >
            Official Site
          </a>
          <Link
            href="/"
            className="text-white/30 text-[11px] tracking-[0.15em] uppercase hover:text-white/60 transition-colors"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
          >
            Nayara Resorts
          </Link>
        </div>
      </div>
    </footer>
  );
}
