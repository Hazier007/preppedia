import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { getGuide, listGuideSlugs } from "@/lib/guides";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return listGuideSlugs().map((slug) => ({ slug }));
}

export default async function GuidePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return notFound();

  const html = marked.parse(guide.markdown) as string;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <nav className="text-sm text-muted">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Guides</span>
          </nav>
          <h1 className="mt-4 text-4xl font-bold text-foreground lg:text-5xl">
            {guide.title}
          </h1>
          <p className="mt-3 text-muted">
            Updated as part of the Preppedia MVP. Product links should point to item pages.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12">
        <article
          className="rounded-2xl border border-border bg-card p-8"
          // marked output; keep markdown controlled via GitHub
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div className="mt-10">
          <Link
            href="/"
            className="text-accent font-semibold hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </main>

      <footer className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-muted">
          © 2026 Preppedia
        </div>
      </footer>
    </div>
  );
}
