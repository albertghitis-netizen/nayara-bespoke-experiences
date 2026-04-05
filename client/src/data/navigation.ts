/**
 * NAVIGATION CONFIGURATION — Centralized navigation data for all page types
 *
 * Three page types with distinct hamburger menus:
 * 1. Property pages — focused on THIS property (Rooms, Experiences, etc.)
 * 2. Brand pages — brand-level (pillars, properties, content sections)
 * 3. Content pages — content-focused (Blog, Podcast, Press, Awards, FAQ + pillars + properties)
 *
 * Universal rules:
 * - Pillar order: Experiences → Sustainability → Wellness → Gastronomy
 * - Properties: alphabetical, all 6 independent (no regional clustering)
 * - Rooms: property-specific only
 * - Story: brand-level only, not in menus
 * - Reserve: always present in hamburger as last item
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
  { label: "Blog", route: "/blog" },
  { label: "Podcast", route: "/podcast" },
  { label: "Press", route: "/press" },
  { label: "Awards", route: "/awards" },
  { label: "FAQ", route: "/faq" },
] as const;

export const PROPERTY_MENU: MenuItem[] = [
  { label: "Rooms", route: "#rooms" },
  { label: "Experiences", route: "#experiences" },
  { label: "Sustainability", route: "#sustainability" },
  { label: "Wellness", route: "#wellness" },
  { label: "Gastronomy", route: "#gastronomy" },
  { label: "Getting Here", route: "#getting-here" },
];

export function getBrandMenu(): MenuSection[] {
  return [
    {
      items: [
        ...PILLARS.map((p) => ({ label: p.label, route: p.route })),
      ],
    },
    {
      header: "Content",
      items: CONTENT_SECTIONS.map((s) => ({ label: s.label, route: s.route })),
    },
    {
      header: "Properties",
      items: PROPERTIES.map((p) => ({ label: p.name, route: p.route })),
    },
  ];
}

export function getContentMenu(): MenuSection[] {
  return [
    {
      items: CONTENT_SECTIONS.map((s) => ({ label: s.label, route: s.route })),
    },
    {
      header: "Pillars",
      items: [
        ...PILLARS.map((p) => ({ label: p.label, route: p.route })),
      ],
    },
    {
      header: "Properties",
      items: PROPERTIES.map((p) => ({ label: p.name, route: p.route })),
    },
  ];
}

export interface FooterColumn {
  title: string;
  links: { label: string; route: string; external?: boolean }[];
}

export function getFooterColumns(pageType: PageType): FooterColumn[] {
  const brandLinks: FooterColumn = {
    title: "Explore",
    links: [
      { label: "The Nayara Story", route: "/story" },
      ...PILLARS.map((p) => ({ label: p.label, route: p.route })),
    ],
  };

  const propertyColumn: FooterColumn = {
    title: "Properties",
    links: PROPERTIES.map((p) => ({ label: p.name, route: p.route })),
  };

  const contentColumn: FooterColumn = {
    title: "Content",
    links: CONTENT_SECTIONS.map((s) => ({ label: s.label, route: s.route })),
  };

  if (pageType === "property") {
    return [
      {
        title: "Explore Nayara",
        links: [
      { label: "The Nayara Story", route: "/story" },
      ...PILLARS.map((p) => ({ label: p.label, route: p.route })),
        ],
      },
      propertyColumn,
      contentColumn,
    ];
  }

  if (pageType === "content") {
    return [contentColumn, propertyColumn, brandLinks];
  }

  return [brandLinks, propertyColumn, contentColumn];
}
