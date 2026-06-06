"use client";

import { Container } from "@/components/ui/Container";
import { NewsletterCTA } from "@/components/newsletter/NewsletterCTA";
import { newsletterCopy } from "@/data/newsletter";

export function InsightsHeroSubscribe() {
  return (
    <section className="border-b border-border-subtle bg-ivory pb-8 lg:pb-10">
      <Container>
        <NewsletterCTA
          {...newsletterCopy.hub}
          sourcePage="/insights"
          visualVariant="button"
        />
      </Container>
    </section>
  );
}
