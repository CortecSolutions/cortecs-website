import { Metadata } from "next";
import Link from "next/link";
import { posts } from "./data";

export const metadata: Metadata = {
  title: "Blog | Cortec",
  description: "Insights on AI automation, custom software development, business technology strategy, and digital transformation for growing businesses.",
  openGraph: {
    title: "Blog | Cortec",
    description: "Insights on AI automation, custom software development, and business technology strategy.",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 text-2xl font-bold">
              <img src="/logo-icon.svg" alt="Cortec" className="w-10 h-10" />
              <span className="gradient-text">Cortec.</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/#services" className="text-secondary hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/portfolio" className="text-secondary hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="/blog" className="text-foreground font-medium">
                Articles
              </Link>
              <Link
                href="/#contact"
                className="gradient-bg text-white px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
              >
                Let's connect
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Insights & <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-xl text-secondary">
            Practical guidance on AI automation, custom software development, and technology strategy for growing businesses.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/blog/${posts[0].slug}`}
            className="block bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl p-8 md:p-12 text-white hover:opacity-95 transition-opacity"
          >
            <span className="text-sm font-medium uppercase tracking-wide opacity-80">
              Featured
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
              {posts[0].title}
            </h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl">
              {posts[0].excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm opacity-80">
              <span>{posts[0].category}</span>
              <span>•</span>
              <span>{posts[0].readTime}</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Post Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {posts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white dark:bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-shadow border border-slate-100 dark:border-slate-700"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-secondary">{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-secondary line-clamp-2">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-secondary mb-8">
            Get notified when we publish new articles on AI, automation, and software development.
          </p>
          <Link
            href="/#contact"
            className="inline-block gradient-bg text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-3 text-2xl font-bold">
              <img src="/logo-icon.svg" alt="Cortec" className="w-8 h-8" />
              <span className="gradient-text">Cortec.</span>
            </Link>
            <div className="flex items-center gap-8">
              <Link href="/#services" className="text-secondary hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/portfolio" className="text-secondary hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="/blog" className="text-secondary hover:text-foreground transition-colors">
                Articles
              </Link>
              <Link href="/#contact" className="text-secondary hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
            <div className="text-secondary text-sm">
              © {new Date().getFullYear()} Cortec. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
