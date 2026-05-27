"use client";

import { motion } from "framer-motion";
import { technologyPillars } from "@/data/technology";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Technology() {
  return (
    <section id="technology" className="py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Technology"
          title="Engineering rigor behind enterprise intelligence"
          description="A full-stack engineering discipline—AI, data, software, MLOps, and cloud-native infrastructure—purpose-built for mission-critical decision systems."
        />

        <div className="mt-16 space-y-6">
          {technologyPillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55 }}
              className="grid gap-8 rounded-sm border border-border-subtle bg-white p-8 lg:grid-cols-12 lg:p-10"
            >
              <div className="lg:col-span-4">
                <span className="text-xs font-bold text-electric">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold text-navy">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-subtle">
                  {pillar.description}
                </p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-2">
                {pillar.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex gap-3 rounded-sm bg-ivory p-4 text-sm text-navy-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-electric" />
                    {cap}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
