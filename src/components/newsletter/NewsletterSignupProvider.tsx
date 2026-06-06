"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { NewsletterSignupModal } from "@/components/newsletter/NewsletterSignupModal";
import type { NewsletterPreferenceId } from "@/data/newsletter";

export type OpenSignupOptions = {
  defaultPreferences: NewsletterPreferenceId[];
  sourcePage: string;
  title?: string;
  description?: string;
};

type NewsletterContextValue = {
  openSignup: (options: OpenSignupOptions) => void;
};

const NewsletterContext = createContext<NewsletterContextValue | null>(null);

export function useNewsletterSignup() {
  const ctx = useContext(NewsletterContext);
  if (!ctx) {
    throw new Error(
      "useNewsletterSignup must be used within NewsletterSignupProvider"
    );
  }
  return ctx;
}

export function NewsletterSignupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOptions, setModalOptions] = useState<OpenSignupOptions>({
    defaultPreferences: ["demand-intelligence-brief", "engineering-stack"],
    sourcePage: "/insights",
  });

  const openSignup = useCallback((options: OpenSignupOptions) => {
    setModalOptions(options);
    setIsOpen(true);
  }, []);

  const closeSignup = useCallback(() => setIsOpen(false), []);

  return (
    <NewsletterContext.Provider value={{ openSignup }}>
      {children}
      <NewsletterSignupModal
        isOpen={isOpen}
        onClose={closeSignup}
        defaultPreferences={modalOptions.defaultPreferences}
        sourcePage={modalOptions.sourcePage}
        title={modalOptions.title}
        description={modalOptions.description}
      />
    </NewsletterContext.Provider>
  );
}
