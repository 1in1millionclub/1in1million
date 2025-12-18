"use client";

export default function CTASection() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-2 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center gap-6 self-stretch border-b border-[rgba(55,50,47,0.5)] px-6 py-12 md:px-24 md:py-12">
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <div className="relative h-full w-full">
            {Array.from({ length: 300 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-4 w-full origin-top-left -rotate-45 outline-[0.5px] outline-offset-[-0.25px] outline-[rgba(3,7,18,0.08)]"
                style={{
                  top: `${i * 16 - 120}px`,
                  left: "-100%",
                  width: "300%",
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="relative z-20 flex w-full max-w-[586px] flex-col items-center justify-start gap-6 overflow-hidden rounded-lg px-6 py-5 md:py-8">
          <div className="font-monument flex flex-col items-start justify-start gap-3 self-stretch">
            <div className="text-foreground flex flex-col justify-center self-stretch text-center text-3xl leading-tight font-normal md:text-5xl md:leading-14">
              Become the <br /> One in One Million.
            </div>
            <div className="text-muted-foreground font-mont self-stretch text-center text-sm font-medium text-balance md:text-base">
              Join Kerala’s first cinematic entrepreneurship
              <br />
              learning platform taught only by real entrepreneurs.
            </div>
          </div>
          <div className="flex w-full max-w-[497px] flex-col items-center justify-center gap-12">
            <div className="flex items-center justify-start gap-4">
              <div className="bg-foreground relative flex h-10 cursor-pointer items-center justify-center overflow-hidden rounded-full px-12 py-1.5 shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] transition-colors hover:bg-[#2A2520]">
                <div className="absolute top-0 left-0 h-[41px] w-44 bg-linear-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                <div className="text-primary-foreground font-monument flex flex-col justify-center text-[13px] leading-5 font-medium">
                  Know More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
