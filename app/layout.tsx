import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOWORK 28 Day Challenge",
  description: "Upgrade the way you work with AI. 28 days, 5–7 minutes a day.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "NOWORK 28 Day Challenge",
    description: "Upgrade the way you work with AI. 28 days, 5–7 minutes a day.",
    url: "https://nowork.ai",
    siteName: "NOWORK",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-nowork-gray">{children}</body>
    </html>
  );
}
