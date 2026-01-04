import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPostBySlug, getAllPostSlugs } from "../data";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (different from current)
  const relatedPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

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
              <Link href="/blog" className="text-secondary hover:text-foreground transition-colors">
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

      {/* Article */}
      <article className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            href="/blog"
            className="text-sm text-primary hover:underline inline-flex items-center gap-2 mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Articles
          </Link>

          {/* Article Card with White Background */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header */}
            <header className="px-8 md:px-12 pt-10 pb-8 border-b border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-slate-500">{post.readTime}</span>
                <span className="text-sm text-slate-400">•</span>
                <span className="text-sm text-slate-500">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{post.title}</h1>
              <p className="text-lg text-slate-600 leading-relaxed">{post.excerpt}</p>
            </header>

            {/* Content */}
            <div className="px-8 md:px-12 py-10">
              {(() => {
                const lines = post.content.split('\n');
                const elements: React.ReactNode[] = [];
                let listItems: string[] = [];
                let key = 0;

                const flushList = () => {
                  if (listItems.length > 0) {
                    elements.push(
                      <ul key={key++} className="mb-6 space-y-2 pl-6">
                        {listItems.map((item, i) => (
                          <li key={i} className="text-slate-700 text-lg leading-relaxed list-disc">
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                    listItems = [];
                  }
                };

                let isFirstH2 = true;

                lines.forEach((line) => {
                  const trimmed = line.trim();

                  if (trimmed.startsWith('## ')) {
                    flushList();
                    if (isFirstH2) {
                      elements.push(
                        <h2 key={key++} className="text-2xl font-bold text-slate-900 mb-4">
                          {trimmed.replace('## ', '')}
                        </h2>
                      );
                      isFirstH2 = false;
                    } else {
                      elements.push(
                        <div key={key++} className="mt-10 mb-4 pt-8 border-t border-slate-100">
                          <h2 className="text-2xl font-bold text-slate-900">
                            {trimmed.replace('## ', '')}
                          </h2>
                        </div>
                      );
                    }
                  } else if (trimmed.startsWith('### ')) {
                    flushList();
                    elements.push(
                      <h3 key={key++} className="text-xl font-semibold text-slate-800 mt-8 mb-4">
                        {trimmed.replace('### ', '')}
                      </h3>
                    );
                  } else if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                    flushList();
                    elements.push(
                      <p key={key++} className="text-lg font-semibold text-slate-800 mt-6 mb-2">
                        {trimmed.slice(2, -2)}
                      </p>
                    );
                  } else if (trimmed.startsWith('- ')) {
                    listItems.push(trimmed.replace('- ', ''));
                  } else if (trimmed !== '') {
                    flushList();
                    elements.push(
                      <p key={key++} className="text-slate-700 text-lg leading-relaxed mb-5">
                        {trimmed}
                      </p>
                    );
                  }
                });

                flushList();
                return elements;
              })()}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 gradient-bg rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Have a project in mind?
            </h2>
            <p className="text-white/80 mb-8">
              Tell me about your idea and let's create something great together.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-100 transition-colors"
            >
              Let's connect
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">More Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-shadow border border-slate-100 dark:border-slate-700"
              >
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                  {related.category}
                </span>
                <h3 className="text-lg font-semibold mt-2 mb-2 line-clamp-2">{related.title}</h3>
                <p className="text-secondary text-sm">{related.readTime}</p>
              </Link>
            ))}
          </div>
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
