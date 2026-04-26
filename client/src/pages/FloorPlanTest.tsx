/**
 * FLOOR PLAN TEST PAGE — Preview all floor plan prototypes
 * Internal testing only — not linked from navigation
 */
import FloorPlanExplorer from "@/components/FloorPlanExplorer";
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
          Interactive architectural blueprints for all Tented Camp room types.
          Click tabs to see each tier build itself.
        </p>
      </section>

      {/* Prototype A: Light mode — All tiers */}
      <div className="mb-4 px-6 text-center">
        <p className="text-[10px] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "#868B75" }}>
          Light Mode — All Tiers
        </p>
      </div>
      <FloorPlanExplorer initialTier="tent" />

      {/* Prototype B: Dark mode — All tiers */}
      <div className="mb-4 px-6 text-center">
        <p className="text-[10px] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "#868B75" }}>
          Dark Mode — All Tiers
        </p>
      </div>
      <FloorPlanExplorer initialTier="family" darkMode />

      {/* Prototype C: Single tier — how it would look on NayaraTent page */}
      <div className="mb-4 px-6 text-center">
        <p className="text-[10px] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "#868B75" }}>
          Single Tier Mode (Nayara Tent page)
        </p>
      </div>
      <FloorPlanExplorer initialTier="tent" availableTiers={["tent"]} />

      {/* Prototype D: Two tiers — how it would look on FamilyTent page */}
      <div className="mb-4 px-6 text-center">
        <p className="text-[10px] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "#868B75" }}>
          Two Tier Mode (Family Tent page — show tent + family)
        </p>
      </div>
      <FloorPlanExplorer initialTier="family" availableTiers={["tent", "family"]} darkMode />

      <Footer pageType="property" bgColor="#868B75" />
    </div>
  );
}
