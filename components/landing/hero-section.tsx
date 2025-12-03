/* eslint-disable @next/next/no-img-element */

export function HeroSection() {
  return (
    <>
      <div className="flex w-full max-w-[937px] flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:w-[937px] lg:gap-6">
        <div className="flex flex-col items-center justify-center gap-4 self-stretch rounded-[3px] sm:gap-5 md:gap-6 lg:gap-8">
          <div className="flex w-full max-w-[748.71px] flex-col justify-center px-2 text-center font-serif text-[32px] leading-[1.1] font-normal text-[#37322F] sm:px-4 sm:text-[36px] sm:leading-[1.15] md:px-0 md:text-[52px] md:leading-[1.2] lg:w-[748.71px] lg:text-[80px] lg:leading-24">
            Learn Business from
            <br />
            Real Entrepreneurs
          </div>
          <div className="flex w-full max-w-[310px] flex-col justify-center px-2 text-center font-sans text-sm leading-[1.4] font-medium text-[rgba(55,50,47,0.80)] sm:px-4 sm:text-lg sm:leading-[1.45] md:max-w-[506.08px] md:px-0 md:text-xl md:leading-normal lg:w-[506.08px] lg:text-lg lg:leading-7">
            Learn business from those who built it &{" "}
            <br className="hidden sm:block" />
            Scaled it to the next level.
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-6 mb-10 flex w-full max-w-[497px] flex-col items-center justify-center gap-6 sm:mt-8 sm:gap-8 md:mt-10 md:mb-32 md:gap-10 lg:mt-12 lg:w-[497px] lg:gap-12">
        <div className="flex items-center justify-start gap-4 backdrop-blur-[8.25px]">
          <div className="relative flex h-10 items-center justify-center overflow-hidden rounded-full bg-[#37322F] px-6 py-2 shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] sm:h-11 sm:px-8 sm:py-1.5 md:h-12 md:px-10 lg:px-12">
            <div className="absolute top-[-0.5px] left-0 h-[41px] w-20 bg-linear-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply sm:w-24 md:w-28 lg:w-44"></div>
            <div className="flex flex-col justify-center font-sans text-sm leading-5 font-medium text-white sm:text-base md:text-[15px]">
              Know More
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute top-[232px] left-1/2 z-0 -translate-x-1/2 transform sm:top-[248px] md:top-[264px] lg:top-80">
        <img
          src="/mask-group-pattern.svg"
          alt=""
          className="h-auto w-[936px] opacity-30 mix-blend-multiply sm:w-[1404px] sm:opacity-40 md:w-[2106px] md:opacity-50 lg:w-[2808px]"
          style={{
            filter: "hue-rotate(15deg) saturate(0.7) brightness(1.2)",
          }}
        />
      </div>
    </>
  );
}
