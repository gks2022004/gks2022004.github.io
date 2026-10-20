import { DATA } from "@/data/resume";
import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = `${DATA.name} — portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const markSrc = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public/brand/mark-512.png")
).toString("base64")}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 90px",
          background:
            "radial-gradient(120% 90% at 50% -10%, #0c4a6e 0%, transparent 55%), linear-gradient(180deg, #072a45 0%, #020f1f 100%)",
          color: "#f5f3ee",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#38bdf8",
              fontWeight: 700,
            }}
          >
            Portfolio
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.05,
              marginTop: 14,
            }}
          >
            {DATA.name}
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.4,
              marginTop: 24,
              color: "#b8b3aa",
            }}
          >
            {DATA.description}
          </div>
        </div>
        <img
          src={markSrc}
          width={300}
          height={300}
          alt=""
          style={{
            filter: "drop-shadow(0 0 40px rgba(56,189,248,0.55))",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
