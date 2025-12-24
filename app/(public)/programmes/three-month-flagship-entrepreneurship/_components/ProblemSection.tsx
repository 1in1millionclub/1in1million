import { GlowEffect } from "@/components/motion-primitives/glow-effect";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, BadgeCheck } from "lucide-react";

export function ProblemSection() {
  return (
    <div
      id="problem-section"
      className="border-border flex w-full flex-col items-center justify-center border-t"
    >
      <div className="border-border flex items-center justify-center self-stretch border-b px-4 py-12 md:px-24 md:py-16">
        <div className="flex w-full max-w-[700px] flex-col items-center justify-start gap-6 px-4 py-5 md:px-6">
          <Badge variant="secondary">
            <span className="mt-1 block">Why 1in1Million Exists</span>
            <AlertCircle />
          </Badge>

          <h2 className="text-foreground font-monument text-center text-2xl leading-tight font-normal tracking-tight text-balance md:text-4xl lg:text-5xl">
            Why Most People Never Truly Learn Business
          </h2>

          <div className="mt-4 w-full space-y-4">
            <div className="relative">
              <GlowEffect
                colors={["#b00222", "#FF2E54"]}
                mode="pulse"
                blur="softest"
              />
              <div className="bg-card border-destructive/20 relative z-10 flex items-start gap-3 rounded-lg border p-4">
                <AlertCircle className="text-destructive mt-0.5 h-5 w-5 shrink-0" />
                <span className="text-foreground font-mont font-medium">
                  Schools teach theory.
                </span>
              </div>
            </div>
            <div className="relative">
              <GlowEffect
                colors={["#b00222", "#FF2E54"]}
                mode="pulse"
                blur="softest"
              />
              <div className="bg-card border-destructive/20 relative z-10 flex items-start gap-3 rounded-lg border p-4">
                <AlertCircle className="text-destructive mt-0.5 h-5 w-5 shrink-0" />
                <span className="text-foreground font-mont font-medium">
                  Motivation talks give inspiration.
                </span>
              </div>
            </div>
            <div className="relative">
              <GlowEffect
                colors={["#c9c9c9", "#fff"]}
                mode="pulse"
                blur="softest"
              />
              <div className="bg-card relative z-10 flex items-start gap-3 rounded-lg border border-white/20 p-4">
                <BadgeCheck className="text-foreground mt-0.5 h-5 w-5 shrink-0" />
                <span className="text-foreground font-mont font-medium">
                  But real business understanding comes from structured
                  learning, real stories, and guided application.
                </span>
              </div>
            </div>
            <div className="relative">
              <GlowEffect
                colors={["#c9c9c9", "#fff"]}
                mode="pulse"
                blur="softest"
              />
              <div className="bg-card relative z-10 flex items-start gap-3 rounded-lg border border-white/20 p-4">
                <BadgeCheck className="text-foreground mt-0.5 h-5 w-5 shrink-0" />
                <span className="text-foreground font-mont font-medium">
                  1in1Million was created to bridge this gap by delivering
                  foundational business education in a cinematic, practical, and
                  mentor-led format, in Malayalam
                </span>
              </div>
            </div>
            {/* {problems.map((problem, index) => (
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
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}
