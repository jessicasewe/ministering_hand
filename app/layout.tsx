import type { Metadata } from "next";
import { Geist, Geist_Mono, Corinthia } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/Navbar";
import CurvedFooter from "@/components/home/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const corinthia = Corinthia({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-corinthia",
});

export const metadata: Metadata = {
  title: "Ministering Hand Inc",
  description: "Sheltering Hope, Nurturing Strength",
  icons: {
    icon: "/ministeringhandlogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <CurvedFooter />
      </body>
    </html>
  );
}
