/*
 * NEW BLOG POSTS — Gastronomy & In-House Activities
 * Two editorial blogs covering the shared dining and activity ecosystem
 * across Nayara Gardens, Nayara Springs, and Nayara Tented Camp.
 */
import type { BlogPostData } from "./blogPosts";

// ─── Gastronomy Blog Post ────────────────────────────────────
export const gastronomyBlogPost: BlogPostData = {
  slug: "three-kitchens-one-rainforest",
  title: "Three Kitchens, One Rainforest: A Culinary Journey Through Nayara",
  subtitle: "Gastronomy",
  author: "Nayara Resorts",
  authorRole: "Editorial",
  date: "April 22, 2026",
  pillar: "Gastronomy",
  tags: ["Gastronomy", "Dining", "Costa Rica", "Fine Dining", "Wine", "Cocktails"],
  readingTime: 8,
  heroImage: "/manus-storage/Ayla_NayaraTentedCamp_11_ff056724.jpeg",
  heroVideo: {
    desktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gastronomy-hero-edited_3e0a63fa.mp4",
  },
  keyFindings: [
    "Guests at any of the three Nayara properties enjoy seamless access to all restaurants and bars across the shared ecosystem.",
    "Six distinct restaurants span Italian, Asian fusion, Mediterranean, and fine dining — each rooted in Costa Rican ingredients.",
    "Five experiential classes — wine tasting, cooking, coffee, mixology, and rum — transform meals into lasting memories.",
    "From Amor Loco's culinary artistry to Lila's handcrafted gelato, every moment at the table is designed to surprise.",
  ],
  sections: [
    {
      heading: "The Philosophy of Shared Luxury",
      content: `<p>Imagine a vacation where you get the intimacy and privacy of your own secluded hotel, but with access to the culinary world of three world-class properties. That is exactly what awaits at Nayara Gardens, Nayara Springs, and Nayara Tented Camp in Costa Rica's Arenal region.</p>
<p>While each property maintains its own distinct character and peaceful sanctuary, guests enjoy seamless access to a shared ecosystem of dining that transforms a stay into an unforgettable gastronomic journey through one magical rainforest. You are not choosing between three separate hotels — you are choosing one interconnected destination where culinary excellence exists at every turn.</p>`,
    },
    {
      heading: "Nayara Gardens: Where It All Begins",
      content: `<p>Your gastronomic journey begins the moment you arrive at Nayara Gardens. <strong>Nostalgia Wine Bar</strong> offers sophisticated wine tastings paired with thoughtful small plates, perfect for an evening of refinement. The sommelier-led experience is not simply about drinking wine — it is an education in pairing and appreciation, guided by experts who understand how wine complements both food and the rainforest setting.</p>
<p><strong>La Terrazza</strong> brings Italian warmth to the rainforest with its inviting atmosphere and classic preparations. There is something deeply satisfying about handmade pasta served beneath a canopy of tropical trees, where the sounds of the forest replace the noise of a city street.</p>
<p><strong>Asialluna</strong> blends Asian fusion with Costa Rican ingredients for a surprising and delightful culinary conversation. The menu is a study in contrasts — familiar techniques from across Asia reinterpreted through the lens of Central American produce, spices, and tradition.</p>`,
    },
    {
      heading: "Nayara Springs: Elevated Dining",
      content: `<p>Nayara Springs elevates the experience with <strong>Amor Loco</strong>, the fine dining establishment where culinary artistry meets impeccable service. Every dish is a composition — plated with the precision of a gallery piece, yet grounded in flavors that feel honest and intentional. Amor Loco is where special occasions become unforgettable ones.</p>
<p>For something more casual, <strong>Nysa Morris</strong> serves authentic Italian bistro fare that feels both elegant and approachable. It is the kind of restaurant where you come for a quick lunch and stay for two hours, because the atmosphere refuses to let you rush.</p>`,
    },
    {
      heading: "Nayara Tented Camp: Mediterranean Meets the Jungle",
      content: `<p>At Nayara Tented Camp, <strong>Ayla</strong> presents Mediterranean cuisine infused with local touches, offering a different flavor profile while maintaining the same commitment to quality that defines every Nayara kitchen. The open-air setting places you at the edge of the rainforest, where the boundary between restaurant and wilderness dissolves entirely.</p>`,
      image: {
        src: "/manus-storage/Ayla_NayaraTentedCamp_11_ff056724.jpeg",
        alt: "Ayla restaurant at Nayara Tented Camp — Mediterranean cuisine in the rainforest",
        caption: "Ayla at Nayara Tented Camp: where Mediterranean flavors meet the Costa Rican jungle",
      },
    },
    {
      heading: "Beyond the Plate: The Simple Moments",
      content: `<p>Sometimes the best moments are the simple ones. <strong>Lila's Gelato</strong> at Nayara Gardens offers handcrafted flavors that capture the essence of Costa Rica and beyond — tropical fruits, local chocolate, and seasonal inspirations churned fresh daily. Throughout the properties, coffee experiences connect you to local culture — whether it is a morning ritual or an afternoon pick-me-up, the beans are always Costa Rican, always fresh, always worth savoring.</p>`,
    },
    {
      heading: "When the Sun Sets: The Bar Scene",
      content: `<p>When the sun sets, the bars come alive. <strong>Lapa's Pool Bar</strong> at Nayara Springs keeps things tropical and refreshing, while <strong>Henry's Lounge Bar</strong> at Nayara Tented Camp provides a more intimate setting for evening conversation — the kind of place where a well-made cocktail and the sound of the forest are all you need.</p>
<p><strong>Las Thermas</strong> at Nayara Tented Camp is more than just a hot springs area — it is a social hub where guests gather to soak, unwind, and connect. And <strong>Tentacamp Pool Bar</strong> rounds out the collection, offering casual refreshment with views that remind you why you came to Costa Rica in the first place.</p>`,
    },
    {
      heading: "Five Classes That Go Deeper",
      content: `<p>Why simply eat when you can learn, create, and experience? Five signature classes allow you to dive deeper into Costa Rican culinary culture.</p>
<p>The <strong>Wine Tasting</strong> at Nostalgia Wine Bar is an education in pairing and appreciation. The <strong>Cooking Class</strong> teaches you to recreate the dishes you have fallen in love with, using techniques and ingredients that define Costa Rican cuisine. The <strong>Coffee Class</strong> traces the journey from bean to cup, celebrating the country's coffee heritage. The <strong>Mixology Class</strong> transforms you into a bartender, crafting cocktails that capture tropical flavors and local spirits. And the <strong>Rum Tasting</strong> celebrates one of Central America's most storied beverages, exploring how terroir and tradition shape every bottle.</p>
<p>These are not tourist add-ons. They are invitations to understand a culture through its flavors — and to take a piece of Costa Rica home with you.</p>`,
    },
    {
      heading: "The Nayara Difference",
      content: `<p>This is what sets Nayara apart. You are not staying at three different hotels that happen to share some restaurants. You are entering a curated world where every meal, every glass, every class reinforces a single philosophy: that a great vacation feeds not just the body, but the mind and soul.</p>
<p>Whether you are celebrating a special occasion, seeking a culinary education, or simply craving an escape into nature without sacrificing the pleasures of the table, the three Nayara properties offer something increasingly rare — the chance to experience Costa Rica as it should be experienced, one extraordinary meal at a time.</p>`,
    },
  ],
  sources: [
    { label: "Nayara Resorts — Dining", href: "https://nayararesorts.manus.space/gastronomy" },
    { label: "Nayara Resorts — Experiences", href: "https://nayararesorts.manus.space/experiences" },
  ],
  relatedArticles: [
    {
      slug: "https://blog.nayararesorts.com/holistic-wellness-naturally",
      title: "Holistic Wellness, Naturally",
      pillar: "Wellness",
      image: "https://blog.nayararesorts.com/hubfs/1-Aug-11-2025-06-16-39-9925-PM.png",
      date: "2025-08-11",
    },
    {
      slug: "/journal/pura-vida",
      title: "Pura Vida and the Science of Why Costa Rica Feels Different",
      pillar: "Wellness",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pura-vida-hero_567b6d5c.jpeg",
      date: "2026-03-15",
    },
    {
      slug: "/journal/in-house-activities-three-hotels-infinite-experiences",
      title: "Three Hotels, One Rainforest, Infinite Experiences",
      pillar: "Experiences",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bird-watching-hero_ddf4b8c3.jpg",
      date: "2026-04-22",
    },
  ],
  ctaProperties: [
    { name: "Nayara Gardens", route: "/gardens" },
    { name: "Nayara Springs", route: "/springs" },
    { name: "Nayara Tented Camp", route: "/tented-camp" },
  ],
  seo: {
    metaTitle: "Three Kitchens, One Rainforest: A Culinary Journey Through Nayara | Nayara Journal",
    metaDescription: "Discover six restaurants, five experiential classes, and a shared culinary ecosystem across Nayara Gardens, Nayara Springs, and Nayara Tented Camp in Costa Rica.",
  },
};

// ─── In-House Activities Blog Post ───────────────────────────
export const inHouseActivitiesBlogPost: BlogPostData = {
  slug: "in-house-activities-three-hotels-infinite-experiences",
  title: "Three Hotels, One Rainforest, Infinite Experiences",
  subtitle: "Experiences",
  author: "Nayara Resorts",
  authorRole: "Editorial",
  date: "April 22, 2026",
  pillar: "Experiences",
  tags: ["Experiences", "Wellness", "Nature", "Costa Rica", "Yoga", "Birdwatching", "Hot Springs"],
  readingTime: 7,
  heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bird-watching-hero_ddf4b8c3.jpg",
  heroVideo: {
    desktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-wellness-video_26fcc290.mp4",
  },
  keyFindings: [
    "Guests at any Nayara property enjoy seamless access to wellness, nature, and adventure experiences across all three hotels.",
    "Two distinct yoga practices — Vinyasa and Mindfulness — are offered across the properties, connecting movement to the rainforest.",
    "Three guided nature experiences bring the 1,400-acre reserve to life: botanical hikes, birdwatching, and the beloved Finding Tony the Sloth.",
    "Las Thermas at Nayara Tented Camp offers geothermally heated hot springs beneath the rainforest canopy — a rare convergence of earth and wellness.",
  ],
  sections: [
    {
      heading: "One Interconnected Destination",
      content: `<p>Imagine a vacation where you get the intimacy and privacy of your own secluded hotel, but with access to the amenities and experiences of three world-class properties. That is exactly what awaits at Nayara Gardens, Nayara Springs, and Nayara Tented Camp in Costa Rica.</p>
<p>While each property maintains its own distinct character and peaceful sanctuary, guests enjoy seamless access to a shared ecosystem of wellness and adventure that transforms a stay into an unforgettable journey through one magical rainforest. Whether you are seeking wellness rejuvenation or nature immersion, everything you need exists within reach, creating a comprehensive Costa Rican experience that is hard to find elsewhere.</p>`,
    },
    {
      heading: "Wellness Through Movement: Yoga in the Rainforest",
      content: `<p>Two distinct yoga experiences complement the physical and culinary indulgences of a Nayara stay.</p>
<p><strong>Vinyasa Yoga</strong> keeps your body flowing and energized, linking breath to movement in classes that feel alive and present. The practice takes on a different dimension when your mat is surrounded by the sounds of howler monkeys and tropical birds — the forest becomes part of the flow.</p>
<p><strong>Mindfulness Yoga</strong> invites you to slow down, reconnect, and find stillness amid the symphony of the rainforest. It is less about physical exertion and more about presence — a practice designed for people who have forgotten what it feels like to simply be.</p>
<p>Both are offered across the properties, so you can practice wherever you feel called — at the edge of a volcanic valley, beside a hot spring, or on a platform overlooking the forest canopy.</p>`,
    },
    {
      heading: "Nature Immersion: Three Ways to Explore",
      content: `<p>The rainforest is the greatest teacher. Three guided experiences bring its lessons to life.</p>
<p>The <strong>Botanical Nature Hike</strong> unveils the plant life that sustains the ecosystem — from towering ceiba trees to medicinal species used by indigenous peoples for centuries. Your guide does not simply point at trees; they tell the story of a forest that has been healing itself and others for millennia.</p>
<p>The <strong>Bird Watching</strong> experience connects you to the incredible avian diversity that makes Costa Rica a paradise for ornithologists and casual observers alike. With over 900 species in the country and dozens visible from the Nayara reserve alone, every morning walk becomes a masterclass in color, sound, and flight.</p>`,
      image: {
        src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bird-watching-hero_ddf4b8c3.jpg",
        alt: "Birdwatching in the Arenal rainforest — vibrant tropical birds in their natural habitat",
        caption: "Costa Rica is home to over 900 bird species — many visible from the Nayara reserve",
      },
    },
    {
      heading: "Finding Tony the Sloth",
      content: `<p><strong>Finding Tony the Sloth</strong> is exactly what it sounds like: a chance to encounter one of the rainforest's most beloved residents in his natural habitat. Led by naturalist guides who know Tony's favorite trees and sleeping spots, this gentle expedition is a moment that reminds you why conservation matters.</p>
<p>Tony is not a prop or a performance. He is a wild two-toed sloth who has made the Nayara reserve his home — a living symbol of what happens when a hospitality company decides that protecting the forest is not a marketing strategy, but a responsibility.</p>`,
    },
    {
      heading: "Las Thermas: Where Earth Meets Wellness",
      content: `<p>Las Thermas at Nayara Tented Camp offers something rare: natural hot springs heated by geothermal energy deep beneath the rainforest floor. More than a spa amenity, it is a place to soak in warmth, contemplate the night sky above, and feel the ancient power of the earth beneath you.</p>
<p>The springs are fed by the same volcanic system that powers Arenal — water that has traveled through layers of rock, absorbing minerals along the way. The result is a bathing experience that is not manufactured or chlorinated, but genuinely geological. You are soaking in the earth's own warmth, surrounded by forest, under stars.</p>
<p>It is the kind of experience that makes you wonder why anyone would choose a conventional spa over this.</p>`,
    },
    {
      heading: "The Beauty of Shared Access",
      content: `<p>What makes this experience truly special is the philosophy behind it. You are not choosing between three separate hotels — you are choosing one interconnected destination. Whether you are seeking wellness rejuvenation or nature immersion, everything you need exists within reach.</p>
<p>A morning might begin with Vinyasa yoga at Nayara Springs, followed by a botanical hike through the Tented Camp reserve, an afternoon soak at Las Thermas, and a sunset Mindfulness session overlooking the volcano. No transfers, no logistics, no friction — just a day that flows as naturally as the forest around you.</p>`,
    },
    {
      heading: "The Nayara Difference",
      content: `<p>This is what sets Nayara apart. Every hike, every yoga class, every soak reinforces a single philosophy: that a great vacation feeds not just the body, but the mind and soul.</p>
<p>Whether you are celebrating a special occasion, seeking rejuvenation, or simply craving an escape into nature without sacrificing comfort, the three Nayara properties offer something increasingly rare — the chance to experience Costa Rica as it should be experienced, surrounded by people who understand that true luxury is knowing exactly what you need, exactly when you need it.</p>`,
    },
  ],
  sources: [
    { label: "Nayara Resorts — Experiences", href: "https://nayararesorts.manus.space/experiences" },
    { label: "Nayara Resorts — Wellness", href: "https://nayararesorts.manus.space/wellness" },
  ],
  relatedArticles: [
    {
      slug: "/journal/three-kitchens-one-rainforest",
      title: "Three Kitchens, One Rainforest: A Culinary Journey Through Nayara",
      pillar: "Gastronomy",
      image: "/manus-storage/Ayla_NayaraTentedCamp_11_ff056724.jpeg",
      date: "2026-04-22",
    },
    {
      slug: "/journal/pura-vida",
      title: "Pura Vida and the Science of Why Costa Rica Feels Different",
      pillar: "Wellness",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pura-vida-hero_567b6d5c.jpeg",
      date: "2026-03-15",
    },
    {
      slug: "https://blog.nayararesorts.com/holistic-wellness-naturally",
      title: "Holistic Wellness, Naturally",
      pillar: "Wellness",
      image: "https://blog.nayararesorts.com/hubfs/1-Aug-11-2025-06-16-39-9925-PM.png",
      date: "2025-08-11",
    },
  ],
  ctaProperties: [
    { name: "Nayara Gardens", route: "/gardens" },
    { name: "Nayara Springs", route: "/springs" },
    { name: "Nayara Tented Camp", route: "/tented-camp" },
  ],
  seo: {
    metaTitle: "Three Hotels, One Rainforest, Infinite Experiences | Nayara Journal",
    metaDescription: "Yoga, birdwatching, botanical hikes, sloth encounters, and geothermal hot springs — discover the shared in-house activities across Nayara Gardens, Springs, and Tented Camp.",
  },
};
