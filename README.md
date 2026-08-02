# AK Media Walls

Lead generation website for **AK Media Walls**, a bespoke media wall design
and installation business serving Manchester and North West England.

Built with Next.js 15 (App Router, TypeScript), Tailwind CSS v4, shadcn/ui,
Framer Motion, and lucide-react. Contact form emails go through Resend;
lead records, admin-uploaded gallery photos, and admin blog posts are stored
via Vercel Blob (with a local filesystem fallback for development).

See [`CLAUDE.md`](./CLAUDE.md) for the full project guide, design tokens,
and content architecture.

## Getting started

```bash
npm install
cp .env.local.example .env.local   # fill in values, or leave blank for local dev
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Every environment variable in `.env.local.example` is optional locally:
without them, the contact form still saves leads (to `.data/`, gitignored)
without emailing, image uploads save to `public/uploads/`, and `/admin` is
simply unreachable until `ADMIN_PASSWORD` and `SESSION_SECRET` are set.

## Scripts

- `npm run dev` — local development server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint

## Admin panel

`/admin` is password-protected (`ADMIN_PASSWORD`). It provides a leads
dashboard, a gallery photo uploader (tagged by style and city), a blog post
editor, and business settings. All uploaded content is stored in Vercel
Blob in production.

## Deployment

Deploys to Vercel. Required environment variables in production:

- `ADMIN_PASSWORD`, `SESSION_SECRET` — admin panel access
- `RESEND_API_KEY`, `CONTACT_EMAIL` — contact form email delivery
- `BLOB_READ_WRITE_TOKEN` — required in production (the Vercel filesystem is
  read-only at runtime, so lead/gallery/blog storage needs Blob)
- `BUSINESS_PHONE` — displayed across the site
