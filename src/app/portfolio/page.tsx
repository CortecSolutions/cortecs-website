import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What I Build",
  description:
    "Custom software, automation tools, and AI assistants built for busy teams. See what Cortec Solutions can do for your business.",
};

const capabilities = [
  {
    category: "Workflow Automation",
    title: "Kill the Busywork",
    description:
      "Your team sends hundreds of emails a day, copies data between systems, and tracks everything in spreadsheets that nobody trusts. I build automated workflows that handle the repetitive stuff — check-ins, status updates, data entry — so your people can focus on real work.",
    examples: [
      "Automated email check-in systems",
      "Status tracking dashboards",
      "Data sync between tools",
      "Scheduled reports and alerts",
    ],
    tags: ["Email Automation", "Dashboards", "Integrations", "Scheduling"],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    category: "Custom Internal Tools",
    title: "Software That Fits Your Business",
    description:
      "Off-the-shelf software never quite fits. I build custom tools — order systems, product catalogs, approval workflows, internal portals — designed around how your team actually works, not how some software company thinks you should.",
    examples: [
      "Product catalogs and storefronts",
      "Order management and approval systems",
      "Internal team portals",
      "Custom CRMs and trackers",
    ],
    tags: ["Web Apps", "Internal Tools", "Order Systems", "Portals"],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    category: "AI Assistants",
    title: "Your Company's Knowledge, On Demand",
    description:
      "I build AI assistants trained on your actual company data — product specs, procedures, internal documents. Your team asks a question and gets an accurate answer instantly, instead of digging through folders or asking someone who's already busy.",
    examples: [
      "Company knowledge base assistants",
      "Product information chatbots",
      "Document search and Q&A tools",
      "Automated report generation",
    ],
    tags: ["AI", "Knowledge Base", "Chatbots", "Document Processing"],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    category: "Data Processing",
    title: "Stop Doing It By Hand",
    description:
      "Receipts, invoices, forms, reports — if your team is manually entering data that a computer could handle, I build tools to automate it. Photo to spreadsheet. PDF to database. Inbox to dashboard.",
    examples: [
      "Receipt and invoice processing",
      "Automated data extraction",
      "Expense tracking and categorization",
      "Report generation from raw data",
    ],
    tags: ["OCR", "Data Entry", "Automation", "Reporting"],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
];

export default function PortfolioPage() {
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
                What I Do
              </Link>
              <Link
                href="/portfolio"
                className="text-foreground font-medium"
              >
                Work
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

      {/* Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            What I <span className="gradient-text">Build</span>
          </h1>
          <p className="text-xl text-secondary max-w-3xl">
            Custom tools and automations for busy teams. Here&apos;s the kind of
            work I do — and the kind of problems I solve.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-100 dark:border-slate-700 overflow-hidden"
              >
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">
                        {cap.category}
                      </span>
                      <h2 className="text-2xl font-semibold mt-3">
                        {cap.title}
                      </h2>
                    </div>
                    <div className="text-primary opacity-80 hidden md:block">
                      {cap.icon}
                    </div>
                  </div>
                  <p className="text-secondary mb-6 leading-relaxed text-lg">
                    {cap.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-medium text-foreground mb-3">Examples</p>
                      <ul className="space-y-2">
                        {cap.examples.map((example, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <svg
                              className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-secondary">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-3">Tech</p>
                      <div className="flex flex-wrap gap-2">
                        {cap.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-sm text-secondary bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Got Something That Needs Fixing?
          </h2>
          <p className="text-secondary text-lg mb-8">
            If your team is wasting time on things a computer should handle,
            let&apos;s talk about what a custom solution looks like for you.
          </p>
          <Link
            href="/#contact"
            className="inline-block gradient-bg text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
          >
            Let&apos;s Talk
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
                What I Do
              </Link>
              <Link
                href="/portfolio"
                className="text-secondary hover:text-foreground transition-colors"
              >
                Work
              </Link>
              <Link
                href="/#contact"
                className="text-secondary hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
            <div className="text-secondary text-sm">
              &copy; {new Date().getFullYear()} Cortec Solutions. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
