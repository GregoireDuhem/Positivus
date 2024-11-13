import { Linkedin } from "lucide-react";

export default function Team({ img, name, role, experience }) {
  return (
    <div
      className="px-[40px] py-[35px] bg-white rounded-[45px] h-[294px] md:h-auto space-y-5 font-space text-Black
    outline outline-1 outline-black drop-shadow-[0_5px_0_theme(colors.Dark)]"
    >
      <div className="relative flex items-end space-x-5">
        <img src={img} alt={img} />
        <div>
          <div className="text-h4-mobile font-medium">{name}</div>
          <div className="text-p-mobile">{role}</div>
        </div>
        <button className="rounded-full p-2 bg-Black absolute top-0 right-0">
          <Linkedin className="text-Green" />
        </button>
      </div>
      <hr className="border-t-1 border-Black" />
      <div className="text-p-mobile">{experience}</div>
    </div>
  );
}
