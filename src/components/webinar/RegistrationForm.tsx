"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarPlus, CheckCircle2, Download } from "lucide-react";
import {
  downloadIcsFile,
  getGoogleCalendarUrl,
  getOutlookCalendarUrl,
  getTeamsCalendarUrl,
} from "@/lib/calendar";
import { Container } from "@/components/ui/Container";

type FormData = {
  name: string;
  company: string;
  designation: string;
  email: string;
  country: string;
};

const initialForm: FormData = {
  name: "",
  company: "",
  designation: "",
  email: "",
  country: "",
};

const calendarLinks = [
  { label: "Google", href: getGoogleCalendarUrl() },
  { label: "Outlook", href: getOutlookCalendarUrl() },
  { label: "Teams", href: getTeamsCalendarUrl() },
];

export function RegistrationForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const update = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <section id="register" className="border-t border-border-subtle bg-ivory-muted/30 py-12 lg:py-14">
      <Container>
        <div className="mx-auto max-w-xl">
          <div className="mb-6 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-electric">
              Registration
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Reserve Your Seat
            </h2>
            <p className="mt-2 text-sm text-navy-subtle">
              Limited live seats. Register below.
            </p>
          </div>

          <div className="rounded-sm border border-border-subtle bg-white p-5 shadow-sm sm:p-6">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-4 text-center"
                >
                  <CheckCircle2 className="mx-auto h-10 w-10 text-electric" />
                  <p className="mt-3 font-display text-lg font-semibold text-navy">
                    You&apos;re registered
                  </p>
                  <p className="mx-auto mt-2 max-w-sm text-sm text-navy-subtle">
                    Thank you for registering. The webinar link will be shared
                    with you closer to the event.
                  </p>
                  <CalendarLinks className="mt-6 border-t border-border-subtle pt-5" />
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Name">
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={update("name")}
                        className={inputClass}
                        placeholder="Full name"
                      />
                    </Field>
                    <Field label="Company">
                      <input
                        type="text"
                        required
                        value={form.company}
                        onChange={update("company")}
                        className={inputClass}
                        placeholder="Organization"
                      />
                    </Field>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Designation">
                      <input
                        type="text"
                        required
                        value={form.designation}
                        onChange={update("designation")}
                        className={inputClass}
                        placeholder="Your role"
                      />
                    </Field>
                    <Field label="Work Email">
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={update("email")}
                        className={inputClass}
                        placeholder="name@company.com"
                      />
                    </Field>
                  </div>
                  <Field label="Country">
                    <input
                      type="text"
                      required
                      value={form.country}
                      onChange={update("country")}
                      className={inputClass}
                      placeholder="Country"
                    />
                  </Field>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-sm bg-electric py-3 text-sm font-semibold text-white transition-colors hover:bg-electric-hover disabled:opacity-70"
                  >
                    {loading ? "Registering..." : "Register"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {!submitted && (
            <CalendarLinks className="mt-5 rounded-sm border border-border-subtle bg-white p-4" />
          )}
        </div>
      </Container>
    </section>
  );
}

function CalendarLinks({ className }: { className?: string }) {
  return (
    <div className={className}>
      <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-wider text-navy-subtle">
        Add to calendar
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {calendarLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-sm border border-border-subtle px-3 py-2 text-[11px] font-semibold text-navy transition-colors hover:border-electric/40"
          >
            <CalendarPlus className="h-3 w-3 text-electric" />
            {link.label}
          </a>
        ))}
        <button
          type="button"
          onClick={downloadIcsFile}
          className="inline-flex items-center gap-1.5 rounded-sm border border-border-subtle px-3 py-2 text-[11px] font-semibold text-navy transition-colors hover:border-electric/40"
        >
          <Download className="h-3 w-3 text-electric" />
          ICS
        </button>
      </div>
    </div>
  );
}

const inputClass =
  "w-full rounded-sm border border-border-subtle bg-ivory px-3 py-2.5 text-sm text-navy outline-none placeholder:text-navy-subtle/50 focus:border-electric focus:ring-1 focus:ring-electric/20";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-navy-muted">
        {label}
      </span>
      {children}
    </label>
  );
}
