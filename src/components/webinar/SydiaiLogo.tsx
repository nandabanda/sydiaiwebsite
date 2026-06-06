import Link from "next/link";
import { cn } from "@/lib/utils";

type SydiaiLogoProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function SydiaiLogo({ className, variant = "dark" }: SydiaiLogoProps) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2", className)}
    >
      <span
        className={cn(
          "font-display text-xl font-bold tracking-tight lg:text-[1.35rem]",
          variant === "light" ? "text-white" : "text-navy"
        )}
      >
        SYD<span className="text-electric">IAI</span>
      </span>
      <span
        className={cn(
          "hidden h-4 w-px sm:block",
          variant === "light" ? "bg-white/20" : "bg-border"
        )}
      />
      <span
        className={cn(
          "hidden text-[10px] font-semibold uppercase tracking-[0.18em] sm:block",
          variant === "light" ? "text-gold-light" : "text-gold"
        )}
      >
        Enterprise Intelligence
      </span>
    </Link>
  );
}
