"use client";
"use client";
import Image from "next/image";
import { projects } from "../data";
import SectionLabel from "./SectionLabel";

function Tag({ label }: { label: string }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        color: "rgba(200,240,96,0.75)",
        background: "var(--accent-dim)",
        padding: "3px 8px",
        borderRadius: 3,
        letterSpacing: "0.04em",
      }}
    >
      {label}
    </span>
  );
}

function FeaturedCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.15fr 1fr",
        background: "var(--surface)",
        border: "0.5px solid var(--border)",
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 12,
        transition: "border-color 0.25s",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.borderColor = "var(--border2)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
      }
    >
      <div style={{ position: "relative", minHeight: 240 }}>
        <Image
          src={project.image}
          alt={project.name}
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
      <div
        style={{
          padding: 24,
          borderLeft: "0.5px solid var(--border)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 12,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            color: "var(--accent)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          ★ {project.eyebrow}
        </p>
        <h3 style={{ fontSize: 18, fontWeight: 500, color: "var(--text)" }}>
          {project.name}
        </h3>
        <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>
          {project.desc}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          {project.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--muted)",
              textDecoration: "none",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              borderBottom: "0.5px solid var(--border)",
              paddingBottom: 2,
              alignSelf: "flex-start",
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "var(--accent)";
              el.style.borderColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "var(--muted)";
              el.style.borderColor = "var(--border)";
            }}
          >
            {project.linkLabel}
          </a>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "0.5px solid var(--border)",
        borderRadius: 10,
        overflow: "hidden",
        transition: "border-color 0.25s, transform 0.25s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border2)";
        el.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border)";
        el.style.transform = "translateY(0)";
      }}
    >
      <div style={{ position: "relative", height: 152 }}>
        <Image
          src={project.image}
          alt={project.name}
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
      <div
        style={{
          padding: 18,
          borderTop: "0.5px solid var(--border)",
        }}
      >
        <h3
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: "var(--text)",
            marginBottom: 6,
          }}
        >
          {project.name}
        </h3>
        <p
          style={{
            fontSize: 12,
            color: "var(--muted)",
            lineHeight: 1.55,
            marginBottom: 12,
          }}
        >
          {project.desc}
        </p>
        <div
          style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: project.link ? 12 : 0 }}
        >
          {project.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--muted)",
              textDecoration: "none",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              borderBottom: "0.5px solid var(--border)",
              paddingBottom: 1,
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "var(--accent)";
              el.style.borderColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "var(--muted)";
              el.style.borderColor = "var(--border)";
            }}
          >
            {project.linkLabel}
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" style={{ marginBottom: 80 }}>
      <SectionLabel label="Projects" />
      <FeaturedCard project={featured} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
        }}
      >
        {rest.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
