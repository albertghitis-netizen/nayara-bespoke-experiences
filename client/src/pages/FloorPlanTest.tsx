/**
 * FLOOR PLAN TEST PAGE — Preview all floor plan prototypes
 * Internal testing only — not linked from navigation
 */
import FloorPlanExplorer from "@/components/FloorPlanExplorer";
import FloorPlanBuilder from "@/components/FloorPlanBuilder";
import FloorPlanScroll from "@/components/FloorPlanScroll";
import FloorPlanGardensSprings from "@/components/FloorPlanGardensSprings";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";

export default function FloorPlanTest() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#EDEEE2" }}>
      <BrandNavigation pageType="property" hideCenterLabel />

      {/* Header */}
      <section className="pt-28 pb-10 px-6 text-center">
        <p
          className="text-[11px] tracking-[0.3em] uppercase mb-3"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "#868B75" }}
        >
          Internal Test Page
        </p>
        <h1
          className="text-3xl md:text-5xl"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#3B2B26" }}
        >
          Floor Plan Explorer
        </h1>
        <p
          className="text-sm mt-4 max-w-lg mx-auto"
          style={{ fontFamily: "var(--font-body)", color: "#3B2B2680" }}
        >
          Architectural blueprints for Nayara properties — Gardens, Springs, and Tented Camp.
        </p>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* NEW: Gardens & Springs Floor Plans */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="pt-8 pb-4 px-6 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full border mb-4" style={{ borderColor: "#28624120" }}>
          <span className="text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: "#286241" }}>
            Gardens & Springs — Improved v2
          </span>
        </div>
        <p className="text-xs mb-6" style={{ fontFamily: "var(--font-body)", color: "#3B2B2680" }}>
          Arenal Pool Casita (families), Rainforest Pool Villa (couples + child), Springs Villa (adults only).
          <br />Capacity-focused design — instantly see who each room is for.
        </p>
      </section>
      <FloorPlanGardensSprings initialTier="casita" />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* PROTOTYPE A: Tab-based Blueprint Explorer (Tented Camp) */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="pt-16 pb-4 px-6 text-center" style={{ backgroundColor: "#EDEEE2" }}>
        <div className="inline-block px-4 py-1.5 rounded-full border mb-4" style={{ borderColor: "#3B2B2620" }}>
          <span className="text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: "#525642" }}>
            Tented Camp — Tab Explorer
          </span>
        </div>
        <p className="text-xs mb-6" style={{ fontFamily: "var(--font-body)", color: "#3B2B2680" }}>
          Click tabs to switch between room tiers. Best for individual room pages.
        </p>
      </section>
      <FloorPlanExplorer initialTier="tent" />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* PROTOTYPE B: Progressive Builder — "Watch It Build" */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="pt-16 pb-4 px-6 text-center" style={{ backgroundColor: "#EDEEE2" }}>
        <div className="inline-block px-4 py-1.5 rounded-full border mb-4" style={{ borderColor: "#3B2B2620" }}>
          <span className="text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: "#525642" }}>
            Tented Camp — Progressive Builder
          </span>
        </div>
        <p className="text-xs mb-6" style={{ fontFamily: "var(--font-body)", color: "#3B2B2680" }}>
          Step through each tier with timeline navigation. Elements add progressively.
        </p>
      </section>
      <FloorPlanBuilder maxStep={3} />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* PROTOTYPE C: Scroll-Driven — "Scroll to Build" */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="pt-16 pb-4 px-6 text-center" style={{ backgroundColor: "#EDEEE2" }}>
        <div className="inline-block px-4 py-1.5 rounded-full border mb-4" style={{ borderColor: "#3B2B2620" }}>
          <span className="text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: "#525642" }}>
            Tented Camp — Scroll to Build
          </span>
        </div>
        <p className="text-xs mb-6" style={{ fontFamily: "var(--font-body)", color: "#3B2B2680" }}>
          Scroll down to watch the blueprint construct itself. Sticky canvas + narrative panels.
          Hover rooms for details.
        </p>
      </section>
      <FloorPlanScroll maxStep={3} />

      <Footer pageType="property" bgColor="#868B75"  textColor="#FFFFFF" />
    </div>
  );
}
