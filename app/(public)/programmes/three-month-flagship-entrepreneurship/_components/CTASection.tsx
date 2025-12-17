export function CTASection() {
  return (
    <div className="w-full relative overflow-hidden flex flex-col justify-center items-center">
      <div className="self-stretch px-6 md:px-24 py-12 md:py-20 border-t border-b border-border flex justify-center items-center gap-6 relative z-10">
        {/* Background pattern */}
        <div className="absolute inset-0 w-full h-full overflow-hidden opacity-30">
          <div className="w-full h-full relative">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-4 w-full rotate-[-45deg] origin-top-left border-t border-border"
                style={{
                  top: `${i * 16 - 120}px`,
                  left: "-100%",
                  width: "300%",
                }}
              />
            ))}
          </div>
        </div>

        <div className="w-full max-w-[600px] px-6 py-8 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-6 relative z-20">
          <div className="self-stretch flex flex-col justify-start items-center gap-4">
            <h2 className="text-center text-foreground text-3xl md:text-5xl font-semibold leading-tight font-display tracking-tight">
              Become the One in One Million
            </h2>
            <p className="text-center text-muted-foreground text-base md:text-lg leading-7 font-body font-medium">
              Learn the real game of business from people who have played it — and won it.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#pricing"
              className="h-12 px-10 bg-primary shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center cursor-pointer hover:opacity-90 transition-opacity"
            >
              <span className="text-primary-foreground text-sm font-medium font-body">
                Join the Community
              </span>
            </a>
          </div>
          
          {/* Voice of Customer */}
          <div className="mt-8 p-6 bg-card rounded-lg border border-border max-w-[500px]">
            <p className="text-muted-foreground italic text-center font-body">
              "I don't want motivational talk… I want someone who has actually built a business to show me how to do it, step by step, without losing my values."
            </p>
            <p className="text-foreground text-center mt-4 text-sm font-semibold font-body">
              — That's exactly what we deliver.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
