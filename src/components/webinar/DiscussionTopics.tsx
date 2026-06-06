"use client";

import { motion } from "framer-motion";
import { discussionTopics } from "@/data/webinar";
import { Container } from "@/components/ui/Container";

export function DiscussionTopics() {
  return (
    <section id="agenda" className="border-t border-border-subtle py-12 lg:py-14">
      <Container>
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-electric">
              Agenda
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              What We&apos;ll Explore
            </h2>
          </div>
          <p className="max-w-xs text-sm text-navy-subtle sm:text-right">
            Six executive conversations for finance, commercial and supply chain
            leaders.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {discussionTopics.map((topic, i) => (
            <motion.article
              key={topic.number}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group rounded-sm border border-border-subtle bg-white p-4 transition-colors hover:border-electric/25"
            >
              <span className="text-[10px] font-bold text-gold">
                {topic.number}
              </span>
              <h3 className="mt-1.5 font-display text-sm font-semibold leading-snug text-navy group-hover:text-electric transition-colors">
                {topic.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-navy-subtle">
                {topic.description}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
