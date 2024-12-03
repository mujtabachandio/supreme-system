import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mujtaba | Portfolio",
  description: "Portfolio website created by Mujtaba Chandio on Next.js, Tailwind CSS, TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>{metadata.title ?? "Default Title"}</title>
        <meta name="description" content={metadata.description ?? "Default description"} />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
