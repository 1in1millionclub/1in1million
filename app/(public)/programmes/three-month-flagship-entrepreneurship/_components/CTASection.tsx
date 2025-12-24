import { GlowEffect } from "@/components/motion-primitives/glow-effect";
import { FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export function CTASection() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <div className="border-border relative z-10 flex items-center justify-center gap-6 self-stretch border-t border-b px-6 py-12 md:px-24 md:py-20">
        {/* Background pattern */}
        {/* <div className="absolute inset-0 h-full w-full overflow-hidden opacity-30">
          <div className="relative h-full w-full">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className="border-border absolute h-4 w-full origin-top-left -rotate-45 border-t"
                style={{
                  top: `${i * 16 - 120}px`,
                  left: "-100%",
                  width: "300%",
                }}
              />
            ))}
          </div>
        </div> */}

        <div className="relative z-20 flex w-full max-w-[600px] flex-col items-center justify-start gap-6 overflow-hidden rounded-lg px-6 py-8">
          <div className="flex flex-col items-center justify-start gap-4 self-stretch">
            <h2 className="text-foreground font-monument text-center text-3xl leading-tight tracking-tight md:text-5xl">
              Be Among the One in One Million
            </h2>
            <p className="text-muted-foreground font-mont text-center text-base leading-7 font-medium text-balance md:text-lg">
              Moments like this come once. <br />
              Now is that moment. <br />
              Be part of the very first batch of this first-ever learning
              experience.
            </p>
          </div>

          <div className="relative mt-5 w-full max-w-xs rounded-full">
            <div className="relative z-10 flex h-12 items-center justify-center overflow-hidden rounded-full bg-[#FE6168] px-6 py-2 sm:h-11 sm:px-8 sm:py-1.5 md:h-12 md:px-10 lg:px-12">
              <div className="text-foreground font-monument flex flex-col justify-center text-sm leading-5 font-medium sm:text-base md:text-[15px]">
                Apply now
              </div>
              <a
                href="https://app.youform.com/forms/cnulvkge"
                className="absolute inset-0 z-10"
                aria-label="Apply now"
              />
            </div>
            <GlowEffect
              colors={["#b00222", "#FE6168"]}
              mode="rotate"
              blur="medium"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="whatsapp://send?phone=+918137981287"
              className="bg-primary flex h-12 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full px-10 shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] transition-opacity hover:opacity-90"
            >
              <span className="text-primary-foreground font-monument text-sm font-medium">
                WhatsApp Us
              </span>
              <FaWhatsapp className="text-primary-foreground size-5" />
            </a>
          </div>
          <div className="text-muted-foreground font-mont flex items-center justify-center gap-2">
            Follow{" "}
            <a
              href="https://www.instagram.com/1in1m.club/"
              target="_blank"
              className="text-foreground underline"
            >
              @1in1m.club
            </a>{" "}
            on Instagram <FaInstagram />
          </div>
          <a href="tel:+918137981287" className="flex items-center gap-2">
            <FaPhoneAlt /> +91 81379 81287
          </a>
        </div>
      </div>
    </div>
  );
}
