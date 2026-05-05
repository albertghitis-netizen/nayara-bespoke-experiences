/**
 * BOCAS CONDÉ NAST TRAVELER AWARD BLOG
 * Editorial blog celebrating Nayara Bocas del Toro winning Condé Nast Traveler award
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

export default function BocasCondeNastAwardBlog() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen" style={{ backgroundColor: BOCAS_PALETTE.background }}>
      <EnhancedArticleSchema
        image="https://nayararesorts.manus.space"
        headline="BocasCondeNastAward | Nayara Resorts"
        description="Discover insights about bocascondenastaward at Nayara Resorts."
        author={{ name: "Nayara Resorts", expertise: ["Luxury Travel", "Sustainable Tourism"] }}
        datePublished="2024-01-01"
        url="https://nayararesorts.manus.space/blog/bocascondenastaward"
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
            Award Recognition
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "white" }}
          >
            Why Condé Nast Traveler Named Nayara Bocas del Toro #1
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400, color: "rgba(255,255,255,0.85)" }}
          >
            Celebrating our 2025 award as the top luxury resort in Central America
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
              We are thrilled to announce that Nayara Bocas del Toro has been recognized by Condé Nast Traveler as the #1 luxury resort destination in Central America for 2025. This prestigious award reflects our unwavering commitment to creating unforgettable experiences that seamlessly blend luxury with nature.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              In a region known for world-class destinations, this recognition stands as a testament to what we've built on our private island: a sanctuary where architectural innovation, environmental stewardship, and unparalleled hospitality converge.
            </p>
          </motion.div>

          {/* Section Divider */}
          <div className="my-12" style={{ borderTop: `2px solid ${BOCAS_PALETTE.divider}` }} />

          {/* Why This Award Matters */}
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
              Why This Award Matters
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              Condé Nast Traveler's recognition is not merely about luxury amenities or stunning views—though we certainly offer both. This award acknowledges our holistic approach to hospitality: the way we honor the natural environment, celebrate local culture, and create moments of genuine connection for our guests.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              From our solar-powered treehouses designed by renowned architect Elora Hardy to our world-first aerial beach built on stilts over the water, every element of Nayara Bocas del Toro has been thoughtfully conceived to minimize environmental impact while maximizing guest experience.
            </p>
          </motion.div>

          {/* Section Divider */}
          <div className="my-12" style={{ borderTop: `2px solid ${BOCAS_PALETTE.divider}` }} />

          {/* What Sets Us Apart */}
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
              What Sets Us Apart
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              <strong style={{ color: BOCAS_PALETTE.primary }}>Architectural Innovation:</strong> Our resort features structures that have never been built before. The treehouses showcase Balinese design principles adapted for the Caribbean, while the aerial beach represents a world-first engineering achievement.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              <strong style={{ color: BOCAS_PALETTE.primary }}>Environmental Stewardship:</strong> Every decision—from solar power generation to rainwater harvesting to environmentally safe wastewater treatment—reflects our commitment to preserving the "Galapagos of the Caribbean" for future generations.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              <strong style={{ color: BOCAS_PALETTE.primary }}>Culinary Excellence:</strong> Our dining experiences elevate hyperlocal ingredients through global culinary expertise. From the 100-year-old Elephant House restaurant transported from Bali to the casual Coral Café, every meal is a celebration of place and craft.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              <strong style={{ color: BOCAS_PALETTE.primary }}>Authentic Experiences:</strong> Whether snorkeling with dolphins, exploring bioluminescent waters, or simply watching the sunset from your overwater villa, every moment at Nayara Bocas del Toro is designed to deepen your connection with nature and yourself.
            </p>
          </motion.div>

          {/* Section Divider */}
          <div className="my-12" style={{ borderTop: `2px solid ${BOCAS_PALETTE.divider}` }} />

          {/* Looking Forward */}
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
              Looking Forward
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              This Condé Nast Traveler award is not an endpoint but a milestone in our ongoing journey. We remain committed to pushing the boundaries of what luxury hospitality can be—a place where innovation serves nature, where comfort never compromises conscience, and where every guest leaves transformed.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: BOCAS_PALETTE.lightText }}
            >
              To our guests, partners, and the Condé Nast Traveler team: thank you for recognizing what we've built here in Bocas del Toro. We invite you to experience it for yourself—to discover why this private island paradise has captured the hearts of discerning travelers from around the world.
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
              Experience the award-winning luxury of Nayara Bocas del Toro — where innovation, nature, and hospitality converge in perfect harmony.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer textColor="#FFFFFF" propertyName="Bocas del Toro" />
    </div>
  );
}
