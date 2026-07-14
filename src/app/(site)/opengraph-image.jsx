import { ImageResponse } from "next/og";

export const alt = "Sebastián González Rodríguez — Desarrollador Web Frontend";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#000000",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#10b981", fontSize: 32, fontWeight: 700, marginBottom: 24 }}>
          SGR
        </div>
        <div style={{ display: "flex", color: "#ffffff", fontSize: 64, fontWeight: 700, lineHeight: 1.15 }}>
          Sebastián González Rodríguez
        </div>
        <div style={{ display: "flex", color: "#9ca3af", fontSize: 32, marginTop: 24 }}>
          Desarrollador Web Frontend
        </div>
        <div style={{ display: "flex", marginTop: 48, width: 120, height: 6, backgroundColor: "#10b981", borderRadius: 999 }} />
      </div>
    ),
    { ...size }
  );
}
