/**
 * Not Found — 404 Page
 */
import { Link } from "wouter";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";

const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

export default function NotFound() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f7f5f0" }}>
      <BrandNavigation pageType="brand" />
      <section className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#5a4a3a]/50 block mb-4" style={body}>404</span>
        <h1 className="text-3xl md:text-5xl text-[#3B2B26] leading-tight mb-6" style={display}>Page Not Found</h1>
        <p className="text-[#5a4a3a]/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8" style={body}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <span
            className="inline-block px-8 py-3 border border-[#3a2a1a]/30 text-[11px] tracking-[0.25em] uppercase text-[#3a2a1a] hover:bg-[#3a2a1a] hover:text-white transition-all duration-300 cursor-pointer"
            style={body}
          >
            Return Home
          </span>
        </Link>
      </section>
      <Footer textColor="#FFFFFF" />
    </div>
  );
}
