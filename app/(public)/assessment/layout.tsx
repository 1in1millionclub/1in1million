import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Assessment | One in One Million",
  alternates: {
    canonical: "/assessment",
    languages: {
      "en-IN": "/assessment",
      "ml-IN": "/assessment",
      "x-default": "/assessment",
    },
  },
};

export default function AssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
