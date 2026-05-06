/**
 * NAYARA BY NIGHT BLOG
 * Editorial blog about the night sky and nocturnal experiences at Nayara resorts
 * Uses black/dark sky color palette (from Brand Wellness framework)
 */

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { EnhancedArticleSchema } from "@/components/SEOSchemaEnhanced";
import BrandNavigation from "@/components/BrandNavigation";

const NIGHT_PALETTE = {
  primary: "#0A0E27",
  secondary: "#1A1F3A",
  accent: "#FFD700",
  text: "#E8E8E8",
  lightText: "#B8B8B8",
  background: "#0F1219",
  divider: "#2A2F42",
};

export default function NayaraByNightBlog() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen" style={{ backgroundColor: NIGHT_PALETTE.background }}>
      <EnhancedArticleSchema
        image="https://nayararesorts.manus.space"
        headline="NayaraByNight | Nayara Resorts"
        description="Discover insights about nayarabynight at Nayara Resorts."
        author={{ name: "Nayara Resorts", expertise: ["Luxury Travel", "Sustainable Tourism"] }}
        datePublished="2024-01-01"
        url="https://nayararesorts.manus.space/blog/nayarabynight"
      />
      <BrandNavigation pageType="brand" hideCenterLabel />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "linear-gradient(135deg, #0A0E27 0%, #1A1F3A 100%)",
          }}
        />
        <div className="absolute inset-0 opacity-20" style={{ backgroundColor: "#000000" }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 text-center px-6 md:px-12 max-w-4xl"
        >
          <p
            className="text-[11px] tracking-[0.3em] mb-6 uppercase"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: NIGHT_PALETTE.accent }}
          >
            Nocturnal Experiences
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "white" }}
          >
            Nayara by Night: Of Moon and Stars
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400, color: "rgba(255,255,255,0.85)" }}
          >
            Discover the magic of darkness and the celestial wonders above
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
              style={{ fontFamily: "var(--font-body)", color: NIGHT_PALETTE.lightText }}
            >
              When the sun sets over Nayara's pristine landscapes, a different world awakens. The night sky transforms into a canvas of infinite possibility,a realm where the moon casts its silver glow and stars tell stories written across millennia. At Nayara resorts, darkness is not something to fear or avoid, but rather an invitation to experience nature in its most profound and magical form.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: NIGHT_PALETTE.lightText }}
            >
              From the light-polluted corners of our world, the night sky has become a luxury,a rare gift that fewer and fewer people experience. At Nayara, we've preserved this gift. Here, beneath skies unmarred by artificial light, you'll discover what it means to truly see the stars.
            </p>
          </motion.div>

          {/* Section Divider */}
          <div className="my-12" style={{ borderTop: `2px solid ${NIGHT_PALETTE.divider}` }} />

          {/* The Gift of Darkness */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: NIGHT_PALETTE.accent }}
            >
              The Gift of Darkness
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: NIGHT_PALETTE.lightText }}
            >
              In our modern world, darkness has become a rarity. Artificial light dominates our cities, our homes, and increasingly, our natural spaces. Yet darkness is essential,not just for the health of ecosystems, but for our own wellbeing. Studies show that exposure to natural darkness regulates our circadian rhythms, reduces stress, and restores a sense of wonder we've nearly forgotten.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: NIGHT_PALETTE.lightText }}
            >
              At Nayara, we've intentionally designed our resorts to preserve the night. Minimal artificial lighting, strategic placement of fixtures, and a commitment to dark-sky principles mean that when you step outside after sunset, you're stepping into an authentic nocturnal landscape,one that has existed for billions of years.
            </p>
          </motion.div>

          {/* Section Divider */}
          <div className="my-12" style={{ borderTop: `2px solid ${NIGHT_PALETTE.divider}` }} />

          {/* Stargazing & Celestial Experiences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: NIGHT_PALETTE.accent }}
            >
              Stargazing & Celestial Experiences
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: NIGHT_PALETTE.lightText }}
            >
              Imagine lying on your villa's deck, a blanket beneath you, as the Milky Way stretches across the sky in all its glory. This is not a fantasy,it's a nightly reality at Nayara. Our locations, carefully chosen for their minimal light pollution, offer some of the clearest night skies in the world.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: NIGHT_PALETTE.lightText }}
            >
              Join our expert guides for guided stargazing sessions where ancient constellations come alive with meaning. Learn the stories behind Orion, Cassiopeia, and the Southern Cross. Understand the dance of planets and the cycles of the moon. These are not just astronomical facts,they're invitations to reconnect with the cosmos and our place within it.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: NIGHT_PALETTE.lightText }}
            >
              For those seeking deeper exploration, telescope sessions reveal the craters of the moon, the rings of Saturn, and distant galaxies that challenge our understanding of scale and wonder.
            </p>
          </motion.div>

          {/* Section Divider */}
          <div className="my-12" style={{ borderTop: `2px solid ${NIGHT_PALETTE.divider}` }} />

          {/* Nocturnal Wildlife & Bioluminescence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: NIGHT_PALETTE.accent }}
            >
              Nocturnal Wildlife & Bioluminescence
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: NIGHT_PALETTE.lightText }}
            >
              When darkness falls, a different world awakens. Nocturnal creatures emerge,from the haunting calls of night birds to the rustling of small mammals in the undergrowth. At Nayara, guided night walks reveal this hidden ecosystem, offering glimpses into behaviors and adaptations that daylight travelers never witness.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: NIGHT_PALETTE.lightText }}
            >
              Perhaps most magical are our bioluminescence tours, where the waters themselves seem to glow with an otherworldly light. Millions of dinoflagellates create a living constellation in the ocean, responding to movement with brilliant flashes of blue-green light. Paddle through these waters and watch as your paddle strokes paint trails of light,a moment that feels like touching magic itself.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: NIGHT_PALETTE.lightText }}
            >
              These experiences remind us that nature's wonders are not confined to daylight. The night holds its own mysteries, its own beauty, its own profound lessons about the world we inhabit.
            </p>
          </motion.div>

          {/* Section Divider */}
          <div className="my-12" style={{ borderTop: `2px solid ${NIGHT_PALETTE.divider}` }} />

          {/* Moonlit Romance & Reflection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: NIGHT_PALETTE.accent }}
            >
              Moonlit Romance & Reflection
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: NIGHT_PALETTE.lightText }}
            >
              There's something inherently romantic about the moon. Its gentle light softens the landscape, creates intimacy without intrusion, and invites contemplation. At Nayara, moonlit nights are occasions for connection,whether with a loved one, with nature, or with yourself.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: NIGHT_PALETTE.lightText }}
            >
              Imagine a moonlit dinner on your private villa deck, the ocean glowing softly beneath a full moon. Or a midnight swim in waters that seem to hold the moon's reflection. These are the moments that stay with us long after we leave,moments when we feel most alive, most present, most connected to something larger than ourselves.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: NIGHT_PALETTE.lightText }}
            >
              The night invites us to slow down, to listen, to reflect. In the silence of darkness, we often find clarity we've been seeking. At Nayara, we've created spaces where this reflection is not just possible,it's inevitable.
            </p>
          </motion.div>

          {/* Section Divider */}
          <div className="my-12" style={{ borderTop: `2px solid ${NIGHT_PALETTE.divider}` }} />

          {/* Closing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: NIGHT_PALETTE.accent }}
            >
              Reclaim the Night
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: NIGHT_PALETTE.lightText }}
            >
              In a world increasingly dominated by artificial light and constant connectivity, the night sky has become a symbol of what we've lost,and what we can reclaim. At Nayara, the night is not an interruption to your day; it's an essential part of your journey. It's where you'll find some of your most profound moments, your deepest connections, and your truest self.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-lg"
            style={{ backgroundColor: NIGHT_PALETTE.accent, opacity: 0.1 }}
          >
            <p
              className="text-center text-lg"
              style={{ fontFamily: "var(--font-body)", color: NIGHT_PALETTE.accent, fontWeight: 600 }}
            >
              Experience Nayara by Night , where the stars guide you home to yourself.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer textColor="#FFFFFF" />
    </div>
  );
}
