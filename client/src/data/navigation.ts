/**
 * NAVIGATION CONFIGURATION — Centralized navigation data for all page types
 *
 * Three page types with distinct hamburger menus:
 * 1. Property pages — focused on THIS property (Story, Rooms, Experiences, Wellness, Gastronomy, Sustainability, Getting Here)
 * 2. Brand pages — brand-level (Story, Experiences, Wellness, Gastronomy, Sustainability, Awards & Press, Blog, Podcast)
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
  { label: "Beyond Sustainability", route: "/sustainability" },
  { label: "Nature-Based Wellness", route: "/wellness" },
  { label: "A Taste of Place", route: "/gastronomy" },
] as const;

export const CONTENT_SECTIONS = [
  { label: "Journal & Podcast", route: "/journal" },
  { label: "Awards & Press", route: "/awards" },
] as const;

/* Property page hamburger — no in-page anchors, property home flows naturally */
export const PROPERTY_MENU: MenuItem[] = [];

/* Standardized menu items for brand & content pages (hamburger + footer match) */
/* Explore column items (four pillars + Gallery + Coming Soon + By Night + Privacy) */
const EXPLORE_MENU_ITEMS: MenuItem[] = [
  { label: "Bespoke Experiences", route: "/experiences" },
  { label: "Nature-Based Wellness", route: "/wellness" },
  { label: "A Taste of Place", route: "/gastronomy" },
  { label: "Beyond Sustainability", route: "/sustainability" },
  { label: "Gallery", route: "/gallery" },
  { label: "Coming Soon", route: "/new-projects" },
  { label: "Nayara By Night", route: "/by-night" },
];

/* Nayara Journal column items — all route to /journal */
const JOURNAL_MENU_ITEMS: MenuItem[] = [
  { label: "Blog", route: "/journal" },
  { label: "Podcast", route: "/journal" },
  { label: "FAQ", route: "/journal" },
  { label: "Press", route: "/journal" },
  { label: "Awards", route: "/journal" },
];

/* Brand page hamburger — standardized menu (no properties) */
export function getBrandMenu(): MenuSection[] {
  return [
    {
      items: [...EXPLORE_MENU_ITEMS, ...JOURNAL_MENU_ITEMS],
    },
  ];
}

/* Content page hamburger — same as brand page */
export function getContentMenu(): MenuSection[] {
  return getBrandMenu();
}

export interface FooterColumn {
  title: string;
  links: { label: string; route: string; external?: boolean }[];
}

/* Resorts column for footer */
const RESORTS_COLUMN: FooterColumn = {
  title: "Our Resorts",
  links: PROPERTIES.map((p) => ({ label: p.name, route: p.route })),
};

/* Nayara Journal column for footer */
const JOURNAL_COLUMN: FooterColumn = {
  title: "Nayara Journal",
  links: JOURNAL_MENU_ITEMS,
};

export function getFooterColumns(pageType: PageType): FooterColumn[] {
  return [
    {
      title: "Explore",
      links: EXPLORE_MENU_ITEMS,
    },
    JOURNAL_COLUMN,
    RESORTS_COLUMN,
  ];
}
