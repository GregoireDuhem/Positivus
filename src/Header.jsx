import { Menu } from "lucide-react";

export default function Header() {
  return (
    <div className="pt-[30px] md:pt-[60px] flex px-5 md:px-[100px] items-center justify-between">
      <div className="flex items-center">
        <img className="h-[23px] md:w-[36px] md:h-auto mr-2" src="Icon.png" alt="Icon" />
        <img className="h-[19px] md:w-[171px] md:h-auto" src="Positivus.png" alt="Positivus" />
      </div>
      <div className="md:hidden">
        <Menu />
      </div>

      {/* For desktop, show full navigation */}
      <div className="hidden md:flex gap-10 items-center">
        <a href="#">About us</a>
        <a href="#">Services</a>
        <a href="#">Use Cases</a>
        <a href="#">Pricing</a>
        <a href="#">Blog</a>
        <button className="outline outline-1 outline-Dark rounded-[14px] py-[20px] px-[35px] ">Request a quote</button>
      </div>
    </div>
  );
}
