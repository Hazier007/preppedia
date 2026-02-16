import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES } from "@/data/categories";
import { getCategory, getItemsByCategory } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export default function CategoryPage({ params }: { params: Params }) {
  const category = getCategory(params.slug);
  if (!category) return notFound();

  const items = getItemsByCategory(category.slug);

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-zinc-500">
            <Link href="/" className="hover:text-zinc-700">
              Home
            </Link>
            <span className="px-2">/</span>
            <span className="text-zinc-700">Category</span>
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">{category.name}</h1>
          <p className="mt-3 max-w-2xl text-zinc-600">{category.intro}</p>
        </div>

        <Link
          href="/"
          className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
        >
          Back
        </Link>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-zinc-900">Starter items</h2>
        {items.length === 0 ? (
          <p className="mt-2 text-zinc-600">No items yet for this category.</p>
        ) : (
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <li key={item.slug} className="rounded-2xl border border-zinc-200 bg-white p-5">
                <div className="text-sm text-zinc-500">{item.brand}</div>
                <div className="mt-1 font-semibold text-zinc-900">{item.title}</div>
                <div className="mt-3 text-xs text-zinc-500">Slug: {item.slug}</div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
        <h2 className="text-lg font-semibold text-zinc-900">Next</h2>
        <p className="mt-2 text-zinc-600">
          Coming next: <span className="font-medium">best-of pages</span> and <span className="font-medium">item pages</span> with
          internal linking rules.
        </p>
      </section>
    </main>
  );
}
