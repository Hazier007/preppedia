import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Preppedia - Ultimate Prepper & Survival Gear Guide 2026",
  description: "Discover the best prepper gear, survival equipment, and emergency preparedness supplies. Expert reviews, buying guides, and trusted recommendations for water filtration, first aid, food storage, emergency radios, and tactical flashlights. Prepare for anything with Preppedia.",
  keywords: "prepper gear, survival equipment, emergency preparedness, water filtration, first aid kits, food storage, emergency radio, tactical flashlights, survival supplies",
  openGraph: {
    title: "Preppedia - Ultimate Prepper & Survival Gear Guide 2026",
    description: "Expert reviews and recommendations for the best survival gear and emergency preparedness equipment",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preppedia - Ultimate Prepper & Survival Gear Guide 2026",
    description: "Expert reviews and recommendations for the best survival gear and emergency preparedness equipment",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
