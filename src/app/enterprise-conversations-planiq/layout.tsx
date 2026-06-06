import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Planning in the Age of AI | SYDIAI Enterprise Conversations",
  description:
    "Join SYDIAI Enterprise Conversations — The New Playbook for LRP, ABP, AOP & Rolling Forecasts. Live webinar with Nanda Kishore Banda, CEO — Business Unit, SYDIAI.",
  openGraph: {
    title: "Planning in the Age of AI | SYDIAI Enterprise Conversations",
    description:
      "The New Playbook for LRP, ABP, AOP & Rolling Forecasts. July 15, 2026 · 4:00 PM IST.",
    type: "website",
  },
};

export default function WebinarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${montserrat.variable} bg-ivory font-[family-name:var(--font-montserrat)] [&_.font-display]:font-[family-name:var(--font-montserrat)]`}
    >
      {children}
    </div>
  );
}
