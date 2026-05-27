import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navItems } from "@/data/navigation";
import { platformCategories } from "@/data/platforms";

const offices = [
  { region: "Americas", email: "americas@sydiai.com" },
  { region: "EMEA", email: "emea@sydiai.com" },
  { region: "APAC", email: "apac@sydiai.com" },
];

export function Footer() {
  const allPlatforms = platformCategories.flatMap((c) => c.platforms);

  return (
    <footer id="contact" className="border-t border-border bg-navy text-white">
      <Container className="py-20 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="font-display text-2xl font-bold tracking-tight">
              SYD<span className="text-electric">IAI</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Enterprise Decision Intelligence orchestrating decisions across
              the demand-to-fulfillment loop.
            </p>
            <p className="mt-8 font-display text-lg font-medium text-white/90">
              Bringing coherence to enterprise decision-making.
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-3">
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                Navigate
              </h4>
              <ul className="space-y-2.5">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/70 transition-colors hover:text-electric"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                Platforms
              </h4>
              <ul className="space-y-2.5">
                {allPlatforms.slice(0, 8).map((p) => (
                  <li key={p.id}>
                    <Link
                      href="/#platforms"
                      className="text-sm text-white/70 transition-colors hover:text-electric"
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                Contact
              </h4>
              <ul className="space-y-4">
                {offices.map((office) => (
                  <li key={office.region}>
                    <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                      {office.region}
                    </p>
                    <a
                      href={`mailto:${office.email}`}
                      className="text-sm text-white/70 transition-colors hover:text-electric"
                    >
                      {office.email}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:enterprise@sydiai.com"
                className="mt-6 inline-block text-sm font-semibold text-electric hover:underline"
              >
                enterprise@sydiai.com
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
              Enterprise Inquiries
            </h4>
            <p className="text-sm leading-relaxed text-white/60">
              Partner with SYDIAI to deploy decision intelligence across your
              demand-to-fulfillment operating model.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center justify-center rounded-sm bg-electric px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-electric-hover"
            >
              Schedule a briefing
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} SYDIAI. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <Link href="#" className="hover:text-white/70">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white/70">
              Terms
            </Link>
            <Link href="#" className="hover:text-white/70">
              Security
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
