/*
 * NAYARA NEWSLETTER , April 2026
 * Standalone page , no nav, no footer, no hero
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
        color: "#3B2B26",
      }}
    >
      {/* ── HEADER LOGO ── */}
      <div className="px-8 md:px-16 pt-10 pb-4 text-center">
        <img
          loading="lazy"
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-logo-mobile_b4d2ae65.svg"
          alt="Nayara Resorts"
          className="mx-auto h-12 md:h-14 w-auto"
        />
      </div>

      {/* ── INTRO ── */}
      <section className="bg-[#f7f5f0]">
        <div className="px-8 md:px-16 pt-6 pb-12 text-center">
          <p className="text-[11px] font-medium tracking-[0.35em] text-[#3B2B26] mb-6">
            Nayara Newsletter &nbsp;&middot;&nbsp; April 2026
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            Last month, we explored how protecting ecosystems and supporting
            community form a single regenerative travel mission. April asks a
            simpler question: what connects the health of a place to the health
            of the people within it.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            At Nayara, the answer is not theoretical. Human well-being and
            ecosystem health are not parallel. They are the same system.
          </p>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#3B2B26]" />

      {/* ══════════ TOPIC 1 , World Health Day ══════════ */}
      <section className="bg-[#F5F0E8]">
        <div className="px-8 md:px-16 pt-10 pb-12 text-center">
          <p className="text-[11px] font-medium tracking-[0.35em] text-[#3B2B26] mb-6">
            World Health Day &nbsp;&middot;&nbsp; April 7
          </p>

          <img
          loading="lazy"
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/340C7D71-BAF3-4215-B25E-98878C4B65F6_48b343e5.JPEG"
            alt="Rainforest canopy at Nayara Tented Camp"
            className="w-full object-cover rounded mb-8"
            style={{ aspectRatio: "1200/628" }}
          />

          <h2
            className="text-2xl md:text-[28px] leading-snug mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Pura Vida and the Science of Happiness
          </h2>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-4">
            What actually makes people well? Not what treats illness. What
            produces health in the first place. Costa Rica has been quietly
            answering that question for decades.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-8">
            This is the science behind happiness.
          </p>
          <a
            href="/blog/pura-vida"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "12px", letterSpacing: "0.08em", color: "#fff", backgroundColor: "#8a7a5a" }}
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Read: Pura Vida
          </a>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#3B2B26]" />

      {/* ══════════ TOPIC 2 , Earth Day ══════════ */}
      <section className="bg-[#f7f5f0]">
        <div className="px-8 md:px-16 pt-10 pb-12 text-center">
          <p className="text-[11px] font-medium tracking-[0.35em] text-[#3B2B26] mb-6">
            Earth Day &nbsp;&middot;&nbsp; April 22
          </p>

          <img
          loading="lazy"
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Supersale-7_cc61b8d2.jpg"
            alt="Atacama desert landscape"
            className="w-full object-cover rounded mb-8"
            style={{ aspectRatio: "1200/628" }}
          />

          <h2
            className="text-2xl md:text-[28px] leading-snug mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Why Sustainability Is Not a Department
          </h2>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-4">
            Nayara Alto Atacama has held the S Certification for years. Its
            sister property Nayara Hangaroa now does too.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-4">
            Two ecosystems stewarded. One perfect way to celebrate Earth Day.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-8">
            Check out two long-form videos on our YouTube channel that explain
            the full scope of the sustainability efforts that earned Chile's
            most rigorous certification...twice.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <a
              href="https://www.youtube.com/@NayaraResorts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 border border-[#8a7a5a] text-[#8a7a5a] text-[11px] font-medium tracking-[0.25em] no-underline hover:bg-[#8a7a5a] hover:text-white transition-colors rounded-full"
            >
              Atacama Sustainability Video
            </a>
            <a
              href="https://www.youtube.com/@NayaraResorts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 border border-[#8a7a5a] text-[#8a7a5a] text-[11px] font-medium tracking-[0.25em] no-underline hover:bg-[#8a7a5a] hover:text-white transition-colors rounded-full"
            >
              Hangaroa Sustainability Video
            </a>
          </div>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#3B2B26]" />

      {/* ══════════ TOPIC 3 , Wellness Escape ══════════ */}
      <section className="bg-[#F5F0E8]">
        <div className="px-8 md:px-16 pt-10 pb-12 text-center">
          <p className="text-[11px] font-medium tracking-[0.35em] text-[#3B2B26] mb-6">
            Wellness Escape &nbsp;&middot;&nbsp; Costa Rica
          </p>

          <img
          loading="lazy"
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Supersale-8_43b2ae73.jpg"
            alt="Aerial view of rainforest hot springs"
            className="w-full object-cover rounded mb-8"
            style={{ aspectRatio: "1200/628" }}
          />

          <h2
            className="text-2xl md:text-[28px] leading-snug mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Stop Reading About Wellness. Come Experience It.
          </h2>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-4">
            Introducing the Wellness Escape, available across our three Costa
            Rican properties.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-8">
            Enjoy three nights of daily spa treatments, guided yoga in a
            dedicated pavilion overlooking the rainforest, nightly fine dining
            &amp; more all wrapped in rainforest.
          </p>
        </div>

        {/* ── Three Property Cards ── */}
        <div className="px-8 md:px-16 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                name: "Springs",
                href: "https://www.nayararesorts.com/nayara-springs/wellness-escape",
              },
              {
                name: "Gardens",
                href: "https://www.nayararesorts.com/nayara-gardens/wellness-escape",
              },
              {
                name: "Tented Camp",
                href: "https://www.nayararesorts.com/nayara-tented-camp/wellness-escape",
              },
            ].map((prop) => (
              <div
                key={prop.name}
                className="bg-[#e3dfd2] border border-[#c4bba8] text-center py-6 px-3 rounded"
              >
                <p className="text-[11px] tracking-[0.3em] text-[#8a7a5a] mb-1">
                  Nayara
                </p>
                <p
                  className="text-lg md:text-xl text-[#3d2c1e] mb-5"
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
                  className="inline-block px-5 py-2.5 border border-[#8a7a5a] text-[#8a7a5a] text-[11px] font-medium tracking-[0.2em] no-underline hover:bg-[#8a7a5a] hover:text-white transition-colors rounded-full"
                >
                  Reserve
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#3B2B26]" />

      {/* ── EXPLORE SISTER RESORTS ── */}
      <section className="bg-[#f7f5f0] text-center py-12 px-8 md:px-16">
        <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
          Explore our sister resorts in Chile and Panama
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
          {[
            { name: "Nayara Alto Atacama", href: "https://www.nayararesorts.com/nayara-alto-atacama" },
            { name: "Nayara Hangaroa", href: "https://www.nayararesorts.com/nayara-hangaroa" },
            { name: "Nayara Bocas del Toro", href: "https://www.nayararesorts.com/nayara-bocas-del-toro" },
          ].map((prop) => (
            <a
              key={prop.name}
              href={prop.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 border border-[#8a7a5a] text-[#8a7a5a] text-[11px] font-medium tracking-[0.2em] no-underline hover:bg-[#8a7a5a] hover:text-white transition-colors rounded-full"
            >
              {prop.name}
            </a>
          ))}
        </div>
      </section>

      {/* ── BOTTOM RULE ── */}
      <div className="h-[3px] bg-[#c4bba8]" />

      {/* ── FOOTER ── */}
      <footer className="bg-[#3B2B26] text-center py-12 px-8 md:px-16">
        <div className="flex flex-col gap-2 mb-6">
          <a
            href="mailto:reservations@nayararesorts.com"
            className="text-white/50 text-[12px] hover:text-white/90 transition-colors"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            reservations@nayararesorts.com
          </a>
          <a
            href="tel:+18448652002"
            className="text-white/50 text-[12px] hover:text-white/90 transition-colors"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            +1 (844) 865-2002 - US
          </a>
          <a
            href="tel:+50624791600"
            className="text-white/50 text-[12px] hover:text-white/90 transition-colors"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            + (506) 2479-1600 - Costa Rica
          </a>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <a href="https://www.instagram.com/nayararesorts/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/80 transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
          </a>
          <a href="https://www.youtube.com/@NayaraResorts" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/80 transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 0 0 .5 6.5 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1c1.9.4 9.4.4 9.4.4s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.5zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z" /></svg>
          </a>
          <a href="https://www.facebook.com/NayaraResorts" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/80 transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12z" /></svg>
          </a>
          <a href="https://www.tiktok.com/@nayararesorts" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/80 transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.93 2.93 0 0 1 .88.13V9a6.34 6.34 0 0 0-1-.05 6.34 6.34 0 1 0 6.34 6.34V9.37a8.16 8.16 0 0 0 4.77 1.52V7.44a4.85 4.85 0 0 1-.89-.75z" /></svg>
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Bottom line */}
        <p
          className="text-white/20 text-[10px] mb-4"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          Nayara Resorts, Costa Rica, Chile, Panama, +1 844 865 2002
        </p>

        {/* Unsubscribe / Manage */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="#"
            className="text-white/30 text-[10px] hover:text-white/60 transition-colors underline"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Unsubscribe
          </a>
          <a
            href="#"
            className="text-white/30 text-[10px] hover:text-white/60 transition-colors underline"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Manage preferences
          </a>
        </div>
      </footer>
    </div>
  );
}
