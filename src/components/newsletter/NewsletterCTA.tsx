"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { useNewsletterSignup } from "@/components/newsletter/NewsletterSignupProvider";
import type { NewsletterPreferenceId } from "@/data/newsletter";
import { cn } from "@/lib/utils";

type VisualVariant = "button" | "horizontal" | "compact" | "glass";

type NewsletterCTAProps = {
  title: string;
  description: string;
  buttonLabel: string;
  defaultPreferences: NewsletterPreferenceId[];
  sourcePage: string;
  visualVariant?: VisualVariant;
  className?: string;
};

export function NewsletterCTA({
  title,
  description,
  buttonLabel,
  defaultPreferences,
  sourcePage,
  visualVariant = "horizontal",
  className,
}: NewsletterCTAProps) {
  const { openSignup } = useNewsletterSignup();

  const handleClick = () => {
    openSignup({ defaultPreferences, sourcePage, title, description });
  };

  if (visualVariant === "button") {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={cn(
          "inline-flex items-center gap-2 rounded-sm bg-electric px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-electric/20 transition-all hover:bg-electric-hover",
          className
        )}
      >
        {buttonLabel}
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    );
  }

  if (visualVariant === "compact") {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-md border border-border-subtle bg-white/80 p-5 backdrop-blur-sm",
          "border-l-[3px] border-l-electric shadow-sm",
          className
        )}
      >
        <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-electric/5 blur-2xl" />
        <p className="font-display text-base font-semibold text-navy">{title}</p>
        <p className="mt-1.5 text-sm text-navy-subtle">{description}</p>
        <button
          type="button"
          onClick={handleClick}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-electric hover:underline"
        >
          {buttonLabel}
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-md border border-border-subtle p-6 sm:p-7",
        visualVariant === "glass"
          ? "border-white/20 bg-white/10 backdrop-blur-md"
          : "bg-gradient-to-br from-white via-ivory to-electric-muted/30 shadow-sm shadow-navy/5",
        className
      )}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-electric/10 blur-3xl transition-opacity group-hover:opacity-100" />
      <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-4 sm:max-w-xl">
          <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-electric/10 text-electric sm:flex">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-navy">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-navy-subtle">
              {description}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleClick}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-navy px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-navy-muted sm:text-sm"
        >
          {buttonLabel}
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
