import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SYDIAI | Enterprise Decision Intelligence",
  description:
    "SYDIAI orchestrates enterprise decisions across the demand-to-fulfillment loop—from demand sensing to fulfillment execution.",
  keywords: [
    "enterprise decision intelligence",
    "demand forecasting",
    "AI-native platforms",
    "demand-to-fulfillment",
    "SYDIAI",
  ],
  openGraph: {
    title: "SYDIAI | Enterprise Decision Intelligence",
    description:
      "From Demand Signals to Enterprise Execution. AI-native operating systems for enterprise decision-making.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
