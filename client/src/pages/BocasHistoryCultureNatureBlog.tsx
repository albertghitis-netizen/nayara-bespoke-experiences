/**
 * BOCAS HISTORY, CULTURE & NATURE BLOG
 * Editorial blog about Bocas del Toro destination - 5 interesting facts
 * Uses Bocas teal/cyan color palette
 */

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { EnhancedArticleSchema } from "@/components/SEOSchemaEnhanced";
import BrandNavigation from "@/components/BrandNavigation";

const BOCAS_PALETTE = {
  primary: "#0B5563",
  secondary: "#1B7A8F",
  accent: "#4DB8D0",
  text: "#0A3A45",
  lightText: "#2C5A6A",
  background: "#F0F8FA",
};

export default function BocasHistoryCultureNatureBlog() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen" style={{ backgroundColor: BOCAS_PALETTE.background }}>
      <EnhancedArticleSchema
        image="https://nayararesorts.manus.space"
        headline="BocasHistoryCultureNature | Nayara Resorts"
        description="Discover insights about bocashistoryculturenature at Nayara Resorts."
        author={{ name: "Nayara Resorts", expertise: ["Luxury Travel", "Sustainable Tourism"] }}
        datePublished="2024-01-01"
        url="https://nayararesorts.manus.space/blog/bocashistoryculturenature"
      />
      <BrandNavigation pageType="brand" hideCenterLabel />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "linear-gradient(135deg, #0B5563 0%, #1B7A8F 100%)",
          }}
        />
        <div className="absolute inset-0 opacity-20" style={{ backgroundColor: "#0A3A45" }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 text-center px-6 md:px-12 max-w-4xl"
        >
          <p
            className="text-[11px] tracking-[0.3em] mb-6 uppercase"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: BOCAS_PALETTE.accent }}
          >
            Destination Guide
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "white" }}
          >
            Bocas del Toro Panama: History, Culture, and Nature of the Archipelago
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400, color: "rgba(255,255,255,0.85)" }}
          >
            Five fascinating insights into the Galapagos of the Caribbean
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              Bocas del Toro has long captivated the imaginations of explorers. In 1502, Christopher Columbus arrived on his final voyage to the Americas, anchoring his ships in the calm waters that are now known as Bahía Almirante. With its equatorial location, sheltered anchorages, and abundant resources, Bocas quickly became a key stop for early explorers navigating between South and Central America.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              Today, the same postcard-worthy Caribbean isles and crystalline bays remain remarkably untouched. Bocas feels timeless, with its natural rhythms intact and its coastlines free from overdevelopment. For travelers seeking something more authentic, it's an off-the-beaten-path escape into unfiltered beauty.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              Beneath the turquoise waters and laid-back rhythms lies a destination full of history, cultural texture, and natural wonder. Here are five unexpected insights into this singular corner of the Caribbean.
            </p>
          </motion.div>

          {/* Section Divider */}

          {/* Fact 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: BOCAS_PALETTE.primary }}
            >
              Bocas del Toro as a Historic Gateway to the Americas
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              Following Columbus' arrival, Bocas del Toro played an essential role in the colonial trade networks of Spain and Portugal. Protected from hurricanes and rich in natural resources, it offered a safe harbor to ships in need of repairs or resupply. Its proximity to the eventual Panama Canal only enhanced its relevance, and centuries later, it would again emerge as a pivotal node, this time in the banana trade.
            </p>
          </motion.div>

          {/* Fact 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: BOCAS_PALETTE.primary }}
            >
              The Banana Trade and Its Legacy in Bocas del Toro
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              In the early 20th century, Bocas del Toro became the epicenter of Chiquita's global banana trade. With the opening of the Panama Canal in 1914, exports surged, and Bocas' economy boomed. Vast plantations lined the coast, and ships departed daily for the U.S. and Europe. Though the era has passed, its legacy is still visible in the colonial-era architecture and the rhythmic hum of Bocas Town. Wooden clapboard houses painted in tropical hues now house cafés, boutiques, and galleries, blending the past with a slow, Caribbean present.
            </p>
          </motion.div>

          {/* Fact 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: BOCAS_PALETTE.primary }}
            >
              Indigenous and Afro Caribbean Cultures of Bocas del Toro
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              Bocas is one of Panama's most culturally rich destinations. Afro-Caribbean communities on Bastimentos trace their roots to Jamaican laborers who arrived generations ago, bringing with them Creole traditions and language. Nearby, the Ngäbe-Buglé people continue to preserve their indigenous customs. Walk through Bocas Town and you'll hear Spanish, Creole English, indigenous dialects, and Mandarin,a vibrant blend of influences that shape the region's food, music, and way of life.
            </p>
          </motion.div>

          {/* Fact 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: BOCAS_PALETTE.primary }}
            >
              Wildlife and Biodiversity in the Bocas del Toro Archipelago
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              This is a place where biodiversity thrives. Bocas del Toro spans dozens of islands, hidden beaches, coral reefs, and marine parks teeming with life. Snorkelers and divers can explore underwater gardens that are home to starfish, sea turtles, stingrays, and seahorses. On land, the jungle shelters pygmy sloths, toucans, red frogs, and countless bird species. Whether you're gliding through mangroves or hiking through rainforest, Bocas offers a front-row seat to some of the Caribbean's richest ecosystems.
            </p>
          </motion.div>

          {/* Fact 5 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: BOCAS_PALETTE.primary }}
            >
              Surfing, Snorkeling, and Solitude in Bocas del Toro
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              While Bocas is known for its calm lagoons and peaceful inlets, it's also a destination for surfers chasing reef breaks. During winter and early spring, storms in the Caribbean produce powerful swells that hit Bocas' reefs just right. Surf spots like Playa Paunch and Bluff Beach draw those seeking waves off the beaten path. And when the waves settle, the beaches remain,untouched, often empty, and impossibly beautiful.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-lg"
            style={{ backgroundColor: BOCAS_PALETTE.accent, opacity: 0.1 }}
          >
            <p
              className="text-center text-lg"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.primary, fontWeight: 600 }}
            >
              Discover the magic of Bocas del Toro , where history, culture, and untamed nature converge in perfect harmony.
            </p>
          </motion.div>
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
        { slug: "/blog/bocas-operations", title: "How Nayara Built an Off-Grid Resort on a Private Island", pillar: "Operations" },
        { slug: "/blog/arenal-bocas-wildlife", title: "Wildlife Conservation in Arenal and Bocas del Toro", pillar: "Conservation" },
        { slug: "/blog/rooted-in-community", title: "Rooted in Community", pillar: "Culture" },
            ].map((article) => (
              <a key={article.slug} href={article.slug} className="group cursor-pointer">
                <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontWeight: 600, color: "#8B6914" }}>{article.pillar}</p>
                <h3 className="text-lg group-hover:opacity-70 transition-opacity" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#3B2B26" }}>{article.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer textColor="#FFFFFF" propertyName="Bocas del Toro" />
    </div>
  );
}
