"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { demandStages } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function OrchestrationLoop() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = demandStages[activeIndex];

  return (
    <section
      id="orchestration"
      className="border-y border-border-subtle bg-white py-24 lg:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Demand-to-Fulfillment Loop"
          title="Orchestrated decision flow across the enterprise"
          description="A continuous intelligence loop where every stage informs the next—from market signals through fulfillment execution."
        />

        <div className="mt-16">
          {/* Desktop horizontal flow */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-border" />
              <div className="relative flex justify-between">
                {demandStages.map((stage, i) => (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className="group relative z-10 flex flex-col items-center"
                  >
                    <span
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white text-sm font-bold transition-all duration-300",
                        activeIndex === i
                          ? "border-electric bg-electric text-white shadow-lg shadow-electric/25"
                          : "border-border text-navy-subtle group-hover:border-electric/50"
                      )}
                    >
                      {i + 1}
                    </span>
                    <span
                      className={cn(
                        "mt-3 max-w-[7rem] text-center text-xs font-semibold leading-tight transition-colors",
                        activeIndex === i
                          ? "text-electric"
                          : "text-navy-subtle group-hover:text-navy"
                      )}
                    >
                      {stage.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="mt-12 rounded-sm border border-border-subtle bg-ivory p-10"
              >
                <div className="flex items-start justify-between gap-8">
                  <div className="max-w-2xl">
                    <h3 className="font-display text-2xl font-semibold text-navy">
                      {active.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-navy-subtle">
                      {active.description}
                    </p>
                  </div>
                  <div className="hidden shrink-0 items-center gap-2 text-sm font-medium text-electric xl:flex">
                    <span>Next stage</span>
                    <ChevronRight className="h-4 w-4" />
                    <span>
                      {demandStages[(activeIndex + 1) % demandStages.length].title}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile horizontal scroll */}
          <div className="lg:hidden">
            <div className="scrollbar-hide -mx-6 flex gap-3 overflow-x-auto px-6 pb-4">
              {demandStages.map((stage, i) => (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "shrink-0 rounded-sm border px-5 py-4 text-left transition-all",
                    activeIndex === i
                      ? "border-electric bg-electric-muted/50"
                      : "border-border-subtle bg-ivory"
                  )}
                >
                  <span className="text-xs font-bold text-electric">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-1 whitespace-nowrap font-display text-sm font-semibold text-navy">
                    {stage.title}
                  </p>
                </button>
              ))}
            </div>
            <motion.div
              key={active.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-sm border border-border-subtle bg-ivory p-6"
            >
              <h3 className="font-display text-xl font-semibold text-navy">
                {active.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-subtle">
                {active.description}
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
