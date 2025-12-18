import { mont, monument } from "@/fonts/fonts";
import type { Metadata } from "next";
import type React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "1in1Million - Be the One in a Million with Values.",
  description: "",
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
      <body className="font-mont antialiased">{children}</body>
    </html>
  );
}
