import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chibuikem Emeka-Nwuba",
  description:
    "CS student at University of Saskatchewan. I build full-stack systems, serverless architectures, and ML-powered tools.",
  openGraph: {
    title: "Chibuikem Emeka-Nwuba",
    description: "CS student & builder — full-stack, cloud, ML.",
    url: "https://chibuikem.dev",
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
