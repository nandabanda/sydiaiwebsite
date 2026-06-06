import { Container } from "@/components/ui/Container";
import { NewsletterSignupForm } from "@/components/NewsletterSignupForm";
import type { NewsletterPreferenceId } from "@/data/newsletter";
import { cn } from "@/lib/utils";

type NewsletterSignupSectionProps = {
  title: string;
  description: string;
  buttonLabel: string;
  defaultPreferences?: NewsletterPreferenceId[];
  sourcePage: string;
  compact?: boolean;
  className?: string;
};

export function NewsletterSignupSection({
  className,
  ...formProps
}: NewsletterSignupSectionProps) {
  return (
    <section className={cn("py-8 lg:py-10", className)}>
      <Container>
        <div className="mx-auto max-w-3xl">
          <NewsletterSignupForm {...formProps} />
        </div>
      </Container>
    </section>
  );
}
