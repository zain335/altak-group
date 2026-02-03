import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Altak Group | Web3, AI & On-Chain Automation",
  description:
    "At Altak, we're builders dedicated to shipping amazing products that push the boundaries of Web3, AI, and on-chain automation. We build AI agents, trading bots, launchpads, and on-chain infrastructure.",
  keywords: [
    "Web3",
    "AI",
    "Blockchain",
    "Solana",
    "Trading Bots",
    "AI Agents",
    "On-Chain Automation",
    "DeFi",
    "Crypto",
    "Smart Contracts",
  ],
  authors: [{ name: "Altak Group" }],
  creator: "Altak Group",
  publisher: "Altak Group",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://altak.group",
    siteName: "Altak Group",
    title: "Altak Group | Web3, AI & On-Chain Automation",
    description:
      "Builders of the future. We ship AI agents, trading bots, launchpads, and on-chain infrastructure that push the boundaries of Web3 and automation.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Altak Group Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@altakgroup",
    creator: "@altakgroup",
    title: "Altak Group | Web3, AI & On-Chain Automation",
    description:
      "Builders of the future. We ship AI agents, trading bots, launchpads, and on-chain infrastructure that push the boundaries of Web3 and automation.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
