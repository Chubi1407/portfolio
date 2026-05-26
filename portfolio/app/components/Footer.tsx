export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 80,
        paddingTop: 20,
        paddingBottom: 40,
        borderTop: "0.5px solid var(--border)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "var(--muted)",
        }}
      >
        Chibuikem Emeka-Nwuba
      </span>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "var(--muted)",
        }}
      >
        Saskatoon, SK · {new Date().getFullYear()}
      </span>
    </footer>
  );
}
