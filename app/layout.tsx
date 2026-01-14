import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import portfolioData from "../data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair"
});

const {
  seo,
  personalInfo: { name }
} = portfolioData;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  metadataBase: new URL(seo.url),
  alternates: {
    canonical: seo.url
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.url,
    siteName: seo.siteName,
    type: "website",
    images: [
      {
        url: seo.openGraphImage,
        alt: `${name} executive portrait`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    creator: seo.twitterHandle,
    images: [seo.openGraphImage]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-night text-slate-100 antialiased selection:bg-data/40">
        {children}
      </body>
    </html>
  );
}

