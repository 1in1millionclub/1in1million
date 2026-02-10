import FooterSection from "@/components/footer-section";
import { CTASection } from "./_components/CTASection";
import { HeroSection } from "./_components/HeroSection";
import { HowYouWillLearn } from "./_components/HowYouWillLearn";
import { LearningTopicsSection } from "./_components/LearningTopicsSection";
import { ProblemSection } from "./_components/ProblemSection";
import { TransformationSection } from "./_components/TransformationSection";

export default function ThreeMonthFlagshipEntrepreneurship() {
  return (
    <div className="flex w-full flex-col items-center justify-start">
      <HeroSection />
      <ProblemSection />
      {/* <USPSection /> */}
      <HowYouWillLearn />
      <LearningTopicsSection />
      <CTASection />
      {/* <TestimonialsCalloutSection /> */}
      <TransformationSection />
      <FooterSection />
    </div>
  );
}
