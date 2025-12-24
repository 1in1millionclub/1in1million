import { BackgroundBeams } from "@/components/background-beams";
import { GlowEffect } from "@/components/motion-primitives/glow-effect";
import { Badge } from "@/components/ui/badge";
export function HeroSection() {
  return (
    <>
      <div className="relative flex h-full min-h-[70svh] w-full flex-col justify-center gap-3 px-6 py-20 sm:gap-4 md:items-center md:gap-5 lg:gap-6">
        <div className="flex flex-col justify-center gap-4 sm:gap-5 md:items-center md:gap-6 lg:gap-8">
          <h1 className="text-foreground font-monument w-full max-w-[800px] text-left text-3xl font-normal tracking-wide sm:text-center sm:text-4xl md:px-0 md:text-5xl lg:text-7xl">
            What Changes for You in <span className="font-bold">2026</span>
            <br />
            <span className="font-bold text-[#FE6168]">
              When You Truly Understand Business?
            </span>
          </h1>
          <Badge>First time in Malayalam.</Badge>
          <div className="text-muted-foreground font-mont flex w-full max-w-lg flex-col justify-center text-sm leading-[1.4] font-medium sm:text-base sm:leading-[1.45] md:text-center md:text-xl md:leading-normal lg:text-lg lg:leading-7">
            Learn real entrepreneurship from founders, CEOs, consultants, and
            academicians who have built businesses at scale with values and
            ethics.
          </div>
        </div>
        <div className="relative mt-5 rounded-full">
          <div className="relative z-10 flex h-12 items-center justify-center overflow-hidden rounded-full bg-[#FE6168] px-6 py-2 sm:h-11 sm:px-8 sm:py-1.5 md:h-12 md:px-10 lg:px-12">
            <div className="text-foreground font-monument flex flex-col justify-center text-sm leading-5 font-medium sm:text-base md:text-[15px]">
              Join the Community
            </div>
            <a
              href="https://app.youform.com/forms/cnulvkge"
              className="absolute inset-0 z-10"
              aria-label="Join the community"
            />
          </div>
          <GlowEffect
            colors={["#b00222", "#FE6168"]}
            mode="rotate"
            blur="medium"
            className="rounded-full"
          />
        </div>
        {/* <div className="relative mt-1 rounded-full">
          <div className="bg-foreground relative z-10 flex h-12 items-center justify-center overflow-hidden rounded-full px-6 py-2 sm:h-11 sm:px-8 sm:py-1.5 md:h-12 md:px-10 lg:px-12">
            <div className="text-primary-foreground font-monument flex justify-center gap-2 text-sm leading-5 font-medium sm:text-base md:text-[15px]">
              Program Brochure <DownloadCloud />
            </div>
            <Link
              href="/programmes/three-month-flagship-entrepreneurship"
              className="absolute inset-0 z-10"
            />
          </div>
        </div> */}
        <BackgroundBeams className="-top-[85px] h-[calc(100%+85px)]" />
      </div>
    </>
  );
}
