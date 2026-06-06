import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

type EditionNavProps = {
  prev?: { label: string; href: string };
  next?: { label: string; href: string };
  backLabel: string;
  backHref: string;
};

export function EditionNavigation({
  prev,
  next,
  backLabel,
  backHref,
}: EditionNavProps) {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        {prev ? (
          <Link
            href={prev.href}
            className="group flex flex-col rounded-sm border border-border-subtle bg-white p-4 transition-colors hover:border-electric/25"
          >
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-navy-subtle">
              <ArrowLeft className="h-3 w-3" />
              Previous Edition
            </span>
            <span className="mt-1 text-sm font-semibold text-navy group-hover:text-electric">
              {prev.label}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={next.href}
            className="group flex flex-col rounded-sm border border-border-subtle bg-white p-4 text-right transition-colors hover:border-electric/25 sm:items-end"
          >
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-navy-subtle">
              Next Edition
              <ArrowRight className="h-3 w-3" />
            </span>
            <span className="mt-1 text-sm font-semibold text-navy group-hover:text-electric">
              {next.label}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
      <Link
        href={backHref}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-electric hover:underline"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        {backLabel}
      </Link>
    </div>
  );
}
