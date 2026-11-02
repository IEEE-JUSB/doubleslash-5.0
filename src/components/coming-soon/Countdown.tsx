"use client";

import { useEffect, useState } from "react";

const pad = (n: number) => String(n).padStart(2, "0");

function diff(end: number) {
  const s = Math.floor(Math.max(0, end - Date.now()) / 1000);
  return {
    Days: Math.floor(s / 86400),
    Hours: Math.floor((s % 86400) / 3600),
    Minutes: Math.floor((s % 3600) / 60),
    Seconds: s % 60,
  };
}

export default function Countdown({ target }: { target: string }) {
  const [time, setTime] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    const end = new Date(target).getTime();
    const tick = () => setTime(diff(end));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = ["Days", "Hours", "Minutes", "Seconds"] as const;

  return (
    <div className="flex items-center gap-4 sm:gap-8">
      {units.map((label, i) => (
        <div key={label} className="flex items-center gap-4 sm:gap-8">
          {i > 0 && <span className="h-12 w-px bg-white/15" />}
          <div className="text-center">
            <div className="min-w-[2ch] text-[clamp(32px,6vw,72px)] font-bold leading-none text-white">
              {time ? pad(time[label]) : "--"}
            </div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.3em] text-white/50 sm:text-xs">
              {label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}