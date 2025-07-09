import type { Metadata } from "next";
import { Geist, Geist_Mono, UnifrakturCook } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const unifrakturCook = UnifrakturCook({
  weight: "700",
  variable: "--font-unifraktur-cook",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gridmoire - TTRPG Character Sheets",
  description:
    "Craft your own custom, intuitive, and beautiful character sheets for tabletop RPGs like Dungeons & Dragons.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${unifrakturCook.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
