import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
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
            <a
              href="https://www.instagram.com/1in1m.club/"
              className="flex size-6 items-center justify-center"
            >
              <FaInstagram />
            </a>
          </div>
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
