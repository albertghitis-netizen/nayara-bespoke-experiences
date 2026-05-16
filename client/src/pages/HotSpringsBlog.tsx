/**
 * PRIVATE VILLAS AND HOT-SPRINGS PLUNGE POOLS: THE HISTORY & SCIENCE
 * Author: Albert Ghitis | Dec 6, 2025
 * Verbatim content from the original blog. Sources included. No FAQ.
 * No em dashes. Real photos only.
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
  accent: "#8B6914",
  text: "#2C2016",
  muted: "#5A4A3A",
};

/* ── RELATED ARTICLES ──────────────────────────────────────── */
const RELATED = [
  {
    title: "Wellness by Colors",
    url: "/blog/wellness-by-colors",
    image: `${CDN}/hot-springs-hero_a60a0e92.jpg`,
    tag: "Wellness",
  },
  {
    title: "The Nayara Story",
    url: "/blog/nayara-story",
    image: `${CDN}/prop-tented_0fd865a2.jpg`,
    tag: "Brand",
  },
  {
    title: "Green Globe Certification",
    url: "/blog/green-globe-certification",
    image: `${CDN}/prop-gardens_5931d8af.jpg`,
    tag: "Sustainability",
  },
];

export default function HotSpringsBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.cream }}>
      <EnhancedArticleSchema
        image={`${CDN}/hot-springs-hero_a60a0e92.jpg`}
        headline="Private Villas and Hot-Springs Plunge Pools: The History & Science"
        description="From Roman thermae to Nayara Springs, the science and history behind private hot springs plunge pools and their profound wellness benefits."
        author={{ name: "Albert Ghitis", expertise: ["Luxury Hospitality", "Sustainable Tourism", "Wellness"] }}
        datePublished="2025-12-06"
        url="https://nayararesorts.manus.space/blog/hot-springs"
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={`${CDN}/hot-springs-hero_a60a0e92.jpg`}
          alt="Natural hot springs plunge pool at Nayara Springs surrounded by rainforest"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(59,43,38,0.25) 0%, rgba(59,43,38,0.45) 50%, rgba(59,43,38,0.8) 100%)",
          }}
        />

        {/* Back button */}
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
            Wellness &middot; Albert Ghitis
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 text-white"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Private Villas and
            <br />
            Hot-Springs Plunge Pools
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed max-w-2xl"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400, color: "rgba(255,255,255,0.85)" }}
          >
            The History &amp; Science
          </p>
        </motion.div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────────── */}
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
              For most of modern hotel history, luxury was measured in scale. The largest lobby, the grandest ballroom, the biggest pool. That logic has shifted. High-end travelers now value space, seclusion, and control: their own entrance, their own deck, and water they do not share with strangers.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              A Forbes article framed it bluntly: privacy is "the new luxury" of travel. A similar study by McKinsey confirms that high-net-worth guests are more likely to travel to disconnect, enjoy privacy and exclusivity, while also preferring nature-rich, less crowded destinations.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Enter private villas with their own plunge pools set in the Costa Rican Rainforest.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Not only do they remove the social calculation that comes with a shared pool: where to sit, who is watching, how noisy it is, whether you feel on display in a swimsuit, but privacy becomes a spatial and psychological condition, not just an architectural detail.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Now, imagine stepping into your own natural hot springs plunge pool fed by the same Arenal Volcano that frames your view. This is not simply "a nicer pool," it is a different category of stay.
            </p>
            <p
              className="text-[20px] md:text-[22px] leading-[1.7] italic"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              This isn't fiction. It's what defines nature-based wellness at Nayara Springs and Nayara Tented Camp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── HOW SETTLED LIFE INVENTED PRIVACY ────────────────────── */}
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
              Origins
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              How Settled Life Invented the Private Bath
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Private hot spring plunge pools sit at the crossroads of geology, history, and modern wellness science, combining volcanic heat, environmental seclusion, and behavioral privacy, and the history is just as fascinating as the science.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Long before homes and fences, early hunter-gatherers lived as mobile bands beneath open skies. Privacy then came from distance instead of doors. As groups grew, families camped farther apart, creating personal space without walls.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              With farming, everything changed. Permanent villages, storage, and land ownership pushed people closer together. Bricks, thatch, and early fences started to mark thresholds between public and private life. Courtyards and enclosed rooms appeared, and shared rituals such as communal bathing began to carry new social meaning.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Jared Diamond's work on the shift from nomadic bands to sedentary villages helps explain why private plunge pools feel so instinctively restorative today. In <em>Guns, Germs, and Steel</em>, he describes how early farming communities, no longer mobile, were forced into closer and more permanent proximity. Storage, fields, and domesticated animals tied families to fixed locations, and with immobility came crowding. What once had been natural privacy created by distance now required walls, thresholds, and architectural boundaries.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              When mobility disappears, societies invent norms and built spaces to regulate social contact. Privacy emerges as a response to density, not an indulgence. The enclosed bath, the personal room, and eventually the private retreat all stem from the same need: a protected zone where an individual can withdraw from the group.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              When guests enter a private plunge pool in a rainforest setting, they experience a reversal of the pattern Diamond describes. Landscape and water no longer force communal gathering; instead, they restore the autonomy early humans once had.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FROM ROMAN BATHS TO RAINFOREST SPRINGS ───────────────── */}
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
              History
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              From Roman Baths to Volcanic Hot Springs in Costa Rica
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              For most of recorded history, water was a shared experience. Roman thermae, Ottoman hammams, and Mesoamerican temazcales treated bathing as civic or ritual acts. Bodies gathered, steam circulated, conversations flowed. Privacy was neither expected nor structurally possible; community was built into the architecture.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              In Roman Britain, the city now called Bath (yes, it should sound familiar) grew around a natural hot spring. The Romans built a major bathing complex, Aquae Sulis, there in the first century, combining temple, pools, and social spaces around it. It remains one of the clearest examples of how architecture and geothermal water fused into a civic and religious center.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              The rise of private bathing unfolded slowly. Early modern Europe introduced enclosed "bathing cabinets" for nobility, early indicators that bathing could be personal rather than public. By the nineteenth century, wealthy spa travelers increasingly requested rooms with individual tubs, separating the curative role of water from its social one. By the nineteenth century, "taking the waters" at a spa was both a health prescription and a status symbol.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Contemporary hospitality inherits these dual lineages. Large resorts recreate the grandeur of ancient complexes with open pools and shared spaces. Villa-based and nature-based properties follow the quieter lineage, designing water around solitude. The private plunge pool is the culmination of that second tradition: a self-contained environment where warmth, silence, and nature create a personal sanctuary.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Costa Rica represents the next evolution in this story. Here, geothermal water emerges not in classical cities or European spa towns but in dense rainforest beneath an active volcano. The setting reframes the experience entirely. A private plunge pool fed by volcanic hot springs becomes not simply an amenity but a direct encounter with geology, heat, and landscape. It takes the ancient communal impulse to seek healing in warm mineral waters and reinterprets it as an individual immersive experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── JAPAN'S ONSEN & ICELAND'S BLUE LAGOON ────────────────── */}
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
              Global Context
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              Japan's Onsen Tradition and Iceland's Blue Lagoon Compared
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              The global picture of thermal waters today is shaped as much by Asia and the North Atlantic as by Roman Europe. Two of the clearest contemporary examples are Japan's onsen culture and Iceland's Blue Lagoon.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              In Japan, onsen, or hot springs, are deeply embedded in domestic travel and daily life. Traditional ryokan inns often center their design around communal or private baths fed by geothermal sources, with an emphasis on quiet, ritual, and respect for surroundings. The Japanese Hot Springs Law defines onsen by mineral content and temperature, and many resorts classify their waters by chemical profile, with cultural narratives around which springs are thought to soothe particular ailments.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              In Iceland, the Blue Lagoon represents a different model. Set in a lava field on the Reykjanes Peninsula, it is filled with geothermal seawater rich in silica, which gives the lagoon its milky blue color. Originally formed from water discharged from a nearby power plant, it evolved into a wellness and tourism destination after visitors reported improved symptoms of skin conditions such as psoriasis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── NOT ALL HOT SPRINGS ARE CREATED EQUAL ────────────────── */}
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
              The Difference
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              Why Volcanic Hot Springs at Arenal Are Different
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Arenal's geothermal water differs from many historic bathing regions. Roman springs such as Bath are calcium- and sulfate-rich and fed by deep limestone aquifers; Iceland's Blue Lagoon is silica-dominant because its water originates from geothermal seawater; Japan's onsen vary by region but often carry high sulfur, sodium chloride, or bicarbonate content.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Arenal's springs are heated by magmatic systems beneath an active stratovolcano, producing naturally warm water with moderate mineralization, typically containing calcium, magnesium, bicarbonate, and silica. The result is a profile that is gentle on the skin, comfortably warm, and well-suited for prolonged soaking in private pools.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Privacy at Nayara Springs and Tented Camp is engineered. Villas and tents are oriented using controlled sightlines so no terrace overlooks another. Dense rainforest vegetation acts as living screening, while elevation changes and setbacks eliminate cross-visibility. Recessed decks, angled railings, and careful pool placement ensure that when a guest steps into warm water, no one else can see. This combination of topography, landscaping, and spatial orientation is considered one of the strongest architectural mechanisms for behavioral privacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── THE WATER REMEMBERS ──────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6 md:px-12" style={{ backgroundColor: PALETTE.espresso }}>
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
              The Mineral Profile of Arenal Volcanic Water
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.85)" }}
            >
              From roaming tribes to resort villas, the story of bathing mirrors the human journey from communal life to individualized comfort. Yet even in private plunge pools, the spirit of those ancient hot springs survives: we still seek warmth, relaxation, and maybe a little magic from the earth beneath our feet.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.85)" }}
            >
              Taken together, the picture is consistent. Warm water can ease pain and promote relaxation. Green and blue environments support psychological restoration. Private, controllable spaces increase the sense of safety needed for deep rest. A private villa or luxury tent with its own plunge pool in a rainforest setting is, in effect, a small, purpose-built environment where all three elements intersect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── THE SCIENCE ──────────────────────────────────────────── */}
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
              Evidence
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              The Science of Hot Springs and Cortisol Reduction
            </h2>
            <ul className="space-y-6">
              <li
                className="text-[15px] md:text-[17px] leading-[1.9] pl-6"
                style={{ fontFamily: "var(--font-body)", color: PALETTE.muted, borderLeft: `2px solid ${PALETTE.accent}` }}
              >
                Systematic reviews of balneotherapy for musculoskeletal pain suggest that repeated immersion in warm, mineral-rich baths can reduce pain and improve function in conditions such as osteoarthritis and chronic low back pain, although protocols and mineral compositions vary.
              </li>
              <li
                className="text-[15px] md:text-[17px] leading-[1.9] pl-6"
                style={{ fontFamily: "var(--font-body)", color: PALETTE.muted, borderLeft: `2px solid ${PALETTE.accent}` }}
              >
                Reviews of balneotherapy mechanisms highlight three broad levers: heat (improved circulation and muscle relaxation), hydrostatic pressure (joint support and venous return), and mineral content (possible local or systemic effects depending on composition), although the role of specific minerals remains under study.
              </li>
              <li
                className="text-[15px] md:text-[17px] leading-[1.9] pl-6"
                style={{ fontFamily: "var(--font-body)", color: PALETTE.muted, borderLeft: `2px solid ${PALETTE.accent}` }}
              >
                Luxury Daily connects the rise in villa demand directly to a desire for fewer shared spaces, higher control over social contact, and the ability to gather with loved ones in seclusion.
              </li>
              <li
                className="text-[15px] md:text-[17px] leading-[1.9] pl-6"
                style={{ fontFamily: "var(--font-body)", color: PALETTE.muted, borderLeft: `2px solid ${PALETTE.accent}` }}
              >
                Work in environmental and hospitality psychology suggests that perceived control over one's environment, including the ability to withdraw from others and control visibility, plays a significant role in how restorative a space feels. Private rooms with views of nature are consistently rated as more restorative than shared or windowless spaces, even when floor area is similar.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── SOURCES & FURTHER READING ────────────────────────────── */}
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
              References
            </p>
            <h2
              className="text-3xl md:text-4xl mb-10"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              Further Reading and Sources
            </h2>

            <div className="mb-8">
              <h3
                className="text-lg mb-4"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
              >
                On luxury travel, privacy, and villas
              </h3>
              <ul className="space-y-2">
                {[
                  "McKinsey & Company, \"Updating perceptions about today's luxury traveler\"",
                  "Forbes, \"Hotels, Travel: How Privacy Will Be The New Luxury This Summer\"",
                  "Travel Market Report, \"Why Villas Are the Future of Luxury Travel Accommodations\"",
                ].map((source, i) => (
                  <li
                    key={i}
                    className="text-[14px] leading-[1.7] pl-4"
                    style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
                  >
                    {source}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3
                className="text-lg mb-4"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
              >
                On thermal waters, balneotherapy, and hot springs history
              </h3>
              <ul className="space-y-2">
                {[
                  "\"Balneotherapy in chronic low back pain: a systematic review\" (SpringerOpen, 2025)",
                  "NIH / PMC review on balneotherapy mechanisms",
                  "Roman Baths, Bath, official history",
                ].map((source, i) => (
                  <li
                    key={i}
                    className="text-[14px] leading-[1.7] pl-4"
                    style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
                  >
                    {source}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className="text-lg mb-4"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
              >
                On Japan's onsen and Iceland's Blue Lagoon
              </h3>
              <ul className="space-y-2">
                {[
                  "Japan National Tourism Organization, onsen overview",
                  "Japan-Guide, \"Onsen bathing rules and etiquette\"",
                  "Clinical and historical work on Blue Lagoon and psoriasis",
                ].map((source, i) => (
                  <li
                    key={i}
                    className="text-[14px] leading-[1.7] pl-4"
                    style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
                  >
                    {source}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── RELATED ARTICLES ─────────────────────────────────────── */}
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
                  <div className="aspect-[4/3] overflow-hidden mb-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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

      <Footer textColor="#FFFFFF" />
    </div>
  );
}
