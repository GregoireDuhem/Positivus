import { ArrowRight } from "lucide-react";

export default function Card({ Bg, text1, text2, textBg, img, buttonBg }) {
  return (
    <div
      className={`h-[322px] ${Bg} space-y-[27px] rounded-[45px] p-[50px] outline outline-1 outline-Dark 
        drop-shadow-[0_5px_0_theme(colors.Dark)]`}
    >
      <div className="">
        <div className={`${textBg} font-space  rounded-[7px] px-2`}>{text1}</div>
        <div className={`${textBg} font-space inline-block rounded-[7px] px-2`}>{text2}</div>
      </div>
      <div className="flex justify-between items-end">
        <button className={`rounded-full ${buttonBg} p-2 hover:-rotate-45 transition-all duration-300`}>
          <ArrowRight className={`${buttonBg === "bg-Grey" ? "text-Dark" : "text-Green"}`} />
        </button>
        <img src={img} alt={img} />
      </div>
    </div>
  );
}
