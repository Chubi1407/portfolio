import { experience } from "../data";
import SectionLabel from "./SectionLabel";

export default function Experience() {
  return (
    <section id="experience" style={{ marginBottom: 80 }}>
      <SectionLabel label="Experience" />
      <div>
        {experience.map((exp, i) => (
          <div
            key={i}
            style={{
              padding: "24px 0",
              borderBottom:
                i < experience.length - 1
                  ? "0.5px solid var(--border)"
                  : "none",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 6,
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "var(--text)",
                    marginBottom: 4,
                  }}
                >
                  {exp.title}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--accent)",
                  }}
                >
                  {exp.org}
                </p>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--muted)",
                  whiteSpace: "nowrap",
                }}
              >
                {exp.date}
              </span>
            </div>
            <ul style={{ listStyle: "none", marginTop: 12 }}>
              {exp.bullets.map((b, j) => (
                <li
                  key={j}
                  style={{
                    fontSize: 13,
                    color: "var(--muted)",
                    lineHeight: 1.65,
                    paddingLeft: 14,
                    position: "relative",
                    marginBottom: 4,
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "var(--accent)",
                    }}
                  >
                    –
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
