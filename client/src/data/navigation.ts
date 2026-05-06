/**
 * NAVIGATION CONFIGURATION , Centralized navigation data for all page types
 *
 * Hamburger menu structure (3 sections):
 * 1. Explore , Experiences, Sustainability, Wellness, Gastronomy, Romance, Family, Nayara by Night, Gallery
 * 2. Our Resorts , All 6 hotels + Nayara Resorts brand home
 * 3. Journal , single link to /journal (no sub-categories in nav)
 *
 * Footer structure (3 columns):
 * 1. Explore , same as nav
 * 2. Our Resorts , same as nav
 * 3. Journal , header with 5 sub-links (Blog, Press, Awards, Podcast, FAQ) for SEO
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

/* Romance or Family Fun , property categorization */
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

/* Property page hamburger , no in-page anchors, property home flows naturally */
export const PROPERTY_MENU: MenuItem[] = [];

/* ═══════════════════════════════════════════════════════════════
   SECTION 1: EXPLORE , 6 categories + Nayara by Night + Gallery
   ═══════════════════════════════════════════════════════════════ */
export const EXPLORE_MENU_ITEMS: MenuItem[] = [
  { label: "Experiences", route: "/experiences" },
  { label: "Sustainability", route: "/sustainability" },
  { label: "Wellness", route: "/wellness" },
  { label: "Gastronomy", route: "/gastronomy" },
  { label: "Romance", route: "/romance" },
  { label: "Family", route: "/family-expeditions" },
  { label: "Journal", route: "/journal" },
  { label: "Gallery", route: "/gallery" },
];

/* ═══════════════════════════════════════════════════════════════
   SECTION 2: OUR RESORTS , All hotels
   ═══════════════════════════════════════════════════════════════ */
export const RESORTS_ITEMS: MenuItem[] = [
  ...PROPERTIES.map((p) => ({ label: p.name, route: p.route })),
];

/* Nayara Resorts brand home , shown at the very bottom of nav */
export const BRAND_HOME_ITEM: MenuItem = { label: "Nayara Resorts", route: "/" };

/* ═══════════════════════════════════════════════════════════════
   SECTION 3: JOURNAL , single link in nav
   ═══════════════════════════════════════════════════════════════ */
export const JOURNAL_NAV_ITEM: MenuItem = { label: "Journal", route: "/journal" };

/* Journal sub-links for footer (each with own URL for SEO) */
export const JOURNAL_FOOTER_ITEMS: MenuItem[] = [
  { label: "Blog", route: "/journal" },
  { label: "Long-Form Video", route: "/long-form-video" },
  { label: "Awards", route: "/awards" },
  { label: "Press", route: "/journal?tab=press" },
  { label: "FAQ", route: "/journal?tab=faq" },
];

/* Costa Rica dropdown items (kept for internal use, not in nav/footer) */
export const COSTA_RICA_ITEMS: MenuItem[] = [
  { label: "Rainforest Adventure", route: "/curated-excursions" },
  { label: "Nurtured by Nature", route: "/costa-rica-wellness" },
  { label: "Forest to Table", route: "/gastronomy-arenal" },
  { label: "Beyond Reforestation", route: "/tented-camp-sustainability" },
];

/* Pura Vida pillar items for footer */
export const PURA_VIDA_PILLARS: MenuItem[] = COSTA_RICA_ITEMS.slice(1);

/* Brand page hamburger , 3 sections (Journal is single item, not dropdown) */
export function getBrandMenu(): MenuSection[] {
  return [
    {
      header: "Explore",
      items: EXPLORE_MENU_ITEMS,
    },
    {
      header: "Our Resorts",
      items: RESORTS_ITEMS,
    },
    {
      items: [JOURNAL_NAV_ITEM],
    },
  ];
}

/* Content page hamburger , same as brand page */
export function getContentMenu(): MenuSection[] {
  return getBrandMenu();
}

export interface FooterColumn {
  title: string;
  links: { label: string; route: string; external?: boolean; separatorBefore?: boolean }[];
}

/* ═══════════════════════════════════════════════════════════════
   FOOTER COLUMNS , Match nav structure
   ═══════════════════════════════════════════════════════════════ */

/* Explore column for footer */
export const EXPLORE_COLUMN: FooterColumn = {
  title: "Explore",
  links: [
    { label: "Experiences", route: "/experiences" },
    { label: "Sustainability", route: "/sustainability" },
    { label: "Wellness", route: "/wellness" },
    { label: "Gastronomy", route: "/gastronomy" },
    { label: "Romance", route: "/romance" },
    { label: "Family", route: "/family-expeditions" },
    { label: "Journal", route: "/journal" },
    { label: "Gallery", route: "/gallery" },
  ],
};

/* Resorts column for footer */
const RESORTS_COLUMN: FooterColumn = {
  title: "Our Resorts",
  links: [
    ...RESORTS_ITEMS.map((item) => ({ ...item })),
    { label: "Nayara Resorts", route: "/", separatorBefore: true },
  ],
};

/* Journal column for footer , "Journal" is header (not clickable), sub-items are links */
export const JOURNAL_COLUMN: FooterColumn = {
  title: "Journal",
  links: JOURNAL_FOOTER_ITEMS,
};

/* Keep PILLARS_COLUMN for backward compat (aliased to EXPLORE_COLUMN) */
export const PILLARS_COLUMN: FooterColumn = EXPLORE_COLUMN;

export function getFooterColumns(pageType: PageType): FooterColumn[] {
  return [
    EXPLORE_COLUMN,
    RESORTS_COLUMN,
    JOURNAL_COLUMN,
  ];
}
