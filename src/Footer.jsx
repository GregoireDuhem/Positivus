import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <div className="mt-[90px] bg-Dark pt-[50px] md:pt-[55px] md:pb-[50px] pb-[30px] px-5 md:px-[60px] md:mx-[100px] md:rounded-t-[45px] space-y-[37px] font-space relative">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-[37px] md:space-y-0">
        <div className="flex items-center justify-center cursor-pointer md:justify-start">
          <img className="h-[23px] mr-2" src="IconWhite.png" alt="Icon" />
          <img className="h-[19px]" src="PositivusWhite.png" alt="Positivus" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-[15px] md:space-y-0 md:space-x-[40px] text-white text-p-mobile">
          <div className="md:hover:underline md:cursor-pointer">About us</div>
          <div className="md:hover:underline md:cursor-pointer">Services</div>
          <div className="md:hover:underline md:cursor-pointer">Use Cases</div>
          <div className="md:hover:underline md:cursor-pointer">Pricing</div>
        </div>
        <div className="flex justify-center space-x-5">
          <div className="rounded-full p-2 bg-white cursor-pointer group hover:bg-Black transition-all duration-300">
            <Linkedin className="group-hover:stroke-Green" />
          </div>
          <div className="rounded-full p-2 bg-white cursor-pointer">
            <Facebook />
          </div>
          <div className="rounded-full p-2 bg-white cursor-pointer">
            <Twitter />
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-between">
        <div className="space-y-[37px] md:space-y-[27px] md:w-[30%]">
          <div className="flex justify-center md:justify-start">
            <div className="text-Black bg-Green inline-block px-[7px] rounded-[7px] md:text-h4">Contact us:</div>
          </div>

          <div
            className="flex flex-col items-center md:items-start justify-center md:justify-start text-center md:text-start text-white 
        space-y-[15px] md:space-y-[20px] text-p-mobile md:text-p"
          >
            <div>Email: info@positivus.com</div>
            <div>Phone: 555-567-8901</div>
            <div>Address: 1234 Main St Moonstone City, Stardust State 12345</div>
          </div>
        </div>
        {/*  */}
        <div
          className="bg-[#292A32] w-full py-[30px] md:py-[58px] px-[30px] md:px-[40px] rounded-[14px] space-y-[22px] font-space 
      md:w-1/2 md:right-[60px] md:space-y-0 md:space-x-5 hidden md:flex md:items-center"
        >
          <input
            type="email"
            placeholder="Email"
            className="rounded-[14px] bg-[#292A32] outline outline-1 outline-white text-white px-[20px] py-[18px] w-full text-p-mobile md:h-[68px]"
          />
          <button className="flex items-center justify-center px-[35px] py-5 bg-Green text-Dark w-full text-[20px] rounded-[14px] md:h-[68px]">
            Subscribe to news
          </button>
        </div>
      </div>

      <div
        className="bg-[#292A32] w-full py-[30px] md:py-[58px] px-[30px] md:px-[40px] rounded-[14px] space-y-[22px] font-space 
      md:w-1/2 md:right-[60px] md:space-y-0 md:space-x-5 md:hidden"
      >
        <input
          type="email"
          placeholder="Email"
          className="rounded-[14px] bg-[#292A32] outline outline-1 outline-white text-white px-[20px] py-[18px] w-full text-p-mobile"
        />
        <button className="flex items-center justify-center px-[35px] py-5 bg-Green text-Dark w-full  text-[20px] rounded-[14px]">
          Subscribe to news
        </button>
      </div>

      <div className="flex justify-center space-x-5 md:hidden">
        <div className="rounded-full p-2 bg-white cursor-pointer group hover:bg-Black transition-all duration-300">
          <Linkedin className="group-hover:stroke-Green" />
        </div>
        <div className="rounded-full p-2 bg-white cursor-pointer">
          <Facebook />
        </div>
        <div className="rounded-full p-2 bg-white cursor-pointer">
          <Twitter />
        </div>
      </div>

      <hr className="border-t-1 border-white" />

      <div className="flex flex-col md:flex-row space-y-[15px] md:space-y-0 md:space-x-[40px] items-center justify-center md:justify-start text-white text-p-mobile">
        <div>© 2023 Positivus. All rights reserved</div>
        <div className="md:hover:underline md:cursor-pointer">Privacy Policy</div>
      </div>
    </div>
  );
}
