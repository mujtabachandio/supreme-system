import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";

// Import Audiowide font
const audiowideFont = localFont({
  src: "./fonts/Audiowide-Regular.ttf",
  variable: "--font-audiowide",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Mujtaba Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${audiowideFont.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
