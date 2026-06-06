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

type CountdownUnitProps = {
  value: number;
  label: string;
};

function CountdownUnit({ value, label }: CountdownUnitProps) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-display text-3xl font-bold tabular-nums text-navy sm:text-4xl lg:text-5xl">
        {pad(value)}
      </span>
      <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-navy-subtle">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const target = useMemo(
    () => new Date(webinarEvent.startUtc),
    []
  );
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
    <div className="rounded-sm border border-border-subtle bg-white p-6 sm:p-8">
      <p className="mb-5 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
        Conversation Starts In
      </p>
      <div className="flex items-center justify-center gap-3 sm:gap-6">
        <CountdownUnit value={timeLeft.days} label="Days" />
        <span className="pb-5 text-2xl font-light text-border">/</span>
        <CountdownUnit value={timeLeft.hours} label="Hours" />
        <span className="pb-5 text-2xl font-light text-border">/</span>
        <CountdownUnit value={timeLeft.minutes} label="Minutes" />
        <span className="pb-5 text-2xl font-light text-border">/</span>
        <CountdownUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
}
