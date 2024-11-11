import { Plus } from "lucide-react";

export default function Step({ nb, title }) {
  return (
    <div className="mx-5 p-[30px] flex h-[98px] justify-between outline outline-1 outline-black rounded-[45px] font-space bg-Grey drop-shadow-[0_5px_0_theme(colors.Dark)]">
      <div className="flex items-center space-x-[33px]">
        <div className="text-[30px] font-medium">{nb}</div>
        <div className="text-h4-mobile font-medium">{title}</div>
      </div>
      <button className="outline outline-1 rounded-full p-2">
        <Plus className="w-5 h-5" />
      </button>
    </div>
  );
}
