/**
 * Nayara Property Color Palettes
 * Each property has a distinct, muted palette rooted in its landscape.
 * Colors are deliberately restrained — the luxury is in the subtlety.
 *
 * All colors sourced from the official Nayara 36-color brand swatch set.
 *
 * Tented Camp  → Olive Tree (#525642, swatch #4)
 * Gardens      → Clover Green (#286241, swatch #12)
 * Springs      → Teal (#3B6E7B, swatch #21)
 * Bocas        → Ocean (#2A6489, swatch #31)
 * Atacama      → Terracotta (#6F463D, swatch #7)
 * Hangaroa     → Steel Blue (#536878, swatch #24)
 * Brand        → Brown Gravel (#E2D7C8, swatch #9) + Espresso (#3B2B26, swatch #5)
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
  pageBackground: "#F7F5F0",    // Warm White (swatch #1)
  primaryText: "#3B2B26",       // Espresso (swatch #5)
  secondaryText: "#67737C",     // Blue Gray (swatch #28)
  tertiaryText: "#9A9086",      // Taupe (swatch #26)
  divider: "#E6DFD5",           // Sand (swatch #2)
  navPill: "#3B2B26",           // Espresso (swatch #5)
  navPillText: "#F7F5F0",       // Warm White (swatch #1)
  bone: "#E2D7C8",              // Bone / Brown Gravel (swatch #9)
} as const;

export const palettes: Record<string, PropertyPalette> = {
  /* ─── TENTED CAMP — Olive Tree (swatch #4: #525642) ─── */
  "tented-camp": {
    primary: "#525642",          // Olive Dark / Olive Tree (swatch #4)
    secondary: "#868B75",        // Sage (swatch #3)
    accent: "#9A9086",           // Taupe (swatch #26)
    gradientStart: "#F7F5F0",   // Warm White
    gradientEnd: "#EDEEE2",     // warm olive tint
    buttonBg: "#525642",         // Olive Tree
    buttonText: "#F7F5F0",
    footerBg: "#3B2B26",        // Espresso (swatch #5)
    footerText: "#E6DFD5",      // Sand
    navPillBg: "#525642",        // Olive Tree
    navPillText: "#F7F5F0",
  },

  /* ─── GARDENS — Clover Green (swatch #12: #286241) ─── */
  gardens: {
    primary: "#286241",          // Forest / Clover Green (swatch #12)
    secondary: "#424A3E",        // Dark Olive (swatch #22)
    accent: "#868B75",           // Sage (swatch #3)
    gradientStart: "#F7F5F0",
    gradientEnd: "#E6EDE4",     // green tint
    buttonBg: "#286241",         // Clover Green
    buttonText: "#F7F5F0",
    footerBg: "#22322E",        // Dark Teal (swatch #30)
    footerText: "#E6DFD5",
    navPillBg: "#286241",        // Clover Green
    navPillText: "#F7F5F0",
  },

  /* ─── SPRINGS — Teal (swatch #21: #3B6E7B) ─── */
  springs: {
    primary: "#3B6E7B",          // Teal (swatch #21)
    secondary: "#5A6F7B",        // Slate Blue (swatch #10)
    accent: "#86898C",           // Cool Gray (swatch #15)
    gradientStart: "#F7F5F0",
    gradientEnd: "#E4EDEB",     // blue-green tint
    buttonBg: "#3B6E7B",        // Teal
    buttonText: "#F7F5F0",
    footerBg: "#22322E",        // Dark Teal (swatch #30)
    footerText: "#D8E8E4",
    navPillBg: "#3B6E7B",       // Teal
    navPillText: "#F7F5F0",
  },

  /* ─── BOCAS DEL TORO — Ocean (swatch #31: #2A6489) ─── */
  "bocas-del-toro": {
    primary: "#2A6489",          // Ocean (swatch #31)
    secondary: "#5A6F7B",        // Slate Blue (swatch #10)
    accent: "#7FA9C9",           // Sky Blue (swatch #35)
    gradientStart: "#F7F5F0",
    gradientEnd: "#E2ECEE",     // ocean tint
    buttonBg: "#2A6489",         // Ocean
    buttonText: "#F7F5F0",
    footerBg: "#1B2534",        // Navy (swatch #13)
    footerText: "#C2D0D6",      // Ice Blue (swatch #8)
    navPillBg: "#2A6489",        // Ocean
    navPillText: "#F7F5F0",
  },

  /* ─── ALTO ATACAMA — Terracotta (swatch #7: #6F463D) ─── */
  "alto-atacama": {
    primary: "#6F463D",          // Terracotta (swatch #7)
    secondary: "#9A9086",        // Taupe (swatch #26)
    accent: "#C29B70",           // Amber (swatch #32)
    gradientStart: "#F7F5F0",
    gradientEnd: "#F2ECE4",     // warm sand tint
    buttonBg: "#6F463D",        // Terracotta
    buttonText: "#F7F5F0",
    footerBg: "#3B2B26",        // Espresso (swatch #5)
    footerText: "#E2D7C8",      // Bone (swatch #9)
    navPillBg: "#6F463D",        // Terracotta
    navPillText: "#F7F5F0",
  },

  /* ─── HANGAROA — Steel Blue (swatch #24: #536878) ─── */
  hangaroa: {
    primary: "#536878",          // Steel Blue (swatch #24)
    secondary: "#67737C",        // Blue Gray (swatch #28)
    accent: "#9A9086",           // Taupe (swatch #26)
    gradientStart: "#F7F5F0",
    gradientEnd: "#EAEBED",     // cool gray tint
    buttonBg: "#536878",         // Steel Blue
    buttonText: "#F7F5F0",
    footerBg: "#1B2534",        // Navy (swatch #13)
    footerText: "#C2D0D6",      // Ice Blue
    navPillBg: "#536878",        // Steel Blue
    navPillText: "#F7F5F0",
  },
};

/** Get palette by property slug */
export function getPalette(slug: string): PropertyPalette {
  return palettes[slug] || palettes.gardens;
}
