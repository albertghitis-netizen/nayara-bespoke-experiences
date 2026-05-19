/**
 * THE FUTURE OF SOLO TRAVEL IS FEMALE
 * Combined from two articles: "Solo Female Travel in Costa Rica, Chile, and Panama at Nayara Resorts" (May 2025)
 * and "Luxury for the Solo Traveler" (Jul 2024). No em dashes.
 */

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import { EnhancedArticleSchema } from "@/components/SEOSchemaEnhanced";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const PALETTE = {
  espresso: "#3B2B26",
  warm: "#5A4A3A",
  cream: "#F7F5F0",
  stone: "#E8E2D8",
  accent: "#8B6F5C",
  text: "#2C2016",
  muted: "#5A4A3A",
  deep: "#3a2a1a",
};

const RELATED = [
  {
    title: "Family Travel: Bucket List Destinations",
    url: "/blog/family-travel",
    image: `${CDN}/prop-gardens_5931d8af.jpg`,
    tag: "Travel",
  },
  {
    title: "Nature-Based Wellness by Colors",
    url: "/blog/wellness-by-colors",
    image: `${CDN}/prop-springs_16fe1ae6.jpg`,
    tag: "Wellness",
  },
  {
    title: "Rooted in Community: Human Hospitality",
    url: "/blog/rooted-in-community",
    image: `${CDN}/pura-vida-hero_567b6d5c.jpeg`,
    tag: "Community",
  },
];

export default function SoloTravelFemaleBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.cream }}>
      <EnhancedArticleSchema
        image={`${CDN}/solo-travel-hero_46bd73b9.jpeg`}
        headline="The Future of Solo Travel is Female"
        description="More women than ever are choosing to travel solo. What was once considered unconventional has become a powerful expression of independence, curiosity, and self-discovery."
        author={{ name: "Nayara Resorts", expertise: ["Luxury Hospitality", "Solo Travel", "Wellness Tourism"] }}
        datePublished="2025-05-19"
        url="https://nayararesorts.manus.space/blog/solo-travel-female"
      />

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={`${CDN}/solo-travel-hero_46bd73b9.jpeg`}
          alt="Solo female traveler silhouetted against a golden sunset"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(59,43,38,0.15) 0%, rgba(59,43,38,0.3) 50%, rgba(59,43,38,0.75) 100%)",
          }}
        />

        <button
          onClick={() => window.history.back()}
          className="absolute top-8 left-8 z-20 flex items-center gap-2 transition-colors duration-300"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "12px",
            letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.75)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          BACK
        </button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 h-full flex flex-col justify-end items-start px-8 md:px-16 lg:px-24 pb-16 md:pb-24 max-w-5xl"
        >
          <p
            className="mb-4 uppercase tracking-[0.3em] text-[11px]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: "rgba(255,255,255,0.7)" }}
          >
            Solo Travel &middot; Nayara Resorts
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 text-white"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            The Future of Solo Travel is Female
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed max-w-2xl"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400, color: "rgba(255,255,255,0.85)" }}
          >
            Luxury Tailored for Personal Discovery
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              In 2025, more women than ever are choosing to travel solo. What was once considered unconventional has become a powerful expression of independence, curiosity, and self-discovery. Traveling alone offers the freedom to explore new cultures, connect with others, and move through the world entirely on their own terms.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Solo travel has become one of the fastest-growing trends in the industry, with internet searches soaring year over year and a market experts project to continue at 10% annual compounding growth. Without others to plan around, individuals explore new destinations at their own pace, indulge in personal interests, and find opportunities to discover themselves along the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHY WOMEN TRAVEL SOLO */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.stone }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              Why More Women Are Traveling Solo in 2026
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              The travel landscape is always evolving, and one of the fastest-growing trends is the rise of solo female travelers. Across all income levels, more women are choosing to explore the world on their own, and with greater frequency than ever before. For women, solo travel can mean a variety of things. It may be a much-needed pause from routine, a way to reconnect with themselves, or simply the chance to explore a destination or activity that does not align with a partner's or friend's interests. Some are marking a life transition; others are proving just how capable they are. Whatever the reason, the freedom to travel on one's own terms is a powerful draw.
            </p>
          </motion.div>
        </div>
      </section>

      {/* A GROWING GLOBAL MOVEMENT */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              Solo Female Travel Is a Growing Global Movement
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              According to recent reports, 84% of solo travelers are women. Among them is a growing segment of middle- and upper-income women who are choosing to invest in meaningful experiences. Today, many women travel the world for work, so why not for themselves, too? This trend is especially strong among Millennial and Gen Z women, with a 41% rise in solo travel among this group in the past five years. From exploring bucket list destinations like the Atacama Desert to customized wellness retreats in Bocas del Toro in the Caribbean islands of Panama, women are increasingly prioritizing freedom, self-care, and intentional connection with the world around them.
            </p>
          </motion.div>
          {/* Image: paddleboard */}
          <div className="mt-12">
            <img
              src={`${CDN}/solo-travel-paddleboard_5356f6e3.jpeg`}
              alt="Solo traveler paddleboarding at Nayara Bocas del Toro"
              className="w-full max-w-2xl mx-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* SOLO, BUT NOT ALONE */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.stone }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              Solo Travel at Nayara: Independent But Never Alone
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Solo travel does not mean going it entirely alone. In fact, many solo female travelers find that these voyages make space for deeper, more spontaneous connections with fellow travelers, locals, and even themselves. Shared experiences, conversations over meals, or moments of discovery all help create meaningful bonds that often form naturally along the way. There is a quiet strength in navigating new places independently. Women often find that other women, whether locals or fellow travelers, are quick to offer insight and solidarity. It is a kind of kinship that can transcend language and culture, revealing a shared understanding across borders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DESTINATIONS: ARENAL RAINFOREST */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className="uppercase tracking-[0.3em] text-[11px] mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
            >
              Costa Rica
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              Solo Travel in the Arenal Rainforest at Nayara Costa Rica
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              For thousands of years, human beings have stepped away from civilization to find balance and rejuvenation through connection to the natural world. This is possible at all of the Nayara Resorts destinations, but nowhere else can it seem more powerful than in a personal journey to discover the vibrant rainforests surrounding the Arenal Volcano, one of the most biologically vibrant and diverse locations on earth.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              A solo journey into Arenal provides a distraction-free immersion in nature and the chance to embrace a lifestyle intimately connected to the rhythm of the rainforest. Wake up to the call of the birds and fall asleep as the sun sets. Along the way, consult with Nayara Resorts guides and staff to customize your tours, hikes, and experiences, allowing you to encounter tropical birds, mammals, and other captivating species in their natural habitats. This personalized approach helps you understand the intricacies of their fascinating lives.
            </p>
          </motion.div>
          {/* Image: yoga */}
          <div className="mt-12">
            <img
              src={`${CDN}/solo-travel-yoga_2568bd79.jpeg`}
              alt="Yoga in a treehouse spa overlooking the rainforest"
              className="w-full max-w-2xl mx-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* DESTINATIONS: ATACAMA DESERT */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.stone }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className="uppercase tracking-[0.3em] text-[11px] mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
            >
              Chile
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              Solo Travel in the Atacama Desert at Nayara Alto Atacama
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              As dawn begins to break on the possibility of celestial tourism, including groundbreaking journeys to low-earth orbit, the tourism industry has continued challenging itself to understand what it truly means to get away. Distance always breeds a change of perspective, and with the tales of astronauts returning to Earth forever changed, the possibilities of considering the world beyond our own are tempting and endless.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              At Nayara Resorts, extraplanetary travel is not on our agenda just yet, but solo travelers can still experience an otherworldly adventure in the heart of the Atacama Desert. This remote location, resembling the Martian surface, offers unparalleled stargazing conditions under some of the clearest skies on Earth, home to the world's largest astronomical observatories. Here, you will feel as if you are a million miles away, immersed in a unique and breathtaking environment.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              On solo tours across the rugged, barren, seemingly alien landscape still dotted with vibrant life, or exploring the ruins of the cultures who lived here for centuries, you get as close to otherworldly travel as we have been able to find without journeying into orbit. With a luxurious oasis to welcome you back each day, Nayara Alto Atacama provides a glimpse into the future of interplanetary tourism centuries ahead of schedule.
            </p>
          </motion.div>
        </div>
      </section>

      {/* HEALTH, WELLBEING, AND COMFORT */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              Health, Wellbeing, and Comfort for Solo Female Travelers
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Sometimes, solo travel is less about seeking company and more about reconnecting with yourself. For many women, it is a rare chance to step away from the constant demands of work, caregiving, and routine, allowing them to rest, reflect, and recharge. Wellness-focused retreats offer the space and support to do just that, blending quiet solitude with the gentle structure of movement, mindfulness, and nature. It is time to slow down, breathe deeply, and nourish both body and mind.
            </p>
          </motion.div>
          {/* Image: boardwalk */}
          <div className="mt-12">
            <img
              src={`${CDN}/solo-travel-boardwalk_7e1bd17c.jpeg`}
              alt="Woman walking on a boardwalk through tropical gardens"
              className="w-full max-w-2xl mx-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* NEW AND WORTHWHILE EXPERIENCES */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.stone }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              Unique Experiences for Solo Travelers at Nayara
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              New experiences often lead to new versions of ourselves. For solo female travelers, stepping outside of their comfort zone can be a powerful act, one that builds confidence and sparks a deeper sense of self. Navigating a new destination alone, trying a challenging hike, or simply choosing to prioritize yourself: these moments remind you of your capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SAFETY AND CULTURE */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              Safety and Cultural Immersion for Solo Female Travelers
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Safety and peace of mind are key to any solo journey, and all Nayara Resorts are designed with that in mind. Each property offers a secure, welcoming environment with 24-hour staff presence, gated access, and attentive concierge service.
            </p>
          </motion.div>
          {/* Image: atacama sunset */}
          <div className="mt-12">
            <img
              src={`${CDN}/solo-travel-atacama-sunset_855433d3.jpeg`}
              alt="Atacama Desert sunset landscape"
              className="w-full max-w-2xl mx-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* ALL ARE WELCOME CTA */}
      <section className="py-16 md:py-20 px-6 md:px-12" style={{ backgroundColor: PALETTE.deep }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "white" }}
            >
              All Solo Travelers Are Welcome at Nayara
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-8"
              style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.85)" }}
            >
              The future of travel is more individual, more conscious, and more than ever, female. At Nayara Resorts, we are proud to support this shift by offering welcoming destinations centered on wellness, adventure, and culture, where women can experience luxury, adventure, and rest on their own terms.
            </p>
            <p
              className="text-[20px] md:text-[22px] leading-[1.7] italic"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "white" }}
            >
              Whether it is a desire for self-discovery, a need for solitude, or simply a thirst for adventure, solo travel offers a transformative experience unlike any other.
            </p>
          </motion.div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.stone }}>
        <div className="max-w-5xl mx-auto">
          <p
            className="uppercase tracking-[0.3em] text-[11px] mb-4 text-center"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
          >
            Continue Reading
          </p>
          <h2
            className="text-3xl md:text-4xl mb-12 text-center"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
          >
            More from the Journal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RELATED.map((article) => (
              <Link key={article.url} href={article.url}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden mb-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </div>
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase mb-2"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
                  >
                    {article.tag}
                  </p>
                  <h3
                    className="text-lg"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
                  >
                    {article.title}
                  </h3>
                </motion.div>
              </Link>
            ))}
          </div>
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
              href="https://www.instagram.com/nayararesorts/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Follow on Instagram"
            >
              <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill={PALETTE.espresso} style={{ opacity: 0.6 }} viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a
              href="https://www.tiktok.com/@nayararesorts"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Follow on TikTok"
            >
              <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill={PALETTE.espresso} style={{ opacity: 0.6 }} viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.88 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.82.11V9.4a6.33 6.33 0 00-.82-.05A6.34 6.34 0 003.15 15.7a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.42a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.15z"/></svg>
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
              <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill="none" stroke={PALETTE.espresso} style={{ opacity: 0.6 }} strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
            </button>
          </div>
        </div>
      </section>


      {/* ── EXPLORE MORE ── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-5xl mx-auto px-8 md:px-16 pt-16 pb-16">
          <p className="uppercase tracking-[0.3em] text-[11px] mb-4 text-center" style={{ fontWeight: 600, color: PALETTE.accent }}>
            Continue Reading
          </p>
          <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Explore More
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link key="/blog/womens-empowerment" href="/blog/womens-empowerment">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden mb-4 rounded-lg">
                    <img
                      src="https://blog.nayararesorts.com/hubfs/PHOTO-2026-03-02-19-55-27.jpg"
                      alt="Women's Empowerment Through Housing at Nayara"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontWeight: 600, color: PALETTE.accent }}>
                    Community
                  </p>
                  <h3 className="text-lg" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
                    Women's Empowerment Through Housing at Nayara
                  </h3>
                </motion.div>
              </Link>
              <Link key="/blog/pura-vida" href="/blog/pura-vida">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden mb-4 rounded-lg">
                    <img
                      src="/manus-storage/pura-vida-hero_9a138a66.jpeg"
                      alt="Pura Vida: Why Costa Rica Feels Different"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontWeight: 600, color: PALETTE.accent }}>
                    Wellness
                  </p>
                  <h3 className="text-lg" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
                    Pura Vida: Why Costa Rica Feels Different
                  </h3>
                </motion.div>
              </Link>
              <Link key="/blog/experiential-travel-nayara-2026" href="/blog/experiential-travel-nayara-2026">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden mb-4 rounded-lg">
                    <img
                      src="/manus-storage/experiential-travel-cover_1cb55e5b.jpg"
                      alt="Experiential Travel at Nayara"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontWeight: 600, color: PALETTE.accent }}>
                    Experiences
                  </p>
                  <h3 className="text-lg" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
                    Experiential Travel at Nayara
                  </h3>
                </motion.div>
              </Link>
          </div>
        </div>
      </motion.section>


      <Footer textColor="#FFFFFF" />
    </div>
  );
}
