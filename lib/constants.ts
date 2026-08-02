export const SITE_URL = "https://akmediawalls.co.uk";
export const SITE_NAME = "AK Media Walls";

export const BUSINESS = {
  name: "AK Media Walls",
  legalName: "AK Media Walls Ltd",
  owner: "Muhammad Awais",
  phone: process.env.BUSINESS_PHONE || "07700 000000",
  phoneHref: (process.env.BUSINESS_PHONE || "07700 000000").replace(/\s/g, ""),
  email: process.env.CONTACT_EMAIL || "hello@akmediawalls.co.uk",
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
  founded: "2016",
  socials: {
    facebook: "https://www.facebook.com/akmediawalls",
    instagram: "https://www.instagram.com/akmediawalls",
  },
};

export const NAV_LINKS = [
  { label: "Gallery", href: "/gallery" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];
