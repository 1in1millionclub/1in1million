import Badge from "@/components/badge";
import { IndianRupee } from "lucide-react";

const features = [
  "3-month flagship programme",
  "Learn from real founders & IIM/NIT professors",
  "Cinematic-quality video content",
  "Live Q&A sessions with experts",
  "Harvard-inspired case studies",
  "Practical templates & SOPs",
  "Community access",
  "EMI options available",
];

export function ProgrammePricingSection() {
  return (
    <div
      id="pricing"
      className="border-border flex w-full flex-col items-center justify-center border-b"
    >
      <div className="flex flex-col items-center justify-center self-stretch py-12 md:py-10">
        <div className="flex w-full max-w-[600px] flex-col items-center justify-start gap-8 px-4 py-5 md:px-6 md:py-10">
          <Badge
            icon={<IndianRupee className="h-3.5 w-3.5" />}
            text="Transparent Pricing"
          />
          <h2 className="font-monument tex-foreground text-center text-2xl leading-tight text-balance md:text-4xl lg:text-5xl">
            Investment in Your Future
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center self-stretch border-t border-b border-[rgba(55,50,47,0.12)]">
          <div className="flex w-full items-start justify-center">
            {/* Left Decorative Pattern */}
            <div className="relative hidden w-1/3 self-stretch overflow-hidden md:block">
              <div className="absolute top-[-120px] left-[-58px] flex w-[800px] flex-col items-start justify-start">
                {Array.from({ length: 200 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-4 origin-top-left -rotate-45 self-stretch outline-[0.5px] outline-offset-[-0.25px] outline-[rgba(55,50,47,0.5)]"
                  ></div>
                ))}
              </div>
            </div>

            {/* Pricing Cards Container */}
            <div className="flex flex-1 flex-col items-center justify-center gap-6 py-12 md:py-0">
              <div className="bg-background flex max-w-full flex-1 flex-col items-start justify-start gap-12 self-stretch overflow-hidden border border-x border-y-0 border-[rgba(50,45,43,0.12)] px-6 py-5 md:max-w-none">
                <div className="flex flex-col items-start justify-start gap-2 self-stretch">
                  <div className="flex flex-col items-start justify-start gap-1">
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-muted-foreground font-mont text-sm">
                        ₹30,250
                      </span>
                      <span className="text-muted-foreground font-mont text-xs">
                        + GST
                      </span>
                    </div>
                    <div className="font-monument text-foreground relative flex h-[60px] items-center text-5xl leading-[60px] font-normal">
                      <span className="flex items-center transition-all duration-500">
                        ₹35,695
                      </span>
                    </div>
                    <div className="font-mont text-muted-foreground text-sm font-medium">
                      All inclusive
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start justify-start gap-2 self-stretch">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-start gap-[13px] self-stretch"
                    >
                      <div className="relative flex h-4 w-4 items-center justify-center">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="#9CA3AF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="font-mont text-muted-foreground flex-1 text-[12.5px] leading-5 font-normal">
                        {feature}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-foreground text-background font-monument relative flex items-center justify-center self-stretch overflow-hidden rounded-[99px] px-4 py-[10px] shadow-[0px_2px_4px_rgba(55,50,47,0.5)]">
                  <div className="absolute top-[-0.5px] left-0 h-[41px] w-full bg-linear-to-b from-[rgba(255,255,255,0.20)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                  <div className="flex flex-col justify-center text-[13px] leading-5 font-medium">
                    Join the Community{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative hidden w-1/3 self-stretch overflow-hidden md:block">
              <div className="absolute top-[-120px] left-[-58px] flex w-[800px] flex-col items-start justify-start">
                {Array.from({ length: 200 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-4 origin-top-left -rotate-45 self-stretch outline-[0.5px] outline-offset-[-0.25px] outline-[rgba(55,50,47,0.5)]"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 pt-10 text-center">
          <h3 className="text-foreground font-mont text-lg font-semibold">
            Why This Pricing Makes Sense
          </h3>
          <ul className="text-muted-foreground font-mont space-y-2 text-sm">
            <li>International programs cost ₹80,000–₹2,00,000</li>
            <li>Most Indian programs give no access to real entrepreneurs</li>
            <li>
              We give real founders + cinematic content + live Q&A + case
              studies
            </li>
          </ul>
          <p className="text-foreground font-mont font-medium">
            One of the highest-value entrepreneurship programs in India.
          </p>
        </div>
      </div>
    </div>
  );
}
