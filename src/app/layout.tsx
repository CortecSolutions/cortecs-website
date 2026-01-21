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
    default: "Cortec | Custom Tech Solutions",
    template: "%s | Cortec",
  },
  description:
    "I like solving problems with technology. Projects ranging from self-reflection tools to network security. Some polished, some experiments, all real.",
  keywords: [
    "custom software",
    "network security",
    "penetration testing",
    "wifi security",
    "self reflection tool",
    "personal development",
    "tech solutions",
    "small business security",
    "security assessment",
    "custom development",
    "raspberry pi",
    "automation",
  ],
  authors: [{ name: "Cortec" }],
  creator: "Cortec",
  publisher: "Cortec",
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
    siteName: "Cortec",
    title: "Cortec | Custom Tech Solutions",
    description:
      "I like solving problems with technology. Projects from self-reflection tools to network security.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Cortec - Custom Tech Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cortec | Custom Tech Solutions",
    description:
      "I like solving problems with technology. Projects from self-reflection tools to network security.",
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
              name: "Cortec",
              url: "https://www.cortecs.ca",
              logo: "https://www.cortecs.ca/logo.svg",
              description:
                "Custom tech solutions - from self-reflection tools to network security assessments.",
              address: {
                "@type": "PostalAddress",
                addressRegion: "ON",
                addressCountry: "CA",
              },
              sameAs: [],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "mgrandy@rogers.com",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Reflect Drive",
              description: "A USB drive with a complete self-reflection system. Plug in when you need to think. Unplug when you're done. No trace left behind.",
              brand: {
                "@type": "Brand",
                name: "Cortec",
              },
              offers: {
                "@type": "Offer",
                price: "79.00",
                priceCurrency: "CAD",
                availability: "https://schema.org/InStock",
                url: "https://www.cortecs.ca/reflect",
                shippingDetails: {
                  "@type": "OfferShippingDetails",
                  shippingDestination: {
                    "@type": "DefinedRegion",
                    addressCountry: "CA",
                  },
                  deliveryTime: {
                    "@type": "ShippingDeliveryTime",
                    businessDays: {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    },
                    transitTime: {
                      "@type": "QuantitativeValue",
                      minValue: 3,
                      maxValue: 7,
                      unitCode: "d",
                    },
                  },
                  shippingRate: {
                    "@type": "MonetaryAmount",
                    value: "0",
                    currency: "CAD",
                  },
                },
              },
              category: "Personal Development",
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
