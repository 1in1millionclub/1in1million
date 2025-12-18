import Badge from "@/components/badge";
import { BookOpen } from "lucide-react";

const modules = [
  "Leadership",
  "Founder Mindset & Spiritual Intelligence",
  "Organizational Behavior",
  "People Management",
  "Finance I",
  "Finance II",
  "Sales",
  "Negotiation",
  "Operational Excellence",
  "System Building & Management",
  "Marketing, Strategic Growth & Expansion",
  "Practical AI for Business",
];

export function CurriculumSection() {
  return (
    <div className="border-border flex w-full flex-col items-center justify-center border-b">
      <div className="flex items-center justify-center self-stretch px-4 py-12 md:px-24 md:py-16">
        <div className="flex w-full max-w-[900px] flex-col items-center justify-start gap-8 px-4 py-5 md:px-6">
          <Badge
            icon={<BookOpen className="h-3.5 w-3.5" />}
            text="Curriculum Overview"
          />
          <h2 className="text-foreground font-monument text-center text-2xl leading-tight text-balance md:text-4xl lg:text-5xl">
            12 Comprehensive Modules
          </h2>

          <div className="mt-4 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-card border-border hover:border-primary/50 flex items-center gap-3 rounded-lg border p-4 transition-colors"
              >
                <span className="bg-primary text-primary-foreground font-monument flex size-8 shrink-0 items-center justify-center rounded-full text-sm">
                  {index + 1}
                </span>
                <span className="text-foreground font-mont text-sm font-medium">
                  {module}
                </span>
              </div>
            ))}
          </div>

          <p className="text-foreground font-monument mt-4 text-center text-base">
            Each module = videos + case studies + project + live Q&A
          </p>
        </div>
      </div>
    </div>
  );
}
