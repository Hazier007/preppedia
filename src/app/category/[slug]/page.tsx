import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CATEGORIES } from "@/data/categories";
import { getCategory, getItemsByCategory } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-accent' : 'text-border'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm text-muted ml-1">({rating})</span>
    </div>
  );
};

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return notFound();

  const items = getItemsByCategory(category.slug);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <nav className="text-sm text-muted mb-4">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{category.name}</span>
          </nav>
          
          <div className="flex items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground lg:text-5xl">
                {category.name}
              </h1>
              <p className="mt-4 max-w-3xl text-lg text-muted">
                {category.intro}
              </p>
            </div>
            
            <Link
              href="/"
              className="bg-card border border-border text-foreground px-6 py-2 rounded-lg font-medium hover:border-accent transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Products Grid */}
      <main className="mx-auto max-w-7xl px-6 py-12">
        {items.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-muted">No products available in this category yet.</p>
            <Link href="/" className="inline-block mt-6 text-accent hover:underline">
              Explore other categories
            </Link>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                Best {category.name} Equipment
              </h2>
              <p className="text-muted">
                {items.length} product{items.length !== 1 ? 's' : ''} reviewed
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {items.map((item) => (
                <article
                  key={item.slug}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-colors group"
                >
                  <div className="aspect-square relative mb-4 bg-background rounded-lg overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-sm text-muted font-medium">
                      {item.brand}
                    </div>
                    
                    <h3 className="font-bold text-foreground text-lg leading-tight">
                      {item.title}
                    </h3>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-accent">
                        {item.price}
                      </span>
                      <StarRating rating={item.rating} />
                    </div>
                    
                    <p className="text-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">
                        Key Features:
                      </h4>
                      <ul className="text-sm text-muted space-y-1">
                        {item.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-accent mt-0.5 text-xs">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a
                      href={"/item/" + item.slug}
                      className="block w-full bg-accent text-background text-center py-3 rounded-lg font-semibold hover:bg-accent-dark transition-colors"
                    >
                      Read full review
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Best of CTA */}
            <div className="mt-16 bg-card/50 border border-border rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Want Our Top Picks?
              </h3>
              <p className="text-muted mb-6 max-w-2xl mx-auto">
                Check out our expert-curated "Best of 2026" list featuring the top 3 {category.name.toLowerCase()} products based on extensive testing and real-world performance.
              </p>
              <Link
                href={`/best/${category.slug}`}
                className="inline-block bg-accent text-background px-8 py-3 rounded-lg font-semibold hover:bg-accent-dark transition-colors"
              >
                View Best {category.name} 2026
              </Link>
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="text-center text-sm text-muted">
            <p>As an Amazon Associate I earn from qualifying purchases.</p>
            <p className="mt-2">© 2026 Preppedia. Expert reviews for serious preppers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
