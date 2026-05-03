/**
 * NAVIGATION CONFIGURATION — Centralized navigation data for all page types
 *
 * Three page types with distinct hamburger menus:
 * 1. Property pages — focused on THIS property (Story, Rooms, Experiences, Wellness, Gastronomy, Sustainability, Getting Here)
 * 2. Brand pages — brand-level (Story, Experiences, Wellness, Gastronomy, Sustainability, Awards & Press, Journal)
 * 3. Content pages — same as brand pages
 *
 * Universal rules:
 * - Hamburger menu text: NOT all caps, same font as body text
 * - Hamburger menu and footer should match
 * - Reserve: NOT inside hamburger menu (only the Reserve pill button)
 */

export type PageType = "property" | "brand" | "content";

export interface MenuItem {
  label: string;
  route: string;
}

export interface MenuSection {
  header?: string;
  items: MenuItem[];
}

export const PROPERTIES = [
  { id: "alto-atacama", name: "Nayara Alto Atacama", shortName: "Alto Atacama", route: "/alto-atacama" },
  { id: "bocas-del-toro", name: "Nayara Bocas del Toro", shortName: "Bocas del Toro", route: "/bocas-del-toro" },
  { id: "gardens", name: "Nayara Gardens", shortName: "Gardens", route: "/gardens" },
  { id: "hangaroa", name: "Nayara Hangaroa", shortName: "Hangaroa", route: "/hangaroa" },
  { id: "springs", name: "Nayara Springs", shortName: "Springs", route: "/springs" },
  { id: "tented-camp", name: "Nayara Tented Camp", shortName: "Tented Camp", route: "/tented-camp" },
] as const;

export const PILLARS = [
  { label: "Bespoke Experiences", route: "/experiences" },
  { label: "Nature-Based Wellness", route: "/wellness" },
  { label: "Forest to Table", route: "/gastronomy" },
  { label: "Beyond Sustainability", route: "/sustainability" },
] as const;

/* Romance or Family Fun — property categorization */
export const ROMANCE_PROPERTIES = [
  { id: "springs", name: "Nayara Springs", route: "/springs", tag: "Adults Only" },
  { id: "bocas-del-toro", name: "Nayara Bocas del Toro", route: "/bocas-del-toro", tag: "Adults Only" },
] as const;

export const FAMILY_PROPERTIES = [
  { id: "gardens", name: "Nayara Gardens", route: "/gardens", tag: "Family Adventure" },
  { id: "tented-camp", name: "Nayara Tented Camp", route: "/tented-camp", tag: "Family Adventure" },
  { id: "alto-atacama", name: "Nayara Alto Atacama", route: "/alto-atacama", tag: "Family Adventure" },
  { id: "hangaroa", name: "Nayara Hangaroa", route: "/hangaroa", tag: "Family Adventure" },
] as const;

export const CONTENT_SECTIONS = [
  { label: "Blog", route: "/journal" },
  
  { label: "Awards & Press", route: "/awards" },
] as const;

/* Property page hamburger — no in-page anchors, property home flows naturally */
export const PROPERTY_MENU: MenuItem[] = [];

/* Standardized menu items for brand & content pages (hamburger + footer match) */
/* Costa Rica section */
const COSTA_RICA_MENU_ITEMS: MenuItem[] = [
  { label: "Rainforest Adventure", route: "/curated-excursions" },
  { label: "Nurtured by Nature", route: "/costa-rica-wellness" },
  { label: "Forest to Table", route: "/gastronomy" },
  { label: "Beyond Reforestation", route: "/sustainability" },
];

/* Explore column items (7 brand pages) */
export const EXPLORE_MENU_ITEMS: MenuItem[] = [
  { label: "Experiences", route: "/experiences" },
  { label: "Sustainability", route: "/sustainability" },
  { label: "Wellness", route: "/wellness" },
  { label: "Gastronomy", route: "/gastronomy" },
  { label: "Journal", route: "/journal" },
  { label: "Press & Awards", route: "/awards" },
  { label: "Romance", route: "/rainforest-romance" },
  { label: "Family", route: "/family-expeditions" },
  { label: "Gallery", route: "/gallery" },
];

/* Costa Rica dropdown items */
export const COSTA_RICA_ITEMS: MenuItem[] = [
  { label: "Rainforest Adventure", route: "/curated-excursions" },
  { label: "Nurtured by Nature", route: "/costa-rica-wellness" },
  { label: "Forest to Table", route: "/gastronomy-arenal" },
  { label: "Beyond Reforestation", route: "/tented-camp-sustainability" },
];

/* Pura Vida pillar items for footer */
export const PURA_VIDA_PILLARS: MenuItem[] = COSTA_RICA_ITEMS.slice(1);

/* Our Resorts dropdown items */
export const RESORTS_ITEMS: MenuItem[] = [
  ...PROPERTIES.map((p) => ({ label: p.name, route: p.route })),
  { label: "Nayara Resorts", route: "/" },
];

/* Brand page hamburger — standardized menu */
export function getBrandMenu(): MenuSection[] {
  return [
    {
      header: "Costa Rica",
      items: COSTA_RICA_ITEMS,
    },
    {
      header: "Explore",
      items: EXPLORE_MENU_ITEMS,
    },
    {
      header: "Our Resorts",
      items: RESORTS_ITEMS,
    },
  ];
}

/* Content page hamburger — same as brand page */
export function getContentMenu(): MenuSection[] {
  return getBrandMenu();
}

export interface FooterColumn {
  title: string;
  links: { label: string; route: string; external?: boolean; separatorBefore?: boolean }[];
}

/* Resorts column for footer */
const RESORTS_COLUMN: FooterColumn = {
  title: "Our Resorts",
  links: RESORTS_ITEMS.map((item, idx) => ({
    ...item,
    separatorBefore: idx === RESORTS_ITEMS.length - 1,
  })),
};

/* Nayara Journal column for footer */
const JOURNAL_COLUMN: FooterColumn = {
  title: "Nayara Journal",
  links: [
    { label: "Journal", route: "/journal" },
    { label: "Press & Awards", route: "/awards" },
  ],
};

/* Costa Rica column for footer */
const COSTA_RICA_COLUMN: FooterColumn = {
  title: "Costa Rica",
  links: COSTA_RICA_ITEMS, // All 4 Costa Rica categories
};

/* Pillars column (was Explore) — the four core pillars */
export const PILLARS_COLUMN: FooterColumn = {
  title: "Pillars",
  links: [
    { label: "Experiences", route: "/experiences" },
    { label: "Sustainability", route: "/sustainability" },
    { label: "Wellness", route: "/wellness" },
    { label: "Gastronomy", route: "/gastronomy" },
    { label: "Romance", route: "/rainforest-romance" },
    { label: "Family", route: "/family-expeditions" },
  ],
};

/* New Explore column — Journal, Press, Awards, FAQ, Romance, Family, Nayara by Night, Gallery */
export const EXPLORE_COLUMN: FooterColumn = {
  title: "Explore",
  links: [
    { label: "Journal", route: "/journal" },
    { label: "Press & Awards", route: "/awards" },
    { label: "FAQ", route: "/faq" },
    { label: "Nayara by Night", route: "/by-night" },
    { label: "Gallery", route: "/gallery" },
  ],
};

export function getFooterColumns(pageType: PageType): FooterColumn[] {
  return [
    PILLARS_COLUMN,
    EXPLORE_COLUMN,
    RESORTS_COLUMN,
  ];
}
