import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug, getAllServiceSlugs } from "../data";

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  // Find related services (same category or random selection)
  const relatedServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 text-2xl font-bold">
              <img src="/logo-icon.svg" alt="Cortec" className="w-10 h-10" />
              <span className="gradient-text">Cortec</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/#services" className="text-secondary hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-secondary hover:text-foreground transition-colors">
                Portfolio
              </Link>
              <Link href="/blog" className="text-secondary hover:text-foreground transition-colors">
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

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link
              href="/portfolio"
              className="text-sm text-primary hover:underline inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Services
            </Link>
          </div>
          <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full uppercase tracking-wide">
            {service.industry}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-secondary leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Long Description */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
            {service.longDescription.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-secondary leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Capabilities & Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Capabilities */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
              <h2 className="text-xl font-semibold mb-6">What We Build</h2>
              <ul className="space-y-4">
                {service.capabilities.map((cap, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-secondary">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl p-8 text-white">
              <h2 className="text-xl font-semibold mb-6">Results You Can Expect</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-slate-900 dark:bg-slate-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can build a custom {service.industry.toLowerCase()} solution for your business.
            </p>
            <Link
              href="/#contact"
              className="inline-block gradient-bg text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}`}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-shadow border border-slate-100 dark:border-slate-700"
              >
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                  {related.industry}
                </span>
                <h3 className="text-lg font-semibold mt-2 mb-2">{related.title}</h3>
                <p className="text-secondary text-sm line-clamp-2">{related.description}</p>
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
              <span className="gradient-text">Cortec</span>
            </Link>
            <div className="flex items-center gap-8">
              <Link href="/#services" className="text-secondary hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-secondary hover:text-foreground transition-colors">
                Portfolio
              </Link>
              <Link href="/blog" className="text-secondary hover:text-foreground transition-colors">
                Blog
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
