/**
 * NAVIGATION CONFIGURATION — Centralized navigation data for all page types
 *
 * Three page types with distinct hamburger menus:
 * 1. Property pages — focused on THIS property (Story, Rooms, Gallery, Experiences, Wellness, Gastronomy, Sustainability, Getting Here)
 * 2. Brand pages — brand-level (Story, Experiences, Wellness, Gastronomy, Sustainability, Awards & Press, Blog, Podcast)
 * 3. Content pages — same as brand pages
 *
 * Universal rules:
 * - Hamburger menu text: NOT all caps, same font as body text
 * - Hamburger menu and footer should match
 * - Reserve: NOT inside hamburger menu (only the Reserve pill button)
 * - Gallery: only in property page menus (links to #gallery section)
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
  { label: "Sustainability", route: "/sustainability" },
  { label: "Wellness", route: "/wellness" },
  { label: "Gastronomy", route: "/gastronomy" },
] as const;

export const CONTENT_SECTIONS = [
  { label: "Journal", route: "/journal" },
  { label: "Awards & Press", route: "/awards" },
] as const;

/* Property page hamburger — sections within THIS property */
export const PROPERTY_MENU: MenuItem[] = [
  { label: "Rooms", route: "#rooms" },
  { label: "Experiences", route: "#experiences" },
  { label: "Wellness", route: "#wellness" },
  { label: "Gastronomy", route: "#gastronomy" },
  { label: "Sustainability", route: "#sustainability" },
  { label: "Getting Here", route: "#getting-here" },
  { label: "Gallery", route: "#gallery" },
  { label: "Press & Awards", route: "/awards" },
  { label: "Blog", route: "/journal" },
  { label: "Podcast", route: "/journal" },
  { label: "FAQ", route: "/journal" },
  { label: "All Destinations", route: "#all-destinations" },
];

/* All Destinations dropdown — all 6 properties */
export const ALL_DESTINATIONS_MENU = PROPERTIES.map((p) => ({ label: p.shortName, route: p.route }));

/* Standardized menu items for brand & content pages (hamburger + footer match) */
const STANDARD_MENU_ITEMS: MenuItem[] = [
  { label: "Story", route: "/story" },
  { label: "Experiences", route: "/experiences" },
  { label: "Wellness", route: "/wellness" },
  { label: "Gastronomy", route: "/gastronomy" },
  { label: "Sustainability", route: "/sustainability" },
  { label: "Awards & Press", route: "/awards" },
  { label: "Journal", route: "/journal" },
];

/* Brand page hamburger — standardized menu + properties */
export function getBrandMenu(): MenuSection[] {
  return [
    {
      items: STANDARD_MENU_ITEMS,
    },
    {
      header: "Resorts",
      items: PROPERTIES.map((p) => ({ label: p.name, route: p.route })),
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

export function getFooterColumns(pageType: PageType): FooterColumn[] {
  const propertyColumn: FooterColumn = {
    title: "Resorts",
    links: PROPERTIES.map((p) => ({ label: p.name, route: p.route })),
  };

  if (pageType === "property") {
    return [
      {
        title: "Explore",
        links: STANDARD_MENU_ITEMS,
      },
      propertyColumn,
    ];
  }

  /* Brand + Content pages — same footer */
  return [
    {
      title: "Explore",
      links: STANDARD_MENU_ITEMS,
    },
    propertyColumn,
  ];
}
