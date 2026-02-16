import type { Item } from "@/lib/types";

export const ITEMS: Item[] = [
  // Water filtration
  { slug: "sawyer-squeeze-water-filter", title: "Sawyer Squeeze Water Filter", brand: "Sawyer", categorySlug: "water-filtration" },
  { slug: "katadyn-befree-water-filter", title: "Katadyn BeFree Water Filter", brand: "Katadyn", categorySlug: "water-filtration" },
  { slug: "lifestraw-personal-water-filter", title: "LifeStraw Personal Water Filter", brand: "LifeStraw", categorySlug: "water-filtration" },
  { slug: "survivor-filter-pro", title: "Survivor Filter Pro", brand: "Survivor Filter", categorySlug: "water-filtration" },
  { slug: "gravity-water-filter-system", title: "Gravity Water Filter System", brand: "Generic", categorySlug: "water-filtration" },

  // First aid
  {
    slug: "adventure-medical-kits-mountain-series",
    title: "Adventure Medical Kits (Mountain Series)",
    brand: "Adventure Medical Kits",
    categorySlug: "first-aid",
  },
  { slug: "mymedic-mymedic-bag", title: "MyMedic First Aid Kit", brand: "MyMedic", categorySlug: "first-aid" },

  // Emergency radio
  { slug: "midland-er310-emergency-radio", title: "Midland ER310 Emergency Radio", brand: "Midland", categorySlug: "emergency-radio" },
  { slug: "eton-frx3-emergency-radio", title: "Eton FRX3 Emergency Radio", brand: "Eton", categorySlug: "emergency-radio" },

  // Flashlights
  { slug: "streamlight-protac-1l-1aa", title: "Streamlight ProTac 1L-1AA", brand: "Streamlight", categorySlug: "flashlights" },
  { slug: "olight-warrior-mini", title: "Olight Warrior Mini", brand: "Olight", categorySlug: "flashlights" },
];
