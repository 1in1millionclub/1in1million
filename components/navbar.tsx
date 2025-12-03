import Image from "next/image";

export default function NavBar() {
  return (
    <div className="absolute top-5 left-0 z-20 flex h-12 w-full items-center justify-center px-6 sm:h-14 sm:px-8 md:h-16 md:px-12 lg:h-[84px] lg:px-0">
      <div className="absolute top-6 left-0 h-0 w-full border-t border-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_white] sm:top-7 md:top-8 lg:top-[42px]"></div>

      <div className="relative z-30 flex h-10 w-full max-w-[calc(100%-32px)] items-center justify-between overflow-hidden rounded-[50px] bg-[#F7F5F3] px-3 py-1.5 pr-2 shadow-[0px_0px_0px_2px_white] backdrop-blur-sm sm:h-11 sm:max-w-[calc(100%-48px)] sm:px-4 sm:py-2 sm:pr-3 md:h-12 md:max-w-[calc(100%-64px)] md:px-4 lg:w-[700px] lg:max-w-[700px]">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-start">
            <Image
              src="/1in1mLogo.svg"
              alt="1in1 Million"
              width={80}
              height={20}
              priority
            />
          </div>
          {/* <div className="pl-3 sm:pl-4 md:pl-5 lg:pl-5 flex justify-start items-start hidden sm:flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-4">
        <div className="flex justify-start items-center">
          <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans">
            Products
          </div>
        </div>
        <div className="flex justify-start items-center">
          <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans">
            Pricing
          </div>
        </div>
        <div className="flex justify-start items-center">
          <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans">
            Docs
          </div>
        </div>
      </div> */}
        </div>
        <div className="flex h-6 items-start justify-start gap-2 sm:h-7 sm:gap-3 md:h-8">
          {/* <div className="px-2 sm:px-3 md:px-[14px] py-1 sm:py-1.5 bg-white shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full flex justify-center items-center">
        <div className="flex flex-col justify-center text-[#37322F] text-xs md:text-[13px] font-medium leading-5 font-sans">
          Log in
        </div>
      </div> */}
        </div>
      </div>
    </div>
  );
}
