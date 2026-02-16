import Link from "next/link";
import { CATEGORIES } from "@/data/categories";

const categoryIcons: Record<string, string> = {
  "water-filtration": "💧",
  "first-aid": "🩹",
  "food-storage": "🥫",
  "emergency-radio": "📻",
  "flashlights": "🔦"
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-foreground lg:text-7xl">
              <span className="text-accent">Prepp</span>edia
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-muted lg:text-2xl">
              The ultimate guide to survival gear and emergency preparedness. 
              Expert reviews, tested recommendations, and everything you need to be ready for anything.
            </p>
            <div className="mt-10 flex items-center justify-center gap-6">
              <Link 
                href="#categories" 
                className="bg-accent text-background px-8 py-3 rounded-lg font-semibold text-lg hover:bg-accent-dark transition-colors"
              >
                Explore Gear
              </Link>
              <Link 
                href="/best/water-filtration" 
                className="border border-border text-foreground px-8 py-3 rounded-lg font-semibold text-lg hover:bg-card transition-colors"
              >
                Best of 2026
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Categories Section */}
      <main className="mx-auto max-w-7xl px-6 py-20" id="categories">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            Essential Survival Categories
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted">
            From water purification to tactical gear, we've tested and reviewed the best equipment for every survival scenario.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-4">
                {categoryIcons[category.slug]}
              </div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                {category.name}
              </h3>
              <p className="mt-3 text-muted text-sm leading-relaxed">
                {category.intro}
              </p>
              <div className="mt-6 inline-flex items-center text-accent text-sm font-semibold">
                Explore Category 
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-card/30 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground lg:text-3xl">
              Stay Prepared, Stay Safe
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted">
              Join thousands of preppers who trust our expert recommendations. 
              Get the gear that works when it matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-accent">Preppedia</h3>
              <p className="mt-4 text-muted max-w-md">
                Your trusted source for survival gear reviews, emergency preparedness guides, and expert recommendations since 2026.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground">Categories</h4>
              <ul className="mt-4 space-y-2">
                {CATEGORIES.slice(0, 3).map((category) => (
                  <li key={category.slug}>
                    <Link href={`/category/${category.slug}`} className="text-muted hover:text-accent transition-colors">
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground">Best Picks</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/best/water-filtration" className="text-muted hover:text-accent transition-colors">
                    Best Water Filters
                  </Link>
                </li>
                <li>
                  <Link href="/best/flashlights" className="text-muted hover:text-accent transition-colors">
                    Best Flashlights
                  </Link>
                </li>
                <li>
                  <Link href="/best/emergency-radio" className="text-muted hover:text-accent transition-colors">
                    Best Emergency Radios
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted">
              As an Amazon Associate I earn from qualifying purchases.
            </p>
            <div className="flex items-center gap-6">
              <p className="text-sm text-muted">
                © 2026 Preppedia. Built for preparedness professionals.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
