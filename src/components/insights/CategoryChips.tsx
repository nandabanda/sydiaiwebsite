import { cn } from "@/lib/utils";

type CategoryChipsProps = {
  chips: readonly string[];
  className?: string;
};

export function CategoryChips({ chips, className }: CategoryChipsProps) {
  if (!chips.length) return null;

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {chips.map((chip) => (
        <span
          key={chip}
          className="rounded-sm border border-border-subtle bg-ivory px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-navy-muted"
        >
          {chip}
        </span>
      ))}
    </div>
  );
}
