import { ArrowRight } from "lucide-react";

export default function SlideCard() {
  return (
    <div className="mt-10 md:mt-[80px] gap-5 px-5 md:px-[100px] w-full flex overflow-x-auto">
      <div
        className="h-[252px] md:h-auto w-[350px] md:w-full flex-shrink-0  md:flex rounded-[45px] bg-Dark font-space 
      py-[42px] px-[50px] md:px-[60px] md:py-[70px] md:space-x-16"
      >
        <div className="space-y-5">
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

        <div className="border-l border-white h-full mx-10 hidden md:block"></div>

        <div className="space-y-5 hidden md:block">
          <div className="text-white text-p-mobile">
            For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key
            keywords and a 200% increase in organic traffic.
          </div>
          <div className="flex items-center group text-Green text-[20px] cursor-pointer">
            Learn more
            <button className="ml-2 group-hover:-rotate-45 transition-all duration-300">
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className="border-l border-white h-full mx-10 hidden md:block"></div>

        <div className="space-y-5 hidden md:block">
          <div className="text-white text-p-mobile">
            For a national retail chain, we created a social media marketing campaign that increased followers by 25%
            and generated a 20% increase in online sales.
          </div>
          <div className="flex items-center group text-Green text-[20px] cursor-pointer">
            Learn more
            <button className="ml-2 group-hover:-rotate-45 transition-all duration-300">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="h-[252px] w-[350px] flex-shrink-0 rounded-[45px] bg-Dark font-space py-[42px] px-[50px] space-y-5 md:hidden">
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
