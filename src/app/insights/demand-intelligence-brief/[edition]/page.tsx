import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleTemplate } from "@/components/insights/ArticleTemplate";
import { EditionNavigation } from "@/components/insights/EditionNavigation";
import { EditionNewsletterCTA } from "@/components/newsletter/EditionNewsletterCTA";
import { newsletterCopy } from "@/data/newsletter";
import {
  demandIntelligenceEditions,
  getDemandEdition,
} from "@/data/insights/publications";

type PageProps = {
  params: Promise<{ edition: string }>;
};

export async function generateStaticParams() {
  return demandIntelligenceEditions.map((e) => ({ edition: e.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { edition: slug } = await params;
  const edition = getDemandEdition(slug);
  if (!edition) return { title: "Edition Not Found" };

  return {
    title: `${edition.title} | Demand Intelligence Brief`,
    description: edition.description,
  };
}

export default async function DemandEditionPage({ params }: PageProps) {
  const { edition: slug } = await params;
  const edition = getDemandEdition(slug);
  if (!edition) notFound();

  const index = demandIntelligenceEditions.findIndex(
    (e) => e.slug === slug
  );
  const prev = index > 0 ? demandIntelligenceEditions[index - 1] : undefined;
  const next =
    index < demandIntelligenceEditions.length - 1
      ? demandIntelligenceEditions[index + 1]
      : undefined;

  return (
    <ArticleTemplate
      breadcrumbs={[
        { label: "Insights", href: "/insights" },
        {
          label: "Demand Intelligence Brief",
          href: "/insights/demand-intelligence-brief",
        },
        { label: `Edition ${edition.edition}` },
      ]}
      eyebrow="Demand Intelligence Brief™"
      title={edition.title}
      publicationType="Research Publication"
      readTime={edition.readTime}
      sections={edition.sections}
      signupBlock={
        <EditionNewsletterCTA
          defaultPreferences={newsletterCopy.demandBrief.defaultPreferences}
          sourcePage={`/insights/demand-intelligence-brief/${edition.slug}`}
        />
      }
      footer={
        <EditionNavigation
          prev={
            prev
              ? {
                  label: `Edition ${prev.edition}: ${prev.title}`,
                  href: `/insights/demand-intelligence-brief/${prev.slug}`,
                }
              : undefined
          }
          next={
            next
              ? {
                  label: `Edition ${next.edition}: ${next.title}`,
                  href: `/insights/demand-intelligence-brief/${next.slug}`,
                }
              : undefined
          }
          backLabel="Back to Demand Intelligence Brief"
          backHref="/insights/demand-intelligence-brief"
        />
      }
    />
  );
}
