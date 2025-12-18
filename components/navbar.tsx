import Image from "next/image";

export default function NavBar() {
  return (
    <div className="sticky top-5 left-0 z-20 flex h-12 w-full items-center justify-center px-6 sm:h-14 sm:px-8 md:h-16 md:px-12 lg:h-[84px] lg:px-0">
      <div className="absolute top-6 left-0 h-0 w-full border-t border-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_rgba(55,50,47,0.5)] sm:top-7 md:top-8 lg:top-[42px]"></div>

      <div className="bg-background relative z-30 flex h-10 w-full items-center justify-center gap-4 overflow-hidden rounded-[50px] px-3 py-1.5 pr-2 shadow-[0px_0px_0px_2px_rgba(55,50,47,0.5)] backdrop-blur-sm sm:h-11 sm:max-w-[calc(100%-48px)] sm:px-4 sm:py-2 sm:pr-3 md:h-12 md:max-w-[calc(100%-64px)] md:px-4 lg:w-[700px] lg:max-w-[700px]">
        <p className="text-primary text-right text-[10px] font-medium tracking-tight">
          Be the One in a Million <br />
          with Values.
        </p>
        <div className="bg-foreground h-full w-px"></div>
        <Image
          src="/1in1mLogoWhite.svg"
          alt="1in1 Million"
          width={80}
          height={20}
          priority
        />
      </div>
    </div>
  );
}
