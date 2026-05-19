/**
 * BIRDWATCHING IN COSTA RICA — Definitive editorial blog
 * Covers Toucans (big section from Nayara blog), Quetzals, Macaws, Hummingbirds
 * Format: New standardized template (v2)
 * - Ultra-wide toucan hero
 * - Title block + author + date + reading time
 * - Key Findings callout
 * - Alternating cream/stone backgrounds, NO divider lines
 * - One espresso dark section
 * - Sources flat list
 * - Explore More (3 related articles)
 * - Brand espresso Footer
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
const HERO_IMAGE = "/manus-storage/birdwatching-hero-aracari-v2_61c0425d.jpg";

/* Related articles for Explore More */
const RELATED_ARTICLES = [
  {
    slug: "/blog/atacama-wildlife",
    title: "Wildlife Conservation in Chile's Atacama Desert and Easter Island",
    pillar: "Conservation",
    image: "/manus-storage/atacama-wildlife-cover_ebe00ac5.jpg",
  },
  {
    slug: "/blog/arenal-bocas-wildlife",
    title: "Wildlife Conservation in Arenal and Bocas del Toro",
    pillar: "Conservation",
    image: "https://blog.nayararesorts.com/hubfs/Swimming-Sloth-1024x683.jpg",
  },
  {
    slug: "/blog/pura-vida",
    title: "Pura Vida: The Science of Why Costa Rica is the Healthiest Country on Earth",
    pillar: "Wellness",
    image: "/manus-storage/pura-vida-hero_9a138a66.jpeg",
  },
];

export default function BirdwatchingBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Birdwatching in Costa Rica: The Best Birds to See Near Arenal Volcano",
    description: "A comprehensive guide to birdwatching in Costa Rica's Arenal region. Meet the Toucans, Quetzals, Macaws, and Hummingbirds that define the canopy at Nayara Resorts.",
    author: { "@type": "Person", name: "Albert Ghitis" },
    publisher: { "@type": "Organization", name: "Nayara Resorts" },
    datePublished: "2024-09-10",
    dateModified: "2025-03-15",
    image: HERO_IMAGE,
    articleSection: "Wildlife & Nature",
    keywords: "birdwatching Costa Rica, toucans Arenal, quetzal, macaws, hummingbirds, Nayara Tented Camp",
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.cream, color: PALETTE.text, fontFamily: "var(--font-body)" }}>
      {/* ── BRAND NAVIGATION ── */}
      <BrandNavigation pageType="brand" hideCenterLabel />

      {/* SEO HEAD */}
      <Helmet>
        <title>Birdwatching in Costa Rica: Toucans, Quetzals & More Near Arenal | Nayara Resorts</title>
        <meta name="description" content="A comprehensive guide to birdwatching in Costa Rica's Arenal region. Meet the Toucans, Quetzals, Macaws, and Hummingbirds that define the canopy at Nayara Resorts." />
        <meta property="og:title" content="Birdwatching in Costa Rica: Toucans, Quetzals & More Near Arenal" />
        <meta property="og:description" content="Meet the iconic birds of the Arenal rainforest. From Keel-Billed Toucans to Resplendent Quetzals." />
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
          alt="Keel-billed Toucan perched in the Arenal rainforest canopy"
          className="absolute inset-0 w-full h-full object-cover object-top"
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
              WILDLIFE & NATURE
            </span>
            <span className="text-[10px] tracking-[0.2em] border px-2 py-0.5 rounded-full" style={{ color: `${PALETTE.muted}99`, borderColor: PALETTE.stone }}>
              Arenal
            </span>
            <span className="text-[10px] tracking-[0.2em] border px-2 py-0.5 rounded-full" style={{ color: `${PALETTE.muted}99`, borderColor: PALETTE.stone }}>
              Birdwatching
            </span>
          </div>

          <h1
            className="text-3xl md:text-[40px] lg:text-[46px] leading-[1.15] mb-5"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
          >
            Birdwatching in Costa Rica: The Best Birds to See Near Arenal Volcano
          </h1>
        </div>
      </motion.section>

      {/* ── AUTHOR / READING TIME BAND ── */}
      <BlogAuthorReadTime
        author="Albert Ghitis"
        authorRole="Editorial"
        date="September 10, 2024"
        wordCount={3000}
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
                "Costa Rica is home to six different species of Toucan, three of which inhabit the Arenal Rainforest surrounding Nayara's properties.",
                "Toucans are year-round residents that don't migrate — guests can see them any time of year, especially at dawn and dusk.",
                "The Arenal region sits at the intersection of two major bird migration routes, supporting over 900 species including the Resplendent Quetzal.",
                "Dedicated reforestation around Nayara Gardens, Springs, and Tented Camp has brought toucans back after decades of habitat loss.",
                "Over 25 species of hummingbirds inhabit Costa Rica, with many found in the Arenal region.",
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
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Why Arenal Volcano Is the Best Birdwatching Destination in Costa Rica
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>
              Costa Rica is a birdwatcher's paradise. With over 900 species of birds — more than the entire United States — the country offers some of the world's most spectacular avian encounters. The Arenal region, where Nayara Tented Camp is nestled, is particularly renowned for its incredible diversity of birds, from the iconic Resplendent Quetzal to the unmistakable Toucan.
            </p>
            <p>
              The Arenal region sits at the intersection of two major bird migration routes. Every year, millions of birds pass through Central America, and many stop in the Arenal rainforest to feed, rest, and breed. The elevation gradient — from lowland rainforest to cloud forest — creates multiple habitat zones, each with its own distinct bird community.
            </p>
            <p>
              The result is extraordinary diversity. In a single morning walk through the forest around Tented Camp, you might see 30 or more species. In a full day, experienced birders have recorded over 100 species. The best time for birdwatching is early morning, when birds are most active and vocal. Dawn chorus — the synchronized singing of multiple bird species — is one of nature's most magical experiences.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 2: TOUCANS — BIG SECTION (stone) ── */}
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
            Meeting the Toucans of the Arenal Rainforest
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>
              The Toucan is one of the most iconic and recognizable animals in the entire world, and travelers from around the globe visit Costa Rica to see them, alongside other iconic Costa Rican creatures like sloths, howler monkeys, the scarlet macaw, the red-eyed tree frog, and many others.
            </p>
            <p>
              But what some visitors don't know is that Costa Rica is home to six different species of Toucan, which are found in various locations across the country, and each has their own size, shape, colors, behaviors, and personalities. In the Arenal Rainforest, three species are found all around us: the Keel-Billed Toucan, the Chestnut-Mandibled Toucan, and the Collared Aracari.
            </p>
            <p>
              Toucans are omnivorous birds that thrive in hot climates, particularly in dense tropical forests at low elevations where they have access to plenty of food. Toucans are far more comfortable perching on tree branches than they are flying, and typically choose to hop or glide as they move, rather than spend extended time in the air, which makes these rich, dense forests an ideal habitat.
            </p>
            <p>
              A few decades ago, with deforestation sweeping across Costa Rica and many other Central American countries, all six species of Toucan found here were under severe threat due to habitat loss and dwindling food supplies. But with the conservation policies of the past half-century, these beautiful birds have begun to make a comeback.
            </p>
            <p>
              We can see this on a smaller scale right here around the Nayara properties in Arenal. Much of the land around Nayara Gardens, Nayara Springs, and Nayara Tented Camp had been turned to pastureland in the late 1900s, forcing the toucans elsewhere. But now, with dedicated reforestation efforts that have been naturally accelerated by the rich volcanic soil, a perfect climate for tree growth, and a rich ecosystem of pollinators, you can encounter toucans happily perched in the trees around all three resorts.
            </p>
          </div>

          {/* Sub-section: Common Traits */}
          <h3 className="text-xl md:text-2xl mt-8 mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Common Traits of the Arenal Toucans
          </h3>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>
              The most noticeable feature of all Toucans is their distinctive beak, which can be up to four times the size of their head, but that's not the only thing that sets these fascinating birds apart.
            </p>
            <p>
              Toucans are known for their strong family and social structures, often traveling in groups of between 6 and 20+ individuals and even engaging in playful behaviors like tossing fruit back and forth in a game of 'catch.' Toucan parents are attentive, mating monogamously and raising the chicks until they're capable of fending for themselves, which can take a while due to Toucans' comparatively awkward movements, which continue through adulthood.
            </p>
            <p>
              Oftentimes, Toucans are portrayed as elegant and majestic, due to their vibrant colors, but the reality is that within the bird world, toucans are rather loud, clumsy, hungry, and confrontational. For those of us who know these birds well, those traits add an endearing goofiness to their behavior.
            </p>
          </div>

          {/* Sub-section: How to See Them */}
          <h3 className="text-xl md:text-2xl mt-8 mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            How Can I See Toucans in Arenal?
          </h3>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>
              Toucans are all around us in the rainforest, so you can encounter them on almost any tour or experience you set out on with us. You can even encounter Toucans simply walking around your resort, and they've been known to perch right outside of the windows of our tents, rooms, and residences.
            </p>
            <p>
              Toucans can be encountered perched in the trees during the day or slumbering in groups, hiding from predators at night. Typically toucans are most active during dawn and dusk, so going for a walk or tour in the early morning or just before sunset can be an excellent time to spot these birds in their natural habitats.
            </p>
            <p>
              Unlike many of the species we welcome to the Arenal Rainforests, toucans don't migrate, making them year-round residents and neighbors. As a result, you can see them any time of year.
            </p>
          </div>

          {/* Sub-section: Why Colorful Beaks */}
          <h3 className="text-xl md:text-2xl mt-8 mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Why Do Toucans Have Such Colorful Beaks?
          </h3>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>
              The reason for the size and shape of the Toucan's bill is relatively apparent — it gives the toucan the ability to reach food far out on branches or deep in tree cavities, and the beak's serrated edges give them the versatility to eat everything from fruits, nuts, and seeds to other birds' eggs, insects, and even small reptiles.
            </p>
            <p>
              However, the reason for the vibrant colors of a toucan bill is less apparent. Some researchers theorize that the brightly-colored beak is used to attract mates or as a deterrent to possible predators (like predatory birds, large snakes, and forest cats). Toucans will often smack their beak against a tree branch when faced by a predator, and the colors might add a visual element to this display.
            </p>
          </div>

          {/* Sub-section: Three Species */}
          <h3 className="text-xl md:text-2xl mt-8 mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            The Keel-Billed Toucan
          </h3>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>
              The Keel-Billed Toucan is one of the most famous and recognizable toucans thanks to its multi-colored bill, which features a blend of just about every color in the rainbow. Keel-billed toucans are very sociable and can typically be seen grouped together on the branches of the trees. You'll know that these toucans are in the area thanks to their loud, croaking call, which can be heard from up to half a mile away.
            </p>
          </div>

          <h3 className="text-xl md:text-2xl mt-8 mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            The Chestnut-Mandibled Toucan
          </h3>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>
              Also known as the yellow-fronted Toucan, the Chestnut-Mandibled Toucan is the largest toucan found in Costa Rica, and has a distinctive two-colored bill that distinguishes it from the rainbow bill of the Keel-Billed Toucan. With its larger size, the Chestnut-Mandibled Toucan has an even more far-ranging diet than that of its cousins, adding small snakes and even young birds to its favorite foods. You can typically identify that these toucans are in the area thanks to their yelping "yo-YIP!" cry.
            </p>
          </div>

          <h3 className="text-xl md:text-2xl mt-8 mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            The Collared Aracari
          </h3>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>
              Aracaris look a little different than the toucans most are used to. However, they are from the same family and share many traits of their cousins, including their long beaks, their diverse diets, their social nature (traveling in groups of 6 to 15 individuals), and their preference for dense lowland forests.
            </p>
            <p>
              What sets the Collared Aracari apart from other Arenal toucans is its masterful scavenging of fruit. These birds have been spotted stretching out on a single foot, bending entirely backward, and even hanging upside down in pursuit of choice fruits, and if you're lucky, you might catch them in the act. The call of the Collared Aracari is also distinctive, combining both high-pitched squeaks and lower rattling calls.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 3: ESPRESSO DARK — Toucan Quote (espresso) ── */}
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
              "At a glance, toucans are majestic, but after getting to know them, you'll see that they're also awkward, goofy, and social, with fascinating personalities and squabbles and games that are incredible to watch. There's always more than meets the eye in the rainforest."
            </p>
          </blockquote>
        </div>
      </motion.section>

      {/* ── SECTION 4: RESPLENDENT QUETZAL (cream) ── */}
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
            The Resplendent Quetzal: Where to See Costa Rica's Rarest Bird
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>
              The Resplendent Quetzal is widely considered one of the most beautiful birds in the world. In Aztec mythology, the Quetzal was sacred, associated with the god Quetzalcoatl. Today, it appears on the flag of Guatemala and is the national bird of that country.
            </p>
            <p>
              The male Quetzal is unmistakable: brilliant emerald-green upperparts, a crimson breast and belly, and extraordinarily long tail feathers that can extend 24 inches beyond the body. The female is less colorful but equally elegant, with green upperparts and a golden-buff breast. Both sexes have a distinctive call: a series of whistles that sound like "kew-zal, kew-zal."
            </p>
            <p>
              Quetzals are found in cloud forest habitat at higher elevations (typically above 4,000 feet). They feed primarily on avocado-like fruits from wild avocado trees, and they are highly dependent on undisturbed forest. During breeding season (March to June), males perform elaborate display flights, diving steeply with their tail feathers streaming behind them.
            </p>
            <p>
              Seeing a Quetzal is considered a privilege among birders. If you are fortunate enough to encounter one, take a moment to simply observe. The experience of seeing such a magnificent bird in its natural habitat is unforgettable.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 5: MACAWS & PARROTS (stone) ── */}
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
            Macaws and Parrots in the Arenal Rainforest
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>
              The Arenal region is home to several species of macaws and parrots, including the Scarlet Macaw, the Great Green Macaw, and various parrot species. These large, colorful birds are highly vocal and often announce their presence before you see them. Their loud calls — a mix of squawks, screeches, and whistles — echo through the forest canopy.
            </p>
            <p>
              Macaws are long-lived birds (some live 50+ years) and often mate for life. They are highly intelligent and social, typically seen in pairs or small family groups. They feed on seeds, nuts, and fruit, and they play an important role in forest regeneration by dispersing seeds across the landscape.
            </p>
            <p>
              The Scarlet Macaw is particularly striking: brilliant red plumage with blue and yellow wings. The Great Green Macaw is predominantly green with red on the forehead and tail. Both species are impressive in flight, with wingspans that can exceed 3 feet.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 6: HUMMINGBIRDS (cream) ── */}
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
            Hummingbirds of Costa Rica: Species Found Near Nayara
          </h2>
          <div className="text-[15px] leading-[1.9] [&_p]:mb-6" style={{ color: PALETTE.muted }}>
            <p>
              Over 25 species of hummingbirds inhabit Costa Rica, and many can be found in the Arenal region. These tiny birds — some weighing less than a penny — are among the most remarkable creatures in nature. Their wings beat up to 80 times per second, allowing them to hover in place and even fly backwards. Their heart rate can exceed 1,000 beats per minute.
            </p>
            <p>
              Hummingbirds feed on nectar and must consume approximately half their body weight in sugar every day to fuel their metabolism. They are highly territorial and will aggressively defend feeding areas from other hummingbirds. Their iridescent plumage — which appears to change color depending on the angle of light — is one of nature's most beautiful displays.
            </p>
            <p>
              Common species in the Arenal region include the Violet Sabrewing, the Green Hermit, and the Rufous-tailed Hummingbird. The best way to observe hummingbirds is to sit quietly near flowering plants or near a hummingbird feeder (available at Tented Camp) and wait for them to approach.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 7: BIRDWATCHING TIPS (stone) ── */}
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
            Tips for Birdwatching at Nayara Arenal
          </h2>
          <ul className="space-y-5 text-[15px] leading-[1.9]" style={{ color: PALETTE.muted }}>
            <li className="flex gap-4">
              <span style={{ color: PALETTE.accent, fontWeight: 600, flexShrink: 0 }}>•</span>
              <span><strong>Start early:</strong> Early morning (5:30–8:00 AM) is the best time for birdwatching. Birds are most active and vocal during dawn chorus.</span>
            </li>
            <li className="flex gap-4">
              <span style={{ color: PALETTE.accent, fontWeight: 600, flexShrink: 0 }}>•</span>
              <span><strong>Move slowly and quietly:</strong> Sudden movements and loud noises will scare birds away. Wear neutral colors and avoid bright clothing.</span>
            </li>
            <li className="flex gap-4">
              <span style={{ color: PALETTE.accent, fontWeight: 600, flexShrink: 0 }}>•</span>
              <span><strong>Listen carefully:</strong> Many birds are easier to hear than to see. Learning bird calls will significantly improve your birdwatching success.</span>
            </li>
            <li className="flex gap-4">
              <span style={{ color: PALETTE.accent, fontWeight: 600, flexShrink: 0 }}>•</span>
              <span><strong>Bring binoculars:</strong> A good pair of binoculars is essential for birdwatching. They allow you to observe birds in detail without disturbing them.</span>
            </li>
            <li className="flex gap-4">
              <span style={{ color: PALETTE.accent, fontWeight: 600, flexShrink: 0 }}>•</span>
              <span><strong>Use a field guide:</strong> A bird identification guide specific to Costa Rica will help you identify species. Our guides at Tented Camp are experts and can help you identify birds you encounter.</span>
            </li>
            <li className="flex gap-4">
              <span style={{ color: PALETTE.accent, fontWeight: 600, flexShrink: 0 }}>•</span>
              <span><strong>Be patient:</strong> Birdwatching requires patience. Sit quietly and wait for birds to come to you. The reward is worth the wait.</span>
            </li>
          </ul>
        </div>
      </motion.section>

      {/* ── SECTION 8: CLOSING (cream) ── */}
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
              The birds of the Arenal rainforest are not just beautiful — they are indicators of forest health. The presence of species like the Quetzal and the Macaw tells us that the ecosystem is thriving. By protecting the forest, we protect the birds that depend on it.
            </p>
            <p>
              At Nayara, we are committed to forest conservation and sustainable birdwatching. Our guides are trained to observe birds responsibly, minimizing disturbance to nesting birds and sensitive species. When you birdwatch with us, you are not just experiencing nature — you are supporting conservation efforts that protect these magnificent creatures for generations to come.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── SOURCES & FURTHER READING (stone, flat list) ── */}
      <section style={{ backgroundColor: PALETTE.stone }}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <p className="uppercase tracking-[0.3em] text-[11px] mb-4 text-center" style={{ fontWeight: 600, color: PALETTE.accent }}>
            References
          </p>
          <h2 className="text-2xl md:text-[30px] leading-snug mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Sources & Further Reading
          </h2>
          <ul className="space-y-3">
            {[
              { label: "Cornell Lab of Ornithology — Birds of Costa Rica", href: "https://www.birds.cornell.edu" },
              { label: "Nayara Resorts — Meeting the Toucans of Arenal Rainforest", href: "/blog/birdwatching" },
              { label: "BirdLife International — Costa Rica IBA Directory", href: "https://www.birdlife.org" },
              { label: "National Geographic — Resplendent Quetzal", href: "https://www.nationalgeographic.com/animals/birds/facts/resplendent-quetzal" },
              { label: "SINAC Costa Rica — Protected Areas & Biodiversity", href: "https://www.sinac.go.cr" },
              { label: "Audubon Society — Neotropical Bird Conservation", href: "https://www.audubon.org" },
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
