import Badge from "@/components/badge";

export function HeroSection() {
  return (
    <div className="flex w-full flex-col items-center justify-start px-4 pt-24 pb-8 md:px-8 md:pb-16">
      <div className="flex w-full max-w-[937px] flex-col items-center justify-center gap-4 md:gap-6">
        <Badge
          icon={
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1L8.5 5.5L13 7L8.5 8.5L7 13L5.5 8.5L1 7L5.5 5.5L7 1Z"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
              />
            </svg>
          }
          text="Kerala's Premier Entrepreneurship Community"
        />

        <div className="flex flex-col items-center justify-center gap-6 self-stretch rounded-[3px] font-serif md:gap-8">
          <h1 className="text-foreground font-display w-full max-w-[800px] px-2 text-center text-3xl leading-[1.1] font-normal sm:text-4xl md:px-0 md:text-5xl lg:text-7xl">
            Euntraprunes Community
            <br />
            <span className="font-bold text-[#FE6168]">
              Built for the Ambitious
            </span>
          </h1>
          <p className="text-muted-foreground font-body w-full max-w-[550px] px-2 text-center font-sans text-base leading-relaxed font-medium text-balance md:px-0">
            The 1in1Million flagship entrepreneurship programme for 18–32 year
            old Malayali entrepreneurs. Learn from real founders, not coaches.
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-8 flex w-full max-w-[497px] flex-col items-center justify-center gap-6 md:mt-12 md:gap-12">
        <div className="flex items-center justify-center gap-4">
          <a
            href="#pricing"
            className="bg-primary flex h-11 items-center justify-center overflow-hidden rounded-full px-8 py-2 shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] transition-opacity hover:opacity-90 md:h-12 md:px-12"
          >
            <span className="text-primary-foreground font-body text-sm font-medium md:text-base">
              Join the Community
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
