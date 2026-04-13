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
    default: "Cortec Solutions | Custom Software & Automation for Busy Teams",
    template: "%s | Cortec Solutions",
  },
  description:
    "Custom software, workflow automation, and AI assistants built for busy teams and small businesses. Tools that save you time, cut the busywork, and just work.",
  keywords: [
    "custom software",
    "workflow automation",
    "small business automation",
    "AI assistants",
    "custom business tools",
    "operations automation",
    "data integration",
    "business process automation",
    "custom dashboards",
    "small team software",
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
    title: "Cortec Solutions | Custom Software & Automation for Busy Teams",
    description:
      "Custom software, workflow automation, and AI assistants built for busy teams. Tools that save you time and just work.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Cortec Solutions - Custom Software & Automation for Busy Teams",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cortec Solutions | Custom Software & Automation for Busy Teams",
    description:
      "Custom software, workflow automation, and AI assistants built for busy teams.",
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
                "Custom software, workflow automation, and AI assistants built for busy teams and small businesses.",
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
                "Custom Software",
                "Workflow Automation",
                "AI Assistants",
                "Data Integration",
                "Business Process Automation",
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
