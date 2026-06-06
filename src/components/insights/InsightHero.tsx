import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { INSIGHTS_PUBLISHER } from "@/data/insights/hub";
import { cn } from "@/lib/utils";

type InsightHeroProps = {
  eyebrow: string;
  headline: string;
  body: string;
  meta?: string;
  ctas?: { label: string; href: string }[];
  compact?: boolean;
  className?: string;
};

export function InsightHero({
  eyebrow,
  headline,
  body,
  meta = INSIGHTS_PUBLISHER,
  ctas,
  compact = false,
  className,
}: InsightHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border-subtle bg-ivory",
        compact ? "pt-24 pb-10 lg:pt-28 lg:pb-12" : "pt-24 pb-12 lg:pt-28 lg:pb-14",
        className
      )}
    >
      <div className="bg-grid absolute inset-0 opacity-40" />
      <Container className="relative">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-electric">
          {eyebrow}
        </p>
        <h1
          className={cn(
            "mt-3 max-w-4xl font-display font-bold tracking-tight text-navy",
            compact ? "text-3xl sm:text-4xl" : "text-3xl sm:text-4xl lg:text-5xl"
          )}
        >
          {headline}
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-navy-subtle sm:text-base">
          {body}
        </p>
        <p className="mt-4 text-xs font-medium text-navy-muted">{meta}</p>
        {ctas && ctas.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {ctas.map((cta) => (
              <Link
                key={cta.href}
                href={cta.href}
                className="inline-flex items-center rounded-sm border border-navy/12 bg-white px-4 py-2.5 text-xs font-semibold text-navy transition-colors hover:border-electric/30 hover:text-electric"
              >
                {cta.label}
              </Link>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
