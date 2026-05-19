/**
 * CHALLENGE EASTER ISLAND'S OUTDOORS WITH NAYARA HANGAROA
 * Verbatim content from blog.nayararesorts.com
 * Format: New standardized template (v2)
 * Images every other section, centered below body text
 * FAQ is SEPARATE (not included here)
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

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

const IMAGES = {
  hero: "/manus-storage/easter-island-moai-hero_f429a316.webp",
  trekking: "/manus-storage/easter-island-trekking-landscape_703a5da0.webp",
  ranoKau: "/manus-storage/easter-island-rano-kau-crater_022e6b87.webp",
  birdman: "/manus-storage/easter-island-birdman-coast_f44f4b04.webp",
  horseback: "/manus-storage/easter-island-horseback-riding_f5abc82c.webp",
  biking: "/manus-storage/easter-island-mountain-biking_f4fa378e.webp",
  diving: "/manus-storage/easter-island-scuba-diving_84955598.webp",
  horsebackGroup: "/manus-storage/easter-island-horseback-group_20ba8061.webp",
};

const RELATED_ARTICLES = [
  {
    slug: "/blog/atacama-wildlife",
    title: "Wildlife Conservation in Chile's Atacama Desert and Easter Island",
    pillar: "Sustainability",
    image: "/manus-storage/atacama-wildlife-cover_ebe00ac5.jpg",
  },
  {
    slug: "/blog/stargazing-atacama",
    title: "Best Stargazing Resort in the Atacama Desert: Why Nayara Alto Atacama Leads",
    pillar: "Experiences",
    image: "https://blog.nayararesorts.com/hubfs/iotw2334a_crop.jpg",
  },
  {
    slug: "/blog/arenal-bocas-wildlife",
    title: "Wildlife Conservation in Arenal and Bocas del Toro",
    pillar: "Sustainability",
    image: "https://blog.nayararesorts.com/hubfs/Swimming-Sloth-1024x683.jpg",
  },
];

export default function EasterIslandOutdoorsBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Challenge Easter Island's Outdoors with Nayara Hangaroa",
    description: "From volcano treks and cave explorations to scuba diving the Sunken Moai and horseback riding to Terevaka's summit — every outdoor adventure available on the world's most remote inhabited island.",
    author: { "@type": "Organization", name: "Nayara Resorts" },
    publisher: { "@type": "Organization", name: "Nayara Resorts" },
    datePublished: "2025-05-12",
    image: IMAGES.hero,
    articleSection: "Experiences",
    keywords: "Easter Island trekking, Rapa Nui outdoors, Nayara Hangaroa, scuba diving Easter Island, horseback riding Terevaka, mountain biking Rapa Nui",
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.cream, color: PALETTE.text, fontFamily: "var(--font-body)" }}>
      <Helmet>
        <title>Challenge Easter Island's Outdoors with Nayara Hangaroa | Nayara Resorts</title>
        <meta name="description" content="From volcano treks and cave explorations to scuba diving the Sunken Moai and horseback riding to Terevaka's summit — every outdoor adventure on the world's most remote inhabited island." />
        <meta property="og:title" content="Challenge Easter Island's Outdoors with Nayara Hangaroa" />
        <meta property="og:description" content="Trekking, diving, surfing, mountain biking, and horseback riding on the world's most remote island." />
        <meta property="og:image" content={IMAGES.hero} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      {/* ── HERO (21:9) ── */}
      <section className="relative w-full overflow-hidden" style={{ aspectRatio: "21/9", minHeight: "400px", maxHeight: "70vh" }}>
        <img src={IMAGES.hero} alt="Row of moai statues on Easter Island at sunrise with dramatic sky" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
      </section>

      {/* ── TITLE BLOCK ── */}
      <motion.section style={{ backgroundColor: PALETTE.cream }} variants={contentEntrance} initial="hidden" animate="visible" custom={0.1}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-8">
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span className="text-[11px] font-medium tracking-[0.35em]" style={{ color: PALETTE.espresso }}>EXPERIENCES</span>
            <span className="text-[10px] tracking-[0.2em] border px-2 py-0.5 rounded-full" style={{ color: `${PALETTE.muted}99`, borderColor: PALETTE.stone }}>Rapa Nui</span>
            <span className="text-[10px] tracking-[0.2em] border px-2 py-0.5 rounded-full" style={{ color: `${PALETTE.muted}99`, borderColor: PALETTE.stone }}>Adventure</span>
          </div>
          <h1 className="text-3xl md:text-[40px] lg:text-[46px] leading-[1.15] mb-5" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Challenge Easter Island's Outdoors with Nayara Hangaroa
          </h1>
          <div className="flex items-center gap-3 text-[13px] tracking-[0.05em] mb-6 flex-wrap" style={{ color: PALETTE.muted }}>
            <span>Nayara Resorts</span>
            <span style={{ color: PALETTE.stone }}>&middot;</span>
            <span>May 12, 2025</span>
            <span style={{ color: PALETTE.stone }}>&middot;</span>
            <span>10 min read</span>
          </div>
        </div>
      </motion.section>

      {/* ── KEY FINDINGS ── */}
      <motion.section style={{ backgroundColor: PALETTE.stone }} variants={contentEntrance} initial="hidden" animate="visible" custom={0.25}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 py-12">
          <div className="border rounded-lg p-6 md:p-8" style={{ borderColor: `${PALETTE.muted}33`, backgroundColor: PALETTE.cream }}>
            <p className="text-lg mb-5" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>Key Findings</p>
            <ul className="space-y-4">
              {[
                "Easter Island (Rapa Nui) is the most remote inhabited island on Earth, offering a rare combination of land and ocean adventures unmatched anywhere else.",
                "Six distinct trekking routes range from medium to high difficulty, covering volcanic summits, ancient caves, and archaeological sites dating back centuries.",
                "Water activities include scuba diving to see the legendary Sunken Moai, surfing world-class waves, and exploring crystal-clear waters with superb visibility.",
                "The island's rugged terrain supports mountain biking, 4x4 exploration, and horseback riding to Terevaka — the island's highest peak at 507 meters.",
              ].map((finding, i) => (
                <li key={i} className="text-[15px] leading-[1.9] pl-5 border-l-2" style={{ color: PALETTE.muted, borderColor: PALETTE.espresso }}>{finding}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 1: Introduction (cream, NO image) ── */}
      <motion.section style={{ backgroundColor: PALETTE.cream }} variants={contentEntrance} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={0.1}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            The World's Most Remote Adventure Playground
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>Isla de Pascua, more commonly known as Easter Island or Rapa Nui, is the most remote inhabited island on Earth. Here, surrounded by the vast Pacific Ocean and thousands of miles from the nearest civilization, you'll discover a rare combination of land and ocean adventures that are unmatched anywhere else.</p>
            <p>Let's explore the array of experiences awaiting you on this extraordinary island. If any capture your imagination, reach out via our chat box — we'd love to help you plan the adventure of a lifetime!</p>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 2: Trekking Poike (stone, WITH image) ── */}
      <motion.section style={{ backgroundColor: PALETTE.stone }} variants={contentEntrance} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={0.1}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Trekking
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>The rugged landscape is owed to the trio of volcanoes that comprise Isla de Pascua, and this striking terrain provides an incredible diversity of trekking routes and destinations, making it one of the quintessential activities for visitors on the island.</p>
            <p>Below, we explore some of these more intensive hiking experiences, which focus on more challenging routes.</p>
            <h3 className="text-xl mt-8 mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>Trekking Poike | Challenge One of the Main Volcanoes of the Island</h3>
            <p>Embark on a thrilling 4-hour trek up Poike, one of the three main volcanoes that formed Easter Island. As you hike, you'll encounter unique archaeological sites like Vai a Heva, and explore the famous Virgins' Cave (Ana o Keke), both offering a glimpse into the island's ancient rituals and history.</p>
            <p>With a medium to high difficulty, this hike offers not only a physical challenge but also a deep connection to this mysterious island.</p>
            <h3 className="text-xl mt-8 mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>Trekking Terevaka | Reach the Summit of Rapa Nui</h3>
            <p>Challenge yourself with a 3-hour trek to the summit of Mount Terevaka, the highest point on Easter Island. The terrain is steep and rugged, but the reward is a panoramic view of the island like no other.</p>
            <p>With a medium to high difficulty level, this trek offers both a physical challenge and an unparalleled view of Rapa Nui's breathtaking landscape.</p>
          </div>
          {/* Image centered below */}
          <div className="mt-8 flex justify-center">
            <img src={IMAGES.trekking} alt="Panoramic view of Easter Island's green volcanic landscape with moai row and ocean" className="w-full max-w-2xl h-auto rounded-lg object-contain" loading="lazy" />
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 3: Caves & Rano Kau (cream, NO image) ── */}
      <motion.section style={{ backgroundColor: PALETTE.cream }} variants={contentEntrance} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={0.1}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Caves & Crater Treks
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <h3 className="text-xl mt-4 mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>Caves of Rapa Nui | Explore the Hidden Depths of Easter Island</h3>
            <p>Embark on a 3-hour journey through the mysterious caves of Rapa Nui, starting with the dramatic Ana Kakenga. Continue your adventure to Ana Te Pora, and conclude at the renowned Banana Cave (Ana Te Pahu). With medium difficulty, this tour unveils the hidden landscapes of Easter Island, offering a fascinating exploration of its natural wonders and ancient history.</p>
            <h3 className="text-xl mt-8 mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>Trekking to Mirador de Rano Kau | Hike to Easter Island's Iconic Crater</h3>
            <p>Begin your adventure with a bus ride to the trailhead, followed by a scenic trek to the Rano Kau viewpoint, the largest and one of the most striking craters on Easter Island.</p>
            <p>As you journey through eucalyptus forests, you'll absorb their unique beauty and serene atmosphere. The path continues along the crater's rim, offering panoramic views of the motus (islets), the site of a significant ancestral competition in Rapa Nui culture.</p>
            <p>With a medium difficulty level, this 3-hour hike combines natural beauty with deep cultural significance.</p>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 4: Birdman Hike & Full Day (stone, WITH image) ── */}
      <motion.section style={{ backgroundColor: PALETTE.stone }} variants={contentEntrance} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={0.1}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Epic Day Hikes
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <h3 className="text-xl mt-4 mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>The Birdman Hike | Uncover Easter Island's Ancestral Legends</h3>
            <p>Begin your 3-hour hike at Vinapu, an archaeological site with a platform linked to an ancient theory about Rapa Nui's early settlement. Continue your journey along a trail that ascends toward Kari Kari, one of the island's most breathtaking sectors, offering stunning panoramic views of the motus (small islets around Easter Island) and the Rano Kau crater.</p>
            <p>The adventure concludes at the Rano Kau viewpoint, where a bus will take you back to the hotel. With medium difficulty, this hike connects you to both the natural beauty and the ancient legends of Easter Island.</p>
            <h3 className="text-xl mt-8 mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>Full Day Trekking Hanga o Teo | A Full Exploration of Easter Island</h3>
            <p>Embark on a captivating 6-hour trek across Easter Island's North Coast, ideal for those seeking off-the-beaten-path adventures. Starting at Ahu Akivi, this hike takes you to rarely visited archaeological sites, giving you a glimpse into the island's rich historical charm and mystique that few get to experience.</p>
            <p>Accessible only by foot or horseback, this journey offers an intimate exploration of Rapa Nui's lesser-known wonders and culminates at the stunning Anakena Beach, where you can relax and reflect on your extraordinary day.</p>
            <p>With a high difficulty level, this full-day trek is perfect for those looking to challenge themselves while discovering Easter Island's hidden treasures.</p>
          </div>
          {/* Image centered below */}
          <div className="mt-8 flex justify-center">
            <img src={IMAGES.birdman} alt="Dramatic coastal cliffs of Easter Island with motus visible in the Pacific Ocean" className="w-full max-w-2xl h-auto rounded-lg object-contain" loading="lazy" />
          </div>
        </div>
      </motion.section>

      {/* ── ESPRESSO SECTION: Challenge the Island ── */}
      <motion.section style={{ backgroundColor: PALETTE.espresso }} variants={contentEntrance} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={0.1}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-16 pb-16 text-center">
          <p className="uppercase tracking-[0.4em] text-[11px] mb-6" style={{ color: `${PALETTE.accent}` }}>Challenge the Island</p>
          <h2 className="text-2xl md:text-[34px] leading-snug mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#FFFFFF" }}>
            Beyond Trekking: 4x4, Biking, Diving & Surfing
          </h2>
          <p className="text-[15px] leading-[1.9] max-w-xl mx-auto" style={{ color: "#FFFFFF99" }}>
            The island's adventures extend far beyond its trails. From navigating rugged terrain on four wheels to exploring underwater caves and riding legendary waves, Rapa Nui challenges every kind of adventurer.
          </p>
        </div>
      </motion.section>

      {/* ── SECTION 5: 4x4 & Mountain Biking (cream, NO image) ── */}
      <motion.section style={{ backgroundColor: PALETTE.cream }} variants={contentEntrance} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={0.1}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            4x4 & Mountain Biking
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <h3 className="text-xl mt-4 mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>4x4 Experience | Explore Easter Island at Your Own Pace</h3>
            <p>For those who love independent exploration, the 4x4 Experience offers the perfect opportunity to discover Easter Island on your terms. Swap an excursion for 3 hours of thrilling quad biking (ATV), where you can navigate the island's rugged terrain and discover its secrets at your own pace.</p>
            <p>This activity gives you the freedom to create your own adventure, all while experiencing the raw beauty of the island. <em>Activity is subject to availability and requires a Class B driver's license.</em></p>
            <h3 className="text-xl mt-8 mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>Mountain Bike Ko Te Miro One | Cycle Through the Heart of Easter Island</h3>
            <p>Start your adventure from the hotel on mountain bikes, riding along the island's interior road to the Miro O One area. From there, descend to the south coast on a rugged dirt path. The return journey along the coastal road offers a chance to visit various ancient ruins and platforms, immersing you in the island's rich history.</p>
            <p>Depending on your pace, the tour can extend to the Vinapu area, adding a few extra minutes to your ride. With a medium difficulty level, this 3-hour tour is perfect for those who enjoy both scenic cycling and exploring Easter Island's archaeological treasures.</p>
            <h3 className="text-xl mt-8 mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>Mountain Bike Caverns | Explore Easter Island's Hidden Caves on Two Wheels</h3>
            <p>Embark on a thrilling 3-hour mountain bike adventure through Easter Island's unique caverns, known as Roiho in the local culture. Starting from the hotel, you'll ride along the coast, transitioning to rugged dirt and gravel roads that lead you to areas inaccessible by vehicles.</p>
            <p>Along the way, visit various caves and ancient platforms, immersing yourself in the island's mystical and untouched landscape. With a medium level of difficulty, this experience is perfect for those seeking both adventure and cultural exploration.</p>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 6: Water Adventures (stone, WITH image) ── */}
      <motion.section style={{ backgroundColor: PALETTE.stone }} variants={contentEntrance} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={0.1}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Water Adventures
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <h3 className="text-xl mt-4 mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>Scuba Diving | Discover Easter Island's Underwater Wonders</h3>
            <p>Easter Island's crystal-clear waters offer an unparalleled scuba diving experience, where novices and seasoned divers alike can explore a vibrant underwater world. Beginners can enjoy the calm, warm seas of Rapa Nui, guided by expert instructors through its rich aquatic landscapes.</p>
            <p>For those with a PADI license, there are plenty of advanced opportunities, including diving to see the legendary Sunken Moai, exploring coral-covered caves, or navigating dramatic underwater cliffs. With superb visibility and diverse marine life, this 2-hour dive experience promises unforgettable adventures.</p>
            <h3 className="text-xl mt-8 mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>Surfing | Ride the Waves of Easter Island</h3>
            <p>Rapa Nui is a surfer's paradise, known worldwide for its incredible waves. When the conditions are right, grab your board and experience the thrill of surfing in one of the most remote locations on Earth.</p>
            <p>Whether you're a beginner or looking to hone your skills, you'll be guided by expert instructors who'll ensure you make the most of your time on the water. This 2-hour adventure is perfect for those seeking an exhilarating challenge and the chance to surf on the island's legendary waves.</p>
          </div>
          {/* Image centered below */}
          <div className="mt-8 flex justify-center">
            <img src={IMAGES.diving} alt="Scuba diver exploring crystal-clear waters and coral formations near Easter Island" className="w-full max-w-2xl h-auto rounded-lg object-contain" loading="lazy" />
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 7: Horseback Riding (cream, NO image) ── */}
      <motion.section style={{ backgroundColor: PALETTE.cream }} variants={contentEntrance} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={0.1}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Horseback Riding to Terevaka
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>For an unforgettable experience, embark on a horseback riding adventure that takes you to the summit of Terevaka, the highest point on Easter Island. Following in the footsteps of ancestral horseback riders, you'll ride through the island's diverse landscapes, and be rewarded with a breathtaking 360° panoramic view, offering a truly unique perspective of Rapa Nui's natural beauty.</p>
            <p>This serene yet thrilling excursion is perfect for those seeking to connect with the land while experiencing one of the island's most scenic spots.</p>
          </div>
          {/* Image centered below */}
          <div className="mt-8 flex justify-center">
            <img src={IMAGES.horsebackGroup} alt="Group horseback riding on Easter Island with moai statues in the background" className="w-full max-w-2xl h-auto rounded-lg object-contain" loading="lazy" />
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 8: Closing (stone, NO image) ── */}
      <motion.section style={{ backgroundColor: PALETTE.stone }} variants={contentEntrance} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={0.1}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Which Adventure Caught Your Eye?
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>Are you ready for an experience like no other, on the world's most remote island? These experiences are waiting, but at the same time, we understand that it can be a bit daunting to try to wrap your head around so many possibilities at once.</p>
            <p>If you'd like to talk about how your adventure might come together, reach out to us in the chat box. We love talking about our destinations, and our passion is helping you enjoy an unforgettable experience here!</p>
          </div>
        </div>
      </motion.section>

      {/* ── SOURCES ── */}
      <section style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <p className="text-lg mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>Sources & Further Reading</p>
          <ul className="space-y-3">
            {[
              { label: "Nayara Hangaroa — Experiences", href: "https://www.nayarahangaroa.com/experiences" },
              { label: "Rapa Nui National Park — UNESCO World Heritage Centre", href: "https://whc.unesco.org/en/list/715/" },
              { label: "Easter Island Travel Guide — Lonely Planet", href: "https://www.lonelyplanet.com/chile/easter-island" },
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



      {/* ── EXPLORE MORE (3 related articles) ── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ backgroundColor: PALETTE.stone }}>
        <div className="max-w-5xl mx-auto px-8 md:px-16 pt-16 pb-16">
          <p className="uppercase tracking-[0.3em] text-[11px] mb-4 text-center" style={{ fontWeight: 600, color: PALETTE.accent }}>Continue Reading</p>
          <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Explore More
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RELATED_ARTICLES.map((article) => (
              <Link key={article.slug} href={article.slug}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="group cursor-pointer">
                  <div className="aspect-square overflow-hidden mb-4 rounded-lg">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" loading="lazy" />
                  </div>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontWeight: 600, color: PALETTE.accent }}>{article.pillar}</p>
                  <h3 className="text-lg" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>{article.title}</h3>
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
