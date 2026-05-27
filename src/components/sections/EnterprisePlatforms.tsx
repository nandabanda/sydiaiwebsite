"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { platformCategories } from "@/data/platforms";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlatformCard } from "@/components/ui/PlatformCard";
import { cn } from "@/lib/utils";

export function EnterprisePlatforms() {
  const [activeCategory, setActiveCategory] = useState(platformCategories[0].id);
  const current = platformCategories.find((c) => c.id === activeCategory)!;

  return (
    <section id="platforms" className="py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Enterprise Platforms"
          title="AI-native operating systems for every decision domain"
          description="Modular intelligence platforms that compose into a unified enterprise decision fabric—from commercial growth to fulfillment execution."
        />

        <div className="mt-12 flex flex-wrap gap-2 border-b border-border-subtle pb-6">
          {platformCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "rounded-sm px-4 py-2.5 text-sm font-medium transition-all",
                activeCategory === cat.id
                  ? "bg-navy text-white"
                  : "text-navy-subtle hover:bg-ivory-muted hover:text-navy"
              )}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-10"
        >
          <div className="mb-10 max-w-2xl">
            <h3 className="font-display text-2xl font-semibold text-navy">
              {current.title}
            </h3>
            <p className="mt-3 text-base text-navy-subtle">{current.subtitle}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {current.platforms.map((platform, i) => (
              <PlatformCard key={platform.id} platform={platform} index={i} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
