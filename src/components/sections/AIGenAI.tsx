"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Sparkles,
  LineChart,
  FlaskConical,
  Gauge,
  ShieldCheck,
} from "lucide-react";
import { aiCapabilities } from "@/data/ai-capabilities";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons: Record<string, React.ElementType> = {
  agents: Bot,
  copilots: Sparkles,
  forecasting: LineChart,
  simulation: FlaskConical,
  optimization: Gauge,
  explainable: ShieldCheck,
};

export function AIGenAI() {
  return (
    <section
      id="ai-intelligence"
      className="relative overflow-hidden bg-navy py-24 text-white lg:py-32"
    >
      <div className="bg-grid absolute inset-0 opacity-[0.04]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-electric/10 blur-3xl" />

      <Container className="relative">
        <SectionHeading
          eyebrow="AI & Decision Intelligence"
          title="Intelligence embedded in every decision"
          description="From autonomous agents to explainable models—SYDIAI delivers production AI engineered for enterprise accountability, not experimentation."
          dark
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {aiCapabilities.map((cap, i) => {
            const Icon = icons[cap.id] ?? Bot;
            return (
              <motion.article
                key={cap.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group rounded-sm border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:border-electric/30 hover:bg-white/[0.08]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-sm bg-electric/20 text-electric">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{cap.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {cap.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
                  {cap.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-2 text-xs text-white/50"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-electric" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
