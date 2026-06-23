import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Syed Ashiq — Full-Stack Developer";

// Generates the social-share card automatically. No manual og.png needed.
export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column",
          justifyContent: "space-between", background: "#0b0c10", padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, color: "#6d7cff", fontSize: 30 }}>
          <div style={{ width: 12, height: 12, borderRadius: 99, background: "#4ade80" }} />
          <span style={{ fontFamily: "monospace", color: "#9aa1b1" }}>available for full-time roles</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 110, fontWeight: 700, color: "#e8eaf0", letterSpacing: "-3px" }}>
            Syed Ashiq
          </span>
          <span style={{ fontSize: 40, color: "#9aa1b1", marginTop: 8 }}>
            Full-Stack Developer · AI Products
          </span>
        </div>
        <span style={{ fontFamily: "monospace", fontSize: 26, color: "#5b6271" }}>syedashiq.dev</span>
      </div>
    ),
    { ...size }
  );
}
