import type { Metadata } from "next";
import { Archivo_Black, Space_Grotesk, IBM_Plex_Mono, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fontDisplay = Archivo_Black({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const fontSans = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fontMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const fontHand = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Miller Lab | Computational Biomedical Research",
  description:
    "The Miller Lab accelerates biomedical discovery through AI, molecular simulation, computational biophysics, drug discovery, and bioinformatics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable} ${fontHand.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink-soft">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
