/*
 * SUNLIT SUSTAINABILITY BLOG — /blog/sunlit-sustainability
 * "Solar Energy at Nayara Resorts: Sustainability Powered by Nature"
 * Author: Nayara Resorts | Sep 3, 2025
 * The "Sun" counterpart to NayaraByNight (the "Moon")
 * Standalone piece; will eventually tie to a broader sustainability series
 * Uses BlogPostTemplate with full article data
 */
import BlogPostTemplate from "./BlogPostTemplate";
import type { BlogPostData } from "@/data/blogPosts";

const sunlitSustainabilityPost: BlogPostData = {
  slug: "sunlit-sustainability",
  title: "Sunlit Sustainability: Nature-Powered",
  author: "Albert Ghitis",
  authorRole: "Head of Digital Marketing, Nayara Resorts",
  date: "September 3, 2025",
  pillar: "Sustainability",
  tags: ["Solar Energy", "Sustainability", "Renewable Energy", "Nayara Alto Atacama", "Nayara Hangaroa", "Nayara Bocas del Toro", "Green Globe", "Reforestation", "Off-Grid"],
  readingTime: 9,
  heroImage: "https://blog.nayararesorts.com/hubfs/4-Aug-15-2025-06-36-01-1516-PM.png",
  keyFindings: [
    "Nayara Alto Atacama and Nayara Hangaroa have both completed solar panel installations, with Hangaroa's 45-kilowatt system offsetting the annual energy consumption equivalent of 28 family homes on Rapa Nui.",
    "Costa Rica generated 98.6% of its electricity from renewable sources in 2025, allowing our three Arenal properties to operate entirely on clean energy without the need for on-site solar panels.",
    "Nayara Bocas del Toro runs almost entirely off-grid on a private island in Panama, powered by solar panels and sustained by rainwater collected and purified on-site.",
  ],
  sections: [
    {
      heading: "Sun and Moon: A Cosmic Coincidence",
      content: `<p>Though separated by scale and distance, the Sun and Moon appear exactly the same size in our sky. That's because the Sun is 400 times larger than the Moon, but also 400 times farther away. It's a rare cosmic coincidence that makes solar eclipses possible and reflects the natural balance between day and night, reflection and energy, intuition and action.</p>
<p>At Nayara, we draw inspiration from both. But where the Moon invites us to pause, the Sun moves us forward. Its power isn't just symbolic, it's physical, fueling a new chapter in how we think about hospitality, our role as stewards, and what it means to go beyond sustainability.</p>
<p>While the Moon sheds light on immersive experiences rooted in place (explored in <a href="/blog/nayara-by-night">Nayara by Night</a>), the Sun now illuminates the first component of regenerative travel. It's a commitment not only to preserve nature, but to actively restore and improve it.</p>
<p>In 2024 Nayara Alto Atacama completed a major solar panel installation in the heart of Chile's high desert, capturing the region's intense sunlight to reduce emissions and support off-grid resilience. Now, its sister property on Rapa Nui, Nayara Hangaroa, has followed suit, completing its own solar panel program that powers daily operations while protecting one of the world's most delicate island ecosystems.</p>
<p>These projects are more than upgrades. They're a reflection of our belief that true luxury doesn't come at nature's expense. It's powered by it.</p>`,
    },
    {
      heading: "Solar Panels Rooted in Place",
      content: `<p>Solar energy is now the fastest-growing source of electricity on the planet. By mid-2025, global solar capacity surpassed 600 gigawatts, more than doubling in just five years. This surge marks a vital step toward a more sustainable future, one powered by the natural forces of Sun and Earth.</p>
<p>That energy is harnessed in two main ways: passive and active. Passive design uses materials, orientation, and architecture to regulate light and temperature, like windows that capture warmth or overhangs that offer shade. Active systems, such as photovoltaic panels, convert sunlight into electricity. Together, these approaches create energy-efficient spaces that lower carbon impact and deepen our connection to the environment.</p>
<p>As of May 2025, <a href="/hangaroa">Nayara Hangaroa</a> uses both methods. Thanks to the addition of our new 45-kilowatt solar panel system, we now offset the annual energy consumption equivalent to 28 family homes on Rapa Nui. This renewable contribution eases demand on <a href="https://www.sasipa.cl/" target="_blank" rel="noopener noreferrer">SASIPA</a>, the island's diesel-based energy grid, cutting carbon emissions in one of the world's most ecologically sensitive environments.</p>
<p>But Nayara's sustainable vision for Easter Island began long before the panels. Hangaroa's architecture draws from traditional Rapa Nui design, with green roofs for natural insulation, curved walls shaped like ancient canoes, and lava stone foundations that blend seamlessly into the land.</p>`,
      image: {
        src: "https://blog.nayararesorts.com/hs-fs/hubfs/3-Jul-25-2025-02-30-18-4208-PM.png",
        alt: "Solar panels at Nayara Hangaroa on Rapa Nui",
      },
    },
    {
      heading: "A Forest Fueled by Clean Energy",
      content: `<p>Costa Rica was green before green was a trend. Long before sustainability became a worldwide mission, this small but visionary nation made environmental stewardship a national priority. Costa Rica protects over 25% of its land through national parks and reserves, and the region surrounding our properties is part of the most biodiverse rainforest on Earth, home to more than 5% of all known species in just a sliver of the planet's landmass.</p>
<p>More than 98% of Costa Rica's electricity is generated from renewable sources like geothermal, wind, hydro, and solar. This national infrastructure allows our resorts to operate entirely on clean energy, without the need for on-site solar panels.</p>
<p>At <a href="/tented-camp">Nayara Tented Camp</a>, <a href="/gardens">Nayara Gardens</a>, and <a href="/springs">Nayara Springs</a>, sustainability is a way of life. Each resort has received <a href="https://www.greenglobe.com/criteria-indicators" target="_blank" rel="noopener noreferrer">Green Globe Certification</a>, one of the most respected international seals in the hospitality industry. Green Globe's rigorous standards are upheld through annual audits that assess environmental management, cultural heritage, and social impact.</p>
<p>Nowhere is that impact more visible than at Nayara Tented Camp, where we led one of the most ambitious private reforestation efforts in Central America. What was once barren and devoid of life and just a stretch of cattle pasture, has transformed into a lush rainforest. We've planted over 20,000 native trees, restoring wildlife corridors, capturing carbon, and creating new habitats for monkeys, sloths, and countless birds in the process.</p>`,
      image: {
        src: "https://blog.nayararesorts.com/hs-fs/hubfs/4-Jul-25-2025-02-31-45-5240-PM.png",
        alt: "Rainforest canopy surrounding Nayara properties in Costa Rica",
      },
    },
    {
      heading: "The Desert That Sparked Our Solar Journey",
      content: `<p>In the Atacama Desert, the Moon may illuminate the night, but it's the Sun that fuels the day, and the future.</p>
<p><a href="/alto-atacama">Nayara Alto Atacama</a> has transformed the way solar energy is used in luxury hospitality by completing a major solar panel and battery project that now powers much of the resort, while allowing for a complete split from the national grid. The result: fewer emissions, reduced traffic and noise, and energy that flows directly from the sun to the guest experience.</p>
<p>This was Nayara's first solar initiative and a bold step forward in a region rich with potential. The Atacama receives some of the most intense solar radiation on the planet, making it a natural home for innovation in renewable energy. Our photovoltaic system uses coplanar, non-reflective panels that integrate seamlessly with the architecture and surrounding desert.</p>
<p>But sustainability here goes beyond electricity. Alto Atacama is the only luxury property in San Pedro de Atacama with "S" Certification from the Chilean government. Built from adobe and tinted with natural pigments, the lodge blends into the landscape and follows the land's natural contours, preserving sacred sightlines and honoring ancient Atacameno traditions.</p>
<p>Water is used sparingly, native plants dominate the gardens, and lighting is minimal to preserve the night skies, essential in the world's top <a href="/blog/stargazing-atacama">stargazing destinations</a>. In every way, Alto Atacama shows that luxury and sustainability don't just coexist, they elevate one another.</p>`,
      image: {
        src: "https://blog.nayararesorts.com/hs-fs/hubfs/7-3.png",
        alt: "Solar panels at Nayara Alto Atacama in the Chilean desert",
      },
    },
    {
      heading: "Quiet Power in the Caribbean: By Sun and Water",
      content: `<p>At <a href="/bocas-del-toro">Nayara Bocas del Toro</a>, sustainability was part of the plan from the very beginning. Long before opening, we conducted five separate environmental studies to ensure our resort could operate completely off-grid without harming the mangroves or coral reefs that surround our private island.</p>
<p>The result was to combine two elemental forces: sun and water. From the sky, the sun provides nearly 100% of our energy needs, thanks to an integrated solar panel system that powers daily operations across the resort.</p>
<p>From the clouds, we collect rainwater, our sole freshwater source, which is then purified on-site through a sophisticated ultraviolet filtration system. This water is used throughout the property, from drinking and bathing to cleaning, irrigation, and kitchen operations.</p>
<p>In a location where even small changes can have large ecological consequences, solar power helps us stay true to our mission of offering world-class hospitality while preserving one of Panama's most unique ecosystems.</p>`,
      image: {
        src: "https://blog.nayararesorts.com/hs-fs/hubfs/5-Jul-08-2025-10-27-36-8629-PM.png",
        alt: "Nayara Bocas del Toro overwater villas surrounded by mangroves",
      },
    },
    {
      heading: "Powering a Different Kind of Luxury",
      content: `<p>Spanning four distinct ecosystems, Nayara's approach to renewable energy is shaped by a clear conviction: luxury travel must give back more than it takes. Solar power plays an essential role in this vision, reflecting our long-term commitment to the places we call home and the generations that follow.</p>
<p>In a time shaped by climate change and overtourism, sustainability can no longer be treated as an add-on. It must be woven into the foundation of how we design, build, and operate. At Nayara, we're not simply minimizing our footprint, we're reshaping what responsible travel can look like.</p>
<p>Because the most meaningful experiences on Earth shouldn't come at its expense.</p>`,
    },
  ],
  sources: [
    { label: "International Renewable Energy Agency (IRENA), Global solar capacity data", href: "https://www.irena.org/" },
    { label: "SASIPA, Rapa Nui energy grid operator", href: "https://www.sasipa.cl/" },
    { label: "Green Globe Certification, criteria and indicators", href: "https://www.greenglobe.com/criteria-indicators" },
    { label: "Costa Rica Institute of Electricity (ICE), national renewable energy statistics", href: "https://www.grupoice.com/" },
    { label: "Chile Ministry of Energy, S Certification for sustainable tourism", href: "https://www.energia.gob.cl/" },
    { label: "UNESCO Rapa Nui World Heritage Site", href: "https://whc.unesco.org/en/list/715/" },
  ],
  relatedArticles: [
    {
      slug: "nayara-by-night",
      title: "Nayara by Night: Of Moon and Stars",
      pillar: "Experiences",
      image: "/manus-storage/moai-milky-way-night_73a94f15.jpg",
      date: "Sep 3, 2025",
    },
    {
      slug: "hangaroa-regeneration",
      title: "How Nayara Hangaroa Leads Regeneration on Rapa Nui",
      pillar: "Sustainability",
      image: "https://blog.nayararesorts.com/hubfs/9-Aug-11-2025-08-40-19-5669-PM.png",
      date: "Nov 5, 2025",
    },
    {
      slug: "nayara-story",
      title: "Luxury Resorts Rooted in Nature: The Nayara Story",
      pillar: "Experiences",
      image: "https://blog.nayararesorts.com/hubfs/2-Nov-05-2025-03-44-38-2049-AM.png",
      date: "Sep 3, 2025",
    },
  ],
  ctaProperties: [
    { name: "Nayara Alto Atacama", route: "/alto-atacama" },
    { name: "Nayara Hangaroa", route: "/hangaroa" },
    { name: "Nayara Bocas del Toro", route: "/bocas-del-toro" },
  ],
  seo: {
    metaTitle: "Sunlit Sustainability: Nature-Powered | Nayara Resorts",
    metaDescription: "Explore how Nayara Resorts harnesses solar power for sustainable luxury, from the Atacama Desert to Easter Island, Costa Rica, and Bocas del Toro. Solar panels, Green Globe certification, and off-grid resilience.",
  },
};

export default function SunlitSustainabilityBlog() {
  return <BlogPostTemplate post={sunlitSustainabilityPost} />;
}
