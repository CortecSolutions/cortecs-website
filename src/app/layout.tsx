import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cortecs.ca"),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  title: {
    default: "Cortecs | AI Agents That Build Your Software",
    template: "%s | Cortecs",
  },
  description:
    "Multi-agent AI orchestration that builds custom software and automations for your business. Powered by NVIDIA DGX Spark. Your data never leaves your building.",
  keywords: [
    "AI agents",
    "AI agent orchestration",
    "custom software automation",
    "private AI",
    "on-premise AI",
    "NVIDIA DGX Spark",
    "business automation",
    "small business AI",
    "AI for freight",
    "AI for contractors",
  ],
  authors: [{ name: "Cortecs" }],
  creator: "Cortecs",
  publisher: "Cortecs",
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
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.cortecs.ca",
    siteName: "Cortecs",
    title: "Cortecs | AI Agents That Build Your Software",
    description:
      "Multi-agent AI orchestration that builds custom software and automations for your business. Powered by NVIDIA DGX Spark.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Cortecs - AI Agents That Build Your Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cortecs | AI Agents That Build Your Software",
    description:
      "Multi-agent AI orchestration that builds custom software and automations for your business. Powered by NVIDIA DGX Spark.",
    images: ["/og-image.svg"],
  },
  verification: {
    google: "Xj4IrHQq5AJgGeZHrCsjtlnqbcO9h7uuCaLrcqc3ZQI",
  },
  alternates: {
    canonical: "https://www.cortecs.ca",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-50JBTCFSQF"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-50JBTCFSQF');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Cortecs",
              url: "https://www.cortecs.ca",
              logo: "https://www.cortecs.ca/logo.svg",
              description:
                "AI agent orchestration that builds custom software and automations for businesses. Powered by NVIDIA DGX Spark. Your data stays yours.",
              address: {
                "@type": "PostalAddress",
                addressRegion: "ON",
                addressCountry: "CA",
              },
              sameAs: [],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "matt@cortecs.ca",
              },
            }),
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
