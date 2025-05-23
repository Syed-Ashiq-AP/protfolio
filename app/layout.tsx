import type { Metadata } from "next";
import { Inter, Questrial } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});
const questrial = Questrial({
    variable: "--font-questrial",
    weight: "400",
    subsets: ["latin"],
});

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
        <html lang="en">
            <body className={`${inter.variable} antialiased`}>{children}</body>
        </html>
    );
}
