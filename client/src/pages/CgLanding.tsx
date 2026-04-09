/**
 * CG Home Services — Landing Page
 * Lion crest logo, home restoration, charcoal/gold palette
 */
export default function CgLanding() {
  const LION_LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/cg-logo-lion-GDPeCQcYfHoeZZ7oR8KUAb.png";

  const services = [
    { icon: "\u25C6", title: "Full Home Restoration", desc: "Complete interior and exterior restoration — from structural repairs to finishing touches. We bring homes back to life." },
    { icon: "\u25A0", title: "Water & Fire Damage", desc: "Emergency response and full remediation for water damage, fire damage, and mold. Fast, thorough, and insured." },
    { icon: "\u2605", title: "Kitchen & Bath Remodeling", desc: "Custom kitchen and bathroom renovations that blend functionality with timeless design. Quality materials, expert installation." },
    { icon: "\u2699", title: "Structural Repairs", desc: "Foundation work, framing, load-bearing walls, and structural reinforcement. We fix what others can't." },
    { icon: "\u25C8", title: "Flooring & Finishes", desc: "Hardwood refinishing, tile work, custom trim, and premium finishes that elevate every room." },
    { icon: "\u25B6", title: "Exterior & Roofing", desc: "Siding, roofing, windows, and exterior restoration that protects your investment and boosts curb appeal." },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#2a2a2a", background: "#fff", minHeight: "100vh" }}>
      {/* Google Font */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(42,42,42,0.08)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img src={LION_LOGO} alt="CG" style={{ height: 52 }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: 20, letterSpacing: "0.02em" }}>CG</div>
              <div style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#7a7268", fontWeight: 500 }}>Home Services</div>
            </div>
          </div>
          <a href="#contact" style={{ background: "#c8a45a", color: "#fff", padding: "10px 24px", borderRadius: 6, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Get a Free Estimate</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "160px 24px 100px", background: "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)", color: "#fff", textAlign: "center" as const, position: "relative" as const, overflow: "hidden" as const }}>
        <div style={{ position: "relative" as const, zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
          <img src={LION_LOGO} alt="CG Home Services" style={{ height: 110, marginBottom: 32 }} />
          <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.02em" }}>Home Restoration Done <span style={{ color: "#c8a45a" }}>Right</span></h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(255,255,255,0.7)", maxWidth: 600, margin: "0 auto 36px", fontWeight: 300 }}>Expert craftsmanship, honest pricing, and results that stand the test of time. We restore homes to their full potential.</p>
          <a href="#contact" style={{ display: "inline-block", background: "#c8a45a", color: "#fff", padding: "14px 36px", borderRadius: 6, fontSize: 15, fontWeight: 700, textDecoration: "none" }}>Request a Free Estimate</a>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "100px 24px", background: "#f8f6f2" }}>
        <div style={{ textAlign: "center" as const, marginBottom: 60 }}>
          <div style={{ fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#c8a45a", fontWeight: 600, marginBottom: 12 }}>Our Expertise</div>
          <div style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.02em" }}>Restoration Services</div>
        </div>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
          {services.map((s) => (
            <div key={s.title} style={{ background: "#fff", borderRadius: 12, padding: "36px 28px", border: "1px solid rgba(42,42,42,0.06)" }}>
              <div style={{ width: 48, height: 48, background: "#2a2a2a", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, color: "#c8a45a", fontSize: 20 }}>{s.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "#7a7268" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "100px 24px", maxWidth: 900, margin: "0 auto", textAlign: "center" as const }}>
        <div style={{ fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#c8a45a", fontWeight: 600, marginBottom: 12 }}>About CG</div>
        <div style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 32 }}>Built on Trust</div>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: "#7a7268", marginBottom: 20 }}><strong style={{ color: "#2a2a2a" }}>CG Home Services</strong> is a home restoration company built on craftsmanship, integrity, and attention to detail. We treat every project like it's our own home — because your home deserves nothing less.</p>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: "#7a7268" }}>Licensed, insured, and committed to delivering results that exceed expectations. No shortcuts. No surprises. Just quality work.</p>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "80px 24px", background: "#2a2a2a", color: "#fff", textAlign: "center" as const }}>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, marginBottom: 12 }}>Ready to Restore Your Home?</h2>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, marginBottom: 40, fontWeight: 300 }}>Get a free estimate — no obligation, no pressure.</p>
        <div style={{ display: "flex", flexWrap: "wrap" as const, justifyContent: "center", gap: 40, marginBottom: 40 }}>
          <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>Get In Touch</span>
            <span style={{ fontSize: 18, fontWeight: 600, color: "#c8a45a" }}>Contact Us Today</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>Service Area</span>
            <span style={{ fontSize: 18, fontWeight: 600 }}>Residential & Commercial</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: 24, textAlign: "center" as const, fontSize: 12, color: "#7a7268", background: "#f0ece4", letterSpacing: "0.04em" }}>
        &copy; 2026 CG Home Services. All rights reserved.
      </footer>
    </div>
  );
}
