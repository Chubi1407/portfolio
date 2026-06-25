"use client";
import SectionLabel from "./SectionLabel";

const links = [
  { label: "cemekanwuba@gmail.com", href: "mailto:cemekanwuba@gmail.com" },
  { label: "github.com/Chubi1407", href: "https://github.com/Chubi1407" },
  {
    label: "linkedin.com/in/chibuikemnwuba",
    href: "https://linkedin.com/in/chibuikemnwuba",
  },
  { label: "+1 (639) 994-5191", href: "tel:+16399945191" },
  { label: "resume.pdf", href: "/resume.pdf" },
];

export default function Contact() {
  return (
    <section id="contact" style={{ marginBottom: 80 }}>
      <SectionLabel label="Contact" />
      <p
        style={{
          fontSize: 15,
          color: "var(--muted)",
          maxWidth: 480,
          lineHeight: 1.7,
          marginBottom: 24,
        }}
      >
        Open to new opportunities, collaborations, and interesting problems.
        Feel free to reach out.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: "var(--muted)",
              background: "var(--surface)",
              border: "0.5px solid var(--border)",
              borderRadius: 4,
              padding: "10px 16px",
              textDecoration: "none",
              transition: "all 0.2s",
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
            {l.label}
          </a>
        ))}
      </div>
    </section>
  );
}
