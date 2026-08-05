import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function withTime(date: string) {
  return date.includes("T") ? date : `${date}T00:00:00`;
}

// Deterministic — safe to render on the server of a statically exported page.
export function formatFullDate(date: string) {
  return new Date(withTime(date)).toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// Depends on "now", so this must only run in the browser on a static export,
// otherwise the relative part is frozen at build time.
export function formatDate(date: string) {
  let currentDate = new Date().getTime();
  date = withTime(date);
  let targetDate = new Date(date).getTime();
  let timeDifference = Math.abs(currentDate - targetDate);
  let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  let fullDate = formatFullDate(date);

  if (daysAgo < 1) {
    return "Today";
  } else if (daysAgo < 7) {
    return `${fullDate} (${daysAgo}d ago)`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    return `${fullDate} (${weeksAgo}w ago)`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    return `${fullDate} (${monthsAgo}mo ago)`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    return `${fullDate} (${yearsAgo}y ago)`;
  }
}
