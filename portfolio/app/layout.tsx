import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Comic_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const comicNeue = Comic_Neue({
  variable: "--font-sketch",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://swaraj.lioransolutions.com"),
  title: {
    default: "Swaraj Puppalwar — Software Engineer & Infrastructure Builder",
    template: "%s | Swaraj Puppalwar",
  },
  description:
    "Full-stack software engineer and Founder & CTO at Lioran Group, building databases, object storage, backend systems and developer infrastructure with Rust and TypeScript.",
  keywords: [
    "Swaraj Puppalwar",
    "UltronTheAI",
    "Software Engineer",
    "Developer Infrastructure",
    "Rust Developer",
    "TypeScript",
    "Database Engineer",
    "LioranDB",
    "Lioran S3",
    "Lioran Bastion",
    "Lioran Group",
    "Systems Engineering",
    "Backend Engineer",
  ],
  authors: [{ name: "Swaraj Puppalwar", url: "https://swaraj.lioransolutions.com" }],
  creator: "Swaraj Puppalwar",
  publisher: "Lioran Developer Solutions",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://swaraj.lioransolutions.com",
    title: "Swaraj Puppalwar — Software Engineer & Infrastructure Builder",
    description:
      "Full-stack software engineer and Founder & CTO at Lioran Group. Building databases, storage engines, backend platforms and developer tooling with Rust and TypeScript.",
    siteName: "Swaraj Puppalwar Portfolio",
    images: [
      {
        url: "/user.png",
        width: 800,
        height: 800,
        alt: "Swaraj Puppalwar - Software Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Swaraj Puppalwar — Software Engineer & Infrastructure Builder",
    description:
      "Full-stack software engineer and Founder & CTO at Lioran Group, building databases, object storage, backend systems and developer infrastructure with Rust and TypeScript.",
    creator: "@PuppalwarSwaraj",
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
  // Structured data (Schema.org Person & Organization)
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://swaraj.lioransolutions.com/#person",
        name: "Swaraj Puppalwar",
        alternateName: "UltronTheAI",
        jobTitle: "Founder & Chief Technology Officer",
        worksFor: {
          "@type": "Organization",
          name: "Lioran Group",
          url: "https://lioran.group",
        },
        url: "https://swaraj.lioransolutions.com",
        sameAs: [
          "https://github.com/UltronTheAI",
          "https://github.com/LioranGroupOfficial",
          "https://twitter.com/PuppalwarSwaraj",
        ],
        knowsAbout: [
          "Rust",
          "TypeScript",
          "Database Architecture",
          "Object Storage",
          "Distributed Systems",
          "Developer Infrastructure",
          "Systems Engineering",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://swaraj.lioransolutions.com/#website",
        url: "https://swaraj.lioransolutions.com",
        name: "Swaraj Puppalwar — Software Engineer Portfolio",
        publisher: {
          "@id": "https://swaraj.lioransolutions.com/#person",
        },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${jetbrainsMono.variable} ${comicNeue.variable} font-sans antialiased bg-[#FFFFFF] text-[#111111] selection:bg-[#111111] selection:text-[#FFFFFF] min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
