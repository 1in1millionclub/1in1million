import { CheckCircle } from "lucide-react";

const outcomes = [
  "Clear understanding of how businesses actually work",
  "Confidence to take business decisions",
  "Ability to structure and scale ideas",
  "Ethical clarity in entrepreneurship",
  "Access to a powerful founder network",
  "A long-term entrepreneurial mindset",
];

export function TransformationSection() {
  return (
    <div className="border-border flex w-full flex-col items-center justify-center border-b">
      <div className="flex items-center justify-center self-stretch px-4 py-12 md:px-24 md:py-16">
        <div className="flex w-full max-w-[800px] flex-col items-center justify-start gap-8 px-4 py-5 md:px-6">
          {/* <Badge
            icon={<CheckCircle className="h-3.5 w-3.5" />}
            text="90-Day Transformation"
          /> */}
          <h2 className="text-foreground font-monument text-center text-2xl leading-tight text-balance md:text-4xl lg:text-5xl">
            This Is Not Just a Course. It’s a Transformation.
          </h2>

          <div className="mt-4 grid w-full grid-cols-1 gap-4">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="bg-card border-border flex items-start gap-3 rounded-lg border p-4"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#FE6168]" />
                <span className="text-foreground font-mont font-medium">
                  {outcome}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
