/*
 * GREEN GLOBE CERTIFICATION: TENTED CAMP
 * Editorial blog post about Nayara Tented Camp's Green Globe Certification
 * Emphasizes rigorous standards, commitment to sustainability, and community impact
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

export default function GreenGlobeBlog() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen" style={{ backgroundColor: TENTED_PALETTE.background }}>
      <EnhancedArticleSchema
        headline="Green Globe Certification: Our Sustainable Hospitality Achievement"
        description="Discover how Nayara Resorts achieved Green Globe certification through sustainable practices."
        author={{ name: "Nayara Resorts", expertise: ["Luxury Travel", "Sustainable Tourism"] }}
        datePublished="2024-04-05"
        url="https://nayararesorts.manus.space/blog/greenglobe"
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
            Certification & Recognition
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "white" }}
          >
            Green Globe Certified
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400, color: "rgba(255,255,255,0.85)" }}
          >
            Meeting the world's most rigorous standards for sustainable luxury. Nayara Tented Camp achieves Green Globe Certification.
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
              In a world where "sustainability" has become a marketing buzzword, Green Globe Certification stands apart. It is not a label you can buy. It is not a box you check. It is a rigorous, independent verification that your resort meets the world's most demanding standards for environmental stewardship, community impact, and responsible tourism.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Nayara Tented Camp is proud to announce that we have achieved Green Globe Certification—a milestone that represents years of commitment to doing business the right way.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              But this certification is not about the award itself. It is about what it represents: our unwavering commitment to the rainforest, to the community of La Fortuna, and to the future of sustainable luxury travel.
            </p>
          </motion.div>

          {/* Section 1: What is Green Globe? */}
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
              What is Green Globe Certification?
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Green Globe is the world's leading certification program for sustainable tourism. It is recognized by the Global Sustainable Tourism Council (GSTC) and operates in over 80 countries. To achieve certification, a resort must undergo a comprehensive audit against 380 specific indicators across four pillars: sustainable management, social and economic performance, cultural heritage preservation, and environmental stewardship.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              This is not a one-time assessment. Green Globe certification requires annual audits and continuous improvement. Every year, we must demonstrate that we are maintaining—and improving—our sustainability practices. It is a commitment that never ends.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              For Nayara Tented Camp, achieving this certification was not a marketing goal. It was a validation of what we have been doing for years: building a luxury resort that respects the environment and uplifts the community.
            </p>
          </motion.div>

          {/* Section 2: The Four Pillars */}
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
              The Four Pillars of Green Globe
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-8"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Green Globe certification is built on four pillars. Here is how Nayara Tented Camp meets each one:
            </p>

            {/* Pillar 1 */}
            <div className="mb-8">
              <h3
                className="text-lg md:text-xl mb-3"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: TENTED_PALETTE.primary }}
              >
                1. Sustainable Management
              </h3>
              <p
                className="text-[15px] md:text-[17px] leading-[1.9]"
                style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
              >
                This pillar ensures that resorts operate with environmental responsibility built into every decision. At Tented Camp, this means: carbon-neutral operations (certified by Eco Qualis), zero single-use plastics, water conservation systems that reduce consumption by 40%, waste management programs that achieve 85% diversion from landfills, and renewable energy integration across our facilities. Every building, every system, every process is designed with environmental impact in mind.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="mb-8">
              <h3
                className="text-lg md:text-xl mb-3"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: TENTED_PALETTE.primary }}
              >
                2. Social & Economic Performance
              </h3>
              <p
                className="text-[15px] md:text-[17px] leading-[1.9]"
                style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
              >
                Luxury should benefit the community, not exploit it. At Tented Camp, 85% of our staff comes from La Fortuna. We provide free transportation, comprehensive health insurance, and ongoing training in sustainable tourism practices. We partner with local suppliers whenever possible, supporting the regional economy. And through our partnership with a local bank, we have created a housing community where employees can purchase homes without a down payment—building equity and dignity regardless of their employment status. This is not charity. It is partnership.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="mb-8">
              <h3
                className="text-lg md:text-xl mb-3"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: TENTED_PALETTE.primary }}
              >
                3. Cultural Heritage Preservation
              </h3>
              <p
                className="text-[15px] md:text-[17px] leading-[1.9]"
                style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
              >
                We are stewards of a region with deep cultural roots. We work with local indigenous communities and cultural organizations to ensure that tourism respects and preserves local traditions. We employ local guides who share the stories and knowledge of their ancestors. We source traditional crafts and artwork from local artisans. Tourism should enrich culture, not erase it.
              </p>
            </div>

            {/* Pillar 4 */}
            <div>
              <h3
                className="text-lg md:text-xl mb-3"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: TENTED_PALETTE.primary }}
              >
                4. Environmental Stewardship
              </h3>
              <p
                className="text-[15px] md:text-[17px] leading-[1.9]"
                style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
              >
                This is where our heart lies. Tented Camp sits within 30,000 acres of rainforest that is home to half of Costa Rica's bird, mammal, and reptile species. We have planted over 50,000 native trees as part of our reforestation initiative. We have created wildlife corridors that allow jaguars, sloths, and other species to move freely across the landscape. We monitor biodiversity constantly, tracking the return of species like sloths that had disappeared from the region. We are not just protecting the forest—we are healing it.
              </p>
            </div>
          </motion.div>

          {/* Section 3: The Journey */}
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
              The Path to Certification
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Achieving Green Globe Certification was not a quick process. It required a deep dive into our operations, honest assessment of where we were falling short, and commitment to continuous improvement. We worked closely with Green Globe auditors to evaluate every aspect of our business against 380 specific criteria.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Some areas were straightforward. We were already carbon-neutral, already plastic-free, already investing in community housing. But other areas required us to raise our standards even higher. We enhanced our water management systems. We expanded our reforestation efforts. We deepened our partnerships with local communities. We did not just meet the standards—we exceeded them.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              The result is a resort that operates at the highest level of sustainability. But more importantly, it is a resort that can prove it—through independent verification, annual audits, and measurable results.
            </p>
          </motion.div>

          {/* Section 4: What This Means */}
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
              What Green Globe Certification Means for You
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              When you stay at Nayara Tented Camp, you are not just booking a luxury resort. You are supporting a business that is genuinely committed to protecting the rainforest and uplifting the community. Every dollar you spend contributes to reforestation efforts, community housing programs, and conservation initiatives.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Our Green Globe Certification is proof of this commitment. It is not a marketing claim. It is an independent verification that we are doing what we say we are doing. It is a promise that your luxury experience is built on a foundation of genuine sustainability.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              And when you look up into the canopy and see a sloth hanging peacefully from a Cecropia tree, you will know that your stay made a difference. You will know that the rainforest you are experiencing is healthier because you chose to visit responsibly.
            </p>
          </motion.div>

          {/* Section 5: The Future */}
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
              Continuous Improvement: The Work Never Ends
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Green Globe Certification is not a finish line. It is a commitment to continuous improvement. Every year, we undergo new audits. Every year, we set new goals. Every year, we ask ourselves: how can we do better?
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              We are currently exploring advanced renewable energy systems, expanding our reforestation efforts to 100,000 trees, and deepening our partnerships with conservation organizations. We are investing in research to better understand the ecosystem we steward. We are training our staff to be ambassadors for sustainability, not just employees.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              This is what sustainable luxury means. It is not perfection. It is commitment. It is the willingness to be held accountable. It is the belief that business can be a force for good in the world.
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
              Explore Nayara Tented Camp's Full Sustainability Commitment
            </h3>
            <p
              className="text-[15px] leading-[1.7] mb-6"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Discover the full scope of our environmental stewardship, community partnerships, and conservation initiatives that earned us Green Globe Certification.
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
