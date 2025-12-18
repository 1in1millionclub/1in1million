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
              Become the One in One Million
            </h2>
            <p className="text-muted-foreground font-mont text-center text-base leading-7 font-medium md:text-lg">
              Learn the real game of business from people who have played it —
              and won it.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="bg-primary flex h-12 cursor-pointer items-center justify-center overflow-hidden rounded-full px-10 shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] transition-opacity hover:opacity-90"
            >
              <span className="text-primary-foreground font-monument text-sm font-medium">
                Join the Community
              </span>
            </a>
          </div>

          {/* Voice of Customer */}
          <div className="bg-card border-border mt-8 max-w-[500px] rounded-lg border p-6">
            <p className="text-muted-foreground font-mont text-center italic">
              &quot;I don&apos;t want motivational talk… I want someone who has
              actually built a business to show me how to do it, step by step,
              without losing my values.&apos;
            </p>
            <p className="text-foreground font-mont mt-4 text-center text-sm font-semibold">
              — That&apos;s exactly what we deliver.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
