/*
 * CARIBBEAN CORAL RESTORATION — Blog Post / Deep Dive
 * Bocas del Toro, Panama
 * Climate-adaptive coral restoration as a global blueprint
 * Design: Editorial / Journal style with deep content
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import {
  AnimateOnScroll,
  TextReveal,
  fadeUp,
} from "@/components/motion";

const PALETTE = {
  primary: "#0B5F6F",
  secondary: "#1B8A99",
  accent: "#2BA8C1",
  gradientStart: "#F0F6F8",
  gradientEnd: "#E8F2F6",
  text: "#0D3B47",
  textSecondary: "#4A6B76",
  textTertiary: "#8A9FA8",
  divider: "#D0E0E8",
};

const sectionPadding = "py-16 md:py-24 px-6 md:px-10";
const maxW = "max-w-[900px] mx-auto";

export default function CaribbeanCoralBlog() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.gradientStart }}>
      <BrandNavigation pageType="content" hideCenterLabel />
      <BlogHero />
      <BlogContent />
      <RelatedLinksSection />
      <Footer pageType="content" bgColor="#1B8A99" />
    </div>
  );
}

function BlogHero() {
  return (
    <div className={sectionPadding} style={{ backgroundColor: PALETTE.gradientStart }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.textTertiary }}
          >
            Caribbean Coral Partnership
          </p>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl mb-6 leading-[1.1]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            Restoring Coral Reefs for a Warming Ocean: A Climate-Adaptive Blueprint
          </h1>
          <p
            className="text-[15px] leading-[1.8] text-balance"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
          >
            How Caribbean Coral Restoration Center is pioneering a pragmatic, science-driven approach to reef conservation that works with climate change, not against it.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <div className="mt-8 pt-8 border-t" style={{ borderColor: PALETTE.divider }}>
            <p
              className="text-[12px] tracking-[0.08em] uppercase"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.textTertiary }}
            >
              Published in Nayara Journal • Sustainability Pillar
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}

function BlogContent() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: "#fff" }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <div className="prose prose-lg max-w-none" style={{ fontFamily: "var(--font-body)" }}>
            <h2
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text, marginTop: "2rem", marginBottom: "1rem" }}
            >
              The Crisis: Understanding Global Coral Reef Depletion
            </h2>
            <p style={{ color: PALETTE.textSecondary, lineHeight: "1.8" }}>
              The world's coral reefs face an unprecedented crisis. From January 2023 to March 2025, bleaching-level heat stress impacted <strong>84% of the world's coral reef area</strong>—the most extensive bleaching event in recorded history. This staggering statistic represents not just an environmental disaster, but a fundamental threat to the millions of people who depend on coral reef ecosystems for food, income, and coastal protection.
            </p>

            <p style={{ color: PALETTE.textSecondary, lineHeight: "1.8" }}>
              Over the past three decades, the world has lost half of its coral reefs. Today, more than 80% of remaining reefs are affected by bleaching. A spike of just 1–2°C in ocean temperatures sustained over several weeks can trigger mass bleaching, turning vibrant coral colonies white as they expel the symbiotic algae that gives them color and sustenance. If global warming reaches 1.5°C above pre-industrial levels, most reefs would disappear. At 2°C, effectively all coral reefs would die.
            </p>

            <p style={{ color: PALETTE.textSecondary, lineHeight: "1.8" }}>
              The urgency is undeniable. Coral reefs support over 25% of all marine species despite covering less than 1% of the ocean floor. They protect coastlines from storms, provide food for over a billion people, and generate trillions of dollars in economic value. Yet traditional conservation approaches—focused on reducing local stressors like pollution and overfishing—cannot address the root cause: rising ocean temperatures driven by global climate change.
            </p>

            <h2
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text, marginTop: "2rem", marginBottom: "1rem" }}
            >
              A Different Approach: Climate-Adaptive Restoration
            </h2>

            <p style={{ color: PALETTE.textSecondary, lineHeight: "1.8" }}>
              Caribbean Coral Restoration Center, based in Bocas del Toro, Panama, has pioneered a fundamentally different approach. Rather than attempting to stop ocean warming—a challenge beyond the scope of local action—they are working with nature's survivors to build resilience.
            </p>

            <p style={{ color: PALETTE.textSecondary, lineHeight: "1.8" }}>
              The strategy is elegantly simple: identify coral colonies that survived recent bleaching events, cultivate their heat-resistant traits, and use them as the foundation for reef restoration. These "super corals" possess genetic adaptations that allow them to tolerate intense heatwaves and extreme temperature fluctuations. By selectively propagating and transplanting these resilient specimens, Caribbean Coral is creating reefs that can survive in a warmer ocean.
            </p>

            <p style={{ color: PALETTE.textSecondary, lineHeight: "1.8" }}>
              "We don't just transplant corals," the organization states. "We cultivate resilience, foster economic opportunity, and build the knowledge base that will guide ocean recovery worldwide." This holistic philosophy recognizes that healthy oceans require healthy communities—supporting local livelihoods while rebuilding the underwater forests that sustain all life.
            </p>

            <h2
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text, marginTop: "2rem", marginBottom: "1rem" }}
            >
              The Science Behind Heat-Resistant Coral
            </h2>

            <p style={{ color: PALETTE.textSecondary, lineHeight: "1.8" }}>
              Recent scientific research has revealed that extensive variation in heat tolerance exists within coral species. Corals found across entire reef systems may hold unique genetic resources important for recovery and adaptation. Some colonies possess symbiotic relationships with heat-tolerant algae partners, while others have developed physiological mechanisms to better withstand temperature stress.
            </p>

            <p style={{ color: PALETTE.textSecondary, lineHeight: "1.8" }}>
              Caribbean Coral scientists identify these resilient specimens through careful monitoring and research. They study which colonies survive bleaching events, document their characteristics, and understand the genetic and environmental factors that contribute to their resilience. This data-driven approach ensures that restoration efforts are grounded in solid science rather than hope.
            </p>

            <h2
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text, marginTop: "2rem", marginBottom: "1rem" }}
            >
              The Restoration Process: From Nursery to Reef
            </h2>

            <p style={{ color: PALETTE.textSecondary, lineHeight: "1.8" }}>
              Caribbean Coral's restoration process follows a carefully designed sequence:
            </p>

            <p style={{ color: PALETTE.textSecondary, lineHeight: "1.8" }}>
              <strong>1. Identification & Collection:</strong> Scientists identify coral colonies that survived recent bleaching events. These resilient specimens are carefully collected and brought to nurseries where they can be propagated and studied.
            </p>

            <p style={{ color: PALETTE.textSecondary, lineHeight: "1.8" }}>
              <strong>2. Nursery Cultivation:</strong> Coral fragments are grown in underwater nurseries, where conditions are carefully controlled. Young coral colonies develop and strengthen before being transplanted to restoration sites on the reef. This controlled environment allows scientists to monitor growth, health, and adaptation.
            </p>

            <p style={{ color: PALETTE.textSecondary, lineHeight: "1.8" }}>
              <strong>3. Reef Installation:</strong> Restored coral is carefully transplanted onto degraded reef areas. Artificial reef structures provide substrate for coral attachment and create habitat for fish and other marine life. The placement is strategic, designed to maximize survival and ecosystem recovery.
            </p>

            <p style={{ color: PALETTE.textSecondary, lineHeight: "1.8" }}>
              <strong>4. Monitoring & Adaptation:</strong> Restored reefs are continuously monitored. Data on coral health, growth, survival rates, and ecosystem recovery informs ongoing refinement of techniques. This adaptive approach ensures solutions improve over time, creating a feedback loop of learning and optimization.
            </p>

            <h2
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text, marginTop: "2rem", marginBottom: "1rem" }}
            >
              Five Pillars of Impact
            </h2>

            <p style={{ color: PALETTE.textSecondary, lineHeight: "1.8" }}>
              Caribbean Coral's mission extends beyond environmental restoration. The organization measures success across five critical impact areas:
            </p>

            <p style={{ color: PALETTE.textSecondary, lineHeight: "1.8" }}>
              <strong>Healthy Reefs:</strong> Creating a series of healthy, flourishing coral installation sites that serve as models for reef restoration globally.
            </p>

            <p style={{ color: PALETTE.textSecondary, lineHeight: "1.8" }}>
              <strong>Economic Empowerment:</strong> Creating economic opportunities for local and indigenous communities in Bocas del Toro through jobs in restoration, research, and education.
            </p>

            <p style={{ color: PALETTE.textSecondary, lineHeight: "1.8" }}>
              <strong>Community Health:</strong> Achieving marked health improvements in indigenous communities through sustainable livelihoods and environmental stewardship.
            </p>

            <p style={{ color: PALETTE.textSecondary, lineHeight: "1.8" }}>
              <strong>Local Support:</strong> Building participation from community organizations, local leaders, and the Panamanian government to ensure long-term sustainability.
            </p>

            <p style={{ color: PALETTE.textSecondary, lineHeight: "1.8" }}>
              <strong>Global Solutions:</strong> Sharing learning and solutions that can scale to the rest of the world, creating a blueprint for climate-adaptive restoration everywhere.
            </p>

            <h2
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text, marginTop: "2rem", marginBottom: "1rem" }}
            >
              The Partnership with Nayara Bocas del Toro
            </h2>

            <p style={{ color: PALETTE.textSecondary, lineHeight: "1.8" }}>
              Nayara Bocas del Toro's overwater villas float directly above the reefs that Caribbean Coral is restoring. This proximity creates a unique opportunity: guests witness coral restoration firsthand, participate in conservation activities, and understand the urgency of climate-adaptive solutions. The partnership embodies Nayara's philosophy that luxury hospitality must be a force for environmental regeneration, not degradation.
            </p>

            <p style={{ color: PALETTE.textSecondary, lineHeight: "1.8" }}>
              Through this collaboration, guests don't just observe coral restoration—they become part of it. Snorkeling trips reveal the before-and-after transformation of reef sites. Educational programs explain the science of heat-resistant coral. Volunteer opportunities allow visitors to participate in restoration activities. This direct engagement creates a profound connection between luxury travel and ocean conservation.
            </p>

            <h2
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text, marginTop: "2rem", marginBottom: "1rem" }}
            >
              A Blueprint for Global Ocean Recovery
            </h2>

            <p style={{ color: PALETTE.textSecondary, lineHeight: "1.8" }}>
              Caribbean Coral's work in Bocas del Toro is not just a local conservation project—it is a global blueprint. By documenting techniques, sharing data, and building local capacity, the organization is creating a replicable model for climate-adaptive reef restoration worldwide.
            </p>

            <p style={{ color: PALETTE.textSecondary, lineHeight: "1.8" }}>
              The implications are profound. If this approach can be scaled to other reef systems—from the Caribbean to the Indo-Pacific to the Coral Triangle—it offers a pragmatic pathway for ocean recovery in a warming world. It acknowledges that we cannot stop climate change at the local level, but we can build resilience, support communities, and create thriving ecosystems adapted to the reality of our changing planet.
            </p>

            <p style={{ color: PALETTE.textSecondary, lineHeight: "1.8" }}>
              This is not a story of despair. It is a story of innovation, resilience, and hope. It is the story of scientists and communities working together to restore what has been lost, to cultivate what can survive, and to build a future where luxury and conservation are not in conflict, but in harmony.
            </p>

            <p style={{ color: PALETTE.textSecondary, lineHeight: "1.8", fontStyle: "italic" }}>
              Caribbean Coral Restoration Center is a 501(c)(3) nonprofit organization based in Solarte Island, Bocas del Toro, Panama. To learn more about their work or support their mission, visit their website or contact Nayara Bocas del Toro for partnership and volunteer opportunities.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function RelatedLinksSection() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.gradientEnd }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.textTertiary }}
          >
            Related Reading
          </p>
          <h2
            className="text-2xl mb-8"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            Explore More
          </h2>

          <div className="space-y-4">
            <Link
              href="/bocas-del-toro/sustainability"
              className="block p-4 rounded-lg transition-all duration-300 hover:shadow-md"
              style={{ backgroundColor: "#fff", borderLeft: `4px solid ${PALETTE.primary}` }}
            >
              <p
                className="text-[12px] tracking-[0.08em] uppercase mb-2"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.textTertiary }}
              >
                Sustainability
              </p>
              <p
                className="text-[15px]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
              >
                Nayara Bocas del Toro Sustainability Initiatives
              </p>
            </Link>

            <Link
              href="/caribbean-coral"
              className="block p-4 rounded-lg transition-all duration-300 hover:shadow-md"
              style={{ backgroundColor: "#fff", borderLeft: `4px solid ${PALETTE.primary}` }}
            >
              <p
                className="text-[12px] tracking-[0.08em] uppercase mb-2"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.textTertiary }}
              >
                Partnership
              </p>
              <p
                className="text-[15px]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
              >
                Caribbean Coral Restoration Partnership Landing Page
              </p>
            </Link>

            <Link
              href="/journal"
              className="block p-4 rounded-lg transition-all duration-300 hover:shadow-md"
              style={{ backgroundColor: "#fff", borderLeft: `4px solid ${PALETTE.primary}` }}
            >
              <p
                className="text-[12px] tracking-[0.08em] uppercase mb-2"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.textTertiary }}
              >
                Journal
              </p>
              <p
                className="text-[15px]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
              >
                Explore More Stories from Nayara Journal
              </p>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
