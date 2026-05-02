/**
 * MAYA & RAPA NUI CLIMATE SURVIVAL
 * Editorial blog about ancient civilizations and climate resilience
 * Covers how Maya and Rapa Nui civilizations adapted to environmental challenges
 */

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { EnhancedArticleSchema } from "@/components/SEOSchemaEnhanced";

const HANGAROA_PALETTE = {
  primary: "#6B4423",
  secondary: "#8B5A2B",
  accent: "#D4A574",
  text: "#3D2817",
  lightText: "#5A4A3A",
  background: "#FAF7F2",
  divider: "#E8DFD5",
};

export default function MayaRapaNuiClimateBlog() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen" style={{ backgroundColor: HANGAROA_PALETTE.background }}>
      <EnhancedArticleSchema
        image="https://nayararesorts.manus.space"
        headline="MayaRapaNuiClimate | Nayara Resorts"
        description="Discover insights about mayarapanuiclimate at Nayara Resorts."
        author={{ name: "Nayara Resorts", expertise: ["Luxury Travel", "Sustainable Tourism"] }}
        datePublished="2024-01-01"
        url="https://nayararesorts.manus.space/blog/mayarapanuiclimate"
      />
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "linear-gradient(135deg, #6B4423 0%, #8B5A2B 100%)",
          }}
        />
        <div className="absolute inset-0 opacity-20" style={{ backgroundColor: "#3D2817" }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 text-center px-6 md:px-12 max-w-4xl"
        >
          <p
            className="text-[11px] tracking-[0.3em] mb-6 uppercase"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: HANGAROA_PALETTE.accent }}
          >
            Culture & Climate Resilience
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "white" }}
          >
            Maya & Rapa Nui: Ancient Wisdom for Climate Survival
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400, color: "rgba(255,255,255,0.85)" }}
          >
            How two ancient civilizations adapted to environmental challenges and what their stories teach us about resilience, sustainability, and human ingenuity in the face of climate change.
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
              style={{ fontFamily: "var(--font-body)", color: HANGAROA_PALETTE.lightText }}
            >
              The Maya civilization flourished in Central America for over 3,000 years, developing sophisticated systems of agriculture, astronomy, writing, and governance. The Rapa Nui people transformed a remote Pacific island into a thriving society, creating the iconic moai statues that continue to captivate the world. Yet both civilizations faced profound environmental challenges—droughts, deforestation, and resource depletion—that tested their ability to adapt and survive.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: HANGAROA_PALETTE.lightText }}
            >
              Today, as we face our own climate crisis, the stories of these ancient peoples offer valuable lessons. They demonstrate both the resilience of human societies and the consequences of unsustainable practices. By understanding how the Maya and Rapa Nui responded to environmental change, we gain insights into how we might navigate our own uncertain future.
            </p>
          </motion.div>

          {/* Section 1: The Maya and Drought */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 pb-12"
            style={{ borderBottom: `1px solid ${HANGAROA_PALETTE.divider}` }}
          >
            <h2
              className="text-2xl md:text-3xl mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: HANGAROA_PALETTE.primary }}
            >
              The Maya Collapse: Lessons from Drought
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: HANGAROA_PALETTE.lightText }}
            >
              The Classic Maya civilization reached its peak around 800 AD, with major city-states like Tikal, Palenque, and Copán serving as centers of art, science, and commerce. Yet within a century, these great cities were abandoned. Temples fell silent, and the jungle reclaimed the plazas. For centuries, scholars debated the cause of this mysterious collapse. Today, evidence points to a series of severe droughts that lasted decades—a climate crisis that the Maya civilization could not overcome.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: HANGAROA_PALETTE.lightText }}
            >
              The droughts coincided with a period of political fragmentation and warfare. As water became scarce, competition for resources intensified. The sophisticated water management systems that had sustained Maya cities—including reservoirs, canals, and terraces—proved insufficient during extended dry periods. Crop failures led to famine, which destabilized societies and undermined the authority of rulers. The collapse was not instantaneous but a gradual unraveling of the social fabric that held Maya civilization together.
            </p>

            <h3
              className="text-lg md:text-xl mb-3 mt-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: HANGAROA_PALETTE.primary }}
            >
              Adaptation and Survival
            </h3>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: HANGAROA_PALETTE.lightText }}
            >
              Yet the Maya did not disappear. Millions of Maya people survived the collapse of the Classic civilization. They adapted by dispersing into smaller settlements, developing new agricultural practices, and reorganizing their societies. The Maya civilization transformed rather than ended. Today, over 6 million Maya descendants live in Mexico, Guatemala, Belize, and Honduras, maintaining their languages, traditions, and cultural identity. Their story demonstrates both the fragility of complex societies and the resilience of human communities.
            </p>
          </motion.div>

          {/* Section 2: Rapa Nui - Ecological Collapse */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 pb-12"
            style={{ borderBottom: `1px solid ${HANGAROA_PALETTE.divider}` }}
          >
            <h2
              className="text-2xl md:text-3xl mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: HANGAROA_PALETTE.primary }}
            >
              Rapa Nui: The Island That Deforested Itself
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: HANGAROA_PALETTE.lightText }}
            >
              Rapa Nui (Easter Island) presents a different but equally instructive case study. When Polynesian settlers arrived around 1200 AD, they found a lush island covered with forests of palm and other trees. Over the following centuries, the Rapa Nui people built a sophisticated society, creating the famous moai statues—massive stone figures that served as representations of ancestors and symbols of power and prestige.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: HANGAROA_PALETTE.lightText }}
            >
              The construction of moai required enormous resources. Trees were felled to create wooden sleds and rollers for transporting the statues across the island. As demand for moai increased, so did deforestation. By around 1500 AD, the island's forests had been almost completely cleared. Without trees, soil erosion accelerated, crop yields declined, and the population that the island could support shrank dramatically. Archaeological evidence suggests that this ecological collapse led to social upheaval, including warfare and the abandonment of moai construction.
            </p>

            <h3
              className="text-lg md:text-xl mb-3 mt-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: HANGAROA_PALETTE.primary }}
            >
              The Rapa Nui Paradox
            </h3>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: HANGAROA_PALETTE.lightText }}
            >
              The Rapa Nui story presents a paradox: a society that created one of the world's most impressive monuments ultimately destroyed the ecological foundation upon which it depended. Yet this is not a story of inevitable decline. Recent research suggests that after the collapse, Rapa Nui society reorganized and adapted. The people developed new agricultural practices suited to the degraded environment, including the ahu (ceremonial platforms) that served both spiritual and practical purposes. They survived and maintained their culture despite catastrophic environmental change.
            </p>
          </motion.div>

          {/* Section 3: Common Themes and Lessons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 pb-12"
            style={{ borderBottom: `1px solid ${HANGAROA_PALETTE.divider}` }}
          >
            <h2
              className="text-2xl md:text-3xl mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: HANGAROA_PALETTE.primary }}
            >
              Common Themes: What We Can Learn
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: HANGAROA_PALETTE.lightText }}
            >
              Both the Maya and Rapa Nui faced environmental crises that challenged their societies' ability to survive. Yet their experiences reveal important insights. First, environmental change does not automatically lead to civilizational collapse. Both societies adapted, reorganized, and persisted despite profound challenges. This demonstrates human resilience and the capacity for innovation in the face of adversity.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: HANGAROA_PALETTE.lightText }}
            >
              Second, the speed and scale of environmental change matter. The Maya faced droughts that lasted decades—severe but not permanent. Rapa Nui faced deforestation that was largely irreversible. Societies that can adapt quickly to gradual change have better chances of survival than those facing rapid, catastrophic change. This has profound implications for our current climate crisis, which is occurring at unprecedented speed.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: HANGAROA_PALETTE.lightText }}
            >
              Third, social cohesion and governance matter. The Maya collapse was accelerated by political fragmentation and warfare. Societies that maintain cooperation and trust are better positioned to respond collectively to environmental challenges. Finally, both civilizations developed sophisticated knowledge systems—agricultural practices, water management, astronomical observations—that helped them adapt. This underscores the importance of science, innovation, and knowledge sharing in addressing climate challenges.
            </p>
          </motion.div>

          {/* Section 4: Ancient Wisdom for Modern Times */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 pb-12"
            style={{ borderBottom: `1px solid ${HANGAROA_PALETTE.divider}` }}
          >
            <h2
              className="text-2xl md:text-3xl mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: HANGAROA_PALETTE.primary }}
            >
              Ancient Wisdom for Our Climate Future
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: HANGAROA_PALETTE.lightText }}
            >
              The stories of the Maya and Rapa Nui offer guidance as we navigate our own climate crisis. They remind us that environmental challenges are real and consequential, but they also demonstrate that human societies possess remarkable capacity for adaptation and resilience. The key is to act proactively, before environmental degradation becomes irreversible.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: HANGAROA_PALETTE.lightText }}
            >
              We must invest in science and innovation to understand climate change and develop solutions. We must strengthen social bonds and international cooperation to respond collectively to global challenges. We must learn from indigenous knowledge systems that have sustained communities for centuries. And we must act with urgency, recognizing that the window for preventing catastrophic climate change is narrowing.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: HANGAROA_PALETTE.lightText }}
            >
              The Maya and Rapa Nui survived environmental catastrophes and maintained their cultures across centuries. Their resilience offers hope. But their experiences also serve as warnings: we must act now to prevent the worst outcomes of climate change. The future is not predetermined. Through collective action, innovation, and commitment to sustainability, we can build a more resilient and equitable world for generations to come.
            </p>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 pt-12"
            style={{ borderTop: `1px solid ${HANGAROA_PALETTE.divider}` }}
          >
            <p
              className="text-[14px] tracking-[0.08em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: HANGAROA_PALETTE.primary }}
            >
              Experience It
            </p>
            <h3
              className="text-xl md:text-2xl mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: HANGAROA_PALETTE.text }}
            >
              Explore Rapa Nui's Ancient Heritage
            </h3>
            <p
              className="text-[15px] leading-[1.7] mb-6"
              style={{ fontFamily: "var(--font-body)", color: HANGAROA_PALETTE.lightText }}
            >
              Walk with giants among the moai statues. Learn about Rapa Nui's rich history, culture, and the lessons its people offer about resilience and adaptation. Our expert guides share stories of ancient wisdom and contemporary conservation efforts.
            </p>
            <a
              href="/hangaroa/experiences"
              className="inline-block px-8 py-3 rounded-full transition-all duration-300 hover:translate-y-[-2px] text-[13px] tracking-[0.06em] uppercase"
              style={{
                backgroundColor: HANGAROA_PALETTE.primary,
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

      <Footer textColor="#FFFFFF" />
    </div>
  );
}
