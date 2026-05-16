/**
 * WILDLIFE CONSERVATION IN ARENAL AND BOCAS DEL TORO
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
  hero: "/manus-storage/hero-sloth-underwater_ca1291f5.webp",
  infographic: "/manus-storage/infographic-isthmus-panama_4ac5ddc0.png",
  toucan: "/manus-storage/toucan-arenal-canopy_0db6e80a.png",
  dolphins: "/manus-storage/dolphins-bocas-del-toro_a7514b07.webp",
};

const RELATED_ARTICLES = [
  {
    slug: "/blog/atacama-wildlife",
    title: "Wildlife Conservation in Chile's Atacama Desert and Easter Island",
    pillar: "Conservation",
    image: "/manus-storage/hero-horses-moai-sunset_46de4b8e.webp",
  },
  {
    slug: "/blog/birdwatching",
    title: "Birdwatching in Costa Rica: Toucans, Quetzals & More Near Arenal",
    pillar: "Wildlife & Nature",
    image: "/manus-storage/toucan-hero-ultrawide_9046d457.webp",
  },
  {
    slug: "/blog/pura-vida",
    title: "Pura Vida: The Science of Why Costa Rica Is the Healthiest Country on Earth",
    pillar: "Wellness",
    image: "/manus-storage/hero-sloth-underwater_ca1291f5.webp",
  },
];

export default function ArenalBocasWildlifeBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Wildlife Conservation in Arenal and Bocas del Toro",
    description: "Central America holds 7 to 10 percent of all known species on Earth in less than 0.5 percent of its land area. How Nayara's reforestation and whole-system conservation protect sloths, toucans, dolphins, and leatherback turtles.",
    author: { "@type": "Person", name: "Albert Ghitis" },
    publisher: { "@type": "Organization", name: "Nayara Resorts" },
    datePublished: "2026-02-28",
    image: IMAGES.hero,
    articleSection: "Sustainability",
    keywords: "Arenal wildlife, Bocas del Toro conservation, sloths Costa Rica, toucans, dolphins Panama, leatherback turtles, Nayara Tented Camp, reforestation",
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.cream, color: PALETTE.text, fontFamily: "var(--font-body)" }}>
      <Helmet>
        <title>Wildlife Conservation in Arenal and Bocas del Toro | Nayara Resorts</title>
        <meta name="description" content="Central America holds 7 to 10 percent of all known species on Earth in less than 0.5 percent of its land area. How Nayara protects sloths, toucans, dolphins, and leatherback turtles." />
        <meta property="og:title" content="Wildlife Conservation in Arenal and Bocas del Toro" />
        <meta property="og:description" content="Sloths, toucans, dolphins, and leatherback turtles. Conservation at Nayara's Central American properties." />
        <meta property="og:image" content={IMAGES.hero} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      {/* ── HERO (21:9) ── */}
      <section className="relative w-full overflow-hidden" style={{ aspectRatio: "21/9", minHeight: "400px", maxHeight: "70vh" }}>
        <img src={IMAGES.hero} alt="Sloth swimming underwater in Costa Rica's tropical waters" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
      </section>

      {/* ── TITLE BLOCK ── */}
      <motion.section style={{ backgroundColor: PALETTE.cream }} variants={contentEntrance} initial="hidden" animate="visible" custom={0.1}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-8">
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span className="text-[11px] font-medium tracking-[0.35em]" style={{ color: PALETTE.espresso }}>SUSTAINABILITY</span>
            <span className="text-[10px] tracking-[0.2em] border px-2 py-0.5 rounded-full" style={{ color: `${PALETTE.muted}99`, borderColor: PALETTE.stone }}>Costa Rica</span>
            <span className="text-[10px] tracking-[0.2em] border px-2 py-0.5 rounded-full" style={{ color: `${PALETTE.muted}99`, borderColor: PALETTE.stone }}>Bocas del Toro</span>
          </div>
          <h1 className="text-3xl md:text-[40px] lg:text-[46px] leading-[1.15] mb-5" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Wildlife Conservation in Arenal and Bocas del Toro
          </h1>
          <div className="flex items-center gap-3 text-[13px] tracking-[0.05em] mb-6 flex-wrap" style={{ color: PALETTE.muted }}>
            <span>Albert Ghitis</span>
            <span style={{ color: PALETTE.stone }}>&middot;</span>
            <span>February 28, 2026</span>
            <span style={{ color: PALETTE.stone }}>&middot;</span>
            <span>16 min read</span>
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
                "Central America holds an estimated 7 to 10 percent of all known species on Earth in less than 0.5 percent of its land area, the result of geology, climate, and decades of deliberate conservation.",
                "At Nayara Tented Camp, a reforestation program turned cleared pasture into a functioning habitat corridor. Sloths returned on their own when the canopy closed.",
                "In Bocas del Toro, reef, mangrove, and rainforest operate as a single system. Conservation that treats them separately will fail.",
              ].map((finding, i) => (
                <li key={i} className="text-[15px] leading-[1.9] pl-5 border-l-2" style={{ color: PALETTE.muted, borderColor: PALETTE.espresso }}>{finding}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 1: The Land Bridge (cream, NO image) ── */}
      <motion.section style={{ backgroundColor: PALETTE.cream }} variants={contentEntrance} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={0.1}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            The Land Bridge and What It Means
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>Central America's extraordinary biodiversity is a consequence of geography. For most of the planet's history, North and South America were separate continents, each evolving its own fauna in isolation. When the Isthmus of Panama closed roughly three million years ago, the biological exchange that followed was one of the most significant events in the history of life on land. Species moved in both directions. Populations diverged into new forms as they adapted to unfamiliar habitats. Marine species separated as the Atlantic and Pacific became distinct bodies of water.</p>
            <p>What remained after that exchange was a narrow strip of land with a disproportionate share of the world's biological complexity. Costa Rica, with an estimated 500,000 species in a territory roughly the size of West Virginia, contains a larger share of global biodiversity than most continents. The Arenal Conservation Area alone spans over 500,000 acres, climbing from lowland rainforest through cloud forest and functioning as a vertical cross-section of that complexity, stacking distinct ecosystems on top of one another along its volcanic slopes.</p>
            <p>Understanding this context matters because it changes the stakes of every development decision. When habitat is fragmented here, the consequences ripple across a web of interdependencies that took millions of years to form. Restoration, correspondingly, is not just about one species or one parcel. It is about reconnecting a system.</p>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 2: Turning Pasture Back (stone, WITH infographic) ── */}
      <motion.section style={{ backgroundColor: PALETTE.stone }} variants={contentEntrance} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={0.1}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Turning Pasture Back into Forest
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>The land beneath Nayara Tented Camp was cleared pasture when we acquired it. Open. Exposed. Functionally empty. No canopy, no food web, no connection to the surrounding rainforest. We made a decision early on: this would not be a project built on degraded land. It would be a project that reversed it.</p>
            <p>The work began with species selection. Fast-establishing native trees were introduced to rebuild canopy quickly while restoring habitat at the same time. Cecropia became foundational. It colonizes disturbed land rapidly and produces the leaves sloths depend on. As the canopy closed, structure returned. Shade stabilized the understory. Insects reappeared. Movement corridors formed overhead.</p>
            <p>The sloths came back on their own. That is the only outcome that matters. When the right trees are planted in the right way, wildlife follows the food. Two species now live here year-round, monitored by resident naturalists tracking movement, condition, and habitat use. The sloth is not a symbol. It is a living measure of whether the forest is functioning.</p>
          </div>
          <figure className="my-10 flex justify-center">
            <img src={IMAGES.infographic} alt="Infographic showing the Isthmus of Panama, Central America's biodiversity concentration, and the Arenal Conservation Area" className="w-full max-w-2xl rounded-lg shadow-md object-contain" loading="lazy" />
          </figure>
        </div>
      </motion.section>

      {/* ── SECTION 3: Ecological Roles (cream, NO image) ── */}
      <motion.section style={{ backgroundColor: PALETTE.cream }} variants={contentEntrance} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={0.1}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            The Ecological Roles That Actually Matter
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>Wildlife coverage tends to focus on charisma: size, color, rarity. But the species that matter most to an ecosystem are often the ones doing the least visible work. Three animals in the Arenal ecosystem illustrate what happens when you look past spectacle to function.</p>
            <p>The toucan family. Keel-billed, chestnut-mandibled, and collared araçari toucans move through the mid-canopy consuming large fruits that most birds cannot process. As documented by the Cornell Lab of Ornithology, these birds are among the most effective seed dispersers in Neotropical forests, carrying seeds in their gut across distances that determine where the next generation of large-seeded trees germinates. Lose the toucans, and you do not just lose the spectacle. You lose a critical mechanism of forest regeneration.</p>
            <p>The mantled howler monkey. The IUCN Red List records the Arenal population as stable, which is a conservation achievement worth naming. Howler monkeys are canopy-dependent: they cannot safely cross open ground, which means every break in forest cover is a hard barrier to movement, gene flow, and population health. The canopy corridors Nayara has planted are, among other things, howler monkey infrastructure. Their morning calls across the valley are not atmosphere. They are evidence that the corridors hold.</p>
            <p>The white-nosed coati. Visible on the forest floor, often dismissed as approachable and unexceptional, coatis are in practice ecosystem engineers. Their foraging behavior turns soil, suppresses insects, and disperses seeds across the undergrowth in ways that shape forest floor composition over time. Ecosystems without adequate populations of mid-level foragers show measurable degradation in structure and diversity. The coati's continued abundance here is another verdict: the understory is intact.</p>
            <p>Each of these species tells you something specific about the health of the system it occupies. Together, they constitute a living audit.</p>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 4: Bocas del Toro One System (stone, WITH toucan image) ── */}
      <motion.section style={{ backgroundColor: PALETTE.stone }} variants={contentEntrance} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={0.1}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Bocas del Toro: One System
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>The standard way to describe Bocas del Toro is as a place where reef, mangrove, and rainforest meet. That framing is convenient but misleading. These are not three ecosystems that happen to share a coastline. They are a single functioning system in which each component is structurally dependent on the others.</p>
            <p>The Smithsonian Tropical Research Institute has studied this system since establishing its research station here in 1998. What that research makes clear is that the causal chains run in every direction: mangrove root systems filter the terrestrial runoff that would otherwise smother reef corals. Reef structures shelter juvenile fish that will eventually feed the dolphins and sharks patrolling deeper water. Rainforest canopy stabilizes soils that, if eroded, would carry sediment into shallow-reef zones and cut off the light that coral requires. Seagrass meadows between mangroves and reef provide the feeding grounds on which sea turtles depend.</p>
            <p>Conservation strategies that treat any one of these components in isolation are not conservation strategies. They are delay. At Nayara Bocas del Toro, we operate with a whole-system awareness that shapes decisions about where boats travel, how lighting is managed, what materials enter the water, and when and how guests access sensitive zones.</p>
          </div>
          <figure className="my-10 flex justify-center">
            <img src={IMAGES.toucan} alt="Keel-billed toucan perched in the Arenal rainforest canopy" className="w-full max-w-2xl rounded-lg shadow-md object-contain" loading="lazy" />
          </figure>
        </div>
      </motion.section>

      {/* ── ESPRESSO SECTION: Pull Quote ── */}
      <motion.section style={{ backgroundColor: PALETTE.espresso }} variants={contentEntrance} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={0.1}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-16 pb-16">
          <blockquote className="text-center">
            <p className="text-xl md:text-2xl italic leading-relaxed" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "white" }}>
              "A sloth does not care about our intentions. A leatherback does not read our sustainability reports. A howler monkey does not distinguish between a resort that claims to protect the forest and one that actually does. The only thing any of them responds to is whether the conditions for life are present or absent."
            </p>
          </blockquote>
        </div>
      </motion.section>

      {/* ── SECTION 5: Four Species (cream, NO image) ── */}
      <motion.section style={{ backgroundColor: PALETTE.cream }} variants={contentEntrance} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={0.1}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Four Species and What Their Presence Means
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>If an animal's presence is a verdict on the system it inhabits, the waters of Bocas del Toro are delivering four separate ones simultaneously.</p>
            <p>Bottlenose and spinner dolphins. Dolphin Bay's resident populations are among the most reliable indicators of water quality and prey abundance in the archipelago. Dolphins are near the top of the aquatic food chain; their sustained presence means the trophic levels beneath them are functioning at sufficient scale. Their absence or decline would be an early warning of systemic stress that would likely not register in any other visible way until it was already severe.</p>
            <p>Leatherback sea turtles. The leatherback is the largest living reptile and one of the most ancient lineages of animals nesting on Bocas del Toro's beaches, typically between March and July. NOAA Fisheries documents their annual transoceanic migrations spanning thousands of miles; they return to the same Caribbean beaches year after year. Their continued nesting here depends on beach quality, darkness, and the absence of boat traffic and disorienting light that causes females to abort nesting attempts and return to sea. Every nest is a verdict on whether we have protected the conditions they require.</p>
            <p>Nurse sharks. According to the Florida Museum Shark Research Program, nurse sharks are benthic predators that rest on the seafloor during the day and hunt invertebrates at night. Docile and largely uninterested in human divers, they are easy to overlook. Their population density in Bocas del Toro's shallow reef zones reflects the health of the seafloor communities they feed on, and the absence of the overfishing pressure that depletes them elsewhere. Globally, the IUCN estimates that roughly a quarter of all shark and ray species are now threatened, making healthy populations like those in Bocas a genuine conservation bright spot rather than a given.</p>
            <p>Panamanian night monkeys. Research published in the American Journal of Primatology describes the Panamanian night monkey's dependence on undisturbed habitat and near-total darkness for successful foraging and reproduction. Artificial light at the wrong intensity disrupts their activity cycles and compresses their effective habitat range. Monitoring their presence near the property is one of the ways we track whether our light management practices are working.</p>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 6: What Comes Next (stone, WITH dolphins image) ── */}
      <motion.section style={{ backgroundColor: PALETTE.stone }} variants={contentEntrance} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={0.1}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            What Comes Next
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>The United Nations' framing for World Wildlife Day is consistently future-facing: what does the next generation inherit, and what choices determine that. For us, the question is more immediate. What choices are we making right now, in the properties we manage, in the ecosystems we operate inside, that will determine whether the species living here continue to do so.</p>
            <p>A sloth does not care about our intentions. A leatherback does not read our sustainability reports. A howler monkey does not distinguish between a resort that claims to protect the forest and one that actually does. The only thing any of them responds to is whether the conditions for life are present or absent.</p>
            <p>That is the standard. Everything else is narrative.</p>
          </div>
          <figure className="my-10 flex justify-center">
            <img src={IMAGES.dolphins} alt="Pod of dolphins swimming in the waters of Bocas del Toro, Panama" className="w-full max-w-2xl rounded-lg shadow-md object-contain" loading="lazy" />
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
              { label: "World Wildlife Day, Official Site", href: "https://www.wildlifeday.org" },
              { label: "SINAC, Costa Rica National System of Conservation Areas", href: "https://www.sinac.go.cr" },
              { label: "Smithsonian Tropical Research Institute, Bocas del Toro Station", href: "https://stri.si.edu/facility/bocas-del-toro" },
              { label: "Cornell Lab of Ornithology, Neotropical Birds", href: "https://www.birds.cornell.edu" },
              { label: "IUCN, Red List of Threatened Species", href: "https://www.iucnredlist.org" },
              { label: "NOAA Fisheries, Leatherback Sea Turtle", href: "https://www.fisheries.noaa.gov/species/leatherback-turtle" },
              { label: "Florida Museum, Nurse Shark Profile", href: "https://www.floridamuseum.ufl.edu" },
              { label: "American Journal of Primatology, Night Monkey Research", href: "https://onlinelibrary.wiley.com/journal/10982345" },
              { label: "Journal of Mammalogy, Sloth Ecology", href: "https://academic.oup.com/jmammal" },
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
                  <div className="aspect-[4/3] overflow-hidden mb-4 rounded-lg">
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
