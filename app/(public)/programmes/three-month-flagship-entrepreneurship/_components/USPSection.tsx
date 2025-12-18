import Badge from "@/components/badge";
import {
  BookOpen,
  Calendar,
  FileText,
  Heart,
  Rocket,
  Users,
  Video,
} from "lucide-react";

const usps = [
  {
    icon: Rocket,
    title: "Learn from REAL Entrepreneurs",
    description:
      'Not "coaches". Not "gurus". Only founders who have built, scaled, and lived the journey.',
  },
  {
    icon: Video,
    title: "Cinematic, High-End Learning",
    description:
      "Kerala's best production team. Crystal-clear lessons. Engaging storytelling. Real workday documentation.",
  },
  {
    icon: Calendar,
    title: "Micro-Learning That Fits Your Life",
    description:
      "Only 30–40 minutes per day. No long lectures. No theory overload.",
  },
  {
    icon: FileText,
    title: "Practical Systems & SOPs",
    description:
      "Everything you learn can be applied instantly to your business with ready-to-use templates.",
  },
  {
    icon: Users,
    title: "Live Q&A With Experts",
    description:
      "Ask questions directly. Get clarity instantly from the entrepreneurs and professors.",
  },
  {
    icon: BookOpen,
    title: "Case Studies (Harvard Inspired)",
    description:
      "Real entrepreneurs' stories turned into structured business frameworks you can apply.",
  },
  {
    icon: Heart,
    title: "Values + Character Building",
    description:
      "Become the entrepreneur who succeeds — without losing integrity.",
  },
];

export function USPSection() {
  return (
    <div className="border-border flex w-full flex-col items-center justify-center border-b">
      <div className="flex items-center justify-center self-stretch px-4 py-12 md:px-24 md:py-16">
        <div className="flex w-full max-w-[900px] flex-col items-center justify-start gap-8 px-4 py-5 md:px-6">
          <Badge
            icon={
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L8.5 5.5L13 7L8.5 8.5L7 13L5.5 8.5L1 7L5.5 5.5L7 1Z"
                  fill="currentColor"
                />
              </svg>
            }
            text="What Makes Us Different"
          />
          <h2 className="text-foreground font-monument text-center text-2xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Our Unique <br />
            Selling Points
          </h2>

          <div className="mt-4 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            {usps.map((usp, index) => (
              <div
                key={index}
                className="bg-card border-border flex flex-col gap-3 rounded-lg border p-6 transition-shadow hover:shadow-lg"
              >
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
                  <usp.icon className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-foreground font-monument text-lg">
                  {usp.title}
                </h3>
                <p className="text-muted-foreground font-mont">
                  {usp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
