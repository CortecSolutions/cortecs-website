import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cortecs.ca"),
  title: {
    default: "Cortec Solutions | Custom Software & AI Solutions in Canada",
    template: "%s | Cortec Solutions",
  },
  description:
    "Design, development, and implementation of custom software applications, AI-powered tools, and automated business workflows. Expert technical consulting for digital transformation and process optimization.",
  keywords: [
    "custom software development",
    "AI solutions",
    "business automation",
    "digital transformation",
    "technical consulting",
    "workflow automation",
    "software development Canada",
    "AI-powered tools",
    "process optimization",
    "enterprise software",
  ],
  authors: [{ name: "Cortec Solutions" }],
  creator: "Cortec Solutions",
  publisher: "Cortec Solutions",
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
    siteName: "Cortec Solutions",
    title: "Cortec Solutions | Custom Software & AI Solutions",
    description:
      "Transform your business with custom software, AI-powered tools, and automated workflows. Expert technical consulting for digital transformation.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Cortec Solutions - Custom Software & AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cortec Solutions | Custom Software & AI Solutions",
    description:
      "Transform your business with custom software, AI-powered tools, and automated workflows.",
    images: ["/og-image.svg"],
  },
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
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
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Cortec Solutions",
              url: "https://www.cortecs.ca",
              logo: "https://www.cortecs.ca/og-image.svg",
              description:
                "Design, development, and implementation of custom software applications, AI-powered tools, and automated business workflows.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "CA",
              },
              sameAs: [],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                url: "https://www.cortecs.ca/#contact",
              },
              serviceType: [
                "Custom Software Development",
                "AI Solutions",
                "Business Workflow Automation",
                "Technical Consulting",
                "Digital Transformation",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
