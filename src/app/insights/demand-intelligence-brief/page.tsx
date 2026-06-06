import type { Metadata } from "next";
import { InsightHero } from "@/components/insights/InsightHero";
import { PublicationCard } from "@/components/insights/PublicationCard";
import { CategoryChips } from "@/components/insights/CategoryChips";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/insights/Breadcrumbs";
import { ListingSubscribeBar } from "@/components/newsletter/ListingSubscribeBar";
import { ResearchCircleSection } from "@/components/newsletter/ResearchCircleSection";
import {
  demandIntelligenceBriefMeta,
  demandIntelligenceEditions,
} from "@/data/insights/publications";

export const metadata: Metadata = {
  title: "Demand Intelligence Brief | SYDIAI Insights",
  description:
    "Weekly executive perspectives from SYDIAI Insights Team on how AI is transforming demand sensing, shaping, capturing, execution, forecasting, and fulfillment.",
};

export default function DemandIntelligenceBriefPage() {
  const editions = [...demandIntelligenceEditions].reverse();

  return (
    <>
      <div className="border-b border-border-subtle bg-ivory pt-24 pb-2 lg:pt-28">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Insights", href: "/insights" },
              { label: "Demand Intelligence Brief" },
            ]}
            className="mb-4"
          />
          <ListingSubscribeBar variant="demand" />
        </Container>
      </div>

      <InsightHero
        eyebrow="Demand Intelligence Brief™"
        headline={demandIntelligenceBriefMeta.title}
        body={`${demandIntelligenceBriefMeta.subtitle} ${demandIntelligenceBriefMeta.description}`}
        meta={`${demandIntelligenceBriefMeta.publisher} · ${demandIntelligenceBriefMeta.cadence}`}
        compact
      />

      <section className="pb-8 lg:pb-10">
        <Container>
          <CategoryChips
            chips={demandIntelligenceBriefMeta.chips}
            className="mb-8"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {editions.map((edition) => (
              <PublicationCard
                key={edition.slug}
                edition={edition.edition}
                title={edition.title}
                description={edition.description}
                href={`/insights/demand-intelligence-brief/${edition.slug}`}
                readTime={edition.readTime}
              />
            ))}
          </div>
        </Container>
      </section>

      <ResearchCircleSection
        sourcePage="/insights/demand-intelligence-brief"
        showTiles={false}
      />
    </>
  );
}
