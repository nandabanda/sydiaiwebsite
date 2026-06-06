"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, User, Video } from "lucide-react";
import { webinarEvent } from "@/data/webinar";
import { Container } from "@/components/ui/Container";

const seatPercent =
  (webinarEvent.seatsReserved / webinarEvent.seatsTotal) * 100;

export function EventCard() {
  return (
    <section className="pb-20 lg:pb-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl overflow-hidden rounded-sm border border-border-subtle bg-white shadow-xl shadow-navy/5"
        >
          <div className="border-b border-border-subtle bg-navy px-8 py-4">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-light">
              <Video className="h-3.5 w-3.5" />
              Live Webinar
            </span>
          </div>

          <div className="grid gap-8 p-8 sm:grid-cols-2 lg:p-10">
            <div>
              <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy-subtle">
                <User className="h-3.5 w-3.5 text-electric" />
                Speaker
              </div>
              <p className="font-display text-lg font-semibold text-navy">
                {webinarEvent.speaker.name}
              </p>
              <p className="mt-1 text-sm text-navy-subtle">
                {webinarEvent.speaker.title}
              </p>
            </div>

            <div>
              <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy-subtle">
                <Calendar className="h-3.5 w-3.5 text-electric" />
                Date
              </div>
              <p className="font-display text-lg font-semibold text-navy">
                {webinarEvent.dateShort}
              </p>
              <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-navy-subtle">
                <Clock className="h-3.5 w-3.5" />
                {webinarEvent.time}
              </p>
            </div>

            <div className="sm:col-span-2">
              <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy-subtle">
                <MapPin className="h-3.5 w-3.5 text-electric" />
                Location
              </div>
              <p className="text-sm text-navy-muted">{webinarEvent.location}</p>
            </div>
          </div>

          <div className="border-t border-border-subtle bg-ivory-muted/40 px-8 py-6 lg:px-10">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-navy">
                Seats reserved:{" "}
                <span className="font-bold text-electric">
                  {webinarEvent.seatsReserved}
                </span>{" "}
                / {webinarEvent.seatsTotal}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                {seatPercent.toFixed(0)}% full
              </span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-border-subtle">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${seatPercent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full bg-gradient-to-r from-electric to-electric-hover"
              />
            </div>
            <p className="mt-3 text-xs font-medium text-navy-subtle">
              Filling fast — reserve your spot today.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
