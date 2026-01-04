"use client";

import { useState } from "react";
import Link from "next/link";

const categories = [
  {
    id: "ios",
    name: "iOS Apps",
    description: "Native iPhone and iPad applications built with Swift",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    id: "web",
    name: "Web Apps",
    description: "Responsive web applications that work on any device",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    id: "automation",
    name: "Automation",
    description: "Workflows that save time and reduce manual work",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
      </svg>
    ),
  },
  {
    id: "ai",
    name: "AI Integrations",
    description: "Smart features powered by artificial intelligence",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
];

const projects = [
  {
    category: "ios",
    title: "Pet Finder AR App",
    client: "Animal Shelter",
    description: "Augmented reality app that lets users point their camera at shelter pets to see their name, personality, and adoption info floating beside them. Swipe to save favorites.",
    features: ["AR camera overlay", "Favorites list", "Shelter notifications"],
  },
  {
    category: "ios",
    title: "Sneaker Drop Tracker",
    client: "Sneaker Reseller",
    description: "Real-time alerts for limited sneaker releases across Nike, Adidas, and more. Price tracking, calendar integration, and instant notifications when drops go live.",
    features: ["Real-time alerts", "Price history", "Release calendar"],
  },
  {
    category: "ios",
    title: "Tattoo Preview App",
    client: "Tattoo Studio",
    description: "Upload a design, use AR to see how it looks on your skin in real-time. Adjust size, position, and save photos to share with your artist.",
    features: ["AR skin overlay", "Design library", "Photo export"],
  },
  {
    category: "web",
    title: "Music Producer Marketplace",
    client: "Beat Maker Collective",
    description: "Platform where producers upload beats, set licensing prices, and sell directly to artists. Includes audio preview, secure payments, and license management.",
    features: ["Audio streaming", "License generator", "Stripe payments"],
  },
  {
    category: "web",
    title: "Local Event Discovery",
    client: "City Tourism Board",
    description: "Aggregates events from multiple sources into one beautiful map-based interface. Filter by date, type, or vibe. Never miss what's happening in your city.",
    features: ["Map integration", "Event scraping", "Personalized feed"],
  },
  {
    category: "web",
    title: "Recipe Cost Calculator",
    client: "Home Baker",
    description: "Enter your recipes and ingredient costs, instantly see per-unit pricing for everything you bake. Track profit margins and generate price lists for customers.",
    features: ["Cost breakdown", "Profit tracking", "PDF price lists"],
  },
  {
    category: "automation",
    title: "YouTube to Podcast Pipeline",
    client: "Content Creator",
    description: "Automatically converts new YouTube videos to audio, adds intro/outro, uploads to podcast platforms, and posts to social media. Hands-off content repurposing.",
    features: ["Auto-conversion", "Multi-platform upload", "Social posting"],
  },
  {
    category: "automation",
    title: "Airbnb Smart Messaging",
    client: "Property Manager",
    description: "AI reads guest messages, detects intent, and sends personalized responses. Handles check-in instructions, local recommendations, and common questions 24/7.",
    features: ["Intent detection", "Smart replies", "Multi-property"],
  },
  {
    category: "automation",
    title: "Lead Scoring System",
    client: "Real Estate Agent",
    description: "Scores incoming leads based on behavior, property views, and engagement. Hot leads get instant alerts. Warm leads get automated nurture sequences.",
    features: ["Behavior tracking", "Auto-scoring", "Nurture sequences"],
  },
  {
    category: "ai",
    title: "Voice Clone for Podcasts",
    client: "Podcast Network",
    description: "Train a voice model on a host's recordings, then generate sponsor reads and announcements in their voice. Review and approve before publishing.",
    features: ["Voice cloning", "Script input", "Human approval"],
  },
  {
    category: "ai",
    title: "Product Photo Generator",
    client: "Etsy Seller",
    description: "Upload one product photo, AI generates lifestyle shots with different backgrounds—kitchen counters, living rooms, outdoor settings. No photoshoot needed.",
    features: ["Background generation", "Style presets", "Batch processing"],
  },
  {
    category: "ai",
    title: "Menu Translator & Recommender",
    client: "Restaurant Group",
    description: "Scan any menu with your phone, get instant translations plus AI recommendations based on your dietary preferences and past favorites.",
    features: ["OCR scanning", "60+ languages", "Taste learning"],
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredProjects = activeCategory
    ? projects.filter((p) => p.category === activeCategory)
    : projects;

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
              <Link
                href="/#services"
                className="text-secondary hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className="text-foreground font-medium"
              >
                Services
              </Link>
              <Link
                href="/blog"
                className="text-secondary hover:text-foreground transition-colors"
              >
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
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Custom <span className="gradient-text">solutions</span>
          </h1>
          <p className="text-xl text-secondary max-w-2xl">
            No coding or development experience required. Anything is possible.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === null
                  ? "gradient-bg text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-secondary hover:text-foreground"
              }`}
            >
              All Projects
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? "gradient-bg text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-secondary hover:text-foreground"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category Cards */}
      {activeCategory === null && (
        <section className="pb-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 text-left hover:border-primary transition-all group"
                >
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{cat.name}</h3>
                  <p className="text-secondary text-sm">{cat.description}</p>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">
                      {categories.find((c) => c.id === project.category)?.name}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                  <p className="text-sm text-primary mb-3">Example: {project.client}</p>
                  <p className="text-secondary mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="border-t border-slate-100 dark:border-slate-700 pt-4">
                    <p className="text-xs font-medium text-secondary uppercase tracking-wide mb-3">
                      Features
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, i) => (
                        <span
                          key={i}
                          className="text-sm text-secondary bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
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
            Have a project in mind?
          </h2>
          <p className="text-secondary text-lg mb-8">
            Anything is possible.
          </p>
          <Link
            href="/#contact"
            className="inline-block gradient-bg text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
          >
            Let's connect
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
              <Link
                href="/#services"
                className="text-secondary hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className="text-secondary hover:text-foreground transition-colors"
              >
                Services
              </Link>
              <Link
                href="/#contact"
                className="text-secondary hover:text-foreground transition-colors"
              >
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
