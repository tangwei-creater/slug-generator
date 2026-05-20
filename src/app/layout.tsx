import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://sluggenerator.tools";

export const metadata: Metadata = {
  title: "Slug Generator - Free Online URL Slug Creator | SlugGenerator.tools",
  description:
    "Generate clean, SEO-friendly URL slugs instantly. Convert any text to a URL-safe slug with custom separators, transliteration, and more. Free online tool, no signup required.",
  keywords: ["slug generator", "url slug generator", "text to slug", "slugify online", "slug creator", "url slug creator", "seo friendly url"],
  authors: [{ name: "SlugGenerator.tools" }],
  openGraph: {
    title: "Slug Generator - Free Online URL Slug Creator",
    description:
      "Convert any text to a clean, SEO-friendly URL slug. Free, fast, no signup.",
    url: siteUrl,
    siteName: "SlugGenerator.tools",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Slug Generator - Free Online URL Slug Creator",
    description:
      "Convert any text to a clean, SEO-friendly URL slug. Free, fast, no signup.",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
