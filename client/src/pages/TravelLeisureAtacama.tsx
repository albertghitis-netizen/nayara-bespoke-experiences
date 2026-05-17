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
          Where the Driest Desert on Earth Meets the Clearest Sky in the Southern Hemisphere
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
          Nayara Alto Atacama (pictured above) holds two MICHELIN Keys and ranks among the Top 15 Resorts in South America by Cond&eacute; Nast Traveler.
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
          your own heartbeat. This is the driest desert on Earth, and the lodge
          was designed to honor it, not compete with it.
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
          have cultivated this land for centuries. Two MICHELIN Keys confirm what
          the landscape already knew: some places do not need to be invented.
          They only need to be revealed.
        </p>
      </div>

      {/* DEMARCATING LINE */}
      <div style={{ padding: "0 40px" }}>
        <hr
          style={{
            border: "none",
            borderTop: "1px solid #c5b9a8",
            margin: "20px 0 0",
          }}
        />
      </div>

      {/* SINGLE COLUMN: Sub-header + paragraph + image (no right column) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 0,
          padding: "16px 40px 24px",
          maxWidth: "50%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3
            style={{
              fontSize: 13,
              fontWeight: 900,
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              marginBottom: 4,
              marginTop: 0,
              WebkitTextStroke: "0.6px #1a1a1a",
              fontVariantNumeric: "lining-nums",
            }}
          >
            <strong style={{ fontWeight: 900 }}>Chile's Window to the Cosmos</strong>
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
            At 2,400 meters above sea level with virtually zero light pollution,
            Alto Atacama offers some of the finest stargazing on the planet.
            Guided by resident astronomers, guests explore the southern
            constellations through professional telescopes while the desert
            silence wraps around them like a second sky.
          </p>

          <img
            src={HERO}
            alt="Nayara Alto Atacama"
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
