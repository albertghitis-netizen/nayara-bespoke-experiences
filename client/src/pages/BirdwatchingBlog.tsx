/*
 * BIRDWATCHING IN COSTA RICA
 * Definitive editorial blog about birdwatching in Arenal region
 * Covers Toucans, Quetzals, Macaws, and other iconic species
 */

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { EnhancedArticleSchema } from "@/components/SEOSchemaEnhanced";

const TENTED_PALETTE = {
  primary: "#8B6F47",
  secondary: "#A0826D",
  accent: "#D4AF37",
  text: "#2C2416",
  lightText: "#5A4A3A",
  background: "#F5F1ED",
  divider: "#E8DFD5",
};

export default function BirdwatchingBlog() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen" style={{ backgroundColor: TENTED_PALETTE.background }}>
      <EnhancedArticleSchema
        image="https://nayararesorts.manus.space"
        headline="Birdwatching | Nayara Resorts"
        description="Discover insights about birdwatching at Nayara Resorts."
        author={{ name: "Nayara Resorts", expertise: ["Luxury Travel", "Sustainable Tourism"] }}
        datePublished="2024-01-01"
        url="https://nayararesorts.manus.space/blog/birdwatching"
      />
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "linear-gradient(135deg, #8B6F47 0%, #A0826D 100%)",
          }}
        />
        <div className="absolute inset-0 opacity-20" style={{ backgroundColor: "#2C2416" }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 text-center px-6 md:px-12 max-w-4xl"
        >
          <p
            className="text-[11px] tracking-[0.3em] mb-6 uppercase"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: TENTED_PALETTE.accent }}
          >
            Wildlife & Nature
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "white" }}
          >
            Birdwatching in Costa Rica
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400, color: "rgba(255,255,255,0.85)" }}
          >
            A guide to the most iconic birds of the Arenal rainforest. From Toucans to Quetzals, discover the species that define the canopy.
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
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Costa Rica is a birdwatcher's paradise. With over 900 species of birds—more than the entire United States—the country offers some of the world's most spectacular avian encounters. The Arenal region, where Nayara Tented Camp is nestled, is particularly renowned for its incredible diversity of birds, from the iconic Resplendent Quetzal to the unmistakable Toucan.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Whether you are an experienced birder or simply curious about the wildlife around you, understanding the birds of the Arenal rainforest will deepen your connection to this extraordinary ecosystem. This guide introduces you to the species you are most likely to encounter during your stay at Tented Camp.
            </p>
          </motion.div>

          {/* Section 1: Why Arenal? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 pb-12"
            style={{ borderBottom: `1px solid ${TENTED_PALETTE.divider}` }}
          >
            <h2
              className="text-2xl md:text-3xl mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: TENTED_PALETTE.primary }}
            >
              Why Arenal is a Birdwatcher's Dream
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              The Arenal region sits at the intersection of two major bird migration routes. Every year, millions of birds pass through Central America, and many stop in the Arenal rainforest to feed, rest, and breed. The elevation gradient—from lowland rainforest to cloud forest—creates multiple habitat zones, each with its own distinct bird community.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              The result is extraordinary diversity. In a single morning walk through the forest around Tented Camp, you might see 30 or more species. In a full day, experienced birders have recorded over 100 species. The best time for birdwatching is early morning, when birds are most active and vocal. Dawn chorus—the synchronized singing of multiple bird species—is one of nature's most magical experiences.
            </p>
          </motion.div>

          {/* Section 2: Toucans */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 pb-12"
            style={{ borderBottom: `1px solid ${TENTED_PALETTE.divider}` }}
          >
            <h2
              className="text-2xl md:text-3xl mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: TENTED_PALETTE.primary }}
            >
              Meeting the Toucans: Iconic Birds of the Canopy
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              If there is one bird that defines Costa Rica, it is the Toucan. With their massive, colorful bills and striking plumage, Toucans are impossible to miss. Three species inhabit the Arenal region: the Keel-billed Toucan (the most iconic), the Chestnut-mandibled Toucan, and the Emerald Toucanet.
            </p>

            <h3
              className="text-lg md:text-xl mb-3 mt-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: TENTED_PALETTE.primary }}
            >
              The Keel-billed Toucan: The Rainforest's Signature
            </h3>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              The Keel-billed Toucan is the most recognizable bird in the Arenal region. Its massive bill—which can be up to one-third the length of its entire body—is bright yellow with a red tip and a blue base. The bird's body is predominantly black, with a bright yellow face and throat. Despite the enormous bill, it is surprisingly light, composed of hollow struts covered with thin plates of keratin (the same material as human fingernails).
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Toucans are highly social birds, often seen in small flocks moving through the canopy. They are loud, with a distinctive croaking call that sounds like "tuck-tuck-tuck." They feed primarily on fruit, particularly from fig trees, and play an important role in seed dispersal throughout the forest. During breeding season, they nest in tree cavities, often using holes abandoned by woodpeckers.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              The best time to see Toucans is early morning or late afternoon, when they are most active. Listen for their distinctive calls echoing through the forest canopy. If you hear them but cannot see them, look up—Toucans often perch high in the tallest trees, silhouetted against the sky.
            </p>
          </motion.div>

          {/* Section 3: The Resplendent Quetzal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 pb-12"
            style={{ borderBottom: `1px solid ${TENTED_PALETTE.divider}` }}
          >
            <h2
              className="text-2xl md:text-3xl mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: TENTED_PALETTE.primary }}
            >
              The Resplendent Quetzal: A Bird of Legend
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              The Resplendent Quetzal is widely considered one of the most beautiful birds in the world. In Aztec mythology, the Quetzal was sacred, associated with the god Quetzalcoatl. Today, it appears on the flag of Guatemala and is the national bird of that country.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              The male Quetzal is unmistakable: brilliant emerald-green upperparts, a crimson breast and belly, and extraordinarily long tail feathers that can extend 24 inches beyond the body. The female is less colorful but equally elegant, with green upperparts and a golden-buff breast. Both sexes have a distinctive call: a series of whistles that sound like "kew-zal, kew-zal."
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Quetzals are found in cloud forest habitat at higher elevations (typically above 4,000 feet). They feed primarily on avocado-like fruits from wild avocado trees, and they are highly dependent on undisturbed forest. During breeding season (March to June), males perform elaborate display flights, diving steeply with their tail feathers streaming behind them.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Seeing a Quetzal is considered a privilege among birders. If you are fortunate enough to encounter one, take a moment to simply observe. The experience of seeing such a magnificent bird in its natural habitat is unforgettable.
            </p>
          </motion.div>

          {/* Section 4: Macaws and Parrots */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 pb-12"
            style={{ borderBottom: `1px solid ${TENTED_PALETTE.divider}` }}
          >
            <h2
              className="text-2xl md:text-3xl mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: TENTED_PALETTE.primary }}
            >
              Macaws and Parrots: The Rainforest's Loud Chorus
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              The Arenal region is home to several species of macaws and parrots, including the Scarlet Macaw, the Great Green Macaw, and various parrot species. These large, colorful birds are highly vocal and often announce their presence before you see them. Their loud calls—a mix of squawks, screeches, and whistles—echo through the forest canopy.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Macaws are long-lived birds (some live 50+ years) and often mate for life. They are highly intelligent and social, typically seen in pairs or small family groups. They feed on seeds, nuts, and fruit, and they play an important role in forest regeneration by dispersing seeds across the landscape.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              The Scarlet Macaw is particularly striking: brilliant red plumage with blue and yellow wings. The Great Green Macaw is predominantly green with red on the forehead and tail. Both species are impressive in flight, with wingspans that can exceed 3 feet.
            </p>
          </motion.div>

          {/* Section 5: Hummingbirds */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 pb-12"
            style={{ borderBottom: `1px solid ${TENTED_PALETTE.divider}` }}
          >
            <h2
              className="text-2xl md:text-3xl mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: TENTED_PALETTE.primary }}
            >
              Hummingbirds: Jewels of the Forest
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Over 25 species of hummingbirds inhabit Costa Rica, and many can be found in the Arenal region. These tiny birds—some weighing less than a penny—are among the most remarkable creatures in nature. Their wings beat up to 80 times per second, allowing them to hover in place and even fly backwards. Their heart rate can exceed 1,000 beats per minute.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Hummingbirds feed on nectar and must consume approximately half their body weight in sugar every day to fuel their metabolism. They are highly territorial and will aggressively defend feeding areas from other hummingbirds. Their iridescent plumage—which appears to change color depending on the angle of light—is one of nature's most beautiful displays.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Common species in the Arenal region include the Violet Sabrewing, the Green Hermit, and the Rufous-tailed Hummingbird. The best way to observe hummingbirds is to sit quietly near flowering plants or near a hummingbird feeder (available at Tented Camp) and wait for them to approach.
            </p>
          </motion.div>

          {/* Section 6: Tips for Birdwatching */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 pb-12"
            style={{ borderBottom: `1px solid ${TENTED_PALETTE.divider}` }}
          >
            <h2
              className="text-2xl md:text-3xl mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: TENTED_PALETTE.primary }}
            >
              Tips for Successful Birdwatching
            </h2>
            <ul
              className="space-y-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              <li className="flex gap-4">
                <span style={{ color: TENTED_PALETTE.accent, fontWeight: 600 }}>•</span>
                <span><strong>Start early:</strong> Early morning (5:30–8:00 AM) is the best time for birdwatching. Birds are most active and vocal during dawn chorus.</span>
              </li>
              <li className="flex gap-4">
                <span style={{ color: TENTED_PALETTE.accent, fontWeight: 600 }}>•</span>
                <span><strong>Move slowly and quietly:</strong> Sudden movements and loud noises will scare birds away. Wear neutral colors and avoid bright clothing.</span>
              </li>
              <li className="flex gap-4">
                <span style={{ color: TENTED_PALETTE.accent, fontWeight: 600 }}>•</span>
                <span><strong>Listen carefully:</strong> Many birds are easier to hear than to see. Learning bird calls will significantly improve your birdwatching success.</span>
              </li>
              <li className="flex gap-4">
                <span style={{ color: TENTED_PALETTE.accent, fontWeight: 600 }}>•</span>
                <span><strong>Bring binoculars:</strong> A good pair of binoculars is essential for birdwatching. They allow you to observe birds in detail without disturbing them.</span>
              </li>
              <li className="flex gap-4">
                <span style={{ color: TENTED_PALETTE.accent, fontWeight: 600 }}>•</span>
                <span><strong>Use a field guide:</strong> A bird identification guide specific to Costa Rica will help you identify species. Our guides at Tented Camp are experts and can help you identify birds you encounter.</span>
              </li>
              <li className="flex gap-4">
                <span style={{ color: TENTED_PALETTE.accent, fontWeight: 600 }}>•</span>
                <span><strong>Be patient:</strong> Birdwatching requires patience. Sit quietly and wait for birds to come to you. The reward is worth the wait.</span>
              </li>
            </ul>
          </motion.div>

          {/* Closing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              The birds of the Arenal rainforest are not just beautiful—they are indicators of forest health. The presence of species like the Quetzal and the Macaw tells us that the ecosystem is thriving. By protecting the forest, we protect the birds that depend on it.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              At Nayara Tented Camp, we are committed to forest conservation and sustainable birdwatching. Our guides are trained to observe birds responsibly, minimizing disturbance to nesting birds and sensitive species. When you birdwatch with us, you are not just experiencing nature—you are supporting conservation efforts that protect these magnificent creatures for generations to come.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 pt-12"
            style={{ borderTop: `1px solid ${TENTED_PALETTE.divider}` }}
          >
            <p
              className="text-[14px] tracking-[0.08em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: TENTED_PALETTE.primary }}
            >
              Experience It
            </p>
            <h3
              className="text-xl md:text-2xl mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: TENTED_PALETTE.text }}
            >
              Join Our Guided Birdwatching Tours
            </h3>
            <p
              className="text-[15px] leading-[1.7] mb-6"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Our expert guides lead early morning birdwatching tours through the rainforest canopy. Whether you are a seasoned birder or a curious beginner, our guides will help you discover the incredible avian diversity of the Arenal region.
            </p>
            <a
              href="/curated-excursions"
              className="inline-block px-8 py-3 rounded-full transition-all duration-300 hover:translate-y-[-2px] text-[13px] tracking-[0.06em] uppercase"
              style={{
                backgroundColor: TENTED_PALETTE.primary,
                color: "white",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
              }}
            >
              Explore Our Experiences
            </a>
          </motion.div>
        </div>
      </section>

      {/* Sources & Further Reading */}
      <section className="py-20 px-6 md:px-10 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-8" style={{ fontFamily: "var(--font-display)" }}>
            Sources & Further Reading
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              For more information about the topics covered in this article, we recommend exploring the following resources:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Nayara Resorts official sustainability report</li>
              <li>Local conservation organizations in Costa Rica, Chile, Panama, and Easter Island</li>
              <li>UNESCO World Heritage Site documentation</li>
              <li>Academic research on tropical ecosystems and cultural preservation</li>
              <li>Industry publications on luxury sustainable tourism</li>
            </ul>
            <p className="text-gray-600 text-sm mt-6 italic">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>
      <Footer textColor="#FFFFFF" />
    </div>
  );
}
