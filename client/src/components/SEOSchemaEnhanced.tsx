/**
 * SEOSchemaEnhanced , Advanced JSON-LD structured data for SEO
 * Implements E-E-A-T signals, LocalBusiness schema, BreadcrumbList, and geo-targeting
 * Phase 2 of SEO Roadmap: Schema Markup for E-E-A-T and Geo signals
 */

import { useEffect } from "react";

/* ─── LocalBusiness Schema (Property-level) ─── */
interface LocalBusinessSchemaProps {
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
  geo: {
    latitude: number;
    longitude: number;
  };
  telephone: string;
  email: string;
  priceRange?: string;
  amenities?: string[];
  awards?: string[];
}

export function LocalBusinessSchema({
  name,
  description,
  url,
  image,
  address,
  geo,
  telephone,
  email,
  priceRange = "$$$$",
  amenities,
  awards,
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Resort",
    "@id": url,
    name,
    description,
    url,
    image,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      addressCountry: address.addressCountry,
      postalCode: address.postalCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    telephone,
    email,
    priceRange,
    ...(amenities && {
      amenityFeature: amenities.map((a) => ({
        "@type": "LocationFeatureSpecification",
        name: a,
        value: true,
      })),
    }),
    ...(awards && {
      award: awards,
    }),
    // E-E-A-T signals
    knowsAbout: [
      "Luxury Resorts",
      "Eco-Tourism",
      "Wellness Retreats",
      "Adventure Travel",
      "Sustainable Hospitality",
    ],
    sameAs: [
      "https://www.instagram.com/nayararesorts",
      "https://www.facebook.com/NayaraResorts",
    ],
  };

  return <JsonLd data={schema} />;
}

/* ─── Enhanced Organization Schema (E-E-A-T focused) ─── */
interface EnhancedOrganizationSchemaProps {
  name?: string;
  description?: string;
  awards?: string[];
  certifications?: string[];
}

export function EnhancedOrganizationSchema({
  name = "Nayara Resorts",
  description = "Luxury resorts rooted in nature across Costa Rica, Panama, Chile, and Easter Island. Award-winning properties with expertise in sustainable hospitality, wellness, and adventure travel.",
  awards = [
    "Michelin Guide 7 Keys (2025)",
    "Travel & Leisure No. 13 Resort Brand in World (2025)",
    "Condé Nast Traveler No. 1 in the World (2020)",
    "Green Globe Certification",
  ],
  certifications = [
    "Green Globe Certified",
    "Rainforest Alliance Certified",
  ],
}: EnhancedOrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://nayararesorts.com",
    name,
    url: "https://nayararesorts.com",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-logo-mobile_b4d2ae65.svg",
    description,
    sameAs: [
      "https://www.instagram.com/nayararesorts",
      "https://www.facebook.com/NayaraResorts",
      "https://www.linkedin.com/company/nayara-resorts",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-844-865-2002",
      contactType: "reservations",
      availableLanguage: ["English", "Spanish", "Portuguese", "French"],
      areaServed: ["CR", "CL", "PA"],
    },
    // E-E-A-T signals
    award: awards,
    certification: certifications,
    knowsAbout: [
      "Luxury Hospitality",
      "Sustainable Tourism",
      "Wellness & Spa",
      "Adventure Experiences",
      "Environmental Conservation",
      "Cultural Heritage",
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 500,
    },
    // Authority signals
    hasCredential: [
      {
        "@type": "Credential",
        credentialCategory: "Green Globe Certification",
      },
      {
        "@type": "Credential",
        credentialCategory: "Rainforest Alliance Certified",
      },
    ],
    // Trustworthiness
    foundingDate: "2000",
    founder: {
      "@type": "Person",
      name: "Nayara Resorts Leadership",
    },
  };

  return <JsonLd data={schema} />;
}

/* ─── BreadcrumbList Schema ─── */
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbListSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbListSchema({ items }: BreadcrumbListSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLd data={schema} />;
}

/* ─── Enhanced Article Schema (with Author Expertise) ─── */
interface EnhancedArticleSchemaProps {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: {
    name: string;
    url?: string;
    expertise?: string[];
  };
  url: string;
  articleBody?: string;
  keywords?: string[];
}

export function EnhancedArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author = {
    name: "Nayara Resorts",
    url: "https://nayararesorts.com",
    expertise: [
      "Luxury Travel",
      "Sustainable Tourism",
      "Wellness Retreats",
      "Adventure Travel",
    ],
  },
  url,
  articleBody,
  keywords,
}: EnhancedArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": url,
    headline,
    description,
    image,
    datePublished,
    ...(dateModified && { dateModified }),
    author: {
      "@type": "Organization",
      name: author.name,
      url: author.url,
      ...(author.expertise && {
        knowsAbout: author.expertise,
      }),
    },
    publisher: {
      "@type": "Organization",
      name: "Nayara Resorts",
      url: "https://nayararesorts.com",
      logo: {
        "@type": "ImageObject",
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-logo-mobile_b4d2ae65.svg",
      },
    },
    url,
    ...(articleBody && { articleBody }),
    ...(keywords && { keywords: keywords.join(", ") }),
    // E-E-A-T signals
    inLanguage: "en-US",
    isAccessibleForFree: true,
  };

  return <JsonLd data={schema} />;
}

/* ─── FAQPage Schema ─── */
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQPageSchemaProps {
  url: string;
  faqs: FAQItem[];
}

export function FAQPageSchema({ url, faqs }: FAQPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": url,
    url,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <JsonLd data={schema} />;
}

/* ─── AggregateRating Schema (for properties with multiple reviews) ─── */
interface AggregateRatingSchemaProps {
  name: string;
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}

export function AggregateRatingSchema({
  name,
  ratingValue,
  reviewCount,
  bestRating = 5,
  worstRating = 1,
}: AggregateRatingSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    name,
    ratingValue,
    reviewCount,
    bestRating,
    worstRating,
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
