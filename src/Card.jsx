import { ArrowRight } from "lucide-react";

export default function Card({ Bg, text1, text2, textBg, img, buttonBg }) {
  const textColor = getTextColor(buttonBg);

  return (
    <div
      className={`h-[322px] ${Bg} space-y-[27px] rounded-[45px] p-[50px] outline outline-1 outline-Dark 
        drop-shadow-[0_5px_0_theme(colors.Dark)] md:relative`}
    >
      <div className="">
        <div className={`${textBg} font-space rounded-[7px] px-2 md:text-h3`}>{text1}</div>
        <div className={`${textBg} font-space inline-block rounded-[7px] px-2 md:text-h3`}>{text2}</div>
      </div>
      <div className="flex justify-between items-end ">
        <div className="md:absolute md:bottom-[50px] md:flex md:items-center md:space-x-4 group">
          <button className={`rounded-full ${buttonBg} p-2 group-hover:-rotate-45 transition-all duration-300 `}>
            <ArrowRight className={`${buttonBg === "bg-Grey" ? "text-Dark" : "text-Green"}`} />
          </button>
          <div className={`${textColor} text-h4 cursor-pointer hidden md:block hover:underline`}>Learn more</div>
        </div>
        <img className="md:absolute md:top-[30%] md:right-[50px]" src={img} alt={img} />
      </div>
    </div>
  );
}

function getTextColor(buttonBg) {
  switch (buttonBg) {
    case "bg-Grey":
      return "text-white";
    default:
      return "text-Black";
  }
}
