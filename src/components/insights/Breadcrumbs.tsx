import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Crumb = { label: string; href?: string };

type BreadcrumbsProps = {
  items: Crumb[];
  className?: string;
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex flex-wrap items-center gap-1.5 text-xs text-navy-subtle", className)}
    >
      {items.map((item, i) => (
        <span key={item.label} className="inline-flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="h-3 w-3 shrink-0 opacity-50" />}
          {item.href ? (
            <Link
              href={item.href}
              className="transition-colors hover:text-electric"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-navy">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
