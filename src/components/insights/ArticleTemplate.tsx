import type { InsightSection } from "@/data/insights/types";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/insights/Breadcrumbs";
import { INSIGHTS_PUBLISHER } from "@/data/insights/hub";

type ArticleTemplateProps = {
  breadcrumbs: { label: string; href?: string }[];
  eyebrow: string;
  title: string;
  publicationType: string;
  readTime: string;
  sections: InsightSection[];
  footer: React.ReactNode;
  signupBlock?: React.ReactNode;
};

export function ArticleTemplate({
  breadcrumbs,
  eyebrow,
  title,
  publicationType,
  readTime,
  sections,
  footer,
  signupBlock,
}: ArticleTemplateProps) {
  return (
    <article className="pb-12 lg:pb-16">
      <div className="border-b border-border-subtle bg-ivory pt-24 pb-8 lg:pt-28 lg:pb-10">
        <Container>
          <Breadcrumbs items={breadcrumbs} className="mb-6" />
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-electric">
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl">
            {title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-navy-subtle">
            <span>{INSIGHTS_PUBLISHER}</span>
            <span>·</span>
            <span>{publicationType}</span>
            <span>·</span>
            <span>{readTime}</span>
          </div>
        </Container>
      </div>

      <Container className="mt-10 max-w-3xl">
        <div className="prose-insights space-y-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-xl font-semibold text-navy">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-sm leading-relaxed text-navy-subtle sm:text-[15px]"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {signupBlock && (
          <div className="mt-10 border-t border-border-subtle pt-8">
            {signupBlock}
          </div>
        )}

        <div className="mt-12 border-t border-border-subtle pt-8">{footer}</div>
      </Container>
    </article>
  );
}
