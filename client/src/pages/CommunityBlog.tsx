/**
 * ROOTED IN COMMUNITY: HUMAN HOSPITALITY
 * Author: Nayara Resorts | Sep 3, 2025
 * Content from pasted_content_11.txt. No em dashes. Links to women's empowerment blog.
 */

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import { EnhancedArticleSchema } from "@/components/SEOSchemaEnhanced";
import BrandNavigation from "@/components/BrandNavigation";
import BlogAuthorReadTime from "@/components/BlogAuthorReadTime";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const PALETTE = {
  espresso: "#3B2B26",
  warm: "#5A4A3A",
  cream: "#F7F5F0",
  stone: "#E8E2D8",
  accent: "#5B7F4A",
  text: "#2C2016",
  muted: "#5A4A3A",
  forest: "#2D4A2D",
};

const RELATED = [
  {
    title: "Women's Empowerment: Housing for Single Mothers",
    url: "/blog/womens-empowerment",
    image: `${CDN}/prop-gardens_5931d8af.jpg`,
    tag: "Community",
  },
  {
    title: "Green Globe Certification",
    url: "/blog/green-globe-certification",
    image: `${CDN}/prop-tented_0fd865a2.jpg`,
    tag: "Sustainability",
  },
  {
    title: "The Nayara Story",
    url: "/blog/nayara-story",
    image: `${CDN}/pura-vida-hero_567b6d5c.jpeg`,
    tag: "Brand",
  },
];

export default function CommunityBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.cream }}>
      <EnhancedArticleSchema
        image="/manus-storage/community-hero-ultrawide_6075f665.jpg"
        headline="Rooted in Community: How Nayara Supports Local People Across Four Destinations: Human Hospitality"
        description="At the heart of Nayara's approach to regenerative travel is not just the environment, but the people who care for it, depend on it, and shape the guest experience."
        author={{ name: "Nayara Resorts", expertise: ["Luxury Hospitality", "Sustainable Tourism", "Community Development"] }}
        datePublished="2025-09-03"
        url="https://nayararesorts.manus.space/blog/rooted-in-community"
      />

      {/* BRAND NAVIGATION */}
      <BrandNavigation pageType="content" />
      {/* HERO IMAGE */}
      <section
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "21/9", minHeight: "400px", maxHeight: "70vh" }}
      >
        <img
          src="/manus-storage/community-hero-ultrawide_6075f665.jpg"
          alt="Nayara kitchen team celebrating together"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
      </section>
      {/* TITLE BLOCK */}
      <motion.section
        style={{ backgroundColor: PALETTE.cream }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-8">
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span
              className="text-[11px] font-medium tracking-[0.35em]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.espresso }}
            >
              COMMUNITY
            </span>
          </div>
          <h1
            className="text-3xl md:text-[40px] lg:text-[46px] leading-[1.15] mb-5"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
          >
            Rooted in Community: Human Hospitality
          </h1>
        </div>
      </motion.section>
      {/* AUTHOR + READING TIME */}
      <BlogAuthorReadTime
        author="Albert Ghitis"
        authorRole="Nayara Resorts"
        date="September 3, 2025"
        wordCount={2800}
      />

      {/* INTRO */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              In <Link href="/blog/sunlit-sustainability" className="underline underline-offset-4" style={{ color: PALETTE.accent }}>Sunlit Sustainability</Link> we traced the power of the Sun and how it fuels our commitment to environmental stewardship and clean energy.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Now, we shift our focus from the celestial to the human: to the communities that bring each Nayara destination to life. At the heart of what we call beyond sustainability, our approach to regenerative travel, is not just the environment, but the people who care for it, depend on it, and shape the guest experience in ways no amenity ever could.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Because while the Moon invites reflection and the Sun inspires action, it is the community, our team members, our neighbors, our partners, who give it all meaning. Hospitality, for us, begins not at check-in, but in how we care for the places we call home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE VOLCANO THAT CHANGED EVERYTHING */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.stone }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className="uppercase tracking-[0.3em] text-[11px] mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
            >
              Costa Rica
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              How Arenal Volcano Changed La Fortuna and Nayara's Community Role
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              For generations, the town of La Fortuna lived off the land. Subsistence farming shaped daily life: cattle, beans, plantains. Then on the morning of July 29, 1968, the ground shook and everything changed.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Without warning, the Arenal Volcano, dormant for nearly 500 years, erupted violently, launching boulders the size of trucks, belching ash miles into the sky, and sending rivers of lava across the landscape. Within minutes, three surrounding villages were erased and several lives were lost, many of them buried under ash and stone as they fled.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              And yet, like a phoenix rising out of that very ash, something remarkable happened.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Scientists, volcanologists, and journalists from around the world came to study the mountain. Adventurers and photographers followed. Hotels sprang up to house them. Curiosity led to tourism. Tourism led to conservation.
            </p>
            <p
              className="text-[20px] md:text-[22px] leading-[1.7] italic my-8 py-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              The volcano that had taken so much began, paradoxically, to give back.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Over the following decades, hot springs were developed, rainforest regenerated, and wildlife returned. The town of La Fortuna, once considered remote and rural, became a center of ecotourism in Latin America and began its path towards becoming a world leader in environmental protection.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              In the 1980s, it had one of the highest deforestation rates in the world. Only about 21% of its land remained forested. Through bold conservation policies and a growing ecotourism movement, that figure has now risen to over 50%. According to the World Bank and the UN Environment Programme, it is one of the greatest environmental turnarounds ever recorded.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              This small nation remains one of the few in the world without a standing army. Instead of investing in military infrastructure, it chose to fund health care, education, environmental conservation, and social equity. It leads global indexes in happiness, sustainability, and biodiversity not because of its size, but because of its values.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Those are the values that guide and inspire our work at Nayara, where we believe that travel, when done right, can be a force for good.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Over 90 percent of our Costa Rica team is from the surrounding region. Many grew up in the shadow of the volcano. Some remember when the land was still pasture, or when the rainforest had not yet reclaimed the hills.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              We do not just provide jobs. We offer careers, mentorship, and the kind of long-term support that helps people build futures. Housekeepers become department heads. Line cooks become chefs. Local guides become conservation educators. For many, it is the first time their family has had access to steady income, health insurance, or educational opportunities for their children.
            </p>
            <p
              className="text-[20px] md:text-[22px] leading-[1.7] italic my-8 py-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              What began with a volcano has become something even more powerful: a thriving community built on pride, dignity, and the belief that where you come from should never limit where you are going.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Nowhere is that commitment more visible than in our upcoming housing project for single mothers in La Fortuna. While many women in the region work long hours in tourism, access to safe, stable housing remains out of reach. We are working to change that. In partnership with local organizations, Nayara is developing a program to provide dignified homes for mothers and their children, designed not just as shelter, but as a true foundation for the future.{" "}
              <Link href="/blog/womens-empowerment" className="underline underline-offset-4" style={{ color: PALETTE.accent, fontWeight: 500 }}>
                Read more about our Women's Empowerment initiative
              </Link>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BOCAS DEL TORO */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className="uppercase tracking-[0.3em] text-[11px] mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
            >
              Panama
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              Community Impact and Regeneration in Bocas del Toro Panama
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Bocas del Toro is one of Panama's most beautiful regions: lush, vibrant, and full of promise. But for much of its history, that promise has gone unrealized. Though ships once passed through its waters carrying bananas and cargo to the world, the wealth rarely stayed.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Then came the Panama Canal.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Completed in 1914, the canal connected oceans and redrew global trade. But it also concentrated infrastructure and investment near the capital, leaving outlying regions like Bocas behind.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              At Nayara Bocas del Toro, we see this not as a limitation, but as a call to action.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              We focus on local hiring, year-round employment, and robust skills development in hospitality, culinary arts, and language. Many of our team members are the first in their families to work in formal tourism.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              We support schools, donate educational technology, and partner with grassroots organizations to expand access across remote islands. Our teams also lead coastal cleanups, health awareness campaigns, and seasonal drives that provide essential supplies.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              We are now building a micro-grant program to fund small-scale entrepreneurship, especially for women and youth, and we prioritize local sourcing, connecting guests directly to the work of farmers, fishers, and artisans.
            </p>
            <p
              className="text-[20px] md:text-[22px] leading-[1.7] italic my-8 py-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              Just as Costa Rica redirected its resources from war to wellbeing, we believe tourism in Bocas can shift from extraction to inclusion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ATACAMA */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.stone }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className="uppercase tracking-[0.3em] text-[11px] mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
            >
              Chile
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              Community Partnerships in the Atacama Desert at Nayara Alto Atacama
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              In Chile, the story of transformation begins with silence.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              The Atacama Desert, the driest on Earth, was once seen as uninhabitable. But it has always been home to Indigenous communities like the Lickan-Antay, whose relationship with the land predates the Inca and the Spanish by thousands of years.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              In the 19th century, the Atacama became the focus of the War of the Pacific, fought over its mineral wealth. The desert was mined, mapped, and claimed, until little remained but silence and salt.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              But in time, that silence became sacred.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Scientists came to study the stars. Travelers arrived in search of something elemental. The Atacama transformed not through conquest, but through reverence.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              At Nayara Alto Atacama, we honor that shift by working hand-in-hand with the Lickan-Antay community to ensure tourism uplifts, not displaces. Our design blends into the landscape. Our excursions are led by locals who share ancestral knowledge. Our observatory invites not just stargazing, but storytelling.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              We also support education, heritage preservation, and climate resilience in a region where every drop of water and every degree of temperature carries weight. Because here, regeneration means survival, not only of ecosystems, but of culture and dignity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* RAPA NUI */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className="uppercase tracking-[0.3em] text-[11px] mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
            >
              Easter Island
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              Reviving Rapa Nui Culture Through Community at Nayara Hangaroa
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Thousands of kilometers off the Chilean coast lies Easter Island, home to one of the world's most resilient cultures.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              The island's famous Moai statues are known globally, but the people who built them, the Rapa Nui, have endured a far lesser-known story. After centuries of environmental stress and external trauma, including colonization, disease, slavery, and land seizure, the population was nearly wiped out by the 19th century.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              And yet, the culture persisted.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              Today, Rapa Nui is reclaiming its story. And at Nayara Hangaroa, we are humbled to be part of that reclamation.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              We are the only hotel on the island partially owned by a local Rapa Nui family, the Hito family, whose legacy and leadership continue to shape the cultural life of the island. Our architecture draws inspiration from traditional boat houses. Our programs are designed in partnership with local artisans, dancers, and storytellers. And our excursions center Rapa Nui perspectives, not outsider interpretations.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
            >
              We also support cultural education, language revitalization, and archaeological preservation projects. Because on an island where every tree, every reef, and every word matters, regeneration is not just ecological. It is existential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE HUMAN THREAD */}
      <section className="py-16 md:py-20 px-6 md:px-12" style={{ backgroundColor: PALETTE.forest }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "white" }}
            >
              The Human Thread of Regenerative Tourism at Nayara
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.85)" }}
            >
              Whether in the rainforest of Costa Rica, the archipelago of Bocas del Toro, the dry valleys of the Atacama, or the sacred shores of Rapa Nui, the communities around Nayara tell a shared story.
            </p>
            <p
              className="text-[16px] md:text-[18px] leading-[1.9] mb-6"
              style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.85)" }}
            >
              Not one of charity, but of commitment.
              <br />
              Not one of escape, but of return.
              <br />
              Not one of tourism as transaction, but as transformation.
            </p>
            <p
              className="text-[20px] md:text-[22px] leading-[1.7] italic"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "white" }}
            >
              This is the future of travel as we see it. Not just a place to stay. A way to travel with meaning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PILLAR SERIES */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className="uppercase tracking-[0.3em] text-[11px] mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
            >
              The Full Pillar Series
            </p>
            <h2
              className="text-2xl md:text-3xl mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              Explore the Series
            </h2>
            <div className="space-y-4">
              {[
                { label: "Sunlit Sustainability: Nature-Powered", url: "/blog/sunlit-sustainability" },
                { label: "Rooted in Community: People First", url: "/blog/rooted-in-community", active: true },
                { label: "Nayara by Night: Of Moon & Stars", url: "/blog/nayara-by-night" },
                { label: "Nature Based Wellness", url: "/blog/wellness-by-colors" },
                { label: "Why Nayara is Latin America's Top Brand", url: "/blog/nayara-story" },
              ].map((item) => (
                <Link key={item.url} href={item.url}>
                  <div
                    className="flex items-center gap-4 py-3 px-4 transition-colors duration-300 cursor-pointer"
                    style={{
                      borderLeft: item.active ? `3px solid ${PALETTE.accent}` : `1px solid transparent`,
                      backgroundColor: item.active ? "rgba(91,127,74,0.06)" : "transparent",
                    }}
                  >
                    <span
                      className="text-[15px]"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: item.active ? PALETTE.accent : PALETTE.muted,
                        fontWeight: item.active ? 600 : 400,
                      }}
                    >
                      {item.label}
                    </span>
                    {item.active && (
                      <span
                        className="text-[10px] tracking-[0.15em] uppercase px-2 py-0.5"
                        style={{
                          fontFamily: "var(--font-body)",
                          color: PALETTE.accent,
                          border: `1px solid ${PALETTE.accent}`,
                          fontWeight: 600,
                        }}
                      >
                        Current
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: PALETTE.stone }}>
        <div className="max-w-5xl mx-auto">
          <p
            className="uppercase tracking-[0.3em] text-[11px] mb-4 text-center"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
          >
            Continue Reading
          </p>
          <h2
            className="text-3xl md:text-4xl mb-12 text-center"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
          >
            More from the Journal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RELATED.map((article) => (
              <Link key={article.url} href={article.url}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden mb-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </div>
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase mb-2"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
                  >
                    {article.tag}
                  </p>
                  <h3
                    className="text-lg"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
                  >
                    {article.title}
                  </h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* ── EXPLORE MORE ── */}
      <section style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-5xl mx-auto px-8 md:px-16 pt-16 pb-16">
          <p className="uppercase tracking-[0.3em] text-[11px] mb-4 text-center" style={{ fontWeight: 600, color: PALETTE.accent }}>
            Continue Reading
          </p>
          <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Explore More
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link key="/blog/womens-empowerment" href="/blog/womens-empowerment">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden mb-4 rounded-lg">
                    <img
                      src="https://blog.nayararesorts.com/hubfs/PHOTO-2026-03-02-19-55-27.jpg"
                      alt="Women's Empowerment Through Housing at Nayara"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontWeight: 600, color: PALETTE.accent }}>
                    Community
                  </p>
                  <h3 className="text-lg" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
                    Women's Empowerment Through Housing at Nayara
                  </h3>
                </motion.div>
              </Link>
              <Link key="/blog/green-globe-certification" href="/blog/green-globe-certification">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden mb-4 rounded-lg">
                    <img
                      src="/manus-storage/greenglobe-card-pool-arenal_9ba2f8e8.jpg"
                      alt="Green Globe Certification at Nayara"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontWeight: 600, color: PALETTE.accent }}>
                    Sustainability
                  </p>
                  <h3 className="text-lg" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
                    Green Globe Certification at Nayara
                  </h3>
                </motion.div>
              </Link>
              <Link key="/blog/reforestation-wildlife" href="/blog/reforestation-wildlife">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden mb-4 rounded-lg">
                    <img
                      src="/manus-storage/reforestation-wildlife-cover_d766bbf9.jpg"
                      alt="Reforestation and Wildlife Corridors at Nayara"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontWeight: 600, color: PALETTE.accent }}>
                    Conservation
                  </p>
                  <h3 className="text-lg" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
                    Reforestation and Wildlife Corridors at Nayara
                  </h3>
                </motion.div>
              </Link>
          </div>
        </div>
      </section>


      <Footer textColor="#FFFFFF" />
    </div>
  );
}
