import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CategoryChips } from "@/components/insights/CategoryChips";
import { cn } from "@/lib/utils";

type EditorialSectionProps = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  publisher: string;
  cadence: string;
  chips?: readonly string[];
  viewAllLabel?: string;
  viewAllHref?: string;
  positioning?: string;
  children: React.ReactNode;
  className?: string;
};

export function EditorialSection({
  id,
  title,
  subtitle,
  description,
  publisher,
  cadence,
  chips,
  viewAllLabel,
  viewAllHref,
  positioning,
  children,
  className,
}: EditorialSectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 border-b border-border-subtle py-12 lg:py-14", className)}
    >
      <Container>
        <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              {title}
            </h2>
            <p className="mt-1 text-sm font-semibold text-navy-muted">{subtitle}</p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-navy-subtle">
              {description}
            </p>
            {positioning && (
              <p className="mt-3 max-w-3xl border-l-2 border-gold/40 pl-3 text-xs italic leading-relaxed text-navy-subtle">
                {positioning}
              </p>
            )}
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-navy-subtle">
              <span>{publisher}</span>
              <span className="hidden sm:inline">·</span>
              <span>{cadence}</span>
            </div>
          </div>
          {viewAllHref && viewAllLabel && (
            <Link
              href={viewAllHref}
              className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-electric hover:underline"
            >
              {viewAllLabel}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>

        {chips && chips.length > 0 && (
          <CategoryChips chips={chips} className="mb-6" />
        )}

        {children}
      </Container>
    </section>
  );
}
