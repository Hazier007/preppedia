import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { GUIDES } from "@/data/guides";
import type { Guide } from "@/lib/types";

interface GuidePageParams {
  slug: string;
}

interface GuidePageProps {
  params: Promise<GuidePageParams>;
}

export async function generateStaticParams(): Promise<GuidePageParams[]> {
  return GUIDES.map((guide) => ({
    slug: guide.slug,
  }));
}

function getGuide(slug: string): Guide | null {
  return GUIDES.find((guide) => guide.slug === slug) || null;
}

function getGuideContent(slug: string): string {
  try {
    const filePath = path.join(process.cwd(), "content", "guides", `${slug}.md`);
    return fs.readFileSync(filePath, "utf8");
  } catch {
    return "";
  }
}

function processInlineMarkdown(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let keyCounter = 0;

  const regex = /(\*\*([^*]+)\*\*)|\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    if (match[1]) {
      parts.push(<strong key={keyCounter++} className="text-foreground font-semibold">{match[2]}</strong>);
    } else if (match[3]) {
      parts.push(
        <Link key={keyCounter++} href={match[4]} className="text-accent hover:text-accent-dark underline font-medium">
          {match[3]}
        </Link>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 1 ? <>{parts}</> : parts.length === 1 ? parts[0] : text;
}

function MarkdownRenderer({ content }: { content: string }) {
  if (!content) return null;

  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let listItems: React.ReactNode[] = [];
  let inList = false;

  function flushList(key: number) {
    if (listItems.length > 0) {
      elements.push(
        <ul key={"list-" + key} className="list-disc list-inside space-y-2 mb-6 text-muted">
          {listItems}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.match(/^\s*[-*]\s/)) {
      inList = true;
      const itemText = line.replace(/^\s*[-*]\s+/, '');
      listItems.push(
        <li key={i} className="leading-relaxed">{processInlineMarkdown(itemText)}</li>
      );
      continue;
    }

    if (inList) flushList(i);

    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={i} className="text-4xl font-bold mb-6 lg:text-5xl">
          {processInlineMarkdown(line.substring(2))}
        </h1>
      );
    } else if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold mt-12 mb-6 text-accent lg:text-3xl">
          {processInlineMarkdown(line.substring(3))}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-xl font-bold mt-8 mb-4 lg:text-2xl">
          {processInlineMarkdown(line.substring(4))}
        </h3>
      );
    } else if (line.startsWith('#### ')) {
      elements.push(
        <h4 key={i} className="text-lg font-bold mt-6 mb-3">
          {processInlineMarkdown(line.substring(5))}
        </h4>
      );
    } else if (line.match(/^\d+\.\s/)) {
      const num = line.match(/^(\d+)/)?.[1];
      const itemText = line.replace(/^\d+\.\s+/, '');
      elements.push(
        <div key={i} className="flex gap-3 mb-3 text-muted">
          <span className="text-accent font-bold">{num}.</span>
          <span className="leading-relaxed">{processInlineMarkdown(itemText)}</span>
        </div>
      );
    } else if (line.trim() && !line.startsWith('#')) {
      elements.push(
        <p key={i} className="text-muted leading-relaxed mb-4">
          {processInlineMarkdown(line)}
        </p>
      );
    }
  }

  if (inList) flushList(lines.length);

  return <>{elements}</>;
}

export default async function GuidePage({ params }: GuidePageProps) {
  const resolvedParams = await params;
  const guide = getGuide(resolvedParams.slug);
  
  if (!guide) {
    notFound();
  }

  const content = getGuideContent(resolvedParams.slug);
  
  if (!content) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6">
          <nav className="flex items-center space-x-2 text-sm text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>→</span>
            <Link href="/#buyer-guides" className="hover:text-accent transition-colors">Buyer&apos;s Guides</Link>
            <span>→</span>
            <span className="text-foreground">{guide.title}</span>
          </nav>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-sm font-medium text-accent">
              📚 {guide.category}
              <span className="text-muted">•</span>
              {guide.readTime}
            </div>
            <h1 className="text-4xl font-bold mb-4 lg:text-5xl">{guide.title}</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">{guide.description}</p>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted">
              <span>📅 {new Date(guide.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>✅ Expert-tested</span>
              <span>🎯 Unbiased reviews</span>
            </div>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
        <MarkdownRenderer content={content} />
      </article>

      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold lg:text-3xl">More Buyer&apos;s Guides</h2>
            <p className="mt-4 text-muted">Expert-tested gear reviews and recommendations</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {GUIDES.filter(g => g.slug !== guide.slug).slice(0, 3).map((relatedGuide) => (
              <Link
                key={relatedGuide.slug}
                href={`/guide/${relatedGuide.slug}`}
                className="group rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="mb-3 inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {relatedGuide.category}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                  {relatedGuide.title}
                </h3>
                <p className="text-sm text-muted mb-4 leading-relaxed">
                  {relatedGuide.description}
                </p>
                <div className="flex items-center justify-between text-xs text-muted">
                  <span>{relatedGuide.readTime}</span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
