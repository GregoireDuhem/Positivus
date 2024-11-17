import { motion } from "framer-motion";

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.6 } },
  };

  return (
    <>
      <div className="md:flex md:justify-between md:px-[100px] md:mt-[70px] pb-10">
        <div className="md:w-[40%] md:space-y-[35px]">
          {/* Heading animation */}
          <motion.div
            className="px-5 md:px-0 mt-10 text-h1-mobile md:text-h1 font-space font-medium text-Black"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Navigating the digital landscape for success
          </motion.div>

          {/* Illustration for mobile */}
          <img className="px-[35px] mt-[10px] md:mt-0 md:hidden" src="Illustration.png" alt="Illustration" />

          {/* Paragraph animation */}
          <motion.div
            className="text-p-mobile md:text-h4 px-5 md:px-0 text-Black font-space md:mr-10"
            initial="hidden"
            animate="visible"
            variants={paragraphVariants}
          >
            Our digital marketing agency helps businesses grow and succeed online through a range of services including
            SEO, PPC, social media marketing, and content creation.
          </motion.div>

          {/* Button animation */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <button
              className="flex items-center justify-center mt-10 md:mt-0 px-[35px] py-5 bg-Dark text-Grey hover:bg-white hover:text-Dark hover:outline hover:outline-1 hover:outline-Dark
            transition-all duration-300 w-[90%] font-space text-[20px] rounded-[14px]"
            >
              Book a consultation
            </button>
          </motion.div>
        </div>

        {/* Illustration for desktop */}
        <motion.img
          className="hidden md:block md:w-[40%] md:object-contain"
          src="Illustration.png"
          alt="Illustration"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </>
  );
}
