/**
 * AWARDS DATA — Per-property award badges with CDN logos
 * Each property has its own set of awards integrated into the Story section
 */

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

export interface Award {
  id: string;
  name: string;
  description: string;
  logo: string;
  year?: string;
}

/* ── Logo URLs ────────────────────────────────────────── */
const LOGOS = {
  michelin3: `${CDN}/michelin-3-keys_10864925.png`,
  michelin2: `${CDN}/michelin-3-keys_10864925.png`, // same badge, text differentiates
  greenGlobe: `${CDN}/green-globe-certified_e8492096.png`,
  relaisChateaux: `${CDN}/relais-chateaux-logo_508afad5.png`,
  travelLeisure2025: `${CDN}/tl-worlds-best-2025_ab49d9db.png`,
  travelLeisure2024: `${CDN}/tl-worlds-best-2024_a4ac284a.png`,
  condeNast: `${CDN}/conde-nast-readers-choice_5c02d953.jpg`,
  virtuoso: `${CDN}/virtuoso-logo_e4d58e08.svg`,
  sTurismo: `${CDN}/s-turismo-sustentable_3ea4752d.svg`,
};

/* ── Per-Property Awards ──────────────────────────────── */

export const springsAwards: Award[] = [
  {
    id: "spr-michelin",
    name: "3 Michelin Keys",
    description: "The highest distinction in the MICHELIN Key guide, recognizing an extraordinary stay",
    logo: LOGOS.michelin3,
    year: "2025",
  },
  {
    id: "spr-green-globe",
    name: "Green Globe Certified",
    description: "International sustainability certification for travel and tourism",
    logo: LOGOS.greenGlobe,
  },
  {
    id: "spr-relais",
    name: "Relais & Châteaux",
    description: "Member of the prestigious association of individually owned luxury hotels and restaurants",
    logo: LOGOS.relaisChateaux,
  },
];

export const tentedCampAwards: Award[] = [
  {
    id: "ntc-tl",
    name: "#1 Resort in Central America",
    description: "Travel + Leisure World's Best Awards — #1 in Central America 5 of the last 6 years",
    logo: LOGOS.travelLeisure2025,
    year: "2020–2026",
  },
  {
    id: "ntc-green-globe",
    name: "Green Globe Certified",
    description: "International sustainability certification for travel and tourism",
    logo: LOGOS.greenGlobe,
  },
  {
    id: "ntc-virtuoso",
    name: "Virtuoso",
    description: "Member of the world's leading luxury travel network",
    logo: LOGOS.virtuoso,
  },
];

export const bocasAwards: Award[] = [
  {
    id: "boc-conde",
    name: "Best Resort in Central America",
    description: "Condé Nast Traveler Readers' Choice Awards 2025",
    logo: LOGOS.condeNast,
    year: "2025",
  },
  {
    id: "boc-green-globe",
    name: "Green Globe Certified",
    description: "International sustainability certification for travel and tourism",
    logo: LOGOS.greenGlobe,
  },
  {
    id: "boc-virtuoso",
    name: "Virtuoso",
    description: "Member of the world's leading luxury travel network",
    logo: LOGOS.virtuoso,
  },
];

export const atacamaAwards: Award[] = [
  {
    id: "ata-michelin",
    name: "2 Michelin Keys",
    description: "An exceptional stay — recognized by the MICHELIN Key guide",
    logo: LOGOS.michelin2,
    year: "2025",
  },
  {
    id: "ata-s-turismo",
    name: "Distinción Turismo Sustentable",
    description: "Chile's national sustainable tourism certification (Sello S)",
    logo: LOGOS.sTurismo,
  },
  {
    id: "ata-virtuoso",
    name: "Virtuoso",
    description: "Member of the world's leading luxury travel network",
    logo: LOGOS.virtuoso,
  },
];

export const hangaroaAwards: Award[] = [
  {
    id: "han-s-turismo",
    name: "Distinción Turismo Sustentable",
    description: "Chile's national sustainable tourism certification (Sello S)",
    logo: LOGOS.sTurismo,
  },
];

export const gardensAwards: Award[] = [
  {
    id: "gar-tl-hof",
    name: "Hall of Fame",
    description: "Travel + Leisure World's Best Awards — Hall of Fame inductee",
    logo: LOGOS.travelLeisure2025,
  },
  {
    id: "gar-virtuoso",
    name: "Virtuoso",
    description: "Member of the world's leading luxury travel network",
    logo: LOGOS.virtuoso,
  },
  {
    id: "gar-green-globe",
    name: "Green Globe Certified",
    description: "International sustainability certification for travel and tourism",
    logo: LOGOS.greenGlobe,
  },
];

/* ── Lookup by property slug ─────────────────────────── */
export const awardsByProperty: Record<string, Award[]> = {
  springs: springsAwards,
  "tented-camp": tentedCampAwards,
  "bocas-del-toro": bocasAwards,
  "alto-atacama": atacamaAwards,
  hangaroa: hangaroaAwards,
  gardens: gardensAwards,
};
