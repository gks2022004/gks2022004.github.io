"use client";

import { Eye } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Free, keyless hit counter — persists counts without a backend, which a
// static GitHub Pages site can't provide on its own.
const NAMESPACE = "gks2022004.github.io";

export default function ViewCounter({ slug }: { slug: string }) {
  const [views, setViews] = useState<number | null>(null);
  const ran = useRef(false);

  useEffect(() => {
    // guard against React 18 StrictMode double-invoke in dev
    if (ran.current) return;
    ran.current = true;

    const key = slug.replace(/[^a-zA-Z0-9_-]/g, "-") || "home";
    fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/${key}/up`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((d) => setViews(typeof d?.count === "number" ? d.count : null))
      .catch(() => setViews(null));
  }, [slug]);

  return (
    <span className="inline-flex items-center gap-1.5 tabular-nums">
      <Eye className="size-3.5" />
      {views === null ? "—" : views.toLocaleString()} views
    </span>
  );
}
