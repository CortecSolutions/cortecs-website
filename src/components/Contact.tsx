"use client";

import { useState, type FormEvent } from "react";
import { motion, type Variants } from "framer-motion";

const CONTACT_EMAIL = "matt@cortecs.ca";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const business = String(data.get("business") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `New enquiry from ${name || "website"}`;
    const bodyLines = [
      `Name: ${name}`,
      `Business: ${business}`,
      `Email: ${email}`,
      "",
      message,
    ];
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = href;
    setStatus("sent");
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-headline"
      className="relative border-t border-[var(--border)]"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-16 px-6 py-28 md:grid-cols-[1fr_1.1fr] md:py-36">
        <div>
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--fg-muted)]"
          >
            Contact
          </motion.p>

          <motion.h2
            id="contact-headline"
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-6 text-3xl font-semibold leading-[1.08] tracking-tight text-[var(--fg)] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Let&apos;s talk.
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--fg-muted)] md:text-xl"
          >
            Send a few lines about your business and what you&apos;re trying
            to figure out. I reply within one business day — usually the
            same day.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-10 space-y-2 text-sm text-[var(--fg-muted)]"
          >
            <p>
              <span className="font-mono uppercase tracking-[0.18em] text-xs text-[var(--fg-muted)]">
                Email
              </span>
              <br />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-base text-[var(--fg)] underline decoration-[var(--border)] underline-offset-4 transition hover:decoration-[var(--fg)]"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="pt-4">
              <span className="font-mono uppercase tracking-[0.18em] text-xs text-[var(--fg-muted)]">
                Based in
              </span>
              <br />
              <span className="text-base text-[var(--fg)]">
                London, Ontario
              </span>
              <br />
              <span>On-site visits within a two-hour drive. Remote anywhere.</span>
            </p>
          </motion.div>
        </div>

        <motion.form
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-[var(--border)] p-7 md:p-8"
          aria-label="Contact form"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id="name"
              label="Your name"
              autoComplete="name"
              required
            />
            <Field
              id="business"
              label="Business"
              autoComplete="organization"
              required
            />
          </div>
          <Field
            id="email"
            label="Email"
            type="email"
            autoComplete="email"
            required
          />
          <Field
            id="message"
            label="What are you trying to figure out?"
            as="textarea"
            rows={5}
            required
          />

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--fg)] px-6 py-3.5 text-sm font-medium text-[var(--bg)] transition hover:opacity-90"
            >
              Send message
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
            <p
              role="status"
              aria-live="polite"
              className="text-xs text-[var(--fg-muted)]"
            >
              {status === "sent"
                ? "Your email app should be opening now. If it didn't, email matt@cortecs.ca directly."
                : "No spam, no newsletter, no sales sequence."}
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

type FieldProps = {
  id: string;
  label: string;
  type?: string;
  as?: "input" | "textarea";
  rows?: number;
  required?: boolean;
  autoComplete?: string;
};

function Field({
  id,
  label,
  type = "text",
  as = "input",
  rows = 4,
  required = false,
  autoComplete,
}: FieldProps) {
  const shared =
    "w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-[var(--fg)] placeholder:text-[var(--fg-muted)]/60 focus:border-[var(--fg)] focus:outline-none";
  return (
    <label htmlFor={id} className="block space-y-2">
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--fg-muted)]">
        {label}
        {required ? " *" : ""}
      </span>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={id}
          rows={rows}
          required={required}
          className={`${shared} resize-y`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          autoComplete={autoComplete}
          className={shared}
        />
      )}
    </label>
  );
}
