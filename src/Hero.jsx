export default function Hero() {
  return (
    <>
      <div className="md:flex md:justify-between md:px-[100px] md:mt-[70px]">
        <div className="md:w-[40%] md:space-y-[35px]">
          <div className="px-5 md:px-0 mt-10  text-h1-mobile md:text-h1 font-space font-medium text-Black ">
            Navigating the digital landscape for success
          </div>
          <img className="px-[35px] mt-[10px] md:mt-0 md:hidden" src="Illustration.png" alt="Illustration" />
          <div className="text-p-mobile md:text-h4 px-5 md:px-0 text-Black font-space md:mr-10">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including
            SEO, PPC, social media marketing, and content creation.
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <button className="flex items-center justify-center mt-10 md:mt-0 px-[35px] py-5 bg-Dark text-Grey w-[90%] font-space text-[20px] rounded-[14px]">
              Book a consultation
            </button>
          </div>
        </div>
        <img className="hidden md:block md:w-[40%] md:object-contain" src="Illustration.png" alt="Illustration" />
      </div>
    </>
  );
}
