import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reflect Drive | Private Self-Reflection Tool - $79 CAD",
  description:
    "A USB drive with a complete self-reflection system. Think clearly, recognize patterns, track goals. Plug in to reflect, unplug when done. No trace on your computer. Free shipping to Canada & USA.",
  keywords: [
    "self reflection tool",
    "personal development USB",
    "private journaling",
    "AI reflection",
    "thinking tool",
    "pattern recognition",
    "goal tracking",
    "mental clarity",
    "self improvement tool",
    "private AI",
  ],
  openGraph: {
    title: "Reflect Drive | Private Self-Reflection Tool",
    description:
      "A USB drive with a complete self-reflection system. Plug in to think. Unplug when done. No trace left behind. $79 CAD - Free shipping to Canada & USA.",
    url: "https://www.cortecs.ca/reflect",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reflect Drive | Private Self-Reflection Tool",
    description:
      "A USB drive with a complete self-reflection system. Plug in to think. Unplug when done. $79 CAD - Free shipping to Canada & USA.",
  },
  alternates: {
    canonical: "https://www.cortecs.ca/reflect",
  },
};

export default function ReflectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
