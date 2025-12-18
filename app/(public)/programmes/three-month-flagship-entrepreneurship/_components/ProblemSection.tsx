import { GlowEffect } from "@/components/motion-primitives/glow-effect";
import { TextShimmerWave } from "@/components/motion-primitives/text-shimmer-wave";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, MessageCircleWarning } from "lucide-react";

const problems = [
  'Most "business coaches" have never built a business',
  "YouTube gives random, scattered advice",
  "Courses from foreign creators don't fit Kerala/Indian markets",
  "You want RESULTS, not motivation",
  "You fear wasting ₹30,000 on yet another theory program",
];

export function ProblemSection() {
  return (
    <div className="border-border flex w-full flex-col items-center justify-center border-t">
      <div className="border-border flex items-center justify-center self-stretch border-b px-4 py-12 md:px-24 md:py-16">
        <div className="flex w-full max-w-[700px] flex-col items-center justify-start gap-6 px-4 py-5 md:px-6">
          <Badge variant="secondary">
            <AlertCircle />
            <span>The Problem We Solve</span>
          </Badge>

          <h2 className="text-foreground font-monument text-center text-2xl leading-tight font-normal tracking-tight text-balance md:text-4xl lg:text-5xl">
            If you&apos;re an aspiring entrepreneur, you already know this
          </h2>

          <div className="mt-4 w-full space-y-4">
            {problems.map((problem, index) => (
              <div key={index} className="relative">
                <GlowEffect
                  colors={["#b00222", "#FF2E54"]}
                  mode="pulse"
                  blur="softest"
                />
                <div className="bg-card border-destructive/20 relative z-10 flex items-start justify-between gap-3 rounded-lg border p-4">
                  <span className="text-foreground font-mont font-medium">
                    {problem}
                  </span>
                  <MessageCircleWarning className="text-destructive mt-0.5 h-5 w-5 shrink-0" />
                </div>
              </div>
            ))}
          </div>
          <TextShimmerWave
            className="text-foreground font-mont mt-6 text-center text-lg font-semibold [--base-color:#0D74CE] [--base-gradient-color:#5EB1EF] md:text-xl"
            duration={1}
            spread={1}
            zDistance={1}
            scaleDistance={1.1}
            rotateYDistance={20}
          >
            So we created something Kerala has never seen before.
          </TextShimmerWave>
        </div>
      </div>
    </div>
  );
}
