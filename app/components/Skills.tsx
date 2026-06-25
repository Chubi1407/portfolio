import { skills } from "../data";
import SectionLabel from "./SectionLabel";

export default function Skills() {
  return (
    <section id="skills" style={{ marginBottom: 80 }}>
      <SectionLabel label="Skills" />
      <div className="skills-grid">
        {skills.map((group) => (
          <div
            key={group.title}
            style={{
              background: "var(--surface)",
              border: "0.5px solid var(--border)",
              borderRadius: 8,
              padding: "16px 20px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--muted)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              {group.title}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {group.items.map((item) => (
                <span
                  key={item}
                  style={{
                    fontSize: 12,
                    color: "var(--text)",
                    background: "rgba(255,255,255,0.05)",
                    border: "0.5px solid var(--border)",
                    padding: "4px 10px",
                    borderRadius: 3,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
