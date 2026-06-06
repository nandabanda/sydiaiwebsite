"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Timer,
  User,
  Video,
} from "lucide-react";
import { webinarEvent, trustStrip } from "@/data/webinar";
import { Container } from "@/components/ui/Container";
import { Countdown } from "@/components/webinar/Countdown";

const seatPercent =
  (webinarEvent.seatsReserved / webinarEvent.seatsTotal) * 100;

export function WebinarHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-12">
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-electric/5 blur-3xl" />

      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-1.5 rounded-sm border border-gold/30 bg-gold-muted/50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-gold">
              <span className="h-1 w-1 rounded-full bg-gold" />
              {webinarEvent.series}
            </span>

            <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
              {webinarEvent.title}
            </h1>

            <p className="mt-2 font-display text-lg font-semibold tracking-tight text-navy-muted sm:text-xl">
              {webinarEvent.subtitle}
            </p>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-navy-subtle">
              {webinarEvent.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <EventPill icon={Calendar} text={webinarEvent.dateShort} />
              <EventPill icon={Clock} text={webinarEvent.time} />
              <EventPill icon={Timer} text={webinarEvent.duration} />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="#register"
                className="inline-flex items-center gap-1.5 rounded-sm bg-electric px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-electric/20 transition-colors hover:bg-electric-hover"
              >
                Reserve My Seat
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="#agenda"
                className="inline-flex items-center rounded-sm border border-navy/12 bg-white px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-electric/30 hover:bg-electric-muted/20"
              >
                View Agenda
              </Link>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
              {trustStrip.map((item) => (
                <span
                  key={item}
                  className="text-[11px] font-medium text-navy-subtle before:mr-1.5 before:text-gold before:content-['✓']"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-3 lg:col-span-5"
          >
            <Countdown />

            <div className="rounded-sm border border-border-subtle bg-white p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-electric">
                  <Video className="h-3 w-3" />
                  Live Webinar
                </span>
                <span className="text-[10px] font-semibold text-gold">
                  {webinarEvent.seatsReserved}/{webinarEvent.seatsTotal} seats
                </span>
              </div>

              <div className="space-y-2.5 text-sm">
                <div className="flex items-start gap-2">
                  <User className="mt-0.5 h-3.5 w-3.5 shrink-0 text-navy-subtle" />
                  <div>
                    <p className="font-semibold text-navy">
                      {webinarEvent.speaker.name}
                    </p>
                    <p className="text-xs text-navy-subtle">
                      {webinarEvent.speaker.title}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-navy-muted">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-navy-subtle" />
                  {webinarEvent.location}
                </div>
              </div>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-border-subtle">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${seatPercent}%` }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full bg-electric"
                />
              </div>
              <p className="mt-2 text-[10px] font-medium text-navy-subtle">
                Filling fast — reserve today.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function EventPill({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-sm border border-border-subtle bg-white px-2.5 py-1.5 text-xs font-medium text-navy-muted">
      <Icon className="h-3 w-3 text-electric" />
      {text}
    </span>
  );
}
