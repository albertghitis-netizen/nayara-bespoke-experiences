/**
 * NAYARA GALLERY — Placeholder
 * All gallery data is preserved in @/data/gallery.ts for future use.
 * This page intentionally loads no media to keep the site fast.
 */

import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";

const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

export default function Gallery() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f7f5f0" }}>
      <BrandNavigation pageType="brand" />

      <section className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <span
          className="text-[10px] tracking-[0.3em] uppercase text-[#5a4a3a]/50 block mb-4"
          style={body}
        >
          Gallery
        </span>
        <h1
          className="text-3xl md:text-5xl text-[#3B2B26] leading-tight mb-6"
          style={display}
        >
          Coming Soon
        </h1>
        <p
          className="text-[#5a4a3a]/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto"
          style={body}
        >
          Our curated collection of photography and video from across all six
          Nayara destinations is being prepared. Check back soon.
        </p>
      </section>

      <Footer />
    </div>
  );
}
