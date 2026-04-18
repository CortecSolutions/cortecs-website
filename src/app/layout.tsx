import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://www.cortecs.ca";
const SITE_TITLE =
  "Cortecs — AI consulting for small businesses in London, Ontario";
const SITE_DESC =
  "Practical AI consulting and training for small businesses in London, Ontario. On-site and remote assessments, hands-on tool setup, private infrastructure. No enterprise jargon.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: "%s · Cortecs" },
  description: SITE_DESC,
  keywords: [
    "AI consulting London Ontario",
    "small business AI",
    "AI training",
    "Microsoft Copilot training",
    "ChatGPT for business",
    "private AI",
    "on-premise AI",
  ],
  authors: [{ name: "Matt Grandy" }],
  creator: "Matt Grandy",
  publisher: "Cortecs",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: "Cortecs",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: [
      { url: "/og-image.svg", width: 1200, height: 630, alt: "Cortecs" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: ["/og-image.svg"],
  },
  alternates: { canonical: SITE_URL },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "Xj4IrHQq5AJgGeZHrCsjtlnqbcO9h7uuCaLrcqc3ZQI",
  },
};

// LocalBusiness structured data — critical for London, ON local search.
// Address uses only city/region (no street — Matt works from home).
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Cortecs",
  url: SITE_URL,
  description:
    "AI consulting and training for small businesses in London, Ontario and surrounding area.",
  image: `${SITE_URL}/og-image.svg`,
  areaServed: [
    { "@type": "City", name: "London" },
    { "@type": "AdministrativeArea", name: "Middlesex County" },
    { "@type": "AdministrativeArea", name: "Ontario" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.9849,
    longitude: -81.2453,
  },
  priceRange: "$$",
  founder: { "@type": "Person", name: "Matt Grandy" },
  email: "matt@cortecs.ca",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-50JBTCFSQF"
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-50JBTCFSQF');",
          }}
        />
      </head>
      <body className="bg-[var(--bg)] font-sans text-[var(--fg)] antialiased">
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[var(--accent-fg)]"
          >
            Skip to content
          </a>
          <Nav />
          <main id="main" className="pt-16">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
