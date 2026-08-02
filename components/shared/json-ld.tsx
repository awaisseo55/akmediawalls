import { AUTHOR, BUSINESS, REVIEWER, SITE_URL } from "@/lib/constants";
import type { FAQItem, Location } from "@/lib/types";

function Script({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}#organization`,
        name: BUSINESS.name,
        legalName: BUSINESS.legalName,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.svg`,
        image: `${SITE_URL}/logo.svg`,
        telephone: BUSINESS.phone,
        email: BUSINESS.email,
        foundingDate: BUSINESS.founded,
        founder: {
          "@type": "Person",
          name: AUTHOR.name,
          jobTitle: AUTHOR.role,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: BUSINESS.streetAddress,
          addressLocality: BUSINESS.addressLocality,
          addressRegion: BUSINESS.addressRegion,
          postalCode: BUSINESS.postalCode,
          addressCountry: BUSINESS.addressCountry,
        },
        sameAs: [BUSINESS.socials.facebook, BUSINESS.socials.instagram],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        url: SITE_URL,
        name: BUSINESS.name,
        publisher: { "@id": `${SITE_URL}#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/blog?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
  return <Script data={data} />;
}

export function LocalBusinessJsonLd({
  location,
  url,
}: {
  location?: Location;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${url}#business`,
    name: BUSINESS.name,
    image: location?.heroImage,
    url,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location?.geo.latitude ?? BUSINESS.geo.latitude,
      longitude: location?.geo.longitude ?? BUSINESS.geo.longitude,
    },
    areaServed: location
      ? { "@type": "City", name: location.city }
      : {
          "@type": "AdministrativeArea",
          name: "Greater Manchester and North West England",
        },
    openingHoursSpecification: BUSINESS.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.opens,
      closes: h.closes,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "47",
    },
    sameAs: [BUSINESS.socials.facebook, BUSINESS.socials.instagram],
  };
  return <Script data={data} />;
}

export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: BUSINESS.addressLocality,
        addressRegion: BUSINESS.addressRegion,
        addressCountry: BUSINESS.addressCountry,
      },
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Greater Manchester and North West England",
    },
  };
  return <Script data={data} />;
}

export function FaqJsonLd({ faqs }: { faqs: FAQItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
  return <Script data={data} />;
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return <Script data={data} />;
}

export function ArticleJsonLd({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: AUTHOR.name,
      jobTitle: AUTHOR.role,
      url: `${SITE_URL}/about`,
    },
    reviewedBy: {
      "@type": "Person",
      name: REVIEWER.name,
      jobTitle: REVIEWER.role,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.svg`,
      },
    },
    mainEntityOfPage: url,
  };
  return <Script data={data} />;
}
