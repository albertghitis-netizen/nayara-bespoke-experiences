/**
 * Travel + Leisure World's Best Awards 2026 — Alto Atacama Ad Layout
 * Standalone page (no nav, no footer, no routing dependencies)
 * Half-page format: two intro paragraphs, one sub-section, one image, no right column
 */

const HERO = "/manus-storage/Hotel_Common_Areas_NAA00001(1)_8238cf59.jpg";

export default function TravelLeisureAtacama() {
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
      {/* HERO IMAGE */}
      <div style={{ padding: "0 40px" }}>
        <img
          src={HERO}
          alt="Nayara Alto Atacama — Travel + Leisure World's Best Awards 2026"
          style={{
            width: "100%",
            display: "block",
            height: 380,
            objectFit: "cover",
            objectPosition: "center center",
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
          Where the Driest Desert on Earth Meets the Clearest Sky on the Planet
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
          Nayara Alto Atacama (pictured above) holds two MICHELIN Keys and an S certification, Chile's highest sustainability designation.
        </p>
      </div>

      {/* TWO-COLUMN INTRO */}
      <div
        style={{
          margin: "0 40px",
          padding: "20px 0 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
        }}
      >
        {/* LEFT: intro with drop cap */}
        <p
          style={{
            fontSize: 11,
            lineHeight: 1.75,
            color: "#2a2a2a",
            fontWeight: 300,
            margin: 0,
          }}
        >
          <span
            style={{
              fontSize: 36,
              float: "left" as const,
              lineHeight: 0.8,
              paddingRight: 2,
              marginRight: 4,
              marginTop: 5,
              fontWeight: 400,
            }}
          >
            B
          </span>
          uilt from the earth it sits on, Nayara Alto Atacama disappears into
          the Catarpe Valley like a structure the desert made itself. Adobe walls
          rise from red clay. Thatched roofs follow the ridgeline. Every suite
          opens to salt flats, geysers, and a silence so complete you can hear
          your own heartbeat.
        </p>

        {/* RIGHT: second paragraph */}
        <p
          style={{
            fontSize: 11,
            lineHeight: 1.75,
            color: "#2a2a2a",
            fontWeight: 300,
            margin: 0,
          }}
        >
          Guests ride horseback through Moon Valley at dawn, float in salt
          lagoons at 4,000 meters, and stargaze under skies so dark the Milky
          Way casts a shadow. The kitchen works with Atacame&ntilde;o farmers who
          have cultivated this land for centuries. Two MICHELIN Keys confirm
          what the landscape already knew: some places only need to be revealed.
        </p>
      </div>

    </div>
  );
}
