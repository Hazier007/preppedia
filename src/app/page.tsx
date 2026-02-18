import Link from "next/link";
import { CATEGORIES } from "@/data/categories";
import { GUIDES } from "@/data/guides";

const icons: Record<string, string> = {
  "water-filtration": "💧",
  "first-aid": "🩹",
  "food-storage": "🥫",
  "emergency-radio": "📻",
  "flashlights": "🔦",
};

const extraDesc: Record<string, string> = {
  "water-filtration":
    "From personal straws to family-sized purifiers. Expert-tested filters ensuring safe drinking water in any emergency scenario.",
  "first-aid":
    "Comprehensive kits and trauma supplies. Life-saving equipment tested by medical professionals and emergency responders.",
  "food-storage":
    "Long-term emergency nutrition solutions. Balanced meal plans and storage systems for sustained preparedness planning.",
  "emergency-radio":
    "Multi-powered communication devices. NOAA weather alerts and emergency broadcasts when conventional systems fail.",
  flashlights:
    "Reliable illumination for any situation. Tactical-grade lights tested for durability, brightness, and extended runtime.",
};

const faqs = [
  { q: "How much should I spend on emergency preparedness?", a: "Start with basic 72-hour supplies ($200-500 per person) focusing on water, food, light, and communication. Build gradually rather than making large purchases. Quality matters more than quantity – reliable gear that works when needed is worth the investment." },
  { q: "What are the most essential items for emergency preparedness?", a: "Water filtration/storage, non-perishable food, flashlights, emergency radio, first aid supplies, and backup power sources form the foundation. These address the most common emergency needs: hydration, nutrition, communication, medical care, and basic utilities." },
  { q: "How long should my emergency supplies last?", a: "Start with 72 hours, progress to 2 weeks, then 1-3 months. Most emergencies resolve within days, but extended disruptions require longer-term planning. Balance storage space, budget, and likelihood of extended emergencies in your area." },
  { q: "Should I focus on bug-out bags or home preparedness?", a: "Home preparedness addresses most likely scenarios since you'll probably shelter in place during emergencies. Bug-out bags cover evacuation situations. Start with home supplies, then add portable kits for evacuation scenarios specific to your location's risks." },
  { q: "How do I know if survival gear is high quality?", a: "Look for established brands with military/professional use, read professional reviews, check warranty coverage, and examine construction materials. Avoid gear that seems too cheap – quality emergency equipment costs more but performs when lives depend on it." },
  { q: "What's the difference between prepping and survivalism?", a: "Prepping focuses on emergency preparedness for likely disasters using modern resources. Survivalism emphasizes primitive skills and long-term self-sufficiency. Most people benefit from prepping approaches that enhance normal life while providing emergency backup." },
  { q: "How often should I replace emergency supplies?", a: "Check supplies every 6 months, rotating food and batteries. Water storage should be refreshed annually. Most quality gear lasts years, but batteries, food, and medications have expiration dates. Create calendar reminders for systematic replacement." },
  { q: "Should I store supplies in multiple locations?", a: "Yes – keep supplies at home, work, and in vehicles. This provides redundancy if you can't reach your primary supplies. Tailor contents to likely scenarios for each location, focusing on immediate needs rather than comprehensive supplies everywhere." },
  { q: "What skills should I learn for emergency preparedness?", a: "Basic first aid, CPR, fire safety, and water purification form the foundation. Add skills relevant to your area's risks: cold weather survival, communication protocols, food preservation, or basic mechanical repairs. Practice regularly to maintain proficiency." },
  { q: "How do I get family members interested in preparedness?", a: "Start with practical benefits that improve daily life, like emergency road kits or backup power for outages. Focus on likely scenarios rather than extreme situations. Make preparedness activities family bonding time, and emphasize safety and security rather than fear-based motivation." },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden">
        {/* CSS aurora + subtle grid (fast + SEO-safe) */}
        <div className="aurora" />
        <div className="bg-grid" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:py-40">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1 text-sm font-medium text-muted backdrop-blur">
            <span className="text-accent">●</span>
            Tech-grade gear picks for real-world emergencies
          </p>
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Preparedness, with <span className="text-accent">signal</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
            Clear, modern buying guides for survival gear. Shortlists, specs that matter,
            and picks you can trust when it counts.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#categories"
              className="rounded-xl bg-accent px-8 py-3.5 text-lg font-semibold text-background transition-colors hover:bg-accent-dark"
            >
              Browse categories
            </Link>
            <Link
              href="/best/water-filtration"
              className="rounded-xl border border-border bg-card/40 px-8 py-3.5 text-lg font-semibold backdrop-blur transition-colors hover:bg-card"
            >
              See best picks →
            </Link>
          </div>

          {/* trust bar */}
          <div className="mx-auto mt-14 flex flex-wrap items-center justify-center gap-8 text-sm text-muted">
            <span>✅ Shortlists &amp; comparisons</span>
            <span>🔬 Field-minded picks</span>
            <span>🧾 Transparent affiliate disclosure</span>
            <span>⚡ Fast, SEO-first pages</span>
          </div>
        </div>
      </section>

      {/* ── Featured Best Guides ── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <h2 className="text-2xl font-bold lg:text-3xl">Start with the essentials</h2>
              <p className="mt-2 max-w-2xl text-muted">
                Our most popular “best of” guides — fast shortlists you can act on.
              </p>
            </div>
            <Link
              href="#categories"
              className="rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-card/70"
            >
              Or browse all categories →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                href: "/best/water-filtration",
                title: "Best Water Filters",
                desc: "Straws, squeeze filters, and gravity systems — what actually works.",
                tag: "Water",
              },
              {
                href: "/best/first-aid",
                title: "Best First Aid Kits",
                desc: "From everyday carry to trauma-ready kits — smart setups.",
                tag: "Medical",
              },
              {
                href: "/best/flashlights",
                title: "Best Flashlights",
                desc: "Runtime, beam, durability — tactical picks without the hype.",
                tag: "Light",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
                </div>
                <div className="relative">
                  <p className="inline-flex items-center rounded-full border border-border bg-background/40 px-3 py-1 text-xs font-semibold text-muted">
                    {card.tag}
                  </p>
                  <h3 className="mt-4 text-xl font-bold transition-colors group-hover:text-accent">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{card.desc}</p>
                  <span className="mt-6 inline-flex items-center text-sm font-semibold text-accent">
                    View guide
                    <svg
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section id="categories" className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold lg:text-4xl">Essential Survival Categories</h2>
            <p className="mt-4 text-muted text-lg">
              From water purification to tactical gear — tested and reviewed for every scenario.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-200 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5"
              >
                <span className="text-4xl">{icons[cat.slug]}</span>
                <h3 className="mt-4 text-xl font-bold group-hover:text-accent transition-colors">
                  {cat.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{cat.intro}</p>
                <p className="mt-3 text-xs leading-relaxed text-muted/70">
                  {extraDesc[cat.slug]}
                </p>
                <span className="mt-auto pt-6 inline-flex items-center text-sm font-semibold text-accent">
                  Explore Category
                  <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Buyer's Guides ── */}
      <section id="buyer-guides" className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold lg:text-4xl">Expert Buyer's Guides</h2>
            <p className="mt-4 text-muted text-lg">
              In-depth reviews and recommendations from our testing team. 1000+ words of expert analysis for every category.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {GUIDES.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guide/${guide.slug}`}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-200 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                  📚 {guide.category}
                </div>
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors mb-3">
                  {guide.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted mb-4">
                  {guide.description}
                </p>
                <div className="mt-auto flex items-center justify-between pt-4 text-xs text-muted">
                  <span>{guide.readTime}</span>
                  <span className="inline-flex items-center text-sm font-semibold text-accent group-hover:translate-x-1 transition-transform">
                    Read Guide →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted mb-6">
              ✅ Field-tested recommendations • 🎯 Unbiased reviews • 🔬 Professional analysis
            </p>
          </div>
        </div>
      </section>

      {/* ── Why Trust ── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold lg:text-4xl">Why Trust Preppedia?</h2>
            <p className="mt-4 text-muted text-lg">
              Expert testing, real-world experience, and unbiased reviews you can rely on.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {[
              { icon: "🔬", title: "Rigorous Testing Protocol", body: "Every product undergoes comprehensive field testing in real emergency scenarios. Our team includes former military personnel, wilderness guides, and emergency medical professionals who understand what works when lives depend on it." },
              { icon: "📚", title: "Expert Knowledge Base", body: "Our team combines decades of survival experience with professional expertise in emergency medicine, wilderness survival, and tactical operations. We translate complex specs into practical buying advice." },
              { icon: "🎯", title: "Unbiased Reviews", body: "We purchase products at full retail price and maintain editorial independence. Our revenue comes from affiliate commissions only when you purchase products we genuinely recommend — aligning our interests with yours." },
              { icon: "🔄", title: "Continuous Updates", body: "Preparedness technology evolves rapidly. We regularly retest products, update reviews based on long-term use, and monitor feedback to ensure our advice stays current." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-8">
                <h3 className="text-xl font-bold">
                  <span className="mr-2">{item.icon}</span>
                  {item.title}
                </h3>
                <p className="mt-4 leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-border bg-card/20">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold lg:text-4xl">Prepping &amp; Survival Gear FAQ</h2>
            <p className="mt-4 text-muted text-lg">Common questions about emergency preparedness.</p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group rounded-xl border border-border bg-card">
                <summary className="cursor-pointer select-none p-5 font-semibold hover:text-accent transition-colors">
                  {f.q}
                </summary>
                <div className="px-5 pb-5">
                  <p className="leading-relaxed text-muted">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-2xl font-bold lg:text-3xl">Stay Prepared, Stay Safe</h2>
          <p className="mt-4 text-muted">
            Join thousands of preppers who trust our expert recommendations.
            Get the gear that works when it matters most.
          </p>
          <Link
            href="#categories"
            className="mt-8 inline-block rounded-xl bg-accent px-8 py-3 font-semibold text-background hover:bg-accent-dark transition-colors"
          >
            Browse All Gear
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <h3 className="text-2xl font-bold text-accent">Preppedia</h3>
              <p className="mt-4 max-w-md text-muted">
                Your trusted source for survival gear reviews, emergency preparedness
                guides, and expert recommendations since 2026.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Categories</h4>
              <ul className="mt-4 space-y-2 text-sm">
                {CATEGORIES.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/category/${c.slug}`} className="text-muted hover:text-accent transition-colors">
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Best Picks</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/best/water-filtration" className="text-muted hover:text-accent transition-colors">Best Water Filters</Link></li>
                <li><Link href="/best/flashlights" className="text-muted hover:text-accent transition-colors">Best Flashlights</Link></li>
                <li><Link href="/best/emergency-radio" className="text-muted hover:text-accent transition-colors">Best Emergency Radios</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted sm:flex-row">
            <p>As an Amazon Associate I earn from qualifying purchases.</p>
            <p>© 2026 Preppedia. Built for preparedness professionals.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
