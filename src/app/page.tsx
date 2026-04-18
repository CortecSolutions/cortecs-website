import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Placeholder section anchors so nav links still resolve.
          Real sections ship in subsequent commits. */}
      <section
        id="services"
        className="mx-auto max-w-6xl px-6 py-32 text-[var(--fg-muted)]"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em]">
          Next up · #services
        </p>
      </section>
      <section
        id="process"
        className="mx-auto max-w-6xl px-6 py-32 text-[var(--fg-muted)]"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em]">
          Coming · #process
        </p>
      </section>
      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-32 text-[var(--fg-muted)]"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em]">
          Coming · #about
        </p>
      </section>
      <section
        id="faq"
        className="mx-auto max-w-6xl px-6 py-32 text-[var(--fg-muted)]"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em]">
          Coming · #faq
        </p>
      </section>
      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-32 text-[var(--fg-muted)]"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em]">
          Coming · #contact
        </p>
      </section>
    </>
  );
}
