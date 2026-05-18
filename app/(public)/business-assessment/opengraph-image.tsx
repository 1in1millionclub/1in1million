import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Business Strategic Assessment | 1in1 Million";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #09090b, #000000)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "60px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", marginBottom: "40px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 800,
              letterSpacing: "4px",
            }}
          >
            1in1<span style={{ color: "#FE6168" }}>M</span>
          </div>
        </div>

        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span>Business Strategic</span>
          <span style={{ color: "#FE6168" }}>Assessment</span>
        </div>

        <div
          style={{
            fontSize: 32,
            color: "#a1a1aa",
            textAlign: "center",
            maxWidth: "900px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Explore strategic alignment and scale your business to the next level
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
