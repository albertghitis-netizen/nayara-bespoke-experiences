/*
 * NEW BLOG POSTS , Gastronomy & In-House Activities
 * Two editorial blogs covering the shared dining and activity ecosystem
 * across Nayara Gardens, Nayara Springs, and Nayara Tented Camp.
 */
import type { BlogPostData } from "./blogPosts";

// ─── Gastronomy Blog Post ────────────────────────────────────
export const gastronomyBlogPost: BlogPostData = {
  slug: "three-kitchens-one-rainforest",
  title: "Three Kitchens, One Rainforest: A Culinary Journey Through Nayara",

  author: "Nayara Resorts",
  authorRole: "Editorial",
  date: "April 22, 2026",
  pillar: "Gastronomy",
  tags: [],
  readingTime: 8,
  heroImage: "/manus-storage/Ayla_NayaraTentedCamp_11_ff056724.jpeg",
  heroVideo: {
    desktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gastronomy-hero-edited_3e0a63fa.mp4",
  },
  keyFindings: [
    "Guests at any of the three Nayara properties enjoy seamless access to all restaurants and bars across the shared ecosystem.",
    "Six distinct restaurants span Italian, Asian fusion, Mediterranean, and fine dining , each rooted in Costa Rican ingredients.",
    "Five culinary classes , wine tasting, cooking, coffee, mixology, and rum , transform meals into lasting memories.",
    "From Amor Loco's culinary artistry to Lila's handcrafted gelato, every moment at the table is designed to surprise.",
  ],
  sections: [
    {
      heading: "The Philosophy of Shared Luxury",
      content: `<p>Imagine a vacation where you get the intimacy and privacy of your own secluded hotel, but with access to the culinary world of three world-class properties. That is exactly what awaits at Nayara Gardens, Nayara Springs, and Nayara Tented Camp in Costa Rica's Arenal region.</p>
<p>While each property maintains its own distinct character and peaceful sanctuary, guests enjoy seamless access to a shared ecosystem of dining that transforms a stay into an unforgettable gastronomic journey through one magical rainforest. You are not choosing between three separate hotels , you are choosing one interconnected destination where culinary excellence exists at every turn.</p>
<p>The culinary tourism market, valued at $16.1 billion in 2025, is projected to reach $76.4 billion by 2033. Nearly one in five travelers now book trips specifically to explore food destinations. At Nayara, food is not a service. It is a vocabulary , one spoken across six restaurants, five bars, and five immersive culinary classes that transform meals into lasting memories and skills you carry home.</p>`,
    },
    {
      heading: "Nayara Gardens: Where It All Begins",

         content: `<p>Your gastronomic journey begins the moment you arrive at <a href="https://nayaragardens.com">Nayara Gardens</a>.</p>
<p><strong>La Terrazza</strong> brings Italian warmth to the rainforest with handmade pasta prepared fresh daily. The kitchen uses Costa Rican ingredients to reinterpret classics: think pappardelle with slow-braised local beef, wood-fired pizzas topped with tropical herbs, and tiramisu made with Arenal-region coffee. The open terrace seating means you dine beneath a canopy of tropical trees, where the sounds of the forest replace the noise of a city street.</p>
<p><strong>Asia Luna</strong> is a study in contrasts, familiar techniques from across Asia reinterpreted through the lens of Central American produce, spices, and tradition. The menu spans Thai curries made with local coconut, Japanese-inspired ceviches using Costa Rican fish, and wok-fired dishes that celebrate the volcanic soil's bounty. The restaurant's open kitchen lets guests watch the choreography of preparation, and the chef regularly introduces seasonal specials based on what arrives fresh from local farms that morning.</p>
<p><strong>Nostalgia Wine Bar</strong> is not merely a bar, it is a curated library of over 200 labels from Old and New World vineyards, presided over by a certified sommelier who leads structured tastings paired with artisanal cheese boards and charcuterie. The evening sessions move through three to five wines, each paired with a small plate designed to illuminate how terroir, acidity, and tannin interact with food. The setting, candlelit, open-air, overlooking the garden ponds, transforms what could be a simple tasting into an event.</p>`,
      image: {
        src: "/manus-storage/gal-276-Nostalgia_c215b368.jpeg",
        alt: "Nostalgia Wine Bar at Nayara Gardens, candlelit wine tasting with garden views",
        caption: "Nostalgia Wine Bar: where wine meets the rainforest"
      },
    },
    {
      heading: "Nayara Springs: Elevated Dining",
      image: {
        src: "/manus-storage/gal-277-PizzaovenNS-MisAmoresfireLR_1__5fe88b4f.JPG",
        alt: "Wood-fired pizza oven at Nayara Springs, fire and culinary craft",
        caption: "Fire as a culinary tool: tradition meets innovation"
      },
      content: `<p><a href="/springs">Nayara Springs</a> elevates the experience with two restaurants that define the upper register of Nayara's culinary range.</p>
<p><strong>Amor Loco</strong> is the fine dining establishment where culinary artistry meets impeccable service. The tasting menu changes seasonally, drawing on Costa Rica's microclimates to source ingredients at peak expression. A typical evening might begin with a ceviche of corvina cured in passion fruit and habanero, move through a course of slow-cooked pork belly with tamarind glaze, and conclude with a chocolate dessert using single-origin cacao from the Talamanca region. Every dish is a composition , plated with the precision of a gallery piece, yet grounded in flavors that feel honest and intentional. The wine pairing, curated by the sommelier, elevates each course further. Amor Loco is where special occasions become unforgettable ones.</p>
<p><strong>Mi Cafecito</strong> traces the journey from cherry to cup. Costa Rica's coffee heritage spans over 200 years, and the Arenal region produces some of the country's finest beans. Guests learn to identify flavor notes , the citrus brightness of a light roast, the chocolate depth of a medium, the smoky intensity of a dark. They learn pour-over technique, the importance of water temperature, and why freshness matters more than brand. It is the kind of knowledge that changes your morning ritual forever.</p>
<p><strong>Mis Amores</strong> serves authentic Italian bistro fare that feels both elegant and approachable. The menu focuses on simplicity executed perfectly: house-made focaccia, burrata with heirloom tomatoes, risottos that change with the season, and a selection of grilled meats and seafood. The atmosphere is warm and unhurried, the kind of restaurant where you come for a quick lunch and stay for two hours, because the food and setting refuse to let you rush.</p>`,
    },
    {
      heading: "Nayara Tented Camp: Fire, Earth, and Open Air",
      content: `<p>At <a href="/tented-camp">Nayara Tented Camp</a>, <strong>Ayla</strong> presents Mediterranean cuisine infused with Costa Rican touches, and it is here that the philosophy of cooking with fire reaches its fullest expression. The open-fire grill is central to Ayla's identity , meats are slow-cooked over native hardwoods, vegetables are charred to bring out their natural sweetness, and even desserts incorporate smoke and flame.</p>
<p>The menu draws from the Eastern Mediterranean: lamb kofta with tzatziki made from local yogurt, grilled octopus with chimichurri, flatbreads baked in a wood-fired oven, and mezze platters designed for sharing. The open-air setting places you at the edge of the rainforest, where the boundary between restaurant and wilderness dissolves entirely. At night, the fire pit becomes a gathering point , guests linger with wine, watching sparks rise into the canopy above.</p>
`,
      image: {
        src: "/manus-storage/ayla-restaurant-07_e87e1356.jpg",
        alt: "Ayla restaurant at Nayara Tented Camp, Mediterranean cuisine cooked over open fire in the rainforest",
        caption: "Ayla at Nayara Tented Camp: where fire, earth, and rainforest converge",
      },
    },

    {
      heading: "I Scream You Scream We All Scream for Gelato",
      content: `<p>Sometimes the best moments are the simple ones. <strong>Lyla's Gelato</strong> at Nayara Gardens offers handcrafted flavors that capture the essence of Costa Rica , tropical fruits like guanabana and cas, local chocolate from the Caribbean coast, and seasonal inspirations churned fresh daily. The gelato is made in small batches using traditional Italian technique with Costa Rican ingredients, and the result is something you cannot find anywhere else on Earth.</p>
<p>Lyla's is perfect for families. Children discover flavors they've never encountered before, and the ritual of choosing becomes a moment of genuine decision-making. Parents watch their kids taste guanabana for the first time, or dark chocolate infused with local cacao, and see the joy of discovery on their faces. It's not just dessert, it's an introduction to the world through taste. Every scoop is a small adventure, and every visit becomes a memory the family carries home.`,
      image: {
        src: "/manus-storage/nayara-springs-r5_8ab70899.jpg",
        alt: "Nayara Springs resort, elegant dining and relaxation spaces",
        caption: "Nayara Springs: where simple pleasures become unforgettable moments"
      },
    },
    {
      heading: "When the Sun Sets: The Bar Scene",
      content: `<p>When the sun sets, the bars come alive. <strong>Lapa's Pool Bar</strong> at Nayara Springs keeps things tropical and refreshing , cocktails built around fresh tropical juices, local rum, and herbs picked from the property's garden. The infinity pool setting, with Arenal Volcano as backdrop, makes every drink feel like a celebration.</p>
<p><strong>Las Thermas Bar</strong> at Nayara Tented Camp serves drinks poolside at the hot springs , imagine sipping a passion fruit mojito while soaking in geothermally heated water beneath the stars. The geothermal waters create an otherworldly setting where relaxation and craft cocktails merge into pure magic.</p>
<p><strong>Henry's Lounge Bar</strong> at Nayara Tented Camp provides a more intimate setting for evening conversation. The cocktail menu is crafted around Costa Rican spirits , guaro, local rum, coffee liqueur , mixed with fresh ingredients that change with the season. The bartenders know their craft, and the atmosphere , low lighting, the sound of the forest, the warmth of the fire pit nearby , is the kind of place where a well-made cocktail is all you need.</p>`,
      image: {
        src: "/manus-storage/henrys-bar_0945a553.jpg",
        alt: "Henry's Lounge Bar at Nayara Tented Camp, intimate cocktail setting with Costa Rican spirits",
        caption: "Henry's Lounge Bar: where craft cocktails meet rainforest ambiance"
      },
    },
    {
      heading: "Five Classes That Transform",
      content: `<p>Why simply eat when you can learn, create, and carry the experience home? Five signature classes allow you to dive deeper into Costa Rican culinary culture.</p>
<p>The <strong>Wine Tasting</strong> at Nostalgia Wine Bar moves through five to seven wines, each paired with a complementary bite. The sommelier explains terroir, vintage, and technique , but always in service of pleasure, never pedantry. Guests leave understanding not just what they like, but why.</p>
<p>The <strong>Cooking Class</strong> at Ayla teaches open-fire technique and Costa Rican-Mediterranean fusion. You learn to make gallo pinto (the national breakfast dish), ceviche with local fish, and a main course over the grill. The class is hands-on , you cook, you taste, you adjust, you eat what you made. Families are welcome, and children often surprise everyone with their enthusiasm.</p>
<p>The <strong>Coffee Class</strong> is a two-hour journey from cherry to cup. You roast your own beans, grind them, and brew using three different methods. You learn why altitude, soil, and processing method matter more than brand. You take home a bag of beans you roasted yourself.</p>
<p>The <strong>Mixology Class</strong> transforms you into a bartender for an afternoon. You learn to balance sweet, sour, bitter, and spirit. You make three cocktails , one classic, one tropical, one of your own invention. The bartender shares techniques that work in any home kitchen.</p>
<p>The <strong>Rum Tasting</strong> celebrates Central America's most storied spirit. Five rums, aged from two to twenty-three years, each with a story of terroir and tradition. You learn to nose, taste, and appreciate the difference between industrial and artisanal production. You leave understanding why a twenty-year rum costs what it does , and why it is worth it.</p>
<p>These are not tourist add-ons. They are invitations to understand a culture through its flavors , and to take a piece of Costa Rica home with you.</p>`,
      image: {
        src: "/manus-storage/cooking-class-new_d64a9e7c.jpg",
        alt: "Culinary classes at Nayara, hands-on learning experiences",
        caption: "Five Classes That Transform: where learning becomes experience"
      },
    },
    {
      heading: "The Nayara Difference",
      content: `<p>This is what sets Nayara apart. You are not staying at three different hotels that happen to share some restaurants. You are entering a curated world where every meal, every glass, every class reinforces a single philosophy: that a great vacation feeds not just the body, but the mind and soul.</p>
<p>A single day might begin with a coffee class at 7 a.m., move to breakfast at La Terrazza, a cooking class at Ayla before lunch, an afternoon gelato at Lila's, sunset cocktails at Lapa's Pool Bar, and dinner at Amor Loco. No transfers, no logistics, no friction , just a day that flows as naturally as the forest around you, from one extraordinary culinary moment to the next.</p>
<p>Whether you are celebrating a special occasion, seeking a culinary education, or simply craving an escape into nature without sacrificing the pleasures of the table, the three Nayara properties offer something increasingly rare , the chance to experience Costa Rica as it should be experienced, one extraordinary meal at a time.</p>`,
    },
  ],
  sources: [],
  relatedArticles: [
    {
      slug: "/blog/holistic-wellness",
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
    metaDescription: "Discover six restaurants, five culinary classes, and a shared culinary ecosystem across Nayara Gardens, Nayara Springs, and Nayara Tented Camp in Costa Rica.",
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
    "Two distinct yoga practices , Vinyasa and Mindfulness , are offered across the properties, connecting movement to the rainforest.",
    "Three guided nature experiences bring the 1,400-acre reserve to life: botanical hikes, birdwatching, and the beloved Finding Tony the Sloth.",
    "Las Thermas at Nayara Tented Camp offers geothermally heated hot springs beneath the rainforest canopy , a rare convergence of earth and wellness.",
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
<p><strong>Vinyasa Yoga</strong> keeps your body flowing and energized, linking breath to movement in classes that feel alive and present. The practice takes on a different dimension when your mat is surrounded by the sounds of howler monkeys and tropical birds , the forest becomes part of the flow.</p>
<p><strong>Mindfulness Yoga</strong> invites you to slow down, reconnect, and find stillness amid the symphony of the rainforest. It is less about physical exertion and more about presence , a practice designed for people who have forgotten what it feels like to simply be.</p>
<p>Both are offered across the properties, so you can practice wherever you feel called , at the edge of a volcanic valley, beside a hot spring, or on a platform overlooking the forest canopy.</p>`,
    },
    {
      heading: "Nature Immersion: Three Ways to Explore",
      content: `<p>The rainforest is the greatest teacher. Three guided experiences bring its lessons to life.</p>
<p>The <strong>Botanical Nature Hike</strong> unveils the plant life that sustains the ecosystem , from towering ceiba trees to medicinal species used by indigenous peoples for centuries. Your guide does not simply point at trees; they tell the story of a forest that has been healing itself and others for millennia.</p>
<p>The <strong>Bird Watching</strong> experience connects you to the incredible avian diversity that makes Costa Rica a paradise for ornithologists and casual observers alike. With over 900 species in the country and dozens visible from the Nayara reserve alone, every morning walk becomes a masterclass in color, sound, and flight.</p>`,
      image: {
        src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bird-watching-hero_ddf4b8c3.jpg",
        alt: "Birdwatching in the Arenal rainforest , vibrant tropical birds in their natural habitat",
        caption: "Costa Rica is home to over 900 bird species , many visible from the Nayara reserve",
      },
    },
    {
      heading: "Finding Tony the Sloth",
      content: `<p><strong>Finding Tony the Sloth</strong> is exactly what it sounds like: a chance to encounter one of the rainforest's most beloved residents in his natural habitat. Led by naturalist guides who know Tony's favorite trees and sleeping spots, this gentle expedition is a moment that reminds you why conservation matters.</p>
<p>Tony is not a prop or a performance. He is a wild two-toed sloth who has made the Nayara reserve his home , a living symbol of what happens when a hospitality company decides that protecting the forest is not a marketing strategy, but a responsibility.</p>`,
    },
    {
      heading: "Las Thermas: Where Earth Meets Wellness",
      content: `<p>Las Thermas at Nayara Tented Camp offers something rare: natural hot springs heated by geothermal energy deep beneath the rainforest floor. More than a spa amenity, it is a place to soak in warmth, contemplate the night sky above, and feel the ancient power of the earth beneath you.</p>
<p>The springs are fed by the same volcanic system that powers Arenal , water that has traveled through layers of rock, absorbing minerals along the way. The result is a bathing experience that is not manufactured or chlorinated, but genuinely geological. You are soaking in the earth's own warmth, surrounded by forest, under stars.</p>
<p>It is the kind of experience that makes you wonder why anyone would choose a conventional spa over this.</p>`,
    },
    {
      heading: "The Beauty of Shared Access",
      content: `<p>What makes this experience truly special is the philosophy behind it. You are not choosing between three separate hotels , you are choosing one interconnected destination. Whether you are seeking wellness rejuvenation or nature immersion, everything you need exists within reach.</p>
<p>A morning might begin with Vinyasa yoga at Nayara Springs, followed by a botanical hike through the Tented Camp reserve, an afternoon soak at Las Thermas, and a sunset Mindfulness session overlooking the volcano. No transfers, no logistics, no friction , just a day that flows as naturally as the forest around you.</p>`,
    },
    {
      heading: "The Nayara Difference",
      content: `<p>This is what sets Nayara apart. Every hike, every yoga class, every soak reinforces a single philosophy: that a great vacation feeds not just the body, but the mind and soul.</p>
<p>Whether you are celebrating a special occasion, seeking rejuvenation, or simply craving an escape into nature without sacrificing comfort, the three Nayara properties offer something increasingly rare , the chance to experience Costa Rica as it should be experienced, surrounded by people who understand that true luxury is knowing exactly what you need, exactly when you need it.</p>`,
    },
  ],
  sources: [
    { label: "Nayara Resorts , Experiences", href: "https://nayararesorts.manus.space/experiences" },
    { label: "Nayara Resorts , Wellness", href: "https://nayararesorts.manus.space/wellness" },
  ],
  relatedArticles: [
    {
      slug: "/blog/three-kitchens-one-rainforest",
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
      slug: "/blog/holistic-wellness",
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
    metaDescription: "Yoga, birdwatching, botanical hikes, sloth encounters, and geothermal hot springs , discover the shared in-house activities across Nayara Gardens, Springs, and Tented Camp.",
  },
};
