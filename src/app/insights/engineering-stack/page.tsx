import type { Metadata } from "next";
import { InsightHero } from "@/components/insights/InsightHero";
import { PublicationCard } from "@/components/insights/PublicationCard";
import { CategoryChips } from "@/components/insights/CategoryChips";
import { NewsletterSignupSection } from "@/components/insights/NewsletterSignupSection";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/insights/Breadcrumbs";
import { newsletterCopy } from "@/data/newsletter";
import {
  engineeringStackMeta,
  engineeringStackEditions,
} from "@/data/insights/publications";

export const metadata: Metadata = {
  title: "SYDIAI Engineering Stack | SYDIAI Insights",
  description:
    "Technical perspectives from SYDIAI Insights Team on AI agents, data engineering, decision systems, MLOps, and enterprise AI architecture.",
};

export default function EngineeringStackPage() {
  const editions = [...engineeringStackEditions].reverse();

  return (
    <>
      <div className="border-b border-border-subtle bg-ivory pt-24 pb-2 lg:pt-28">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Insights", href: "/insights" },
              { label: "SYDIAI Engineering Stack" },
            ]}
            className="mb-4"
          />
        </Container>
      </div>

      <InsightHero
        eyebrow="SYDIAI Engineering Stack™"
        headline={engineeringStackMeta.title}
        body={`${engineeringStackMeta.subtitle} ${engineeringStackMeta.description}`}
        meta={`${engineeringStackMeta.publisher} · ${engineeringStackMeta.cadence}`}
        compact
      />

      <NewsletterSignupSection
        {...newsletterCopy.engineeringStack}
        sourcePage="/insights/engineering-stack"
        compact
        className="border-b border-border-subtle bg-ivory-muted/20 py-8"
      />

      <section className="pb-8 lg:pb-10">
        <Container>
          <CategoryChips chips={engineeringStackMeta.chips} className="mb-8" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {editions.map((edition) => (
              <PublicationCard
                key={edition.slug}
                edition={edition.edition}
                title={edition.title}
                description={edition.description}
                href={`/insights/engineering-stack/${edition.slug}`}
                readTime={edition.readTime}
              />
            ))}
          </div>
        </Container>
      </section>

      <NewsletterSignupSection
        {...newsletterCopy.engineeringStack}
        sourcePage="/insights/engineering-stack"
        compact
        className="border-t border-border-subtle pb-14"
      />
    </>
  );
}
