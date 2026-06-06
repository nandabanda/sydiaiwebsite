import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleTemplate } from "@/components/insights/ArticleTemplate";
import {
  appliedIntelligenceArticles,
  getAppliedArticle,
} from "@/data/insights/applied-intelligence";
import { ArrowLeft } from "lucide-react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return appliedIntelligenceArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getAppliedArticle(slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | Applied Intelligence`,
    description: article.abstract,
  };
}

export default async function AppliedArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getAppliedArticle(slug);
  if (!article) notFound();

  const related = appliedIntelligenceArticles
    .filter((a) => a.domain === article.domain && a.slug !== article.slug)
    .slice(0, 3);

  return (
    <ArticleTemplate
      breadcrumbs={[
        { label: "Insights", href: "/insights" },
        {
          label: "Applied Intelligence",
          href: "/insights/applied-intelligence",
        },
        { label: article.domain },
      ]}
      eyebrow="Applied Intelligence™"
      title={article.title}
      publicationType="Research Framework"
      readTime={article.readTime}
      sections={article.sections}
      footer={
        <div className="space-y-6">
          {related.length > 0 && (
            <div>
              <h3 className="mb-3 text-sm font-semibold text-navy">
                Related in {article.domain}
              </h3>
              <ul className="space-y-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/insights/applied-intelligence/${r.slug}`}
                      className="text-sm text-electric hover:underline"
                    >
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <Link
            href="/insights/applied-intelligence"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-electric hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Applied Intelligence
          </Link>
        </div>
      }
    />
  );
}
