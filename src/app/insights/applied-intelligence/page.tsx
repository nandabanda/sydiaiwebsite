import type { Metadata } from "next";
import { InsightHero } from "@/components/insights/InsightHero";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { FrameworkCard } from "@/components/insights/FrameworkCard";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/insights/Breadcrumbs";
import {
  appliedIntelligenceMeta,
  appliedIntelligenceDomains,
} from "@/data/insights/applied-intelligence";

export const metadata: Metadata = {
  title: "Applied Intelligence | SYDIAI Insights",
  description:
    "Research frameworks from SYDIAI Insights Team exploring practical applications of AI across commercial, planning, supply chain, and enterprise transformation.",
};

export default function AppliedIntelligencePage() {
  return (
    <>
      <div className="border-b border-border-subtle bg-ivory pt-24 pb-2 lg:pt-28">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Insights", href: "/insights" },
              { label: "Applied Intelligence" },
            ]}
            className="mb-4"
          />
        </Container>
      </div>

      <InsightHero
        eyebrow="Applied Intelligence™"
        headline={appliedIntelligenceMeta.title}
        body={`${appliedIntelligenceMeta.subtitle} Analytical perspectives on how AI can be applied to commercial, planning, supply chain, and enterprise transformation problems.`}
        meta={`${appliedIntelligenceMeta.publisher} · ${appliedIntelligenceMeta.cadence}`}
        compact
      />

      <section className="pb-14 lg:pb-16">
        <Container>
          <div className="mb-10">
            <FrameworkCard />
          </div>

          <div className="space-y-12">
            {appliedIntelligenceDomains.map((domain) => (
              <div key={domain.id}>
                <h2 className="mb-5 font-display text-xl font-bold text-navy">
                  {domain.title}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                  {domain.articles.map((article) => (
                    <ArticleCard
                      key={article.slug}
                      category={article.category}
                      title={article.title}
                      abstract={article.abstract}
                      href={`/insights/applied-intelligence/${article.slug}`}
                      readTime={article.readTime}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
