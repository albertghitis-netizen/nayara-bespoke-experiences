/*
 * NAYARA NEWSLETTER — April 2026
 * Standalone page — no nav, no footer, no hero
 * Styled in the Tented Camp warm palette
 * Fonts: Playfair Display (display) + DM Sans (body)
 */

export default function Newsletter() {
  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "var(--font-body)",
        backgroundColor: "#f7f5f0",
        color: "#3a2a1a",
      }}
    >
      {/* ── LOGO + DATE ── */}
      <header className="flex flex-col items-center pt-16 pb-6 px-6">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-logo-leaf-text_a3e1c7f8.png"
          alt="Nayara Resorts"
          className="w-28 mb-8 opacity-80"
        />
        <div className="w-12 h-px bg-[#AD8F61] mb-6" />
        <p
          className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#AD8F61] mb-5"
          style={{ fontFamily: "var(--font-body)" }}
        >
          April 2026 &nbsp;&middot;&nbsp; Nayara Resorts
        </p>
      </header>

      {/* ── INTRO ── */}
      <section className="max-w-xl mx-auto px-8 pb-10 text-center">
        <p
          className="text-xl md:text-[22px] leading-relaxed mb-5"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Last month we wrote about what protects wildlife and what protects
          women.
        </p>
        <p
          className="text-xl md:text-[22px] leading-relaxed mb-5"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          This month April asks two more questions. And as with everything we
          do, the answer turns out to be the same.
        </p>
        <p className="text-sm text-[#5a4a3a] leading-[1.85]">
          The health of people and the health of ecosystems are not parallel
          conversations. They never were.
        </p>
        <div className="w-12 h-px bg-[#AD8F61] mx-auto mt-7" />
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#AD8F61]" />

      {/* ══════════ TOPIC 1 — World Health Day ══════════ */}
      <section className="bg-[#F5F0E8]">
        <div className="max-w-xl mx-auto px-8 pt-10 pb-12 text-center">
          <p className="text-[9px] font-medium tracking-[0.35em] uppercase text-[#AD8F61] mb-6">
            World Health Day &nbsp;&middot;&nbsp; April 7
          </p>

          {/* Image placeholder — replace with real image later */}
          <div className="w-full aspect-[16/9] bg-[#8A7A5A] rounded mb-8 flex items-center justify-center">
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/50">
              Image — Pura Vida / Costa Rica Wellness
            </p>
          </div>

          <h2
            className="text-2xl md:text-[28px] leading-snug mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Pura Vida and the Science of Why Costa Rica Feels Different
          </h2>
          <p className="text-[13px] text-[#666666] leading-[1.9] mb-8">
            What actually makes people well? Not what treats illness. What
            produces health in the first place. Costa Rica has been quietly
            answering that question for decades. We followed the science.
          </p>
          <a
            href="https://blog.nayararesorts.com/pura-vida"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-3.5 bg-[#AD8F61] text-white text-[10px] font-medium tracking-[0.25em] uppercase no-underline hover:bg-[#9a7e54] transition-colors"
          >
            Read the Story
          </a>
        </div>
      </section>

      {/* ── thin divider ── */}
      <div className="h-px bg-[#DDD8CE]" />

      {/* ══════════ TOPIC 2 — Earth Day ══════════ */}
      <section className="bg-[#f7f5f0]">
        <div className="max-w-xl mx-auto px-8 pt-10 pb-12 text-center">
          <p className="text-[9px] font-medium tracking-[0.35em] uppercase text-[#AD8F61] mb-6">
            Earth Day &nbsp;&middot;&nbsp; April 22
          </p>

          {/* Image placeholder */}
          <div className="w-full aspect-[16/9] bg-[#8A7A5A] rounded mb-8 flex items-center justify-center">
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/50">
              Image — Atacama / Hangaroa / S Certification
            </p>
          </div>

          <h2
            className="text-2xl md:text-[28px] leading-snug mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Why Sustainability Is Not a Department
          </h2>
          <p className="text-[13px] text-[#666666] leading-[1.9] mb-8">
            Nayara Alto Atacama has held the S Certification for years. Nayara
            Hangaroa just earned it. One standard. Two ecosystems. The same
            belief: protecting the land is not separate from what we offer. It
            is the foundation of it.
          </p>
          <a
            href="https://blog.nayararesorts.com/s-certification"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-3.5 bg-[#AD8F61] text-white text-[10px] font-medium tracking-[0.25em] uppercase no-underline hover:bg-[#9a7e54] transition-colors"
          >
            Read the Story
          </a>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#AD8F61]" />

      {/* ══════════ TOPIC 3 — Wellness Escape ══════════ */}
      <section className="bg-[#3a2a1a]">
        <div className="max-w-xl mx-auto px-8 pt-10 text-center">
          <p className="text-[9px] font-medium tracking-[0.35em] uppercase text-[#AD8F61] mb-6">
            Wellness Escape &nbsp;&middot;&nbsp; Costa Rica
          </p>

          {/* Image placeholder */}
          <div className="w-full aspect-[16/9] bg-[#5a4a3a] rounded mb-8 flex items-center justify-center">
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/30">
              Image — Wellness Escape
            </p>
          </div>

          <h2
            className="text-2xl md:text-[28px] leading-snug mb-4 text-[#f7f5f0]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Stop Reading About Wellness.
            <br />
            Come Experience It.
          </h2>
          <p className="text-[13px] text-[#AD8F61] leading-[1.9] mb-8 font-light">
            Three nights. Volcanic hot springs. Forest at every window.
            <br />
            Breakfast, dinner, and spa woven into each day.
            <br />
            Free cancellation up to 30 days before arrival.
          </p>
        </div>

        {/* ── Three Property Cards ── */}
        <div className="max-w-xl mx-auto px-8 pb-12">
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            {[
              {
                name: "Gardens",
                href: "https://www.nayararesorts.com/nayara-gardens/wellness-escape",
              },
              {
                name: "Springs",
                href: "https://www.nayararesorts.com/nayara-springs/wellness-escape",
              },
              {
                name: "Tented Camp",
                href: "https://www.nayararesorts.com/nayara-tented-camp/wellness-escape",
              },
            ].map((prop) => (
              <div
                key={prop.name}
                className="bg-[#4a3828] border-t-2 border-[#AD8F61] text-center py-6 px-3"
              >
                <p className="text-[9px] tracking-[0.3em] uppercase text-[#AD8F61] mb-1">
                  Nayara
                </p>
                <p
                  className="text-lg md:text-xl text-[#f7f5f0] mb-5"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                  }}
                >
                  {prop.name}
                </p>
                <a
                  href={prop.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2.5 border border-[#AD8F61] text-[#AD8F61] text-[9px] font-medium tracking-[0.2em] uppercase no-underline hover:bg-[#AD8F61] hover:text-white transition-colors"
                >
                  Reserve
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING GOLD BAR ── */}
      <section className="bg-[#AD8F61] text-center py-11 px-8">
        <p className="text-[13px] text-white/70 tracking-[0.1em] uppercase mb-3">
          The Nayara Team
        </p>
        <p
          className="text-2xl text-white leading-relaxed"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Two questions. One answer.
        </p>
      </section>

      {/* ── BOTTOM GOLD RULE ── */}
      <div className="h-[3px] bg-[#8A7A5A]" />

      {/* ── FOOTER ── */}
      <footer className="bg-[#3a2a1a] text-center py-9 px-5">
        <p className="text-[11px] text-[#AD8F61] leading-8">
          <a
            href="https://www.nayararesorts.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#AD8F61] no-underline hover:underline"
          >
            nayararesorts.com
          </a>
          <br />
          Nayara Resorts &nbsp;&middot;&nbsp; La Fortuna, Costa Rica
          <br />
          <a
            href="mailto:reservations@nayararesorts.com"
            className="text-[#AD8F61] no-underline hover:underline"
          >
            reservations@nayararesorts.com
          </a>
        </p>
        <p className="text-[10px] text-[#5a4a3a] mt-5">
          If you no longer wish to receive these emails, you may unsubscribe at
          any time.
        </p>
      </footer>
    </div>
  );
}
