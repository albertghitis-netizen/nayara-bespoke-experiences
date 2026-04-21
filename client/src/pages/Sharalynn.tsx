import { useState, useEffect } from "react";

/**
 * SHARALYNN LANDING PAGE
 * Completely isolated component - uses own styling only
 * Zero shared code or styling with Nayara site
 */

export default function Sharalynn() {
  const [isMuted, setIsMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const heroVideoUrl = isMobile
    ? "/manus-storage/hero-mobile_8530945e.mov"
    : "/manus-storage/hero-desktop_f078663d.mov";

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          muted={isMuted}
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          key={heroVideoUrl}
        >
          <source src={heroVideoUrl} type="video/quicktime" />
        </video>

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        />

        {/* Mute Button - Top Left */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          style={{
            position: "fixed",
            top: "24px",
            left: "24px",
            zIndex: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "48px",
            height: "48px",
            borderRadius: "9999px",
            backgroundColor: "rgba(220, 38, 38, 0.7)",
            backdropFilter: "blur(10px)",
            border: "none",
            cursor: "pointer",
            color: "white",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            transition: "all 0.3s ease",
            fontFamily: "DM Sans, sans-serif",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(220, 38, 38, 0.9)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(220, 38, 38, 0.7)";
          }}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          Sound
        </button>

        {/* Ask Shara Button - Top Right */}
        <button
          onClick={() => (window.location.href = "mailto:Shara.Zeitlin@compass.com")}
          style={{
            position: "fixed",
            top: "24px",
            right: "24px",
            zIndex: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "48px",
            paddingLeft: "24px",
            paddingRight: "24px",
            borderRadius: "9999px",
            backgroundColor: "rgba(220, 38, 38, 0.7)",
            backdropFilter: "blur(10px)",
            border: "none",
            cursor: "pointer",
            color: "white",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            transition: "all 0.3s ease",
            fontFamily: "DM Sans, sans-serif",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(220, 38, 38, 0.9)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(220, 38, 38, 0.7)";
          }}
        >
          Ask Shara
        </button>

        {/* Hero Content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingBottom: "60px",
            paddingLeft: "24px",
            paddingRight: "24px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: isMobile ? "28px" : "48px",
              fontWeight: 300,
              lineHeight: 1.2,
              marginBottom: "16px",
              fontFamily: "Playfair Display, serif",
            }}
          >
            Where You Live Is Who You Meet
          </h1>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: isMobile ? "14px" : "18px",
              marginBottom: "12px",
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            Luxury real estate meets expert matchmaking
          </p>
          <p
            style={{
              color: "#dc2626",
              fontSize: isMobile ? "16px" : "20px",
              fontWeight: 500,
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            All Things Home and Heart ❤️
          </p>
        </div>
      </section>

      {/* About Section */}
      <section
        style={{
          padding: isMobile ? "40px 24px" : "80px 48px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "24px" : "36px",
            fontWeight: 300,
            marginBottom: "24px",
            fontFamily: "Playfair Display, serif",
            color: "#1f2937",
          }}
        >
          Sharalynn Zeitlin
        </h2>
        <p
          style={{
            fontSize: "16px",
            lineHeight: 1.8,
            color: "#4b5563",
            marginBottom: "16px",
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          Luxury real estate broker and expert matchmaker specializing in Miami's most discerning professionals. With deep expertise in both luxury real estate and meaningful introductions, Sharalynn understands that where you live and who you meet are intrinsically connected.
        </p>
        <p
          style={{
            fontSize: "16px",
            lineHeight: 1.8,
            color: "#4b5563",
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          Based in Miami's most prestigious neighborhoods, she works with accomplished individuals, executives, and high-net-worth clients seeking both the perfect home and meaningful connections.
        </p>
      </section>

      {/* Services Section */}
      <section
        style={{
          padding: isMobile ? "40px 24px" : "80px 48px",
          backgroundColor: "#f9fafb",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "24px" : "36px",
            fontWeight: 300,
            marginBottom: "48px",
            textAlign: "center",
            fontFamily: "Playfair Display, serif",
            color: "#1f2937",
          }}
        >
          Services
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: "32px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {[
            { icon: "🏠", title: "Luxury Home Sales", desc: "Exclusive properties in Miami's finest neighborhoods" },
            { icon: "💕", title: "Expert Matchmaking", desc: "Personalized introductions for meaningful connections" },
            { icon: "📍", title: "Relocation Consulting", desc: "Guidance for moving to Miami's elite communities" },
            { icon: "💼", title: "Executive Placement", desc: "For accomplished professionals seeking both home and connections" },
            { icon: "🌟", title: "Ultra-Luxury Advisory", desc: "Discretion, expertise, and access for discerning clients" },
            { icon: "🎯", title: "Second Act Services", desc: "Rebuild your home and social life with intention" },
          ].map((service, idx) => (
            <div key={idx} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>{service.icon}</div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  marginBottom: "8px",
                  fontFamily: "DM Sans, sans-serif",
                  color: "#1f2937",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: isMobile ? "40px 24px" : "80px 48px",
          background: "linear-gradient(to right, #dc2626, #b91c1c)",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "24px" : "36px",
            fontWeight: 300,
            marginBottom: "16px",
            fontFamily: "Playfair Display, serif",
          }}
        >
          Ready to Find Your Home and Your Match?
        </h2>
        <p
          style={{
            fontSize: "16px",
            marginBottom: "24px",
            color: "rgba(255, 255, 255, 0.9)",
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          Let's start a conversation about where you want to live and who you want to meet.
        </p>
        <button
          onClick={() => (window.location.href = "mailto:Shara.Zeitlin@compass.com")}
          style={{
            padding: "12px 32px",
            backgroundColor: "white",
            color: "#dc2626",
            border: "none",
            borderRadius: "4px",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.3s ease",
            fontFamily: "DM Sans, sans-serif",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#f3f4f6";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "white";
          }}
        >
          Ask Shara
        </button>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: isMobile ? "32px 24px" : "48px",
          backgroundColor: "#111827",
          color: "white",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            color: "#9ca3af",
            marginBottom: "8px",
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          Sharalynn Zeitlin | Luxury Real Estate & Expert Matchmaking
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "#9ca3af",
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          <a
            href="mailto:Shara.Zeitlin@compass.com"
            style={{ color: "#dc2626", textDecoration: "none" }}
          >
            Shara.Zeitlin@compass.com
          </a>
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "#6b7280",
            marginTop: "16px",
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          All Things Home and Heart ❤️
        </p>
      </footer>
    </div>
  );
}
