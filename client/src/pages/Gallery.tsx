import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";

export default function Gallery() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f7f5f0" }}>
      <BrandNavigation pageType="brand" hideCenterLabel />

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-32">
        <p
          className="text-[11px] tracking-[0.25em] uppercase mb-6 text-[#5a4a3a]/60"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          Gallery
        </p>
        <h1
          className="text-3xl md:text-4xl lg:text-5xl text-[#3a2a1a] text-center leading-tight"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Coming Soon
        </h1>
        <p
          className="mt-6 text-[15px] text-[#5a4a3a]/70 text-center max-w-md leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}
        >
          A curated collection of moments across all Nayara destinations.
        </p>
      </main>

      <Footer bgColor="#3a2a1a" textColor="#f7f5f0" />
    </div>
  );
}
