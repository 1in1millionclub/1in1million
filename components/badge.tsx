export default function Badge({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center justify-start gap-2 overflow-hidden rounded-[90px] border border-[rgba(2,6,23,0.08)] bg-white px-3.5 py-1.5 shadow-xs">
      <div className="relative flex h-3.5 w-3.5 items-center justify-center overflow-hidden">
        {icon}
      </div>
      <div className="flex flex-col justify-center text-center font-sans text-xs leading-3 font-medium text-[#37322F]">
        {text}
      </div>
    </div>
  );
}
