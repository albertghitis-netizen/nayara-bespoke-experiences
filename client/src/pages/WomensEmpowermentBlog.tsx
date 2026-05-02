/*
import { EnhancedArticleSchema } from "@/components/SEOSchemaEnhanced";
 * WOMEN'S EMPOWERMENT THROUGH HOUSING
 * Editorial blog post about Nayara Tented Camp's housing initiative in La Fortuna
 * Focuses on structural empowerment, community stability, and women's economic security
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

export default function WomensEmpowermentBlog() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen" style={{ backgroundColor: TENTED_PALETTE.background }}>
      <EnhancedArticleSchema
        headline="WomensEmpowerment | Nayara Resorts"
        description="Discover insights about womensempowerment at Nayara Resorts."
        author={{ name: "Nayara Resorts", expertise: ["Luxury Travel", "Sustainable Tourism"] }}
        datePublished="2024-01-01"
        url="https://nayararesorts.manus.space/blog/womensempowerment"
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
            Community & Impact
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "white" }}
          >
            Women's Empowerment Through Housing
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400, color: "rgba(255,255,255,0.85)" }}
          >
            Building permanent assets for the families who sustain our community. Ownership is not luxury. It is oxygen.
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Key Findings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 p-8 rounded-lg"
            style={{ backgroundColor: `${TENTED_PALETTE.primary}10` }}
          >
            <h3
              className="text-lg md:text-xl mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: TENTED_PALETTE.primary }}
            >
              Key Findings
            </h3>
            <ul
              className="space-y-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              <li className="flex gap-4">
                <span style={{ color: TENTED_PALETTE.accent, fontWeight: 600 }}>•</span>
                <span>Stable housing is one of the strongest predictors of long-term economic security for women in tourism communities.</span>
              </li>
              <li className="flex gap-4">
                <span style={{ color: TENTED_PALETTE.accent, fontWeight: 600 }}>•</span>
                <span>Single mothers in La Fortuna face disproportionate exposure to rental instability as short-term vacation demand constrains supply.</span>
              </li>
              <li className="flex gap-4">
                <span style={{ color: TENTED_PALETTE.accent, fontWeight: 600 }}>•</span>
                <span>Empowering women with permanent, titled assets strengthens entire communities and makes tourism sustainable and durable.</span>
              </li>
            </ul>
          </motion.div>

          {/* Intro */}
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
              A Morning Without Fear
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Imagine a mother waking before sunrise to pack her child's school bag. Breakfast on the table. Uniform folded. The same ritual she has performed for years, but now without the quiet calculation in the background. No landlord deciding the future. No rent increase arriving without warning. No contingency plan forming while tying shoelaces.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              The address is permanent. The walls are hers.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Her child grows up in a home that cannot be taken away by market forces. That stability is invisible to visitors, but it is the foundation of everything that follows: education, health, ambition, confidence.
            </p>
          </motion.div>

          {/* Section 1: Ownership is Oxygen */}
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
              Ownership is Not Luxury. It is Oxygen.
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Every year on March 8, the world pauses for International Women's Day: a moment to celebrate women's achievements and confront the structural barriers that still limit opportunity. Born from the labor and suffrage movements of the early twentieth century, the day remains both a celebration and a challenge: not merely to acknowledge progress, but to build the architecture that makes equality durable rather than symbolic.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              For us at Nayara Tented Camp, this year's reflection is not abstract. It is a neighborhood.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              In La Fortuna, we are developing a 40-unit residential community: not employee housing, not a company benefit, but a permanent neighborhood of privately titled homes for local families—approximately 150 residents. The first home is scheduled for completion in early 2027. Each parcel is legally owned by the individual resident, with ownership that is permanent and completely independent of employment at Nayara or anywhere else. If a resident works with us today and moves on tomorrow, the home remains theirs.
            </p>
          </motion.div>

          {/* Section 2: The Housing Crisis */}
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
              What Stability Actually Looks Like
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              More than 90% of our Costa Rica team comes from the Arenal region. Many have worked alongside us for years. We know them, and through them, we know what housing insecurity costs: not in abstract economic terms, but in the energy spent managing uncertainty on top of everything else a working parent already carries.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              We have seen people commute impossible distances because rents near town crept beyond their reach. We have watched families make decisions about their children's schools based on where they could afford to sleep. We have heard the version of the housing conversation that happens quietly, between trusted colleagues, the one that does not make it into any report.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Many of the future residents are single mothers working across the region's tourism economy, navigating a housing market that no longer reflects the wages it runs on. A stable home changes everything downstream: it replaces constant negotiation with certainty, converts monthly rent into inherited equity, and gives children predictability that schooling alone cannot provide.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              And predictability is power.
            </p>
          </motion.div>

          {/* Section 3: The Pressure Behind the Postcard */}
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
              The Pressure Behind the Postcard
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Costa Rica welcomed approximately 2.69 million tourists in 2025, and the tourism market is projected to grow to USD 562 million by 2031. Tourism remains a cornerstone of the national economy, and the Arenal region sits at the center of that story.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Success generates opportunity. It also generates pressure.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              The proliferation of unregulated vacation rentals is now a measurable driver of a broader housing crisis affecting working families across the country. When housing becomes unstable, the people who absorb the shock first are women. Mothers negotiate leases, relocate children, and carry the invisible labor of never quite knowing what next month looks like.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              A tourism economy that does not stabilize housing is not sustainable.
            </p>
          </motion.div>

          {/* Section 4: Costa Rica's Choice */}
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
              A Country That Chose Schools Over Soldiers
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              But our housing initiative does not exist in isolation. It belongs to a longer story about what Costa Rica chose to be. In 1948, following a brief civil war, the country abolished its standing army. Funds that would have sustained military infrastructure were redirected into public education, healthcare, and civic development. It remains one of the few nations in the world without a permanent military, a decision recognized by UNESCO as part of the country's documentary heritage.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              That was not a symbolic act. It permanently reordered national priorities. When a country invests in education and community infrastructure over militarization, women benefit disproportionately. Stability compounds through households. Children grow up inside systems designed to support them.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              And infrastructure determines who survives pressure.
            </p>
          </motion.div>

          {/* Section 5: Why Ownership Matters */}
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
              Why Ownership Matters for Women
            </h2>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              International Women's Day asks a question that sounds simple and is not: what does empowerment actually look like when it is translated into structure?
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              For us, after years in this community, the answer is concrete. It looks like a land title in a mother's name. It looks like a construction plan drawn up for a family that has always rented. It looks like keys handed over without conditions.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-4"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              We are not offering a benefit or a program. We are participating in a community that has given us everything, and trying to give something back that lasts. A house is not just shelter. It is predictability. It is leverage. It is the difference between surviving an economy and having a permanent place inside it.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Hospitality, real hospitality, does not end at the guest room door. It extends into the town, into the school, into the home of the person who made that guest feel welcome.
            </p>
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
              className="text-[15px] md:text-[17px] leading-[1.9] italic"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              In La Fortuna, that commitment now has an address.
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
              Explore Nayara Tented Camp's Community Initiatives
            </h3>
            <p
              className="text-[15px] leading-[1.7] mb-6"
              style={{ fontFamily: "var(--font-body)", color: TENTED_PALETTE.lightText }}
            >
              Discover how our commitment to community empowerment, sustainable development, and social responsibility shapes the future of La Fortuna.
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
