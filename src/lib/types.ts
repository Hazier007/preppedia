export type Category = {
  slug: string;
  name: string;
  intro: string;
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
};
