/**
 * Travel + Leisure World's Best Awards 2026 — Tented Camp Ad Layout
 * Standalone page (no nav, no footer, no routing dependencies)
 */

const HERO = "/manus-storage/hero-pool_15a606ac.webp";
const SPRINGS = "/manus-storage/springs-A_baedb8ea.jpg";
const GARDENS = "/manus-storage/gardens-A_5d179a98.jpg";

export default function TravelLeisureAd() {
  return (
    <div
      style={{
        maxWidth: 800,
        margin: "0 auto",
        background: "#fff",
        fontFamily: "'DM Sans', sans-serif",
        color: "#1a1a1a",
      }}
    >
      {/* HERO IMAGE (badge baked into image) */}
      <div style={{ padding: "0 40px" }}>
        <img
          src={HERO}
          alt="Nayara Tented Camp — Travel + Leisure World's Best Awards 2026"
          style={{
            width: "100%",
            display: "block",
            height: 380,
            objectFit: "cover",
            objectPosition: "top center",
          }}
        />
      </div>

      {/* HEADLINE */}
      <div style={{ textAlign: "center", padding: "28px 40px 6px" }}>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase" as const,
            lineHeight: 1.35,
            margin: 0,
          }}
        >
          Enchanting Luxury Amidst Nature&rsquo;s Embrace
        </h1>
        <p
          style={{
            fontSize: 12,
            color: "#555",
            fontStyle: "italic",
            fontWeight: 300,
            lineHeight: 1.7,
            marginTop: 6,
          }}
        >
          Escape to a world of refined luxury and breathtaking nature at Nayara
          Resorts
          <br />
          award-winning properties nestled in some of the world&rsquo;s most
          extraordinary destinations.
        </p>
      </div>

      {/* TWO COLUMNS: text + image per column */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
          padding: "20px 40px 24px",
        }}
      >
        {/* LEFT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              fontSize: 11,
              lineHeight: 1.75,
              color: "#2a2a2a",
              fontWeight: 300,
              marginBottom: 12,
            }}
          >
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 40,
                float: "left",
                lineHeight: 0.78,
                marginRight: 4,
                marginTop: 5,
                fontWeight: 400,
              }}
            >
              A
            </span>
            n exclusive collection of award-winning properties in Costa Rica,
            Chile, and Panama, Nayara Resorts proudly offer unparalleled
            experiences in spectacular landscapes where pure beauty and unbridled
            nature reign. Nayara Resorts have consistently been voted among the
            top 10 Central American Resorts in the{" "}
            <em>Travel + Leisure</em> World&rsquo;s Best Awards survey over the
            past ten years. Each resort and destination offers its own distinct
            charm and allure.
          </p>

          <h3
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              marginBottom: 4,
              marginTop: 8,
            }}
          >
            Our Wellness Flagship
          </h3>
          <p
            style={{
              fontSize: 11,
              lineHeight: 1.75,
              color: "#2a2a2a",
              fontWeight: 300,
              marginBottom: 12,
            }}
          >
            At the World&rsquo;s Best Award-winning Nayara Tented Camp in Costa
            Rica, guests indulge in abundant space and privacy with uninterrupted
            panoramic views of the surrounding rain forest. Private plunge pools
            fed by natural mineral hot springs, hammocks, and open-air showers
            allow guests to literally immerse themselves in nature.
          </p>

          <img
            src={SPRINGS}
            alt="Nayara Springs"
            style={{
              width: "100%",
              display: "block",
              marginTop: "auto",
              paddingTop: 14,
            }}
          />
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              marginBottom: 4,
              marginTop: 8,
            }}
          >
            Unforgettable Experiences
          </h3>
          <p
            style={{
              fontSize: 11,
              lineHeight: 1.75,
              color: "#2a2a2a",
              fontWeight: 300,
              marginBottom: 12,
            }}
          >
            A stay at a Nayara Resort is unlike any other. In-house destination
            experts make the connection with nature even more real for guests by
            sharing their passion and unparalleled knowledge. There are no set
            itineraries, so guests enjoy the privilege of a bespoke and private
            experience, easily adapted to suit individual needs.
          </p>

          <h3
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              marginBottom: 4,
              marginTop: 8,
            }}
          >
            Where Our Story Began
          </h3>
          <p
            style={{
              fontSize: 11,
              lineHeight: 1.75,
              color: "#2a2a2a",
              fontWeight: 300,
              marginBottom: 12,
            }}
          >
            Nayara Resorts go beyond proximity to nature; they are an integral
            part of it. Built with eco-friendly design, the resorts preserve the
            natural world. Through conservation efforts, the landscapes are able
            to flourish with diverse flora, fauna, and local wildlife.
          </p>

          <img
            src={GARDENS}
            alt="Nayara Gardens"
            style={{
              width: "100%",
              display: "block",
              marginTop: "auto",
              paddingTop: 14,
            }}
          />
        </div>
      </div>
    </div>
  );
}
