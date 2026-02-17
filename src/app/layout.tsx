import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Preppedia - Best Survival Gear & Emergency Preparedness Equipment 2026",
  description:
    "Expert-tested survival gear reviews and emergency preparedness guides. Comprehensive buying advice for water filtration, first aid, food storage, emergency radios, and tactical flashlights.",
  keywords:
    "prepper gear, survival equipment, emergency preparedness, water filtration, first aid kits, food storage, emergency radio, tactical flashlights",
  alternates: { canonical: "https://preppedia.com" },
  openGraph: {
    title: "Preppedia - Best Survival Gear & Emergency Preparedness Equipment 2026",
    description:
      "Expert-tested survival gear reviews and emergency preparedness guides.",
    type: "website",
    locale: "en_US",
    url: "https://preppedia.com",
    siteName: "Preppedia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
