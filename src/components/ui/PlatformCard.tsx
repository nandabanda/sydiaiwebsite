"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Platform } from "@/data/platforms";
import { cn } from "@/lib/utils";

type PlatformCardProps = {
  platform: Platform;
  index?: number;
};

export function PlatformCard({ platform, index = 0 }: PlatformCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "group relative flex flex-col rounded-sm border border-border-subtle bg-white p-8",
        "transition-all duration-300 hover:border-electric/30 hover:shadow-lg hover:shadow-navy/5"
      )}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-semibold tracking-tight text-navy">
          {platform.name}
        </h3>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-border-subtle text-navy-subtle transition-colors group-hover:border-electric/40 group-hover:bg-electric-muted/50 group-hover:text-electric">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      <p className="mb-6 text-sm leading-relaxed text-navy-subtle">
        {platform.tagline}
      </p>
      <ul className="mt-auto space-y-2.5 border-t border-border-subtle pt-6">
        {platform.capabilities.map((cap) => (
          <li
            key={cap}
            className="flex gap-2.5 text-sm leading-snug text-navy-muted"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-electric" />
            {cap}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
