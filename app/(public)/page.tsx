import FooterSection from "@/components/footer-section";
import { HeroSection } from "./_components/HeroSection";

export default function ThreeMonthFlagshipEntrepreneurship() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "One in One Million Value Driven School of Business",
    url: "https://oneinonemillion.com",
    logo: "https://oneinonemillion.com/web-app-manifest-512x512.png",
    description: "World’s first value-driven business school in Malayalam.",
    sameAs: [
      "https://www.instagram.com/1in1m.business.school/"
    ]
  };

  return (
    <div className="flex w-full flex-col items-center justify-start">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <FooterSection />
    </div>
  );
}
