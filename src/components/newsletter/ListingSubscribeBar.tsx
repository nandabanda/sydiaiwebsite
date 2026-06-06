"use client";

import { NewsletterCTA } from "@/components/newsletter/NewsletterCTA";
import { newsletterCopy } from "@/data/newsletter";

type ListingSubscribeBarProps = {
  variant: "demand" | "engineering";
};

export function ListingSubscribeBar({ variant }: ListingSubscribeBarProps) {
  const copy =
    variant === "demand"
      ? newsletterCopy.demandBrief
      : newsletterCopy.engineeringStack;
  const sourcePage =
    variant === "demand"
      ? "/insights/demand-intelligence-brief"
      : "/insights/engineering-stack";

  return (
    <NewsletterCTA
      {...copy}
      sourcePage={sourcePage}
      visualVariant="button"
    />
  );
}
