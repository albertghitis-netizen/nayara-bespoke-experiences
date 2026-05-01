/**
 * RAINFOREST ROMANCE — Pura Vida Sub-page (Coming Soon)
 * Placeholder page for the Rainforest Romance pillar
 */
import { motion } from "framer-motion";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Heart, Sparkles, Wine, Flame } from "lucide-react";
import { Link } from "wouter";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;
const bodyMedium = { fontFamily: "var(--font-body)", fontWeight: 500 } as const;

const C = {
  bg: "#f7f5f0",
  espresso: "#3a2a1a",
  secondary: "#5a4a3a",
  accent: "#b08d57",
  muted: "#8a7a6a",
  rose: "#8B5E5E",
};

const ROMANTIC_CDN = {
  // Romantic images
  img01: "/manus-storage/IMG_5549_a065465c.jpg",
  img02: "/manus-storage/B9DAC797-7E7D-4A88-ADCA-D328AE242B61_22a0b9a0.jpeg",
  img03: "/manus-storage/D5B8D34F-F64D-40FB-A423-37B07CEC09B7_1b835e11.jpeg",
  img04: "/manus-storage/B8B44CF3-1AE1-4364-B153-3F6AF1505F19_44309289.jpeg",
  img05: "/manus-storage/EE1B4433-CD67-4559-B676-437DDBE1519A_540cf2a6.jpeg",
  img06: "/manus-storage/00E1BFC4-B05F-4C50-9C61-44CF50171759_85576b0c.jpeg",
  img07: "/manus-storage/434E57A8-AD97-48A4-8E62-331ADD7FD114_960bce48.jpeg",
  img08: "/manus-storage/0955A168-A0FD-45A6-BB84-93B31BC7D07F_5a2d3112.jpeg",
  img09: "/manus-storage/IMG_6967_df3a617e.jpg",
  img10: "/manus-storage/6D409FD9-37EB-43E2-80FB-D1586D844D75_faa3c268.jpeg",
  img11: "/manus-storage/270A875F-DE67-4608-8CBA-49018BF5918F_8ab0e5f6.jpeg",
  img12: "/manus-storage/3F17B41E-5BB1-47AB-914A-D269C5632929_cc50a649.jpeg",
  img13: "/manus-storage/E98A8A53-9324-49B3-9C3C-E2D4F2B52A7E_9b339538.jpeg",
  img14: "/manus-storage/DDE1CB40-DA7B-49BC-89EA-25093023841D_98c64471.jpeg",
  img15: "/manus-storage/A84E13DC-0D23-4B7A-8B26-5AAE39819028_b7436731.jpeg",
  img16: "/manus-storage/584C4029-46D0-44B9-8351-0FE5A943506D_0b91d9a2.jpeg",
  // Romantic videos
  video01: "/manus-storage/original_952f048d.MOV",
  video02: "/manus-storage/B186F7C4-AB8B-4134-80B3-0836D93C49F8_5ebbd1e3.MP4",
  video03: "/manus-storage/welovebocasdeltororeels3_22961dcc.MOV",
  video04: "/manus-storage/BB3780B6-02D3-4DCA-AD24-417D24C98854_2c6fb304.MP4",
};

const TEASER_ITEMS = [
  {
    icon: Heart,
    title: "Private Springs Villa",
    desc: "Adults-only Nayara Springs — each villa with its own plunge pool fed by natural hot springs.",
  },
  {
    icon: Sparkles,
    title: "Couples Spa Rituals",
    desc: "Side-by-side treatments in open-air treatment rooms, surrounded by the sounds of the rainforest.",
  },
  {
    icon: Wine,
    title: "Private Dining Under the Canopy",
    desc: "Chef-curated multi-course dinners set in the forest, lit by candlelight and fireflies.",
  },
  {
    icon: Flame,
    title: "Volcanic Hot Springs at Sunset",
    desc: "The thermal waters of Arenal, warmed by the volcano itself — the most romantic hour is golden.",
  },
];

export default function RainforestRomance() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: C.bg }}>
      <BrandNavigation pageType="content" />
      <HeroSection />
      <TeaserSection />
      <GallerySection />
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-900 via-amber-900 to-stone-900" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />

      {/* Back to Pura Vida */}
      <div className="absolute top-24 left-0 right-0 z-20 flex justify-center">
        <Link
          href="/costa-rica"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 text-white/80" />
          <span
            className="text-white/80 text-[11px] tracking-[0.2em] uppercase"
            style={body}
          >
            Pura Vida
          </span>
        </Link>
      </div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center pb-12 md:pb-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-3xl md:text-5xl lg:text-6xl tracking-wide text-center leading-[1.1]"
          style={heading}
        >
          Rainforest Romance
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-4 text-white/60 text-sm md:text-base tracking-[0.1em] uppercase text-center"
          style={body}
        >
          Where nature writes the love story
        </motion.p>
      </div>
    </section>
  );
}

function TeaserSection() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Coming Soon badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-[10px] tracking-[0.3em] uppercase px-4 py-1.5 border rounded-full mb-6"
            style={{ fontFamily: "var(--font-body)", color: C.accent, borderColor: C.accent + "40" }}
          >
            Coming Soon
          </span>
          <h2
            className="text-2xl md:text-3xl tracking-wide mb-4"
            style={{ ...heading, color: C.espresso }}
          >
            Romance, Naturally
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ ...body, color: C.secondary }}
          >
            Some places are made for two. Between the volcanic hot springs, the
            adults-only sanctuary of Nayara Springs, and private dining beneath
            the canopy, the rainforest becomes the most intimate setting on Earth.
          </p>
        </motion.div>

        {/* Teaser grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {TEASER_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-xl border"
              style={{ borderColor: C.espresso + "10", backgroundColor: C.bg }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: C.rose + "15" }}
              >
                <item.icon className="w-5 h-5" style={{ color: C.rose }} />
              </div>
              <div>
                <h3
                  className="text-base mb-1"
                  style={{ ...bodyMedium, color: C.espresso }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ ...body, color: C.muted }}
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Link
            href="/curated-excursions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border hover:bg-[#3a2a1a] hover:text-white transition-all duration-300 text-[12px] tracking-[0.15em] uppercase"
            style={{ ...bodyMedium, color: C.espresso, borderColor: C.espresso + "30" }}
          >
            Explore Curated Excursions
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="py-24 md:py-32 px-6" style={{ backgroundColor: C.bg }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-2xl md:text-3xl tracking-wide mb-4"
            style={{ ...heading, color: C.espresso }}
          >
            Moments of Intimacy
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ ...body, color: C.secondary }}
          >
            Every moment captured in the rainforest tells a story of connection, passion, and natural beauty.
          </p>
        </motion.div>

        {/* Romantic Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Row 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img src={ROMANTIC_CDN.img01} alt="Romantic moment" className="w-full h-64 object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img src={ROMANTIC_CDN.img02} alt="Couple in nature" className="w-full h-64 object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img src={ROMANTIC_CDN.img03} alt="Sunset romance" className="w-full h-64 object-cover" />
          </motion.div>

          {/* Row 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img src={ROMANTIC_CDN.img04} alt="Intimate moment" className="w-full h-64 object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img src={ROMANTIC_CDN.img05} alt="Nature romance" className="w-full h-64 object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img src={ROMANTIC_CDN.img06} alt="Rainforest romance" className="w-full h-64 object-cover" />
          </motion.div>

          {/* Row 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img src={ROMANTIC_CDN.img07} alt="Couple adventure" className="w-full h-64 object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img src={ROMANTIC_CDN.img08} alt="Romantic getaway" className="w-full h-64 object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img src={ROMANTIC_CDN.img09} alt="Sunset moment" className="w-full h-64 object-cover" />
          </motion.div>

          {/* Row 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img src={ROMANTIC_CDN.img10} alt="Intimate setting" className="w-full h-64 object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img src={ROMANTIC_CDN.img11} alt="Nature connection" className="w-full h-64 object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img src={ROMANTIC_CDN.img12} alt="Romantic escape" className="w-full h-64 object-cover" />
          </motion.div>

          {/* Row 5 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img src={ROMANTIC_CDN.img13} alt="Couple moment" className="w-full h-64 object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img src={ROMANTIC_CDN.img14} alt="Rainforest beauty" className="w-full h-64 object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img src={ROMANTIC_CDN.img15} alt="Intimate experience" className="w-full h-64 object-cover" />
          </motion.div>

          {/* Row 6 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img src={ROMANTIC_CDN.img16} alt="Final moment" className="w-full h-64 object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
