"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  const solutions = [
    {
      business: "Dental Offices",
      problem: "Front desk drowning in confirmation calls",
      result: "98% show rate, zero phone tag",
    },
    {
      business: "HVAC Companies",
      problem: "Dispatchers overwhelmed, customers waiting",
      result: "Response time cut from 4 hours to 45 minutes",
    },
    {
      business: "Law Firms",
      problem: "Leads waiting days for callbacks",
      result: "Every lead qualified in under 5 minutes",
    },
    {
      business: "Property Managers",
      problem: "Maintenance requests lost in emails and texts",
      result: "Tenant complaints down 80%",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 text-2xl font-bold tracking-tight">
              <img src="/logo-icon.svg" alt="Cortecs" className="w-10 h-10" />
              <span className="gradient-text">Cortecs.</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#solutions" className="text-secondary hover:text-foreground transition-colors text-sm font-medium">
                Solutions
              </a>
              <a href="#how-it-works" className="text-secondary hover:text-foreground transition-colors text-sm font-medium">
                How It Works
              </a>
              <a href="/blog" className="text-secondary hover:text-foreground transition-colors text-sm font-medium">
                Blog
              </a>
              <a href="#contact" className="text-secondary hover:text-foreground transition-colors text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video background */}
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 slide-up tracking-tight text-white">
            Custom automation.{" "}
            <span className="gradient-text">Built for your business.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed slide-up slide-up-delay-1 max-w-3xl mx-auto">
            We build AI systems that run in your office. Not another subscription. A solution that's actually yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up slide-up-delay-2">
            <a
              href="#solutions"
              className="gradient-bg text-white px-10 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-all text-center hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              See Solutions
            </a>
            <a
              href="#contact"
              className="border border-white/30 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all text-center hover:-translate-y-0.5 backdrop-blur-sm"
            >
              Get In Touch
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

      {/* Solutions Section */}
      <section id="solutions" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-background" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">What we build</h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Every business has repetitive tasks eating up time. We build systems that handle them automatically.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 card-hover neon-border"
              >
                <span className="text-sm text-primary font-medium">{solution.business}</span>
                <h3 className="text-xl font-bold mt-2 mb-3 text-white">{solution.problem}</h3>
                <p className="text-green-400 font-medium">{solution.result}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-secondary mt-12 text-lg">
            Don't see your industry? We build custom solutions for any business.{" "}
            <a href="#contact" className="text-primary hover:underline">Let's talk.</a>
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              How it <span className="gradient-text">works</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-bold mb-3">We learn your workflow</h3>
              <p className="text-secondary">Tell us what's eating your time. We figure out what can be automated.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold mb-3">We build your system</h3>
              <p className="text-secondary">Custom AI that runs on a Mac Mini in your office. Your data stays with you.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold mb-3">You get time back</h3>
              <p className="text-secondary">The system handles the busywork. You focus on what matters.</p>
            </div>
          </div>
          <div className="mt-16 gradient-border p-8 bg-slate-900">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-3xl font-bold gradient-text">$1,500-5,000</h4>
                <p className="text-secondary mt-2">Setup fee</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold gradient-text">$200-500/mo</h4>
                <p className="text-secondary mt-2">Maintenance</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold gradient-text">You own it</h4>
                <p className="text-secondary mt-2">Hardware is yours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-background" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Not another <span className="gradient-text">SaaS subscription</span>
              </h2>
              <p className="text-secondary text-xl leading-relaxed mb-6">
                Most "automation" tools are generic cloud software that doesn't fit your workflow. You pay monthly forever for something that almost works.
              </p>
              <p className="text-secondary text-xl leading-relaxed mb-6">
                We build something different. A system designed specifically for your business, running on hardware you own, in your office.
              </p>
              <p className="text-secondary text-xl leading-relaxed">
                No per-seat pricing. No feature gates. No wondering where your data goes. Just a solution that works.
              </p>
            </div>
            <div className="gradient-border p-8 bg-slate-900 relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-white">What you get</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <p className="text-white/80">Custom system built for YOUR workflow</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <p className="text-white/80">Runs locally - your data never leaves your office</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <p className="text-white/80">One invoice instead of 5 subscriptions</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <p className="text-white/80">We maintain and update it for you</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <p className="text-white/80">You own the hardware outright</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-background" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Let's talk</h2>
              <p className="text-secondary text-lg">
                Tell us what's eating your time. We'll tell you if we can automate it.
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
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  What's eating your time?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none text-foreground placeholder:text-slate-500"
                  placeholder="Tell us about the repetitive tasks you wish you didn't have to do..."
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
                <p className="text-green-400 text-center font-medium">
                  Got it. We'll be in touch within 24 hours.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 text-center">
                  Something went wrong. Try again or email directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="/" className="flex items-center gap-3 text-2xl font-bold tracking-tight">
              <img src="/logo-icon.svg" alt="Cortecs" className="w-8 h-8" />
              <span className="gradient-text">Cortecs.</span>
            </a>
            <div className="flex items-center gap-8">
              <a href="#solutions" className="text-secondary hover:text-foreground transition-colors text-sm">
                Solutions
              </a>
              <a href="#how-it-works" className="text-secondary hover:text-foreground transition-colors text-sm">
                How It Works
              </a>
              <a href="/blog" className="text-secondary hover:text-foreground transition-colors text-sm">
                Blog
              </a>
              <a href="#contact" className="text-secondary hover:text-foreground transition-colors text-sm">
                Contact
              </a>
            </div>
            <div className="text-secondary text-sm">
              © {new Date().getFullYear()} Cortecs. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
