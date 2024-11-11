import { ArrowRight } from "lucide-react";

export default function SlideCard() {
  return (
    <div className="mt-10 gap-5 px-5 w-full flex overflow-x-auto">
      <div className="h-[252px] w-[350px] flex-shrink-0 rounded-[45px] bg-Dark font-space py-[42px] px-[50px] space-y-5">
        <div className="text-white text-p-mobile">
          For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website
          traffic and a 25% increase in sales.
        </div>
        <div className="flex items-center group text-Green text-[20px] cursor-pointer">
          Learn more
          <button className="ml-2 group-hover:-rotate-45 transition-all duration-300">
            <ArrowRight />
          </button>
        </div>
      </div>
      {/*  */}
      <div className="h-[252px] w-[350px] flex-shrink-0 rounded-[45px] bg-Dark font-space py-[42px] px-[50px] space-y-5">
        <div className="text-white text-p-mobile">
          For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website
          traffic and a 25% increase in sales.
        </div>
        <div className="flex items-center group text-Green text-[20px] cursor-pointer">
          Learn more
          <button className="ml-2 group-hover:-rotate-45 transition-all duration-300">
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
