export const SITE_URL = "https://mediawallsnorth.co.uk";
export const SITE_NAME = "Media Walls North";

export const BUSINESS = {
  name: "Media Walls North",
  legalName: "Media Walls North Ltd",
  owner: "James Harrington",
  phone: process.env.BUSINESS_PHONE || "07700 000000",
  phoneHref: (process.env.BUSINESS_PHONE || "07700 000000").replace(/\s/g, ""),
  email: process.env.CONTACT_EMAIL || "contact@mediawallsnorth.co.uk",
  addressLocality: "Manchester",
  addressRegion: "Greater Manchester",
  postalCode: "M1 1AE",
  streetAddress: "Manchester City Centre",
  addressCountry: "GB",
  geo: {
    latitude: 53.4808,
    longitude: -2.2426,
  },
  hours: [
    { day: "Monday", opens: "08:00", closes: "18:00" },
    { day: "Tuesday", opens: "08:00", closes: "18:00" },
    { day: "Wednesday", opens: "08:00", closes: "18:00" },
    { day: "Thursday", opens: "08:00", closes: "18:00" },
    { day: "Friday", opens: "08:00", closes: "18:00" },
    { day: "Saturday", opens: "09:00", closes: "16:00" },
  ],
  priceRange: "££",
  founded: "2019",
  socials: {
    facebook: "https://www.facebook.com/mediawallsnorth",
    instagram: "https://www.instagram.com/mediawallsnorth",
  },
};

export const AUTHOR = {
  name: "James Harrington",
  role: "Founder & Lead Installer",
  slug: "james-harrington",
  bio: "James Harrington is the founder and lead installer at Media Walls North. A trained joiner with 12 years of experience building bespoke media walls, he started the business in 2019 after years of fitting out homes across Manchester and the North West to a standard he felt was missing from the market.",
  shortBio: "Founder of Media Walls North, trained joiner with 12 years of experience in bespoke media wall installation across Manchester and the North West.",
  initials: "JH",
};

export const REVIEWER = {
  name: "Sarah Mitchell",
  role: "Interior Design Consultant",
  slug: "sarah-mitchell",
  bio: "Sarah Mitchell is an interior design consultant with 8 years of experience advising homeowners across Greater Manchester on layout, materials, and finish. She reviews our design and materials guidance for accuracy and current interior trends.",
  shortBio: "Interior design consultant with 8 years of experience advising homeowners across Greater Manchester.",
  initials: "SM",
};

export const NAV_LINKS = [
  { label: "Gallery", href: "/gallery" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];
