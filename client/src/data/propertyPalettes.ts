/**
 * Nayara Property Color Palettes
 * Each palette is derived from the actual photography on the property pages.
 * Colors are deliberately muted — the luxury is in the restraint.
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
  gardens: {
    primary: "#4A5E3C",
    secondary: "#6B5B4A",
    accent: "#8B9A7A",
    gradientStart: "#F5F1EB",
    gradientEnd: "#EBF0E6",
  },
  springs: {
    primary: "#3D5E4A",
    secondary: "#5A5650",
    accent: "#7A9484",
    gradientStart: "#F5F1EB",
    gradientEnd: "#E8EEEA",
  },
  "tented-camp": {
    primary: "#7A7A5E",
    secondary: "#8B7355",
    accent: "#A0A08A",
    gradientStart: "#F5F1EB",
    gradientEnd: "#F0EDE4",
  },
  "alto-atacama": {
    primary: "#8B5A3C",
    secondary: "#9A7E5A",
    accent: "#8A8B72",
    gradientStart: "#F5F1EB",
    gradientEnd: "#F2ECE4",
  },
  hangaroa: {
    primary: "#5E5549",
    secondary: "#8B6B3E",
    accent: "#7A8568",
    gradientStart: "#F5F1EB",
    gradientEnd: "#EDEAE4",
  },
  "bocas-del-toro": {
    primary: "#3A6B6B",
    secondary: "#4A6B4A",
    accent: "#7AA0A0",
    gradientStart: "#F5F1EB",
    gradientEnd: "#E6EEEE",
  },
};

/** Get palette by property slug */
export function getPalette(slug: string): PropertyPalette {
  return palettes[slug] || palettes.gardens;
}
