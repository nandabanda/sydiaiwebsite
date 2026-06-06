"use client";

import { motion } from "framer-motion";
import { planIQFeatures } from "@/data/webinar";
import { Container } from "@/components/ui/Container";

export function FeaturedPlatform() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white lg:py-28">
      <div className="bg-grid absolute inset-0 opacity-[0.04]" />
      <div className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-electric/10 blur-3xl" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block rounded-sm border border-gold/40 bg-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gold-light">
              Featured Platform
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              PlanIQ<span className="text-electric">™</span>
            </h2>
            <p className="mt-2 text-lg font-semibold text-gold-light">
              Strategic Planning OS
            </p>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              PlanIQ helps organizations connect strategy, finance, commercial,
              supply chain and operations into one intelligent planning
              environment — powered by AI agents, scenario engines, and a
              unified decision fabric.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap content-start gap-3"
          >
            {planIQFeatures.map((feature, i) => (
              <span
                key={feature}
                className="rounded-sm border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 transition-colors hover:border-electric/40 hover:bg-electric/10"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {feature}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-4"
        >
          {["LRP", "ABP", "AOP", "Rolling Forecast"].map((label) => (
            <div
              key={label}
              className="bg-navy-muted/50 px-6 py-5 text-center"
            >
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">
                Module
              </p>
              <p className="mt-1 font-display text-sm font-semibold text-white">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
