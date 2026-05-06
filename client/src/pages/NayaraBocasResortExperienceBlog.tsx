/**
 * NAYARA BOCAS RESORT EXPERIENCE BLOG
 * Combined editorial blog about Nayara Bocas del Toro resort features
 * Covers: overwater villas, aerial beach, treehouses, dining, activities
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
  divider: "#D4E8F0",
};

export default function NayaraBocasResortExperienceBlog() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen" style={{ backgroundColor: BOCAS_PALETTE.background }}>
      <EnhancedArticleSchema
        image="https://nayararesorts.manus.space"
        headline="NayaraBocasResortExperience | Nayara Resorts"
        description="Discover insights about nayarabocasresortexperience at Nayara Resorts."
        author={{ name: "Nayara Resorts", expertise: ["Luxury Travel", "Sustainable Tourism"] }}
        datePublished="2024-01-01"
        url="https://nayararesorts.manus.space/blog/nayarabocasresortexperience"
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
            Resort Experience
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "white" }}
          >
            Nayara Bocas del Toro: Your Private Island Paradise
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400, color: "rgba(255,255,255,0.85)" }}
          >
            Discover overwater villas, luxury treehouses, and the world's first aerial beach
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
              Nestled in the heart of Bocas del Toro, affectionately dubbed the "Galapagos of the Caribbean," Nayara Bocas del Toro invites you to a world where land and sea converge in a mesmerizing display of natural beauty. Here, life unfolds in a colorful celebration every day.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              We've crafted a private island paradise of treehouses and overwater villas that immerses you in the heart of the archipelago's unspoiled tropics and rugged oceanic beauty. Prepare to embark on a journey where every moment is a testament to the breathtaking allure of Bocas del Toro.
            </p>
          </motion.div>

          {/* Section Divider */}
          <div className="my-12" style={{ borderTop: `2px solid ${BOCAS_PALETTE.divider}` }} />

          {/* Sunrise Over Sea */}
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
              Sunrise Over Sea
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              As the first light of dawn gently filters through the curtains of your overwater villa, you awaken to the soft lapping of waves of the Caribbean sea below. Stepping out onto the spacious deck, you're greeted by the refreshing embrace of the cool waters of your private plunge pool. With a freshly brewed cup of coffee in hand, you settle into the tranquil morning, watching the playful dance of fish just beneath the surface.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              As the sun begins to climb over the archipelago, its golden rays cast a glow upon the clear waters. A sudden stir in the water catches your attention, and you're delighted to witness a majestic school of eagle rays soaring gracefully into view. With your partner by your side, you embark on a morning paddleboard excursion, tracing the edges of the island's coastline, and you find yourselves greeted by a pod of curious dolphins.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              In this moment of serenity and connection with nature, you're reminded of the simple joys of life and the beauty that surrounds you in the heart of the Caribbean.
            </p>
          </motion.div>

          {/* Section Divider */}
          <div className="my-12" style={{ borderTop: `2px solid ${BOCAS_PALETTE.divider}` }} />

          {/* Adventure & Activities */}
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
              Answering the Call to Adventure
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              Welcome to this watersports Mecca, where adventure beckons at every turn. Snorkel coral reefs teeming with life, surf the cresting waves that crash upon the shores, or embark on immersive nature tours. Join a bioluminescence tour under the cloak of night, marveling at the mystical glow that illuminates the waters below. Set sail on a boat tour to Monkey Islands and Starfish Bays, or venture to Red Frog Beach and Bat Caves where hidden habitats await your discovery.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              For those seeking an adrenaline rush, ride the waves at Isla Caranero, dive into the depths of the sea exploring ancient shipwrecks, or explore the main islands by Ebike or ATV. Whatever your preference, Bocas del Toro is an outdoor wonderland available to explore in any way that you desire.
            </p>
          </motion.div>

          {/* Section Divider */}
          <div className="my-12" style={{ borderTop: `2px solid ${BOCAS_PALETTE.divider}` }} />

          {/* Dining Experience */}
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
              The Elegant Elephant House & Poolside Coral Café
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              At Nayara Bocas del Toro, hyperlocal ingredients are elevated by global culinary expertise to create a flavor experience unlike any other. Our philosophy revolves around taking the freshest ingredients from the surrounding area and applying skills refined from around the world to offer a dining experience that is both unique and unforgettable.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              Step into the refined elegance of the majestic Elephant House, a 100-year-old structure transported from Bali, Indonesia. You'll dine amidst timeless beauty, with the moon casting its gentle glow upon the water as stingrays glide gracefully by. Savor each bite of succulent lobster paired with the perfect chilled white wine, as you immerse yourself in an atmosphere of unparalleled romance and charm.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              For a more casual dining experience, head to the poolside Coral Café, where the cheerful alfresco setting invites you to linger over leisurely breakfasts and lunches. And for those moments when you prefer to dine in the privacy of your own villa, room service is available for all meals and drinks.
            </p>
          </motion.div>

          {/* Section Divider */}
          <div className="my-12" style={{ borderTop: `2px solid ${BOCAS_PALETTE.divider}` }} />

          {/* Twilight in the Trees */}
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
              Twilight in the Trees: The Elora Hardy Treehouses
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              The ultimate experience awaits among the treetops in our stunning treehouses, designed by IBUKU, the renowned Bali-based design studio led by Elora Hardy. These architectural marvels are more than just accommodations; they are gateways to another world, where whimsical designs fuse Balinese and Panamanian aesthetics in a groundbreaking display of ingenuity.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              Built from locally harvested bamboo and hardwoods sourced from the depths of the Panama Canal, our treehouses stand at a lofty height of fifty feet above the forest floor. From this vantage point, you'll enjoy sweeping views of the surrounding forest, mangroves, and ocean. As twilight descends, the magic of the forest comes alive. Watch the sunset from your elevated perch as vibrant colors paint the sky beyond the tropical canopy.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              Retreat to your treetop sanctuary knowing that 24-hour room service awaits to cater to your every need. Here, among the trees, you'll find solace, serenity, and a connection to the pristine beauty of the Caribbean wilderness.
            </p>
          </motion.div>

          {/* Section Divider */}
          <div className="my-12" style={{ borderTop: `2px solid ${BOCAS_PALETTE.divider}` }} />

          {/* Aerial Beach */}
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
              The World's First Aerial Beach: Kupu Kupu Beach
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              In order to capture the magic of a true Caribbean beach experience, we created something entirely new: the world's first aerial beach built on stilts over the water. The island did not have a beach, and a man-made beach built on the shoreline would have disrupted the mangrove and ocean floor. The solution was to build a beach on stilts over the water,something no one had done before.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              We named our aerial beach Kupu Kupu Beach, approximately ninety feet long by twenty feet wide. The Tipsy Bar provides seating for eight, while our beach chairs accommodate twenty. There are four large palm trees on the beach that appear to be growing out of the sand like on a real beach, but are carefully monitored and nurtured to remain healthy. The cement surface includes ninety separate drains to keep the sand dry, meaning Kupu Kupu Beach has not disrupted the surrounding environment.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              Kick back oceanside with a refreshing cocktail, nap in a pleasant breeze, and then take a dip in the eternally warm Caribbean. It's a vision of what life can be.
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
              Experiencing Nayara Bocas del Toro from any perspective is a beautiful experience, one that brings you closer to nature, yourself, and true relaxation and presence.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer textColor="#FFFFFF" />
    </div>
  );
}
