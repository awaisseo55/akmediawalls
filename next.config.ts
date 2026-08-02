import type { NextConfig } from "next";

const LOCATION_SLUGS = [
  "media-walls-manchester",
  "media-walls-preston",
  "media-walls-bolton",
  "media-walls-warrington",
  "media-walls-stockport",
  "media-walls-wigan",
  "media-walls-oldham",
  "media-walls-rochdale",
  "media-walls-salford",
  "media-walls-bury",
  "media-walls-tameside",
  "media-walls-liverpool",
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },
    ],
  },
  async redirects() {
    return [
      ...LOCATION_SLUGS.map((slug) => ({
        source: `/areas/${slug}`,
        destination: `/${slug}`,
        permanent: true,
      })),
      { source: "/areas", destination: "/areas-we-cover", permanent: true },
    ];
  },
};

export default nextConfig;
