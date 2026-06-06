"use client";

import { useState, type FormEvent } from "react";
import {
  NEWSLETTER_PREFERENCES,
  SUCCESS_MESSAGE,
  type NewsletterPreferenceId,
  type NewsletterPayload,
} from "@/data/newsletter";
import { cn } from "@/lib/utils";

type NewsletterSignupFormProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  defaultPreferences?: NewsletterPreferenceId[];
  sourcePage: string;
  compact?: boolean;
  bare?: boolean;
  showHeader?: boolean;
  className?: string;
  onSuccess?: () => void;
};

type FormState = {
  fullName: string;
  workEmail: string;
  company: string;
  designation: string;
  country: string;
  preferences: NewsletterPreferenceId[];
  consent: boolean;
};

type FieldErrors = Partial<Record<keyof FormState | "form", string>>;

const inputClass =
  "w-full rounded-md border border-border-subtle bg-white px-3 py-2.5 text-sm text-navy outline-none transition-all placeholder:text-navy-subtle/50 focus:border-electric focus:ring-2 focus:ring-electric/15";

export function NewsletterSignupForm({
  title,
  description,
  buttonLabel = "Subscribe",
  defaultPreferences = [],
  sourcePage,
  compact = false,
  bare = false,
  showHeader = true,
  className,
  onSuccess,
}: NewsletterSignupFormProps) {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    workEmail: "",
    company: "",
    designation: "",
    country: "",
    preferences: defaultPreferences,
    consent: false,
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePreference = (id: NewsletterPreferenceId) => {
    setForm((prev) => ({
      ...prev,
      preferences: prev.preferences.includes(id)
        ? prev.preferences.filter((p) => p !== id)
        : [...prev.preferences, id],
    }));
    setErrors((prev) => ({ ...prev, preferences: undefined }));
  };

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    if (!form.fullName.trim()) next.fullName = "Full name is required.";
    if (!form.workEmail.trim()) next.workEmail = "Work email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.workEmail.trim()))
      next.workEmail = "Enter a valid work email.";
    if (!form.company.trim()) next.company = "Company is required.";
    if (!form.designation.trim())
      next.designation = "Designation is required.";
    if (!form.country.trim()) next.country = "Country is required.";
    if (form.preferences.length === 0)
      next.preferences = "Select at least one newsletter.";
    if (!form.consent) next.consent = "Consent is required.";
    return next;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setLoading(true);
    setErrors({});

    const payload: NewsletterPayload = {
      fullName: form.fullName.trim(),
      workEmail: form.workEmail.trim(),
      company: form.company.trim(),
      designation: form.designation.trim(),
      country: form.country.trim(),
      preferences: form.preferences,
      consent: form.consent,
      sourcePage,
      submittedAt: new Date().toISOString(),
    };

    try {
      const response = await fetch("/api/newsletter-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json()) as { errors?: string[] };
        setErrors({
          form: data.errors?.[0] ?? "Unable to subscribe. Please try again.",
        });
        setLoading(false);
        return;
      }

      console.log(payload);
      setSubmitted(true);
      onSuccess?.();
    } catch {
      setErrors({ form: "Unable to subscribe. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div
        className={cn(
          "rounded-md border border-electric/20 bg-electric-muted/30 p-5 text-center sm:p-6",
          className
        )}
      >
        <p className="font-display text-lg font-semibold text-navy">
          Thank you for subscribing.
        </p>
        <p className="mt-2 text-sm text-navy-subtle">{SUCCESS_MESSAGE}</p>
      </div>
    );
  }

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className={cn("grid gap-4", compact ? "sm:grid-cols-2" : "sm:grid-cols-2")}>
        <Field label="Full Name" error={errors.fullName}>
          <input
            type="text"
            value={form.fullName}
            onChange={(e) =>
              setForm((p) => ({ ...p, fullName: e.target.value }))
            }
            className={inputClass}
            placeholder="Full name"
          />
        </Field>
        <Field label="Work Email" error={errors.workEmail}>
          <input
            type="email"
            value={form.workEmail}
            onChange={(e) =>
              setForm((p) => ({ ...p, workEmail: e.target.value }))
            }
            className={inputClass}
            placeholder="name@company.com"
          />
        </Field>
        <Field label="Company" error={errors.company}>
          <input
            type="text"
            value={form.company}
            onChange={(e) =>
              setForm((p) => ({ ...p, company: e.target.value }))
            }
            className={inputClass}
            placeholder="Organization"
          />
        </Field>
        <Field label="Designation" error={errors.designation}>
          <input
            type="text"
            value={form.designation}
            onChange={(e) =>
              setForm((p) => ({ ...p, designation: e.target.value }))
            }
            className={inputClass}
            placeholder="Your role"
          />
        </Field>
        <Field label="Country" error={errors.country} className="sm:col-span-2">
          <input
            type="text"
            value={form.country}
            onChange={(e) =>
              setForm((p) => ({ ...p, country: e.target.value }))
            }
            className={inputClass}
            placeholder="Country"
          />
        </Field>
      </div>

      <fieldset>
        <legend className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-navy-muted">
          Newsletter Preference
        </legend>
        <div className="space-y-2">
          {NEWSLETTER_PREFERENCES.map((pref) => (
            <label
              key={pref.id}
              className="flex cursor-pointer items-start gap-2.5 text-sm text-navy-muted"
            >
              <input
                type="checkbox"
                checked={form.preferences.includes(pref.id)}
                onChange={() => togglePreference(pref.id)}
                className="mt-0.5 h-4 w-4 rounded-sm border-border accent-electric"
              />
              {pref.label}
            </label>
          ))}
        </div>
        {errors.preferences && (
          <p className="mt-1.5 text-xs text-red-600">{errors.preferences}</p>
        )}
      </fieldset>

      <label className="flex cursor-pointer items-start gap-2.5">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(e) =>
            setForm((p) => ({ ...p, consent: e.target.checked }))
          }
          className="mt-0.5 h-4 w-4 rounded-sm border-border accent-electric"
        />
        <span className="text-xs leading-relaxed text-navy-subtle">
          I agree to receive SYDIAI Insights publications and related research
          updates.
        </span>
      </label>
      {errors.consent && (
        <p className="text-xs text-red-600">{errors.consent}</p>
      )}

      <p className="text-[11px] text-navy-subtle">
        We respect your privacy. You can unsubscribe anytime.
      </p>

      {errors.form && <p className="text-xs text-red-600">{errors.form}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-electric px-5 py-3 text-sm font-semibold text-white shadow-md shadow-electric/20 transition-colors hover:bg-electric-hover disabled:opacity-70 sm:w-auto"
      >
        {loading ? "Subscribing..." : buttonLabel}
      </button>
    </form>
  );

  if (bare) {
    return <div className={className}>{formContent}</div>;
  }

  return (
    <div
      className={cn(
        "rounded-md border border-border-subtle bg-white/90 p-6 shadow-lg shadow-navy/5 backdrop-blur-sm sm:p-8",
        "border-t-2 border-t-gold/40",
        className
      )}
    >
      {showHeader && title && (
        <>
          <h3 className="font-display text-xl font-semibold text-navy">{title}</h3>
          {description && (
            <p className="mt-2 text-sm leading-relaxed text-navy-subtle">
              {description}
            </p>
          )}
        </>
      )}
      <div className={showHeader && title ? "mt-5" : undefined}>{formContent}</div>
    </div>
  );
}

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-navy-muted">
        {label}
      </span>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </label>
  );
}
