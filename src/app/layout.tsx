import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ChatWidget } from "@/components/ChatWidget";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://www.cortecs.ca";
const SITE_TITLE = "Cortecs — AI consulting and custom solutions";
const SITE_DESC =
  "AI consulting and custom solutions for your business. From identifying the opportunities to building the tools that capture them.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: "%s · Cortecs" },
  description: SITE_DESC,
  keywords: [
    "AI consulting",
    "AI training",
    "AI automation",
    "custom AI solutions",
    "private AI",
    "on-premise AI",
  ],
  authors: [{ name: "Matt" }],
  creator: "Matt",
  publisher: "Cortecs",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Cortecs",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Cortecs — AI consulting and custom solutions" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: ["/og-image.png"],
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

const businessId = `${SITE_URL}/#business`;
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": businessId,
      name: "Cortecs",
      url: SITE_URL,
      description:
        "AI consulting and custom solutions for your business.",
      image: `${SITE_URL}/og-image.png`,
      logo: `${SITE_URL}/og-image.png`,
      founder: { "@type": "Person", name: "Matt" },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "matt@cortecs.ca",
      },
      sameAs: [],
    },
  ],
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
            __html: JSON.stringify(structuredData),
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
          <ScrollProgress />
          <main id="main" className="pt-16">
            {children}
          </main>
          <Footer />
          <ChatWidget />
        </Providers>
      </body>
    </html>
  );
}
