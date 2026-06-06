import { newsletterCopy } from "@/data/newsletter";

type ModalVisualPanelProps = {
  title: string;
  description: string;
};

export function ModalVisualPanel({ title, description }: ModalVisualPanelProps) {
  return (
    <div className="relative hidden min-h-[420px] flex-1 overflow-hidden bg-navy lg:flex lg:min-h-0 lg:flex-col">
      <div className="bg-grid absolute inset-0 opacity-[0.06]" />

      {/* Gradient orb */}
      <div className="pointer-events-none absolute -left-16 top-1/4 h-64 w-64 rounded-full bg-electric/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-8 bottom-1/4 h-48 w-48 rounded-full bg-gold/15 blur-3xl" />

      {/* Abstract signal network */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 400 500"
        fill="none"
        aria-hidden
      >
        <circle cx="80" cy="120" r="4" fill="#0a6cff" className="animate-pulse" />
        <circle cx="200" cy="80" r="3" fill="#d4af37" />
        <circle cx="320" cy="140" r="4" fill="#0a6cff" />
        <circle cx="160" cy="220" r="5" fill="#0a6cff" opacity="0.8" />
        <circle cx="280" cy="260" r="3" fill="#d4af37" />
        <circle cx="100" cy="320" r="3" fill="#0a6cff" />
        <circle cx="240" cy="360" r="4" fill="#0a6cff" />
        <path
          d="M80 120 L200 80 L320 140 L280 260 L160 220 L80 120"
          stroke="url(#lineGrad)"
          strokeWidth="1"
          opacity="0.5"
        />
        <path
          d="M160 220 L240 360 L100 320 L160 220"
          stroke="url(#lineGrad)"
          strokeWidth="1"
          opacity="0.35"
        />
        <path
          d="M320 140 L280 260"
          stroke="#0a6cff"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.4"
        />
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a6cff" />
            <stop offset="100%" stopColor="#d4af37" />
          </linearGradient>
        </defs>
      </svg>

      {/* Wave motif */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-electric/10 to-transparent" />

      <div className="relative flex flex-1 flex-col justify-end p-8 pb-10">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-light">
          SYDIAI Insights
        </p>
        <h2
          id="newsletter-modal-title"
          className="mt-3 font-display text-2xl font-bold leading-tight text-white"
        >
          {title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-white/65">{description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {newsletterCopy.modal.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-sm border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/85 backdrop-blur-sm"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
