import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200";

  const variants = {
    primary:
      "bg-electric text-white hover:bg-electric-hover shadow-sm shadow-electric/20",
    secondary:
      "border border-navy/15 bg-white text-navy hover:border-electric/40 hover:bg-electric-muted/30",
    ghost: "text-navy hover:text-electric px-4",
  };

  const classes = cn(base, variants[variant], className);

  const isExternal =
    external || href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
