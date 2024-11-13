import { ArrowLeft, ArrowRight, Sparkle } from "lucide-react";

export default function Testimonial() {
  return (
    <div className="mt-[40px] md:mt-[80px] mx-5 md:mx-[100px] bg-Dark rounded-[45px] pt-[30px] md:pt-[84px] px-[30px] pb-[60px] space-y-[60px] md:space-y-[124px] font-space">
      <div className="md:flex md:space-x-[50px]">
        <div className="space-y-[21px] md:w-[50%] md:flex md:flex-col md:mx-auto">
          <Card />
        </div>
        <div className="space-y-[21px] md:w-[50%] md:flex-col md:mx-auto hidden md:block">
          <Card />
        </div>
        <div className="space-y-[21px] md:w-[50%] md:flex-col md:mx-auto hidden md:block">
          <Card />
        </div>
      </div>

      <div className="flex justify-between text-center items-center md:justify-evenly md:mx-[120px]">
        <ArrowLeft className="text-white w-8 h-8 cursor-pointer" />
        <div className="text-white flex space-x-[10px]">
          <Sparkle className="text-Green fill-Green" />
          <Sparkle />
          <Sparkle />
          <Sparkle />
          <Sparkle />
        </div>
        <ArrowRight className="text-white w-8 h-8 cursor-pointer" />
      </div>
    </div>
  );
}

function Card() {
  return (
    <>
      <div className="relative outline outline-1 outline-Green rounded-[45px] p-6 ">
        <div className="text-p-mobile text-white">
          "We have been working with Positivus for the past year and have seen a significant increase in website traffic
          and leads as a result of their efforts. The team is professional, responsive, and truly cares about the
          success of our business. We highly recommend Positivus to any company looking to grow their online presence."
        </div>
        <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[15px] border-r-[15px] border-t-[15px] border-l-transparent border-r-transparent border-t-Green"></div>
      </div>
      <div className="text-white ml-10 md:ml-20 text-p-mobile md:flex md:flex-col md:text-start md:selft-start">
        <div className="text-Green">John Smith</div>
        <div>Marketing Director at XYZ Corp</div>
      </div>
    </>
  );
}
