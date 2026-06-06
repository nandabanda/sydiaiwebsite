"use client";

import { motion } from "framer-motion";
import { webinarEvent } from "@/data/webinar";
import { Container } from "@/components/ui/Container";

export function SpeakerSection() {
  return (
    <section className="border-t border-border-subtle bg-ivory-muted/40 py-20 lg:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-electric">
            Speaker
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Meet Your Speaker
          </h2>

          <div className="mt-12 grid gap-10 rounded-sm border border-border-subtle bg-white p-8 sm:grid-cols-[auto_1fr] sm:p-10 lg:gap-12">
            <div className="mx-auto flex h-32 w-32 shrink-0 items-center justify-center rounded-sm bg-gradient-to-br from-navy to-navy-muted sm:mx-0">
              <span className="font-display text-4xl font-bold text-gold-light">
                NK
              </span>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-navy">
                {webinarEvent.speaker.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-electric">
                {webinarEvent.speaker.title}
              </p>
              <p className="mt-5 text-base leading-relaxed text-navy-subtle">
                {webinarEvent.speaker.bio}
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
