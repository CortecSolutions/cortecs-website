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
          subject: "New Contact Form Submission - Cortec Solutions",
          from_name: "Cortec Solutions Website",
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
      title: "Custom Software",
      description:
        "Internal tools, dashboards, order systems, customer portals — built around how your business actually works. No bloated subscriptions. Just software that fits.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "Workflow Automation",
      description:
        "If you're copying data between systems, sending the same emails over and over, or tracking things in spreadsheets that should update themselves — I can fix that.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: "AI Assistants",
      description:
        "Smart assistants trained on your company's data — product info, procedures, internal docs. They answer questions and handle tasks so your team doesn't have to.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Data Cleanup & Integration",
      description:
        "Before you can automate anything, the data needs to make sense. I help connect your systems, organize what you have, and build a foundation you can actually grow on.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-2xl font-bold">
              <span className="gradient-text">Cortec</span>
              <span className="text-foreground"> Solutions</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-secondary hover:text-foreground transition-colors">
                What I Do
              </a>
              <a href="#about" className="text-secondary hover:text-foreground transition-colors">
                About
              </a>
              <a href="/portfolio" className="text-secondary hover:text-foreground transition-colors">
                Work
              </a>
              <a
                href="#contact"
                className="gradient-bg text-white px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Custom Software &{" "}
              <span className="gradient-text">Automation for Busy Teams</span>
            </h1>
            <p className="text-xl text-secondary mb-8 leading-relaxed">
              You&apos;re too busy running your business to deal with clunky tools that
              don&apos;t fit. I build custom software and automations that save you time,
              cut the busywork, and just work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="gradient-bg text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity text-center"
              >
                Let&apos;s Talk
              </a>
              <a
                href="#services"
                className="border border-slate-300 dark:border-slate-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-center"
              >
                See What I Build
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              I work with small teams and business owners who are too busy to deal with
              technology that doesn&apos;t work. I build the tools that make your day easier.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-secondary leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              No long proposals. No six-month timelines. Just a straightforward process
              that gets you from problem to working solution.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "We Talk",
                description:
                  "You tell me what's eating up your time. I ask questions until I understand the real problem — not just the symptoms.",
              },
              {
                step: "02",
                title: "I Build",
                description:
                  "I build a working version fast so you can see it, use it, and tell me what needs to change before we go further.",
              },
              {
                step: "03",
                title: "You Run It",
                description:
                  "The tool goes live. I stick around to make sure it works in the real world, not just in a demo.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold gradient-text mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-secondary leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Built by Someone Who{" "}
                <span className="gradient-text">Gets It</span>
              </h2>
              <p className="text-secondary text-lg leading-relaxed mb-6">
                I&apos;m Matt. I build custom software and automation tools for people
                who are too busy to waste time on technology that doesn&apos;t work.
                Business owners, operations managers, small teams doing big work
                with not enough hours in the day.
              </p>
              <p className="text-secondary text-lg leading-relaxed mb-8">
                No enterprise sales pitch. No monthly fees you can&apos;t get out of.
                Just tools that solve your specific problem, built to run on your terms.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold gradient-text">Your Data</div>
                  <div className="text-secondary">Stays on your hardware</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">Custom-Fit</div>
                  <div className="text-secondary">Built for how you work</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-semibold mb-6">Why Work With Me?</h3>
              <ul className="space-y-4">
                {[
                  "You talk to me directly — no middlemen, no runaround",
                  "I build fast and iterate based on your feedback",
                  "Your data stays private — no cloud lock-in",
                  "I don't disappear after launch",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
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
                    <span className="text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Let&apos;s Figure It Out</h2>
              <p className="text-secondary text-lg">
                Tell me what&apos;s eating up your time. I&apos;ll get back to you within
                24 hours with honest thoughts on whether I can help.
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
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
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
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  What&apos;s the problem?
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="What's taking up too much of your time?"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full gradient-bg text-white py-4 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {submitStatus === "success" && (
                <p className="text-green-600 dark:text-green-400 text-center">
                  Got it! I&apos;ll be in touch soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-600 dark:text-red-400 text-center">
                  Something went wrong. Please try again or email me directly.
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
            <div className="text-2xl font-bold">
              <span className="gradient-text">Cortec</span>
              <span className="text-foreground"> Solutions</span>
            </div>
            <div className="flex items-center gap-8">
              <a href="#services" className="text-secondary hover:text-foreground transition-colors">
                What I Do
              </a>
              <a href="#about" className="text-secondary hover:text-foreground transition-colors">
                About
              </a>
              <a href="/portfolio" className="text-secondary hover:text-foreground transition-colors">
                Work
              </a>
              <a href="#contact" className="text-secondary hover:text-foreground transition-colors">
                Contact
              </a>
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
