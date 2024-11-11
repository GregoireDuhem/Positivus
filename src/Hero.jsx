export default function Hero() {
  return (
    <>
      <div className="px-5 mt-10 text-h1-mobile md:text-h1 font-space font-medium text-Black">
        Navigating the digital landscape for success
      </div>
      <img className="px-[35px] mt-[10px]" src="Illustration.png" alt="Illustration" />
      <div className="text-p-mobile px-5 text-Black font-space">
        Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO,
        PPC, social media marketing, and content creation.
      </div>
      <div className="w-full flex justify-center">
        <button className="flex items-center justify-center mt-10 px-[35px] py-5 bg-Dark text-Grey w-[90%] font-space text-[20px] rounded-[14px]">
          Book a consultation
        </button>
      </div>
    </>
  );
}
