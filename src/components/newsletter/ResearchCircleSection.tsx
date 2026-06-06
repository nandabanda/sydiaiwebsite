import { Container } from "@/components/ui/Container";
import { NewsletterSignupForm } from "@/components/NewsletterSignupForm";
import {
  newsletterCopy,
  researchCircleTiles,
  type NewsletterPreferenceId,
} from "@/data/newsletter";
import { cn } from "@/lib/utils";

type ResearchCircleSectionProps = {
  sourcePage?: string;
  showTiles?: boolean;
  className?: string;
};

export function ResearchCircleSection({
  sourcePage = "/insights",
  showTiles = true,
  className,
}: ResearchCircleSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-t border-border-subtle bg-ivory py-14 lg:py-16",
        className
      )}
    >
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-electric/5 blur-3xl" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
            SYDIAI Insights
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            {newsletterCopy.researchCircle.title}
          </h2>
          <p className="mt-2 text-sm font-medium text-navy-muted">
            {newsletterCopy.researchCircle.subtitle}
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-navy-subtle">
            {newsletterCopy.researchCircle.description}
          </p>
        </div>

        {showTiles && (
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
            {researchCircleTiles.map((tile) => (
              <div
                key={tile.title}
                className="rounded-md border border-border-subtle bg-white/80 p-5 text-left shadow-sm backdrop-blur-sm"
              >
                <div className="mb-3 h-1 w-8 rounded-full bg-gradient-to-r from-electric to-gold" />
                <h3 className="font-display text-sm font-semibold text-navy">
                  {tile.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-navy-subtle">
                  {tile.description}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mx-auto mt-10 max-w-2xl">
          <NewsletterSignupForm
            defaultPreferences={
              newsletterCopy.researchCircle
                .defaultPreferences as NewsletterPreferenceId[]
            }
            sourcePage={sourcePage}
            buttonLabel={newsletterCopy.researchCircle.buttonLabel}
            showHeader={false}
          />
        </div>
      </Container>
    </section>
  );
}
