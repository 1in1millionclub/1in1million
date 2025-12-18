import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
export default function FooterSection() {
  return (
    <div className="flex w-full flex-col items-start justify-start py-10">
      <div className="flex h-auto flex-col items-stretch justify-between self-stretch pt-0 pr-0 pb-8 md:flex-row">
        <div className="flex h-auto flex-col items-start justify-start gap-8 p-4 md:p-8">
          <div className="flex items-center justify-start gap-3 self-stretch">
            <div className="font-mont text-center text-xl leading-4 font-semibold">
              {" "}
              <Image
                src="/1in1mLogoWhite.svg"
                alt="Next.js logo"
                width={80}
                height={20}
                priority
              />
            </div>
          </div>
          <div className="text-muted-foreground font-mont text-sm leading-[18px] font-medium">
            Be the One in a Million with Values.
          </div>

          <div className="flex items-start justify-start gap-4">
            <div className="relative h-6 w-6 overflow-hidden">
              <div className="absolute top-0 left-0 flex h-6 w-6 items-center justify-center">
                <FaInstagram />
              </div>
            </div>

            <div className="relative h-6 w-6 overflow-hidden">
              <div className="absolute top-0 left-0 flex h-6 w-6 items-center justify-center">
                <FaFacebook />
              </div>
            </div>

            <div className="relative h-6 w-6 overflow-hidden">
              <div className="absolute top-0 left-0 flex h-6 w-6 items-center justify-center">
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col flex-wrap items-start justify-start gap-6 self-stretch p-4 sm:flex-row sm:justify-between md:gap-8 md:p-8">
          {/* Product Column */}

          {/* Product Column */}
          {/* <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="self-stretch text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5 font-mont">
              Product
            </div>
            <div className="flex flex-col justify-end items-start gap-2">
              <div className="text-muted-foreground text-sm font-normal leading-5 font-mont cursor-pointer hover:text-[#37322F] transition-colors">
                Features
              </div>
              <div className="text-muted-foreground text-sm font-normal leading-5 font-mont cursor-pointer hover:text-[#37322F] transition-colors">
                Pricing
              </div>
              <div className="text-muted-foreground text-sm font-normal leading-5 font-mont cursor-pointer hover:text-[#37322F] transition-colors">
                Integrations
              </div>
              <div className="text-muted-foreground text-sm font-normal leading-5 font-mont cursor-pointer hover:text-[#37322F] transition-colors">
                Real-time Previews
              </div>
              <div className="text-muted-foreground text-sm font-normal leading-5 font-mont cursor-pointer hover:text-[#37322F] transition-colors">
                Multi-Agent Coding
              </div>
            </div>
          </div> */}

          {/* Company Column */}
          {/* <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5 font-mont">
              Company
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
              <div className="text-muted-foreground text-sm font-normal leading-5 font-mont cursor-pointer hover:text-[#37322F] transition-colors">
                About us
              </div>
              <div className="text-muted-foreground text-sm font-normal leading-5 font-mont cursor-pointer hover:text-[#37322F] transition-colors">
                Our team
              </div>
              <div className="text-muted-foreground text-sm font-normal leading-5 font-mont cursor-pointer hover:text-[#37322F] transition-colors">
                Careers
              </div>
              <div className="text-muted-foreground text-sm font-normal leading-5 font-mont cursor-pointer hover:text-[#37322F] transition-colors">
                Brand
              </div>
              <div className="text-muted-foreground text-sm font-normal leading-5 font-mont cursor-pointer hover:text-[#37322F] transition-colors">
                Contact
              </div>
            </div>
          </div> */}

          {/* Resources Column */}
          {/* <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5 font-mont">
              Resources
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="self-stretch text-muted-foreground text-sm font-normal leading-5 font-mont cursor-pointer hover:text-[#37322F] transition-colors">
                Terms of use
              </div>
              <div className="self-stretch text-muted-foreground text-sm font-normal leading-5 font-mont cursor-pointer hover:text-[#37322F] transition-colors">
                API Reference
              </div>
              <div className="self-stretch text-muted-foreground text-sm font-normal leading-5 font-mont cursor-pointer hover:text-[#37322F] transition-colors">
                Documentation
              </div>
              <div className="self-stretch text-muted-foreground text-sm font-normal leading-5 font-mont cursor-pointer hover:text-[#37322F] transition-colors">
                Community
              </div>
              <div className="self-stretch text-muted-foreground text-sm font-normal leading-5 font-mont cursor-pointer hover:text-[#37322F] transition-colors">
                Support
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Bottom Section with Pattern */}
      <div className="relative h-12 self-stretch overflow-hidden border-t border-b border-[rgba(55,50,47,0.5)]">
        <div className="absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden">
          <p className="text-muted-foreground w-full text-center text-xs">
            © 2025 1in1Million. All Rights Reserved
          </p>
          <div className="absolute inset-0 h-full w-full overflow-hidden">
            <div className="relative h-full w-full">
              {Array.from({ length: 300 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute h-4 w-full origin-top-left -rotate-45 outline-[0.5px] outline-offset-[-0.25px] outline-[rgba(55,50,47,0.3)]"
                  style={{
                    top: `${i * 16 - 120}px`,
                    left: "-100%",
                    width: "300%",
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
