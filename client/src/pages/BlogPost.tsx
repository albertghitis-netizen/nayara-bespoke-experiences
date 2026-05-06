/*
 * NAYARA BLOG POST , Editorial Template
 * Same warm palette as the Newsletter
 * Fonts: Playfair Display (display) + DM Sans (body)
 * Test case: "Pura Vida and the Science of Why Costa Rica Feels Different"
 */

export default function BlogPost() {
  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "var(--font-body)",
        backgroundColor: "#f7f5f0",
        color: "#3B2B26",
      }}
    >
      {/* ── HERO IMAGE ── */}
      <div className="px-8 md:px-16 pt-10">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pura-vida-hero_567b6d5c.jpeg"
          alt="Two people relaxing by the water at Nayara"
          className="w-full object-cover rounded"
          style={{ aspectRatio: "1200/628" }}
        />
      </div>

      {/* ── HEADER ── */}
      <section className="bg-[#f7f5f0]">
        <div className="px-8 md:px-16 pt-10 pb-8 text-center">
          <p className="text-[11px] font-medium tracking-[0.35em] text-[#3B2B26] mb-4">
            Wellness &nbsp;&middot;&nbsp; World Health Day
          </p>
          <h1
            className="text-3xl md:text-[36px] leading-snug mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Pura Vida and the Science of Why
            <br />
            Costa Rica Feels Different
          </h1>
          <p className="text-[13px] text-[#2a1e1a] tracking-[0.1em]">
            Albert Ghitis &nbsp;&middot;&nbsp; March 15, 2026
          </p>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#3B2B26]" />

      {/* ── INTRO ── */}
      <section className="bg-[#F5F0E8]">
        <div className="px-8 md:px-16 pt-10 pb-10">
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            On April 7, the World Health Organization observes{" "}
            <a
              href="https://www.who.int/campaigns/world-health-day/2026"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B2B26] underline hover:text-[#2a1e1a] transition-colors"
            >
              World Health Day
            </a>
            . This year's theme, <em>Together for health. Stand with science</em>,
            asks a question we think about every day: what actually makes people
            well? Not what treats illness. What produces health in the first place.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9]">
            We live and work in a country that has been quietly answering that
            question for decades. This is our attempt to explain what Costa Rica
            understands about health that richer countries often seem to forget.
          </p>
        </div>
      </section>

      {/* ── KEY FINDINGS ── */}
      <section className="bg-[#f7f5f0]">
        <div className="px-8 md:px-16 py-10">
          <div className="border border-[#c4bba8] rounded p-6 md:p-8 bg-[#F5F0E8]">
            <p
              className="text-lg mb-4 text-[#3B2B26]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Key Findings
            </p>
            <ul className="space-y-3">
              <li className="text-[15px] text-[#666666] leading-[1.9] pl-4 border-l-2 border-[#3B2B26]">
                Costa Rica has placed in the top 5 of the Happy Planet Index for
                years: high wellbeing, low ecological footprint, no army since
                1949.
              </li>
              <li className="text-[15px] text-[#666666] leading-[1.9] pl-4 border-l-2 border-[#3B2B26]">
                The explanations are not mystical. Nature exposure, time
                affluence, social density, and a modest sense of purpose overlap
                in Costa Rica more densely than almost anywhere else on earth.
              </li>
              <li className="text-[15px] text-[#666666] leading-[1.9] pl-4 border-l-2 border-[#3B2B26]">
                UNESCO records the 1949 abolition of the army as documentary
                heritage, marking the moment Costa Rica chose social development
                over military spending.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#3B2B26]" />

      {/* ── SECTION: Why Costa Rica Feels the Way It Does ── */}
      <section className="bg-[#F5F0E8]">
        <div className="px-8 md:px-16 pt-10 pb-10">
          <h2
            className="text-2xl md:text-[28px] leading-snug mb-6 text-center"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Why Costa Rica Feels the Way It Does
          </h2>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            There are countries that feel efficient, countries that feel rich,
            countries that feel beautiful, and countries that feel alive.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            Costa Rica belongs to the last category.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            You notice it before you understand it. The air feels softer. Meals
            take longer. Forest is never very far away. People do not move as if
            every hour is under attack. Even the light seems less aggressive. What
            strikes visitors first is not luxury, not even nature, but a strange
            reduction in friction. Life feels less clenched.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            That feeling has a name, and like most things tourists repeat too
            easily, it is usually flattened by repetition. Pura Vida appears on
            mugs, airport shirts, surf shops, bumper stickers, and hotel walls. It
            is in danger of becoming decorative. But clich&eacute;s only form
            around ideas that once had force. Pura Vida survived because it still
            does.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            On paper, Costa Rica does not look like a country that should feel
            richer in life than nations with many times its wealth. And yet it
            often does. Not in every street, not in every institution, not in some
            na&iuml;ve sense that the country escaped history or inequality. But
            in the way that matters most to the people who visit, and perhaps even
            more to the people who live here, Costa Rica often feels healthier
            than places that are richer, louder, and more exhausted than it is.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            That is not an illusion. Costa Rica has consistently placed in the top
            tier of the{" "}
            <a
              href="https://happyplanetindex.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B2B26] underline hover:text-[#2a1e1a] transition-colors"
            >
              Happy Planet Index
            </a>
            , which combines wellbeing, life expectancy, inequality of outcomes,
            and ecological footprint. The index is not a measure of pure
            happiness, and it should not be treated as one. But it is one of the
            clearest attempts to measure whether a society delivers long,
            satisfying lives without the ecological cost structure of wealthier
            states. Costa Rica has remained near the top for years.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9]">
            The question is not whether the country performs well in one ranking.
            The question is what Costa Rica understands about health and life that
            richer countries often seem to forget.
          </p>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#3B2B26]" />

      {/* ── SECTION: What Happens to You at Nayara ── */}
      <section className="bg-[#f7f5f0]">
        <div className="px-8 md:px-16 pt-10 pb-10">
          <h2
            className="text-2xl md:text-[28px] leading-snug mb-6 text-center"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            What Happens to You at Nayara
          </h2>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            The science of wellbeing does not require a resort. It requires
            conditions.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            That distinction is what makes Nayara relevant to this story without
            making Nayara the whole story.{" "}
            <a href="https://www.nayararesorts.com/nayara-gardens" target="_blank" rel="noopener noreferrer" className="text-[#3B2B26] underline hover:text-[#2a1e1a] transition-colors">Nayara Gardens</a>,{" "}
            <a href="https://www.nayararesorts.com/nayara-springs" target="_blank" rel="noopener noreferrer" className="text-[#3B2B26] underline hover:text-[#2a1e1a] transition-colors">Nayara Springs</a>, and{" "}
            <a href="https://www.nayararesorts.com/nayara-tented-camp" target="_blank" rel="noopener noreferrer" className="text-[#3B2B26] underline hover:text-[#2a1e1a] transition-colors">Nayara Tented Camp</a>{" "}
            do not manufacture Costa Rican happiness. They remove friction between
            the guest and the conditions Costa Rica already provides.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            Warm water lowers vigilance. Forest absorbs the background noise your
            nervous system was tracking without telling you. Distance from
            traffic, from notification, from the low hum of logistical anxiety
            changes the pace at which your body scans for threat. Long meals slow
            the day down enough for appetite and conversation to return to their
            actual size. A view of canopy at dawn does not solve anything on its
            own, but it changes the body's first conversation with the morning.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            That is the real reason a Nayara stay can feel restorative without
            trying too hard to say so. It is not because the hotel imposes
            wellness. It is because it allows Costa Rica's underlying intelligence
            about time, nature, and social life to reach the guest with less
            interference.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9]">
            The volcanic hot springs are central to that effect. The water that
            feeds every private plunge pool at Nayara Springs and Nayara Tented
            Camp is heated by the magmatic systems beneath Arenal Volcano,
            carrying a mineral profile of calcium, magnesium, bicarbonate, and
            silica that has been restoring human beings in this region long before
            anyone built a hotel above it.
          </p>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#3B2B26]" />

      {/* ── SECTION: The Decision That Changed the Atmosphere ── */}
      <section className="bg-[#F5F0E8]">
        <div className="px-8 md:px-16 pt-10 pb-10">
          <h2
            className="text-2xl md:text-[28px] leading-snug mb-6 text-center"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            The Decision That Changed the Atmosphere
          </h2>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            To understand why Costa Rica feels the way it does, you have to begin
            with a decision so unusual that it still sounds improbable.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            In 1949, Costa Rica constitutionally abolished its army.{" "}
            <a
              href="https://en.unesco.org/memoryoftheworld"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B2B26] underline hover:text-[#2a1e1a] transition-colors"
            >
              UNESCO's Memory of the World listing
            </a>{" "}
            treats the abolition as documentary heritage and frames it as part of
            the country's long-term commitment to peace and social development.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            Over time, that choice compounded into a broader civic atmosphere.
            Costa Rica built high literacy, invested in public health and
            education, and protected a significant share of its land. The World
            Bank literacy indicator places Costa Rica in the mid-90s, while the
            OECD's 2025 country note places terrestrial protected areas at
            roughly 26 percent of national territory.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9]">
            That is why Costa Rica feels different. Not because it escaped
            modernity, but because it made certain tradeoffs differently. The
            result is not perfection. The result is a country where health often
            feels embedded in the landscape and tempo of life rather than
            outsourced entirely to institutions that only intervene once something
            has already gone wrong.
          </p>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#3B2B26]" />

      {/* ── SECTION: What the Science Actually Suggests ── */}
      <section className="bg-[#f7f5f0]">
        <div className="px-8 md:px-16 pt-10 pb-10">
          <h2
            className="text-2xl md:text-[28px] leading-snug mb-6 text-center"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            What the Science Actually Suggests
          </h2>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            The strongest explanation for Costa Rica's appeal is not a single
            secret. It is an overlap of known variables that wellbeing researchers
            have been circling for years. Taken individually, none of them is
            uniquely Costa Rican. Taken together, they explain why the country
            feels the way it does.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            Start with what the body already knows. A widely cited{" "}
            <a
              href="https://www.frontiersin.org/articles/10.3389/fpsyg.2019.00722/full"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B2B26] underline hover:text-[#2a1e1a] transition-colors"
            >
              Frontiers in Psychology report
            </a>{" "}
            on the "nature pill" study found that spending 20 to 30 minutes in a
            natural setting was associated with a meaningful reduction in
            cortisol, the body's primary stress hormone. Costa Rica's advantage is
            not that it invented this effect. It is that nature exposure is
            unusually hard to avoid.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            Then there is time. Research summarized by{" "}
            <a
              href="https://hbswk.hbs.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B2B26] underline hover:text-[#2a1e1a] transition-colors"
            >
              Harvard Business School
            </a>{" "}
            on time affluence argues that the feeling of having enough time is a
            major predictor of wellbeing, in some contexts more important than
            additional income once basic needs are met.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            Underneath both of those is something harder to quantify but
            impossible to miss: the thickness of social life. The{" "}
            <a
              href="https://www.adultdevelopmentstudy.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B2B26] underline hover:text-[#2a1e1a] transition-colors"
            >
              Harvard Study of Adult Development
            </a>{" "}
            remains the most famous long-running study of human flourishing, and
            its central finding has not changed. Close relationships predict
            health and happiness better than status, money, or achievement.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9]">
            And then there is what the{" "}
            <a
              href="https://www.bluezones.com/exploration/nicoya-costa-rica/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B2B26] underline hover:text-[#2a1e1a] transition-colors"
            >
              Blue Zones profile of Nicoya
            </a>{" "}
            calls <em>plan de vida</em>, a reason to get up in the morning. That
            phrase matters because it is modest. It is not the language of
            optimization or elite performance. It is the language of coherence.
          </p>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#3B2B26]" />

      {/* ── SECTION: Pura Vida Is Not Translation ── */}
      <section className="bg-[#F5F0E8]">
        <div className="px-8 md:px-16 pt-10 pb-10">
          <h2
            className="text-2xl md:text-[28px] leading-snug mb-6 text-center"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Pura Vida Is Not Translation. It Is Compression.
          </h2>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            Tourists often ask what Pura Vida means as if the answer were
            lexical.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            It is not.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            Literal translations are easy. Pure life. Simple life. Good life.
            None of them quite gets it. Pura Vida is not just a phrase but a
            compression of attitude, permission, and proportion. It is what a
            culture says when it refuses to make stress sound noble.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            That is why the phrase matters more than it should. It names something
            wealthy societies regularly lose: the ability to experience
            enoughness without reading it as failure.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9]">
            That does not make Costa Rica lazy, unserious, or untouched by
            ambition. It makes it unusually unwilling to glorify tension for its
            own sake. And that may be one of the healthiest things about it.
          </p>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#3B2B26]" />

      {/* ── SECTION: The Ecosystem That Makes It Possible ── */}
      <section className="bg-[#f7f5f0]">
        <div className="px-8 md:px-16 pt-10 pb-10">
          <h2
            className="text-2xl md:text-[28px] leading-snug mb-6 text-center"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            The Ecosystem That Makes It Possible
          </h2>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            Everything in this article depends on something staying alive.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            The forest that lowers cortisol only works if the forest is there. The
            water that lowers vigilance only flows if the watershed is intact. The
            birds whose calls stitch the canopy together only sing where the
            canopy is continuous. A place that feels alive changes the person
            inside it. Not through metaphor. Through physiology.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            The same living systems that sustain wildlife are the ones that
            restore people. That connection is the reason we treat conservation
            not as a corporate initiative but as the foundation of everything we
            offer.
          </p>
          <p className="text-[15px] text-[#666666] leading-[1.9] mb-6">
            Pura Vida is not something a resort can teach.
          </p>
          <p
            className="text-[15px] text-[#666666] leading-[1.9] italic"
          >
            At best, it can create the quiet in which you finally notice it.
          </p>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#3B2B26]" />

      {/* ── SOURCES ── */}
      <section className="bg-[#F5F0E8]">
        <div className="px-8 md:px-16 pt-10 pb-10">
          <h2
            className="text-lg mb-6 text-center"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Sources &amp; Further Reading
          </h2>
          <ul className="space-y-2 text-[13px] text-[#2a1e1a] leading-[1.8]">
            {[
              { label: "Happy Planet Index , Costa Rica", href: "https://happyplanetindex.org/" },
              { label: "UNESCO , Abolition of the Army in Costa Rica", href: "https://en.unesco.org/memoryoftheworld" },
              { label: "World Bank , Costa Rica Literacy Data", href: "https://data.worldbank.org/" },
              { label: "OECD , Environment at a Glance: Costa Rica", href: "https://www.oecd.org/" },
              { label: "Frontiers in Psychology , The Nature Pill", href: "https://www.frontiersin.org/articles/10.3389/fpsyg.2019.00722/full" },
              { label: "Harvard Business School , Time Affluence", href: "https://hbswk.hbs.edu/" },
              { label: "Harvard Study of Adult Development", href: "https://www.adultdevelopmentstudy.org/" },
              { label: "Daniel Gilbert , Affective Forecasting", href: "#" },
              { label: "Blue Zones , Nicoya, Costa Rica", href: "https://www.bluezones.com/exploration/nicoya-costa-rica/" },
              { label: "World Health Day 2026 , WHO", href: "https://www.who.int/campaigns/world-health-day/2026" },
            ].map((src) => (
              <li key={src.label}>
                <a
                  href={src.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3B2B26] no-underline hover:underline transition-colors"
                >
                  {src.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#3B2B26]" />

      {/* ── BEGIN YOUR NAYARA JOURNEY ── */}
      <section className="bg-[#f7f5f0] text-center py-12 px-8 md:px-16">
        <h2
          className="text-2xl md:text-[28px] leading-snug mb-4"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Begin Your Nayara Journey
        </h2>
        <p className="text-[15px] text-[#666666] leading-[1.9] mb-8">
          Explore each property on our{" "}
          <a
            href="https://www.nayararesorts.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3B2B26] underline hover:text-[#2a1e1a] transition-colors"
          >
            Nayara Resorts brand site
          </a>{" "}
          or choose below:
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
          {[
            { name: "Nayara Gardens", href: "https://www.nayararesorts.com/nayara-gardens" },
            { name: "Nayara Springs", href: "https://www.nayararesorts.com/nayara-springs" },
            { name: "Nayara Tented Camp", href: "https://www.nayararesorts.com/nayara-tented-camp" },
            { name: "Nayara Alto Atacama", href: "https://www.nayararesorts.com/nayara-alto-atacama" },
            { name: "Nayara Hangaroa", href: "https://www.nayararesorts.com/nayara-hangaroa" },
            { name: "Nayara Bocas del Toro", href: "https://www.nayararesorts.com/nayara-bocas-del-toro" },
          ].map((prop) => (
            <a
              key={prop.name}
              href={prop.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 border border-[#2a1e1a] text-[#2a1e1a] text-[11px] font-medium tracking-[0.2em] no-underline hover:bg-[#2a1e1a] hover:text-white transition-colors rounded"
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
        <p
          className="text-white/40 text-[10px] tracking-[0.25em] mb-6"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          Contact Us
        </p>
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
            +1 (844) 865-2002 (US)
          </a>
          <a
            href="tel:+50624791600"
            className="text-white/50 text-[12px] hover:text-white/90 transition-colors"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            +506 2479-1600 (Costa Rica)
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

        {/* Copyright */}
        <p
          className="text-white/20 text-[10px]"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          &copy; {new Date().getFullYear()} Nayara Resorts. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
