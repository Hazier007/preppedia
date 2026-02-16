import { CATEGORIES } from "@/data/categories";
import { ITEMS } from "@/data/items";
import type { Category, Item } from "@/lib/types";

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getItemsByCategory(slug: string): Item[] {
  return ITEMS.filter((i) => i.categorySlug === slug);
}
