import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerQuickLinks } from "@/data/webinar";
import { SydiaiLogo } from "@/components/webinar/SydiaiLogo";
import { Container } from "@/components/ui/Container";

export function WebinarFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SydiaiLogo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              SYDIAI orchestrates enterprise decisions across the
              demand-to-fulfillment loop.
            </p>
          </div>

          <div className="lg:col-span-4">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {footerQuickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a
                  href="tel:+917093174830"
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold-light"
                >
                  <Phone className="h-4 w-4 shrink-0 text-electric" />
                  +91 7093174830
                </a>
              </li>
              <li>
                <a
                  href="mailto:engage@sydiai.com"
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold-light"
                >
                  <Mail className="h-4 w-4 shrink-0 text-electric" />
                  engage@sydiai.com
                </a>
              </li>
              <li className="inline-flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
                Hyderabad, India
              </li>
              <li>
                <a
                  href="https://www.sydiai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-light"
                >
                  www.sydiai.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            SYDIAI - Copyright 2026. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <Link href="#" className="hover:text-white/70">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white/70">
              Terms & Condition
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
