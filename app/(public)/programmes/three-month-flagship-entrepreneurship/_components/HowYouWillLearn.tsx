import { GlowEffect } from "@/components/motion-primitives/glow-effect";
import { Check } from "lucide-react";

const profiles = [
  "Real entrepreneurship stories & case studies",
  "Cinematic, practical learning experiences",
  "Live sessions with mentors & experts",
  "Guided discussions and problem-solving",
  "Community-based learning",
  "A capstone project to apply what you learn",
  "Continuous mentor feedback & support",
];

export function HowYouWillLearn() {
  return (
    <div className="border-border flex w-full flex-col items-center justify-center border-b">
      <div className="flex items-center justify-center self-stretch px-4 py-12 md:px-24 md:py-16">
        <div className="flex w-full max-w-[800px] flex-col items-center justify-start gap-8 px-4 py-5 md:px-6">
          {/* <Badge
            icon={<Target className="h-3.5 w-3.5" />}
            text="Who This Is For"
          /> */}
          <h2 className="text-foreground font-monument text-center text-2xl leading-tight tracking-tight text-balance md:text-4xl lg:text-5xl">
            How You Learn
          </h2>
          <div className="mt-4 w-full space-y-4">
            {profiles.map((profile, index) => (
              <div key={index} className="relative">
                <GlowEffect
                  colors={["#b00222", "#FF2E54"]}
                  mode="pulse"
                  blur="softest"
                />
                <div className="bg-card border-destructive/20 relative z-10 flex items-start gap-3 rounded-lg border p-4">
                  <Check className="text-destructive mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-foreground font-mont font-medium">
                    {profile}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
