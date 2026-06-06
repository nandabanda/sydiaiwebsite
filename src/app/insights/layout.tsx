import { NewsletterSignupProvider } from "@/components/newsletter/NewsletterSignupProvider";

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NewsletterSignupProvider>{children}</NewsletterSignupProvider>;
}
