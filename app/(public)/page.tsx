"use client";

import FooterSection from "@/components/footer-section";
import AboutCompany from "@/components/landing/about-company";
import CTASection from "@/components/landing/cta-section";
import { HeroSection } from "@/components/landing/hero-section";
import { useEffect, useRef } from "react";

export default function LandingPage() {
  const mountedRef = useRef(true);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-start px-2 pt-20 pr-0 pb-16 pl-0 sm:px-4 sm:pt-20 sm:pr-0 sm:pb-12 sm:pl-0 md:px-8 md:pt-24 md:pb-16 lg:px-0 lg:pt-[216px]">
      <HeroSection />
      <AboutCompany />
      <CTASection />
      <FooterSection />
    </div>
  );
}
