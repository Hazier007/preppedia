import type { Item } from "@/lib/types";

export const AMAZON_STORE = "https://www.amazon.com";
export const AMAZON_TAG = "preppedia-20";

export function amazonSearchUrl(query: string) {
  const q = encodeURIComponent(query);
  return `${AMAZON_STORE}/s?k=${q}&tag=${AMAZON_TAG}`;
}

export function itemAmazonUrl(item: Item) {
  // Until we have ASINs, use a search URL. Still affiliate-tagged.
  return amazonSearchUrl(`${item.brand} ${item.title}`);
}
