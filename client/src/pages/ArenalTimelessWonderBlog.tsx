import { motion } from "framer-motion";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function ArenalTimelessWonderBlog() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BrandNavigation />
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-gradient-to-br from-[#3a2a1a] to-[#5a4a3a]">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full flex flex-col justify-end items-center pb-12 px-6 md:px-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-2xl md:text-4xl lg:text-5xl text-center leading-tight max-w-3xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Arenal, Costa Rica: A Timeless Natural Wonder
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="text-[#5a4a3a] text-lg leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Full article coming soon. We're crafting this story with the care it deserves.
            </p>
            <Link
              href="/journal"
              className="inline-block px-8 py-3 border border-[#3a2a1a]/30 text-[#3a2a1a] text-sm tracking-[0.15em] uppercase hover:bg-[#3a2a1a] hover:text-white transition-all duration-300"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Back to Journal
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
