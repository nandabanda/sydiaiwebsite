import { appliedFramework } from "@/data/insights/hub";
import { INSIGHTS_PUBLISHER } from "@/data/insights/hub";

export function FrameworkCard() {
  return (
    <div className="rounded-sm border border-navy/10 bg-navy p-6 text-white lg:p-8">
      <h3 className="font-display text-lg font-semibold text-gold-light">
        {appliedFramework.title}
      </h3>
      <p className="mt-2 text-sm text-white/70">{appliedFramework.body}</p>
      <ol className="mt-5 grid gap-2 sm:grid-cols-2">
        {appliedFramework.steps.map((step, i) => (
          <li
            key={step}
            className="flex gap-2 text-xs text-white/80"
          >
            <span className="font-bold text-electric">{i + 1}.</span>
            {step}
          </li>
        ))}
      </ol>
      <p className="mt-5 text-[10px] text-white/45">{INSIGHTS_PUBLISHER}</p>
    </div>
  );
}
