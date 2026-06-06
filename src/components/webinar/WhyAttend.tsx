"use client";

import { motion } from "framer-motion";
import { whyAttendCards } from "@/data/webinar";
import { Container } from "@/components/ui/Container";

export function WhyAttend() {
  return (
    <section className="border-t border-border-subtle bg-ivory-muted/30 py-12 lg:py-14">
      <Container>
        <div className="mb-8 grid gap-4 lg:grid-cols-2 lg:items-end">
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            The Cycle Is Changing — Faster Than Ever
          </h2>
          <p className="text-sm leading-relaxed text-navy-subtle">
            Annual plans expire on approval. Leaders need AI-orchestrated cycles
            that fuse strategy, finance, commercial, supply and operations.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {whyAttendCards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-sm border border-border-subtle bg-white p-4"
            >
              <h3 className="font-display text-sm font-semibold text-navy">
                {card.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-navy-subtle">
                {card.description}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
