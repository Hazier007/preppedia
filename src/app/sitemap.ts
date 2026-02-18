import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/data/categories";
import { ITEMS } from "@/data/items";

const BASE = "https://preppedia.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
  ];

  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((c) => ({
    url: `${BASE}/category/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const bestPages: MetadataRoute.Sitemap = CATEGORIES.map((c) => ({
    url: `${BASE}/best/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const itemPages: MetadataRoute.Sitemap = ITEMS.map((i) => ({
    url: `${BASE}/item/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...categoryPages, ...bestPages, ...itemPages];
}
