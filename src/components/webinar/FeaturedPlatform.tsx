"use client";

import { motion } from "framer-motion";
import { planIQFeatures } from "@/data/webinar";
import { Container } from "@/components/ui/Container";

const modules = ["LRP", "ABP", "AOP", "Rolling Forecast"];

export function FeaturedPlatform() {
  return (
    <section className="relative overflow-hidden bg-navy py-12 text-white lg:py-14">
      <div className="bg-grid absolute inset-0 opacity-[0.03]" />
      <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-electric/10 blur-3xl" />

      <Container className="relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-gold-light">
              Featured Platform
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              PlanIQ<span className="text-electric">™</span>
            </h2>
            <p className="mt-0.5 text-sm font-semibold text-gold-light">
              Strategic Planning OS
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              One intelligent environment for strategy, finance, commercial,
              supply chain and operations — AI agents, scenario engines, unified
              decision fabric.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="flex flex-wrap gap-2 lg:max-w-md lg:justify-end"
          >
            {planIQFeatures.map((feature) => (
              <span
                key={feature}
                className="rounded-sm border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85"
              >
                {feature}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-white/10 sm:grid-cols-4">
          {modules.map((label) => (
            <div
              key={label}
              className="bg-navy-muted/40 px-4 py-3 text-center"
            >
              <p className="text-[9px] font-semibold uppercase tracking-wider text-white/35">
                Module
              </p>
              <p className="mt-0.5 font-display text-xs font-semibold text-white">
                {label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
