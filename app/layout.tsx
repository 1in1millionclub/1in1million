import { Toaster } from "@/components/ui/sonner";
import { mont, monument } from "@/fonts/fonts";
import type { Metadata } from "next";
import type React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "One in One Million Value Driven School of Business",
  description:
    "World’s first value-driven business school. Learn from the best CEOs • Forbes-Listed Builders • Fortune 500 consultants • Academicians. In Malayalam.",
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
