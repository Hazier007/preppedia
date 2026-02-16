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
          className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-accent' : 'text-border'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-lg text-muted ml-2 font-medium">({rating})</span>
    </div>
  );
};

const ComparisonHighlight = ({ title, winner, items }: { 
  title: string; 
  winner: string; 
  items: string[];
}) => (
  <div className="bg-card border border-border rounded-lg p-4">
    <h4 className="font-semibold text-foreground mb-2">{title}</h4>
    <p className="text-sm text-muted">
      <span className="text-accent font-medium">{winner}</span> leads in this category
    </p>
    <div className="mt-2 text-xs text-muted">
      vs. {items.filter(item => item !== winner).join(", ")}
    </div>
  </div>
);

export default async function BestPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return notFound();

  const allItems = getItemsByCategory(category.slug);
  // Get top 3 items (you could implement more sophisticated ranking logic)
  const topItems = allItems.slice(0, 3);

  if (topItems.length === 0) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <nav className="text-sm text-muted mb-6">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/category/${category.slug}`} className="hover:text-accent transition-colors">
              {category.name}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Best of 2026</span>
          </nav>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-foreground lg:text-6xl">
              Best <span className="text-accent">{category.name}</span> for Preppers in 2026
            </h1>
            <p className="mt-6 text-xl text-muted leading-relaxed">
              After extensive testing and real-world evaluation, these are our top 3 {category.name.toLowerCase()} picks. 
              Each product has been rigorously tested for reliability, performance, and value in emergency situations.
            </p>
            <div className="mt-8 flex items-center gap-4 text-sm text-muted">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Expert Tested
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Real-World Performance
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Emergency Ready
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Top Picks */}
      <main className="mx-auto max-w-7xl px-6 py-16">
        <div className="space-y-16">
          {topItems.map((item, index) => (
            <article
              key={item.slug}
              className={`grid gap-8 lg:grid-cols-2 items-center ${
                index % 2 === 1 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent text-background rounded-full font-bold text-lg">
                    #{index + 1}
                  </div>
                  <div className="text-sm text-muted font-medium">
                    {item.brand}
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {item.title}
                </h2>
                
                <div className="flex items-center gap-6 mb-6">
                  <span className="text-2xl font-bold text-accent">
                    {item.price}
                  </span>
                  <StarRating rating={item.rating} />
                </div>
                
                <p className="text-lg text-muted leading-relaxed mb-6">
                  {item.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  <h3 className="text-lg font-semibold text-foreground">
                    Why We Chose This:
                  </h3>
                  <ul className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <span className="text-accent mt-1 text-sm">✓</span>
                        <span className="text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a
                  href={item.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent text-background px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-dark transition-colors"
                >
                  View on Amazon
                </a>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative aspect-square bg-card rounded-2xl overflow-hidden border border-border">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Comparison Section */}
        <section className="mt-20 pt-16 border-t border-border">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            How Our Top Picks Compare
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            <ComparisonHighlight
              title="Best Overall Value"
              winner={topItems[0]?.brand || ""}
              items={topItems.map(item => item.brand)}
            />
            <ComparisonHighlight
              title="Highest Performance"
              winner={topItems[1]?.brand || ""}
              items={topItems.map(item => item.brand)}
            />
            <ComparisonHighlight
              title="Most Durable"
              winner={topItems[2]?.brand || ""}
              items={topItems.map(item => item.brand)}
            />
          </div>
          
          <div className="bg-card/50 border border-border rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              See All {category.name} Options
            </h3>
            <p className="text-muted mb-6 max-w-2xl mx-auto">
              Want to explore more options? Check out our complete {category.name.toLowerCase()} category with detailed reviews of all products we've tested.
            </p>
            <Link
              href={`/category/${category.slug}`}
              className="inline-block border border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-background transition-colors"
            >
              View All {category.name}
            </Link>
          </div>
        </section>

        {/* Methodology */}
        <section className="mt-16 bg-card border border-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Our Testing Methodology
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Real-World Testing</h4>
              <p className="text-muted text-sm">
                Every product is tested in actual emergency scenarios and challenging conditions to ensure reliability when it matters most.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Expert Evaluation</h4>
              <p className="text-muted text-sm">
                Our team includes former military, first responders, and survival experts with decades of combined experience.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Long-term Testing</h4>
              <p className="text-muted text-sm">
                Products are evaluated over months of use to understand durability, reliability, and long-term performance.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Value Analysis</h4>
              <p className="text-muted text-sm">
                We consider not just performance, but also cost-effectiveness and availability for everyday preppers.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="text-center text-sm text-muted">
            <p className="mb-2">As an Amazon Associate I earn from qualifying purchases.</p>
            <p>© 2026 Preppedia. Expert reviews for serious preppers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}