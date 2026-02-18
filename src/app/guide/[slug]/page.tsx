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

// Generate static paths for all guides
export async function generateStaticParams(): Promise<GuidePageParams[]> {
  return GUIDES.map((guide) => ({
    slug: guide.slug,
  }));
}

// Get guide metadata
function getGuide(slug: string): Guide | null {
  return GUIDES.find((guide) => guide.slug === slug) || null;
}

// Read and parse markdown content
function getGuideContent(slug: string): string {
  try {
    const filePath = path.join(process.cwd(), "content", "guides", `${slug}.md`);
    return fs.readFileSync(filePath, "utf8");
  } catch (error) {
    return "";
  }
}

// Simple markdown to JSX renderer
function MarkdownRenderer({ content }: { content: string }) {
  if (!content) return null;

  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let currentIndex = 0;

  while (currentIndex < lines.length) {
    const line = lines[currentIndex];
    
    // H1
    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={currentIndex} className="text-4xl font-bold mb-6 lg:text-5xl">
          {line.substring(2)}
        </h1>
      );
    }
    // H2
    else if (line.startsWith('## ')) {
      elements.push(
        <h2 key={currentIndex} className="text-2xl font-bold mt-12 mb-6 text-accent lg:text-3xl">
          {line.substring(3)}
        </h2>
      );
    }
    // H3
    else if (line.startsWith('### ')) {
      const title = line.substring(4);
      elements.push(
        <h3 key={currentIndex} className="text-xl font-bold mt-8 mb-4 lg:text-2xl">
          {title}
        </h3>
      );
    }
    // Paragraph
    else if (line.trim() && !line.startsWith('#')) {
      // Process inline markdown (links, bold, etc.)
      const processedLine = processInlineMarkdown(line);
      elements.push(
        <p key={currentIndex} className="text-muted leading-relaxed mb-4">
          {processedLine}
        </p>
      );
    }
    // Empty lines
    else if (line.trim() === '') {
      // Skip empty lines, spacing handled by margins
    }

    currentIndex++;
  }

  return <>{elements}</>;
}

// Process inline markdown elements
function processInlineMarkdown(text: string): React.ReactNode {
  // Process links [text](/url)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    // Add the link
    const linkText = match[1];
    const linkUrl = match[2];
    
    parts.push(
      <Link 
        key={match.index}
        href={linkUrl}
        className="text-accent hover:text-accent-dark underline font-medium"
      >
        {linkText}
      </Link>
    );

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 1 ? <>{parts}</> : text;
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
      {/* Breadcrumb Navigation */}
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6">
          <nav className="flex items-center space-x-2 text-sm text-muted">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span>→</span>
            <Link href="/#buyer-guides" className="hover:text-accent transition-colors">
              Buyer's Guides
            </Link>
            <span>→</span>
            <span className="text-foreground">{guide.title}</span>
          </nav>
        </div>
      </section>

      {/* Guide Header */}
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
              <span>📅 {new Date(guide.publishDate).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
              <span>✅ Expert-tested</span>
              <span>🎯 Unbiased reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Content */}
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="prose prose-lg max-w-none">
          <MarkdownRenderer content={content} />
        </div>
      </article>

      {/* Related Guides */}
      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold lg:text-3xl">More Buyer's Guides</h2>
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
          
          <div className="text-center mt-12">
            <Link
              href="/#buyer-guides"
              className="inline-block rounded-xl bg-accent px-8 py-3 font-semibold text-background hover:bg-accent-dark transition-colors"
            >
              View All Buyer's Guides
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}