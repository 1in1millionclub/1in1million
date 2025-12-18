import Link from "next/link";
import { BackgroundBeams } from "../background-beams";

export function HeroSection() {
  return (
    <div className="relative flex h-full min-h-[70svh] w-full flex-col justify-center gap-3 px-6 py-20 sm:gap-4 md:items-center md:gap-5 lg:gap-6">
      <div className="flex flex-col justify-center gap-4 sm:gap-5 md:items-center md:gap-6 lg:gap-8">
        <div className="text-foreground font-monument flex w-full flex-col justify-center text-4xl leading-[1.1] font-extrabold sm:text-center sm:text-6xl sm:leading-[1.15] md:text-[64px] md:leading-[1.2] lg:text-[80px] lg:leading-24">
          Learn from <br />
          <span className="font-bold text-[#FE6168]">the Best.</span>
        </div>
        <div className="text-muted-foreground font-mont flex w-full flex-col justify-center text-sm leading-[1.4] font-medium sm:text-base sm:leading-[1.45] md:text-center md:text-xl md:leading-normal lg:text-lg lg:leading-7">
          Learn business from those who built it &<br />
          Scaled it to the next level.
        </div>
      </div>
      <div className="bg-foreground relative mt-5 flex h-10 items-center justify-center overflow-hidden rounded-full px-6 py-2 sm:h-11 sm:px-8 sm:py-1.5 md:h-12 md:px-10 lg:px-12">
        <div className="text-primary-foreground font-monument flex flex-col justify-center text-sm leading-5 font-medium sm:text-base md:text-[15px]">
          Know More
        </div>
        <Link
          href="/programmes/three-month-flagship-entrepreneurship"
          className="absolute inset-0 z-10"
        />
      </div>
      <BackgroundBeams className="-top-[85px] h-[calc(100%+85px)]" />
    </div>
  );
}
