import type { Metadata } from "next";
import { DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fontSerif = DM_Serif_Display({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Miller Lab | Computational Biomedical Research",
  description:
    "The Miller Lab accelerates biomedical discovery through AI, molecular simulation, computational biophysics, drug discovery, and bioinformatics.",
};

// Sets [data-theme] before hydration so a saved dark preference doesn't
// flash light-then-dark on load. Falls back to OS preference, then light.
const THEME_INIT_SCRIPT = `
(function () {
  try {
    var root = document.documentElement;
    var saved = localStorage.getItem('miller-theme');
    var initial = saved || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    root.setAttribute('data-theme', initial);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${fontSerif.variable} ${fontMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col text-ink">
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
        <div className="fx-grid" aria-hidden="true" />
        <div className="fx-vignette" aria-hidden="true" />
        <div className="fx-grain" aria-hidden="true" />
        <span className="corner-mark tl" aria-hidden="true" />
        <span className="corner-mark tr" aria-hidden="true" />
        <span className="corner-mark bl" aria-hidden="true" />
        <span className="corner-mark br" aria-hidden="true" />

        <div className="relative z-[1] flex min-h-full flex-1 flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
