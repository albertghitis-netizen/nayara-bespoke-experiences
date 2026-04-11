/**
 * Nayara Property Color Palettes
 * Each property has a distinct, muted palette rooted in its landscape.
 * Colors are deliberately restrained — the luxury is in the subtlety.
 *
 * Tented Camp  → Olive Tree (warm olive-khaki)
 * Gardens      → Rich Green (full forest green)
 * Springs      → Blue-Green (between Bocas blue and Tented Camp green)
 * Bocas        → Ocean Blue-Green (Caribbean teal)
 * Atacama      → Desert Red-Brown (terracotta earth)
 * Hangaroa     → Slate Gray (volcanic stone)
 */

export interface PropertyPalette {
  /** Dominant mood color — section labels, active filters, hover states */
  primary: string;
  /** Supporting tone — pull quote borders, card hover borders */
  secondary: string;
  /** Subtle highlights — tags, badges, metadata text */
  accent: string;
  /** Section gradient start (always page background) */
  gradientStart: string;
  /** Section gradient end — whisper of the destination's color */
  gradientEnd: string;
  /** Button background — property's signature color */
  buttonBg: string;
  /** Button text color */
  buttonText: string;
  /** Footer background — deep version of property color */
  footerBg: string;
  /** Footer text color */
  footerText: string;
  /** Nav pill background on property pages */
  navPillBg: string;
  /** Nav pill text */
  navPillText: string;
}

export const BRAND = {
  pageBackground: "#F5F1EB",
  primaryText: "#2C2418",
  secondaryText: "#7A6F63",
  tertiaryText: "#B0A89E",
  divider: "#E2DDD5",
  navPill: "#3A2A1A",
  navPillText: "#F5F1EB",
} as const;

export const palettes: Record<string, PropertyPalette> = {
  /* ─── TENTED CAMP — Olive Tree ─── */
  "tented-camp": {
    primary: "#67703D",       // olive tree
    secondary: "#8A8B5A",    // warm olive-khaki
    accent: "#A5A87C",       // light olive
    gradientStart: "#F5F1EB",
    gradientEnd: "#EDEEE2",  // warm olive tint
    buttonBg: "#67703D",
    buttonText: "#FAFAF5",
    footerBg: "#2E3320",     // deep olive
    footerText: "#E8E8DA",
    navPillBg: "#67703D",
    navPillText: "#FAFAF5",
  },

  /* ─── GARDENS — Rich Green ─── */
  gardens: {
    primary: "#3A5E3A",       // full forest green
    secondary: "#5A7A52",     // medium green
    accent: "#7A9A6A",        // soft green
    gradientStart: "#F5F1EB",
    gradientEnd: "#E6EDE4",   // green tint
    buttonBg: "#3A5E3A",
    buttonText: "#F5F5F0",
    footerBg: "#1E2E1A",     // deep forest
    footerText: "#E0E8DA",
    navPillBg: "#3A5E3A",
    navPillText: "#F5F5F0",
  },

  /* ─── SPRINGS — Blue-Green ─── */
  springs: {
    primary: "#3A6B6B",       // teal blue-green
    secondary: "#5A8A82",     // medium blue-green
    accent: "#7AABA0",        // soft aqua
    gradientStart: "#F5F1EB",
    gradientEnd: "#E4EDEB",   // blue-green tint
    buttonBg: "#3A6B6B",
    buttonText: "#F5FAF8",
    footerBg: "#1A3030",     // deep teal
    footerText: "#D8E8E4",
    navPillBg: "#3A6B6B",
    navPillText: "#F5FAF8",
  },

  /* ─── BOCAS DEL TORO — Ocean Blue-Green ─── */
  "bocas-del-toro": {
    primary: "#2A6B7A",       // Caribbean ocean blue
    secondary: "#4A8A8E",     // medium ocean
    accent: "#7AB0B4",        // soft Caribbean
    gradientStart: "#F5F1EB",
    gradientEnd: "#E2ECEE",   // ocean tint
    buttonBg: "#2A6B7A",
    buttonText: "#F5FAFA",
    footerBg: "#142E34",     // deep ocean
    footerText: "#D4E8EC",
    navPillBg: "#2A6B7A",
    navPillText: "#F5FAFA",
  },

  /* ─── ALTO ATACAMA — Desert Red-Brown ─── */
  "alto-atacama": {
    primary: "#8B5A3C",       // terracotta
    secondary: "#A07A5A",     // warm sand
    accent: "#B89A78",        // desert gold
    gradientStart: "#F5F1EB",
    gradientEnd: "#F2ECE4",   // warm sand tint
    buttonBg: "#8B5A3C",
    buttonText: "#FAF5F0",
    footerBg: "#3A2418",     // deep earth
    footerText: "#E8DCD0",
    navPillBg: "#8B5A3C",
    navPillText: "#FAF5F0",
  },

  /* ─── HANGAROA — Slate Gray ─── */
  hangaroa: {
    primary: "#5A5E64",       // slate gray
    secondary: "#7A7E82",     // medium stone
    accent: "#9A9EA2",        // light slate
    gradientStart: "#F5F1EB",
    gradientEnd: "#EAEBED",   // cool gray tint
    buttonBg: "#5A5E64",
    buttonText: "#F5F5F5",
    footerBg: "#2A2C30",     // deep slate
    footerText: "#D8DADC",
    navPillBg: "#5A5E64",
    navPillText: "#F5F5F5",
  },
};

/** Get palette by property slug */
export function getPalette(slug: string): PropertyPalette {
  return palettes[slug] || palettes.gardens;
}
