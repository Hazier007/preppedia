import Link from "next/link";
import { notFound } from "next/navigation";
import { ITEMS } from "@/data/items";
import { CATEGORIES } from "@/data/categories";
import { itemAmazonUrl } from "@/lib/amazon";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return ITEMS.map((i) => ({ slug: i.slug }));
}

export default function ItemPage({ params }: { params: Params }) {
  const item = ITEMS.find((i) => i.slug === params.slug);
  if (!item) return notFound();

  const category = CATEGORIES.find((c) => c.slug === item.categorySlug);

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <p className="text-sm text-zinc-500">
        <Link href="/" className="hover:text-zinc-700">
          Home
        </Link>
        <span className="px-2">/</span>
        <Link href={`/category/${item.categorySlug}`} className="hover:text-zinc-700">
          {category?.name ?? "Category"}
        </Link>
        <span className="px-2">/</span>
        <span className="text-zinc-700">Item</span>
      </p>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900">
        {item.title}
        <span className="ml-2 text-base font-medium text-zinc-500">({item.brand})</span>
      </h1>

      <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-zinc-900">Quick take</h2>
        <p className="mt-2 text-zinc-600">
          MVP content. Next: 300–500 word review, pros/cons, specs and alternatives.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={itemAmazonUrl(item)}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800"
          >
            Check price on Amazon
          </a>
          <Link
            href={`/category/${item.categorySlug}`}
            className="rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
          >
            Back to category
          </Link>
        </div>

        <p className="mt-3 text-xs text-zinc-500">
          Affiliate disclosure: outbound links may be affiliate links (tag: {"preppedia-20"}).
        </p>
      </section>
    </main>
  );
}
