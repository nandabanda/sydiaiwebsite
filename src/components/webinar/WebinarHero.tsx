"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, ShieldCheck } from "lucide-react";
import { webinarEvent, trustStrip } from "@/data/webinar";
import { Container } from "@/components/ui/Container";
import { Countdown } from "@/components/webinar/Countdown";

export function WebinarHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-24">
      <div className="bg-grid absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute -right-24 top-0 h-[500px] w-[500px] rounded-full bg-electric/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-[400px] w-[400px] rounded-full bg-gold/5 blur-3xl" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 rounded-sm border border-gold/30 bg-gold-muted/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {webinarEvent.series}
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.5rem]">
              {webinarEvent.title}
            </h1>

            <p className="mt-4 font-display text-xl font-semibold tracking-tight text-navy-muted sm:text-2xl">
              {webinarEvent.subtitle}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-subtle lg:text-lg">
              {webinarEvent.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-navy-muted">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-electric" />
                {webinarEvent.date}
              </span>
              <span className="hidden h-4 w-px bg-border sm:block" />
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-electric" />
                {webinarEvent.time}
              </span>
              <span className="hidden h-4 w-px bg-border sm:block" />
              <span>{webinarEvent.duration}</span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#register"
                className="inline-flex items-center gap-2 rounded-sm bg-electric px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-electric/20 transition-all hover:bg-electric-hover"
              >
                Reserve My Seat
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#agenda"
                className="inline-flex items-center gap-2 rounded-sm border border-navy/15 bg-white px-7 py-3.5 text-sm font-semibold text-navy transition-all hover:border-electric/40 hover:bg-electric-muted/30"
              >
                View Agenda
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-border-subtle pt-8">
              {trustStrip.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 text-xs font-medium text-navy-subtle"
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <Countdown />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
