import Badge from "@/components/badge";
import { X } from "lucide-react";

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
          <Badge
            icon={
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="7"
                  cy="7"
                  r="5.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M7 4V7.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <circle cx="7" cy="10" r="0.75" fill="currentColor" />
              </svg>
            }
            text="The Problem We Solve"
          />
          <h2 className="text-foreground text-center font-serif text-2xl leading-tight font-normal tracking-tight text-balance md:text-4xl lg:text-5xl">
            If you&apos;re an aspiring entrepreneur, you already know this
          </h2>

          <div className="mt-4 w-full space-y-4">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-card border-border flex items-start gap-3 rounded-lg border p-4"
              >
                <X className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
                <span className="text-muted-foreground font-body font-medium">
                  {problem}
                </span>
              </div>
            ))}
          </div>

          <p className="text-foreground font-body mt-6 text-center text-lg font-semibold md:text-xl">
            So we created something Kerala has never seen before.
          </p>
        </div>
      </div>
    </div>
  );
}
