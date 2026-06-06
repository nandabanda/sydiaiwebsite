"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { webinarNavItems } from "@/data/webinar";
import { SydiaiLogo } from "@/components/webinar/SydiaiLogo";
import { cn } from "@/lib/utils";

export function WebinarHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border-subtle bg-ivory/95 shadow-sm shadow-navy/5 backdrop-blur-md"
          : "bg-ivory/80 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-[4.25rem] lg:px-8">
        <SydiaiLogo />

        <nav className="hidden items-center gap-0.5 xl:flex">
          {webinarNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-sm px-2.5 py-2 text-[12px] font-medium text-navy-muted transition-colors hover:text-electric"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#register"
          className="hidden rounded-sm bg-navy px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-navy-muted lg:inline-flex"
        >
          Register
        </Link>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-sm border border-border-subtle text-navy lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border-subtle bg-ivory lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-5">
              {webinarNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-sm px-3 py-2.5 text-sm font-medium text-navy hover:bg-gold-muted/60"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#register"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-sm bg-navy px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Register
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
