import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Preppedia - Best Survival Gear & Emergency Preparedness Equipment 2026",
  description: "Expert-tested survival gear reviews and emergency preparedness guides. Comprehensive buying advice for water filtration, first aid, food storage, emergency radios, and tactical flashlights. Trusted by preppers since 2026.",
  keywords: "prepper gear, survival equipment, emergency preparedness, water filtration, first aid kits, food storage, emergency radio, tactical flashlights, survival supplies, bug out bags, disaster preparedness, homesteading, off grid living, survival tools",
  authors: [{ name: "Preppedia Expert Team" }],
  creator: "Preppedia",
  publisher: "Preppedia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://preppedia.com",
  },
  openGraph: {
    title: "Preppedia - Best Survival Gear & Emergency Preparedness Equipment 2026",
    description: "Expert-tested survival gear reviews and emergency preparedness guides. Comprehensive buying advice for water filtration, first aid, food storage, emergency radios, and tactical flashlights.",
    type: "website",
    locale: "en_US",
    url: "https://preppedia.com",
    siteName: "Preppedia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preppedia - Best Survival Gear & Emergency Preparedness Equipment 2026",
    description: "Expert-tested survival gear reviews and emergency preparedness guides. Trusted recommendations for serious preppers.",
    creator: "@preppedia",
  },
  verification: {
    google: "your-google-site-verification-code",
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
