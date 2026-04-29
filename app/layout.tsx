import { Toaster } from "@/components/ui/sonner";
import { mont, monument } from "@/fonts/fonts";
import type { Metadata } from "next";
import type React from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://oneinonemillion.com"),
  title: "One in One Million Value Driven School of Business",
  description:
    "World’s first value-driven business school. Learn from the best CEOs • Forbes-Listed Builders • Fortune 500 consultants • Academicians. In Malayalam.",
  keywords: [
    "Business School",
    "Entrepreneurship",
    "Value Driven",
    "Kerala",
    "Malayalam Business Course",
    "CEOs",
    "1in1Million",
  ],
  authors: [{ name: "1in1Million" }],
  creator: "1in1Million",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://oneinonemillion.com",
    siteName: "One in One Million Value Driven School of Business",
    title: "One in One Million Value Driven School of Business",
    description:
      "World’s first value-driven business school. Learn from the best CEOs • Forbes-Listed Builders • Fortune 500 consultants • Academicians. In Malayalam.",
    images: [
      {
        url: "/web-app-manifest-512x512.png", // Fallback, consider adding a specific OG image later
        width: 512,
        height: 512,
        alt: "1in1Million Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One in One Million Value Driven School of Business",
    description:
      "World’s first value-driven business school. Learn from the best CEOs • Forbes-Listed Builders • Fortune 500 consultants • Academicians. In Malayalam.",
    images: ["/web-app-manifest-512x512.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${mont.variable} ${monument.variable} dark antialiased`}
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="1in1m" />
      </head>
      <body className="font-mont antialiased">
        <Toaster />
        {children}
      </body>
    </html>
  );
}
