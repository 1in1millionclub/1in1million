import FooterSection from "@/components/footer-section";
import { CTASection } from "./_components/CTASection";
import { CurriculumSection } from "./_components/CurriculumSection";
import FAQSection from "./_components/FAQSection";
import { HeroSection } from "./_components/HeroSection";
import { OutcomesSection } from "./_components/OutcomesSection";
import { ProgrammePricingSection } from "./_components/PricingSection";
import { ProblemSection } from "./_components/ProblemSection";
import { USPSection } from "./_components/USPSection";
import { WhoIsThisFor } from "./_components/WhoIsThisFor";

export default function ThreeMonthFlagshipEntrepreneurship() {
  return (
    <div className="flex w-full flex-col items-center justify-start px-2 pt-20 pr-0 pb-16 pl-0 sm:px-4 sm:pt-20 sm:pr-0 sm:pb-12 sm:pl-0 md:px-8 md:pb-16 lg:px-0">
      <HeroSection />
      <ProblemSection />
      <USPSection />
      <WhoIsThisFor />
      <OutcomesSection />
      <CurriculumSection />
      <ProgrammePricingSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}
