import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ITEMS } from "@/data/items";
import { CATEGORIES } from "@/data/categories";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return ITEMS.map((i) => ({ slug: i.slug }));
}

export default function ItemPage({ params }: { params: Params }) {
  const item = ITEMS.find((i) => i.slug === params.slug);
  if (!item) return notFound();

  const category = CATEGORIES.find((c) => c.slug === item.categorySlug);

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

          <h1 className="text-4xl font-bold text-foreground lg:text-5xl">
            {item.title}
          </h1>
          <p className="mt-3 text-muted">Brand: {item.brand}</p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[420px_1fr]">
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
              <span className="text-2xl font-bold text-accent">{item.price}</span>
              <span className="text-sm text-muted">Rating: {item.rating}</span>
            </div>

            <a
              href={item.amazonUrl}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="mt-6 block w-full bg-accent text-background text-center py-3 rounded-lg font-semibold hover:bg-accent-dark transition-colors"
            >
              Check price on Amazon
            </a>

            <p className="mt-3 text-xs text-muted">
              Disclosure: as an Amazon Associate we may earn from qualifying purchases.
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground">Overview</h2>
              <p className="mt-4 text-muted leading-relaxed">{item.description}</p>
            </section>

            <section className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground">Key features</h2>
              <ul className="mt-4 space-y-2 text-muted">
                {item.features.map((f, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-accent">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-card/50 border border-border rounded-2xl p-8">
              <h2 className="text-xl font-bold text-foreground">Next (MVP+)</h2>
              <p className="mt-3 text-muted">
                Add a 300–500 word review (real pros/cons, who it’s for, and alternatives).
              </p>
              <div className="mt-6">
                <Link
                  href={`/category/${item.categorySlug}`}
                  className="text-accent font-semibold hover:underline"
                >
                  ← Back to {category?.name ?? "category"}
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
