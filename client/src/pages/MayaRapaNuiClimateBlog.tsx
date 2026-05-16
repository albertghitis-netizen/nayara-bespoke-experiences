/*
 * MAYA & RAPA NUI CLIMATE BLOG — /blog/maya-rapa-nui-climate
 * "A Collapse That Wasn't: What the Maya and Rapa Nui Teach Us About Climate and Survival"
 * Author: Dr. Kenneth Seligson | Jan 31, 2026
 * Part 1 of the 5-part Rapa Nui series
 * Uses BlogPostTemplate with full article data
 *
 * 5-Part Rapa Nui Series:
 *   1. /blog/maya-rapa-nui-climate — A Collapse That Wasn't (Dr. Kenneth Seligson)
 *   2. /blog/hangaroa-regeneration — How Nayara Hangaroa Leads Regeneration (Albert Ghitis)
 *   3. /blog/tapati-festival — What Is Tapati Rapa Nui and Why It Matters
 *   4. Video: Guardians of Rapa Nui (Hitorangi family conversation)
 *   5. Video: Uncovering Rapa Nui (Archaeologist's Perspective with Dr. Seligson)
 */
import BlogPostTemplate from "./BlogPostTemplate";
import type { BlogPostData } from "@/data/blogPosts";

const mayaRapaNuiClimatePost: BlogPostData = {
  slug: "maya-rapa-nui-climate",
  title: "A Collapse That Wasn't: What the Maya and Rapa Nui Teach Us About Climate and Survival",
  author: "Dr. Kenneth Seligson",
  authorRole: "Chair and Associate Professor of Anthropology, California State University Dominguez Hills",
  date: "January 31, 2026",
  pillar: "Sustainability",
  tags: ["Maya", "Rapa Nui", "Easter Island", "Climate Change", "Archaeology", "Collapse Narratives", "Resilience", "Nayara Hangaroa", "Dr. Kenneth Seligson"],
  readingTime: 14,
  heroImage: "/manus-storage/maya-rapa-nui-hero-moai-sunset_a87477ad.jpeg",
  keyFindings: [
    "The Maya did not vanish. During the Late Classic and Terminal Classic periods, what changed most dramatically was political authority, not cultural continuity. Maya communities persisted, reorganized, and continued to live as Maya long after dynastic monuments ceased.",
    "Rapa Nui did not experience a demographic collapse before European contact. Population modeling, radiocarbon evidence, and settlement patterns support resilience and continuity prior to the nineteenth century.",
    "Both societies endured centuries of environmental and political stress and responded through adaptation rather than societal failure, challenging the idea that ecological pressure leads inevitably to collapse.",
  ],
  sections: [
    {
      heading: "Why Diamond's Collapse Template Took Hold",
      image: { src: "/manus-storage/maya-rapa-nui-pyramid-moai_425c64ac.jpeg", alt: "Maya pyramid at Chichén Itzá alongside moai statues of Rapa Nui" },
      content: `<p>For more than two decades, Rapa Nui and the Maya have been framed as cautionary tales. In popular culture and academic shorthand alike, they are presented as societies that exceeded environmental limits, triggered their own collapse, and vanished as warnings to the modern world.</p>
<p>That framing entered public consciousness most forcefully through Jared Diamond's <em>Collapse</em>, which cast Rapa Nui as an extreme case of ecological self-destruction and extended the same logic to the Maya. The argument is elegant. It is memorable. It is also incorrect.</p>
<p>Its durability has less to do with evidence than with psychology. Collapse narratives satisfy modern anxieties about climate, consumption, and limits. They reduce complex histories into moral lessons. They make the past feel manageable.</p>
<p>Archaeology does not work that way. It rarely produces clean endings or single causes. What it reveals instead are long arcs of adjustment, uneven change, and societies that reorganize rather than disappear.</p>
<p>Diamond's argument works in part because it uses real observations.</p>
<p>Rapa Nui once had forests. Those forests largely disappeared. The moai are heavy. The island is isolated. The chain feels intuitive: trees were cut to move statues, the land failed, society collapsed.</p>
<p>In the Maya case, the same logic appears: drought, deforestation, warfare, abandonment.</p>
<p>The issue is not that these elements are fictional. The issue is that the causal chain is treated as inevitable, when the evidence shows a more complex and more human pattern.</p>
<p>Environmental stress is real. What follows from it depends on political systems, social coordination, and the capacity to adapt.</p>
<p>That is where both stories become more interesting.</p>`,
    },
    {
      heading: "What the Maya and Climate Change Actually Shows",
      content: `<p>In my recent book, <em>The Maya and Climate Change</em>, I examine one of the central misunderstandings behind the so-called Maya collapse: the assumption that climate acted as a verdict rather than as a constraint navigated through long-term social and environmental management.</p>
<p>Rather than treating climate stress as a singular cause of failure, the book situates it within a highly engineered landscape shaped by centuries of water management, agricultural innovation, and institutional learning. Its focus is not the dramatic end of dynasties, but the long arc of how Maya communities built, refined, and sustained socio-ecological systems across prolonged periods of environmental uncertainty.</p>
<p>It is true that the Maya lowlands experienced periods of reduced rainfall. It is also true that water management was central to Maya urbanism.</p>
<p>The Maya were not blind to risk. They engineered landscapes for uncertainty. Reservoirs, chultuns, aguadas, canals, and terracing reflect an ongoing effort to buffer variability.</p>
<p>The important point is this: environmental stress tends to break rigid systems first. It reveals fragility in political organization, in resource distribution, and in the legitimacy of leadership.</p>
<p>That is a systems story, not a morality tale.</p>
<p>When climate stress is treated as a single deterministic cause, it replaces analysis with inevitability. It also implies that people were passive or ignorant.</p>
<p>The archaeological record shows the opposite.</p>`,
    },
    {
      heading: "A Dig Teaches You to Distrust Neat Stories",
      image: { src: "/manus-storage/maya-rapa-nui-figurine_f9e348f4.jpeg", alt: "Xanab Chak ceramic figurine recovered from the Puuc region" },
      content: `<p>If you spend enough time excavating, you learn that sweeping narratives often collapse under small evidence.</p>
<p>At the site of Xanab Chak in the Puuc region, one of the most instructive lessons came from a single object. A ceramic figurine with unusually stylized eyes, holding what appears to be a bowl-like vessel, was recovered from an early context. It was unlike anything previously documented in the northern Maya lowlands and forced a reassessment of early connections and local innovation.</p>
<p>One figurine does not rewrite Maya history. But it dismantles lazy assumptions. It forces better questions. It reminds us that what we think we know often reflects what we have been trained to expect.</p>
<p>That lesson applies at the scale of civilizations as well.</p>`,
    },
    {
      heading: "Pop Culture Turned Collapse Into a Brand",
      content: `<p>The collapse template did not remain within academic debate. It migrated into popular imagination and became entertainment.</p>
<p>A clear example is Mel Gibson's <em>Apocalypto</em>. In a public interview, Gibson explicitly cited <em>Collapse</em> as a source of inspiration, alongside selective readings of the Popol Vuh. The result was not scholarship, but atmosphere. Collapse became plot.</p>
<p>Once a collapse story gains cultural traction, it becomes easy to apply everywhere. Rapa Nui becomes the island version. The Maya become the rainforest version. Ecological and historical differences disappear. The genre remains.</p>
<p>The problem is that genre is not evidence.</p>`,
    },
    {
      heading: "Rapa Nui Was Not a Pre-Contact Collapse",
      content: `<p>Rapa Nui is often framed as the perfect collapse case because it is isolated and finite. That finitude is real. But the inference of self-destruction is not.</p>
<p>The strongest correction comes from population modeling and radiocarbon data. In <a href="https://www.nature.com/articles/s41467-021-24252-z" target="_blank" rel="noopener noreferrer">DiNapoli et al. in Nature Communications</a>, the authors conclude that there is no evidence for a pre-contact demographic collapse. Population patterns show resilience and continuity before European arrival.</p>
<p>Forest loss on Rapa Nui also does not follow the simplistic chain Diamond proposed. Research points to the impact of introduced rats on palm seed regeneration. This is summarized in the <a href="https://www.binghamton.edu/news/story/3291/what-happened-to-the-trees-on-easter-island" target="_blank" rel="noopener noreferrer">Binghamton University report</a>, which explains how ecological transformation can occur even without reckless human intent.</p>
<p>Most importantly, the island's agricultural response was adaptive. Lithic mulching and manavai enclosures represent investment and planning. They are not the residue of collapse. They are the infrastructure of persistence.</p>
<p>Rapa Nui's social systems also show evidence of cooperative resource management, directly countering "tragedy of the commons" assumptions. That argument is made explicitly in <a href="https://www.mdpi.com/2071-1050/12/11/4522" target="_blank" rel="noopener noreferrer">Triumph of the Commons</a>, which frames Rapa Nui as a case of sustained social coordination under constraint.</p>
<p>One of the most compelling reframings of moai and settlement comes from the freshwater record. A spatial analysis in <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0210409" target="_blank" rel="noopener noreferrer">PLOS ONE</a> shows strong alignment between monument platforms and freshwater availability, suggesting that ceremonial and social geography was organized around survival systems, not excess.</p>
<p>Climate context matters too. Evidence of prolonged drought overlapping with the decline of monument construction appears in <a href="https://www.nature.com/articles/s43247-022-00618-5" target="_blank" rel="noopener noreferrer">Communications Earth & Environment</a>, with additional synthesis reported by the <a href="https://news.climate.columbia.edu/2022/12/14/lake-sediments-rewrite-the-history-of-easter-islands-societal-collapse/" target="_blank" rel="noopener noreferrer">Lamont-Doherty Earth Observatory</a>.</p>
<p>That pattern, again, is familiar. Stress increases. Systems shift. Culture continues.</p>`,
    },
    {
      heading: "The 111 Survivors and the Real Rupture",
      content: `<p>The strongest evidence against the pre-contact collapse myth is not statistical. It is human.</p>
<p>In a <a href="/journal#hitorangi-rapanui">recent filmed conversation on Rapa Nui</a>, Tauma Hitorangi described the island's post-contact devastation in the way many Rapa Nui families recount it: the population reduced to roughly 111 people after slave raids and disease, with cultural suppression aimed at language and practice.</p>
<p>Whether the precise number is 111 or slightly different in archival records, the historical reality is unchanged. The catastrophic rupture on Rapa Nui came after contact, not before it.</p>
<p>A concise external summary of this post-contact devastation appears in the <a href="https://www.manchester.ac.uk/discover/news/outsiders-blamed-for-easter-islands-historic-demise/" target="_blank" rel="noopener noreferrer">University of Manchester piece "Outsiders blamed for Easter Island's historic demise"</a>, which emphasizes disease, slavery, and the lack of archaeological evidence for pre-contact societal collapse.</p>
<p>If you want to talk about catastrophe, this is where the story belongs.</p>`,
    },
    {
      heading: "Why I Include Rapa Nui While Being a Maya Specialist",
      content: `<p>I am not a Rapa Nui archaeologist. My primary fieldwork and scholarship are in the Maya lowlands.</p>
<p>But I include Rapa Nui here for two reasons.</p>
<p>First, the collapse narrative operates as a template across cultures. If you study how the Maya have been misread, you begin to recognize the same errors elsewhere.</p>
<p>Second, I have followed the Rapa Nui literature closely and have helped convene public scholarship that addresses it directly. I organized an <a href="https://www.archaeological.org/events/" target="_blank" rel="noopener noreferrer">Archaeological Institute of America event</a> featuring Jo Anne Van Tilburg, director of the <a href="http://www.eisp.org/" target="_blank" rel="noopener noreferrer">Easter Island Statue Project</a>. Her work provides the most comprehensive long-term inventory and documentation of moai and related sculpture.</p>
<p>That is not the same as excavation experience on Rapa Nui. It is enough to understand that the collapse myth is not sustained by the evidence.</p>`,
    },
    {
      heading: "What the Maya and Rapa Nui Actually Share",
      image: { src: "/manus-storage/maya-rapa-nui-archaeologist_6dc20fe6.jpeg", alt: "Dr. Kenneth Seligson at a Maya archaeological site in the Yucatán" },
      content: `<p>They do not share a time period. They do not share ecology. They do not share political structure.</p>
<p>What they share is how they have been turned into parables.</p>
<p>Both are treated as mysteries. Both are treated as vanished. Both are treated as proof that Indigenous societies were careless stewards of their environments.</p>
<p>The evidence shows something else.</p>
<p>Environmental stress reshapes political systems more often than it erases cultures. Monument silence is not cultural death. Collapse is rarely total. Continuity is the rule.</p>
<p>The mistake was never theirs. It was ours.</p>`,
    },
    {
      heading: "About the Author",
      content: `<p>Ken Seligson, PhD, is an anthropological archaeologist whose research focuses on human-environment relationships in the northern Maya lowlands of the Yucatan Peninsula. He is Chair and Associate Professor of Anthropology at California State University Dominguez Hills.</p>
<p>His work examines how Maya communities managed resources, adapted to environmental stress, and reorganized political and economic systems over time, with particular emphasis on the Puuc region of northern Yucatan. Since 2021, he has directed the Proyecto Arqueologico de Sitios de Pequena Escala en el Puuc Oriental (PASPEPO), investigating early agricultural communities, water-management strategies, and small-scale settlement patterns.</p>
<p>His research demonstrates that Maya technologies during periods of climatic stress were often fuel-efficient and conservation-oriented, challenging collapse-based interpretations of Maya history. His work has been supported by the National Science Foundation and other academic institutions, and his work contributes to ongoing scholarly reassessment of collapse narratives applied to ancient societies.</p>`,
    },
    {
      heading: "Companion Content: The Rapa Nui Series",
      content: `<p>This article is part of a five-part series exploring Rapa Nui's archaeology, culture, and regeneration through Nayara Hangaroa:</p>
<ul>
<li><strong>Part 1 (This Article):</strong> A Collapse That Wasn't: What the Maya and Rapa Nui Teach Us About Climate and Survival</li>
<li><strong>Part 2:</strong> <a href="/blog/hangaroa-regeneration">How Nayara Hangaroa Leads Regeneration on Rapa Nui</a></li>
<li><strong>Part 3:</strong> <a href="/blog/tapati-festival">What Is Tapati Rapa Nui and Why It Matters</a></li>
<li><strong>Video:</strong> <a href="/journal#hitorangi-rapanui">The Guardians of Rapa Nui: A Conversation with the Hitorangi Family</a></li>
<li><strong>Video:</strong> <a href="/journal#archaeologist-rapanui">Uncovering Rapa Nui: An Archaeologist's Perspective</a> (featuring Dr. Kenneth Seligson)</li>
</ul>`,
    },
  ],
  sources: [
    { label: "The Maya and Climate Change, Oxford University Press", href: "https://global.oup.com/academic/product/the-maya-and-climate-change-9780197696583" },
    { label: "Classic Period collapse of the Central Maya Lowlands, PNAS synthesis via PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/" },
    { label: "CSUDH announcement of The Maya and Climate Change", href: "https://www.csudh.edu/" },
    { label: "Xanab Chak figurine report, Archaeology Magazine", href: "https://www.archaeology.org/" },
    { label: "Population resilience on Rapa Nui, DiNapoli et al., Nature Communications", href: "https://www.nature.com/articles/s41467-021-24252-z" },
    { label: "What happened to Easter Island's trees, Binghamton University", href: "https://www.binghamton.edu/news/story/3291/what-happened-to-the-trees-on-easter-island" },
    { label: "Triumph of the Commons, Sustainability (MDPI)", href: "https://www.mdpi.com/2071-1050/12/11/4522" },
    { label: "Monument locations and freshwater, PLOS ONE", href: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0210409" },
    { label: "Prolonged drought and monument decline, Communications Earth & Environment", href: "https://www.nature.com/articles/s43247-022-00618-5" },
    { label: "Lake sediments rewrite collapse story, Lamont-Doherty Earth Observatory", href: "https://news.climate.columbia.edu/2022/12/14/lake-sediments-rewrite-the-history-of-easter-islands-societal-collapse/" },
    { label: "Outsiders blamed for Easter Island's historic demise, University of Manchester", href: "https://www.manchester.ac.uk/discover/news/outsiders-blamed-for-easter-islands-historic-demise/" },
    { label: "Ma'u Henua, Indigenous stewardship of Rapa Nui National Park", href: "https://www.mauhenua.org/" },
    { label: "UNESCO Rapa Nui World Heritage Site", href: "https://whc.unesco.org/en/list/715/" },
    { label: "Easter Island Statue Project, Jo Anne Van Tilburg", href: "http://www.eisp.org/" },
    { label: "AIA event listing: Uncovering Easter Island", href: "https://www.archaeological.org/events/" },
  ],
  relatedArticles: [
    {
      slug: "hangaroa-regeneration",
      title: "How Nayara Hangaroa Leads Regeneration on Rapa Nui",
      pillar: "Sustainability",
      image: "https://blog.nayararesorts.com/hubfs/9-Aug-11-2025-08-40-19-5669-PM.png",
      date: "Nov 5, 2025",
    },
    {
      slug: "tapati-festival",
      title: "The Tapati Rapa Nui Festival at Nayara Hangaroa",
      pillar: "Experiences",
      image: "https://blog.nayararesorts.com/hubfs/Im%C3%A1genes%20BLOGS/The%20Tapati%20Rapa%20Nui%20Festival%20at%20Nayara%20Hangaroa%20(6).jpg",
      date: "February 2025",
    },
    {
      slug: "wellness-by-colors",
      title: "Nature-Based Wellness at Nayara Resorts",
      pillar: "Wellness",
      image: "https://blog.nayararesorts.com/hubfs/2-Aug-18-2025-09-54-44-4739-PM.png",
      date: "2025",
    },
  ],
  ctaProperties: [
    { name: "Nayara Hangaroa", route: "/hangaroa" },
  ],
  seo: {
    metaTitle: "A Collapse That Wasn't: Maya & Rapa Nui Climate Survival | Nayara Resorts",
    metaDescription: "Dr. Kenneth Seligson challenges Jared Diamond's collapse narrative. The Maya and Rapa Nui adapted to environmental stress through resilience, not failure. Part of the Nayara Rapa Nui series.",
  },
};

export default function MayaRapaNuiClimateBlog() {
  return <BlogPostTemplate post={mayaRapaNuiClimatePost} />;
}
