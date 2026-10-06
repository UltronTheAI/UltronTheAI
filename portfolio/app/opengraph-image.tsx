import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";

export const alt = "Swaraj Puppalwar — Software Engineer & Infrastructure Builder";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  // Read portrait from public directory and encode to Base64
  let userImageDataUrl = "";
  try {
    const portraitPath = path.join(process.cwd(), "public", "user.png");
    const imageBuffer = fs.readFileSync(portraitPath);
    userImageDataUrl = `data:image/png;base64,${imageBuffer.toString("base64")}`;
  } catch {
    userImageDataUrl = "";
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "44px 52px",
          backgroundColor: "#FFFFFF",
          color: "#111111",
          fontFamily: "sans-serif",
          position: "relative",
          border: "12px solid #FFFFFF",
          outline: "2px dashed #111111",
          outlineOffset: "-16px",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "6px 14px",
              backgroundColor: "#FAFAFA",
              border: "2px solid #111111",
              borderRadius: "4px",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              fontFamily: "monospace",
              color: "#111111",
            }}
          >
            <span>SWARAJ PUPPALWAR</span>
            <span style={{ color: "#888888" }}>//</span>
            <span>SOFTWARE ENGINEER</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "monospace",
              fontSize: "13px",
              color: "#555555",
            }}
          >
            <span>LIORAN DEVELOPER SOLUTIONS</span>
          </div>
        </div>

        {/* Center: Main Content + Sketch Framed Portrait */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "40px",
            marginTop: "16px",
            marginBottom: "16px",
          }}
        >
          {/* Left Text Block */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              maxWidth: "680px",
            }}
          >
            <div
              style={{
                fontSize: "50px",
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: "-1.5px",
                color: "#000000",
              }}
            >
              Full-stack engineer building developer infrastructure.
            </div>

            <div
              style={{
                fontSize: "19px",
                lineHeight: 1.45,
                color: "#444444",
                fontWeight: 500,
              }}
            >
              Founder & CTO at Lioran Group. Building databases, object storage, backend platforms, and systems tooling in Rust & TypeScript.
            </div>
          </div>

          {/* Right Portrait Block with Sketch Frame & Offset Shadow */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "210px",
                height: "210px",
                border: "3px solid #111111",
                borderRadius: "6px",
                backgroundColor: "#FAFAFA",
                boxShadow: "8px 8px 0px #111111",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {userImageDataUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={userImageDataUrl}
                  alt="Swaraj Puppalwar"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : null}
            </div>

            <div
              style={{
                marginTop: "12px",
                fontFamily: "monospace",
                fontSize: "11px",
                fontWeight: 700,
                color: "#111111",
                letterSpacing: "1px",
              }}
            >
              [ FOUNDER & CTO ]
            </div>
          </div>
        </div>

        {/* Bottom Bar with Tech Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "16px",
            borderTop: "2px solid #E5E5E5",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {["Rust", "TypeScript", "LioranDB (V2)", "Lioran S3", "Bastion", "Systems Architecture"].map(
              (badge) => (
                <div
                  key={badge}
                  style={{
                    padding: "5px 12px",
                    backgroundColor: "#FFFFFF",
                    border: "1.5px solid #111111",
                    borderRadius: "3px",
                    fontFamily: "monospace",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#111111",
                  }}
                >
                  {badge}
                </div>
              )
            )}
          </div>

          <div
            style={{
              fontFamily: "monospace",
              fontSize: "13px",
              fontWeight: 700,
              color: "#111111",
            }}
          >
            swaraj.lioransolutions.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
