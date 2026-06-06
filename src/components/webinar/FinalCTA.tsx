"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function FinalCTA() {
  return (
    <section className="border-t border-border-subtle bg-navy py-20 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Don&apos;t Plan for the Last Decade.{" "}
            <span className="text-gold-light">Plan for What&apos;s Next.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65">
            Join SYDIAI and a community of planning leaders rebuilding the
            playbook for an AI-first enterprise.
          </p>
          <Link
            href="#register"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-electric px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-electric/25 transition-all hover:bg-electric-hover"
          >
            Register Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
