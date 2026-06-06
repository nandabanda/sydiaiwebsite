import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleTemplate } from "@/components/insights/ArticleTemplate";
import { EditionNavigation } from "@/components/insights/EditionNavigation";
import { EditionNewsletterCTA } from "@/components/newsletter/EditionNewsletterCTA";
import { newsletterCopy } from "@/data/newsletter";
import {
  engineeringStackEditions,
  getEngineeringEdition,
} from "@/data/insights/publications";

type PageProps = {
  params: Promise<{ edition: string }>;
};

export async function generateStaticParams() {
  return engineeringStackEditions.map((e) => ({ edition: e.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { edition: slug } = await params;
  const edition = getEngineeringEdition(slug);
  if (!edition) return { title: "Edition Not Found" };

  return {
    title: `${edition.title} | SYDIAI Engineering Stack`,
    description: edition.description,
  };
}

export default async function EngineeringEditionPage({ params }: PageProps) {
  const { edition: slug } = await params;
  const edition = getEngineeringEdition(slug);
  if (!edition) notFound();

  const index = engineeringStackEditions.findIndex((e) => e.slug === slug);
  const prev = index > 0 ? engineeringStackEditions[index - 1] : undefined;
  const next =
    index < engineeringStackEditions.length - 1
      ? engineeringStackEditions[index + 1]
      : undefined;

  return (
    <ArticleTemplate
      breadcrumbs={[
        { label: "Insights", href: "/insights" },
        {
          label: "SYDIAI Engineering Stack",
          href: "/insights/engineering-stack",
        },
        { label: `Edition ${edition.edition}` },
      ]}
      eyebrow="SYDIAI Engineering Stack™"
      title={edition.title}
      publicationType="Technical Publication"
      readTime={edition.readTime}
      sections={edition.sections}
      signupBlock={
        <EditionNewsletterCTA
          defaultPreferences={newsletterCopy.engineeringStack.defaultPreferences}
          sourcePage={`/insights/engineering-stack/${edition.slug}`}
        />
      }
      footer={
        <EditionNavigation
          prev={
            prev
              ? {
                  label: `Edition ${prev.edition}: ${prev.title}`,
                  href: `/insights/engineering-stack/${prev.slug}`,
                }
              : undefined
          }
          next={
            next
              ? {
                  label: `Edition ${next.edition}: ${next.title}`,
                  href: `/insights/engineering-stack/${next.slug}`,
                }
              : undefined
          }
          backLabel="Back to Engineering Stack"
          backHref="/insights/engineering-stack"
        />
      }
    />
  );
}
