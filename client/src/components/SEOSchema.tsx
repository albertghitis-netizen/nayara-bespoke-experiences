/**
 * SEOSchema — JSON-LD structured data for SEO
 * Renders invisible <script type="application/ld+json"> tags
 * for Hotel, Organization, and Article schema.
 */

import { useEffect } from "react";

/* ─── Hotel Schema ─── */
interface HotelSchemaProps {
  name: string;
  description: string;
  url: string;
  image: string;
  address: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
    postalCode?: string;
  };
  geo?: { latitude: number; longitude: number };
  starRating?: number;
  priceRange?: string;
  telephone?: string;
  amenities?: string[];
}

export function HotelSchema({
  name,
  description,
  url,
  image,
  address,
  geo,
  starRating = 5,
  priceRange = "$$$$",
  telephone,
  amenities,
}: HotelSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name,
    description,
    url,
    image,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    ...(geo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: geo.latitude,
        longitude: geo.longitude,
      },
    }),
    starRating: {
      "@type": "Rating",
      ratingValue: starRating,
    },
    priceRange,
    ...(telephone && { telephone }),
    ...(amenities && {
      amenityFeature: amenities.map((a) => ({
        "@type": "LocationFeatureSpecification",
        name: a,
        value: true,
      })),
    }),
  };

  return <JsonLd data={schema} />;
}

/* ─── Organization Schema ─── */
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nayara Resorts",
    url: "https://nayararesorts.com",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-logo-mobile_b4d2ae65.svg",
    description: "Luxury resorts rooted in nature across Costa Rica, Panama, Chile, and Easter Island. Six properties, three countries, one philosophy.",
    sameAs: [
      "https://www.instagram.com/nayararesorts",
      "https://www.facebook.com/NayaraResorts",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-844-865-2002",
      contactType: "reservations",
      availableLanguage: ["English", "Spanish"],
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 500,
    },
    award: [
      "Michelin Guide 7 Keys (2025)",
      "Travel & Leisure No. 13 Resort Brand in World (2025)",
      "Conde Nast Traveler No. 1 in the World (2020)",
    ],
  };

  return <JsonLd data={schema} />;
}

/* ─── Article Schema ─── */
interface ArticleSchemaProps {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  author?: string;
  url: string;
}

export function ArticleSchema({ headline, description, image, datePublished, author = "Nayara Resorts", url }: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image,
    datePublished,
    author: {
      "@type": "Organization",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "Nayara Resorts",
    },
    url,
  };

  return <JsonLd data={schema} />;
}

/* ─── JSON-LD renderer ─── */
function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
