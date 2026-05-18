/**
 * PRIVATE VILLAS AND HOT-SPRINGS PLUNGE POOLS: THE HISTORY & SCIENCE
 * Author: Albert Ghitis | Dec 6, 2025
 * Verbatim content from the original blog. Sources included. FAQs extracted.
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
const HERO_IMAGE = "/manus-storage/hotsprings-hero-tented-plunge_8e27e79e.jpg";

/* Related articles for Explore More */
const RELATED_ARTICLES = [
  {
    slug: "/blog/wellness-by-colors",
    title: "Nature-Based Wellness by Colors: Brown, Black, Green, Blue",
    pillar: "Wellness",
    image: "https://blog.nayararesorts.com/hubfs/NAYARA%20BOCAS%20DEL%20TORO-42.jpg",
  },
  {
    slug: "/blog/green-globe-certification",
    title: "Green Globe Certification: What It Means for Nayara Resorts",
    pillar: "Sustainability",
    image: "/manus-storage/greenglobe-card-pool-arenal_9ba2f8e8.jpg",
  },
  {
    slug: "/blog/pura-vida",
    title: "Pura Vida: The Science of Why Costa Rica is the Healthiest Country on Earth",
    pillar: "Wellness",
    image: "/manus-storage/pura-vida-hero_9a138a66.jpeg",
  },
];

export default function HotSpringsBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Private Villas and Hot-Springs Plunge Pools: The History & Science",
    description: "From Roman thermae to Nayara Springs, the science and history behind private hot springs plunge pools and their profound wellness benefits.",
    author: { "@type": "Person", name: "Albert Ghitis" },
    publisher: { "@type": "Organization", name: "Nayara Resorts" },
    datePublished: "2025-12-06",
    dateModified: "2025-12-06",
    image: HERO_IMAGE,
    articleSection: "Wellness",
    keywords: "hot springs, plunge pools, private villas, balneotherapy, Nayara Springs, Nayara Tented Camp, Arenal Volcano, wellness",
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.cream, color: PALETTE.text, fontFamily: "var(--font-body)" }}>
      {/* ── BRAND NAVIGATION ── */}
      <BrandNavigation pageType="brand" hideCenterLabel />

      {/* SEO HEAD */}
      <Helmet>
        <title>Private Villas and Hot-Springs Plunge Pools: The History & Science | Nayara Resorts</title>
        <meta name="description" content="From Roman thermae to Nayara Springs, the science and history behind private hot springs plunge pools and their profound wellness benefits." />
        <meta property="og:title" content="Private Villas and Hot-Springs Plunge Pools: The History & Science" />
        <meta property="og:description" content="From Roman thermae to Nayara Springs, the science and history behind private hot springs plunge pools." />
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
          alt="Nayara Tented Camp villa with private plunge pool surrounded by rainforest at sunset"
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
              WELLNESS
            </span>
            <span className="text-[10px] tracking-[0.2em] border px-2 py-0.5 rounded-full" style={{ color: `${PALETTE.muted}99`, borderColor: PALETTE.stone }}>
              Arenal
            </span>
            <span className="text-[10px] tracking-[0.2em] border px-2 py-0.5 rounded-full" style={{ color: `${PALETTE.muted}99`, borderColor: PALETTE.stone }}>
              Hot Springs
            </span>
          </div>

          <h1
            className="text-3xl md:text-[40px] lg:text-[46px] leading-[1.15] mb-5"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
          >
            Private Villas and Hot-Springs Plunge Pools: The History & Science
          </h1>
        </div>
      </motion.section>

      {/* ── AUTHOR / READING TIME BAND ── */}
      <BlogAuthorReadTime
        author="Albert Ghitis"
        authorRole="Editorial"
        date="December 6, 2025"
        wordCount={2800}
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
                "Privacy has become the defining luxury in modern travel. High-end travelers now value seclusion and control over scale and grandeur.",
                "The history of bathing mirrors the human journey from communal life to individualized comfort, from Roman thermae to private plunge pools.",
                "Arenal's geothermal water is heated by magmatic systems beneath an active stratovolcano, producing naturally warm water with moderate mineralization.",
                "Privacy at Nayara Springs and Tented Camp is architecturally engineered through controlled sightlines, dense vegetation, and elevation changes.",
                "Warm water, green environments, and private controllable spaces together create the conditions for deep psychological restoration.",
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
              For most of modern hotel history, luxury was measured in scale. The largest lobby, the grandest ballroom, the biggest pool. That logic has shifted. High-end travelers now value space, seclusion, and control: their own entrance, their own deck, and water they do not share with strangers.
            </p>
            <p>
              A Forbes article framed it bluntly: privacy is "the new luxury" of travel. A similar study by McKinsey confirms that high-net-worth guests are more likely to travel to disconnect, enjoy privacy and exclusivity, while also preferring nature-rich, less crowded destinations.
            </p>
            <p>
              Enter private villas with their own plunge pools set in the Costa Rican Rainforest.
            </p>
            <p>
              Not only do they remove the social calculation that comes with a shared pool: where to sit, who is watching, how noisy it is, whether you feel on display in a swimsuit, but privacy becomes a spatial and psychological condition, not just an architectural detail.
            </p>
            <p>
              Now, imagine stepping into your own natural hot springs plunge pool fed by the same Arenal Volcano that frames your view. This is not simply "a nicer pool," it is a different category of stay.
            </p>
            <p>
              This isn't fiction. It's what defines nature-based wellness at Nayara Springs and Nayara Tented Camp.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 2: HOW SETTLED LIFE INVENTED PRIVACY (stone) ── */}
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
            How Settled Life Invented Privacy
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>
              Private hot spring plunge pools sit at the crossroads of geology, history, and modern wellness science, combining volcanic heat, environmental seclusion, and behavioral privacy, and the history is just as fascinating as the science.
            </p>
            <p>
              Long before homes and fences, early hunter-gatherers lived as mobile bands beneath open skies. Privacy then came from distance instead of doors. As groups grew, families camped farther apart, creating personal space without walls.
            </p>
            <p>
              With farming, everything changed. Permanent villages, storage, and land ownership pushed people closer together. Bricks, thatch, and early fences started to mark thresholds between public and private life. Courtyards and enclosed rooms appeared, and shared rituals such as communal bathing began to carry new social meaning.
            </p>
            <p>
              Jared Diamond's work on the shift from nomadic bands to sedentary villages helps explain why private plunge pools feel so instinctively restorative today. In <em>Guns, Germs, and Steel</em>, he describes how early farming communities, no longer mobile, were forced into closer and more permanent proximity. Storage, fields, and domesticated animals tied families to fixed locations, and with immobility came crowding. What once had been natural privacy created by distance now required walls, thresholds, and architectural boundaries.
            </p>
            <p>
              When mobility disappears, societies invent norms and built spaces to regulate social contact. Privacy emerges as a response to density, not an indulgence. The enclosed bath, the personal room, and eventually the private retreat all stem from the same need: a protected zone where an individual can withdraw from the group.
            </p>
            <p>
              When guests enter a private plunge pool in a rainforest setting, they experience a reversal of the pattern Diamond describes. Landscape and water no longer force communal gathering; instead, they restore the autonomy early humans once had.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 3: FROM ROMAN BATHS TO RAINFOREST SPRINGS (cream) ── */}
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
            From Roman Baths to Rainforest Springs
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>
              For most of recorded history, water was a shared experience. Roman thermae, Ottoman hammams, and Mesoamerican temazcales treated bathing as civic or ritual acts. Bodies gathered, steam circulated, conversations flowed. Privacy was neither expected nor structurally possible; community was built into the architecture.
            </p>
            <p>
              In Roman Britain, the city now called Bath (yes, it should sound familiar) grew around a natural hot spring. The Romans built a major bathing complex, Aquae Sulis, there in the first century, combining temple, pools, and social spaces around it. It remains one of the clearest examples of how architecture and geothermal water fused into a civic and religious center.
            </p>
            <p>
              The rise of private bathing unfolded slowly. Early modern Europe introduced enclosed "bathing cabinets" for nobility, early indicators that bathing could be personal rather than public. By the nineteenth century, wealthy spa travelers increasingly requested rooms with individual tubs, separating the curative role of water from its social one. By the nineteenth century, "taking the waters" at a spa was both a health prescription and a status symbol.
            </p>
            <p>
              Contemporary hospitality inherits these dual lineages. Large resorts recreate the grandeur of ancient complexes with open pools and shared spaces. Villa-based and nature-based properties follow the quieter lineage, designing water around solitude. The private plunge pool is the culmination of that second tradition: a self-contained environment where warmth, silence, and nature create a personal sanctuary.
            </p>
            <p>
              Costa Rica represents the next evolution in this story. Here, geothermal water emerges not in classical cities or European spa towns but in dense rainforest beneath an active volcano. The setting reframes the experience entirely. A private plunge pool fed by volcanic hot springs becomes not simply an amenity but a direct encounter with geology, heat, and landscape. It takes the ancient communal impulse to seek healing in warm mineral waters and reinterprets it as an individual immersive experience.
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
              "From roaming tribes to resort villas, the story of bathing mirrors the human journey from communal life to individualized comfort. Yet even in private plunge pools, the spirit of those ancient hot springs survives: we still seek warmth, relaxation, and maybe a little magic from the earth beneath our feet."
            </p>
          </blockquote>
        </div>
      </motion.section>

      {/* ── SECTION 4: JAPAN'S ONSEN & ICELAND'S BLUE LAGOON (stone) ── */}
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
            Japan's Onsen Culture and Iceland's Blue Lagoon
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>
              The global picture of thermal waters today is shaped as much by Asia and the North Atlantic as by Roman Europe. Two of the clearest contemporary examples are Japan's onsen culture and Iceland's Blue Lagoon.
            </p>
            <p>
              In Japan, onsen, or hot springs, are deeply embedded in domestic travel and daily life. Traditional ryokan inns often center their design around communal or private baths fed by geothermal sources, with an emphasis on quiet, ritual, and respect for surroundings. The Japanese Hot Springs Law defines onsen by mineral content and temperature, and many resorts classify their waters by chemical profile, with cultural narratives around which springs are thought to soothe particular ailments.
            </p>
            <p>
              In Iceland, the Blue Lagoon represents a different model. Set in a lava field on the Reykjanes Peninsula, it is filled with geothermal seawater rich in silica, which gives the lagoon its milky blue color. Originally formed from water discharged from a nearby power plant, it evolved into a wellness and tourism destination after visitors reported improved symptoms of skin conditions such as psoriasis.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 5: NOT ALL HOT SPRINGS ARE CREATED EQUAL (cream) ── */}
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
            Not All Hot Springs Are Created Equal
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>
              Arenal's geothermal water differs from many historic bathing regions. Roman springs such as Bath are calcium- and sulfate-rich and fed by deep limestone aquifers; Iceland's Blue Lagoon is silica-dominant because its water originates from geothermal seawater; Japan's onsen vary by region but often carry high sulfur, sodium chloride, or bicarbonate content.
            </p>
            <p>
              Arenal's springs are heated by magmatic systems beneath an active stratovolcano, producing naturally warm water with moderate mineralization, typically containing calcium, magnesium, bicarbonate, and silica. The result is a profile that is gentle on the skin, comfortably warm, and well-suited for prolonged soaking in private pools.
            </p>
            <p>
              Privacy at Nayara Springs and Tented Camp is engineered. Villas and tents are oriented using controlled sightlines so no terrace overlooks another. Dense rainforest vegetation acts as living screening, while elevation changes and setbacks eliminate cross-visibility. Recessed decks, angled railings, and careful pool placement ensure that when a guest steps into warm water, no one else can see.
            </p>
            <p>
              This combination of topography, landscaping, and spatial orientation is considered one of the strongest architectural mechanisms for behavioral privacy.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 6: THE WATER REMEMBERS (stone) ── */}
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
            The Water Remembers
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>
              From roaming tribes to resort villas, the story of bathing mirrors the human journey from communal life to individualized comfort. Yet even in private plunge pools, the spirit of those ancient hot springs survives: we still seek warmth, relaxation, and maybe a little magic from the earth beneath our feet.
            </p>
            <p>
              Taken together, the picture is consistent. Warm water can ease pain and promote relaxation. Green and blue environments support psychological restoration. Private, controllable spaces increase the sense of safety needed for deep rest. A private villa or luxury tent with its own plunge pool in a rainforest setting is, in effect, a small, purpose-built environment where all three elements intersect.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 7: THE SCIENCE (cream) ── */}
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
            The Science
          </h2>
          <div className="text-[15px] leading-[1.9]" style={{ color: PALETTE.muted }}>
            <ul className="space-y-4">
              <li className="pl-5 border-l-2" style={{ borderColor: PALETTE.espresso }}>
                Systematic reviews of balneotherapy for musculoskeletal pain suggest that repeated immersion in warm, mineral-rich baths can reduce pain and improve function in conditions such as osteoarthritis and chronic low back pain, although protocols and mineral compositions vary.
              </li>
              <li className="pl-5 border-l-2" style={{ borderColor: PALETTE.espresso }}>
                Reviews of balneotherapy mechanisms highlight three broad levers: heat (improved circulation and muscle relaxation), hydrostatic pressure (joint support and venous return), and mineral content (possible local or systemic effects depending on composition), although the role of specific minerals remains under study.
              </li>
              <li className="pl-5 border-l-2" style={{ borderColor: PALETTE.espresso }}>
                Luxury Daily connects the rise in villa demand directly to a desire for fewer shared spaces, higher control over social contact, and the ability to gather with loved ones in seclusion.
              </li>
              <li className="pl-5 border-l-2" style={{ borderColor: PALETTE.espresso }}>
                Work in environmental and hospitality psychology suggests that perceived control over one's environment, including the ability to withdraw from others and control visibility, plays a significant role in how restorative a space feels. Private rooms with views of nature are consistently rated as more restorative than shared or windowless spaces, even when floor area is similar.
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* ── SOURCES & FURTHER READING (stone) ── */}
      <section style={{ backgroundColor: PALETTE.stone }}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <p className="uppercase tracking-[0.3em] text-[11px] mb-4 text-center" style={{ fontWeight: 600, color: PALETTE.accent }}>
            References
          </p>
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Sources & Further Reading
          </h2>

          <h3 className="text-sm font-semibold tracking-wide uppercase mb-3 mt-6" style={{ color: PALETTE.espresso }}>
            On luxury travel, privacy, and villas
          </h3>
          <ul className="space-y-3 mb-6">
            {[
              { label: "McKinsey & Company — Updating perceptions about today's luxury traveler", href: "https://www.mckinsey.com" },
              { label: "Forbes — How Privacy Will Be The New Luxury This Summer", href: "https://www.forbes.com" },
              { label: "Travel Market Report — Why Villas Are the Future of Luxury Travel Accommodations", href: "https://www.travelmarketreport.com" },
            ].map((src) => (
              <li key={src.label} className="text-[14px] leading-[1.7]" style={{ color: PALETTE.muted }}>
                <a href={src.href} target="_blank" rel="noopener noreferrer" className="underline transition-opacity hover:opacity-70" style={{ color: PALETTE.espresso }}>
                  {src.label}
                </a>
              </li>
            ))}
          </ul>

          <h3 className="text-sm font-semibold tracking-wide uppercase mb-3 mt-6" style={{ color: PALETTE.espresso }}>
            On thermal waters, balneotherapy, and hot springs history
          </h3>
          <ul className="space-y-3 mb-6">
            {[
              { label: "Balneotherapy in chronic low back pain: a systematic review (SpringerOpen, 2025)", href: "https://link.springer.com" },
              { label: "NIH / PMC review on balneotherapy mechanisms", href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2690918" },
              { label: "Roman Baths, Bath — Official History", href: "https://www.romanbaths.co.uk/history" },
            ].map((src) => (
              <li key={src.label} className="text-[14px] leading-[1.7]" style={{ color: PALETTE.muted }}>
                <a href={src.href} target="_blank" rel="noopener noreferrer" className="underline transition-opacity hover:opacity-70" style={{ color: PALETTE.espresso }}>
                  {src.label}
                </a>
              </li>
            ))}
          </ul>

          <h3 className="text-sm font-semibold tracking-wide uppercase mb-3 mt-6" style={{ color: PALETTE.espresso }}>
            On Japan's onsen and Iceland's Blue Lagoon
          </h3>
          <ul className="space-y-3">
            {[
              { label: "Japan National Tourism Organization — Onsen overview", href: "https://www.japan.travel" },
              { label: "Japan-Guide — Onsen bathing rules and etiquette", href: "https://www.japan-guide.com" },
              { label: "Clinical and historical work on Blue Lagoon and psoriasis", href: "https://www.bluelagoon.com" },
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

      {/* ── EXPLORE MORE (3 related articles) ── */}
      <section style={{ backgroundColor: PALETTE.cream }}>
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
                  <div className="aspect-[4/3] overflow-hidden mb-4 rounded-lg">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
      </section>

      {/* ── BRAND ESPRESSO FOOTER ── */}
      <Footer textColor="#FFFFFF" />
    </div>
  );
}
