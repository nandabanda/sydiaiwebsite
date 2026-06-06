"use client";

import { motion } from "framer-motion";
import { discussionTopics } from "@/data/webinar";
import { Container } from "@/components/ui/Container";

export function DiscussionTopics() {
  return (
    <section id="agenda" className="py-20 lg:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-electric">
            Agenda
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            What We&apos;ll Explore
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-subtle">
            Six focused conversations — designed for planning, finance,
            commercial and supply chain leaders.
          </p>
        </motion.div>

        <div className="mt-14 space-y-4">
          {discussionTopics.map((topic, i) => (
            <motion.article
              key={topic.number}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group grid gap-4 rounded-sm border border-border-subtle bg-white p-6 transition-all hover:border-electric/20 hover:shadow-md sm:grid-cols-12 sm:items-center sm:p-8"
            >
              <span className="font-display text-2xl font-bold text-gold/80 sm:col-span-1">
                {topic.number}
              </span>
              <div className="sm:col-span-11">
                <h3 className="font-display text-lg font-semibold text-navy group-hover:text-electric transition-colors">
                  {topic.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-subtle">
                  {topic.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
