import { BackgroundBeams } from "@/components/background-beams";
import Image from "next/image";
import { CTAForm } from "./CTAForm";

const mentors = [
  {
    image: "/testimonial-avatar-1.jpg",
    name: "Shazul MK",
    title: "CEO, Fast Logistics",
  },
  {
    image: "/testimonial-avatar-1.jpg",
    name: "PC Musthafa",
    title: "Global CEO, ID Fresh Foods IIM Alumni",
  },
  {
    image: "/testimonial-avatar-1.jpg",
    name: "Abdul Nazer",
    title: "CO Founder & Co-Chairman, ID Fresh Foods",
  },
  {
    image: "/testimonial-avatar-1.jpg",
    name: "Dr. Roy John",
    title:
      "Senior Consultant & Partner@ConSoul Associates LLP (Business Consultants) Ex Director, Holy Grace Academy of Management Study. IIMK Alumni",
  },
  {
    image: "/testimonial-avatar-1.jpg",
    name: "Sajith Ansar",
    title: "Founder and CEO, Unlimits, Director at Idea Spice Design",
  },
  {
    image: "/testimonial-avatar-1.jpg",
    name: "Rustum Usman",
    title: "Consulting Manager, Cognizant, IIMK Alumni",
  },
  {
    image: "/testimonial-avatar-1.jpg",
    name: "Yasar Trico",
    title: "Managing Director, Trico Trading",
  },
  {
    image: "/testimonial-avatar-1.jpg",
    name: "Riyas Hakkim",
    title: "India’s First Emotional Sales Coach",
  },
  {
    image: "/testimonial-avatar-1.jpg",
    name: "Dr. PA Kabeer",
    title: "Managing Director, Dr. Bee & Almas Hospitals",
  },
];
export function HeroSection() {
  return (
    <>
      <div className="relative flex min-h-dvh w-full flex-col justify-center gap-3 px-6 py-20 sm:gap-4 md:items-center md:gap-5 lg:gap-6">
        <div className="flex flex-col items-start justify-center gap-4 sm:gap-5 md:items-center md:gap-6 lg:gap-8">
          <h1 className="text-foreground font-monument w-full max-w-[800px] text-left text-3xl font-normal tracking-wide sm:text-center sm:text-4xl md:px-0 md:text-5xl lg:text-7xl">
            Ever thought which college to go to
            <br />
            <span className="text-4xl font-bold text-[#FE6168]">
              Learn Business?
            </span>
          </h1>

          <div className="text-muted-foreground font-mont flex w-full max-w-lg flex-col justify-center text-sm leading-[1.4] font-medium sm:text-base sm:leading-[1.45] md:text-center md:text-xl md:leading-normal lg:text-lg lg:leading-7">
            Well, you’re at the right place.
          </div>
        </div>
        {/* <div className="relative mt-5 rounded-full">
          <div className="relative z-10 flex h-12 items-center justify-center overflow-hidden rounded-full bg-[#FE6168] px-6 py-2 sm:h-11 sm:px-8 sm:py-1.5 md:h-12 md:px-10 lg:px-12">
            <div className="text-foreground font-monument flex flex-col justify-center text-sm leading-5 font-medium sm:text-base md:text-[15px]">
              Know More
            </div>
            <a
              href="#problem-section"
              className="absolute inset-0 z-10"
              aria-label="Know More"
            />
          </div>
          <GlowEffect
            colors={["#b00222", "#FE6168"]}
            mode="rotate"
            blur="medium"
            className="rounded-full"
          />
        </div> */}
        {/* <div className="relative mt-1 rounded-full">
          <div className="bg-foreground relative z-10 flex h-12 items-center justify-center overflow-hidden rounded-full px-6 py-2 sm:h-11 sm:px-8 sm:py-1.5 md:h-12 md:px-10 lg:px-12">
            <div className="text-primary-foreground font-monument flex justify-center gap-2 text-sm leading-5 font-medium sm:text-base md:text-[15px]">
              Program Brochure <DownloadCloud />
            </div>
            <Link
              href="/programmes/three-month-flagship-entrepreneurship"
              className="absolute inset-0 z-10"
            />
          </div>
        </div> */}
        <BackgroundBeams className="-top-[85px] h-[calc(100%+85px)]" />
      </div>
      <div className="border-border flex min-h-dvh w-full flex-col items-center justify-center border-t px-4 py-12 md:px-24 md:py-16">
        <h2 className="text-foreground font-monument w-full max-w-[800px] text-left text-3xl font-normal tracking-wide sm:text-center sm:text-4xl md:px-0 md:text-5xl lg:text-7xl">
          But who will
          <br />
          <span className="font-bold text-[#FE6168]">teach you?</span>
        </h2>
      </div>
      <div className="border-border flex min-h-dvh w-full flex-col items-center justify-center border-t px-4 py-12 md:px-24 md:py-16">
        <h2 className="text-foreground font-monument w-full max-w-[800px] text-left text-3xl font-normal tracking-wide sm:text-center sm:text-4xl md:px-0 md:text-5xl lg:text-7xl">
          Real Pro Business Owners
          <br />
          <span className="font-bold text-[#FE6168]">& not from TextBooks</span>
        </h2>
      </div>
      <div className="border-border flex min-h-dvh w-full flex-col items-center justify-center border-t px-4 py-20 md:px-24 md:py-16">
        <h2 className="text-foreground font-monument w-full max-w-[800px] text-left text-3xl font-normal tracking-wide sm:text-center sm:text-4xl md:px-0 md:text-5xl lg:text-7xl">
          by the way,{" "}
          <span className="font-bold text-[#FE6168]">
            Have a look at our teachers
          </span>
        </h2>
        <div className="">
          <div className="mt-4 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="bg-card border-border flex flex-col gap-3 rounded-3xl border p-6 transition-shadow hover:shadow-lg"
              >
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  width={100}
                  height={100}
                  className="w-full rounded-2xl"
                />
                <h3 className="text-foreground font-monument mt-2 text-xl font-semibold">
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
      <div className="border-border flex min-h-dvh w-full flex-col items-center justify-center gap-10 border-t px-4 py-20 md:px-24 md:py-16">
        <h2 className="text-foreground font-monument w-full max-w-[800px] text-left text-3xl font-normal tracking-wide sm:text-center sm:text-4xl md:px-0 md:text-5xl lg:text-7xl">
          Admissions are not open yet{" "}
          <span className="font-bold text-[#FE6168]">
            You can pre book here
          </span>
        </h2>
        <CTAForm />
      </div>
    </>
  );
}
