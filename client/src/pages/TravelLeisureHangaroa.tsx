/**
 * Travel + Leisure World's Best Awards 2026 — Hangaroa Ad Layout
 * Standalone page (no nav, no footer, no routing dependencies)
 * Half-page format: two intro paragraphs, one sub-section, one image, no right column
 */

const HERO = "/manus-storage/IMG_4831(1)_c0075b00.jpg";

export default function TravelLeisureHangaroa() {
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
          alt="Nayara Hangaroa — Travel + Leisure World's Best Awards 2026"
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
          The Most Remote Inhabited Island on Earth. The Only Luxury Lodge on It.
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
          Nayara Hangaroa (pictured above) is the sole luxury property on Rapa Nui, honoring the island's culture and its monumental stone guardians.
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
            T
          </span>
          wo thousand miles from the nearest continent, Rapa Nui rises from the
          Pacific like a whisper the ocean kept to itself. Nayara Hangaroa sits
          on this volcanic island at the edge of the world, where nearly a
          thousand monumental Moai stand guard over a culture that has endured
          for centuries. The lodge was built in partnership with the Rapa Nui
          people, not beside them but alongside them.
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
          Guests explore volcanic craters at sunrise, dive into waters so clear
          the coral seems painted, and gather around an earth oven for a
          traditional curanto feast. Every excursion is led by Rapa Nui guides
          who share stories passed down through generations. The island does not
          reveal itself to those who rush. It opens slowly, on its own terms,
          and Hangaroa was designed to match that pace.
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
            <strong style={{ fontWeight: 900 }}>Guardians of a Living Culture</strong>
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
            Hangaroa is not a resort that happens to be on Rapa Nui. It is a
            Rapa Nui lodge that happens to offer luxury. The Hitorangi family
            guides every cultural experience, from ancestral dance ceremonies
            to the sacred sites where the Moai were carved. Staying here means
            becoming part of a story that began a thousand years ago.
          </p>

          <img
            src={HERO}
            alt="Nayara Hangaroa"
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
