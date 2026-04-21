import { useState, useEffect, useRef } from "react";

/**
 * SHARALYNN LANDING PAGE
 * Completely isolated component - uses own styling only
 * Zero shared code or styling with Nayara site
 */

export default function Sharalynn() {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const heroVideoUrl = isMobile
    ? "/manus-storage/shara-mobile-audio_9e8fde66.mp4"
    : "/manus-storage/shara-desktop-audio_ba89afd9.mp4";

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
          ref={videoRef}
          autoPlay
          muted
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
          <source src={heroVideoUrl} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        />

        {/* Play Audio / Mute Button - Bottom Left */}
        <button
          onClick={() => {
            if (videoRef.current) {
              if (audioPlaying) {
                videoRef.current.muted = true;
                setAudioPlaying(false);
              } else {
                videoRef.current.muted = false;
                videoRef.current.play();
                setAudioPlaying(true);
              }
            }
          }}
          style={{
            position: "fixed",
            bottom: "24px",
            left: "24px",
            zIndex: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "48px",
            paddingLeft: "24px",
            paddingRight: "24px",
            borderRadius: "9999px",
            backgroundColor: "rgba(220, 38, 38, 0.85)",
            backdropFilter: "blur(12px)",
            border: "none",
            cursor: "pointer",
            color: "white",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
            transition: "all 0.3s ease",
            fontFamily: "DM Sans, sans-serif",
            boxShadow: "0 8px 32px rgba(220, 38, 38, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(220, 38, 38, 1)";
            e.currentTarget.style.boxShadow = "0 12px 40px rgba(220, 38, 38, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(220, 38, 38, 0.85)";
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(220, 38, 38, 0.3)";
          }}
          aria-label={audioPlaying ? "Mute audio" : "Play audio"}
        >
          {audioPlaying ? "\uD83D\uDD07 Mute" : "\uD83D\uDD0A Sound"}
        </button>

        {/* Ask Shara Button - Bottom Right */}
        <button
          onClick={() => (window.location.href = "mailto:Shara.Zeitlin@compass.com")}
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "48px",
            paddingLeft: "24px",
            paddingRight: "24px",
            borderRadius: "9999px",
            backgroundColor: "rgba(220, 38, 38, 0.85)",
            backdropFilter: "blur(12px)",
            border: "none",
            cursor: "pointer",
            color: "white",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
            transition: "all 0.3s ease",
            fontFamily: "DM Sans, sans-serif",
            boxShadow: "0 8px 32px rgba(220, 38, 38, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(220, 38, 38, 1)";
            e.currentTarget.style.boxShadow = "0 12px 40px rgba(220, 38, 38, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(220, 38, 38, 0.85)";
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(220, 38, 38, 0.3)";
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

      {/* About Section with Headshot */}
      <section
        style={{
          padding: isMobile ? "40px 24px" : "80px 48px",
          maxWidth: "1200px",
          margin: "0 auto",
          display: isMobile ? "block" : "flex",
          gap: "48px",
          alignItems: "center",
        }}
      >
        {/* Headshot */}
        <div
          style={{
            flexShrink: 0,
            marginBottom: isMobile ? "32px" : 0,
            textAlign: "center",
          }}
        >
          <img
            src="/manus-storage/sharalynn-headshot_300d87ab.jpeg"
            alt="Sharalynn Zeitlin"
            style={{
              width: isMobile ? "200px" : "280px",
              height: isMobile ? "260px" : "360px",
              objectFit: "cover",
              objectPosition: "top",
              borderRadius: "8px",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
            }}
          />
        </div>

        {/* Bio */}
        <div>
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
        </div>
      </section>

      {/* Featured Blog Section */}
      <section
        style={{
          padding: isMobile ? "40px 24px" : "60px 48px",
          backgroundColor: "#fef2f2",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
            color: "#dc2626",
            marginBottom: "12px",
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 600,
          }}
        >
          Featured Blog
        </p>
        <h3
          style={{
            fontSize: isMobile ? "20px" : "28px",
            fontWeight: 300,
            marginBottom: "16px",
            fontFamily: "Playfair Display, serif",
            color: "#1f2937",
          }}
        >
          Love and Home: Why Where You Live Shapes Who You Meet
        </h3>
        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.7,
            color: "#4b5563",
            maxWidth: "700px",
            margin: "0 auto 24px",
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          Millions of users. Billions in revenue. And yet — real connection is declining. Discover why discerning individuals are choosing a more refined approach with 6-9x higher success rates.
        </p>
        <a
          href="/sharalynn/blog"
          style={{
            display: "inline-block",
            padding: "12px 32px",
            backgroundColor: "#dc2626",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
            textDecoration: "none",
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
            transition: "all 0.3s ease",
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          Read the Blog
        </a>
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
