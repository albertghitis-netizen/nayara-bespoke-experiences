/*
 * REFORESTATION & WILDLIFE CORRIDORS
 * Editorial blog post for Nayara Tented Camp sustainability initiative
 * Explores how strategic reforestation and corridor preservation protect rainforest ecosystems
 * Emphasizes sloths as a keystone species and indicator of ecosystem health
 */

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const TENTED_PALETTE = {
  primary: "#8B6F47",
  secondary: "#A0826D",
  accent: "#D4AF37",
  text: "#2C2416",
  lightText: "#5A4A3A",
  background: "#F5F1ED",
  divider: "#E8DFD5",
};

export default function ReforestationWildlifeBlog() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen" style={{ backgroundColor: TENTED_PALETTE.background }}>
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
            Nayara Tented Camp
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "white" }}
          >
            Reforestation & Wildlife Corridors
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400, color: "rgba(255,255,255,0.85)" }}
          >
            When the sloths return, we know the forest is healing. Restoring the rainforest, one tree at a time. Protecting the pathways that connect ecosystems and sustain life.
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
              The rainforest is not a static monument—it is a living, breathing network of relationships. Trees communicate through underground fungal networks. Animals migrate through invisible highways. Water flows from canopy to soil to river, connecting distant ecosystems. At Nayara Tented Camp, we believe that true sustainability means understanding and protecting these connections.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              But how do we know if our efforts are working? How do we measure the health of a rainforest? The answer is simpler than you might think: look for the sloths.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Our reforestation and wildlife corridor initiatives are not just environmental projects—they are acts of restoration. And the return of sloths to our forests is proof that we are succeeding.
            </p>
          </motion.div>

          {/* Section 1: Sloths as Keystone Species */}
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
              The Sloth: A Keystone Species
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              In ecology, a keystone species is one whose presence is disproportionately important to the health of an entire ecosystem. Remove it, and the whole system collapses. The sloth is one of nature's most remarkable keystones.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              At first glance, sloths seem almost useless. They move at a glacial pace, hanging upside down from branches, barely moving at all. But this apparent laziness masks a profound ecological purpose. Sloths are living gardens. Their fur hosts algae and insects. Their feces fertilize the very trees they eat from. They are, in essence, a mobile nutrient recycling system—moving nutrients from the canopy to the understory to the forest floor.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              But there is more. Sloths require specific trees—primarily Cecropia trees—to survive. These trees are pioneer species that grow in disturbed areas and secondary forests. When sloths return to an area, it means that Cecropia trees are thriving. And when Cecropia trees thrive, it means the forest is regenerating. It means the ecosystem is healing.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              In short: when the sloths come back, you know the forest is healthy.
            </p>
          </motion.div>

          {/* Section 2: The Disappearance and Return */}
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
              When the Sloths Disappeared
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Decades ago, the Arenal region was transformed. Forests were cleared for cattle ranching and agriculture. The continuous canopy was fragmented into isolated patches. Sloths, which depend on unbroken pathways through the treetops to move between feeding areas, found themselves stranded. Populations declined dramatically. In some areas, sloths disappeared entirely.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              The absence of sloths was a symptom of a larger problem: the forest was broken. Nutrient cycling was disrupted. Cecropia trees were disappearing. The ecosystem was in decline.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              But something remarkable is happening now. Over the past decade, sloths have begun to return to areas where they had vanished. Not everywhere. Not in large numbers. But they are back. And their return tells a story of ecological recovery.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              At Nayara Tented Camp, we have witnessed this transformation firsthand. Where sloths were once absent, they now move through our canopy. Their presence is a validation of our reforestation efforts and our commitment to creating wildlife corridors.
            </p>
          </motion.div>

          {/* Section 3: Our Reforestation Strategy */}
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
              Reforestation for Sloths: A Strategy for Ecosystem Recovery
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Our reforestation efforts are guided by a simple principle: if we restore the forest for sloths, we restore it for everyone. By prioritizing the trees that sloths depend on—Cecropia, fig trees, and other canopy species—we create the conditions for the entire ecosystem to thrive.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Our approach includes:
            </p>
            <ul
              className="space-y-3 mb-6"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              <li className="flex gap-4">
                <span style={{ color: TENTED_PALETTE.accent, fontWeight: 600 }}>•</span>
                <span>
                  <strong>Cecropia Restoration:</strong> We actively plant and protect Cecropia trees, the primary food source for sloths. These fast-growing pioneer species help regenerate degraded areas and provide immediate food for returning wildlife.
                </span>
              </li>
              <li className="flex gap-4">
                <span style={{ color: TENTED_PALETTE.accent, fontWeight: 600 }}>•</span>
                <span>
                  <strong>Canopy Connectivity:</strong> We plant trees at different heights to create continuous canopy coverage, allowing sloths to move safely through the forest without descending to the ground (where they are vulnerable).
                </span>
              </li>
              <li className="flex gap-4">
                <span style={{ color: TENTED_PALETTE.accent, fontWeight: 600 }}>•</span>
                <span>
                  <strong>Nutrient Cycling:</strong> By restoring sloths to the forest, we restore the nutrient cycling that makes the entire ecosystem more productive. Sloth feces fertilize the trees, creating a self-sustaining cycle.
                </span>
              </li>
              <li className="flex gap-4">
                <span style={{ color: TENTED_PALETTE.accent, fontWeight: 600 }}>•</span>
                <span>
                  <strong>Long-term Monitoring:</strong> We track sloth populations and forest health indicators to ensure our efforts are working. The presence of sloths is our most important metric of success.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Section 4: Wildlife Corridors */}
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
              Wildlife Corridors: Connecting Fragmented Habitats
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              A wildlife corridor is a continuous stretch of habitat that allows animals to move safely between isolated forest patches. For sloths, which move slowly and deliberately through the canopy, corridors are essential. Without them, populations become trapped and isolated.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Nayara Tented Camp is part of a larger conservation initiative to create wildlife corridors connecting the Arenal region to protected areas across Costa Rica. By protecting and restoring forest along these pathways, we enable:
            </p>
            <ul
              className="space-y-3 mb-6"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              <li className="flex gap-4">
                <span style={{ color: TENTED_PALETTE.accent, fontWeight: 600 }}>•</span>
                <span>
                  <strong>Sloth Movement:</strong> Sloths can now move between isolated forest patches, finding new feeding areas and mates.
                </span>
              </li>
              <li className="flex gap-4">
                <span style={{ color: TENTED_PALETTE.accent, fontWeight: 600 }}>•</span>
                <span>
                  <strong>Genetic Diversity:</strong> Sloth populations can interbreed, maintaining healthy genetic diversity and population viability.
                </span>
              </li>
              <li className="flex gap-4">
                <span style={{ color: TENTED_PALETTE.accent, fontWeight: 600 }}>•</span>
                <span>
                  <strong>Ecosystem Cascade:</strong> As sloths return, they restore nutrient cycling, which benefits all forest species—from insects to jaguars.
                </span>
              </li>
              <li className="flex gap-4">
                <span style={{ color: TENTED_PALETTE.accent, fontWeight: 600 }}>•</span>
                <span>
                  <strong>Climate Resilience:</strong> As climate patterns shift, sloths and other species can migrate to suitable habitats within the corridor network.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Section 5: Our Impact */}
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
              Measuring Our Impact: The Sloth as Indicator
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Since launching our reforestation initiative, Nayara Tented Camp has achieved remarkable results. But the most important metric is not a number—it is a presence:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-lg" style={{ backgroundColor: `${TENTED_PALETTE.primary}15` }}>
                <p
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ color: TENTED_PALETTE.primary, fontFamily: "var(--font-display)" }}
                >
                  50,000+
                </p>
                <p
                  className="text-[13px]"
                  style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
                >
                  Native trees planted
                </p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: `${TENTED_PALETTE.primary}15` }}>
                <p
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ color: TENTED_PALETTE.primary, fontFamily: "var(--font-display)" }}
                >
                  500 ha
                </p>
                <p
                  className="text-[13px]"
                  style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
                >
                  Connected habitat
                </p>
              </div>
            </div>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              But here is what truly matters: sloths now inhabit areas where they had been absent for decades. Our guests regularly spot them in the canopy above our tents. Their presence is not just a wildlife sighting—it is proof that the forest is healing.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Every sloth you see at Nayara Tented Camp represents a healthy forest. It represents nutrient cycling. It represents connected habitat. It represents the success of our reforestation and corridor initiatives.
            </p>
          </motion.div>

          {/* Section 6: The Future */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2
              className="text-2xl md:text-3xl mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: TENTED_PALETTE.primary }}
            >
              A Vision for the Future: More Sloths, Healthier Forests
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Our vision is ambitious: to create a continuous network of protected and restored forest that spans from the Caribbean coast to the Pacific, allowing wildlife—including sloths—to move freely across Costa Rica. This is not a project for one resort or one organization—it requires collaboration across borders, sectors, and generations.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              At Nayara Tented Camp, we are committed to being part of this larger movement. Every guest who stays with us contributes to our reforestation efforts. Every meal served in our restaurants features ingredients from our sustainable gardens, reducing our carbon footprint. Every decision we make is guided by a simple principle: leave the rainforest better than we found it.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              And when you look up into the canopy and see a sloth hanging peacefully from a branch, you will know that we are succeeding. You will know that the forest is healing. You will know that luxury and conservation are not opposing forces—they are partners in creating a better world.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              The rainforest is not a backdrop to luxury. It is the foundation of it. And we are committed to protecting it, one tree, one sloth, one generation at a time.
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
              Learn More
            </p>
            <h3
              className="text-xl md:text-2xl mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: TENTED_PALETTE.text }}
            >
              Explore Nayara Tented Camp's Sustainability Initiatives
            </h3>
            <p
              className="text-[15px] leading-[1.7] mb-6"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Discover how our commitment to reforestation, wildlife protection, and sustainable luxury is shaping the future of Costa Rica's rainforests. And learn why the presence of sloths is the best indicator of our success.
            </p>
            <a
              href="/tented-camp/sustainability"
              className="inline-block px-8 py-3 rounded-full transition-all duration-300 hover:translate-y-[-2px] text-[13px] tracking-[0.06em] uppercase"
              style={{
                backgroundColor: TENTED_PALETTE.primary,
                color: "white",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
              }}
            >
              View Full Sustainability Report
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
