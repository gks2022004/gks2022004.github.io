"use client";

import { OceanEngine } from "@/lib/ascii-sharks";
import { useEffect, useRef } from "react";

// Vendored from https://github.com/stackedlol/ascii-sharks.
// The renderer paints an opaque black ocean; globals.css blends it per theme.
export default function AsciiOcean() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const engine = new OceanEngine(canvas);
    return () => engine.destroy();
  }, []);

  return (
    <>
      <canvas ref={canvasRef} aria-hidden="true" className="ascii-ocean font-mono" />
      <div aria-hidden className="ascii-ocean ascii-ocean__scrim" />
    </>
  );
}
