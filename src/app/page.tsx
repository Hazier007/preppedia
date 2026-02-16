import Link from "next/link";
import { CATEGORIES } from "@/data/categories";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header>
        <p className="text-sm font-medium text-zinc-500">Preppedia</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900">
          Practical prepper guides, checklists and gear picks
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-600">
          MVP in progress. Today: categories + starter items. Next: best-of pages, item pages and internal linking.
        </p>
      </header>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-zinc-900">Start here</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="rounded-2xl border border-zinc-200 bg-white p-5 hover:bg-zinc-50"
            >
              <div className="font-semibold text-zinc-900">{c.name}</div>
              <p className="mt-2 text-sm text-zinc-600">{c.intro}</p>
              <p className="mt-3 text-xs text-zinc-500">/category/{c.slug}</p>
            </Link>
          ))}
        </div>
      </section>

      <footer className="mt-12 text-xs text-zinc-500">
        Built as a programmatic SEO MVP (hub → best-of → items). More content ships daily.
      </footer>
    </main>
  );
}
