"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "bfe9d2f8-9842-4f5f-a8a1-12e125d6ef74",
          subject: "New Contact Form Submission - Cortec",
          from_name: "Cortec Website",
          ...formData,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  const steps = [
    {
      title: "Concept",
      description:
        "Share your idea or a problem you are trying to solve.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: "Solution",
      description:
        "Custom application designed to meet your needs.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "Results",
      description:
        "Your app, your code, no recurring fees.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const stats = [
    { value: "100%", label: "Custom Solutions" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-3 text-2xl font-bold tracking-tight">
              <img src="/logo-icon.svg" alt="Cortec" className="w-10 h-10" />
              <span className="gradient-text">Cortec.</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-secondary hover:text-foreground transition-colors text-sm font-medium">
                About
              </a>
              <a href="/portfolio" className="text-secondary hover:text-foreground transition-colors text-sm font-medium">
                Services
              </a>
              <a href="/blog" className="text-secondary hover:text-foreground transition-colors text-sm font-medium">
                Articles
              </a>
              <a
                href="#contact"
                className="gradient-bg text-white px-5 py-2.5 rounded-full hover:opacity-90 transition-all text-sm font-medium hover:shadow-lg hover:shadow-primary/25"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Screen Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Full screen video background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 slide-up tracking-tight text-white">
            Custom solutions,{" "}
            <span className="gradient-text">made for you</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed slide-up slide-up-delay-1 max-w-3xl mx-auto">
            I design and develop custom iOS and web applications for small businesses and consumers. One developer, one point of contact for a seamless experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up slide-up-delay-2">
            <a
              href="#contact"
              className="gradient-bg text-white px-10 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-all text-center hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              Start Your Project
            </a>
            <a
              href="#services"
              className="border border-white/30 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all text-center hover:-translate-y-0.5 backdrop-blur-sm"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 z-10">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-background" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">How it works</h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Simple process, real results
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700/50 card-hover neon-border text-center"
              >
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform mx-auto">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-secondary leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all font-medium text-xl"
            >
              Contact
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Quality work,{" "}
                <span className="gradient-text">personal service</span>
              </h2>
              <p className="text-secondary text-xl leading-relaxed mb-6">
                I started Cortec to make custom application development simplified and more accessible to small businesses and consumers.
              </p>
              <p className="text-secondary text-xl leading-relaxed mb-8">
                24/7 365 customer service that creates a personal experience in a world of automation.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gradient-bg text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Contact
              </a>
            </div>
            <div className="gradient-border p-8 bg-slate-900 relative z-10">
              <h3 className="text-4xl font-bold mb-8 text-white">Why Cortec</h3>
              <ul className="space-y-5">
                {[
                  { title: "Direct Communication", desc: "One point of contact, start to finish" },
                  { title: "Transparent Pricing", desc: "Reasonable pricing, no subscription or hidden fees" },
                  { title: "Fast Turnaround", desc: "Lean process, quick delivery" },
                  { title: "Ongoing Support", desc: "Here when you need me after launch" },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-white"
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
                    </div>
                    <div>
                      <div className="font-semibold text-xl text-white">{item.title}</div>
                      <div className="text-white/80 text-lg">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-background" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Let&apos;s Work Together</h2>
              <p className="text-secondary text-lg">
                Ready to create? Tell us about your project and we&apos;ll get back to you within the hour.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company <span className="text-secondary">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full gradient-bg text-white py-4 rounded-xl text-lg font-medium hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl hover:shadow-primary/25"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {submitStatus === "success" && (
                <p className="text-green-600 dark:text-green-400 text-center font-medium">
                  Thank you! We&apos;ll be in touch soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-600 dark:text-red-400 text-center">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="#" className="flex items-center gap-3 text-2xl font-bold tracking-tight">
              <img src="/logo-icon.svg" alt="Cortec" className="w-8 h-8" />
              <span className="gradient-text">Cortec.</span>
            </a>
            <div className="flex items-center gap-8">
              <a href="#services" className="text-secondary hover:text-foreground transition-colors text-sm">
                About
              </a>
              <a href="/portfolio" className="text-secondary hover:text-foreground transition-colors text-sm">
                Services
              </a>
              <a href="/blog" className="text-secondary hover:text-foreground transition-colors text-sm">
                Articles
              </a>
              <a href="#contact" className="text-secondary hover:text-foreground transition-colors text-sm">
                Contact
              </a>
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
