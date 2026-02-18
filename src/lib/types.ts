export type Category = {
  slug: string;
  name: string;
  intro: string;
  // NEW:
  buyersGuide: string; // 600-800 word buyer's guide
  faq: Array<{ question: string; answer: string }>; // 8-10 FAQs
};

export type Item = {
  slug: string;
  title: string;
  brand: string;
  categorySlug: string;
  description: string;
  price: string;
  rating: number;
  amazonUrl: string;
  imageUrl: string;
  features: string[];
  // NEW FIELDS:
  review: string; // 400-600 word detailed review
  pros: string[]; // 4-5 pros
  cons: string[]; // 2-3 cons
  specifications: Record<string, string>; // key-value specs
  bestFor: string; // "Best for backpackers", "Best budget option", etc.
  verdict: string; // 2-3 sentence final verdict
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishDate: string;
  readTime: string;
};
