"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { insightPosts } from "@/data/insights";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Insights() {
  return (
    <section
      id="insights"
      className="border-t border-border-subtle bg-ivory-muted/50 py-24 lg:py-32"
    >
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Insights"
            title="Perspectives on enterprise decision intelligence"
            description="Thought leadership from practitioners building the next generation of AI-native operating systems."
            className="mb-0"
          />
          <Link
            href="#"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-electric hover:underline"
          >
            View all insights
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {insightPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group flex flex-col rounded-sm border border-border-subtle bg-white p-6 transition-all hover:border-electric/25 hover:shadow-md"
            >
              <span className="text-[11px] font-semibold uppercase tracking-wider text-electric">
                {post.category}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-navy group-hover:text-electric transition-colors">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-subtle">
                {post.excerpt}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-border-subtle pt-4 text-xs text-navy-subtle">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
