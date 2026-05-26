/**
 * Nayara Resorts , Gastronomy & Dining Data
 * Real menu content sourced from official documents.
 * Organized by property → restaurant → menu sections → items.
 */

// ─── Types ────────────────────────────────────────────────────
export interface MenuItem {
  name: string;
  nameLocal?: string; // Rapa Nui, Spanish, etc.
  description: string;
  ingredients?: string;
  price?: string;
  isVegetarian?: boolean;
  isLocal?: boolean; // Made with local products
  isNonAlcoholic?: boolean;
}

export interface MenuSection {
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

export interface Restaurant {
  id: string;
  name: string;
  property: string;
  propertySlug: string;
  tagline: string;
  description: string;
  cuisine: string;
  atmosphere: string;
  hours?: string;
  dressCode?: string;
  image?: string;
  sections: MenuSection[];
}

export interface PropertyDining {
  propertyName: string;
  propertySlug: string;
  headline: string;
  description: string;
  restaurants: Restaurant[];
}

// ─── Costa Rica , Lapas Bar ──────────────────────────────────
const lapasBar: Restaurant = {
  id: "lapas-bar",
  name: "Lapas Bar",
  property: "Nayara Costa Rica",
  propertySlug: "arenal",
  tagline: "Tropical Cocktails in the Rainforest Canopy",
  description:
    "Perched among the treetops with views of Arenal Volcano, Lapas Bar is where Costa Rican rum traditions meet modern mixology. Every cocktail tells a story , from tiki culture legends to Hemingway's Havana. Named after the scarlet macaws (lapas) that soar through the canopy at sunset.",
  cuisine: "Cocktail Bar",
  atmosphere: "Open-air rainforest canopy bar with volcano views",
  sections: [
    {
      title: "Tropical Signatures",
      subtitle: "Spirits from Latin America and Costa Rican flavors",
      items: [
        {
          name: "Dreams Mai Tai",
          description:
            "Savor a sip of paradise with Arenal Rainforest views. Inspired by the legendary Mai Tai, a symbol of tiki culture since its creation in the 1940s, this cocktail wraps you in tropical breezes and golden sunsets.",
          ingredients:
            "Plantation Original Dark Rum, Sugar Cane Juice Spirit, Costa Rican Pineapple Liqueur, Orgeat Syrup, Pineapple and Star Anise, Angostura",
          price: "$17",
        },
        {
          name: "Lost Paradise Zombie",
          description:
            "Unleash the spirit of adventure with this bold, exotic blend of rums. The Lost Paradise Zombie channels the wild energy of a hidden jungle oasis, where the fiery power of the volcano meets the mystery of the tropics.",
          ingredients:
            "Sugar Cane Juice Spirit, Centenario 12 YO, Plantation Original Dark Rum, Absinthe, Passion Fruit, Lapas Spice Mix #1, Angostura Bitters",
          price: "$17",
        },
        {
          name: "Lychee Breeze Sour",
          description:
            "Crisp, light, and refreshing , like a gentle tropical breeze by the pool, offering a touch of elegance with every sip.",
          ingredients:
            "Sugar Cane Juice Spirit, Centenario Blanco 4YO, Lychee and Ginger, Honey Chamomile Whey",
        },
        {
          name: "Banana Groove Planter's Punch",
          description:
            "Immerse yourself in the lush, tropical vibes of this bold cocktail. The Banana Groove Planter's Punch brings forward the rich flavor of ripe bananas, perfectly balanced with vibrant, jungle-inspired notes.",
          ingredients:
            "Costa Rican 12YO Rum, Lapas Spice Mix #2, Banana Liqueur, Guava, Lime, Demerara Sugar, Absinthe, Angostura",
        },
      ],
    },
    {
      title: "Classics",
      items: [
        {
          name: "Dark N' Stormy",
          description:
            "A timeless classic with a mysterious allure. Born from the turbulent seas and crafted by British sailors in Bermuda after World War I, it embodies the perfect storm of rich dark rum and spicy ginger beer.",
          ingredients:
            "Plantation Original Dark, Ginger Beer, Lime, Demerara Sugar",
        },
        {
          name: "Old Cuban",
          description:
            "A sophisticated blend that marries the best of a Mojito and a Daiquiri, elevated with a splash of Prosecco. Created in 2004 by the legendary Audrey Saunders, this drink captures the essence of old-world charm with a modern twist.",
          ingredients:
            "Centenario 12 YO, Lime, Demerara Sugar, Prosecco",
        },
        {
          name: "Mary Pickford",
          description:
            "Created in the 1920s at Havana's Hotel Nacional de Cuba, this cocktail honors silent film star Mary Pickford. With its sweet blend of rum, pineapple, and grenadine, this drink embodies the glamour of Hollywood's golden age.",
          ingredients:
            "Ron Centenario 4 Años, Pineapple Juice, Grenadine, Giffard Maraschino Liqueur",
        },
        {
          name: "Papa Doble",
          description:
            'Created at La Floridita, Havana, Cuba, for Ernest Hemingway , known as "Papa" in Havana , who would request double rum in his daiquiris, giving rise to the Papa Doble.',
          ingredients:
            "Ron Centenario 4, Grapefruit and Lime, Giffard Maraschino Liqueur",
        },
      ],
    },
    {
      title: "Non-Alcoholic Rum Cocktails",
      subtitle: "All the craft, none of the spirits",
      items: [
        {
          name: "Non-jito",
          description: "A refreshing alcohol-free take on the classic mojito.",
          ingredients: "Non-Alcoholic Rum, Lime, Simple Syrup, Mint, Soda",
          price: "$15",
          isNonAlcoholic: true,
        },
        {
          name: "Mary's Retreat",
          description:
            "A delicate, floral escape with elderflower and tropical pineapple.",
          ingredients:
            "Non-Alcoholic Rum, Non-Alcoholic Elderflower Spirit, Pineapple Juice, Cherry",
          isNonAlcoholic: true,
        },
        {
          name: "Conscious Zombie",
          description:
            "All the bold, exotic energy of the Lost Paradise Zombie , without the spirits.",
          ingredients:
            "Non-Alcoholic Rum, Non-Alcoholic Grapefruit Spirit, Hibiscus and Spices, Lime, Orgeat Syrup",
          isNonAlcoholic: true,
        },
      ],
    },
  ],
};

// ─── Costa Rica , Terraza ────────────────────────────────────
const terraza: Restaurant = {
  id: "la-terraza",
  name: "La Terraza",
  property: "Nayara Gardens",
  propertySlug: "gardens",
  tagline: "Where Costa Rican Terroir Meets the Art of the Cocktail",
  description:
    "Terraza celebrates the spirit of Costa Rica through cocktails that tell the story of the land. Every signature drink is rooted in local ingredients, traditions, and the Tico way of life , from Cacique Guaro to Dota Valley apples to market-stall caramels.",
  cuisine: "Cocktail Bar & Terrace",
  atmosphere: "Elevated terrace with panoramic volcano views",
  sections: [
    {
      title: "Signature Cocktails",
      subtitle: "Spirits from Latin America and Costa Rican flavors",
      items: [
        {
          name: "Casitico Sour",
          description:
            '"Tico" is a diminutive used by Costa Ricans to describe little things , reason why we are known as "Ticos." The Cas fruit is endemic to Costa Rica with a sweet and sour taste similar to guava.',
          ingredients:
            'Cacique Guaro, Cas and "Limón Dulce" Cordial, Mint Super Foam',
          price: "$17",
        },
        {
          name: "Medio Melón",
          description:
            '"Medio Melon" is the popular expression for "half a million." We use fresh melon for this version of a Mai Tai with Costa Rican rum, creole lemons and pumpkin seeds.',
          ingredients:
            'Centenario 12 YO Rum, Cachaca 51, Cantaloupe Fluffy Juice, "Ayote Seed" Orgeat, Mandarine Lemon, Ancho Verde Chile Liqueur, Orange Bitters',
          price: "$17",
        },
        {
          name: "Dota Sunrise",
          description:
            'Dota is a land of microclimates and breathtaking sunrises. The scents of wet dirt, herbs, and sweetness from fruits and flowers are all represented in this cocktail, made with "Ana" apples from the region.',
          ingredients:
            'Mezcal Amaras Cupreata, Costa Rican "Ana Apple" Cloudy Juice, Beetroot Syrup, Fire Tincture and Celery Bitters',
          price: "$17",
        },
        {
          name: "Tramos Fix",
          description:
            'In the "Tramos" (market stalls) you find typical sweet treats , milk caramel bars, candied figs and bananas. Enjoy all of these sweet flavors in this cocktail.',
          ingredients:
            'Tequila Don Julio Reposado, Centenario 12 Rum, "Cajeta" Cordial, Chipotle and Figs',
          price: "$17",
        },
      ],
    },
    {
      title: "Classic Selection",
      items: [
        {
          name: "Rum Old Fashioned",
          description:
            "The same formula as the first recorded definition of the word 'cocktail' , customized with Costa Rican Rum.",
          ingredients:
            "Centenario 12 YO Rum, Demerara Syrup, Angostura and Chocolate Bitters",
          price: "$17",
        },
        {
          name: "Guaro Sour",
          description:
            "Guaro is Costa Rica's most popular spirit, made with sugar cane. A simple, refreshing cocktail perfect after a day of adventure.",
          ingredients: "Cacique Guaro, Lime, Simple Syrup, Super Foam",
          price: "$17",
        },
        {
          name: "La Cura",
          description:
            "A Latino take on the Penicillin cocktail, using agave spirits instead of Scotch Whisky. Inspired by Sam Ross's original at New York's Milk & Honey bar.",
          ingredients:
            "Tequila Milagro Plata, Amaras Verde Mezcal, Raw Honey and Ginger Syrup, Lime",
          price: "$17",
        },
        {
          name: "Tico Mule",
          description:
            "Since Guaro is a very flexible spirit similar to vodka, why not try it in this Costa Rican version of the Moscow Mule?",
          ingredients: "Cacique Guaro, Tapa E' Dulce, Lime, Ginger Beer",
          price: "$17",
        },
      ],
    },
    {
      title: "Non-Alcoholic",
      items: [
        {
          name: "Resbaladera Colada",
          description:
            '"Resbaladera" is a traditional drink similar to horchata , rice and cinnamon based, consumed in the Costa Rican Pacific. Combined with pineapple rice water, our grandmothers\' refreshing beverage.',
          ingredients:
            "Giffard Non-Alcoholic Pineapple, Rice Organic Water, Almond Orgeat, Fresh Basil, Cinnamon",
          price: "$15",
          isNonAlcoholic: true,
        },
      ],
    },
  ],
};

// ─── Nayara Tented Camp , Restaurants ────────────────────────
const ayla: Restaurant = {
  id: "ayla",
  name: "Ayla",
  property: "Nayara Tented Camp",
  propertySlug: "tented-camp",
  tagline: "Modern Mediterranean Cuisine in the Rainforest Canopy",
  description:
    "Ayla brings the warmth of Mediterranean cooking to the heart of the Arenal rainforest. Inspired by the coastal kitchens of the Levant, Turkey, and Greece, every dish celebrates fresh ingredients, open-fire cooking, and the art of sharing. Dine under the canopy with views of the volcano as the sun sets over the jungle.",
  cuisine: "Modern Mediterranean",
  atmosphere: "Open-air canopy dining with volcano views",
  sections: [],
};

const henrysBar: Restaurant = {
  id: "henrys-bar",
  name: "Henry's Bar",
  property: "Nayara Tented Camp",
  propertySlug: "tented-camp",
  tagline: "Craft Cocktails & Stories from the Jungle",
  description:
    "Named after the legendary explorer who first mapped the trails around Arenal, Henry's Bar is where adventure meets mixology. Handcrafted cocktails made with Costa Rican spirits, tropical fruits, and herbs from our garden , served in a setting that feels like a well-appointed explorer's club deep in the rainforest.",
  cuisine: "Craft Cocktail Bar",
  atmosphere: "Explorer's club ambiance in the jungle canopy",
  sections: [],
};

// ─── Nayara Springs , Restaurants ────────────────────────────
const misAmores: Restaurant = {
  id: "mis-amores",
  name: "Mis Amores",
  property: "Nayara Springs",
  propertySlug: "springs",
  tagline: "Romantic Fine Dining for Two",
  description:
    "Mis Amores is the culinary jewel of Nayara Springs , an adults-only fine dining experience where every detail is designed for romance. The menu weaves Costa Rican ingredients with international technique, served in an intimate candlelit setting overlooking the volcanic hot springs. A Relais & Châteaux dining experience.",
  cuisine: "Contemporary Fine Dining",
  atmosphere: "Intimate candlelit terrace with hot springs views",
  sections: [],
};

const miCafecito: Restaurant = {
  id: "mi-cafecito",
  name: "Mi Cafecito",
  property: "Nayara Springs",
  propertySlug: "springs",
  tagline: "Artisanal Coffee & Morning Rituals",
  description:
    "Mi Cafecito is where mornings begin at Nayara Springs , with single-origin Costa Rican coffee, fresh pastries, and the quiet sounds of the rainforest. Beans are sourced from the Tarrazú and Dota Valley highlands and roasted with care. Pair your cup with a tropical fruit plate or a traditional gallo pinto.",
  cuisine: "Coffee House & Breakfast",
  atmosphere: "Tranquil morning gathering with garden views",
  sections: [],
};

// ─── Nayara Gardens , Restaurants ────────────────────────────
const asiaLuna: Restaurant = {
  id: "asia-luna",
  name: "Asia Luna",
  property: "Nayara Gardens",
  propertySlug: "gardens",
  tagline: "Pan-Asian Flavors in the Heart of the Rainforest",
  description:
    "Asia Luna brings the bold flavors of Thailand, Japan, and Vietnam to the Arenal rainforest. Dishes are crafted with locally sourced ingredients and presented in an open-air setting surrounded by tropical gardens. A Michelin-recognized dining experience.",
  cuisine: "Pan-Asian Fusion",
  atmosphere: "Open-air tropical garden setting",
  sections: [],
};

const amorLoco: Restaurant = {
  id: "amor-loco",
  name: "Amor Loco",
  property: "Nayara Springs",
  propertySlug: "springs",
  tagline: "Latin American Soul Food with Volcanic Views",
  description:
    "Amor Loco celebrates the passion of Latin American cuisine , from Peruvian ceviche to Argentine grills , all prepared with Costa Rican ingredients from our organic gardens. The restaurant overlooks the Arenal Volcano and is one of the most celebrated dining experiences in Central America.",
  cuisine: "Latin American",
  atmosphere: "Volcano-view terrace dining",
  sections: [],
};

const lylasGelato: Restaurant = {
  id: "lylas-gelato",
  name: "Lyla's Gelato",
  property: "Nayara Gardens",
  propertySlug: "gardens",
  tagline: "Artisanal Gelato Crafted in the Tropics",
  description:
    "Lyla's Gelato brings the Italian tradition of handcrafted gelato to the Arenal rainforest. Made fresh daily with tropical fruits from local farms , guanábana, passion fruit, mango, and Costa Rican chocolate , each scoop is a celebration of the land. The perfect pause between adventures.",
  cuisine: "Artisanal Gelato & Desserts",
  atmosphere: "Charming garden-side gelato counter",
  sections: [],
};

const nostalgia: Restaurant = {
  id: "nostalgia",
  name: "Nostalgia",
  property: "Nayara Gardens",
  propertySlug: "gardens",
  tagline: "Wine & Tapas Under the Stars",
  description:
    "An intimate wine bar offering a curated selection of Latin American and Old World wines paired with artisanal tapas. The perfect setting for a quiet evening after a day of adventure.",
  cuisine: "Wine Bar & Tapas",
  atmosphere: "Intimate candlelit setting",
  sections: [],
};

// ─── Hangaroa , Poerava ──────────────────────────────────────
const poerava: Restaurant = {
  id: "poerava",
  name: "Poerava",
  property: "Nayara Hangaroa",
  propertySlug: "hangaroa",
  tagline: "Where Rapa Nui Tradition Meets Pacific Cuisine",
  description:
    "Poerava is the culinary heart of Nayara Hangaroa, serving a bilingual menu that honors Rapa Nui heritage alongside international classics. Every dish features local seafood, island-grown produce, and Chilean wines. Menu items carry names in both Spanish and Rapa Nui language.",
  cuisine: "Pacific Island & Chilean",
  atmosphere: "Garden-view restaurant with Polynesian architecture",
  sections: [
    {
      title: "Salads",
      subtitle: "Sara",
      items: [
        {
          name: "From the Sea Salad",
          nameLocal: "Ensalada del Mar",
          description:
            "Green mix, smoked salmon, breaded fried squid, sliced orange, grilled bell peppers and citric marinade.",
          price: "$13,300",
          isLocal: true,
        },
        {
          name: "Caesar Salad",
          nameLocal: "Ensalada Cesar",
          description:
            "Green mix, parmesan cheese, grilled chicken or shrimp, croutons, and Caesar dressing.",
          price: "$12,500",
        },
        {
          name: "Roast Beef Island Salad",
          nameLocal: "Ensalada Roast Beef Isleña",
          description:
            "Green mix, perfumed roast beef, palm hearts, celery, avocado, grilled onion, mango and honey mustard vinaigrette.",
          price: "$13,000",
          isLocal: true,
        },
        {
          name: "Hummus",
          description: "Chickpea hummus and vegetable sticks.",
          price: "$11,500",
          isVegetarian: true,
        },
        {
          name: "Andean Quinoa",
          nameLocal: "Ensalada de Quinua Andina",
          description: "Quinoa tabulé served with salad mix.",
          price: "$11,500",
          isVegetarian: true,
        },
      ],
    },
    {
      title: "Soups",
      subtitle: "Chopu",
      items: [
        {
          name: "Seafood Soup",
          nameLocal: "Sopa de Mariscos",
          description:
            "Shrimp, octopus, squid, mussels and scallops with vegetables.",
          price: "$10,500",
          isLocal: true,
        },
        {
          name: "Tomato Cream",
          nameLocal: "Crema de Tomate",
          description: "Roasted tomatoes in a classic preparation.",
          price: "$9,500",
          isVegetarian: true,
        },
        {
          name: "French Onion Soup",
          nameLocal: "Sopa de Cebolla",
          description: "Classic French onion soup.",
          price: "$10,000",
        },
      ],
    },
    {
      title: "Main Dishes",
      subtitle: "He Kai",
      items: [
        {
          name: "Grilled Beef Tenderloin",
          nameLocal: "Lomo Vetado a la Plancha",
          description:
            'Sautéed potatoes, caramelized onions, and warm pebre (Chilean "pico de gallo").',
          price: "$17,500",
        },
        {
          name: "Chilean Pot Roast",
          nameLocal: "Plateada a lo Pobre",
          description:
            "Slow cooked short plate with poached egg, sautéed onion and native potatoes mix.",
          price: "$17,000",
          isLocal: true,
        },
        {
          name: "Stew Chicken Casserole",
          nameLocal: "Pollo a la Cacerola",
          description:
            "White wine slow cooked chicken, garlic, laurel, mushrooms, dried tomatoes, grilled black olives served with rustic mashed potatoes.",
          price: "$15,500",
        },
      ],
    },
    {
      title: "Fish & Ceviche",
      subtitle: "Ika",
      items: [
        {
          name: "Ceviche Rapa Nui",
          description:
            "Classic tuna ceviche, served with green leaves salad and local sweet potato.",
          price: "$15,000",
          isLocal: true,
        },
        {
          name: "Lentils Ceviche",
          description: "Lentils ceviche with coconut milk and basil.",
          price: "$11,500",
          isVegetarian: true,
        },
        {
          name: "Local Fish Carpaccio",
          nameLocal: "Carpaccio de Pesca Local",
          description:
            "Classic Italian preparation served with parmesan cheese, capers and homemade dressing.",
          price: "$14,000",
          isLocal: true,
        },
        {
          name: "Local Grilled Fish",
          nameLocal: "Pescado Local a la Plancha",
          description:
            "Served with mashed peas, grilled vegetables and seafood sauce.",
          price: "$16,500",
          isLocal: true,
        },
        {
          name: "Poerava Tuna Fish",
          nameLocal: "Atún Poerava",
          description:
            "Sealed tuna fish served over a citric risotto, with a touch of green olives and saffron tomatoes.",
          price: "$17,500",
          isLocal: true,
        },
      ],
    },
    {
      title: "Fresh Homemade Pasta",
      items: [
        {
          name: "Two Colors Sorrentino",
          nameLocal: "Sorrentino Bi-Color",
          description:
            "Filled with cream of corn and lemon grass sauce.",
          price: "$14,500",
        },
        {
          name: "Pasta Selection",
          description:
            "Fettuccini, Gnocchi, or Spaghetti with your choice of sauce: Pomodoro, Alfredo, Bolognese, or Pesto.",
          price: "$13,500",
        },
        {
          name: "Bolognese Lasagna",
          nameLocal: "Lasaña Boloñesa",
          description: "Classic Bolognese lasagna.",
          price: "$13,500",
        },
      ],
    },
    {
      title: "Desserts",
      subtitle: "Mona Mona",
      items: [
        {
          name: "Suspiro Limeño",
          description:
            '"Suspiro limeño" with Oporto mango sauce.',
          price: "$7,500",
        },
        {
          name: "Chocolate Mousse",
          description:
            "Chocolate mousse with a touch of orange and almonds.",
          price: "$8,000",
        },
        {
          name: "Vanilla Crème Brûlée",
          description: "Classic vanilla crème brûlée.",
          price: "$8,000",
        },
        {
          name: "Seasonal Fruit Salad",
          description: "Fresh seasonal fruit salad.",
          price: "$7,500",
          isVegetarian: true,
        },
        {
          name: "Homemade Ice Cream",
          description: "Copa of homemade ice cream.",
          price: "$7,000",
        },
      ],
    },
    {
      title: "Kids Menu",
      subtitle: "Ngapoki",
      items: [
        {
          name: "Bolognese Spaghetti",
          description: "Spaghetti with Bolognese sauce.",
          price: "$8,500",
        },
        {
          name: "Grilled Protein",
          description:
            "Grilled beef, fish, or chicken with french fries, rice, or mashed potatoes.",
          price: "$10,000",
        },
        {
          name: "Chicken Nuggets",
          description:
            "Chicken nuggets with french fries, rice, or mashed potatoes.",
          price: "$9,000",
        },
      ],
    },
  ],
};

// ─── Bocas del Toro , The Coral Cafe ────────────────────
const coralCafe: Restaurant = {
  id: "coral-cafe",
  name: "The Coral Cafe",
  property: "Nayara Bocas del Toro",
  propertySlug: "bocas-del-toro",
  tagline: "Laid-back Al Fresco Dining",
  description:
    "The Coral Cafe is where mornings and afternoons unfold at Nayara Bocas del Toro — casual poolside dining with locally sourced ingredients, fresh seafood from Bocas fishermen, tropical fruits, and Caribbean flavors. Breakfast and lunch served al fresco with views over the turquoise Caribbean.",
  cuisine: "Caribbean & Panamanian",
  atmosphere: "Casual poolside al fresco dining",
  hours: "Daily 7:00 AM – 3:00 PM",
  sections: [],
};

// ─── Alto Atacama , Ckelar Restaurant ────────────────────────
const ckelar: Restaurant = {
  id: "ckelar",
  name: "Ckelar",
  property: "Nayara Alto Atacama",
  propertySlug: "alto-atacama",
  tagline: "Chilean Desert Cuisine",
  description:
    "Our gastronomy is deeply connected to the surroundings — most of our vegetables come from our Andean Garden. Whether you are a wine aficionado or a connoisseur, you will enjoy Chile's unique grapes and our collection of top-of-the-line local wines.",
  cuisine: "Chilean Desert Cuisine",
  atmosphere: "Adobe-walled dining room with canyon and Andes views",
  sections: [],
};

// ─── Alto Atacama , Quincho ───────────────────────────────
const quincho: Restaurant = {
  id: "quincho",
  name: "Quincho",
  property: "Nayara Alto Atacama",
  propertySlug: "alto-atacama",
  tagline: "South American Asado",
  description:
    "Our Atacameño Quincho is an outdoor barbecue pavilion where we grill different cuts of meat, corn, and potatoes. The 'Asado,' as this way of cooking is generally called, is a cooking tradition of South America. Eating outdoors in the shade overlooking the Andes mountains and the Atacama Desert is an extraordinary experience.",
  cuisine: "Open-Fire Grilling",
  atmosphere: "Outdoor barbecue pavilion overlooking the Andes",
  sections: [],
};

// ─── Alto Atacama , Bar Puri ─────────────────────────────
const barPuri: Restaurant = {
  id: "bar-puri",
  name: "Bar Puri",
  property: "Nayara Alto Atacama",
  propertySlug: "alto-atacama",
  tagline: "An Intimate Bar",
  description:
    "The highlight of your gastronomic experience in the Atacama Desert can be a Wine Pairing dinner with our hand-picked collection of Chile's top wines. This can be a wonderful introduction to the best vineyards in the area.",
  cuisine: "Wine & Cocktails",
  atmosphere: "Intimate poolside bar",
  sections: [],
};

// ─── Bocas del Toro , Elephant House ─────────────────────────
const elephantHouse: Restaurant = {
  id: "elephant-house",
  name: "The Elephant House",
  property: "Nayara Bocas del Toro",
  propertySlug: "bocas-del-toro",
  tagline: "Our Signature Fine Dining",
  description:
    "The majestic Elephant House is a 100-year-old structure shipped halfway around the world from Bali, Indonesia. Led by executive chef Joseph Archbold — a Bocas del Toro native with international training — the menu changes daily, featuring world cuisine crafted from locally sourced ingredients and fresh seafood from Bocas fishermen. Overwater fine dining where every evening is unforgettable.",
  cuisine: "World Cuisine",
  atmosphere: "Historic Balinese overwater fine dining",
  sections: [],
};

// ─── Besame Mucho (Springs) ──────────────────────────────────
const besameMucho: Restaurant = {
  id: "besame-mucho",
  name: "Besame Mucho",
  property: "Nayara Springs",
  propertySlug: "springs",
  tagline: "Passionate Latin Flavors in the Rainforest",
  description:
    "Besame Mucho brings the bold, passionate flavors of Latin America to life in the Arenal rainforest. From Peruvian ceviche to Mexican mole, Argentine asado to Brazilian churrasco — each dish celebrates the diversity of Latin culinary traditions. Romantic volcano-view terrace dining for an unforgettable evening.",
  cuisine: "Latin American",
  atmosphere: "Romantic volcano-view terrace",
  sections: [],
};

const cielitoLindo: Restaurant = {
  id: "cielito-lindo",
  name: "Cielito Lindo",
  property: "Nayara Springs",
  propertySlug: "springs",
  tagline: "Authentic Mexican Flavors in the Rainforest",
  description:
    "Cielito Lindo brings authentic Mexican flavors to Nayara Springs \u2014 from handmade tortillas and slow-cooked moles to fresh guacamole prepared tableside. The restaurant honors the rich culinary traditions of Mexico while embracing the tropical ingredients of Costa Rica's Arenal region.",
  cuisine: "Mexican",
  atmosphere: "Vibrant cantina with volcano views",
  sections: [],
};

// ─── Property Dining Collections ─────────────────────────────
export const gardensDining: PropertyDining = {
  propertyName: "Nayara Gardens",
  propertySlug: "gardens",
  headline: "Where It All Begins",
  description:
    "Nayara Gardens offers a diverse culinary journey — from Pan-Asian fusion at Asia Luna to artisanal gelato at Lyla's, fine wines at Nostalgia, and Italian classics at La Terraza. All restaurants source from our organic gardens and local farms.",
  restaurants: [asiaLuna, terraza, nostalgia, lylasGelato],
};

export const springsDining: PropertyDining = {
  propertyName: "Nayara Springs",
  propertySlug: "springs",
  headline: "Elevated Dining for Discerning Palates",
  description:
    "Nayara Springs delivers an adults-only culinary experience — from the celebrated Amor Loco to romantic fine dining at Mis Amores, passionate Latin flavors at Besame Mucho, and artisanal coffee rituals at Mi Cafecito.",
  restaurants: [amorLoco, misAmores, besameMucho, cielitoLindo, miCafecito],
};

export const tentedCampDining: PropertyDining = {
  propertyName: "Nayara Tented Camp",
  propertySlug: "tented-camp",
  headline: "Fire, Earth, and Open Air",
  description:
    "Dining at Nayara Tented Camp is an immersive experience — Modern Mediterranean cuisine at Ayla cooked over open flame, craft cocktails at Henry's Bar, and tropical refreshments at Lapas Pool Bar. Every meal celebrates the volcanic landscape.",
  restaurants: [ayla, henrysBar, lapasBar],
};

export const costaRicaDining: PropertyDining = {
  propertyName: "Nayara Costa Rica",
  propertySlug: "arenal",
  headline: "Five Restaurants, One Volcanic Landscape",
  description:
    "Across Nayara Gardens, Nayara Springs, and Nayara Tented Camp, guests enjoy access to five distinct dining venues , from Pan-Asian fusion at Asia Luna to Latin American soul food at Amor Loco, craft cocktails at Lapas Bar and Terraza, and artisanal coffee at Café Campesino. All restaurants source from our organic gardens and local farms.",
  restaurants: [ayla, henrysBar, misAmores, miCafecito, amorLoco, asiaLuna, lylasGelato, terraza, nostalgia, besameMucho],
};

// ─── Hangaroa , Kaloa Lounge ────────────────────────────
const kaloaLounge: Restaurant = {
  id: "kaloa-lounge",
  name: "Kaloa",
  property: "Nayara Hangaroa",
  propertySlug: "hangaroa",
  tagline: "Lounge",
  description:
    "Kaloa Lounge offers a relaxed atmosphere where guests gather to share small plates inspired by the Pacific. With panoramic views of the island's volcanic landscape, it's the perfect setting for sunset cocktails and light bites that celebrate the ocean's bounty.",
  cuisine: "Pacific Tapas & Cocktails",
  atmosphere: "Relaxed lounge with panoramic volcanic views",
  sections: [],
};

// ─── Hangaroa , Vaikoa Bar ──────────────────────────────
const vaikoaBar: Restaurant = {
  id: "vaikoa-bar",
  name: "Vaikoa",
  property: "Nayara Hangaroa",
  propertySlug: "hangaroa",
  tagline: "Bar",
  description:
    "Vaikoa Bar is an intimate space where the island's spirit comes alive through craft cocktails. Our bartenders blend local ingredients — guava, passion fruit, native herbs — with premium spirits to create drinks that capture the essence of Rapa Nui's volcanic terroir.",
  cuisine: "Craft Cocktails & Island Spirits",
  atmosphere: "Intimate cocktail bar",
  sections: [],
};

export const hangaroaDining: PropertyDining = {
  propertyName: "Nayara Hangaroa",
  propertySlug: "hangaroa",
  headline: "Pacific Island Cuisine with Rapa Nui Soul",
  description:
    "Poerava is the culinary heart of Nayara Hangaroa, where Polynesian traditions meet Chilean gastronomy. Kaloa Lounge offers Pacific tapas with volcanic views, and Vaikoa Bar captures the island's spirit through craft cocktails.",
  restaurants: [poerava, kaloaLounge, vaikoaBar],
};

export const bocasDiningCollection: PropertyDining = {
  propertyName: "Nayara Bocas del Toro",
  propertySlug: "bocas-del-toro",
  headline: "An Unexpected Culinary Journey",
  description:
    "At Nayara Bocas del Toro, dining is an all-inclusive experience. The Elephant House offers signature fine dining in a century-old Balinese structure over the water, while The Coral Cafe serves laid-back al fresco meals poolside with Caribbean flavors and locally sourced ingredients.",
  restaurants: [elephantHouse, coralCafe],
};

export const atacamaDiningCollection: PropertyDining = {
  propertyName: "Nayara Alto Atacama",
  propertySlug: "alto-atacama",
  headline: "Desert Dining in the Driest Place on Earth",
  description:
    "The culinary program at Nayara Alto Atacama draws from the hidden abundance of the Atacama Desert — from Ckelar's Chilean cuisine rooted in the Andean Garden, to Quincho's open-fire South American asado, to Bar Puri's intimate wine pairings with Chile's finest.",
  restaurants: [ckelar, quincho, barPuri],
};

// ─── All Dining Data ─────────────────────────────────────────
export const allDining: PropertyDining[] = [
  gardensDining,
  springsDining,
  tentedCampDining,
  hangaroaDining,
  atacamaDiningCollection,
  bocasDiningCollection,
];

export const allRestaurants: Restaurant[] = [
  ayla,
  henrysBar,
  misAmores,
  miCafecito,
  amorLoco,
  asiaLuna,
  lylasGelato,
  lapasBar,
  terraza,
  nostalgia,
  besameMucho,
  cielitoLindo,
  poerava,
  kaloaLounge,
  vaikoaBar,
  ckelar,
  quincho,
  barPuri,
  elephantHouse,
  coralCafe,
];
