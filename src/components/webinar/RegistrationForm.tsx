"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarPlus,
  CheckCircle2,
  Download,
} from "lucide-react";
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
  {
    label: "Google Calendar",
    href: getGoogleCalendarUrl(),
    icon: CalendarPlus,
  },
  {
    label: "Outlook",
    href: getOutlookCalendarUrl(),
    icon: CalendarPlus,
  },
  {
    label: "Teams",
    href: getTeamsCalendarUrl(),
    icon: CalendarPlus,
  },
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
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <section id="register" className="py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-electric">
              Registration
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Reserve Your Seat
            </h2>
            <p className="mt-4 text-base text-navy-subtle">
              Limited live seats. Complete the form below to register.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-10 rounded-sm border border-border-subtle bg-white p-8 shadow-lg shadow-navy/5 lg:p-10"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center"
                >
                  <CheckCircle2 className="mx-auto h-14 w-14 text-electric" />
                  <p className="mt-5 font-display text-xl font-semibold text-navy">
                    You&apos;re registered!
                  </p>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-navy-subtle">
                    Thank you for registering. The webinar link will be shared
                    with you closer to the event.
                  </p>

                  <div className="mt-8 border-t border-border-subtle pt-8">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-navy-subtle">
                      Add to your calendar
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                      {calendarLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-sm border border-border-subtle px-4 py-2.5 text-xs font-semibold text-navy transition-colors hover:border-electric/40 hover:bg-electric-muted/30"
                        >
                          <link.icon className="h-3.5 w-3.5 text-electric" />
                          {link.label}
                        </a>
                      ))}
                      <button
                        type="button"
                        onClick={downloadIcsFile}
                        className="inline-flex items-center gap-2 rounded-sm border border-border-subtle px-4 py-2.5 text-xs font-semibold text-navy transition-colors hover:border-electric/40 hover:bg-electric-muted/30"
                      >
                        <Download className="h-3.5 w-3.5 text-electric" />
                        ICS Download
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" required>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={update("name")}
                        className={inputClass}
                        placeholder="Full name"
                      />
                    </Field>
                    <Field label="Company" required>
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
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Designation" required>
                      <input
                        type="text"
                        required
                        value={form.designation}
                        onChange={update("designation")}
                        className={inputClass}
                        placeholder="Your role"
                      />
                    </Field>
                    <Field label="Work Email" required>
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
                  <Field label="Country" required>
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
                    className="w-full rounded-sm bg-electric py-3.5 text-sm font-semibold text-white shadow-md shadow-electric/20 transition-all hover:bg-electric-hover disabled:opacity-70"
                  >
                    {loading ? "Registering..." : "Register"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {!submitted && (
            <div className="mt-8 rounded-sm border border-border-subtle bg-ivory-muted/50 p-6">
              <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-navy-subtle">
                Add to calendar
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {calendarLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm border border-border-subtle bg-white px-4 py-2.5 text-xs font-semibold text-navy transition-colors hover:border-electric/40"
                  >
                    <CalendarPlus className="h-3.5 w-3.5 text-electric" />
                    {link.label}
                  </a>
                ))}
                <button
                  type="button"
                  onClick={downloadIcsFile}
                  className="inline-flex items-center gap-2 rounded-sm border border-border-subtle bg-white px-4 py-2.5 text-xs font-semibold text-navy transition-colors hover:border-electric/40"
                >
                  <Download className="h-3.5 w-3.5 text-electric" />
                  ICS Download
                </button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

const inputClass =
  "w-full rounded-sm border border-border-subtle bg-ivory px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-navy-subtle/60 focus:border-electric focus:ring-1 focus:ring-electric/20";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy-muted">
        {label}
        {required && <span className="text-electric"> *</span>}
      </span>
      {children}
    </label>
  );
}
