import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Business Strategic Assessment | 1in1 Million",
  description: "Connect with the 1in1 Million ecosystem and explore possible strategic alignment for your business. Take the Business Strategic Assessment to scale to the next level.",
  alternates: {
    canonical: "/business-assessment",
    languages: {
      "en-IN": "/business-assessment",
      "ml-IN": "/business-assessment",
      "x-default": "/business-assessment",
    },
  },
  openGraph: {
    title: "Business Strategic Assessment | 1in1 Million",
    description: "Connect with the 1in1 Million ecosystem and explore possible strategic alignment for your business. Take the Business Strategic Assessment to scale to the next level.",
    url: "https://1in1m.com/business-assessment",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Strategic Assessment | 1in1 Million",
    description: "Take the 1in1 Million Business Strategic Assessment to explore alignment and scale your business.",
  }
};

export default function BusinessAssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
