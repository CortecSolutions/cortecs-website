import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on custom software development, AI solutions, business automation, and digital transformation from Cortec Solutions.",
};

const posts = [
  {
    slug: "why-businesses-need-custom-software-2025",
    title: "Why Businesses Need Custom Software in 2025",
    excerpt:
      "Off-the-shelf solutions can only take you so far. Discover why custom software development is becoming essential for businesses looking to gain a competitive edge.",
    date: "2024-12-30",
    readTime: "5 min read",
    category: "Software Development",
  },
  {
    slug: "ai-automation-small-business-guide",
    title: "AI & Automation: A Practical Guide for Small Businesses",
    excerpt:
      "AI isn't just for tech giants. Learn how small and medium businesses can leverage AI-powered tools to streamline operations and reduce costs.",
    date: "2024-12-28",
    readTime: "7 min read",
    category: "AI Solutions",
  },
  {
    slug: "digital-transformation-mistakes-to-avoid",
    title: "5 Digital Transformation Mistakes to Avoid",
    excerpt:
      "Digital transformation projects fail more often than they succeed. Here are the common pitfalls and how to navigate around them.",
    date: "2024-12-25",
    readTime: "6 min read",
    category: "Digital Transformation",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              <span className="gradient-text">Cortec</span>
              <span className="text-foreground"> Solutions</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/#services"
                className="text-secondary hover:text-foreground transition-colors"
              >
                Services
              </Link>
              <Link
                href="/blog"
                className="text-foreground font-medium"
              >
                Blog
              </Link>
              <Link
                href="/#contact"
                className="gradient-bg text-white px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Blog Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Insights & <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-xl text-secondary max-w-2xl">
            Practical guides and insights on software development, AI, automation,
            and digital transformation for modern businesses.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-secondary">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-secondary mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <time className="text-sm text-secondary">
                      {new Date(post.date).toLocaleDateString("en-CA", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span className="text-primary font-medium text-sm group-hover:underline">
                      Read more →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-secondary text-lg mb-8">
            Let&apos;s discuss how custom software and AI solutions can help you achieve
            your goals.
          </p>
          <Link
            href="/#contact"
            className="inline-block gradient-bg text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="text-2xl font-bold">
              <span className="gradient-text">Cortec</span>
              <span className="text-foreground"> Solutions</span>
            </Link>
            <div className="flex items-center gap-8">
              <Link
                href="/#services"
                className="text-secondary hover:text-foreground transition-colors"
              >
                Services
              </Link>
              <Link
                href="/blog"
                className="text-secondary hover:text-foreground transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/#contact"
                className="text-secondary hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
            <div className="text-secondary text-sm">
              © {new Date().getFullYear()} Cortec Solutions. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
