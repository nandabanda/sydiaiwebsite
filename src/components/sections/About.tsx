"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const principles = [
  {
    title: "Decision Coherence",
    text: "Unify fragmented point solutions into orchestrated decision flows that compound enterprise value.",
  },
  {
    title: "Domain Depth",
    text: "Built by practitioners who understand demand, trade, assets, and fulfillment—not generic consultants.",
  },
  {
    title: "AI-Native by Design",
    text: "Intelligence embedded in operating systems, not bolted onto dashboards as an afterthought.",
  },
  {
    title: "Enterprise Accountability",
    text: "Explainable, auditable, and governable AI engineered for boards, regulators, and operators alike.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="About SYDIAI"
              title="Bringing coherence to enterprise decision-making."
              description="SYDIAI is an Enterprise Decision Intelligence company. We orchestrate decisions across the demand-to-fulfillment loop—helping global enterprises sense, shape, capture, execute, forecast, and fulfill with unified intelligence."
            />
            <div className="mt-10">
              <Button href="/#contact" variant="primary">
                Partner with SYDIAI
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-sm border border-border-subtle bg-ivory p-6"
              >
                <h3 className="font-display text-base font-semibold text-navy">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-subtle">
                  {p.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-sm border border-navy/10 bg-navy p-10 text-center lg:p-14"
        >
          <blockquote className="font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
            &ldquo;The future of enterprise software is not dashboards—it is
            decision operating systems.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm text-white/50">— SYDIAI Enterprise Philosophy</p>
        </motion.div>
      </Container>
    </section>
  );
}
