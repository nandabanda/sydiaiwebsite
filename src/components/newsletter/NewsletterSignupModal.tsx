"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { NewsletterSignupForm } from "@/components/NewsletterSignupForm";
import { ModalVisualPanel } from "@/components/newsletter/ModalVisualPanel";
import { newsletterCopy } from "@/data/newsletter";
import type { NewsletterPreferenceId } from "@/data/newsletter";

type NewsletterSignupModalProps = {
  isOpen: boolean;
  onClose: () => void;
  defaultPreferences: NewsletterPreferenceId[];
  sourcePage: string;
  title?: string;
  description?: string;
};

export function NewsletterSignupModal({
  isOpen,
  onClose,
  defaultPreferences,
  sourcePage,
  title,
  description,
}: NewsletterSignupModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="newsletter-modal-title"
        >
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
            aria-label="Close subscription dialog"
            onClick={onClose}
          />

          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-md border border-white/10 bg-white shadow-2xl shadow-navy/30 lg:max-h-[88vh] lg:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-sm bg-white/90 text-navy shadow-sm transition-colors hover:bg-white lg:right-4 lg:top-4"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <ModalVisualPanel
              title={title ?? newsletterCopy.modal.headline}
              description={description ?? newsletterCopy.modal.description}
            />

            <div className="flex-1 overflow-y-auto bg-ivory p-6 sm:p-8 lg:max-w-md">
              <div className="mb-5 lg:hidden">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-electric">
                  SYDIAI Insights
                </p>
                <h2 className="mt-1 font-display text-xl font-bold text-navy">
                  {title ?? newsletterCopy.modal.headline}
                </h2>
              </div>
              <NewsletterSignupForm
                key={`${sourcePage}-${defaultPreferences.join(",")}-${isOpen}`}
                defaultPreferences={defaultPreferences}
                sourcePage={sourcePage}
                bare
                buttonLabel="Subscribe"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
