"use client";

import { motion } from "framer-motion";
import { industries } from "@/data/industries";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Industries() {
  return (
    <section id="industries" className="border-t border-border-subtle bg-white py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="Domain expertise at enterprise depth"
          description="SYDIAI platforms are engineered by practitioners who understand the operational realities of complex, asset-intensive industries."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry, i) => (
            <motion.article
              key={industry.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              className="group flex flex-col rounded-sm border border-border-subtle p-6 transition-all hover:border-electric/25 hover:shadow-lg hover:shadow-navy/5 lg:p-7"
            >
              <h3 className="font-display text-lg font-semibold text-navy group-hover:text-electric transition-colors">
                {industry.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-subtle">
                {industry.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {industry.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-sm bg-ivory-muted px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-navy-muted"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
