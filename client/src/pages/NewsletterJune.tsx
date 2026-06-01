/*
 * NAYARA NEWSLETTER, June 2026
 * Theme: The Summer of You
 * Three pieces: Ocean Habitat (lead), Romance, Summer of You
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
        <div className="px-8 md:px-16 pt-6 pb-14 text-center max-w-2xl mx-auto">
          <p className="text-[11px] font-medium tracking-[0.35em] text-[#3B2B26] mb-8">
            Nayara Newsletter &nbsp;&middot;&nbsp; June 2026
          </p>
          <h1
            className="text-2xl md:text-[30px] leading-[1.25] mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#1A0A00" }}
          >
            The Summer of Action
          </h1>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-5">
            Somewhere beneath the overwater villas in Bocas del Toro, a city is being built. Not for guests. For coral. For fish. For an ecosystem that lost 80% of itself in fifty years and is now, slowly, being given the architecture to come back.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-5">
            That is how we are spending this summer. Not watching. Building. And it turns out that is what summer has always been for: the season when you stop negotiating with yourself and do the thing.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9]">
            This month: the ocean habitat restoration program we have been working toward for years, a love letter to romance across four properties, and the longest editorial we have ever published about what summer actually is, why it became a season of permission, and why this one belongs to you.
          </p>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#3B2B26]" />

      {/* ══════════ SECTION 1: Ocean Habitat Restoration (Lead/Star) ══════════ */}
      <section className="bg-[#F5F0E8]">
        <div className="px-8 md:px-16 pt-10 pb-12 text-center">
          <p className="text-[11px] font-medium tracking-[0.35em] text-[#3B2B26] mb-6">
            Sustainability &nbsp;&middot;&nbsp; Bocas del Toro
          </p>

          <img
            loading="lazy"
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-aerial-villas-turquoise_858d4570.jpg"
            alt="Ocean Habitat Restoration at Nayara Bocas del Toro"
            className="w-full rounded mb-8 object-cover"
            style={{ aspectRatio: "1200/628" }}
          />

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
            Bocas del Toro is rebuilding ocean habitat from the foundation up:
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

      {/* ══════════ SECTION 2: Romance ══════════ */}
      <section className="bg-[#f7f5f0]">
        <div className="px-8 md:px-16 pt-10 pb-12 text-center">
          <p className="text-[11px] font-medium tracking-[0.35em] text-[#3B2B26] mb-6">
            Romance &nbsp;&middot;&nbsp; Four Properties
          </p>

          <img
            loading="lazy"
            src="/manus-storage/romance-card-bocas-couple_a626f19a.jpg"
            alt="Romance at Nayara"
            className="w-full rounded mb-8 object-cover"
            style={{ aspectRatio: "1200/628" }}
          />

          <h2
            className="text-2xl md:text-[28px] leading-snug mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Four Worlds, One Love: Romance at Nayara
          </h2>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-4">
            A 2024 study in <em>Leisure Sciences</em> found that couples who
            share novel experiences while traveling report significantly higher
            relationship satisfaction and physical intimacy afterward. The
            number of trips did not matter. What mattered was whether the
            experience felt new, shared, and outside of routine.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-4">
            From the adults-only thermal springs of Nayara Springs to the
            overwater villas of Bocas del Toro, from the radical silence of the
            Atacama to the ancient wonder of Rapa Nui, romance at Nayara is not
            a package. It is a philosophy built into every property.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-8">
            This piece traces the architecture of privacy and what happens when
            a resort removes everything that competes for a couple's attention.
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
              Read: Romance at Nayara
            </a>
            <a
              href="/springs"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "12px", letterSpacing: "0.08em", color: "#8a7a5a", backgroundColor: "transparent", border: "1px solid #8a7a5a" }}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              Explore: Nayara Springs
            </a>
          </div>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#3B2B26]" />

      {/* ══════════ SECTION 3: The Summer of You ══════════ */}
      <section className="bg-[#F5F0E8]">
        <div className="px-8 md:px-16 pt-10 pb-12 text-center">
          <p className="text-[11px] font-medium tracking-[0.35em] text-[#3B2B26] mb-6">
            Editorial &nbsp;&middot;&nbsp; Summer Edition
          </p>

          <img
            loading="lazy"
            src="/manus-storage/summer-of-you-card_691d8a1a.jpeg"
            alt="The Summer of You"
            className="w-full rounded mb-8 object-cover"
            style={{ aspectRatio: "1200/628" }}
          />

          <h2
            className="text-2xl md:text-[28px] leading-snug mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            The Summer of You
          </h2>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-4">
            Before summer became a feeling, it was a fact. Earth tilted 23.5
            degrees toward the sun, flooding your hemisphere with light, and
            your brain responded by rewriting its own chemistry. Serotonin
            production surges. Melatonin retreats. Cortisol patterns normalize.
            Your body knows what season it is before your calendar does.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-4">
            But here is the part no one tells you: the idea that summer is "time
            off" is barely 150 years old. It was not invented by farmers. It was
            invented by overheated 19th century urbanites fleeing to Newport and
            Saratoga. The agrarian calendar myth? Debunked. The harvest is in
            autumn, not summer.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-8">
            This editorial traces the full arc: from photobiology to cultural
            history, from ocean neuroscience to romance, from the longest days
            in the Northern Hemisphere to the clearest skies in the Southern
            one. It ends with a question: what is the thing you have been
            putting off?
          </p>
          <a
            href="/blog/summer-of-you"
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "12px", letterSpacing: "0.08em", color: "#fff", backgroundColor: "#8a7a5a" }}
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Read: The Summer of You
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
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 0 0 .5 6.5 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1c1.9.4 9.4.4 9.4.4s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-5.5 31 31 0 0 0-.5-5.5zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" /></svg>
          </a>
          <a href="https://www.facebook.com/NayaraResorts" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/80 transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
          </a>
        </div>

        <p className="text-white/20 text-[10px] tracking-[0.15em]">
          &copy; 2026 Nayara Resorts. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
