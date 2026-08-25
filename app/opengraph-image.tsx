import { ImageResponse } from "next/og";

export const alt = "DhaniDhan";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fafafa",
          color: "#18181b",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          DhaniDhan
          <span style={{ color: "#a1a1aa" }}>.</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 20,
              color: "#a1a1aa",
              letterSpacing: "0.15em",
              marginBottom: 24,
            }}
          >
            PERSONAL NOTES · PROJECTS · THOUGHTS
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              maxWidth: 900,
            }}
          >
            Saya menulis apa yang ingin saya ingat.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#71717a",
          }}
        >
          dhanidhan.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
