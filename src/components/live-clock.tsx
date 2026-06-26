"use client";

import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

function format(date: Date) {
  const time = date.toLocaleTimeString("en-GB", { hour12: false });
  // e.g. "GMT+5:30"
  const tz = date
    .toString()
    .match(/GMT[+-]\d{2}\d{2}/)?.[0]
    ?.replace(/GMT([+-])(\d{2})(\d{2})/, (_, s, h, m) => `GMT${s}${+h}:${m}`);
  return { time, tz: tz ?? "" };
}

export default function LiveClock() {
  const [now, setNow] = useState<{ time: string; tz: string } | null>(null);

  useEffect(() => {
    const tick = () => setNow(format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground tabular-nums">
      <Clock className="size-4" />
      {/* min-width keeps layout stable before hydration */}
      <span suppressHydrationWarning>
        {now ? `${now.time} ${now.tz}` : " "}
      </span>
    </div>
  );
}
