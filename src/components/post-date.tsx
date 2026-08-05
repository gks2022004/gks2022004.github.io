"use client";

import { useEffect, useState } from "react";

import { formatDate, formatFullDate } from "@/lib/utils";

// The site is a static export, so anything computed against `new Date()` during
// the build stays frozen at build time ("1d ago" forever). Render the absolute
// date on the server and recompute the relative part in the browser.
export default function PostDate({ date }: { date: string }) {
  const [label, setLabel] = useState(() => formatFullDate(date));

  useEffect(() => {
    setLabel(formatDate(date));
  }, [date]);

  return <span suppressHydrationWarning>{label}</span>;
}
