"use client";

import { useState } from "react";

export default function SecurityPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
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
          subject: "Security Assessment Request - Cortec",
          from_name: "Cortec Website - Security",
          ...formData,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", business: "", message: "" });
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
      title: "WiFi Security Assessment",
      price: "Starting at $200",
      description: "Comprehensive audit of your wireless network security.",
      includes: [
        "Password strength testing",
        "Encryption verification",
        "Network segmentation check",
        "Guest network isolation",
        "Rogue access point detection",
        "Written report with findings",
      ],
    },
    {
      title: "Penetration Testing",
      price: "Starting at $500",
      description: "Authorized attempt to breach your network security.",
      includes: [
        "External reconnaissance",
        "Internal network scanning",
        "Vulnerability assessment",
        "Exploitation attempts",
        "Detailed findings report",
        "Remediation recommendations",
      ],
    },
    {
      title: "Security Remediation",
      price: "$100/hour",
      description: "Fix the vulnerabilities we find.",
      includes: [
        "Router/firewall configuration",
        "Network segmentation setup",
        "Secure WiFi configuration",
        "Access control implementation",
        "Security policy documentation",
        "Staff security awareness",
      ],
    },
  ];

  const process = [
    {
      step: "1",
      title: "Discovery",
      description: "We talk about your business, your concerns, and what you're trying to protect.",
    },
    {
      step: "2",
      title: "Authorization",
      description: "You sign a document authorizing the security assessment. This protects both of us.",
    },
    {
      step: "3",
      title: "Assessment",
      description: "We test your network security - WiFi, connected devices, access controls, everything.",
    },
    {
      step: "4",
      title: "Report",
      description: "You get a detailed report of findings with risk levels and specific recommendations.",
    },
    {
      step: "5",
      title: "Remediation",
      description: "Optional: We fix what we found. Or you take the report to your IT person.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 text-2xl font-bold tracking-tight">
              <img src="/logo-icon.svg" alt="Cortec" className="w-10 h-10" />
              <span className="gradient-text">Cortec.</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="/#projects" className="text-secondary hover:text-foreground transition-colors text-sm font-medium">
                Projects
              </a>
              <a href="/reflect" className="text-secondary hover:text-foreground transition-colors text-sm font-medium">
                Reflect
              </a>
              <a href="/security" className="text-foreground transition-colors text-sm font-medium">
                Security
              </a>
              <a
                href="#contact"
                className="gradient-bg text-white px-5 py-2.5 rounded-full hover:opacity-90 transition-all text-sm font-medium hover:shadow-lg hover:shadow-primary/25"
              >
                Get Assessment
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-400 text-sm font-medium mb-6">
            Network Security
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
            Find vulnerabilities{" "}
            <span className="text-red-400">before someone else does.</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
            WiFi security assessments and penetration testing for small businesses. I find the holes in your network and help you close them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="gradient-bg text-white px-10 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-all text-center hover:shadow-xl hover:shadow-primary/25"
            >
              Request Assessment
            </a>
            <a
              href="#services"
              className="border border-slate-600 text-foreground px-10 py-4 rounded-full text-lg font-medium hover:bg-slate-800/50 transition-all text-center"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            The reality for small businesses
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-red-500/30 text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">43%</div>
              <p className="text-secondary">of cyber attacks target small businesses</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-red-500/30 text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">60%</div>
              <p className="text-secondary">go out of business within 6 months of a breach</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-red-500/30 text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">$200K</div>
              <p className="text-secondary">average cost of a data breach for SMBs</p>
            </div>
          </div>
          <p className="text-center text-secondary mt-8 text-lg">
            Most small businesses think they're too small to be a target. They're wrong. Attackers look for easy targets - and weak WiFi security is an open door.
          </p>
        </div>
      </section>

      {/* What I Check Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What gets checked
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "WiFi Encryption", desc: "Is your network using WPA2/WPA3? Or is it wide open?" },
              { title: "Password Strength", desc: "Can your WiFi password be cracked with common wordlists?" },
              { title: "Network Segmentation", desc: "Can someone on your guest WiFi access your business systems?" },
              { title: "Connected Devices", desc: "What's on your network? Printers, cameras, IoT devices - all potential entry points." },
              { title: "Open Ports", desc: "What services are exposed? SSH, RDP, databases?" },
              { title: "Router Security", desc: "Default passwords? Outdated firmware? Remote management exposed?" },
            ].map((item, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                <h3 className="text-lg font-semibold mb-2 text-primary">{item.title}</h3>
                <p className="text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:border-primary/30 transition-colors"
              >
                <div className="text-primary font-medium text-sm mb-2">{service.price}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-secondary mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.includes.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            How it works
          </h2>
          <div className="space-y-6">
            {process.map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-secondary">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Service Area
          </h2>
          <p className="text-secondary text-lg mb-8">
            Serving businesses anywhere in Ontario. On-site assessments available throughout the province.
          </p>
          <p className="text-secondary">
            Remote assessments also available for businesses outside Ontario - contact me to discuss.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Request an Assessment</h2>
            <p className="text-secondary text-lg">
              Tell me about your business and what you're looking to protect. I'll get back to you within 24 hours.
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
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground placeholder:text-slate-500"
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
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground placeholder:text-slate-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="business" className="block text-sm font-medium mb-2">
                Business Name
              </label>
              <input
                type="text"
                id="business"
                name="business"
                required
                value={formData.business}
                onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground placeholder:text-slate-500"
                placeholder="Your business name"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                What are you looking to protect?
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none text-foreground placeholder:text-slate-500"
                placeholder="Tell me about your business, your network setup, and any specific concerns..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full gradient-bg text-white py-4 rounded-xl text-lg font-medium hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl hover:shadow-primary/25"
            >
              {isSubmitting ? "Sending..." : "Request Assessment"}
            </button>
            {submitStatus === "success" && (
              <p className="text-green-400 text-center font-medium">
                Got it. I'll be in touch within 24 hours.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-400 text-center">
                Something went wrong. Try again or email directly.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="/" className="flex items-center gap-3 text-2xl font-bold tracking-tight">
              <img src="/logo-icon.svg" alt="Cortec" className="w-8 h-8" />
              <span className="gradient-text">Cortec.</span>
            </a>
            <div className="flex items-center gap-8">
              <a href="/" className="text-secondary hover:text-foreground transition-colors text-sm">
                Home
              </a>
              <a href="/reflect" className="text-secondary hover:text-foreground transition-colors text-sm">
                Reflect
              </a>
              <a href="/security" className="text-secondary hover:text-foreground transition-colors text-sm">
                Security
              </a>
              <a href="/#contact" className="text-secondary hover:text-foreground transition-colors text-sm">
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
