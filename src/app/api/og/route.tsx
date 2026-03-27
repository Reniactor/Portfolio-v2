import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const title = searchParams.get("title") ?? "Blog Post";
  const description = searchParams.get("description") ?? "";

  // Fetch the transparent logo from public directory
  const logoData = await fetch(`${origin}/logo.png`).then((res) =>
    res.arrayBuffer(),
  );
  const logoBase64 =
    "data:image/png;base64," + Buffer.from(logoData).toString("base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#1e1e1e",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Gold accent bar on left */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "6px",
            background: "linear-gradient(to bottom, #ffb01f, #FFD485)",
          }}
        />

        {/* Content container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "48px 64px",
            width: "100%",
            height: "100%",
          }}
        >
          {/* Top: Logo in top-right */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <img src={logoBase64} width={160} height={160} />
          </div>

          {/* Middle: Title + Description */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              maxWidth: "85%",
            }}
          >
            <div
              style={{
                fontSize: title.length > 40 ? 44 : 56,
                fontWeight: 700,
                color: "#f2f2f2",
                lineHeight: 1.15,
              }}
            >
              {title}
            </div>
            {description ? (
              <div
                style={{
                  fontSize: 22,
                  color: "#bfbfbf",
                  lineHeight: 1.4,
                  maxWidth: "85%",
                }}
              >
                {description}
              </div>
            ) : null}
          </div>

          {/* Bottom: Author info + Blog badge */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: "12px" }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#ffb01f",
                }}
              />
              <span
                style={{ fontSize: 20, color: "#f2f2f2", fontWeight: 600 }}
              >
                Arquímedes Vásquez
              </span>
              <span style={{ fontSize: 18, color: "#666" }}>|</span>
              <span style={{ fontSize: 18, color: "#999" }}>
                Fullstack Developer
              </span>
              <span style={{ fontSize: 18, color: "#666" }}>|</span>
              <span style={{ fontSize: 16, color: "#777" }}>
                arquimedesvasquez.com
              </span>
            </div>
            <div
              style={{
                fontSize: 14,
                color: "#ffb01f",
                backgroundColor: "rgba(255,176,31,0.1)",
                padding: "6px 16px",
                borderRadius: "4px",
                border: "1px solid rgba(255,176,31,0.2)",
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                fontWeight: 600,
              }}
            >
              Blog
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
