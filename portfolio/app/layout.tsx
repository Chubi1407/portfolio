import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chibuikem Emeka-Nwuba",
  description:
    "Software developer and CS graduate (USask, 2026) specialising in full-stack development, cloud architecture, and NLP. Currently researching software quality at the USask Software Quality Lab. Open to junior developer and analyst roles across Canada.",
  openGraph: {
    title: "Chibuikem Emeka-Nwuba",
    description:
      "Software developer and CS graduate (USask, 2026) specialising in full-stack development, cloud architecture, and NLP. Currently researching software quality at the USask Software Quality Lab. Open to junior developer and analyst roles across Canada.",
    siteName: "Chibuikem Emeka-Nwuba",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}