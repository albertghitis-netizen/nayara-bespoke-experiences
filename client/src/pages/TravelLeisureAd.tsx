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
          Award-Winning Luxury Resorts Rooted in Latin America&rsquo;s Most Pristine Ecosystems
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
          Nayara Tented Camp (pictured above) is a five-time winner of Travel + Leisure&rsquo;s Best Resort in Central America.
        </p>
      </div>

      {/* TWO-COLUMN INTRO — bone background to group as Tented Camp section */}
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
            W
          </span>
          here a barren cattle ranch once stood, a thriving rainforest now
          surrounds you. Nayara Tented Camp, our flagship property, is lifted
          on stilts and perched on a volcanic clifftop. Open-air tented suites
          each feature a private plunge pool fed by natural hot springs, living
          spaces that blur the line between indoors and out, and an oversized wraparound deck built for doing absolutely nothing.
        </p>

        {/* RIGHT: second paragraph (no header) */}
        <p
          style={{
            fontSize: 11,
            lineHeight: 1.75,
            color: "#2a2a2a",
            fontWeight: 300,
            margin: 0,
          }}
        >
          Every detail has been considered. Guests wake to the sound of
          howler monkeys, dine under the stars, and fall asleep to the chorus
          of the jungle. No two stays are alike because no two days in the
          rainforest are the same. We don't build hotels, we reveal places
          and let the land tell its own story.
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

      {/* TWO-COLUMN: Sub-headers aligned side by side, then images */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
          padding: "16px 40px 24px",
        }}
      >
        {/* LEFT: Our Wellness Flagship + Springs image */}
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
            <strong style={{ fontWeight: 900 }}>Costa Rica's First 3-Michelin Key Resort</strong>
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
            At Nayara Springs, every villa features its own private hot
            springs plunge pool, naturally heated by Arenal Volcano. Hidden
            within the surrounding rainforest, this adults-only retreat
            offers romance without distraction and fine dining worthy of its
            Relais &amp; Ch&acirc;teaux designation.
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

        {/* RIGHT: Where Our Story Began + Gardens image */}
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
            }}
          >
            <strong style={{ fontWeight: 900 }}>Where the Nayara Story Began</strong>
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
            Nayara Gardens is where our story began more than 15 years
            ago. This family-friendly rainforest resort overlooks the
            majestic Arenal Volcano and is surrounded by tropical gardens
            alive with toucans, sloths, and countless other wildlife. The
            adventure of a lifetime awaits.
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
