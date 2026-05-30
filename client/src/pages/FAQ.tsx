/*
 * FAQ PAGE — /faq
 * Comprehensive FAQ page aggregating questions from all blog posts
 * Organized by category/pillar with accordion-style interaction
 * Uses FAQPageSchema for structured data
 */
import { useState } from "react";
import { motion } from "framer-motion";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";
import { FAQPageSchema } from "@/components/SEOSchemaEnhanced";

const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

const PALETTE = {
  cream: "#f7f5f0",
  espresso: "#3B2B26",
  muted: "#5a4a3a",
  accent: "#8B7355",
  divider: "rgba(59,43,38,0.12)",
};

interface FAQCategory {
  title: string;
  description: string;
  faqs: { question: string; answer: string }[];
}

const FAQ_CATEGORIES: FAQCategory[] = [
  {
    title: "About Nayara Resorts",
    description: "General questions about the Nayara brand and philosophy",
    faqs: [
      {
        question: "What defines luxury at Nayara?",
        answer: "Luxury at Nayara is rooted in nature, space, and a sense of place rather than excess. Each resort reflects local ecosystems, cultural values, and a quieter form of high-end hospitality.",
      },
      {
        question: "How does Nayara bring nature into each guest experience?",
        answer: "Every property is built within its environment. Rainforest paths, desert plateaus, and coastal mangroves shape how guests move, rest, and connect with the natural world.",
      },
      {
        question: "What role does purpose play in Nayara's approach to hospitality?",
        answer: "Purpose guides daily operations. Regeneration, cultural preservation, and community partnership define how decisions are made across Nayara Resorts.",
      },
      {
        question: "How do Nayara properties express this philosophy?",
        answer: "Each resort expresses luxury through its own landscape. Nayara Springs and Nayara Tented Camp reflect the rainforest, Nayara Bocas del Toro embodies the meeting of sea and forest, and Nayara Alto Atacama and Nayara Hangaroa honor the desert and volcanic origins of their surroundings.",
      },
      {
        question: "What can travelers expect across all Nayara destinations?",
        answer: "A calm rhythm, meaningful encounters with nature, regional food traditions, and hospitality shaped by the communities who call these landscapes home.",
      },
    ],
  },
  {
    title: "The Atacama Desert",
    description: "Understanding the landscape, climate, and ecology of the Atacama",
    faqs: [
      {
        question: "Why is the Atacama considered the driest desert on Earth?",
        answer: "Because powerful geographic forces block moisture from both directions. The Andes Mountains create a strong rain shadow to the east, while the cold Humboldt Current suppresses evaporation and cloud formation along the Pacific coast.",
      },
      {
        question: "How old is the Atacama Desert?",
        answer: "Scientific evidence suggests parts of the Atacama have remained hyper-arid for 10 to 15 million years, making it the oldest and most stable non-polar desert on Earth.",
      },
      {
        question: "Why does the Atacama resemble Mars?",
        answer: "Its extreme dryness, high ultraviolet radiation, mineral-rich soils, and lack of vegetation closely resemble conditions detected on Mars, which is why space agencies use it as a planetary analog.",
      },
      {
        question: "Is there life in the Atacama Desert?",
        answer: "Yes, but it is highly specialized. Life survives through efficiency rather than abundance, from underground microbial communities to high-altitude fauna adapted to aridity and salinity.",
      },
      {
        question: "Why is the Atacama important beyond travel?",
        answer: "The desert functions as a natural laboratory for climate science, geology, astronomy, and astrobiology, helping scientists understand Earth's past and assess the possibility of life beyond our planet.",
      },
    ],
  },
  {
    title: "Stargazing in the Atacama",
    description: "Night skies, astronomy, and what to expect when stargazing",
    faqs: [
      {
        question: "Why are the skies in the Atacama so clear?",
        answer: "High elevation, extremely low atmospheric moisture, stable air masses, and minimal light pollution combine to create some of the clearest skies on Earth.",
      },
      {
        question: "Can I see stars and the Milky Way without a telescope?",
        answer: "Yes. On clear, moonless nights, the Milky Way is easily visible to the naked eye, with defined structure and dark dust lanes. Many guests are surprised by how much is visible without optical equipment due to the absence of light pollution.",
      },
      {
        question: "Are stargazing experiences guided or self-led?",
        answer: "Guided experiences are available and recommended, as they provide telescopes and context that deepen understanding. However, the surrounding darkness also allows guests to observe the night sky independently from many areas of the property, making stargazing a natural part of the evening rather than a fixed event.",
      },
      {
        question: "Is stargazing affected by altitude or acclimatization?",
        answer: "Altitude improves sky clarity but requires a slower pace. Guests are encouraged to hydrate, avoid overexertion on arrival, and dress warmly for nighttime observation. Stargazing itself is gentle and well suited to the acclimatization process.",
      },
      {
        question: "What should I wear for nighttime stargazing in the Atacama?",
        answer: "Even after warm days, nighttime temperatures can drop sharply due to altitude and aridity. Warm layers, a jacket, and closed shoes are essential for comfort during extended observation.",
      },
      {
        question: "Is stargazing available year-round?",
        answer: "Yes. The Atacama offers clear skies throughout the year. Seasonal differences affect night length and which constellations are visible, but astronomical conditions remain consistently strong.",
      },
      {
        question: "What is the best moon phase for stargazing?",
        answer: "The new moon is ideal, as darker skies allow faint stars, nebulae, and the Milky Way's structure to appear most clearly. Moon phases are worth considering when planning a visit.",
      },
    ],
  },
  {
    title: "The Oasis and Catarpe Valley",
    description: "Why location matters in the Atacama and what makes the Catarpe Valley unique",
    faqs: [
      {
        question: "What makes the Catarpe Valley an oasis?",
        answer: "Permanent water flow, vegetation, and protective topography combine to create a stabilized microclimate distinct from the surrounding desert.",
      },
      {
        question: "Are desert oases cooler than their surroundings?",
        answer: "Yes. Scientific studies show that oases can remain several degrees cooler than adjacent desert areas due to vegetation and moisture.",
      },
      {
        question: "Have people always lived around oases in the Atacama?",
        answer: "Yes. Archaeological and cultural research confirms that settlement and trade followed water corridors for thousands of years.",
      },
      {
        question: "Is the oasis experience seasonal?",
        answer: "No. An oasis provides stabilizing effects year-round, moderating both heat and cold.",
      },
      {
        question: "Does staying in an oasis change how the desert feels?",
        answer: "Yes. Shelter, shade, and reduced wind transform the desert from an environment of exposure into one of continuity.",
      },
    ],
  },
  {
    title: "Nature-Based Wellness",
    description: "Questions about how ecosystems shape health and wellbeing at Nayara Resorts.",
    faqs: [
      {
        question: "What is nature-based wellness?",
        answer: "Nature-based wellness treats specific ecosystems as active health inputs rather than passive backdrops. Research in environmental psychology, forest medicine, and blue-space health shows that different natural settings produce different physiological and psychological responses. At Nayara, we design stays around four ecosystem types: desert (brown), dark sky (black), rainforest (green), and coast/reef (blue).",
      },
      {
        question: "What do you mean by brown, black, green, and blue-green spaces?",
        answer: "Brown refers to arid, low-input landscapes like the Atacama Desert. Black refers to genuinely dark night skies free of artificial light. Green refers to dense, biodiverse environments like tropical rainforests. Blue-green refers to settings where coastal water and vegetation overlap, such as reef-and-mangrove systems in Bocas del Toro.",
      },
      {
        question: "Is there real science behind forest bathing, hot springs, and time near water?",
        answer: "Yes. Systematic reviews and meta-analyses report that forest immersion tends to reduce cortisol, heart rate, and blood pressure. Balneotherapy research shows thermal bathing can reduce pain and improve mobility in musculoskeletal conditions. Blue-space studies link regular time near coasts and lakes with higher life satisfaction and lower psychological distress.",
      },
      {
        question: "How much time in nature do you need to feel a difference?",
        answer: "A large cross-sectional study published in Nature Scientific Reports found that people who spent at least 120 minutes per week in natural environments reported significantly higher health and wellbeing than those who spent less. The effect appeared whether the time was taken in a single visit or spread across several shorter ones.",
      },
      {
        question: "How do Nayara properties fit into this color-based framework?",
        answer: "Nayara Alto Atacama is our primary brown and black space, with open desert views, minimal vegetation, and protected dark skies. Nayara Gardens, Nayara Springs, and Nayara Tented Camp together form a green and green-blue rainforest circuit. Nayara Bocas del Toro is our blue and blue-green setting, echoing blue-space studies that link coastal environments with better mental health.",
      },
      {
        question: "Are these experiences medical treatments?",
        answer: "They are not positioned as medical treatments and should not replace clinical advice. The research base indicates that nature exposure, forest immersion, thermal bathing, and time near water can support mental health, stress recovery, sleep, and quality of life, and in some cases help manage symptoms alongside standard care. Guests with specific conditions should follow guidance from their clinicians.",
      },
      {
        question: "How is this different from a typical spa or wellness retreat?",
        answer: "Traditional spa menus often start with treatments and add the setting later. Our approach starts with ecosystems and treats architecture, programming, and spa design as ways to deliver specific types of exposure to desert, rainforest, reef, and night sky. Spa treatments at Nayara sit on top of that ecological base rather than replacing it.",
      },
    ],
  },
  {
    title: "Travel Trends 2026",
    description: "Questions about the top travel trends shaping luxury hospitality in 2026",
    faqs: [
      {
        question: "What are the top travel trends for 2026?",
        answer: "The top 10 travel trends for 2026 include regenerative travel, experiential luxury, dark sky tourism, wellness immersion, slow travel, cultural preservation tourism, off-grid retreats, multi-generational journeys, climate-conscious itineraries, and culinary exploration rooted in place.",
      },
      {
        question: "What is regenerative travel?",
        answer: "Regenerative travel goes beyond sustainability by actively restoring ecosystems, supporting local communities, and leaving destinations better than they were found. It includes reforestation, coral restoration, cultural preservation, and community-led tourism initiatives.",
      },
      {
        question: "How does dark sky tourism work?",
        answer: "Dark sky tourism involves visiting destinations with minimal light pollution for stargazing and astronomical observation. The Atacama Desert in Chile is one of the world's premier dark sky destinations, where guests at Nayara Alto Atacama can observe the Milky Way, nebulae, and planets through professional telescopes.",
      },
    ],
  },
  {
    title: "Sunlit Sustainability",
    description: "Questions about Nayara's solar energy, renewable power, and environmental certifications",
    faqs: [
      {
        question: "Do all Nayara properties use solar energy?",
        answer: "Not all, and deliberately so. In Costa Rica, where 98.6% of electricity is already generated from renewable sources, on-site solar panels are unnecessary. Our Arenal properties operate entirely on the national clean energy grid. In Chile, Easter Island, and Panama, where grid infrastructure is limited or diesel-dependent, we have installed solar systems to reduce emissions and support off-grid resilience.",
      },
      {
        question: "How much energy does the Nayara Hangaroa solar system produce?",
        answer: "The 45-kilowatt photovoltaic system at Nayara Hangaroa offsets the annual energy consumption equivalent of 28 family homes on Rapa Nui. It reduces demand on SASIPA, the island's diesel-based energy grid, cutting carbon emissions in one of the world's most ecologically sensitive environments.",
      },
      {
        question: "Is Nayara Bocas del Toro fully off-grid?",
        answer: "Nearly. Solar panels provide close to 100% of the resort's energy needs. Freshwater comes exclusively from collected rainwater, purified on-site through an ultraviolet filtration system. Five separate environmental studies were conducted before the property opened to ensure operations would not harm the surrounding mangroves or coral reefs.",
      },
      {
        question: "What certifications do Nayara properties hold for sustainability?",
        answer: "Our three Costa Rica properties hold Green Globe Certification, one of the most respected international seals in the hospitality industry, maintained through annual audits that assess environmental management, cultural heritage, and social impact. Nayara Alto Atacama holds 'S' Certification from the Chilean government, the country's official sustainability standard for tourism.",
      },
      {
        question: "How does Nayara Alto Atacama protect the Atacama's dark skies?",
        answer: "Lighting across the property is kept intentionally minimal to preserve the night sky, which is among the clearest on earth. Pathways use warm, carefully directed fixtures. Buildings are constructed from adobe with natural pigments so they blend into the landscape rather than reflecting light. The telescope platform opens some of the best stargazing conditions available anywhere.",
      },
      {
        question: "What was the reforestation effort at Nayara Tented Camp?",
        answer: "What is now a dense rainforest surrounding Nayara Tented Camp was once barren cattle pasture. We planted over 20,000 native trees, restoring wildlife corridors, capturing carbon, and creating new habitat for monkeys, sloths, and hundreds of bird species. It is one of the most ambitious private reforestation efforts in Central America.",
      },
      {
        question: "Does Nayara plan to expand its solar capacity?",
        answer: "Our approach to renewable energy is shaped by each property's ecosystem and infrastructure. Where solar makes the most impact, as in the Atacama, Rapa Nui, and Bocas del Toro, we invest in it directly. Where the national grid already runs clean, as in Costa Rica, we focus on other forms of environmental stewardship including reforestation, water management, and wildlife corridor restoration.",
      },
    ],
  },
  {
    title: "Arenal Volcano",
    description: "Questions about Arenal Volcano's history, geology, eruptions, and its connection to Nayara Resorts",
    faqs: [
      {
        question: "Is Arenal Volcano still active?",
        answer: "Arenal has been classified as dormant since October 2010, when its last eruption was recorded. Fumaroles and minor geothermal activity continue at the summit, and volcanologists monitor it closely. The volcano is not considered extinct.",
      },
      {
        question: "What happened during the 1968 eruption?",
        answer: "On July 29, 1968, Arenal erupted violently after more than 400 years of dormancy. The eruption buried three villages, killed 87 people, and affected over 232 square kilometers of land. It created three new craters and marked the beginning of a 42 year eruptive period.",
      },
      {
        question: "How old is Arenal Volcano?",
        answer: "Arenal is geologically young, estimated to be less than 7,500 years old. Its earliest known eruptions began roughly 7,000 years ago, breaking through older volcanic tuffs and sedimentary rocks.",
      },
      {
        question: "Can you hike Arenal Volcano?",
        answer: "Visitors can hike designated trails within Arenal Volcano National Park, including paths that cross the 1968 lava flow. The summit itself is closed to hikers due to ongoing volcanic monitoring and safety protocols.",
      },
      {
        question: "What is the connection between Arenal and Nayara Resorts?",
        answer: "Nayara Gardens, Nayara Springs, and Nayara Tented Camp are all located in the Arenal region, built within the rainforest that surrounds the volcano. The hot springs that feed the resort pools are heated by the same geothermal forces that power Arenal.",
      },
    ],
  },
  {
    title: "Rapa Nui: Regeneration and Culture",
    description: "Questions about Rapa Nui history, the Hito family, moai, and Nayara Hangaroa's regeneration efforts",
    faqs: [
      {
        question: "Who are the Hito family?",
        answer: "The Hito family are a multigenerational Rapa Nui lineage descended from early Polynesian settlers. They are recognized for their cultural preservation work, leadership in reforestation and reef restoration, and stewardship of Nayara Hangaroa.",
      },
      {
        question: "Why do the moai face inland?",
        answer: "Each moai faces its community to watch over the people. This reflects the belief that ancestral energy (mana) protects life, maintains balance, and connects families to their land.",
      },
      {
        question: "What caused deforestation on Rapa Nui?",
        answer: "Centuries of overharvesting for agriculture and moving statues, combined with soil erosion and changing climate patterns, led to the island's deforestation. Modern restoration projects now reintroduce native trees and protect remaining habitats.",
      },
      {
        question: "How were the moai moved?",
        answer: "Archaeological research shows that the statues were walked using ropes, with teams shifting their weight side to side until they moved forward. This method aligns with Rapa Nui oral tradition, which has long said the moai 'walked.'",
      },
      {
        question: "What does regeneration mean on Rapa Nui today?",
        answer: "Regeneration focuses on restoring ecosystems and cultural practices. This includes reviving traditional agriculture, rebuilding coral reefs, planting native species, reducing waste, and involving local families in conservation and education.",
      },
      {
        question: "How does Nayara Hangaroa support regeneration?",
        answer: "Nayara Hangaroa collaborates with Rapa Nui families, environmental groups, and cultural leaders to restore land and marine habitats. Efforts include composting organic material, supporting reforestation, reducing water use through natural filtration, and offering guest programs that contribute to local conservation.",
      },
    ],
  },
  {
    title: "Hot Springs and Thermal Bathing",
    description: "Questions about the geothermal hot springs at Nayara's Costa Rica properties",
    faqs: [
      {
        question: "Are the hot springs at Nayara natural?",
        answer: "Yes. The hot springs are heated by the geothermal activity of Arenal Volcano. Water rises naturally through volcanic rock, picking up minerals before reaching the surface. The pools at Nayara are designed to preserve this natural thermal flow while providing a refined guest experience.",
      },
      {
        question: "What temperature are the hot springs?",
        answer: "Temperatures vary by pool, ranging from approximately 33°C (91°F) to 41°C (106°F). Multiple pools at different temperatures allow guests to move between warm and hot immersion, which research suggests supports circulation and muscle recovery.",
      },
      {
        question: "Are the hot springs private?",
        answer: "At Nayara Springs, every villa includes a private plunge pool fed by natural thermal water. Nayara Gardens and Nayara Tented Camp share beautifully landscaped communal thermal pools set within the rainforest, designed for quiet immersion rather than crowded bathing.",
      },
      {
        question: "What minerals are in the thermal water?",
        answer: "The geothermal water contains naturally occurring minerals including sulfur, calcium, magnesium, and silica. These minerals have been associated with skin health, joint relief, and relaxation in balneotherapy research, though individual experiences vary.",
      },
      {
        question: "Can children use the hot springs?",
        answer: "Children are welcome in designated pools with lower temperatures. Parents should supervise young children and limit time in warmer pools. Staff can advise on which pools are most suitable for families.",
      },
      {
        question: "What is the best time to visit the hot springs?",
        answer: "Early morning and evening offer the most atmospheric experiences. Morning mist rising from the warm water against cool rainforest air creates a dramatic visual effect, while evening soaks under the stars provide deep relaxation before sleep.",
      },
    ],
  },
  {
    title: "Bocas del Toro",
    description: "Questions about Nayara Bocas del Toro, its marine ecosystem, and the Caribbean setting",
    faqs: [
      {
        question: "Where is Nayara Bocas del Toro located?",
        answer: "Nayara Bocas del Toro is located on Frangipani Island in the Bocas del Toro archipelago, Panama. The property sits within a protected marine area where mangrove forests meet coral reefs, accessible only by boat.",
      },
      {
        question: "How do you get to Nayara Bocas del Toro?",
        answer: "Guests fly into Bocas del Toro Airport (BOC) from Panama City, then transfer by private boat to the resort. The boat journey takes approximately 20 minutes and passes through mangrove channels and open Caribbean water.",
      },
      {
        question: "Is Nayara Bocas del Toro off-grid?",
        answer: "Nearly. Solar panels provide close to 100% of the resort's energy needs. Freshwater comes exclusively from collected rainwater, purified on-site through an ultraviolet filtration system. The property was designed from the ground up to minimize environmental impact on the surrounding marine ecosystem.",
      },
      {
        question: "What marine life can guests see?",
        answer: "The surrounding waters host nurse sharks, sea turtles, rays, starfish, and hundreds of tropical fish species. The coral reefs are part of an active restoration program. Dolphins are frequently spotted in the deeper channels between islands.",
      },
      {
        question: "What is the coral restoration program?",
        answer: "Nayara Bocas del Toro operates a coral nursery where fragments of resilient coral species are grown on underwater structures before being transplanted to degraded reef areas. Guests can participate in guided snorkeling sessions to observe the nursery and learn about reef ecology.",
      },
      {
        question: "What activities are available at Bocas del Toro?",
        answer: "Activities include snorkeling and diving on coral reefs, kayaking through mangrove channels, paddleboarding, starfish beach visits, bioluminescence tours (seasonal), fishing, and guided nature walks. The resort also offers spa treatments and yoga sessions overlooking the Caribbean.",
      },
    ],
  },
  {
    title: "Costa Rica Gastronomy",
    description: "Questions about dining, farm-to-table philosophy, and culinary experiences at the Arenal properties",
    faqs: [
      {
        question: "How many restaurants are at the Nayara Costa Rica properties?",
        answer: "The three Arenal properties share access to multiple dining venues including Amor Loco (Latin American cuisine), Asia Luna (Asian-fusion), Mis Amores (fine dining), Nostalgia Wine Bar, and several casual options. Guests at any of the three properties can dine at all venues.",
      },
      {
        question: "What is the farm-to-table approach at Nayara?",
        answer: "The kitchens source ingredients from on-site organic gardens, local farms, and regional producers. Herbs, vegetables, and edible flowers are grown steps from the kitchen. The culinary team works directly with small-scale farmers in the Arenal region to source seasonal produce, dairy, and proteins.",
      },
      {
        question: "Are cooking classes available?",
        answer: "Yes. Guests can participate in hands-on cooking classes that cover Costa Rican traditional cuisine, chocolate making from local cacao, coffee preparation from bean to cup, and seasonal menu workshops with the executive chef.",
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer: "All restaurants accommodate vegetarian, vegan, gluten-free, and other dietary requirements. Guests are encouraged to communicate preferences at booking or upon arrival so the culinary team can prepare personalized options.",
      },
      {
        question: "What makes the coffee experience special?",
        answer: "Costa Rica's Arenal region produces exceptional coffee due to volcanic soil, altitude, and rainfall patterns. Nayara offers cupping sessions, plantation visits, and barista workshops where guests learn about single-origin processing from cherry to cup.",
      },
      {
        question: "Is there a wine program?",
        answer: "Nostalgia Wine Bar houses a curated collection spanning Old and New World wines. Sommelier-led tastings, food-and-wine pairing dinners, and private cellar experiences are available. The program emphasizes South American wines alongside European classics.",
      },
    ],
  },
  {
    title: "Chilean Gastronomy",
    description: "Questions about dining at Nayara Alto Atacama and Nayara Hangaroa",
    faqs: [
      {
        question: "What type of cuisine does Nayara Alto Atacama serve?",
        answer: "Nayara Alto Atacama serves Chilean desert cuisine rooted in local traditions. The kitchen sources most vegetables from an on-site Andean Garden at 2,400 meters, featuring dishes like Corn Cake with Goat Cheese and Chanar, classic Charquican, and seasonal tasting menus paired with Chile's finest wines.",
      },
      {
        question: "What is the dining experience like at Nayara Hangaroa on Easter Island?",
        answer: "Nayara Hangaroa offers Polynesian-Chilean fusion cuisine centered on fresh Pacific seafood, traditional umu earth oven cooking, and tropical ingredients grown in volcanic soil. The three venues span fine dining at Poerava, Pacific tapas at Kaloa Lounge, and craft cocktails at Vaikoa Bar.",
      },
      {
        question: "Are wine experiences available at both Chilean properties?",
        answer: "Yes. Both properties feature curated wine programs showcasing Chile's diverse terroir. Nayara Alto Atacama offers Wine Pairing dinners and sommelier-led tastings, while Nayara Hangaroa pairs Chilean wines with Polynesian-inspired cuisine.",
      },
      {
        question: "Can guests participate in culinary experiences beyond dining?",
        answer: "Absolutely. Nayara Alto Atacama offers Andean Garden tours, sommelier tastings, and desert cocktail workshops. Nayara Hangaroa features traditional Umu Earth Oven ceremonies, Pacific tasting experiences, and sunset cocktail sessions overlooking the Moai coastline.",
      },
      {
        question: "What is the Andean Garden at Alto Atacama?",
        answer: "The Andean Garden is an on-site organic garden at 2,400 meters elevation where the kitchen grows vegetables, herbs, and native plants adapted to the desert climate. Guests can tour the garden with the chef and learn how extreme altitude and aridity shape the flavors of Atacameño cuisine.",
      },
    ],
  },
  {
    title: "Romance and Adults-Only Travel",
    description: "Questions about adults-only policies, couples travel, and romantic experiences at Nayara",
    faqs: [
      {
        question: "What does adults-only mean at Nayara Springs and Nayara Bocas del Toro?",
        answer: "Adults-only means that both properties exclusively welcome guests aged 18 and older. Beyond the age policy, it is a design philosophy: architecture scaled for intimacy, programming curated for connection, and an atmosphere where every detail serves the couple. There are no children's facilities, no family programming, and no compromises to the tranquil environment.",
      },
      {
        question: "Is there scientific evidence that couples travel improves relationships?",
        answer: "Yes. A 2024 study by Coffey et al. published in the Journal of Positive Psychology found that couples who share novel, self-expanding experiences on vacation report significantly higher relationship satisfaction, romantic passion, and physical intimacy. The U.S. Travel Association found that 61% of couples say a trip reignited their romance.",
      },
      {
        question: "What is included in the all-inclusive package at Nayara Bocas del Toro?",
        answer: "The all-inclusive package at Nayara Bocas del Toro covers all meals at the Elephant House restaurant and Coral Cafe, premium beverages, daily mini-fridge replenishment, in-room dining available 24 hours, non-motorized water activities, and select guided excursions. Spa treatments and private boat charters are available at additional cost.",
      },
      {
        question: "Do both adults-only properties have private pools in every villa?",
        answer: "Yes. At Nayara Springs, every villa has its own private plunge pool fed by natural volcanic hot spring water. At Nayara Bocas del Toro, the Overwater Pool Villa and Overwater Pool Villa Deluxe categories each have a private saltwater plunge pool on the deck.",
      },
      {
        question: "Which property is better for a honeymoon?",
        answer: "All four are exceptional honeymoon destinations. Nayara Springs suits couples who love rainforest immersion, volcanic hot springs, and adventure. Nayara Bocas del Toro suits couples who prefer Caribbean overwater living, marine life, and the simplicity of an all-inclusive island escape. Nayara Alto Atacama suits couples drawn to silence, stargazing, and the transformative power of the desert. Nayara Hangaroa suits couples seeking shared wonder, ancestral energy, and the romance of the most remote inhabited island on Earth.",
      },
      {
        question: "Is Nayara Alto Atacama adults-only?",
        answer: "Nayara Alto Atacama is not an adults-only property, but the Atacama Desert itself creates conditions that are inherently romantic. The extreme low-stimulus environment, vast scale, minimal light pollution, and collapsed soundscape naturally heighten emotional attunement and deepen connection between couples.",
      },
      {
        question: "Why is the Atacama Desert considered romantic?",
        answer: "Environmental psychology shows that low-stimulus landscapes reduce cognitive fatigue and heighten emotional attunement. The Atacama combines minimal sensory clutter with exaggerated scale, creating conditions where attention reallocates inward and toward close relationships. Studies on awe from UC Berkeley's Greater Good Science Center confirm that shared exposure to vast environments strengthens bonds.",
      },
      {
        question: "Is Nayara Hangaroa adults-only?",
        answer: "No. Nayara Hangaroa welcomes guests of all ages. Romance at Hangaroa is created by the island itself: the extreme remoteness of Rapa Nui, the awe-inspiring Moai, the volcanic landscapes, and the Polynesian cultural heritage. The isolation of the most remote inhabited island on Earth naturally creates the intimacy and shared wonder that couples seek.",
      },
      {
        question: "What makes Easter Island romantic for couples?",
        answer: "Research on awe from UC Berkeley shows that shared exposure to vast, sublime environments reduces self-focus and deepens emotional connection. Standing before the Moai at Ahu Tongariki, watching sunrise over volcanic craters, and participating in traditional Umu Earth Oven ceremonies together creates the kind of peak shared experiences that relationship science identifies as the engine of lasting romance.",
      },
    ],
  },
  {
    title: "Sukha Spa and Wellness",
    description: "Questions about spa treatments, yoga, and wellness programming at the Costa Rica properties",
    faqs: [
      {
        question: "What is Sukha Spa?",
        answer: "Sukha Spa is Nayara's wellness sanctuary in the Arenal rainforest, shared across the three Costa Rica properties. Open-air treatment pavilions are tucked into pockets of the forest, where the natural soundtrack of birdsong and flowing water becomes part of the healing experience.",
      },
      {
        question: "What treatments are available?",
        answer: "Treatments range from traditional massage and bodywork to signature experiences using locally grown organic coffee, volcanic mud, and Costa Rican chocolate. The spa menu includes couples treatments, facials, body wraps, and hydrotherapy circuits incorporating the natural hot springs.",
      },
      {
        question: "Is yoga offered at the properties?",
        answer: "Yes. Daily yoga sessions are held in open-air pavilions overlooking the rainforest canopy. Classes range from gentle morning flows to restorative evening sessions. Private yoga instruction and meditation sessions can also be arranged.",
      },
      {
        question: "Can couples book spa experiences together?",
        answer: "Absolutely. Couples treatment suites are available with side-by-side massage tables in private rainforest pavilions. Packages often include thermal bathing, aromatherapy, and post-treatment relaxation time with views of the volcano.",
      },
      {
        question: "What natural ingredients are used in treatments?",
        answer: "The spa sources organic coffee from local farms for exfoliating scrubs, volcanic mud rich in minerals for detoxifying wraps, Costa Rican cacao for antioxidant body treatments, and tropical botanicals including aloe, coconut, and native herbs for aromatherapy and skin care.",
      },
      {
        question: "Do I need to book spa treatments in advance?",
        answer: "Advance booking is recommended, especially for couples suites and signature treatments. The concierge team can arrange spa programming before arrival or during your stay. Walk-in availability depends on the season.",
      },
    ],
  },
];

/* All FAQs flattened for schema */
const ALL_FAQS = FAQ_CATEGORIES.flatMap((cat) => cat.faqs);

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-40px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.cream }}>
      <BrandNavigation pageType="brand" />
      <FAQPageSchema url="https://nayararesorts.manus.space/faq" faqs={ALL_FAQS} />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p
              className="uppercase tracking-[0.3em] text-[10px] mb-4"
              style={{ ...body, fontWeight: 600, color: PALETTE.accent }}
            >
              Nayara Resorts
            </p>
            <h1
              className="text-3xl md:text-5xl leading-tight mb-6"
              style={{ ...display, color: PALETTE.espresso }}
            >
              Frequently Asked Questions
            </h1>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] max-w-2xl"
              style={{ ...body, color: PALETTE.muted }}
            >
              Answers drawn from our journal, organized by topic. If you have a question not covered here, our concierge is always available.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ Categories */}
      {FAQ_CATEGORIES.map((category, catIdx) => (
        <section
          key={catIdx}
          className="px-6 md:px-12 pb-16 md:pb-20"
          style={{ backgroundColor: PALETTE.cream }}
        >
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <div className="mb-8">
                <h2
                  className="text-2xl md:text-3xl mb-2"
                  style={{ ...display, color: PALETTE.espresso }}
                >
                  {category.title}
                </h2>
                <p
                  className="text-[13px] tracking-wide"
                  style={{ ...body, color: PALETTE.muted + "99" }}
                >
                  {category.description}
                </p>
              </div>
            </Reveal>

            <div className="flex flex-col">
              {category.faqs.map((faq, faqIdx) => {
                const key = `${catIdx}-${faqIdx}`;
                const isOpen = !!openItems[key];
                return (
                  <Reveal key={key} delay={faqIdx * 0.04}>
                    <div
                      className="border-b"
                      style={{ borderColor: PALETTE.divider }}
                    >
                      <button
                        onClick={() => toggleItem(key)}
                        className="w-full flex items-center justify-between py-6 text-left"
                      >
                        <span
                          className="text-[15px] md:text-[16px] pr-8"
                          style={{ ...body, fontWeight: 500, color: PALETTE.espresso }}
                        >
                          {faq.question}
                        </span>
                        <motion.svg
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-5 h-5 flex-shrink-0"
                          style={{ color: PALETTE.muted }}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </motion.svg>
                      </button>
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p
                          className="pb-6 text-[14px] md:text-[15px] leading-[1.85]"
                          style={{ ...body, color: PALETTE.muted }}
                        >
                          {faq.answer}
                        </p>
                      </motion.div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 md:px-12" style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-8"
              style={{ ...body, color: PALETTE.muted }}
            >
              For questions about specific properties, reservations, or travel planning, our team is here to help.
            </p>
            <a
              href="/journal"
              className="inline-block px-8 py-3 border text-[11px] tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#3B2B26] hover:text-white"
              style={{ ...body, fontWeight: 500, color: PALETTE.espresso, borderColor: PALETTE.divider }}
            >
              Explore the Journal
            </a>
          </Reveal>
        </div>
      </section>

      <Footer textColor="#FFFFFF" />
    </div>
  );
}
