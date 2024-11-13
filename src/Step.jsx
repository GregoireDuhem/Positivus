import { Plus } from "lucide-react";

export default function Step({ nb, title }) {
  return (
    <div
      className="mx-5 md:mx-[100px] p-[30px] flex h-[98px] justify-between outline outline-1 outline-black rounded-[45px] font-space
     bg-Grey drop-shadow-[0_5px_0_theme(colors.Dark)] items-center"
    >
      <div className="flex items-center space-x-[33px]">
        <div className="text-[30px] md:text-h1 font-medium">{nb}</div>
        <div className="text-h4-mobile md:text-h3 font-medium">{title}</div>
      </div>
      <button className="outline outline-1 rounded-full p-1 w-[30px] h-[30px] md:w-[50px] md:h-[50px] flex items-center justify-center">
        <Plus className="w-6 h-6 md:w-8 md:h-8" />
      </button>
    </div>
  );
}
