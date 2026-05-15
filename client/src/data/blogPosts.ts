/*
 * BLOG POST DATA - Definitive data-driven blog architecture
 * Each blog post is a structured object rendered by the BlogPostTemplate component.
 * Content is HTML-safe strings (rendered via dangerouslySetInnerHTML).
 */
import { gastronomyBlogPost, inHouseActivitiesBlogPost } from "./blogPostsNew";
import { experientialTravelPost, familyBucketListPost } from "./blogPostsExperiential";

// ─── Types ────────────────────────────────────────────────────

export interface BlogSectionData {
  heading: string;
  /** HTML string - supports <a>, <em>, <strong>, etc. */
  content: string;
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
  video?: {
    src: string;
    poster?: string;
  };
  pullQuote?: string;
}

export interface BlogPostSource {
  label: string;
  href: string;
}

export interface RelatedArticle {
  slug: string;
  title: string;
  pillar: string;
  image: string;
  date: string;
}

export interface BlogPostData {
  slug: string;
  title: string;
  subtitle?: string;
  author: string;
  authorRole?: string;
  date: string;
  pillar: string;
  tags: string[];
  readingTime: number;
  heroImage: string;
  heroVideo?: {
    desktop: string;
    mobile?: string;
  };
  /** Whether the hero video has audio (shows sound pill instead of nav) */
  hasAudio?: boolean;
  /** Vertical video for mobile hero (replaces heroImage on mobile) */
  mobileHeroVideo?: string;
  keyFindings: string[];
  sections: BlogSectionData[];
  sources: BlogPostSource[];
  relatedArticles: RelatedArticle[];
  /** Properties to feature in the "Begin Your Journey" CTA */
  ctaProperties: { name: string; route: string }[];
  /** Optional footer image displayed at the bottom of the blog */
  footerImage?: { src: string; alt: string };
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
}

// ─── Pura Vida Blog Post ─────────────────────────────────────

export const puraVidaPost: BlogPostData = {
  slug: "pura-vida",
  title: "Pura Vida: The Science of Why Costa Rica Is the Healthiest Country on Earth",
  subtitle: "World Health Day 2026",
  author: "Albert Ghitis",
  authorRole: "Nayara Resorts",
  date: "March 15, 2026",
  pillar: "Wellness",
  tags: ["Wellness", "World Health Day", "Costa Rica", "Science"],
  readingTime: 12,
  heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pura-vida-hero_567b6d5c.jpeg",
  heroVideo: {
    desktop: "/manus-storage/9FB025CB-74D4-4053-BCC8-3FB78AD107F7_4e200fd3_a129c99b.mp4",
  },
  keyFindings: [
    "Costa Rica has placed in the top 5 of the Happy Planet Index for years: high wellbeing, low ecological footprint, no army since 1949.",
    "The explanations are not mystical. Nature exposure, time affluence, social density, and a modest sense of purpose overlap in Costa Rica more densely than almost anywhere else on earth.",
    "UNESCO records the 1949 abolition of the army as documentary heritage, marking the moment Costa Rica chose social development over military spending.",
    "A Frontiers in Psychology study found that 20–30 minutes in a natural setting was associated with a meaningful reduction in cortisol - Costa Rica makes nature exposure nearly unavoidable.",
  ],
  sections: [
    {
      heading: "Why Costa Rica Feels Different: Nature, Time, and the Happy Planet Index",
      content: `<p>On April 7, the World Health Organization observes <a href="https://www.who.int/campaigns/world-health-day/2026" target="_blank" rel="noopener noreferrer">World Health Day</a>. This year's theme, <em>Together for health. Stand with science</em>, asks a question we think about every day: what actually makes people well? Not what treats illness. What produces health in the first place.</p>
<p>We live and work in a country that has been quietly answering that question for decades. This is our attempt to explain what Costa Rica understands about health that richer countries often seem to forget.</p>
<p>There are countries that feel efficient, countries that feel rich, countries that feel beautiful, and countries that feel alive. Costa Rica belongs to the last category.</p>
<p>You notice it before you understand it. The air feels softer. Meals take longer. Forest is never very far away. People do not move as if every hour is under attack. Even the light seems less aggressive. What strikes visitors first is not luxury, not even nature, but a strange reduction in friction. Life feels less clenched.</p>
<p>That feeling has a name, and like most things tourists repeat too easily, it is usually flattened by repetition. Pura Vida appears on mugs, airport shirts, surf shops, bumper stickers, and hotel walls. It is in danger of becoming decorative. But clichés only form around ideas that once had force. Pura Vida survived because it still does.</p>
<p>On paper, Costa Rica does not look like a country that should feel richer in life than nations with many times its wealth. And yet it often does. Not in every street, not in every institution, not in some naïve sense that the country escaped history or inequality. But in the way that matters most to the people who visit, and perhaps even more to the people who live here, Costa Rica often feels healthier than places that are richer, louder, and more exhausted than it is.</p>
<p>That is not an illusion. Costa Rica has consistently placed in the top tier of the <a href="https://happyplanetindex.org/" target="_blank" rel="noopener noreferrer">Happy Planet Index</a>, which combines wellbeing, life expectancy, inequality of outcomes, and ecological footprint. The question is what Costa Rica understands about health and life that richer countries often seem to forget.</p>`,
      image: {
        src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pura-vida-hero_567b6d5c.jpeg",
        alt: "Guests relaxing by the water at Nayara, surrounded by tropical greenery",
        caption: "Life at Nayara: where the pace of Costa Rica becomes your own",
      },
    },
    {
      heading: "What Happens to Your Body at Nayara Arenal",
      content: `<p>The science of wellbeing does not require a resort. It requires conditions.</p>
<p>That distinction is what makes Nayara relevant to this story without making Nayara the whole story. <a href="/gardens">Nayara Gardens</a>, <a href="/springs">Nayara Springs</a>, and <a href="/tented-camp">Nayara Tented Camp</a> do not manufacture Costa Rican happiness. They remove friction between the guest and the conditions Costa Rica already provides.</p>
<p>Warm water lowers vigilance. Forest absorbs the background noise your nervous system was tracking without telling you. Distance from traffic, from notification, from the low hum of logistical anxiety changes the pace at which your body scans for threat. Long meals slow the day down enough for appetite and conversation to return to their actual size. A view of canopy at dawn does not solve anything on its own, but it changes the body's first conversation with the morning.</p>
<p>That is the real reason a Nayara stay can feel restorative without trying too hard to say so. It is not because the hotel imposes wellness. It is because it allows Costa Rica's underlying intelligence - the forest, the water, the pace, the warmth - to reach you without interruption.</p>
<p>The volcanic hot springs are central to that effect. The water that feeds every private plunge pool at Nayara Springs and Nayara Tented Camp is heated by the magmatic systems beneath Arenal Volcano, carrying a mineral profile of calcium, magnesium, bicarbonate, and silica that has been restoring human beings in this region long before anyone built a hotel above it.</p>`,
      image: {
        src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/59_fbf56df9.jpg",
        alt: "Private hot springs plunge pool at Nayara Springs surrounded by tropical forest",
        caption: "Private volcanic hot springs at Nayara Springs - mineral-rich water heated by Arenal Volcano",
      },
      pullQuote: "Nayara does not manufacture Costa Rican happiness. It removes friction between the guest and the conditions Costa Rica already provides.",
    },
    {
      heading: "How Costa Rica Abolished Its Army and Built a Wellness Culture",
      content: `<p>To understand why Costa Rica feels the way it does, you have to begin with a decision so unusual that it still sounds improbable.</p>
<p>In 1949, Costa Rica constitutionally abolished its army. <a href="https://en.unesco.org/memoryoftheworld" target="_blank" rel="noopener noreferrer">UNESCO's Memory of the World listing</a> treats the abolition as documentary heritage and frames it as part of the country's long-term commitment to peace and social development.</p>
<p>Over time, that choice compounded into a broader civic atmosphere. Costa Rica built high literacy, invested in public health and education, and protected a significant share of its land. The World Bank literacy indicator places Costa Rica in the mid-90s, while the OECD's 2025 country note places terrestrial protected areas at roughly 26 percent of national territory.</p>
<p>That is why Costa Rica feels different. Not because it escaped modernity, but because it made certain tradeoffs differently. The result is not perfection. The result is a country where health often feels embedded in the landscape and tempo of life rather than outsourced entirely to institutions that only intervene once something has already gone wrong.</p>`,
    },
    {
      heading: "The Science of Wellbeing in Costa Rica: Cortisol, Time Affluence, and Blue Zones",
      content: `<p>The strongest explanation for Costa Rica's appeal is not a single secret. It is an overlap of known variables that wellbeing researchers have been circling for years. Taken individually, none of them is uniquely Costa Rican. Taken together, they explain why the country feels the way it does.</p>
<p>Start with what the body already knows. A widely cited <a href="https://www.frontiersin.org/articles/10.3389/fpsyg.2019.00722/full" target="_blank" rel="noopener noreferrer">Frontiers in Psychology report</a> on the "nature pill" study found that spending 20 to 30 minutes in a natural setting was associated with a meaningful reduction in cortisol, the body's primary stress hormone. Costa Rica's advantage is not that it invented this effect. It is that nature exposure is unusually hard to avoid.</p>
<p>Then there is time. Research summarized by <a href="https://hbswk.hbs.edu/" target="_blank" rel="noopener noreferrer">Harvard Business School</a> on time affluence argues that the feeling of having enough time is a major predictor of wellbeing, in some contexts more important than additional income once basic needs are met.</p>
<p>Underneath both of those is something harder to quantify but impossible to miss: the thickness of social life. The <a href="https://www.adultdevelopmentstudy.org/" target="_blank" rel="noopener noreferrer">Harvard Study of Adult Development</a> remains the most famous long-running study of human flourishing, and its central finding has not changed. Close relationships predict health and happiness better than status, money, or achievement.</p>
<p>And then there is what the <a href="https://www.bluezones.com/exploration/nicoya-costa-rica/" target="_blank" rel="noopener noreferrer">Blue Zones profile of Nicoya</a> calls <em>plan de vida</em>, a reason to get up in the morning. That phrase matters because it is modest. It is not the language of optimization or elite performance. It is the language of coherence.</p>`,
      image: {
        src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/(Rooms)NayaraTent3copy_54044994.webp",
        alt: "Nayara Tented Camp villa with private pool and volcano view",
        caption: "Nayara Tented Camp - where the rainforest canopy is never more than a glance away",
      },
    },
    {
      heading: "What Pura Vida Really Means Beyond the Translation",
      content: `<p>Tourists often ask what Pura Vida means as if the answer were lexical.</p>
<p>It is not.</p>
<p>Literal translations are easy. Pure life. Simple life. Good life. None of them quite gets it. Pura Vida is not just a phrase but a compression of attitude, permission, and proportion. It is what a culture says when it refuses to make stress sound noble.</p>
<p>That is why the phrase matters more than it should. It names something wealthy societies regularly lose: the ability to experience enoughness without reading it as failure.</p>
<p>That does not make Costa Rica lazy, unserious, or untouched by ambition. It makes it unusually unwilling to glorify tension for its own sake. And that may be one of the healthiest things about it.</p>`,
      pullQuote: "Pura Vida names something wealthy societies regularly lose: the ability to experience enoughness without reading it as failure.",
    },
    {
      heading: "Why Conservation Is the Foundation of Wellness at Nayara",
      content: `<p>Everything in this article depends on something staying alive.</p>
<p>The forest that lowers cortisol only works if the forest is there. The water that lowers vigilance only flows if the watershed is intact. The birds whose calls stitch the canopy together only sing where the canopy is continuous. A place that feels alive changes the person inside it. Not through metaphor. Through physiology.</p>
<p>The same living systems that sustain wildlife are the ones that restore people. That connection is the reason we treat conservation not as a corporate initiative but as the foundation of everything we offer.</p>
<p>Pura Vida is not something a resort can teach.</p>
<p><em>At best, it can create the quiet in which you finally notice it.</em></p>`,
    },
  ],
  sources: [
    { label: "Happy Planet Index - Costa Rica", href: "https://happyplanetindex.org/" },
    { label: "UNESCO - Abolition of the Army in Costa Rica", href: "https://en.unesco.org/memoryoftheworld" },
    { label: "World Bank - Costa Rica Literacy Data", href: "https://data.worldbank.org/" },
    { label: "OECD - Environment at a Glance: Costa Rica", href: "https://www.oecd.org/" },
    { label: "Frontiers in Psychology - The Nature Pill", href: "https://www.frontiersin.org/articles/10.3389/fpsyg.2019.00722/full" },
    { label: "Harvard Business School - Time Affluence", href: "https://hbswk.hbs.edu/" },
    { label: "Harvard Study of Adult Development", href: "https://www.adultdevelopmentstudy.org/" },
    { label: "Blue Zones - Nicoya, Costa Rica", href: "https://www.bluezones.com/exploration/nicoya-costa-rica/" },
    { label: "World Health Day 2026 - WHO", href: "https://www.who.int/campaigns/world-health-day/2026" },
  ],
  relatedArticles: [
    {
      slug: "/blog/wellness-hospitality",
      title: "Wellness in Luxury Hospitality",
      pillar: "Wellness",
      image: "https://blog.nayararesorts.com/hubfs/1-Aug-11-2025-06-16-39-9925-PM.png",
      date: "2025",
    },
    {
      slug: "/blog/hot-springs",
      title: "Private Villas and Hot-Springs Plunge Pools: The History & Science",
      pillar: "Wellness",
      image: "https://blog.nayararesorts.com/hubfs/6-Dec-07-2025-04-10-58-5077-AM.png",
      date: "2025",
    },
    {
      slug: "/blog/wellness-by-colors",
      title: "Nature-Based Wellness by Colors: Brown, Black, Green, Blue",
      pillar: "Wellness",
      image: "https://blog.nayararesorts.com/hubfs/NAYARA%20BOCAS%20DEL%20TORO-42.jpg",
      date: "2025",
    },
  ],
  ctaProperties: [
    { name: "Nayara Gardens", route: "/gardens" },
    { name: "Nayara Springs", route: "/springs" },
    { name: "Nayara Tented Camp", route: "/tented-camp" },
  ],
  seo: {
    metaTitle: "Pura Vida: The Science of Why Costa Rica Is the Healthiest Country on Earth | Nayara Journal",
    metaDescription: "On World Health Day, we explore the science behind Costa Rica's wellbeing - from nature exposure and time affluence to the Blue Zone of Nicoya - and what Pura Vida really means.",
  },
};

// ─── S Certification Blog Post (Hangaroa + Atacama) ─────────

export const sCertificationPost: BlogPostData = {
  slug: "s-certification",
  title: "Chile S Certification: How Nayara Alto Atacama and Hangaroa Lead Sustainable Tourism",
  subtitle: "Nayara Alto Atacama and Nayara Hangaroa are the only luxury hotels in their destinations to hold Chile's government-backed S Certification",
  author: "Albert Ghitis",
  authorRole: "Nayara Resorts",
  date: "April 8, 2026",
  pillar: "Sustainability",
  tags: ["Sustainability", "S Certification", "GSTC", "Chile"],
  readingTime: 8,
  heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-aerial_9e07a82e.jpg",
  keyFindings: [
    "Chile's S Certification (Sello S) is a government-backed distinction recognized by the Global Sustainable Tourism Council since 2014 - requiring independent third-party audits across socio-cultural, economic, and environmental criteria.",
    "Nayara Alto Atacama is the only luxury hotel in the Atacama region with an S Certification for Sustainable Tourism, with a solar energy project that mitigates over a ton of CO₂ emissions annually.",
    "Nayara Hangaroa on Rapa Nui also holds the S Certification - making both Chilean properties the only luxury hotels in their respective destinations to carry this distinction.",
    "Both properties actively support local communities through education programs, scholarships, local sourcing, and cultural preservation initiatives.",
  ],
  sections: [
    {
      heading: "What Is Chile's S Certification for Sustainable Tourism?",
      content: `<p>Chile's <strong>S Certification (Sello S)</strong> is administered by <a href="https://www.sernatur.cl/" target="_blank" rel="noopener noreferrer">SERNATUR</a>, Chile's national tourism service. It is not a voluntary marketing label. It is a government-backed distinction that has been <a href="https://www.gstc.org/chilean-national-system-for-distinction-of-sustainable-tourism-achieves-recognized-global-sustainable-tourism-council-status-for-its-standard/" target="_blank" rel="noopener noreferrer">recognized by the GSTC since 2014</a>, meaning it meets the same international baseline as Green Globe and other GSTC-accredited standards.</p>
<p>Properties are audited by an independent third party (ICOMCER) across socio-cultural, economic, and environmental criteria. These are not self-reported badges. They require documented evidence, on-site inspections, and annual re-certification. A property cannot hold them passively. It must demonstrate continuous improvement - or lose them.</p>
<p>Nayara Alto Atacama and Nayara Hangaroa are the <strong>only luxury hotels in their respective destinations</strong> to carry this distinction.</p>`,
      image: {
        src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-suite-interior_d3b1e9f2.jpg",
        alt: "Nayara Alto Atacama adobe suite interior with desert views",
        caption: "Nayara Alto Atacama - the only luxury hotel in the region with Chile's S Certification",
      },
    },
    {
      heading: "Solar Energy and Adobe Architecture at Nayara Alto Atacama",
      content: `<p><a href="/alto-atacama">Nayara Alto Atacama</a> is the <strong>only luxury hotel in the Atacama region</strong> to hold the S Certification for Sustainable Tourism.</p>
<p>The property's solar energy project mitigates over a ton of CO₂ emissions annually. The state-of-the-art solar panels blend seamlessly into the desert landscape, preserving its natural beauty while harnessing renewable energy in what is one of the highest-radiation environments on earth.</p>
<p>The hotel's adobe rooms reflect thoughtful sustainable design at every level. Strategically oriented to capture solar warmth and natural ventilation, they minimize the need for artificial heating and cooling. A special thermal insulation layer retains warmth during winter while maintaining cool interiors in summer - an engineering solution drawn directly from the ancestral building techniques of the Atacameño people who have lived in this desert for millennia.</p>
<p>Water conservation is equally central. Well water is treated through reverse osmosis for safe consumption, then reused for irrigation - giving it a second life that nourishes gardens and supports greenery in one of the driest landscapes on the planet.</p>`,
      image: {
        src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-stargazing_f5c3d8a4.jpg",
        alt: "Stargazing at Nayara Alto Atacama under clear desert skies",
        caption: "Nayara Alto Atacama - solar-powered luxury in the driest desert on Earth",
      },
    },
    {
      heading: "Green Roofs and Rapa Nui Culture at Nayara Hangaroa",
      content: `<p><a href="/hangaroa">Nayara Hangaroa</a> on Rapa Nui (Easter Island) also holds the S Certification - making it and Alto Atacama the <strong>only luxury hotels in their respective destinations</strong> to carry this distinction.</p>
<p>The hotel embraces sustainable design inspired by the Rapa Nui <em>Kainga</em> philosophy. Its green roofs cool buildings naturally while blending seamlessly into the volcanic landscape. The architecture reflects the iconic Orongo ceremonial village through its materials and spatial design - immersing guests in culture and nature simultaneously.</p>
<p>A solar plant complements the hotel's energy supply, reducing dependence on Rapa Nui's electrical grid - an infrastructure that is particularly sensitive due to the island's geographic isolation in the middle of the Pacific Ocean.</p>
<p>The hotel operates comprehensive waste management programs with recycling points and coastal cleanups led by staff. Its wastewater treatment plant recycles graywater for irrigation, conserving water and maintaining vibrant landscapes while protecting Easter Island's fragile ecosystem.</p>
<p>Beyond architecture and energy, both Chilean properties actively support local communities through education programs, scholarships, local sourcing, and cultural preservation initiatives. The S Certification is not just an environmental badge - it validates the full spectrum of responsible operations, from how a hotel sources its food to how it respects the cultural heritage of the place it inhabits.</p>`,
      image: {
        src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-aerial_9e07a82e.jpg",
        alt: "Aerial view of Nayara Hangaroa on Easter Island with green roofs and volcanic landscape",
        caption: "Nayara Hangaroa - green roofs inspired by the Rapa Nui Kainga philosophy",
      },
      pullQuote: "The S Certification is not just an environmental badge - it validates the full spectrum of responsible operations.",
    },
    {
      heading: "Why Sustainability Certification Matters in Luxury Travel",
      content: `<p>The difference between a sustainability claim and a sustainability certification is an auditor. What the S Certification requires is <strong>documented, measurable, independently verified performance</strong> - reviewed annually, with the real possibility of losing the certification if standards slip.</p>
<p>For Nayara, the certifications are not the goal. They are the proof. The goal is to demonstrate that luxury hospitality and environmental responsibility are not in tension.</p>
<p><em>The desert and the island are not amenities. They are the reason any of this exists.</em></p>`,
      pullQuote: "The difference between a sustainability claim and a sustainability certification is an auditor.",
    },
  ],
  sources: [
    { label: "Global Sustainable Tourism Council (GSTC)", href: "https://www.gstc.org/" },
    { label: "GSTC Recognition of Chile's S Certification", href: "https://www.gstc.org/chilean-national-system-for-distinction-of-sustainable-tourism-achieves-recognized-global-sustainable-tourism-council-status-for-its-standard/" },
    { label: "SERNATUR - Chile's National Tourism Service", href: "https://www.sernatur.cl/" },
    { label: "Nayara Resorts - Sustainability Report 2026 (PDF)", href: "https://23160175.fs1.hubspotusercontent-na1.net/hubfs/23160175/PR/Sustainability%20Nayara%20Resorts%20(1).pdf" },
  ],
  relatedArticles: [
    {
      slug: "/blog/green-globe-certification",
      title: "Green Globe Certification: How Nayara Earned It Across Costa Rica and Panama",
      pillar: "Sustainability",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/IMG_5354_8a9b536e.PNG",
      date: "April 2026",
    },
    {
      slug: "/blog/pura-vida",
      title: "Pura Vida: The Science of Why Costa Rica Is the Healthiest Country on Earth",
      pillar: "Wellness",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pura-vida-hero_567b6d5c.jpeg",
      date: "March 2026",
    },
  ],
  ctaProperties: [
    { name: "Nayara Alto Atacama", route: "/alto-atacama" },
    { name: "Nayara Hangaroa", route: "/hangaroa" },
  ],
  seo: {
    metaTitle: "Chile S Certification: How Nayara Alto Atacama and Hangaroa Lead Sustainable Tourism | Nayara Journal",
    metaDescription: "How Nayara Alto Atacama and Nayara Hangaroa earned Chile's government-backed S Certification for Sustainable Tourism - the only luxury hotels in their destinations to hold this distinction.",
  },
};

// ─── Green Globe Certification Blog Post (Costa Rica + Bocas) ───

export const greenGlobePost: BlogPostData = {
  slug: "green-globe-certification",
  title: "Green Globe Certification: How Nayara Earned It Across Costa Rica and Panama",
  subtitle: "Four properties, one commitment - how Green Globe's 400+ compliance indicators validate Nayara's sustainability model",
  author: "Albert Ghitis",
  authorRole: "Nayara Resorts",
  date: "April 8, 2026",
  pillar: "Sustainability",
  tags: ["Sustainability", "Green Globe", "GSTC", "Costa Rica", "Panama"],
  readingTime: 8,
  heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/IMG_5354_8a9b536e.PNG",
  heroVideo: {
    desktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Supersale-2_500e97e2.mp4",
  },
  keyFindings: [
    "Green Globe certification requires compliance with 44 criteria across 400+ indicators, covering sustainable management, social and economic impact, cultural heritage, and environmental performance - with annual independent audits.",
    "Nayara Gardens, Springs, and Tented Camp in Costa Rica achieved Green Globe Certification in 2024 following extensive evaluation of environmental, social, and governance policies.",
    "Nayara Bocas del Toro has held Green Globe Certification for three consecutive years - operating completely off-grid with nearly 100% solar power and rainwater harvesting.",
    "All three Costa Rica properties are certified carbon neutral through Eco Qualis and have been plastic-free since 2021.",
  ],
  sections: [
    {
      heading: "What Is Green Globe Certification and Why Does It Matter?",
      content: `<p><a href="https://www.greenglobe.com/" target="_blank" rel="noopener noreferrer">Green Globe</a> is one of the oldest and most widely recognized sustainability certification programs in tourism. Developed over three decades, it evaluates properties against <strong>44 core criteria grouped into four pillars</strong>: Sustainable Management, Social and Economic Impact, Cultural Heritage, and Environmental Performance.</p>
<p>Behind those four pillars sit more than 400 compliance indicators. Each one requires documented evidence - not intention, not marketing language, but operational proof. Energy consumption logs. Waste diversion rates. Water quality testing. Staff training records. Community partnership agreements. Procurement sourcing data.</p>
<p>Green Globe is aligned with the <a href="https://www.gstc.org/" target="_blank" rel="noopener noreferrer">GSTC</a> criteria, is an affiliate member of <a href="https://www.unwto.org/" target="_blank" rel="noopener noreferrer">UN Tourism (UNWTO)</a>, and participates in the Tourism Sustainability Certifications Alliance (TSCA). Properties must pass an annual independent audit to retain certification. There is no lifetime membership. There is no grandfathering.</p>`,
      pullQuote: "Green Globe requires documented evidence across 400+ compliance indicators - not intention, not marketing language, but operational proof.",
    },
    {
      heading: "Green Globe at Nayara Arenal: Carbon Neutral and Plastic Free Since 2021",
      content: `<p>The three Nayara properties in Costa Rica's Arenal region - Gardens, Springs, and Tented Camp - share a single sustainability infrastructure. They sit within 30,000 acres of lush rainforest that is home to half of Costa Rica's bird, mammal, and reptile species. The forest is not a backdrop. It is the reason the hotels exist.</p>
<p>The Green Globe evaluation confirmed what the properties had been building for years: ongoing reforestation programs that have turned former cattle-ranching land into functioning wildlife corridors; renewable energy sourcing; water preservation systems that protect the volcanic watershed; comprehensive recycling practices; and community engagement initiatives that extend well beyond the property boundaries.</p>
<p>The majority of staff come from the town of La Fortuna. Nayara's community housing project - developed in partnership with a local bank - provides homes to La Fortuna families with no down payment required. The equity belongs to the families regardless of employment status. Free transportation, education support, and early childhood programs for staff families are standard.</p>
<p>All three Costa Rica properties are <strong>certified carbon neutral</strong> through Eco Qualis, and have been <strong>plastic-free</strong> since 2021 - replacing all single-use plastics with biodegradable alternatives.</p>
<p>These are not add-on programs. They are the operating model.</p>`,
      image: {
        src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-s3-rooms_0707176b.jpg",
        alt: "Nayara Tented Camp luxury tent interior surrounded by rainforest canopy",
        caption: "Nayara Tented Camp - canvas structures with minimal permanent footprint, elevated above the forest floor",
      },
    },
    {
      heading: "Green Globe at Nayara Bocas del Toro: Off Grid Solar and Rainwater Harvesting",
      content: `<p>Nayara Bocas del Toro was not retrofitted for sustainability. It was designed for it.</p>
<p>Before a single piling was driven, five separate environmental impact studies were conducted. The resort was built entirely on stilts to protect native mangroves and coral reefs. With no natural beaches on the mangrove island, the world's first floating beach was created - also on stilts - preserving the delicate seabed ecosystem beneath.</p>
<p>The resort operates <strong>completely off-grid</strong>. Nearly 100% of the hotel's energy needs are generated by solar power. Freshwater comes exclusively from rainwater harvesting: custom gutter systems collect rainfall into large catchment basins holding up to <strong>100,000 gallons</strong>, which is then purified using advanced ultraviolet filtration for drinking, bathing, and cooking.</p>
<p>The iconic treehouses, designed by <a href="https://ibuku.com/" target="_blank" rel="noopener noreferrer">IBUKU</a>, are crafted from locally sourced bamboo and reclaimed hardwoods - including historic wood recovered from the Panama Canal. Rising fifty feet above the forest floor, they represent what sustainable construction looks like when it is taken seriously from the first sketch.</p>`,
      image: {
        src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-aerial-villas-mangroves_9d5e94f5.jpg",
        alt: "Aerial view of Nayara Bocas del Toro overwater villas nestled among mangroves",
        caption: "Nayara Bocas del Toro - built entirely on stilts to protect native mangroves and coral reefs",
      },
      pullQuote: "Nayara Bocas del Toro operates completely off-grid - nearly 100% solar powered, with freshwater from rainwater harvesting purified through UV filtration.",
    },
    {
      heading: "Zero Kilometer Cuisine: How Nayara Sources Food Locally Across Four Destinations",
      content: `<p>Across all Nayara properties, the <strong>zero-kilometer food philosophy</strong> prioritizes local farms and fresh seafood sourced directly from surrounding waters. This is not a menu label. It is a supply chain decision that reduces carbon emissions, supports regional economies, and delivers seasonal, nutritious, and culturally authentic cuisine.</p>
<p>In Costa Rica, on-site organic farms supply a significant portion of restaurant produce. In the Atacama, the <em>Cero Kilómetros</em> gastronomic philosophy draws on ancestral ingredients and local producers. In Bocas del Toro, Caribbean seafood arrives from the waters visible from the dining room.</p>
<p>The connection between food and place is not decorative. It is structural. When a hotel sources locally, it creates economic incentives for the surrounding community to maintain the agricultural and marine systems that make the destination worth visiting in the first place. The table becomes part of the ecosystem - not separate from it.</p>`,
    },
    {
      heading: "Why Green Globe and S Certification Matter More Than Marketing Claims",
      content: `<p>The difference between a sustainability claim and a sustainability certification is an auditor.</p>
<p>Any hotel can say it cares about the environment. Any marketing team can write copy about green initiatives. What Green Globe and the S Certification require is something harder: <strong>documented, measurable, independently verified performance</strong> - reviewed annually, with the real possibility of losing the certification if standards slip.</p>
<p>That accountability is what makes these certifications meaningful. They are not awards given once and displayed forever. They are ongoing commitments that require continuous improvement, transparent reporting, and the willingness to be held to a standard that most luxury hotels never volunteer for.</p>
<p>For Nayara, the certifications are not the goal. They are the proof. The goal is to demonstrate that luxury hospitality and environmental responsibility are not in tension - that the most extraordinary guest experiences happen precisely where the natural and cultural systems that create them are treated with the seriousness they deserve.</p>
<p><em>The forest, the reef, the desert, the island - they are not amenities. They are the reason any of this exists.</em></p>`,
      pullQuote: "The difference between a sustainability claim and a sustainability certification is an auditor.",
    },
  ],
  sources: [
    { label: "Green Globe - Certification Criteria & Indicators", href: "https://www.greenglobe.com/criteria-indicators" },
    { label: "Global Sustainable Tourism Council (GSTC)", href: "https://www.gstc.org/" },
    { label: "GSTC Recognition of Chile's S Certification", href: "https://www.gstc.org/chilean-national-system-for-distinction-of-sustainable-tourism-achieves-recognized-global-sustainable-tourism-council-status-for-its-standard/" },
    { label: "Nayara Resorts - Sustainability Report 2026 (PDF)", href: "https://23160175.fs1.hubspotusercontent-na1.net/hubfs/23160175/PR/Sustainability%20Nayara%20Resorts%20(1).pdf" },
    { label: "SERNATUR - Chile's National Tourism Service", href: "https://www.sernatur.cl/" },
    { label: "IBUKU - Bamboo Architecture", href: "https://ibuku.com/" },
    { label: "UN Tourism (UNWTO)", href: "https://www.unwto.org/" },
    { label: "Nayara Resorts Blog - Setting the Standard: Green Globe Certification", href: "/blog/green-globe-certification" },
  ],
  relatedArticles: [
    {
      slug: "/blog/sunlit-sustainability",
      title: "Sunlit Sustainability: Nature-Powered",
      pillar: "Sustainability",
      image: "https://blog.nayararesorts.com/hubfs/4-Aug-15-2025-06-36-01-1516-PM.png",
      date: "2025",
    },
    {
      slug: "/blog/nayara-story",
      title: "The Nayara Story: Time Is the Highest Currency",
      pillar: "Brand",
      image: "https://blog.nayararesorts.com/hubfs/IMG_8179.jpg",
      date: "2025",
    },
    {
      slug: "/blog/pura-vida",
      title: "Pura Vida: The Science of Why Costa Rica Is the Healthiest Country on Earth",
      pillar: "Wellness",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pura-vida-hero_567b6d5c.jpeg",
      date: "March 2026",
    },
  ],
  ctaProperties: [
    { name: "Nayara Gardens", route: "/gardens" },
    { name: "Nayara Springs", route: "/springs" },
    { name: "Nayara Tented Camp", route: "/tented-camp" },
    { name: "Nayara Bocas del Toro", route: "/bocas-del-toro" },
    { name: "Nayara Alto Atacama", route: "/alto-atacama" },
    { name: "Nayara Hangaroa", route: "/hangaroa" },
  ],
  seo: {
    metaTitle: "Green Globe Certification: How Nayara Earned It Across Costa Rica and Panama | Nayara Journal",
    metaDescription: "How Nayara Resorts earned and maintains Green Globe and Chile's S Certification across four destinations - from Costa Rica's rainforest to the Atacama Desert, Panama's mangroves, and Easter Island.",
  },
};


// ─── Atacama Oasis Blog Post ─────────────────────────────────

export const atacamaOasisPost: BlogPostData = {
  slug: "best-place-to-stay-atacama-desert-oasis",
  title: "The Best Place to Stay in the Atacama Desert: Inside the Catarpe Valley Oasis",
  subtitle: "Why a functioning oasis is not an amenity, but the foundation of the experience",
  author: "Nayara Resorts",
  authorRole: "Nayara Editorial",
  date: "2025",
  pillar: "Sustainability",
  tags: ["Sustainability", "Atacama", "Oasis", "Desert", "Architecture"],
  readingTime: 14,
  heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/87_ab229191.jpg",
  keyFindings: [
    "A desert oasis functions as an environmental system where water, vegetation, and topography interact to create a stable microclimate within extreme aridity.",
    "Human settlement in the Atacama has always depended on these systems, with archaeological and cultural evidence tracing more than 10,000 years of adaptation along water corridors.",
    "The Catarpe Valley represents one of the Atacama's most intact oasis environments, where geography and hydrology moderate exposure and allow continuity in an otherwise hyper-arid landscape.",
  ],
  sections: [
    {
      heading: "Why Location Matters More Than Amenities in the Atacama Desert",
      content: `<p>In the Atacama Desert, where exposure defines experience, the best place to stay is not a matter of luxury. It is a matter of location.</p>
<p>Oases have always determined where human life can exist in this landscape. Groundwater forced to the surface by geology, vegetation that moderates temperature, and landforms that reduce wind and solar stress create narrow zones where movement, recovery, and continuity become possible. Archaeological research documented by <strong>Memoria Chilena</strong> shows that Indigenous Lickanantay settlements followed these same sheltered valleys rather than exposed plateaus.</p>
<p>Modern science confirms what early inhabitants understood intuitively. Studies published in <strong>Scientific Reports</strong> and the <strong>Journal of Arid Environments</strong> demonstrate that desert oases measurably reduce temperature extremes, stabilize humidity, and soften wind exposure, creating microclimates that support sustained human activity.</p>
<p>Across desert cultures globally, hospitality has always emerged where water, shelter, and restraint align, not where amenities are layered onto exposure. These lodges reflect a principle recognized by the United Nations Environment Programme: in arid environments, true comfort begins with respect for water, shade, and restraint.</p>`,
      image: {
        src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/80_57ce5c18.jpg",
        alt: "Atacama desert landscape with volcanic terrain",
        caption: "Nayara Alto Atacama , embedded within the Catarpe Valley oasis",
      },
    },
    {
      heading: "What Is a Desert Oasis and How Does It Create a Microclimate?",
      content: `<p>An oasis is not a place where water simply appears. It is a system.</p>
<p>In arid environments, a reliable source of water triggers a chain reaction. Vegetation becomes viable. Soil retains moisture. Wind slows. Temperatures stabilize. Sound softens. Movement changes. The lived experience of the desert shifts from exposure to continuity.</p>
<p>Environmental research defines this phenomenon as the <strong>oasis effect</strong>, a measurable microclimate outcome in which vegetated and watered areas remain cooler and more stable than surrounding desert surfaces. Studies published in the <em>Journal of Arid Environments</em> describe oases as localized climate modifiers rather than isolated anomalies.</p>
<p>Further research in <em>Scientific Reports</em> confirms that oases can reduce surface temperatures by several degrees, particularly during peak heat. Vegetation and hydrology reshape climate. They do not decorate it.</p>`,
    },
    {
      heading: "10,000 Years of Human Settlement Along Atacama Oasis Corridors",
      content: `<p>Human presence in the Atacama is an oasis story.</p>
<p>Archaeological and anthropological research shows that settlement in northern Chile extends back more than <strong>10,000 years</strong>. Survival here was never accidental. Early cultures adapted to the desert through restraint, mobility, and alignment with water sources rather than attempts to dominate the environment.</p>
<p>The <strong>Lickanantay people</strong>, also known as the Atacameño, organized life around oasis corridors where rivers, springs, and groundwater made agriculture and continuity possible. These oases were not simply places to live. They were bases for seasonal movement, trade, and ceremony.</p>
<p>Trade routes across the Atacama followed water. Caravans moved between oases carrying salt, maize, copper, and textiles, linking the Pacific coast with the Andean highlands. Without oases, these routes would not have existed. With them, the desert became navigable rather than impassable.</p>`,
      image: {
        src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/83_621b9b3f.jpg",
        alt: "Desert landscape of the Atacama with mountains",
        caption: "The Atacama , where human settlement has always followed water corridors",
      },
    },
    {
      heading: "The Catarpe Valley: Where Nayara Alto Atacama Sits Inside the Oasis",
      content: `<p>The Catarpe Valley is not an abstract concept. It is a defined landscape shaped by hydrology and terrain.</p>
<p>Located just outside San Pedro de Atacama, the valley follows a river corridor that allows vegetation to persist in one of the driest environments on Earth. Cliffs and slopes create natural wind protection, while water flow supports plant life that further stabilizes the microclimate.</p>
<p>This geography produces a basin effect. Heat disperses more slowly. Wind is softened. Sound carries differently. The desert becomes less confrontational and more legible.</p>
<p>Nayara Alto Atacama is embedded inside this system rather than adjacent to it. This placement is deliberate. It allows the Atacama to be experienced from within the same condition that has always made it inhabitable.</p>`,
      pullQuote: "Nayara Alto Atacama is embedded inside the oasis system rather than adjacent to it. This placement is deliberate.",
    },
    {
      heading: "Adobe Architecture in the Atacama: Ancient Desert Building Techniques",
      content: `<p>Desert architecture did not originate as an aesthetic exercise. It emerged as a survival mechanism.</p>
<p>For millennia, thick earthen walls, recessed courtyards, and shaded passages moderated temperature and light long before mechanical systems existed. These principles are documented extensively by the <strong>Getty Conservation Institute</strong> and the <strong>International Council on Monuments and Sites</strong>.</p>
<p>Nayara Alto Atacama draws directly from this lineage. Adobe walls absorb heat during the day and release it slowly at night. Terrace roofs are layered with native brea herbs to filter sunlight and cool interiors. Corridors are shaded with canes of <em>Chusquea quila</em>, a local bamboo species known for diffusing light and reducing heat gain , a passive cooling strategy consistent with arid-zone design principles.</p>
<p>These materials are not decorative. They regulate the environment.</p>`,
    },
    {
      heading: "Why Staying Inside an Oasis Changes the Atacama Experience",
      content: `<p>Many places in the Atacama offer views of the desert. Fewer offer immersion in its systems.</p>
<p>Being inside an oasis means waking to vegetation rather than dust. Moving through shade rather than exposure. Hearing water rather than wind. These are subtle differences, but in a desert, subtlety is decisive.</p>
<p>From within the Catarpe oasis, the Atacama is experienced as a continuous landscape rather than an adversarial one. Exploration becomes sustained rather than episodic. Observation deepens.</p>
<p>This distinction has always mattered. It mattered to early inhabitants choosing where to settle. It mattered to caravans planning routes. It matters now to travelers seeking depth rather than spectacle.</p>
<p><em>To experience the Atacama from an oasis is not a choice of comfort. It is the way the desert has always been known.</em></p>`,
      pullQuote: "To experience the Atacama from an oasis is not a choice of comfort. It is the way the desert has always been known.",
    },
  ],
  sources: [
    { label: "National Geographic , Atacama Desert and Early Human Settlement", href: "https://www.nationalgeographic.com/" },
    { label: "Memoria Chilena , Lickanantay (Atacameño) Culture", href: "https://www.memoriachilena.gob.cl/" },
    { label: "Journal of Arid Environments , Oasis Effect", href: "https://www.sciencedirect.com/journal/journal-of-arid-environments" },
    { label: "Scientific Reports , Microclimate Cooling in Oases", href: "https://www.nature.com/srep/" },
    { label: "ScienceDirect , Oasis–Desert Microclimate Interactions", href: "https://www.sciencedirect.com/" },
    { label: "NASA Earth Observatory , Atacama Desert", href: "https://earthobservatory.nasa.gov/" },
  ],
  relatedArticles: [
    {
      slug: "/journal/s-certification",
      title: "Chile S Certification: How Nayara Alto Atacama and Hangaroa Lead Sustainable Tourism",
      pillar: "Sustainability",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-aerial_9e07a82e.jpg",
      date: "April 2026",
    },
  ],
  ctaProperties: [
    { name: "Nayara Alto Atacama", route: "/alto-atacama" },
  ],
  seo: {
    metaTitle: "The Best Place to Stay in the Atacama Desert: Inside the Catarpe Valley Oasis | Nayara Journal",
    metaDescription: "Why a functioning oasis is not an amenity but the foundation of the Atacama experience , the science of desert microclimates, 10,000 years of human adaptation, and the Catarpe Valley.",
  },
};

// ─── Hangaroa Regeneration Blog Post ─────────────────────────

export const hangaroaRegenerationPost: BlogPostData = {
  slug: "hangaroa-regeneration-rapa-nui",
  title: "How Nayara Hangaroa Leads Ecological Regeneration on Easter Island",
  subtitle: "Walking giants, the Hito family, and the future of Easter Island",
  author: "Nayara Resorts",
  authorRole: "Nayara Editorial",
  date: "November 5, 2025",
  pillar: "Sustainability",
  tags: ["Sustainability", "Rapa Nui", "Easter Island", "Regeneration", "Culture"],
  readingTime: 10,
  heroImage: "https://blog.nayararesorts.com/hubfs/9-Aug-11-2025-08-40-19-5669-PM.png",
  keyFindings: [
    "The Hito family, descended from early Polynesian settlers, are part-owners of Nayara Hangaroa and lead cultural and ecological regeneration on Rapa Nui.",
    "Modern archaeological research confirmed that the moai were 'walked' using ropes and community cooperation , validating Rapa Nui oral tradition that the statues moved with mana.",
    "The toromiro tree, long extinct in the wild, has been reintroduced through global collaboration between Rapa Nui families and botanical gardens.",
  ],
  sections: [
    {
      heading: "The Polynesian Origins of Rapa Nui and the Hito Family Legacy",
      content: `<p>Centuries ago, a small wooden canoe appeared over the endless blue, carrying a handful of Polynesian voyagers who had followed the stars across thousands of kilometers of open ocean. Among them were the ancestors of the Hito family. Guided by birds, currents, and memory, they landed on a volcanic speck of land now known as Rapa Nui.</p>
<p>For centuries, Rapa Nui flourished. Families cultivated <strong>manavai gardens</strong>, circular rock enclosures that protected crops from wind and preserved moisture in volcanic soil. Communities fished sustainably, farmed communally, and lived according to navigational knowledge carried across the Pacific.</p>
<p>From the slopes of Rano Raraku came the <strong>Moai</strong>. These enormous stone figures honored ancestors and held <em>mana</em>, the spiritual energy that protected the living. Facing inland, they watched over villages and helped maintain a balance between people and place.</p>
<p>That balance began to strain. Trees were cleared to move the Moai, and the island's palm forests eventually vanished. Without timber, canoes could no longer be built for deep-sea fishing. Soil eroded. Birds disappeared. The relationship between community and environment fractured.</p>`,
      image: {
        src: "https://blog.nayararesorts.com/hubfs/9-Aug-11-2025-08-40-19-5669-PM.png",
        alt: "Moai statues on Easter Island at sunset",
        caption: "The Moai face inland , watching over the people, not themselves",
      },
    },
    {
      heading: "The Hito Family: Part Owners of Nayara Hangaroa and Guardians of Rapa Nui",
      content: `<p>Among the lineages that carried the island's memory forward is the <strong>Hito family</strong>. Their ancestors carved Moai, farmed the rocky soil, and fished the surrounding reefs. Through colonization, disease, and exile, they preserved the traditions of stewardship that had shaped Rapa Nui for centuries.</p>
<p>Today the Hito family are guardians of both heritage and habitat, and part-owners of Nayara Hangaroa. They plant toromiro and makoi trees on ancestral land once left barren. They collaborate with scientists and artists to protect coral reefs, restore soils, and teach the next generation what balance truly means.</p>
<p><em>"The Moai remind us to walk carefully,"</em> says one elder of the family. <em>"They face inward because they protect the people, not themselves."</em></p>
<p>At Nayara Hangaroa, design follows the island's contours rather than defying them. Roofs arch like lava flows, and walls are built from volcanic stone. Solar energy powers operations, water is reused through natural filtration, and organic material is returned to the soil as compost.</p>`,
      pullQuote: "The Moai remind us to walk carefully. They face inward because they protect the people, not themselves.",
    },
    {
      heading: "How the Moai Walked: The Science That Confirmed Rapa Nui Oral Tradition",
      content: `<p>For centuries, the mystery of how the moai moved puzzled historians. Were they dragged on wooden sledges? Rolled on logs? Modern research led by archaeologists <strong>Carl Lipo</strong> and <strong>Terry Hunt</strong> revealed that the statues were <em>walked</em>.</p>
<p>With ropes and rhythm, teams could tilt each moai upright. By shifting weight side to side, they walked it forward until it reached its resting place. The discovery confirmed what Rapa Nui oral tradition had always said: the moai walked with <em>mana</em>.</p>
<p>It was both a scientific revelation and a cultural vindication. What once seemed like myth became proof that belief and physics can coexist. The moai walked because the people walked together.</p>`,
    },
    {
      heading: "From Ecological Collapse to Renewal on Easter Island",
      content: `<p>Jared Diamond once called Rapa Nui the clearest example of ecological collapse in human history. Yet that label misses the second half of the story: <strong>renewal</strong>.</p>
<p>Today, forests are returning. Coral reefs are recovering. Traditional agriculture and fishing are being revived through community education. The same ingenuity that built the moai is now rebuilding the ecosystem.</p>
<p>The <strong>toromiro tree</strong>, long extinct in the wild, has been reintroduced through a global collaboration between Rapa Nui families and botanical gardens. Each new sapling represents both science and faith. The coral reefs around the island, once bleached and lifeless, are showing color again thanks to local conservation programs.</p>`,
    },
    {
      heading: "Regenerative Luxury at Nayara Hangaroa: Restoration as a Guest Experience",
      content: `<p>At Nayara Hangaroa, regeneration is not an initiative or activity. It is woven into daily life. Guests are invited to participate in restoration walks, tree-planting efforts, and coral-education programs , not as visitors but as contributors.</p>
<p>The Hito family remains at the center of this philosophy. Their work reflects a shift from sustainable luxury to <strong>regenerative luxury</strong>, where the goal is not to minimize impact but to restore what has been lost.</p>
<p>From the volcanic shores of Rapa Nui to the rainforests of Costa Rica, regeneration at Nayara begins and ends with respect. Each place teaches its own form of restoration, and each community shapes the practices that sustain identity. Together, they form a single purpose: to ensure travel gives back more than it takes.</p>`,
      pullQuote: "Regenerative luxury: the goal is not to minimize impact but to restore what has been lost.",
    },
  ],
  sources: [
    { label: "Carl Lipo & Terry Hunt , Walking Moai Research", href: "https://www.nationalgeographic.com/" },
    { label: "Jared Diamond , Collapse: How Societies Choose to Fail or Succeed", href: "https://www.penguinrandomhouse.com/" },
    { label: "Rapa Nui National Park , UNESCO World Heritage", href: "https://whc.unesco.org/en/list/715/" },
  ],
  relatedArticles: [
    {
      slug: "/journal/s-certification",
      title: "Chile S Certification: How Nayara Alto Atacama and Hangaroa Lead Sustainable Tourism",
      pillar: "Sustainability",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-aerial_9e07a82e.jpg",
      date: "April 2026",
    },
  ],
  ctaProperties: [
    { name: "Nayara Hangaroa", route: "/hangaroa" },
  ],
  seo: {
    metaTitle: "How Nayara Hangaroa Leads Ecological Regeneration on Easter Island | Nayara Journal",
    metaDescription: "The Hito family, walking moai, and the future of Easter Island , how Nayara Hangaroa is leading cultural and ecological regeneration on Rapa Nui.",
  },
};

// ─── Bocas del Toro Condé Nast Blog Post ─────────────────────

export const bocasCondeNastPost: BlogPostData = {
  slug: "conde-nast-bocas-del-toro",
  title: "Nayara Bocas del Toro: #1 Resort in Central America, Condé Nast Traveler 2025",
  subtitle: "The future of overwater luxury belongs to a private island in Panama",
  author: "Nayara Resorts",
  authorRole: "Nayara Editorial",
  date: "2025",
  pillar: "Sustainability",
  tags: ["Sustainability", "Bocas del Toro", "Panama", "Awards", "Condé Nast"],
  readingTime: 10,
  heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-aerial-villas-mangroves_9d5e94f5.jpg",
  keyFindings: [
    "Nayara Bocas del Toro was named the #1 Resort in Central America in Condé Nast Traveler's 2025 Readers' Choice Awards , voted by more than 757,000 travelers.",
    "The resort operates entirely off-grid on a private island, combining overwater villas, native landscape design, and community partnership.",
    "Unlike distant overwater destinations like the Maldives or Bora Bora, Bocas offers the same dream , closer, richer, and designed entirely for romance.",
  ],
  sections: [
    {
      heading: "Why Bocas del Toro Is the New Overwater Destination for Couples",
      content: `<p>For decades, the dream of the overwater bungalow belonged to the Maldives, Bora Bora, and Tahiti, but 20-hour flights, jet lag, and heavy carbon footprints have turned the fantasy into a contradiction. Bocas is different. We offer the same overwater dream, but closer, richer, and more alive.</p>
<p>Here, coral gardens glow beneath your deck, mangroves stretch into the sea, and tropical rainforest meets reef. This stunning biodiversity is why we're known as the <em>Galápagos of the Caribbean</em> , and that uniqueness has just been recognized.</p>
<p>Nayara Bocas del Toro was just named the <strong>#1 Resort in Central America</strong> in <a href="https://www.cntraveler.com/gallery/top-resorts-in-central-america-readers-choice-awards" target="_blank" rel="noopener noreferrer">Condé Nast Traveler's 2025 Readers' Choice Awards</a>. More than 757,000 travelers took part in the 38th annual awards , one of the most trusted recognitions in global travel.</p>
<p>According to <a href="https://www.forbes.com/sites/petertaylor/2023/06/14/ive-traveled-to-six-continents-and-bocas-del-toro-panam-is-about-to-become-the-coolest-place-on-earth-heres-why/" target="_blank" rel="noopener noreferrer">Forbes</a>, Bocas is "about to become the coolest place on Earth" , a statement not about hype but transformation.</p>`,
      image: {
        src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-aerial-villas-mangroves_9d5e94f5.jpg",
        alt: "Aerial view of Nayara Bocas del Toro overwater villas among mangroves",
        caption: "Nayara Bocas del Toro , #1 Resort in Central America, Condé Nast Traveler 2025",
      },
    },
    {
      heading: "Overwater Villas in Panama: Adults Only Privacy at Nayara Bocas",
      content: `<p>Bocas is proudly adults-only. That choice shapes everything. Privacy and intimacy aren't afterthoughts here , they are the blueprint.</p>
<p>Our villas aren't just overwater , they are private sanctuaries designed exclusively for couples. Each has a plunge pool, a wrap-around deck, and a ladder descending straight into the Caribbean.</p>
<p>Romance here is not staged. It is built into the architecture, the landscape, and the rhythm of the resort.</p>`,
    },
    {
      heading: "All Inclusive Luxury Redefined at Nayara Bocas del Toro",
      content: `<p>The term "all-inclusive" often conjures images of buffets, wristbands, and overcrowded beach resorts. But a new era of all-inclusive is emerging , one built on elevated experience, not uniformity.</p>
<p><a href="https://www.thezoereport.com/living/all-inclusive-resorts" target="_blank" rel="noopener noreferrer">The Zoe Report</a> frames this shift: "As a luxury experience, it is best described as 'all-encompassing' rather than 'all-inclusive.'"</p>
<p>You won't find lines. You'll find a private island where comfort, cuisine, and connection coexist without compromises so couples can focus on each other, not logistics. Every meal is fine dining, every drink is hand-crafted, and kayaks, paddle boards, and snorkel gear aren't checked out , they're simply waiting at your overwater villa.</p>`,
    },
    {
      heading: "A Private Island in Panama Where Rainforest Meets Caribbean Reef",
      content: `<p>Unlike the Galápagos, Bocas connects marine and rainforest biomes seamlessly. Isla Bastimentos National Marine Park meets the mainland's Palo Seco Forest Reserve, forming an unbroken corridor from mountain cloud forest to coral reef. Few places on Earth let you see monkeys, sloths, and parrotfish in the same hour.</p>
<p>Exploring it with your own private boat and captain isn't just an adventure , it's freedom made for two. A day might begin on the untouched sands of Zapatilla, where a romantic private picnic awaits on a beach, then end with dolphin pods leaping beside you at sunset.</p>
<p>Add to that cultural depth , the Ngäbe-Buglé Indigenous communities, Afro-Antillean heritage, and a new wave of regenerative tourism , and you get an archipelago where biodiversity and humanity coexist instead of compete.</p>`,
      image: {
        src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-aerial-villas-mangroves_9d5e94f5.jpg",
        alt: "Overwater villas at Nayara Bocas del Toro",
        caption: "Bocas del Toro , where rainforest meets reef on a private Caribbean island",
      },
      pullQuote: "The Maldives, Bora Bora, and Tahiti will always inspire. But they are oceans away, while Bocas offers the same dream , closer, richer, and designed entirely for romance.",
    },
    {
      heading: "IBUKU Treehouses and the Calibri Spa at Nayara Bocas del Toro",
      content: `<p>While the overwater bungalows bring you to the sea, our luxury treehouses, suspended 50 feet, carry you into the forest.</p>
<p>Conceived by world-renowned design studio <a href="https://ibuku.com/" target="_blank" rel="noopener noreferrer">IBUKU</a>, each was crafted from hardwood salvaged from the bottom of the Panama Canal. This unique material not only lends extraordinary strength and character, but also ties them to Panama's history.</p>
<p>Wellness also rises with our new Calibri Treehouse Spa. Couples' massages in the canopy, yoga where light filters through leaves, and spa rituals use native cacao, volcanic mud, and tropical botanicals.</p>
<p>Being named the #1 Resort in Central America by Condé Nast confirms what we have always believed: romance, sustainability, and immersion belong together.</p>`,
    },
  ],
  sources: [
    { label: "Condé Nast Traveler , Readers' Choice Awards 2025", href: "https://www.cntraveler.com/gallery/top-resorts-in-central-america-readers-choice-awards" },
    { label: "Forbes , The Coolest Place on Earth", href: "https://www.forbes.com/sites/petertaylor/2023/06/14/ive-traveled-to-six-continents-and-bocas-del-toro-panam-is-about-to-become-the-coolest-place-on-earth-heres-why/" },
    { label: "The Zoe Report , All-Inclusive, Reimagined", href: "https://www.thezoereport.com/living/all-inclusive-resorts" },
    { label: "IBUKU Design Studio", href: "https://ibuku.com/" },
    { label: "Atlas Obscura , Bastimentos National Marine Park", href: "https://www.atlasobscura.com/" },
  ],
  relatedArticles: [
    {
      slug: "/journal/green-globe-certification",
      title: "Green Globe Certification: How Nayara Earned It Across Costa Rica and Panama",
      pillar: "Sustainability",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/IMG_5354_8a9b536e.PNG",
      date: "April 2026",
    },
  ],
  ctaProperties: [
    { name: "Nayara Bocas del Toro", route: "/bocas-del-toro" },
  ],
  seo: {
    metaTitle: "Nayara Bocas del Toro: #1 Resort in Central America, Condé Nast Traveler 2025 | Nayara Journal",
    metaDescription: "Named #1 Resort in Central America by Condé Nast Traveler 2025 , why the future of overwater luxury belongs to a private island in Panama.",
  },
};

// ─── Beyond Sustainability & Bocas/Atacama Study posts REMOVED ─────
// Content now lives in individual blogs: How We Built a Hotel on an Island,
// Sunlit Sustainability, Green Globe Certification, S Certification, etc.
// These artificial combined posts have been retired.

/* REMOVED: beyondSustainabilityPost — was an artificial construction
export const beyondSustainabilityPost: BlogPostData = {
  slug: "beyond-sustainability-regenerative-tourism",
  title: "Beyond Sustainability: Regenerative Tourism at Nayara Resorts",
  subtitle: "From the first eco-lodges to a new vision of regenerative luxury",
  author: "Nayara Resorts",
  authorRole: "Nayara Editorial",
  date: "March 17, 2024",
  pillar: "Sustainability",
  tags: ["Sustainability", "Regenerative Tourism", "Eco-Luxury", "Costa Rica", "Community"],
  readingTime: 12,
  heroImage: "https://blog.nayararesorts.com/hubfs/2-Nov-05-2025-03-44-38-2049-AM.png",
  keyFindings: [
    "Costa Rica was the epicenter of the ecotourism movement and home to the first eco-lodges , today it is a world leader in sustainable tourism.",
    "Regenerative tourism expands sustainable thinking beyond environmental stewardship, ensuring tourism benefits are shared equitably with local communities.",
    "Nayara's Costa Rica properties are fully carbon neutral, plastic-free since 2021, and have turned former cattle-ranching land into functioning wildlife corridors.",
    "Nayara Bocas del Toro was built entirely off-grid after five environmental studies, with nearly 100% solar power and 100,000 gallons of rainwater harvesting capacity.",
  ],
  sections: [
    {
      heading: "Costa Rica, the Home of the First Eco-Lodges",
      content: `<p>Ecotourism has likely existed in some form as long as people have traveled, but traveling to far-off destinations to experience the natural world started to gain prominence in the 1980s. A big part of the first movement towards ecotourism started in Costa Rica.</p>
<p>What Costa Rica lacks in square mileage it makes up for in the sheer number of species that live here, and the density of natural beauty you can find within its borders. Add the fact that Costa Rica has a cultural focus on preserving and protecting its natural heritage that predates even the early days of the ecotourism movement, and you have a rich history of sustainability.</p>
<p>As a result, many of the first eco-lodges and eco-friendly hotels emerged right here in Costa Rica, including <strong>Rara Avis</strong>, which is considered by many to be the very first eco-lodge in the country.</p>`,
    },
    {
      heading: "Elevating Eco Lodging into Eco-Luxury",
      content: `<p>The first eco-lodges were very rudimentary, built using early understandings of sustainability practices. Even the best eco-lodges offered visitors immersion in the natural world but often had to make trade-offs with comfort and amenities.</p>
<p>Today, consumer demand for sustainable travel options has pushed new technologies, new ways of thinking, and new methods to offer world-class comfort with a light ecological footprint and an affordable price tag.</p>
<p>The result is that travelers and hotels no longer have to make so many hard decisions about choosing comfort and quality over sustainability. Those four decades of innovation have also helped hotel and resort providers understand the impact they have not only on natural resources but also on the local communities that they work with and rely on.</p>`,
    },
    {
      heading: "Investing in People, Empowering the Local Community",
      content: `<p>Today, we at Nayara are a part of the <strong>regenerative tourism movement</strong>, which views travel, tourism, and hospitality as a <em>positive</em> force on the community and surrounding environment, as long as it's done correctly.</p>
<p>Regenerative tourism expands sustainable thinking beyond just environmental stewardship, adding an additional focus that the benefits of tourism are shared equitably with local communities. Fair wages and employment opportunities are just the tip of the iceberg.</p>
<p>True regenerative tourism sees investment in the local community as a long-term investment into the health of the hotel or resort. This can take countless forms: offering certification programs for local residents, donating time and resources to community initiatives, supporting education, food security, and childcare, offering free transportation and housing for employees.</p>`,
      pullQuote: "Regenerative tourism believes that a healthy destination leads to a more vibrant travel experience, and that those who facilitate travel have a duty to improve their surroundings.",
    },
    {
      heading: "Sustainability in the Costa Rican Rainforest",
      content: `<p>Located in the heart of the rainforest, Nayara Resorts in Costa Rica have an intimate relationship with nature. <a href="/tented-camp">Nayara Tented Camp</a>, the final addition to our family of resorts in Costa Rica, used to sit on a barren cattle ranch without a single bird or shrub to speak of.</p>
<p>We took it upon ourselves to bring the rainforest back to this desolate landscape, planting hundreds of indigenous trees and plants, creating a habitat for countless wildlife including dozens of cecropia trees , a sloth favorite , that turned our resort into a veritable sloth sanctuary.</p>
<p>We built two pedestrian bridges hanging over our forest canopy to protect the trees and wildlife below. After a rigorous multi-year effort, we became <strong>fully carbon neutral</strong>. We calculate and offset all our greenhouse gas emissions.</p>
<p>The majority of our team comes from the neighboring town of La Fortuna de San Carlos. We offer them free transportation, sustainable tourism education, and health services. Additional local initiatives include free early education for our employees' children and support for Hogarcito de Niños, a local orphanage.</p>`,
      image: {
        src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/11_576297a8.jpg",
        alt: "Nayara Tented Camp in the Costa Rican rainforest",
        caption: "Nayara Tented Camp , built on former cattle-ranching land, now a thriving wildlife corridor",
      },
    },
    {
      heading: "Sustainability Across All Destinations",
      content: `<p>In the Atacama, <a href="/alto-atacama">Nayara Alto Atacama</a> is the <strong>only luxury hotel</strong> in San Pedro de Atacama with an "S" certification for sustainable tourism from the Chilean government. We broke ground on a new solar panel and battery project completely disconnected from the national electricity grid.</p>
<p>On Easter Island, <a href="/hangaroa">Nayara Hangaroa</a> was designed as a tribute to the Orongo ceremonial center. Our team comes from the neighboring town of Hanga Roa, and they're involved in every aspect of our operations, especially as guides and communicators of the history of the Rapa Nui.</p>
<p>In Panama, <a href="/bocas-del-toro">Nayara Bocas del Toro</a> was built entirely on stilts and off-grid after five different environmental studies. Nearly 100% of the hotel's energy comes from solar panels, and all freshwater comes from harvested rainwater , up to <strong>100,000 gallons</strong> , purified through ultraviolet filtration.</p>
<p>Our massive coral restoration program, in partnership with Caribbean Coral Restoration, has already seen a tremendous amount of marine life return to the bay.</p>`,
    },
    {
      heading: "Sustainability Is An Investment in Our Future",
      content: `<p>Here at Nayara Resorts, we follow the principles of regenerative tourism even as we work to provide a peerless, world-class experience , not because it's a compelling marketing tool. In some ways, it <em>is</em> emotional , these destinations are our homes, and we want to protect them.</p>
<p>But as countless others in the regenerative tourism movement understand, investing in our environment as well as the health and local economy of our communities is just a smart investment in the future, one that has already begun to pay dividends.</p>`,
    },
  ],
  sources: [
    { label: "Nayara Resorts , Sustainability Report", href: "https://23160175.fs1.hubspotusercontent-na1.net/hubfs/23160175/PR/Sustainability%20Nayara%20Resorts%20(1).pdf" },
    { label: "Costa Rica Tourism Board , Sustainability Certification", href: "https://www.ict.go.cr/" },
    { label: "Green Globe , Certification Criteria", href: "https://www.greenglobe.com/" },
  ],
  relatedArticles: [
    {
      slug: "/journal/green-globe-certification",
      title: "Green Globe Certification: How Nayara Earned It Across Costa Rica and Panama",
      pillar: "Sustainability",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/IMG_5354_8a9b536e.PNG",
      date: "April 2026",
    },
    {
      slug: "/journal/s-certification",
      title: "Chile S Certification: How Nayara Alto Atacama and Hangaroa Lead Sustainable Tourism",
      pillar: "Sustainability",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-aerial_9e07a82e.jpg",
      date: "April 2026",
    },
  ],
  ctaProperties: [
    { name: "Nayara Gardens", route: "/gardens" },
    { name: "Nayara Springs", route: "/springs" },
    { name: "Nayara Tented Camp", route: "/tented-camp" },
    { name: "Nayara Bocas del Toro", route: "/bocas-del-toro" },
    { name: "Nayara Alto Atacama", route: "/alto-atacama" },
    { name: "Nayara Hangaroa", route: "/hangaroa" },
  ],
  seo: {
    metaTitle: "Beyond Sustainability: Regenerative Tourism at Nayara Resorts | Nayara Journal",
    metaDescription: "From the first eco-lodges in Costa Rica to regenerative luxury across six destinations , how Nayara Resorts is redefining sustainable hospitality.",
  },
};
*/

/* REMOVED: bocasAtacamaSustainabilityPost — was an artificial construction
export const bocasAtacamaSustainabilityPost: BlogPostData = {
  slug: "bocas-atacama-sustainability-study",
  title: "Nayara Bocas del Toro & Alto Atacama: A Study in Sustainability",
  subtitle: "How our properties in Panama and Chile are leading the way in sustainable tourism",
  author: "Nayara Resorts",
  authorRole: "Nayara Editorial",
  date: "2024",
  pillar: "Sustainability",
  tags: ["Sustainability", "Bocas del Toro", "Atacama", "Solar Energy", "Coral Restoration"],
  readingTime: 6,
  heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-overwater_f9b09985.jpg",
  keyFindings: [
    "Five environmental studies at a cost of $100,000 were conducted before building Nayara Bocas del Toro completely off-grid.",
    "Almost 100% of the hotel's energy needs are generated by solar panels, and all freshwater comes from harvested rainwater.",
    "Nayara Alto Atacama is the only luxury hotel in San Pedro de Atacama with Chile's S Certification for sustainable tourism.",
    "A massive coral restoration program with Caribbean Coral Restoration has already seen tremendous marine life return to the bay.",
  ],
  sections: [
    {
      heading: "Panama: Built Off-Grid from Day One",
      content: `<p>With studies showing that as much as 77% of travelers are looking for a sustainability ethos when they travel, Nayara Resorts is well-positioned as a global leader in this space.</p>
<p>We begin in Panama where sustainability was built into our culture from the very beginning. That's why we conducted <strong>five different environmental studies</strong> at a cost of $100,000 to build Nayara Bocas del Toro completely off-grid without harming the native mangroves and coral reefs.</p>
<p>This required that we build water, power, and wastewater systems designed specifically for our private island. As a result, almost <strong>100% of the hotel's energy needs</strong> are now generated by solar panels. All of the freshwater that we use on property comes from harvested rainwater that we put through an advanced ultraviolet purification process.</p>`,
      image: {
        src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-aerial-villas-mangroves_9d5e94f5.jpg",
        alt: "Aerial view of Nayara Bocas del Toro",
        caption: "Nayara Bocas del Toro , built entirely off-grid on a private island",
      },
    },
    {
      heading: "Coral Reef Restoration",
      content: `<p>What we're most excited about is our massive <strong>coral restoration program</strong> that will help restore and revitalize our bay, and hopefully soon, the entire archipelago.</p>
<p>In 2022, we partnered with the locally-based <strong>Caribbean Coral Restoration</strong> to install ten environmentally friendly fish habitats (artificial reef structures). These structures are then seeded with genetically resilient coral for even faster growth and recovery.</p>
<p>While it's still early, we have already seen a tremendous amount of marine life return to the bay. Our main goal is to set an example and help other local hotels and entities start coral reef restoration programs of their own.</p>`,
      pullQuote: "Our main goal is to set an example and help other local hotels start coral reef restoration programs of their own.",
    },
    {
      heading: "Chile: Solar Innovation in the Desert",
      content: `<p>Heading south to Chile, <a href="/alto-atacama">Nayara Alto Atacama</a> is the <strong>only</strong> luxury hotel in San Pedro de Atacama with an "S" certification for sustainable tourism from the Chilean government.</p>
<p>In another first for Chile, we're breaking ground on a new solar panel and battery project that will be completely disconnected from the national electricity grid. Not only will this reduce our carbon footprint by more than a ton of CO₂ per year, but will also minimize noise and traffic pollution.</p>
<p>We are using innovative solar panels that are <strong>coplanar</strong> , flat and non-reflective , so they fit seamlessly with the hotel and its surrounding mountainous desert environment. And, as in the case of Panama, we are dedicated to serving as an example and supporting the local community to create solar panel projects of their own.</p>`,
    },
    {
      heading: "Leading the Way",
      content: `<p>Nayara Resorts is leading the way in sustainable tourism and setting a new standard in the industry. Our environmentally friendly initiatives in Panama and Chile show our commitment to preserving the natural beauty of the places we call home and our dedication to reducing our carbon footprint.</p>
<p>We hope to inspire others in the hospitality industry to follow our lead and take action to protect the planet for future generations to come.</p>`,
    },
  ],
  sources: [
    { label: "Nayara Resorts , Sustainability Report", href: "https://23160175.fs1.hubspotusercontent-na1.net/hubfs/23160175/PR/Sustainability%20Nayara%20Resorts%20(1).pdf" },
    { label: "Caribbean Coral Restoration", href: "https://caribbeancoralrestoration.com/" },
    { label: "SERNATUR , Chile's National Tourism Service", href: "https://www.sernatur.cl/" },
  ],
  relatedArticles: [
    {
      slug: "/journal/green-globe-certification",
      title: "Green Globe Certification: How Nayara Earned It Across Costa Rica and Panama",
      pillar: "Sustainability",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/IMG_5354_8a9b536e.PNG",
      date: "April 2026",
    },
    {
      slug: "/journal/s-certification",
      title: "Chile S Certification: How Nayara Alto Atacama and Hangaroa Lead Sustainable Tourism",
      pillar: "Sustainability",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-aerial_9e07a82e.jpg",
      date: "April 2026",
    },
  ],
  ctaProperties: [
    { name: "Nayara Bocas del Toro", route: "/bocas-del-toro" },
    { name: "Nayara Alto Atacama", route: "/alto-atacama" },
  ],
  seo: {
    metaTitle: "Nayara Bocas del Toro & Alto Atacama: A Study in Sustainability | Nayara Journal",
    metaDescription: "How Nayara's properties in Panama and Chile are leading sustainable tourism , off-grid solar power, coral restoration, and Chile's S Certification.",
  },
};
*/

// ─── All Blog Posts (registry) ───────────────────────────────

export const allBlogPosts: Record<string, BlogPostData> = {
  "pura-vida": puraVidaPost,
  "green-globe-s-certification": greenGlobePost, // legacy slug redirect
  "s-certification": sCertificationPost,
  "green-globe-certification": greenGlobePost,
  "best-place-to-stay-atacama-desert-oasis": atacamaOasisPost,
  "hangaroa-regeneration-rapa-nui": hangaroaRegenerationPost,
  "conde-nast-bocas-del-toro": bocasCondeNastPost,
  "three-kitchens-one-rainforest": gastronomyBlogPost,
  "in-house-activities-three-hotels-infinite-experiences": inHouseActivitiesBlogPost,
  "experiential-travel-nayara-2026": experientialTravelPost,
  "family-bucket-list-nayara": familyBucketListPost,
};

/** Helper to get a blog post by slug */
export function getBlogPost(slug: string): BlogPostData | undefined {
  return allBlogPosts[slug];
}
