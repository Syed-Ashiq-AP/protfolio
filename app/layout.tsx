import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import Cursor from "@/components/ui/cursor";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE = "https://syedashiq.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Syed Ashiq — Full-Stack Developer",
  description:
    "Full-Stack Developer building web applications and AI-driven products. Open to full-time developer roles.",
  keywords: [
    "Syed Ashiq",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "AI products",
    "Web Developer",
  ],
  authors: [{ name: "Syed Ashiq", url: SITE }],
  creator: "Syed Ashiq",
  alternates: { canonical: SITE },
  openGraph: {
    type: "website",
    url: SITE,
    title: "Syed Ashiq — Full-Stack Developer",
    description:
      "Building web applications and AI-driven products. Open to full-time developer roles.",
    siteName: "Syed Ashiq",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Ashiq — Full-Stack Developer",
    description:
      "Building web applications and AI-driven products. Open to full-time developer roles.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${display.variable} ${mono.variable}`}
    >
      <body className="min-h-full flex flex-col">
        <Cursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
