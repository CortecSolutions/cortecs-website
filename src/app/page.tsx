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
          subject: "New Inquiry - Cortecs",
          from_name: "Cortecs Website",
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

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 text-2xl font-bold tracking-tight">
              <img src="/logo-icon.svg" alt="Cortecs" className="w-10 h-10" />
              <span className="gradient-text">Cortecs</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#how" className="text-secondary hover:text-foreground transition-colors text-sm font-medium">
                How It Works
              </a>
              <a href="#results" className="text-secondary hover:text-foreground transition-colors text-sm font-medium">
                Results
              </a>
              <a href="#pricing" className="text-secondary hover:text-foreground transition-colors text-sm font-medium">
                Pricing
              </a>
              <a href="#about" className="text-secondary hover:text-foreground transition-colors text-sm font-medium">
                About
              </a>
              <a
                href="#contact"
                className="gradient-bg text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-all"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="slide-up mb-6">
            <span className="code-accent text-sm font-mono text-primary">Powered by NVIDIA DGX Spark</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] mb-6 slide-up tracking-tight text-white">
            AI agents that build{" "}
            <span className="gradient-text">your software for you.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed slide-up slide-up-delay-1 max-w-3xl mx-auto">
            I deploy teams of AI agents that work together to create custom software and automations for your business. You describe the problem. My agents build the solution. Everything runs on hardware I own — your data never touches the cloud.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up slide-up-delay-2">
            <a
              href="#contact"
              className="gradient-bg text-white px-10 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-all text-center hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              Tell Me Your Problem
            </a>
            <a
              href="#how"
              className="border border-white/30 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all text-center backdrop-blur-sm"
            >
              See How It Works
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 z-10">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="problem" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-background" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Your business needs AI. But where do you start?</h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              You know automation could save you hours every day. But hiring developers is expensive, off-the-shelf tools don't fit, and cloud AI means your data leaves your control.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/30 p-8 rounded-2xl border border-red-500/20">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-red-400">"We can't afford a dev team"</h3>
              <p className="text-secondary leading-relaxed">
                Custom software costs six figures and takes months. You need something that fits your exact workflow, but enterprise solutions are built for companies 10x your size.
              </p>
            </div>
            <div className="bg-slate-800/30 p-8 rounded-2xl border border-red-500/20">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-red-400">"We don't trust the cloud"</h3>
              <p className="text-secondary leading-relaxed">
                Your customer data, pricing, and internal processes are sensitive. Every time you paste something into ChatGPT, it leaves your building and lands on someone else's servers.
              </p>
            </div>
            <div className="bg-slate-800/30 p-8 rounded-2xl border border-red-500/20">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-red-400">"We don't know where to start"</h3>
              <p className="text-secondary leading-relaxed">
                There are a thousand AI tools out there. None of them know your business, your processes, or your data. You need someone who will sit down, understand your problem, and build the solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-slate-900/30 to-background" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">How it works.</h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              I use multi-agent AI orchestration to build custom solutions. That means teams of specialized AI agents collaborate to write, test, and deploy software — faster than any traditional dev shop.
            </p>
          </div>
          <div className="space-y-0">
            <div className="flex gap-8 items-start">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-lg shrink-0">1</div>
                <div className="w-px h-full bg-slate-700 mt-4" />
              </div>
              <div className="pb-16">
                <h3 className="text-xl font-bold mb-2">You tell me what's costing you time</h3>
                <p className="text-secondary leading-relaxed">
                  A 90-minute discovery call. You describe the repetitive work, the bottlenecks, the things that make you say "there has to be a better way." I listen, ask questions, and scope the solution.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-lg shrink-0">2</div>
                <div className="w-px h-full bg-slate-700 mt-4" />
              </div>
              <div className="pb-16">
                <h3 className="text-xl font-bold mb-2">My AI agents build the solution</h3>
                <p className="text-secondary leading-relaxed">
                  I write the spec. Then my team of AI agents — running on NVIDIA DGX Spark hardware — collaborates to build it. One agent writes code, another reviews it, another tests it. They work together around the clock until it's done.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-lg shrink-0">3</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">You own it. No subscriptions. No lock-in.</h3>
                <p className="text-secondary leading-relaxed">
                  I deliver working software built for your exact workflow. You get the source code. It runs on your hardware or mine. No monthly fees that grow with usage. No vendor lock-in. It's yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Build Section */}
      <section id="services" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">What my agents build.</h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              If it's repetitive and digital, my agents can automate it. Here's what businesses are asking for most.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 card-hover">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Invoice & Document Automation</h3>
              <p className="text-secondary leading-relaxed">
                Matching invoices to shipments, scanning receipts, processing purchase orders. My agents read your documents, extract the data, and do the matching your team does by hand.
              </p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 card-hover">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Dashboards</h3>
              <p className="text-secondary leading-relaxed">
                One screen for the owner. Another for the bookkeeper. Another for operations. Everyone sees exactly what they need — built around how your business actually works.
              </p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 card-hover">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">AI Assistants</h3>
              <p className="text-secondary leading-relaxed">
                Trained on your products, your pricing, your procedures. Your team asks questions in plain English and gets answers from your own data — not something the AI made up.
              </p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 card-hover">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Workflow Automation</h3>
              <p className="text-secondary leading-relaxed">
                Email triage, follow-up reminders, report generation, data entry between systems. If someone on your team does it the same way every day, I can make it happen automatically.
              </p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 card-hover">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">System Integration</h3>
              <p className="text-secondary leading-relaxed">
                Connect your accounting software, CRM, email, and spreadsheets. No ripping anything out. My agents build the bridges so everything talks to each other automatically.
              </p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 card-hover">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Software</h3>
              <p className="text-secondary leading-relaxed">
                Need something that doesn't exist? Internal tools, customer portals, tracking systems, booking platforms. My agents build production-ready software from your spec.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Results Section */}
      <section id="results" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-background" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Real problems. Real solutions.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
              <div className="text-primary text-sm font-mono mb-4">SHIPPED</div>
              <h3 className="text-xl font-bold mb-3">Freight Brokerage — Invoice Automation</h3>
              <p className="text-secondary leading-relaxed mb-4">
                A 9-person Canadian freight brokerage where the bookkeeper spent 4-6 hours daily matching carrier invoices to shipments by hand. Built a dashboard that automates the matching, flags mismatches, and gives the owner real-time visibility into operations.
              </p>
              <div className="text-emerald-400 font-medium text-sm">4-6 hours/day of manual work eliminated</div>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
              <div className="text-primary text-sm font-mono mb-4">PROTOTYPE</div>
              <h3 className="text-xl font-bold mb-3">Major Utility — Invoice Processing</h3>
              <p className="text-secondary leading-relaxed mb-4">
                A major Canadian utility company where a single employee spent hours processing invoices through a manual multi-step workflow. Built a local AI pipeline that reads, categorizes, and routes invoices automatically.
              </p>
              <div className="text-emerald-400 font-medium text-sm">Multi-hour process reduced to minutes</div>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
              <div className="text-primary text-sm font-mono mb-4">IN DEVELOPMENT</div>
              <h3 className="text-xl font-bold mb-3">Wiring Diagnostic Assistant</h3>
              <p className="text-secondary leading-relaxed mb-4">
                A vision-AI tool for electromechanical technicians. Snap a photo of a control panel, get identified components, label readings, and suggested troubleshooting steps. Built for techs who walk up to unfamiliar panels every day.
              </p>
              <div className="text-amber-400 font-medium text-sm">
                Are you an electromechanical tech? <a href="#contact" className="underline">I want to talk to you.</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Not your typical AI company.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50">
              <h3 className="text-lg font-bold mb-2 text-red-400">Typical AI companies</h3>
              <ul className="space-y-3 text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">&#10005;</span>
                  Your data goes to their cloud servers
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">&#10005;</span>
                  Monthly fees that scale with usage
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">&#10005;</span>
                  Generic tools that don't fit your workflow
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">&#10005;</span>
                  You're locked into their platform
                </li>
              </ul>
            </div>
            <div className="gradient-border p-8">
              <h3 className="text-lg font-bold mb-2 gradient-text">Cortecs</h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">&#10003;</span>
                  Your data never leaves your building
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">&#10003;</span>
                  One price. You own the code.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">&#10003;</span>
                  Built for your exact workflow
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">&#10003;</span>
                  No vendor lock-in. Switch anytime.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-slate-900/30 to-background" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Straightforward pricing.</h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              No hidden fees. No per-seat charges. No usage limits. Pick the tier that fits and let's get started.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50 card-hover">
              <div className="text-primary text-sm font-mono mb-2">DISCOVERY</div>
              <div className="text-3xl font-bold mb-1">$500</div>
              <div className="text-secondary text-sm mb-6">CAD · One-time</div>
              <ul className="space-y-3 text-secondary text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">&#10003;</span>
                  90-minute discovery call
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">&#10003;</span>
                  Written proposal with scope
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">&#10003;</span>
                  Credited toward any build
                </li>
              </ul>
            </div>
            <div className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50 card-hover">
              <div className="text-primary text-sm font-mono mb-2">STARTER AGENT</div>
              <div className="text-3xl font-bold mb-1">$3,000</div>
              <div className="text-secondary text-sm mb-6">CAD · One-time</div>
              <ul className="space-y-3 text-secondary text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">&#10003;</span>
                  One agent, one task
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">&#10003;</span>
                  Two-week delivery
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">&#10003;</span>
                  Source code transferred
                </li>
              </ul>
            </div>
            <div className="gradient-border p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-bg text-white text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</div>
              <div className="text-primary text-sm font-mono mb-2">CUSTOM SYSTEM</div>
              <div className="text-3xl font-bold mb-1">$10K–$25K</div>
              <div className="text-secondary text-sm mb-6">CAD · One-time</div>
              <ul className="space-y-3 text-secondary text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">&#10003;</span>
                  Multi-agent system
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">&#10003;</span>
                  Dashboards + integrations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">&#10003;</span>
                  Full deployment + training
                </li>
              </ul>
            </div>
            <div className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50 card-hover">
              <div className="text-primary text-sm font-mono mb-2">FULL BUILDOUT</div>
              <div className="text-3xl font-bold mb-1">$25K–$50K+</div>
              <div className="text-secondary text-sm mb-6">CAD · One-time</div>
              <ul className="space-y-3 text-secondary text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">&#10003;</span>
                  Dedicated hardware + agents
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">&#10003;</span>
                  On-premises installation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">&#10003;</span>
                  Ongoing support included
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About / NVIDIA Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">One founder. An army of AI agents.</h2>
          </div>
          <div className="bg-slate-800/30 p-10 rounded-2xl border border-slate-700/50 mb-8">
            <p className="text-lg text-secondary leading-relaxed mb-6">
              I'm Matt Grandy. I run Cortecs out of London, Ontario. Instead of hiring a dev team, I built an AI workforce. My agents run on two NVIDIA DGX Spark systems — enterprise AI hardware that lets me deliver what used to require a full engineering team.
            </p>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              When you work with me, you talk to a real person who understands your problem. Then my agents build the solution. I review everything before delivery. You get enterprise-quality software at a fraction of the traditional cost.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              Every solution runs on hardware I own — never on someone else's cloud. Your data stays private by default, not by policy.
            </p>
          </div>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="inline-flex items-center gap-3 bg-slate-800/50 px-6 py-3 rounded-full border border-slate-700/50">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <p className="text-secondary text-sm">Powered by NVIDIA DGX Spark</p>
            </div>
            <div className="inline-flex items-center gap-3 bg-slate-800/50 px-6 py-3 rounded-full border border-slate-700/50">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <p className="text-secondary text-sm">Nemotron 120B — Local Inference</p>
            </div>
            <div className="inline-flex items-center gap-3 bg-slate-800/50 px-6 py-3 rounded-full border border-slate-700/50">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <p className="text-secondary text-sm">100% On-Premises</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Let's talk about your business.</h2>
              <p className="text-secondary text-lg">
                Tell me what's eating your time. I'll tell you if my agents can help — no pressure, no jargon, no sales pitch.
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
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground placeholder:text-slate-500"
                  placeholder="Your company (optional)"
                />
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
                  placeholder="Example: We spend 3 hours a day matching invoices by hand..."
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
                  Got it. I'll be in touch within 24 hours.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 text-center">
                  Something went wrong. Try again or email me at matt@cortecs.ca.
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
              <span className="gradient-text">Cortecs</span>
            </a>
            <div className="flex items-center gap-8">
              <a href="#how" className="text-secondary hover:text-foreground transition-colors text-sm">
                How It Works
              </a>
              <a href="#pricing" className="text-secondary hover:text-foreground transition-colors text-sm">
                Pricing
              </a>
              <a href="#contact" className="text-secondary hover:text-foreground transition-colors text-sm">
                Contact
              </a>
              <a href="mailto:matt@cortecs.ca" className="text-secondary hover:text-foreground transition-colors text-sm">
                matt@cortecs.ca
              </a>
            </div>
            <div className="text-secondary text-sm">
              &copy; {new Date().getFullYear()} Cortecs. London, ON.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
