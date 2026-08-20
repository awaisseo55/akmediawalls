export type FAQItem = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  cardImage: string;
  summary: string;
  intro: string[];
  features: { title: string; description: string; icon: string }[];
  materials: { title: string; description: string }[];
  process: { title: string; description: string }[];
  timeline: string;
  pricingFrom: number;
  pricingFactors: string[];
  portfolioImages: { image: string; caption: string }[];
  faqs: FAQItem[];
};

export type Location = {
  slug: string;
  city: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  intro: string[];
  servicesOffered: string[];
  servicesIntro: { serviceSlug: string; paragraph: string }[];
  whyUs: string[];
  whyChooseParagraphs: string[];
  popularStyles: { title: string; description: string }[];
  postcodes: string;
  areasCovered: string[];
  areasParagraph: string;
  travelTime: string;
  landmarks: string[];
  neighbouringLocations: string[];
  reviews: { name: string; area: string; quote: string; service: string }[];
  costParagraph: string;
  ctaParagraph: string;
  faqs: FAQItem[];
  geo: { latitude: number; longitude: number };
};

export type GalleryStyle =
  | "fireplace"
  | "acoustic"
  | "tv-mount"
  | "slatted-wood"
  | "commercial";

export type GalleryItem = {
  id: string;
  title: string;
  style: GalleryStyle;
  location: string;
  image: string | null;
  description: string;
  timeline: string;
};

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  service: string;
  rating: number;
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  category: "Design Ideas" | "Cost Guides" | "Installation Tips" | "Home Improvement";
  excerpt: string;
  metaDescription: string;
  image: string;
  date: string;
  lastUpdated: string;
  readingTime: string;
  author: string;
  content: string[];
  relatedServiceSlugs: string[];
  relatedLocationSlugs: string[];
  faqs: FAQItem[];
};
