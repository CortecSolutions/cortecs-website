import { LogoIcon } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)] py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-end">
        <div className="flex items-center gap-2.5 text-[var(--fg)]">
          <LogoIcon className="h-4 w-auto" title="Cortecs logo" />
          <span className="text-sm font-semibold">Cortecs</span>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap gap-x-8 gap-y-3 text-sm"
        >
          <a href="#services" className="text-[var(--fg-muted)] transition hover:text-[var(--fg)]">Services</a>
          <a href="#process" className="text-[var(--fg-muted)] transition hover:text-[var(--fg)]">Process</a>
          <a href="#faq" className="text-[var(--fg-muted)] transition hover:text-[var(--fg)]">FAQ</a>
          <a href="#contact" className="text-[var(--fg-muted)] transition hover:text-[var(--fg)]">Contact</a>
          <a href="mailto:matt@cortecs.ca" className="text-[var(--fg-muted)] transition hover:text-[var(--fg)]">matt@cortecs.ca</a>
        </nav>

        <p className="text-xs text-[var(--fg-muted)]">
          © {year} Cortecs · London, Ontario
        </p>
      </div>
    </footer>
  );
}
