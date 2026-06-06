"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function FinalCTA() {
  return (
    <section className="bg-navy py-10 lg:py-12">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
              Don&apos;t plan for the last decade.{" "}
              <span className="text-gold-light">Plan for what&apos;s next.</span>
            </h2>
            <p className="mt-1.5 max-w-lg text-sm text-white/60">
              Join SYDIAI and executive leaders rebuilding the AI-first playbook.
            </p>
          </div>
          <Link
            href="#register"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-sm bg-electric px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-electric-hover"
          >
            Register Now
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
