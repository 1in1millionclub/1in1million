import { Building2 } from "lucide-react";
import Badge from "../badge";

export default function AboutCompany() {
  return (
    <div className="flex w-full flex-col items-center justify-center border-t border-b border-[rgba(55,50,47,0.12)]">
      <div className="flex items-center justify-center gap-6 self-stretch border-b border-[rgba(55,50,47,0.12)] px-4 py-8 sm:px-6 sm:py-12 md:px-24 md:py-16">
        <div className="flex w-full max-w-[586px] flex-col items-center justify-start gap-3 overflow-hidden rounded-lg px-4 py-4 sm:gap-4 sm:px-6 sm:py-5">
          <Badge icon={<Building2 />} text="About us" />
          <div className="flex w-full max-w-[472.55px] flex-col justify-center text-center font-serif text-xl leading-tight font-medium text-[#49423D] sm:text-2xl md:text-3xl md:leading-[60px] lg:text-5xl">
            About the Company
          </div>
          <div className="self-stretch text-center font-sans text-sm leading-6 font-normal text-[#605A57] sm:text-base sm:leading-7">
            One in One Million is an entrepreneurial learning and community
            platform built to redefine how entrepreneurship is learned not
            through textbooks, but through real entrepreneurs who’d build extra
            ordinary businesses, industry leaders, and experts from leading
            business schools who have built thriving companies from the ground
            up.
          </div>
        </div>
      </div>

      {/* Logo Grid */}
      <div className="flex items-start justify-center self-stretch border-b-0 border-[rgba(55,50,47,0.12)]">
        <div className="relative w-4 self-stretch overflow-hidden sm:w-6 md:w-8 lg:w-12">
          {/* Left decorative pattern */}
          <div className="absolute top-[-120px] -left-10 flex w-[120px] flex-col items-start justify-start sm:left-[-50px] sm:w-[140px] md:left-[-58px] md:w-[162px]">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="h-3 origin-top-left -rotate-45 self-stretch outline-[0.5px] outline-offset-[-0.25px] outline-[rgba(3,7,18,0.08)] sm:h-4"
              />
            ))}
          </div>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-0 border-r border-l border-[rgba(55,50,47,0.12)] sm:grid-cols-2 md:grid-cols-2">
          <div className="border-b p-4 font-sans text-sm leading-6 font-normal text-[#605A57] sm:border-r sm:border-b-0 sm:text-base sm:leading-7">
            Our vision is to build extraordinary youth who uphold values and
            ethics in every aspect of life, creating a new generation of
            entrepreneurs who succeed without compromise.
          </div>
          <div className="p-4 font-sans text-sm leading-6 font-normal text-[#605A57] sm:text-base sm:leading-7">
            We are bridging the gap between academic brilliance and real-world
            business experience, empowering learners to become founders who know
            how to execute, scale, and sustain with principle and purpose all
            delivered with the best cinematic production and storytelling
            quality ever seen in Kerala, at a scale no one has done before.
          </div>
        </div>

        <div className="relative w-4 self-stretch overflow-hidden sm:w-6 md:w-8 lg:w-12">
          <div className="absolute top-[-120px] -left-10 flex w-[120px] flex-col items-start justify-start sm:left-[-50px] sm:w-[140px] md:left-[-58px] md:w-[162px]">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="h-3 origin-top-left -rotate-45 self-stretch outline-[0.5px] outline-offset-[-0.25px] outline-[rgba(3,7,18,0.08)] sm:h-4"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
