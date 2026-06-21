import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import Cursor from "@/components/ui/cursor";

export const metadata: Metadata = {
  title: "Syed Ashiq | Portfolio",
  description: "Portfolio of Syed Ashiq",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Cursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
