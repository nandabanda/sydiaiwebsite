"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function ContactCTA() {
  return (
    <section className="py-20 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-sm border border-border-subtle bg-white px-8 py-14 text-center lg:px-16 lg:py-20"
        >
          <div className="bg-grid absolute inset-0 opacity-40" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">
              Enterprise Briefings
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-navy lg:text-4xl">
              Ready to orchestrate enterprise decisions?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-navy-subtle">
              Connect with our team to explore how SYDIAI platforms can transform
              your demand-to-fulfillment operating model.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="mailto:enterprise@sydiai.com" variant="primary">
                enterprise@sydiai.com
              </Button>
              <Button href="/#platforms" variant="secondary">
                Explore Platforms
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
