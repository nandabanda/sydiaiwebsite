"use client";

import { useEffect, useState, useMemo } from "react";
import { webinarEvent } from "@/data/webinar";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calculateTimeLeft(target: Date): TimeLeft {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <span className="font-display text-lg font-bold tabular-nums text-navy sm:text-xl">
        {pad(value)}
      </span>
      <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-wider text-navy-subtle">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const target = useMemo(() => new Date(webinarEvent.startUtc), []);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(target)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(target));
    }, 1000);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="rounded-sm border border-border-subtle bg-white px-4 py-3">
      <p className="mb-2.5 text-center text-[9px] font-bold uppercase tracking-[0.18em] text-gold">
        Starts In
      </p>
      <div className="flex items-center justify-center gap-2 sm:gap-3">
        <Unit value={timeLeft.days} label="Days" />
        <span className="pb-3 text-sm text-border">:</span>
        <Unit value={timeLeft.hours} label="Hrs" />
        <span className="pb-3 text-sm text-border">:</span>
        <Unit value={timeLeft.minutes} label="Min" />
        <span className="pb-3 text-sm text-border">:</span>
        <Unit value={timeLeft.seconds} label="Sec" />
      </div>
    </div>
  );
}
