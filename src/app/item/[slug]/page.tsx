import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ITEMS } from "@/data/items";
import { CATEGORIES } from "@/data/categories";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return ITEMS.map((i) => ({ slug: i.slug }));
}

export default async function ItemPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const item = ITEMS.find((i) => i.slug === slug);
  if (!item) return notFound();

  const category = CATEGORIES.find((c) => c.slug === item.categorySlug);
  const relatedItems = ITEMS.filter(
    (i) => i.categorySlug === item.categorySlug && i.slug !== item.slug
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <nav className="text-sm text-muted mb-4">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              href={`/category/${item.categorySlug}`}
              className="hover:text-accent transition-colors"
            >
              {category?.name ?? "Category"}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{item.title}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20">
              {item.bestFor}
            </span>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      i < Math.floor(item.rating)
                        ? "text-accent"
                        : i < item.rating
                        ? "text-accent/50"
                        : "text-muted"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-muted">({item.rating}/5)</span>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-foreground lg:text-5xl">
            {item.title}
          </h1>
          <p className="mt-3 text-muted">Brand: {item.brand}</p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[420px_1fr]">
          {/* Product Image & Purchase */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="aspect-square relative bg-background rounded-xl overflow-hidden">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-3xl font-bold text-accent">{item.price}</span>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`${
                        i < Math.floor(item.rating)
                          ? "text-accent"
                          : i < item.rating
                          ? "text-accent/50"
                          : "text-muted"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-muted">({item.rating})</span>
              </div>
            </div>

            <a
              href={item.amazonUrl}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="mt-6 block w-full bg-accent hover:bg-accent/90 text-background text-center py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Buy on Amazon
            </a>

            <p className="mt-3 text-xs text-muted text-center">
              As an Amazon Associate we earn from qualifying purchases.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Overview */}
            <section className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted leading-relaxed">{item.description}</p>
            </section>

            {/* Pros & Cons */}
            <section className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Pros & Cons</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-4">Pros</h3>
                  <ul className="space-y-2">
                    {item.pros.map((pro, idx) => (
                      <li key={idx} className="flex gap-3 text-muted">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-400 mb-4">Cons</h3>
                  <ul className="space-y-2">
                    {item.cons.map((con, idx) => (
                      <li key={idx} className="flex gap-3 text-muted">
                        <span className="text-red-400 mt-0.5">✗</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Specifications */}
            <section className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Specifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(item.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">{key}</span>
                    <span className="text-muted">{value}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Full Review */}
            <section className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Detailed Review</h2>
              <div className="prose prose-invert max-w-none">
                {item.review.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-muted leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Key Features */}
            <section className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Key Features</h2>
              <ul className="space-y-3">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-accent mt-0.5">✓</span>
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Verdict */}
            <section className="bg-accent/5 border border-accent/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Verdict</h2>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-foreground">Rating:</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-xl ${
                          i < Math.floor(item.rating)
                            ? "text-accent"
                            : i < item.rating
                            ? "text-accent/50"
                            : "text-muted"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-lg font-semibold text-foreground">{item.rating}/5</span>
                </div>
              </div>
              <p className="text-muted leading-relaxed">{item.verdict}</p>
            </section>

            {/* Related Products */}
            {relatedItems.length > 0 && (
              <section className="bg-card border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">More from {category?.name}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedItems.map((relatedItem) => (
                    <Link
                      key={relatedItem.slug}
                      href={`/item/${relatedItem.slug}`}
                      className="block bg-background border border-border rounded-xl p-4 hover:border-accent/50 transition-colors"
                    >
                      <div className="aspect-square relative bg-card rounded-lg overflow-hidden mb-3">
                        <Image
                          src={relatedItem.imageUrl}
                          alt={relatedItem.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <h3 className="font-semibold text-foreground text-sm mb-2 line-clamp-2">
                        {relatedItem.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-accent font-bold">{relatedItem.price}</span>
                        <div className="flex items-center gap-1">
                          <span className="text-accent text-sm">★</span>
                          <span className="text-muted text-sm">{relatedItem.rating}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Back to Category */}
            <div className="bg-card/50 border border-border rounded-2xl p-8">
              <Link
                href={`/category/${item.categorySlug}`}
                className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
              >
                ← Back to {category?.name ?? "category"}
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}