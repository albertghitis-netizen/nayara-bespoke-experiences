/**
 * Sustainability initiatives per property/region.
 * Shared Costa Rica data used by all three CR properties.
 */

export interface Initiative {
  title: string;
  desc: string;
}

export interface SustainabilityVideo {
  title: string;
  guest: string;
  description: string;
  youtubeId: string;
  duration: string;
  /** Alternate language YouTube video ID (for ES/EN toggle) */
  altYoutubeId?: string;
  /** Alternate language label (e.g. "ES" or "EN") */
  altLanguage?: string;
  /** Alternate language duration */
  altDuration?: string;
}

export interface SustainabilityBlog {
  title: string;
  excerpt: string;
  image: string;
  url: string;
  /** If true, shows a "Coming Soon" badge instead of a link */
  comingSoon?: boolean;
}

export interface ESGStat {
  value: number;
  suffix: string;
  label: string;
  detail: string;
}

export interface ESGPillar {
  icon: string; // icon name for lookup
  title: string;
  metrics: string[];
}

export interface ESGTimeline {
  year: string;
  title: string;
  desc: string;
}

export interface ESGCertification {
  name: string;
  body: string;
  year: string;
  desc: string;
}

export interface EnvironmentalPillar {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  highlights: { label: string; value: string }[];
}

export interface SocialImpact {
  headline: string;
  subtitle: string;
  paragraphs: string[];
  stats: { value: number; suffix: string; label: string }[];
}

export interface CommunityProgram {
  title: string;
  desc: string;
  icon: string;
}

export interface GovernanceItem {
  title: string;
  desc: string;
}

export interface CarbonOffset {
  headline: string;
  paragraphs: string[];
  partnerName: string;
  partnerDesc: string;
  guestProgram: string;
}

export interface SDGAlignment {
  number: number;
  title: string;
  desc: string;
}

export interface ESGReport {
  stats: ESGStat[];
  pillars: ESGPillar[];
  timeline: ESGTimeline[];
  certifications: ESGCertification[];
  narrative: {
    title: string;
    subtitle: string;
    paragraphs: string[];
  };
  environmentalPillars?: EnvironmentalPillar[];
  socialImpact?: SocialImpact;
  communityPrograms?: CommunityProgram[];
  governance?: GovernanceItem[];
  carbonOffset?: CarbonOffset;
  sdgs?: SDGAlignment[];
  housingProject?: {
    headline: string;
    paragraphs: string[];
    stats: { value: number; suffix: string; label: string }[];
  };
  employeeDevelopment?: {
    headline: string;
    paragraphs: string[];
    programs: { title: string; desc: string }[];
  };
  promotingAwareness?: {
    headline: string;
    events: { title: string; desc: string }[];
  };
}

export const sustainabilityData: Record<string, {
  headline: string;
  subtitle: string;
  heroOverlayColor: string;
  initiatives: Initiative[];
  videos?: SustainabilityVideo[];
  blogs?: SustainabilityBlog[];
  esgReport?: ESGReport;
}> = {
  /* ── Costa Rica (shared across Gardens, Springs, Tented Camp) ── */
  "costa-rica": {
    headline: "Protecting the Rainforest",
    esgReport: {
      stats: [
        { value: 68, suffix: "+", label: "Acres Protected", detail: "Primary and secondary rainforest surrounding the resort, providing critical habitat for hundreds of species" },
        { value: 100, suffix: "%", label: "Carbon Neutral", detail: "Verified by EcoQualis using GHG Protocol - net-zero carbon footprint via certified carbon credits through FONAFIFO" },
        { value: 50000, suffix: "+", label: "Plants Restored", detail: "Over 50,000 small plants and 30,000 ornamental plants and native tree species planted in carefully planned reforestation sequence" },
        { value: 100, suffix: "%", label: "Renewable Energy", detail: "All electricity sourced from Coopelesca - hydroelectric, geothermal, wind, and solar power" },
        { value: 85, suffix: "%", label: "Local Workforce", detail: "85% of employees from La Fortuna and surrounding communities - largest employer in town" },
        { value: 95, suffix: "%", label: "LED Lighting", detail: "95% LED lighting across all three properties - 75% less energy than incandescent, with motion sensors in outdoor areas" },
      ],
      pillars: [
        {
          icon: "leaf",
          title: "Biodiversity & Conservation",
          metrics: [
            "68+ acres of primary and secondary rainforest protected",
            "Wildlife corridors connecting to Arenal Volcano National Park",
            "Cecropia trees planted specifically for sloth habitats",
            "Habitat for jaguars, ocelots, toucans, and 900+ bird species",
          ],
        },
        {
          icon: "energy",
          title: "Energy & Carbon",
          metrics: [
            "Full carbon neutrality achieved across all three properties",
            "Energy-efficient systems integrated into all buildings",
            "Modular construction methods minimizing environmental impact",
            "Continuous monitoring and reduction of greenhouse gas emissions",
          ],
        },
        {
          icon: "water",
          title: "Water & Waste",
          metrics: [
            "Comprehensive water conservation and recycling programs",
            "Graywater treatment and reuse for landscape irrigation",
            "Zero-waste kitchen philosophy across five restaurants",
            "Dedicated Green Committee overseeing waste management",
          ],
        },
        {
          icon: "community",
          title: "Community & Social",
          metrics: [
            "Subsidized housing project for staff - especially single mothers",
            "Free early education programs for employees' children",
            "Fair employment and professional growth opportunities",
            "Homes remain accessible regardless of employment status",
          ],
        },
        {
          icon: "design",
          title: "Sustainable Design",
          metrics: [
            "FSC-certified flooring throughout Tented Camp",
            "Elevated construction preserving heritage trees",
            "Native landscaping replacing invasive species",
            "Modular building methods reducing construction waste",
          ],
        },
        {
          icon: "food",
          title: "Zero-Kilometer Cuisine",
          metrics: [
            "Organic on-site gardens supplying five restaurants",
            "Local farms and fresh ingredients prioritized",
            "Seasonal, culturally authentic menus",
            "Reduced food miles and carbon emissions from sourcing",
          ],
        },
      ],
      timeline: [
        { year: "2007", title: "Nayara Gardens Opens", desc: "The first Nayara property opens in Arenal, Costa Rica - beginning the journey of luxury rooted in nature." },
        { year: "2013", title: "Nayara Springs Opens", desc: "A second property joins the collection, expanding the commitment to sustainable luxury with natural hot spring villas." },
        { year: "2018", title: "Tented Camp Reforestation Begins", desc: "A barren cattle ranch is acquired and large-scale reforestation begins - planting thousands of native trees and plants to restore the rainforest." },
        { year: "2019", title: "Nayara Tented Camp Opens", desc: "The tented camp opens with elevated, modular construction, FSC-certified materials, and a design philosophy that harmonizes with the restored rainforest." },
        { year: "2022", title: "Carbon Neutrality Achieved", desc: "All three Costa Rica properties achieve full carbon neutrality through comprehensive measurement and offsetting of greenhouse gas emissions." },
        { year: "2023", title: "Housing Initiative Launched", desc: "Nayara launches a subsidized housing project for staff - particularly single mothers - addressing the housing crisis in La Fortuna." },
        { year: "2025", title: "Green Globe Certification", desc: "Gardens, Springs, and Tented Camp all achieve the prestigious Green Globe Certification following an extensive evaluation of environmental, social, and governance practices." },
        { year: "2025", title: "Regenerative Tourism Model", desc: "Nayara Costa Rica is recognized as a global leader in regenerative tourism - not just sustaining, but actively improving local environments and communities." },
      ],
      certifications: [
        { name: "Green Globe", body: "Green Globe International", year: "2025", desc: "Standard 1.7, Hotel & Resort category. Internationally recognized certification for sustainable tourism, awarded after extensive evaluation of environmental, social, and governance policies across all three Costa Rica properties." },
        { name: "Carbon Neutral", body: "EcoQualis / GHG Protocol", year: "2026", desc: "Verified carbon neutral certification valid March 2026 to March 2027. Net-zero carbon footprint achieved through comprehensive measurement of Scope 1, 2, and 3 emissions and offsetting via certified carbon credits through FONAFIFO." },
      ],
      environmentalPillars: [
        {
          id: "reforestation",
          icon: "leaf",
          title: "Reforestation",
          subtitle: "From Barren Cattle Ranch to Thriving Rainforest",
          paragraphs: [
            "Where Nayara Tented Camp now stands was once a mountain severely degraded by years of human intervention \u2014 an empty, sterile landscape where no trees could grow and no wildlife survived. Through years of careful research and soil restoration, the land has been gradually brought back to its natural state, recreating conditions from over a century ago.",
            "Today it is a thriving ecosystem with lush vegetation where wildlife has naturally returned. Over 50,000 small plants were planted in a carefully planned sequence, alongside 30,000 ornamental plants and native tree species. Volcanic rocks were placed along trails to prevent erosion from heavy rainfall. Biologists were consulted to plant specific species that create shelter and breeding grounds for amphibians, including the iconic red-eyed tree frog.",
            "Guest engagement is central to the reforestation effort. Guided reforestation tours allow visitors to witness the transformation firsthand and participate in planting native species, creating a tangible connection between luxury travel and ecological restoration.",
          ],
          highlights: [
            { label: "Plants Restored", value: "50,000+" },
            { label: "Ornamental & Native Species", value: "30,000+" },
            { label: "Frog Habitat", value: "Biologist-Designed" },
            { label: "Guest Tours", value: "Guided Reforestation" },
          ],
        },
        {
          id: "energy",
          icon: "energy",
          title: "Energy Efficiency",
          subtitle: "100% Renewable, 95% LED, Zero Compromise",
          paragraphs: [
            "All electricity across Nayara Gardens, Nayara Springs, and Nayara Tented Camp is sourced from Coopelesca \u2014 a Costa Rican cooperative that generates power exclusively from renewable sources including hydroelectric, geothermal, wind, and solar energy. This means every light, every kitchen, every spa treatment runs on clean power.",
            "Across all three properties, 95% of lighting has been converted to LED technology, consuming 75% less energy than traditional incandescent bulbs. Motion-sensing technology in outdoor areas such as parking lots and photocell sensors for exterior lighting have achieved a 20% reduction in outdoor lighting energy costs. Electric golf cars provide low-emission mobility across the properties.",
            "Monthly energy consumption is carefully monitored, with the Green Committee reviewing data and setting reduction targets at regular meetings. Every operational decision is evaluated through the lens of energy efficiency.",
          ],
          highlights: [
            { label: "Renewable Energy", value: "100%" },
            { label: "LED Lighting", value: "95%" },
            { label: "Outdoor Energy Savings", value: "20%" },
            { label: "Transport", value: "Electric Golf Cars" },
          ],
        },
        {
          id: "water",
          icon: "water",
          title: "Water Conservation",
          subtitle: "Natural Sources, Thermal Wells, Complete Stewardship",
          paragraphs: [
            "Nayara\u2019s water stewardship begins with its natural sources. A thermal well located 4 kilometers from the properties provides geothermal water for the hot spring pools, requiring minimal treatment. This natural resource is the foundation of the wellness experience at Nayara Springs and Nayara Tented Camp.",
            "Laundry operations employ advanced water treatment processes that remove chemicals and purify water before discharge, ensuring no harmful substances enter the local watershed. Guest participation is encouraged through towel and linen reuse programs, with informational notes placed in every room explaining the environmental impact of daily laundering.",
            "The comprehensive approach to water conservation reflects Nayara\u2019s understanding that in a tropical rainforest environment, responsible water management is not about scarcity but about protecting the quality of an abundant and precious ecosystem.",
          ],
          highlights: [
            { label: "Thermal Source", value: "Natural Well" },
            { label: "Laundry Treatment", value: "Chemical Removal" },
            { label: "Guest Program", value: "Towel & Linen Reuse" },
            { label: "Discharge", value: "Purified" },
          ],
        },
        {
          id: "waste",
          icon: "waste",
          title: "Waste Management",
          subtitle: "10-Category Recycling, Zero Single-Use Plastics",
          paragraphs: [
            "Every guest room across all three properties is completely plastic-free. Reusable water bottles are provided to every guest, filled with locally sourced JungleSpring Water. Bamboo room keys have replaced plastic cards. Even waste bins throughout the property use paper alternatives instead of plastic liners.",
            "On-site waste is sorted into 10 categories for recycling, with dedicated sorting stations and local recycling collaborations ensuring maximum diversion from landfill. Food waste from the five restaurants is repurposed as animal feed for local farmers, closing the loop between kitchen and community. Supplier partnerships prioritize sustainable packaging, reducing waste at the source.",
            "The composting program transforms organic waste into valuable resources on-site, with a dedicated greenhouse where guests can learn about the process during Earth Day tours. Ongoing monitoring and goal-setting by the Green Committee ensures continuous improvement in waste reduction metrics.",
          ],
          highlights: [
            { label: "Recycling Categories", value: "10" },
            { label: "Single-Use Plastics", value: "Zero" },
            { label: "Room Keys", value: "Bamboo" },
            { label: "Food Waste", value: "Animal Feed & Compost" },
          ],
        },
      ],
      socialImpact: {
        headline: "People at the Center",
        subtitle: "Equity, Opportunity, and Dignity",
        paragraphs: [
          "Nayara Resorts is the largest employer in La Fortuna, with 85% of its workforce drawn from the local community, 10% from surrounding states, and just 5% from abroad. This commitment to local hiring ensures that the economic benefits of tourism flow directly into the community that hosts it.",
          "There is no wage inequality at Nayara \u2014 salaries are determined by position, not gender or background. The gender ratio of 60% men to 40% women continues to close, with equal access to jobs, training, and promotions for all employees. Remarkably, 95% of team leaders have been trained internally, reflecting a culture of professional development and upward mobility.",
          "Living wages exceed the national minimum, and the resort\u2019s impact extends far beyond its gates \u2014 an estimated 15% of La Fortuna\u2019s population is positively impacted by Nayara\u2019s operations, employment, and community programs.",
        ],
        stats: [
          { value: 85, suffix: "%", label: "Local Workforce" },
          { value: 95, suffix: "%", label: "Leaders Trained Internally" },
          { value: 15, suffix: "%", label: "Town Population Impacted" },
          { value: 0, suffix: "", label: "Wage Inequality" },
        ],
      },
      communityPrograms: [
        { title: "Proyecto ASIS", desc: "Staff volunteer at this wildlife refuge, supporting the rehabilitation and care of rescued animals in the Arenal region.", icon: "wildlife" },
        { title: "Early Education", desc: "Free early education programs for employees\u2019 children, ensuring access to quality learning from the earliest years.", icon: "education" },
        { title: "Community Meals", desc: "Free meals distribution as an ongoing community project, extending Nayara\u2019s kitchen beyond its restaurants.", icon: "food" },
        { title: "Orphanage Support", desc: "Financial support for local orphanages and artists, investing in the cultural and social fabric of La Fortuna.", icon: "heart" },
        { title: "Adifort Collaboration", desc: "Partnership with Adifort for social and environmental projects that benefit the broader Fortuna district.", icon: "community" },
        { title: "Friday Market", desc: "Every Friday, guests join guided visits to the local market with resort staff \u2014 discovering regional products, meeting vendors, and supporting local businesses.", icon: "market" },
      ],
      housingProject: {
        headline: "40 Homes for Our People",
        paragraphs: [
          "\u201COne of our most anticipated projects is the construction of 40 homes for specific staff members, such as single mothers. These homes will remain in the possession of the staff, regardless of whether they choose to leave Nayara at any point.\u201D \u2014 Jairo Quesada, General Manager",
          "The selection process prioritizes non-homeowner, vulnerable, single-parent families with minor children, considering tenure and commitment to the company. Nayara donates the land and labor, with employees paying only the cost of construction materials \u2014 making homeownership achievable for those who need it most.",
          "Working with BANHVI (Banco Hipotecario de la Vivienda), Nayara negotiates government subsidies to reduce total loan amounts. A financial advisor with over twenty years of experience provides ongoing guidance, and employees participate in a financial literacy program covering budgeting, saving, and managing credit responsibly.",
          "Since platforms like Airbnb were established, housing values in La Fortuna have increased dramatically and rental costs have become prohibitive. This initiative directly addresses that crisis \u2014 creating permanent, dignified housing that belongs to the families who call Nayara home.",
        ],
        stats: [
          { value: 40, suffix: "", label: "Homes Planned" },
          { value: 100, suffix: "%", label: "Land Donated" },
          { value: 100, suffix: "%", label: "Labor Donated" },
        ],
      },
      employeeDevelopment: {
        headline: "Developing People, Not Just Skills",
        paragraphs: [
          "\u201CWe don\u2019t train people. We develop people so that they can grow personally and professionally.\u201D \u2014 Leo Ghitis",
          "Nayara conducts ongoing training programs aimed at enhancing employee skills and knowledge across key areas. Tailored courses are offered to each department, ensuring every team member can actively contribute to Nayara\u2019s sustainability vision while delivering exceptional service. The hotel has implemented a structured sustainability workshop series in collaboration with EcoQualis, focusing on emissions, waste, water, and broader sustainability concepts.",
        ],
        programs: [
          { title: "Sustainability Training", desc: "Annual training for all departments on waste, water, and electricity reduction in collaboration with EcoQualis." },
          { title: "Financial Education", desc: "Covering financial planning, budgeting, saving, and responsible credit use for all employees." },
          { title: "Leadership Development", desc: "Courses enhancing management capabilities and leadership qualities for supervisors and managers." },
          { title: "Culinary Excellence", desc: "Chef exchange programs with three Michelin star restaurants in Argentina and Peru." },
          { title: "British Butler Institute", desc: "Top-tier service training through the internationally renowned British Butler Institute." },
          { title: "Cultural Competency", desc: "Customer service training focused on understanding and serving European guests and diverse cultures." },
          { title: "Food Safety & Handling", desc: "Comprehensive training for all food handling staff to manage food allergy issues and safety protocols." },
          { title: "Cyber Security", desc: "Best practices training for staff with access to digital systems and guest data." },
        ],
      },
      governance: [
        { title: "Green Committee", desc: "Department managers form the Green Committee, holding regular meetings to review sustainability initiatives including energy reduction, waste management, water conservation, and community programs. The committee executes and monitors the Sustainable Management Plan (SMP), setting new goals and driving continuous progress." },
        { title: "Sustainable Management Plan", desc: "A comprehensive framework governing all environmental, social, and governance practices across the three Costa Rica properties. The SMP is reviewed and updated regularly by the Green Committee to ensure alignment with evolving standards and certifications." },
        { title: "Third-Party Verification", desc: "All sustainability claims are independently verified \u2014 Green Globe International for environmental and social governance, EcoQualis for carbon neutrality using the GHG Protocol, and FONAFIFO for carbon offset investments supporting national reforestation." },
      ],
      carbonOffset: {
        headline: "Carbon Neutrality Through Partnership",
        paragraphs: [
          "Nayara Resorts is committed to reducing its environmental impact through a structured carbon offsetting strategy. The goal is to achieve and maintain carbon neutrality, offsetting Scope 1 and Scope 2 greenhouse gas emissions through the acquisition of certified carbon credits. Over time, this initiative will be progressively expanded to include additional areas of impact.",
          "This effort is developed in collaboration with FONAFIFO (Fondo Nacional de Financiamiento Forestal), a Costa Rican public institution whose mission is to implement financial mechanisms for environmental services across forests and ecosystems. Through this partnership, carbon offset investments directly support national reforestation and conservation programs, contributing to the regeneration of ecosystems and biodiversity.",
        ],
        partnerName: "FONAFIFO",
        partnerDesc: "Fondo Nacional de Financiamiento Forestal \u2014 a Costa Rican public institution promoting sustainable development by supporting those who actively preserve and restore natural resources through innovative public management.",
        guestProgram: "At the end of their stay, guests can choose to make a voluntary donation to further offset their travel footprint \u2014 actively contributing to environmental protection through certified carbon credit projects such as Nuevo Guanacaste.",
      },
      sdgs: [
        { number: 5, title: "Gender Equality", desc: "No wage inequality, female representation growing, equal access to jobs, training, and promotions." },
        { number: 6, title: "Clean Water", desc: "On-site water filtration, geothermal water for pools, laundry water treatment and purification." },
        { number: 7, title: "Affordable & Clean Energy", desc: "100% renewable energy via Coopelesca, 95% LED lighting, motion sensors, electric transport." },
        { number: 8, title: "Decent Work", desc: "Fair salaries above minimum wage, stability, inclusivity, local SME engagement, largest employer in town." },
        { number: 12, title: "Responsible Consumption", desc: "Food waste repurposed as animal feed, plastic-free rooms, 10-category recycling, sustainable packaging." },
        { number: 15, title: "Life on Land", desc: "Halt deforestation, restore degraded ecosystems, 50,000+ plants restored, FONAFIFO partnership." },
      ],
      promotingAwareness: {
        headline: "Engaging Guests & Staff",
        events: [
          { title: "Earth Day Composting Tours", desc: "Guests join guided tours of the property and greenhouse, learning about the composting process and how to replicate it at home. Organic waste is managed on-site and transformed into valuable resources." },
          { title: "Friday Market Visits", desc: "Every Friday, guests take part in guided visits to the local market accompanied by resort staff \u2014 discovering regional products, meeting local vendors, and engaging directly with the community." },
          { title: "International Recycling Day", desc: "Staff participate in a friendly competition to collect the most recyclable materials, with plans to extend the initiative to guests. The event raises awareness and encourages responsible waste behavior." },
        ],
      },
      narrative: {
        title: "A Forest Reborn",
        subtitle: "From Barren Ranch to Thriving Rainforest",
        paragraphs: [
          "Where Nayara Tented Camp now stands was once a barren cattle ranch - degraded land stripped of its native forest. Today, it is a thriving rainforest. Thousands of native trees have been planted, creating a dense canopy that supports an extraordinary diversity of life. Sloths hang from cecropia trees planted specifically for them. Toucans nest in the restored canopy. Jaguars and ocelots move through wildlife corridors that connect the property to Arenal Volcano National Park.",
          "This transformation did not happen by accident. It was the result of a deliberate, decade-long commitment to ecological restoration - guided by local biologists, indigenous knowledge, and a belief that luxury hospitality can be a force for environmental regeneration rather than degradation.",
          "The reforestation effort is complemented by a comprehensive approach to carbon neutrality. Every ton of greenhouse gas emitted by the resort's operations is carefully measured and offset. Energy-efficient systems, modular construction methods, and FSC-certified materials reduce the environmental footprint of the built environment. The zero-kilometer food philosophy - sourcing from organic on-site gardens and local farms - eliminates unnecessary food miles.",
          "But Nayara's commitment extends beyond the environment. The resort's housing initiative provides subsidized homes for staff members, particularly single mothers, addressing a housing crisis in La Fortuna driven by rising property costs and short-term rentals. These homes remain accessible regardless of employment status - a rare commitment in the hospitality industry. Free early education programs, fair employment practices, and community partnerships create a model of regenerative tourism that strengthens both ecosystems and communities.",
        ],
      },
    },
    subtitle: "Nayara Costa Rica",
    heroOverlayColor: "rgba(45, 106, 79, 0.75)",
    initiatives: [
      {
        title: "A Forest Reborn",
        desc: "Once a barren cattle ranch, Nayara Tented Camp has been transformed into a thriving rainforest through the planting of thousands of native trees. This large-scale reforestation restored biodiversity and created habitats for diverse wildlife - including sloths that now thrive among cecropia trees planted specifically for them. The property has achieved full carbon neutrality through careful measurement and offsetting of greenhouse gas emissions.",
      },
      {
        title: "Green Globe Certified",
        desc: "All three Costa Rica properties - Nayara Gardens, Nayara Springs, and Nayara Tented Camp - have achieved the prestigious Green Globe Certification following an extensive 2025 evaluation. A dedicated Green Committee oversees continuous staff training on waste management, energy efficiency, and water conservation, alongside ongoing reforestation programs and renewable energy sourcing.",
      },
      {
        title: "Sustainable Design & Zero-Kilometer Cuisine",
        desc: "Nayara Tented Camp exemplifies sustainable luxury through modular building methods, FSC-certified flooring, energy-efficient systems, and the preservation of heritage trees with native landscaping. Across all properties, the zero-kilometer food philosophy prioritizes local farms and fresh ingredients - reducing carbon emissions and delivering seasonal, culturally authentic cuisine.",
      },
      {
        title: "Housing Initiative & Community",
        desc: "Regenerative tourism extends beyond the environment. Nayara supports fair employment, professional growth, free early education, and community initiatives. One of its proudest achievements is a subsidized housing project for staff - particularly single mothers - addressing the housing crisis in La Fortuna caused by rising property costs. These homes remain accessible regardless of employment status, creating long-term stability.",
      },
    ],
    videos: [
      {
        title: "Leo Ghitis: Pioneering Sustainable Luxury",
        guest: "Leo Ghitis",
        description: "Leo Ghitis on how Nayara Resorts is pioneering sustainable luxury travel - from the first eco-lodges to regenerative tourism across six destinations.",
        youtubeId: "7l072Yr__pE",
        duration: "45 min",
      },

      {
        title: "Suite Success: Leo Ghitis on Nayara Resorts",
        guest: "Leo Ghitis",
        description: "Suite Success podcast - Leo Ghitis shares the story of building Nayara Resorts from a single Costa Rica property to a global collection of six destinations.",
        youtubeId: "X_lTp6Jh8ag",
        duration: "40 min",
      },
    ],
    blogs: [
      {
        title: "Wildlife Conservation in Arenal",
        excerpt: "From sloths to sea turtles - how Nayara Resorts protects wildlife across Costa Rica's rainforests and Panama's Caribbean coast.",
        image: "/manus-storage/tented-sloth-drinking_18446c6a.jpg",
        url: "https://blog.nayararesorts.com/wildlife-conservation-in-arenal-and-bocas-del-toro",
      },


      {
        title: "Women's Empowerment Through Housing in La Fortuna",
        excerpt: "How Nayara Resorts is building homes and empowering women in La Fortuna through community-driven housing initiatives.",
        image: "https://blog.nayararesorts.com/hubfs/PHOTO-2026-03-02-19-55-27.jpg",
        url: "https://blog.nayararesorts.com/womens-empowerment-through-housing-in-costa-ricas-la-fortuna",
      },
    ],
  },

  /* ── Alto Atacama ── */
  "alto-atacama": {
    headline: "Guardians of the Desert",
    esgReport: {
      stats: [
        { value: 1, suffix: "+", label: "Ton CO\u2082 Offset / Year", detail: "Visionary solar energy project mitigates over a ton of CO\u2082 emissions annually with state-of-the-art panels blending into the desert landscape" },
        { value: 100, suffix: "%", label: "Water Reuse", detail: "Well water treated through reverse osmosis for consumption, then reused for irrigation - complete self-sufficiency in the world's driest desert" },
        { value: 10000, suffix: "+", label: "Years of Human Adaptation", detail: "The Atacameño people have inhabited this desert for over 10,000 years - Nayara honors their legacy through cultural preservation and community partnerships" },
      ],
      pillars: [
        {
          icon: "energy",
          title: "Solar Energy & Carbon Reduction",
          metrics: [
            "State-of-the-art solar panels offsetting 1+ ton CO\u2082 annually",
            "Panels blend seamlessly into the desert landscape",
            "Continuous expansion of photovoltaic capacity",
            "S Certification validates comprehensive sustainability practices",
          ],
        },
        {
          icon: "design",
          title: "Passive Adobe Architecture",
          metrics: [
            "Adobe rooms strategically oriented for solar warmth and natural ventilation",
            "Special thermal insulation retains warmth in winter, cool in summer",
            "Minimizes need for artificial heating and cooling systems",
            "Traditional construction methods adapted for modern luxury",
          ],
        },
        {
          icon: "water",
          title: "Water Stewardship",
          metrics: [
            "Well water treated through reverse osmosis for safe consumption",
            "100% water reuse - treated water irrigates gardens and greenery",
            "Circular water system achieving complete self-sufficiency",
            "Graywater recycling reinforces responsible desert operations",
          ],
        },
        {
          icon: "community",
          title: "Community & Culture",
          metrics: [
            "Education programs and scholarships for local communities",
            "Local sourcing prioritized for food and materials",
            "Cultural preservation of Atacameño heritage and traditions",
            "Fair employment and professional development opportunities",
          ],
        },
        {
          icon: "leaf",
          title: "Desert Ecosystem Protection",
          metrics: [
            "Comprehensive waste reduction programs",
            "Protection of fragile desert flora and fauna",
            "Responsible land use minimizing ecological footprint",
            "Support for vicuña, flamingo, and endemic species conservation",
          ],
        },
        {
          icon: "food",
          title: "Zero-Kilometer Cuisine",
          metrics: [
            "Local farms and Atacameño ingredients prioritized",
            "Fresh seafood sourced from Chile's Pacific coast",
            "Seasonal, culturally authentic Andean menus",
            "Reduced food miles supporting regional economies",
          ],
        },
      ],
      timeline: [
        { year: "2007", title: "Alto Atacama Founded", desc: "Nayara Alto Atacama opens in Chile's San Pedro de Atacama - an oasis of luxury in the world's driest desert, built with traditional adobe construction." },
        { year: "2012", title: "Solar Energy Initiative", desc: "State-of-the-art solar panels installed, beginning the journey toward energy independence and offsetting over a ton of CO\u2082 emissions annually." },
        { year: "2018", title: "Water Reuse System", desc: "Complete circular water system implemented - reverse osmosis treatment for consumption, 100% reuse for irrigation in the arid landscape." },
        { year: "2020", title: "Community Programs Expanded", desc: "Education scholarships and cultural preservation initiatives expanded to support Atacameño communities and protect indigenous heritage." },
        { year: "2023", title: "S Certification Achieved", desc: "Nayara Alto Atacama becomes the only luxury hotel in the region certified with the S Seal of Sustainable Tourism, validated by the GSTC." },
        { year: "2025", title: "Regenerative Desert Model", desc: "Recognized as a model for sustainable luxury in extreme environments - proving that responsible tourism can thrive even in the world's driest desert." },
      ],
      certifications: [
        { name: "S", body: "Global Sustainable Tourism Council (GSTC)", year: "2023", desc: "Chile's S Seal of Sustainable Tourism - internationally validated by the Global Sustainable Tourism Council. Nayara Alto Atacama is the only luxury hotel in the Atacama region to achieve this distinction, recognizing comprehensive sustainability practices across environmental stewardship, community engagement, cultural preservation, and responsible operations." },
      ],
      narrative: {
        title: "An Oasis of Responsibility",
        subtitle: "Sustainable Luxury in the World's Driest Desert",
        paragraphs: [
          "The Atacama Desert presents one of the most extreme environments on Earth - a place where rainfall is measured in millimeters per decade and temperatures swing 30 degrees between day and night. Building a luxury resort here demands not just ambition but a profound respect for the land and its limits. Nayara Alto Atacama was designed from the ground up to work with the desert, not against it.",
          "The resort's adobe architecture draws on thousands of years of Atacameño building tradition. Thick earthen walls capture solar warmth during the day and release it slowly through the night, while strategic orientation maximizes natural ventilation and minimizes the need for artificial climate control. A special thermal insulation layer - invisible to guests - ensures comfort in every season without excessive energy consumption.",
          "Water, the desert's most precious resource, is treated with extraordinary care. Well water undergoes reverse osmosis purification for safe consumption, then begins a second life irrigating the resort's gardens and greenery. This circular system achieves complete self-sufficiency - a remarkable feat in a landscape where every drop matters. Meanwhile, state-of-the-art solar panels harness the Atacama's legendary sunshine to offset over a ton of CO\u2082 emissions annually.",
          "But Nayara's commitment extends beyond infrastructure. The resort actively supports Atacameño communities through education programs, scholarships, and cultural preservation initiatives. Local sourcing is prioritized for both food and materials, reducing carbon emissions while strengthening regional economies. As the only luxury hotel in the region certified with the S Seal of Sustainable Tourism - validated by the Global Sustainable Tourism Council - Nayara Alto Atacama proves that even in the harshest environments, luxury and responsibility can coexist.",
        ],
      },
    },
    subtitle: "Nayara Alto Atacama",
    heroOverlayColor: "rgba(139, 90, 60, 0.75)",
    initiatives: [
      {
        title: "S Certification: A Solar Success Story",
        desc: "As the only luxury hotel in the region with the \"S\" Certification for Sustainable Tourism - internationally validated by the Global Sustainable Tourism Council (GSTC) - Nayara Alto Atacama stands as a leader in environmental stewardship. A visionary solar energy project now mitigates over a ton of CO\u2082 emissions annually, with state-of-the-art panels blending seamlessly into the desert landscape.",
      },
      {
        title: "Eco-Conscious Adobe Design",
        desc: "Nestled within the desert, the hotel's adobe rooms reflect thoughtful sustainable design. Strategically oriented to capture solar warmth and natural ventilation, they minimize the need for artificial heating and cooling. A special thermal insulation layer retains warmth during winter while maintaining cool interiors in summer - every element reflects Nayara's dedication to sustainability and guest comfort.",
      },
      {
        title: "Water Stewardship in the Driest Desert",
        desc: "Water conservation is central to operations. Well water is treated through reverse osmosis for safe consumption, then reused for irrigation - giving it a second life that nourishes gardens and supports greenery in the arid landscape. This circular approach ensures complete self-sufficiency in the world's driest desert.",
      },
      {
        title: "Community & Cultural Preservation",
        desc: "Beyond architectural sustainability and renewable energy, Nayara Alto Atacama actively supports local communities through education programs, scholarships, local sourcing, and cultural preservation initiatives. Comprehensive waste reduction and graywater reuse programs reinforce a circular and responsible operational model that protects the fragile desert ecosystem.",
      },
    ],
    videos: [
      {
        title: "Nayara Alto Atacama Sustainability",
        guest: "Nayara Resorts",
        description: "How Nayara Alto Atacama operates sustainably in the driest desert on Earth - solar energy, adobe architecture, and 100% water reuse.",
        youtubeId: "6cfkWsqWWc8",
        duration: "3 min",
        altYoutubeId: "H9VxyDgv31U",
        altLanguage: "ES",
        altDuration: "1 min",
      },
    ],
    blogs: [
      {
        title: "Wildlife Conservation in Chile's Atacama Desert and Easter Island",
        excerpt: "Vicuñas, flamingos, and endemic species - conservation efforts protecting Chile's most fragile ecosystems.",
        image: "/manus-storage/atacama-stargazing-new_d90af018.jpg",
        url: "https://blog.nayararesorts.com/wildlife-conservation-in-chiles-atacama-desert-and-easter-island",
      },
      {
        title: "Sunlit Sustainability: Nature-Powered",
        excerpt: "Explore how Nayara Resorts harnesses solar power for sustainable luxury, from the Atacama Desert to Easter Island.",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-salt-flats-flamingos_0ee14564.jpg",
        url: "https://blog.nayararesorts.com/sunlit-sustainability-powered-by-nature-clone",
      },
      {
        title: "Rooted in Community: Human Hospitality",
        excerpt: "Explore how Nayara Resorts' commitment to community and regenerative travel transforms lives and landscapes.",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-atacama-dusk-resort_b5829c95.webp",
        url: "https://blog.nayararesorts.com/rooted-in-community-the-human-side-of-hospitality",
      },
      {
        title: "The Best Place to Stay in the Atacama Desert Is an Oasis",
        excerpt: "Why a functioning oasis is not an amenity but the foundation of the experience - the science of desert microclimates and 10,000 years of human adaptation.",
        image: "/manus-storage/atacama-pool-sunset-new_c0361231.jpg",
        url: "/journal/best-place-to-stay-atacama-desert-oasis",
      },
      {
        title: "Bocas del Toro & Alto Atacama: A Study in Sustainability",
        excerpt: "How Nayara's properties in Panama and Chile are leading sustainable tourism - off-grid solar power, coral restoration, and Chile's S Certification.",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/piedras-rojas-atacama_8f1c8c28.webp",
        url: "/journal/bocas-atacama-sustainability-study",
      },
    ],
  },

  /* ── Bocas del Toro ── */
  "bocas-del-toro": {
    headline: "Island Stewardship",
    esgReport: {
      stats: [
        { value: 100, suffix: "%", label: "Solar Powered", detail: "Nearly 100% of the resort's energy is generated by on-site solar panels - a fully off-grid model of self-sufficient luxury" },
        { value: 100000, suffix: "", label: "Gallon Rainwater Capacity", detail: "Custom gutter systems collect rainfall into catchment basins holding up to 100,000 gallons, purified with advanced UV filtration" },
        { value: 50, suffix: "ft", label: "Treehouse Canopy Height", detail: "IBUKU-designed bamboo treehouses rise 50 feet above the forest floor, crafted from locally sourced bamboo and reclaimed Panama Canal wood" },
      ],
      pillars: [
        {
          icon: "energy",
          title: "Off-Grid Solar Power",
          metrics: [
            "Nearly 100% of energy generated by on-site solar panels",
            "Completely off-grid - no connection to external power infrastructure",
            "Custom-designed power systems built for island conditions",
            "Continuous monitoring of energy performance and efficiency",
          ],
        },
        {
          icon: "water",
          title: "Rainwater Harvesting",
          metrics: [
            "100,000-gallon catchment capacity from custom gutter systems",
            "Advanced ultraviolet filtration for drinking, bathing, and cooking",
            "Complete freshwater self-sufficiency from rainfall alone",
            "Custom wastewater treatment systems protecting marine ecosystems",
          ],
        },
        {
          icon: "design",
          title: "Stilts & Sustainable Construction",
          metrics: [
            "Built entirely on stilts to protect native mangroves and coral reefs",
            "IBUKU-designed treehouses from locally sourced bamboo",
            "Reclaimed hardwoods including historic Panama Canal wood",
            "World's first floating beach preserving ecosystems below",
          ],
        },
        {
          icon: "leaf",
          title: "Marine & Ecosystem Protection",
          metrics: [
            "Coral reef monitoring and sustainable diving practices",
            "Partnerships with marine biologists for reef restoration",
            "Mangrove ecosystem preservation through stilt construction",
            "Comprehensive waste management and environmental monitoring",
          ],
        },
        {
          icon: "community",
          title: "Ng\u00e4be-Bugl\u00e9 Community Partnerships",
          metrics: [
            "Fair employment and cultural exchange programs",
            "Support for traditional crafts and indigenous knowledge",
            "Local sourcing of materials and labor",
            "Community engagement and capacity building initiatives",
          ],
        },
        {
          icon: "food",
          title: "Island-to-Table Cuisine",
          metrics: [
            "Fresh seafood sourced directly from surrounding Caribbean waters",
            "Local farms and artisan producers prioritized",
            "Seasonal menus reflecting Bocas del Toro's culinary heritage",
            "Reduced food miles through regional sourcing networks",
          ],
        },
      ],
      timeline: [
        { year: "2020", title: "Environmental Impact Studies", desc: "Extensive environmental studies conducted to design a resort that protects native mangroves and coral reefs - leading to the decision to build entirely on stilts." },
        { year: "2021", title: "IBUKU Treehouse Design", desc: "Partnership with IBUKU to design iconic bamboo treehouses using locally sourced materials and reclaimed hardwoods from the Panama Canal." },
        { year: "2022", title: "Off-Grid Systems Installed", desc: "Custom-built solar, water, and wastewater systems completed - achieving nearly 100% solar power and complete freshwater self-sufficiency from rainwater." },
        { year: "2023", title: "Nayara Bocas del Toro Opens", desc: "The resort opens as a model of self-sufficient luxury - fully off-grid, built on stilts, with the world's first floating beach." },
        { year: "2024", title: "Green Globe Certification", desc: "Recognized with Green Globe Certification following comprehensive evaluation of environmental, social, and governance practices." },
        { year: "2025", title: "Marine Conservation Expansion", desc: "Expanded coral reef restoration and marine monitoring programs in partnership with marine biologists and the Ng\u00e4be-Bugl\u00e9 community." },
      ],
      certifications: [
        { name: "Green Globe", body: "Green Globe International", year: "2024", desc: "Internationally recognized certification for sustainable tourism, awarded after extensive evaluation of off-grid operations, sustainable construction, marine ecosystem protection, and community engagement at Nayara Bocas del Toro." },
      ],
      narrative: {
        title: "Sustainability on Stilts",
        subtitle: "A Private Island Built to Protect What Lies Beneath",
        paragraphs: [
          "When Nayara set out to build on a private mangrove island in Panama's Bocas del Toro archipelago, the first question was not what to build - but how to build without destroying what was already there. Extensive environmental impact studies revealed a fragile ecosystem of mangroves and coral reefs that could not survive traditional construction. The answer was radical: build everything on stilts.",
          "The entire resort - villas, restaurants, walkways, and even the beach - rises above the water and forest floor on carefully engineered stilts. The world's first floating beach was created not as a novelty but as a necessity, preserving the delicate ecosystems below. The iconic treehouses, designed by the renowned IBUKU studio, soar 50 feet above the forest floor, crafted from locally sourced bamboo and reclaimed hardwoods - including historic wood recovered from the Panama Canal.",
          "The island operates completely off-grid. Custom-built solar panels generate nearly 100% of the resort's energy. Freshwater comes entirely from rainwater, collected through custom gutter systems into catchment basins holding up to 100,000 gallons, then purified using advanced ultraviolet filtration. Custom wastewater treatment systems ensure nothing harmful returns to the surrounding waters. Every system was designed from scratch for the unique conditions of a Caribbean mangrove island.",
          "Beyond infrastructure, Nayara Bocas del Toro is deeply rooted in its community. Partnerships with the Ng\u00e4be-Bugl\u00e9 indigenous communities provide fair employment, cultural exchange, and support for traditional crafts. Marine biologists work alongside the resort to monitor coral reefs and develop sustainable diving practices. Green Globe Certification in 2024 recognized what was already evident: this is a resort that exists because of its environment, not in spite of it.",
        ],
      },
    },
    subtitle: "Nayara Bocas del Toro",
    heroOverlayColor: "rgba(58, 107, 107, 0.75)",
    initiatives: [
      {
        title: "Sustainability on Stilts",
        desc: "Sustainability was embedded into Nayara Bocas del Toro from the very beginning. After extensive environmental studies, the resort was built entirely on stilts to protect native mangroves and coral reefs. With no natural beaches on the mangrove island, the world's first floating beach was created - also on stilts - preserving the delicate ecosystems below.",
      },
      {
        title: "100% Solar & Off-Grid",
        desc: "The resort operates completely off-grid, with custom-built water, power, and wastewater systems designed for the island. Nearly 100% of the hotel's energy needs are generated by solar power, making it a model of self-sufficient luxury. Green Globe Certified, the property continuously monitors environmental performance.",
      },
      {
        title: "Rainwater Harvesting & IBUKU Treehouses",
        desc: "Nayara Bocas del Toro relies entirely on rainwater harvesting for its freshwater needs. Custom gutter systems collect rainfall into catchment basins holding up to 100,000 gallons, purified using advanced ultraviolet filtration. The iconic treehouses, designed by IBUKU, are crafted from locally sourced bamboo and reclaimed hardwoods - including historic wood recovered from the Panama Canal.",
      },
      {
        title: "Marine & Community Stewardship",
        desc: "Protecting coral reefs and marine ecosystems through reef monitoring, sustainable diving practices, and partnerships with marine biologists. The resort partners with the Ng\u00e4be-Bugl\u00e9 indigenous communities through fair employment, cultural exchange programs, and support for traditional crafts - while comprehensive waste management programs ensure responsible operations.",
      },
    ],
    videos: [
      {
        title: "Coral Reef Restoration",
        guest: "Coming Soon",
        description: "A deep dive into Nayara Bocas del Toro's coral reef restoration program - protecting the marine ecosystems of Panama's Caribbean archipelago.",
        youtubeId: "",
        duration: "Coming Soon",
      },
    ],
    blogs: [
      {
        title: "Biodensity, Underwater Mountains, and More",
        excerpt: "A deep dive into the marine biodensity of Bocas del Toro - underwater mountains, coral reefs, and the ecosystems that sustain them.",
        image: "/manus-storage/bocas-aerial-island_34b68171.jpg",
        url: "https://blog.nayararesorts.com/biodensity-underwater-mountains-and-more-a-different-perspective-on-our-ecosystems",
      },
      {
        title: "Wildlife Conservation in Arenal",
        excerpt: "From sloths to sea turtles - how Nayara Resorts protects wildlife across Costa Rica's rainforests and Panama's Caribbean islands.",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-sunset_2eeaa785.jpg",
        url: "https://blog.nayararesorts.com/wildlife-conservation-in-arenal-and-bocas-del-toro",
      },
      {
        title: "Condé Nast Traveler 2025: #1 Resort in Central America",
        excerpt: "Why the future of overwater luxury belongs to a private island in Panama - Nayara Bocas del Toro named #1 by Condé Nast Traveler.",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-aerial-villas-walkway_66b2f48e.jpg",
        url: "/journal/conde-nast-bocas-del-toro",
      },
      {
        title: "Bocas del Toro & Alto Atacama: A Study in Sustainability",
        excerpt: "How Nayara's properties in Panama and Chile are leading sustainable tourism - off-grid solar power, coral restoration, and Chile's S Certification.",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-aerial-villas-mangroves_9d5e94f5.jpg",
        url: "/journal/bocas-atacama-sustainability-study",
      },
      {
        title: "Nayara Resorts Partners with One Ocean Planet",
        excerpt: "A new partnership with One Ocean Planet brings marine conservation, coral restoration, and ocean education to the heart of Nayara Bocas del Toro.",
        image: "https://blog.nayararesorts.com/hubfs/NAYARA%20BOCAS%20DEL%20TORO-42.jpg",
        url: "https://blog.nayararesorts.com/nayara-resorts-partners-with-one-ocean-planet",
      },

    ],
  },

  /* ── Hangaroa ── */
  hangaroa: {
    headline: "Ancient Island, Living Future",
    esgReport: {
      stats: [
        { value: 1, suffix: "", label: "S Certification (GSTC)", detail: "The only luxury hotel on Easter Island certified with the S Seal of Sustainable Tourism, internationally validated by the Global Sustainable Tourism Council" },
        { value: 1000, suffix: "s", label: "Endemic Species Planted", detail: "Thousands of toromiro, mahute, and makoi planted annually to restore Rapa Nui's original ecosystem and provide habitat for native birds and insects" },
        { value: 100, suffix: "%", label: "Graywater Recycled", detail: "Wastewater treatment plant recycles all graywater for irrigation, conserving water and maintaining vibrant landscapes on the remote island" },
      ],
      pillars: [
        {
          icon: "design",
          title: "Green Roofs & Kainga Design",
          metrics: [
            "Green roofs cool buildings naturally while blending into volcanic landscape",
            "Architecture inspired by Rapa Nui Kainga philosophy",
            "Design reflects the iconic Orongo ceremonial village",
            "Honors archaeological heritage while preserving natural resources",
          ],
        },
        {
          icon: "energy",
          title: "Renewable Energy",
          metrics: [
            "Solar plant complements energy supply through renewable sources",
            "Significant reduction in dependence on Rapa Nui's fragile electrical system",
            "Decreases carbon emissions and relieves pressure on island infrastructure",
            "Commitment to long-term protection of Pacific ecosystems",
          ],
        },
        {
          icon: "water",
          title: "Water & Waste Management",
          metrics: [
            "Wastewater treatment plant recycles 100% of graywater for irrigation",
            "Comprehensive waste management programs with recycling points",
            "Coastal cleanups led by staff protecting shoreline ecosystems",
            "Circular operational model minimizing environmental impact",
          ],
        },
        {
          icon: "leaf",
          title: "Ecosystem Restoration",
          metrics: [
            "Thousands of endemic species planted annually (toromiro, mahute, makoi)",
            "Restoring Rapa Nui's original pre-deforestation ecosystem",
            "Creating habitat for native birds and insects",
            "Supporting the Rapa Nui Marine Protected Area",
          ],
        },
        {
          icon: "community",
          title: "Rapa Nui Cultural Preservation",
          metrics: [
            "Education programs and scholarships for island communities",
            "Cultural preservation of Rapa Nui traditions and knowledge",
            "Local sourcing prioritized for food and materials",
            "Fair employment supporting the island's small population",
          ],
        },
        {
          icon: "food",
          title: "Pacific Island Cuisine",
          metrics: [
            "Fresh seafood sourced from surrounding Pacific waters",
            "Local Rapa Nui ingredients and traditional preparations",
            "Seasonal menus reflecting Polynesian culinary heritage",
            "Zero-kilometer philosophy adapted for remote island conditions",
          ],
        },
      ],
      timeline: [
        { year: "2012", title: "Nayara Hangaroa Opens", desc: "Nayara Hangaroa opens on Easter Island with green roof architecture inspired by the Rapa Nui Kainga philosophy \u2014 the first luxury hotel designed to honor the island's archaeological heritage." },
        { year: "2015", title: "Endemic Species Program", desc: "Large-scale planting of toromiro, mahute, and makoi begins \u2014 restoring three key endemic species to help rebuild Rapa Nui's pre-deforestation ecosystem." },
        { year: "2018", title: "Solar Plant Installed", desc: "A solar plant is installed to complement the hotel's energy supply, reducing dependence on Rapa Nui's fragile electrical grid and decreasing carbon emissions." },
        { year: "2020", title: "Graywater Recycling System", desc: "Wastewater treatment plant begins recycling 100% of graywater for irrigation, conserving water and maintaining vibrant landscapes on the remote island." },
        { year: "2023", title: "S Certification Achieved", desc: "Nayara Hangaroa becomes the only luxury hotel on Easter Island certified with the S Seal of Sustainable Tourism, validated by the GSTC." },
        { year: "2025", title: "Marine Protected Area Support", desc: "Expanded support for the Rapa Nui Marine Protected Area \u2014 one of the largest in the world \u2014 through marine research partnerships and coastal conservation programs." },
      ],
      certifications: [
        { name: "S Seal of Sustainable Tourism", body: "Global Sustainable Tourism Council (GSTC)", year: "2023", desc: "Internationally validated certification recognizing comprehensive sustainability practices \u2014 the only luxury hotel on Easter Island to achieve this distinction. Covers environmental stewardship, cultural preservation, community engagement, and responsible island operations." },
      ],
      narrative: {
        title: "Guardians of the Most Remote Island",
        subtitle: "Where Every Resource Decision Carries Extraordinary Weight",
        paragraphs: [
          "Easter Island sits 3,800 kilometers from the nearest continent \u2014 one of the most remote inhabited places on Earth. Everything that arrives here \u2014 fuel, food, building materials \u2014 crosses an ocean. Everything that leaves \u2014 waste, wastewater, emissions \u2014 enters one of the planet's most fragile ecosystems. On Rapa Nui, sustainability is not a corporate initiative. It is a survival imperative.",
          "Nayara Hangaroa was designed with this reality at its foundation. The green roofs that define the hotel's silhouette are not decorative \u2014 they cool buildings naturally, reduce energy consumption, and blend the architecture into the volcanic landscape. The design draws on the Rapa Nui Kainga philosophy and reflects the iconic Orongo ceremonial village, honoring centuries of indigenous architectural wisdom.",
          "Beneath the surface, the hotel's systems work quietly to minimize its footprint. A solar plant reduces dependence on the island's fragile electrical grid. A wastewater treatment plant recycles 100% of graywater for irrigation, conserving water in a place where every drop is precious. Comprehensive waste management programs, recycling points, and regular coastal cleanups \u2014 led by staff \u2014 keep the island's shorelines clean.",
          "But perhaps the most meaningful work happens in the soil. Each year, thousands of endemic species \u2014 toromiro, mahute, and makoi \u2014 are planted to restore the ecosystem that was devastated by centuries of deforestation. These plantings create habitat for native birds and insects, slowly rebuilding what was lost. Combined with support for the Rapa Nui Marine Protected Area, education programs, scholarships, and cultural preservation initiatives, Nayara Hangaroa is not just a hotel on Easter Island. It is a partner in the island's regeneration.",
        ],
      },
    },
    subtitle: "Nayara Hangaroa",
    heroOverlayColor: "rgba(94, 85, 73, 0.75)",
    initiatives: [
      {
        title: "Green Roofs, Cultural Roots",
        desc: "Nayara Hangaroa embraces sustainable design inspired by the Rapa Nui \"Kainga\" philosophy. Its green roofs cool buildings naturally while blending seamlessly into the volcanic landscape. The architecture honors archaeological heritage and reflects the iconic Orongo ceremonial village - immersing guests in culture and nature.",
      },
      {
        title: "S Seal of Sustainable Tourism",
        desc: "Nayara Hangaroa is the only luxury hotel on Easter Island certified with the S Seal of Sustainable Tourism, internationally validated by the Global Sustainable Tourism Council (GSTC). The property actively supports local communities through education programs, scholarships, local sourcing, and cultural preservation initiatives.",
      },
      {
        title: "Renewable Energy & Water Conservation",
        desc: "A solar plant complements the hotel's energy supply through renewable sources, significantly reducing dependence on Rapa Nui's fragile electrical system and decreasing carbon emissions. The wastewater treatment plant recycles graywater for irrigation, conserving water and maintaining vibrant landscapes while protecting Easter Island's fragile ecosystem.",
      },
      {
        title: "Preserving Rapa Nui",
        desc: "The hotel operates comprehensive waste management programs with recycling points and coastal cleanups led by staff. Planting thousands of endemic species each year - including toromiro, mahute, and makoi - Nayara works to restore the island's original ecosystem and provide habitat for native birds and insects, while supporting marine research and the Rapa Nui Marine Protected Area.",
      },
    ],
    videos: [
      {
        title: "The Guardians of Rapa Nui",
        guest: "Hitorangi Family",
        description: "An intimate conversation with the Hitorangi family about preserving Rapa Nui's cultural heritage, the future of Easter Island, and what it means to be guardians of one of the world's most remote civilizations.",
        youtubeId: "FRPVRcUTNmk",
        duration: "45 min",
      },
      {
        title: "Uncovering Rapa Nui: An Archaeologist's Perspective",
        guest: "Archaeologist",
        description: "A deep dive into the archaeological mysteries of Easter Island - from moai construction techniques to new discoveries that challenge everything we thought we knew about Rapa Nui civilization.",
        youtubeId: "qFVLTTJa7hE",
        duration: "38 min",
      },
      {
        title: "Nayara Hangaroa Sustainability",
        guest: "Nayara Resorts",
        description: "Nayara Hangaroa's commitment to sustainability on Rapa Nui - renewable energy, water conservation, plastic elimination, cultural preservation, and community support.",
        youtubeId: "_M3ATv4I0B8",
        duration: "3 min",
        altYoutubeId: "EinNAkAoKE8",
        altLanguage: "ES",
        altDuration: "3:30 min",
      },
    ],
    blogs: [
      {
        title: "How Nayara Hangaroa Leads Regeneration on Rapa Nui",
        excerpt: "Rapa Nui's Hito family leads cultural and ecological regeneration. Learn how moai traditions, reforestation, and community shape the island's future.",
        image: "https://blog.nayararesorts.com/hubfs/9-Aug-11-2025-08-40-19-5669-PM.png",
        url: "/journal/hangaroa-regeneration-rapa-nui",
      },
      {
        title: "A Collapse That Wasn't: What the Maya and Rapa Nui Teach Us",
        excerpt: "The Maya and Rapa Nui civilizations didn't collapse - they adapted. What their resilience teaches us about climate, survival, and cultural continuity.",
        image: "https://blog.nayararesorts.com/hubfs/Photo%20Jan%2014%202026%2c%2007%2042%2012.j",
        url: "https://blog.nayararesorts.com/a-collapse-that-wasnt-a-collapse",
      },
      {
        title: "Wildlife Conservation in Chile's Atacama Desert and Easter Island",
        excerpt: "Vicuñas, flamingos, and endemic species - conservation efforts protecting Chile's most fragile ecosystems.",
        image: "https://blog.nayararesorts.com/hubfs/Im%C3%A1genes%20BLOGS/Challenge%20Easter%20Island%E2%80%99s%20Outdoors%20with%20Nayara%20Hangaroa%20(3",
        url: "https://blog.nayararesorts.com/wildlife-conservation-in-chiles-atacama-desert-and-easter-island",
      },
      {
        title: "Ancient Origins of Nature-Based Wellness: Lessons from Easter Island",
        excerpt: "Easter Island's Polynesian heritage holds ancient wellness wisdom - from ocean immersion to volcanic mineral baths and celestial navigation.",
        image: "https://blog.nayararesorts.com/hubfs/Im%C3%A1genes%20BLOGS/Drawing%20from%20Time",
        url: "https://blog.nayararesorts.com/ancient-origins-of-nature-based-wellness-lessons-from-easter-island-and-polynesia",
      },
      {
        title: "What Is Tapati Rapa Nui and Why It Matters",
        excerpt: "Each February, Rapa Nui enters a different rhythm. Tapati is a two-week cultural festival where athletic competition, music, craftsmanship, and ancestral ritual converge - a living system of cultural transmission.",
        image: "https://blog.nayararesorts.com/hubfs/Im%C3%A1genes%20BLOGS/Tapati%20Rapa%20Nui",
        url: "https://blog.nayararesorts.com/the-tapati-rapa-nui-festival-at-nayara-hangaroa",
      },
    ],
  },
};

/** Map property slug to sustainability data key */
export function getSustainabilityKey(slug: string): string {
  const crSlugs = ["tented-camp", "gardens", "springs"];
  if (crSlugs.includes(slug)) return "costa-rica";
  return slug;
}
