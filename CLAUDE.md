# AK Media Walls — Project Guide

Lead generation website for AK Media Walls, a bespoke media wall installation
business serving Manchester and North West England. Next.js 15 (App Router,
TypeScript), Tailwind CSS v4, shadcn/ui, Framer Motion, lucide-react,
next-themes, Resend, Vercel Blob, deployed on Vercel.

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
  (~155 chars), canonical, Open Graph/Twitter tags. Use the `Metadata` export
  or `generateMetadata` per page, following the patterns already in
  `app/services/[slug]/page.tsx` and `app/areas/[slug]/page.tsx`.
- **JSON-LD schema**: `components/shared/json-ld.tsx` exports
  `LocalBusinessJsonLd`, `ServiceJsonLd`, `FaqJsonLd`, `BreadcrumbJsonLd`, and
  `ArticleJsonLd`. Every location page must render `LocalBusinessJsonLd` with
  that location's geo coordinates and `areaServed`. Every page with an FAQ
  accordion must render `FaqJsonLd` via the shared `FaqSection` component.
- **Images**: only use a stock photo where it genuinely shows what it claims
  to (a media wall, a fireplace wall, a slatted wood wall, etc.). Verified
  Unsplash URLs live in `lib/images.ts` (`STOCK`), each checked visually
  before use. Where no verified photo exists for a category (currently:
  dedicated acoustic-panel installs, some commercial shots), use
  `components/shared/portfolio-placeholder.tsx` rather than a mismatched
  photo. Replace `STOCK` entries and placeholders with real project photos
  via the admin gallery uploader as they become available.
- **Next.js 15 specifics**: `params` and `searchParams` on page/layout props
  are `Promise`s and must be `await`ed (see any `app/**/[slug]/page.tsx`).
- Don't add authentication, payment, or booking-calendar features unless
  asked. The business model is: enquiry form -> lead stored/emailed -> the
  business calls the customer. Nothing more complex than that is in scope.

## Design tokens (Tailwind v4 `@theme`, defined in `app/globals.css`)

| Token | Value | Use |
|---|---|---|
| `--background` | `#FAF8F5` | Page background |
| `--background-alt` | `#F1EEE9` | Section separators |
| `--card` | `#FFFFFF` | Card backgrounds |
| `--foreground` | `#1A1A1A` | Headings |
| `--body` | `#3D3D3D` | Body text |
| `--muted` | `#6B6B6B` | Secondary/meta text |
| `--forest` / `--primary` | `#1F3D2E` | Brand primary, CTA buttons |
| `--forest-hover` | `#152920` | Primary hover |
| `--brass` / `--accent` | `#B8925A` | Premium accents, highlights on dark sections |

Fonts: `--font-serif` (Cormorant Garamond, headings) and `--font-sans`
(Inter, body), loaded via `next/font/google` in `app/layout.tsx`. Radius
scale is moderate (`rounded-lg` default), shadows use the warm-tinted
`shadow-warm` / `shadow-warm-lg` utilities rather than default Tailwind
grey shadows.

Dark mode exists (`next-themes`, `class` strategy) but **light is the
default and the primary design target**; the brief is a light, warm,
premium look.

## Content architecture

- `data/services.ts` — the 4 services, each with intro, features, materials,
  process, pricing, portfolio images, and 6 FAQs. Both `/services` and
  `/services/[slug]` read from here; there is no separate content file per
  service page.
- `data/locations.ts` — the 12 location pages. Each has genuinely unique
  intro copy, local landmarks/postcodes, reviews, and FAQs — do not
  templatize this further; SEO value depends on the copy being distinct.
- `data/gallery.ts` — seed portfolio items tagged by `style` and
  `location`; merged at request time with admin-uploaded items
  (`lib/admin-store.ts`) on `/gallery`.
- `data/blog.ts` — the 5 seed posts; merged with admin-authored posts the
  same way. Blog post `content` is an array of paragraph strings; a string
  starting with `"## "` renders as an `<h2>`.
- `data/testimonials.ts` — homepage testimonial cards.

## Admin panel (`/admin`)

Password-gated via `ADMIN_PASSWORD` (checked in
`app/api/admin/login/route.ts`), session cookie is an HMAC signed with
`SESSION_SECRET` (`lib/auth.ts`), verified in `middleware.ts` for every
`/admin/*` route except `/admin/login`. There is no user table, no roles —
one shared password, matching the scope of a small local business tool.

## Environment variables

See `.env.local.example`. `BLOB_READ_WRITE_TOKEN`, `RESEND_API_KEY`, and
`ADMIN_PASSWORD`/`SESSION_SECRET` are all optional for local development —
the app degrades gracefully (local filesystem storage instead of Blob, no
email sent but the lead is still saved, admin login simply unavailable
without a password set).
