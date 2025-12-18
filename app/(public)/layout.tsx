import NavBar from "@/components/navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background relative flex min-h-screen w-full flex-col items-center justify-start overflow-x-hidden">
      <div className="relative flex w-full flex-col items-center justify-start">
        <div className="relative flex min-h-screen w-full max-w-none flex-col items-start justify-start px-4 sm:px-6 md:px-8 lg:w-[1060px] lg:max-w-[1060px] lg:px-0">
          <div className="absolute top-0 left-4 z-0 h-full w-px bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_rgba(55,50,47,0.5)] sm:left-6 md:left-8 lg:left-0"></div>
          <div className="absolute top-0 right-4 z-0 h-full w-px bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_rgba(55,50,47,0.5)] sm:right-6 md:right-8 lg:right-0"></div>
          <div className="relative z-10 flex flex-col items-center justify-center gap-4 self-stretch overflow-hidden border-b border-[rgba(55,50,47,0.06)] pt-[9px] sm:gap-6 md:gap-8 lg:gap-[66px]">
            <NavBar />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
