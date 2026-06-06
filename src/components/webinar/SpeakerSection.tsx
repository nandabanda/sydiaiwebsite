"use client";

import { motion } from "framer-motion";
import { webinarEvent } from "@/data/webinar";
import { Container } from "@/components/ui/Container";

export function SpeakerSection() {
  return (
    <section className="border-t border-border-subtle py-12 lg:py-14">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 rounded-sm border border-border-subtle bg-white p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6"
        >
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-sm bg-navy">
            <span className="font-display text-xl font-bold text-gold-light">
              NK
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-electric">
              Speaker
            </p>
            <h2 className="mt-0.5 font-display text-lg font-bold text-navy">
              {webinarEvent.speaker.name}
            </h2>
            <p className="text-xs font-semibold text-navy-muted">
              {webinarEvent.speaker.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-navy-subtle">
              {webinarEvent.speaker.bio}
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
