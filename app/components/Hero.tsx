"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section ref={ref} className="hero-grid">
      <div>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--accent)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 14,
          }}
        >
          // cs student & builder
        </p>
        <h1
          style={{
            fontSize: "clamp(36px, 5vw, 52px)",
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: "-0.025em",
            marginBottom: 20,
          }}
        >
          Chibuikem
          <br />
          <em style={{ fontStyle: "normal", color: "var(--accent)" }}>
            Emeka-Nwuba
          </em>
        </h1>
        <p
          style={{
            fontSize: 15,
            color: "var(--muted)",
            maxWidth: 460,
            lineHeight: 1.75,
            marginBottom: 28,
          }}
        >
          Computer Science student at the University of Saskatchewan. I build
          full-stack systems, serverless architectures, and ML-powered tools.
          Currently researching NLP applications in software quality.
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a
            href="mailto:cemekanwuba@gmail.com"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "10px 20px",
              borderRadius: 4,
              textDecoration: "none",
              background: "var(--accent)",
              color: "#0e0e0e",
              fontWeight: 500,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "0.85")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "1")
            }
          >
            Get in touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "10px 20px",
              borderRadius: 4,
              textDecoration: "none",
              background: "transparent",
              color: "var(--muted)",
              border: "0.5px solid var(--border)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "var(--text)";
              el.style.borderColor = "rgba(255,255,255,0.22)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "var(--muted)";
              el.style.borderColor = "var(--border)";
            }}
          >
            Resume →
          </a>
          <a
            href="https://github.com/Chubi1407"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "10px 20px",
              borderRadius: 4,
              textDecoration: "none",
              background: "transparent",
              color: "var(--muted)",
              border: "0.5px solid var(--border)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "var(--text)";
              el.style.borderColor = "rgba(255,255,255,0.22)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "var(--muted)";
              el.style.borderColor = "var(--border)";
            }}
          >
            GitHub →
          </a>
          <a
            href="https://linkedin.com/in/chibuikemnwuba"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "10px 20px",
              borderRadius: 4,
              textDecoration: "none",
              background: "transparent",
              color: "var(--muted)",
              border: "0.5px solid var(--border)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "var(--text)";
              el.style.borderColor = "rgba(255,255,255,0.22)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "var(--muted)";
              el.style.borderColor = "var(--border)";
            }}
          >
            LinkedIn →
          </a>
        </div>
      </div>

      <div
        className="hero-photo"
        style={{
          width: 164,
          height: 164,
          flexShrink: 0,
          borderRadius: "50%",
          overflow: "hidden",
          border: "2px solid var(--accent)",
          position: "relative",
        }}
      >
        <Image
          src="/images/headshot.jpg"
          alt="Chibuikem Emeka-Nwuba"
          fill
          style={{ objectFit: "cover", objectPosition: "center 5%" }}
          priority
        />
      </div>
    </section>
  );
}
