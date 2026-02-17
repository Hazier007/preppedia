"use client";

import Link from "next/link";
import { useState } from "react";
import { CATEGORIES } from "@/data/categories";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <span className="text-accent">Prepp</span>edia
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="text-sm font-medium text-muted hover:text-accent transition-colors"
            >
              {c.name}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-muted hover:text-accent"
            >
              {c.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
