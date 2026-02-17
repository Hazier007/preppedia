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
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
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
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20" id="categories">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            Essential Survival Categories
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted">
            From water purification to tactical gear, we've tested and reviewed the best equipment for every survival scenario.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
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
              <p className="mt-4 text-muted text-xs">
                {category.slug === 'water-filtration' && 'From personal straws to family-sized purifiers. Expert-tested filters ensuring safe drinking water in any emergency scenario.'}
                {category.slug === 'first-aid' && 'Comprehensive kits and trauma supplies. Life-saving equipment tested by medical professionals and emergency responders.'}
                {category.slug === 'food-storage' && 'Long-term emergency nutrition solutions. Balanced meal plans and storage systems for sustained preparedness planning.'}
                {category.slug === 'emergency-radio' && 'Multi-powered communication devices. NOAA weather alerts and emergency broadcasts when conventional systems fail.'}
                {category.slug === 'flashlights' && 'Reliable illumination for any situation. Tactical-grade lights tested for durability, brightness, and extended runtime.'}
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

      {/* Why Trust Preppedia Section */}
      <section className="bg-card/20 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
              Why Trust Preppedia?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted">
              Expert testing, real-world experience, and unbiased reviews you can rely on.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="space-y-8">
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">🔬 Rigorous Testing Protocol</h3>
                <p className="text-muted leading-relaxed">
                  Every product undergoes comprehensive field testing in real emergency scenarios. Our team includes former military personnel, wilderness guides, and emergency medical professionals who understand what works when lives depend on it. We test gear in extreme conditions – from sub-zero temperatures to desert heat – ensuring our recommendations perform when you need them most.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">🎯 Unbiased Reviews</h3>
                <p className="text-muted leading-relaxed">
                  We purchase products at full retail price and maintain editorial independence from manufacturers. Our revenue comes from affiliate commissions only when you purchase products we genuinely recommend – aligning our interests with yours. We highlight both strengths and weaknesses, helping you make informed decisions based on honest assessments rather than marketing hype.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">📚 Expert Knowledge Base</h3>
                <p className="text-muted leading-relaxed">
                  Our team combines decades of survival experience with professional expertise in emergency medicine, wilderness survival, and tactical operations. We understand the difference between marketing claims and real-world performance, translating complex technical specifications into practical buying advice for serious preppers and everyday families alike.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">🔄 Continuous Updates</h3>
                <p className="text-muted leading-relaxed">
                  Preparedness technology evolves rapidly, and so do our recommendations. We regularly retestnew products, update existing reviews based on long-term use, and monitor user feedback to ensure our advice remains current. When better gear becomes available, we update our recommendations immediately – your preparedness shouldn't depend on outdated information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
              Prepping & Survival Gear FAQ
            </h2>
            <p className="mt-4 text-lg text-muted">
              Common questions about emergency preparedness and survival equipment.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { 
                question: "How much should I spend on emergency preparedness?", 
                answer: "Start with basic 72-hour supplies ($200-500 per person) focusing on water, food, light, and communication. Build gradually rather than making large purchases. Quality matters more than quantity – reliable gear that works when needed is worth the investment." 
              },
              { 
                question: "What are the most essential items for emergency preparedness?", 
                answer: "Water filtration/storage, non-perishable food, flashlights, emergency radio, first aid supplies, and backup power sources form the foundation. These address the most common emergency needs: hydration, nutrition, communication, medical care, and basic utilities." 
              },
              { 
                question: "How long should my emergency supplies last?", 
                answer: "Start with 72 hours, progress to 2 weeks, then 1-3 months. Most emergencies resolve within days, but extended disruptions require longer-term planning. Balance storage space, budget, and likelihood of extended emergencies in your area." 
              },
              { 
                question: "Should I focus on bug-out bags or home preparedness?", 
                answer: "Home preparedness addresses most likely scenarios since you'll probably shelter in place during emergencies. Bug-out bags cover evacuation situations. Start with home supplies, then add portable kits for evacuation scenarios specific to your location's risks." 
              },
              { 
                question: "How do I know if survival gear is high quality?", 
                answer: "Look for established brands with military/professional use, read professional reviews, check warranty coverage, and examine construction materials. Avoid gear that seems too cheap – quality emergency equipment costs more but performs when lives depend on it." 
              },
              { 
                question: "What's the difference between prepping and survivalism?", 
                answer: "Prepping focuses on emergency preparedness for likely disasters using modern resources. Survivalism emphasizes primitive skills and long-term self-sufficiency. Most people benefit from prepping approaches that enhance normal life while providing emergency backup." 
              },
              { 
                question: "How often should I replace emergency supplies?", 
                answer: "Check supplies every 6 months, rotating food and batteries. Water storage should be refreshed annually. Most quality gear lasts years, but batteries, food, and medications have expiration dates. Create calendar reminders for systematic replacement." 
              },
              { 
                question: "Should I store supplies in multiple locations?", 
                answer: "Yes – keep supplies at home, work, and in vehicles. This provides redundancy if you can't reach your primary supplies. Tailor contents to likely scenarios for each location, focusing on immediate needs rather than comprehensive supplies everywhere." 
              },
              { 
                question: "What skills should I learn for emergency preparedness?", 
                answer: "Basic first aid, CPR, fire safety, and water purification form the foundation. Add skills relevant to your area's risks: cold weather survival, communication protocols, food preservation, or basic mechanical repairs. Practice regularly to maintain proficiency." 
              },
              { 
                question: "How do I get family members interested in preparedness?", 
                answer: "Start with practical benefits that improve daily life, like emergency road kits or backup power for outages. Focus on likely scenarios rather than extreme situations. Make preparedness activities family bonding time, and emphasize safety and security rather than fear-based motivation." 
              }
            ].map((faq, index) => (
              <details key={index} className="bg-card border border-border rounded-lg">
                <summary className="p-6 font-semibold text-foreground cursor-pointer hover:text-accent transition-colors">
                  {faq.question}
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-card/30 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
          
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
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
