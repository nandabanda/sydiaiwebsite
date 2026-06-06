"use client";

import { motion } from "framer-motion";
import { whyAttendCards } from "@/data/webinar";
import { Container } from "@/components/ui/Container";

export function WhyAttend() {
  return (
    <section className="border-y border-border-subtle bg-white py-20 lg:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Planning Is Changing — Faster Than Ever
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy-subtle lg:text-lg">
            Annual plans are becoming obsolete the moment they&apos;re approved.
            Organizations are struggling to align strategy, finance, commercial,
            supply chain, and operations in an increasingly uncertain world.
            Discover how AI is transforming the planning playbook.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyAttendCards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group rounded-sm border border-border-subtle bg-ivory p-7 transition-all hover:border-electric/25 hover:shadow-lg hover:shadow-navy/5"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-navy group-hover:text-electric transition-colors">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-subtle">
                {card.description}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
