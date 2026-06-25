import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-topaz-seven-39.vercel.app"),
  title: "Chibuikem Emeka-Nwuba",
  description:
    "CS student at University of Saskatchewan. I build full-stack systems, serverless architectures, and ML-powered tools.",
  openGraph: {
    title: "Chibuikem Emeka-Nwuba",
    description: "CS student & builder — full-stack, cloud, ML.",
    url: "https://portfolio-topaz-seven-39.vercel.app",
    siteName: "Chibuikem Emeka-Nwuba",
    locale: "en_CA",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chibuikem Emeka-Nwuba",
    description: "CS student & builder — full-stack, cloud, ML.",
    images: ["/og.png"],
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
