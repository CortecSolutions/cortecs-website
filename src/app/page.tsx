// Placeholder home — verifies the shell (layout, nav, theme, fonts, footer)
// compiles and renders. Real sections ship in the next commits.

export default function Home() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-32 md:py-40">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--fg-muted)]">
          Redesign · shell preview
        </p>
        <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--fg)] md:text-7xl">
          AI consulting for small businesses in{" "}
          <span className="text-[var(--accent)]">London, Ontario</span>.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--fg-muted)]">
          Shell, nav, theme toggle, fonts, and footer are wired. Hero, Problem,
          Services, Process, Why, About, FAQ, and Contact ship next.
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-full bg-[var(--fg)] px-6 py-3 text-sm font-medium text-[var(--bg)] transition hover:opacity-90"
          >
            Get in touch
          </a>
          <a
            href="#services"
            className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--fg)] transition hover:border-[var(--fg)]"
          >
            See services
          </a>
        </div>
      </div>

      {/* Spacer so the fixed nav, some mid-scroll, and the footer are all
          visible during shell smoke-test. */}
      <div className="h-[120vh]" />

      <div
        id="services"
        className="mx-auto max-w-6xl px-6 py-32 text-[var(--fg-muted)]"
      >
        <p>Placeholder anchor: #services</p>
      </div>
      <div
        id="process"
        className="mx-auto max-w-6xl px-6 py-32 text-[var(--fg-muted)]"
      >
        <p>Placeholder anchor: #process</p>
      </div>
      <div
        id="about"
        className="mx-auto max-w-6xl px-6 py-32 text-[var(--fg-muted)]"
      >
        <p>Placeholder anchor: #about</p>
      </div>
      <div
        id="faq"
        className="mx-auto max-w-6xl px-6 py-32 text-[var(--fg-muted)]"
      >
        <p>Placeholder anchor: #faq</p>
      </div>
      <div
        id="contact"
        className="mx-auto max-w-6xl px-6 py-32 text-[var(--fg-muted)]"
      >
        <p>Placeholder anchor: #contact</p>
      </div>
    </section>
  );
}
