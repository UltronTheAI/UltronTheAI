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
  title: {
    default: "Swaraj Puppalwar | UltronTheAI",
    template: "%s | Swaraj Puppalwar",
  },
  description:
    "Portfolio of Swaraj Puppalwar – 17-year-old Full Stack Developer & AI enthusiast building scalable web apps, decentralized systems, and futuristic startups like LioranDB and Hushar Spreadsheet.",
  keywords: [
    "Swaraj Puppalwar",
    "UltronTheAI",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "AI Developer",
    "Indian Programmer",
    "Startup Builder",
    "LioranDB",
  ],
  authors: [{ name: "Swaraj Puppalwar" }],
  creator: "Swaraj Puppalwar",

  openGraph: {
    title: "Swaraj Puppalwar | Developer & Startup Builder",
    description:
      "Explore the portfolio of Swaraj Puppalwar – building AI-powered tools, decentralized databases, and scalable applications.",
    url: "https://swarajpuppalwar.onrender.com/",
    siteName: "Swaraj Puppalwar Portfolio",
    images: [
      {
        url: "/user.png",
        width: 512,
        height: 512,
        alt: "Swaraj Puppalwar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Swaraj Puppalwar | UltronTheAI",
    description:
      "Full Stack Developer & AI Builder creating futuristic software and scalable platforms.",
    images: ["/user.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/user.png",
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
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-zinc-200`}>
        {children}
      </body>
    </html>
  );
}
