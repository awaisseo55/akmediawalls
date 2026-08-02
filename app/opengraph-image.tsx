import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0F0F0F",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(45,90,61,0.35), transparent 45%), radial-gradient(circle at 80% 80%, rgba(201,169,97,0.18), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: "9999px",
            border: "2px solid #C9A961",
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "16px solid transparent",
              borderRight: "16px solid transparent",
              borderBottom: "44px solid #C9A961",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 600,
            color: "#FFFFFF",
            letterSpacing: 2,
          }}
        >
          MEDIA WALLS
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            fontWeight: 500,
            color: "#C9A961",
            letterSpacing: 18,
            marginTop: 6,
          }}
        >
          NORTH
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#D4D4D4",
            marginTop: 36,
          }}
        >
          Bespoke Media Wall Installation, Manchester &amp; the North West
        </div>
      </div>
    ),
    { ...size }
  );
}
