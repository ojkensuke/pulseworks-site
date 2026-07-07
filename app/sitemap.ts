import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pulseworks.co.jp";
  return [
    { url: `${base}/`, lastModified: "2026-07-07", changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/company`, lastModified: "2026-07-07", changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/privacy`, lastModified: "2026-07-07", changeFrequency: "yearly", priority: 0.3 },
  ];
}
