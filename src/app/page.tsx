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

  const services = [
    {
      title: "Custom Software Development",
      description:
        "End-to-end design, development, and implementation of tailored software applications that solve your unique business challenges.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "AI-Powered Solutions",
      description:
        "Intelligent tools and systems leveraging machine learning and AI to automate decisions, analyze data, and enhance productivity.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Business Workflow Automation",
      description:
        "Streamline operations with automated workflows that reduce manual tasks, minimize errors, and accelerate your processes.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: "Technical Consulting",
      description:
        "Strategic guidance for digital transformation, process optimization, and technology modernization to keep you ahead.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
              <span className="gradient-text">Cortec</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-secondary hover:text-foreground transition-colors text-sm font-medium">
                Services
              </a>
              <a href="#about" className="text-secondary hover:text-foreground transition-colors text-sm font-medium">
                About
              </a>
              <a href="/portfolio" className="text-secondary hover:text-foreground transition-colors text-sm font-medium">
                Portfolio
              </a>
              <a href="/blog" className="text-secondary hover:text-foreground transition-colors text-sm font-medium">
                Blog
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 slide-up tracking-tight text-white">
            Transform your Business with{" "}
            <span className="gradient-text">Intelligent Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed slide-up slide-up-delay-1 max-w-3xl mx-auto">
            We design, develop, and implement custom software applications, AI-powered tools,
            and automated workflows that drive real results.
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
            <span className="code-accent text-sm mb-4 inline-block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">What We Build</h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Comprehensive technical solutions tailored to accelerate your digital transformation
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700/50 card-hover neon-border"
              >
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-secondary leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all font-medium"
            >
              View our solutions portfolio
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
              <span className="code-accent text-sm mb-4 inline-block">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Building the Future,{" "}
                <span className="gradient-text">One Solution at a Time</span>
              </h2>
              <p className="text-secondary text-lg leading-relaxed mb-6">
                At Cortec, we partner with businesses to navigate the complexities of
                digital transformation. Our team combines deep technical expertise with a
                commitment to understanding your unique challenges.
              </p>
              <p className="text-secondary text-lg leading-relaxed mb-8">
                From concept to deployment, we deliver solutions that are not just technically
                sound but strategically aligned with your business goals.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 gradient-bg text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Work with us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="gradient-border p-8 bg-white dark:bg-slate-900">
              <h3 className="text-2xl font-semibold mb-6">Why Choose Us?</h3>
              <ul className="space-y-5">
                {[
                  { title: "Tailored Solutions", desc: "Designed for your specific needs" },
                  { title: "Transparent Communication", desc: "Throughout every project" },
                  { title: "Modern Tech Stack", desc: "Future-proof architecture" },
                  { title: "Dedicated Support", desc: "Maintenance and ongoing care" },
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
                      <div className="font-medium">{item.title}</div>
                      <div className="text-secondary text-sm">{item.desc}</div>
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
              <span className="code-accent text-sm mb-4 inline-block">Contact</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Let&apos;s Work Together</h2>
              <p className="text-secondary text-lg">
                Ready to transform your business? Tell us about your project and we&apos;ll get back
                to you within 24 hours.
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
              <span className="gradient-text">Cortec</span>
            </a>
            <div className="flex items-center gap-8">
              <a href="#services" className="text-secondary hover:text-foreground transition-colors text-sm">
                Services
              </a>
              <a href="#about" className="text-secondary hover:text-foreground transition-colors text-sm">
                About
              </a>
              <a href="/portfolio" className="text-secondary hover:text-foreground transition-colors text-sm">
                Portfolio
              </a>
              <a href="/blog" className="text-secondary hover:text-foreground transition-colors text-sm">
                Blog
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
