/**
 * Logo Preview — temporary page to test the stacked lockup
 * Leaf on top, NAYARA wordmark below in Cormorant Garamond
 */

const LEAF_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-leaf-beige_abbaf178.png";

export default function LogoPreview() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-16" style={{ backgroundColor: "#1a1510" }}>
      
      {/* Version 1: Small / Nav size */}
      <div className="flex flex-col items-center">
        <p className="text-white/30 text-xs tracking-widest mb-8" style={{ fontFamily: "var(--font-body)" }}>Nav Size</p>
        <div className="flex flex-col items-center gap-1">
          <img src={LEAF_URL} alt="Nayara leaf" className="w-6 h-auto opacity-90" />
          <span
            className="text-[#F5F1EB] tracking-[0.35em]"
            style={{
              fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              fontWeight: 300,
              fontSize: "14px",
              lineHeight: 1,
            }}
          >
            Nayara
          </span>
        </div>
      </div>

      {/* Version 2: Medium / Hero size */}
      <div className="flex flex-col items-center">
        <p className="text-white/30 text-xs tracking-widest mb-8" style={{ fontFamily: "var(--font-body)" }}>Hero Size</p>
        <div className="flex flex-col items-center gap-2">
          <img src={LEAF_URL} alt="Nayara leaf" className="w-10 h-auto opacity-90" />
          <span
            className="text-[#F5F1EB] tracking-[0.4em]"
            style={{
              fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              fontWeight: 300,
              fontSize: "24px",
              lineHeight: 1,
            }}
          >
            Nayara
          </span>
        </div>
      </div>

      {/* Version 3: Large / Splash size */}
      <div className="flex flex-col items-center">
        <p className="text-white/30 text-xs tracking-widest mb-8" style={{ fontFamily: "var(--font-body)" }}>Splash Size</p>
        <div className="flex flex-col items-center gap-3">
          <img src={LEAF_URL} alt="Nayara leaf" className="w-14 h-auto opacity-90" />
          <span
            className="text-[#F5F1EB] tracking-[0.45em]"
            style={{
              fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              fontWeight: 300,
              fontSize: "40px",
              lineHeight: 1,
            }}
          >
            Nayara
          </span>
        </div>
      </div>

      {/* Version 4: With property name */}
      <div className="flex flex-col items-center">
        <p className="text-white/30 text-xs tracking-widest mb-8" style={{ fontFamily: "var(--font-body)" }}>Property Lockup</p>
        <div className="flex flex-col items-center gap-2">
          <img src={LEAF_URL} alt="Nayara leaf" className="w-10 h-auto opacity-90" />
          <span
            className="text-[#F5F1EB] tracking-[0.4em]"
            style={{
              fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              fontWeight: 300,
              fontSize: "24px",
              lineHeight: 1,
            }}
          >
            Nayara
          </span>
          <span
            className="text-[#F5F1EB]/50 tracking-[0.3em]"
            style={{
              fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              fontWeight: 300,
              fontSize: "13px",
              lineHeight: 1,
            }}
          >
            Gardens
          </span>
        </div>
      </div>

      {/* On light background */}
      <div className="w-full py-20 flex flex-col items-center gap-12" style={{ backgroundColor: "#F5F1EB" }}>
        <p className="text-[#2C2418]/30 text-xs tracking-widest mb-4" style={{ fontFamily: "var(--font-body)" }}>On Light Background</p>
        
        <div className="flex gap-20 items-start">
          {/* Brand only */}
          <div className="flex flex-col items-center gap-2">
            <img src={LEAF_URL} alt="Nayara leaf" className="w-10 h-auto brightness-[0.2]" />
            <span
              className="text-[#2C2418] tracking-[0.4em]"
              style={{
                fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                fontWeight: 300,
                fontSize: "24px",
                lineHeight: 1,
              }}
            >
              Nayara
            </span>
          </div>

          {/* With property */}
          <div className="flex flex-col items-center gap-2">
            <img src={LEAF_URL} alt="Nayara leaf" className="w-10 h-auto brightness-[0.2]" />
            <span
              className="text-[#2C2418] tracking-[0.4em]"
              style={{
                fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                fontWeight: 300,
                fontSize: "24px",
                lineHeight: 1,
              }}
            >
              Nayara
            </span>
            <span
              className="text-[#2C2418]/40 tracking-[0.3em]"
              style={{
                fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                fontWeight: 300,
                fontSize: "13px",
                lineHeight: 1,
              }}
            >
              Alto Atacama
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}
