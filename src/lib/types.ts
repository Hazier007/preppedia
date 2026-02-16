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
};
