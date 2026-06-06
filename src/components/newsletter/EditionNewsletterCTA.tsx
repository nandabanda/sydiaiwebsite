"use client";

import { NewsletterCTA } from "@/components/newsletter/NewsletterCTA";
import { newsletterCopy, type NewsletterPreferenceId } from "@/data/newsletter";

type EditionNewsletterCTAProps = {
  defaultPreferences: NewsletterPreferenceId[];
  sourcePage: string;
};

export function EditionNewsletterCTA({
  defaultPreferences,
  sourcePage,
}: EditionNewsletterCTAProps) {
  return (
    <NewsletterCTA
      title={newsletterCopy.edition.title}
      description={newsletterCopy.edition.description}
      buttonLabel={newsletterCopy.edition.buttonLabel}
      defaultPreferences={defaultPreferences}
      sourcePage={sourcePage}
      visualVariant="compact"
    />
  );
}
