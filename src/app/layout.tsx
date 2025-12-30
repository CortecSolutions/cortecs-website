import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cortec Solutions | Custom Software & AI Solutions",
  description:
    "Design, development, and implementation of custom software applications, AI-powered tools, and automated business workflows. Technical consulting for digital transformation.",
  keywords: [
    "custom software",
    "AI solutions",
    "automation",
    "digital transformation",
    "technical consulting",
    "business workflows",
  ],
  openGraph: {
    title: "Cortec Solutions | Custom Software & AI Solutions",
    description:
      "Design, development, and implementation of custom software applications, AI-powered tools, and automated business workflows.",
    url: "https://www.cortecs.ca",
    siteName: "Cortec Solutions",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
