/**
 * Nayara Property Color Palettes
 * Each property has a distinct, muted palette rooted in its landscape.
 * Colors are deliberately restrained — the luxury is in the subtlety.
 *
 * All colors sourced from the official Nayara 36-color brand swatch set.
 *
 * Tented Camp  → Olive Tree (#868B75, swatch #3)
 * Gardens      → Clover Green (#286241, swatch #12)
 * Springs      → Teal (#3B6E7B, swatch #21)
 * Bocas        → Aqua (#008E97, Miami Dolphins)
 * Atacama      → Terracotta (#6F463D, swatch #7)
 * Hangaroa     → Steel Blue (#536878, swatch #24)
 * Brand        → Bone (#F7F5F0, swatch #1) + Espresso (#3B2B26, swatch #5)
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
  /** Body text on light backgrounds — super dark brown */
  bodyText: string;
  /** Body text on dark backgrounds — super bright white */
  bodyTextLight: string;
}

export const BRAND = {
  pageBackground: "#F7F5F0",    // Bone (swatch #1)
  primaryText: "#3B2B26",       // Espresso (swatch #5)
  secondaryText: "#67737C",     // Blue Gray (swatch #28)
  tertiaryText: "#9A9086",      // Taupe (swatch #26)
  divider: "#E6DFD5",           // Gravel (swatch #2)
  navPill: "#3B2B26",           // Espresso (swatch #5)
  navPillText: "#F7F5F0",       // Bone (swatch #1)
  bone: "#E2D7C8",              // Brown Gravel (swatch #9)
} as const;

export const palettes: Record<string, PropertyPalette> = {
  /* ─── TENTED CAMP — Olive Tree (swatch #3: #868B75) ─── */
  "tented-camp": {
    primary: "#868B75",          // Olive Tree (swatch #3)
    secondary: "#525642",        // Dark Olive (swatch #4)
    accent: "#9A9086",           // Taupe (swatch #26)
    gradientStart: "#F7F5F0",   // Bone
    gradientEnd: "#EDEEE2",     // warm olive tint
    buttonBg: "#868B75",         // Olive Tree
    buttonText: "#F7F5F0",
    footerBg: "#868B75",        // Olive Tree (primary)
    footerText: "#FFFFFF",      // Super bright white
    navPillBg: "#868B75",        // Olive Tree
    navPillText: "#FFFFFF",      // Super bright white
    bodyText: "#0D0704",         // Super dark brown on light
    bodyTextLight: "#FFFFFF",    // Super bright white on dark
  },

  /* ─── GARDENS — Clover Green (swatch #12: #286241) ─── */
  gardens: {
    primary: "#286241",          // Clover Green (swatch #12)
    secondary: "#1E4F34",        // Deep Clover
    accent: "#3A7B55",           // Light Clover
    gradientStart: "#F7F5F0",
    gradientEnd: "#EDEEE2",     // warm olive tint
    buttonBg: "#286241",         // Clover Green
    buttonText: "#F7F5F0",
    footerBg: "#286241",        // Clover Green
    footerText: "#FFFFFF",      // Super bright white
    navPillBg: "#286241",        // Clover Green
    navPillText: "#FFFFFF",      // Super bright white
    bodyText: "#0D0704",         // Super dark brown on light
    bodyTextLight: "#FFFFFF",    // Super bright white on dark
  },

  /* --- SPRINGS — Eucalyptus & Mint --- */
  springs: {
    primary: "#5F7367",          // Standard Eucalyptus (middle — accents, buttons)
    secondary: "#4B6358",        // Dark Eucalyptus (nav, footer)
    accent: "#3EB489",           // Standard Mint (bright highlights)
    gradientStart: "#F7F5F0",
    gradientEnd: "#E8F3EF",     // Light Eucalyptus tint
    buttonBg: "#5F7367",        // Standard Eucalyptus
    buttonText: "#FFFFFF",       // White for contrast
    footerBg: "#4B6358",        // Dark Eucalyptus (darker for footer)
    footerText: "#FFFFFF",      // Super bright white
    navPillBg: "#4B6358",       // Dark Eucalyptus (darker for nav)
    navPillText: "#FFFFFF",      // Super bright white
    bodyText: "#0D0704",         // Super dark brown on light
    bodyTextLight: "#FFFFFF",    // Super bright white on dark
  },

  /* ─── BOCAS DEL TORO — Aqua (#008E97) ─── */
  "bocas-del-toro": {
    primary: "#008E97",          // Aqua (Miami Dolphins)
    secondary: "#006D75",        // Deep Aqua
    accent: "#4DC9D1",           // Light Aqua
    gradientStart: "#F7F5F0",
    gradientEnd: "#E2F0F0",     // aqua tint
    buttonBg: "#008E97",         // Aqua
    buttonText: "#FFFFFF",
    footerBg: "#008E97",        // Aqua (matches nav)
    footerText: "#FFFFFF",      // Super bright white
    navPillBg: "#008E97",        // Aqua
    navPillText: "#FFFFFF",      // Super bright white
    bodyText: "#0D0704",         // Super dark brown on light
    bodyTextLight: "#FFFFFF",    // Super bright white on dark
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
    footerBg: "#6F463D",        // Terracotta (matches nav)
    footerText: "#FFFFFF",      // Super bright white
    navPillBg: "#B85C3C",        // Middle terracotta
    navPillText: "#FFFFFF",      // Super bright white
    bodyText: "#0D0704",         // Super dark brown on light
    bodyTextLight: "#FFFFFF",    // Super bright white on dark
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
    footerBg: "#536878",        // Steel Blue (matches nav)
    footerText: "#FFFFFF",      // Super bright white
    navPillBg: "#536878",        // Steel Blue
    navPillText: "#FFFFFF",      // Super bright white
    bodyText: "#0D0704",         // Super dark brown on light
    bodyTextLight: "#FFFFFF",    // Super bright white on dark
  },
};

/** Get palette by property slug */
export function getPalette(slug: string): PropertyPalette {
  return palettes[slug] || palettes.gardens;
}
