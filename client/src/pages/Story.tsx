import BrandNavigation from "@/components/BrandNavigation";

export default function Story() {
  return (
    <div className="min-h-screen bg-[#f7f5f0] flex flex-col">
      <BrandNavigation pageType="brand" centerLabel="The Nayara Story" />
      <div className="flex-1 flex items-center justify-center">
        <h1
          className="text-[#3a2a1a] text-3xl tracking-wide"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          The Nayara Story
        </h1>
      </div>
    </div>
  );
}
