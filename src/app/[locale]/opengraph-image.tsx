import { ImageResponse } from "next/og";

export const alt = "Slug Generator - Free Online URL Slug Creator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
          background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            marginBottom: 24,
          }}
        >
          <span style={{ fontSize: 72, fontWeight: 800, color: "#111827" }}>
            Slug
          </span>
          <span style={{ fontSize: 72, fontWeight: 800, color: "#2563eb" }}>
            Generator
          </span>
          <span
            style={{
              fontSize: 32,
              fontWeight: 400,
              color: "#9ca3af",
              marginLeft: 4,
            }}
          >
            .app
          </span>
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#4b5563",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.4,
          }}
        >
          Convert any text into a clean, SEO-friendly URL slug. Free, fast, and
          private.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              background: "#ffffff",
              border: "2px solid #e5e7eb",
              borderRadius: 12,
              padding: "12px 24px",
              fontSize: 18,
              color: "#6b7280",
            }}
          >
            My Awesome Blog Post Title!
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 28,
              color: "#9ca3af",
            }}
          >
            &rarr;
          </div>
          <div
            style={{
              display: "flex",
              background: "#eff6ff",
              border: "2px solid #bfdbfe",
              borderRadius: 12,
              padding: "12px 24px",
              fontSize: 18,
              color: "#1d4ed8",
              fontFamily: "monospace",
            }}
          >
            my-awesome-blog-post-title
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
