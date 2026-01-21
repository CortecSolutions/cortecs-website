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

  const projects = [
    {
      title: "Reflect",
      category: "Personal Development",
      description: "A USB drive with a complete self-reflection system. Plug in to think clearly, unplug when done. Pattern recognition, goal tracking, and brutally honest feedback.",
      status: "Live",
      statusColor: "text-green-400",
      link: "/reflect",
      tags: ["AI", "Privacy", "Hardware"],
    },
    {
      title: "Harvester Security",
      category: "Network Security",
      description: "WiFi reconnaissance and network security assessments for small businesses. Find vulnerabilities before someone else does. Wardriving, penetration testing, remediation.",
      status: "Active",
      statusColor: "text-green-400",
      link: "/security",
      tags: ["Security", "Pentesting", "Local"],
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 text-2xl font-bold tracking-tight">
              <img src="/logo-icon.svg" alt="Cortec" className="w-10 h-10" />
              <span className="gradient-text">Cortec.</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#projects" className="text-secondary hover:text-foreground transition-colors text-sm font-medium">
                Projects
              </a>
              <a href="/reflect" className="text-secondary hover:text-foreground transition-colors text-sm font-medium">
                Reflect
              </a>
              <a href="/security" className="text-secondary hover:text-foreground transition-colors text-sm font-medium">
                Security
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
            I like solving problems{" "}
            <span className="gradient-text">with technology.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed slide-up slide-up-delay-1 max-w-3xl mx-auto">
            Some of these projects are polished. Some are experiments. All of them are real.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up slide-up-delay-2">
            <a
              href="#projects"
              className="gradient-bg text-white px-10 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-all text-center hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              View Projects
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

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-background" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Projects</h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Things I've built and shipped. Each one solves a real problem.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                className="group bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 card-hover neon-border block"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-primary font-medium">{project.category}</span>
                  <span className={`text-sm font-medium ${project.statusColor}`}>{project.status}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-secondary leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
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
                Why I{" "}
                <span className="gradient-text">build</span>
              </h2>
              <p className="text-secondary text-xl leading-relaxed mb-6">
                I like solving problems with technology. Not theoretical problems - real ones. Things that bother me until I fix them.
              </p>
              <p className="text-secondary text-xl leading-relaxed mb-6">
                Reflect came from wanting a private way to think through problems without judgment. The security work came from realizing how exposed most small businesses are.
              </p>
              <p className="text-secondary text-xl leading-relaxed">
                Each project here is something I built because I wanted it to exist. If you have a problem that needs solving, I'm interested in talking.
              </p>
            </div>
            <div className="gradient-border p-8 bg-slate-900 relative z-10">
              <h3 className="text-3xl font-bold mb-8 text-white">What I work with</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg text-white mb-2">Software</h4>
                  <p className="text-white/70">Python, TypeScript, React, Next.js, Node.js, Swift</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white mb-2">Hardware</h4>
                  <p className="text-white/70">Raspberry Pi, SDR, WiFi adapters, custom builds</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white mb-2">Security</h4>
                  <p className="text-white/70">Network reconnaissance, penetration testing, vulnerability assessment</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white mb-2">AI/Automation</h4>
                  <p className="text-white/70">Claude, GPT-4, workflow automation, custom integrations</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Get in touch</h2>
              <p className="text-secondary text-lg">
                Have a project idea? Need security help? Just want to talk? Send a message.
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
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none text-foreground placeholder:text-slate-500"
                  placeholder="What's on your mind?"
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
                  Got it. I'll be in touch.
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
              <img src="/logo-icon.svg" alt="Cortec" className="w-8 h-8" />
              <span className="gradient-text">Cortec.</span>
            </a>
            <div className="flex items-center gap-8">
              <a href="#projects" className="text-secondary hover:text-foreground transition-colors text-sm">
                Projects
              </a>
              <a href="/reflect" className="text-secondary hover:text-foreground transition-colors text-sm">
                Reflect
              </a>
              <a href="/security" className="text-secondary hover:text-foreground transition-colors text-sm">
                Security
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
