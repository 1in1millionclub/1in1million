import Badge from "@/components/badge";
import { CheckCircle } from "lucide-react";

const outcomes = [
  "Build clarity on your business model",
  "Learn how top founders think and execute",
  "Develop a structured roadmap",
  "Reduce trial-and-error",
  "Build your first version (MVP)",
  "Understand finance, operations, marketing, negotiation",
  "Become mentally disciplined and goal-oriented",
  "Get access to real founders for guidance",
];

export function OutcomesSection() {
  return (
    <div className="border-border flex w-full flex-col items-center justify-center border-b">
      <div className="flex items-center justify-center self-stretch px-4 py-12 md:px-24 md:py-16">
        <div className="flex w-full max-w-[800px] flex-col items-center justify-start gap-8 px-4 py-5 md:px-6">
          <Badge
            icon={<CheckCircle className="h-3.5 w-3.5" />}
            text="90-Day Transformation"
          />
          <h2 className="text-foreground font-monument text-center text-2xl leading-tight text-balance md:text-4xl lg:text-5xl">
            What You Will Achieve in 90 Days
          </h2>
          <p className="text-muted-foreground font-mont text-center text-base md:text-lg">
            By the end of the programme, you will:
          </p>

          <div className="mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="bg-card border-border flex items-start justify-between gap-3 rounded-lg border p-4"
              >
                <span className="text-foreground font-mont font-medium">
                  {outcome}
                </span>
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
              </div>
            ))}
          </div>

          <p className="text-foreground bg-primary/5 font-monument mt-4 rounded-full px-6 py-3 text-center text-lg">
            This is REAL transformation — not hype.
          </p>
        </div>
      </div>
    </div>
  );
}
