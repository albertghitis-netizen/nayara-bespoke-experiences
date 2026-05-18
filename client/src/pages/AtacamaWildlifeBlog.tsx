/**
 * WILDLIFE CONSERVATION IN CHILE'S ATACAMA DESERT AND EASTER ISLAND
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
  hero: "/manus-storage/hero-horses-moai-sunset_46de4b8e.webp",
  flamingos: "/manus-storage/flamingos-salt-flat_49cfd041.webp",
  llama: "/manus-storage/llama-guest-interaction_4201e668.webp",
  horses: "/manus-storage/wild-horses-rapa-nui_6fc81c5f.webp",
  turtle: "/manus-storage/sea-turtle-rapa-nui_919e24a3.webp",
};

const RELATED_ARTICLES = [
  {
    slug: "/blog/arenal-bocas-wildlife",
    title: "Wildlife Conservation in Arenal and Bocas del Toro",
    pillar: "Conservation",
    image: "https://blog.nayararesorts.com/hubfs/Swimming-Sloth-1024x683.jpg",
  },
  {
    slug: "/blog/birdwatching",
    title: "Birdwatching in Costa Rica: Toucans, Quetzals & More Near Arenal",
    pillar: "Wildlife & Nature",
    image: "/manus-storage/birdwatching-card-aracari-square_616da216.jpg",
  },
  {
    slug: "/blog/pura-vida",
    title: "Pura Vida and the Science of Why Costa Rica Feels Different",
    pillar: "Wellness",
    image: "/manus-storage/pura-vida-hero_9a138a66.jpeg",
  },
];

export default function AtacamaWildlifeBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Wildlife Conservation in Chile's Atacama Desert and Easter Island",
    description: "Three flamingo species, vicuñas, wild horses, and 142 endemic marine species. How Nayara Alto Atacama and Nayara Hangaroa protect irreplaceable wildlife through responsible tourism.",
    author: { "@type": "Person", name: "Albert Ghitis" },
    publisher: { "@type": "Organization", name: "Nayara Resorts" },
    datePublished: "2025-03-01",
    image: IMAGES.hero,
    articleSection: "Sustainability",
    keywords: "Atacama wildlife, flamingos Chile, Rapa Nui marine conservation, vicuñas, Easter Island horses, Nayara Alto Atacama",
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.cream, color: PALETTE.text, fontFamily: "var(--font-body)" }}>
      <Helmet>
        <title>Wildlife Conservation in Chile's Atacama Desert and Easter Island | Nayara Resorts</title>
        <meta name="description" content="Three flamingo species, vicuñas, wild horses, and 142 endemic marine species. How Nayara Alto Atacama and Nayara Hangaroa protect irreplaceable wildlife through responsible tourism." />
        <meta property="og:title" content="Wildlife Conservation in Chile's Atacama Desert and Easter Island" />
        <meta property="og:description" content="Flamingos, vicuñas, wild horses, and 142 endemic marine species. Conservation at the edge of the world." />
        <meta property="og:image" content={IMAGES.hero} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      {/* ── HERO (21:9) ── */}
      <section className="relative w-full overflow-hidden" style={{ aspectRatio: "21/9", minHeight: "400px", maxHeight: "70vh" }}>
        <img src={IMAGES.hero} alt="Wild horses grazing in front of moai statues at sunset on Easter Island" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
      </section>

      {/* ── TITLE BLOCK ── */}
      <motion.section style={{ backgroundColor: PALETTE.cream }} variants={contentEntrance} initial="hidden" animate="visible" custom={0.1}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-8">
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span className="text-[11px] font-medium tracking-[0.35em]" style={{ color: PALETTE.espresso }}>SUSTAINABILITY</span>
            <span className="text-[10px] tracking-[0.2em] border px-2 py-0.5 rounded-full" style={{ color: `${PALETTE.muted}99`, borderColor: PALETTE.stone }}>Atacama</span>
            <span className="text-[10px] tracking-[0.2em] border px-2 py-0.5 rounded-full" style={{ color: `${PALETTE.muted}99`, borderColor: PALETTE.stone }}>Rapa Nui</span>
          </div>
          <h1 className="text-3xl md:text-[40px] lg:text-[46px] leading-[1.15] mb-5" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Wildlife Conservation in Chile's Atacama Desert and Easter Island
          </h1>
          <div className="flex items-center gap-3 text-[13px] tracking-[0.05em] mb-6 flex-wrap" style={{ color: PALETTE.muted }}>
            <span>Albert Ghitis</span>
            <span style={{ color: PALETTE.stone }}>&middot;</span>
            <span>March 1, 2025</span>
            <span style={{ color: PALETTE.stone }}>&middot;</span>
            <span>14 min read</span>
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
                "Three flamingo species nesting in Atacama salt flats are classified as vulnerable or near threatened. Their decline is driven by mining, water extraction, and egg harvesting, not natural scarcity.",
                "Rapa Nui's marine waters contain at least 142 species found nowhere else on Earth. In 2018, the Rapa Nui community voted to protect those waters in one of the largest marine protected areas ever created, a conservation decision led by indigenous people, not governments.",
                "The Atacama is not a dead landscape. It supports complex, fragile food webs held together by geothermal water sources, altitude-adapted physiology, and the absence of large-scale human pressure, a condition that is not guaranteed to last.",
              ].map((finding, i) => (
                <li key={i} className="text-[15px] leading-[1.9] pl-5 border-l-2" style={{ color: PALETTE.muted, borderColor: PALETTE.espresso }}>{finding}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 1: What Extreme Aridity Means (cream, NO image) ── */}
      <motion.section style={{ backgroundColor: PALETTE.cream }} variants={contentEntrance} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={0.1}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            What Extreme Aridity Means for Conservation
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>Some weather stations in the Atacama Desert have never recorded measurable precipitation in their entire operational history. Not a drought. Not an anomaly. A permanent condition.</p>
            <p>And yet the Atacama is alive. Flamingos breed in its salt lagoons. Vicuñas graze its high plains on blood that carries oxygen more efficiently than any other large mammal on Earth. Foxes, viscachas, and lizards thread through its rocky margins in thermal windows so narrow that a few degrees in either direction would kill them.</p>
            <p>The Atacama's dryness is not uniform. The hyperarid core, where NASA uses the landscape as a Mars analog for its chemical and biological similarity to the red planet, sits between the cold Humboldt Current to the west, which suppresses Pacific rainfall, and the Andes to the east, which blocks Amazon moisture. The result is a vertical gradient: lower elevations are nearly sterile, but the high-altitude zones above 3,000 meters receive snowmelt and geothermal input that sustains permanent wetlands, salt lagoons, and the food webs that depend on them.</p>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 2: Flamingos (stone, WITH image) ── */}
      <motion.section style={{ backgroundColor: PALETTE.stone }} variants={contentEntrance} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={0.1}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Flamingos: Indicators of Wetland Integrity
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>Three flamingo species nest in the Atacama's salt-flat lagoons: the Andean, the Chilean, and James's flamingo. All three are listed as vulnerable or near threatened by BirdLife International, not because the desert is getting drier, but because human activity is degrading the specific water bodies their breeding depends on. The Andean flamingo, rarest of the three, has experienced documented population declines tied directly to mining disturbance and water extraction at key nesting sites.</p>
            <p>Flamingos in these lagoons are not simply attractive. They are functional indicators of wetland health. Their filter-feeding behavior (straining brine shrimp and algae from hypersaline water) depends on a precise balance of salinity, depth, and food availability. When that balance is disturbed by water extraction or chemical contamination from nearby mining, flamingo breeding fails first. Their absence from a lagoon they once occupied is one of the clearest early signals that the wetland ecosystem is deteriorating.</p>
            <p>At Nayara Alto Atacama, excursions to the salt-flat lagoons at Chaxa and Miscanti are designed around minimal disturbance protocols. Flamingos are sensitive to ground-level noise and movement during nesting season. Observing them from appropriate distances, at appropriate times, is not a restriction on the guest experience.</p>
            <p>It is the thing that makes the experience possible year after year.</p>
          </div>
          <figure className="my-10 flex justify-center">
            <img src={IMAGES.flamingos} alt="Flamingos in Atacama salt flat lagoon with mountain reflections" className="w-full max-w-2xl rounded-lg shadow-md object-contain" loading="lazy" />
          </figure>
        </div>
      </motion.section>

      {/* ── SECTION 3: Camelids (cream, NO image) ── */}
      <motion.section style={{ backgroundColor: PALETTE.cream }} variants={contentEntrance} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={0.1}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Camelids of the High Andes: Adaptation in Action
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>Guanacos and vicuñas are among the most physiologically specialized large mammals on Earth. At altitudes where oxygen partial pressure is roughly 40% lower than at sea level, both species maintain aerobic performance through unusually high hemoglobin concentrations and blood oxygen-carrying capacity, as documented by the Smithsonian National Zoo. Their digestive systems extract water from vegetation so efficiently that they can survive on the sparse plant communities of the altiplano without access to standing water.</p>
            <p>These adaptations make them resilient to natural environmental stress. They do not make them resilient to hunting, habitat conversion, or competition from domestic livestock. Vicuñas were hunted to near-extinction for their extraordinarily fine fiber in the decades following European contact; recovery has been slow and geographically uneven. Today, their populations in the Atacama are stable in protected areas but remain vulnerable wherever land-use pressure and enforcement are inconsistent.</p>
            <p>Llamas occupy a different position in this ecosystem. Domesticated from guanacos approximately 6,000 years ago by Andean cultures, they are simultaneously wildlife, livestock, and cultural heritage.</p>
            <p>Our on-site llama corral connects guests with that history directly, not as a zoo exhibit, but as a living record of the human-animal relationship that sustained Andean civilization for millennia. Their continued presence in the Atacama is itself a form of conservation of living cultural heritage.</p>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 4: Small Fauna (stone, WITH llama image) ── */}
      <motion.section style={{ backgroundColor: PALETTE.stone }} variants={contentEntrance} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={0.1}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Small Fauna: Invisible Architecture of the Desert
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>The culpeo fox, the viscacha, and the lizard communities of the Atacama receive far less attention than flamingos or camelids. They are harder to photograph and less iconic. But they perform the trophic and behavioral functions that hold the desert ecosystem together.</p>
            <p>The culpeo is the Atacama's primary mid-level predator, regulating rodent populations, scavenging carrion, and shifting its diet opportunistically across seasons and elevations. Viscachas, high-altitude rodents that superficially resemble chinchillas, are seed dispersers and prey for multiple predator species. Their burrow systems also create microhabitats used by other animals. The lizard species documented by researchers at the IUCN in the Atacama's rocky margins are ectotherms operating at the edge of thermal tolerance, surviving by behavioral precision: emerging to forage in narrow thermal windows and retreating before temperatures exceed their physiological limits.</p>
            <p>These species are not individually charismatic. Collectively, they represent the functional diversity that determines whether the desert ecosystem can absorb disturbance or will collapse under it.</p>
            <p>Conservation that focuses only on flagship species while degrading the habitat conditions that support everything else is not conservation. It is decoration.</p>
          </div>
          <figure className="my-10 flex justify-center">
            <img src={IMAGES.llama} alt="Guest interacting with a llama at Nayara Alto Atacama" className="w-full max-w-2xl rounded-lg shadow-md object-contain" loading="lazy" />
          </figure>
        </div>
      </motion.section>

      {/* ── ESPRESSO SECTION: Pull Quote ── */}
      <motion.section style={{ backgroundColor: PALETTE.espresso }} variants={contentEntrance} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={0.1}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-16 pb-16">
          <blockquote className="text-center">
            <p className="text-xl md:text-2xl italic leading-relaxed" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "white" }}>
              "The Andean flamingo does not have a backup habitat. The ura lobster does not exist in any other ocean. The vicuña's oxygen-adapted hemoglobin is the product of a specific evolutionary history in a specific place. Once the conditions that sustain these things are gone, no amount of subsequent effort recovers them."
            </p>
          </blockquote>
        </div>
      </motion.section>

      {/* ── SECTION 5: Rapa Nui Isolation (cream, NO image) ── */}
      <motion.section style={{ backgroundColor: PALETTE.cream }} variants={contentEntrance} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={0.1}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Rapa Nui: Isolation as Both Refuge and Vulnerability
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>Easter Island is the most isolated inhabited island on Earth. Its nearest neighbor is Pitcairn Island, more than 2,000 kilometers away. The island itself is the exposed peak of a massive submarine volcano within the Salas y Gómez Ridge, a chain of seamounts that the Schmidt Ocean Institute has documented as creating conditions for extraordinary marine biodiversity in an otherwise nutrient-poor stretch of the Pacific.</p>
            <p>Isolation, in evolutionary terms, produces endemism: species that exist only here, shaped by conditions found nowhere else. The marine waters around Rapa Nui harbor at least 142 species found nowhere else on Earth. The California Academy of Sciences has conducted deep-reef expeditions here that discovered multiple species entirely new to science. The terrestrial landscape tells a different story.</p>
            <p>Most of the island's native land species, the palm forests that once covered it, the seabird colonies that once nested there in vast numbers, were lost after human settlement. What remains on land is a heavily modified ecosystem.</p>
            <p>And in this ecosystem, wild horses outnumber people.</p>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 6: Wild Horses (stone, WITH image) ── */}
      <motion.section style={{ backgroundColor: PALETTE.stone }} variants={contentEntrance} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={0.1}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Wild Horses and Cultural-Ecological Identity
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>Easter Island's wild horses occupy an unusual category in conservation thinking. They are not native. They are not recent. And they are not going away.</p>
            <p>Horses arrived on Rapa Nui in the 1860s, introduced by Catholic missionaries who, unlike earlier European visitors, intended to stay. Their arrival coincided with the most catastrophic period in the island's human history.</p>
            <p>In December 1862, Peruvian slave raiders struck the island repeatedly over several months, capturing approximately 1,500 people, roughly half the population. Among those taken were the paramount chief, his heir, and virtually every person who could read the rongorongo script, the only written language ever developed in Polynesia.</p>
            <p>International outcry eventually forced Peru to repatriate survivors, but the return voyage became an incubator for smallpox and dysentery. Of 470 people placed on a single ship built for 160, only 15 reached home alive. The epidemic they carried back killed approximately 1,000 more. By 1877, the island's population had collapsed to 111 people.</p>
            <p>As the human population contracted, horses left without management multiplied unchecked. These horses roam the entire island freely, grazing volcanic slopes, walking through the only town, and moving without restriction across one of the most significant archaeological landscapes on Earth. Unfortunately, it comes at a cost.</p>
            <p>The ecological costs are documented and real. Research on soil erosion at Rapa Nui has identified overgrazing by horses and cattle as a primary driver of ongoing land degradation, compounding centuries of deforestation that stripped the island of its original palm forests. Their grazing alters vegetation composition on an island where native plant communities already occupy less than 5 percent of the land. Their movement through archaeological sites physically erodes the ahu (ceremonial platforms) and the ground surrounding the moai.</p>
            <p>And yet the horses have become inseparable from the island's identity.</p>
            <p>For the Rapa Nui community, whose population was nearly annihilated by the same colonial forces that introduced the horses, these animals now represent more than an ecological variable. They are woven into daily life, used for transport across terrain where vehicles are restricted, central to the tourism economy that sustains the island, and visible in nearly every photograph visitors take. Children grow up riding them. Families brand and own them. The horses occupy a psychological space somewhere between wildlife and inheritance, a living reminder of a period that nearly erased everything else.</p>
            <p>At Nayara Hangaroa, guests encounter them as something genuinely unlike anything else on Earth: free-roaming animals silhouetted against moai at sunrise, grazing the rim of volcanic craters, standing motionless on cliffs above the Pacific. Pretending the tension between their cultural significance and their ecological impact does not exist serves neither conservation nor the community.</p>
            <p>Holding both truths at once is the only honest position.</p>
          </div>
          <figure className="my-10 flex justify-center">
            <img src={IMAGES.horses} alt="Wild horses with riders on Easter Island coastline" className="w-full max-w-2xl rounded-lg shadow-md object-contain" loading="lazy" />
          </figure>
        </div>
      </motion.section>

      {/* ── SECTION 7: Marine Protected Area (cream, NO image) ── */}
      <motion.section style={{ backgroundColor: PALETTE.cream }} variants={contentEntrance} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={0.1}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Marine Protected Area: Rapa Nui Led Conservation
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>In 2018, the Chilean government signed the decree creating the Rapa Nui Marine Protected Area: a protected zone covering 720,000 square kilometers, roughly the size of Chile's entire land area, shielding the waters surrounding the island from industrial fishing, mining, and other extractive activities. The MPA was not imposed from outside. It was proposed by the Rapa Nui community, developed through years of community meetings and environmental education, and endorsed by a public referendum in which 73 percent of residents voted in favor.</p>
            <p>This matters as a conservation model as much as it matters as a policy outcome. The Pew Bertarelli Ocean Legacy, which supported the effort since 2012, worked alongside Rapa Nui leaders rather than leading them. The result is a protected area that preserves traditional artisanal fishing practices while excluding industrial extraction: a distinction that makes the difference between conservation that sustains a community and conservation that displaces one.</p>
            <p>The waters the MPA protects are home to at least 27 threatened or endangered species, important spawning grounds for tuna, marlin, and swordfish, and the only hydrothermal vents in Chilean territorial waters. For Rapa Nui's endemic marine species, the ura lobster, the Easter Island butterflyfish, multiple cephalopod species found nowhere else, the MPA is the difference between a future and extinction by industrial attrition.</p>
            <p>Among the species the MPA shields are the green and hawksbill sea turtles that feed in the bays around Hanga Roa. The Rapa Nui call them honu. Turtle bones have been found alongside the oldest human remains on the island. Their images appear in petroglyphs at the sacred sites of Tongariki and Orongo, and in the still-undeciphered glyphs of the rongorongo tablets. In Rapa Nui's founding myth, the seven explorers sent by King Hotu Matu'a encountered a turtle spirit upon first landing at what is still called Hanga Ho'onu: Turtle Bay.</p>
            <p>Once, their meat was reserved exclusively for the ariki, the island's paramount chief, during sacred rituals. Today, the community has voluntarily abandoned turtle consumption entirely. The honu went from ceremonial offering to protected symbol in a single cultural generation, proof that conservation here is not imported policy.</p>
            <p>It is indigenous instinct.</p>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 8: What These Landscapes Teach (stone, WITH turtle image) ── */}
      <motion.section style={{ backgroundColor: PALETTE.stone }} variants={contentEntrance} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={0.1}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            What These Landscapes Teach
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>The Atacama and Rapa Nui produce wildlife through entirely different mechanisms, one through physiological adaptation to scarcity, the other through the endemism that isolation generates over millennia.</p>
            <p>The Andean flamingo does not have a backup habitat. The ura lobster does not exist in any other ocean. The vicuña's oxygen-adapted hemoglobin is the product of a specific evolutionary history in a specific place.</p>
            <p>At Nayara Alto Atacama and Nayara Hangaroa, we operate with that irreversibility as a baseline assumption. The guest experience we offer is built on the ecological integrity of these places. Protecting that integrity is not a side commitment to our work. It is the foundation of it.</p>
            <p>Once the conditions that sustain these things are gone, no amount of subsequent effort recovers them.</p>
            <p>That is what World Wildlife Day actually means. Not a calendar date. A decision repeated every morning in places most people will never see.</p>
          </div>
          <figure className="my-10 flex justify-center">
            <img src={IMAGES.turtle} alt="Green sea turtle swimming underwater near Rapa Nui" className="w-full max-w-2xl rounded-lg shadow-md object-contain" loading="lazy" />
          </figure>
        </div>
      </motion.section>

      {/* ── SOURCES & FURTHER READING (flat list) ── */}
      <section style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <p className="uppercase tracking-[0.3em] text-[11px] mb-4 text-center" style={{ fontWeight: 600, color: PALETTE.accent }}>References</p>
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Sources & Further Reading
          </h2>
          <ul className="space-y-3">
            {[
              { label: "World Wildlife Day, United Nations", href: "https://www.un.org/en/observances/world-wildlife-day" },
              { label: "NASA Earth Observatory, Atacama Desert", href: "https://earthobservatory.nasa.gov" },
              { label: "Smithsonian National Zoo, Camelid Research", href: "https://nationalzoo.si.edu" },
              { label: "BirdLife International, Andean Flamingo Factsheet", href: "https://www.birdlife.org" },
              { label: "IUCN Red List of Threatened Species", href: "https://www.iucnredlist.org" },
              { label: "Schmidt Ocean Institute, Salas y Gómez Ridge Expedition", href: "https://schmidtocean.org" },
              { label: "California Academy of Sciences, Rapa Nui Marine Expeditions", href: "https://www.calacademy.org" },
              { label: "Pew Bertarelli Ocean Legacy, Rapa Nui MPA", href: "https://www.pewtrusts.org" },
              { label: "Vaikava Rapa Nui, The Pew Charitable Trusts", href: "https://www.pewtrusts.org" },
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
      <section style={{ backgroundColor: PALETTE.stone }}>
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
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontWeight: 600, color: PALETTE.accent }}>{article.pillar}</p>
                  <h3 className="text-lg" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>{article.title}</h3>
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
