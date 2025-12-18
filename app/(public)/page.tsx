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
    <div className="flex w-full flex-col items-center justify-start">
      <HeroSection />
      <AboutCompany />
      <CTASection />
      <FooterSection />
    </div>
  );
}
