export default function ReflectPage() {
  const features = [
    {
      title: "Completely Private",
      description: "Everything stays on your USB drive. Unplug it, no trace on your computer. No one knows what you talked about.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: "Tracks Patterns",
      description: "Remembers what you've talked about. Notices when you're repeating the same pattern. Calls it out.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Brutally Honest",
      description: "Doesn't tell you what you want to hear. Pushes back when your reasoning is off. No sugarcoating.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Always Available",
      description: "3am and can't sleep? Need to think something through before a meeting? It's there.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const included = [
    "USB drive preloaded with everything you need",
    "Memory system that tracks your patterns and history",
    "Session notes that auto-save",
    "Voice mode - talk instead of type",
    "Goal tracking templates",
    "Step-by-step setup guide",
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
              <a href="/reflect" className="text-foreground transition-colors text-sm font-medium">
                Reflect
              </a>
              <a href="/security" className="text-secondary hover:text-foreground transition-colors text-sm font-medium">
                Security
              </a>
              <a
                href="#order"
                className="gradient-bg text-white px-5 py-2.5 rounded-full hover:opacity-90 transition-all text-sm font-medium hover:shadow-lg hover:shadow-primary/25"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Personal Development Tool
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
            A private space to{" "}
            <span className="gradient-text">think clearly.</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
            A USB drive with a complete self-reflection system. Plug in when you need to think. Unplug when you're done. No trace left behind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#order"
              className="gradient-bg text-white px-10 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-all text-center hover:shadow-xl hover:shadow-primary/25"
            >
              Order Now - $79 CAD
            </a>
          </div>
          <p className="text-secondary text-sm mt-4">
            <span className="text-primary font-medium">Free shipping to Canada & USA - Limited time only.</span> Requires Claude Pro subscription ($20 USD/month, separate).
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            A better way to think through problems
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
              <h3 className="text-xl font-semibold mb-4 text-red-400">Thinking alone</h3>
              <ul className="space-y-3 text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">-</span>
                  Same thoughts going in circles
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">-</span>
                  Blind spots you can't see
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">-</span>
                  No one to push back on your reasoning
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">-</span>
                  Easy to avoid the real issue
                </li>
              </ul>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-primary/30">
              <h3 className="text-xl font-semibold mb-4 text-primary">Reflect Drive</h3>
              <ul className="space-y-3 text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  Something that pushes back on your thinking
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  Catches patterns you miss
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  Completely private - no one ever sees it
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  Available whenever you need to think
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            How it works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What's included
          </h2>
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
            <ul className="space-y-4">
              {included.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 p-6 rounded-2xl border border-yellow-500/30 bg-yellow-500/5">
            <p className="text-yellow-200 text-sm">
              <strong>Note:</strong> Reflect Drive requires a Claude Pro subscription ($20 USD/month) from Anthropic.
              You're buying the system and methodology - the AI subscription is separate and paid directly to Anthropic.
            </p>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Simple to use
          </h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Plug in the drive", desc: "Insert the USB into your computer" },
              { step: "2", title: "Open terminal", desc: "Launch Claude Code from the drive folder" },
              { step: "3", title: "Start talking", desc: "Your AI coach is ready. Be honest." },
              { step: "4", title: "Unplug when done", desc: "Sessions auto-save. No trace on your computer." },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-secondary">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Order Your Reflect Drive</h2>
            <p className="text-secondary text-lg">
              $79 CAD - <span className="text-primary">Free shipping to Canada & USA (Limited time)</span>
            </p>
          </div>

          <div className="text-center">
            <a
              href="https://buy.stripe.com/eVqcMYaPR89i1s70Tx1VK00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full gradient-bg text-white py-4 rounded-xl text-lg font-medium hover:opacity-90 transition-all hover:shadow-xl hover:shadow-primary/25"
            >
              Buy Now - $79 CAD
            </a>
            <div className="mt-6 flex items-center justify-center gap-4 text-secondary text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secure checkout
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"/>
                </svg>
                PayPal & Cards accepted
              </div>
            </div>
            <p className="text-secondary text-sm mt-4">
              Ships within 1-2 business days. Free shipping to Canada & USA.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What do I need to use this?",
                a: "A computer (Mac or Windows) and a Claude Pro subscription ($20 USD/month from Anthropic). The subscription is separate - you sign up directly with Anthropic."
              },
              {
                q: "Why not just use the Claude app directly?",
                a: "Claude starts fresh every conversation - it doesn't remember you. Reflect has a memory system that tracks your patterns, goals, and history across sessions. It's also configured to push back and call you out, not just be agreeable. Claude is the engine. Reflect is the car - already built and ready to drive."
              },
              {
                q: "Is this therapy?",
                a: "No. It's a thinking tool. Something to help you work through decisions, recognize patterns, and get unstuck. Not a replacement for professional help if you need it."
              },
              {
                q: "Why would I use this instead of just thinking?",
                a: "Because you have blind spots. Everyone does. This pushes back on your reasoning, catches patterns you repeat, and doesn't let you off the hook."
              },
              {
                q: "How private is it really?",
                a: "Everything is on your USB drive. Unplug it and there's nothing on your computer. We never see your sessions. Nobody does unless you show them."
              },
              {
                q: "How long until I receive it?",
                a: "Orders ship within 1-2 business days of payment. Canadian delivery typically takes 3-7 business days. USA delivery typically takes 5-10 business days."
              },
            ].map((item, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                <p className="text-secondary">{item.a}</p>
              </div>
            ))}
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
