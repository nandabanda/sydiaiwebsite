import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { INSIGHTS_PUBLISHER } from "@/data/insights/hub";
import { cn } from "@/lib/utils";

type ArticleCardProps = {
  category: string;
  title: string;
  abstract: string;
  href: string;
  readTime: string;
  className?: string;
};

export function ArticleCard({
  category,
  title,
  abstract,
  href,
  readTime,
  className,
}: ArticleCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col rounded-sm border border-border-subtle bg-white p-5 transition-all hover:border-electric/25 hover:shadow-md",
        className
      )}
    >
      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-electric">
        {category}
      </span>
      <h3 className="mt-2 font-display text-base font-semibold leading-snug text-navy group-hover:text-electric transition-colors">
        <Link href={href}>{title}</Link>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-subtle">
        {abstract}
      </p>
      <div className="mt-4 space-y-1 border-t border-border-subtle pt-3 text-[10px] text-navy-subtle">
        <p>{INSIGHTS_PUBLISHER}</p>
        <p>{readTime}</p>
      </div>
      <Link
        href={href}
        className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-electric"
      >
        Read Article
        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </article>
  );
}
