import { ReactNode } from "react";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";

interface GradientPageLayoutProps {
  children: ReactNode;
  showDummySections?: boolean;
  pageType?: "property" | "brand" | "content";
  centerLabel?: string;
}

/**
 * Reusable layout wrapper for non-property pages
 * Provides:
 * - Gradient background (light beige → golden → rust-brown)
 * - Brand navigation
 * - Scroll progress indicator
 * - Optional dummy H3-H10 sections for visualization
 * - Footer
 */
export function GradientPageLayout({
  children,
  showDummySections = true,
  pageType = "brand",
  centerLabel = "Nayara Resorts",
}: GradientPageLayoutProps) {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(to bottom, #f5f3f0 0%, #d4a858 50%, #784a1a 100%)",
      }}
    >
      <BrandNavigation pageType={pageType} centerLabel={centerLabel} />
      {children}
      {showDummySections && (
        <>
          <DummySection label="H3 , Rooms & Accommodations" />
          <GradientSpacer />
          <DummySection label="H4 , Experiences" />
          <GradientSpacer />
          <DummySection label="H5 , Wellness & Spa" />
          <GradientSpacer />
          <DummySection label="H6 , Dining" />
          <GradientSpacer />
          <DummySection label="H7 , Gallery" />
          <GradientSpacer />
          <DummySection label="H8 , Events" />
          <GradientSpacer />
          <DummySection label="H9 , Sustainability" />
          <GradientSpacer />
          <DummySection label="H10 , Contact" />
        </>
      )}
      <Footer />
    </div>
  );
}

function GradientSpacer() {
  return (
    <section
      className="w-full"
      style={{
        paddingTop: "clamp(120px, 24vw, 240px)",
        paddingBottom: "clamp(120px, 24vw, 240px)",
      }}
    />
  );
}

function DummySection({ label }: { label: string }) {
  return (
    <section className="w-full py-20 md:py-32 px-6 md:px-10">
      <div className="max-w-[1300px] mx-auto">
        <h2
          className="text-[#3B2B26]/40 mb-8"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "clamp(24px, 3.5vw, 36px)",
          }}
        >
          {label}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full aspect-video bg-[#3B2B26]/10 rounded-lg flex items-center justify-center">
            <span className="text-[#3B2B26]/30 text-sm">Image Placeholder</span>
          </div>
          <div className="w-full aspect-video bg-[#3B2B26]/10 rounded-lg flex items-center justify-center">
            <span className="text-[#3B2B26]/30 text-sm">Image Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
}
