import Badge from "@/components/badge";

const mentors = [
  {
    image: "",
    name: "Shazul MK",
    title: "CEO, Fast Logistics",
  },
  {
    image: "",
    name: "PC Musthafa",
    title: "Global CEO, ID Fresh Foods IIM Alumni",
  },
  {
    image: "",
    name: "Abdul Nazer",
    title: "CO Founder & Co-Chairman, ID Fresh Foods",
  },
  {
    image: "",
    name: "Dr. Roy John",
    title:
      "Senior Consultant & Partner@ConSoul Associates LLP (Business Consultants) Ex Director, Holy Grace Academy of Management Study. IIMK Alumni",
  },
  {
    image: "",
    name: "Sajith Ansar",
    title: "Founder and CEO, Unlimits, Director at Idea Spice Design",
  },
  {
    image: "",
    name: "Rustum Usman",
    title: "Consulting Manager, Cognizant, IIMK Alumni",
  },
  {
    image: "",
    name: "Yasar Trico",
    title: "Managing Director, Trico Trading",
  },
  {
    image: "",
    name: "Riyas Hakkim",
    title: "India’s First Emotional Sales Coach",
  },
  {
    image: "",
    name: "Dr. PA Kabeer",
    title: "Managing Director, Dr. Bee & Almas Hospitals",
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
            text="Learn From the Best"
          />
          <h2 className="text-foreground font-monument text-center text-2xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Your Mentors at 1in1Million
          </h2>

          <div className="mt-4 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="bg-card border-border flex flex-col gap-3 rounded-lg border p-6 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-foreground font-monument text-lg">
                  {mentor.name}
                </h3>
                <p className="text-muted-foreground font-mont">
                  {mentor.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
