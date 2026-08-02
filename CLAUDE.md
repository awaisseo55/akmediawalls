# Media Walls North — Project Guide

Lead generation website for Media Walls North, a bespoke media wall
installation business serving Manchester and North West England. Next.js 15
(App Router, TypeScript), Tailwind CSS v4, shadcn/ui, Framer Motion,
lucide-react, next-themes, Resend, Vercel Blob, deployed on Vercel.

## Project rules

- **No product database.** This is a lead-gen site, not e-commerce. Marketing
  content (services, locations, gallery, blog, testimonials) lives in typed
  data files under `data/`. Runtime-generated content (leads, admin-uploaded
  gallery photos, admin blog posts, admin settings) is stored as JSON,
  persisted to **Vercel Blob** in production and to a local `.data/` folder
  (gitignored) when `BLOB_READ_WRITE_TOKEN` is not set, so the site is fully
  usable in local dev without any cloud credentials. See `lib/leads.ts` and
  `lib/admin-store.ts`.
- **British English throughout.** Colour, favourite, £. No em dashes in any
  copy, use commas, colons, semicolons, brackets, or full stops instead.
- **Every route needs metadata**: unique title (~60 chars), description
  (~155 chars), canonical (using `mediawallsnorth.co.uk`), Open Graph/Twitter
  tags.
- **JSON-LD schema**: `components/shared/json-ld.tsx` exports
  `OrganizationJsonLd` (homepage only, includes `WebSite` + `SearchAction`),
  `LocalBusinessJsonLd`, `ServiceJsonLd`, `FaqJsonLd`, `BreadcrumbJsonLd`, and
  `ArticleJsonLd` (with `author` and `reviewedBy` Person nodes). Every
  location page renders `LocalBusinessJsonLd` with that location's geo
  coordinates and `areaServed`. Every page with an FAQ accordion renders
  `FaqJsonLd` via the shared `FaqSection` component.
- **Images**: only use a stock photo where it genuinely shows what it claims
  to. Verified Unsplash URLs live in `lib/images.ts` (`STOCK`), each checked
  visually before use. Where no verified photo exists for a category, use
  `components/shared/portfolio-placeholder.tsx` rather than a mismatched
  photo.
- **Next.js 15 specifics**: `params` and `searchParams` on page/layout props
  are `Promise`s and must be `await`ed.
- Don't add authentication, payment, or booking-calendar features unless
  asked. The business model is: enquiry form -> lead stored/emailed -> the
  business calls the customer.

## Dark theme (the only theme — do not add a light mode)

Premium media wall installation is deliberately dark and cinematic, not
light/airy. `next-themes` is wired up with `forcedTheme="dark"` purely so the
`class="dark"` attribute is present for any dark-variant utilities; there is
no toggle and `:root` and `.dark` hold identical values in `app/globals.css`.

| Token | Value | Use |
|---|---|---|
| `--background` | `#0F0F0F` | Page background |
| `--background-alt` | `#1A1A1A` | Section separators |
| `--card` | `#1F1F1F` | Card and form input backgrounds |
| `--card-hover` | `#2A2A2A` | Dropdown/list item hover |
| `--footer` | `#0A0A0A` | Footer background |
| `--foreground` | `#FFFFFF` | Headings — must always be bright white |
| `--body` | `#D4D4D4` | Body text |
| `--muted` | `#A3A3A3` | Secondary/meta text |
| `--placeholder` | `#737373` | Form placeholder text |
| `--border` | `#2A2A2A` | Card/section borders |
| `--border-input` | `#3A3A3A` | Form input borders |
| `--forest` / `--primary` | `#2D5A3D` | Brand primary, CTA buttons (white text on this) |
| `--forest-hover` | `#3A7A50` | Primary hover |
| `--brass` / `--accent` | `#C9A961` | Premium accents, secondary CTAs (dark text on this) |
| `--brass-hover` | `#D4B872` | Brass hover |
| `--destructive` | `#EF4444` | Error states |
| `--success` | `#34D399` | Success states |

**Never use a dark/muted color for body text on a dark background** — that
was the exact bug this palette fixes. Headings are always `text-foreground`
(white), body copy is always `text-body` or lighter. When adding a new
component, check it against `components/ui/input.tsx` and
`components/ui/button.tsx` as the reference implementations for contrast.

Fonts: `--font-serif` (Cormorant Garamond, headings) and `--font-sans`
(Inter, body), loaded via `next/font/google` in `app/layout.tsx`.

## Brand

- Name: **Media Walls North**. Domain: `mediawallsnorth.co.uk`. Contact:
  `contact@mediawallsnorth.co.uk`.
- Logos: `public/logo.svg` (white wordmark, dark backgrounds — used in the
  header and everywhere on this site since it's all-dark), `public/logo-dark.svg`
  (forest green wordmark, for any future light-background use such as printed
  material or a light email template), `public/favicon.svg` (MWN monogram).
- Founder / author: **James Harrington** (`lib/constants.ts` → `AUTHOR`),
  founded the business in 2019, trained joiner, 12 years of experience.
  Credited as the author on every blog post and in the homepage/About
  Organization schema.
- Design reviewer: **Sarah Mitchell** (`lib/constants.ts` → `REVIEWER`),
  interior design consultant, 8 years advising homeowners across Greater
  Manchester. Credited as `reviewedBy` on every blog post's Article schema
  and shown in the reviewer bio box at the top and bottom of each post.

## Content architecture

- `data/services.ts` — the 4 services.
- `data/locations.ts` — the 12 location pages. Each `Location` carries the
  original intro/reviews/FAQ fields plus expanded fields added for the SEO
  content pass: `servicesIntro` (one paragraph per service, service-specific
  to that city), `whyChooseParagraphs`, `popularStyles` (4 styles with H3 +
  ~90 word description each), `costParagraph`, `ctaParagraph`, and
  `neighbouringLocations` (slugs, for internal linking to 2-3 nearby cities).
  `areasCovered` holds the exact neighbourhood lists supplied for each city —
  don't regenerate these from a template, they're deliberately specific per
  city for local SEO. Target 1200+ words of genuinely distinct copy per page;
  do not templatize by swapping only the city name.
- `data/gallery.ts` / `data/blog.ts` / `data/testimonials.ts` — as before.
  `BlogPost` now also carries `faqs` (FAQItem[]) and `lastUpdated`.
- Internal linking: every service page, location page, and blog post
  includes a natural in-content paragraph (not a sidebar widget) linking to
  related services, 2-3 locations, the gallery, pricing, and (for blog posts)
  other posts, using `next/link`.

## Admin panel (`/admin`)

Password-gated via `ADMIN_PASSWORD`, session cookie is an HMAC signed with
`SESSION_SECRET` (`lib/auth.ts`), verified in `middleware.ts` for every
`/admin/*` route except `/admin/login`. One shared password, no roles.

## Environment variables

See `.env.local.example`. All are optional for local development — the app
degrades gracefully (local filesystem storage instead of Blob, no email sent
but the lead is still saved, admin login simply unavailable without a
password set).
