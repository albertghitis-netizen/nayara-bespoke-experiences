/*
 * NAYARA NEWSLETTER — June 2026
 * Theme: Ocean Restoration, Romance, Atacama Traditions
 * Standalone page, no nav, no footer, no hero
 * Fonts: Playfair Display (display) + DM Sans (body)
 */
export default function NewsletterJune() {
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
            Nayara Newsletter &nbsp;&middot;&nbsp; June 2026
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            This month, we launch something we have been working toward for
            years: a partnership to rebuild one of the Caribbean's most
            threatened ocean habitats from the foundation up. We also celebrate
            the science of romance across four extraordinary properties, and
            take you inside the ancestral food traditions of the Atacama Desert.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            At Nayara, luxury is not a finish line. It is a starting point for
            something deeper: restoration, connection, and the kind of
            experiences that change how you see the world.
          </p>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#3B2B26]" />

      {/* ══════════ SECTION 1 — Ocean Habitat Restoration (Lead Story) ══════════ */}
      <section className="bg-[#F5F0E8]">
        <div className="px-8 md:px-16 pt-10 pb-12 text-center">
          <p className="text-[11px] font-medium tracking-[0.35em] text-[#3B2B26] mb-6">
            Sustainability &nbsp;&middot;&nbsp; Bocas del Toro
          </p>

          {/* IMAGE PLACEHOLDER */}
          <div
            className="w-full bg-[#e3dfd2] rounded mb-8 flex items-center justify-center"
            style={{ aspectRatio: "1200/628" }}
          >
            <p className="text-[#8a7a5a] text-sm tracking-wide">[Image: Ocean Habitat Restoration]</p>
          </div>

          <h2
            className="text-2xl md:text-[28px] leading-snug mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Ocean Habitat Restoration: Building a City Beneath the Sea
          </h2>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-4">
            The Caribbean has lost approximately 80% of its coral reefs in the
            last fifty years. In 2024, NOAA declared the fourth global mass
            bleaching event on record. The window for intervention is narrowing.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-4">
            In partnership with the Caribbean Coral Restoration Center, Nayara
            Bocas del Toro is rebuilding ocean habitat from the ground up:
            purpose-designed artificial reef structures, climate-resilient coral
            genetics, and a community of 25 local partners working to scale
            restoration across the entire archipelago.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-8">
            Guests can participate directly, diving or snorkeling alongside
            marine biologists at the active restoration sites. This is not
            tourism that observes. This is tourism that restores.
          </p>
          <a
            href="/ocean-habitat-restoration"
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "12px", letterSpacing: "0.08em", color: "#fff", backgroundColor: "#8a7a5a" }}
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Read: Ocean Habitat Restoration
          </a>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#3B2B26]" />

      {/* ══════════ SECTION 2 — Romance ══════════ */}
      <section className="bg-[#f7f5f0]">
        <div className="px-8 md:px-16 pt-10 pb-12 text-center">
          <p className="text-[11px] font-medium tracking-[0.35em] text-[#3B2B26] mb-6">
            Romance &nbsp;&middot;&nbsp; The Science of Connection
          </p>

          {/* IMAGE PLACEHOLDER */}
          <div
            className="w-full bg-[#e3dfd2] rounded mb-8 flex items-center justify-center"
            style={{ aspectRatio: "1200/628" }}
          >
            <p className="text-[#8a7a5a] text-sm tracking-wide">[Image: Romance at Nayara]</p>
          </div>

          <h2
            className="text-2xl md:text-[28px] leading-snug mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            The Science of Romance at Nayara
          </h2>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-4">
            Research confirms what we have always believed: novel shared
            experiences deepen love. Presence requires protection from
            distraction. And when a resort removes everything that competes for
            a couple's attention, what remains is extraordinary.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-4">
            From the adults-only thermal springs of Nayara Springs to the
            overwater villas of Bocas del Toro, from the radical silence of the
            Atacama to the ancient wonder of Rapa Nui, romance at Nayara is not
            a package. It is a philosophy built into every property.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-8">
            And for those ready to experience it: the Romantic Escape package at
            Nayara Springs offers the most intimate expression of this
            philosophy, with private plunge pools, couples' spa rituals, and
            volcano-view dining designed for two.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/blog/romance-at-nayara-springs-and-bocas-del-toro"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "12px", letterSpacing: "0.08em", color: "#fff", backgroundColor: "#8a7a5a" }}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              Read: The Science of Romance
            </a>
            <a
              href="/springs"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "12px", letterSpacing: "0.08em", color: "#8a7a5a", backgroundColor: "transparent", border: "1px solid #8a7a5a" }}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              Explore: Romantic Escape at Springs
            </a>
          </div>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#3B2B26]" />

      {/* ══════════ SECTION 3 — Atacama Traditions Podcast ══════════ */}
      <section className="bg-[#F5F0E8]">
        <div className="px-8 md:px-16 pt-10 pb-12 text-center">
          <p className="text-[11px] font-medium tracking-[0.35em] text-[#3B2B26] mb-6">
            Podcast &nbsp;&middot;&nbsp; Gastronomy
          </p>

          {/* IMAGE PLACEHOLDER */}
          <div
            className="w-full bg-[#e3dfd2] rounded mb-8 flex items-center justify-center"
            style={{ aspectRatio: "1200/628" }}
          >
            <p className="text-[#8a7a5a] text-sm tracking-wide">[Image: Atacama Menu Traditions]</p>
          </div>

          <h2
            className="text-2xl md:text-[28px] leading-snug mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Atacama Menu Traditions
          </h2>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-4">
            In the driest desert on Earth, food is memory. The ancestral
            traditions of the Atacameño people have sustained life in this
            landscape for thousands of years, and at Nayara Alto Atacama, those
            traditions are not preserved behind glass. They are alive on the
            plate.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-4">
            In this episode, we explore the culinary heritage of the Atacama:
            the ingredients that survive where almost nothing else can, the
            techniques passed down through generations, and how our kitchen team
            translates ancestral knowledge into a modern dining experience that
            honors its origins.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-8">
            Listen now wherever you get your podcasts.
          </p>
          <a
            href="/journal/atacama-menu-traditions"
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "12px", letterSpacing: "0.08em", color: "#fff", backgroundColor: "#8a7a5a" }}
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
            Listen: Atacama Menu Traditions
          </a>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#3B2B26]" />

      {/* ── EXPLORE SISTER RESORTS ── */}
      <section className="bg-[#f7f5f0] text-center py-12 px-8 md:px-16">
        <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
          Explore our resorts
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
          {[
            { name: "Nayara Gardens", href: "/gardens" },
            { name: "Nayara Tented Camp", href: "/tented-camp" },
            { name: "Nayara Springs", href: "/springs" },
            { name: "Nayara Alto Atacama", href: "/alto-atacama" },
            { name: "Nayara Bocas del Toro", href: "/bocas-del-toro" },
          ].map((prop) => (
            <a
              key={prop.name}
              href={prop.href}
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
