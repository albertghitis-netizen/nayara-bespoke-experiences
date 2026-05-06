/*
 * NAYARA NEWSLETTER , May 2026
 * Theme: Experiential Travel
 * Standalone page , no nav, no footer, no hero
 * Fonts: Playfair Display (display) + DM Sans (body)
 */
export default function NewsletterMay() {
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
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-logo-mobile_b4d2ae65.svg"
          alt="Nayara Resorts"
          className="mx-auto h-12 md:h-14 w-auto"
        />
      </div>

      {/* ── INTRO ── */}
      <section className="bg-[#f7f5f0]">
        <div className="px-8 md:px-16 pt-6 pb-12 text-center">
          <p className="text-[11px] font-medium tracking-[0.35em] text-[#3B2B26] mb-6">
            Nayara Newsletter &nbsp;&middot;&nbsp; May 2026
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            This month, we explore what it means to travel not just to see a
            place, but to be changed by it. Experiential travel is no longer a
            niche. It is how the world's most intentional travelers are choosing
            to spend their time, and their lives.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            At Nayara, every property was built on this principle. The land
            teaches. The culture reveals. The experience transforms. This is Part
            Two of our 2026 Travel Trends series, and it is the most personal
            one yet.
          </p>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#3B2B26]" />

      {/* ══════════ SECTION 1 , Experiential Travel Trends ══════════ */}
      <section className="bg-[#F5F0E8]">
        <div className="px-8 md:px-16 pt-10 pb-12 text-center">
          <p className="text-[11px] font-medium tracking-[0.35em] text-[#3B2B26] mb-6">
            Travel Trends 2026 &nbsp;&middot;&nbsp; Part Two
          </p>

          {/* IMAGE PLACEHOLDER - Replace with experiential travel hero image */}
          <div
            className="w-full bg-[#e3dfd2] rounded mb-8 flex items-center justify-center"
            style={{ aspectRatio: "1200/628" }}
          >
            <p className="text-[#8a7a5a] text-sm tracking-wide">[Image: Experiential Travel]</p>
          </div>

          <h2
            className="text-2xl md:text-[28px] leading-snug mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Why Nayara Is the Ultimate Experiential Travel Destination in 2026
          </h2>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-4">
            The global experiences market is surging toward $342 billion. Seventy
            percent of travelers now prioritize the journey itself over the
            destination. Wellness tourism alone is projected to reach $1.4
            trillion by 2027.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-4">
            These are not trends. They are a fundamental shift in how people
            travel. And Nayara has been building for this moment since the
            beginning.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-8">
            From culinary immersions and volcanic geology hikes to forest bathing
            and stargazing in the world's driest desert, this is the full
            picture of experiential travel at Nayara, backed by the data.
          </p>
          <a
            href="/blog/experiential-travel-nayara-2026"
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "12px", letterSpacing: "0.08em", color: "#fff", backgroundColor: "#8a7a5a" }}
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Read: Experiential Travel at Nayara
          </a>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#3B2B26]" />

      {/* ══════════ SECTION 2 , Mother's Day / Family ══════════ */}
      <section className="bg-[#f7f5f0]">
        <div className="px-8 md:px-16 pt-10 pb-12 text-center">
          <p className="text-[11px] font-medium tracking-[0.35em] text-[#3B2B26] mb-6">
            Mother's Day &nbsp;&middot;&nbsp; May 2026
          </p>

          {/* IMAGE PLACEHOLDER - Replace with family/mother's day image */}
          <div
            className="w-full bg-[#e3dfd2] rounded mb-8 flex items-center justify-center"
            style={{ aspectRatio: "1200/628" }}
          >
            <p className="text-[#8a7a5a] text-sm tracking-wide">[Image: Family Adventure]</p>
          </div>

          <h2
            className="text-2xl md:text-[28px] leading-snug mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            The Family Bucket List
          </h2>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-4">
            In honor of Mother's Day this week, for the mothers who choose
            adventure over brunch, who believe the best gift is a shared
            experience, and who know that the memories made together in wild
            places are the ones that last forever.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-4">
            At Nayara Gardens and Nayara Tented Camp, the rainforest is the
            greatest classroom on Earth. Your family might start the day
            zip-lining through the canopy and end it watching a volcano glow at
            sunset. In between, there are hanging bridges, chocolate-making
            workshops, and the kind of quiet moments that only happen when you
            are somewhere truly alive.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-8">
            This is not a vacation. This is the trip your family will talk about
            for the rest of their lives.
          </p>
          <a
            href="/blog/family-bucket-list-nayara"
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "12px", letterSpacing: "0.08em", color: "#fff", backgroundColor: "#8a7a5a" }}
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Read: The Family Bucket List
          </a>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#3B2B26]" />

      {/* ══════════ SECTION 3 , Wellness as Adventure ══════════ */}
      <section className="bg-[#F5F0E8]">
        <div className="px-8 md:px-16 pt-10 pb-12 text-center">
          <p className="text-[11px] font-medium tracking-[0.35em] text-[#3B2B26] mb-6">
            Wellness &nbsp;&middot;&nbsp; A New Paradigm
          </p>

          {/* IMAGE PLACEHOLDER - Replace with wellness/hot springs image */}
          <div
            className="w-full bg-[#e3dfd2] rounded mb-8 flex items-center justify-center"
            style={{ aspectRatio: "1200/628" }}
          >
            <p className="text-[#8a7a5a] text-sm tracking-wide">[Image: Wellness Adventure]</p>
          </div>

          <h2
            className="text-2xl md:text-[28px] leading-snug mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Wellness as Adventure
          </h2>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-4">
            Forget the spa menu. The most powerful wellness experiences on Earth
            are not found in treatment rooms. They are found in volcanic hot
            springs at dawn, in rainforest canopies where the air itself is
            medicine, in the silence of a cloud forest at 5,000 feet.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-4">
            Research published in Nature confirms that regular thermal bathing
            reduces systolic blood pressure by 6 mmHg. A landmark study by Park
            et al. found that just 15 minutes of forest immersion lowers
            cortisol by 16%. This is not relaxation. This is physiological
            transformation.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-8">
            At Nayara Springs, you do not visit a spa. You inhabit a living
            thermal ecosystem where every element, from the mineral-rich water to
            the volcanic soil beneath your feet, is working to reset your
            nervous system.
          </p>
          <a
            href="/blog/hot-springs"
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "12px", letterSpacing: "0.08em", color: "#fff", backgroundColor: "#8a7a5a" }}
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Read: The Science of Hot Springs
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
