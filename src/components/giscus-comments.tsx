"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

// ── Giscus config ──────────────────────────────────────────────
// repo + repoId are filled in. Enable Discussions on the repo and
// install the giscus app, then grab `category` + `categoryId` from
// https://giscus.app and paste them below.
const GISCUS = {
  repo: "gks2022004/gks2022004.github.io",
  repoId: "R_kgDOPxqw1w",
  category: "Announcements",
  categoryId: "DIC_kwDOPxqw184C_7VM",
};
// ───────────────────────────────────────────────────────────────

export default function GiscusComments() {
  const ref = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const giscusTheme = resolvedTheme === "dark" ? "dark_dimmed" : "light";

  // initial mount: inject the giscus <script>
  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;
    if (!GISCUS.categoryId) return; // not configured yet — render nothing

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", GISCUS.repo);
    script.setAttribute("data-repo-id", GISCUS.repoId);
    script.setAttribute("data-category", GISCUS.category);
    script.setAttribute("data-category-id", GISCUS.categoryId);
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "1");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", giscusTheme);
    script.setAttribute("data-lang", "en");
    script.setAttribute("data-loading", "lazy");
    ref.current.appendChild(script);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // theme change: tell the existing iframe to re-theme
  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      "iframe.giscus-frame",
    );
    iframe?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme: giscusTheme } } },
      "https://giscus.app",
    );
  }, [giscusTheme]);

  if (!GISCUS.categoryId) return null;

  return (
    <div className="mt-16 border-t pt-8 max-w-[650px]">
      <h2 className="font-medium text-lg tracking-tight mb-6">Comments</h2>
      <div ref={ref} />
    </div>
  );
}

