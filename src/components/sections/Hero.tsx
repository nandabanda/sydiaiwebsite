"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { demandStages } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -right-32 top-0 h-[600px] w-[600px] rounded-full bg-electric/5 blur-3xl" />

      <Container className="relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.p
            variants={item}
            className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-electric"
          >
            SYDIAI · Decision Operating Systems
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
          >
            Enterprise Decision Intelligence
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 font-display text-xl font-medium tracking-tight text-navy-muted sm:text-2xl lg:text-3xl"
          >
            From Demand Signals to Enterprise Execution
          </motion.p>

          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-navy-subtle"
          >
            SYDIAI orchestrates decisions across the demand-to-fulfillment
            loop—unifying sensing, shaping, capturing, execution, forecasting,
            and fulfillment into a coherent enterprise operating system.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Button href="/#platforms" variant="primary">
              Explore Platforms
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/#orchestration" variant="secondary">
              View the Loop
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 lg:mt-24"
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-navy-subtle">
            Orchestrated Capabilities
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {demandStages.map((stage, i) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.08 }}
                className="group rounded-sm border border-border-subtle bg-white/80 p-5 backdrop-blur-sm transition-all hover:border-electric/25 hover:shadow-md"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-electric-muted text-[11px] font-bold text-electric">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-sm font-semibold text-navy">
                    {stage.title}
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-navy-subtle">
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
