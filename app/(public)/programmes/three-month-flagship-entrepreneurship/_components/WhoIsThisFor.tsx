import Badge from "@/components/badge";
import { Check, Target } from "lucide-react";

const profiles = [
  "An aspiring entrepreneur",
  "A student planning to build a business",
  "A junior working professional preparing to start something",
  "An early-stage founder stuck without direction",
];

const wants = [
  "Clarity",
  "Confidence",
  "Mentorship",
  "Systems",
  "Execution discipline",
];

export function WhoIsThisFor() {
  return (
    <div className="border-border flex w-full flex-col items-center justify-center border-b">
      <div className="flex items-center justify-center self-stretch px-4 py-12 md:px-24 md:py-16">
        <div className="flex w-full max-w-[800px] flex-col items-center justify-start gap-8 px-4 py-5 md:px-6">
          <Badge
            icon={<Target className="h-3.5 w-3.5" />}
            text="Who This Is For"
          />
          <h2 className="text-foreground font-display text-center text-2xl leading-tight font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Is this community right for you?
          </h2>

          <div className="mt-4 grid w-full grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-card border-border rounded-lg border p-6">
              <h3 className="text-foreground font-body mb-4 text-lg font-semibold">
                If you are:
              </h3>
              <ul className="space-y-3">
                {profiles.map((profile, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span className="text-muted-foreground font-body">
                      {profile}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border-border rounded-lg border p-6">
              <h3 className="text-foreground font-body mb-4 text-lg font-semibold">
                And you want:
              </h3>
              <ul className="space-y-3">
                {wants.map((want, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span className="text-muted-foreground font-body">
                      {want}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-foreground font-body mt-4 text-center text-xl font-semibold">
            THIS COMMUNITY IS FOR YOU.
          </p>
        </div>
      </div>
    </div>
  );
}
