import type { Metadata } from "next";
import Link from "next/link";
import { InsightHero } from "@/components/insights/InsightHero";
import { EditorialSection } from "@/components/insights/EditorialSection";
import { PublicationCard } from "@/components/insights/PublicationCard";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { FrameworkCard } from "@/components/insights/FrameworkCard";
import { Container } from "@/components/ui/Container";
import { InsightsHeroSubscribe } from "@/components/newsletter/InsightsHeroSubscribe";
import { NewsletterCTA } from "@/components/newsletter/NewsletterCTA";
import { ResearchCircleSection } from "@/components/newsletter/ResearchCircleSection";
import { insightsHub, INSIGHTS_PUBLISHER } from "@/data/insights/hub";
import { newsletterCopy } from "@/data/newsletter";
import {
  demandIntelligenceBriefMeta,
  demandIntelligenceEditions,
  engineeringStackMeta,
  engineeringStackEditions,
} from "@/data/insights/publications";
import {
  appliedIntelligenceMeta,
  appliedIntelligenceDomains,
} from "@/data/insights/applied-intelligence";

export const metadata: Metadata = {
  title: "SYDIAI Insights | AI, Demand Intelligence & Enterprise Decision Systems",
  description:
    "Explore SYDIAI Insights for executive perspectives, technical deep dives, and applied AI frameworks across demand intelligence, engineering systems, and enterprise decision intelligence.",
};

export default function InsightsHubPage() {
  const dibSorted = [...demandIntelligenceEditions].reverse();
  const engSorted = [...engineeringStackEditions].reverse();

  return (
    <>
      <InsightHero
        eyebrow={insightsHub.eyebrow}
        headline={insightsHub.headline}
        body={insightsHub.body}
        ctas={insightsHub.ctas.map((c) => ({ ...c }))}
      />

      <InsightsHeroSubscribe />

      <section className="border-b border-border-subtle py-10 lg:py-12">
        <Container>
          <h2 className="font-display text-xl font-bold text-navy sm:text-2xl">
            {insightsHub.about.title}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-navy-subtle">
            {insightsHub.about.body}
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-navy-subtle">
            {insightsHub.about.bodyExtended}
          </p>
          <p className="mt-4 text-xs font-medium text-navy-muted">
            {INSIGHTS_PUBLISHER}
          </p>
        </Container>
      </section>

      <EditorialSection
        id="demand-intelligence-brief"
        title={demandIntelligenceBriefMeta.title}
        subtitle={demandIntelligenceBriefMeta.subtitle}
        description={demandIntelligenceBriefMeta.description}
        publisher={demandIntelligenceBriefMeta.publisher}
        cadence={demandIntelligenceBriefMeta.cadence}
        chips={demandIntelligenceBriefMeta.chips}
        viewAllLabel="View All Demand Intelligence Briefs"
        viewAllHref="/insights/demand-intelligence-brief"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dibSorted.map((edition) => (
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
        <div className="mt-8">
          <NewsletterCTA
            {...newsletterCopy.demandBrief}
            sourcePage="/insights#demand-intelligence-brief"
          />
        </div>
      </EditorialSection>

      <EditorialSection
        id="engineering-stack"
        title={engineeringStackMeta.title}
        subtitle={engineeringStackMeta.subtitle}
        description={engineeringStackMeta.description}
        publisher={engineeringStackMeta.publisher}
        cadence={engineeringStackMeta.cadence}
        chips={engineeringStackMeta.chips}
        viewAllLabel="View Engineering Stack"
        viewAllHref="/insights/engineering-stack"
        className="bg-ivory-muted/30"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {engSorted.map((edition) => (
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
        <div className="mt-8">
          <NewsletterCTA
            {...newsletterCopy.engineeringStack}
            sourcePage="/insights#engineering-stack"
          />
        </div>
      </EditorialSection>

      <EditorialSection
        id="applied-intelligence"
        title={appliedIntelligenceMeta.title}
        subtitle={appliedIntelligenceMeta.subtitle}
        description={appliedIntelligenceMeta.description}
        publisher={appliedIntelligenceMeta.publisher}
        cadence={appliedIntelligenceMeta.cadence}
        positioning="Not product brochures. Not feature catalogs. Applied Intelligence explores the business problem, structural constraints, AI approach, architecture, implementation realities, and expected outcomes."
        viewAllLabel="Explore Applied Intelligence"
        viewAllHref="/insights/applied-intelligence"
      >
        <div className="mb-8">
          <FrameworkCard />
        </div>

        <div className="space-y-10">
          {appliedIntelligenceDomains.map((domain) => (
            <div key={domain.id}>
              <h3 className="mb-4 font-display text-lg font-semibold text-navy">
                {domain.title}
              </h3>
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
      </EditorialSection>

      <section className="border-t border-border-subtle bg-navy py-10">
        <Container className="text-center">
          <p className="text-sm text-white/70">
            Research, frameworks, and executive perspectives from SYDIAI Insights.
          </p>
          <Link
            href="/insights/applied-intelligence"
            className="mt-4 inline-flex rounded-sm bg-electric px-5 py-2.5 text-xs font-semibold text-white hover:bg-electric-hover"
          >
            Explore the Full Library
          </Link>
        </Container>
      </section>

      <ResearchCircleSection sourcePage="/insights" />
    </>
  );
}
