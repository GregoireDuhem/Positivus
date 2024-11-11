import { ArrowLeft, ArrowRight, Sparkle } from "lucide-react";

export default function Testimonial() {
  return (
    <div className="mt-[40px] mx-5 bg-Dark rounded-[45px] pt-[30px] px-[30px] pb-[60px] space-y-[60px] font-space">
      <div className="space-y-[21px]">
        <div className="relative outline outline-1 outline-Green rounded-[45px] p-6">
          <div className="text-p-mobile text-white">
            "We have been working with Positivus for the past year and have seen a significant increase in website
            traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about
            the success of our business. We highly recommend Positivus to any company looking to grow their online
            presence."
          </div>
          <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[15px] border-r-[15px] border-t-[15px] border-l-transparent border-r-transparent border-t-Green"></div>
        </div>

        <div className="text-white ml-10 text-p-mobile">
          <div className="text-Green">John Smith</div>
          <div>Marketing Director at XYZ Corp</div>
        </div>
      </div>

      <div className="flex justify-between text-center">
        <ArrowLeft className="text-white w-8 h-8" />
        <div className="text-white flex space-x-[10px]">
          <Sparkle className="text-Green fill-Green" />
          <Sparkle />
          <Sparkle />
          <Sparkle />
          <Sparkle />
        </div>
        <ArrowRight className="text-white w-8 h-8" />
      </div>
    </div>
  );
}
