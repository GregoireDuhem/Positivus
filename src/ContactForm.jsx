import { useState } from "react";

export default function ContactForm() {
  const [selectedOption, setSelectedOption] = useState("sayHi");

  return (
    <>
      <div className="mx-5 md:mx-[100px] bg-Grey py-10 md:pt-[60px] md:pb-[80px] rounded-[45px] font-space space-y-[36px] mt-10 relative">
        <div className="mx-10 md:mx-0 md:pl-[100px] flex justify-around md:justify-start md:space-x-5 md:w-1/2">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="contactType"
              value="sayHi"
              className="appearance-none"
              onChange={() => setSelectedOption("sayHi")}
            />
            <div className="relative w-7 h-7 outline outline-1 outline-Black rounded-full flex items-center justify-center mr-[15px]">
              {selectedOption === "sayHi" && <div className="w-4 h-4 bg-Green rounded-full "></div>}
            </div>
            <span>Say Hi</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="contactType"
              value="getQuote"
              className="appearance-none"
              onChange={() => setSelectedOption("getQuote")}
            />
            <div className="relative w-7 h-7 outline outline-1 outline-Black rounded-full flex items-center justify-center mr-[15px]">
              {selectedOption === "getQuote" && <div className="w-4 h-4 bg-Green rounded-full"></div>}
            </div>
            <span>Get a Quote</span>
          </label>
        </div>
        <div className="mx-[30px] md:mx-0 md:pl-[100px] py-[10px] space-y-5 md:w-1/2">
          <InputField label={"Name"} placeholder={"Name"} />
          <InputField label={"Email"} placeholder={"Email"} required />
          <InputField label={"Message"} placeholder={"Message"} required />
        </div>
        <div className="px-5 md:px-0 md:pl-[100px] mt-[30px] font-space md:w-1/2">
          <button
            className="flex items-center justify-center px-[35px] py-5 bg-Dark text-Grey hover:bg-transparent hover:text-Dark hover:outline hover:outline-1 hover:outline-Dark
           transition-all duration-300 w-full font-space text-[20px] rounded-[14px]"
          >
            Send Message
          </button>
        </div>
        <div className="hidden md:block absolute top-0 right-6 transform translate-x-1/2">
          <img className="w-[600px]" src="Form.png" alt="" />
        </div>
      </div>
      <div className="px-5 mt-[30px] font-space md:hidden">
        <button className="flex items-center justify-center px-[35px] py-5 bg-Dark text-Grey w-full font-space text-[20px] rounded-[14px]">
          Send Message
        </button>
      </div>
    </>
  );
}
function InputField({ label, type = "text", placeholder, required }) {
  return (
    <div className="space-y-[10px]">
      <div className="text-[14px]">
        {label}
        {required && "*"}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="rounded-[14px] bg-white outline outline-1 outline-Black px-[20px] py-[18px] w-full text-p-mobile"
      />
    </div>
  );
}
