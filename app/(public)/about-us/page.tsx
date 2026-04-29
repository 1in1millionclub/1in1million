import AboutCompany from "@/components/landing/about-company";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | One in One Million",
  alternates: {
    canonical: "/about-us",
    languages: {
      "en-IN": "/about-us",
      "ml-IN": "/about-us",
      "x-default": "/about-us",
    },
  },
};

export default function AboutUsPage() {
  return <AboutCompany />;
}
