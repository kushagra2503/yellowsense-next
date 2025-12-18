import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Marquee from "@/components/layout/Marquee";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yellowsense Technologies | Book Nanny, Maid, Cook Services",
  description: "Yellowsense Technologies - AI based maid booking service. Driving financial inclusion in India.",
  icons: {
    icon: [
      { url: "/images/logo.webp", type: "image/webp" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/images/logo.webp",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-brand-cream/30 text-gray-900`}
      >
        <Marquee />
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
