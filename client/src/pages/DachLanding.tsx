/**
 * DACH Consulting Media Corp — Landing Page
 * Wolf logo, digital marketing consulting, Midtown Manhattan
 */
import { Helmet } from "react-helmet-async";

export default function DachLanding() {
  const WOLF_LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/dach-logo-wolf-VKtcrVg2cJJ4L2EjSFdmrY.png";

  const services = [
    { icon: "\u2605", title: "Brand Strategy", desc: "Market positioning, competitive analysis, and brand architecture that sets you apart in crowded markets." },
    { icon: "\u25C8", title: "Paid Media", desc: "Performance-driven campaigns across Google, Meta, LinkedIn, and programmatic channels with transparent ROI reporting." },
    { icon: "\u2699", title: "SEO & Content", desc: "Technical SEO, content strategy, and authority building that drives organic growth and qualified traffic." },
    { icon: "\u2696", title: "Social Media", desc: "Strategic social presence management, community building, and influencer partnerships that convert followers to customers." },
    { icon: "\u25C6", title: "Analytics & Insights", desc: "Data-driven decision making with custom dashboards, attribution modeling, and actionable performance insights." },
    { icon: "\u25B6", title: "Creative Production", desc: "High-impact creative assets — from video production to ad design — that capture attention and drive action." },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#1a2744", background: "#fff", minHeight: "100vh" }}>
      <Helmet>
        <title>DACH Consulting Media Corp | Strategic Digital Marketing</title>
        <meta name="description" content="Full-service digital marketing consulting from the heart of Midtown Manhattan. Brand strategy, paid media, SEO, social media, analytics, and creative production." />
        <meta property="og:title" content="DACH Consulting Media Corp" />
        <meta property="og:description" content="Strategic Digital Marketing for Ambitious Brands. Midtown Manhattan." />
        <meta property="og:image" content={WOLF_LOGO} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DACH Consulting Media Corp" />
        <meta name="twitter:description" content="Strategic Digital Marketing for Ambitious Brands" />
        <meta name="twitter:image" content={WOLF_LOGO} />
        <link rel="icon" type="image/png" href={WOLF_LOGO} />
      </Helmet>
      {/* Google Font */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(26,39,68,0.08)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img src={WOLF_LOGO} alt="DACH" style={{ height: 48 }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.02em" }}>DACH</div>
              <div style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#6b7a8d", fontWeight: 500 }}>Consulting Media Corp</div>
            </div>
          </div>
          <a href="tel:9297375204" style={{ background: "#1a2744", color: "#fff", padding: "10px 24px", borderRadius: 6, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Call 929-737-5204</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "160px 24px 100px", background: "linear-gradient(135deg, #1a2744 0%, #0f1a30 100%)", color: "#fff", textAlign: "center" as const, position: "relative" as const, overflow: "hidden" as const }}>
        <div style={{ position: "relative" as const, zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
          <img src={WOLF_LOGO} alt="DACH" style={{ height: 100, marginBottom: 32 }} />
          <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.02em" }}>Strategic Digital Marketing for Ambitious Brands</h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(255,255,255,0.7)", maxWidth: 600, margin: "0 auto 36px", fontWeight: 300 }}>Full-service digital marketing consulting from the heart of Midtown Manhattan. We build strategies that drive measurable growth.</p>
          <a href="tel:9297375204" style={{ display: "inline-block", background: "#fff", color: "#1a2744", padding: "14px 36px", borderRadius: 6, fontSize: 15, fontWeight: 700, textDecoration: "none" }}>Schedule a Consultation</a>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "100px 24px", background: "#f4f6f9" }}>
        <div style={{ textAlign: "center" as const, marginBottom: 60 }}>
          <div style={{ fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#3b82f6", fontWeight: 600, marginBottom: 12 }}>What We Do</div>
          <div style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.02em" }}>Our Services</div>
        </div>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
          {services.map((s) => (
            <div key={s.title} style={{ background: "#fff", borderRadius: 12, padding: "36px 28px", border: "1px solid rgba(26,39,68,0.06)", transition: "transform 0.2s" }}>
              <div style={{ width: 48, height: 48, background: "#1a2744", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, color: "#fff", fontSize: 20 }}>{s.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "#6b7a8d" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "100px 24px", maxWidth: 900, margin: "0 auto", textAlign: "center" as const }}>
        <div style={{ fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#3b82f6", fontWeight: 600, marginBottom: 12 }}>About Us</div>
        <div style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 32 }}>Built for Results</div>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: "#6b7a8d", marginBottom: 20 }}><strong style={{ color: "#1a2744" }}>DACH Consulting Media Corp</strong> is a digital marketing consulting firm headquartered in <strong style={{ color: "#1a2744" }}>Midtown Manhattan</strong>. We partner with businesses that are serious about growth — delivering data-driven strategies, transparent reporting, and measurable outcomes.</p>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: "#6b7a8d" }}>No fluff. No vanity metrics. Just strategic execution that moves the needle.</p>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "80px 24px", background: "#1a2744", color: "#fff", textAlign: "center" as const }}>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, marginBottom: 12 }}>Let's Talk Growth</h2>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, marginBottom: 40, fontWeight: 300 }}>Ready to scale? Get in touch.</p>
        <div style={{ display: "flex", flexWrap: "wrap" as const, justifyContent: "center", gap: 40, marginBottom: 40 }}>
          <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>Phone</span>
            <a href="tel:9297375204" style={{ fontSize: 18, fontWeight: 600, color: "#fff", textDecoration: "none" }}>929-737-5204</a>
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>Location</span>
            <span style={{ fontSize: 18, fontWeight: 600 }}>Midtown Manhattan, NY</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: 24, textAlign: "center" as const, fontSize: 12, color: "#6b7a8d", background: "#f4f6f9", letterSpacing: "0.04em" }}>
        &copy; 2026 DACH Consulting Media Corp. All rights reserved.
      </footer>
    </div>
  );
}
