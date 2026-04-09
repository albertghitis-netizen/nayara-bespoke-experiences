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
  { label: "Experiences", route: "/experiences" },
  { label: "Beyond Sustainability", route: "/sustainability" },
  { label: "Wellness", route: "/wellness" },
  { label: "The Table", route: "/gastronomy" },
] as const;

export const CONTENT_SECTIONS = [
  { label: "Nayara Journal", route: "/journal" },
  { label: "Press & Awards", route: "/awards" },
] as const;

/* Property page hamburger — sections within THIS property */
export const PROPERTY_MENU: MenuItem[] = [
  { label: "Tents & Suites", route: "#tented-camp" },
  { label: "Experiences", route: "#experiences" },
  { label: "Wellness", route: "#wellness" },
  { label: "The Table", route: "#gastronomy" },
  { label: "Beyond Sustainability", route: "#sustainability" },
  { label: "Getting Here", route: "#getting-here" },
  { label: "Press & Awards", route: "/awards" },
  { label: "Nayara Journal", route: "/journal" },
];

/* Standardized menu items for brand & content pages (hamburger + footer match) */
const STANDARD_MENU_ITEMS: MenuItem[] = [
  { label: "Our Story", route: "/story" },
  { label: "Experiences", route: "/experiences" },
  { label: "Wellness", route: "/wellness" },
  { label: "The Table", route: "/gastronomy" },
  { label: "Beyond Sustainability", route: "/sustainability" },
  { label: "Press & Awards", route: "/awards" },
  { label: "Nayara Journal", route: "/journal" },
];

/* Brand page hamburger — standardized menu (no properties) */
export function getBrandMenu(): MenuSection[] {
  return [
    {
      items: STANDARD_MENU_ITEMS,
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

/* Footer menu items — same as standard */
const FOOTER_MENU_ITEMS: MenuItem[] = STANDARD_MENU_ITEMS;

/* Resorts column for footer */
const RESORTS_COLUMN: FooterColumn = {
  title: "Our Resorts",
  links: PROPERTIES.map((p) => ({ label: p.name, route: p.route })),
};

export function getFooterColumns(pageType: PageType): FooterColumn[] {
  if (pageType === "property") {
    return [
      {
        title: "Explore",
        links: FOOTER_MENU_ITEMS,
      },
      RESORTS_COLUMN,
    ];
  }

  /* Brand + Content pages — same footer */
  return [
    {
      title: "Explore",
      links: FOOTER_MENU_ITEMS,
    },
    RESORTS_COLUMN,
  ];
}
